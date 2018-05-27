(ns solo.core
  "Core business logic.

  Functions for accessing log4j loggers."
  (:import [org.apache.log4j Logger Level]))

(defn logger->map
  "Returns a map `{:logger-name <String:logger-name> :log-level
   <String:log-level>}` for the given non-`nil` log4j `Logger`. If the
   logger has no level set, `:log-level` will be `\"\"` (empty
   `String`)."

  [log4j-logger]
  {:pre [(not (nil? log4j-logger))]}
  {:logger-name (.getName log4j-logger)
   :log-level (-> log4j-logger .getLevel str)})

(defn get-logger
  "Returns the log4j logger (as of `logger->map`) with the given
  non-`nil` `<String:logger-name>`. Never returns `nil`. Passing
  `\"root\"` returns the root logger. "

  [logger-name]
  {:pre [(string? logger-name)]}
  (-> (if (= "root" logger-name)
        (Logger/getRootLogger)
        (Logger/getLogger logger-name))
      logger->map))

(defn set-log-level!
  "Sets the logger's `<String:log-level>`. Passing `\"root\"` as
  `<String:logger-name>` will set the root logger's log-level."

  [logger-name log-level]
  {:pre [(string? logger-name)]}
  (-> (if (= "root" logger-name)
        (Logger/getRootLogger)
        (Logger/getLogger logger-name))
      (.setLevel (Level/toLevel log-level))))

(defn get-current-loggers
  "Returns a map-seq (as of `logger->map`) of the current log4
  loggers (incl. the root logger)."
  
  []
  (map logger->map
       (conj
        (-> (Logger/getRootLogger)
            .getLoggerRepository
            .getCurrentLoggers
            enumeration-seq)
        (Logger/getRootLogger))))
