(ns solo.http-kit
  (require [org.httpkit.server :refer [run-server]]
           [clojure.core.async :as a]
           [chord.http-kit :refer [wrap-websocket-handler]])
  (:use compojure.core))

;; ----------------- networking ------------------------

;; TBD: in the core below we want to just "make a comm-channel" for
;; the web-socket. That comm-channel should give us two-way-comm. And
;; we want a control-channel with which we can talk "about" the
;; comm-channel (close it, reconnect it, etc.). And we want a
;; control-state that tells us something about the state of the
;; comm-channel.
;;
;; All this should go to some lib namespace. And it should be usable
;; from Clojure & ClojureScript.

(defonce ctrl-ch
  (a/chan (a/sliding-buffer 1)))

(defonce ctrl-mult
  (let [m (a/mult ctrl-ch)
        watch-ch (a/chan (a/sliding-buffer 1))]
    (a/tap m watch-ch)
    (a/go-loop
     []
     (when-let [c (a/<! watch-ch)]
       (print (str "ctrl-ch: " c))
       (recur)))
    m))

(def !run (atom :true))

(defn -run! []
  (reset! !run true))

(defn -stop! []
  (reset! !run false))

;; ------------------------- core -----------------------------

;; TBD: more things in java.lang.Runtime to support
;; addShutdownHook(Thread hook)
;; exec(String command)
;; exit(int status)
;; gc()
;; halt(int status)
;; removeShutdownHook(Thread hook)
;; runFinalization()
;; traceInstructions(boolean on)
;; traceMethodCalls(boolean on)

;; TBD: more things in java.lang.System to support
;; getenv()
;; getProperties()

;; TBD: things to support in Thread:
;; dumpStack()
;; getAllStackTraces()
;; interrupt()

(defn sys-info []
  (let [rt (.. java.lang.Runtime getRuntime)]
    {:available-processors (.availableProcessors rt)
     :free-memory-bytes (.freeMemory rt)
     :max-memory-bytes (.maxMemory rt)
     :total-memory (.totalMemory rt)
     }))

;; establish web-socket

(defn process-msg [m]
  (println (str "msg=" m)))

(defroutes sys-info-handler
  (GET "/sys-info" {:keys [ws-channel]}
    (a/go
     (println "/sys-info: client connects to web-socket")
     (let [ctrl-ch* (a/chan (a/sliding-buffer 10))
           !counter (atom 0)]
       (try
         (a/tap ctrl-mult ctrl-ch*)
         (loop []
           (println "/sys-info: looping")
           (let [c (merge {:msg-type :sys-info
                           :ts (java.util.Date.)
                           :n (swap! !counter inc)} (sys-info))
                 r (a/alt!
                    :priority true
                    ws-channel ([v _] (a/go
                                        (println (str "/sys-info: msg from client " v))
                                        (let [r (process-msg v)]
                                          (println (str "/sys-info: sending to client " r))
                                          (a/>! ws-channel))))
                     ctrl-ch* ([v _] (do
                                      (println (str "/sys-info: read from ctrl-channel (leaving loop): " v))
                                      false))
                     [[ws-channel c]] (do
                                       (println (str "/sys-info: sending to client:" c))
                                       :keep-going)
                    )]
             (when (and @!run r)
               (a/<! (a/timeout 2000))
               (recur))))
         (catch Throwable t
           (println (str "/sys-info: oops " t)))))
     ;;(a/close! ws-channel)
     (println "/sys-info: bye!"))
    "ok"))

;; ------------------------- server ---------------------------
;; TDB: this should be seperated from the core

(defn start-server []
  (run-server
   (-> #'sys-info-handler wrap-websocket-handler)
   {:port 3001}))
