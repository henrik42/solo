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
    

# (9) Slideshow

    (defn seiten-wahl []
      [:select {:value (:slide @state)
                :on-change #(swap! state assoc :slide (-> % .-target .-value js/parseInt))}
       (for [i [1 2 3]]
         [:option i])])
    
    (defmulti slide identity)
    
    (defmethod slide 1 []
      [:span
       [:div.title.boxed "slide 1:"]
       [:div
        "Dies ist eine interaktve Seite mit einem Textfeld :"
        [enter-something]]])
    
    (defmethod slide 2 []
      [:div.title "slide 2:"])
    
    (defmethod slide 3 []
      [:span "slide 3"])
    
    (defmethod slide :default []
      [:span "oops"])
    
    (defn current-slide []
      (slide (:slide @state)))
    
    (r/render [:div
               [show-state]
               [seiten-wahl]
               [current-slide]
              (js/document.getElementById "main"))
    
# (2) Namespace Angaben

    (:require-macros [cljs.core.async.macros :refer [go]])
      (:require [cljs.core.async :refer [<!]]
                [reagent.core :as r]
                [cljs-http.client :as http]))
    
