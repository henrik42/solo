(defproject solo "0.1.0-SNAPSHOT"
  :source-paths ["src/clj"]
  :resource-paths ["resources"]
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [swank-clojure/swank-clojure "1.4.3"]
                 [log4j/log4j "1.2.17"]
                 [ring/ring-core "1.6.3"]
                 [ring/ring-jetty-adapter "1.6.3"]
                 [compojure "1.6.0"]
                 [hiccup "1.0.5"]]
  :aliases {"make-jumpstart-jsf" ["with-profile" "jumpstart-jsf" "do" ["clean"] "jar"]}
  :plugins [[lein-swank "1.4.5"]
            [lein-ring "0.12.4"]]
  :main solo.jetty
  :ring {:handler solo.web/app
         :nrepl {:start? true
                 :port 9998}}
  :profiles {:jumpstart-jsf {:resource-paths ^:replace ["jumpstart/resources"]
                             :aot :all
                             :main solo.jumpstart.jsf
                             :source-paths ^:replace ["jumpstart/src"]}})
