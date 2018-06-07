(ns solo.web.spa
  (:use compojure.core
        [hiccup.middleware :only (wrap-base-url)])
  (:require [hiccup.form :as hf]
            [hiccup.page :as hp]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [solo.web :as web]))

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

(defroutes main-routes
  #_ (fn [req] (.println System/out req) nil)
  
  (GET "/spa" _ (the-page))
  (route/resources "/out" {:root "public/js/compiled"})
  web/app)

(def app
  (-> (handler/site #'main-routes)
      (wrap-base-url)))

