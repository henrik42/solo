// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__20842__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__20842 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20843__i = 0, G__20843__a = new Array(arguments.length -  0);
while (G__20843__i < G__20843__a.length) {G__20843__a[G__20843__i] = arguments[G__20843__i + 0]; ++G__20843__i;}
  args = new cljs.core.IndexedSeq(G__20843__a,0,null);
} 
return G__20842__delegate.call(this,args);};
G__20842.cljs$lang$maxFixedArity = 0;
G__20842.cljs$lang$applyTo = (function (arglist__20844){
var args = cljs.core.seq(arglist__20844);
return G__20842__delegate(args);
});
G__20842.cljs$core$IFn$_invoke$arity$variadic = G__20842__delegate;
return G__20842;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__20845__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__20845 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20846__i = 0, G__20846__a = new Array(arguments.length -  0);
while (G__20846__i < G__20846__a.length) {G__20846__a[G__20846__i] = arguments[G__20846__i + 0]; ++G__20846__i;}
  args = new cljs.core.IndexedSeq(G__20846__a,0,null);
} 
return G__20845__delegate.call(this,args);};
G__20845.cljs$lang$maxFixedArity = 0;
G__20845.cljs$lang$applyTo = (function (arglist__20847){
var args = cljs.core.seq(arglist__20847);
return G__20845__delegate(args);
});
G__20845.cljs$core$IFn$_invoke$arity$variadic = G__20845__delegate;
return G__20845;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1534453544490
