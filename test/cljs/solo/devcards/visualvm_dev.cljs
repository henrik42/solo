(ns solo.devcards.visualvm-dev
  (:require-macros
   [devcards.core :refer [defcard-rg]])
  (:require
   [solo.spa.visualvm :as vis]))

(defcard-rg visualvm-ui
  (vis/visualvm-ui))
