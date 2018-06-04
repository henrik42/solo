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

* einen Link auf die HTML Dokumentation (ist im WAR enthalten). Die
  Doku umfasst den Clojure Quellcode und die API Doku.
* eine Eingabemöglichkeit für einen Logger-Namen und
  Log-Level. Dadurch kann man zu einem Logger direkt den Log-Level
  einstellen. Die Verarbeitung erfolgt über den Butten `SET LOG-LEVEL`
* eine Tabelle, in der alle derzeit in log4j "registrierten" Logger
  (inkl. Root-Logger `root`) mit ihrem jeweiligen Log-Level angezeigt
  werden. Über Drop-Down-Elemente kann man den Log-Level setzen.
* im Tabellen-Kopf die Möglichkeit, einen regulären Ausdruck
  einzugeben, der zum Filtern der Logger in der Tabelle benutzt wird.
* eine Checkbox, mit der man steuern kann, dass Logger, die keinen
  gesetzten Log-Level (`NOT-SET!`) haben, nicht in der Tabelle
  angezeigt werden.

Die Verarbeitung aller Einstellungen, die in der Tabelle gemacht
werden (Filter, Checkbox, Log-Level), erfolgt über den Button
`SET LOG-LEVELS`.

# Installation

_Solo_ kann auf zwei Arten "installiert" werden.

## Deployment als WAR

Das _Solo_ WAR wird einfach in den JBoss/Wildfly deployt, in den auch
die Host-Anwendung deployt ist. Es ist auch möglich, das WAR in das
JBoss/Wildfly Content-Repository zu laden und dann dem Profil bzw. den
Profilen zuzuordnen (*assign*). Die Zuorndung kann auch jederzeit
deaktiviert und wieder aktiviert werden. Damit ergibt sich folgender
Workflow:

* WAR in Content-Repo hochladen
* WAR den Profilen zuordnen
* Die Zuordnung nach Belieben aktivieren/deaktivieren

In diesem Szenario ist es dann möglich, eine neue Version von Solo
**einmalig** in das Content-Repo hochzuladen und das dort vorhandene
WAR damit zu **ersetzen**. Dabei braucht man die Zuordnungen zu den
Profilen überhaupt nicht "anzufassen".

Wichtig ist, dass beim Re-Deployment der Host-Anwendung **kein**
**Undeployment** von _Solo_ WAR erfolgt.

Auch im Websphere kann man _Solo_ als WAR "neben" die Host-Anwendung
deployen. Man muss hier ebenfalls dafür sorgen, dass _Solo_ WAR nicht
undeployt wird, wenn die Host-Anwendung erneut deployt wird. Man muss
im Websphere auf die Klassenlader-Einstellungen achten. Falls man
"alle Web-Anwendungen mit demselben Klassenlader laden" wählt, kann es
sein, dass die Klassen in _Solo_ mit denen der Host-Anwendung
kollidieren. In der Regel sollten die Anwendungen aber keine
gemeinsame Klasse haben.

Das Verfahren (Deployment als WAR) klappt nur mit
"Enterprise-Anwendungen", da in diesem Fall das log4j JAR im EAR/`lib`
liegt und dort sowohl von der Host-Anwendung als auch von _Solo_
"gesehen" wird. Im Websphere ist es auch möglich, _Solo_ mit einer
reinen Web-Anwendung zu koppeln, wenn man "alle Web-Anwendungen mit
demselben Klassenlader laden" verwendet.

Um _Solo_ z.B. im Tomcat mit einer Web-Anwendung zu koppeln, muss man
auf "Deployment als Module" zurückgreifen.

## Deployment als Modul

Bei diesem Deployment-Szenario werden zwei JVMs eingesetzt.

**Hinweis:** diese Deployment-Option kann für alle Container und
  sowohl für Web- als auch EAR/JEE-Anwendungen verwendet werden.

### Solo Core-JVM

Der "Kern" von _Solo_ (`solo.core`) und der "Remote-Server"
(`solo.nrepl`) (und deren Abhängigkeiten inkl. Clojure) werden als
(*shaded* bzw _uber_) JAR in den Server deployt und der Host-Anwendung
zugeordnet (vgl. oben). Dabei kann es sich um einen JEE-Application
Server (EAR) oder Servlet-Container (z.B. Jetty, Tomcat) handeln.

Zusätzlich muss ein zweites JAR (`solo-jumpstart.jar`) deployt werden,
das dafür sorgt, dass der Kern von _Solo_ beim Start der
Host-Anwendung mit hochgefahren wird.

Die Zuordnung zur "Host-Anwendung" kann im JBoss/Wildfly über zwei
Wege erfolgen:

* als zugeordnete Artefakte (vgl. oben)
* als sog. "global module"

Im Websphere erfolgt die Zuordnung über eine "shared library"
(entspricht dem "global modul" im JBoss) oder als deploytes
Artefakt. Die Zuordnung über "shared library" hat den Vorteil, dass
man diese global "pflegen" kann und nach Belieben den verschiedenen
Servern/Anwendungen zuodnen kann. 

### Solo Web-JVM

Die Web-Anwendung wird in diesem Szenario in einer separaten JVM
(*Solo* Web-JVM) betrieben. Dabei kann es sich wiederum um einen
Container handeln (JBoss/Wildfly, Jetty, Tomcat, etc.), in dem die
Web-Schicht von _Solo_ läuft (diesmal aber **ohne** Host-Anwendung!)
oder man startet einfach den Jetty-Server, der in _Solo_ enthalten
ist, ohne einen Container einzusetzen.

### Laufzeit

Zur Laufzeit startet _Solo_ Core-JVM ("Backend") einen nREPL-Server
(vgl. `solo-jumpstart.jar` oben). Über diesen kann nun die _Solo_
Web-JVM mit dem "Backend" kommunizieren und selber nur für die
Interaktion mit dem Endanwender sorgen.

Um mit dem nREPL-Serve kommunizieren zu können, muss man die
Portnummer kennen, auf der der nREPL-Server lauscht. Diese muss für
_Solo_ Web-JVM dann als Portnummer angegeben werden.
