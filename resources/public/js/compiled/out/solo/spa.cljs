(ns solo.spa
  (:require [clojure.browser.repl :as repl]
            [dommy.core :as dommy
             :refer-macros [sel sel1]]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)
(println "It works! solo.spa")
