// Compiled by ClojureScript 1.10.238 {}
goog.provide('hipo.attribute');
goog.require('cljs.core');
goog.require('hipo.hiccup');
hipo.attribute.style_handler = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),"style"], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__25195_SHARP_,p2__25196_SHARP_,p3__25197_SHARP_,p4__25194_SHARP_){
var seq__25198 = cljs.core.seq.call(null,p4__25194_SHARP_);
var chunk__25199 = null;
var count__25200 = (0);
var i__25201 = (0);
while(true){
if((i__25201 < count__25200)){
var vec__25202 = cljs.core._nth.call(null,chunk__25199,i__25201);
var k = cljs.core.nth.call(null,vec__25202,(0),null);
var v = cljs.core.nth.call(null,vec__25202,(1),null);
(p1__25195_SHARP_["style"][cljs.core.name.call(null,k)] = v);


var G__25208 = seq__25198;
var G__25209 = chunk__25199;
var G__25210 = count__25200;
var G__25211 = (i__25201 + (1));
seq__25198 = G__25208;
chunk__25199 = G__25209;
count__25200 = G__25210;
i__25201 = G__25211;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25198);
if(temp__4657__auto__){
var seq__25198__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25198__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25198__$1);
var G__25212 = cljs.core.chunk_rest.call(null,seq__25198__$1);
var G__25213 = c__4319__auto__;
var G__25214 = cljs.core.count.call(null,c__4319__auto__);
var G__25215 = (0);
seq__25198 = G__25212;
chunk__25199 = G__25213;
count__25200 = G__25214;
i__25201 = G__25215;
continue;
} else {
var vec__25205 = cljs.core.first.call(null,seq__25198__$1);
var k = cljs.core.nth.call(null,vec__25205,(0),null);
var v = cljs.core.nth.call(null,vec__25205,(1),null);
(p1__25195_SHARP_["style"][cljs.core.name.call(null,k)] = v);


var G__25216 = cljs.core.next.call(null,seq__25198__$1);
var G__25217 = null;
var G__25218 = (0);
var G__25219 = (0);
seq__25198 = G__25216;
chunk__25199 = G__25217;
count__25200 = G__25218;
i__25201 = G__25219;
continue;
}
} else {
return null;
}
}
break;
}
})], null);
hipo.attribute.property_name__GT_js_property_name = (function hipo$attribute$property_name__GT_js_property_name(n){
return n.replace("-","_");
});
hipo.attribute.set_property_value = (function hipo$attribute$set_property_value(el,k,v){
return (el[hipo.attribute.property_name__GT_js_property_name.call(null,cljs.core.name.call(null,k))] = v);
});
hipo.attribute.set_attribute_BANG_ = (function hipo$attribute$set_attribute_BANG_(el,k,v,m){
var temp__4655__auto__ = (((k instanceof cljs.core.Keyword))?hipo.hiccup.key__GT_namespace.call(null,cljs.core.namespace.call(null,k),m):null);
if(cljs.core.truth_(temp__4655__auto__)){
var nns = temp__4655__auto__;
return el.setAttributeNS(nns,cljs.core.name.call(null,k),v);
} else {
return el.setAttribute(cljs.core.name.call(null,k),v);
}
});
hipo.attribute.remove_attribute_BANG_ = (function hipo$attribute$remove_attribute_BANG_(el,k,m){
var temp__4655__auto__ = (((k instanceof cljs.core.Keyword))?hipo.hiccup.key__GT_namespace.call(null,cljs.core.namespace.call(null,k),m):null);
if(cljs.core.truth_(temp__4655__auto__)){
var nns = temp__4655__auto__;
return el.removeAttributeNS(nns,cljs.core.name.call(null,k));
} else {
return el.removeAttribute(cljs.core.name.call(null,k));
}
});
hipo.attribute.default_handler_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__25220_SHARP_,p2__25221_SHARP_,p3__25223_SHARP_,p4__25222_SHARP_){
return hipo.attribute.set_property_value.call(null,p1__25220_SHARP_,p2__25221_SHARP_,p4__25222_SHARP_);
})], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__25225_SHARP_,p2__25226_SHARP_,p3__25228_SHARP_,p4__25224_SHARP_,p5__25227_SHARP_){
if(cljs.core.truth_(p4__25224_SHARP_)){
return hipo.attribute.set_attribute_BANG_.call(null,p1__25225_SHARP_,p2__25226_SHARP_,p4__25224_SHARP_,p5__25227_SHARP_);
} else {
return hipo.attribute.remove_attribute_BANG_.call(null,p1__25225_SHARP_,p2__25226_SHARP_,p5__25227_SHARP_);
}
})], null)], null);
hipo.attribute.default_handlers = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),"svg",new cljs.core.Keyword(null,"attr","attr",-604132353),"class"], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"attr","attr",-604132353)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"input",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["value",null,"checked",null], null), null)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"input",new cljs.core.Keyword(null,"attr","attr",-604132353),"autofocus"], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__25230_SHARP_,p2__25231_SHARP_,p3__25232_SHARP_,p4__25229_SHARP_){
if(cljs.core.truth_(p4__25229_SHARP_)){
p1__25230_SHARP_.focus();

return p1__25230_SHARP_.setAttribute(p2__25231_SHARP_,p4__25229_SHARP_);
} else {
return null;
}
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"option",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["selected",null], null), null)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"select",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["value",null,"selectIndex",null], null), null)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"textarea",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["value",null], null), null)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332)], null)], null);
hipo.attribute.matches_QMARK_ = (function hipo$attribute$matches_QMARK_(expr,s){
if(cljs.core.truth_(expr)){
if(cljs.core.set_QMARK_.call(null,expr)){
return cljs.core.contains_QMARK_.call(null,expr,s);
} else {
return cljs.core._EQ_.call(null,s,expr);

}
} else {
return true;
}
});
hipo.attribute.target_matches_QMARK_ = (function hipo$attribute$target_matches_QMARK_(m,ns,tag,attr){
var and__3911__auto__ = hipo.attribute.matches_QMARK_.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m),ns);
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = hipo.attribute.matches_QMARK_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m),tag);
if(cljs.core.truth_(and__3911__auto____$1)){
return hipo.attribute.matches_QMARK_.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(m),attr);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});
hipo.attribute.handler = (function hipo$attribute$handler(m,ns,tag,attr){
var v = cljs.core.concat.call(null,new cljs.core.Keyword(null,"attribute-handlers","attribute-handlers",855454691).cljs$core$IFn$_invoke$arity$1(m),hipo.attribute.default_handlers);
var h = cljs.core.some.call(null,((function (v){
return (function (p1__25233_SHARP_){
var t = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(p1__25233_SHARP_);
if(cljs.core.truth_(hipo.attribute.target_matches_QMARK_.call(null,t,ns,tag,cljs.core.name.call(null,attr)))){
return p1__25233_SHARP_;
} else {
return null;
}
});})(v))
,v);
if(cljs.core.contains_QMARK_.call(null,h,new cljs.core.Keyword(null,"type","type",1174270348))){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(h).call(null,hipo.attribute.default_handler_fns);
} else {
return h;
}
});
hipo.attribute.default_set_value_BANG_ = (function hipo$attribute$default_set_value_BANG_(el,attr,ov,nv,m){
if(cljs.core.truth_((function (){var or__3922__auto__ = hipo.hiccup.literal_QMARK_.call(null,ov);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return hipo.hiccup.literal_QMARK_.call(null,nv);
}
})())){
if(cljs.core.truth_(nv)){
return hipo.attribute.set_attribute_BANG_.call(null,el,attr,nv,m);
} else {
return hipo.attribute.remove_attribute_BANG_.call(null,el,attr,m);
}
} else {
return (el[attr] = hipo.attribute.set_property_value.call(null,el,attr,nv));
}
});
hipo.attribute.set_value_BANG_ = (function hipo$attribute$set_value_BANG_(el,m,ns,tag,attr,ov,nv){
var h = hipo.attribute.handler.call(null,m,ns,tag,attr);
var f = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(h);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return hipo.attribute.default_set_value_BANG_;
}
})();
return f.call(null,el,attr,ov,nv,m);
});

//# sourceMappingURL=attribute.js.map?rel=1530042242270
