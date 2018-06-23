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

            ;; run CLJS compiler once
            "make-spa" ["with-profile" "+spa" "do" ["clean"] ["trampoline" "cljsbuild" "once"]]

            ;; run CLJS compiler in incremental mode, compile files as
            ;; soon as they change
            "make-spa-auto" ["with-profile" "+spa" "do" ["clean"] ["trampoline" "cljsbuild" "auto"]]

            ;; run JVM/Clojure REPL connected to browser REPL via long
            ;; polling from the browser
            "run-brepl" ["with-profile" "+spa" "trampoline" "cljsbuild" "repl-listen"]

            }
  
  :ring {:handler solo.web.spa/app
         :nrepl {:start? true
                 :host "0.0.0.0"
                 :port 9998}}
  
  :codox {:metadata {:doc/format :markdown}
          :themes [:rdash]
          :doc-files ["doc/intro.md", "README.md"]
          :output-path "resources/public/generated-doc/"}

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src/cljs"]

                :compiler {:main solo.spa
                           :asset-path "out/assets"
                           :output-to "resources/public/js/compiled/solo-spa.js"
                           :output-dir "resources/public/js/compiled/assets"
                           :source-map-timestamp true}}]}

  :figwheel {;; :http-server-root "public" ;; default and assumes "resources"
             ;; :server-port 3449 ;; default
             ;; :server-ip "127.0.0.1"

             :css-dirs ["resources/public/css"] ;; watch and update CSS

             ;; Start an nREPL server into the running figwheel process
             ;; :nrepl-port 7888

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server, this is for simple ring servers, if this

             ;; doesn't work for you just run your own server :) (see lein-ring)

             ;; :ring-handler hello_world.server/handler

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             ;; if you are using emacsclient you can just use
             ;; :open-file-command "emacsclient"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log"

             ;; to pipe all the output to the repl
             ;; :server-logfile false
             }

  :profiles {:repl {:main solo.jetty }
             
             :dev {:dependencies [[log4j/log4j "1.2.17"]
                                  [ring/ring-core "1.6.3"]
                                  [ring/ring-json "0.4.0"]
                                  [ring/ring-jetty-adapter "1.6.3"]
                                  [compojure "1.6.0"]
                                  [hiccup "1.0.5"]
                                  [robert/hooke "1.3.0"]
                                  [org.clojure/tools.cli "0.3.7"]]}

             :provided {:dependencies [[ring/ring-jetty-adapter "1.6.3"]]}
             
             :web-deps {:dependencies [[ring/ring-core "1.6.3"]
                                       [ring/ring-json "0.4.0"]
                                       [compojure "1.6.0"]
                                       [hiccup "1.0.5"]
                                       [robert/hooke "1.3.0"]
                                       [org.clojure/tools.cli "0.3.7"]]}
             
             :make-doc {:source-paths ["jumpstart/src" "src/cljs"]
                        :dependencies [[codox-theme-rdash "0.1.2"]]
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
                              :source-paths ^:replace ["jumpstart/src"]}

             :spa {:plugins [[lein-figwheel "0.5.16"]
                             [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]
                                
                   :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                                     :target-path]

                   :dependencies [[org.clojure/clojurescript "1.10.238"]
                                  [cljs-http "0.1.45"]
                                  [org.clojure/core.async "0.4.474"]
                                  [hipo "0.5.2"]]}})
             

