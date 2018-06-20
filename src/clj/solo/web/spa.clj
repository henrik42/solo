(ns solo.web.spa
  (:use compojure.core
        [hiccup.middleware :only (wrap-base-url)])
  (:require [ring.middleware.json :as json]
            [hiccup.form :as hf]
            [hiccup.page :as hp]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [solo.web :as web]))

;; ################### model ##########################

(defn get-current-loggers []
  {:__post [(or (.println System/out (format "get-current-loggers --> %s" %)) true)]}
  {:body {:loggers
          (web/get-current-loggers {:filter-reg-ex #"" :hide false})}
   :headers {"Cache-Control" "no-cache"}})

(defn set-log-level! [logger level]
  {:post [(or (.println System/out (format "(set-log-level! %s %s) --> %s" logger level %)) true)]}
  (web/set-log-level! logger level)
  {:body {}})

;; ################### view ##########################

(defn the-page []
  (hp/html5
   [:head
    (hp/include-css "css/solo.css")]
   [:body
    [:div#main]
    [:script {:src "out/solo-spa.js" :type "text/javascript"}]]))

;; ################### handler/controller ##########################

;; curl http://localhost:3000/ws/get-current-loggers
;; curl -X POST http://localhost:3000/ws/set-log-level/foo/info

(defroutes ws-routes
  (GET  "/ws/get-current-loggers" _ (get-current-loggers))
  (POST "/ws/set-log-level/:logger/:level" [logger level] (set-log-level! logger level)))

(defroutes main-routes
  (GET "/spa" _ (the-page))
  (route/resources "/out" {:root "public/js/compiled"})
  (-> ws-routes
      (json/wrap-json-body)
      (json/wrap-json-params)
      (json/wrap-json-response))
  web/app)

(def app
  (-> (handler/site #'main-routes)))
