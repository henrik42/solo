(ns solo.jumpstart
  "Namespace that will/can be loaded to jump-start server-side code.

  See `solo.jumpstart.servlet_container_initializer`.

  **Note:** This namespaces requires `solo.core` so that after being
    jump-started you may use `solo.core` via nREPL without the need to
    require/load `solo.core` explicitly."
  
  (:require [solo.nrepl :as nrepl]
            [solo.core]))

(defn jumpstart
  "Will/can be called from
  `solo.jumpstart.servlet_container_initializer/-onStartup`.

  Can be over-written/redefined in runtime/production
  environments. This implementation just
  calls `(solo.nrepl/start-server)`.

  __Note:__ this function is not meant to be called from user-code as
  part of the application. It is part of the bootstrapping mechanism
  that starts up the application for initialization purposes."

  []
  (println "solo.jumpstart/jumpstart: starting up:")
  (nrepl/start-server)
  (println "solo.jumpstart/jumpstart: done."))
