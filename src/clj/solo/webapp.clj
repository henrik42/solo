(ns solo.webapp
  "A web application.

  The application may be deployed into a Servlet-container as a WAR or
  it may be run as a stand-alone Java application.

  When run in a container life-cycle functions `init`/`destroy` will
  be called for start-up/shut-down. In this case `solo.core` is used
  to access the log4j API locally. Usually log4j JAR will be part of
  the JEE _host-application_ (EAR-`/lib`).

  When run as a stand-alone app `-main` is the main entry point. In
  this case the calls to `solo.core` can be delegated to a remotely
  running nREPL-server which then calls `solo.core` for accessing the
  log4j API."
  
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
  ""

  []
  (require 'solo.web)
  (def app (eval (read-string "solo.web/app"))))
  
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

