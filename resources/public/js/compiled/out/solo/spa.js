// Compiled by ClojureScript 1.10.238 {}
goog.provide('solo.spa');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('dommy.core');
if(typeof solo.spa.conn !== 'undefined'){
} else {
solo.spa.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"It works! solo.spa");

//# sourceMappingURL=spa.js.map?rel=1528438376045
