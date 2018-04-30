(ns solo.webapp
  (:gen-class)
  (:require [solo.nrepl :as nrepl]
            [solo.jetty :as jetty]
            [solo.swank :as swank]
            [solo.web :as web]
            [ring.util.response :as response]
            [robert.hooke :as hooke]
            [clojure.tools.cli :refer [parse-opts]]))

(defmethod response/resource-data :vfs
  [^java.net.URL url]
  (let [conn (.openConnection url)]
    {:content (.getInputStream conn)
     :content-length (@#'response/connection-content-length conn)
     :last-modified (@#'response/connection-last-modified conn)}))

(def app web/app)

(def nrepl-server (atom nil))

(defn init
  "Initialize Servlet. This method should not throw an exception if
  the nREPL server cannot start. This may happen, when the port is
  already opened. So we will just keep on going in this case."

  []
  (try 
    (reset! nrepl-server
            (nrepl/start-server 7888))
    (catch Throwable t
      (.println System/err t))))

(defn destroy
  "Set `nrepl-server` to `nil` and then try to `.close` the running
  server. If this fails, `nrepl-server` will still be `nil` so that an
  `init` will try to start a new nREPL server. Hope this makes sense
  in most cases."
  
  []
  (when-let [server @nrepl-server]
    (reset! nrepl-server nil)
    (.close server)))

;; ---------------------------- main ---------------------------------

(defn remote-wrapper [conn-fn v]
  (fn [_ & args]
    (nrepl/remote-eval
     (conn-fn)
     (format "(apply %s/%s [%s])"
             (-> v meta :ns) (-> v meta :name)
             (apply pr-str args)))))

(defn parse-host:port [host:port]
  (let [[_ host port] (re-matches #"([^:]+)??:?([0-9]+)" host:port)
        res (if host {:host host} {})]
    (if port (assoc res :port (Integer/parseInt port)) res)))

(def cli-options
  [["-L" "--local-core" "execute solo.core locally (do not delegate to remote nREPL server)"]
   ["-n" "--nrepl [<host>:]<port>" "start nREPL server on <host>:<port> (<host> defaults to \"0.0.0.0\")"
    :parse-fn #(parse-host:port %)]
   ["-j" "--jetty [<host>:]<port>" "start Jetty server on <host>:<port>"
    :parse-fn #(parse-host:port %)]
   ["-s" "--swank [<host>:]<port>" "start Swank server on <host>:<port>"
    :parse-fn #(parse-host:port %)]])

(defn usage [msg summary]
  (.println System/out (format "USAGE: [options] [<host>:<port>]\n%s\n%s" msg summary))
  (System/exit 1))

(defn -main [& args]
  (let [{:keys [errors options arguments summary] :as opt} (parse-opts args cli-options)
        _ (when errors (usage errors summary))
        {:keys [run-local-core nrepl jetty swank]} options
        
        {jetty-port :port jetty-host :host :or {jetty-host "0.0.0.0"}} jetty
        _ (when-not jetty-port (usage "Invalid Jetty option" summary))
        
        {nrepl-port :port nrepl-host :host :or {nrepl-host "0.0.0.0"}} nrepl
        _ (when (and nrepl (not nrepl-port)) (usage "Invalid nREPL option" summary))
        
        {swank-port :port swank-host :host :or {swank-host "0.0.0.0"}} swank
        _ (when (and swank (not swank-port)) (usage "Invalid Swank option" summary))
        
        [remote & r] arguments
        _ (when-not remote (usage "" summary))
        _ (when r (usage "" summary))
        
        {remote-port :port remote-host :host :or {remote-host "127.0.0.1"}} (parse-host:port remote)
        _ (when-not (and remote-port remote-host) (usage "Missing/invalid <host>:<port> arguments" summary))
        
        conn-fn #(nrepl/get-connection {:port remote-port :host remote-host})]
    
    (when-not run-local-core
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
