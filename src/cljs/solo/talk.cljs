(ns solo.talk
  (:require [reagent.core :as r]))

(defonce state (r/atom {}))

(defn show-state []
  [:div (str @state)])

(defn show-something [x]
  [:span "hello " (:name @state)])

(defn enter-something []
  [:input {:type "text"
           :on-change #(swap! state assoc :name (-> % .-target .-value))}])

(r/render [:div
           [show-state]
           [show-something "foo"]
           [enter-something]]
          (js/document.getElementById "main"))

