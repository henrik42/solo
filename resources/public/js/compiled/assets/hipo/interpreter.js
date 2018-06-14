// Compiled by ClojureScript 1.10.238 {}
goog.provide('hipo.interpreter');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('hipo.attribute');
goog.require('hipo.dom');
goog.require('hipo.hiccup');
goog.require('hipo.interceptor');
hipo.interpreter.set_attribute_BANG_ = (function hipo$interpreter$set_attribute_BANG_(el,ns,tag,sok,ov,nv,p__3059){
var map__3060 = p__3059;
var map__3060__$1 = ((((!((map__3060 == null)))?(((((map__3060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3060):map__3060);
var m = map__3060__$1;
var interceptors = cljs.core.get.call(null,map__3060__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(!((ov === nv))){
var temp__4655__auto__ = hipo.hiccup.listener_name__GT_event_name.call(null,cljs.core.name.call(null,sok));
if(cljs.core.truth_(temp__4655__auto__)){
var en = temp__4655__auto__;
if(!(((cljs.core.map_QMARK_.call(null,ov)) && (cljs.core.map_QMARK_.call(null,nv)) && ((new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ov) === new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nv)))))){
var b__3046__auto__ = ((function (en,temp__4655__auto__,map__3060,map__3060__$1,m,interceptors){
return (function (){
var hn = ["hipo_listener_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(en)].join('');
var temp__4655__auto___3062__$1 = (el[hn]);
if(cljs.core.truth_(temp__4655__auto___3062__$1)){
var l_3063 = temp__4655__auto___3062__$1;
el.removeEventListener(en,l_3063);
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
});})(en,temp__4655__auto__,map__3060,map__3060__$1,m,interceptors))
;
var v__3047__auto__ = interceptors;
if(((cljs.core.not.call(null,v__3047__auto__)) || (cljs.core.empty_QMARK_.call(null,v__3047__auto__)))){
return b__3046__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__3046__auto__,v__3047__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-handler","update-handler",1389859106):new cljs.core.Keyword(null,"remove-handler","remove-handler",389960218)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
} else {
return null;
}
} else {
var b__3046__auto__ = ((function (temp__4655__auto__,map__3060,map__3060__$1,m,interceptors){
return (function (){
return hipo.attribute.set_value_BANG_.call(null,el,m,ns,tag,sok,ov,nv);
});})(temp__4655__auto__,map__3060,map__3060__$1,m,interceptors))
;
var v__3047__auto__ = interceptors;
if(((cljs.core.not.call(null,v__3047__auto__)) || (cljs.core.empty_QMARK_.call(null,v__3047__auto__)))){
return b__3046__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__3046__auto__,v__3047__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530):new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
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
var temp__4655__auto___3064 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4655__auto___3064)){
var h_3065 = temp__4655__auto___3064;
el.appendChild(hipo.interpreter.create_child.call(null,h_3065,m));
} else {
}

var G__3066 = cljs.core.rest.call(null,v__$1);
v__$1 = G__3066;
continue;
}
break;
}
});
hipo.interpreter.default_create_element = (function hipo$interpreter$default_create_element(ns,tag,attrs,m){
var el = hipo.dom.create_element.call(null,ns,tag);
var seq__3067_3077 = cljs.core.seq.call(null,attrs);
var chunk__3068_3078 = null;
var count__3069_3079 = (0);
var i__3070_3080 = (0);
while(true){
if((i__3070_3080 < count__3069_3079)){
var vec__3071_3081 = cljs.core._nth.call(null,chunk__3068_3078,i__3070_3080);
var sok_3082 = cljs.core.nth.call(null,vec__3071_3081,(0),null);
var v_3083 = cljs.core.nth.call(null,vec__3071_3081,(1),null);
if(cljs.core.truth_(v_3083)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_3082,null,v_3083,m);
} else {
}


var G__3084 = seq__3067_3077;
var G__3085 = chunk__3068_3078;
var G__3086 = count__3069_3079;
var G__3087 = (i__3070_3080 + (1));
seq__3067_3077 = G__3084;
chunk__3068_3078 = G__3085;
count__3069_3079 = G__3086;
i__3070_3080 = G__3087;
continue;
} else {
var temp__4657__auto___3088 = cljs.core.seq.call(null,seq__3067_3077);
if(temp__4657__auto___3088){
var seq__3067_3089__$1 = temp__4657__auto___3088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3067_3089__$1)){
var c__4319__auto___3090 = cljs.core.chunk_first.call(null,seq__3067_3089__$1);
var G__3091 = cljs.core.chunk_rest.call(null,seq__3067_3089__$1);
var G__3092 = c__4319__auto___3090;
var G__3093 = cljs.core.count.call(null,c__4319__auto___3090);
var G__3094 = (0);
seq__3067_3077 = G__3091;
chunk__3068_3078 = G__3092;
count__3069_3079 = G__3093;
i__3070_3080 = G__3094;
continue;
} else {
var vec__3074_3095 = cljs.core.first.call(null,seq__3067_3089__$1);
var sok_3096 = cljs.core.nth.call(null,vec__3074_3095,(0),null);
var v_3097 = cljs.core.nth.call(null,vec__3074_3095,(1),null);
if(cljs.core.truth_(v_3097)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_3096,null,v_3097,m);
} else {
}


var G__3098 = cljs.core.next.call(null,seq__3067_3089__$1);
var G__3099 = null;
var G__3100 = (0);
var G__3101 = (0);
seq__3067_3077 = G__3098;
chunk__3068_3078 = G__3099;
count__3069_3079 = G__3100;
i__3070_3080 = G__3101;
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
var seq__3102_3118 = cljs.core.seq.call(null,nm);
var chunk__3104_3119 = null;
var count__3105_3120 = (0);
var i__3106_3121 = (0);
while(true){
if((i__3106_3121 < count__3105_3120)){
var vec__3108_3122 = cljs.core._nth.call(null,chunk__3104_3119,i__3106_3121);
var sok_3123 = cljs.core.nth.call(null,vec__3108_3122,(0),null);
var nv_3124 = cljs.core.nth.call(null,vec__3108_3122,(1),null);
var ov_3125 = cljs.core.get.call(null,om,sok_3123);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_3123,ov_3125,nv_3124,m);


var G__3126 = seq__3102_3118;
var G__3127 = chunk__3104_3119;
var G__3128 = count__3105_3120;
var G__3129 = (i__3106_3121 + (1));
seq__3102_3118 = G__3126;
chunk__3104_3119 = G__3127;
count__3105_3120 = G__3128;
i__3106_3121 = G__3129;
continue;
} else {
var temp__4657__auto___3130 = cljs.core.seq.call(null,seq__3102_3118);
if(temp__4657__auto___3130){
var seq__3102_3131__$1 = temp__4657__auto___3130;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3102_3131__$1)){
var c__4319__auto___3132 = cljs.core.chunk_first.call(null,seq__3102_3131__$1);
var G__3133 = cljs.core.chunk_rest.call(null,seq__3102_3131__$1);
var G__3134 = c__4319__auto___3132;
var G__3135 = cljs.core.count.call(null,c__4319__auto___3132);
var G__3136 = (0);
seq__3102_3118 = G__3133;
chunk__3104_3119 = G__3134;
count__3105_3120 = G__3135;
i__3106_3121 = G__3136;
continue;
} else {
var vec__3111_3137 = cljs.core.first.call(null,seq__3102_3131__$1);
var sok_3138 = cljs.core.nth.call(null,vec__3111_3137,(0),null);
var nv_3139 = cljs.core.nth.call(null,vec__3111_3137,(1),null);
var ov_3140 = cljs.core.get.call(null,om,sok_3138);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_3138,ov_3140,nv_3139,m);


var G__3141 = cljs.core.next.call(null,seq__3102_3131__$1);
var G__3142 = null;
var G__3143 = (0);
var G__3144 = (0);
seq__3102_3118 = G__3141;
chunk__3104_3119 = G__3142;
count__3105_3120 = G__3143;
i__3106_3121 = G__3144;
continue;
}
} else {
}
}
break;
}

var seq__3114 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__3115 = null;
var count__3116 = (0);
var i__3117 = (0);
while(true){
if((i__3117 < count__3116)){
var sok = cljs.core._nth.call(null,chunk__3115,i__3117);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);


var G__3145 = seq__3114;
var G__3146 = chunk__3115;
var G__3147 = count__3116;
var G__3148 = (i__3117 + (1));
seq__3114 = G__3145;
chunk__3115 = G__3146;
count__3116 = G__3147;
i__3117 = G__3148;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__3114);
if(temp__4657__auto__){
var seq__3114__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3114__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__3114__$1);
var G__3149 = cljs.core.chunk_rest.call(null,seq__3114__$1);
var G__3150 = c__4319__auto__;
var G__3151 = cljs.core.count.call(null,c__4319__auto__);
var G__3152 = (0);
seq__3114 = G__3149;
chunk__3115 = G__3150;
count__3116 = G__3151;
i__3117 = G__3152;
continue;
} else {
var sok = cljs.core.first.call(null,seq__3114__$1);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);


var G__3153 = cljs.core.next.call(null,seq__3114__$1);
var G__3154 = null;
var G__3155 = (0);
var G__3156 = (0);
seq__3114 = G__3153;
chunk__3115 = G__3154;
count__3116 = G__3155;
i__3117 = G__3156;
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__3157(s__3158){
return (new cljs.core.LazySeq(null,(function (){
var s__3158__$1 = s__3158;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__3158__$1);
if(temp__4657__auto__){
var s__3158__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3158__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__3158__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__3160 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__3159 = (0);
while(true){
if((i__3159 < size__4291__auto__)){
var ih = cljs.core._nth.call(null,c__4290__auto__,i__3159);
cljs.core.chunk_append.call(null,b__3160,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__3161 = (i__3159 + (1));
i__3159 = G__3161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3160),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__3157.call(null,cljs.core.chunk_rest.call(null,s__3158__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3160),null);
}
} else {
var ih = cljs.core.first.call(null,s__3158__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__3157.call(null,cljs.core.rest.call(null,s__3158__$2)));
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
hipo.interpreter.reconciliate_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_keyed_children_BANG_(el,och,nch,p__3162){
var map__3163 = p__3162;
var map__3163__$1 = ((((!((map__3163 == null)))?(((((map__3163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3163):map__3163);
var m = map__3163__$1;
var interceptors = cljs.core.get.call(null,map__3163__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var om = hipo.interpreter.keyed_children__GT_indexed_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__3165_3187 = cljs.core.seq.call(null,nm);
var chunk__3166_3188 = null;
var count__3167_3189 = (0);
var i__3168_3190 = (0);
while(true){
if((i__3168_3190 < count__3167_3189)){
var vec__3169_3191 = cljs.core._nth.call(null,chunk__3166_3188,i__3168_3190);
var i_3192 = cljs.core.nth.call(null,vec__3169_3191,(0),null);
var vec__3172_3193 = cljs.core.nth.call(null,vec__3169_3191,(1),null);
var ii_3194 = cljs.core.nth.call(null,vec__3172_3193,(0),null);
var h_3195 = cljs.core.nth.call(null,vec__3172_3193,(1),null);
var temp__4655__auto___3196 = cljs.core.get.call(null,om,i_3192);
if(cljs.core.truth_(temp__4655__auto___3196)){
var vec__3175_3197 = temp__4655__auto___3196;
var iii_3198 = cljs.core.nth.call(null,vec__3175_3197,(0),null);
var oh_3199 = cljs.core.nth.call(null,vec__3175_3197,(1),null);
var cel_3200 = cljs.core.nth.call(null,cs,iii_3198);
if((ii_3194 === iii_3198)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_3200,oh_3199,h_3195,m);
} else {
var b__3046__auto___3201 = ((function (seq__3165_3187,chunk__3166_3188,count__3167_3189,i__3168_3190,cel_3200,vec__3175_3197,iii_3198,oh_3199,temp__4655__auto___3196,vec__3169_3191,i_3192,vec__3172_3193,ii_3194,h_3195,om,nm,cs,map__3163,map__3163__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_3200);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_3199,h_3195,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_3194,ncel);
});})(seq__3165_3187,chunk__3166_3188,count__3167_3189,i__3168_3190,cel_3200,vec__3175_3197,iii_3198,oh_3199,temp__4655__auto___3196,vec__3169_3191,i_3192,vec__3172_3193,ii_3194,h_3195,om,nm,cs,map__3163,map__3163__$1,m,interceptors))
;
var v__3047__auto___3202 = interceptors;
if(((cljs.core.not.call(null,v__3047__auto___3202)) || (cljs.core.empty_QMARK_.call(null,v__3047__auto___3202)))){
b__3046__auto___3201.call(null);
} else {
hipo.interceptor.call.call(null,b__3046__auto___3201,v__3047__auto___3202,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_3195,new cljs.core.Keyword(null,"index","index",-1531685915),ii_3194], null));
}
}
} else {
var b__3046__auto___3203 = ((function (seq__3165_3187,chunk__3166_3188,count__3167_3189,i__3168_3190,temp__4655__auto___3196,vec__3169_3191,i_3192,vec__3172_3193,ii_3194,h_3195,om,nm,cs,map__3163,map__3163__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_3194,hipo.interpreter.create_child.call(null,h_3195,m));
});})(seq__3165_3187,chunk__3166_3188,count__3167_3189,i__3168_3190,temp__4655__auto___3196,vec__3169_3191,i_3192,vec__3172_3193,ii_3194,h_3195,om,nm,cs,map__3163,map__3163__$1,m,interceptors))
;
var v__3047__auto___3204 = interceptors;
if(((cljs.core.not.call(null,v__3047__auto___3204)) || (cljs.core.empty_QMARK_.call(null,v__3047__auto___3204)))){
b__3046__auto___3203.call(null);
} else {
hipo.interceptor.call.call(null,b__3046__auto___3203,v__3047__auto___3204,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_3195,new cljs.core.Keyword(null,"index","index",-1531685915),ii_3194], null));
}
}


var G__3205 = seq__3165_3187;
var G__3206 = chunk__3166_3188;
var G__3207 = count__3167_3189;
var G__3208 = (i__3168_3190 + (1));
seq__3165_3187 = G__3205;
chunk__3166_3188 = G__3206;
count__3167_3189 = G__3207;
i__3168_3190 = G__3208;
continue;
} else {
var temp__4657__auto___3209 = cljs.core.seq.call(null,seq__3165_3187);
if(temp__4657__auto___3209){
var seq__3165_3210__$1 = temp__4657__auto___3209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3165_3210__$1)){
var c__4319__auto___3211 = cljs.core.chunk_first.call(null,seq__3165_3210__$1);
var G__3212 = cljs.core.chunk_rest.call(null,seq__3165_3210__$1);
var G__3213 = c__4319__auto___3211;
var G__3214 = cljs.core.count.call(null,c__4319__auto___3211);
var G__3215 = (0);
seq__3165_3187 = G__3212;
chunk__3166_3188 = G__3213;
count__3167_3189 = G__3214;
i__3168_3190 = G__3215;
continue;
} else {
var vec__3178_3216 = cljs.core.first.call(null,seq__3165_3210__$1);
var i_3217 = cljs.core.nth.call(null,vec__3178_3216,(0),null);
var vec__3181_3218 = cljs.core.nth.call(null,vec__3178_3216,(1),null);
var ii_3219 = cljs.core.nth.call(null,vec__3181_3218,(0),null);
var h_3220 = cljs.core.nth.call(null,vec__3181_3218,(1),null);
var temp__4655__auto___3221 = cljs.core.get.call(null,om,i_3217);
if(cljs.core.truth_(temp__4655__auto___3221)){
var vec__3184_3222 = temp__4655__auto___3221;
var iii_3223 = cljs.core.nth.call(null,vec__3184_3222,(0),null);
var oh_3224 = cljs.core.nth.call(null,vec__3184_3222,(1),null);
var cel_3225 = cljs.core.nth.call(null,cs,iii_3223);
if((ii_3219 === iii_3223)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_3225,oh_3224,h_3220,m);
} else {
var b__3046__auto___3226 = ((function (seq__3165_3187,chunk__3166_3188,count__3167_3189,i__3168_3190,cel_3225,vec__3184_3222,iii_3223,oh_3224,temp__4655__auto___3221,vec__3178_3216,i_3217,vec__3181_3218,ii_3219,h_3220,seq__3165_3210__$1,temp__4657__auto___3209,om,nm,cs,map__3163,map__3163__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_3225);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_3224,h_3220,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_3219,ncel);
});})(seq__3165_3187,chunk__3166_3188,count__3167_3189,i__3168_3190,cel_3225,vec__3184_3222,iii_3223,oh_3224,temp__4655__auto___3221,vec__3178_3216,i_3217,vec__3181_3218,ii_3219,h_3220,seq__3165_3210__$1,temp__4657__auto___3209,om,nm,cs,map__3163,map__3163__$1,m,interceptors))
;
var v__3047__auto___3227 = interceptors;
if(((cljs.core.not.call(null,v__3047__auto___3227)) || (cljs.core.empty_QMARK_.call(null,v__3047__auto___3227)))){
b__3046__auto___3226.call(null);
} else {
hipo.interceptor.call.call(null,b__3046__auto___3226,v__3047__auto___3227,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_3220,new cljs.core.Keyword(null,"index","index",-1531685915),ii_3219], null));
}
}
} else {
var b__3046__auto___3228 = ((function (seq__3165_3187,chunk__3166_3188,count__3167_3189,i__3168_3190,temp__4655__auto___3221,vec__3178_3216,i_3217,vec__3181_3218,ii_3219,h_3220,seq__3165_3210__$1,temp__4657__auto___3209,om,nm,cs,map__3163,map__3163__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_3219,hipo.interpreter.create_child.call(null,h_3220,m));
});})(seq__3165_3187,chunk__3166_3188,count__3167_3189,i__3168_3190,temp__4655__auto___3221,vec__3178_3216,i_3217,vec__3181_3218,ii_3219,h_3220,seq__3165_3210__$1,temp__4657__auto___3209,om,nm,cs,map__3163,map__3163__$1,m,interceptors))
;
var v__3047__auto___3229 = interceptors;
if(((cljs.core.not.call(null,v__3047__auto___3229)) || (cljs.core.empty_QMARK_.call(null,v__3047__auto___3229)))){
b__3046__auto___3228.call(null);
} else {
hipo.interceptor.call.call(null,b__3046__auto___3228,v__3047__auto___3229,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_3220,new cljs.core.Keyword(null,"index","index",-1531685915),ii_3219], null));
}
}


var G__3230 = cljs.core.next.call(null,seq__3165_3210__$1);
var G__3231 = null;
var G__3232 = (0);
var G__3233 = (0);
seq__3165_3187 = G__3230;
chunk__3166_3188 = G__3231;
count__3167_3189 = G__3232;
i__3168_3190 = G__3233;
continue;
}
} else {
}
}
break;
}

var d = cljs.core.count.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
if((d > (0))){
var b__3046__auto__ = ((function (d,om,nm,cs,map__3163,map__3163__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(d,om,nm,cs,map__3163,map__3163__$1,m,interceptors))
;
var v__3047__auto__ = interceptors;
if(((cljs.core.not.call(null,v__3047__auto__)) || (cljs.core.empty_QMARK_.call(null,v__3047__auto__)))){
return b__3046__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__3046__auto__,v__3047__auto__,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
return null;
}
});
hipo.interpreter.reconciliate_non_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_non_keyed_children_BANG_(el,och,nch,p__3234){
var map__3235 = p__3234;
var map__3235__$1 = ((((!((map__3235 == null)))?(((((map__3235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3235):map__3235);
var m = map__3235__$1;
var interceptors = cljs.core.get.call(null,map__3235__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var oc = cljs.core.count.call(null,och);
var nc = cljs.core.count.call(null,nch);
var d = (oc - nc);
if((d > (0))){
var b__3046__auto___3237 = ((function (oc,nc,d,map__3235,map__3235__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(oc,nc,d,map__3235,map__3235__$1,m,interceptors))
;
var v__3047__auto___3238 = interceptors;
if(((cljs.core.not.call(null,v__3047__auto___3238)) || (cljs.core.empty_QMARK_.call(null,v__3047__auto___3238)))){
b__3046__auto___3237.call(null);
} else {
hipo.interceptor.call.call(null,b__3046__auto___3237,v__3047__auto___3238,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
}

var n__4376__auto___3239 = (function (){var x__4009__auto__ = oc;
var y__4010__auto__ = nc;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
var i_3240 = (0);
while(true){
if((i_3240 < n__4376__auto___3239)){
var ov_3241 = cljs.core.nth.call(null,och,i_3240);
var nv_3242 = cljs.core.nth.call(null,nch,i_3240);
if(!((((ov_3241 == null)) && ((nv_3242 == null))))){
if((ov_3241 == null)){
var b__3046__auto___3243 = ((function (i_3240,ov_3241,nv_3242,n__4376__auto___3239,oc,nc,d,map__3235,map__3235__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,i_3240,hipo.interpreter.create_child.call(null,nv_3242,m));
});})(i_3240,ov_3241,nv_3242,n__4376__auto___3239,oc,nc,d,map__3235,map__3235__$1,m,interceptors))
;
var v__3047__auto___3244 = interceptors;
if(((cljs.core.not.call(null,v__3047__auto___3244)) || (cljs.core.empty_QMARK_.call(null,v__3047__auto___3244)))){
b__3046__auto___3243.call(null);
} else {
hipo.interceptor.call.call(null,b__3046__auto___3243,v__3047__auto___3244,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nv_3242,new cljs.core.Keyword(null,"index","index",-1531685915),i_3240], null));
}
} else {
if((nv_3242 == null)){
var b__3046__auto___3245 = ((function (i_3240,ov_3241,nv_3242,n__4376__auto___3239,oc,nc,d,map__3235,map__3235__$1,m,interceptors){
return (function (){
return hipo.dom.remove_child_BANG_.call(null,el,i_3240);
});})(i_3240,ov_3241,nv_3242,n__4376__auto___3239,oc,nc,d,map__3235,map__3235__$1,m,interceptors))
;
var v__3047__auto___3246 = interceptors;
if(((cljs.core.not.call(null,v__3047__auto___3246)) || (cljs.core.empty_QMARK_.call(null,v__3047__auto___3246)))){
b__3046__auto___3245.call(null);
} else {
hipo.interceptor.call.call(null,b__3046__auto___3245,v__3047__auto___3246,new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"index","index",-1531685915),i_3240], null));
}
} else {
var temp__4655__auto___3247 = hipo.dom.child.call(null,el,i_3240);
if(cljs.core.truth_(temp__4655__auto___3247)){
var cel_3248 = temp__4655__auto___3247;
hipo.interpreter.reconciliate_BANG_.call(null,cel_3248,ov_3241,nv_3242,m);
} else {
}

}
}
} else {
}

var G__3249 = (i_3240 + (1));
i_3240 = G__3249;
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
var b__3046__auto__ = ((function (h,temp__4655__auto__,oc,nc,d,map__3235,map__3235__$1,m,interceptors){
return (function (){
return el.appendChild(hipo.interpreter.create_child.call(null,h,m));
});})(h,temp__4655__auto__,oc,nc,d,map__3235,map__3235__$1,m,interceptors))
;
var v__3047__auto__ = interceptors;
if(((cljs.core.not.call(null,v__3047__auto__)) || (cljs.core.empty_QMARK_.call(null,v__3047__auto__)))){
return b__3046__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__3046__auto__,v__3047__auto__,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
}
} else {
return null;
}
} else {
var f = document.createDocumentFragment();
var cs = ((((0) === oc))?nch:cljs.core.subvec.call(null,nch,oc));
var b__3046__auto___3250 = ((function (f,cs,oc,nc,d,map__3235,map__3235__$1,m,interceptors){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs,m);
});})(f,cs,oc,nc,d,map__3235,map__3235__$1,m,interceptors))
;
var v__3047__auto___3251 = interceptors;
if(((cljs.core.not.call(null,v__3047__auto___3251)) || (cljs.core.empty_QMARK_.call(null,v__3047__auto___3251)))){
b__3046__auto___3250.call(null);
} else {
hipo.interceptor.call.call(null,b__3046__auto___3250,v__3047__auto___3251,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
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
hipo.interpreter.reconciliate_children_BANG_ = (function hipo$interpreter$reconciliate_children_BANG_(el,och,nch,p__3252){
var map__3253 = p__3252;
var map__3253__$1 = ((((!((map__3253 == null)))?(((((map__3253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3253):map__3253);
var m = map__3253__$1;
var interceptors = cljs.core.get.call(null,map__3253__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.empty_QMARK_.call(null,nch)){
if(!(cljs.core.empty_QMARK_.call(null,och))){
var b__3046__auto__ = ((function (map__3253,map__3253__$1,m,interceptors){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(map__3253,map__3253__$1,m,interceptors))
;
var v__3047__auto__ = interceptors;
if(((cljs.core.not.call(null,v__3047__auto__)) || (cljs.core.empty_QMARK_.call(null,v__3047__auto__)))){
return b__3046__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__3046__auto__,v__3047__auto__,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
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
hipo.interpreter.reconciliate_vector_BANG_ = (function hipo$interpreter$reconciliate_vector_BANG_(el,oh,nh,p__3255){
var map__3256 = p__3255;
var map__3256__$1 = ((((!((map__3256 == null)))?(((((map__3256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3256):map__3256);
var m = map__3256__$1;
var interceptors = cljs.core.get.call(null,map__3256__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
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
var b__3046__auto__ = ((function (nel,map__3256,map__3256__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error(["Assert failed: ","Can't replace root element. If you want to change root element's type it must be encapsulated in a static element.","\n","(.-parentElement el)"].join('')));
}

return hipo.dom.replace_BANG_.call(null,el,nel);
});})(nel,map__3256,map__3256__$1,m,interceptors))
;
var v__3047__auto__ = interceptors;
if(((cljs.core.not.call(null,v__3047__auto__)) || (cljs.core.empty_QMARK_.call(null,v__3047__auto__)))){
return b__3046__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__3046__auto__,v__3047__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
var om = hipo.hiccup.attributes.call(null,oh);
var nm = hipo.hiccup.attributes.call(null,nh);
var och = hipo.hiccup.children.call(null,oh);
var nch = hipo.hiccup.children.call(null,nh);
var b__3046__auto___3258 = ((function (om,nm,och,nch,map__3256,map__3256__$1,m,interceptors){
return (function (){
return hipo.interpreter.reconciliate_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),m);
});})(om,nm,och,nch,map__3256,map__3256__$1,m,interceptors))
;
var v__3047__auto___3259 = interceptors;
if(((cljs.core.not.call(null,v__3047__auto___3259)) || (cljs.core.empty_QMARK_.call(null,v__3047__auto___3259)))){
b__3046__auto___3258.call(null);
} else {
hipo.interceptor.call.call(null,b__3046__auto___3258,v__3047__auto___3259,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),och,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nch], null));
}

return hipo.interpreter.reconciliate_attributes_BANG_.call(null,el,hipo.hiccup.keyns.call(null,nh),hipo.hiccup.tag.call(null,nh),om,nm,m);
}
});
hipo.interpreter.reconciliate_BANG_ = (function hipo$interpreter$reconciliate_BANG_(el,oh,nh,p__3260){
var map__3261 = p__3260;
var map__3261__$1 = ((((!((map__3261 == null)))?(((((map__3261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3261):map__3261);
var m = map__3261__$1;
var interceptors = cljs.core.get.call(null,map__3261__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
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

var b__3046__auto__ = ((function (map__3261,map__3261__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,nh))){
if(!((oh === nh))){
var b__3046__auto__ = ((function (map__3261,map__3261__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error(["Assert failed: ","Can't replace root element. If you want to change root element's type it must be encapsulated in a static element.","\n","(.-parentElement el)"].join('')));
}

return hipo.dom.replace_text_BANG_.call(null,el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nh)].join(''));
});})(map__3261,map__3261__$1,m,interceptors))
;
var v__3047__auto__ = interceptors;
if(((cljs.core.not.call(null,v__3047__auto__)) || (cljs.core.empty_QMARK_.call(null,v__3047__auto__)))){
return b__3046__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__3046__auto__,v__3047__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
return null;
}
} else {
return hipo.interpreter.reconciliate_vector_BANG_.call(null,el,oh,nh,m);
}
});})(map__3261,map__3261__$1,m,interceptors))
;
var v__3047__auto__ = interceptors;
if(((cljs.core.not.call(null,v__3047__auto__)) || (cljs.core.empty_QMARK_.call(null,v__3047__auto__)))){
return b__3046__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__3046__auto__,v__3047__auto__,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),oh,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nh], null));
}
});

//# sourceMappingURL=interpreter.js.map?rel=1529002150878
