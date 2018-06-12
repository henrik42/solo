(ns solo.spa
  (:require [clojure.browser.repl :as repl]
            [hipo.interpreter :as hipo-i]
            [dommy.core :as dommy
             :refer-macros [sel sel1]]))

;; TODO: move this to a seperate namespace and use CLJS compiler
;; option to load in "dev"
(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

;; ----------------------------------------------------------------------

(def app-state
  {:loggers [{:logger-name "foo" :log-level "DEBUG"}]
   :hide false})

(def log-levels #{"UNKNOWN!" "NOT-SET!" "DEBUG" "INFO" "WARN" "ERROR" "OFF"})

(defn make-options [xs x]
  (map (fn [o] [:option {:selected (= x o)} o]) xs))

;; ################### view ##########################

(defn top-of-page []
  [:div#top-of-page "SOLO Web App" " -- "
   [:a {:href "generated-doc/index.html"} "doc"]
   " -- "
   [:a {:href "generated-doc/solo-source.html"} "source"]
   " -- "
   [:a {:href "https://github.com/henrik42/solo/"} "github"]])

(defn set-log-level-form []
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

(defn loggers-form []
  [:div 
   [:table#loggers
    [:tr
     [:th "LOGGER"
      [:input {:type "text",
               :id "FILTER",
               ;; :value "",
               :placeholder "Filter Reg-Ex",
               :style "float: right;"}]]
     [:th "LEVEL"
      [:span {:style "float: right;"}
       [:label {:for "hide"} " Hide NOT-SET!:"]
       [:input {:type "checkbox",
                :id "hide",
                 ;;:value "true",
                :checked (:hide app-state)}]]]]
    (for [{:keys [logger-name log-level]} (:loggers app-state)]
      [:tr
       [:td logger-name]
       [:td [:select {:id "level"} (make-options log-levels log-level)]]])

    [:input {:type "submit", :value "REFRESH"}]]])

;; ################### controller ##########################

;; call backend web-services and change app state and trigger re-draw

;; ################### main ##########################

;; create view, mount view, trigger service-call and draw app state

(defn main []
  (let [root (hipo-i/create [:div#main
                             (top-of-page)
                             (set-log-level-form)
                             (loggers-form)]
                            nil)]
    (-> js/document
        (.getElementById "main")
        (.replaceWith root))))

(main)
