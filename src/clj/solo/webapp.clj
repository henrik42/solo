(ns solo.webapp
  "A web application (serving `solo.web/app`).

  Can be deployed into a Servlet-container as a WAR. If you want to
  run _Solo_ as a stand-alone application use `solo.main`.

  Lifecycle functions `init`/`destroy` will be called for
  start-up/shut-down (which starts/stops an nREPL server).

  `solo.core` is used to access the log4j API locally. Usually log4j
  JAR will be part of the JEE host-application (EAR-`/lib`)."
  
  (:require [solo.nrepl :as nrepl]
            [ring.util.response :as response]))

;; ring.util.response/resource-data does not know how to handle Apache
;; VFS URLs which we find in JBoss/Wildfly.

(defmethod response/resource-data :vfs
  [^java.net.URL url]
  (let [conn (.openConnection url)]
    {:content (.getInputStream conn)
     :content-length (@#'response/connection-content-length conn)
     :last-modified (@#'response/connection-last-modified conn)}))

(def nrepl-server
  "Atom that holds an nREPL-server (see `init`)."

  (atom nil))

(defn load-solo-web!
  "Requires `solo.web` and `def`ines `app`.

  `solo.webapp` is loaded during build and if it `use`d `solo.web` we
  would need log4j JAR on the classpath which we do not have/want. So
  we defer the loading of `solo.web` to runtime."

  []
  (require 'solo.web)
  (def app
    (eval (read-string "solo.web/app"))))
  
(defn init
  "Initialize Servlet. Synchronously starts nREPL server and sets
  `nrepl-server` atom. This method should not throw an exception if
  the nREPL server cannot start. This may happen, when the port is
  already opened. So we will just keep on going in this case."

  []
  (load-solo-web!)
  (try 
    (reset! nrepl-server
            (nrepl/start-server :port 7888))
    (catch Throwable t
      (.println System/err t))))

(defn destroy
  "Set `nrepl-server` atom to `nil` and then try to `.close` the
  running server. If this fails, `nrepl-server` atom will still be
  `nil` so that an `init` will try to start a new nREPL server. Hope
  this makes sense in most cases."
  
  []
  (when-let [server @nrepl-server]
    (reset! nrepl-server nil)
    (.close server)))

