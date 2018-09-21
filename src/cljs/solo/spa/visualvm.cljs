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
                      :server-sent c
                      :timestamp (js/Date.))
               (println "recur!")
               (recur))
             (println "socket closes")))))))

(defn visualvm-ui []
  (let [!state (r/atom {:availableProcessors "pending"})]
    (start-websocket !state)
    (fn []
      [:table
       [:tr>td (str "state = " @!state)]
       [:tr
        [:td "availableProcessors"] [:td (:availableProcessors @!state)]]])))
      