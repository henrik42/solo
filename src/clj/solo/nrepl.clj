(ns solo.nrepl
  (:require [clojure.tools.nrepl :refer :all]
            [clojure.tools.nrepl.server :as server]))

(defn start-server
  "Starts an nREPL server on given port/host. Returns the server which
  can be shut down via `.close`. Throws exception if the server cannot
  be started.

  Example: (start-server :port 7888 :host \"127.0.0.1\")"

  [& {:keys [port host]
      :or {port 7888 host "0.0.0.0"}}]
  (let [params {:port port :host host}
        _ (.println System/out (str "Starting nREPL server on " params " ..."))
        server (try
                 (server/start-server :port port :bind host)
                 (catch Throwable t
                   (throw (ex-info
                           (format "Could not start nREPL server: %s Cause: %s" params t)
                           params t))))]
    (.println System/out (str "Started nREPL server on " params "."))
    server))

(defn remote-eval [conn code]
  (let [{:keys [value err]} (-> (client conn 1000)
                                (message {:op :eval
                                          :code code})
                                (combine-responses))]
    (if err (throw (RuntimeException. (str "REMOTE:" err)))
        (read-string (last value)))))
        
(defn get-connection [{:keys [host port]}]
  (connect :port port :host host))

(defn -main
  "Lets you start an nREPL server."

  [& args]
  (start-server))
