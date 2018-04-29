(ns solo.webapp
  (:gen-class)
  (:require [solo.nrepl :as nrepl]
            [solo.jetty :as jetty]
            [solo.web :as web]
            [ring.util.response :as response]
            [robert.hooke :as hooke]))

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


;;(with-open [conn (connect :port 7888)] (-> (client conn 1000) (message {:op :eval :code "(get-current-loggers)"}) response-values))

#_
(defn remote-hook [f & args]
  (.println System/out (format "remote: (%s %s)" f args))
  (apply f args))

;; TODO: build a function that will examine a namespace and
;; remote-hook all functions there in.
#_
(defn foo [logger-name log-level]
  (clojure.tools.nrepl/code
   (solo.core/set-log-level! logger-name log-level)))


#_
(nrepl/remote-eval conn "(use 'solo.core) (xxget-current-loggers)")

;;      nrepl://192.168.0.12:7889
;;      telnet://localhost:5000
;;      http://your-app-name.heroku.com/repl

#_
(def conn (nrepl/get-connection))

#_
(-> (client conn 1000)
    (message {:op :eval
                       :code "(use 'solo.core) *ns* (get-current-loggers)"})
    response-values)

#_
(hooke/clear-hooks
 #'solo.core/get-logger)

#_
(add-remote-hook
 #'solo.core/get-logger)

#_
(hooke/add-hook
 #'solo.core/get-logger
 (fn [f & args]
   (nrepl/remote-eval
    conn
    (format "(apply solo.core/get-logger [%s])" (apply pr-str args)))))

(defn add-remote-hook! [conn v]
  (hooke/add-hook
   v
   (fn [f & args]
     (nrepl/remote-eval
      #_ conn
      (nrepl/get-connection)
      (format "(apply %s/%s [%s])"
              (-> v meta :ns) (-> v meta :name)
              (apply pr-str args))))))
  
(defn -main [& args]
  (let [conn nil #_ (nrepl/get-connection)]
    (add-remote-hook! conn #'solo.core/get-logger)
    (add-remote-hook! conn #'solo.core/set-log-level!)
    (add-remote-hook! conn #'solo.core/get-current-loggers)
    ;;(nrepl/start-server 7888)
    (jetty/-main)))
