(ns solo.web2
  (:use compojure.core)
  (:require [solo.core :as core]
            [ring.util.response :use redirect]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [hiccup.page :as hp]
            [hiccup.form :as hf]))

(def log-levels ["DEBUG" "INFO" "WARN" "ERROR" "OFF"])

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
      (loggers-form loggers)])))

(defroutes main-routes
  (GET "/" _ (the-page))
  (POST "/update-loggers" req
    (doseq [[logger level] (:params req)]
      (core/set-log-level! (name logger) level))
    (redirect "/"))
  (route/resources "/")
  (route/not-found "Page not found"))

(def app (handler/site main-routes))
