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
  (go (<! (eval-in-backend (str "(System/setProperty " (pr-str name) " " (pr-str value) ")")))))

(defn clear-property
  "Asynchronuously clears the system property in the JVM backend."

  [name]
  (go (<! (eval-in-backend (str "(System/clearProperty " (pr-str name) ")")))))

;; ----------------------------------------------------------------------

(defn input-submit [value on-click]
  [:input {:type "submit"
           :value value
           :on-click on-click}])


(defn sysprops-component
  "Self-contained Reagent component for accessing the system
  properties in a JVM backend.

  The component displays a table with rows (name and value), it
  supports re-find-filtering rows by name and value, clearing and
  changing existing properties and entering new properties.

  The component carries its own state with:

  :data                 : sorted/ordered [name value]-seq of system properties
  :filter-names-reg-ex  : reg-ex-string for filtering rows by name
  :filter-values-reg-ex : reg-ex-string for filtering rows by value
  :selected-name        : mouse-over _selects_ a row and sets :selected-name to the row's name/key!
  :mode                 : :create : enter a property name and value; :update : change a property's value
  :property-name        : for :create/:update
  :property-value       : for :create/:update
  
  :editing              : property name when `EDIT` was clicked

  :value                : property value that is entered when `editing` and 'adding'
  :new-property         : if non-nil in 'adding' mode. Will carry new property name."
  
  []
  (let [;; THE STATE
        state (let [s (r/atom nil)]
                ;;(add-watch s :foo (fn [& _] (println (str "sysprops-component/state : " @s))))
                s)

        ;; asynchronuously queries the current system properties from
        ;; the JVM backend and sets the state.
        update-state! #(go (swap! state assoc :data (<! (get-properties))))]

    ;; NOTE: not an asynchronuous race!(?) Either state is set before
    ;; component is mounted/drawn or it is set after the component is
    ;; mounted and then it will be re-drawn by Reagent.
    (update-state!)
    
    (fn [_]
      [:table#main ;; see function `main` below!
       
       ;; for debugging
       #_ (str "state : " (dissoc @state :data))
       
       [:thead
        [:tr
         
         ;; Properties can be re-find-filtered by their name
         [:th "PROPERTY"
          
          [:input {:type "submit"
                   :value "RELOAD"
                   ;; RELOAD will cancle any editing activity
                   :on-click #(do
                                (swap! state dissoc :mode)
                                (update-state!))}]

          [:input {:type "submit"
                   :value "ADD"
                   :on-click #(do
                                ;; set up model for entering a new
                                ;; property (name/value). Will
                                ;; "insert" a new (first) row into the
                                ;; table.
                                (swap! state assoc :mode :create)
                                (swap! state assoc :property-name "")
                                (swap! state assoc :property-value ""))}]

          [:input {:type "text"
                   :placeholder "re-find-filter name"
                   :style {:float "right"}
                   :on-change
                   #(swap! state assoc :filter-names-reg-ex
                           (-> % .-target .-value))}]]
         
         ;; Properties can be re-find-filtered by their value
         [:th "VALUE"
          [:input {:type "text"
                   :placeholder "re-find-filter value"
                   :style {:float "right"}
                   :on-change
                   #(swap! state assoc :filter-values-reg-ex
                           (-> % .-target .-value))}]]]]
    
       [:tbody
        ;; Read system properties from state and apply filtering on
        ;; names and value. Note that non-valid re-strings may be
        ;; contained in state, we convert/check __here__ when querying
        ;; state, not when __mutating__ it.
        ;;
        ;; When :create we insert a dynamic-property-row into the
        ;; table.
        (for [[name value & create-flag] (if (= :create (:mode @state))
                                           (conj (:data @state) ["" "" "bar"])
                                           (:data @state))
              :let [name-reg-ex (reg-ex-str->reg-ex (:filter-names-reg-ex @state))
                    value-reg-ex (reg-ex-str->reg-ex (:filter-values-reg-ex @state))]
              :when (or create-flag
                        (and (re-find name-reg-ex name)
                             (re-find value-reg-ex value)))]

          ;; Reagent needs this for lists; prepend something so that
          ;; we can construct a non-prefixed key for :create editing
          ;; to prevent key-collissions
          ^{:key (if create-flag create-flag (str "foo" name))} 
          [:tr
           ;; mouse-over will select row which will show "REMOVE" and
           ;; "EDIT" buttons.
           {:on-mouse-over #(swap! state assoc :selected-name name)}
           
           [:td ;; PROPERTY column

            (if create-flag
              [:input {:type "text"
                       :placeholder "new property name"
                       :style {:float "left"}
                       :on-change #(do
                                     (println (str "val=" (-> % .-target .-value)))
                                     (swap! state assoc :property-name (-> % .-target .-value)))}]
              name)

            ;; don't show REMOVE in :create line 1
            (when (and
                   (not create-flag)
                   (= name (:selected-name @state)))
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

            ;; EDIT button when selected row and not
            ;; modifying/creating this row
            (when (and
                   (not (and
                         (= :create (:mode @state))
                         create-flag))
                   (not (and
                         (= :update (:mode @state))
                         (= name (:property-name @state))))
                   (= name (:selected-name @state)))
              [:input {:type "submit"
                       :value "EDIT"
                       :style {:float "left"}
                       :on-click #(do
                                   ;; pre-set :value for case
                                   ;; "OK without
                                   ;; entering/leaving
                                   ;; textarea"
                                   (swap! state assoc :property-value value)
                                   (swap! state assoc :property-name name)
                                   (swap! state assoc :mode :update))}])

            ;; when in :mode :update or :create show textarea input
            ;; and "OK" and "CANCLE" button
            (if (or
                 create-flag
                 (and (= :update (:mode @state))
                      (= name (:property-name @state))))

              [:span
               
              ;; editing: leaving the text-area will set
              ;; (:property-value @state) and OK button will pull
              ;; (:property-value @state) and use that for calling
              ;; set-property. Note that we are not using any DOM
              ;; lookup by id!
               [:textarea {:default-value value
                           :style {:float "left"}
                           :on-change #(swap! state assoc :property-value (-> % .-target .-value))}]

               ;; TBD: would be nice if short values were entered into
               ;; a text-field and long values in a textarea.
               #_ [:input {:type "text"
                           :default-value value
                           :style {:float "left"}
                           :on-change #(swap! state assoc :property-value (-> % .-target .-value))}]

               [:input {:type "submit"
                        :value "OK"
                        :on-click #(go (<! (set-property (:property-name @state) (:property-value @state)))
                                       (<! (update-state!))
                                       (swap! state dissoc :mode))}]
               
               [:input {:type "submit"
                        :value "CANCLE"
                        :on-click #(swap! state dissoc :mode)}]]
              
              ;; else show just the value
              value)]])]])))

(defn main []
  (r/render [:div#main
             [sysprops-component]]
            (js/document.getElementById "main")))

(main)
