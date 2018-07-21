(ns solo.talk
  (:require [reagent.core :as r]))

(defonce state (r/atom {:slide 1}))

(defn show-state []
  [:div (str @state)])

(defn show-something [x]
  [:span "hello " (:name @state)])

(defn enter-something []
  [:input {:type "text"
           :default-value (:name @state)
           :on-change #(swap! state assoc :name (-> % .-target .-value))}])

(defn seiten-wahl []
  [:select {:value (:slide @state)
            :on-change #(swap! state assoc :slide (-> % .-target .-value js/parseInt))}
   (for [i [1 2 3]]
     [:option i])])

(defmulti slide identity)

(defmethod slide 1 []
  [:span
   [:div.title.boxed "slide 1:"]
   [:div
    "Dies ist eine interaktve Seite mit einem Textfeld :"
    [enter-something]]])

(defmethod slide 2 []
  [:div.title "slide 2:"])

(defmethod slide 3 []
  [:span "slide 3"])

(defmethod slide :default []
  [:span "oops"])

(defn current-slide []
  (slide (:slide @state)))

(r/render [:div
           [show-state]
           [seiten-wahl]
           [current-slide]
           #_ [show-something "foo"]
           #_ [enter-something]]
          (js/document.getElementById "main"))

