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
  {:body {:loggers
          (web/get-current-loggers {:filter-reg-ex #"" :hide false})}
   :headers {"Cache-Control" "no-cache"}})

(defn set-log-level! [logger level]
  (web/set-log-level! logger level)
  {})

;; ################### view ##########################

(defn set-log-level-form []
  [:div 
   (hf/label :logger "LOGGER:")
   (hf/text-field {:placeholder "Logger Name"} :logger)

   [:span {:style "padding:1em;"}]
   (hf/label :level " LEVEL:")
   (hf/drop-down :level web/log-levels "INFO")
   
   [:span {:style "padding:1em;"}]
   (hf/submit-button "SET LOG-LEVEL")])

(defn loggers-form []
  [:span
   [:table#loggers
    [:tr
     [:th "LOGGER"
      (hf/text-field
       {:placeholder "Filter Reg-Ex"
        :style "float: right;"}
       :filter)]
     [:th "LEVEL"
      [:span {:style "float: right;"} 
       (hf/label :hide " Hide NOT-SET!:")
       (hf/check-box :hide)]]]
    [:tr "hook"]]
   (hf/submit-button "RELOAD")])

(defn the-page []
  (hp/html5
   [:head
    (hp/include-css "/css/solo.css")]
   [:body
    [:script {:src "out/solo-spa.js" :type "text/javascript"}]
    (set-log-level-form)
    (loggers-form)]))

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

