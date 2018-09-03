(ns solo.devcards.websockets
  (:require-macros
   [cljs.core.async.macros :refer [go]]
   [devcards.core :refer [defcard-rg]])
  (:require
   [devcards.core]
   [reagent.core :as r]
   [chord.client :refer [ws-ch]]
   [cljs.core.async :refer [<! >! put! close!]]))

;; Öffnet die Websocket "n". Falls sie erfolgreich geöffnet werden
;; kann, wird sie in !state hinterlegt. Ansonsten wird der Fehler
;; hinterlegt.
(defn open-websocket [!state n]
  ;;(println "starting websocket " n)
  (go 
    (let [start-ts (js/Date.)
          {:keys [ws-channel error]} (<! (ws-ch "ws://localhost:3001/web-socket"))
          connect-msec (- (js/Date.) start-ts)]
      (if error
        (swap! !state assoc-in [:websockets n] {:chan "error!"
                                                :connect-msec connect-msec})
        (swap! !state assoc-in [:websockets n] {:chan ws-channel
                                                :connect-msec connect-msec})))))

;; Startet in einer Schleife :nr-of-websockets websockets.
;;
;; Hinweis: die Schleife wird als Teil der Event-Verarbeitung
;; durchlaufen. Erst wenn die Schleife fertig ist, ist auch der Event
;; verarbeitet. Bis dahin erfolgt kein Update.
;;
;; Man sollte alternativ eine rekursive Lösung finden, bei der jeder
;; Rekursionsschritt einzeln asynchron verarbeitet wird.
(defn start-websockts [!state]
  (let [nr-of-websockets (if-let [nows (:nr-of-websockets @!state)] (js/parseInt nows) 0)]
    ;;(println "starting " nr-of-websockets "websockts")
    (doseq [n (range nr-of-websockets)]
           (open-websocket !state n))))

(defcard-rg websocket-load
  (let [!state (r/atom nil)]
    ;;(swap! !state assoc-in [:websockets] {1 "foo" 2 "bar"})
    (fn [_]
      [:div
       
       [:table
        [:tr
         [:td "Number of websockets to start"]
         [:td [:input {:type "text"
                       :on-change
                       #(swap! !state assoc-in [:nr-of-websockets]
                               (-> % .-target .-value))}]]]
        [:tr 
         [:td "Number of messages to send"]
         [:td [:input {:type "text"
                       :on-change
                       #(swap! !state assoc-in [:nr-of-messages]
                               (-> % .-target .-value))}]]]
       
        [:tr
         [:td "Number of websockets started"]
         [:td (count (:websockets @!state))]]]

       [:input {:type "submit"
                :value "START"
                ;; man muss verhindern, dass man das mehrfach
                ;; anstartet.
                :on-click #(start-websockts !state)}]

       [:input {:type "submit"
                :value "STOP"}]

       [:table

        ;; (str @!state)
        
       [:thead
        [:th "ID"]
        [:th "STATUS"]]
    
       [:tbody
        (doall
         (for [[id v] (sort-by first (:websockets @!state))]
           ^{:key id}
           [:tr
            [:td id]
            [:td (str v)]]))]]])))

#_
(defcard-rg websocket-load
  (let [!state (r/atom {})]
    (fn []
      [:span "hello"])))

