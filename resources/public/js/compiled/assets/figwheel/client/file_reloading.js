// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26753_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26753_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26754 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26755 = null;
var count__26756 = (0);
var i__26757 = (0);
while(true){
if((i__26757 < count__26756)){
var n = cljs.core._nth.call(null,chunk__26755,i__26757);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26758 = seq__26754;
var G__26759 = chunk__26755;
var G__26760 = count__26756;
var G__26761 = (i__26757 + (1));
seq__26754 = G__26758;
chunk__26755 = G__26759;
count__26756 = G__26760;
i__26757 = G__26761;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26754);
if(temp__4657__auto__){
var seq__26754__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26754__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26754__$1);
var G__26762 = cljs.core.chunk_rest.call(null,seq__26754__$1);
var G__26763 = c__4319__auto__;
var G__26764 = cljs.core.count.call(null,c__4319__auto__);
var G__26765 = (0);
seq__26754 = G__26762;
chunk__26755 = G__26763;
count__26756 = G__26764;
i__26757 = G__26765;
continue;
} else {
var n = cljs.core.first.call(null,seq__26754__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26766 = cljs.core.next.call(null,seq__26754__$1);
var G__26767 = null;
var G__26768 = (0);
var G__26769 = (0);
seq__26754 = G__26766;
chunk__26755 = G__26767;
count__26756 = G__26768;
i__26757 = G__26769;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__26770){
var vec__26771 = p__26770;
var _ = cljs.core.nth.call(null,vec__26771,(0),null);
var v = cljs.core.nth.call(null,vec__26771,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__26774){
var vec__26775 = p__26774;
var k = cljs.core.nth.call(null,vec__26775,(0),null);
var v = cljs.core.nth.call(null,vec__26775,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26787_26795 = cljs.core.seq.call(null,deps);
var chunk__26788_26796 = null;
var count__26789_26797 = (0);
var i__26790_26798 = (0);
while(true){
if((i__26790_26798 < count__26789_26797)){
var dep_26799 = cljs.core._nth.call(null,chunk__26788_26796,i__26790_26798);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_26799;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26799));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26799,(depth + (1)),state);
} else {
}


var G__26800 = seq__26787_26795;
var G__26801 = chunk__26788_26796;
var G__26802 = count__26789_26797;
var G__26803 = (i__26790_26798 + (1));
seq__26787_26795 = G__26800;
chunk__26788_26796 = G__26801;
count__26789_26797 = G__26802;
i__26790_26798 = G__26803;
continue;
} else {
var temp__4657__auto___26804 = cljs.core.seq.call(null,seq__26787_26795);
if(temp__4657__auto___26804){
var seq__26787_26805__$1 = temp__4657__auto___26804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26787_26805__$1)){
var c__4319__auto___26806 = cljs.core.chunk_first.call(null,seq__26787_26805__$1);
var G__26807 = cljs.core.chunk_rest.call(null,seq__26787_26805__$1);
var G__26808 = c__4319__auto___26806;
var G__26809 = cljs.core.count.call(null,c__4319__auto___26806);
var G__26810 = (0);
seq__26787_26795 = G__26807;
chunk__26788_26796 = G__26808;
count__26789_26797 = G__26809;
i__26790_26798 = G__26810;
continue;
} else {
var dep_26811 = cljs.core.first.call(null,seq__26787_26805__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_26811;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26811));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26811,(depth + (1)),state);
} else {
}


var G__26812 = cljs.core.next.call(null,seq__26787_26805__$1);
var G__26813 = null;
var G__26814 = (0);
var G__26815 = (0);
seq__26787_26795 = G__26812;
chunk__26788_26796 = G__26813;
count__26789_26797 = G__26814;
i__26790_26798 = G__26815;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26791){
var vec__26792 = p__26791;
var seq__26793 = cljs.core.seq.call(null,vec__26792);
var first__26794 = cljs.core.first.call(null,seq__26793);
var seq__26793__$1 = cljs.core.next.call(null,seq__26793);
var x = first__26794;
var xs = seq__26793__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26792,seq__26793,first__26794,seq__26793__$1,x,xs,get_deps__$1){
return (function (p1__26778_SHARP_){
return clojure.set.difference.call(null,p1__26778_SHARP_,x);
});})(vec__26792,seq__26793,first__26794,seq__26793__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26816 = cljs.core.seq.call(null,provides);
var chunk__26817 = null;
var count__26818 = (0);
var i__26819 = (0);
while(true){
if((i__26819 < count__26818)){
var prov = cljs.core._nth.call(null,chunk__26817,i__26819);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26820_26828 = cljs.core.seq.call(null,requires);
var chunk__26821_26829 = null;
var count__26822_26830 = (0);
var i__26823_26831 = (0);
while(true){
if((i__26823_26831 < count__26822_26830)){
var req_26832 = cljs.core._nth.call(null,chunk__26821_26829,i__26823_26831);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26832,prov);


var G__26833 = seq__26820_26828;
var G__26834 = chunk__26821_26829;
var G__26835 = count__26822_26830;
var G__26836 = (i__26823_26831 + (1));
seq__26820_26828 = G__26833;
chunk__26821_26829 = G__26834;
count__26822_26830 = G__26835;
i__26823_26831 = G__26836;
continue;
} else {
var temp__4657__auto___26837 = cljs.core.seq.call(null,seq__26820_26828);
if(temp__4657__auto___26837){
var seq__26820_26838__$1 = temp__4657__auto___26837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26820_26838__$1)){
var c__4319__auto___26839 = cljs.core.chunk_first.call(null,seq__26820_26838__$1);
var G__26840 = cljs.core.chunk_rest.call(null,seq__26820_26838__$1);
var G__26841 = c__4319__auto___26839;
var G__26842 = cljs.core.count.call(null,c__4319__auto___26839);
var G__26843 = (0);
seq__26820_26828 = G__26840;
chunk__26821_26829 = G__26841;
count__26822_26830 = G__26842;
i__26823_26831 = G__26843;
continue;
} else {
var req_26844 = cljs.core.first.call(null,seq__26820_26838__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26844,prov);


var G__26845 = cljs.core.next.call(null,seq__26820_26838__$1);
var G__26846 = null;
var G__26847 = (0);
var G__26848 = (0);
seq__26820_26828 = G__26845;
chunk__26821_26829 = G__26846;
count__26822_26830 = G__26847;
i__26823_26831 = G__26848;
continue;
}
} else {
}
}
break;
}


var G__26849 = seq__26816;
var G__26850 = chunk__26817;
var G__26851 = count__26818;
var G__26852 = (i__26819 + (1));
seq__26816 = G__26849;
chunk__26817 = G__26850;
count__26818 = G__26851;
i__26819 = G__26852;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26816);
if(temp__4657__auto__){
var seq__26816__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26816__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26816__$1);
var G__26853 = cljs.core.chunk_rest.call(null,seq__26816__$1);
var G__26854 = c__4319__auto__;
var G__26855 = cljs.core.count.call(null,c__4319__auto__);
var G__26856 = (0);
seq__26816 = G__26853;
chunk__26817 = G__26854;
count__26818 = G__26855;
i__26819 = G__26856;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26816__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26824_26857 = cljs.core.seq.call(null,requires);
var chunk__26825_26858 = null;
var count__26826_26859 = (0);
var i__26827_26860 = (0);
while(true){
if((i__26827_26860 < count__26826_26859)){
var req_26861 = cljs.core._nth.call(null,chunk__26825_26858,i__26827_26860);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26861,prov);


var G__26862 = seq__26824_26857;
var G__26863 = chunk__26825_26858;
var G__26864 = count__26826_26859;
var G__26865 = (i__26827_26860 + (1));
seq__26824_26857 = G__26862;
chunk__26825_26858 = G__26863;
count__26826_26859 = G__26864;
i__26827_26860 = G__26865;
continue;
} else {
var temp__4657__auto___26866__$1 = cljs.core.seq.call(null,seq__26824_26857);
if(temp__4657__auto___26866__$1){
var seq__26824_26867__$1 = temp__4657__auto___26866__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26824_26867__$1)){
var c__4319__auto___26868 = cljs.core.chunk_first.call(null,seq__26824_26867__$1);
var G__26869 = cljs.core.chunk_rest.call(null,seq__26824_26867__$1);
var G__26870 = c__4319__auto___26868;
var G__26871 = cljs.core.count.call(null,c__4319__auto___26868);
var G__26872 = (0);
seq__26824_26857 = G__26869;
chunk__26825_26858 = G__26870;
count__26826_26859 = G__26871;
i__26827_26860 = G__26872;
continue;
} else {
var req_26873 = cljs.core.first.call(null,seq__26824_26867__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26873,prov);


var G__26874 = cljs.core.next.call(null,seq__26824_26867__$1);
var G__26875 = null;
var G__26876 = (0);
var G__26877 = (0);
seq__26824_26857 = G__26874;
chunk__26825_26858 = G__26875;
count__26826_26859 = G__26876;
i__26827_26860 = G__26877;
continue;
}
} else {
}
}
break;
}


var G__26878 = cljs.core.next.call(null,seq__26816__$1);
var G__26879 = null;
var G__26880 = (0);
var G__26881 = (0);
seq__26816 = G__26878;
chunk__26817 = G__26879;
count__26818 = G__26880;
i__26819 = G__26881;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26882_26886 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26883_26887 = null;
var count__26884_26888 = (0);
var i__26885_26889 = (0);
while(true){
if((i__26885_26889 < count__26884_26888)){
var ns_26890 = cljs.core._nth.call(null,chunk__26883_26887,i__26885_26889);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26890);


var G__26891 = seq__26882_26886;
var G__26892 = chunk__26883_26887;
var G__26893 = count__26884_26888;
var G__26894 = (i__26885_26889 + (1));
seq__26882_26886 = G__26891;
chunk__26883_26887 = G__26892;
count__26884_26888 = G__26893;
i__26885_26889 = G__26894;
continue;
} else {
var temp__4657__auto___26895 = cljs.core.seq.call(null,seq__26882_26886);
if(temp__4657__auto___26895){
var seq__26882_26896__$1 = temp__4657__auto___26895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26882_26896__$1)){
var c__4319__auto___26897 = cljs.core.chunk_first.call(null,seq__26882_26896__$1);
var G__26898 = cljs.core.chunk_rest.call(null,seq__26882_26896__$1);
var G__26899 = c__4319__auto___26897;
var G__26900 = cljs.core.count.call(null,c__4319__auto___26897);
var G__26901 = (0);
seq__26882_26886 = G__26898;
chunk__26883_26887 = G__26899;
count__26884_26888 = G__26900;
i__26885_26889 = G__26901;
continue;
} else {
var ns_26902 = cljs.core.first.call(null,seq__26882_26896__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26902);


var G__26903 = cljs.core.next.call(null,seq__26882_26896__$1);
var G__26904 = null;
var G__26905 = (0);
var G__26906 = (0);
seq__26882_26886 = G__26903;
chunk__26883_26887 = G__26904;
count__26884_26888 = G__26905;
i__26885_26889 = G__26906;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26907__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26907 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26908__i = 0, G__26908__a = new Array(arguments.length -  0);
while (G__26908__i < G__26908__a.length) {G__26908__a[G__26908__i] = arguments[G__26908__i + 0]; ++G__26908__i;}
  args = new cljs.core.IndexedSeq(G__26908__a,0,null);
} 
return G__26907__delegate.call(this,args);};
G__26907.cljs$lang$maxFixedArity = 0;
G__26907.cljs$lang$applyTo = (function (arglist__26909){
var args = cljs.core.seq(arglist__26909);
return G__26907__delegate(args);
});
G__26907.cljs$core$IFn$_invoke$arity$variadic = G__26907__delegate;
return G__26907;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__26910_SHARP_,p2__26911_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26910_SHARP_)].join('')),p2__26911_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__26912_SHARP_,p2__26913_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26912_SHARP_)].join(''),p2__26913_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__26914 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__26914.addCallback(((function (G__26914){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__26914))
);

G__26914.addErrback(((function (G__26914){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__26914))
);

return G__26914;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e26915){if((e26915 instanceof Error)){
var e = e26915;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26915;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26916){if((e26916 instanceof Error)){
var e = e26916;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26916;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26917 = cljs.core._EQ_;
var expr__26918 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26917.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26918))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__26917.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26918))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__26917.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__26918))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__26917,expr__26918){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26917,expr__26918))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26920,callback){
var map__26921 = p__26920;
var map__26921__$1 = ((((!((map__26921 == null)))?(((((map__26921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26921):map__26921);
var file_msg = map__26921__$1;
var request_url = cljs.core.get.call(null,map__26921__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__26921,map__26921__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26921,map__26921__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto__){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto__){
return (function (state_26959){
var state_val_26960 = (state_26959[(1)]);
if((state_val_26960 === (7))){
var inst_26955 = (state_26959[(2)]);
var state_26959__$1 = state_26959;
var statearr_26961_26987 = state_26959__$1;
(statearr_26961_26987[(2)] = inst_26955);

(statearr_26961_26987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (1))){
var state_26959__$1 = state_26959;
var statearr_26962_26988 = state_26959__$1;
(statearr_26962_26988[(2)] = null);

(statearr_26962_26988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (4))){
var inst_26925 = (state_26959[(7)]);
var inst_26925__$1 = (state_26959[(2)]);
var state_26959__$1 = (function (){var statearr_26963 = state_26959;
(statearr_26963[(7)] = inst_26925__$1);

return statearr_26963;
})();
if(cljs.core.truth_(inst_26925__$1)){
var statearr_26964_26989 = state_26959__$1;
(statearr_26964_26989[(1)] = (5));

} else {
var statearr_26965_26990 = state_26959__$1;
(statearr_26965_26990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (15))){
var inst_26940 = (state_26959[(8)]);
var inst_26938 = (state_26959[(9)]);
var inst_26942 = inst_26940.call(null,inst_26938);
var state_26959__$1 = state_26959;
var statearr_26966_26991 = state_26959__$1;
(statearr_26966_26991[(2)] = inst_26942);

(statearr_26966_26991[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (13))){
var inst_26949 = (state_26959[(2)]);
var state_26959__$1 = state_26959;
var statearr_26967_26992 = state_26959__$1;
(statearr_26967_26992[(2)] = inst_26949);

(statearr_26967_26992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (6))){
var state_26959__$1 = state_26959;
var statearr_26968_26993 = state_26959__$1;
(statearr_26968_26993[(2)] = null);

(statearr_26968_26993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (17))){
var inst_26946 = (state_26959[(2)]);
var state_26959__$1 = state_26959;
var statearr_26969_26994 = state_26959__$1;
(statearr_26969_26994[(2)] = inst_26946);

(statearr_26969_26994[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (3))){
var inst_26957 = (state_26959[(2)]);
var state_26959__$1 = state_26959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26959__$1,inst_26957);
} else {
if((state_val_26960 === (12))){
var state_26959__$1 = state_26959;
var statearr_26970_26995 = state_26959__$1;
(statearr_26970_26995[(2)] = null);

(statearr_26970_26995[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (2))){
var state_26959__$1 = state_26959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26959__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26960 === (11))){
var inst_26930 = (state_26959[(10)]);
var inst_26936 = figwheel.client.file_reloading.blocking_load.call(null,inst_26930);
var state_26959__$1 = state_26959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26959__$1,(14),inst_26936);
} else {
if((state_val_26960 === (9))){
var inst_26930 = (state_26959[(10)]);
var state_26959__$1 = state_26959;
if(cljs.core.truth_(inst_26930)){
var statearr_26971_26996 = state_26959__$1;
(statearr_26971_26996[(1)] = (11));

} else {
var statearr_26972_26997 = state_26959__$1;
(statearr_26972_26997[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (5))){
var inst_26931 = (state_26959[(11)]);
var inst_26925 = (state_26959[(7)]);
var inst_26930 = cljs.core.nth.call(null,inst_26925,(0),null);
var inst_26931__$1 = cljs.core.nth.call(null,inst_26925,(1),null);
var state_26959__$1 = (function (){var statearr_26973 = state_26959;
(statearr_26973[(11)] = inst_26931__$1);

(statearr_26973[(10)] = inst_26930);

return statearr_26973;
})();
if(cljs.core.truth_(inst_26931__$1)){
var statearr_26974_26998 = state_26959__$1;
(statearr_26974_26998[(1)] = (8));

} else {
var statearr_26975_26999 = state_26959__$1;
(statearr_26975_26999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (14))){
var inst_26940 = (state_26959[(8)]);
var inst_26930 = (state_26959[(10)]);
var inst_26938 = (state_26959[(2)]);
var inst_26939 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26940__$1 = cljs.core.get.call(null,inst_26939,inst_26930);
var state_26959__$1 = (function (){var statearr_26976 = state_26959;
(statearr_26976[(8)] = inst_26940__$1);

(statearr_26976[(9)] = inst_26938);

return statearr_26976;
})();
if(cljs.core.truth_(inst_26940__$1)){
var statearr_26977_27000 = state_26959__$1;
(statearr_26977_27000[(1)] = (15));

} else {
var statearr_26978_27001 = state_26959__$1;
(statearr_26978_27001[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (16))){
var inst_26938 = (state_26959[(9)]);
var inst_26944 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26938);
var state_26959__$1 = state_26959;
var statearr_26979_27002 = state_26959__$1;
(statearr_26979_27002[(2)] = inst_26944);

(statearr_26979_27002[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (10))){
var inst_26951 = (state_26959[(2)]);
var state_26959__$1 = (function (){var statearr_26980 = state_26959;
(statearr_26980[(12)] = inst_26951);

return statearr_26980;
})();
var statearr_26981_27003 = state_26959__$1;
(statearr_26981_27003[(2)] = null);

(statearr_26981_27003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26960 === (8))){
var inst_26931 = (state_26959[(11)]);
var inst_26933 = eval(inst_26931);
var state_26959__$1 = state_26959;
var statearr_26982_27004 = state_26959__$1;
(statearr_26982_27004[(2)] = inst_26933);

(statearr_26982_27004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22017__auto__))
;
return ((function (switch__21929__auto__,c__22017__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21930__auto__ = null;
var figwheel$client$file_reloading$state_machine__21930__auto____0 = (function (){
var statearr_26983 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26983[(0)] = figwheel$client$file_reloading$state_machine__21930__auto__);

(statearr_26983[(1)] = (1));

return statearr_26983;
});
var figwheel$client$file_reloading$state_machine__21930__auto____1 = (function (state_26959){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_26959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e26984){if((e26984 instanceof Object)){
var ex__21933__auto__ = e26984;
var statearr_26985_27005 = state_26959;
(statearr_26985_27005[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27006 = state_26959;
state_26959 = G__27006;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21930__auto__ = function(state_26959){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21930__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21930__auto____1.call(this,state_26959);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21930__auto____0;
figwheel$client$file_reloading$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21930__auto____1;
return figwheel$client$file_reloading$state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto__))
})();
var state__22019__auto__ = (function (){var statearr_26986 = f__22018__auto__.call(null);
(statearr_26986[(6)] = c__22017__auto__);

return statearr_26986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto__))
);

return c__22017__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27008 = arguments.length;
switch (G__27008) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27010,callback){
var map__27011 = p__27010;
var map__27011__$1 = ((((!((map__27011 == null)))?(((((map__27011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27011):map__27011);
var file_msg = map__27011__$1;
var namespace = cljs.core.get.call(null,map__27011__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27011,map__27011__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27011,map__27011__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27013){
var map__27014 = p__27013;
var map__27014__$1 = ((((!((map__27014 == null)))?(((((map__27014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27014):map__27014);
var file_msg = map__27014__$1;
var namespace = cljs.core.get.call(null,map__27014__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27016){
var map__27017 = p__27016;
var map__27017__$1 = ((((!((map__27017 == null)))?(((((map__27017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27017):map__27017);
var file_msg = map__27017__$1;
var namespace = cljs.core.get.call(null,map__27017__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27019,callback){
var map__27020 = p__27019;
var map__27020__$1 = ((((!((map__27020 == null)))?(((((map__27020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27020):map__27020);
var file_msg = map__27020__$1;
var request_url = cljs.core.get.call(null,map__27020__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27020__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22017__auto___27070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto___27070,out){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto___27070,out){
return (function (state_27055){
var state_val_27056 = (state_27055[(1)]);
if((state_val_27056 === (1))){
var inst_27029 = cljs.core.seq.call(null,files);
var inst_27030 = cljs.core.first.call(null,inst_27029);
var inst_27031 = cljs.core.next.call(null,inst_27029);
var inst_27032 = files;
var state_27055__$1 = (function (){var statearr_27057 = state_27055;
(statearr_27057[(7)] = inst_27032);

(statearr_27057[(8)] = inst_27030);

(statearr_27057[(9)] = inst_27031);

return statearr_27057;
})();
var statearr_27058_27071 = state_27055__$1;
(statearr_27058_27071[(2)] = null);

(statearr_27058_27071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27056 === (2))){
var inst_27032 = (state_27055[(7)]);
var inst_27038 = (state_27055[(10)]);
var inst_27037 = cljs.core.seq.call(null,inst_27032);
var inst_27038__$1 = cljs.core.first.call(null,inst_27037);
var inst_27039 = cljs.core.next.call(null,inst_27037);
var inst_27040 = (inst_27038__$1 == null);
var inst_27041 = cljs.core.not.call(null,inst_27040);
var state_27055__$1 = (function (){var statearr_27059 = state_27055;
(statearr_27059[(11)] = inst_27039);

(statearr_27059[(10)] = inst_27038__$1);

return statearr_27059;
})();
if(inst_27041){
var statearr_27060_27072 = state_27055__$1;
(statearr_27060_27072[(1)] = (4));

} else {
var statearr_27061_27073 = state_27055__$1;
(statearr_27061_27073[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27056 === (3))){
var inst_27053 = (state_27055[(2)]);
var state_27055__$1 = state_27055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27055__$1,inst_27053);
} else {
if((state_val_27056 === (4))){
var inst_27038 = (state_27055[(10)]);
var inst_27043 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27038);
var state_27055__$1 = state_27055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27055__$1,(7),inst_27043);
} else {
if((state_val_27056 === (5))){
var inst_27049 = cljs.core.async.close_BANG_.call(null,out);
var state_27055__$1 = state_27055;
var statearr_27062_27074 = state_27055__$1;
(statearr_27062_27074[(2)] = inst_27049);

(statearr_27062_27074[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27056 === (6))){
var inst_27051 = (state_27055[(2)]);
var state_27055__$1 = state_27055;
var statearr_27063_27075 = state_27055__$1;
(statearr_27063_27075[(2)] = inst_27051);

(statearr_27063_27075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27056 === (7))){
var inst_27039 = (state_27055[(11)]);
var inst_27045 = (state_27055[(2)]);
var inst_27046 = cljs.core.async.put_BANG_.call(null,out,inst_27045);
var inst_27032 = inst_27039;
var state_27055__$1 = (function (){var statearr_27064 = state_27055;
(statearr_27064[(7)] = inst_27032);

(statearr_27064[(12)] = inst_27046);

return statearr_27064;
})();
var statearr_27065_27076 = state_27055__$1;
(statearr_27065_27076[(2)] = null);

(statearr_27065_27076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__22017__auto___27070,out))
;
return ((function (switch__21929__auto__,c__22017__auto___27070,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21930__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21930__auto____0 = (function (){
var statearr_27066 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27066[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21930__auto__);

(statearr_27066[(1)] = (1));

return statearr_27066;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21930__auto____1 = (function (state_27055){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_27055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e27067){if((e27067 instanceof Object)){
var ex__21933__auto__ = e27067;
var statearr_27068_27077 = state_27055;
(statearr_27068_27077[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27078 = state_27055;
state_27055 = G__27078;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21930__auto__ = function(state_27055){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21930__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21930__auto____1.call(this,state_27055);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21930__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21930__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto___27070,out))
})();
var state__22019__auto__ = (function (){var statearr_27069 = f__22018__auto__.call(null);
(statearr_27069[(6)] = c__22017__auto___27070);

return statearr_27069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto___27070,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27079,opts){
var map__27080 = p__27079;
var map__27080__$1 = ((((!((map__27080 == null)))?(((((map__27080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27080):map__27080);
var eval_body = cljs.core.get.call(null,map__27080__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27080__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27082){var e = e27082;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27083_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27083_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27084){
var vec__27085 = p__27084;
var k = cljs.core.nth.call(null,vec__27085,(0),null);
var v = cljs.core.nth.call(null,vec__27085,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27088){
var vec__27089 = p__27088;
var k = cljs.core.nth.call(null,vec__27089,(0),null);
var v = cljs.core.nth.call(null,vec__27089,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27095,p__27096){
var map__27097 = p__27095;
var map__27097__$1 = ((((!((map__27097 == null)))?(((((map__27097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27097):map__27097);
var opts = map__27097__$1;
var before_jsload = cljs.core.get.call(null,map__27097__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27097__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27097__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27098 = p__27096;
var map__27098__$1 = ((((!((map__27098 == null)))?(((((map__27098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27098):map__27098);
var msg = map__27098__$1;
var files = cljs.core.get.call(null,map__27098__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27098__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27098__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27252){
var state_val_27253 = (state_27252[(1)]);
if((state_val_27253 === (7))){
var inst_27113 = (state_27252[(7)]);
var inst_27112 = (state_27252[(8)]);
var inst_27114 = (state_27252[(9)]);
var inst_27115 = (state_27252[(10)]);
var inst_27120 = cljs.core._nth.call(null,inst_27113,inst_27115);
var inst_27121 = figwheel.client.file_reloading.eval_body.call(null,inst_27120,opts);
var inst_27122 = (inst_27115 + (1));
var tmp27254 = inst_27113;
var tmp27255 = inst_27112;
var tmp27256 = inst_27114;
var inst_27112__$1 = tmp27255;
var inst_27113__$1 = tmp27254;
var inst_27114__$1 = tmp27256;
var inst_27115__$1 = inst_27122;
var state_27252__$1 = (function (){var statearr_27257 = state_27252;
(statearr_27257[(7)] = inst_27113__$1);

(statearr_27257[(11)] = inst_27121);

(statearr_27257[(8)] = inst_27112__$1);

(statearr_27257[(9)] = inst_27114__$1);

(statearr_27257[(10)] = inst_27115__$1);

return statearr_27257;
})();
var statearr_27258_27341 = state_27252__$1;
(statearr_27258_27341[(2)] = null);

(statearr_27258_27341[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (20))){
var inst_27155 = (state_27252[(12)]);
var inst_27163 = figwheel.client.file_reloading.sort_files.call(null,inst_27155);
var state_27252__$1 = state_27252;
var statearr_27259_27342 = state_27252__$1;
(statearr_27259_27342[(2)] = inst_27163);

(statearr_27259_27342[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (27))){
var state_27252__$1 = state_27252;
var statearr_27260_27343 = state_27252__$1;
(statearr_27260_27343[(2)] = null);

(statearr_27260_27343[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (1))){
var inst_27104 = (state_27252[(13)]);
var inst_27101 = before_jsload.call(null,files);
var inst_27102 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27103 = (function (){return ((function (inst_27104,inst_27101,inst_27102,state_val_27253,c__22017__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27092_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27092_SHARP_);
});
;})(inst_27104,inst_27101,inst_27102,state_val_27253,c__22017__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27104__$1 = cljs.core.filter.call(null,inst_27103,files);
var inst_27105 = cljs.core.not_empty.call(null,inst_27104__$1);
var state_27252__$1 = (function (){var statearr_27261 = state_27252;
(statearr_27261[(14)] = inst_27102);

(statearr_27261[(13)] = inst_27104__$1);

(statearr_27261[(15)] = inst_27101);

return statearr_27261;
})();
if(cljs.core.truth_(inst_27105)){
var statearr_27262_27344 = state_27252__$1;
(statearr_27262_27344[(1)] = (2));

} else {
var statearr_27263_27345 = state_27252__$1;
(statearr_27263_27345[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (24))){
var state_27252__$1 = state_27252;
var statearr_27264_27346 = state_27252__$1;
(statearr_27264_27346[(2)] = null);

(statearr_27264_27346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (39))){
var inst_27205 = (state_27252[(16)]);
var state_27252__$1 = state_27252;
var statearr_27265_27347 = state_27252__$1;
(statearr_27265_27347[(2)] = inst_27205);

(statearr_27265_27347[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (46))){
var inst_27247 = (state_27252[(2)]);
var state_27252__$1 = state_27252;
var statearr_27266_27348 = state_27252__$1;
(statearr_27266_27348[(2)] = inst_27247);

(statearr_27266_27348[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (4))){
var inst_27149 = (state_27252[(2)]);
var inst_27150 = cljs.core.List.EMPTY;
var inst_27151 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27150);
var inst_27152 = (function (){return ((function (inst_27149,inst_27150,inst_27151,state_val_27253,c__22017__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27093_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27093_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27093_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27093_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_27149,inst_27150,inst_27151,state_val_27253,c__22017__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27153 = cljs.core.filter.call(null,inst_27152,files);
var inst_27154 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27155 = cljs.core.concat.call(null,inst_27153,inst_27154);
var state_27252__$1 = (function (){var statearr_27267 = state_27252;
(statearr_27267[(17)] = inst_27151);

(statearr_27267[(12)] = inst_27155);

(statearr_27267[(18)] = inst_27149);

return statearr_27267;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27268_27349 = state_27252__$1;
(statearr_27268_27349[(1)] = (16));

} else {
var statearr_27269_27350 = state_27252__$1;
(statearr_27269_27350[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (15))){
var inst_27139 = (state_27252[(2)]);
var state_27252__$1 = state_27252;
var statearr_27270_27351 = state_27252__$1;
(statearr_27270_27351[(2)] = inst_27139);

(statearr_27270_27351[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (21))){
var inst_27165 = (state_27252[(19)]);
var inst_27165__$1 = (state_27252[(2)]);
var inst_27166 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27165__$1);
var state_27252__$1 = (function (){var statearr_27271 = state_27252;
(statearr_27271[(19)] = inst_27165__$1);

return statearr_27271;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27252__$1,(22),inst_27166);
} else {
if((state_val_27253 === (31))){
var inst_27250 = (state_27252[(2)]);
var state_27252__$1 = state_27252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27252__$1,inst_27250);
} else {
if((state_val_27253 === (32))){
var inst_27205 = (state_27252[(16)]);
var inst_27210 = inst_27205.cljs$lang$protocol_mask$partition0$;
var inst_27211 = (inst_27210 & (64));
var inst_27212 = inst_27205.cljs$core$ISeq$;
var inst_27213 = (cljs.core.PROTOCOL_SENTINEL === inst_27212);
var inst_27214 = ((inst_27211) || (inst_27213));
var state_27252__$1 = state_27252;
if(cljs.core.truth_(inst_27214)){
var statearr_27272_27352 = state_27252__$1;
(statearr_27272_27352[(1)] = (35));

} else {
var statearr_27273_27353 = state_27252__$1;
(statearr_27273_27353[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (40))){
var inst_27227 = (state_27252[(20)]);
var inst_27226 = (state_27252[(2)]);
var inst_27227__$1 = cljs.core.get.call(null,inst_27226,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27228 = cljs.core.get.call(null,inst_27226,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27229 = cljs.core.not_empty.call(null,inst_27227__$1);
var state_27252__$1 = (function (){var statearr_27274 = state_27252;
(statearr_27274[(20)] = inst_27227__$1);

(statearr_27274[(21)] = inst_27228);

return statearr_27274;
})();
if(cljs.core.truth_(inst_27229)){
var statearr_27275_27354 = state_27252__$1;
(statearr_27275_27354[(1)] = (41));

} else {
var statearr_27276_27355 = state_27252__$1;
(statearr_27276_27355[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (33))){
var state_27252__$1 = state_27252;
var statearr_27277_27356 = state_27252__$1;
(statearr_27277_27356[(2)] = false);

(statearr_27277_27356[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (13))){
var inst_27125 = (state_27252[(22)]);
var inst_27129 = cljs.core.chunk_first.call(null,inst_27125);
var inst_27130 = cljs.core.chunk_rest.call(null,inst_27125);
var inst_27131 = cljs.core.count.call(null,inst_27129);
var inst_27112 = inst_27130;
var inst_27113 = inst_27129;
var inst_27114 = inst_27131;
var inst_27115 = (0);
var state_27252__$1 = (function (){var statearr_27278 = state_27252;
(statearr_27278[(7)] = inst_27113);

(statearr_27278[(8)] = inst_27112);

(statearr_27278[(9)] = inst_27114);

(statearr_27278[(10)] = inst_27115);

return statearr_27278;
})();
var statearr_27279_27357 = state_27252__$1;
(statearr_27279_27357[(2)] = null);

(statearr_27279_27357[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (22))){
var inst_27173 = (state_27252[(23)]);
var inst_27168 = (state_27252[(24)]);
var inst_27169 = (state_27252[(25)]);
var inst_27165 = (state_27252[(19)]);
var inst_27168__$1 = (state_27252[(2)]);
var inst_27169__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27168__$1);
var inst_27170 = (function (){var all_files = inst_27165;
var res_SINGLEQUOTE_ = inst_27168__$1;
var res = inst_27169__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27173,inst_27168,inst_27169,inst_27165,inst_27168__$1,inst_27169__$1,state_val_27253,c__22017__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27094_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27094_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27173,inst_27168,inst_27169,inst_27165,inst_27168__$1,inst_27169__$1,state_val_27253,c__22017__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27171 = cljs.core.filter.call(null,inst_27170,inst_27168__$1);
var inst_27172 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27173__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27172);
var inst_27174 = cljs.core.not_empty.call(null,inst_27173__$1);
var state_27252__$1 = (function (){var statearr_27280 = state_27252;
(statearr_27280[(23)] = inst_27173__$1);

(statearr_27280[(24)] = inst_27168__$1);

(statearr_27280[(26)] = inst_27171);

(statearr_27280[(25)] = inst_27169__$1);

return statearr_27280;
})();
if(cljs.core.truth_(inst_27174)){
var statearr_27281_27358 = state_27252__$1;
(statearr_27281_27358[(1)] = (23));

} else {
var statearr_27282_27359 = state_27252__$1;
(statearr_27282_27359[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (36))){
var state_27252__$1 = state_27252;
var statearr_27283_27360 = state_27252__$1;
(statearr_27283_27360[(2)] = false);

(statearr_27283_27360[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (41))){
var inst_27227 = (state_27252[(20)]);
var inst_27231 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27232 = cljs.core.map.call(null,inst_27231,inst_27227);
var inst_27233 = cljs.core.pr_str.call(null,inst_27232);
var inst_27234 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27233)].join('');
var inst_27235 = figwheel.client.utils.log.call(null,inst_27234);
var state_27252__$1 = state_27252;
var statearr_27284_27361 = state_27252__$1;
(statearr_27284_27361[(2)] = inst_27235);

(statearr_27284_27361[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (43))){
var inst_27228 = (state_27252[(21)]);
var inst_27238 = (state_27252[(2)]);
var inst_27239 = cljs.core.not_empty.call(null,inst_27228);
var state_27252__$1 = (function (){var statearr_27285 = state_27252;
(statearr_27285[(27)] = inst_27238);

return statearr_27285;
})();
if(cljs.core.truth_(inst_27239)){
var statearr_27286_27362 = state_27252__$1;
(statearr_27286_27362[(1)] = (44));

} else {
var statearr_27287_27363 = state_27252__$1;
(statearr_27287_27363[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (29))){
var inst_27173 = (state_27252[(23)]);
var inst_27168 = (state_27252[(24)]);
var inst_27171 = (state_27252[(26)]);
var inst_27169 = (state_27252[(25)]);
var inst_27165 = (state_27252[(19)]);
var inst_27205 = (state_27252[(16)]);
var inst_27201 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27204 = (function (){var all_files = inst_27165;
var res_SINGLEQUOTE_ = inst_27168;
var res = inst_27169;
var files_not_loaded = inst_27171;
var dependencies_that_loaded = inst_27173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27173,inst_27168,inst_27171,inst_27169,inst_27165,inst_27205,inst_27201,state_val_27253,c__22017__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27203){
var map__27288 = p__27203;
var map__27288__$1 = ((((!((map__27288 == null)))?(((((map__27288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27288):map__27288);
var namespace = cljs.core.get.call(null,map__27288__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27173,inst_27168,inst_27171,inst_27169,inst_27165,inst_27205,inst_27201,state_val_27253,c__22017__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27205__$1 = cljs.core.group_by.call(null,inst_27204,inst_27171);
var inst_27207 = (inst_27205__$1 == null);
var inst_27208 = cljs.core.not.call(null,inst_27207);
var state_27252__$1 = (function (){var statearr_27290 = state_27252;
(statearr_27290[(28)] = inst_27201);

(statearr_27290[(16)] = inst_27205__$1);

return statearr_27290;
})();
if(inst_27208){
var statearr_27291_27364 = state_27252__$1;
(statearr_27291_27364[(1)] = (32));

} else {
var statearr_27292_27365 = state_27252__$1;
(statearr_27292_27365[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (44))){
var inst_27228 = (state_27252[(21)]);
var inst_27241 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27228);
var inst_27242 = cljs.core.pr_str.call(null,inst_27241);
var inst_27243 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27242)].join('');
var inst_27244 = figwheel.client.utils.log.call(null,inst_27243);
var state_27252__$1 = state_27252;
var statearr_27293_27366 = state_27252__$1;
(statearr_27293_27366[(2)] = inst_27244);

(statearr_27293_27366[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (6))){
var inst_27146 = (state_27252[(2)]);
var state_27252__$1 = state_27252;
var statearr_27294_27367 = state_27252__$1;
(statearr_27294_27367[(2)] = inst_27146);

(statearr_27294_27367[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (28))){
var inst_27171 = (state_27252[(26)]);
var inst_27198 = (state_27252[(2)]);
var inst_27199 = cljs.core.not_empty.call(null,inst_27171);
var state_27252__$1 = (function (){var statearr_27295 = state_27252;
(statearr_27295[(29)] = inst_27198);

return statearr_27295;
})();
if(cljs.core.truth_(inst_27199)){
var statearr_27296_27368 = state_27252__$1;
(statearr_27296_27368[(1)] = (29));

} else {
var statearr_27297_27369 = state_27252__$1;
(statearr_27297_27369[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (25))){
var inst_27169 = (state_27252[(25)]);
var inst_27185 = (state_27252[(2)]);
var inst_27186 = cljs.core.not_empty.call(null,inst_27169);
var state_27252__$1 = (function (){var statearr_27298 = state_27252;
(statearr_27298[(30)] = inst_27185);

return statearr_27298;
})();
if(cljs.core.truth_(inst_27186)){
var statearr_27299_27370 = state_27252__$1;
(statearr_27299_27370[(1)] = (26));

} else {
var statearr_27300_27371 = state_27252__$1;
(statearr_27300_27371[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (34))){
var inst_27221 = (state_27252[(2)]);
var state_27252__$1 = state_27252;
if(cljs.core.truth_(inst_27221)){
var statearr_27301_27372 = state_27252__$1;
(statearr_27301_27372[(1)] = (38));

} else {
var statearr_27302_27373 = state_27252__$1;
(statearr_27302_27373[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (17))){
var state_27252__$1 = state_27252;
var statearr_27303_27374 = state_27252__$1;
(statearr_27303_27374[(2)] = recompile_dependents);

(statearr_27303_27374[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (3))){
var state_27252__$1 = state_27252;
var statearr_27304_27375 = state_27252__$1;
(statearr_27304_27375[(2)] = null);

(statearr_27304_27375[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (12))){
var inst_27142 = (state_27252[(2)]);
var state_27252__$1 = state_27252;
var statearr_27305_27376 = state_27252__$1;
(statearr_27305_27376[(2)] = inst_27142);

(statearr_27305_27376[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (2))){
var inst_27104 = (state_27252[(13)]);
var inst_27111 = cljs.core.seq.call(null,inst_27104);
var inst_27112 = inst_27111;
var inst_27113 = null;
var inst_27114 = (0);
var inst_27115 = (0);
var state_27252__$1 = (function (){var statearr_27306 = state_27252;
(statearr_27306[(7)] = inst_27113);

(statearr_27306[(8)] = inst_27112);

(statearr_27306[(9)] = inst_27114);

(statearr_27306[(10)] = inst_27115);

return statearr_27306;
})();
var statearr_27307_27377 = state_27252__$1;
(statearr_27307_27377[(2)] = null);

(statearr_27307_27377[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (23))){
var inst_27173 = (state_27252[(23)]);
var inst_27168 = (state_27252[(24)]);
var inst_27171 = (state_27252[(26)]);
var inst_27169 = (state_27252[(25)]);
var inst_27165 = (state_27252[(19)]);
var inst_27176 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27178 = (function (){var all_files = inst_27165;
var res_SINGLEQUOTE_ = inst_27168;
var res = inst_27169;
var files_not_loaded = inst_27171;
var dependencies_that_loaded = inst_27173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27173,inst_27168,inst_27171,inst_27169,inst_27165,inst_27176,state_val_27253,c__22017__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27177){
var map__27308 = p__27177;
var map__27308__$1 = ((((!((map__27308 == null)))?(((((map__27308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27308):map__27308);
var request_url = cljs.core.get.call(null,map__27308__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27173,inst_27168,inst_27171,inst_27169,inst_27165,inst_27176,state_val_27253,c__22017__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27179 = cljs.core.reverse.call(null,inst_27173);
var inst_27180 = cljs.core.map.call(null,inst_27178,inst_27179);
var inst_27181 = cljs.core.pr_str.call(null,inst_27180);
var inst_27182 = figwheel.client.utils.log.call(null,inst_27181);
var state_27252__$1 = (function (){var statearr_27310 = state_27252;
(statearr_27310[(31)] = inst_27176);

return statearr_27310;
})();
var statearr_27311_27378 = state_27252__$1;
(statearr_27311_27378[(2)] = inst_27182);

(statearr_27311_27378[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (35))){
var state_27252__$1 = state_27252;
var statearr_27312_27379 = state_27252__$1;
(statearr_27312_27379[(2)] = true);

(statearr_27312_27379[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (19))){
var inst_27155 = (state_27252[(12)]);
var inst_27161 = figwheel.client.file_reloading.expand_files.call(null,inst_27155);
var state_27252__$1 = state_27252;
var statearr_27313_27380 = state_27252__$1;
(statearr_27313_27380[(2)] = inst_27161);

(statearr_27313_27380[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (11))){
var state_27252__$1 = state_27252;
var statearr_27314_27381 = state_27252__$1;
(statearr_27314_27381[(2)] = null);

(statearr_27314_27381[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (9))){
var inst_27144 = (state_27252[(2)]);
var state_27252__$1 = state_27252;
var statearr_27315_27382 = state_27252__$1;
(statearr_27315_27382[(2)] = inst_27144);

(statearr_27315_27382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (5))){
var inst_27114 = (state_27252[(9)]);
var inst_27115 = (state_27252[(10)]);
var inst_27117 = (inst_27115 < inst_27114);
var inst_27118 = inst_27117;
var state_27252__$1 = state_27252;
if(cljs.core.truth_(inst_27118)){
var statearr_27316_27383 = state_27252__$1;
(statearr_27316_27383[(1)] = (7));

} else {
var statearr_27317_27384 = state_27252__$1;
(statearr_27317_27384[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (14))){
var inst_27125 = (state_27252[(22)]);
var inst_27134 = cljs.core.first.call(null,inst_27125);
var inst_27135 = figwheel.client.file_reloading.eval_body.call(null,inst_27134,opts);
var inst_27136 = cljs.core.next.call(null,inst_27125);
var inst_27112 = inst_27136;
var inst_27113 = null;
var inst_27114 = (0);
var inst_27115 = (0);
var state_27252__$1 = (function (){var statearr_27318 = state_27252;
(statearr_27318[(7)] = inst_27113);

(statearr_27318[(8)] = inst_27112);

(statearr_27318[(9)] = inst_27114);

(statearr_27318[(10)] = inst_27115);

(statearr_27318[(32)] = inst_27135);

return statearr_27318;
})();
var statearr_27319_27385 = state_27252__$1;
(statearr_27319_27385[(2)] = null);

(statearr_27319_27385[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (45))){
var state_27252__$1 = state_27252;
var statearr_27320_27386 = state_27252__$1;
(statearr_27320_27386[(2)] = null);

(statearr_27320_27386[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (26))){
var inst_27173 = (state_27252[(23)]);
var inst_27168 = (state_27252[(24)]);
var inst_27171 = (state_27252[(26)]);
var inst_27169 = (state_27252[(25)]);
var inst_27165 = (state_27252[(19)]);
var inst_27188 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27190 = (function (){var all_files = inst_27165;
var res_SINGLEQUOTE_ = inst_27168;
var res = inst_27169;
var files_not_loaded = inst_27171;
var dependencies_that_loaded = inst_27173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27173,inst_27168,inst_27171,inst_27169,inst_27165,inst_27188,state_val_27253,c__22017__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27189){
var map__27321 = p__27189;
var map__27321__$1 = ((((!((map__27321 == null)))?(((((map__27321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27321):map__27321);
var namespace = cljs.core.get.call(null,map__27321__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27321__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27173,inst_27168,inst_27171,inst_27169,inst_27165,inst_27188,state_val_27253,c__22017__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27191 = cljs.core.map.call(null,inst_27190,inst_27169);
var inst_27192 = cljs.core.pr_str.call(null,inst_27191);
var inst_27193 = figwheel.client.utils.log.call(null,inst_27192);
var inst_27194 = (function (){var all_files = inst_27165;
var res_SINGLEQUOTE_ = inst_27168;
var res = inst_27169;
var files_not_loaded = inst_27171;
var dependencies_that_loaded = inst_27173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27173,inst_27168,inst_27171,inst_27169,inst_27165,inst_27188,inst_27190,inst_27191,inst_27192,inst_27193,state_val_27253,c__22017__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27173,inst_27168,inst_27171,inst_27169,inst_27165,inst_27188,inst_27190,inst_27191,inst_27192,inst_27193,state_val_27253,c__22017__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27195 = setTimeout(inst_27194,(10));
var state_27252__$1 = (function (){var statearr_27323 = state_27252;
(statearr_27323[(33)] = inst_27193);

(statearr_27323[(34)] = inst_27188);

return statearr_27323;
})();
var statearr_27324_27387 = state_27252__$1;
(statearr_27324_27387[(2)] = inst_27195);

(statearr_27324_27387[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (16))){
var state_27252__$1 = state_27252;
var statearr_27325_27388 = state_27252__$1;
(statearr_27325_27388[(2)] = reload_dependents);

(statearr_27325_27388[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (38))){
var inst_27205 = (state_27252[(16)]);
var inst_27223 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27205);
var state_27252__$1 = state_27252;
var statearr_27326_27389 = state_27252__$1;
(statearr_27326_27389[(2)] = inst_27223);

(statearr_27326_27389[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (30))){
var state_27252__$1 = state_27252;
var statearr_27327_27390 = state_27252__$1;
(statearr_27327_27390[(2)] = null);

(statearr_27327_27390[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (10))){
var inst_27125 = (state_27252[(22)]);
var inst_27127 = cljs.core.chunked_seq_QMARK_.call(null,inst_27125);
var state_27252__$1 = state_27252;
if(inst_27127){
var statearr_27328_27391 = state_27252__$1;
(statearr_27328_27391[(1)] = (13));

} else {
var statearr_27329_27392 = state_27252__$1;
(statearr_27329_27392[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (18))){
var inst_27159 = (state_27252[(2)]);
var state_27252__$1 = state_27252;
if(cljs.core.truth_(inst_27159)){
var statearr_27330_27393 = state_27252__$1;
(statearr_27330_27393[(1)] = (19));

} else {
var statearr_27331_27394 = state_27252__$1;
(statearr_27331_27394[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (42))){
var state_27252__$1 = state_27252;
var statearr_27332_27395 = state_27252__$1;
(statearr_27332_27395[(2)] = null);

(statearr_27332_27395[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (37))){
var inst_27218 = (state_27252[(2)]);
var state_27252__$1 = state_27252;
var statearr_27333_27396 = state_27252__$1;
(statearr_27333_27396[(2)] = inst_27218);

(statearr_27333_27396[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27253 === (8))){
var inst_27125 = (state_27252[(22)]);
var inst_27112 = (state_27252[(8)]);
var inst_27125__$1 = cljs.core.seq.call(null,inst_27112);
var state_27252__$1 = (function (){var statearr_27334 = state_27252;
(statearr_27334[(22)] = inst_27125__$1);

return statearr_27334;
})();
if(inst_27125__$1){
var statearr_27335_27397 = state_27252__$1;
(statearr_27335_27397[(1)] = (10));

} else {
var statearr_27336_27398 = state_27252__$1;
(statearr_27336_27398[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22017__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21929__auto__,c__22017__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21930__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21930__auto____0 = (function (){
var statearr_27337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27337[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21930__auto__);

(statearr_27337[(1)] = (1));

return statearr_27337;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21930__auto____1 = (function (state_27252){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_27252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e27338){if((e27338 instanceof Object)){
var ex__21933__auto__ = e27338;
var statearr_27339_27399 = state_27252;
(statearr_27339_27399[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27400 = state_27252;
state_27252 = G__27400;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21930__auto__ = function(state_27252){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21930__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21930__auto____1.call(this,state_27252);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21930__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21930__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22019__auto__ = (function (){var statearr_27340 = f__22018__auto__.call(null);
(statearr_27340[(6)] = c__22017__auto__);

return statearr_27340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto__,map__27097,map__27097__$1,opts,before_jsload,on_jsload,reload_dependents,map__27098,map__27098__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22017__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27403,link){
var map__27404 = p__27403;
var map__27404__$1 = ((((!((map__27404 == null)))?(((((map__27404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27404):map__27404);
var file = cljs.core.get.call(null,map__27404__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__27404,map__27404__$1,file){
return (function (p1__27401_SHARP_,p2__27402_SHARP_){
if(cljs.core._EQ_.call(null,p1__27401_SHARP_,p2__27402_SHARP_)){
return p1__27401_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__27404,map__27404__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27407){
var map__27408 = p__27407;
var map__27408__$1 = ((((!((map__27408 == null)))?(((((map__27408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27408):map__27408);
var match_length = cljs.core.get.call(null,map__27408__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27408__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27406_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27406_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27410_SHARP_,p2__27411_SHARP_){
return cljs.core.assoc.call(null,p1__27410_SHARP_,cljs.core.get.call(null,p2__27411_SHARP_,key),p2__27411_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_27412 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27412);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27412);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27413,p__27414){
var map__27415 = p__27413;
var map__27415__$1 = ((((!((map__27415 == null)))?(((((map__27415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27415):map__27415);
var on_cssload = cljs.core.get.call(null,map__27415__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27416 = p__27414;
var map__27416__$1 = ((((!((map__27416 == null)))?(((((map__27416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27416):map__27416);
var files_msg = map__27416__$1;
var files = cljs.core.get.call(null,map__27416__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1530166200542
