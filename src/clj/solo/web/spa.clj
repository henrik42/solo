(ns solo.web.spa
  "The server-side of the single page application (SPA).

  Just like `solo.web` this namespace delivers a
  Compojure/Hiccup-based Ring-handler. In __addition__ to `solo.web`
  it offers routes for

  * loading the SPA, including loading JavaScript sources

  * getting the current loggers in JSON format

  * setting a logger's log-level

  So this namespaces delivers the content/assets for the SPA."
  
  (:use compojure.core
        [hiccup.middleware :only (wrap-base-url)])
  (:require [ring.middleware.json :as json]
            [hiccup.form :as hf]
            [hiccup.page :as hp]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [solo.web :as web]))

;; ################### model ##########################

(defn get-current-loggers
  "Returns the current loggers in a nested map (Ring-handler map). See
  `solo.web/get-current-loggers`.

  Example:

      (get-current-loggers)
      ;;--> {:body {:loggers ({:logger-name \"de.innovas\", :log-level \"INFO\"}
                              {:logger-name \"root\", :log-level \"DEBUG\"})},
             :headers {\"Cache-Control\" \"no-cache\"}}"

  []
  #_ {:post [(or (.println System/out (format "get-current-loggers --> %s" %)) true)]}
  {:body {:loggers
          (web/get-current-loggers {:filter-reg-ex #"" :hide false})}
   :headers {"Cache-Control" "no-cache"}})

(defn set-log-level!
  "Sets the log-level. See `solo.web/set-log-level!`. Returns {:body
  {}}`.

  Note: this function __returns__ an empty Ring-response `:body` which
  becomes an empty JSON message (i.e. `{}`) on the client. The browser
  __needs__ this. That's why we do not just call
  `solo.web/set-log-level!`."

  [logger level]
  #_ {:post [(or (.println System/out (format "(set-log-level! %s %s) --> %s" logger level %)) true)]}
  (web/set-log-level! logger level)
  {:body {}})

(defn eval-string
  "Eagerly parses `eval-string` one form at a time and `eval`'s each
  form. If `eval` throws `eval-string` will throw
  `RuntimeException`. Returns non-lazy seq of `eval` results.

  Example: `(eval-string \"(+ 1 2) 42\") ;; --> (3 42)`"

  [source-string]
  (try 
    (let [eof 'eof
          rdr (java.io.PushbackReader. (java.io.StringReader. source-string))]
      (doall
       (for [f (repeatedly #(read {:eof eof} rdr))
             :while (not (identical? eof f))]
         (try
           (eval f)
           (catch Throwable t
             (throw (RuntimeException.
                     (format "eval-string failed for form '%s': %s" (pr-str f) t))))))))
    (catch Throwable t
      (throw (RuntimeException.
              (format "eval-string for '%s' failed: %s" (pr-str source-string) t))))))
      

;; ################### view ##########################

(defn the-page
  "Returns the HTML markup for the SPA.

  The markup contains a `script` element that makes the browser load
  the JavaScript sources for the SPA. On completion the SPA will be
  started and the GUI will be built and populated with the currently
  active/registered log4 loggers."

  []
  (hp/html5
   [:head
    (hp/include-css "css/solo.css")]
   [:body
    [:div#main]
    [:script {:src "out/solo-spa.js" :type "text/javascript"}]]))

;; ################### handler/controller ##########################

(defroutes ws-routes
  "Web-Service routes.

  These will be called from the browser (CLJS/JavaScript).

  * `GET /ws/get-current-loggers`: returns the currently
    active/registered log4j loggers in JSON. Try

      curl http://localhost:3000/ws/get-current-loggers

        ;;--> {\"loggers\":[{\"logger-name\":\"root\",\"log-level\":\"DEBUG\"}]}

  * `POST /ws/set-log-level/:logger/:level`: sets the `:level` of the
    `:logger`. Note that the `POST` has no _message_ _content_ -- just
    the URL. Try

        curl -X POST http://localhost:3000/ws/set-log-level/foo/info

  * `POST /ws/eval/`: evals `eval` query param and returns seq of eval
    results.

        curl -X POST http://localhost:3000/ws/eval/?eval='(System/getProperties)'"

  (POST "/ws/eval/" req (let [source-string (get-in req [:query-params "eval"])]
                          {:body (eval-string source-string)}))
  (GET  "/ws/get-current-loggers" _ (get-current-loggers))
  (POST "/ws/set-log-level/:logger/:level" [logger level] (set-log-level! logger level)))

(defroutes main-routes
  "The Ring-handler for all the routes that _Solo_ supports:

   * `GET /spa`: delivers *the one and only page* (`solo.web.spa/the-page`)
   * `GET /out`: delivers compiled CLJS (i.e. JavaScript and source maps) sources (static _resources_)
   * `GET /ws/get-current-loggers` (see `ws-routes`)
   * `POST /ws/set-log-level/:logger/:level` (see `ws-routes`)

   In __addition__ all routes of `solo.web/main-routes` are served. So
   you can switch back and forth (or use multi-tab browsing) between
   the SPA and the old-fashion web-app. They both talk to the same
   backend/log4j."
  
  (GET "/spa" _ (the-page))
  (route/resources "/out" {:root "public/js/compiled"})
  (-> ws-routes
      (json/wrap-json-body)
      (json/wrap-json-params)
      (json/wrap-json-response))
  web/app)

(def app
  "Top-level Ring-handler (*THE APP*)."

  (-> (handler/site #'main-routes)
      (wrap-base-url)))
