(ns solo.webapp
  (:gen-class)
  (:require [solo.nrepl :as nrepl]
            [solo.jetty :as jetty]
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

;;      nrepl://192.168.0.12:7889
;;      telnet://localhost:5000
;;      http://your-app-name.heroku.com/repl

(defn remote-wrapper [conn-fn v]
  (fn [_ & args]
    (nrepl/remote-eval
     (conn-fn)
     (format "(apply %s/%s [%s])"
             (-> v meta :ns) (-> v meta :name)
             (apply pr-str args)))))

(def cli-options
  [["-p" "--repl-port PORT" "start nREPL server on PORT"
    :parse-fn #(Integer/parseInt %)]
   ])
  
(defn -main [& args]
  (let [{:keys [errors options arguments summary] :as opt} (parse-opts args cli-options)
        {:keys [repl-port]} options
        [host port] arguments
        conn-fn #(nrepl/get-connection {:port (Integer/parseInt port) :host host})]
    (hooke/add-hook #'solo.core/get-logger
                    (remote-wrapper conn-fn #'solo.core/get-logger))
    (hooke/add-hook #'solo.core/set-log-level!
                    (remote-wrapper conn-fn #'solo.core/set-log-level!))
    (hooke/add-hook #'solo.core/get-current-loggers
                    (remote-wrapper conn-fn #'solo.core/get-current-loggers))
    (when repl-port (nrepl/start-server repl-port "0.0.0.0"))
    (jetty/-main)
    (.println System/out "CTRL-C to quit...")))
