(ns solo.jumpstart.jsf
  (require [solo.nrepl :as nrepl]))

(defn -init []
  (println "solo.jumpstart.jsf/-init: starting nREPL server")
  (nrepl/start-server)
  (println "solo.jumpstart.jsf/-init: started nREPL server")
  [[]])

(defn -main [& args]
  (println (str "solo.jumpstart.jsf/-main: " args))
  (solo.jumpstart.jsf.))

