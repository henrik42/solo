(ns solo.jetty
  (require [ring.adapter.jetty :as jetty]
           [solo.web2 :as web]))

(defn -main []
  (jetty/run-jetty
   #'web/app
   {:port 3000
    :host "0.0.0.0"
    :join? false}))

