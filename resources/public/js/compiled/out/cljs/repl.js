// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1980){
var map__1981 = p__1980;
var map__1981__$1 = ((((!((map__1981 == null)))?(((((map__1981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1981):map__1981);
var m = map__1981__$1;
var n = cljs.core.get.call(null,map__1981__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1981__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__1983_2005 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1984_2006 = null;
var count__1985_2007 = (0);
var i__1986_2008 = (0);
while(true){
if((i__1986_2008 < count__1985_2007)){
var f_2009 = cljs.core._nth.call(null,chunk__1984_2006,i__1986_2008);
cljs.core.println.call(null,"  ",f_2009);


var G__2010 = seq__1983_2005;
var G__2011 = chunk__1984_2006;
var G__2012 = count__1985_2007;
var G__2013 = (i__1986_2008 + (1));
seq__1983_2005 = G__2010;
chunk__1984_2006 = G__2011;
count__1985_2007 = G__2012;
i__1986_2008 = G__2013;
continue;
} else {
var temp__4657__auto___2014 = cljs.core.seq.call(null,seq__1983_2005);
if(temp__4657__auto___2014){
var seq__1983_2015__$1 = temp__4657__auto___2014;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1983_2015__$1)){
var c__4319__auto___2016 = cljs.core.chunk_first.call(null,seq__1983_2015__$1);
var G__2017 = cljs.core.chunk_rest.call(null,seq__1983_2015__$1);
var G__2018 = c__4319__auto___2016;
var G__2019 = cljs.core.count.call(null,c__4319__auto___2016);
var G__2020 = (0);
seq__1983_2005 = G__2017;
chunk__1984_2006 = G__2018;
count__1985_2007 = G__2019;
i__1986_2008 = G__2020;
continue;
} else {
var f_2021 = cljs.core.first.call(null,seq__1983_2015__$1);
cljs.core.println.call(null,"  ",f_2021);


var G__2022 = cljs.core.next.call(null,seq__1983_2015__$1);
var G__2023 = null;
var G__2024 = (0);
var G__2025 = (0);
seq__1983_2005 = G__2022;
chunk__1984_2006 = G__2023;
count__1985_2007 = G__2024;
i__1986_2008 = G__2025;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_2026 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_2026);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_2026)))?cljs.core.second.call(null,arglists_2026):arglists_2026));
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
var seq__1987_2027 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1988_2028 = null;
var count__1989_2029 = (0);
var i__1990_2030 = (0);
while(true){
if((i__1990_2030 < count__1989_2029)){
var vec__1991_2031 = cljs.core._nth.call(null,chunk__1988_2028,i__1990_2030);
var name_2032 = cljs.core.nth.call(null,vec__1991_2031,(0),null);
var map__1994_2033 = cljs.core.nth.call(null,vec__1991_2031,(1),null);
var map__1994_2034__$1 = ((((!((map__1994_2033 == null)))?(((((map__1994_2033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1994_2033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1994_2033):map__1994_2033);
var doc_2035 = cljs.core.get.call(null,map__1994_2034__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_2036 = cljs.core.get.call(null,map__1994_2034__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_2032);

cljs.core.println.call(null," ",arglists_2036);

if(cljs.core.truth_(doc_2035)){
cljs.core.println.call(null," ",doc_2035);
} else {
}


var G__2037 = seq__1987_2027;
var G__2038 = chunk__1988_2028;
var G__2039 = count__1989_2029;
var G__2040 = (i__1990_2030 + (1));
seq__1987_2027 = G__2037;
chunk__1988_2028 = G__2038;
count__1989_2029 = G__2039;
i__1990_2030 = G__2040;
continue;
} else {
var temp__4657__auto___2041 = cljs.core.seq.call(null,seq__1987_2027);
if(temp__4657__auto___2041){
var seq__1987_2042__$1 = temp__4657__auto___2041;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1987_2042__$1)){
var c__4319__auto___2043 = cljs.core.chunk_first.call(null,seq__1987_2042__$1);
var G__2044 = cljs.core.chunk_rest.call(null,seq__1987_2042__$1);
var G__2045 = c__4319__auto___2043;
var G__2046 = cljs.core.count.call(null,c__4319__auto___2043);
var G__2047 = (0);
seq__1987_2027 = G__2044;
chunk__1988_2028 = G__2045;
count__1989_2029 = G__2046;
i__1990_2030 = G__2047;
continue;
} else {
var vec__1996_2048 = cljs.core.first.call(null,seq__1987_2042__$1);
var name_2049 = cljs.core.nth.call(null,vec__1996_2048,(0),null);
var map__1999_2050 = cljs.core.nth.call(null,vec__1996_2048,(1),null);
var map__1999_2051__$1 = ((((!((map__1999_2050 == null)))?(((((map__1999_2050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1999_2050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1999_2050):map__1999_2050);
var doc_2052 = cljs.core.get.call(null,map__1999_2051__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_2053 = cljs.core.get.call(null,map__1999_2051__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_2049);

cljs.core.println.call(null," ",arglists_2053);

if(cljs.core.truth_(doc_2052)){
cljs.core.println.call(null," ",doc_2052);
} else {
}


var G__2054 = cljs.core.next.call(null,seq__1987_2042__$1);
var G__2055 = null;
var G__2056 = (0);
var G__2057 = (0);
seq__1987_2027 = G__2054;
chunk__1988_2028 = G__2055;
count__1989_2029 = G__2056;
i__1990_2030 = G__2057;
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

var seq__2001 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__2002 = null;
var count__2003 = (0);
var i__2004 = (0);
while(true){
if((i__2004 < count__2003)){
var role = cljs.core._nth.call(null,chunk__2002,i__2004);
var temp__4657__auto___2058__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___2058__$1)){
var spec_2059 = temp__4657__auto___2058__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_2059));
} else {
}


var G__2060 = seq__2001;
var G__2061 = chunk__2002;
var G__2062 = count__2003;
var G__2063 = (i__2004 + (1));
seq__2001 = G__2060;
chunk__2002 = G__2061;
count__2003 = G__2062;
i__2004 = G__2063;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__2001);
if(temp__4657__auto____$1){
var seq__2001__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2001__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__2001__$1);
var G__2064 = cljs.core.chunk_rest.call(null,seq__2001__$1);
var G__2065 = c__4319__auto__;
var G__2066 = cljs.core.count.call(null,c__4319__auto__);
var G__2067 = (0);
seq__2001 = G__2064;
chunk__2002 = G__2065;
count__2003 = G__2066;
i__2004 = G__2067;
continue;
} else {
var role = cljs.core.first.call(null,seq__2001__$1);
var temp__4657__auto___2068__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___2068__$2)){
var spec_2069 = temp__4657__auto___2068__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_2069));
} else {
}


var G__2070 = cljs.core.next.call(null,seq__2001__$1);
var G__2071 = null;
var G__2072 = (0);
var G__2073 = (0);
seq__2001 = G__2070;
chunk__2002 = G__2071;
count__2003 = G__2072;
i__2004 = G__2073;
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

//# sourceMappingURL=repl.js.map?rel=1528311014659
