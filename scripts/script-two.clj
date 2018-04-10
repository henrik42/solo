(require 'ring.adapter.jetty)

(defn handler [ring-req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body "Hello World"})

(ring.adapter.jetty/run-jetty
 handler
 {:port 3000
  :host "0.0.0.0"})
