(ns solo.throttler
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]])
  (:require [clojure.core.async :refer [chan >! <! timeout close! dropping-buffer]]))

(def ^{:no-doc true} min-sleep-time 10)

(defn- round [n] (Math/round (double n)))

(def ^{:no-doc true} unit->ms
  {:microsecond 0.001
   :millisecond 1
   :second 1000
   :minute 60000
   :hour 3600000
   :day 86400000
   :month 2678400000})

(defn- chan-throttler* [rate-ms bucket-size]
  (let [sleep-time (round (max (/ rate-ms) min-sleep-time))
        token-value (round (* sleep-time rate-ms))   ; how many messages to pipe per token
        bucket (chan (dropping-buffer bucket-size))] ; we model the bucket with a buffered channel

    ;; The bucket filler thread. Puts a token in the bucket every
    ;; sleep-time seconds. If the bucket is full the token is dropped
    ;; since the bucket channel uses a dropping buffer.

    ;;(print (str "creating bucket " sleep-time))

    ;; This go never ends!
    (go
     (while (>! bucket :token)
       ;;(print (str "tick:" (js/Date.)))
       (<! (timeout (int sleep-time)))))

    ;; The piping thread. Takes a token from the bucket (blocking until
    ;; one is ready if the bucket is empty), and forwards token-value
    ;; messages from the source channel to the output channel.

    ;; For high frequencies, we leave sleep-time fixed to
    ;; min-sleep-time, and we increase token-value, the number of
    ;; messages to pipe per token. For low frequencies, the token-value
    ;; is 1 and we adjust sleep-time to obtain the desired rate.

    (fn [c]
      (let [c' (chan)] ; the throttled chan
        (go
         (while (<! bucket) ; block for a token
           ;;(print "wake-up")
           (dotimes [_ token-value]
             ;;(when-not (pipe c c')
             ;;(close! bucket)))))
             ;;(print "pipe!")
             (if-let [x (<! c)]
               (>! c' x)
               (do
                 (close! c')
                 (close! bucket))))))
        c'))))

(defn chan-throttler
  "Returns a function that will take an input channel and return an
   output channel with the desired rate. Optionally acceps a bucket size
   for bursty channels.

   If the throttling function returned here is used on more than one
   channel, they will all share the same token-bucket. This means their
   overall output rate combined will be equal to the provided rate. In
   other words, they will all share the alloted bandwith using
   statistical multiplexing.

   See fn-throttler for an example that can trivially be extrapolated to
   chan-throttler."

  ([rate unit]
     (chan-throttler rate unit 1))
  ([rate unit bucket-size]
     (when (nil? (unit->ms unit))
       (throw (js/Error.
               (str "Invalid unit. Available units are: " (keys unit->ms)))))

     (when-not (and (number? rate) (pos? rate))
       (throw (js/Error. "rate should be a positive number")))

     (when (or (not (integer? bucket-size)) (neg? bucket-size))
       (throw (js/Error. "bucket-size should be a non-negative integer")))

     (let [rate-ms (/ rate (unit->ms unit))]
       (chan-throttler* rate-ms bucket-size))))

(defn throttle-chan
     "Takes a write (_input_) channel, a goal rate and a unit and
      returns a read (_output_) channel. Messages written to the
      _input_ channel can be read from the throttled _output_ channel
      at a rate that will be at most the provided goal rate.

      Optionally takes a bucket size, which will correspond to the
      maximum number of burst messages.

      As an example, the channel produced by calling:

      (throttle-chan (chan) 1 :second 9)

      Will transmit 1 message/second on average but can transmit up to
      10 messages on a single second (9 burst messages + 1
      message/second).

      Note that after the burst messages have been consumed they have to
      be refilled in a quiescent period at the provided rate, so the
      overall goal rate is not affected in the long term.

      The throttled channel will be closed when the input channel
      closes."

  ([c rate unit]
     (throttle-chan c rate unit 1))

  ([c rate unit bucket-size]
     ((chan-throttler rate unit bucket-size) c)))

