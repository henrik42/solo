(ns solo.spa
  (:require [clojure.browser.repl :as repl]
            [dommy.core :as dommy
             :refer-macros [sel sel1]]))

;; TODO: move this to a seperate namespace and use CLJS compiler
;; option to load in "dev"
(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)
(println "It works! solo.spa")

;; ----------------------------------------------------------------------

;; ################### view ##########################

;; use hipo to create DOM structure

;; ################### controller ##########################

;; call backend web-services and change app state and trigger re-draw

;; ################### main ##########################

;; create view, mount view, trigger service-call and draw app state

