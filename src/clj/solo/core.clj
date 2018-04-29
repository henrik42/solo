(ns solo.core
  "Core business logic.

  Function for accessing log4j loggers."
  (:import [org.apache.log4j Logger Level]))

(defn logger->map
  "Returns a map `{:logger-name <String:logger-name> :log-level
   <String:log-level>}` for the given non-nil log4j `Logger`. If the
   logger has no level set, `:log-level` will be `\"\"`."

  [log4j-logger]
  {:pre [(not (nil? log4j-logger))]}
  {:logger-name (.getName log4j-logger)
   :log-level (-> log4j-logger .getLevel str)})

(defn get-logger
  "Returns the log4j Logger with the given `logger-name` as a
  map (`logger->map`). Never returns `nil`. Passing `\"root\"` will
  access the root logger. "

  [logger-name]
  (-> (if (= "root" logger-name)
        (Logger/getRootLogger)
        (Logger/getLogger logger-name))
      logger->map))

(defn set-log-level!
  "Sets the log-level. Passing `\"root\"` as `logger-name` will set
  the root logger's log-level."

  [logger-name log-level]
  (-> (if (= "root" logger-name)
        (Logger/getRootLogger)
        (Logger/getLogger logger-name))
      (.setLevel (Level/toLevel log-level))))

(defn get-current-loggers
  "Returns a seq of the current log4 loggers (incl. the root logger)
  as of `logger->map`."
  
  []
  {:post [(or (.println System/out (format "(get-current-loggers) -> %s" (into [] %))) true)]}
  (map logger->map
       (conj
        (-> (Logger/getRootLogger)
            .getLoggerRepository
            .getCurrentLoggers
            enumeration-seq)
        (Logger/getRootLogger))))

