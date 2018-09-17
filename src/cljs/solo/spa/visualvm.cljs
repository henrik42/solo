(ns solo.spa.visualvm
  "A Reagent component that lets you read several JVM aspects (like
   heap usage) and send interrupts to threads.

   Some aspects can be read (pulled) from the JVM backend. Some others
   can be pushed from the JVM backend (both via websockts)."

  )

(defn start-websocket
  "Opens the websocket to the JVM backend. The server will then
   send/push JVM data through the websocket."

  [])


(defn visualvm-ui []
  (fn []
    [:span "hello foo bar"]))