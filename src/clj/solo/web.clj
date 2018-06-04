(ns solo.web
  "A Compojure/Hiccup-based Ring-handler.

  This namespace contains functions for

  * accessing the `solo.core` business backend via Compojure-GET-routes (*model*)
  * reacting to user input via Compojure-POST-routes (*controller*)
  * creating the presentation via Hiccup functions (*view*)"
  
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

;; ################### model ##########################

(def log-levels
  "The set of known log-levels (incl. `\"UNKNOWN!\"` and
  `\"NOT-SET!\"`)."

  #{"UNKNOWN!" "NOT-SET!" "DEBUG" "INFO" "WARN" "ERROR" "OFF"})

(defn get-current-loggers
  "Returns a mapped, filtered and sorted map-set of current log4j
  logger (see `solo.core/get-current-loggers`).

  For presentation purposes each `:log-level` will be mapped as
  follows:

  * empty `:log-level` (i.e. `\"\"`) becomes `\"NOT-SET!\"`
  * any `:log-level` not contained in `solo.web/log-levels` becomes
    `\"UNKNOWN!\"`

  Filtering is done by `re-find`-matching `filter-reg-ex` against the
  `logger-name`. Sorting is done on `logger-name`. When `hide` is
  truthly loggers with (mapped) `(= log-level \"NOT-SET!\")` will be
  filtered out."

  [{:keys [filter-reg-ex hide]}]
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
                true)))
       (sort-by :logger-name)))

(defn set-log-level?
  "Returns `true` if the logger's log-level should be set (and `false`
  otherwise).

  There are some special cases to take care of:

  * loggers with `(= logger-name \"\")` will not be set
  * loggers with `:logger-name` starting with *blank* (i.e. `\" \"`)
    will not be set. This case handles non-logger
    form-params (e.g. filter and hide settings).
  * log-levels `\"UNKNOWN!\"` and `\"NOT-SET!\"` will not be set."

  [logger-name log-level]
  (cond
    (empty? logger-name) false
    (= \space (first logger-name)) false
    (#{"UNKNOWN!" "NOT-SET!"} log-level) false
    :else true))

;; ################### request processing ##########################

(defn req->hide
  "Extracts and returns the `hide` parameter from the
  ring-request-map."

  [{:keys [request-method params]}]
  (let [hide-str (if (= request-method :get)
                   (:hide params)
                   (params " HIDE"))]
    (Boolean/valueOf hide-str)))

(defn req->filter-reg-ex
  "Extracts and returns the `filter-reg-ex` parameter from the
  ring-request-map."

  [{:keys [request-method params]}]
  (let [reg-ex-str (or
                    (if (= request-method :get)
                      (:filter params)
                      (params " FILTER"))
                    "")]
    (try 
      (java.util.regex.Pattern/compile reg-ex-str)
      (catch Throwable t (java.util.regex.Pattern/compile "")))))

(defn make-redirect-url
  "Returns an absolute URL to the context-root of the web-app (which
  received the given ring-request) including URL parameter expressions
  for `hide` and `filter-reg-ex`.

  The URL does not include protcol and hostname. This URL is used for
  redirecting the browser to the context-root of the application after
  having submitted a `POST` request."

  [req]
  (str (hu/url (str (:context req) "/")
               {:hide (req->hide req)
                :filter (str (req->filter-reg-ex req))})))

;; ################### view #######################################

(defn top-of-page
  "Returns a Hiccup-vector for the top-of-page including a link to the
  Codox-generated API (HTML) documentation, the Marginalia-formatted
  code (both contained in _Solo_) and a link to the _Solo_ github
  page."

  []
  [:div#top-of-page "SOLO Web App" " -- "
   [:a {:href "generated-doc/index.html"} "doc"]
   " -- "
   [:a {:href "generated-doc/solo-source.html"} "source"]
   " -- "
   [:a {:href "https://github.com/henrik42/solo/"} "github"]])

(defn set-log-level-form
  "Returns a Hiccup-vector for the *set log-level form* which allows
  the user to enter a logger-name and select a log-level.

  `filter-reg-ex` and `hide` are put into hidden fields so that they
  are submitted with the form and can be picked up with the `POST /set-log-level`
  request."

  [{:keys [filter-reg-ex hide]}]
  (hf/form-to
   {:id "new-logger"}
   [:post "/set-log-level"]
   
   (hf/hidden-field " FILTER" filter-reg-ex)
   (hf/hidden-field " HIDE" (str hide))
   
   (hf/label :logger "LOGGER:")
   (hf/text-field {:placeholder "Logger Name"} :logger)

   [:span {:style "padding:1em;"}]
   (hf/label :level " LEVEL:")
   (hf/drop-down :level log-levels "INFO")
   
   [:span {:style "padding:1em;"}]
   (hf/submit-button "SET LOG-LEVEL")))

(defn loggers-form
  "Returns a Hiccup-vector for the *loggers form* which allows the
  user to select a log-level for each of the `loggers`. Within this
  form the user may also enter a `filter-reg-ex` (which will be used
  to `re-find`-match loggers by their `:logger-name`) and check-select
  to hide loggers with `(= log-level NOT-SET!)`.

  Submission will `POST /update-loggers`."
  
  [loggers {:keys [filter-reg-ex hide]}]
  (hf/form-to
   [:post "/update-loggers"]
   [:table#loggers
    [:tr
     [:th "LOGGER"
      (hf/text-field
       {:placeholder "Filter Reg-Ex"
        :style "float: right;"}
       " FILTER" filter-reg-ex)]
     [:th "LEVEL"
      [:span {:style "float: right;"} 
       (hf/label :hide " Hide NOT-SET!:")
       (hf/check-box " HIDE" hide)]]]
    (for [{:keys [logger-name log-level]} loggers]
      [:tr
       [:td logger-name]
       [:td (hf/drop-down logger-name log-levels log-level)]])]
   (hf/submit-button "SET LOG-LEVELS")))

(defn the-page
  "Returns the HTML markup for the complete page (there is just one in
  _Solo_).

  Calls `(solo.web/get-current-loggers options)` to retrieve the list
  of loggers to display and includes `(set-log-level-form options)`
  and `(loggers-form (solo.web/get-current-loggers options) options)`
  in its `<body>`."

  [options]
  (let [loggers (get-current-loggers options)]
    (hp/html5
     [:head
      (hp/include-css "/css/solo.css")]
     [:body
      (top-of-page)
      (set-log-level-form options)
      (loggers-form loggers options)])))

;; ################### handler/controller ##########################

(defroutes main-routes
  "The Ring-handler for all the routes that _Solo_ supports:

   * `GET /`: delivers *the (one) page* (`solo.web/the-page`)
   * `GET /<resource>`: delivers static resources (CSS, HTML, etc.)
   * `POST /set-log-level`: sets the log-level for a logger
   * `POST /update-loggers`: sets the log-level for all displayed
     loggers"
  
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
      (let [logger-name (name logger)
            ;; edge-case: when there is more than one logger with the
            ;; same name (like `root`), we'll receive a vector of
            ;; levels instead of just a single string. So in this case
            ;; we just take the first.
            level (if (string? level) level (first level))]
        (if (set-log-level? logger-name level)
          (core/set-log-level! logger-name level))))
    (response/redirect (make-redirect-url req)))
  (route/resources "/")
  (route/not-found "Page not found"))

(def app
  "Top-level Ring-handler (*THE APP*)."
  
  (-> (handler/site #'main-routes)
      (wrap-base-url)))
