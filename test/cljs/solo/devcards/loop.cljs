(ns solo.devcards.loop
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]
   [devcards.core :refer [defcard-rg]])
  (:require
   [devcards.core]
   [reagent.core :as r]
   [chord.client :refer [ws-ch]]
   [cljs.core.async :refer [<! >! put! close! onto-chan chan timeout]]))

(defn yield []
  (let [ch (chan)]
    (goog.async.nextTick #(close! ch))
    ch))

(defn some-expensive-seq [!state]
  (let [with-print? (= :with-print (:calculation @!state))]
    (for [i (range (:n @!state))
          :while (if (:stop @!state)
                   (do
                     (swap! !state assoc :stop (str "stopped at " i))
                     false)
                   true)]
      (do
        (when with-print? (js/console.log i))
        i))))

(defn state-change [!state n]
  (swap! !state assoc :state n))

(defn no-go-busy-loop
  "A loop that does not use go. If you call this function from/through
  an event handler, it will just eat-up/block your event loop until it
  is done. No other events (i.e. DOM updates, GUI interaction) will
  take place -- i.e. processed -- while it is running."

  [!state]
  (doseq [n (some-expensive-seq !state)]
    (state-change !state n))
  (swap! !state assoc :end-ts (js/Date.)))

(defn go-busy-loop
  "A loop that uses go. It consumes the seq through a channel."

  [!state & [with-option]]
  (let [ch (doto (chan)
             (onto-chan (some-expensive-seq !state)))]
    (go-loop [n (<! ch)]
      (condp = with-option
        :with-timeout (<! (timeout 0))
        :with-yield (<! (yield))
        nil)
      (if n
        (do
          (state-change !state n)
          (recur (<! ch)))
        (swap! !state assoc :end-ts (js/Date.))))))

(defcard-rg loop-test
  (let [!state (r/atom {:test :go-busy-loop
                        :calculation :no-print})]
    (fn [_]
      [:div
       [:div
        [:label "Loop n times:"]
        [:input {:type "text"
                 :on-change
                 #(swap! !state assoc :n
                         (-> % .-target .-value))}]]

       [:div 
        [:label "Run test:"]
        [:select {:value (:test @!state)
                  :on-change #(swap! !state assoc :test
                                     (-> % .-target .-value keyword))}
         (map (fn [x] ^{:key x} 
                [:option {:value x} x])
              [:go-busy-loop
               :go-busy-loop-with-timeout
               :go-busy-loop-with-yield
               :no-go-busy-loop])]]

       [:div 
        [:label "Calculation:"]
        #_ [:select {:value (:calculation @!state)
                  :on-change #(swap! !state assoc :calculation
                                     (-> % .-target .-value keyword))}
         (map (fn [x] ^{:key x} 
                [:option {:value x} x])
              [:no-print
               :with-print])]]

       [:div "loop state = " (str (:state @!state))]
       #_ [:div "start-ts = " (str (:start-ts @!state))]
       #_ [:div "end-ts = " (str (:end-ts @!state))]
       #_ [:div "duration (msec) = " (str (- (:end-ts @!state) (:start-ts @!state)))]
       [:div "loops per sec = " (str (/ (* 1000 (inc (:state @!state)))
                                        (- (:end-ts @!state) (:start-ts @!state))))]
       
       [:input {:type "submit"
                :value "START"
                :on-click
                (fn []
                  (swap! !state dissoc :stop)
                  (swap! !state update :n-runs inc)
                  (swap! !state assoc :start-ts (js/Date.))
                  (condp = (:test @!state)
                    :go-busy-loop (go-busy-loop !state)
                    :go-busy-loop-with-timeout (go-busy-loop !state :with-timeout)
                    :go-busy-loop-with-yield (go-busy-loop !state :with-yield)
                    :no-go-busy-loop (no-go-busy-loop !state)))}]
       
       [:input {:type "submit"
                :value "STOP"
                :on-click
                #(swap! !state assoc :stop true)}]
       
       #_ [:div "debug = " (str @!state)]])))


