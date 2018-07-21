# (1) Clojure Script REPL

    dev:cljs.user=> (js/alert "dont panic")

# (2) Minimum

    (r/render [:span "hello world"]
              (js/document.getElementById "main"))
    
# (3) die erste Komponente

    (defn show-something []
      [:span "hello world!"])
    
    (r/render show-something
              (js/document.getElementById "main"))

# (4) Komponente mit Parameter

    (defn show-something [x]
      [:span "hello " x])
    
    (r/render [show-something "foo"]
              (js/document.getElementById "main"))
    
# (5) Texteingabefeld

    (defn show-something [x]
      [:span "hello " x])
    
    (defn enter-something []
      [:input {:type "text"}])
    
    (r/render [:div [show-something "foo"]
               [enter-something]]
              (js/document.getElementById "main"))
    
# (6) mutable state with deref

    (defonce state (r/atom "nix"))
    
    (defn show-something [x]
      [:span "hello " @state])
    
    (defn enter-something []
      [:input {:type "text"
               :on-change #(reset! state (-> % .-target .-value))}])
    
    (r/render [:div [show-something "foo"]
               [enter-something]]
              (js/document.getElementById "main"))

# (7) map-type state

    (defonce state (r/atom {}))
    
    (defn show-something [x]
      [:span "hello " (:name @state)])
    
    (defn enter-something []
      [:input {:type "text"
               :on-change #(swap! state assoc :name (-> % .-target .-value))}])
    
# (8) state als Text anzeigen zum Debuggen

    (defonce state (r/atom {}))
    
    (defn show-state []
      [:div (str @state)])
    
    (defn show-something [x]
      [:span "hello " (:name @state)])
    
    (defn enter-something []
      [:input {:type "text"
               :on-change #(swap! state assoc :name (-> % .-target .-value))}])
    
    (r/render [:div
               [show-state]
               [show-something "foo"]
               [enter-something]]
              (js/document.getElementById "main"))
    



# (2) Namespace Angaben

    (:require-macros [cljs.core.async.macros :refer [go]])
      (:require [cljs.core.async :refer [<!]]
                [reagent.core :as r]
                [cljs-http.client :as http]))
    
