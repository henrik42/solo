;; (in-ns 'solo.devcards.yields)
(ns solo.devcards.yields
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [cljs.core.async :refer [<! >! put! close! onto-chan chan timeout]]))

(def measurement (atom nil))

(defn report-measurement [& xs]
  (println (str "measurement : " (apply str xs) @measurement)))

(defn start! []
  (reset! measurement {:start-ts (js/Date.)}))

(defn stop! [n]
  (let [end-ts (js/Date.)
        dur-ms (- end-ts (:start-ts @measurement))
        rate (if (zero? dur-ms) :inf (* n (/ 1000 dur-ms)))]
    (swap! measurement merge {:end-ts end-ts
                              :dur-ms dur-ms
                              :dur-diff (- dur-ms (:dur-ms @measurement 0))
                              :n n
                              :rate rate})))

(defn snapshot! [n]
  (let [end-ts (js/Date.)
        dur-ms (- end-ts (:start-ts @measurement))
        rate (if (zero? dur-ms) :inf (* n (/ 1000 dur-ms)))]
    (swap! measurement merge {:end-ts end-ts
                              :dur-diff (- dur-ms (:dur-ms @measurement 0))
                              :dur-ms dur-ms
                              :n n
                              :rate rate})))

(defn do-something [i]
  (loop [s "x"
         i i]
    (if (pos? i)
      (recur (str s s) (dec i))
      s)))

(defn long-running-computation [n m]
   (doseq [i (range 1 (inc n))]
     (do-something m)
     (snapshot! i)
     (report-measurement "i=" i " : ")))

(defn long-running-computation-with-go [n m]
  (go 
   (doseq [i (range 1 (inc n))]
     (do-something m)
     (snapshot! i)
     (report-measurement "i=" i " : "))))

;; (defn start-concurrent-task []
;;   (<! (timeout 10))
;;   (println "tick")
;;   (recur))
;; 
;; (defn stop-concurrent-task []
;; 

(defn run-test [with-go]
  (let [n-loops #_ 10 20
        work-load 25 #_ 10]
    (start!)
    (if with-go
      (long-running-computation-with-go n-loops work-load)
      (do
        (long-running-computation n-loops work-load)
        (stop! n-loops)
        (report-measurement "final")))))
  

