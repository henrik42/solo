(ns solo.nrepl
  (:require [clojure.tools.nrepl :refer :all]
            [clojure.tools.nrepl.server :as server]))

(defn start-server [& [port]]
  (let [port (or port 7888)
        _ (println (format "Starting nREPL server on port %s ..." port))
        server (server/start-server :port port)]
    (println (format "Started nREPL server on port %s : %s" port (bean server)))
    server))

(defn remote-eval [code]
  (with-open [conn (connect :port 7888)]
    (-> (client conn 1000)
        (message {:op :eval
                       :code code})
        response-values)))
