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
var _STAR_always_update_STAR_2089 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR_2089){
return (function (){
var _STAR_always_update_STAR_2090 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_2090;
}});})(_STAR_always_update_STAR_2089))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_2089;
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
var G__2092 = arguments.length;
switch (G__2092) {
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

var seq__2094_2098 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__2095_2099 = null;
var count__2096_2100 = (0);
var i__2097_2101 = (0);
while(true){
if((i__2097_2101 < count__2096_2100)){
var v_2102 = cljs.core._nth.call(null,chunk__2095_2099,i__2097_2101);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_2102);


var G__2103 = seq__2094_2098;
var G__2104 = chunk__2095_2099;
var G__2105 = count__2096_2100;
var G__2106 = (i__2097_2101 + (1));
seq__2094_2098 = G__2103;
chunk__2095_2099 = G__2104;
count__2096_2100 = G__2105;
i__2097_2101 = G__2106;
continue;
} else {
var temp__4657__auto___2107 = cljs.core.seq.call(null,seq__2094_2098);
if(temp__4657__auto___2107){
var seq__2094_2108__$1 = temp__4657__auto___2107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2094_2108__$1)){
var c__4319__auto___2109 = cljs.core.chunk_first.call(null,seq__2094_2108__$1);
var G__2110 = cljs.core.chunk_rest.call(null,seq__2094_2108__$1);
var G__2111 = c__4319__auto___2109;
var G__2112 = cljs.core.count.call(null,c__4319__auto___2109);
var G__2113 = (0);
seq__2094_2098 = G__2110;
chunk__2095_2099 = G__2111;
count__2096_2100 = G__2112;
i__2097_2101 = G__2113;
continue;
} else {
var v_2114 = cljs.core.first.call(null,seq__2094_2108__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_2114);


var G__2115 = cljs.core.next.call(null,seq__2094_2108__$1);
var G__2116 = null;
var G__2117 = (0);
var G__2118 = (0);
seq__2094_2098 = G__2115;
chunk__2095_2099 = G__2116;
count__2096_2100 = G__2117;
i__2097_2101 = G__2118;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1534920173096
