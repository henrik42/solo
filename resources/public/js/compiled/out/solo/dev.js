// Compiled by ClojureScript 1.10.238 {}
goog.provide('solo.dev');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
if(typeof solo.dev.conn !== 'undefined'){
} else {
solo.dev.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"It works! DEV");
solo.dev.on_js_reload = (function solo$dev$on_js_reload(){
return cljs.core.print.call(null,"on-js-reload");
});

//# sourceMappingURL=dev.js.map?rel=1528314504235
