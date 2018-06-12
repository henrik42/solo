// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1988){
var map__1989 = p__1988;
var map__1989__$1 = ((((!((map__1989 == null)))?(((((map__1989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1989):map__1989);
var m = map__1989__$1;
var n = cljs.core.get.call(null,map__1989__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1989__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__1991_2013 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1992_2014 = null;
var count__1993_2015 = (0);
var i__1994_2016 = (0);
while(true){
if((i__1994_2016 < count__1993_2015)){
var f_2017 = cljs.core._nth.call(null,chunk__1992_2014,i__1994_2016);
cljs.core.println.call(null,"  ",f_2017);


var G__2018 = seq__1991_2013;
var G__2019 = chunk__1992_2014;
var G__2020 = count__1993_2015;
var G__2021 = (i__1994_2016 + (1));
seq__1991_2013 = G__2018;
chunk__1992_2014 = G__2019;
count__1993_2015 = G__2020;
i__1994_2016 = G__2021;
continue;
} else {
var temp__4657__auto___2022 = cljs.core.seq.call(null,seq__1991_2013);
if(temp__4657__auto___2022){
var seq__1991_2023__$1 = temp__4657__auto___2022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1991_2023__$1)){
var c__4319__auto___2024 = cljs.core.chunk_first.call(null,seq__1991_2023__$1);
var G__2025 = cljs.core.chunk_rest.call(null,seq__1991_2023__$1);
var G__2026 = c__4319__auto___2024;
var G__2027 = cljs.core.count.call(null,c__4319__auto___2024);
var G__2028 = (0);
seq__1991_2013 = G__2025;
chunk__1992_2014 = G__2026;
count__1993_2015 = G__2027;
i__1994_2016 = G__2028;
continue;
} else {
var f_2029 = cljs.core.first.call(null,seq__1991_2023__$1);
cljs.core.println.call(null,"  ",f_2029);


var G__2030 = cljs.core.next.call(null,seq__1991_2023__$1);
var G__2031 = null;
var G__2032 = (0);
var G__2033 = (0);
seq__1991_2013 = G__2030;
chunk__1992_2014 = G__2031;
count__1993_2015 = G__2032;
i__1994_2016 = G__2033;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_2034 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_2034);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_2034)))?cljs.core.second.call(null,arglists_2034):arglists_2034));
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
var seq__1995_2035 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1996_2036 = null;
var count__1997_2037 = (0);
var i__1998_2038 = (0);
while(true){
if((i__1998_2038 < count__1997_2037)){
var vec__1999_2039 = cljs.core._nth.call(null,chunk__1996_2036,i__1998_2038);
var name_2040 = cljs.core.nth.call(null,vec__1999_2039,(0),null);
var map__2002_2041 = cljs.core.nth.call(null,vec__1999_2039,(1),null);
var map__2002_2042__$1 = ((((!((map__2002_2041 == null)))?(((((map__2002_2041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2002_2041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2002_2041):map__2002_2041);
var doc_2043 = cljs.core.get.call(null,map__2002_2042__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_2044 = cljs.core.get.call(null,map__2002_2042__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_2040);

cljs.core.println.call(null," ",arglists_2044);

if(cljs.core.truth_(doc_2043)){
cljs.core.println.call(null," ",doc_2043);
} else {
}


var G__2045 = seq__1995_2035;
var G__2046 = chunk__1996_2036;
var G__2047 = count__1997_2037;
var G__2048 = (i__1998_2038 + (1));
seq__1995_2035 = G__2045;
chunk__1996_2036 = G__2046;
count__1997_2037 = G__2047;
i__1998_2038 = G__2048;
continue;
} else {
var temp__4657__auto___2049 = cljs.core.seq.call(null,seq__1995_2035);
if(temp__4657__auto___2049){
var seq__1995_2050__$1 = temp__4657__auto___2049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1995_2050__$1)){
var c__4319__auto___2051 = cljs.core.chunk_first.call(null,seq__1995_2050__$1);
var G__2052 = cljs.core.chunk_rest.call(null,seq__1995_2050__$1);
var G__2053 = c__4319__auto___2051;
var G__2054 = cljs.core.count.call(null,c__4319__auto___2051);
var G__2055 = (0);
seq__1995_2035 = G__2052;
chunk__1996_2036 = G__2053;
count__1997_2037 = G__2054;
i__1998_2038 = G__2055;
continue;
} else {
var vec__2004_2056 = cljs.core.first.call(null,seq__1995_2050__$1);
var name_2057 = cljs.core.nth.call(null,vec__2004_2056,(0),null);
var map__2007_2058 = cljs.core.nth.call(null,vec__2004_2056,(1),null);
var map__2007_2059__$1 = ((((!((map__2007_2058 == null)))?(((((map__2007_2058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2007_2058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2007_2058):map__2007_2058);
var doc_2060 = cljs.core.get.call(null,map__2007_2059__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_2061 = cljs.core.get.call(null,map__2007_2059__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_2057);

cljs.core.println.call(null," ",arglists_2061);

if(cljs.core.truth_(doc_2060)){
cljs.core.println.call(null," ",doc_2060);
} else {
}


var G__2062 = cljs.core.next.call(null,seq__1995_2050__$1);
var G__2063 = null;
var G__2064 = (0);
var G__2065 = (0);
seq__1995_2035 = G__2062;
chunk__1996_2036 = G__2063;
count__1997_2037 = G__2064;
i__1998_2038 = G__2065;
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

var seq__2009 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__2010 = null;
var count__2011 = (0);
var i__2012 = (0);
while(true){
if((i__2012 < count__2011)){
var role = cljs.core._nth.call(null,chunk__2010,i__2012);
var temp__4657__auto___2066__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___2066__$1)){
var spec_2067 = temp__4657__auto___2066__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_2067));
} else {
}


var G__2068 = seq__2009;
var G__2069 = chunk__2010;
var G__2070 = count__2011;
var G__2071 = (i__2012 + (1));
seq__2009 = G__2068;
chunk__2010 = G__2069;
count__2011 = G__2070;
i__2012 = G__2071;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__2009);
if(temp__4657__auto____$1){
var seq__2009__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2009__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__2009__$1);
var G__2072 = cljs.core.chunk_rest.call(null,seq__2009__$1);
var G__2073 = c__4319__auto__;
var G__2074 = cljs.core.count.call(null,c__4319__auto__);
var G__2075 = (0);
seq__2009 = G__2072;
chunk__2010 = G__2073;
count__2011 = G__2074;
i__2012 = G__2075;
continue;
} else {
var role = cljs.core.first.call(null,seq__2009__$1);
var temp__4657__auto___2076__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___2076__$2)){
var spec_2077 = temp__4657__auto___2076__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_2077));
} else {
}


var G__2078 = cljs.core.next.call(null,seq__2009__$1);
var G__2079 = null;
var G__2080 = (0);
var G__2081 = (0);
seq__2009 = G__2078;
chunk__2010 = G__2079;
count__2011 = G__2080;
i__2012 = G__2081;
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

//# sourceMappingURL=repl.js.map?rel=1528815103808
