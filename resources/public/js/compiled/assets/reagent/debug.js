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
var G__1642__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1642 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1643__i = 0, G__1643__a = new Array(arguments.length -  0);
while (G__1643__i < G__1643__a.length) {G__1643__a[G__1643__i] = arguments[G__1643__i + 0]; ++G__1643__i;}
  args = new cljs.core.IndexedSeq(G__1643__a,0,null);
} 
return G__1642__delegate.call(this,args);};
G__1642.cljs$lang$maxFixedArity = 0;
G__1642.cljs$lang$applyTo = (function (arglist__1644){
var args = cljs.core.seq(arglist__1644);
return G__1642__delegate(args);
});
G__1642.cljs$core$IFn$_invoke$arity$variadic = G__1642__delegate;
return G__1642;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__1645__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1645 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1646__i = 0, G__1646__a = new Array(arguments.length -  0);
while (G__1646__i < G__1646__a.length) {G__1646__a[G__1646__i] = arguments[G__1646__i + 0]; ++G__1646__i;}
  args = new cljs.core.IndexedSeq(G__1646__a,0,null);
} 
return G__1645__delegate.call(this,args);};
G__1645.cljs$lang$maxFixedArity = 0;
G__1645.cljs$lang$applyTo = (function (arglist__1647){
var args = cljs.core.seq(arglist__1647);
return G__1645__delegate(args);
});
G__1645.cljs$core$IFn$_invoke$arity$variadic = G__1645__delegate;
return G__1645;
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

//# sourceMappingURL=debug.js.map?rel=1531168298020
