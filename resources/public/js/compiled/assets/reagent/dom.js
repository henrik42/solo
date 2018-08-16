// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
reagent.dom.global$module$react_dom = goog.global.ReactDOM;
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_21289 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR_21289){
return (function (){
var _STAR_always_update_STAR_21290 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_21290;
}});})(_STAR_always_update_STAR_21289))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_21289;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__21292 = arguments.length;
switch (G__21292) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode.call(null,this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__21294_21298 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__21295_21299 = null;
var count__21296_21300 = (0);
var i__21297_21301 = (0);
while(true){
if((i__21297_21301 < count__21296_21300)){
var v_21302 = cljs.core._nth.call(null,chunk__21295_21299,i__21297_21301);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_21302);


var G__21303 = seq__21294_21298;
var G__21304 = chunk__21295_21299;
var G__21305 = count__21296_21300;
var G__21306 = (i__21297_21301 + (1));
seq__21294_21298 = G__21303;
chunk__21295_21299 = G__21304;
count__21296_21300 = G__21305;
i__21297_21301 = G__21306;
continue;
} else {
var temp__4657__auto___21307 = cljs.core.seq.call(null,seq__21294_21298);
if(temp__4657__auto___21307){
var seq__21294_21308__$1 = temp__4657__auto___21307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21294_21308__$1)){
var c__4319__auto___21309 = cljs.core.chunk_first.call(null,seq__21294_21308__$1);
var G__21310 = cljs.core.chunk_rest.call(null,seq__21294_21308__$1);
var G__21311 = c__4319__auto___21309;
var G__21312 = cljs.core.count.call(null,c__4319__auto___21309);
var G__21313 = (0);
seq__21294_21298 = G__21310;
chunk__21295_21299 = G__21311;
count__21296_21300 = G__21312;
i__21297_21301 = G__21313;
continue;
} else {
var v_21314 = cljs.core.first.call(null,seq__21294_21308__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_21314);


var G__21315 = cljs.core.next.call(null,seq__21294_21308__$1);
var G__21316 = null;
var G__21317 = (0);
var G__21318 = (0);
seq__21294_21298 = G__21315;
chunk__21295_21299 = G__21316;
count__21296_21300 = G__21317;
i__21297_21301 = G__21318;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1534453551426
