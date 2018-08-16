// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27651){
var map__27652 = p__27651;
var map__27652__$1 = ((((!((map__27652 == null)))?(((((map__27652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27652):map__27652);
var m = map__27652__$1;
var n = cljs.core.get.call(null,map__27652__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__27652__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__27654_27676 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27655_27677 = null;
var count__27656_27678 = (0);
var i__27657_27679 = (0);
while(true){
if((i__27657_27679 < count__27656_27678)){
var f_27680 = cljs.core._nth.call(null,chunk__27655_27677,i__27657_27679);
cljs.core.println.call(null,"  ",f_27680);


var G__27681 = seq__27654_27676;
var G__27682 = chunk__27655_27677;
var G__27683 = count__27656_27678;
var G__27684 = (i__27657_27679 + (1));
seq__27654_27676 = G__27681;
chunk__27655_27677 = G__27682;
count__27656_27678 = G__27683;
i__27657_27679 = G__27684;
continue;
} else {
var temp__4657__auto___27685 = cljs.core.seq.call(null,seq__27654_27676);
if(temp__4657__auto___27685){
var seq__27654_27686__$1 = temp__4657__auto___27685;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27654_27686__$1)){
var c__4319__auto___27687 = cljs.core.chunk_first.call(null,seq__27654_27686__$1);
var G__27688 = cljs.core.chunk_rest.call(null,seq__27654_27686__$1);
var G__27689 = c__4319__auto___27687;
var G__27690 = cljs.core.count.call(null,c__4319__auto___27687);
var G__27691 = (0);
seq__27654_27676 = G__27688;
chunk__27655_27677 = G__27689;
count__27656_27678 = G__27690;
i__27657_27679 = G__27691;
continue;
} else {
var f_27692 = cljs.core.first.call(null,seq__27654_27686__$1);
cljs.core.println.call(null,"  ",f_27692);


var G__27693 = cljs.core.next.call(null,seq__27654_27686__$1);
var G__27694 = null;
var G__27695 = (0);
var G__27696 = (0);
seq__27654_27676 = G__27693;
chunk__27655_27677 = G__27694;
count__27656_27678 = G__27695;
i__27657_27679 = G__27696;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27697 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27697);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27697)))?cljs.core.second.call(null,arglists_27697):arglists_27697));
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
var seq__27658_27698 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27659_27699 = null;
var count__27660_27700 = (0);
var i__27661_27701 = (0);
while(true){
if((i__27661_27701 < count__27660_27700)){
var vec__27662_27702 = cljs.core._nth.call(null,chunk__27659_27699,i__27661_27701);
var name_27703 = cljs.core.nth.call(null,vec__27662_27702,(0),null);
var map__27665_27704 = cljs.core.nth.call(null,vec__27662_27702,(1),null);
var map__27665_27705__$1 = ((((!((map__27665_27704 == null)))?(((((map__27665_27704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27665_27704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27665_27704):map__27665_27704);
var doc_27706 = cljs.core.get.call(null,map__27665_27705__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27707 = cljs.core.get.call(null,map__27665_27705__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27703);

cljs.core.println.call(null," ",arglists_27707);

if(cljs.core.truth_(doc_27706)){
cljs.core.println.call(null," ",doc_27706);
} else {
}


var G__27708 = seq__27658_27698;
var G__27709 = chunk__27659_27699;
var G__27710 = count__27660_27700;
var G__27711 = (i__27661_27701 + (1));
seq__27658_27698 = G__27708;
chunk__27659_27699 = G__27709;
count__27660_27700 = G__27710;
i__27661_27701 = G__27711;
continue;
} else {
var temp__4657__auto___27712 = cljs.core.seq.call(null,seq__27658_27698);
if(temp__4657__auto___27712){
var seq__27658_27713__$1 = temp__4657__auto___27712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27658_27713__$1)){
var c__4319__auto___27714 = cljs.core.chunk_first.call(null,seq__27658_27713__$1);
var G__27715 = cljs.core.chunk_rest.call(null,seq__27658_27713__$1);
var G__27716 = c__4319__auto___27714;
var G__27717 = cljs.core.count.call(null,c__4319__auto___27714);
var G__27718 = (0);
seq__27658_27698 = G__27715;
chunk__27659_27699 = G__27716;
count__27660_27700 = G__27717;
i__27661_27701 = G__27718;
continue;
} else {
var vec__27667_27719 = cljs.core.first.call(null,seq__27658_27713__$1);
var name_27720 = cljs.core.nth.call(null,vec__27667_27719,(0),null);
var map__27670_27721 = cljs.core.nth.call(null,vec__27667_27719,(1),null);
var map__27670_27722__$1 = ((((!((map__27670_27721 == null)))?(((((map__27670_27721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27670_27721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27670_27721):map__27670_27721);
var doc_27723 = cljs.core.get.call(null,map__27670_27722__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27724 = cljs.core.get.call(null,map__27670_27722__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27720);

cljs.core.println.call(null," ",arglists_27724);

if(cljs.core.truth_(doc_27723)){
cljs.core.println.call(null," ",doc_27723);
} else {
}


var G__27725 = cljs.core.next.call(null,seq__27658_27713__$1);
var G__27726 = null;
var G__27727 = (0);
var G__27728 = (0);
seq__27658_27698 = G__27725;
chunk__27659_27699 = G__27726;
count__27660_27700 = G__27727;
i__27661_27701 = G__27728;
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

var seq__27672 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27673 = null;
var count__27674 = (0);
var i__27675 = (0);
while(true){
if((i__27675 < count__27674)){
var role = cljs.core._nth.call(null,chunk__27673,i__27675);
var temp__4657__auto___27729__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___27729__$1)){
var spec_27730 = temp__4657__auto___27729__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27730));
} else {
}


var G__27731 = seq__27672;
var G__27732 = chunk__27673;
var G__27733 = count__27674;
var G__27734 = (i__27675 + (1));
seq__27672 = G__27731;
chunk__27673 = G__27732;
count__27674 = G__27733;
i__27675 = G__27734;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__27672);
if(temp__4657__auto____$1){
var seq__27672__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27672__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__27672__$1);
var G__27735 = cljs.core.chunk_rest.call(null,seq__27672__$1);
var G__27736 = c__4319__auto__;
var G__27737 = cljs.core.count.call(null,c__4319__auto__);
var G__27738 = (0);
seq__27672 = G__27735;
chunk__27673 = G__27736;
count__27674 = G__27737;
i__27675 = G__27738;
continue;
} else {
var role = cljs.core.first.call(null,seq__27672__$1);
var temp__4657__auto___27739__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___27739__$2)){
var spec_27740 = temp__4657__auto___27739__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27740));
} else {
}


var G__27741 = cljs.core.next.call(null,seq__27672__$1);
var G__27742 = null;
var G__27743 = (0);
var G__27744 = (0);
seq__27672 = G__27741;
chunk__27673 = G__27742;
count__27674 = G__27743;
i__27675 = G__27744;
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

//# sourceMappingURL=repl.js.map?rel=1534453590944
