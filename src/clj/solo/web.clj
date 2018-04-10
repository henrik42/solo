(ns solo.web
  (:use compojure.core)
  (:require [compojure.handler :as handler]
            [clojure.pprint :as pp]))

(defn handler [ring-req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body "Hello World!"})

(defn echo [ring-map]
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body (with-out-str (pp/pprint ring-map))})

(defroutes app
  (GET "/echo" ring-map (#'echo ring-map))
  (GET "/"     ring-map (#'handler ring-map))
  )
