------------------------------------------------------------------------
# From Zero To Hero
------------------------------------------------------------------------

This is a Clojure https://clojure.org/ / ClojureScript
https://clojurescript.org/ tutorial.

We will build an application (_Solo_ [1]) that lets you control log4j
[2] log-levels at runtime. _Solo_ has a browser-based frontend
(ClojureScript/JavaScript) and a backend running in the JVM (Clojure).

You can _mix_ _Solo's_ backend with other JVM-applications (I'm
targeting Java applications running in Wildfly/JBoss and Websphere) so
that you can change logging configuration at runtime which is a nice
feature for test, QA and production (many logging libraries and JEE
servers support JMX [3] for this use-case [4], IBM Websphere has
dynamic control over logging built in).

This tutorial is ment as a starter for people with little Clojure
background. It will not explain/teach Clojure (you can find many good
tutorials on THE NET) but show which libraries and tools are used to
build and run the application.

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
      (-> (Logger/getLogger logger-name)
          logger->map))
    
    (defn set-log-level! [logger-name log-level]
      (-> (Logger/getLogger logger-name)
          (.setLevel (Level/toLevel log-level))))
    
    (defn get-current-loggers []
      (map logger->map
           (-> (Logger/getRootLogger)
               .getLoggerRepository
               .getCurrentLoggers
               enumeration-seq)))

And run it:

    solo-project$ java -cp lib/\*:src/clj clojure.main \
      -e "(use 'solo.core) (set-log-level! \"foo\" \"INFO\") (get-current-loggers)"
    ({:logger-name "foo", :log-level "INFO"})

Instead of running the code from command-line arguments you can
execute any script file and put the code in there. For example, let's
put the following code into `solo-project/scripts/script-one.clj`:

    (use 'solo.core)
    (set-log-level! "foo" "INFO")
    (println (get-current-loggers))

And run:

    solo-project$ java -cp lib/\*:src/clj clojure.main scripts/script-one.clj
    ({:logger-name foo, :log-level INFO})

Note that executing a script only evaluates the script _forms_ but
does __not__ __print__ their values.

Try changing the last line to

    (get-current-loggers)

Now re-run the command from above. It won't print anything. Now run
this instead:

    solo-project$ java -cp lib/\*:src/clj clojure.main -e '(load-file "scripts/script-one.clj")'
    ({:logger-name "foo", :log-level "INFO"})

So `-e` prints the result of the __last__ __evaluated__ _form_.

__Note:__ Clojure _script files_ and "regular" Clojure code look
almost the same and they can basically contain the same forms. But you
__load__ them differently. Script files are loaded directly by reading
in the source forms (via file-io or from a socket or from an in-memory
`String`). _Namespaced_ code is loaded via a classpath lookup for
AOT-compiled code and sources (see "Step Four" below). Do not confuse
the two.

[1] I'm using the old log4j 1.2 but you should be able to switch to 2.x http://central.maven.org/maven2/log4j/log4j/1.2.17/log4j-1.2.17.jar  

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
you can use `:reload` to see the changes in your REPL. So you need not
restart your JVM and you do not lose your internal program state
(i.e. any loggers you my have created):

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
your desktop PC running Emacs/SLIME (if we were using `127.0.0.1` you
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
    
    (defn -main [& args]
      (let [{:keys [host port] :or {host "0.0.0.0" port 4005}}
            (map (comp read-string str) args)]
        (swank/start-server :port port :host host)))

The `-main` function is (by convention) special -- it can be run like
this (note that it will receive `String`-type arguments when called
from command-line)

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

We want to use _Solo_ within a _host application_ -- i.e. a Java
application that does not offer changing log4j log-levels at runtime
out-of-the-box. We want to hook _Solo_ into this application changing
as little as possible about its configuration.

When you're working in a Java-shop you may be using JEE application
servers (like JBoss, Wildfly, IBM Websphere) or other containers (like
Tomcat, Jetty, Spring Boot). Usually the applications that run in
these containers will be Java applications with no Clojure
included. These applications do not know about Clojure or _Solo_ and
they probably have no built-in way of executing arbitrary
code/classes. So in order to run _Solo_, we somehow have to gain
control over an execution thread ... the host application has to
_jump-start_ _Solo_ (implicitly).

There are many things going on in typical Java applications that let
you gain control to have you jump-started:

* __Context Dependency Injection__: CDI [1a, 1b] (and SPI [2a, 2b]
  architectures in general) lets you _extend_ the functionality of a
  CDI implementation.

* __Java Server Faces__: JSF [3] has ways to supply and discover
  _managed beans_. So you can use this mechanism to make the JSF
  runtime call your code.

* __Spring IoC__: Spring [4] lets you define Spring beans that can run
  your code.

* __log4j__: log4j [5] lets you name and load `Logger` implementations
  and you can supply yours. When its class gets loaded you can run
  your code.

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

All of these __frameworks__ (except Spring) have one in common: you
have to deliver a __named class__ for them to call your code. You
cannot just deliver Clojure source code and let the framework
reflectively call `clojure.lang.RT.load(<your-namespace>)`. Some of
them let you supply annotated classes which are then picked up by the
framework via classpath scanning.

So we have to use `gen-class` to deliver that class. This class is
just used for __loading__ your namespace! It need not include the
Clojure code you want to execute. So we can deliver an _empty_
compiled namespace, package that in a JAR (or just put it on the
classpath) and then supply the _real_ code seperatly (see below).

But it does not suffice to just deliver the classes for your
jumpstart-namespace. You also have to deliver the JARs under
`solo-project/lib/` so you can use them (except -- probably --
log4j). At this point you have to understand how classloaders work and
how the mentioned frameworks organize the classloaders they use.

In many cases your class will be loaded by a classloader that has no
access (neither direct nor by delegation to other _co-laborating_
classloaders) to the host application's classes (incl. log4j). Often
the jumpstart-class does not even _see_ the Clojure runtime-classes
eventhough you supplied the libs. This usually leads to
`ClassNotFoundException` and then `NoClassDefFoundException` when
loading your jumpstart-namespace. You find examples/solutions for this
below.

[1a] https://docs.jboss.org/cdi/spec/1.0/html/
[1b] https://jaxenter.com/tutorial-introduction-to-cdi-contexts-and-dependency-injection-for-java-ee-jsr-299-104536.html  
[2a] https://docs.oracle.com/javase/tutorial/sound/SPI-intro.html  
[2b] https://docs.oracle.com/javase/tutorial/ext/basics/spi.html  
[3] http://www.oracle.com/technetwork/java/javaee/javaserverfaces-139869.html  
[4] https://docs.spring.io/spring/docs/current/spring-framework-reference/core.html  
[5] https://logging.apache.org/log4j/1.2/  
[6] https://docs.oracle.com/javase/8/docs/api/java/util/ResourceBundle.html  

## solo.jumpstart.jsf

Here we jump-start _Solo_ via a Java Server Faces _managed_
_bean_. You can use this in cases where your Java host application
uses JSF.

There are several ways to supply a JSF bean. One is to deliver the
file/resource `META-INF/faces-config.xml` which contains the bean
definition with the _named class_. This is
`jumpstart/resources/META-INF/faces-config.xml`:

    <faces-config xmlns="http://java.sun.com/xml/ns/javaee" 
                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
                  xsi:schemaLocation="http://java.sun.com/xml/ns/javaee 
                                      http://java.sun.com/xml/ns/javaee/web-facesconfig_1_2.xsd" 
                  version="1.2"> 
      <managed-bean>
        <managed-bean-name>jumpstart</managed-bean-name>
        <managed-bean-class>solo.jumpstart.jsf</managed-bean-class>
        <managed-bean-scope>application</managed-bean-scope>
      </managed-bean>
    </faces-config>
    
JSF will try to load/instanciate the class `solo.jumpstart.jsf` in
this case. So we have to deliver such a _named class_. In Clojure you
use `gen-class` and _Ahead-of-Time-Compilation_ (AOT) to create the
class file `solo/jumpstart/jsf.class`.

For reference -- here's the Clojure code
`solo-project/jumpstart/src/solo/jumpstart/jsf.clj`:

    (ns solo.jumpstart.jsf
      (:gen-class
       :init init))
    
    (defn -init []
      (println "solo.jumpstart.jsf/-init")
      [[]])
    
    (defn -main [& args]
      (println (str "solo.jumpstart.jsf/-main: " args))
      (solo.jumpstart.jsf.))
    
That's not much :) This code does almost __nothing__ (but see below).

For compile & package you can use `/scripts/make-jumpstart-jsf.sh`:

    #!/bin/bash -ex
    
    mkdir -p classes/
    rm -rf classes/*
    java -cp jumpstart/src/:classes/:lib/clojure-1.8.0.jar clojure.main -e "(compile 'solo.jumpstart.jsf)"
    jar -vcf jumpstart-jsf.jar -C classes/ solo
    jar -vuf jumpstart-jsf.jar -C jumpstart/resources/ META-INF
    
The JAR `jumpstart-jsf.jar` should look like this:

    solo-project$ jar -vtf jumpstart-jsf.jar 
        68 Thu Apr 05 19:04:56 UTC 2018 META-INF/MANIFEST.MF
         0 Thu Apr 05 19:03:20 UTC 2018 solo/
         0 Thu Apr 05 19:03:20 UTC 2018 solo/jumpstart/
      1338 Thu Apr 05 19:03:20 UTC 2018 solo/jumpstart/jsf$fn__5.class
      1516 Thu Apr 05 19:03:20 UTC 2018 solo/jumpstart/jsf$loading__5569__auto____3.class
       905 Thu Apr 05 19:03:20 UTC 2018 solo/jumpstart/jsf$_init.class
      2066 Thu Apr 05 19:03:20 UTC 2018 solo/jumpstart/jsf.class
      2477 Thu Apr 05 19:03:20 UTC 2018 solo/jumpstart/jsf__init.class
       565 Thu Apr 05 19:04:24 UTC 2018 META-INF/faces-config.xml

And you can run this class:

    solo-project$ java -cp jumpstart-jsf.jar:lib/clojure-1.8.0.jar solo.jumpstart.jsf foo bar
    solo.jumpstart.jsf/-main: ("foo" "bar")
    solo.jumpstart.jsf/-init

Some things to note:

* we don't need `-main` for jump-starting _Solo_ via JSF. It's just
  there so that `gen-class` generates the main-entry method `public
  static void main(String[])` for us so that we can run it from
  command-line.

* the generated class file `solo/jumpstart/jsf.class` does several
  things: (1) it bootstraps the Clojure runtime (2) it loads the
  namespace `solo.jumpstart.jsf`. The __method__ `jsf/main` and the
  (only) __constructor__ `jsf()` delegate to the functions `-main` and
  `-init` in namespace `solo.jumpstart.jsf`.

* the classpath above did not include
  `solo-project/jumpstart/src/`. So the compiled namespace
  `solo.jumpstart.jsf` is __included__ in the JAR. Still the Clojure
  _loader_ will search for the __source__ `solo/jumpstart/jsf.clj`
  when loading the namespace and only if it cannot find the source it
  will use the compiled version.

For _production_ we want to use `jumpstart-jsf.jar` just for loading
Clojure and delegation logic. The _real_ logic that we want to have
jump-started should come from a source folder that we put into the
classpath and have that loaded.

So let's try this: put your jump-start logic into
`src/clj/solo/jumpstart/jsf.clj`:

    (ns solo.jumpstart.jsf
      (require [solo.swank :as swank]))
    
    (defn -init []
      (println "solo.jumpstart.jsf/-init: starting Swank server")
      (swank/-main)
      (println "solo.jumpstart.jsf/-init: started Swank server")
      [[]])
    
    (defn -main [& args]
      (println (str "solo.jumpstart.jsf/-main: " args))
      (solo.jumpstart.jsf.))
    
This time we put `src/clj/` and all the libs into the classpath:

    solo-project$ java -cp jumpstart-jsf.jar:lib/*:src/clj/ solo.jumpstart.jsf foo bar
    solo.jumpstart.jsf/-main: ("foo" "bar")
    solo.jumpstart.jsf/-init: starting Swank server
    Connection opened on 0.0.0.0 port 4005.
    solo.jumpstart.jsf/-init: started Swank server
    
Cool!

Now we have it: we use the generated _named classes_ just for loading
a Clojure namespace and we supply the Clojure source code on the
classpath (in a JAR and/or in a file-system folder).

__Wildfly/JBoss__

For JBoss and Wildfly you can _deploy_ the JARs
(incl. `jumpstart-faces.jar`) to the _content_ _repository_ and
_assign_ them to the server group of your server.

There is one problem: the module classloader that loads
`jumpstart-faces.jar` does not _see_ the assigned (module)
`clojure-1.8.0.jar`!  So you won't be able to load
`solo/jumpstart/faces.class`. You could fix this by tweaking the
module's dependencies.

I usually just create a _global_ _module_ at
`<jboss-root>/module/jumpstart-faces/main/module.xml`:

So Clojure and the jumpstarter both are loaded by the same module
classloader.

Now you have to configure the global module for your profile:

__TODO: Jump-start telnet server__

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

Now we want to jump-start the nREPL server so we have remote access to
the application.

Here again we cannot load the nREPL namespace because the classloader
does not see the JAR/classes. One solution would be to also put the
`tools.nrepl-0.2.13.jar` into the __global__ __module__ instead of
__assigning__ it.

An alternative is to use the thread __context__ __classloader__ (CCL)
that is active when `solo/jumpstart/faces.class` is loaded to load
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
# Step Six: Leiningen
------------------------------------------------------------------------

Up to now we have been downloading JARs from Maven Central and Clojars
and put together the classpath by hand. Now we want to use a build
tool for that.

Leiningen [1] is an extendable task executor with dependency
resolution. We want to use it to setup a project (_scafolding_), to
build, run and test the code. Finally we use it to package, release
and deploy our application.

First you have to install leiningen.

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
  of our application without Leiningen), we use the `run` task to
  execute `-main` function in `solo-project/src/clj/solo/swank.clj`
  which start the swank server -- like this:

        solo-project$ lein run -m solo.swank

* __solo.nrepl__: And the same thing for nREPL server:

        solo-project$ lein run -m solo.nrepl/start-server 
        Starting nREPL server on port 7888 ...
        Started nREPL server on port 7888 : {:class clojure.tools.nrepl.server.Server, :empty false}

__TODO__ fix server-tostring

__Leiningen Build__

__TODO__: build jumpstart-jsf.jar

[1] https://leiningen.org/  
[2] https://github.com/technomancy/swank-clojure  

------------------------------------------------------------------------
# Step Seven: jetty, http-kit, ring, compojure, hiccup, solo.web
------------------------------------------------------------------------

__TODO:__ build the typical POST-back/GET web-app. Routing with
compojure, HTML markup server-side-generated with hiccup.

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




