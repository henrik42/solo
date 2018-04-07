(ns solo.jumpstart.jsf
  (:gen-class
   :init init))

(defn -init []
  (println "solo.jumpstart.jsf/-init")
  [[]])

(defn -main [& args]
  (println (str "solo.jumpstart.jsf/-main: " args))
  (solo.jumpstart.jsf.))
  