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

(defn init []
  (reset! nrepl-server
          (nrepl/start-server 7888)))

(defn destroy []
  (when @nrepl-server
    (.close @nrepl-server)
    (reset! nrepl-server nil)))
  