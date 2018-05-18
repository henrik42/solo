(ns solo.jumpstart.servlet_container_initializer
  "Namespace for jump-starting `solo.jumpstart` in the context of a
  web-application.

  Uses AOT/`:gen-class` to deliver the named class
  `solo.jumpstart.servlet_container_initializer` which is an
  implementation of `javax.servlet.ServletContainerInitializer`."
  (:gen-class
   :implements [javax.servlet.ServletContainerInitializer]))

(defn -onStartup
  "Will be called when the containing web-application starts
  (see
  `jumpstart/resources/META-INF/services/javax.servlet.ServletContainerInitializer`).

  Implements
  `javax.servlet.ServletContainerInitializer/onStartup`. Requires/calls
  `solo.jumpstart/jumpstart` to jump-start _Solo_ in a `try/catch` --
  so this function does not throw an exception even
  if `(solo.jumpstart/jumpstart)` throws."

  [& args]
  (println "solo.jumpstart.servlet_container_initializer/-onStartup")
  ;; solo.jumpstart is a RUNTIME dependency -- not a COMPILE-TIME! So
  ;; we won't let the compiler/build know what we are doing.
  (try 
    (require 'solo.jumpstart)
    (eval (read-string "(solo.jumpstart/jumpstart)"))
    (catch Throwable t
      (println
       (str "solo.jumpstart.servlet_container_initializer/-onStartup:"
            "Load/run (solo.jumpstart/jumpstart) failed : "
            t)))))

