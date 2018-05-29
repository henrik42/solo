(defproject solo "0.1.0-SNAPSHOT"
  
  :source-paths ["src/clj"]
  :resource-paths ["resources"]
  :target-path "target/%s/"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [swank-clojure/swank-clojure "1.4.3"]
                 [org.clojure/tools.nrepl "0.2.12"]]
  
  :plugins [[lein-swank "1.4.5"]
            [lein-codox "0.10.3"]
            [lein-marginalia "0.9.1"]]
  
  :aliases {"make-doc" ["with-profile" "+make-doc" "do"
                        ["clean"]
                        ["codox"]
                        ["marg"
                         "-d" "resources/public/generated-doc/"
                         "-f" "solo-source.html"
                         "src/clj"
                         "jumpstart/src"]]

            "make-module-jar" ["do" ["clean"] ["uberjar"]]

            "make-jumpstart" ["with-profile" "+make-jumpstart" "do" ["clean"] "jar"]}
  
  :codox {:metadata {:doc/format :markdown}
          :doc-files ["doc/intro.md", "README.md"]
          :output-path "resources/public/generated-doc/"}
  
  :profiles {:dev {:dependencies [[log4j/log4j "1.2.17"]]}

             :provided {:dependencies [[ring/ring-jetty-adapter "1.6.3"]]}
             
             :make-doc {:source-paths ["jumpstart/src"]
                        :clean-targets ^{:protect false} ["resources/public/generated-doc"]}
             
             :make-jumpstart {:resource-paths ^:replace ["jumpstart/resources"]
                              :aot [solo.jumpstart.servlet_container_initializer]
                              :source-paths ^:replace ["jumpstart/src"]}})
