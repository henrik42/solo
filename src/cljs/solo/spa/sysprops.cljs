(ns solo.spa.sysprops
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<!]]
            [reagent.core :as r]
            [cljs-http.client :as http]))

;; ----------------------------------------------------------------------
;; TBD: refactor into separate namespace

(defn eval-in-backend
  "Asynchronuously evaluates `source-string` in the backend JVM via
  web-service `POST ws/eval/` (see `solo.spa/eval-string`)."

  [source-string]
  (go
   (let [response (<! (http/post "ws/eval/" {:query-params {:eval source-string}}))
         result (:body response)]
     ;;(println (str "RESPONSE : " response))
     ;;(println (pr-str "(eval-in-backend " source-string ") --> " result))
     (println (pr-str "(eval-in-backend " source-string ")"))
     result)))

;; ----------------------------------------------------------------------
;; TBD: refactor into separate namespace

(defn reg-ex-str->reg-ex [reg-ex-str]
  (try (js/RegExp (or reg-ex-str ".*"))
       (catch :default t #".*")))

;; ----------------------------------------------------------------------
;; API to backend core
;; ----------------------------------------------------------------------

(defn get-properties
  "Returns the system properties of the JVM backend as a `[name
  value]`-seq (both strings)."

  []
  (go (->>
       (<! (eval-in-backend "(System/getProperties)"))
       first
       (map (fn [[k v]]
              [(if (keyword? k) (name k) k) v]))
       (sort-by first))))

(defn set-property
  "Asynchronuously sets the system property in the JVM backend."

  [name value]
  (go (<! (eval-in-backend (str "(System/setProperty \"" name "\" \"" value "\")")))))

(defn clear-property
  "Asynchronuously clears the system property in the JVM backend."

  [name]
  (go (<! (eval-in-backend (str "(System/clearProperty \"" name "\")")))))

;; ----------------------------------------------------------------------

(defn sysprops-component
  "Self-contained Reagent component for accessing the system
  properties in a JVM backend.

  The component displays a table with rows (name and value), it
  supports re-find-filtering rows by name and value, clearing and
  changing existing properties and entering new properties.

  The component carries its own state with:

  :system-properties    : sorted/ordered [name value]-seq of system properties
  :filter-names-reg-ex  : reg-ex-string for filtering rows by name
  :filter-values-reg-ex : reg-ex-string for filtering rows by value
  :selected-name        : mouse-over _selects_ a row 
  :editing              : property name when `EDIT` was clicked
  :value                : property value that is entered when `editing`"
  
  []
  (let [;; THE STATE
        state (let [s (r/atom nil)]
                ;;(add-watch s :foo (fn [& _] (println (str "sysprops-component/state : " @s))))
                s)

        ;; asynchronuously queries the current system properties from
        ;; the JVM backend and sets the state.
        update-state! (fn [& _]
                        (go (swap! state assoc :system-properties (<! (get-properties)))))]

    ;; NOTE: not an asynchronuous race!(?) Either state is set before
    ;; component is mounted/drawn or it is set after the component is
    ;; mounted and then it will be re-drawn by Reagent.
    (update-state!)
    
    (fn [_]
      [:div#main ;; #loggers ;; "System-Properties: " (-> (str @state) (.substring 0 10)) [:br]
       [:input {:type "submit"
                :on-click update-state!
                :value "RELOAD"}]

      [:table
       [:thead
        [:tr
         
         ;; Properties can be re-find-filtered by their name
         [:th "PROPERTY"
          [:input {:type "text"
                   :placeholder "Filter name"
                   :style {:float "right"}
                   :on-change
                   (fn [x]
                     (swap! state assoc :filter-names-reg-ex
                            (-> x .-target .-value)))}]]
         
         ;; Properties can be re-find-filtered by their value
         [:th "VALUE"
          [:input {:type "text"
                   :placeholder "Filter value"
                   :style {:float "right"}
                   :on-change
                   (fn [x]
                     (swap! state assoc :filter-values-reg-ex
                            (-> x .-target .-value)))}]]]]
    
       [:tbody
        ;; Read system properties from state and apply filtering on
        ;; names and value. Note that non-valid-re strings may be
        ;; contained in state, we convert/check here when querying
        ;; state, not when mutating it.
        (for [[name value] (:system-properties @state)
              :let [name-reg-ex (reg-ex-str->reg-ex (:filter-names-reg-ex @state))
                    value-reg-ex (reg-ex-str->reg-ex (:filter-values-reg-ex @state))]
              :when (and (re-find name-reg-ex name)
                         (re-find value-reg-ex value))]
          
          ^{:key name} ;; Reagent needs this for lists
          [:tr
           ;; mouse-over will select row which will show "REMOVE" and
           ;; "EDIT" buttons.
           {:on-mouse-over #(swap! state assoc :selected-name name)}
           
           [:td name ;; PROPERTY column
            (when (= name (:selected-name @state))
              [:input {:type "submit"
                       :value "REMOVE!"
                       :style {:float "right"}
                       :on-click
                       ;; NOTE! you **must** use `go` or else
                       ;; `(update-state!)` may run before system
                       ;; properties have been changed (race!).
                       #(go 
                         (<! (clear-property name))
                         (<! (update-state!)))}])]
           
           [:td ;; VALUE column
            (if (= name (:editing @state))

              ;; editing: leaving the text-area will set (:value
              ;; @state) and OK button will pull (:value @state) and
              ;; use that for calling set-property. Note that we are
              ;; not using any DOM lookup by id!
              [:span
               [:input {:type "submit"
                        :value "OK"
                        :style {:float "left"}
                        :on-click #(go (<! (set-property name (:value @state)))
                                       (<! (update-state!))
                                       (swap! state dissoc :editing))}]
               
               [:input {:type "submit"
                        :value "CANCLE"
                        :style {:float "left"}
                        :on-click #(swap! state dissoc :editing)}]

               [:textarea {:default-value value 
                           :on-change #(swap! state assoc :value (-> % .-target .-value))}]]

              ;; EDIT button when selected row
              [:span (when (= name (:selected-name @state))
                       [:input {:type "submit"
                                :value "EDIT"
                                :style {:float "left"}
                                :on-click (fn [_]
                                            ;; pre-set :value for case
                                            ;; "OK without
                                            ;; entering/leaving
                                            ;; textarea"
                                            (swap! state assoc :value value)
                                            (swap! state assoc :editing name))}])
               value])]])]]])))

(defn main []
  (r/render [:div#main
             [sysprops-component]]
            (js/document.getElementById "main")))

(main)
