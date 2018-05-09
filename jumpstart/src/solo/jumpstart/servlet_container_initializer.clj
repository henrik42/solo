(ns solo.jumpstart.servlet_container_initializer
  (:gen-class
   :implements [javax.servlet.ServletContainerInitializer]))

(defn -onStartup [& args]
  (println "solo.jumpstart.servlet_container_initializer/-onStartup")
  (require 'solo.jumpstart)
  #_ (eval "(solo.jumpstart/jumstart)"))

