(ns solo.web
  (:use compojure.core
        [hiccup.middleware :only (wrap-base-url)])
  (:require [clojure.string :as str]
            [solo.core :as core]
            [ring.util.response :use redirect]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [hiccup.page :as hp]
            [hiccup.util :as hu]
            [hiccup.form :as hf]))

(def log-levels ["DEBUG" "INFO" "WARN" "ERROR" "OFF"])

(defn set-log-level-form [filter-reg-ex]
  (hf/form-to
   [:post "/set-log-level"]
   (hf/hidden-field " FILTER" filter-reg-ex)
   (hf/label :logger "LOGGER:")
   (hf/text-field :logger)
   (hf/label :level "LEVEL:")
   (hf/drop-down :level log-levels "INFO")
   (hf/submit-button "SET LOG-LEVEL")))

(defn loggers-form [loggers filter-reg-ex]
  (hf/form-to
   [:post "/update-loggers"]
   [:table
    [:tr
     [:th "LOGGER" (hf/text-field " FILTER" filter-reg-ex)]
     [:th "LEVEL"]]
    (for [{:keys [logger-name log-level]} loggers]
      [:tr
       [:td logger-name]
       [:td (hf/drop-down logger-name log-levels log-level)]])]
   (hf/submit-button "GO")))

(defn get-current-loggers [filter-reg-ex]
  (sort-by :logger-name
           (filter
            #(re-find filter-reg-ex (:logger-name %))
            (core/get-current-loggers))))

(defn the-page [filter-reg-ex]
  (let [loggers (get-current-loggers filter-reg-ex)]
    (hp/html5
     [:head
      (hp/include-css "solo.css")]
     [:body
      (set-log-level-form filter-reg-ex)
      (loggers-form loggers filter-reg-ex)])))

(defn req->filter-reg-ex [{:keys [request-method params]}]
  (let [reg-ex-str (if (= request-method :get)
                      (:filter params)
                      (params " FILTER"))
        reg-ex-str (if (empty? reg-ex-str) ".*" reg-ex-str)]
    (try 
      (java.util.regex.Pattern/compile reg-ex-str)
      (catch Throwable t (java.util.regex.Pattern/compile ".*")))))

(defn make-redirect-url [req]
  (str (hu/url (format "%s/" (:context req))
               {:filter (str (req->filter-reg-ex req))})))

(defroutes main-routes
  (GET "/" req (the-page (req->filter-reg-ex req)))
  (POST "/set-log-level" req
    (let [{:keys [logger level]} (:params req)
          logger (str/trim logger)]
      (if-not (empty? logger)
        (core/set-log-level! logger level))
      (redirect (make-redirect-url req))))
  (POST "/update-loggers" req
    (doseq [[logger level] (:params req)]
      (let [logger-name (name logger)]
        (if-not (= \space (first logger-name))
          (core/set-log-level! logger-name level))))
    (redirect (make-redirect-url req)))
  (route/resources "/")
  (route/not-found "Page not found"))

(def app
  (-> (handler/site #'main-routes)
      (wrap-base-url)))
