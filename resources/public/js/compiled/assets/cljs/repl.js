// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__6016){
var map__6017 = p__6016;
var map__6017__$1 = ((((!((map__6017 == null)))?(((((map__6017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6017):map__6017);
var m = map__6017__$1;
var n = cljs.core.get.call(null,map__6017__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__6017__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6019_6041 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6020_6042 = null;
var count__6021_6043 = (0);
var i__6022_6044 = (0);
while(true){
if((i__6022_6044 < count__6021_6043)){
var f_6045 = cljs.core._nth.call(null,chunk__6020_6042,i__6022_6044);
cljs.core.println.call(null,"  ",f_6045);


var G__6046 = seq__6019_6041;
var G__6047 = chunk__6020_6042;
var G__6048 = count__6021_6043;
var G__6049 = (i__6022_6044 + (1));
seq__6019_6041 = G__6046;
chunk__6020_6042 = G__6047;
count__6021_6043 = G__6048;
i__6022_6044 = G__6049;
continue;
} else {
var temp__4657__auto___6050 = cljs.core.seq.call(null,seq__6019_6041);
if(temp__4657__auto___6050){
var seq__6019_6051__$1 = temp__4657__auto___6050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6019_6051__$1)){
var c__4319__auto___6052 = cljs.core.chunk_first.call(null,seq__6019_6051__$1);
var G__6053 = cljs.core.chunk_rest.call(null,seq__6019_6051__$1);
var G__6054 = c__4319__auto___6052;
var G__6055 = cljs.core.count.call(null,c__4319__auto___6052);
var G__6056 = (0);
seq__6019_6041 = G__6053;
chunk__6020_6042 = G__6054;
count__6021_6043 = G__6055;
i__6022_6044 = G__6056;
continue;
} else {
var f_6057 = cljs.core.first.call(null,seq__6019_6051__$1);
cljs.core.println.call(null,"  ",f_6057);


var G__6058 = cljs.core.next.call(null,seq__6019_6051__$1);
var G__6059 = null;
var G__6060 = (0);
var G__6061 = (0);
seq__6019_6041 = G__6058;
chunk__6020_6042 = G__6059;
count__6021_6043 = G__6060;
i__6022_6044 = G__6061;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_6062 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_6062);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_6062)))?cljs.core.second.call(null,arglists_6062):arglists_6062));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6023_6063 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6024_6064 = null;
var count__6025_6065 = (0);
var i__6026_6066 = (0);
while(true){
if((i__6026_6066 < count__6025_6065)){
var vec__6027_6067 = cljs.core._nth.call(null,chunk__6024_6064,i__6026_6066);
var name_6068 = cljs.core.nth.call(null,vec__6027_6067,(0),null);
var map__6030_6069 = cljs.core.nth.call(null,vec__6027_6067,(1),null);
var map__6030_6070__$1 = ((((!((map__6030_6069 == null)))?(((((map__6030_6069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6030_6069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6030_6069):map__6030_6069);
var doc_6071 = cljs.core.get.call(null,map__6030_6070__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_6072 = cljs.core.get.call(null,map__6030_6070__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_6068);

cljs.core.println.call(null," ",arglists_6072);

if(cljs.core.truth_(doc_6071)){
cljs.core.println.call(null," ",doc_6071);
} else {
}


var G__6073 = seq__6023_6063;
var G__6074 = chunk__6024_6064;
var G__6075 = count__6025_6065;
var G__6076 = (i__6026_6066 + (1));
seq__6023_6063 = G__6073;
chunk__6024_6064 = G__6074;
count__6025_6065 = G__6075;
i__6026_6066 = G__6076;
continue;
} else {
var temp__4657__auto___6077 = cljs.core.seq.call(null,seq__6023_6063);
if(temp__4657__auto___6077){
var seq__6023_6078__$1 = temp__4657__auto___6077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6023_6078__$1)){
var c__4319__auto___6079 = cljs.core.chunk_first.call(null,seq__6023_6078__$1);
var G__6080 = cljs.core.chunk_rest.call(null,seq__6023_6078__$1);
var G__6081 = c__4319__auto___6079;
var G__6082 = cljs.core.count.call(null,c__4319__auto___6079);
var G__6083 = (0);
seq__6023_6063 = G__6080;
chunk__6024_6064 = G__6081;
count__6025_6065 = G__6082;
i__6026_6066 = G__6083;
continue;
} else {
var vec__6032_6084 = cljs.core.first.call(null,seq__6023_6078__$1);
var name_6085 = cljs.core.nth.call(null,vec__6032_6084,(0),null);
var map__6035_6086 = cljs.core.nth.call(null,vec__6032_6084,(1),null);
var map__6035_6087__$1 = ((((!((map__6035_6086 == null)))?(((((map__6035_6086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6035_6086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6035_6086):map__6035_6086);
var doc_6088 = cljs.core.get.call(null,map__6035_6087__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_6089 = cljs.core.get.call(null,map__6035_6087__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_6085);

cljs.core.println.call(null," ",arglists_6089);

if(cljs.core.truth_(doc_6088)){
cljs.core.println.call(null," ",doc_6088);
} else {
}


var G__6090 = cljs.core.next.call(null,seq__6023_6078__$1);
var G__6091 = null;
var G__6092 = (0);
var G__6093 = (0);
seq__6023_6063 = G__6090;
chunk__6024_6064 = G__6091;
count__6025_6065 = G__6092;
i__6026_6066 = G__6093;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__6037 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__6038 = null;
var count__6039 = (0);
var i__6040 = (0);
while(true){
if((i__6040 < count__6039)){
var role = cljs.core._nth.call(null,chunk__6038,i__6040);
var temp__4657__auto___6094__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___6094__$1)){
var spec_6095 = temp__4657__auto___6094__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_6095));
} else {
}


var G__6096 = seq__6037;
var G__6097 = chunk__6038;
var G__6098 = count__6039;
var G__6099 = (i__6040 + (1));
seq__6037 = G__6096;
chunk__6038 = G__6097;
count__6039 = G__6098;
i__6040 = G__6099;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__6037);
if(temp__4657__auto____$1){
var seq__6037__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6037__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__6037__$1);
var G__6100 = cljs.core.chunk_rest.call(null,seq__6037__$1);
var G__6101 = c__4319__auto__;
var G__6102 = cljs.core.count.call(null,c__4319__auto__);
var G__6103 = (0);
seq__6037 = G__6100;
chunk__6038 = G__6101;
count__6039 = G__6102;
i__6040 = G__6103;
continue;
} else {
var role = cljs.core.first.call(null,seq__6037__$1);
var temp__4657__auto___6104__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___6104__$2)){
var spec_6105 = temp__4657__auto___6104__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_6105));
} else {
}


var G__6106 = cljs.core.next.call(null,seq__6037__$1);
var G__6107 = null;
var G__6108 = (0);
var G__6109 = (0);
seq__6037 = G__6106;
chunk__6038 = G__6107;
count__6039 = G__6108;
i__6040 = G__6109;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1530435360929
