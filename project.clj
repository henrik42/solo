(defproject solo "0.1.0-SNAPSHOT"
  
  :source-paths ["src/clj"]
  :resource-paths ["resources"]
  :target-path "target/%s/"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 #_ [swank-clojure/swank-clojure "1.4.3"]
                 #_ [org.clojure/tools.nrepl "0.2.12"]
                 #_ [log4j/log4j "1.2.17"]
                 [javax.servlet/javax.servlet-api "3.1.0"]]
  
  :plugins [#_ [lein-swank "1.4.5"]
            [lein-codox "0.10.3"]
            #_ [lein-marginalia "0.9.1"]]
  
  :aliases {"make-jumpstart" ["with-profile" "+make-jumpstart" "do" ["clean"] "jar"]

            "make-doc" ["with-profile" "+make-doc" "do"
                        ["clean"]
                        ["codox"]
                        ["marg"
                         "-d" "resources/public/generated-doc/"
                         "-f" "solo-source.html"
                         "src/clj"
                         "jumpstart/src"]]}
  
  :codox {:metadata {:doc/format :markdown}
          :doc-files ["doc/intro.md", "README.md"]
          :output-path "resources/public/generated-doc/"}
  
  :profiles {:make-jumpstart {:resource-paths ^:replace ["jumpstart/resources"]
                              :aot [solo.jumpstart.servlet_container_initializer]
                              :source-paths ^:replace ["jumpstart/src"]}
             
             :make-doc {:source-paths ["jumpstart/src"]
                        :clean-targets ^{:protect false} ["resources/public/generated-doc"]}})
