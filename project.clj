(defproject solo "0.1.0-SNAPSHOT"
  
  :source-paths ["src/clj"]
  :resource-paths ["resources"]
  :target-path "target/%s/"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [swank-clojure/swank-clojure "1.4.3"]
                 [org.clojure/tools.nrepl "0.2.12"]]
  
  :plugins [[lein-swank "1.4.5"]
            [lein-ring "0.12.4"]
            [lein-codox "0.10.3"]]
  
  :aliases {"make-jumpstart" ["with-profile" "+make-jumpstart" "do" ["clean"] "jar"]
            
            ;; generate HTML documentation into
            ;; resources/public/generated-doc/. This will be included
            ;; in JARs/WARs and can be served to end users at runtime
            ;; through solo.web/app --
            ;; http://localhost:3000/generated-doc/index.html
            "make-doc" ["with-profile" "+make-doc" "do" ["clean"] ["codox"]]
            
            ;; deployable WAR that can be deployed side-by-side with
            ;; JEE Host Application. Contains Solo Web-App & Core &
            ;; nREPL Server (not log4j JAR!)
            "make-web-war" ["with-profile" "+make-web-war" "ring" "uberwar" "solo-web.war"]

            ;; executable uber JAR that runs Jetty with Solo Web-App
            ;; and optionally connects to remotely running nREPL
            ;; server with Solo Core.
            "make-web-jar" ["with-profile" "+make-web-jar" "do" ["clean"] ["uberjar"]]

            "make-module-jar" ["with-profile" "+make-module-jar" "do" ["clean"] ["uberjar"]]

            ;; just run solo.webapp/-main. Note: lein ring server-headless
            ;; just starts Jetty and uses solo.web/app as the handler. solo.webapp/-main
            ;; does a lot more. Usage:
            ;; lein run-web-jar -j 3000 
            "run-web-jar" ["with-profile" "+make-web-jar" "trampoline" "run"]}
  
  :ring {:handler solo.web/app
         :nrepl {:start? true
                 :port 9998}}
  
  :codox {:metadata {:doc/format :markdown}
          :output-path "resources/public/generated-doc/"}
  
  :profiles {:dev {:dependencies [[log4j/log4j "1.2.17"]
                                  [ring/ring-core "1.6.3"]
                                  [ring/ring-jetty-adapter "1.6.3"]
                                  [compojure "1.6.0"]
                                  [hiccup "1.0.5"]
                                  [robert/hooke "1.3.0"]
                                  [org.clojure/tools.cli "0.3.7"]]}
             
             :make-doc {:clean-targets ^{:protect false} ["resources/public/generated-doc"]}
             
             :make-module-jar {}
             
             :make-web-jar {:main solo.main
                            :aot [solo.main]
                            :dependencies [[log4j/log4j "1.2.17"]
                                           [ring/ring-core "1.6.3"]
                                           [ring/ring-jetty-adapter "1.6.3"]
                                           [compojure "1.6.0"]
                                           [hiccup "1.0.5"]
                                           [robert/hooke "1.3.0"]
                                           [org.clojure/tools.cli "0.3.7"]]}

             :provided {:dependencies [[ring/ring-jetty-adapter "1.6.3"]]}
             
             :make-web-war {:ring {:handler solo.webapp/app
                                   :init    solo.webapp/init
                                   :destroy solo.webapp/destroy}
                            :dependencies [[ring/ring-core "1.6.3"]
                                           [ring/ring-jetty-adapter "1.6.3"]
                                           [compojure "1.6.0"]
                                           [hiccup "1.0.5"]
                                           [robert/hooke "1.3.0"]
                                           [org.clojure/tools.cli "0.3.7"]]}
             
             :make-jumpstart {:resource-paths ^:replace ["jumpstart/resources"]
                              :aot [solo.jumpstart.servlet_container_initializer]
                              :source-paths ^:replace ["jumpstart/src"]}})
