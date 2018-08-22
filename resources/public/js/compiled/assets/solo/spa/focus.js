// Compiled by ClojureScript 1.10.238 {}
goog.provide('solo.spa.focus');
goog.require('cljs.core');
goog.require('reagent.core');
/**
 * Atom (map) thats maps target ids (keyword) to DOM nodes (not
 *   Reagent component node!).
 * 
 *   Note: there is only one global atom. Use namespaced keywords to
 *   prevent key collisions.
 */
solo.spa.focus._BANG_focus_targets = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Atom that holds the _focused_ target's id (keyword).
 */
solo.spa.focus._BANG_focused_target = cljs.core.atom.call(null,null);
/**
 * Memoized function that returns a Reagent component function for
 *   `target`. The returned value has meta `:component-did-mount`
 *   function which handles the focus for `target`. The Reagent component
 *   function just returns its arguments as a vector.
 */
solo.spa.focus.register_focus_target = cljs.core.memoize.call(null,(function (target){
return cljs.core.with_meta.call(null,(function() { 
var G__5905__delegate = function (xs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xs);
};
var G__5905 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__5906__i = 0, G__5906__a = new Array(arguments.length -  0);
while (G__5906__i < G__5906__a.length) {G__5906__a[G__5906__i] = arguments[G__5906__i + 0]; ++G__5906__i;}
  xs = new cljs.core.IndexedSeq(G__5906__a,0,null);
} 
return G__5905__delegate.call(this,xs);};
G__5905.cljs$lang$maxFixedArity = 0;
G__5905.cljs$lang$applyTo = (function (arglist__5907){
var xs = cljs.core.seq(arglist__5907);
return G__5905__delegate(xs);
});
G__5905.cljs$core$IFn$_invoke$arity$variadic = G__5905__delegate;
return G__5905;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
cljs.core.swap_BANG_.call(null,solo.spa.focus._BANG_focus_targets,cljs.core.assoc,target,reagent.core.dom_node.call(null,this$));

if(cljs.core._EQ_.call(null,target,cljs.core.deref.call(null,solo.spa.focus._BANG_focused_target))){
cljs.core.swap_BANG_.call(null,solo.spa.focus._BANG_focused_target,cljs.core.str,"consumed!");

return target.call(null,cljs.core.deref.call(null,solo.spa.focus._BANG_focus_targets)).focus();
} else {
return null;
}
})], null));
}));
/**
 * Sets the focus to `target`.
 */
solo.spa.focus.set_focus = (function solo$spa$focus$set_focus(target){
cljs.core.reset_BANG_.call(null,solo.spa.focus._BANG_focused_target,target);

var temp__4657__auto__ = target.call(null,cljs.core.deref.call(null,solo.spa.focus._BANG_focus_targets));
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
return n.focus();
} else {
return null;
}
});

//# sourceMappingURL=focus.js.map?rel=1534957231385
