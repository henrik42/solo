(ns solo.core-test
  (:require [clojure.test :refer :all]
            [solo.core :refer :all]))

(deftest a-test
  (testing "Testing solo.core"
    (is (= [{:logger-name "root", :log-level "DEBUG"}]
           (get-current-loggers)))
    (is (= [{:logger-name "root", :log-level "DEBUG"}
            {:logger-name "foo", :log-level "INFO"}]
           (do ;; mutator!
             (set-log-level! "foo" "INFO")
             (get-current-loggers))))))
