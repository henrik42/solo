// Compiled by ClojureScript 1.10.238 {}
goog.provide('hipo.interpreter');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('hipo.attribute');
goog.require('hipo.dom');
goog.require('hipo.hiccup');
goog.require('hipo.interceptor');
hipo.interpreter.set_attribute_BANG_ = (function hipo$interpreter$set_attribute_BANG_(el,ns,tag,sok,ov,nv,p__6464){
var map__6465 = p__6464;
var map__6465__$1 = ((((!((map__6465 == null)))?(((((map__6465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6465):map__6465);
var m = map__6465__$1;
var interceptors = cljs.core.get.call(null,map__6465__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(!((ov === nv))){
var temp__4655__auto__ = hipo.hiccup.listener_name__GT_event_name.call(null,cljs.core.name.call(null,sok));
if(cljs.core.truth_(temp__4655__auto__)){
var en = temp__4655__auto__;
if(!(((cljs.core.map_QMARK_.call(null,ov)) && (cljs.core.map_QMARK_.call(null,nv)) && ((new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ov) === new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nv)))))){
var b__6451__auto__ = ((function (en,temp__4655__auto__,map__6465,map__6465__$1,m,interceptors){
return (function (){
var hn = ["hipo_listener_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(en)].join('');
var temp__4655__auto___6467__$1 = (el[hn]);
if(cljs.core.truth_(temp__4655__auto___6467__$1)){
var l_6468 = temp__4655__auto___6467__$1;
el.removeEventListener(en,l_6468);
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
});})(en,temp__4655__auto__,map__6465,map__6465__$1,m,interceptors))
;
var v__6452__auto__ = interceptors;
if(((cljs.core.not.call(null,v__6452__auto__)) || (cljs.core.empty_QMARK_.call(null,v__6452__auto__)))){
return b__6451__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__6451__auto__,v__6452__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-handler","update-handler",1389859106):new cljs.core.Keyword(null,"remove-handler","remove-handler",389960218)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
} else {
return null;
}
} else {
var b__6451__auto__ = ((function (temp__4655__auto__,map__6465,map__6465__$1,m,interceptors){
return (function (){
return hipo.attribute.set_value_BANG_.call(null,el,m,ns,tag,sok,ov,nv);
});})(temp__4655__auto__,map__6465,map__6465__$1,m,interceptors))
;
var v__6452__auto__ = interceptors;
if(((cljs.core.not.call(null,v__6452__auto__)) || (cljs.core.empty_QMARK_.call(null,v__6452__auto__)))){
return b__6451__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__6451__auto__,v__6452__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530):new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
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
var temp__4655__auto___6469 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4655__auto___6469)){
var h_6470 = temp__4655__auto___6469;
el.appendChild(hipo.interpreter.create_child.call(null,h_6470,m));
} else {
}

var G__6471 = cljs.core.rest.call(null,v__$1);
v__$1 = G__6471;
continue;
}
break;
}
});
hipo.interpreter.default_create_element = (function hipo$interpreter$default_create_element(ns,tag,attrs,m){
var el = hipo.dom.create_element.call(null,ns,tag);
var seq__6472_6482 = cljs.core.seq.call(null,attrs);
var chunk__6473_6483 = null;
var count__6474_6484 = (0);
var i__6475_6485 = (0);
while(true){
if((i__6475_6485 < count__6474_6484)){
var vec__6476_6486 = cljs.core._nth.call(null,chunk__6473_6483,i__6475_6485);
var sok_6487 = cljs.core.nth.call(null,vec__6476_6486,(0),null);
var v_6488 = cljs.core.nth.call(null,vec__6476_6486,(1),null);
if(cljs.core.truth_(v_6488)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_6487,null,v_6488,m);
} else {
}


var G__6489 = seq__6472_6482;
var G__6490 = chunk__6473_6483;
var G__6491 = count__6474_6484;
var G__6492 = (i__6475_6485 + (1));
seq__6472_6482 = G__6489;
chunk__6473_6483 = G__6490;
count__6474_6484 = G__6491;
i__6475_6485 = G__6492;
continue;
} else {
var temp__4657__auto___6493 = cljs.core.seq.call(null,seq__6472_6482);
if(temp__4657__auto___6493){
var seq__6472_6494__$1 = temp__4657__auto___6493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6472_6494__$1)){
var c__4319__auto___6495 = cljs.core.chunk_first.call(null,seq__6472_6494__$1);
var G__6496 = cljs.core.chunk_rest.call(null,seq__6472_6494__$1);
var G__6497 = c__4319__auto___6495;
var G__6498 = cljs.core.count.call(null,c__4319__auto___6495);
var G__6499 = (0);
seq__6472_6482 = G__6496;
chunk__6473_6483 = G__6497;
count__6474_6484 = G__6498;
i__6475_6485 = G__6499;
continue;
} else {
var vec__6479_6500 = cljs.core.first.call(null,seq__6472_6494__$1);
var sok_6501 = cljs.core.nth.call(null,vec__6479_6500,(0),null);
var v_6502 = cljs.core.nth.call(null,vec__6479_6500,(1),null);
if(cljs.core.truth_(v_6502)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_6501,null,v_6502,m);
} else {
}


var G__6503 = cljs.core.next.call(null,seq__6472_6494__$1);
var G__6504 = null;
var G__6505 = (0);
var G__6506 = (0);
seq__6472_6482 = G__6503;
chunk__6473_6483 = G__6504;
count__6474_6484 = G__6505;
i__6475_6485 = G__6506;
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
var seq__6507_6523 = cljs.core.seq.call(null,nm);
var chunk__6509_6524 = null;
var count__6510_6525 = (0);
var i__6511_6526 = (0);
while(true){
if((i__6511_6526 < count__6510_6525)){
var vec__6513_6527 = cljs.core._nth.call(null,chunk__6509_6524,i__6511_6526);
var sok_6528 = cljs.core.nth.call(null,vec__6513_6527,(0),null);
var nv_6529 = cljs.core.nth.call(null,vec__6513_6527,(1),null);
var ov_6530 = cljs.core.get.call(null,om,sok_6528);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_6528,ov_6530,nv_6529,m);


var G__6531 = seq__6507_6523;
var G__6532 = chunk__6509_6524;
var G__6533 = count__6510_6525;
var G__6534 = (i__6511_6526 + (1));
seq__6507_6523 = G__6531;
chunk__6509_6524 = G__6532;
count__6510_6525 = G__6533;
i__6511_6526 = G__6534;
continue;
} else {
var temp__4657__auto___6535 = cljs.core.seq.call(null,seq__6507_6523);
if(temp__4657__auto___6535){
var seq__6507_6536__$1 = temp__4657__auto___6535;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6507_6536__$1)){
var c__4319__auto___6537 = cljs.core.chunk_first.call(null,seq__6507_6536__$1);
var G__6538 = cljs.core.chunk_rest.call(null,seq__6507_6536__$1);
var G__6539 = c__4319__auto___6537;
var G__6540 = cljs.core.count.call(null,c__4319__auto___6537);
var G__6541 = (0);
seq__6507_6523 = G__6538;
chunk__6509_6524 = G__6539;
count__6510_6525 = G__6540;
i__6511_6526 = G__6541;
continue;
} else {
var vec__6516_6542 = cljs.core.first.call(null,seq__6507_6536__$1);
var sok_6543 = cljs.core.nth.call(null,vec__6516_6542,(0),null);
var nv_6544 = cljs.core.nth.call(null,vec__6516_6542,(1),null);
var ov_6545 = cljs.core.get.call(null,om,sok_6543);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_6543,ov_6545,nv_6544,m);


var G__6546 = cljs.core.next.call(null,seq__6507_6536__$1);
var G__6547 = null;
var G__6548 = (0);
var G__6549 = (0);
seq__6507_6523 = G__6546;
chunk__6509_6524 = G__6547;
count__6510_6525 = G__6548;
i__6511_6526 = G__6549;
continue;
}
} else {
}
}
break;
}

var seq__6519 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__6520 = null;
var count__6521 = (0);
var i__6522 = (0);
while(true){
if((i__6522 < count__6521)){
var sok = cljs.core._nth.call(null,chunk__6520,i__6522);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);


var G__6550 = seq__6519;
var G__6551 = chunk__6520;
var G__6552 = count__6521;
var G__6553 = (i__6522 + (1));
seq__6519 = G__6550;
chunk__6520 = G__6551;
count__6521 = G__6552;
i__6522 = G__6553;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__6519);
if(temp__4657__auto__){
var seq__6519__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6519__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__6519__$1);
var G__6554 = cljs.core.chunk_rest.call(null,seq__6519__$1);
var G__6555 = c__4319__auto__;
var G__6556 = cljs.core.count.call(null,c__4319__auto__);
var G__6557 = (0);
seq__6519 = G__6554;
chunk__6520 = G__6555;
count__6521 = G__6556;
i__6522 = G__6557;
continue;
} else {
var sok = cljs.core.first.call(null,seq__6519__$1);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);


var G__6558 = cljs.core.next.call(null,seq__6519__$1);
var G__6559 = null;
var G__6560 = (0);
var G__6561 = (0);
seq__6519 = G__6558;
chunk__6520 = G__6559;
count__6521 = G__6560;
i__6522 = G__6561;
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__6562(s__6563){
return (new cljs.core.LazySeq(null,(function (){
var s__6563__$1 = s__6563;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__6563__$1);
if(temp__4657__auto__){
var s__6563__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6563__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__6563__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__6565 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__6564 = (0);
while(true){
if((i__6564 < size__4291__auto__)){
var ih = cljs.core._nth.call(null,c__4290__auto__,i__6564);
cljs.core.chunk_append.call(null,b__6565,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__6566 = (i__6564 + (1));
i__6564 = G__6566;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6565),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__6562.call(null,cljs.core.chunk_rest.call(null,s__6563__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6565),null);
}
} else {
var ih = cljs.core.first.call(null,s__6563__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__6562.call(null,cljs.core.rest.call(null,s__6563__$2)));
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
hipo.interpreter.reconciliate_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_keyed_children_BANG_(el,och,nch,p__6567){
var map__6568 = p__6567;
var map__6568__$1 = ((((!((map__6568 == null)))?(((((map__6568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6568):map__6568);
var m = map__6568__$1;
var interceptors = cljs.core.get.call(null,map__6568__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var om = hipo.interpreter.keyed_children__GT_indexed_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__6570_6592 = cljs.core.seq.call(null,nm);
var chunk__6571_6593 = null;
var count__6572_6594 = (0);
var i__6573_6595 = (0);
while(true){
if((i__6573_6595 < count__6572_6594)){
var vec__6574_6596 = cljs.core._nth.call(null,chunk__6571_6593,i__6573_6595);
var i_6597 = cljs.core.nth.call(null,vec__6574_6596,(0),null);
var vec__6577_6598 = cljs.core.nth.call(null,vec__6574_6596,(1),null);
var ii_6599 = cljs.core.nth.call(null,vec__6577_6598,(0),null);
var h_6600 = cljs.core.nth.call(null,vec__6577_6598,(1),null);
var temp__4655__auto___6601 = cljs.core.get.call(null,om,i_6597);
if(cljs.core.truth_(temp__4655__auto___6601)){
var vec__6580_6602 = temp__4655__auto___6601;
var iii_6603 = cljs.core.nth.call(null,vec__6580_6602,(0),null);
var oh_6604 = cljs.core.nth.call(null,vec__6580_6602,(1),null);
var cel_6605 = cljs.core.nth.call(null,cs,iii_6603);
if((ii_6599 === iii_6603)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_6605,oh_6604,h_6600,m);
} else {
var b__6451__auto___6606 = ((function (seq__6570_6592,chunk__6571_6593,count__6572_6594,i__6573_6595,cel_6605,vec__6580_6602,iii_6603,oh_6604,temp__4655__auto___6601,vec__6574_6596,i_6597,vec__6577_6598,ii_6599,h_6600,om,nm,cs,map__6568,map__6568__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_6605);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_6604,h_6600,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_6599,ncel);
});})(seq__6570_6592,chunk__6571_6593,count__6572_6594,i__6573_6595,cel_6605,vec__6580_6602,iii_6603,oh_6604,temp__4655__auto___6601,vec__6574_6596,i_6597,vec__6577_6598,ii_6599,h_6600,om,nm,cs,map__6568,map__6568__$1,m,interceptors))
;
var v__6452__auto___6607 = interceptors;
if(((cljs.core.not.call(null,v__6452__auto___6607)) || (cljs.core.empty_QMARK_.call(null,v__6452__auto___6607)))){
b__6451__auto___6606.call(null);
} else {
hipo.interceptor.call.call(null,b__6451__auto___6606,v__6452__auto___6607,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_6600,new cljs.core.Keyword(null,"index","index",-1531685915),ii_6599], null));
}
}
} else {
var b__6451__auto___6608 = ((function (seq__6570_6592,chunk__6571_6593,count__6572_6594,i__6573_6595,temp__4655__auto___6601,vec__6574_6596,i_6597,vec__6577_6598,ii_6599,h_6600,om,nm,cs,map__6568,map__6568__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_6599,hipo.interpreter.create_child.call(null,h_6600,m));
});})(seq__6570_6592,chunk__6571_6593,count__6572_6594,i__6573_6595,temp__4655__auto___6601,vec__6574_6596,i_6597,vec__6577_6598,ii_6599,h_6600,om,nm,cs,map__6568,map__6568__$1,m,interceptors))
;
var v__6452__auto___6609 = interceptors;
if(((cljs.core.not.call(null,v__6452__auto___6609)) || (cljs.core.empty_QMARK_.call(null,v__6452__auto___6609)))){
b__6451__auto___6608.call(null);
} else {
hipo.interceptor.call.call(null,b__6451__auto___6608,v__6452__auto___6609,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_6600,new cljs.core.Keyword(null,"index","index",-1531685915),ii_6599], null));
}
}


var G__6610 = seq__6570_6592;
var G__6611 = chunk__6571_6593;
var G__6612 = count__6572_6594;
var G__6613 = (i__6573_6595 + (1));
seq__6570_6592 = G__6610;
chunk__6571_6593 = G__6611;
count__6572_6594 = G__6612;
i__6573_6595 = G__6613;
continue;
} else {
var temp__4657__auto___6614 = cljs.core.seq.call(null,seq__6570_6592);
if(temp__4657__auto___6614){
var seq__6570_6615__$1 = temp__4657__auto___6614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6570_6615__$1)){
var c__4319__auto___6616 = cljs.core.chunk_first.call(null,seq__6570_6615__$1);
var G__6617 = cljs.core.chunk_rest.call(null,seq__6570_6615__$1);
var G__6618 = c__4319__auto___6616;
var G__6619 = cljs.core.count.call(null,c__4319__auto___6616);
var G__6620 = (0);
seq__6570_6592 = G__6617;
chunk__6571_6593 = G__6618;
count__6572_6594 = G__6619;
i__6573_6595 = G__6620;
continue;
} else {
var vec__6583_6621 = cljs.core.first.call(null,seq__6570_6615__$1);
var i_6622 = cljs.core.nth.call(null,vec__6583_6621,(0),null);
var vec__6586_6623 = cljs.core.nth.call(null,vec__6583_6621,(1),null);
var ii_6624 = cljs.core.nth.call(null,vec__6586_6623,(0),null);
var h_6625 = cljs.core.nth.call(null,vec__6586_6623,(1),null);
var temp__4655__auto___6626 = cljs.core.get.call(null,om,i_6622);
if(cljs.core.truth_(temp__4655__auto___6626)){
var vec__6589_6627 = temp__4655__auto___6626;
var iii_6628 = cljs.core.nth.call(null,vec__6589_6627,(0),null);
var oh_6629 = cljs.core.nth.call(null,vec__6589_6627,(1),null);
var cel_6630 = cljs.core.nth.call(null,cs,iii_6628);
if((ii_6624 === iii_6628)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_6630,oh_6629,h_6625,m);
} else {
var b__6451__auto___6631 = ((function (seq__6570_6592,chunk__6571_6593,count__6572_6594,i__6573_6595,cel_6630,vec__6589_6627,iii_6628,oh_6629,temp__4655__auto___6626,vec__6583_6621,i_6622,vec__6586_6623,ii_6624,h_6625,seq__6570_6615__$1,temp__4657__auto___6614,om,nm,cs,map__6568,map__6568__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_6630);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_6629,h_6625,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_6624,ncel);
});})(seq__6570_6592,chunk__6571_6593,count__6572_6594,i__6573_6595,cel_6630,vec__6589_6627,iii_6628,oh_6629,temp__4655__auto___6626,vec__6583_6621,i_6622,vec__6586_6623,ii_6624,h_6625,seq__6570_6615__$1,temp__4657__auto___6614,om,nm,cs,map__6568,map__6568__$1,m,interceptors))
;
var v__6452__auto___6632 = interceptors;
if(((cljs.core.not.call(null,v__6452__auto___6632)) || (cljs.core.empty_QMARK_.call(null,v__6452__auto___6632)))){
b__6451__auto___6631.call(null);
} else {
hipo.interceptor.call.call(null,b__6451__auto___6631,v__6452__auto___6632,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_6625,new cljs.core.Keyword(null,"index","index",-1531685915),ii_6624], null));
}
}
} else {
var b__6451__auto___6633 = ((function (seq__6570_6592,chunk__6571_6593,count__6572_6594,i__6573_6595,temp__4655__auto___6626,vec__6583_6621,i_6622,vec__6586_6623,ii_6624,h_6625,seq__6570_6615__$1,temp__4657__auto___6614,om,nm,cs,map__6568,map__6568__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_6624,hipo.interpreter.create_child.call(null,h_6625,m));
});})(seq__6570_6592,chunk__6571_6593,count__6572_6594,i__6573_6595,temp__4655__auto___6626,vec__6583_6621,i_6622,vec__6586_6623,ii_6624,h_6625,seq__6570_6615__$1,temp__4657__auto___6614,om,nm,cs,map__6568,map__6568__$1,m,interceptors))
;
var v__6452__auto___6634 = interceptors;
if(((cljs.core.not.call(null,v__6452__auto___6634)) || (cljs.core.empty_QMARK_.call(null,v__6452__auto___6634)))){
b__6451__auto___6633.call(null);
} else {
hipo.interceptor.call.call(null,b__6451__auto___6633,v__6452__auto___6634,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_6625,new cljs.core.Keyword(null,"index","index",-1531685915),ii_6624], null));
}
}


var G__6635 = cljs.core.next.call(null,seq__6570_6615__$1);
var G__6636 = null;
var G__6637 = (0);
var G__6638 = (0);
seq__6570_6592 = G__6635;
chunk__6571_6593 = G__6636;
count__6572_6594 = G__6637;
i__6573_6595 = G__6638;
continue;
}
} else {
}
}
break;
}

var d = cljs.core.count.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
if((d > (0))){
var b__6451__auto__ = ((function (d,om,nm,cs,map__6568,map__6568__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(d,om,nm,cs,map__6568,map__6568__$1,m,interceptors))
;
var v__6452__auto__ = interceptors;
if(((cljs.core.not.call(null,v__6452__auto__)) || (cljs.core.empty_QMARK_.call(null,v__6452__auto__)))){
return b__6451__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__6451__auto__,v__6452__auto__,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
return null;
}
});
hipo.interpreter.reconciliate_non_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_non_keyed_children_BANG_(el,och,nch,p__6639){
var map__6640 = p__6639;
var map__6640__$1 = ((((!((map__6640 == null)))?(((((map__6640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6640):map__6640);
var m = map__6640__$1;
var interceptors = cljs.core.get.call(null,map__6640__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var oc = cljs.core.count.call(null,och);
var nc = cljs.core.count.call(null,nch);
var d = (oc - nc);
if((d > (0))){
var b__6451__auto___6642 = ((function (oc,nc,d,map__6640,map__6640__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(oc,nc,d,map__6640,map__6640__$1,m,interceptors))
;
var v__6452__auto___6643 = interceptors;
if(((cljs.core.not.call(null,v__6452__auto___6643)) || (cljs.core.empty_QMARK_.call(null,v__6452__auto___6643)))){
b__6451__auto___6642.call(null);
} else {
hipo.interceptor.call.call(null,b__6451__auto___6642,v__6452__auto___6643,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
}

var n__4376__auto___6644 = (function (){var x__4009__auto__ = oc;
var y__4010__auto__ = nc;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
var i_6645 = (0);
while(true){
if((i_6645 < n__4376__auto___6644)){
var ov_6646 = cljs.core.nth.call(null,och,i_6645);
var nv_6647 = cljs.core.nth.call(null,nch,i_6645);
if(!((((ov_6646 == null)) && ((nv_6647 == null))))){
if((ov_6646 == null)){
var b__6451__auto___6648 = ((function (i_6645,ov_6646,nv_6647,n__4376__auto___6644,oc,nc,d,map__6640,map__6640__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,i_6645,hipo.interpreter.create_child.call(null,nv_6647,m));
});})(i_6645,ov_6646,nv_6647,n__4376__auto___6644,oc,nc,d,map__6640,map__6640__$1,m,interceptors))
;
var v__6452__auto___6649 = interceptors;
if(((cljs.core.not.call(null,v__6452__auto___6649)) || (cljs.core.empty_QMARK_.call(null,v__6452__auto___6649)))){
b__6451__auto___6648.call(null);
} else {
hipo.interceptor.call.call(null,b__6451__auto___6648,v__6452__auto___6649,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nv_6647,new cljs.core.Keyword(null,"index","index",-1531685915),i_6645], null));
}
} else {
if((nv_6647 == null)){
var b__6451__auto___6650 = ((function (i_6645,ov_6646,nv_6647,n__4376__auto___6644,oc,nc,d,map__6640,map__6640__$1,m,interceptors){
return (function (){
return hipo.dom.remove_child_BANG_.call(null,el,i_6645);
});})(i_6645,ov_6646,nv_6647,n__4376__auto___6644,oc,nc,d,map__6640,map__6640__$1,m,interceptors))
;
var v__6452__auto___6651 = interceptors;
if(((cljs.core.not.call(null,v__6452__auto___6651)) || (cljs.core.empty_QMARK_.call(null,v__6452__auto___6651)))){
b__6451__auto___6650.call(null);
} else {
hipo.interceptor.call.call(null,b__6451__auto___6650,v__6452__auto___6651,new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"index","index",-1531685915),i_6645], null));
}
} else {
var temp__4655__auto___6652 = hipo.dom.child.call(null,el,i_6645);
if(cljs.core.truth_(temp__4655__auto___6652)){
var cel_6653 = temp__4655__auto___6652;
hipo.interpreter.reconciliate_BANG_.call(null,cel_6653,ov_6646,nv_6647,m);
} else {
}

}
}
} else {
}

var G__6654 = (i_6645 + (1));
i_6645 = G__6654;
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
var b__6451__auto__ = ((function (h,temp__4655__auto__,oc,nc,d,map__6640,map__6640__$1,m,interceptors){
return (function (){
return el.appendChild(hipo.interpreter.create_child.call(null,h,m));
});})(h,temp__4655__auto__,oc,nc,d,map__6640,map__6640__$1,m,interceptors))
;
var v__6452__auto__ = interceptors;
if(((cljs.core.not.call(null,v__6452__auto__)) || (cljs.core.empty_QMARK_.call(null,v__6452__auto__)))){
return b__6451__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__6451__auto__,v__6452__auto__,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
}
} else {
return null;
}
} else {
var f = document.createDocumentFragment();
var cs = ((((0) === oc))?nch:cljs.core.subvec.call(null,nch,oc));
var b__6451__auto___6655 = ((function (f,cs,oc,nc,d,map__6640,map__6640__$1,m,interceptors){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs,m);
});})(f,cs,oc,nc,d,map__6640,map__6640__$1,m,interceptors))
;
var v__6452__auto___6656 = interceptors;
if(((cljs.core.not.call(null,v__6452__auto___6656)) || (cljs.core.empty_QMARK_.call(null,v__6452__auto___6656)))){
b__6451__auto___6655.call(null);
} else {
hipo.interceptor.call.call(null,b__6451__auto___6655,v__6452__auto___6656,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
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
hipo.interpreter.reconciliate_children_BANG_ = (function hipo$interpreter$reconciliate_children_BANG_(el,och,nch,p__6657){
var map__6658 = p__6657;
var map__6658__$1 = ((((!((map__6658 == null)))?(((((map__6658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6658):map__6658);
var m = map__6658__$1;
var interceptors = cljs.core.get.call(null,map__6658__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.empty_QMARK_.call(null,nch)){
if(!(cljs.core.empty_QMARK_.call(null,och))){
var b__6451__auto__ = ((function (map__6658,map__6658__$1,m,interceptors){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(map__6658,map__6658__$1,m,interceptors))
;
var v__6452__auto__ = interceptors;
if(((cljs.core.not.call(null,v__6452__auto__)) || (cljs.core.empty_QMARK_.call(null,v__6452__auto__)))){
return b__6451__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__6451__auto__,v__6452__auto__,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
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
hipo.interpreter.reconciliate_vector_BANG_ = (function hipo$interpreter$reconciliate_vector_BANG_(el,oh,nh,p__6660){
var map__6661 = p__6660;
var map__6661__$1 = ((((!((map__6661 == null)))?(((((map__6661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6661):map__6661);
var m = map__6661__$1;
var interceptors = cljs.core.get.call(null,map__6661__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
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
var b__6451__auto__ = ((function (nel,map__6661,map__6661__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error(["Assert failed: ","Can't replace root element. If you want to change root element's type it must be encapsulated in a static element.","\n","(.-parentElement el)"].join('')));
}

return hipo.dom.replace_BANG_.call(null,el,nel);
});})(nel,map__6661,map__6661__$1,m,interceptors))
;
var v__6452__auto__ = interceptors;
if(((cljs.core.not.call(null,v__6452__auto__)) || (cljs.core.empty_QMARK_.call(null,v__6452__auto__)))){
return b__6451__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__6451__auto__,v__6452__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
var om = hipo.hiccup.attributes.call(null,oh);
var nm = hipo.hiccup.attributes.call(null,nh);
var och = hipo.hiccup.children.call(null,oh);
var nch = hipo.hiccup.children.call(null,nh);
var b__6451__auto___6663 = ((function (om,nm,och,nch,map__6661,map__6661__$1,m,interceptors){
return (function (){
return hipo.interpreter.reconciliate_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),m);
});})(om,nm,och,nch,map__6661,map__6661__$1,m,interceptors))
;
var v__6452__auto___6664 = interceptors;
if(((cljs.core.not.call(null,v__6452__auto___6664)) || (cljs.core.empty_QMARK_.call(null,v__6452__auto___6664)))){
b__6451__auto___6663.call(null);
} else {
hipo.interceptor.call.call(null,b__6451__auto___6663,v__6452__auto___6664,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),och,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nch], null));
}

return hipo.interpreter.reconciliate_attributes_BANG_.call(null,el,hipo.hiccup.keyns.call(null,nh),hipo.hiccup.tag.call(null,nh),om,nm,m);
}
});
hipo.interpreter.reconciliate_BANG_ = (function hipo$interpreter$reconciliate_BANG_(el,oh,nh,p__6665){
var map__6666 = p__6665;
var map__6666__$1 = ((((!((map__6666 == null)))?(((((map__6666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6666):map__6666);
var m = map__6666__$1;
var interceptors = cljs.core.get.call(null,map__6666__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
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

var b__6451__auto__ = ((function (map__6666,map__6666__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,nh))){
if(!((oh === nh))){
var b__6451__auto__ = ((function (map__6666,map__6666__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error(["Assert failed: ","Can't replace root element. If you want to change root element's type it must be encapsulated in a static element.","\n","(.-parentElement el)"].join('')));
}

return hipo.dom.replace_text_BANG_.call(null,el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nh)].join(''));
});})(map__6666,map__6666__$1,m,interceptors))
;
var v__6452__auto__ = interceptors;
if(((cljs.core.not.call(null,v__6452__auto__)) || (cljs.core.empty_QMARK_.call(null,v__6452__auto__)))){
return b__6451__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__6451__auto__,v__6452__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
return null;
}
} else {
return hipo.interpreter.reconciliate_vector_BANG_.call(null,el,oh,nh,m);
}
});})(map__6666,map__6666__$1,m,interceptors))
;
var v__6452__auto__ = interceptors;
if(((cljs.core.not.call(null,v__6452__auto__)) || (cljs.core.empty_QMARK_.call(null,v__6452__auto__)))){
return b__6451__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__6451__auto__,v__6452__auto__,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),oh,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nh], null));
}
});

//# sourceMappingURL=interpreter.js.map?rel=1529500738681
