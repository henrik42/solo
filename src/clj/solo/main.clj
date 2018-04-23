(ns solo.main
  (require [solo.jetty :as jetty]
           [solo.nrepl :as nrepl])
  (:gen-class))

(defn -main [& args]
  (nrepl/start-server 7888)
  (jetty/-main))
