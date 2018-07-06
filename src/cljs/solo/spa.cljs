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

(def log-levels
    "The set of known log-levels (incl. `\"UNKNOWN!\"` and
    `\"NOT-SET!\"`)."

    #{"UNKNOWN!" "NOT-SET!" "DEBUG" "INFO" "WARN" "ERROR" "OFF"})

;; ################### model ##########################

;; THE STATE of the application. Whenever this state changes Reagent
;; will re-draw whatever has to be re-drawn.
(defonce app-state (r/atom {}))

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

(defn make-options
  "Returns `:option` Hiccup-vector-seq for `xs`. If `(= x o)` for
  entry `o` of `xs` then `:selected` is `true`."

  [xs x]
  (map (fn [o] [:option {:key o :selected (= x o)} o]) xs))

(defn top-of-page
  "Returns a Hiccup-vector for the top-of-page including a link to the
  Codox-generated API (HTML) documentation, the Marginalia-formatted
  code (both contained in _Solo_) and a link to the _Solo_ github
  page."

  []
  [:div#top-of-page "SOLO Web App" " -- "
   [:a {:href "generated-doc/index.html"} "doc"]
   " -- "
   [:a {:href "generated-doc/solo-source.html"} "source"]
   " -- "
   [:a {:href "https://github.com/henrik42/solo/"} "github"]])

(defn set-log-level-form
  "Returns a Hiccup-vector for the *set log-level form* which allows
  the user to enter a logger-name and select a log-level."

  []
  [:div#new-logger
   [:label {:for "logger"} "LOGGER:"]
   [:input {:type "text",
            :id "logger",
            :placeholder "Logger Name"}]

   [:span {:style {:padding "1em"}}]
   [:label {:for "level"} " LEVEL:"]
   [:select {:id "level"} (make-options log-levels "INFO")]
   
   [:span {:style {:padding "1em"}}]
   [:input {:type "submit"
            :value "SET LOG-LEVEL"
            :on-click
            (fn [_]
              (let [logger (-> js/document (.getElementById "logger") (.-value))
                    level (-> js/document (.getElementById "level") (.-value))]
                (set-log-level! logger level)))}]])

(defn table-row [logger-name log-level]
  [:tr {:key logger-name}
   [:td logger-name]
   [:td
    [:select
     {:on-change
      (fn [evt]
        (let [log-level (-> evt .-target .-value)]
          ;; Bug: wenn man hier NOT-SET! auswählt, ändert sich
          ;; das Modell app-state nicht und dadurch erfolgt
          ;; kein redraw-der Selectbox!!
          (set-log-level! logger-name log-level)))}
     (make-options log-levels log-level)]]])

(defn loggers-form
  "Returns a Hiccup-vector for the *loggers form* which allows the
  user to select a log-level for each of the `loggers`. Within this
  form the user may also enter a `filter-reg-ex` (which will be used
  to `re-find`-match loggers by their `:logger-name`) and check-select
  to hide loggers with `(= log-level NOT-SET!)`."

  []
  [:div
   [:table#loggers
    [:tr
     [:th "LOGGER"
      [:input {:type "text"
               :id "filter"
               :default-value (-> (filter-reg-ex) (reg-ex->str))
               :placeholder "Filter Reg-Ex"
               :style {:float "right"}
               :on-change set-filter-reg-ex!}]]
     [:th "LEVEL"
      [:span {:style {:float "right"}}
       [:label {:for "hide"} " Hide NOT-SET!:"]
       [:input {:type "checkbox"
                :id "hide"
                :checked (hide?)
                :on-change set-hide!}]]]]
    
    (for [{:keys [logger-name log-level]} (loggers)]
      ^{:key (:id logger-name)} [table-row logger-name log-level])

    ;; RELOAD **re-mounts** the `id="main"`-DOM! So it does not only
    ;; call `load-current-loggers` which would just trigger a
    ;; reagent-update. Note that this will "wipe" all text-fields in
    ;; the GUI and set them to the current app-state value. This means
    ;; that (1) the "LOGGER" text-field will be empty and (2) the
    ;; "filter-reg-ex" text-field will be set to the `(:filter-reg-ex
    ;; @app-state)` value which may differ from the currently
    ;; displayed value (try entering `**` and then RELOAD).
    [:input {:type "submit"
             :on-click main 
             :value "RELOAD"}]]])

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
