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
            "make-jumpstart" ["with-profile" "+make-jumpstart" "do" ["clean"] "jar"]}
  
  :codox {:metadata {:doc/format :markdown}
          :doc-files ["doc/intro.md", "README.md"]
          :output-path "resources/public/generated-doc/"}
  
  :profiles {:dev {:dependencies [[log4j/log4j "1.2.17"]]}

             :provided {:dependencies [[javax.servlet/javax.servlet-api "3.1.0"]]}
             
             :make-doc {:source-paths ["jumpstart/src"]
                        :clean-targets ^{:protect false} ["resources/public/generated-doc"]}
             
             :make-module-jar {}
             
             :make-jumpstart {:resource-paths ^:replace ["jumpstart/resources"]
                              :aot [solo.jumpstart.servlet_container_initializer]
                              :source-paths ^:replace ["jumpstart/src"]}})
