(ns solo.webapp
  (require [solo.nrepl :as nrepl]
           [solo.web :as web]))

(def app web/app)

(def nrepl-server (atom nil))

(defn init []
  (reset! nrepl-server
          (nrepl/start-server 7888)))

(defn destroy []
  (when @nrepl-server
    (.close @nrepl-server)
    (reset! nrepl-server nil)))
  