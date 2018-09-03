(ns solo.http-kit
  (require [org.httpkit.server :refer [run-server]]
           [chord.http-kit :refer [wrap-websocket-handler]]
           [solo.web.websocket :refer [web-socket-handler]]))

(defn start-server []
  (run-server
   (-> #'web-socket-handler wrap-websocket-handler)
   {:port 3001}))
