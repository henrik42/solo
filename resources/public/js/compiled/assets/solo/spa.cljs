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
             :id "level"} '([:option {:selected false} "WARN"])]
   
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
                :value "true",
                :checked true}]]]]
    #_ (for [{:keys [logger-name log-level]} loggers]
      [:tr
       [:td logger-name]
       [:td (hf/drop-down logger-name log-levels log-level)]])
    [:input {:type "submit", :value "SET LOG-LEVELS"}]]])


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
    (-> js/document (.getElementById "main") (.replaceWith root))))

(main)
