(ns solo.jumpstart
  (:require [solo.nrepl :as nrepl]
            [solo.core]))

(defn jumpstart []
  (println "solo.jumpstart/jumpstart: starting up:")
  (nrepl/start-server)
  (println "solo.jumpstart/jumpstart: done."))
