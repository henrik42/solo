(ns solo.swank
  (require [swank.swank :as swank]))

(defn -main [& args]
  (let [{:keys [host port] :or {host "0.0.0.0" port 4005}}
        (map (comp read-string str) args)]
    (swank/start-server :port port :host host)))
