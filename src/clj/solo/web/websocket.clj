(ns solo.web.websocket
  (:use compojure.core)
  (:require [ring.middleware.json :as json]
            [chord.http-kit :refer [wrap-websocket-handler]]
            [clojure.core.async :as a]
            [hiccup.form :as hf]
            [hiccup.page :as hp]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [solo.web :as web]))

;; Ein Channel, in den alle ankommenden Nachrichten geschrieben
;; werden. Alles was mit den Web-Socket-Nachrichten passieren soll,
;; MUSS durch diesen Channel erbracht werden.
;;(def msg-queue (chan))

;; Der GET Request baut die Web-Socket auf. Anschließend kann man
;; asynchron/go-loop Nachrichten aus dem Channel `ws-channel` lesen
;; und schreiben. Man kann auch mehrere Web-Sockets (parallel)
;; aufbauen.
;;
;; Die Web-Socket kann beliebige Nachrichten transportieren. Wenn man
;; verschiedene "Adressaten" hat, muss man multiplexen. D.h. man
;; braucht einen Channel, in den man die empfangenen Nachrichten
;; schreibt und dieser Channelm muss die Nachrichten dann in den
;; richtigen Empfänger Channel schreiben.
;;
;; Tests:
;; (1) mehrere Web-Sockets parallel aufbauen
;;
;; (2) Requests "verzögern", so dass Antworten in "falscher"
;;     Reihenfolge am Client empfangen werden.
;;
;; (3) 
(defroutes web-socket-handler
  (GET "/web-socket" {:keys [ws-channel] :as req}
    (.println System/out (str "++++ Web-Socket connection request:" req))
    (if-not ws-channel
      (do
        (.println System/out (str "++++ Web-Socket connection failed"))
        "web socket connection failed!")
      (do 
        (.println System/out (str "++++ Web-Socket connection ESTABLISHED"))
        (a/go-loop []
                   (if-let [{:keys [message] :as msg} (a/<! ws-channel)]
                     (do
                       (.println System/out (str "msg received:" msg))
                       (recur))
                     (.println System/out (str "ws closed!"))))
        "web socket establised!"))))
    
