(ns solo.core-test
  (:require [clojure.test :refer :all]
            [solo.core :refer :all]))

(deftest a-test
  (testing "Testing solo.core"
    (is (= [] (get-current-loggers)))
    (is (= [{:logger-name "foo"
             :log-level "INFO"}] (do
                (set-log-level! "foo" "INFO")
                (get-current-loggers))))))
