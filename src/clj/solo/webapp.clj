(ns solo.webapp
  "A web application.

  The application may be deployed into a Servlet-container as a WAR or
  it may be run as a stand-alone Java application.

  When run in a container life-cycle functions `init`/`destroy` will
  be called for start-up/shut-down. In this case `solo.core` is used
  to access the log4j API locally. Usually log4j JAR will be part of
  the JEE _host-application_ (EAR-`/lib`).

  When run as a stand-alone app `-main` is the main entry point. In
  this case the calls to `solo.core` can be delegated to a remotely
  running nREPL-server which then calls `solo.core` for accessing the
  log4j API."
  
  (:gen-class)
  (:require [solo.nrepl :as nrepl]
            [solo.jetty :as jetty]
            [solo.swank :as swank]
            [solo.web :as web]
            [ring.util.response :as response]
            [robert.hooke :as hooke]
            [clojure.tools.cli :refer [parse-opts]]))

;; ring.util.response/resource-data does not know how to handle Apache
;; VFS URLs which we find in JBoss/Wildfly.

(defmethod response/resource-data :vfs
  [^java.net.URL url]
  (let [conn (.openConnection url)]
    {:content (.getInputStream conn)
     :content-length (@#'response/connection-content-length conn)
     :last-modified (@#'response/connection-last-modified conn)}))

(def app
  "An alias for `solo.web/app`."

  web/app)

(def nrepl-server
  "Atom that holds an nREPL-server (see `init`)."

  (atom nil))

(defn init
  "Initialize Servlet. Synchronously starts nREPL server and sets
  `nrepl-server` atom. This method should not throw an exception if
  the nREPL server cannot start. This may happen, when the port is
  already opened. So we will just keep on going in this case."

  []
  (try 
    (reset! nrepl-server
            (nrepl/start-server :port 7888))
    (catch Throwable t
      (.println System/err t))))

(defn destroy
  "Set `nrepl-server` atom to `nil` and then try to `.close` the
  running server. If this fails, `nrepl-server` atom will still be
  `nil` so that an `init` will try to start a new nREPL server. Hope
  this makes sense in most cases."
  
  []
  (when-let [server @nrepl-server]
    (reset! nrepl-server nil)
    (.close server)))

;; ---------------------------- main ---------------------------------

(defn remote-wrapper
  "Returns a function that delegates calls to an nREPL-server.

  On invocation of the returned function `conn-fn` is (repeatedly)
  used as a factory for an nREPL connection. `solo.nrepl/remote-eval`
  is then used to evaluate the invocation of `(apply @fn-var args)` on
  the remote server. Returns the result or throws exception."

  [conn-fn fn-var]
  (fn [_ & args]
    (nrepl/remote-eval
     (conn-fn)
     (format "(apply %s/%s [%s])"
             (-> fn-var meta :ns) (-> fn-var meta :name)
             (apply pr-str args)))))

(defn parse-host:port
  "Parses string argument `[<host>:]<port>`. Returns map with `:host`
  and `:port` for non-nil key-values (plays well with `{:keys [port
  host] :or [host <host-default> port <port-default>]}`
  destructuring)."

  [host:port]
  (let [[_ host port] (re-matches #"([^:]+)??:?([0-9]+)" host:port)
        res (if host {:host host} {})]
    (if port (assoc res :port (Integer/parseInt port)) res)))

(def cli-options
  "CLI options."
  
  [["-r" "--remote-core [<host>:]<port>" "intercept/delegate calls to solo.core to remote nREPL server)"
    :parse-fn #(parse-host:port %)]
   ["-n" "--nrepl [<host>:]<port>" "start nREPL server on <host>:<port> (<host> defaults to \"0.0.0.0\")"
    :parse-fn #(parse-host:port %)]
   ["-j" "--jetty [<host>:]<port>" "start Jetty server on <host>:<port>"
    :parse-fn #(parse-host:port %)]
   ["-s" "--swank [<host>:]<port>" "start Swank server on <host>:<port>"
    :parse-fn #(parse-host:port %)]])

(defn usage
  "Prints usage info and `(System/exit 1)` exits the JVM."

  [msg summary]
  (.println System/out (format "USAGE: [options]\n%s\n%s" msg summary))
  (System/exit 1))

(defn -main
  "Starts a Jetty server (and optionally nREPL & Swank) with
  `solo.web/app`."

  [& args]
  (let [{:keys [errors options arguments summary] :as opt} (parse-opts args cli-options)
        _ (when errors (usage errors summary))
        {:keys [remote-core nrepl jetty swank]} options
        
        {jetty-port :port jetty-host :host :or {jetty-host "0.0.0.0"}} jetty
        _ (when-not jetty-port (usage "Invalid Jetty option" summary))
        
        {nrepl-port :port nrepl-host :host :or {nrepl-host "0.0.0.0"}} nrepl
        _ (when (and nrepl (not nrepl-port)) (usage "Invalid nREPL option" summary))
        
        {swank-port :port swank-host :host :or {swank-host "0.0.0.0"}} swank
        _ (when (and swank (not swank-port)) (usage "Invalid Swank option" summary))
        
        {remote-core-port :port remote-core-host :host :or {remote-core-host "127.0.0.1"}} remote-core
        _ (when (and remote-core (not remote-core-port)) (usage "Invalid remote-core option" summary))

        _ (when (seq arguments) (usage (str "Unexpected arguments" arguments) summary))
        
        conn-fn #(nrepl/get-connection {:port remote-core-port :host remote-core-host})]
    
    (when remote-core
      (hooke/add-hook #'solo.core/get-logger
                      (remote-wrapper conn-fn #'solo.core/get-logger))
      (hooke/add-hook #'solo.core/set-log-level!
                      (remote-wrapper conn-fn #'solo.core/set-log-level!))
      (hooke/add-hook #'solo.core/get-current-loggers
                      (remote-wrapper conn-fn #'solo.core/get-current-loggers)))
    
    (when nrepl-port (nrepl/start-server :port nrepl-port :host nrepl-host))
    (when swank-port (swank/start-server :port swank-port :host swank-host))

    (jetty/start-server :port jetty-port :host jetty-host)
    
    (.println System/out "CTRL-C to quit...")))
