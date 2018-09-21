(ns solo.spa.visualvm
  "A Reagent component that lets you read several JVM aspects (like
   heap usage) and send interrupts to threads.

   Some aspects can be read (pulled) from the JVM backend. Some others
   can be pushed from the JVM backend (both via websockts)."
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as r]
            [chord.client :refer [ws-ch]]
            [cljs.core.async :refer [<! >! put! close! onto-chan chan timeout]]))

(defn start-websocket
  "Opens the websocket to the JVM backend. The server will then
   send/push JVM data through the websocket."

  [!state]
  (print "starting websocket")
  (go
   (let [{:keys [ws-channel error]} (<! (ws-ch "ws://localhost:3001/sys-info"))]
     (if error (println (str "could not open websocket: " error))
         (loop []
           (println "reading web-socket")
           (if-let [c (<! ws-channel)]
             (do 
               (println (str "server sent: " c))
               (swap! !state assoc
                      :server-sent (:message c)
                      :timestamp (js/Date.))
               (println "recur!")
               (recur))
             (println "socket closes")))))))

(defn visualvm-ui []
  (let [!state (r/atom {:server-sent "not connected"})]
    (start-websocket !state)
    (fn []
      [:table
       [:tbody
        [:tr>td (str "state = " @!state)]
        [:tr [:td "current time"] [:td (str (:timestamp @!state))]]
        (doall
         (for [k [:available-processors ;; "Number of proc"
                  :total-memory-bytes
                  :free-memory-bytes
                  :max-memory-bytes]]
           ^{:key (str k)}
           [:tr [:td (name k)] [:td (get-in @!state [:server-sent k] "n/a")]]))]])))
      