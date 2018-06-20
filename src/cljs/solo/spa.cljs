(ns solo.spa
  "A Single Page Application (SPA)."
  
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<! >!]]
            [clojure.browser.repl :as repl]
            [hipo.interpreter :as hipo]
            [goog.dom :as gdom]
            [cljs-http.client :as http]))

;;TODO: use the GUI to start a REPL
#_ (defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(defn log
  "Prints to `js/console`."

  [& xs]
  (.log js/console (apply str "log:" xs)))

(def log-levels
    "The set of known log-levels (incl. `\"UNKNOWN!\"` and
    `\"NOT-SET!\"`)."

    #{"UNKNOWN!" "NOT-SET!" "DEBUG" "INFO" "WARN" "ERROR" "OFF"})

;; ################### model ##########################

(declare ^:export render-loggers)

(def app-state
  "THE STATE of the application. Whenever this state changes
  `render-loggers` will be called to update/(re)-render the GUI."
  
  (let [s (atom {})]
    (add-watch s :i-need-no-key #'render-loggers)
    s))

(defn filter-reg-ex
  "Returns the `app-state`'s `:filter-reg-ex` (`js/RegExp`). Returns
  `#\".*\"` if the `:filter-reg-ex` is empty/not-set or not a valid
  `js/RegExp` expression. Never returns `nil`."

  []
  (let [reg-ex (:filter-reg-ex @app-state #".*")]
    (try (js/RegExp reg-ex) (catch :default t #".*"))))

(defn reg-ex->str [r]
  (let [r (str r)]
    (.substring r 1 (dec (.-length r)))))

(defn set-filter-reg-ex! [x]
  (swap! app-state assoc :filter-reg-ex
         (if (string? x) x
             (-> x .-currentTarget .-value))))

(defn hide?
  "Returns the `app-state`'s `:hide` (`boolean`). Returns `false` if
  the `:hide` is empty/not-set. Never returns `nil`."
  
  []
  (:hide @app-state false))

(defn set-hide!
  "Eventlistener that sets the `app-state`'s `:hide`-value to the
  current `-checked`-value of the checkbox (i.e. the event
  target). Call with a `boolean` to set the `app-state`'s
  `:hide`-value. Returns the new `app-state`."

  [x]
  (swap! app-state assoc :hide
         (if (boolean? x) x
             (-> x .-currentTarget .-checked))))

(defn loggers
  "Returns the `app-state`'s `:loggers` (a _map-seq_). If `(hide?)` is
  truthy loggers with `:log-level \"NOT-SET!\" will be filtered out."

  []
  (let [filter-reg-ex (filter-reg-ex)
        hide (hide?)]
    (->> (:loggers @app-state)
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
                  true))))))

;; ################### controller ##########################

(defn load-current-loggers [& _]
  (go
   (let [res (<! (http/get "ws/get-current-loggers"))]
     (swap! app-state assoc :loggers (get-in res [:body :loggers])))))

(defn set-log-level! [logger-name log-level]
  (go 
   (http/post (str "/ws/set-log-level/" logger-name "/" log-level))
   (load-current-loggers)))

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
            :on-click
            (fn [_]
              (let [logger (-> js/document (.getElementById "logger") (.-value))
                    level (-> js/document (.getElementById "level") (.-value))]
                (set-log-level! logger level)))
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
               :value (-> (filter-reg-ex) (reg-ex->str))
               :on-change set-filter-reg-ex!
               :placeholder "Filter Reg-Ex",
               :style "float: right;"}]]
     [:th "LEVEL"
      [:span {:style "float: right;"}
       [:label {:for "hide"} " Hide NOT-SET!:"]
       [:input {:type "checkbox",
                :id "hide",
                :on-change set-hide!
                :checked (hide?)}]]]]
    
    (for [{:keys [logger-name log-level]} (loggers)]
      [:tr
       [:td logger-name]
       [:td [:select
             {:on-change
              (fn [evt]
                (let [log-level (-> evt .-currentTarget .-value)]
                  (set-log-level! logger-name log-level)))}
             (make-options log-levels log-level)]]])

    [:input {:type "submit"
             :on-click load-current-loggers
             :value "REFRESH"}]]])

;; ################### main ##########################

(defn ^:export render-loggers
  "Creates the DOM for `(loggers-form)` and mounts it at
  `id=\"loggers-form\"`. So this (re)renders the loggers-form."

  [& _] 
  (-> js/document
      (.getElementById "loggers-form")
      (.replaceWith (hipo/create (loggers-form) nil))))

(defn main
  "Main entry point of the SPA.

  Creates the `main`-DOM for the SPA and mounts it in the current DOM
  at `id=\"main\"`. So the initial hosting page must contain such a
  `id=\"main\"-node. Then calls `(load-current-loggers)`.

  The `main`-DOM contains the `(loggers-form)`-DOM with
  `id=\"loggers-form\"` so that this sub-DOM can be _updated_ via
  `render-loggers` whenever the `app-state` changes."

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
(log "loaded")