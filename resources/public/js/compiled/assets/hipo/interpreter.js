// Compiled by ClojureScript 1.10.238 {}
goog.provide('hipo.interpreter');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('hipo.attribute');
goog.require('hipo.dom');
goog.require('hipo.hiccup');
goog.require('hipo.interceptor');
hipo.interpreter.set_attribute_BANG_ = (function hipo$interpreter$set_attribute_BANG_(el,ns,tag,sok,ov,nv,p__5468){
var map__5469 = p__5468;
var map__5469__$1 = ((((!((map__5469 == null)))?(((((map__5469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5469):map__5469);
var m = map__5469__$1;
var interceptors = cljs.core.get.call(null,map__5469__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(!((ov === nv))){
var temp__4655__auto__ = hipo.hiccup.listener_name__GT_event_name.call(null,cljs.core.name.call(null,sok));
if(cljs.core.truth_(temp__4655__auto__)){
var en = temp__4655__auto__;
if(!(((cljs.core.map_QMARK_.call(null,ov)) && (cljs.core.map_QMARK_.call(null,nv)) && ((new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ov) === new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nv)))))){
var b__5455__auto__ = ((function (en,temp__4655__auto__,map__5469,map__5469__$1,m,interceptors){
return (function (){
var hn = ["hipo_listener_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(en)].join('');
var temp__4655__auto___5471__$1 = (el[hn]);
if(cljs.core.truth_(temp__4655__auto___5471__$1)){
var l_5472 = temp__4655__auto___5471__$1;
el.removeEventListener(en,l_5472);
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
});})(en,temp__4655__auto__,map__5469,map__5469__$1,m,interceptors))
;
var v__5456__auto__ = interceptors;
if(((cljs.core.not.call(null,v__5456__auto__)) || (cljs.core.empty_QMARK_.call(null,v__5456__auto__)))){
return b__5455__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__5455__auto__,v__5456__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-handler","update-handler",1389859106):new cljs.core.Keyword(null,"remove-handler","remove-handler",389960218)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
} else {
return null;
}
} else {
var b__5455__auto__ = ((function (temp__4655__auto__,map__5469,map__5469__$1,m,interceptors){
return (function (){
return hipo.attribute.set_value_BANG_.call(null,el,m,ns,tag,sok,ov,nv);
});})(temp__4655__auto__,map__5469,map__5469__$1,m,interceptors))
;
var v__5456__auto__ = interceptors;
if(((cljs.core.not.call(null,v__5456__auto__)) || (cljs.core.empty_QMARK_.call(null,v__5456__auto__)))){
return b__5455__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__5455__auto__,v__5456__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530):new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
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
var temp__4655__auto___5473 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4655__auto___5473)){
var h_5474 = temp__4655__auto___5473;
el.appendChild(hipo.interpreter.create_child.call(null,h_5474,m));
} else {
}

var G__5475 = cljs.core.rest.call(null,v__$1);
v__$1 = G__5475;
continue;
}
break;
}
});
hipo.interpreter.default_create_element = (function hipo$interpreter$default_create_element(ns,tag,attrs,m){
var el = hipo.dom.create_element.call(null,ns,tag);
var seq__5476_5486 = cljs.core.seq.call(null,attrs);
var chunk__5477_5487 = null;
var count__5478_5488 = (0);
var i__5479_5489 = (0);
while(true){
if((i__5479_5489 < count__5478_5488)){
var vec__5480_5490 = cljs.core._nth.call(null,chunk__5477_5487,i__5479_5489);
var sok_5491 = cljs.core.nth.call(null,vec__5480_5490,(0),null);
var v_5492 = cljs.core.nth.call(null,vec__5480_5490,(1),null);
if(cljs.core.truth_(v_5492)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_5491,null,v_5492,m);
} else {
}


var G__5493 = seq__5476_5486;
var G__5494 = chunk__5477_5487;
var G__5495 = count__5478_5488;
var G__5496 = (i__5479_5489 + (1));
seq__5476_5486 = G__5493;
chunk__5477_5487 = G__5494;
count__5478_5488 = G__5495;
i__5479_5489 = G__5496;
continue;
} else {
var temp__4657__auto___5497 = cljs.core.seq.call(null,seq__5476_5486);
if(temp__4657__auto___5497){
var seq__5476_5498__$1 = temp__4657__auto___5497;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5476_5498__$1)){
var c__4319__auto___5499 = cljs.core.chunk_first.call(null,seq__5476_5498__$1);
var G__5500 = cljs.core.chunk_rest.call(null,seq__5476_5498__$1);
var G__5501 = c__4319__auto___5499;
var G__5502 = cljs.core.count.call(null,c__4319__auto___5499);
var G__5503 = (0);
seq__5476_5486 = G__5500;
chunk__5477_5487 = G__5501;
count__5478_5488 = G__5502;
i__5479_5489 = G__5503;
continue;
} else {
var vec__5483_5504 = cljs.core.first.call(null,seq__5476_5498__$1);
var sok_5505 = cljs.core.nth.call(null,vec__5483_5504,(0),null);
var v_5506 = cljs.core.nth.call(null,vec__5483_5504,(1),null);
if(cljs.core.truth_(v_5506)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_5505,null,v_5506,m);
} else {
}


var G__5507 = cljs.core.next.call(null,seq__5476_5498__$1);
var G__5508 = null;
var G__5509 = (0);
var G__5510 = (0);
seq__5476_5486 = G__5507;
chunk__5477_5487 = G__5508;
count__5478_5488 = G__5509;
i__5479_5489 = G__5510;
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
var seq__5511_5527 = cljs.core.seq.call(null,nm);
var chunk__5513_5528 = null;
var count__5514_5529 = (0);
var i__5515_5530 = (0);
while(true){
if((i__5515_5530 < count__5514_5529)){
var vec__5517_5531 = cljs.core._nth.call(null,chunk__5513_5528,i__5515_5530);
var sok_5532 = cljs.core.nth.call(null,vec__5517_5531,(0),null);
var nv_5533 = cljs.core.nth.call(null,vec__5517_5531,(1),null);
var ov_5534 = cljs.core.get.call(null,om,sok_5532);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_5532,ov_5534,nv_5533,m);


var G__5535 = seq__5511_5527;
var G__5536 = chunk__5513_5528;
var G__5537 = count__5514_5529;
var G__5538 = (i__5515_5530 + (1));
seq__5511_5527 = G__5535;
chunk__5513_5528 = G__5536;
count__5514_5529 = G__5537;
i__5515_5530 = G__5538;
continue;
} else {
var temp__4657__auto___5539 = cljs.core.seq.call(null,seq__5511_5527);
if(temp__4657__auto___5539){
var seq__5511_5540__$1 = temp__4657__auto___5539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5511_5540__$1)){
var c__4319__auto___5541 = cljs.core.chunk_first.call(null,seq__5511_5540__$1);
var G__5542 = cljs.core.chunk_rest.call(null,seq__5511_5540__$1);
var G__5543 = c__4319__auto___5541;
var G__5544 = cljs.core.count.call(null,c__4319__auto___5541);
var G__5545 = (0);
seq__5511_5527 = G__5542;
chunk__5513_5528 = G__5543;
count__5514_5529 = G__5544;
i__5515_5530 = G__5545;
continue;
} else {
var vec__5520_5546 = cljs.core.first.call(null,seq__5511_5540__$1);
var sok_5547 = cljs.core.nth.call(null,vec__5520_5546,(0),null);
var nv_5548 = cljs.core.nth.call(null,vec__5520_5546,(1),null);
var ov_5549 = cljs.core.get.call(null,om,sok_5547);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_5547,ov_5549,nv_5548,m);


var G__5550 = cljs.core.next.call(null,seq__5511_5540__$1);
var G__5551 = null;
var G__5552 = (0);
var G__5553 = (0);
seq__5511_5527 = G__5550;
chunk__5513_5528 = G__5551;
count__5514_5529 = G__5552;
i__5515_5530 = G__5553;
continue;
}
} else {
}
}
break;
}

var seq__5523 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__5524 = null;
var count__5525 = (0);
var i__5526 = (0);
while(true){
if((i__5526 < count__5525)){
var sok = cljs.core._nth.call(null,chunk__5524,i__5526);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);


var G__5554 = seq__5523;
var G__5555 = chunk__5524;
var G__5556 = count__5525;
var G__5557 = (i__5526 + (1));
seq__5523 = G__5554;
chunk__5524 = G__5555;
count__5525 = G__5556;
i__5526 = G__5557;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__5523);
if(temp__4657__auto__){
var seq__5523__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5523__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__5523__$1);
var G__5558 = cljs.core.chunk_rest.call(null,seq__5523__$1);
var G__5559 = c__4319__auto__;
var G__5560 = cljs.core.count.call(null,c__4319__auto__);
var G__5561 = (0);
seq__5523 = G__5558;
chunk__5524 = G__5559;
count__5525 = G__5560;
i__5526 = G__5561;
continue;
} else {
var sok = cljs.core.first.call(null,seq__5523__$1);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);


var G__5562 = cljs.core.next.call(null,seq__5523__$1);
var G__5563 = null;
var G__5564 = (0);
var G__5565 = (0);
seq__5523 = G__5562;
chunk__5524 = G__5563;
count__5525 = G__5564;
i__5526 = G__5565;
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__5566(s__5567){
return (new cljs.core.LazySeq(null,(function (){
var s__5567__$1 = s__5567;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__5567__$1);
if(temp__4657__auto__){
var s__5567__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5567__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__5567__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__5569 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__5568 = (0);
while(true){
if((i__5568 < size__4291__auto__)){
var ih = cljs.core._nth.call(null,c__4290__auto__,i__5568);
cljs.core.chunk_append.call(null,b__5569,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__5570 = (i__5568 + (1));
i__5568 = G__5570;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5569),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__5566.call(null,cljs.core.chunk_rest.call(null,s__5567__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5569),null);
}
} else {
var ih = cljs.core.first.call(null,s__5567__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__5566.call(null,cljs.core.rest.call(null,s__5567__$2)));
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
hipo.interpreter.reconciliate_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_keyed_children_BANG_(el,och,nch,p__5571){
var map__5572 = p__5571;
var map__5572__$1 = ((((!((map__5572 == null)))?(((((map__5572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5572):map__5572);
var m = map__5572__$1;
var interceptors = cljs.core.get.call(null,map__5572__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var om = hipo.interpreter.keyed_children__GT_indexed_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__5574_5596 = cljs.core.seq.call(null,nm);
var chunk__5575_5597 = null;
var count__5576_5598 = (0);
var i__5577_5599 = (0);
while(true){
if((i__5577_5599 < count__5576_5598)){
var vec__5578_5600 = cljs.core._nth.call(null,chunk__5575_5597,i__5577_5599);
var i_5601 = cljs.core.nth.call(null,vec__5578_5600,(0),null);
var vec__5581_5602 = cljs.core.nth.call(null,vec__5578_5600,(1),null);
var ii_5603 = cljs.core.nth.call(null,vec__5581_5602,(0),null);
var h_5604 = cljs.core.nth.call(null,vec__5581_5602,(1),null);
var temp__4655__auto___5605 = cljs.core.get.call(null,om,i_5601);
if(cljs.core.truth_(temp__4655__auto___5605)){
var vec__5584_5606 = temp__4655__auto___5605;
var iii_5607 = cljs.core.nth.call(null,vec__5584_5606,(0),null);
var oh_5608 = cljs.core.nth.call(null,vec__5584_5606,(1),null);
var cel_5609 = cljs.core.nth.call(null,cs,iii_5607);
if((ii_5603 === iii_5607)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_5609,oh_5608,h_5604,m);
} else {
var b__5455__auto___5610 = ((function (seq__5574_5596,chunk__5575_5597,count__5576_5598,i__5577_5599,cel_5609,vec__5584_5606,iii_5607,oh_5608,temp__4655__auto___5605,vec__5578_5600,i_5601,vec__5581_5602,ii_5603,h_5604,om,nm,cs,map__5572,map__5572__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_5609);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_5608,h_5604,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_5603,ncel);
});})(seq__5574_5596,chunk__5575_5597,count__5576_5598,i__5577_5599,cel_5609,vec__5584_5606,iii_5607,oh_5608,temp__4655__auto___5605,vec__5578_5600,i_5601,vec__5581_5602,ii_5603,h_5604,om,nm,cs,map__5572,map__5572__$1,m,interceptors))
;
var v__5456__auto___5611 = interceptors;
if(((cljs.core.not.call(null,v__5456__auto___5611)) || (cljs.core.empty_QMARK_.call(null,v__5456__auto___5611)))){
b__5455__auto___5610.call(null);
} else {
hipo.interceptor.call.call(null,b__5455__auto___5610,v__5456__auto___5611,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_5604,new cljs.core.Keyword(null,"index","index",-1531685915),ii_5603], null));
}
}
} else {
var b__5455__auto___5612 = ((function (seq__5574_5596,chunk__5575_5597,count__5576_5598,i__5577_5599,temp__4655__auto___5605,vec__5578_5600,i_5601,vec__5581_5602,ii_5603,h_5604,om,nm,cs,map__5572,map__5572__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_5603,hipo.interpreter.create_child.call(null,h_5604,m));
});})(seq__5574_5596,chunk__5575_5597,count__5576_5598,i__5577_5599,temp__4655__auto___5605,vec__5578_5600,i_5601,vec__5581_5602,ii_5603,h_5604,om,nm,cs,map__5572,map__5572__$1,m,interceptors))
;
var v__5456__auto___5613 = interceptors;
if(((cljs.core.not.call(null,v__5456__auto___5613)) || (cljs.core.empty_QMARK_.call(null,v__5456__auto___5613)))){
b__5455__auto___5612.call(null);
} else {
hipo.interceptor.call.call(null,b__5455__auto___5612,v__5456__auto___5613,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_5604,new cljs.core.Keyword(null,"index","index",-1531685915),ii_5603], null));
}
}


var G__5614 = seq__5574_5596;
var G__5615 = chunk__5575_5597;
var G__5616 = count__5576_5598;
var G__5617 = (i__5577_5599 + (1));
seq__5574_5596 = G__5614;
chunk__5575_5597 = G__5615;
count__5576_5598 = G__5616;
i__5577_5599 = G__5617;
continue;
} else {
var temp__4657__auto___5618 = cljs.core.seq.call(null,seq__5574_5596);
if(temp__4657__auto___5618){
var seq__5574_5619__$1 = temp__4657__auto___5618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5574_5619__$1)){
var c__4319__auto___5620 = cljs.core.chunk_first.call(null,seq__5574_5619__$1);
var G__5621 = cljs.core.chunk_rest.call(null,seq__5574_5619__$1);
var G__5622 = c__4319__auto___5620;
var G__5623 = cljs.core.count.call(null,c__4319__auto___5620);
var G__5624 = (0);
seq__5574_5596 = G__5621;
chunk__5575_5597 = G__5622;
count__5576_5598 = G__5623;
i__5577_5599 = G__5624;
continue;
} else {
var vec__5587_5625 = cljs.core.first.call(null,seq__5574_5619__$1);
var i_5626 = cljs.core.nth.call(null,vec__5587_5625,(0),null);
var vec__5590_5627 = cljs.core.nth.call(null,vec__5587_5625,(1),null);
var ii_5628 = cljs.core.nth.call(null,vec__5590_5627,(0),null);
var h_5629 = cljs.core.nth.call(null,vec__5590_5627,(1),null);
var temp__4655__auto___5630 = cljs.core.get.call(null,om,i_5626);
if(cljs.core.truth_(temp__4655__auto___5630)){
var vec__5593_5631 = temp__4655__auto___5630;
var iii_5632 = cljs.core.nth.call(null,vec__5593_5631,(0),null);
var oh_5633 = cljs.core.nth.call(null,vec__5593_5631,(1),null);
var cel_5634 = cljs.core.nth.call(null,cs,iii_5632);
if((ii_5628 === iii_5632)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_5634,oh_5633,h_5629,m);
} else {
var b__5455__auto___5635 = ((function (seq__5574_5596,chunk__5575_5597,count__5576_5598,i__5577_5599,cel_5634,vec__5593_5631,iii_5632,oh_5633,temp__4655__auto___5630,vec__5587_5625,i_5626,vec__5590_5627,ii_5628,h_5629,seq__5574_5619__$1,temp__4657__auto___5618,om,nm,cs,map__5572,map__5572__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_5634);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_5633,h_5629,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_5628,ncel);
});})(seq__5574_5596,chunk__5575_5597,count__5576_5598,i__5577_5599,cel_5634,vec__5593_5631,iii_5632,oh_5633,temp__4655__auto___5630,vec__5587_5625,i_5626,vec__5590_5627,ii_5628,h_5629,seq__5574_5619__$1,temp__4657__auto___5618,om,nm,cs,map__5572,map__5572__$1,m,interceptors))
;
var v__5456__auto___5636 = interceptors;
if(((cljs.core.not.call(null,v__5456__auto___5636)) || (cljs.core.empty_QMARK_.call(null,v__5456__auto___5636)))){
b__5455__auto___5635.call(null);
} else {
hipo.interceptor.call.call(null,b__5455__auto___5635,v__5456__auto___5636,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_5629,new cljs.core.Keyword(null,"index","index",-1531685915),ii_5628], null));
}
}
} else {
var b__5455__auto___5637 = ((function (seq__5574_5596,chunk__5575_5597,count__5576_5598,i__5577_5599,temp__4655__auto___5630,vec__5587_5625,i_5626,vec__5590_5627,ii_5628,h_5629,seq__5574_5619__$1,temp__4657__auto___5618,om,nm,cs,map__5572,map__5572__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_5628,hipo.interpreter.create_child.call(null,h_5629,m));
});})(seq__5574_5596,chunk__5575_5597,count__5576_5598,i__5577_5599,temp__4655__auto___5630,vec__5587_5625,i_5626,vec__5590_5627,ii_5628,h_5629,seq__5574_5619__$1,temp__4657__auto___5618,om,nm,cs,map__5572,map__5572__$1,m,interceptors))
;
var v__5456__auto___5638 = interceptors;
if(((cljs.core.not.call(null,v__5456__auto___5638)) || (cljs.core.empty_QMARK_.call(null,v__5456__auto___5638)))){
b__5455__auto___5637.call(null);
} else {
hipo.interceptor.call.call(null,b__5455__auto___5637,v__5456__auto___5638,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_5629,new cljs.core.Keyword(null,"index","index",-1531685915),ii_5628], null));
}
}


var G__5639 = cljs.core.next.call(null,seq__5574_5619__$1);
var G__5640 = null;
var G__5641 = (0);
var G__5642 = (0);
seq__5574_5596 = G__5639;
chunk__5575_5597 = G__5640;
count__5576_5598 = G__5641;
i__5577_5599 = G__5642;
continue;
}
} else {
}
}
break;
}

var d = cljs.core.count.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
if((d > (0))){
var b__5455__auto__ = ((function (d,om,nm,cs,map__5572,map__5572__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(d,om,nm,cs,map__5572,map__5572__$1,m,interceptors))
;
var v__5456__auto__ = interceptors;
if(((cljs.core.not.call(null,v__5456__auto__)) || (cljs.core.empty_QMARK_.call(null,v__5456__auto__)))){
return b__5455__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__5455__auto__,v__5456__auto__,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
return null;
}
});
hipo.interpreter.reconciliate_non_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_non_keyed_children_BANG_(el,och,nch,p__5643){
var map__5644 = p__5643;
var map__5644__$1 = ((((!((map__5644 == null)))?(((((map__5644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5644):map__5644);
var m = map__5644__$1;
var interceptors = cljs.core.get.call(null,map__5644__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var oc = cljs.core.count.call(null,och);
var nc = cljs.core.count.call(null,nch);
var d = (oc - nc);
if((d > (0))){
var b__5455__auto___5646 = ((function (oc,nc,d,map__5644,map__5644__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(oc,nc,d,map__5644,map__5644__$1,m,interceptors))
;
var v__5456__auto___5647 = interceptors;
if(((cljs.core.not.call(null,v__5456__auto___5647)) || (cljs.core.empty_QMARK_.call(null,v__5456__auto___5647)))){
b__5455__auto___5646.call(null);
} else {
hipo.interceptor.call.call(null,b__5455__auto___5646,v__5456__auto___5647,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
}

var n__4376__auto___5648 = (function (){var x__4009__auto__ = oc;
var y__4010__auto__ = nc;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
var i_5649 = (0);
while(true){
if((i_5649 < n__4376__auto___5648)){
var ov_5650 = cljs.core.nth.call(null,och,i_5649);
var nv_5651 = cljs.core.nth.call(null,nch,i_5649);
if(!((((ov_5650 == null)) && ((nv_5651 == null))))){
if((ov_5650 == null)){
var b__5455__auto___5652 = ((function (i_5649,ov_5650,nv_5651,n__4376__auto___5648,oc,nc,d,map__5644,map__5644__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,i_5649,hipo.interpreter.create_child.call(null,nv_5651,m));
});})(i_5649,ov_5650,nv_5651,n__4376__auto___5648,oc,nc,d,map__5644,map__5644__$1,m,interceptors))
;
var v__5456__auto___5653 = interceptors;
if(((cljs.core.not.call(null,v__5456__auto___5653)) || (cljs.core.empty_QMARK_.call(null,v__5456__auto___5653)))){
b__5455__auto___5652.call(null);
} else {
hipo.interceptor.call.call(null,b__5455__auto___5652,v__5456__auto___5653,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nv_5651,new cljs.core.Keyword(null,"index","index",-1531685915),i_5649], null));
}
} else {
if((nv_5651 == null)){
var b__5455__auto___5654 = ((function (i_5649,ov_5650,nv_5651,n__4376__auto___5648,oc,nc,d,map__5644,map__5644__$1,m,interceptors){
return (function (){
return hipo.dom.remove_child_BANG_.call(null,el,i_5649);
});})(i_5649,ov_5650,nv_5651,n__4376__auto___5648,oc,nc,d,map__5644,map__5644__$1,m,interceptors))
;
var v__5456__auto___5655 = interceptors;
if(((cljs.core.not.call(null,v__5456__auto___5655)) || (cljs.core.empty_QMARK_.call(null,v__5456__auto___5655)))){
b__5455__auto___5654.call(null);
} else {
hipo.interceptor.call.call(null,b__5455__auto___5654,v__5456__auto___5655,new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"index","index",-1531685915),i_5649], null));
}
} else {
var temp__4655__auto___5656 = hipo.dom.child.call(null,el,i_5649);
if(cljs.core.truth_(temp__4655__auto___5656)){
var cel_5657 = temp__4655__auto___5656;
hipo.interpreter.reconciliate_BANG_.call(null,cel_5657,ov_5650,nv_5651,m);
} else {
}

}
}
} else {
}

var G__5658 = (i_5649 + (1));
i_5649 = G__5658;
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
var b__5455__auto__ = ((function (h,temp__4655__auto__,oc,nc,d,map__5644,map__5644__$1,m,interceptors){
return (function (){
return el.appendChild(hipo.interpreter.create_child.call(null,h,m));
});})(h,temp__4655__auto__,oc,nc,d,map__5644,map__5644__$1,m,interceptors))
;
var v__5456__auto__ = interceptors;
if(((cljs.core.not.call(null,v__5456__auto__)) || (cljs.core.empty_QMARK_.call(null,v__5456__auto__)))){
return b__5455__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__5455__auto__,v__5456__auto__,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
}
} else {
return null;
}
} else {
var f = document.createDocumentFragment();
var cs = ((((0) === oc))?nch:cljs.core.subvec.call(null,nch,oc));
var b__5455__auto___5659 = ((function (f,cs,oc,nc,d,map__5644,map__5644__$1,m,interceptors){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs,m);
});})(f,cs,oc,nc,d,map__5644,map__5644__$1,m,interceptors))
;
var v__5456__auto___5660 = interceptors;
if(((cljs.core.not.call(null,v__5456__auto___5660)) || (cljs.core.empty_QMARK_.call(null,v__5456__auto___5660)))){
b__5455__auto___5659.call(null);
} else {
hipo.interceptor.call.call(null,b__5455__auto___5659,v__5456__auto___5660,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
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
hipo.interpreter.reconciliate_children_BANG_ = (function hipo$interpreter$reconciliate_children_BANG_(el,och,nch,p__5661){
var map__5662 = p__5661;
var map__5662__$1 = ((((!((map__5662 == null)))?(((((map__5662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5662):map__5662);
var m = map__5662__$1;
var interceptors = cljs.core.get.call(null,map__5662__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.empty_QMARK_.call(null,nch)){
if(!(cljs.core.empty_QMARK_.call(null,och))){
var b__5455__auto__ = ((function (map__5662,map__5662__$1,m,interceptors){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(map__5662,map__5662__$1,m,interceptors))
;
var v__5456__auto__ = interceptors;
if(((cljs.core.not.call(null,v__5456__auto__)) || (cljs.core.empty_QMARK_.call(null,v__5456__auto__)))){
return b__5455__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__5455__auto__,v__5456__auto__,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
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
hipo.interpreter.reconciliate_vector_BANG_ = (function hipo$interpreter$reconciliate_vector_BANG_(el,oh,nh,p__5664){
var map__5665 = p__5664;
var map__5665__$1 = ((((!((map__5665 == null)))?(((((map__5665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5665):map__5665);
var m = map__5665__$1;
var interceptors = cljs.core.get.call(null,map__5665__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
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
var b__5455__auto__ = ((function (nel,map__5665,map__5665__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error(["Assert failed: ","Can't replace root element. If you want to change root element's type it must be encapsulated in a static element.","\n","(.-parentElement el)"].join('')));
}

return hipo.dom.replace_BANG_.call(null,el,nel);
});})(nel,map__5665,map__5665__$1,m,interceptors))
;
var v__5456__auto__ = interceptors;
if(((cljs.core.not.call(null,v__5456__auto__)) || (cljs.core.empty_QMARK_.call(null,v__5456__auto__)))){
return b__5455__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__5455__auto__,v__5456__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
var om = hipo.hiccup.attributes.call(null,oh);
var nm = hipo.hiccup.attributes.call(null,nh);
var och = hipo.hiccup.children.call(null,oh);
var nch = hipo.hiccup.children.call(null,nh);
var b__5455__auto___5667 = ((function (om,nm,och,nch,map__5665,map__5665__$1,m,interceptors){
return (function (){
return hipo.interpreter.reconciliate_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),m);
});})(om,nm,och,nch,map__5665,map__5665__$1,m,interceptors))
;
var v__5456__auto___5668 = interceptors;
if(((cljs.core.not.call(null,v__5456__auto___5668)) || (cljs.core.empty_QMARK_.call(null,v__5456__auto___5668)))){
b__5455__auto___5667.call(null);
} else {
hipo.interceptor.call.call(null,b__5455__auto___5667,v__5456__auto___5668,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),och,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nch], null));
}

return hipo.interpreter.reconciliate_attributes_BANG_.call(null,el,hipo.hiccup.keyns.call(null,nh),hipo.hiccup.tag.call(null,nh),om,nm,m);
}
});
hipo.interpreter.reconciliate_BANG_ = (function hipo$interpreter$reconciliate_BANG_(el,oh,nh,p__5669){
var map__5670 = p__5669;
var map__5670__$1 = ((((!((map__5670 == null)))?(((((map__5670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5670):map__5670);
var m = map__5670__$1;
var interceptors = cljs.core.get.call(null,map__5670__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
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

var b__5455__auto__ = ((function (map__5670,map__5670__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,nh))){
if(!((oh === nh))){
var b__5455__auto__ = ((function (map__5670,map__5670__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error(["Assert failed: ","Can't replace root element. If you want to change root element's type it must be encapsulated in a static element.","\n","(.-parentElement el)"].join('')));
}

return hipo.dom.replace_text_BANG_.call(null,el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nh)].join(''));
});})(map__5670,map__5670__$1,m,interceptors))
;
var v__5456__auto__ = interceptors;
if(((cljs.core.not.call(null,v__5456__auto__)) || (cljs.core.empty_QMARK_.call(null,v__5456__auto__)))){
return b__5455__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__5455__auto__,v__5456__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
return null;
}
} else {
return hipo.interpreter.reconciliate_vector_BANG_.call(null,el,oh,nh,m);
}
});})(map__5670,map__5670__$1,m,interceptors))
;
var v__5456__auto__ = interceptors;
if(((cljs.core.not.call(null,v__5456__auto__)) || (cljs.core.empty_QMARK_.call(null,v__5456__auto__)))){
return b__5455__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__5455__auto__,v__5456__auto__,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),oh,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nh], null));
}
});

//# sourceMappingURL=interpreter.js.map?rel=1530253986698
