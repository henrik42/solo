(ns fokus.fokus
  (:require [reagent.core :as r]))

(defn with-focus [target]
  
  (println (str "*** with-focus " target " called"))
  (with-meta
    (fn [& xs]
      (println (str "*** with-focus COMPONENT " target " called"))
      (into [] xs))
    
    {:component-did-mount
     (fn [this]
       (println (str "*** :component-did-mount " target " called : " this)))}))

(defn input [!state id]
  (fn [_]
    [:input {:type "text"
             :auto-focus (= id (:focus @!state))
             :placeholder (str @!state) #_ (str id)}
     #_ (str @!state)]))

(defn ---autofocus-test []
  (let [with-mount-field-1 (with-focus :field-1)
        with-mount-field-2 (with-focus :field-2)
        !state (r/atom {:focus :field-2})]
    (fn [_]
      [:div
       [:div (str "!state=" @!state)]
       [:div>label
        {:on-mouse-over #(swap! !state assoc :focus :field-1)}
        "focus field-1"]
       [:div>label
        {:on-mouse-over #(swap! !state assoc :focus :field-2)}
        "focus-field-2"]

       #_ [input !state :field-1]
       #_ [input !state :field-2]
       
       [with-mount-field-1 :input {:type "text"
                :auto-focus (= :field-1 (:focus @!state))
                :placeholder "field-1"}]
       [with-mount-field-2 :input {:type "text"
                :auto-focus (= :field-2 (:focus @!state))
                :placeholder "field-2"}]])))

;; ---------------------------------------------------------------------------
;; Using auto-focus will set the focus only at the time when the
;; component is __mounted__. So changing :focus in !state after mount
;; will __not__ set the focus.
;; ---------------------------------------------------------------------------
(defn autofocus-test []
  (let [!state (r/atom {:focus :field-2})]
    (fn [_]
      [:div
       [:div>label
        {:on-mouse-over #(swap! !state assoc :focus :field-1)}
        "focus on field-1"]
       [:div>label
        {:on-mouse-over #(swap! !state assoc :focus :field-2)}
        "focus on field-2"]
       [:input {:type "text"
                :auto-focus (= :field-1 (:focus @!state))
                :placeholder (str @!state)}]
       [:input {:type "text"
                :auto-focus (= :field-2 (:focus @!state))
                :placeholder (str @!state)}]])))






;; ---------------------------------------------------------------------------
;; ---------------------------------------------------------------------------

(def !focus-targets (atom {}))
(def !focused-target (r/atom nil))

(def register-focus-target
  (memoize 
   (fn [target]
     (with-meta
       (fn [& xs]
         (into [] xs))
       {:component-did-mount
        (fn [this]
          (swap! !focus-targets assoc target (r/dom-node this))
          (when (= target @!focused-target)
            (swap! !focused-target str "consumed!")
            (.focus (target @!focus-targets))))}))))

(defn set-focus [id]
  (reset! !focused-target id)
  (when-let [n (id @!focus-targets)]
    (.focus n)))

(defn set-focus-test []
  (let [!state (r/atom {:show :field-2
                        :field-3 "12"})]
    (set-focus :field-2)
    (fn [_]
      [:div
       [:div>label
        {:on-mouse-over #(do 
                           (swap! !state assoc :show :field-1)
                           (set-focus :field-1))}
        "show & focus field-1"]
       [:div>label
        {:on-mouse-over #(do
                           (swap! !state assoc :show :field-2)
                           (set-focus :field-2))}
        "show & focus field-2"]
       (when (and (= :field-1 (:show @!state))
                  (< -1 (.indexOf (str (:field-3 @!state)) "1")))
             [(register-focus-target :field-1)
              :input {:type "text"
                      :style {:width "100%"}
                      :placeholder (str "field-1:" @!state " focused = " @!focused-target)}])
       (when (and (= :field-2 (:show @!state))
                  (< -1 (.indexOf (str (:field-3 @!state)) "2")))
             [(register-focus-target :field-2)
              :input {:type "text"
                      :style {:width "100%"}
                      :placeholder (str "field-2:" @!state " focused = " @!focused-target)}])
       [(register-focus-target :field-3)
        :input {:type "text"
                :style {:width "100%"}
                :default-value (:field-3 @!state)
                :on-change #(swap! !state assoc :field-3 (-> % .-target .-value))
                :placeholder (str "field-3:" @!state " focused = " @!focused-target)}]])))


