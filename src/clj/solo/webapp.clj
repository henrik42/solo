(ns solo.webapp
  "A web application (serving `solo.web.spa/app`).

  Can be deployed into a Servlet-container as a WAR. If you want to
  run _Solo_ as a stand-alone application use `solo.main`.

  This namespace does __not__ deliver any servlet. Instead the generic
  Ring-servlet is used and a `web.xml` is automagically generated
  during build (see `:alias make-web-war` in `project.clj`). The
  Ring-servlet then delegates to `init`, `destroy` and `app` (see
  `load-solo-web!`).

  Servlet-lifecycle functions `init`/`destroy` will be called for
  start-up/shut-down (which starts/stops an nREPL server).

  `solo.core` is used to access the log4j API locally. Usually log4j
  JAR will be part of the JEE host-application (EAR-`/lib`)."
  
  (:require [solo.nrepl :as nrepl]
            [solo.swank :as swank]
            [ring.util.response :as response]))

(declare ^:no-doc app)

;; ring.util.response/resource-data does not know how to handle Apache
;; VFS URLs which we find in JBoss/Wildfly.

(defmethod response/resource-data :vfs
  [^java.net.URL url]
  (let [conn (.openConnection url)]
    {:content (.getInputStream conn)
     :content-length (@#'response/connection-content-length conn)
     :last-modified (@#'response/connection-last-modified conn)}))

(def nrepl-server
  "An `atom` that holds the latest nREPL-server that has been started
  and not stopped (see [[init]] and [[destroy]])."

  (atom nil))

(defn load-solo-web!
  "Requires `solo.web.spa` and `def`ines `app`.

  `solo.webapp` is loaded during build and if it `use`d `solo.web.spa`
  we would need log4j JAR on the classpath which we do not
  have/want. So we defer the loading of `solo.web.spa` to runtime."

  []
  (require 'solo.web.spa)
  (def app
    (eval (read-string "solo.web.spa/app"))))
  
(defn init
  "Initialize the `Servlet`.

  If system property `solo.nrepl.port` is set __asynchronously__
  starts nREPL server on that port and sets `nrepl-server` atom. This
  method should not throw an exception if the nREPL server cannot
  start. This may happen, when the port is already opened. So we will
  just keep on going in this case.

  If system property `solo.swank.port` is set __asynchronously__
  starts Swank server on that port."

  []
  (load-solo-web!)
  (if-let [port (System/getProperty "solo.nrepl.port")]
    (future 
      (try 
        (reset! nrepl-server
                (nrepl/start-server :port (Integer/parseInt port)))
        (catch Throwable t
          (.println System/err t)))))
  (if-let [port (System/getProperty "solo.swank.port")]
    (future 
      (try 
        (swank/start-server :port (Integer/parseInt port))
        (catch Throwable t
          (.println System/err t))))))

(defn destroy
  "Sets `nrepl-server` atom to `nil` and then tries to `(.close
  server)` the running server. If this fails, `nrepl-server` atom will
  still be `nil` so that an `init` will try to start a new nREPL
  server. Hope this makes sense in most cases."
  
  []
  (when-let [server @nrepl-server]
    (reset! nrepl-server nil)
    (.close server)))

