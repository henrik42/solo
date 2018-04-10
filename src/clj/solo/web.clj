(ns solo.web)

(defn handler [ring-req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body "Hello World!"})

(defn app [ring-map]
  (#'handler ring-map))