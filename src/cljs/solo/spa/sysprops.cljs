(ns solo.spa.sysprops
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<!]]
            [reagent.core :as r]
            [cljs-http.client :as http]))

;; ----------------------------------------------------------------------
;; TBD: refactor into separate namespace

(defn eval-in-backend
  "Evaluates `source-string` in the backend JVM via web-service `POST
  ws/eval/`."

  [source-string]
  (go
   (let [response (<! (http/post "ws/eval/" {:query-params {:eval source-string}}))
         result (:body response)]
     ;;(println (str "RESPONSE : " response))
     ;;(println (pr-str "(eval-in-backend " source-string ") --> " result))
     (println (pr-str "(eval-in-backend " source-string ")"))
     result)))

(defn reg-ex-str->reg-ex [reg-ex-str]
  (try (js/RegExp (or reg-ex-str ".*"))
       (catch :default t #".*")))

;; ----------------------------------------------------------------------

(defn get-properties []
  (go (<! (eval-in-backend "(System/getProperties)"))))

(defn set-property [name value]
  (go (<! (eval-in-backend (str "(System/setProperty \"" name "\" \"" value "\"")))))

(defn clear-property [name]
  (go (<! (eval-in-backend (str "(System/clearProperty \"" name "\"")))))

(defn sysprops-component []
  (let [state (let [s (r/atom nil)]
                (add-watch s :foo (fn [& _] (println (str "sysprops-component/state : " @s))))
                s)
        
        update-state! (fn [& _]
                        (go (swap! state assoc :system-properties
                                   (->> (<! (get-properties))
                                        first
                                        (map (fn [[k v]]
                                               [(if (keyword? k) (name k) k) v]))
                                        (sort-by first)))))
                                        
        set-property-cb (fn [evt]
                          (println evt)
                          (update-state!))
        
        clear-property-cb (fn [evt]
                            (println evt)
                            (update-state!))]
    (update-state!)
    (fn [_]
      [:div#loggers ;; "System-Properties: " (-> (str @state) (.substring 0 10)) [:br]
       [:input {:type "submit"
                :on-click update-state!
                :value "RELOAD"}]

      [:table
       [:thead
        [:tr
         [:th "PROPERY"
          [:input {:type "text"
                   :placeholder "Filter name"
                   :style {:float "right"}
                   :on-change
                   (fn [x]
                     (swap! state assoc :filter-names-reg-ex
                            (-> x .-target .-value)))}]]
         
         [:th "VALUE"
          [:input {:type "text"
                   :placeholder "Filter value"
                   :style {:float "right"}
                   :on-change
                   (fn [x]
                     (swap! state assoc :filter-values-reg-ex
                            (-> x .-target .-value)))}]]]]
    
       [:tbody 
        (for [[name value] (:system-properties @state)
              :let [name-reg-ex (reg-ex-str->reg-ex (:filter-names-reg-ex @state))
                    value-reg-ex (reg-ex-str->reg-ex (:filter-values-reg-ex @state))]
              :when (and (re-find name-reg-ex name)
                         (re-find value-reg-ex value))]
          ^{:key name}
          [:tr 
           [:td name]
           [:td value]])]]])))

(defn main []
  (r/render [:div#main
             [sysprops-component]]
            (js/document.getElementById "main")))

(main)
