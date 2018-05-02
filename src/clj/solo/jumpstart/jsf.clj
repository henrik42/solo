(ns solo.jumpstart.jsf
  (require [solo.nrepl :as nrepl]))

(defn -init []
  (println "solo.jumpstart.jsf/-init: starting nREPL server")
  (nrepl/start-server)
  (println "solo.jumpstart.jsf/-init: started nREPL server")
  [[]])

;; TODO: jump-start solo.jumpstart -- not solo.jumpstart.jsf

(defn -main [& args]
  (println (str "solo.jumpstart.jsf/-main: " args))
  (-> (Class/forName "solo.jumpstart.jsf")
      (.getConstructor (make-array Class 0))))
