(ns solo.jetty
  "Functions around Jetty."
  
  (require [ring.adapter.jetty :as jetty]
           [solo.web.spa :as web]))

(defn start-server
  "Starts a Jetty server on given port/host serving
  `solo.web.spa/app`. Returns the server which can be shut down via
  `(.close <server>)`. Throws exception if the server cannot be
  started.

  Example:

      (start-server :port 2001 :host \"127.0.0.1\")"

  [& {:keys [port host]
      :or {port 3000 host "0.0.0.0"}}]
  (let [params {:port port :host host}
        _ (.println System/out (str "Starting Jetty server on " params " ..."))
        server (try 
                 (jetty/run-jetty
                  #'web/app
                  {:port port
                   :host host
                   :join? false})
                 (catch Throwable t
                   (throw (ex-info
                           (format "Could not start Jetty server: %s Cause: %s" params t)
                           params t))))]
    (.println System/out (str "Started Jetty server on " params "."))
    server))

(defn -main
  "Main entry point for starting a Jetty server.

  Just calls `(start-server)` without any arguments. This function is
  just for testing (not a full CLI)."

  [& args]
  (start-server))
