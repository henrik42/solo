(defproject solo "0.1.0-SNAPSHOT"
  
  :source-paths ["src/clj"]
  :resource-paths ["resources"]
  :target-path "target/%s/"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [swank-clojure/swank-clojure "1.4.3"]
                 [org.clojure/tools.nrepl "0.2.12"]]
  
  :plugins [[lein-swank "1.4.5"]
            [lein-ring "0.12.4"]
            [lein-codox "0.10.3"]
            [lein-marginalia "0.9.1"]]
  
  :aliases {;; generate HTML documentation (API and commented source)
            ;; into resources/public/generated-doc/. This will be
            ;; included in JARs/WARs and can be served to end users at
            ;; runtime through solo.web/app --
            ;; http://localhost:3000/generated-doc/index.html and
            ;; http://localhost:3000/generated-doc/solo-source.html
            ;;
            ;; Use at development-time -- i.e. **before** build.
            ;; resources/public/generated-doc/ is comitted into git.
            "make-doc" ["with-profile" "+make-doc" "do"
                        ["clean"]
                        ["codox"]
                        ["marg"
                         "-d" "resources/public/generated-doc/"
                         "-f" "solo-source.html"
                         "src/clj"
                         "jumpstart/src"]]

            ;; build WAR that can be deployed side-by-side with JEE
            ;; host application. Contains Solo Web-App & Core & nREPL
            ;; Server (not log4j JAR -- which must come with host
            ;; application)
            "make-web-war" ["with-profile" "+make-web-war,+web-deps" "ring" "uberwar" "solo-web.war"]

            ;; build JAR that contains Solo's backend --
            ;; i.e. `solo.core`, `solo.repl` and their dependencies
            ;; (incl. Clojure JAR but not log4j JAR -- which must come
            ;; with host application). Also contains a default
            ;; implementation of `solo.jumpstart` which you may
            ;; "over-write" in production. Needs `solo-jumpstart.jar`
            ;; to be jump-started (see make-jumpstart).
            "make-module-jar" ["with-profile" "+make-module-jar" "do" ["clean"] ["uberjar"]]

            ;; build JAR that uses
            ;; META-INF/services/javax.servlet.ServletContainerInitializer
            ;; to load/call (i.e. jump-start)
            ;; `solo.jumpstart/jumpstart` (see make-module-jar) when
            ;; host/web application starts.
            "make-jumpstart" ["with-profile" "+make-jumpstart" "do" ["clean"] "jar"]
            
            ;; executable uber JAR that runs Jetty with Solo Web-App
            ;; and optionally connects to remotely running nREPL
            ;; server with Solo Core.
            "make-web-jar" ["with-profile" "+make-web-jar,+web-deps" "do" ["clean"] ["uberjar"]]

            ;; just run solo.main/-main. Note: lein ring
            ;; server-headless just starts Jetty and uses solo.web/app
            ;; as the handler. solo.main/-main does a lot more. Usage:
            ;; lein run-web-jar -j 3000
            "run-web-jar" ["with-profile" "+make-web-jar" "trampoline" "run"]

            "make-spa" ["with-profile" "+spa" "trampoline" "cljsbuild" "once"]
            
            "make-spa-auto" ["with-profile" "+spa" "trampoline" "cljsbuild" "auto"]

            "run-brepl" ["with-profile" "+spa" "trampoline" "cljsbuild" "repl-listen"]

            }
  
  :ring {:handler solo.web/app
         :nrepl {:start? true
                 :port 9998}}
  
  :codox {:metadata {:doc/format :markdown}
          :doc-files ["doc/intro.md", "README.md"]
          :output-path "resources/public/generated-doc/"}

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src/cljs"]

                :compiler {:main solo.spa
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/solo-spa.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true}}]}

  :profiles {:repl {:main solo.jetty }
             
             :dev {:dependencies [[log4j/log4j "1.2.17"]
                                  [ring/ring-core "1.6.3"]
                                  [ring/ring-jetty-adapter "1.6.3"]
                                  [compojure "1.6.0"]
                                  [hiccup "1.0.5"]
                                  [robert/hooke "1.3.0"]
                                  [org.clojure/tools.cli "0.3.7"]]}

             :spa {:plugins [[lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]
                   
                   :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                                     :target-path]

                   :dependencies [[org.clojure/clojurescript "1.10.238"]
                                  [prismatic/dommy "1.1.0"]]}
             
             :provided {:dependencies [[ring/ring-jetty-adapter "1.6.3"]]}
             
             :web-deps {:dependencies [[ring/ring-core "1.6.3"]
                                       ;;[ring/ring-jetty-adapter "1.6.3"]
                                       [compojure "1.6.0"]
                                       [hiccup "1.0.5"]
                                       [robert/hooke "1.3.0"]
                                       [org.clojure/tools.cli "0.3.7"]]}
             
             :make-doc {:source-paths ["jumpstart/src"]
                        :clean-targets ^{:protect false} ["resources/public/generated-doc"]}
             
             :make-module-jar {}
             
             :make-web-jar {:main solo.main
                            :aot [solo.main]
                            :dependencies [[ring/ring-jetty-adapter "1.6.3"]
                                           [log4j/log4j "1.2.17"]]}

             :make-web-war {:ring {:handler solo.webapp/app
                                   :init    solo.webapp/init
                                   :destroy solo.webapp/destroy}}
             
             :make-jumpstart {:resource-paths ^:replace ["jumpstart/resources"]
                              :aot [solo.jumpstart.servlet_container_initializer]
                              :source-paths ^:replace ["jumpstart/src"]}})
