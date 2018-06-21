(ns solo.core
  "Core business logic.

  Functions for accessing log4j loggers.

  **Note:** according to the log4 documentation the log4j root logger
    is named `\"root\"`:

      (-> (Logger/getRootLogger)
          logger->map
          :logger-name)
      ;--> \"root\"

  Consequently `(get-current-loggers)` returns a map-seq which
  contains the root logger with `:logger-name` `\"root\"`.

  And when you call `(get-logger \"root\")` you will receive --
  unsurprisingly -- the root logger.

  But if anyone (i.e. any code which can access the loaded log4j
  classes) calls `(org.apache.log4j.Logger/getLogger \"root\")` you'll
  find **two** loggers with `:logger-name` being `\"root\"`
  in `(get-current-loggers)`. The non-root logger is the one that was
  _registered_ by invoking `org.apache.log4j.Logger/getLogger` (see
  below).

  As a consequence you __cannot__ set the log-level of a
  non-root-logger with name `\"root\"`. Calling `(set-log-level! \"root\" ,,,)`
  will __always__ set the root logger's log-level.

  To make things even worse: JBoss delivers it's own copy of log4j but
  retrieving the root logger's name via `(-> (Logger/getRootLogger) .getName)`
  returns `\"\"` (the empty `String`). This
  edge-case (i.e. bug) is taken care of in `logger->map` (i.e. the
  root logger will be returned with `:logger-name` `\"root\"` on JBoss
  no matter what).
  
  Note also that calling `(get-logger <String:logger-name>)` (or
  `org.apache.log4j.Logger/getLogger` really) has side-effects! It
  _registers_ the logger `<logger-name>` if it hasn't been registered
  already and calling `(get-current-loggers)` before and afterwards
  may return different results (depending on whether the logger
  `<logger-name>` had already been registered before calling
  `(get-current-loggers)` the first time).

  So `get-logger` is __impure__ and should maybe better be named
  `get-logger!`."
  
  (:import [org.apache.log4j Logger Level]
           [org.apache.log4j.spi RootLogger]))

(defn logger->map
  "Returns a map `{:logger-name <String:logger-name> :log-level <String:log-level>}`
   for the given non-`nil` log4j `Logger`. If the
   logger has no level set, `:log-level` will be `\"\"` (empty
   `String`).

   If `log4j-logger` is a root logger then `:logger-name` will always
   be `\"root\"`. This is enforced explicitly to cope with a bug in
   JBoss."

  [log4j-logger]
  {:pre [(not (nil? log4j-logger))]}
  {:logger-name (if (instance? RootLogger log4j-logger)
                  "root"
                  (.getName log4j-logger))
   :log-level (-> log4j-logger .getLevel str)})

(defn get-logger
  "Returns the log4j logger (as of `logger->map`) with the given
  non-`nil` `<String:logger-name>`. Never returns `nil`. Passing
  `\"root\"` returns the root logger.

  Example:

      (get-logger \"root\")
      ;;--> {:logger-name \"root\", :log-level \"ERROR\"}

      (get-logger \"foo\")
      ;;--> {:logger-name \"foo\", :log-level \"\"}"

  [logger-name]
  {:pre [(string? logger-name)]}
  (-> (if (= "root" logger-name)
        (Logger/getRootLogger)
        (Logger/getLogger logger-name))
      logger->map))

(defn set-log-level!
  "Sets the logger's `<String:log-level>`. Passing `\"root\"` as
  `<String:logger-name>` will set the root logger's log-level. Returns
  `nil`."

  [logger-name log-level]
  {:pre [(string? logger-name)]}
  (-> (if (= "root" logger-name)
        (Logger/getRootLogger)
        (Logger/getLogger logger-name))
      (.setLevel (Level/toLevel log-level))))

(defn get-current-loggers
  "Returns a map-seq (as of `logger->map`) of the current log4
  loggers (incl. the root logger).

  Example:

      (get-current-loggers)
      ;;--> ({:logger-name \"root\", :log-level \"ERROR\"})"
  
  []
  (map logger->map
       (conj
        ;; In JBoss `getCurrentLoggers` includes the root
        ;; logger. That's a bug! We filter it out and add it
        ;; explicitly.
        (remove #(instance? RootLogger %)
                (-> (Logger/getRootLogger)
                    .getLoggerRepository
                    .getCurrentLoggers
                    enumeration-seq))
        (Logger/getRootLogger))))
