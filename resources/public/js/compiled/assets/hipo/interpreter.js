// Compiled by ClojureScript 1.10.238 {}
goog.provide('hipo.interpreter');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('hipo.attribute');
goog.require('hipo.dom');
goog.require('hipo.hiccup');
goog.require('hipo.interceptor');
hipo.interpreter.set_attribute_BANG_ = (function hipo$interpreter$set_attribute_BANG_(el,ns,tag,sok,ov,nv,p__25323){
var map__25324 = p__25323;
var map__25324__$1 = ((((!((map__25324 == null)))?(((((map__25324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25324):map__25324);
var m = map__25324__$1;
var interceptors = cljs.core.get.call(null,map__25324__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(!((ov === nv))){
var temp__4655__auto__ = hipo.hiccup.listener_name__GT_event_name.call(null,cljs.core.name.call(null,sok));
if(cljs.core.truth_(temp__4655__auto__)){
var en = temp__4655__auto__;
if(!(((cljs.core.map_QMARK_.call(null,ov)) && (cljs.core.map_QMARK_.call(null,nv)) && ((new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ov) === new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nv)))))){
var b__25310__auto__ = ((function (en,temp__4655__auto__,map__25324,map__25324__$1,m,interceptors){
return (function (){
var hn = ["hipo_listener_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(en)].join('');
var temp__4655__auto___25326__$1 = (el[hn]);
if(cljs.core.truth_(temp__4655__auto___25326__$1)){
var l_25327 = temp__4655__auto___25326__$1;
el.removeEventListener(en,l_25327);
} else {
}

var temp__4657__auto__ = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(nv);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return nv;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var nv__$1 = temp__4657__auto__;
el.addEventListener(en,nv__$1);

return (el[hn] = nv__$1);
} else {
return null;
}
});})(en,temp__4655__auto__,map__25324,map__25324__$1,m,interceptors))
;
var v__25311__auto__ = interceptors;
if(((cljs.core.not.call(null,v__25311__auto__)) || (cljs.core.empty_QMARK_.call(null,v__25311__auto__)))){
return b__25310__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__25310__auto__,v__25311__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-handler","update-handler",1389859106):new cljs.core.Keyword(null,"remove-handler","remove-handler",389960218)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
} else {
return null;
}
} else {
var b__25310__auto__ = ((function (temp__4655__auto__,map__25324,map__25324__$1,m,interceptors){
return (function (){
return hipo.attribute.set_value_BANG_.call(null,el,m,ns,tag,sok,ov,nv);
});})(temp__4655__auto__,map__25324,map__25324__$1,m,interceptors))
;
var v__25311__auto__ = interceptors;
if(((cljs.core.not.call(null,v__25311__auto__)) || (cljs.core.empty_QMARK_.call(null,v__25311__auto__)))){
return b__25310__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__25310__auto__,v__25311__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530):new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
}
} else {
return null;
}
});
hipo.interpreter.append_children_BANG_ = (function hipo$interpreter$append_children_BANG_(el,v,m){
if(cljs.core.vector_QMARK_.call(null,v)){
} else {
throw (new Error("Assert failed: (vector? v)"));
}

var v__$1 = hipo.hiccup.flatten_children.call(null,v);
while(true){
if(cljs.core.empty_QMARK_.call(null,v__$1)){
return null;
} else {
var temp__4655__auto___25328 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4655__auto___25328)){
var h_25329 = temp__4655__auto___25328;
el.appendChild(hipo.interpreter.create_child.call(null,h_25329,m));
} else {
}

var G__25330 = cljs.core.rest.call(null,v__$1);
v__$1 = G__25330;
continue;
}
break;
}
});
hipo.interpreter.default_create_element = (function hipo$interpreter$default_create_element(ns,tag,attrs,m){
var el = hipo.dom.create_element.call(null,ns,tag);
var seq__25331_25341 = cljs.core.seq.call(null,attrs);
var chunk__25332_25342 = null;
var count__25333_25343 = (0);
var i__25334_25344 = (0);
while(true){
if((i__25334_25344 < count__25333_25343)){
var vec__25335_25345 = cljs.core._nth.call(null,chunk__25332_25342,i__25334_25344);
var sok_25346 = cljs.core.nth.call(null,vec__25335_25345,(0),null);
var v_25347 = cljs.core.nth.call(null,vec__25335_25345,(1),null);
if(cljs.core.truth_(v_25347)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_25346,null,v_25347,m);
} else {
}


var G__25348 = seq__25331_25341;
var G__25349 = chunk__25332_25342;
var G__25350 = count__25333_25343;
var G__25351 = (i__25334_25344 + (1));
seq__25331_25341 = G__25348;
chunk__25332_25342 = G__25349;
count__25333_25343 = G__25350;
i__25334_25344 = G__25351;
continue;
} else {
var temp__4657__auto___25352 = cljs.core.seq.call(null,seq__25331_25341);
if(temp__4657__auto___25352){
var seq__25331_25353__$1 = temp__4657__auto___25352;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25331_25353__$1)){
var c__4319__auto___25354 = cljs.core.chunk_first.call(null,seq__25331_25353__$1);
var G__25355 = cljs.core.chunk_rest.call(null,seq__25331_25353__$1);
var G__25356 = c__4319__auto___25354;
var G__25357 = cljs.core.count.call(null,c__4319__auto___25354);
var G__25358 = (0);
seq__25331_25341 = G__25355;
chunk__25332_25342 = G__25356;
count__25333_25343 = G__25357;
i__25334_25344 = G__25358;
continue;
} else {
var vec__25338_25359 = cljs.core.first.call(null,seq__25331_25353__$1);
var sok_25360 = cljs.core.nth.call(null,vec__25338_25359,(0),null);
var v_25361 = cljs.core.nth.call(null,vec__25338_25359,(1),null);
if(cljs.core.truth_(v_25361)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_25360,null,v_25361,m);
} else {
}


var G__25362 = cljs.core.next.call(null,seq__25331_25353__$1);
var G__25363 = null;
var G__25364 = (0);
var G__25365 = (0);
seq__25331_25341 = G__25362;
chunk__25332_25342 = G__25363;
count__25333_25343 = G__25364;
i__25334_25344 = G__25365;
continue;
}
} else {
}
}
break;
}

return el;
});
hipo.interpreter.create_element = (function hipo$interpreter$create_element(ns,tag,attrs,m){
var temp__4655__auto__ = new cljs.core.Keyword(null,"create-element-fn","create-element-fn",827380427).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,ns,tag,attrs,m);
} else {
return hipo.interpreter.default_create_element.call(null,ns,tag,attrs,m);
}
});
hipo.interpreter.create_vector = (function hipo$interpreter$create_vector(h,m){
if(cljs.core.vector_QMARK_.call(null,h)){
} else {
throw (new Error("Assert failed: (vector? h)"));
}

var key = hipo.hiccup.keyns.call(null,h);
var tag = hipo.hiccup.tag.call(null,h);
var attrs = hipo.hiccup.attributes.call(null,h);
var children = hipo.hiccup.children.call(null,h);
var el = hipo.interpreter.create_element.call(null,hipo.hiccup.key__GT_namespace.call(null,key,m),tag,attrs,m);
if(cljs.core.truth_(children)){
hipo.interpreter.append_children_BANG_.call(null,el,children,m);
} else {
}

return el;
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o,m){
if(cljs.core.truth_((function (){var or__3922__auto__ = hipo.hiccup.literal_QMARK_.call(null,o);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.vector_QMARK_.call(null,o);
}
})())){
} else {
throw (new Error("Assert failed: (or (hic/literal? o) (vector? o))"));
}

if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,o))){
return document.createTextNode(o);
} else {
return hipo.interpreter.create_vector.call(null,o,m);
}
});
hipo.interpreter.append_to_parent = (function hipo$interpreter$append_to_parent(el,o,m){
if(cljs.core.seq_QMARK_.call(null,o)){
return hipo.interpreter.append_children_BANG_.call(null,el,cljs.core.vec.call(null,o),m);
} else {
if(!((o == null))){
return el.appendChild(hipo.interpreter.create_child.call(null,o,m));
} else {
return null;
}
}
});
hipo.interpreter.create = (function hipo$interpreter$create(o,m){
if(cljs.core.seq_QMARK_.call(null,o)){
var f = document.createDocumentFragment();
hipo.interpreter.append_children_BANG_.call(null,f,cljs.core.vec.call(null,o),m);

return f;
} else {
if(!((o == null))){
return hipo.interpreter.create_child.call(null,o,m);
} else {
return null;
}
}
});
hipo.interpreter.reconciliate_attributes_BANG_ = (function hipo$interpreter$reconciliate_attributes_BANG_(el,ns,tag,om,nm,m){
var seq__25366_25382 = cljs.core.seq.call(null,nm);
var chunk__25368_25383 = null;
var count__25369_25384 = (0);
var i__25370_25385 = (0);
while(true){
if((i__25370_25385 < count__25369_25384)){
var vec__25372_25386 = cljs.core._nth.call(null,chunk__25368_25383,i__25370_25385);
var sok_25387 = cljs.core.nth.call(null,vec__25372_25386,(0),null);
var nv_25388 = cljs.core.nth.call(null,vec__25372_25386,(1),null);
var ov_25389 = cljs.core.get.call(null,om,sok_25387);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_25387,ov_25389,nv_25388,m);


var G__25390 = seq__25366_25382;
var G__25391 = chunk__25368_25383;
var G__25392 = count__25369_25384;
var G__25393 = (i__25370_25385 + (1));
seq__25366_25382 = G__25390;
chunk__25368_25383 = G__25391;
count__25369_25384 = G__25392;
i__25370_25385 = G__25393;
continue;
} else {
var temp__4657__auto___25394 = cljs.core.seq.call(null,seq__25366_25382);
if(temp__4657__auto___25394){
var seq__25366_25395__$1 = temp__4657__auto___25394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25366_25395__$1)){
var c__4319__auto___25396 = cljs.core.chunk_first.call(null,seq__25366_25395__$1);
var G__25397 = cljs.core.chunk_rest.call(null,seq__25366_25395__$1);
var G__25398 = c__4319__auto___25396;
var G__25399 = cljs.core.count.call(null,c__4319__auto___25396);
var G__25400 = (0);
seq__25366_25382 = G__25397;
chunk__25368_25383 = G__25398;
count__25369_25384 = G__25399;
i__25370_25385 = G__25400;
continue;
} else {
var vec__25375_25401 = cljs.core.first.call(null,seq__25366_25395__$1);
var sok_25402 = cljs.core.nth.call(null,vec__25375_25401,(0),null);
var nv_25403 = cljs.core.nth.call(null,vec__25375_25401,(1),null);
var ov_25404 = cljs.core.get.call(null,om,sok_25402);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_25402,ov_25404,nv_25403,m);


var G__25405 = cljs.core.next.call(null,seq__25366_25395__$1);
var G__25406 = null;
var G__25407 = (0);
var G__25408 = (0);
seq__25366_25382 = G__25405;
chunk__25368_25383 = G__25406;
count__25369_25384 = G__25407;
i__25370_25385 = G__25408;
continue;
}
} else {
}
}
break;
}

var seq__25378 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__25379 = null;
var count__25380 = (0);
var i__25381 = (0);
while(true){
if((i__25381 < count__25380)){
var sok = cljs.core._nth.call(null,chunk__25379,i__25381);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);


var G__25409 = seq__25378;
var G__25410 = chunk__25379;
var G__25411 = count__25380;
var G__25412 = (i__25381 + (1));
seq__25378 = G__25409;
chunk__25379 = G__25410;
count__25380 = G__25411;
i__25381 = G__25412;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25378);
if(temp__4657__auto__){
var seq__25378__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25378__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25378__$1);
var G__25413 = cljs.core.chunk_rest.call(null,seq__25378__$1);
var G__25414 = c__4319__auto__;
var G__25415 = cljs.core.count.call(null,c__4319__auto__);
var G__25416 = (0);
seq__25378 = G__25413;
chunk__25379 = G__25414;
count__25380 = G__25415;
i__25381 = G__25416;
continue;
} else {
var sok = cljs.core.first.call(null,seq__25378__$1);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);


var G__25417 = cljs.core.next.call(null,seq__25378__$1);
var G__25418 = null;
var G__25419 = (0);
var G__25420 = (0);
seq__25378 = G__25417;
chunk__25379 = G__25418;
count__25380 = G__25419;
i__25381 = G__25420;
continue;
}
} else {
return null;
}
}
break;
}
});
hipo.interpreter.child_key = (function hipo$interpreter$child_key(h){
return new cljs.core.Keyword("hipo","key","hipo/key",-1519246363).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,h));
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__25421(s__25422){
return (new cljs.core.LazySeq(null,(function (){
var s__25422__$1 = s__25422;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25422__$1);
if(temp__4657__auto__){
var s__25422__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25422__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__25422__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__25424 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__25423 = (0);
while(true){
if((i__25423 < size__4291__auto__)){
var ih = cljs.core._nth.call(null,c__4290__auto__,i__25423);
cljs.core.chunk_append.call(null,b__25424,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__25425 = (i__25423 + (1));
i__25423 = G__25425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25424),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__25421.call(null,cljs.core.chunk_rest.call(null,s__25422__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25424),null);
}
} else {
var ih = cljs.core.first.call(null,s__25422__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__25421.call(null,cljs.core.rest.call(null,s__25422__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.map_indexed.call(null,((function (iter__4292__auto__){
return (function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
});})(iter__4292__auto__))
,v));
})());
});
/**
 * Reconciliate a vector of children based on their associated key.
 */
hipo.interpreter.reconciliate_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_keyed_children_BANG_(el,och,nch,p__25426){
var map__25427 = p__25426;
var map__25427__$1 = ((((!((map__25427 == null)))?(((((map__25427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25427):map__25427);
var m = map__25427__$1;
var interceptors = cljs.core.get.call(null,map__25427__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var om = hipo.interpreter.keyed_children__GT_indexed_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__25429_25451 = cljs.core.seq.call(null,nm);
var chunk__25430_25452 = null;
var count__25431_25453 = (0);
var i__25432_25454 = (0);
while(true){
if((i__25432_25454 < count__25431_25453)){
var vec__25433_25455 = cljs.core._nth.call(null,chunk__25430_25452,i__25432_25454);
var i_25456 = cljs.core.nth.call(null,vec__25433_25455,(0),null);
var vec__25436_25457 = cljs.core.nth.call(null,vec__25433_25455,(1),null);
var ii_25458 = cljs.core.nth.call(null,vec__25436_25457,(0),null);
var h_25459 = cljs.core.nth.call(null,vec__25436_25457,(1),null);
var temp__4655__auto___25460 = cljs.core.get.call(null,om,i_25456);
if(cljs.core.truth_(temp__4655__auto___25460)){
var vec__25439_25461 = temp__4655__auto___25460;
var iii_25462 = cljs.core.nth.call(null,vec__25439_25461,(0),null);
var oh_25463 = cljs.core.nth.call(null,vec__25439_25461,(1),null);
var cel_25464 = cljs.core.nth.call(null,cs,iii_25462);
if((ii_25458 === iii_25462)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_25464,oh_25463,h_25459,m);
} else {
var b__25310__auto___25465 = ((function (seq__25429_25451,chunk__25430_25452,count__25431_25453,i__25432_25454,cel_25464,vec__25439_25461,iii_25462,oh_25463,temp__4655__auto___25460,vec__25433_25455,i_25456,vec__25436_25457,ii_25458,h_25459,om,nm,cs,map__25427,map__25427__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_25464);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_25463,h_25459,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_25458,ncel);
});})(seq__25429_25451,chunk__25430_25452,count__25431_25453,i__25432_25454,cel_25464,vec__25439_25461,iii_25462,oh_25463,temp__4655__auto___25460,vec__25433_25455,i_25456,vec__25436_25457,ii_25458,h_25459,om,nm,cs,map__25427,map__25427__$1,m,interceptors))
;
var v__25311__auto___25466 = interceptors;
if(((cljs.core.not.call(null,v__25311__auto___25466)) || (cljs.core.empty_QMARK_.call(null,v__25311__auto___25466)))){
b__25310__auto___25465.call(null);
} else {
hipo.interceptor.call.call(null,b__25310__auto___25465,v__25311__auto___25466,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_25459,new cljs.core.Keyword(null,"index","index",-1531685915),ii_25458], null));
}
}
} else {
var b__25310__auto___25467 = ((function (seq__25429_25451,chunk__25430_25452,count__25431_25453,i__25432_25454,temp__4655__auto___25460,vec__25433_25455,i_25456,vec__25436_25457,ii_25458,h_25459,om,nm,cs,map__25427,map__25427__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_25458,hipo.interpreter.create_child.call(null,h_25459,m));
});})(seq__25429_25451,chunk__25430_25452,count__25431_25453,i__25432_25454,temp__4655__auto___25460,vec__25433_25455,i_25456,vec__25436_25457,ii_25458,h_25459,om,nm,cs,map__25427,map__25427__$1,m,interceptors))
;
var v__25311__auto___25468 = interceptors;
if(((cljs.core.not.call(null,v__25311__auto___25468)) || (cljs.core.empty_QMARK_.call(null,v__25311__auto___25468)))){
b__25310__auto___25467.call(null);
} else {
hipo.interceptor.call.call(null,b__25310__auto___25467,v__25311__auto___25468,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_25459,new cljs.core.Keyword(null,"index","index",-1531685915),ii_25458], null));
}
}


var G__25469 = seq__25429_25451;
var G__25470 = chunk__25430_25452;
var G__25471 = count__25431_25453;
var G__25472 = (i__25432_25454 + (1));
seq__25429_25451 = G__25469;
chunk__25430_25452 = G__25470;
count__25431_25453 = G__25471;
i__25432_25454 = G__25472;
continue;
} else {
var temp__4657__auto___25473 = cljs.core.seq.call(null,seq__25429_25451);
if(temp__4657__auto___25473){
var seq__25429_25474__$1 = temp__4657__auto___25473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25429_25474__$1)){
var c__4319__auto___25475 = cljs.core.chunk_first.call(null,seq__25429_25474__$1);
var G__25476 = cljs.core.chunk_rest.call(null,seq__25429_25474__$1);
var G__25477 = c__4319__auto___25475;
var G__25478 = cljs.core.count.call(null,c__4319__auto___25475);
var G__25479 = (0);
seq__25429_25451 = G__25476;
chunk__25430_25452 = G__25477;
count__25431_25453 = G__25478;
i__25432_25454 = G__25479;
continue;
} else {
var vec__25442_25480 = cljs.core.first.call(null,seq__25429_25474__$1);
var i_25481 = cljs.core.nth.call(null,vec__25442_25480,(0),null);
var vec__25445_25482 = cljs.core.nth.call(null,vec__25442_25480,(1),null);
var ii_25483 = cljs.core.nth.call(null,vec__25445_25482,(0),null);
var h_25484 = cljs.core.nth.call(null,vec__25445_25482,(1),null);
var temp__4655__auto___25485 = cljs.core.get.call(null,om,i_25481);
if(cljs.core.truth_(temp__4655__auto___25485)){
var vec__25448_25486 = temp__4655__auto___25485;
var iii_25487 = cljs.core.nth.call(null,vec__25448_25486,(0),null);
var oh_25488 = cljs.core.nth.call(null,vec__25448_25486,(1),null);
var cel_25489 = cljs.core.nth.call(null,cs,iii_25487);
if((ii_25483 === iii_25487)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_25489,oh_25488,h_25484,m);
} else {
var b__25310__auto___25490 = ((function (seq__25429_25451,chunk__25430_25452,count__25431_25453,i__25432_25454,cel_25489,vec__25448_25486,iii_25487,oh_25488,temp__4655__auto___25485,vec__25442_25480,i_25481,vec__25445_25482,ii_25483,h_25484,seq__25429_25474__$1,temp__4657__auto___25473,om,nm,cs,map__25427,map__25427__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_25489);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_25488,h_25484,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_25483,ncel);
});})(seq__25429_25451,chunk__25430_25452,count__25431_25453,i__25432_25454,cel_25489,vec__25448_25486,iii_25487,oh_25488,temp__4655__auto___25485,vec__25442_25480,i_25481,vec__25445_25482,ii_25483,h_25484,seq__25429_25474__$1,temp__4657__auto___25473,om,nm,cs,map__25427,map__25427__$1,m,interceptors))
;
var v__25311__auto___25491 = interceptors;
if(((cljs.core.not.call(null,v__25311__auto___25491)) || (cljs.core.empty_QMARK_.call(null,v__25311__auto___25491)))){
b__25310__auto___25490.call(null);
} else {
hipo.interceptor.call.call(null,b__25310__auto___25490,v__25311__auto___25491,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_25484,new cljs.core.Keyword(null,"index","index",-1531685915),ii_25483], null));
}
}
} else {
var b__25310__auto___25492 = ((function (seq__25429_25451,chunk__25430_25452,count__25431_25453,i__25432_25454,temp__4655__auto___25485,vec__25442_25480,i_25481,vec__25445_25482,ii_25483,h_25484,seq__25429_25474__$1,temp__4657__auto___25473,om,nm,cs,map__25427,map__25427__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_25483,hipo.interpreter.create_child.call(null,h_25484,m));
});})(seq__25429_25451,chunk__25430_25452,count__25431_25453,i__25432_25454,temp__4655__auto___25485,vec__25442_25480,i_25481,vec__25445_25482,ii_25483,h_25484,seq__25429_25474__$1,temp__4657__auto___25473,om,nm,cs,map__25427,map__25427__$1,m,interceptors))
;
var v__25311__auto___25493 = interceptors;
if(((cljs.core.not.call(null,v__25311__auto___25493)) || (cljs.core.empty_QMARK_.call(null,v__25311__auto___25493)))){
b__25310__auto___25492.call(null);
} else {
hipo.interceptor.call.call(null,b__25310__auto___25492,v__25311__auto___25493,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_25484,new cljs.core.Keyword(null,"index","index",-1531685915),ii_25483], null));
}
}


var G__25494 = cljs.core.next.call(null,seq__25429_25474__$1);
var G__25495 = null;
var G__25496 = (0);
var G__25497 = (0);
seq__25429_25451 = G__25494;
chunk__25430_25452 = G__25495;
count__25431_25453 = G__25496;
i__25432_25454 = G__25497;
continue;
}
} else {
}
}
break;
}

var d = cljs.core.count.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
if((d > (0))){
var b__25310__auto__ = ((function (d,om,nm,cs,map__25427,map__25427__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(d,om,nm,cs,map__25427,map__25427__$1,m,interceptors))
;
var v__25311__auto__ = interceptors;
if(((cljs.core.not.call(null,v__25311__auto__)) || (cljs.core.empty_QMARK_.call(null,v__25311__auto__)))){
return b__25310__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__25310__auto__,v__25311__auto__,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
return null;
}
});
hipo.interpreter.reconciliate_non_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_non_keyed_children_BANG_(el,och,nch,p__25498){
var map__25499 = p__25498;
var map__25499__$1 = ((((!((map__25499 == null)))?(((((map__25499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25499):map__25499);
var m = map__25499__$1;
var interceptors = cljs.core.get.call(null,map__25499__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var oc = cljs.core.count.call(null,och);
var nc = cljs.core.count.call(null,nch);
var d = (oc - nc);
if((d > (0))){
var b__25310__auto___25501 = ((function (oc,nc,d,map__25499,map__25499__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(oc,nc,d,map__25499,map__25499__$1,m,interceptors))
;
var v__25311__auto___25502 = interceptors;
if(((cljs.core.not.call(null,v__25311__auto___25502)) || (cljs.core.empty_QMARK_.call(null,v__25311__auto___25502)))){
b__25310__auto___25501.call(null);
} else {
hipo.interceptor.call.call(null,b__25310__auto___25501,v__25311__auto___25502,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
}

var n__4376__auto___25503 = (function (){var x__4009__auto__ = oc;
var y__4010__auto__ = nc;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
var i_25504 = (0);
while(true){
if((i_25504 < n__4376__auto___25503)){
var ov_25505 = cljs.core.nth.call(null,och,i_25504);
var nv_25506 = cljs.core.nth.call(null,nch,i_25504);
if(!((((ov_25505 == null)) && ((nv_25506 == null))))){
if((ov_25505 == null)){
var b__25310__auto___25507 = ((function (i_25504,ov_25505,nv_25506,n__4376__auto___25503,oc,nc,d,map__25499,map__25499__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,i_25504,hipo.interpreter.create_child.call(null,nv_25506,m));
});})(i_25504,ov_25505,nv_25506,n__4376__auto___25503,oc,nc,d,map__25499,map__25499__$1,m,interceptors))
;
var v__25311__auto___25508 = interceptors;
if(((cljs.core.not.call(null,v__25311__auto___25508)) || (cljs.core.empty_QMARK_.call(null,v__25311__auto___25508)))){
b__25310__auto___25507.call(null);
} else {
hipo.interceptor.call.call(null,b__25310__auto___25507,v__25311__auto___25508,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nv_25506,new cljs.core.Keyword(null,"index","index",-1531685915),i_25504], null));
}
} else {
if((nv_25506 == null)){
var b__25310__auto___25509 = ((function (i_25504,ov_25505,nv_25506,n__4376__auto___25503,oc,nc,d,map__25499,map__25499__$1,m,interceptors){
return (function (){
return hipo.dom.remove_child_BANG_.call(null,el,i_25504);
});})(i_25504,ov_25505,nv_25506,n__4376__auto___25503,oc,nc,d,map__25499,map__25499__$1,m,interceptors))
;
var v__25311__auto___25510 = interceptors;
if(((cljs.core.not.call(null,v__25311__auto___25510)) || (cljs.core.empty_QMARK_.call(null,v__25311__auto___25510)))){
b__25310__auto___25509.call(null);
} else {
hipo.interceptor.call.call(null,b__25310__auto___25509,v__25311__auto___25510,new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"index","index",-1531685915),i_25504], null));
}
} else {
var temp__4655__auto___25511 = hipo.dom.child.call(null,el,i_25504);
if(cljs.core.truth_(temp__4655__auto___25511)){
var cel_25512 = temp__4655__auto___25511;
hipo.interpreter.reconciliate_BANG_.call(null,cel_25512,ov_25505,nv_25506,m);
} else {
}

}
}
} else {
}

var G__25513 = (i_25504 + (1));
i_25504 = G__25513;
continue;
} else {
}
break;
}

if((d < (0))){
if(((-1) === d)){
var temp__4655__auto__ = cljs.core.nth.call(null,nch,oc);
if(cljs.core.truth_(temp__4655__auto__)){
var h = temp__4655__auto__;
var b__25310__auto__ = ((function (h,temp__4655__auto__,oc,nc,d,map__25499,map__25499__$1,m,interceptors){
return (function (){
return el.appendChild(hipo.interpreter.create_child.call(null,h,m));
});})(h,temp__4655__auto__,oc,nc,d,map__25499,map__25499__$1,m,interceptors))
;
var v__25311__auto__ = interceptors;
if(((cljs.core.not.call(null,v__25311__auto__)) || (cljs.core.empty_QMARK_.call(null,v__25311__auto__)))){
return b__25310__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__25310__auto__,v__25311__auto__,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
}
} else {
return null;
}
} else {
var f = document.createDocumentFragment();
var cs = ((((0) === oc))?nch:cljs.core.subvec.call(null,nch,oc));
var b__25310__auto___25514 = ((function (f,cs,oc,nc,d,map__25499,map__25499__$1,m,interceptors){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs,m);
});})(f,cs,oc,nc,d,map__25499,map__25499__$1,m,interceptors))
;
var v__25311__auto___25515 = interceptors;
if(((cljs.core.not.call(null,v__25311__auto___25515)) || (cljs.core.empty_QMARK_.call(null,v__25311__auto___25515)))){
b__25310__auto___25514.call(null);
} else {
hipo.interceptor.call.call(null,b__25310__auto___25514,v__25311__auto___25515,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
}

return el.appendChild(f);
}
} else {
return null;
}
});
hipo.interpreter.keyed_children_QMARK_ = (function hipo$interpreter$keyed_children_QMARK_(v){
return !((hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,v,(0))) == null));
});
hipo.interpreter.reconciliate_children_BANG_ = (function hipo$interpreter$reconciliate_children_BANG_(el,och,nch,p__25516){
var map__25517 = p__25516;
var map__25517__$1 = ((((!((map__25517 == null)))?(((((map__25517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25517):map__25517);
var m = map__25517__$1;
var interceptors = cljs.core.get.call(null,map__25517__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.empty_QMARK_.call(null,nch)){
if(!(cljs.core.empty_QMARK_.call(null,och))){
var b__25310__auto__ = ((function (map__25517,map__25517__$1,m,interceptors){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(map__25517,map__25517__$1,m,interceptors))
;
var v__25311__auto__ = interceptors;
if(((cljs.core.not.call(null,v__25311__auto__)) || (cljs.core.empty_QMARK_.call(null,v__25311__auto__)))){
return b__25310__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__25310__auto__,v__25311__auto__,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
}
} else {
return null;
}
} else {
if(cljs.core.truth_(hipo.interpreter.keyed_children_QMARK_.call(null,nch))){
return hipo.interpreter.reconciliate_keyed_children_BANG_.call(null,el,och,nch,m);
} else {
return hipo.interpreter.reconciliate_non_keyed_children_BANG_.call(null,el,och,nch,m);
}
}
});
hipo.interpreter.reconciliate_vector_BANG_ = (function hipo$interpreter$reconciliate_vector_BANG_(el,oh,nh,p__25519){
var map__25520 = p__25519;
var map__25520__$1 = ((((!((map__25520 == null)))?(((((map__25520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25520):map__25520);
var m = map__25520__$1;
var interceptors = cljs.core.get.call(null,map__25520__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.vector_QMARK_.call(null,nh)){
} else {
throw (new Error("Assert failed: (vector? nh)"));
}

if(cljs.core.truth_((function (){var or__3922__auto__ = hipo.hiccup.literal_QMARK_.call(null,oh);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return !((hipo.hiccup.tag.call(null,nh) === hipo.hiccup.tag.call(null,oh)));
}
})())){
var nel = hipo.interpreter.create_child.call(null,nh,m);
var b__25310__auto__ = ((function (nel,map__25520,map__25520__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error(["Assert failed: ","Can't replace root element. If you want to change root element's type it must be encapsulated in a static element.","\n","(.-parentElement el)"].join('')));
}

return hipo.dom.replace_BANG_.call(null,el,nel);
});})(nel,map__25520,map__25520__$1,m,interceptors))
;
var v__25311__auto__ = interceptors;
if(((cljs.core.not.call(null,v__25311__auto__)) || (cljs.core.empty_QMARK_.call(null,v__25311__auto__)))){
return b__25310__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__25310__auto__,v__25311__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
var om = hipo.hiccup.attributes.call(null,oh);
var nm = hipo.hiccup.attributes.call(null,nh);
var och = hipo.hiccup.children.call(null,oh);
var nch = hipo.hiccup.children.call(null,nh);
var b__25310__auto___25522 = ((function (om,nm,och,nch,map__25520,map__25520__$1,m,interceptors){
return (function (){
return hipo.interpreter.reconciliate_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),m);
});})(om,nm,och,nch,map__25520,map__25520__$1,m,interceptors))
;
var v__25311__auto___25523 = interceptors;
if(((cljs.core.not.call(null,v__25311__auto___25523)) || (cljs.core.empty_QMARK_.call(null,v__25311__auto___25523)))){
b__25310__auto___25522.call(null);
} else {
hipo.interceptor.call.call(null,b__25310__auto___25522,v__25311__auto___25523,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),och,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nch], null));
}

return hipo.interpreter.reconciliate_attributes_BANG_.call(null,el,hipo.hiccup.keyns.call(null,nh),hipo.hiccup.tag.call(null,nh),om,nm,m);
}
});
hipo.interpreter.reconciliate_BANG_ = (function hipo$interpreter$reconciliate_BANG_(el,oh,nh,p__25524){
var map__25525 = p__25524;
var map__25525__$1 = ((((!((map__25525 == null)))?(((((map__25525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25525):map__25525);
var m = map__25525__$1;
var interceptors = cljs.core.get.call(null,map__25525__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.vector_QMARK_.call(null,nh);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return hipo.hiccup.literal_QMARK_.call(null,nh);
}
})())){
} else {
throw (new Error("Assert failed: (or (vector? nh) (hic/literal? nh))"));
}

if((((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

var b__25310__auto__ = ((function (map__25525,map__25525__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,nh))){
if(!((oh === nh))){
var b__25310__auto__ = ((function (map__25525,map__25525__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error(["Assert failed: ","Can't replace root element. If you want to change root element's type it must be encapsulated in a static element.","\n","(.-parentElement el)"].join('')));
}

return hipo.dom.replace_text_BANG_.call(null,el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nh)].join(''));
});})(map__25525,map__25525__$1,m,interceptors))
;
var v__25311__auto__ = interceptors;
if(((cljs.core.not.call(null,v__25311__auto__)) || (cljs.core.empty_QMARK_.call(null,v__25311__auto__)))){
return b__25310__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__25310__auto__,v__25311__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
return null;
}
} else {
return hipo.interpreter.reconciliate_vector_BANG_.call(null,el,oh,nh,m);
}
});})(map__25525,map__25525__$1,m,interceptors))
;
var v__25311__auto__ = interceptors;
if(((cljs.core.not.call(null,v__25311__auto__)) || (cljs.core.empty_QMARK_.call(null,v__25311__auto__)))){
return b__25310__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__25310__auto__,v__25311__auto__,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),oh,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nh], null));
}
});

//# sourceMappingURL=interpreter.js.map?rel=1530166185840
