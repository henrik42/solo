(ns solo.nrepl
  (:require [clojure.tools.nrepl :refer :all]
            [clojure.tools.nrepl.server :as server]))

(defn start-server [port]
  (server/start-server :port port))

(defn remote-eval [code]
  (with-open [conn (connect :port 7888)]
    (-> (client conn 1000)
        (message {:op :eval
                       :code code})
        response-values)))
