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

    solo-project$ rlwrap java -cp lib/\*:src/clj clojure.main \
                  -i src/clj/solo/swank.clj \
                  -e "(solo.swank/start-server :port 4006)" \
                  -r
    Starting Swank server on {:port 4006, :host "0.0.0.0"} ...
    Connection opened on 0.0.0.0 port 4006.
    Started Swank server on {:port 4006, :host "0.0.0.0"}.
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

We want to use _Solo_ within an _host-application_ -- i.e. a Java
application that does not offer changing log4j log-levels at runtime
out-of-the-box. We want to hook _Solo_ into this host-application
changing as little as possible about the host-application's
configuration.

Since the host-application does not know about _Solo_ (so it will not
give us any way of using it), we will start a "server" (we could use
Swank, but there are more options; see below) that will listen for
connections and through this server we can control _Solo_ remotely
from the outside.

When you're working in a Java-shop you may be using JEE application
servers (like JBoss, Wildfly, IBM Websphere) or other containers (like
Tomcat, Jetty, Spring Boot). Usually the applications that run in
these containers will be Java applications with no Clojure
included. These applications do not know about Clojure or _Solo_ and
they probably have no built-in way of executing arbitrary
code/classes. So in order to run/use _Solo_, we somehow have to gain
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
`solo-project/lib/` so you can use them (except -- probably -- log4j
JAR). At this point you have to understand how classloaders work and
how the mentioned frameworks organize the classloaders they use.

In many cases your class will be loaded by a classloader that has no
access (neither direct nor by delegation to other _co-laborating_
classloaders) to the host-application's classes
(incl. log4j). Sometimes the jumpstart-class does not even _see_ the
Clojure runtime-classes eventhough you supplied the libs. This usually
leads to `ClassNotFoundException` and then `NoClassDefFoundException`
when loading your jumpstart-namespace.

You find examples/solutions for some cases below.

[1a] https://docs.jboss.org/cdi/spec/1.0/html/
[1b] https://jaxenter.com/tutorial-introduction-to-cdi-contexts-and-dependency-injection-for-java-ee-jsr-299-104536.html  
[2a] https://docs.oracle.com/javase/tutorial/sound/SPI-intro.html  
[2b] https://docs.oracle.com/javase/tutorial/ext/basics/spi.html  
[3] http://www.oracle.com/technetwork/java/javaee/javaserverfaces-139869.html  
[4] https://docs.spring.io/spring/docs/current/spring-framework-reference/core.html  
[5] https://logging.apache.org/log4j/1.2/  
[6] https://docs.oracle.com/javase/8/docs/api/java/util/ResourceBundle.html  
[7] https://github.com/henrik42/spring-break  

## solo.jumpstart.servlet_container_initializer

Here we jump-start _Solo_ via `ServletContainerInitializer` [1]. This
means we use a web-application's start-up mechanism to have _Solo_
jump-started.

We supply the resource
`META-INF/services/javax.servlet.ServletContainerInitializer` with
content:

    solo.jumpstart.servlet_container_initializer

This makes the servlet-container load this __named__ __class__ (see
above), create an instance and call `onStartup` method on this
instance.

__The simplest thing that can possibly work__

In `jumpstart/src/solo/jumpstart/servlet_container_initializer.clj`
you find the source that we AOT-compile/`:gen-class` to get the class
`solo.jumpstart.servlet_container_initializer`.

This first version (not committed to git! So you have to change the
source code to try this) does not seem to do _anything_ ;-)

    (ns solo.jumpstart.servlet_container_initializer
      (:gen-class
       :implements [javax.servlet.ServletContainerInitializer]))
    
    (defn -main [& _])
    
For compile & packaging you can use `scripts/make-jumpstart-jar.sh`
(`compile` is just a function you can call -- any time, any where)

    #!/bin/bash -ex
    
    mkdir -p classes/
    rm -rf classes/*
    java -cp jumpstart/src/:classes/:lib/clojure-1.8.0.jar:lib/javax.servlet-api-3.1.0.jar clojure.main \
    -e "(compile 'solo.jumpstart.servlet_container_initializer)"
    jar -vcf jumpstart.jar -C classes/ solo
    jar -vuf jumpstart.jar -C jumpstart/resources/ META-INF
    
The JAR `jumpstart.jar` should look like this -- including
`solo/jumpstart/servlet_container_initializer.class`!

    solo-project$ jar -vtf jumpstart.jar 
        68 Fri Jun 01 17:40:32 UTC 2018 META-INF/MANIFEST.MF
         0 Fri Jun 01 17:40:32 UTC 2018 solo/
         0 Fri Jun 01 17:40:32 UTC 2018 solo/jumpstart/
       844 Fri Jun 01 17:40:32 UTC 2018 solo/jumpstart/servlet_container_initializer$_main.class
      1646 Fri Jun 01 17:40:32 UTC 2018 solo/jumpstart/servlet_container_initializer$loading__5569__auto____3.class
      2376 Fri Jun 01 17:40:32 UTC 2018 solo/jumpstart/servlet_container_initializer.class
      1494 Fri Jun 01 17:40:32 UTC 2018 solo/jumpstart/servlet_container_initializer$fn__5.class
      2722 Fri Jun 01 17:40:32 UTC 2018 solo/jumpstart/servlet_container_initializer__init.class
         0 Mon May 28 06:12:32 UTC 2018 META-INF/services/
        44 Mon May 28 06:12:32 UTC 2018 META-INF/services/javax.servlet.ServletContainerInitializer
                
For this very first test you can run this class via
`solo.jumpstart.servlet_container_initializer/-main`. We'll use
Clojure's built-in _Socket Server_ to talk to _Solo_ remotely. All we
have to do is to define the system property
`clojure.server.repl`. This will make Clojure start a server (when
Clojure _bootstraps_) on port 5555 to which you can then connect via
_Netcat_ [2].

    solo-project$ java \
                  -Dclojure.server.repl="{:server-daemon false :port 5555 :accept clojure.core.server/repl}" \
                  -cp src/clj/:jumpstart.jar:lib/\* \
                  solo.jumpstart.servlet_container_initializer

And in a second shell:

    $ nc 127.0.0.1 5555 << EOF
    (use 'solo.core)
    (get-current-loggers)
    EOF
    
Running this will give you:

    $ nc 127.0.0.1 5555 << EOF
    > (use 'solo.core)
    > (get-current-loggers)
    > EOF
    user=> nil
    user=> ({:logger-name "root", :log-level "DEBUG"})

__Recap__

We have (1) _Solo's_ core logic and (2) a (basically empty) named
class that bootstraps Clojure and the socket server. This is enough to
go into production. You clould _deploy_ this to a JEE application
server and then use _Netcat_ remotely to control your log4j log-levels
(... and a lot more ...).

[1] https://docs.oracle.com/javaee/7/api/javax/servlet/ServletContainerInitializer.html  
[2] https://en.wikipedia.org/wiki/Netcat

## Jetty-Runner

So this is it! All we need to do is to (1) deploy `jumpstart.jar` and
`clojure-1.8.0.jar` to a web-container (2) tweak the web-application's
classpath so that it contains `src/clj` (so it sees `solo.core`
namespace) and to define the system property `clojure.server.repl`.

Of course we could build & package `solo.core` into a JAR also and
then deploy that instead of putting the source onto the classpath.

We can then connect to _Solo_ with _Netcat_ and control log4j
log-levels.

Some things to note:

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

Now let's use Jetty-Runner [1] for a first test involving a
web-container. For this we need an host-application -- a web-app. I
simply use `jetty-and-log4j-example` [2]. Checkout and then build with
Maven:

    jetty-log4j-test-webapp$ mvn clean install

Now run (I've put `--lib lib/` in there so that Swank JAR is on the
classpath too):

    solo-project$ java \
                  -Dclojure.server.repl="{:server-daemon false :port 5555 :accept clojure.core.server/repl}" \
                  -jar lib/jetty-runner-9.4.9.v20180320.jar \
                  --jar jumpstart.jar \
                  --lib lib/ \
                  --classes src/clj \
                  jetty-log4j-test-webapp-1.0-SNAPSHOT.war

Let's try what we've built so far:

    from-zero-to-hero$ rlwrap nc 127.0.0.1 5555 << EOF
    (use 'solo.core)
    (use 'solo.swank)
    (start-server)
    (get-current-loggers)
    EOF

You could deploy these JARs to other containers (JBoss/Wildfly,
Websphere). We'll see these use cases later on when we've re-worked
the jump-start a little.

[1] https://mvnrepository.com/artifact/org.eclipse.jetty/jetty-runner/9.4.10.v20180503  
[2] https://github.com/jetty-project/jetty-and-log4j-example/tree/master/jetty-log4j-test-webapp  

## solo.jumpstart/jumpstart

In the end we want to use `jumpstart.jar` just for loading Clojure and
delegation logic. The _real_ logic that we want to have jump-started
will come from `(solo.jumpstart/jumpstart)`. This way we can implement
more jump-start mechanisms and still only have one place where we code
what should happen when the jump-start occurs. And starting the socket
server is only one of many things that we can do.

So `src/solo/jumpstart/servlet_container_initializer.clj` becomes a
_loader_ for `solo.jumpstart/jumpstart`:

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
    
Now let's put your jump-start logic into
`src/clj/solo/jumpstart.clj`. Here we just start Swank:

    (ns solo.jumpstart
      (:require [solo.swank :as swank]))
    
    (defn jumpstart []
      (println "solo.jumpstart/jumpstart: starting up:")
      (swank/start-server)
      (println "solo.jumpstart/jumpstart: done."))
        

First build `jumpstart.jar`: `solo-project$ ./scripts/make-jumpstart-jar.`

Again we can test with or with no container:

    solo-project$ java \
                  -Dclojure.server.repl="{:server-daemon false :port 5555 :accept clojure.core.server/repl}" \
                  -jar lib/jetty-runner-9.4.9.v20180320.jar \
                  --jar jumpstart.jar \
                  --lib lib/ \
                  --classes src/clj \
                  jetty-log4j-test-webapp-1.0-SNAPSHOT.war

You can now connect

* via Swank/SLIME
* via _Netcat_
* and/or via a browser to `http://localhost:8080`

When you do this, try submitting the HTML form. You should see a log4j
warning:

    log4j:WARN No appenders could be found for logger (org.eclipse.jetty.examples.logging.EchoFormServlet).
    log4j:WARN Please initialize the log4j system properly.
    log4j:WARN See http://logging.apache.org/log4j/1.2/faq.html#noconfig for more info.

Oops -- we haven't initialized log4j! Let's see ....

    solo-project$ echo "(use 'solo.core) (get-current-loggers)" | nc 127.0.0.1 5555
    ({:logger-name "root", :log-level "DEBUG"} {:logger-name "org.eclipse.jetty.examples.logging.EchoFormServlet", :log-level ""})
    
OK. The logger is there but no one can log anything. Now let's try to
initialize log4j properly:

    solo-project$ java \
                  -Dlog4j.debug=true -Dlog4j.configuration=file:log4j.properties \
                  -Dclojure.server.repl="{:server-daemon false :port 5555 :accept clojure.core.server/repl}" \
                  -jar lib/jetty-runner-9.4.9.v20180320.jar \
                  --jar jumpstart.jar \
                  --lib lib/ \
                  --classes src/clj \
                  jetty-log4j-test-webapp-1.0-SNAPSHOT.war

This time when you submit the HTML form you should see something like:

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
    2018-06-02 07:23:52 INFO  EchoFormServlet:28 - Got request from 127.0.0.1 using Lynx/2.8.8dev.9 libwww-FM/2.14 SSL-MM/1.4.1 GNUTLS/2.12.14
    2018-06-02 07:23:52 INFO  EchoFormServlet:62 - [form] description = ""
    2018-06-02 07:23:52 INFO  EchoFormServlet:62 - [form] title = ""
    
Now let's try to set the log-level:

    solo-project$ echo '(set-log-level! "org.eclipse.jetty.examples.logging.EchoFormServlet" "OFF")' |\
                  nc 127.0.0.1 5555

When you submit the HTML form again you should see no log-message for
`EchoFormServlet`.

## Deployment into Production

__TBD__

### Wildfly/JBoss

__TBD__

### Websphere

__TBD__

### Tomcat

__TBD__

------------------------------------------------------------------------
# Step Five: nREPL
------------------------------------------------------------------------

If you want to connect __remotely__ via a __REPL__ (not the simple
socket server from above) to a Clojure runtime you can use nREPL
[1]. nREPL is a generic remote service (server and client) into a
runnng Clojure runtime and is used for connecting REPLs, IDE
integration and programmatic client calls.

Download [2] it to `solo-project/lib/tools.nrepl-0.2.13.jar`:

    solo-project/lib$ wget http://central.maven.org/maven2/org/clojure/tools.nrepl/0.2.13/tools.nrepl-0.2.13.jar

As with Swank we start the nREPL server and a REPL for local use (note
that the socket is opened on `0.0.0.0` -- see above!). 

    solo-project$ rlwrap java -cp lib/\*:src/clj clojure.main -e "(use 'clojure.tools.nrepl.server) (start-server :port 7888)" -r
    #clojure.tools.nrepl.server.Server{:server-socket ... "ServerSocket[addr=/0:0:0:0:0:0:0:0,localport=7888]"] ...
    user=> (use 'solo.core)
    nil

Now you can connect from another running Clojure JVM (note that we do
not add `src/clj` to the classpath -- so we do not need _Solo's_ code
to connect), connect to the nREPL server and remote-eval some code:

    solo-project$ rlwrap java -cp lib/\* clojure.main
    Clojure 1.8.0
    user=> (use 'clojure.tools.nrepl)
    nil
    user=> (with-open [conn (connect :port 7888)] (-> (client conn 1000) (message {:op :eval :code "(get-current-loggers)"}) response-values))
    ;--> [({:logger-name "root", :log-level "DEBUG"})]

Now set the log-level in the nREPL-server JVM:

    user=> (set-log-level! "foo" "INFO")
    nil

And again in the nREPL-client JVM:

    user=> (with-open [conn (connect :port 7888)]
      (-> (client conn 1000) (message {:op :eval :code "(get-current-loggers)"})
      response-values))
      
    [({:logger-name "root", :log-level "DEBUG"} {:logger-name "foo", :log-level "INFO"})]

Since we will be using nREPL for _Solo_ from now on, we use a separate
namespace `solo.nrepl` in `solo/nrepl.clj` to put the related code
there.

Besides directly using `clojure.tools.nrepl.client` there are other
ways to connect to an nREPL server:

* __Counterclockwise__ [3]: an Eclipse Plugin for Clojure development

* __Emacs/cider__ [4]: use cider/nREPL this instead of SLIME/Swank

* __Leiningen__ [5]: a build tool (see next step)

[1] https://github.com/clojure/tools.nrepl  
[2] http://central.maven.org/maven2/org/clojure/tools.nrepl/0.2.13/tools.nrepl-0.2.13.jar  
[3] http://doc.ccw-ide.org/  
[4] https://cider.readthedocs.io/en/latest/  
[5] https://leiningen.org/  

## Jump-start nREPL

Now we want to jump-start the nREPL server (just as we started the
Swank server in step four above) so we have remote access to the
application.

So let's change `src/clj/solo/jumpstart.clj` to:

    (ns solo.jumpstart
      (:require [solo.nrepl :as nrepl]
                [solo.core]))
    
    (defn jumpstart []
      (println "solo.jumpstart/jumpstart: starting up:")
      (nrepl/start-server)
      (println "solo.jumpstart/jumpstart: done."))

We switched from jump-starting _Swank_ to nREPL. You can jump-start
both if you like. But nREPL gives you all options and we'll be using
it for programmatic access rather than talking to _Solo_ through an
interactive shell session.

So you use Jetty-Runner again:

    solo-project$ java \
                  -Dlog4j.debug=true -Dlog4j.configuration=file:log4j.properties \
                  -Dclojure.server.repl="{:server-daemon false :port 5555 :accept clojure.core.server/repl}" \
                  -jar lib/jetty-runner-9.4.9.v20180320.jar \
                  --jar jumpstart.jar \
                  --lib lib/ \
                  --classes src/clj \
                  jetty-log4j-test-webapp-1.0-SNAPSHOT.war

And get log-levels via _Netcat_. Note that this time we do not need to
load namespace `solo.core` via `(use 'solo.core)` since we've put that
into `src/clj/solo/jumpstart.clj`:

    solo-project$ echo "(solo.core/get-current-loggers)" | nc 127.0.0.1 5555

And of course we can use nREPL client:

    solo-project$ rlwrap java -cp lib/\* clojure.main
    Clojure 1.8.0
    user=> (use 'clojure.tools.nrepl)
    nil
    user=> (with-open [conn (connect :port 7888)] (-> (client conn 1000) (message {:op :eval :code "(solo.core/get-current-loggers)"}) response-values))

------------------------------------------------------------------------
# Step Six: Leiningen, Codox, Marginalia
------------------------------------------------------------------------

Up to now we have been downloading JARs from Maven Central and Clojars
and put together the classpath by hand. Now we want to use a build
tool for that.

Leiningen [1] is an extendable task executor with dependency
resolution. We want to use it to setup a project ("scafolding"), to
build, run and test the code. Finally we use it to package, release
and deploy our application.

First you have to install Leiningen (see [1]).

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
        (is (= [{:logger-name "root", :log-level "DEBUG"}]
               (get-current-loggers)))
        (is (= [{:logger-name "root", :log-level "DEBUG"}
                {:logger-name "foo", :log-level "INFO"}]
               (do ;; mutator!
                 (set-log-level! "foo" "INFO")
                 (get-current-loggers))))))
            
And test:

    solo-project$ lein test
    lein test solo.core-test
    
    Ran 1 tests containing 2 assertions.
    0 failures, 0 errors.

__Dependencies__

Instead of supplying the JARs ourselves via `:resource-paths` we can
use Leiningen to do that for us via `:dependencies`. Change
`solo-project/project.clj` to:

    (defproject solo "0.1.0-SNAPSHOT"
      :source-paths ["src/clj"]
      :dependencies [[org.clojure/clojure "1.8.0"]
                     [log4j/log4j "1.2.17"]])

And run the tests again:

    lein test

Leiningen will __download__ the JARs to `~/.m2/repo/` (your default
local _Maven_ _Repository_ -- eventhough we're not using Maven!) so
you'll need an internet connection for this to work.

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
        ({:logger-name "root", :log-level "DEBUG"} {:logger-name "foo", :log-level "INFO"})
        
* __rlwrap/nREPL client__: since Leiningen has nREPL server &
  __client__ built-in, you can use `repl :connect` to start a REPL
  that is connected remotely to the nREPL server port 7888 from above
  (so you're running two Leiningen JVMs at the same time for
  this). Note that you don't even need the git workspace
  (i.e. `project.clj`) for this -- you just need Leiningen.

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
        user=> (get-current-loggers)
        ({:logger-name "root", :log-level "DEBUG"} {:logger-name "foo", :log-level "INFO"})

* __Swank plugin__: `lein-swank` [2] is a (deprecated) Leiningen
  plugin (for development) that you can put into `project.clj`:
  
        (defproject solo "0.1.0-SNAPSHOT"
          :source-paths ["src/clj"]
          :dependencies [[org.clojure/clojure "1.8.0"]
                         [log4j/log4j "1.2.17"]]
          :plugins [[lein-swank "1.4.5"] ])
        
    Now you can run the `swank` task:

        solo-project$ lein swank 4005 0.0.0.0
        Listening for transport dt_socket at address: 39371
        Connection opened on 0.0.0.0 port 4005.

* __solo.swank__: Since we want to "use Swank in production" (as part
  of our application without Leiningen and the Swank plugin), we add
  `[swank-clojure/swank-clojure "1.4.3"]` to the `:dependencies`:

        (defproject solo "0.1.0-SNAPSHOT"
          :source-paths ["src/clj"]
          :dependencies [[org.clojure/clojure "1.8.0"]
                         [log4j/log4j "1.2.17"]
                         [swank-clojure/swank-clojure "1.4.3"]]
          :plugins [[lein-swank "1.4.5"] ])
        
    Now we use the `run` task to execute `-main` function in
    `solo-project/src/clj/solo/swank.clj` which start the swank server
    -- like this:

        solo-project$ lein run -m solo.swank

* __solo.nrepl__: And the same thing for nREPL server:

        solo-project$ lein run -m solo.nrepl
        Starting nREPL server on {:port 7888, :host "0.0.0.0"} ...
        Started nREPL server on {:port 7888, :host "0.0.0.0"}.

__Leiningen Build__

I'll encapsulate the builds (`make-jumpstart` and `make-doc`) of
several target artifacts in `:alias` and `:profile` entries. The
`project.clj` now looks something like this:

    (defproject solo "0.1.0-SNAPSHOT"
      
      :source-paths ["src/clj"]
      :resource-paths ["resources"]
      :target-path "target/%s/"
    
      :dependencies [[org.clojure/clojure "1.8.0"]
                     [swank-clojure/swank-clojure "1.4.3"]
                     [org.clojure/tools.nrepl "0.2.12"]
                     [log4j/log4j "1.2.17"]
                     [javax.servlet/javax.servlet-api "3.1.0"]]
      
      :plugins [[lein-swank "1.4.5"]
                [lein-codox "0.10.3"]
                [lein-marginalia "0.9.1"]]
      
      :aliases {"make-jumpstart" ["with-profile" "+make-jumpstart" "do" ["clean"] "jar"]
    
                "make-doc" ["with-profile" "+make-doc" "do"
                            ["clean"]
                            ["codox"]
                            ["marg"
                             "-d" "resources/public/generated-doc/"
                             "-f" "solo-source.html"
                             "src/clj"
                             "jumpstart/src"]]}
      
      :codox {:metadata {:doc/format :markdown}
              :doc-files ["doc/intro.md", "README.md"]
              :output-path "resources/public/generated-doc/"}
      
      :profiles {:make-jumpstart {:resource-paths ^:replace ["jumpstart/resources"]
                                  :aot [solo.jumpstart.servlet_container_initializer]
                                  :source-paths ^:replace ["jumpstart/src"]}
                 
                 :make-doc {:source-paths ["jumpstart/src"]
                            :clean-targets ^{:protect false} ["resources/public/generated-doc"]}})
    
__Building jumpstart.jar__

You can use Leiningen to build the `jumpstart.jar` (instead of
`solo-project/scripts/make-jumpstart-jar.sh`).

And build:

    solo-project$ lein make-jumpstart && \
                  cp target/provided+make-jumpstart/solo-0.1.0-SNAPSHOT.jar ./jumpstart.jar

__Building Documentation from Clojure Sources and Markdown__

We use Codox [3] to generate API documenation (HTML) from Clojure
source code, `solo-project/doc/intro.md` and
`solo-project/README.md`.

We use Marginalia [4] to convert Clojure source into one big HTML with
a two-column layout with comments/doc-strings and Clojure code.

In this case we generate the documenation into
`resources/public/generated-doc/`. So this is at "development time" --
__not__ __compile-time__. At compile-time we include the generated
documentation as _static_ _content_ and package it into the JAR or
WAR. Later we will deliver the HTML files to end users via _Solo's_
web GUI.

So after running `lein make-doc` you will usually commit the generated
files into your git repo.

__Building solo-module.jar__

Now we have to build the JAR, that contains _Solo's_ core logic and
all the classes that are needed to run _Solo's_ backend. This is not a
web-application. It's just the backend that we will talk to via nREPL
client.

    solo-project$ lein make-module-jar && \
                  cp target/uberjar/solo-0.1.0-SNAPSHOT-standalone.jar ./solo-module.jar

This build/`project.clj` is a little trickier (not shown here) than
the ones above. We have to make sure, that we __exclude__ log4j and
the servlet API from `solo-module.jar`. Rather than __excluding__ JARs
when building this target, I like to __include__ __explicitly__ only
the ones that I really need.

Again you may deploy `solo-module.jar` and `jumpstart.jar` to an
application server (see above) and use `lein repl :connect` to talk to
_Solo_.

## Deployment into Production

__TBD:__ differences to step four

[1] https://leiningen.org/  
[2] https://github.com/technomancy/swank-clojure  
[3] https://github.com/weavejester/codox  
[4] https://github.com/gdeer81/marginalia  

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
  support _Java Servlets_ [3] (**TODO**: really? check that for
  http-kit). We will use them for development (and optionally for
  production). You can use either of them.

* __Ring__: Ring [4] supplies the integration into the _Java Servlet
  Layer_. It receives requests and must deliver responses in the way
  the Java Servlet Spec dictates.

  Ring translates the requests into Clojure function calls (which may
  well be your functions) and will pass in the "transformed" Servlet
  request as a Clojure map (**pure data**! No statefull streams ... if
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

    solo-project$ lein ring server-headless
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

I put a `:main solo.jetty` into the `:repl` profile in
`project.clj`. So we can do this now (notice that `solo.jetty` is
loaded automatically):

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

* we cannot create new loggers via the web-gui (just change existing ones)
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

        (defn set-log-level-form [{:keys [filter-reg-ex hide]}]
          (hf/form-to
           {:id "new-logger"}
           [:post "/set-log-level"]
           (hf/hidden-field " FILTER" filter-reg-ex)
           (hf/hidden-field " HIDE" (str hide))
           (hf/label :logger "LOGGER:")
           (hf/text-field {:placeholder "Logger Name"} :logger)
           [:span {:style "padding:1em;"}]
           (hf/label :level " LEVEL:")
           (hf/drop-down :level log-levels "INFO")
           [:span {:style "padding:1em;"}]
           (hf/submit-button "SET LOG-LEVEL")))
                
* filter and sort loggers: the filter is a reg-ex which is used to
  `re-find`-filter the loggers by their names. In addition you can
  select to _hide_ loggers that have log-level `"NOT-SET!"`:

        (defn get-current-loggers [{:keys [filter-reg-ex hide]}]
          (->> (core/get-current-loggers)
               (map
                (fn [{:keys [logger-name log-level] :as logger}]
                  (cond
                    (= "" log-level) (assoc logger :log-level "NOT-SET!")
                    (not (log-levels log-level)) (assoc logger :log-level "UNKNOWN!")
                    :else logger)))
               (filter 
                #(and (re-find filter-reg-ex (:logger-name %))
                      (if hide
                        (not= "NOT-SET!" (:log-level %))
                        true)))
               (sort-by :logger-name)))
                
  The filter can be entered via a textfield which is part of the
  `loggers-form` for entering the log-levels:

        (defn loggers-form [loggers {:keys [filter-reg-ex hide]}]
          (hf/form-to
           [:post "/update-loggers"]
           [:table#loggers
            [:tr
             [:th "LOGGER"
              (hf/text-field
               {:placeholder "Filter Reg-Ex"
                :style "float: right;"}
               " FILTER" filter-reg-ex)]
             [:th "LEVEL"
              [:span {:style "float: right;"} 
               (hf/label :hide " Hide NOT-SET!:")
               (hf/check-box " HIDE" hide)]]]
            (for [{:keys [logger-name log-level]} loggers]
              [:tr
               [:td logger-name]
               [:td (hf/drop-down logger-name log-levels log-level)]])]
           (hf/submit-button "SET LOG-LEVELS")))
                  
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
  `solo.web` to `solo.core` functions remotely to the nREPL server.

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
    Created [...]/solo-project/target/make-web-war+web-deps+uberjar/solo-web.war

Here we use Jetty-Runner to run _Solo_ without a
host-application. That's why we have to add log4j JAR.

    solo-project$ java -Dlog4j.configuration=file:log4j.properties -Dlog4j.debug=true \
                       -jar lib/jetty-runner-9.4.9.v20180320.jar \
                       --jar lib/log4j-1.2.17.jar \
                       target/make-web-war+web-deps+uberjar/solo-web.war

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
  (WAR). The log4j JAR should be included in EAR-`/lib`. _Solo_ is
  then deployed into the same server and will thus see the same log4j
  classes.

  If the log4j JAR is contained in one of the WARs within the JEE app,
  you won't be able to set the log-levels for that web-app. In this
  case you have to use the _module deployment_ (see below).

* For JBoss/Wildfly you can use the admin console to upload
  `solo-web.war` into JBoss' content repository and _assign_ it to
  your host-applcation's _server_. (**TODO**: show jboss-cli
  example). Then you can turn _Solo_ on and off just by _disable_ and
  _enable_ in the admin console (so no need to _unassign_/_assign_ for
  this). That's really nice.

  __TODO__: take care of agent thread-pool in `destroy`!!!!

* For IBM WebSphere: __TODO:__ show this for JEE app and plain
  web-app.

__TODO__: make ports configureable (Apache Configuration!?) for nREPL
server so that we can deploy to more than one server on the same host
at the same time.

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
(**TODO**: Apache Tomcat). Then you need a jump-starter (see above) to
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

For client side logic I use ClojureScript/CLJS [1]. CLJS is a
compiled/transpiled language which is very similar to Clojure. CLJS is
compiled to JavaScript/JS, the compiler is written in Clojure.

Until now `solo.web` uses no client-side scripting. All client
interaction with the backend is based on HTML-`form`
_POST-backs_. While we're introducing client-side scripting we'll
re-structure the logic a little:

* We publish web-services (`/ws/get-current-loggers` and
  `/ws/set-log-level`) on the server-side: these will use JSON
  (**TODO:** what about EDN?) as message format. That makes it easy to
  use these web-services from the browser/CLJS.

* We consume (i.e. _use_) these web-services on the client-side: we'll
  use CLJS to (1) retrieve the loggers via `/ws/get-current-loggers`,
  (2) do the filtering/sorting and (3) render the data to the DOM. For
  mutation we'll (4) call `/ws/set-log-level`.

So we move most of the MVC-logic away from the server and put it into
the client. Not only will the client do the rendering (which it has
done before already) but also do _smart_ things like __create__ the
markup/DOM and do filtering etc. The backend becomes just a thin
(technical) proxy/adapter and the bare _core_ _logic_ (`solo.core`).

[1] ClojureScript

## solo.spa, solo.web.spa

Before we look into the CLJS sources let's have a look at the build.

__Build__

We put the CLJS sources into `src/cljs/solo/spa.cljs`. You can compile
these sources with:

    solo-project$ lein make-spa

This will run the CLJS compiler which produces JavaScript code into
`resources/public/js/compiled/`. You should see something like this:

    Compiling ClojureScript...
    Compiling ["resources/public/js/compiled/solo-spa.js"] from ["src/cljs"]...
    Successfully compiled ["resources/public/js/compiled/solo-spa.js"] in 1.84 seconds.

The compile/build is configured with some `project.clj`
entries. `:cljsbuild` defines the build(s).

      :aliases {,,, "make-spa" ["with-profile" "+spa" "trampoline" "cljsbuild" "once"]}

      :profiles {,,,
                 :spa {:plugins [[lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure] ]]]
                       
                       :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                                         :target-path]
    
                       :dependencies [[org.clojure/clojurescript "1.10.238"]
                                      [prismatic/dommy "1.1.0"]]}}
                                      
      :cljsbuild {:builds
                  [{:id "dev"
                    :source-paths ["src/cljs"]
    
                    :compiler {:main solo.spa
                               :asset-path "js/compiled/out"
                               :output-to "resources/public/js/compiled/solo-spa.js"
                               :output-dir "resources/public/js/compiled/out"
                               :source-map-timestamp true}}]}

The _main_ entry point is `solo-spa.js` (cf. `:output-to
"resources/public/js/compiled/solo-spa.js"`). It should look like
this:

    var CLOSURE_UNCOMPILED_DEFINES = {};
    var CLOSURE_NO_DEPS = true;
    if(typeof goog == "undefined")
      document.write('<script src="js/compiled/out/goog/base.js"></script>');
    document.write('<script src="js/compiled/out/goog/deps.js"></script>');
    document.write('<script src="js/compiled/out/cljs_deps.js"></script>');
    document.write('<script>if (typeof goog == "undefined")
      console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?");</script>');
    document.write('<script>goog.require("process.env");</script>');
    document.write('<script>goog.require("solo.spa");</script>');

It's a _loader_ script that will pull in all libraries that CLJS and
`solo.spa` depend on and in the end it will _load_ (i.e. `require`)
namespace `solo.spa` (cf. `:main solo.spa`).

Note that the _loader_ uses `document.write` (so it really _writes_
_into_ the hosting HTML page while it is loading) to make the
__browser__ load the JavaScript sources. It does __not__ use a JS API
to dynamically load JS sources. This makes it difficult to load these
JavaScript sources after the hosting HTML page has been loaded
initially.

Many more files are written to `resources/public/js/compiled/out/`
(cf. `:output-dir "resources/public/js/compiled/out/*"`). CLJS uses
the Google Closure compiler [1], so that explains why there are so
many JS files generated.

[1] Google Closure Compiler

__Hosting HTML Page__

We want to run `solo.spa` in the browser. In order to load the
compiled JS into the browser we need a _hosting_ HTML page that
contains a `<script>` element that references the JS file
`resources/public/js/compiled/solo-spa.js`.

You could use a static `index.html` file and load that via `file://`
or `http://` URL. Instead we will create the HTML page __dynamically__
via _Solo's_ server side. In `src/clj/solo/web/spa.clj` you find the
web-app that we'll use for the SPA. It delivers

* the hosting HTML page at `/spa`: this loads the JS main module, look
  into `solo.web.spa/the-page`

        [:script {:src "out/solo-spa.js" :type "text/javascript"}]

* the compiled JS files at `/out`

        (route/resources "/out" {:root "public/js/compiled"})

* the web-services at `/ws`

__Note:__ Getting the (relative) URLs right can be tricky. We load the
hosting page at `/spa` and the load-module `solo-spa.js` via relative
URL at `/out/solo-spa.js`.

`/out` is served via `(route/resources "/out" {:root
"public/js/compiled"})`. `route/resources` works through the
classpath/classloader. And since we have `:resource-paths
["resources"]` the base-offset/`:root` is
`resources/public/js/compiled`. So `/out/solo-spa.js` effectivly
points to `resources/public/js/compiled/solo-spa.js`.

From there we load the _assets_ via relative URL `:asset-path
"js/compiled/out"`. For example relative URL
`src="js/compiled/out/goog/base.js"` becomes URL
`out/js/compiled/out/goog/base.js` which in turn effectivly points to
`resources/public/js/compiled/js/compiled/out/goog/base.js`.




All other requests will be delegated to `solo.web/app`. So that you
can still use _Solo's_ CSS files in your SPA and you can even _switch_
to the plain HTML version of _Solo_.

All this routing is condensed into this (have I mentioned that Clojure
source is so _dense_ that it first hurts when you come from other
programming languages like -- say -- Java?!)

    (defroutes main-routes
      (GET "/spa" _ (the-page))
      (route/resources "/out" {:root "public/js/compiled"})
      web/app)

__Running Solo SPA__

You can run the SPA just the way you ran _Solo_ before. I changed
`src/clj/solo/jetty.clj` so that Jetty now serves the new web-app
`solo.web.spa/app`.

    solo-project$ lein run-web-jar -j 3000

__Development__

While using _Solo_ SPA you can change the Clojure backend and the CLJS
front-end anytime.

You just need to run the CLJS compiler (__incremental__ __build__!)
whenever the CLJS sources change and you need nREPL or Swank to talk
to the backend. Like this:

    solo-project$ lein make-spa-auto

This runs this alias:

    "make-spa-auto" ["with-profile" "+spa" "trampoline" "cljsbuild" "auto"]

And then run _Solo_:

    solo-project$ lein run-web-jar -j 3000 -s 4005

Now you have two running JVMs.

When you change the CLJS source you have to _reload_ the page in the
browser after the CLJS compiler has written the updated file. The
reload will not (__yet__!) be done for you.

__Browser REPL__

There is one piece missing: we'd like to have a REPL in the browser
(just the way we have a REPL in Clojure/JVM) so that we can interact
directly with the JavaScript/CLJS environment and the DOM.

There are REPLs that run completly in the browser. Here we will use a
REPL that reads its input through a Clojure/JVM prompt, compiles the
code on-the-fly and then hands over the compiled CLJS to the browser
and executes it there.

Since we cannot connect to a server-socket in the browser we make the
browser repeatedly __pull__ the compiled CLJS from the Clojure/JVM --
_long_ _polling_.

You run this _long_ _polling_ like this in your CLJS. When this
namespace is loaded it will start a browser REPL and connect to the
given URL and _long_ _poll_ that URL:

    (:require [clojure.browser.repl :as repl])
    (defonce conn (repl/connect "http://localhost:9000/repl"))

Then you need to start the server-side of the browser REPL:

    solo-project$ lein run-brepl

This runs this:

    "run-brepl" ["with-profile" "+spa" "trampoline" "cljsbuild" "repl-listen"]

The CLJS plugin will try to open a browser window. You can close
that. Then go to http://localhost:3000/spa

Open the development tools in our browser and go to the "networking"
section. You should see many `GET` requests like this

    http://localhost:3000/spa
    http://localhost:3000/css/solo.css
    http://localhost:3000/out/solo-spa.js
    http://localhost:3000/js/compiled/out/goog/base.js
    [...]
    http://localhost:3000/js/compiled/out/solo/spa.js
    http://localhost:9000/repl?xpc=[...]
    http://localhost:9000/

After `http://localhost:9000/` you should see the prompt in the
browser REPL JVM:

    solo-project$ lein run-brepl
    Running ClojureScript REPL, listening on port 9000.
    ClojureScript 1.10.238
    cljs.user=>

Now do this. You should see a pop-up in your browser:

    cljs.user=> (js/alert "don't panic!")
    nil
    cljs.user=> 

You have a REPL in your browser.

## solo.rest, solo.client.rest

## solo.client

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



