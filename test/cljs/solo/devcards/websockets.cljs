(ns solo.devcards.websockets
  (:require-macros
   [cljs.core.async.macros :refer [go]]
   [devcards.core :refer [defcard-rg]])
  (:require
   [devcards.core]
   [reagent.core :as r]
   [chord.client :refer [ws-ch]]
   [cljs.core.async :refer [<! >! put! close!]]))

(defn open-websocket [!state n]
  (go 
    (let [{:keys [ws-channel error]} (<! (ws-ch "ws://localhost:3000/web-socket"))]
      (if error (println "connection failed")
          (swap! !state assoc-in [:websockts n] ws-channel)))))

(defn start-websockts [!state]
  (let [nr-of-websockets (if-let [nows (:nr-of-websockets @!state)] (js/parseInt nows) 0)]
    (println "starting " nr-of-websockets "websockts")
    (for [n (range nr-of-websockets)]
      (open-websocket !state n))))

(defcard-rg websocket-load
  (let [!state (r/atom nil)]
    (swap! !state assoc-in [:websockets] {1 "foo" 2 "bar"})
    (fn [_]
      [:div
       
       [:table
        [:tr
         [:td "Number of websockets to start"]
         [:td [:input {:type "text"
                       :on-change
                       #(swap! !state assoc-in [:nr-of-websockets]
                               (-> % .-target .-value))}]]]]

       [:input {:type "submit"
                :value "START"
                :on-click #(start-websockts !state)}]

       [:input {:type "submit"
                :value "STOP"}]

       [:table
        (str @!state)
       [:thead
        [:th "ID"]
        [:th "STATUS"]]
    
       [:tbody
        (doall
         (for [[id v] (:websockets @!state)]
           ^{:key id}
           [:tr
            [:td id]
            [:td (str v)]]))]]])))

#_
(defcard-rg websocket-load
  (let [!state (r/atom {})]
    (fn []
      [:span "hello"])))

