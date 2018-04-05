(defproject solo "0.1.0-SNAPSHOT"
  :source-paths ["src/clj"]
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [swank-clojure/swank-clojure "1.4.3"]
                 [log4j/log4j "1.2.17"]]
  :plugins [[lein-swank "1.4.5"]])