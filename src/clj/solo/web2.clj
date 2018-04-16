(ns solo.web2
  (:use compojure.core)
  (:require [solo.core :as core]
            [ring.util.response :use redirect]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [hiccup.page :as hp]
            [hiccup.form :as hf]))

(def log-levels ["DEBUG" "INFO" "WARN" "ERROR" "OFF"])

(defn set-log-level-form []
  (hf/form-to
   [:post "/set-log-level"]
   (hf/label :logger "LOGGER:")
   (hf/text-field :logger)
   (hf/label :level "LEVEL:")
   (hf/drop-down :level log-levels "INFO")
   (hf/submit-button "SET LOG-LEVEL")))

(defn loggers-form [loggers]
  (hf/form-to
   [:post "/update-loggers"]
   [:table
    [:tr [:th "LOGGER"] [:th "LEVEL"]]
    (for [{:keys [logger-name log-level]} loggers]
      [:tr
       [:td logger-name]
       [:td (hf/drop-down logger-name log-levels log-level)]])]
   (hf/submit-button "GO")))

(defn the-page []
  (let [loggers (core/get-current-loggers)]
    (hp/html5
     [:head
      (hp/include-css "solo.css")]
     [:body
      (set-log-level-form)
      (loggers-form loggers)])))

(defroutes main-routes
  (GET "/" _ (the-page))
  (POST "/set-log-level" req
        (let [{:keys [logger level]} (:params req)]
          (core/set-log-level! logger level)
          (redirect "/")))
  (POST "/update-loggers" req
        (doseq [[logger level] (:params req)]
          (core/set-log-level! (name logger) level))
        (redirect "/"))
  (route/resources "/")
  (route/not-found "Page not found"))

(def app (handler/site #'main-routes))
