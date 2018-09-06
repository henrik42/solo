(ns solo.devcards.websockets
  "A websocket load-tester card (`websocket-load`).

   Gives you a GUI for entering load-test parameters. Lets you run
   load-tests against a websocket backend at
   `ws://localhost:3001/web-socket`. The GUI presents a table in which
   info about the opened websockets is displayed.

   Currently the backend is not required to send any messages but it
   may. Messages from the backend are consumed and printed."
  
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]
   [devcards.core :refer [defcard-rg]])
  (:require
   [devcards.core]
   [reagent.core :as r]
   [chord.client :refer [ws-ch]]
   [cljs.core.async :refer [<! >! put! close! onto-chan chan timeout]]))

(defn send-messages
  "Sends data through a ws-channel and consumes data from the same
   ws-channel.

   Closes the ws-channel when all messages (if any) have been
   sent. When no messages are sent then the channel is not closed!"

  [!state n]
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
          (swap! !state assoc-in [:websockets n :n-messages-sent]
                 (-> @!state (get-in [:websockets n :n-messages-sent]) inc))
          (<! (timeout 0))
          (if (< m nr-of-messages)
            (recur (inc m))
            (do
              (swap! !state assoc-in [:websockets n :open] false)
              (close! ch))))))))

(defn open-websocket
  "Opens a websockets and sends messages through the ws-channel."

  [!state n]
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
                                                  :open true
                                                  :connect-msec connect-msec})
          (send-messages !state n))))))

(defn start-websockts
  "Runs the load-tester.

  Opens `:nr-of-websockets` websockets and send messages through
  them. Intermediate results/states are displayed in the GUI through
  r/atom `!state."

  [!state]
  (let [nr-of-websockets (if-let [nows (:nr-of-websockets @!state)] (js/parseInt nows) 0)
        counter-ch (chan nr-of-websockets)]
    (println "starting " nr-of-websockets "websockts")
    #_ ;; loop asynchronuously 
    (go 
      (onto-chan counter-ch (range nr-of-websockets))
      (loop []
        (when-let [i (<! counter-ch)]
          (open-websocket !state i)
          (<! (timeout 0))
          (recur))))
    ;; #_ ;; loop synchronuously
    (doseq [n (range nr-of-websockets)]
      (go
        (<! (timeout 0))
        (open-websocket !state n)))))

(defcard-rg websocket-load
  "<small>Enter `Number of websockets to start` (i.e. _open_) and the
   `Number of messages to send` over each websocket.

   Then `START` to run the test which described below. Note that each
   `START` will spawn a __new run__ and these may execute
   concurrently!

   * Websockets will be _started_ and for each (succesfully; see
     below) _started_ websocket sending messages will start right
     away.

   * For each started websocket there will be a row in the table
     below. Each websocket will have an `id`.

   * Starting/opening a websocket may fail. In this case there will
     still be a row shown in the table but no messages will be sent.

   * the number of _started_ websockets (rows in the table) is shown
     in `Number of websockets started`

   * After all messages (if any) of any/each websocket have been sent
     the websocket will be closed.

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
                :on-click #(start-websockts !state)}]

       [:table

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

#_ ;; just for experiments/docu
(defn ws-example []
  (go 
   (let [{:keys [ws-channel error]} (<! (ws-ch "ws://localhost:3001/web-socket"))]
     (if error
       (println "open failed")
       (do 
         (>! ws-channel "hello")
         (close! ws-channel))))))

