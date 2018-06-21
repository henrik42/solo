(ns solo.nrepl
  "Functions around nREPL."
  
  (:require [clojure.tools.nrepl :refer :all]
            [clojure.tools.nrepl.server :as server]))

(defn start-server
  "Starts an nREPL server on given port/host. Returns the server which
  can be shut down via `(.close <server>)`. Throws exception if the
  server cannot be started.

  Example:

      (start-server :port 7888 :host \"127.0.0.1\")"

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

(defn remote-eval
  "Evaluates `<String:code>` remotely via `nrepl-connection`. Returns
  value of evaluation. If eval on remote site throws exception, a
  `RuntimeException` will be thrown (remote exception type and
  stacktrace will be lost).

  **Note:** `code` may have more than one form. `code` will be eval'ed
  but only the last value will be returned.

  Example:

      (-> (get-connection {:port 9998}) (remote-eval \"(+ 1 2)\"))
      ;;--> 3"

  [nrepl-connection code]
  (let [{:keys [value err]} (-> (client nrepl-connection 1000)
                                (message {:op :eval
                                          :code code})
                                (combine-responses))]
    (if err (throw (RuntimeException. (str "REMOTE:" err)))
        (read-string (last value)))))
        
(defn get-connection
  "Returns a new connection to an nREPL server. If the connection
  cannot be established an exception is thrown."

  [{:keys [host port]}]
  (connect :port port :host host))

(defn -main
  "Main entry point for starting an nREPL server.

  Just calls `(start-server)` without any arguments. This function is
  just for testing (not a full CLI)."

  [& args]
  (start-server))
