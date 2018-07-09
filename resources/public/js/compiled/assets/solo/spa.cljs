(ns solo.spa
  "A Single Page Application (SPA).

   Note: When using Figwheel for development this namespace may be
   loaded repeatedly -- i.e. more than once. So loading this namespace
   must not _destroy_ the application state. See [[app-state]]."
  
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<!]]
            [reagent.core :as r]
            [cljs-http.client :as http]))

(declare main)

(defn log
  "Prints to `js/console`."

  [& xs]
  (.log js/console (apply str "SOLO:" xs)))

(def non-log-levels
  "Log-Levels that are needed for presenting log-levels for loggers
  with `UNKNOWN!` log-level and for log-levels that are `NOT-SET!`."
  
  #{"UNKNOWN!" "NOT-SET!"})

(def log-levels
    "The set of all known log-levels (incl. `\"UNKNOWN!\"` and
    `\"NOT-SET!\"`)."

    (into #{"DEBUG" "INFO" "WARN" "ERROR" "OFF"}
          non-log-levels))

;; ################### model ##########################

;; THE STATE of the application. Whenever this state changes Reagent
;; will re-draw whatever has to be re-drawn.
(defonce app-state
  (let [s (r/atom {})]
    ;; for testing
    #_ (add-watch s :foo (fn [& _] (println (str "SOLO: app-state : " @s))))
    s))

(defn filter-reg-ex
  "Returns the `app-state`'s `:filter-reg-ex` (`js/RegExp`). Returns
  `#\".*\"` if the `:filter-reg-ex` is empty/not-set or not a valid
  `js/RegExp` expression. Never returns `nil`."

  []
  (let [reg-ex (:filter-reg-ex @app-state #".*")]
    (try (js/RegExp reg-ex) (catch :default t #".*"))))

(defn reg-ex->str
  "Returns the `String` representation of the given reg-ex for
  presentation."

  [r]
  (let [r (str r)]
    (.substring r 1 (dec (.-length r)))))

(defn set-filter-reg-ex!
  "Eventlistener that sets the `app-state`'s `:filter-reg-ex`-value to
  the current `-value` of the textfield (i.e. the event target). Call
  with a `String` to set the `app-state`'s
  `:filter-reg-ex`-value. Returns the new `app-state`."
  
  [x]
  #_ {:pre [(or (print (str "SOLO: setting :filter-reg-ex to " (-> x .-target .-value))) true)]}
  (swap! app-state assoc :filter-reg-ex
         (if (string? x) x
             (-> x .-target .-value))))

(defn hide?
  "Returns the `app-state`'s `:hide` (`boolean`). Returns `false` if
  the `:hide` is empty/not-set. Never returns `nil`."
  
  []
  (:hide @app-state false))

(defn set-hide!
  "Eventlistener that sets the `app-state`'s `:hide`-value to the
  current `-checked`-value of the checkbox (i.e. the event
  target). Call with a `boolean` to set the `app-state`'s
  `:hide`-value. Returns the new `app-state`."

  [x]
  #_ {:pre [(or (print (str "SOLO: setting :hide to " (-> x .-target .-checked))) true)]}
  (swap! app-state assoc :hide
         (if (boolean? x) x
             (-> x .-target .-checked))))

(defn loggers
  "Returns the `app-state`'s `:loggers` (a _map-seq_). If `(hide?)` is
  truthy loggers with `:log-level \"NOT-SET!\" will be filtered out."

  []
  (let [filter-reg-ex (filter-reg-ex)
        hide (hide?)]
    (->> (:loggers @app-state)
         (filter 
          #(and (re-find filter-reg-ex (:logger-name %))
                (if hide
                  (not= "NOT-SET!" (:log-level %))
                  true))))))

;; ################### controller ##########################

(defn load-current-loggers
  "Eventlistener that calls the web-service `ws/get-current-loggers`
  and sets the `app-state`'s
  `:loggers`-value. Call `(load-current-loggers)` from the REPL for
  testing."
  
  [& _]
  (go
   (let [res (<! (http/get "ws/get-current-loggers"))]
     (swap! app-state assoc :loggers (get-in res [:body :loggers])))))

(defn set-log-level!
  "Calls the web-service `ws/set-log-level/<logger-name>/<log-level>`
  and triggers an update of the GUI by finally
  calling `(load-current-loggers)`."

  [logger-name log-level]
  (go
   (http/post (str "ws/set-log-level/" logger-name "/" log-level))
   (load-current-loggers)))

;; ################### view ##########################

(defn log-level-options
  "Reagent `:option` component. Entries which are in `non-log-levels`
  will be `disabled`."

  [xs]
  (for [x xs]

    ;; When you want Reagent to keep the DOM/view-value/state in-sync
    ;; with the app-state you must (a) use :value here and (b) use
    ;; :value in the :select (see `table-row`). To see that try
    ;; changing here to `:disabled false` and then change a loggers
    ;; log-level to `NOT-SET!`. You'll see, that the app-state will
    ;; **not** be set to `NOT-SET!` but the app-state's state will not
    ;; be sync-ed back into the DOM.
    
    ^{:key x} 
    [:option {:value x
              :disabled (non-log-levels x)}
     x]))

(defn top-of-page
  "Returns a Reagent-vector for the top-of-page including a link to
  the Codox-generated API (HTML) documentation, the
  Marginalia-formatted code (both contained in _Solo_) and a link to
  the _Solo_ github page."

  []
  [:div#top-of-page "SOLO Web App" " -- "
   [:a {:href "generated-doc/index.html"} "doc"]
   " -- "
   [:a {:href "generated-doc/solo-source.html"} "source"]
   " -- "
   [:a {:href "https://github.com/henrik42/solo/"} "github"]])

(defn set-log-level-form
  "Returns a Reagent-vector for the *set log-level form* which allows
  the user to enter a logger-name and select a log-level."

  []
  [:div#new-logger
   [:label {:for "logger"} "LOGGER:"]
   [:input {:type "text",
            :id "logger",
            :placeholder "Logger Name"}]

   [:span {:style {:padding "1em"}}]
   [:label {:for "level"} " LEVEL:"]
   
   ;; could use :value instead but react-dom.inc complains:
   ;; "Warning: Failed prop type: You provided a `value` prop to a form
   ;; field without an `onChange` handler. This will render a
   ;; read-only field. If the field should be mutable use
   ;; `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
   
   [:select {:id "level" :default-value "INFO"}
    (log-level-options (remove non-log-levels log-levels))]
   
   [:span {:style {:padding "1em"}}]
   [:input {:type "submit"
            :value "SET LOG-LEVEL"
            :on-click
            (fn [_]
              (let [logger (-> js/document (.getElementById "logger") (.-value))
                    level (-> js/document (.getElementById "level") (.-value))]
                (set-log-level! logger level)))}]])

(defn table-row
  "Reagent `tr` (\"table-row\") component. The table-row contains the
  `logger-name` and a drop-down `:select` with `(log-level-options
  log-levels)` and value `log-level`. Selecting a log-level will fire
  an event and call `set-log-level`."

  [logger-name log-level]
  [:tr 
   [:td logger-name]
   [:td
    [:select
     {:value log-level
      :on-change
      (fn [evt]
        (let [log-level (-> evt .-target .-value)]
          (set-log-level! logger-name log-level)))}
     (log-level-options log-levels)]]])

(defn loggers-form
  "Returns a Reagent-vector for the *loggers form* which allows the
  user to select a log-level for each of the `loggers`. Within this
  form the user may also enter a `filter-reg-ex` (which will be used
  to `re-find`-match loggers by their `:logger-name`) and check-select
  to hide loggers with `(= log-level NOT-SET!)`."

  []
  [:div
   [:table#loggers
    [:thead
     [:tr
      [:th "LOGGER"
       [:input {:type "text"
                :id "filter"
                :placeholder "Filter Reg-Ex"
                :style {:float "right"}
               
                ;; If we used :value instead :default-value Reagent
                ;; would keep our model and the text-field in-sync all
                ;; the time. While that could be a feature for other
                ;; times here it makes the field behave "unexpected":
                ;; when we remove/backspace all characters we will get
                ;; `(?:)` when removing the last char. By using
                ;; :default-value we're using the field just for
                ;; writing the DOM/view-state/value into the app-state
                ;; via :on-change but we will not sync-back the
                ;; app-state into the DOM.
               
                :default-value (-> (filter-reg-ex) (reg-ex->str))
                :on-change set-filter-reg-ex!}]]
      [:th "LEVEL"
       [:span {:style {:float "right"}}
        [:label {:for "hide"} " Hide NOT-SET!:"]
        [:input {:type "checkbox"
                 :id "hide"
                 :checked (hide?)
                 :on-change set-hide!}]]]]]
    [:tbody 
     (for [{:keys [logger-name log-level]} (loggers)]
       ^{:key logger-name} [table-row logger-name log-level])]

    ;; RELOAD **re-mounts** the `id="main"`-DOM! So it does not only
    ;; call `load-current-loggers` which would just trigger a
    ;; reagent-update. Note that this will "wipe" all text-fields in
    ;; the GUI and set them to the current app-state value. This means
    ;; that (1) the "LOGGER" text-field will be empty and (2) the
    ;; "filter-reg-ex" text-field will be set to the `(:filter-reg-ex
    ;; @app-state)` value which may differ from the currently
    ;; displayed value (try entering `**` and then RELOAD).
    [:tfoot
     [:tr
      [:td {:col-span 2}
       [:input {:type "submit"
                :on-click main 
                :value "RELOAD"}]]]]]])

;; ################### main ##########################

(defn main
  "Main entry point of the SPA.

  Creates the `main`-DOM for the SPA and mounts it in the current DOM
  at `id=\"main\"`. So the initial hosting page must contain such an
  `id=\"main\"-node. Then calls `(load-current-loggers)`.

  Note: this function builds a DOM-node with `id=\"main\"` __at__ the
  node with `id=\"main\"`. So this function can be called
  __repeatedly__! That's important if you want to be able to
  __reload__ this namespace and to re-run `(main)`."

  []
  (let [root (fn [_]
               [:div#main
                [top-of-page]
                [set-log-level-form]
                [loggers-form]])]
    
    (r/render-component [root]
                        (js/document.getElementById "main"))
    
    (load-current-loggers)))

;; Whenever this namespace is (re)loaded the DOM will be (re-)created
;; and (re)mounted at `id="main"`. The app-state will __not__ be reset
;; on reload (due to `defonce`).
;;
;; There are cases when you want to keep the DOM on reload. In that
;; case you could wrap the `(main`) call in a defonce.
;;
;; If you want to reset the `app-state` just reload the page in the
;; browser.
(main)
