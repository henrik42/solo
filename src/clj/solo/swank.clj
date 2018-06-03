(ns solo.swank
  "Functions around Swank."
  
  (require [swank.swank :as swank]))

(defn start-server
  "Starts a Swank server on given port/host. There can be atmost one
  running server at any time. A running server may be shut down
  by `(stop-server)`. Throws exception if the server cannot be
  started. Returns the server.

  Example:

      (start-server :port 2001 :host \"127.0.0.1\")"

  [& {:keys [port host]
      :or {port 4005 host "0.0.0.0"}}]
  (let [params {:port port :host host}
        _ (.println System/out (str "Starting Swank server on " params " ..."))
        server (try
                 (swank/start-server :port port :host host)
                 (catch Throwable t
                   (throw (ex-info
                           (format "Could not start Swank server: %s Cause: %s" params t)
                           params t))))]
    (.println System/out (str "Started Swank server on " params "."))
    server))

(defn stop-server
  "Stops a running Swank server."

  []
  (swank/stop-server))
  
(defn -main
  "Main entry point for starting a Swank server.

  This function is just for testing (not a full CLI)."

  [& args]
  (let [{:keys [host port] :or {host "0.0.0.0" port 4005}}
        (map (comp read-string str) args)]
    (start-server :port port :host host)))