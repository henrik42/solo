(defproject solo "0.1.0-SNAPSHOT"
  :source-paths ["src/clj"]
  :resource-paths ["resources"]
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [swank-clojure/swank-clojure "1.4.3"]
                 [org.clojure/tools.nrepl "0.2.12"]
                 [log4j/log4j "1.2.17"]
                 [ring/ring-core "1.6.3"]
                 [ring/ring-jetty-adapter "1.6.3"]
                 [compojure "1.6.0"]
                 [hiccup "1.0.5"]]
  :aliases {"make-jumpstart-jsf" ["with-profile" "jumpstart-jsf" "do" ["clean"] "jar"]
            
            ;; deployable WAR that can be deployed side-by-side with
            ;; JEE Host Application. Contains Solo Web-App & Core &
            ;; nREPL Server.
            "make-web-war" ["with-profile" "make-web-war" "ring" "uberwar" "solo-web.war"]
            
            ;; executable JAR that runs Jetty with Solo Web-App and
            ;; connects to remotely running nREPL server with Solo
            ;; Core.
            "make-web-jar" ["with-profile" "make-web-jar" "uberjar"]}
  
  :main solo.jetty
  :plugins [[lein-swank "1.4.5"]
            [lein-ring "0.12.4"]]
  :ring {:handler solo.web/app
         :nrepl {:start? true
                 :port 9998}}
  :profiles {:make-web-jar {:main solo.main}
             ;; comment-out :war-exclusions if you want to deploy to
             ;; Apache Tomcat for development/testing
             :make-web-war {:ring {;;:war-exclusions [#"log4j.*jar"]
                                   :handler solo.webapp/app
                                   :init    solo.webapp/init
                                   :destroy solo.webapp/destroy}}
             :jumpstart-jsf {:resource-paths ^:replace ["jumpstart/resources"]
                             :aot :all
                             :main solo.jumpstart.jsf
                             :source-paths ^:replace ["jumpstart/src"]}})
