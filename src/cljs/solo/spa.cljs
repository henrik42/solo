(ns solo.spa
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.events :as events]
            [goog.dom :as dom]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [clojure.browser.repl :as repl]
            [hipo.interpreter :as hipo-i]
            [cljs-http.client :as http]
            #_ [dommy.core :as dommy
             :refer-macros [sel sel1]]))

;; TODO: move this to a seperate namespace and use CLJS compiler
;; option to load in "dev"
(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

;; ----------------------------------------------------------------------

(def app-state (atom {}))


(defn log [& xs]
  (.log js/console (apply str "LOG:" xs)))

(def log-levels
    "The set of known log-levels (incl. `\"UNKNOWN!\"` and
    `\"NOT-SET!\"`)."

    #{"UNKNOWN!" "NOT-SET!" "DEBUG" "INFO" "WARN" "ERROR" "OFF"})

(defn make-options
  "Returns `:option` Hiccup-vector-seq for `xs`. If `(= x o)` for
  entry `o` of `xs` then `:selected` is `true`."

  [xs x]
  (map (fn [o] [:option {:selected (= x o)} o]) xs))

;; ################### view ##########################

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
  the user to enter a logger-name and select a log-level."

  []
  [:div#new-logger
   [:label {:for "logger"} "LOGGER:"]
   [:input {:type "text",
            :id "logger",
            ;; :value nil,
            :placeholder "Logger Name"}]

   [:span {:style "padding:1em;"}]
   [:label {:for "level"} " LEVEL:"]
   
   ;; TODO: build options
   [:select {;;:name "level",
             :id "level"} (make-options log-levels "INFO")]
   
   [:span {:style "padding:1em;"}]
   [:input {:type "submit", :value "SET LOG-LEVEL"}]])

(defn loggers-form
  "Returns a Hiccup-vector for the *loggers form* which allows the
  user to select a log-level for each of the `loggers`. Within this
  form the user may also enter a `filter-reg-ex` (which will be used
  to `re-find`-match loggers by their `:logger-name`) and check-select
  to hide loggers with `(= log-level NOT-SET!)`."

  []
  [:div#loggers-form
   [:table#loggers
    [:tr
     [:th "LOGGER"
      [:input {:type "text",
               :id "filter",
               ;; :value "",
               :placeholder "Filter Reg-Ex",
               :style "float: right;"}]]
     [:th "LEVEL"
      [:span {:style "float: right;"}
       [:label {:for "hide"} " Hide NOT-SET!:"]
       [:input {:type "checkbox",
                :id "hide",
                 ;;:value "true",
                :checked (get @app-state :hide false)}]]]]
    (for [{:keys [logger-name log-level]} (:loggers @app-state)]
      [:tr
       [:td logger-name]
       [:td [:select {:id "level"} (make-options log-levels log-level)]]])

    [:input {:type "submit", :id "refresh" :value "REFRESH"}]]])

;; ################### controller ##########################

;; call backend web-services and change app state and trigger re-draw

;; ################### main ##########################

;; create view, mount view, trigger service-call and draw app state

(defn http-get
  [url]
  (go (let [res (<! (http/get url))]
        (log "RES:" res))))

(defn load-current-loggers [& _] ;; can be event-callback
  (go (let [res (<! (http/get "ws/get-current-loggers"))]
        (swap! app-state assoc :loggers (get-in res [:body :loggers])))))

(defn render-loggers [& _] ;; can be watch listener
  (-> js/document
      (.getElementById "loggers-form")
      (.replaceWith (hipo-i/create (loggers-form) nil)))
  (events/listen (dom/getElement "refresh") "click" load-current-loggers))

(defn main!
  "Main entry point of the SPA.

  Call this function to create the DOM for the SPA and to populate and
  render/mount the inital app-state at `id` `main`."

  []
  (let [root (hipo-i/create [:div#main
                             (top-of-page)
                             (set-log-level-form)
                             (loggers-form)]
                            nil)]
    (-> js/document
        (.getElementById "main")
        (.replaceWith root))

    (load-current-loggers)))

(add-watch app-state :i-need-no-key render-loggers)
             
(main!)
(log "solo.spa loaded")