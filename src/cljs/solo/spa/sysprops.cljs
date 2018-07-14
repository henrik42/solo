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
     (println (pr-str "(eval-in-backend " source-string ") --> " result))
     result)))

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
                        (go (reset! state (->> (<! (get-properties))
                                               first
                                               (sort-by first)))))
        set-property-cb (fn [evt]
                          (println evt)
                          (update-state!))
        
        clear-property-cb (fn [evt]
                            (println evt)
                            (update-state!))]
    (update-state!)
    (fn [_]
      [:div ;; "System-Properties: " (-> (str @state) (.substring 0 10)) [:br]
       [:input {:type "submit"
                :on-click update-state!
                :value "RELOAD"}]
      [:table
       [:thead
        [:tr
         [:th "PROPERY"]
         [:th "VALUE"]]]
    
       [:tbody 
        (for [[name value] @state]
          ^{:key name}
          [:tr 
           [:td name]
           [:td value]])]]])))

(defn main []
  (r/render [:div#main
             [sysprops-component]]
            (js/document.getElementById "main")))

(main)
