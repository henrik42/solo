(ns solo.web
  (:use compojure.core
        [hiccup.middleware :only (wrap-base-url)])
  (:require [clojure.string :as str]
            [solo.core :as core]
            [ring.util.response :as response]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [ring.middleware.resource :as resource]
            [hiccup.page :as hp]
            [hiccup.util :as hu]
            [hiccup.form :as hf]))

(def log-levels #{"UNKNOWN!" "NOT-SET!" "DEBUG" "INFO" "WARN" "ERROR" "OFF"})

(defn set-log-level-form [{:keys [filter-reg-ex hide]}]
  (hf/form-to
   {:id "new-logger"}
   [:post "/set-log-level"]
   (hf/hidden-field " FILTER" filter-reg-ex)
   (hf/hidden-field " HIDE" hide)
   (hf/label :logger "LOGGER:")
   (hf/text-field {:placeholder "Logger Name"} :logger)
   (hf/label :level "LEVEL:")
   (hf/drop-down :level log-levels "INFO")
   (hf/submit-button "SET LOG-LEVEL")))

(defn loggers-form [loggers {:keys [filter-reg-ex hide]}]
  (hf/form-to
   [:post "/update-loggers"]
   [:table#loggers
    [:tr
     [:th "LOGGER"
      (hf/text-field
       {:placeholder "Filter Reg-Ex"}
       " FILTER" filter-reg-ex)]
     [:th "LEVEL"
      (hf/label :hide "Hide NOT-SET!:")
      (hf/check-box " HIDE" hide)]]
    (for [{:keys [logger-name log-level]} loggers]
      [:tr
       [:td logger-name]
       [:td (hf/drop-down logger-name log-levels log-level)]])]
   (hf/submit-button "GO")))

(defn get-current-loggers [{:keys [filter-reg-ex hide]}]
  (->> (core/get-current-loggers)
       (map
        (fn [{:keys [logger-name log-level] :as logger}]
          (cond
            (= "" log-level) (assoc logger :log-level "NOT-SET!")
            (not (log-levels log-level)) (assoc logger :log-level "UNKNOWN!")
            :else logger)))
       (filter 
        #(and (re-find filter-reg-ex (:logger-name %))
              (if hide
                (not= "NOT-SET!" (:log-level %))
                true)))))
  
(defn the-page [options]
  (let [loggers (get-current-loggers options)]
    (hp/html5
     [:head
      (hp/include-css "/css/solo.css")]
     [:body
      (set-log-level-form options)
      (loggers-form loggers options)])))

(defn req->hide [{:keys [request-method params]}]
  (let [hide-str (if (= request-method :get)
                   (:hide params)
                   (params " HIDE"))]
    (Boolean/valueOf hide-str)))

(defn req->filter-reg-ex [{:keys [request-method params]}]
  (let [reg-ex-str (if (= request-method :get)
                      (:filter params)
                      (params " FILTER"))
        reg-ex-str (if (empty? reg-ex-str) ".*" reg-ex-str)]
    (try 
      (java.util.regex.Pattern/compile reg-ex-str)
      (catch Throwable t (java.util.regex.Pattern/compile ".*")))))

(defn make-redirect-url [req]
  (str (hu/url (str (:context req) "/")
               {:hide (req->hide req)
                :filter (str (req->filter-reg-ex req))})))

(defn set-log-level? [logger-name log-level]
  (cond
    (empty? logger-name) false
    (= \space (first logger-name)) false
    (#{"UNKNOWN!" "NOT-SET!"} log-level) false
    :else true))

(defroutes main-routes
  (GET "/" req (the-page
                {:hide (req->hide req)
                 :filter-reg-ex (req->filter-reg-ex req)}))
  (POST "/set-log-level" req
    (let [{:keys [logger level]} (:params req)
          logger (str/trim logger)]
      (if (set-log-level? logger level)
        (core/set-log-level! logger level))
      (response/redirect (make-redirect-url req))))
  (POST "/update-loggers" req
    (doseq [[logger level] (:params req)]
      (let [logger-name (name logger)]
        (if (set-log-level? logger-name level)
          (core/set-log-level! logger-name level))))
    (response/redirect (make-redirect-url req)))
  (route/resources "/")
  (route/not-found "Page not found"))

(def app
  (-> (handler/site #'main-routes)
      (wrap-base-url)))
