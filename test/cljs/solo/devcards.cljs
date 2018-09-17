(ns solo.devcards
  (:require-macros
   [devcards.core :refer [defcard defcard-rg]])
  (:require
   [devcards.core :as devcards]
   [sablono.core :as sab]
   [reagent.core :as r]
   [solo.spa :as spa]
   [solo.devcards.visualvm-dev]
   [solo.spa.sysprops :as sysprops]))

(defcard-rg spa-top-of-page
  (spa/top-of-page))

;; What do we do with Web-Service Calls? robert-hooke it?
(defcard-rg set-log-level-form
  (spa/set-log-level-form))

(defcard-rg input-with-history
  (let [!history (r/atom [])
        !state (let [s (r/atom nil)]
                 (add-watch s :foo
                            #(swap! !history conj @s))
                 (reset! s 1)
                 s)]
    (fn [& _]
      [:div
       [:div (str "history = " @!history)]
       [:div (str "state = " @!state)]

       [:input {:type "submit"
                :value "+1"
                :on-click #(swap! !state inc)}]])))


