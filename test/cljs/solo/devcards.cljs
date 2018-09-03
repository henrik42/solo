(ns solo.devcards
  (:require-macros
   [cljs.core.async.macros :refer [go]]
   [devcards.core :refer [defcard defcard-rg]])
  (:require
   [chord.client :refer [ws-ch]]
   [devcards.core :as devcards]
   [sablono.core :as sab]
   [reagent.core :as r]
   [chord.client :refer [ws-ch]]
   [cljs.core.async :refer [<! >! put! close!]]
   [solo.spa :as spa]
   [solo.devcards.websockets]
   [solo.spa.chord :as solo-chord]
   [solo.spa.sysprops :as sysprops]))

(defcard-rg spa-top-of-page
  (spa/top-of-page))

;; What do we do with Web-Service Calls? robert-hooke it?
(defcard-rg set-log-level-form
  (spa/set-log-level-form))

(defcard-rg input-with-history
  (let [!history (r/atom [])
        !state (let [s (r/atom nil)]
                 (add-watch s :foo
                            #(swap! !history conj @s))
                 (reset! s 1)
                 s)]
    (fn [& _]
      [:div
       [:div (str "history = " @!history)]
       [:div (str "state = " @!state)]

       [:input {:type "submit"
                :value "+1"
                :on-click #(swap! !state inc)}]])))

(defcard-rg server-echo
  (let [!state (r/atom {})
        !server-ch (doto (atom nil)
                     (add-watch :foo
                                #(when %3
                                   (println "++ CLOSING!" %1 %2 %3 %4)
                                   (close! %3)
                                   (println "++ CLOSING DONE!"))))]
    (go
      (let [_ (println #_ js/console.log "+++++ connecting...")
            {:keys [ws-channel error]} (<! (ws-ch "ws://localhost:3001/web-socket"))]
        (if error (println #_ js/console.log "connection failed")
            (do 
              (println #_ js/console.log "+++++ CONNECTED!!!")
              (when @!server-ch
                (println #_ js/console.log "+++++ CLOSING!!!")
                (close! @!server-ch))
              (reset! !server-ch ws-channel)))))
    (with-meta
      (fn []
        [:div
         [:div "!state:" @!state]
         [:input {:type "text"
                  :on-change
                  #(swap! !state assoc :msg
                          (-> % .-target .-value))}]
         [:input {:type "submit"
                  :value "Send!"
                  :on-click #(when @!server-ch
                               (go
                                 (>! @!server-ch (:msg @!state))))}]])
      {:component-will-unmount
       #(do
          (println #_ js/console.log "+++++ UN-MOUNTED!!!")
          (when @!server-ch
            (println #_ js/console.log "+++++ UN-MOUNT CLOSING!!!!")
            (close! @!server-ch)
            (println #_ js/console.log "+++++ UN-MOUNT CLOSED!!!!!")))
       :component-did-mount #(println #_ js/console.log "+++++ MOUNTED!!!")})))

       

