(ns solo.devcards.websockets
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]
   [devcards.core :refer [defcard-rg]])
  (:require
   [devcards.core]
   [reagent.core :as r]
   [chord.client :refer [ws-ch]]
   [cljs.core.async :refer [<! >! put! close! onto-chan chan]]))

(defn send-messages [!state n]
  (let [nr-of-messages (if-let [nows (:nr-of-messages @!state)] (js/parseInt nows) 0)
        ch (get-in @!state [:websockets n :chan])]
    (when (pos? nr-of-messages)
      (go-loop []
        (println (str "listening on socket " n))
        (if-let [msg (<! ch)]
          (do
            (println ("socket " n " : " msg))
            (recur))
          (println "socket " n " CLOSED")))
      (go-loop [m 1]
        (let [msg (str "hello " m " from socket " n)]
          (println msg)
          (>! ch msg)
          (if (< m nr-of-messages)
            (recur (inc m))
            ;; Wenn man die Socket sofort schließt, erhält der Server
            ;; noch nicht mal die Nachrichten
            #_ (close! ch)))))))

(defn ws-example []
  (go 
   (let [{:keys [ws-channel error]} (<! (ws-ch "ws://localhost:3001/web-socket"))]
     (if error
       (println "open failed")
       (do 
         (>! ws-channel "hello")
         (close! ws-channel))))))

;; Öffnet die Websocket "n". Falls sie erfolgreich geöffnet werden
;; kann, wird sie in !state hinterlegt. Ansonsten wird der Fehler
;; hinterlegt.
(defn open-websocket [!state n]
  (println "starting websocket " n)
  (go 
    (let [start-ts (js/Date.)
          {:keys [ws-channel error]} (<! (ws-ch "ws://localhost:3001/web-socket"))
          connect-msec (- (js/Date.) start-ts)]
      (if error
        (swap! !state assoc-in [:websockets n] {:chan "error!"
                                                :connect-msec connect-msec})
        (do
          (swap! !state assoc-in [:websockets n] {:chan ws-channel
                                                  :connect-msec connect-msec})
          (send-messages !state n))))))

;; Startet in einer Schleife :nr-of-websockets websockets.
;;
;; Hinweis: die Schleife wird als Teil der Event-Verarbeitung
;; durchlaufen. Erst wenn die Schleife fertig ist, ist auch der Event
;; verarbeitet. Bis dahin erfolgt kein Update.
;;
;; Man sollte alternativ eine rekursive Lösung finden, bei der jeder
;; Rekursionsschritt einzeln asynchron verarbeitet wird.
(defn start-websockts [!state]
  (let [nr-of-websockets (if-let [nows (:nr-of-websockets @!state)] (js/parseInt nows) 0)
        counter-ch (chan nr-of-websockets)]
    (println "starting " nr-of-websockets "websockts")
    ;; #_ ;; loop asynchronuously 
    (go 
      (onto-chan counter-ch (range nr-of-websockets))
      (loop []
        (when-let [i (<! counter-ch)]
          (open-websocket !state i)
          (recur))))
    #_ ;; loop synchronuously
    (doseq [n (range nr-of-websockets)]
         (open-websocket !state n))))

(defcard-rg websocket-load
  "<small>Enter `Number of websockets to start` (i.e. _open_) and the
   `Number of messages to send` over each websocket.

   Then `START` to run the test as described below. Note that each
   `START` will spawn a __new run__ and these may execute
   concurrently!

   * Websockets will be _started_ and for each (succesfully; see
     below) _started_ websocket sending messages will start right
     away.

   * For each started websockets there will be a row in the table
     below. Each websocket will have an `id`.

   * Starting/opening a websocket may fail. In this case there will
     still be a row shown in the table but no messages will be sent.

   * the number of _started_ websockets (rows in the table) is shown
     in `Number of websockets started`

   </small>"
  
  (let [!state (r/atom nil)]
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
         ;; optimize!!!
         [:td (count (:websockets @!state))]]]

       [:input {:type "submit"
                :value "START"
                ;; man muss verhindern, dass man das mehrfach
                ;; anstartet.
                :on-click #(start-websockts !state)}]

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


