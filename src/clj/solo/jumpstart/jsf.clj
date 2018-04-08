(ns solo.jumpstart.jsf
  (require [solo.swank :as swank]))

(defn -init []
  (println "solo.jumpstart.jsf/-init: starting Swank server")
  (swank/-main)
  (println "solo.jumpstart.jsf/-init: started Swank server")
  [[]])

(defn -main [& args]
  (println (str "solo.jumpstart.jsf/-main: " args))
  (solo.jumpstart.jsf.))

