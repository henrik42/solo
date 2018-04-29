(ns solo.nrepl
  (:require [clojure.tools.nrepl :refer :all]
            [clojure.tools.nrepl.server :as server]))

(defn start-server [& [port bind]]
  (let [port (or port 7888)
        bind (or bind "127.0.0.1")
        _ (println (format "Starting nREPL server on %s/%s ..." bind port))
        server (server/start-server :port port :bind bind)]
    (println (format "Started nREPL server on port %s : %s" port (bean server)))
    server))

(defn remote-eval [conn code]
  (let [{:keys [value err] :as res} (-> (client conn 1000)
                                        (message {:op :eval
                                                  :code code})
                                        (combine-responses))]
    (if err (throw (RuntimeException. err))
        (read-string (last value)))))
        
(defn get-connection [{:keys [host port]}]
  (connect :port port :host host))

