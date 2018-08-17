(ns solo.spa.focus
  "Focus handling for Reagent components.

   Use `[(focus/register-focus-target ::<key>) ,,,]` to register
   Reagent components for focusing.

   Example:

           [(focus/register-focus-target ::add)
            :input {:type \"submit\"
                    :value \"ADD\"}]

   Then set focus with `(focus/set-focus ::<key>)`."
  
  (:require [reagent.core :as r]))

(def !focus-targets
  "Atom (map) thats maps target ids (keyword) to DOM nodes (not
  Reagent component node!).

  Note: there is only one global atom. Use namespaced keywords to
  prevent key collisions."

  (atom {}))

(def !focused-target
  "Atom that holds the _focused_ target's id (keyword)."
  
  (atom nil))

(def register-focus-target
  "Memoized function that returns a Reagent component function for
  `target`. The returned value has meta `:component-did-mount`
  function which handles the focus for `target`. The Reagent component
  function just returns its arguments as a vector."
  
  (memoize 
   (fn [target]
     (with-meta
       (fn [& xs]
         (into [] xs))
       {:component-did-mount
        (fn [this]
          (swap! !focus-targets assoc target (r/dom-node this))
          (when (= target @!focused-target)
            (swap! !focused-target str "consumed!")
            (.focus (target @!focus-targets))))}))))

(defn set-focus
  "Sets the focus to `target`."

  [target]
  (reset! !focused-target target)
  (when-let [n (target @!focus-targets)]
    (.focus n)))
