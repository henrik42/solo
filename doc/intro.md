# Einführung in Solo

_Solo_ ist eine Web-Anwendung, mit der man zur Laufzeit log4j
Log-Level einstellen kann.

_Solo_ benutzt selber keine log4j Logger, um Log-Ausgaben zu
erzeugen. _Solo_ ist dazu gedacht, "neben" eine andere Anwendung
(z.B. eine Java-/JEE-Anwendung) in einen Application-Server deployt zu
werden, um so die Möglichkeit zu haben, die log4j
Log-Level-Einstellungen dieser "Host-Anwendung" zu steuern.

# Verwendung

Der Einstieg erfolgt über `http://<host>:<port>/solo-web/`

Die GUI bietet:

* einen Link auf die HTML Dokumentation (ist im WAR enthalten)
* eine Eingabemöglichkeit für einen Logger-Namen und
  Log-Level. Dadurch kann man zu einem Logger direkt den Log-Level
  einstellen. Die Verarbeitung erfolgt über den Butten `SET LOG-LEVEL`
* eine Tabelle, in der alle derzeit in log4j "registrierten" Logger
  mit ihrem jeweiligen Log-Level angezeigt werden. Über
  Drop-Down-Elemente kann man den Log-Level setzen.
* im Tabellen-Kopf die Möglichkeit, einen regulären Ausdruck
  einzugeben, der zum Filern der Logger in der Tabelle benutzt wird.
* eine Checkbox, mit der man steuern kann, dass Logger, die keinen
  gesetzten Log-Level (`NOT-SET!`) haben, nicht in der Tabelle
  angezeigt werden. Die Verarbeitung aller Einstellungen, die in der
  Tabelle gemacht werden, erfolgt über den Button `SET LOG-LEVELS`.

# Installation

_Solo_ kann auf zwei Arten "installiert" werden.

## Deployment als WAR

Das _Solo_ WAR wird einfach in den JBoss/Wildfly deployt, in den auch
die Host-Anwendung deployt ist. Es ist auch möglich, das WAR in das
JBoss/Wildfly Content-Repository zu laden und dann dem Profil bzw. den
Profilen zuzuordnen ("assign"). Die Zuorndung kann auch jederzeit
deaktiviert und wieder aktiviert werden. Damit ergibt sich folgender
Workflow:

* WAR in Content-Repo hochladen
* WAR den Profilen zuordnen
* Die Zuordnung nach Belieben aktivieren/deaktivieren

In diesem Szenario ist es dann möglich, eine neue Version von Solo
**einmalig** in das Content-Repo hochzuladen und das dort vorhandene
WAR damit zu **ersetzen**. Dabei braucht man die Zuodnungen zu den
Profilen überhaupt nicht "anzufassen".

Im Websphere kann man leider nicht so verfahren. Das Verfahren klappt
auch nur mit "Enterprise-Anwendungen". Und wenn es sich um reine
Web-Anwendungen handelt (WAR anstatt EAR, z.B. Tomcat), kann man auch
nicht so verfahren. Für diese Fälle gibt es eine Alternative.

Anmerkung: auch im Websphere kann man _Solo_ als WAR "neben" die
Host-Anwendung deployen. Man muss dann nur dafür sorgen, dass _Solo_
nicht undeployt wird, wenn die Host-Anwendung erneut deployt wird. Man
muss im Websphere auf die Klassenlader-Einstellungen achten. Falls man
"alle Web-Anwendungen mit demselben Klassenlader laden" wählt, kann es
sein, dass die Klassen in _Solo_ mit denen der Host-Anwendung
kollidieren (z.B. Jetty-Klassen).

## Deployment als Modul

Bei diesem Deployment-Szenario werden zwei JVMs eingesetzt.

### Solo Core-JVM

Der "Kern" von _Solo_ (`solo.core`) und der "Remote-Server"
(`solo.nrepl`) (und deren Abhängigkeiten inkl. Clojure) werden als
(_shaded_ bzw _uber_) JAR in den Server deployt und der Host-Anwendung
zugeordnet (vgl. oben). Dabei kann es sich um einen JEE-Application
Server (EAR) oder Servlet-Container (z.B. Jetty, Tomcat) handeln.

Die Zuordnung zur "Host-Anwendung" kann im JBoss/Wildfly über zwei
Wege erfolgen:

* als zugeordnetes Artefakt (vgl. oben)
* als sog. "Module"

Im Websphere erfolgt die Zuordnung am besten über eine
"Klassenpfad-Erweiterung" (entspricht dem "Modul" im JBoss).

### Solo Web-JVM

Die Web-Anwendung wird in diesem Szenario in einer separaten JVM
(_Solo_ Web-JVM) betrieben. Dabei kann es sich wiederum um einen
Container handeln (JBoss/Wildfly, Jetty, Tomcat, etc.), in dem die
Web-Schicht von _Solo_ läuft oder man startet einfach den
Jetty-Server, der in _Solo_ enthalten ist, ohnen einen Container
einzusetzen.

### Laufzeit

Zur Laufzeit startet _Solo_ Core-JVM einen nREPL-Server. Über diesen
kann nun die _Solo_ Web-JVM mit dem "Backend" kommunizieren und selber
nur für die Interaktion mit dem Endanwender sorgen.

Um mit dem nREPL-Serve kommunizieren zu können, muss man die
Portnummer kennen, auf der der nREPL-Server lauscht. Diese muss für
_Solo_ Web-JVM dann als Portnummer angegeben werden.

Damit der nREPL-Server überhaupt gestartet wird, muss _Solo_ einmalig
"initialisiert" werden. Das läuft über `solo.jumpstart`. Die Idee
dabei ist, in dem Modul/JAR Klassen/Ressourcen zu liefern, die vom
Container "angezogen" werden und damit dafür sorgen, dass der _Solo_
Code ausgeführt wird.
