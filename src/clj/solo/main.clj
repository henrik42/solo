(ns solo.main
  "A Jetty-based stand-alone web-application (serves `solo.web.spa/app`).

  Use it for testing when you don't need the host-application that
  you're usually targeting with _Solo_ (note that you'll have to
  supply log4j JAR which usually comes with the host-application).

  The second use-case is connecting to a remote _Solo_ via nREPL and
  delegating/routing calls to `solo.core` to the remote site. The
  remote site can be a _Solo_ _module_ (possibly running in a JEE
  app-server) that runs the nREPL server but does not supply a
  web-interface by itself."
  
  (:gen-class)
  (:require [solo.nrepl :as nrepl]
            [solo.jetty :as jetty]
            [solo.swank :as swank]
            [robert.hooke :as hooke]
            [clojure.tools.cli :refer [parse-opts]]))

(defn remote-wrapper
  "Returns a function that delegates calls to an nREPL-server.

  On invocation of the returned function `conn-fn` is (repeatedly)
  used as a factory for an nREPL connection. `solo.nrepl/remote-eval`
  is then used to evaluate the invocation of `(apply @fn-var args)` on
  the remote server. So `fn-var` is **not** de-referenced locally but
  only used for **naming** the function on the remote site.

  Returns the result or throws exception."

  [conn-fn fn-var]
  (fn [_ & args]
    (nrepl/remote-eval
     (conn-fn)
     (format "(apply %s/%s [%s])"
             (-> fn-var meta :ns) (-> fn-var meta :name)
             (apply pr-str args)))))

(defn parse-host:port
  "Parses string argument `[<host>:]<port>`. Returns map with `:host`
  and `:port` for non-`nil` key-values (plays well with `{:keys [port
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
  `solo.web/app`.

  CLI options:

      -r, --remote-core [<host>:]<port>  intercept/delegate calls to solo.core to remote nREPL server)
      -n, --nrepl [<host>:]<port>        start nREPL server on <host>:<port> (<host> defaults to \"0.0.0.0\")
      -j, --jetty [<host>:]<port>        start Jetty server on <host>:<port>
      -s, --swank [<host>:]<port>        start Swank server on <host>:<port>"

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
