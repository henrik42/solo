(ns solo.webapp
  (:require [solo.nrepl :as nrepl]
            [solo.web :as web]
            [ring.util.response :as response]))

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
  