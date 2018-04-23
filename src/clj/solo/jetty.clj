(ns solo.jetty
  (require [ring.adapter.jetty :as jetty]
           [solo.web :as web]))

(defn -main []
  (println "Starting Jetty server ...")
  (jetty/run-jetty
   #'web/app
   {:port 3000
    :host "0.0.0.0"
    :join? false}))

