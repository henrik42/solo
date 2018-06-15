(ns solo.spa
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<! >!]]
            [clojure.browser.repl :as repl]
            [hipo.interpreter :as hipo]
            [cljs-http.client :as http]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(defn log [& xs]
  (.log js/console (apply str "LOG:" xs)))

(def log-levels
    "The set of known log-levels (incl. `\"UNKNOWN!\"` and
    `\"NOT-SET!\"`)."

    #{"UNKNOWN!" "NOT-SET!" "DEBUG" "INFO" "WARN" "ERROR" "OFF"})

;; ################### model ##########################

(declare ^:export render-loggers)

(def app-state
  (let [s (atom {})]
    (add-watch s :i-need-no-key #'render-loggers)
    s))

;; ################### controller ##########################

(defn load-current-loggers [& _] ;; can be event-callback
  (go (let [res (<! (http/get "ws/get-current-loggers"))]
        (swap! app-state assoc :loggers (get-in res [:body :loggers])))))

(defn set-log-level [& _] ;; can be event-callback
  (let [logger (-> js/document (.getElementById "logger") (.-value))
        level (-> js/document (.getElementById "level") (.-value))]
    (go 
     (http/post (str "/ws/set-log-level/" logger "/" level))
     (load-current-loggers))))

;; ################### view ##########################

(defn make-options
  "Returns `:option` Hiccup-vector-seq for `xs`. If `(= x o)` for
  entry `o` of `xs` then `:selected` is `true`."

  [xs x]
  (map (fn [o] [:option {:selected (= x o)} o]) xs))

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
            :placeholder "Logger Name"}]

   [:span {:style "padding:1em;"}]
   [:label {:for "level"} " LEVEL:"]
   [:select {:id "level"} (make-options log-levels "INFO")]
   
   [:span {:style "padding:1em;"}]
   [:input {:type "submit"
            :on-click set-log-level
            :value "SET LOG-LEVEL"}]])

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
               :placeholder "Filter Reg-Ex",
               :style "float: right;"}]]
     [:th "LEVEL"
      [:span {:style "float: right;"}
       [:label {:for "hide"} " Hide NOT-SET!:"]
       [:input {:type "checkbox",
                :id "hide",
                :checked (get @app-state :hide false)}]]]]
    
    (for [{:keys [logger-name log-level]} (:loggers @app-state)]
      [:tr
       [:td logger-name]
       [:td [:select (make-options log-levels log-level)]]])

    [:input {:type "submit"
             :on-click load-current-loggers
             :value "REFRESH"}]]])

;; ################### main ##########################

(defn ^:export render-loggers
  "Creates the DOM for `(loggers-form)` and mounts it at
  `id=\"loggers-form\"`."

  [& _] ;; can be watch listener
  (-> js/document
      (.getElementById "loggers-form")
      (.replaceWith (hipo/create (loggers-form) nil))))

(defn main
  "Main entry point of the SPA.

  Creates the DOM for the SPA and mounts it at `id=\"main\"`. Then
  calls `(load-current-loggers)`.

  The `main`-DOM will contain the `(loggers-form)`-DOM with
  `id=\"loggers-form\"` so that this sub-DOM can be _updated_ via
  `render-loggers`."

  []
  (let [root (hipo/create [:div#main
                             (top-of-page)
                             (set-log-level-form)
                             (loggers-form)]
                            nil)]
    (-> js/document
        (.getElementById "main")
        (.replaceWith root))

    (load-current-loggers)))

(main)
