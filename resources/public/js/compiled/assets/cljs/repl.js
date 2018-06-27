// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24875){
var map__24876 = p__24875;
var map__24876__$1 = ((((!((map__24876 == null)))?(((((map__24876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24876):map__24876);
var m = map__24876__$1;
var n = cljs.core.get.call(null,map__24876__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__24876__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__24878_24900 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24879_24901 = null;
var count__24880_24902 = (0);
var i__24881_24903 = (0);
while(true){
if((i__24881_24903 < count__24880_24902)){
var f_24904 = cljs.core._nth.call(null,chunk__24879_24901,i__24881_24903);
cljs.core.println.call(null,"  ",f_24904);


var G__24905 = seq__24878_24900;
var G__24906 = chunk__24879_24901;
var G__24907 = count__24880_24902;
var G__24908 = (i__24881_24903 + (1));
seq__24878_24900 = G__24905;
chunk__24879_24901 = G__24906;
count__24880_24902 = G__24907;
i__24881_24903 = G__24908;
continue;
} else {
var temp__4657__auto___24909 = cljs.core.seq.call(null,seq__24878_24900);
if(temp__4657__auto___24909){
var seq__24878_24910__$1 = temp__4657__auto___24909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24878_24910__$1)){
var c__4319__auto___24911 = cljs.core.chunk_first.call(null,seq__24878_24910__$1);
var G__24912 = cljs.core.chunk_rest.call(null,seq__24878_24910__$1);
var G__24913 = c__4319__auto___24911;
var G__24914 = cljs.core.count.call(null,c__4319__auto___24911);
var G__24915 = (0);
seq__24878_24900 = G__24912;
chunk__24879_24901 = G__24913;
count__24880_24902 = G__24914;
i__24881_24903 = G__24915;
continue;
} else {
var f_24916 = cljs.core.first.call(null,seq__24878_24910__$1);
cljs.core.println.call(null,"  ",f_24916);


var G__24917 = cljs.core.next.call(null,seq__24878_24910__$1);
var G__24918 = null;
var G__24919 = (0);
var G__24920 = (0);
seq__24878_24900 = G__24917;
chunk__24879_24901 = G__24918;
count__24880_24902 = G__24919;
i__24881_24903 = G__24920;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24921 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24921);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24921)))?cljs.core.second.call(null,arglists_24921):arglists_24921));
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
var seq__24882_24922 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24883_24923 = null;
var count__24884_24924 = (0);
var i__24885_24925 = (0);
while(true){
if((i__24885_24925 < count__24884_24924)){
var vec__24886_24926 = cljs.core._nth.call(null,chunk__24883_24923,i__24885_24925);
var name_24927 = cljs.core.nth.call(null,vec__24886_24926,(0),null);
var map__24889_24928 = cljs.core.nth.call(null,vec__24886_24926,(1),null);
var map__24889_24929__$1 = ((((!((map__24889_24928 == null)))?(((((map__24889_24928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24889_24928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24889_24928):map__24889_24928);
var doc_24930 = cljs.core.get.call(null,map__24889_24929__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24931 = cljs.core.get.call(null,map__24889_24929__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24927);

cljs.core.println.call(null," ",arglists_24931);

if(cljs.core.truth_(doc_24930)){
cljs.core.println.call(null," ",doc_24930);
} else {
}


var G__24932 = seq__24882_24922;
var G__24933 = chunk__24883_24923;
var G__24934 = count__24884_24924;
var G__24935 = (i__24885_24925 + (1));
seq__24882_24922 = G__24932;
chunk__24883_24923 = G__24933;
count__24884_24924 = G__24934;
i__24885_24925 = G__24935;
continue;
} else {
var temp__4657__auto___24936 = cljs.core.seq.call(null,seq__24882_24922);
if(temp__4657__auto___24936){
var seq__24882_24937__$1 = temp__4657__auto___24936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24882_24937__$1)){
var c__4319__auto___24938 = cljs.core.chunk_first.call(null,seq__24882_24937__$1);
var G__24939 = cljs.core.chunk_rest.call(null,seq__24882_24937__$1);
var G__24940 = c__4319__auto___24938;
var G__24941 = cljs.core.count.call(null,c__4319__auto___24938);
var G__24942 = (0);
seq__24882_24922 = G__24939;
chunk__24883_24923 = G__24940;
count__24884_24924 = G__24941;
i__24885_24925 = G__24942;
continue;
} else {
var vec__24891_24943 = cljs.core.first.call(null,seq__24882_24937__$1);
var name_24944 = cljs.core.nth.call(null,vec__24891_24943,(0),null);
var map__24894_24945 = cljs.core.nth.call(null,vec__24891_24943,(1),null);
var map__24894_24946__$1 = ((((!((map__24894_24945 == null)))?(((((map__24894_24945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24894_24945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24894_24945):map__24894_24945);
var doc_24947 = cljs.core.get.call(null,map__24894_24946__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24948 = cljs.core.get.call(null,map__24894_24946__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24944);

cljs.core.println.call(null," ",arglists_24948);

if(cljs.core.truth_(doc_24947)){
cljs.core.println.call(null," ",doc_24947);
} else {
}


var G__24949 = cljs.core.next.call(null,seq__24882_24937__$1);
var G__24950 = null;
var G__24951 = (0);
var G__24952 = (0);
seq__24882_24922 = G__24949;
chunk__24883_24923 = G__24950;
count__24884_24924 = G__24951;
i__24885_24925 = G__24952;
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

var seq__24896 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24897 = null;
var count__24898 = (0);
var i__24899 = (0);
while(true){
if((i__24899 < count__24898)){
var role = cljs.core._nth.call(null,chunk__24897,i__24899);
var temp__4657__auto___24953__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___24953__$1)){
var spec_24954 = temp__4657__auto___24953__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24954));
} else {
}


var G__24955 = seq__24896;
var G__24956 = chunk__24897;
var G__24957 = count__24898;
var G__24958 = (i__24899 + (1));
seq__24896 = G__24955;
chunk__24897 = G__24956;
count__24898 = G__24957;
i__24899 = G__24958;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__24896);
if(temp__4657__auto____$1){
var seq__24896__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24896__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24896__$1);
var G__24959 = cljs.core.chunk_rest.call(null,seq__24896__$1);
var G__24960 = c__4319__auto__;
var G__24961 = cljs.core.count.call(null,c__4319__auto__);
var G__24962 = (0);
seq__24896 = G__24959;
chunk__24897 = G__24960;
count__24898 = G__24961;
i__24899 = G__24962;
continue;
} else {
var role = cljs.core.first.call(null,seq__24896__$1);
var temp__4657__auto___24963__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___24963__$2)){
var spec_24964 = temp__4657__auto___24963__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24964));
} else {
}


var G__24965 = cljs.core.next.call(null,seq__24896__$1);
var G__24966 = null;
var G__24967 = (0);
var G__24968 = (0);
seq__24896 = G__24965;
chunk__24897 = G__24966;
count__24898 = G__24967;
i__24899 = G__24968;
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

//# sourceMappingURL=repl.js.map?rel=1530042240378
