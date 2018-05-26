------------------------------------------------------------------------
# From Zero To Hero
------------------------------------------------------------------------

This is a Clojure https://clojure.org/ / ClojureScript
https://clojurescript.org/ tutorial.

We will build an application (_Solo_ [1]) that lets you control log4j
[2] log-levels at runtime. _Solo_ has a browser-based frontend
(ClojureScript/JavaScript) and a backend running in the JVM (Clojure).

Something similar has been done before (in Java):
`https://github.com/mrsarm/log4jwebtracker`

You can _mix_ _Solo's_ backend with other JVM-applications (I'm
targeting Java applications running in Wildfly/JBoss and Websphere) so
that you can change logging configuration at runtime which is a nice
feature for test, QA and production (many logging libraries and JEE
servers support JMX [3] for this use-case [4], IBM Websphere has
dynamic control over logging built in).

This tutorial is ment as a starter for people with little Clojure
background. It will not explain/teach Clojure (you can find many good
tutorials on THE NET) but show which libraries and tools are used to
build and run the application and how to put it into production.

[1] https://github.com/henrik42/solo  
[2] https://logging.apache.org/log4j/1.2/  
[3] http://www.oracle.com/technetwork/articles/java/javamanagement-140525.html  
[4] https://logging.apache.org/log4j/2.0/manual/jmx.html  

------------------------------------------------------------------------
# Step Zero: Just Clojure
------------------------------------------------------------------------

You can try all of the following examples from the git `master`
branch. If you want to see how the workspace evolves from one step to
the next you can `git clone` the repo and checkout the branches for
each step -- like so (assuming you checked out the repo to
`solo-project/`):

    solo-project$ git checkout step-zero
    Switched to branch 'step-zero'

For our first Clojure program we just need Java 1.8 JDK [1] and a
Clojure 1.8.x JAR. Download Clojure 1.8.0 [2] into
`solo-project/lib/clojure-1.8.0.jar` and execute:

    solo-project$ java -cp lib/\* clojure.main -e '(println "Hello, Clojure")'
    Hello, Clojure

Here we're executing the Clojure code from command line arguments.

[1] http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html  
[2] https://repo1.maven.org/maven2/org/clojure/clojure/1.8.0/clojure-1.8.0.jar  

------------------------------------------------------------------------
# Step One: log4j, solo.core
------------------------------------------------------------------------

Now we're ready to implement the _core logic_ of _Solo_.

First download `log4j-1.2.17.jar` [1] to
`solo-project/lib/log4j-1.2.17.jar`.

Next create `solo-project/src/clj/solo`:

    solo-project$ mkdir -p src/clj/solo

All this has already been done for you in branch `step-one`.

There are just a few functions in `solo-project/src/clj/solo/core.clj`
for retrieving the current log4j loggers and for setting the log-level
of a logger. That's all we need.

This is the relevant part of the code:

    (ns solo.core
      (:import [org.apache.log4j Logger Level]))
    
    (defn logger->map [log4j-logger]
      {:logger-name (.getName log4j-logger)
       :log-level (-> log4j-logger .getLevel str)})
    
    (defn get-logger [logger-name]
      (-> (if (= "root" logger-name)
            (Logger/getRootLogger)
            (Logger/getLogger logger-name))
          logger->map))
    
    (defn set-log-level! [logger-name log-level]
      (-> (if (= "root" logger-name)
            (Logger/getRootLogger)
            (Logger/getLogger logger-name))
          (.setLevel (Level/toLevel log-level))))
    
    (defn get-current-loggers []
      (map logger->map
           (conj
            (-> (Logger/getRootLogger)
                .getLoggerRepository
                .getCurrentLoggers
                enumeration-seq)
            (Logger/getRootLogger))))
    
And run it:

    solo-project$ java -cp lib/\*:src/clj clojure.main \
      -e "(use 'solo.core) (set-log-level! \"foo\" \"INFO\") (get-current-loggers)"

Output:

    ({:logger-name "root", :log-level "DEBUG"} {:logger-name "foo", :log-level "INFO"})

Instead of running the code from command-line arguments you can
execute any script file and put the code in there. For example, let's
put the following code into `solo-project/scripts/script-one.clj`:

    (use 'solo.core)
    (set-log-level! "foo" "INFO")
    (println (get-current-loggers))

And run:

    solo-project$ java -cp lib/\*:src/clj clojure.main scripts/script-one.clj

Output:

    ({:logger-name root, :log-level DEBUG} {:logger-name foo, :log-level INFO})

Note that executing a script only evaluates the script _forms_ but
does __not__ __print__ their (the forms') values.

Try changing the last line to

    (get-current-loggers)

Now re-run the command from above. It won't print anything. Now run
this instead:

    solo-project$ java -cp lib/\*:src/clj clojure.main -e '(load-file "scripts/script-one.clj")'

Output:

    ({:logger-name "root", :log-level "DEBUG"} {:logger-name "foo", :log-level "INFO"})


So `-e` prints the result of the __last__ __evaluated__ _form_.

__Note:__ Clojure _script files_ and "regular" Clojure code look
almost the same and they can basically contain the same forms. But you
__load__ them differently. Script files are loaded directly by reading
in the source forms (via file-io or from a socket or from an in-memory
`String`). _Namespaced_ code is loaded via a classpath lookup for
AOT-compiled code and sources (see "Step Four" below). Do not confuse
the two.

Finally we want to use a log4j configuration file for setting up our
root logger and appenders. You can use this for testing. In
_production_ (see below) we'll have a _host-application_ which will do
the log4j set-up.

Try:

    solo-project$ java -cp lib/\*:src/clj clojure.main \
      -e "(use 'solo.core)" \
      -e "(-> (org.apache.log4j.Logger/getLogger \"foo\") (.info \"bar\"))"

Output:

    log4j:WARN No appenders could be found for logger (foo).
    log4j:WARN Please initialize the log4j system properly.
    log4j:WARN See http://logging.apache.org/log4j/1.2/faq.html#noconfig for more info.

We haven't initialited log4j! So let's do that:

    solo-project$ java -Dlog4j.debug=true -Dlog4j.configuration=file:log4j.properties \
      -cp lib/\*:src/clj clojure.main \
      -e "(-> (org.apache.log4j.Logger/getLogger \"foo\") (.info \"bar\"))" \
      -e "(use 'solo.core) (get-current-loggers)"

Which gives you:

    log4j: Using URL [file:log4j.properties] for automatic log4j configuration.
    log4j: Reading configuration from URL file:log4j.properties
    log4j: Parsing for [root] with value=[INFO,con].
    log4j: Level token is [INFO].
    log4j: Category root set to INFO
    log4j: Parsing appender named "con".
    log4j: Parsing layout options for "con".
    log4j: Setting property [conversionPattern] to [%d{yyyy-MM-dd HH:mm:ss} %-5p %c{1}:%L - %m%n].
    log4j: End of parsing for "con".
    log4j: Setting property [target] to [System.out].
    log4j: Parsed "con" options.
    log4j: Finished configuring.
    2018-05-23 06:28:58 INFO  foo:1 - bar
    ({:logger-name "root", :log-level "INFO"} {:logger-name "foo", :log-level ""})

__Note:__ `log4j.debug=true` has nothing to do with `DEBUG`
log-levels! It just means, that log4j prints some `log4j:`
log-messages to STDOUT when settings up log4j etc.

[1] I'm using the old log4j 1.2 but you should be able to switch
to 2.x http://central.maven.org/maven2/log4j/log4j/1.2.17/log4j-1.2.17.jar  

------------------------------------------------------------------------
# Step Two: rlwrap, REPL
------------------------------------------------------------------------

Clojure is a __compiled__ language and still you can use the runtime
environment interactively using the _REPL_ [1]
(read-eval-print-loop). The Clojure _forms_ are compiled
_just-in-time_ while they are read from file/keyboard/etc (and there
is also ahead-of-time/AOT [2] compilation).

When running on Linux it's nice to use `rlwrap` [3]. This way you get
`readline`-like (as in a `bash`) line-editing features (incl. command
history).

    solo-project$ rlwrap java -cp lib/\*:src/clj clojure.main 
    Clojure 1.8.0
    user=> (use 'solo.core)
    nil
    user=> (set-log-level! "foo" "INFO")
    nil
    user=> (get-current-loggers)
    ({:logger-name "foo", :log-level "INFO"})
    user=> ^D

If you change `solo/core.clj` after loading the namespace `solo.core`
you can use `:reload` to see the changes in your REPL. So you __need__
__not__ restart your JVM and you do not lose your internal program
state (e.g. any loggers you my have created):

    (use 'solo.core :reload)

More on REPL at https://clojure.org/guides/repl/introduction

[1] https://clojure.org/reference/repl_and_main  
[2] https://clojure.org/reference/compilation  
[3] https://github.com/hanslub42/rlwrap  

------------------------------------------------------------------------
# Step Three: Swank, Emacs/SLIME
------------------------------------------------------------------------

We want to use an editor to edit the code and to evaluate our changes
without starting the JVM over and over again each time we change our
code. You can do this by reloading the code as shown in step two.

Another way to do this is to connect Emacs/SLIME [1] to the running
JVM via _Swank_ [2] (eventhough it's deprecated). Download
`swank-clojure-1.4.3.jar` [3] and `clj-stacktrace-0.2.4.jar` [4] to
`solo-project/lib/`.

First we start the _Swank_ server.

    solo-project$ java -cp lib/\*:src/clj clojure.main -m swank.swank 4005

Now connect from Emacs.

If you like to use Emacs/SLIME __and__ have a REPL prompt at the same
time, try this:

    solo-project$ rlwrap java -cp lib/\*:src/clj clojure.main \
      -e "(use 'swank.swank) (start-server :host \"0.0.0.0\" :port 4005)" \
      -r
    Connection opened on 0.0.0.0 port 4005.
    user=> 

I'm using host/IP `0.0.0.0` so that you can run this on some Linux
server in your office network and connect to the Swank server from
your desktop PC running Emacs/SLIME (if you were using `127.0.0.1` you
couldn't connect from any remote host).

__WARNING:__ Note that __anyone__ can connect to the JVM from any host
  that can reach your host (via a TCP/IP route) and thus has full
  control over the running JVM. So do this only on __trusted__
  __networks__!

  If you're running Emacs and Clojure/JVM on the __same__ __machine__
  you should use `127.0.0.1` (do __not__ use `localhost` since you
  cannot be sure which IP it is mapped to on hosts that you do not
  control!) instead of `0.0.0.0`. Use `127.0.0.1` together with an SSL
  tunnel to remotely connect from a __trusted__ __host__ running
  Emacs/SLIME to the __trusted__ __host__ running Clojure over an
  __untrusted__ network.

Finally we can put the code into `src/clj/solo/swank.clj` for re-use:

    (ns solo.swank
      (require [swank.swank :as swank]))
    
    (defn start-server [& {:keys [port host]
                           :or {port 4005 host "0.0.0.0"}}]
      (let [params {:port port :host host}
            _ (.println System/out (str "Starting Swank server on " params " ..."))
            server (try
                     (swank/start-server :port port :host host)
                     (catch Throwable t
                       (throw (ex-info
                               (format "Could not start Swank server: %s Cause: %s" params t)
                               params t))))]
        (.println System/out (str "Started Swank server on " params "."))
        server))
    
    (defn stop-server []
      (swank/stop-server))
      
    (defn -main [& args]
      (let [{:keys [host port] :or {host "0.0.0.0" port 4005}}
            (map (comp read-string str) args)]
        (start-server :port port :host host)))
    
The `-main` function is (by convention) special -- it can be run like
shown next (note that it will receive `String`-type arguments when
called from command-line)

    solo-project$ rlwrap java -cp lib/\*:src/clj clojure.main -m solo.swank :port 4006
    Connection opened on 0.0.0.0 port 4006.

If you want the REPL also you can do this (here we're loading
`swank.clj` as a script):

    solo-project$ rlwrap java -cp lib/\*:src/clj clojure.main -i src/clj/solo/swank.clj -e "(solo.swank/-main)" -r
    Connection opened on 0.0.0.0 port 4005.
    user=> 

Now you can use the __REPL__ __and/or__ __Emacs__ to evaluate code and
to reload changes you make to `core.clj` and switch back and forth
between them.

[1] https://common-lisp.net/project/slime/  
[2] https://github.com/technomancy/swank-clojure  
[3] https://repo.clojars.org/swank-clojure/swank-clojure/1.4.3/swank-clojure-1.4.3.jar  
[4] https://repo.clojars.org/clj-stacktrace/clj-stacktrace/0.2.4/clj-stacktrace-0.2.4.jar  

------------------------------------------------------------------------
# Step Four: Containers, solo.jumpstart
------------------------------------------------------------------------

We want to use _Solo_ within a _host-application_ -- i.e. a Java
application that does not offer changing log4j log-levels at runtime
out-of-the-box. We want to hook _Solo_ into this host-application
changing as little as possible about the host-application's
configuration.

When you're working in a Java-shop you may be using JEE application
servers (like JBoss, Wildfly, IBM Websphere) or other containers (like
Tomcat, Jetty, Spring Boot). Usually the applications that run in
these containers will be Java applications with no Clojure
included. These applications do not know about Clojure or _Solo_ and
they probably have no built-in way of executing arbitrary
code/classes. So in order to run _Solo_, we somehow have to gain
control over an execution thread ... the host-application has to
_jump-start_ _Solo_ (implicitly).

There are many things going on in typical Java applications that let
you gain control -- i.e. to have you jump-started:

* __Context Dependency Injection__: CDI [1a, 1b] (and SPI [2a, 2b]
  architectures in general) lets you _extend_ the functionality of a
  CDI implementation.

* __Java Server Faces__: JSF [3] has ways to supply and discover
  _managed beans_. So you can use this mechanism to make the JSF
  runtime call your code.

* __Spring IoC__: Spring [4] lets you define Spring beans that can run
  your code.

* __log4j__: log4j [5] lets you name and load `Logger` implementations
  and you can supply yours. When the logger's class gets loaded you
  can run your code.

* __JDK Resource Bundle__: `ResourceBundle` [6] has a class-loading
  mechanism, so if you can make the host-application load a specific
  `ResourceBundle`, it will execute your code.

There are more things you can do:

* __deploy an EJB__: package an EJB with our code and deploy that (and
  the libs) into your JEE server. Your EJB will be instantiated so you
  can do what you need to. You can even use JEE-annotations for
  Clojure-generated classes.

* __deploy a WAR__: package a WAR (incl. the libs), which you can then
  deploy to JEE containers as well as servlet containers. This way you
  can deliver a servlet which again will be initialized and run.

* __deploy a JAR__: package a JAR, which contains some/any of the
  artifacts mentioned above.

All of these __frameworks__ have one in common: you have to deliver a
__named class__ for them to call your code. You cannot just deliver
Clojure source code and let the framework reflectively call
`clojure.lang.RT.load(<your-namespace>)`. Some of them let you supply
annotated classes which are then picked up by the framework via
classpath scanning.

__Note__: Spring has a mechanism that lets you use `clojure.RT` to
execute Clojure __source__ [7].

So we have to use `gen-class` to deliver that class. This class is
just used for __loading__ your namespace and __calling__ a `jumpstart`
function!

But it does not suffice to just deliver the classes for your
jumpstart-namespace. You also have to deliver the JARs under
`solo-project/lib/` so you can use them (except -- probably --
log4j). At this point you have to understand how classloaders work and
how the mentioned frameworks organize the classloaders they use.

In many cases your class will be loaded by a classloader that has no
access (neither direct nor by delegation to other _co-laborating_
classloaders) to the host-application's classes (incl. log4j). Often
the jumpstart-class does not even _see_ the Clojure runtime-classes
eventhough you supplied the libs. This usually leads to
`ClassNotFoundException` and then `NoClassDefFoundException` when
loading your jumpstart-namespace.

You find examples/solutions for this below.

[1a] https://docs.jboss.org/cdi/spec/1.0/html/
[1b] https://jaxenter.com/tutorial-introduction-to-cdi-contexts-and-dependency-injection-for-java-ee-jsr-299-104536.html  
[2a] https://docs.oracle.com/javase/tutorial/sound/SPI-intro.html  
[2b] https://docs.oracle.com/javase/tutorial/ext/basics/spi.html  
[3] http://www.oracle.com/technetwork/java/javaee/javaserverfaces-139869.html  
[4] https://docs.spring.io/spring/docs/current/spring-framework-reference/core.html  
[5] https://logging.apache.org/log4j/1.2/  
[6] https://docs.oracle.com/javase/8/docs/api/java/util/ResourceBundle.html  
[7] Spring Break  

## solo.jumpstart.servlet_container_initializer

Here we jump-start _Solo_ via `ServletContainerInitializer` [1]. This
means we use a web-application's start-up mechanism to have _Solo_
jump-started.

We supply the resource
`META-INF/services/javax.servlet.ServletContainerInitializer` with
content:

    solo.jumpstart.servlet_container_initializer

This makes the servlet-container load this class, create an instance
and call `onStartup` method on this instance.

In `jumpstart/src/solo/jumpstart/servlet_container_initializer.clj`
you find the source that we AOT-compile/`:gen-class` to get the class
`solo.jumpstart.servlet_container_initializer`.

This implementation will just load the namespace `solo.jumpstart` and
call `(solo.jumpstart/jumpstart)`. So whatever we want to do to
bootstrap our application, we can do it there. If we ever add more
jump-start mechanisms we won't need to change
`solo.jumpstart/jumpstart`. 

__Note:__ depending on the mechanisms `solo.jumpstart/jumpstart` may
be called more than once on start-up. So calling
`solo.jumpstart/jumpstart` repeatedly must not cause any
problems. Maybe we should use `defonce` or an `atom` to cope with this
(TBD).

    (ns solo.jumpstart.servlet_container_initializer
      (:gen-class
       :implements [javax.servlet.ServletContainerInitializer]))
    
    (defn -onStartup [& args]
      (println "solo.jumpstart.servlet_container_initializer/-onStartup")
      ;; solo.jumpstart is a RUNTIME dependency -- not a COMPILE-TIME! So
      ;; we won't let the compiler/build know what we are doing.
      (try 
        (require 'solo.jumpstart)
        (eval (read-string "(solo.jumpstart/jumpstart)"))
        (catch Throwable t
          (println
           (str "solo.jumpstart.servlet_container_initializer/-onStartup:"
                "Load/run (solo.jumpstart/jumpstart) failed : "
                t)))))
    
    (defn -main [& args]
      (-onStartup))
  
For compile & packaging you can use `scripts/make-jumpstart-jar.sh`:

    #!/bin/bash -ex
    
    mkdir -p classes/
    rm -rf classes/*
    java -cp jumpstart/src/:classes/:lib/clojure-1.8.0.jar:lib/javax.servlet-api-3.1.0.jar clojure.main \
    -e "(compile 'solo.jumpstart.servlet_container_initializer)"
    jar -vcf jumpstart.jar -C classes/ solo
    jar -vuf jumpstart.jar -C jumpstart/resources/ META-INF
    
The JAR `jumpstart.jar` should look like this:

    solo-project$ jar -vtf jumpstart.jar 
        68 Fri May 25 06:09:10 UTC 2018 META-INF/MANIFEST.MF
         0 Fri May 25 06:09:10 UTC 2018 solo/
         0 Fri May 25 06:09:10 UTC 2018 solo/jumpstart/
      1204 Fri May 25 06:09:10 UTC 2018 solo/jumpstart/servlet_container_initializer$_main.class
      1646 Fri May 25 06:09:10 UTC 2018 solo/jumpstart/servlet_container_initializer$loading__5569__auto____3.class
      2097 Fri May 25 06:09:10 UTC 2018 solo/jumpstart/servlet_container_initializer$_onStartup.class
      2376 Fri May 25 06:09:10 UTC 2018 solo/jumpstart/servlet_container_initializer.class
      2106 Fri May 25 06:09:10 UTC 2018 solo/jumpstart/servlet_container_initializer$fn__5.class
      4193 Fri May 25 06:09:10 UTC 2018 solo/jumpstart/servlet_container_initializer__init.class
         0 Thu May 24 19:56:04 UTC 2018 META-INF/services/
        44 Thu May 24 19:56:04 UTC 2018 META-INF/services/javax.servlet.ServletContainerInitializer
        
And you can run this class:

    solo-project$ java \
        -cp jumpstart.jar:lib/clojure-1.8.0.jar:lib/javax.servlet-api-3.1.0.jar \
        solo.jumpstart.servlet_container_initializer
    solo.jumpstart.servlet_container_initializer/-onStartup
    solo.jumpstart.servlet_container_initializer/-onStartup:Load/run (solo.jumpstart/jumpstart) failed : java.io.FileNotFoundException: Could not locate solo/jumpstart__init.class or solo/jumpstart.clj on classpath.

Some things to note:

* We haven't supplied `solo/jumpstart` yet. So the jump-start fails
  (but the code works :-) )

* We don't need `-main` for jump-starting _Solo_ via
  `ServletContainerInitializer` in production. It's just there so that
  `gen-class` generates the main-entry method `public static void
  main(String[])` for us so that we can run it from command-line for
  testing.

* The generated class file
  `solo/jumpstart/servlet_container_initializer.class` bootstraps the
  Clojure runtime and then loads the namespace
  `solo.jumpstart.servlet_container_initializer`.

* The classpath above did not include
  `solo-project/jumpstart/src/`. So the compiled namespace
  `solo.jumpstart.servlet_container_initializer` is __included__ in
  the JAR. Still the Clojure _loader_ will search for the __source__
  `solo/jumpstart/servlet_container_initializer.clj` when loading the
  namespace and only if it cannot find the source it will use the
  compiled version. So you can _over-write_ the compiled version in
  your production runtime if you need.

For _production_ we want to use `jumpstart.jar` just for loading
Clojure and delegation logic. The _real_ logic that we want to have
jump-started -- i.e. `(solo.jumpstart/jumpstart)` -- should come from
a source folder that we put into the classpath and have that loaded.

So let's try this: put your jump-start logic into
`src/clj/solo/jumpstart.clj`:

    (ns solo.jumpstart
      (:require [solo.swank :as swank]))
    
    (defn jumpstart []
      (println "solo.jumpstart/jumpstart: starting up:")
      (swank/start-server)
      (println "solo.jumpstart/jumpstart: done."))
        
This time we put `src/clj/` and all the libs into the classpath:

    solo-project$ java -cp src/clj/:jumpstart.jar:lib/\* solo.jumpstart.servlet_container_initializer

    solo.jumpstart.servlet_container_initializer/-onStartup
    solo.jumpstart/jumpstart: starting up:
    Starting Swank server on {:port 4005, :host "0.0.0.0"} ...
    Connection opened on 0.0.0.0 port 4005.
    Started Swank server on {:port 4005, :host "0.0.0.0"}.
    solo.jumpstart/jumpstart: done.
    
Cool!

Now we have it: we use the generated _named classes_ just for loading
a Clojure namespace and we supply the Clojure source code on the
classpath (in a JAR and/or in a file-system folder).

[1] https://docs.oracle.com/javaee/7/api/javax/servlet/ServletContainerInitializer.html  

__Wildfly/JBoss__

For JBoss and Wildfly (_domain_ _mode_) you can _deploy_ the JARs
(incl. `jumpstart-jsf.jar`) to the _content_ _repository_ and _assign_
them to the server group of your server (no need to package them into
your Java host-application!).

There is one problem: the module classloader that loads
`jumpstart-jsf.jar` does not _see_ the assigned (module)
`clojure-1.8.0.jar`! So you won't be able to load
`solo/jumpstart/jsf.class`. You could fix this by tweaking the
module's dependencies.

Instead I usually just create a _global_ _module_ at
`<jboss-root>/module/jumpstart-jsf/main/module.xml`:

__TODO__

So Clojure and the jumpstarter both are loaded by the same module
classloader.

Now you have to configure the global module for your profile:

__TODO: Jump-start telnet server, only clojure jar needed__

__TODO: start swank via telnet REPL, swankjar needed__

__TODO: jump-start swank__

------------------------------------------------------------------------
# Step Five: nREPL
------------------------------------------------------------------------

If you want to connect __remotely__ via a __REPL__ to a Clojure
runtime you can use nREPL [1]. nREPL is a generic remote service
(server and client) into a runnng Clojure runtime and is used for
connecting REPLs, IDE integration and programmatic client calls.

Download [2] it to `solo-project/lib/tools.nrepl-0.2.13.jar`:

    solo-project/lib$ wget http://central.maven.org/maven2/org/clojure/tools.nrepl/0.2.13/tools.nrepl-0.2.13.jar

As with Swank we start the nREPL server and a REPL for local use (note
that the socket is opened on `0.0.0.0` -- see above!). 

    solo-project$ rlwrap java -cp lib/\*:src/clj clojure.main -e "(use 'clojure.tools.nrepl.server) (start-server :port 7888)" -r
    #clojure.tools.nrepl.server.Server{:server-socket ... "ServerSocket[addr=/0:0:0:0:0:0:0:0,localport=7888]"] ...
    user=> (use 'solo.core)                     
    nil

Now you can connect from another running Clojure JVM (note that we do
not add `src/clj` to the classpath), connect to the nREPL server and
remote-eval some code:

    solo-project$ rlwrap java -cp lib/\* clojure.main
    Clojure 1.8.0
    user=> (use 'clojure.tools.nrepl)
    nil
    user=> (with-open [conn (connect :port 7888)] (-> (client conn 1000) (message {:op :eval :code "(get-current-loggers)"}) response-values))
    [()]

Now set the log-level in the nREPL-server JVM:

    user=> (set-log-level! "foo" "INFO")
    nil

And again in the nREPL-client JVM:

    user=> (with-open [conn (connect :port 7888)]
      (-> (client conn 1000) (message {:op :eval :code "(get-current-loggers)"})
      response-values))
    [({:logger-name "foo", :log-level "INFO"})]

Since we will be using nREPL for _Solo_ from now on, we use a separate
namespace `solo.nrepl` in `solo/nrepl.clj` to put the related code
there.

Besides directly using `clojure.tools.nrepl.client` there are other
ways to connect to an nREPL server:

* __Counterclockwise__ [3]: an Eclipse Plugin for Clojure development

* __Emacs/cider__ [4]: use cider/nREPL this instead of SLIME/Swank

* __Leiningen__ [5]: a build tool (see next step)

__Wildfly/JBoss__

Now we want to jump-start the nREPL server (just as we started the
Swank server in step four above) so we have remote access to the
application.

Here again we cannot load the nREPL namespace because the classloader
does not see the JAR/classes. One solution would be to also put the
`tools.nrepl-0.2.13.jar` into the __global__ __module__ instead of
__assigning__ it.

An alternative is to use the thread __context__ __classloader__ (CCL)
that is active when `solo/jumpstart/jsf.class` is loaded to load
nREPL. The CCL _sees_ all (assigned and global) modules and all
application JARs/EJBs.

__TODO: Geht das?__ Kann man damit nREPL laden und dann auch auf die
Anwendungsklassen zugreifen. Man muss vorsichtig sein, weil eben
clojure selbst über einen anderen classloader geladen wird als der
ganze Rest.

__TODO:__ Wie verhält es sich mit Swank? Werden dort auch alle Klassen gesehen.

__Websphere__

__TODO:__ https://stackoverflow.com/questions/158336/is-there-a-way-to-run-a-method-class-only-on-tomcat-wildfly-glassfish-startup

[1] https://github.com/clojure/tools.nrepl  
[2] http://central.maven.org/maven2/org/clojure/tools.nrepl/0.2.13/tools.nrepl-0.2.13.jar  
[3] http://doc.ccw-ide.org/  
[4] https://cider.readthedocs.io/en/latest/  
[5] https://leiningen.org/  

------------------------------------------------------------------------
# Step Six: Leiningen, Codox
------------------------------------------------------------------------

Up to now we have been downloading JARs from Maven Central and Clojars
and put together the classpath by hand. Now we want to use a build
tool for that.

Leiningen [1] is an extendable task executor with dependency
resolution. We want to use it to setup a project (_scafolding_), to
build, run and test the code. Finally we use it to package, release
and deploy our application.

First you have to install Leiningen.

__TODO:__ Show install

Now we use `lein new` to setup a project. We execute this __in__
directory `solo-project/` (use branch `step-five` to see these
changes):

    solo-project$ lein new solo --to-dir .

__Note:__ This is a little silly -- we could have just created and
  filled `project.clj` and `solo-project/test/solo/core_test.clj`, but
  I wanted to show how to set up a project with Leiningen. Usually you
  do this when you do not have an existing project structure to start
  with.

This will create some new directories & files:

    CHANGELOG.md
    LICENSE
    README.md
    doc/intro.md
    project.clj
    src/solo/core.clj
    test/solo/core_test.clj

We delete `rm -rf src/solo/` (we already have the Clojure sources
below `solo-project/src/clj/solo/`) and fix `project.clj`:

    (defproject solo "0.1.0-SNAPSHOT"
      :source-paths ["src/clj"]
      :resource-paths ["lib/clojure-1.8.0.jar" "lib/log4j-1.2.17.jar"])

__Note:__ I put the _Solo_ Clojure sources below
  `solo-project/src/clj/solo/` and not below `solo-project/src/solo/`
  (where Leiningen puts them), because later on we will also have
  ClojureScript sources and they will go to
  `solo-project/src/cljs/solo/`.

And we fix our first tests in `solo-project/test/solo/core_test.clj`:

    (ns solo.core-test
      (:require [clojure.test :refer :all]
                [solo.core :refer :all]))
    
    (deftest a-test
      (testing "Testing solo.core"
        (is (= [] (get-current-loggers)))
        (is (= [{:logger-name "foo"
                 :log-level "INFO"}]
               (do ;; mutator!
                 (set-log-level! "foo" "INFO")
                 (get-current-loggers))))))
        
And test:

    solo-project$ lein test
    lein test solo.core-test
    
    Ran 1 tests containing 2 assertions.
    0 failures, 0 errors.

__Dependencies__

Instead of supplying the JARs ourselves we can use Leiningen to do
that for us. Change `solo-project/project.clj` to:

    (defproject solo "0.1.0-SNAPSHOT"
      :source-paths ["src/clj"]
      :dependencies [[org.clojure/clojure "1.8.0"]
                     [log4j/log4j "1.2.17"]])

And run the tests again:

    lein test

This will __download__ the JARs to `~/.m2/repo/` (your default local
_Maven_ _Repository_ -- eventhough we're not using Maven!) so you'll
need an internet connection for this to work.

__Using Leiningen__

You can use Leiningen to run the examples from above (steps zero
through five) but this time Leiningen will put together the classpath
for us.

* __rlwrap & (n)REPL__: the `repl` task starts an nREPL server and the
  local REPL (on your tty). Note that we're using the Leiningen
  built-in nREPL support and not `solo.nrepl` here (use `lein help
  repl` for help):

        solo-project$ rlwrap lein repl :start :host 0.0.0.0 :port 7888
        nREPL server started on port 7888 on host 0.0.0.0 - nrepl://0.0.0.0:7888
        REPL-y 0.3.7, nREPL 0.2.12
        Clojure 1.8.0
        Java HotSpot(TM) Client VM 1.8.0-ea-b116
            Docs: (doc function-name-here)
                  (find-doc "part-of-name-here")
          Source: (source function-name-here)
         Javadoc: (javadoc java-object-or-class-here)
            Exit: Control+D or (exit) or (quit)
         Results: Stored in vars *1, *2, *3, an exception in *e
        user=> (use 'solo.core)
        nil
        user=> (set-log-level! "foo" "INFO")
        nil
        user=> (get-current-loggers)
        ({:logger-name "foo", :log-level "INFO"})
        
* __rlwrap/nREPL client__: since Leiningen has nREPL server &
  __client__ built-in, you can use `repl :connect` to start a REPL
  that is connected remotely to the nREPL server port 7888 from above
  (so you're running two Leiningen JVMs for this). Note that you don't
  even need the git workspace (i.e. `project.clj`) for this -- you
  just need Leiningen.

        $ rlwrap lein repl :connect 7888
        Connecting to nREPL at 127.0.0.1:7888
        REPL-y 0.3.7, nREPL 0.2.12
        Clojure 1.8.0
        Java HotSpot(TM) Client VM 1.8.0-ea-b116
            Docs: (doc function-name-here)
                  (find-doc "part-of-name-here")
          Source: (source function-name-here)
         Javadoc: (javadoc java-object-or-class-here)
            Exit: Control+D or (exit) or (quit)
         Results: Stored in vars *1, *2, *3, an exception in *e
        
        user=> (.println System/out "foo")
        nil

* __Swank plugin__: `lein-swank` [2] is a (deprecated) Leiningen
  plugin (for development) that you can put into `project.clj`:

        (defproject solo "0.1.0-SNAPSHOT"
          :source-paths ["src/clj"]
          :dependencies [[org.clojure/clojure "1.8.0"]
                         [swank-clojure/swank-clojure "1.4.3"]
                         [log4j/log4j "1.2.17"]]
          :plugins [[lein-swank "1.4.5"] ])

  Now you can run the `swank` task:

        solo-project$ lein swank 4005 0.0.0.0
        Listening for transport dt_socket at address: 39371
        Connection opened on 0.0.0.0 port 4005.

* __solo.swank__: Since we want to "use Swank in production" (as part
  of our application without Leiningen and the Swank plugin), we use
  the `run` task to execute `-main` function in
  `solo-project/src/clj/solo/swank.clj` which start the swank server
  -- like this:

        solo-project$ lein run -m solo.swank

* __solo.nrepl__: And the same thing for nREPL server:

        solo-project$ lein run -m solo.nrepl/start-server 
        Starting nREPL server on port 7888 ...
        Started nREPL server on port 7888 : {:class clojure.tools.nrepl.server.Server, :empty false}

__TODO__ fix server-tostring

__Leiningen Build__

You can use Leiningen to build the `jumpstart-jsf.jar` (instead of
`solo-project/scripts/make-jumpstart-jsf.sh`). Add the `:aliases` and
`:profiles` entries to `project.clj`:

    (defproject solo "0.1.0-SNAPSHOT"
      :source-paths ["src/clj"]
      :dependencies [[org.clojure/clojure "1.8.0"]
                     [swank-clojure/swank-clojure "1.4.3"]
                     [log4j/log4j "1.2.17"]]
      :plugins [ [lein-swank "1.4.5"] ]
      :aliases {"make-jumpstart-jsf" ["with-profile" "jumpstart-jsf" "do" ["clean"] "jar"]}
      :profiles {:jumpstart-jsf {:resource-paths ^:replace ["jumpstart/resources"]
                                 :aot :all
                                 :main solo.jumpstart.jsf
                                 :source-paths ^:replace ["jumpstart/src"]}})
    
And build `solo-project/target/solo-0.1.0-SNAPSHOT.jar`:

    solo-project$ lein make-jumpstart-jsf

__Building Documenation from Clojure Sources__

We use Codox [3] to generate HTML documenation from Clojure code and
`solo-project/doc/intro.md`.

In `project.clj` we add:

    :plugins [,,,[lein-codox "0.10.3"]]

    :aliases {,,,
        "make-doc" ["with-profile" "make-doc" "do" ["clean"] ["codox"] ]

    :codox {:metadata {:doc/format :markdown}
            :output-path "resources/public/generated-doc/"}

In this case we use Codox to generate the documenation into
`resources/public/generated-doc/`. So this is at "development time" --
__not__ __compile-time__. At compile-time we include the generated
documentation as _static_ _content_ and package it into the JAR or
WAR. Later we will deliver the HTML files to end users via _Solo's_
web GUI.

[1] https://leiningen.org/  
[2] https://github.com/technomancy/swank-clojure  
[3] Codox  

------------------------------------------------------------------------
# Step Seven: Jetty, http-kit, Ring, Compojure, Hiccup, solo.web
------------------------------------------------------------------------

By now we have an interactive REPL-access to the application via
nREPL-server which we have jump-started via _Solo_. We can query and
modify the log4j loggers of the Java host-application at runtime.

It's time to build our browser-based GUI for _Solo_.

First we will build an old-style web-app: it will receive HTTP-GET
requests (for _queries_) and HTTP-POST requests (for _modifications_)
-- so called _POST-backs_.

For each request the web-app will return a __complete__ __HTML-page__
which is then rendered by the browser. With each (GET/POST) request
the browser will __navigate__ (thus it's not an SPA).

We'll be using:

* __Jetty, http-kit__: Jetty [1] and http-kit [2] are web-servers that
  support _Java Servlets_ [3] (__TODO__: really? check that for
  http-kit). We will use them for development (and optionally for
  production). You can use either of them.

* __Ring__: Ring [4] supplies the integration into the _Java Servlet
  Layer_. It receives requests and must deliver responses in the way
  the Java Servlet Spec dictates.

  Ring translates the requests into Clojure function calls (which may
  well be your functions) and will pass in the "transformed" Servlet
  request as a Clojure map (__pure data__! No statefull streams ... if
  you're not asking for it). In the end it will translate the
  function's response -- your function! -- (also pure data, usually a
  map) back into the Servlet API response stream (incl. HTTP-header,
  HTTP-status, etc.).

  For development Ring comes with Jetty included. For production we
  will build a web-app WAR and use Ring's servlet. We can then deploy
  that WAR into JBoss/Wildfly/Websphere.

* __Compojure__: Compojure [5] lets you assign/map HTTP-requests
  (e.g. URLs) to functions. The request URL is part of the
  Ring-request-map and we can express the mapping to functions in
  several ways (see below). This mapping is called _routing_.

So our (pure) functions get called by/through Ring/Compojure and they
have to return text/HTML. We could just concat the HTML markup into a
`String` and return that. That would work, but it would be no fun.

* __Hiccup__: Hiccup [6] is a templating lib that lets you use
  Clojure's built-in data-types (maps, lists, vectors, keywords,
  strings) to describe the __structure__ of an HTML document. It will
  then create a `String` containing the HTML markup that corresponds
  to that structure.

We'll put all of the web-app related Clojure sources into the
namespace `solo.web`.

[1] https://www.eclipse.org/jetty/  
[2] http://www.http-kit.org/  
[3] https://en.wikipedia.org/wiki/Java_servlet  
[4] https://github.com/ring-clojure/ring  
[5] https://github.com/weavejester/compojure  
[6] https://github.com/weavejester/hiccup  

## Ring

Add the dependencies for Ring:

      :dependencies [,,,[ring/ring-core "1.6.3"]
                     [ring/ring-jetty-adapter "1.6.3"]]

Let's run a "Hello World" example. Since we will not use this code in
_Solo_ I put it in `solo-project/scripts/script-two.clj`:

    (use 'ring.adapter.jetty)
    
    (defn handler [ring-req]
      {:status 200
       :headers {"Content-Type" "text/html"}
       :body "<h1>Hello World</h1>"})
    
    (run-jetty handler
               {:port 3000
                :host "0.0.0.0"})
            
And run:

    solo-project$ lein run -m clojure.main scripts/script-two.clj
    Java HotSpot(TM) Client VM warning: TieredCompilation is disabled in this release.
    LOADING ~/.lein/profiles.d/user.clj
    Java HotSpot(TM) Client VM warning: TieredCompilation is disabled in this release.
    2018-04-10 17:47:56.417:INFO::main: Logging initialized @4174ms
    2018-04-10 17:47:56.644:INFO:oejs.Server:main: jetty-9.2.21.v20170120
    2018-04-10 17:47:56.724:INFO:oejs.ServerConnector:main: Started ServerConnector@70dd40{HTTP/1.1}{0.0.0.0:3000}
    2018-04-10 17:47:56.727:INFO:oejs.Server:main: Started @4483ms

Now point your browser to http://localhost:3000/ or just use `curl`:

    solo-project$ curl http://localhost:3000
    <h1>Hello World</h1>
    
To make life a little easier we use the `lein-ring` plugin for
development, which can start a jetty server for us and hook our
_top-level_ Ring handler `solo.web/app` in.

Put this into `project.clj`:

      :plugins [,,,[lein-ring "0.12.4"]]
      :ring {:handler solo.web/app
             :nrepl {:start? true
                     :port 9998}}
    
And for a start the following code goes into
`solo-project/src/clj/solo/web.clj` (note that there is no other
namespace required!).

    (ns solo.web)
    
    (defn handler [ring-req]
      {:status 200
       :headers {"Content-Type" "text/html"}
       :body "Hello World!"})
    
    (defn app [ring-map]
      (handler ring-map))

And run:

    solo-project$ lein ring server
    2018-04-10 21:19:51.479:INFO::main: Logging initialized @4722ms
    Started nREPL server on port 9998
    2018-04-10 21:20:02.041:INFO:oejs.Server:main: jetty-9.2.21.v20170120
    2018-04-10 21:20:02.124:INFO:oejs.ServerConnector:main: Started ServerConnector@7d1c1{HTTP/1.1}{0.0.0.0:3000}
    2018-04-10 21:20:02.128:INFO:oejs.Server:main: Started @15371ms
    Started server on port 3000
    
You can now go to http://localhost:3000/ and connect to the __nREPL__
server at `9998`.

## Compojure

Before we can use Compojure we have to add the dependency
`[compojure "1.6.0"]`:

      :dependencies [,,,[compojure "1.6.0"]]

With Compojure we can define routes for HTTP requests (`GET` and
`POST` in our case) and can delegate to functions to do the real work
(see below).

    (defroutes main-routes
      (GET "/" req "hello world")
      (POST "/set-log-level" req
        ;; something with req
        (redirect "/"))
      (POST "/update-loggers" req
        ;; something with req
        (redirect "/"))
      (route/resources "/")
      (route/not-found "Page not found"))
    
    (def app (handler/site #'main-routes))

## Hiccup

Before we can use Hiccup we have to add the dependency
`[hiccup "1.0.5"]`:

      :dependencies [,,,[hiccup "1.0.5"]]

With Hiccup we convert Clojure data structures into HTML markup. This
is the function which will return the __complete__ __HTML-page__ (see
above).

    (defn the-page [filter-reg-ex]
      (let [loggers (get-current-loggers filter-reg-ex)]
        (hp/html5
         [:head
          (hp/include-css "solo.css")]
         [:body
          (set-log-level-form filter-reg-ex)
          (loggers-form loggers filter-reg-ex)])))

## solo.web

Our first application will have only one page (but it's __not__ a SPA
;-). The page (`GET "/"`) will show a table with all current log4j
loggers and their log-level (an input field). 

You can change the log-level entries and use a `GO` button to submit
the data to `(POST "/update-loggers")`.

For `POST`-requests `solo.web` returns a `(redirect "/")` so that you
can use the browser's page-reload for updating the page after a submit
(if we were just returning the page-content for the `POST`-request the
browser would ask us if we want to re-send the `POST`-request when
doing a page-reload after a submit).

So here' the code for reference:

    (ns solo.web
      (:use compojure.core)
      (:require [solo.core :as core]
                [ring.util.response :use redirect]
                [compojure.route :as route]
                [compojure.handler :as handler]
                [hiccup.page :as hp]
                [hiccup.form :as hf]))
    
    (defn loggers-form [loggers]
      (hf/form-to
       [:post "/update-loggers"]
       [:table
        [:tr [:th "LOGGER"] [:th "LEVEL"]]
        (for [{:keys [logger-name log-level]} loggers]
          [:tr
           [:td logger-name]
           [:td (hf/text-field logger-name log-level)]])]
       (hf/submit-button "GO")))
    
    (defn the-page []
      (let [loggers (core/get-current-loggers)]
        (hp/html5
         [:head
          (hp/include-css "solo.css")]
         [:body
          (loggers-form loggers)])))
    
    (defroutes main-routes
      (GET "/" _ (the-page))
      (POST "/update-loggers" req
        (doseq [[logger level] (:params req)]
          (core/set-log-level! (name logger) level))
        (redirect "/"))
      (route/resources "/")
      (route/not-found "Page not found"))
    
    (def app (handler/site main-routes))

I put a `:main solo.jetty` into `project.clj`. So we can do this now:

    solo-project$ lein repl
    2018-04-14 06:45:27.199:INFO::main: Logging initialized @2975ms
    nREPL server started on port 41574 on host 127.0.0.1 - nrepl://127.0.0.1:41574
    REPL-y 0.3.7, nREPL 0.2.12
    Clojure 1.8.0
    Java HotSpot(TM) Client VM 1.8.0-ea-b116
        Docs: (doc function-name-here)
              (find-doc "part-of-name-here")
      Source: (source function-name-here)
     Javadoc: (javadoc java-object-or-class-here)
        Exit: Control+D or (exit) or (quit)
     Results: Stored in vars *1, *2, *3, an exception in *e
    
    solo.jetty=> (-main)
    2018-04-14 06:46:03.661:INFO:oejs.Server:nREPL-worker-0: jetty-9.2.21.v20170120
    2018-04-14 06:46:03.741:INFO:oejs.ServerConnector:nREPL-worker-0: Started ServerConnector@d59b83{HTTP/1.1}{0.0.0.0:3000}
    2018-04-14 06:46:03.741:INFO:oejs.Server:nREPL-worker-0: Started @39517ms
    #object[org.eclipse.jetty.server.Server 0x1b62888 "org.eclipse.jetty.server.Server@1b62888"]

Now go to  `http://localhost:3000/`. You should see just the button. Now do:

    solo.jetty=> (solo.core/set-log-level! "foo.bar" "INFO")
    nil
    solo.jetty=> 

And reload the page. You should see the logger.

There are some things wrong with this solution:

* we cannot create new loggers (just change existing ones)

* when there are a lot of loggers, the list will become long and for
  very long lists the `POST`-request will become too large for
  processing.

So I've added a few things to `web.clj`:

* a drop down list for log-levels (instead of entering a text)

        (hf/drop-down logger-name log-levels log-level)

  The set of known log-levels contains two _special_ elements (taken
  care of in `get-current-loggers`): `"UNKNOWN!"` for cases where we
  find a log-level in log4j that we don't know and `"NOT-SET!"` for
  loggers that have no log-level set. These loggers exist because Java
  classes usually use `static final Logger` so the lookup is done at
  class-initialization time which causes the logger being created even
  if there is not log-level configured for the concrete logger.

  When any of these two log-level is selected for any logger, the
  logger will not have its log-level set (see `set-log-level?`).

* enter new loggers (in a separate `form` element). 

        (defn set-log-level-form [filter-reg-ex]
          (hf/form-to
           {:id "new-logger"}
           [:post "/set-log-level"]
           (hf/hidden-field " FILTER" filter-reg-ex)
           (hf/label :logger "LOGGER:")
           (hf/text-field {:placeholder "Logger Name"} :logger)
           (hf/label :level "LEVEL:")
           (hf/drop-down :level log-levels "INFO")
           (hf/submit-button "SET LOG-LEVEL")))
                
* filter and sort loggers: the filter is a reg-ex which is used to
  `re-find`-filter the loggers by their names In addition you can
  select to _hide_ loggers that have log-level `"NOT-SET!"`:

        (defn get-current-loggers [filter-reg-ex]
          (map
           (fn [{:keys [logger-name log-level] :as logger}]
             (cond
               (= "" log-level) (assoc logger :log-level "NOT-SET!")
               (not (log-levels log-level)) (assoc logger :log-level "UNKNOWN!")
               :else logger))
           (sort-by :logger-name
                    (filter
                     #(re-find filter-reg-ex (:logger-name %))
                     (core/get-current-loggers)))))
        
  The filter can be entered via a textfield which is part of the
  `loggers-form` for entering the log-levels:

        (defn loggers-form [loggers filter-reg-ex]
          (hf/form-to
           [:post "/update-loggers"]
           [:table#loggers
            [:tr
             [:th "LOGGER" (hf/text-field {:placeholder "Filter Reg-Ex"} " FILTER" filter-reg-ex)]
             [:th "LEVEL"]]
            (for [{:keys [logger-name log-level]} loggers]
              [:tr
               [:td logger-name]
               [:td (hf/drop-down logger-name log-levels log-level)]])]
           (hf/submit-button "GO")))
          
* __TODO__: paging

* __TODO__: submit only changed entries

## Testing

__TODO__: how to test solo.web?

## Options for Deployment

We have (at least) two options:

* __WAR deployment__: we build a WAR containing all of _Solo's_
  dependencies (except log4j) incl. a `web.xml`. This can then be
  deployed side-by-side with the JEE host-application [1].

  We'll need no jump-starter in this case, since the `web.xml` will
  register a Ring servlet with the web-container which will
  initialize/start the servlet and then wait for incoming requests.

  If you like, you can use the initialization phase of the web-app to
  start an nREPL server.

* __Module Deployment__: we deploy only _Solo's_ "backend"-JAR
  (`solo.core` and `solo.nrepl` and their dependencies, maybe
  `solo.swank` if you like) as _modules_ (see above) to the app-server
  (or web-server; see below) running the host-application.

  In this case we need to jump-start `solo.repl` so that we can access
  it remotely (remember -- it's not a web-app in this case).

  Then we use Jetty (in a __separate__ JVM; or you could use any
  web-server even the one running the _Solo_ backend) to host
  `solo.web` and use nREPL clients for delegating calls from
  `solo-web` to `solo.core` functions remotely to the nREPL server.

Now we have a distributed application.

This second options makes sense if you want to work on _Solo's_
web-layer (which we will in step eight++) and you may have to change
dependencies. In this case, you can do this without re-starting
`solo.core` (which is more stable in terms of changes that you may
make to the code) and you need not re-start the app-server which can
be time-consuming.

This setup will work for development also: you can run `solo.web` in
your Leiningen dev JVM and call the _production_ `solo.core` via nREPL
-- nice!

[1] __TODO:__ Note: we have to look at classloaders since _Solo_ only
works, if it accesses the __same__ log4j classes as the
host-application does.

## WAR Deployment

In `solo-project/src/clj/solo/webapp.clj` I put the code for our
_statefull_ web-app. On startup the web-app will start an nREPL server
on port `7888` and `.close` it when the web-app shuts down.

Build:

    solo-project$ lein make-web-war
    Created [...]/solo-project/target/make-web-war+uberjar/solo-web.war

Here we use Jetty-Runner to run _Solo_ without a
host-application. That's why we have to add log4j JAR.

    solo-project$ java -Dlog4j.configuration=file:log4j.properties -Dlog4j.debug=true \
                       -jar lib/jetty-runner-9.4.9.v20180320.jar \
                       --jar lib/log4j-1.2.17.jar \
                       target/make-web-war+uberjar/solo-web.war

Then go to http://localhost:8080/

    lynx -nopause http://localhost:8080/

__Note:__

* the _stand-alone_ deployment is for testing only. Since there is no
  JEE host-application using log4j, there is no sense in setting any
  log-levels.

* when you deploy the _production-WAR_ you must make sure that the
  _Solo_ web-app is loaded such that the classloader that loads _Solo_
  can _see_ the log4j-classes of the host-application.

  This usually means that the host-application must be a JEE
  application (EAR) containing one ore more web-applications
  (WAR). The log4j-JAR should be included in EAR-`/lib`. _Solo_ is
  then deployed into the same server and will thus see the same log4j
  classes.

  If the log4j-JAR is contained in one of the WARs within the JEE app,
  you won't be able to set the log-levels for that web-app. In this
  case you have to use the _module deployment_ (see below).

* For JBoss/Wildfly you can use the admin console to upload
  `solo-web.war` into JBoss' content repository and _assign_ it to
  your host-applcation's _server_. (__TODO__: show jboss-cli
  example). Then you can turn _Solo_ on and off just by _disable_ and
  _enable_ in the admin console (so no need to _unassign_/_assign_ for
  this). That's really nice.

  __TODO__: take care of agent thread-pool in `destroy`!!!!

* For IBM WebSphere: __TODO:__ show this for JEE app and plain
  web-app.

__TODO__: make ports configureable (Apache Configuration!?) for nREPL
server so that we can deploy to more than one server on the same host
at the same time.

[1] VFS  
[2] Jetty-Runner  

## Module Deployment and nREPL Access

In some cases _Solo_ (i.e. `solo.core` as part of `solo-web.war`) may
not be able to access the host-application's log4j classes:

* when the log4j JAR is contained in the host-application's WAR rather
  than in its EAR-`/lib` (although this case should be rare and may be
  a sign for a broken packaging of the JEE app).

* when you're not targeting a JEE app but just a "simple" web-app.

In these cases you may have a hard time tweaking the web-container's
classloading so that it loads both -- `solo-web.war` and the
host-application -- with the __same__ classloader (for IBM Websphere
this is simple though).

So rather than deploying _Solo_ as a (self-contained, complete)
web-app we will make some of its namespaces part of the
host-application. 

You can build an uberjar with `solo.core`, `solo.repl` and Clojure and
put that as a _module_ into JBoss and bind the module to your profile
(__TODO__: Apache Tomcat). Then you need a jump-starter (see above) to
jump-start `solo.repl`.

Build `solo-module.jar`:

    solo-project$ lein make-module-jar && \
                  cp target/uberjar/solo-0.1.0-SNAPSHOT-standalone.jar solo-module.jar

Build `solo-jumpstart.jar`:

    solo-project$ lein make-jumpstart && \
                  cp target/provided+make-jumpstart/solo-0.1.0-SNAPSHOT.jar solo-jumpstart.jar

Run:

    solo-project$ java -Dlog4j.configuration=file:log4j.properties -Dlog4j.debug=true \
                       -jar lib/jetty-runner-9.4.9.v20180320.jar \
                       ../jetty-and-log4j-example/jetty-log4j-test-webapp/target/jetty-log4j-test-webapp-1.0-SNAPSHOT.war \
                       --jar solo-jumpstart.jar \
                       --jar solo-module.jar

    <groupId>org.eclipse.jetty.examples</groupId>
    <artifactId>jetty-and-log4j-example</artifactId>

Now we need _Solo_ web-app to access _Solo_ core.

Build:

    solo-project$ lein make-web-jar && \
                  cp target/uberjar/solo-0.1.0-SNAPSHOT-standalone.jar solo-web.jar

Run:

    solo-project$ java -jar solo-web.jar -j 3000 -r 7888

Now you can go to `http://localhost:3000` and talk to _Solo_ web-app
which will access _Solo_ core via nREPL.

    lynx -nopause http://localhost:3000

And you can go to `http://localhost:8080` and talk to the
jetty-and-log4j-example app which uses log4j.

------------------------------------------------------------------------
# Step Eight: clojurescript
------------------------------------------------------------------------

__TODO:__ introduce clojurescript, compiler, use clojurescript for
accessing backend (GET-reads, POST-writes). Hiccup in clojurescript?

* solo.rest:

* solo.client.rest

------------------------------------------------------------------------
# Step Nine: bREPL
------------------------------------------------------------------------

__TODO__: the REPL in the browser

* testing clojurescript?

------------------------------------------------------------------------
# Step Ten: figwheel
------------------------------------------------------------------------

__TODO__: dynamic code reload while preserving your app-state.

------------------------------------------------------------------------
# Step Eleven: React, Reagent, solo.client.reagent
------------------------------------------------------------------------

* dev-cards?

------------------------------------------------------------------------
# Step 12: chord, sente, solo.client.websockets
------------------------------------------------------------------------

__TODO__: full-duplex-async client-server communication

* solo.websockets

------------------------------------------------------------------------
# Step 13: Package, Release, Deploy
------------------------------------------------------------------------

__TODO__: build and use a Web-App (WAR) that you can deploy to
JBoss/Wildfly/Websphere to tweak your log4j configuration at runtime.

------------------------------------------------------------------------
# Notes, TODO
------------------------------------------------------------------------

* Step-four ist noch nicht ok, weil wir dort noch kein nREPL
  haben. Wir können also nur Swank starten. In step-five können wir
  dann nREPL einführen.

* setup `master` branch

* lein: code, run, test, deploy, release, codox

* Gorilla REPL: introduce Gorilla REPL

* https://github.com/metosin/compojure-api



