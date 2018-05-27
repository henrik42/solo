(ns solo.jumpstart
  (:require [solo.swank :as swank]))
    
(defn jumpstart []
  (println "solo.jumpstart/jumpstart: starting up:")
  (swank/start-server)
  (println "solo.jumpstart/jumpstart: done."))

