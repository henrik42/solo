// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
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

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return ["goog/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22669_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22669_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
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
var seq__22670 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22671 = null;
var count__22672 = (0);
var i__22673 = (0);
while(true){
if((i__22673 < count__22672)){
var n = cljs.core._nth.call(null,chunk__22671,i__22673);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__22674 = seq__22670;
var G__22675 = chunk__22671;
var G__22676 = count__22672;
var G__22677 = (i__22673 + (1));
seq__22670 = G__22674;
chunk__22671 = G__22675;
count__22672 = G__22676;
i__22673 = G__22677;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22670);
if(temp__4657__auto__){
var seq__22670__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22670__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__22670__$1);
var G__22678 = cljs.core.chunk_rest.call(null,seq__22670__$1);
var G__22679 = c__4319__auto__;
var G__22680 = cljs.core.count.call(null,c__4319__auto__);
var G__22681 = (0);
seq__22670 = G__22678;
chunk__22671 = G__22679;
count__22672 = G__22680;
i__22673 = G__22681;
continue;
} else {
var n = cljs.core.first.call(null,seq__22670__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__22682 = cljs.core.next.call(null,seq__22670__$1);
var G__22683 = null;
var G__22684 = (0);
var G__22685 = (0);
seq__22670 = G__22682;
chunk__22671 = G__22683;
count__22672 = G__22684;
i__22673 = G__22685;
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

var seq__22695_22703 = cljs.core.seq.call(null,deps);
var chunk__22696_22704 = null;
var count__22697_22705 = (0);
var i__22698_22706 = (0);
while(true){
if((i__22698_22706 < count__22697_22705)){
var dep_22707 = cljs.core._nth.call(null,chunk__22696_22704,i__22698_22706);
topo_sort_helper_STAR_.call(null,dep_22707,(depth + (1)),state);


var G__22708 = seq__22695_22703;
var G__22709 = chunk__22696_22704;
var G__22710 = count__22697_22705;
var G__22711 = (i__22698_22706 + (1));
seq__22695_22703 = G__22708;
chunk__22696_22704 = G__22709;
count__22697_22705 = G__22710;
i__22698_22706 = G__22711;
continue;
} else {
var temp__4657__auto___22712 = cljs.core.seq.call(null,seq__22695_22703);
if(temp__4657__auto___22712){
var seq__22695_22713__$1 = temp__4657__auto___22712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22695_22713__$1)){
var c__4319__auto___22714 = cljs.core.chunk_first.call(null,seq__22695_22713__$1);
var G__22715 = cljs.core.chunk_rest.call(null,seq__22695_22713__$1);
var G__22716 = c__4319__auto___22714;
var G__22717 = cljs.core.count.call(null,c__4319__auto___22714);
var G__22718 = (0);
seq__22695_22703 = G__22715;
chunk__22696_22704 = G__22716;
count__22697_22705 = G__22717;
i__22698_22706 = G__22718;
continue;
} else {
var dep_22719 = cljs.core.first.call(null,seq__22695_22713__$1);
topo_sort_helper_STAR_.call(null,dep_22719,(depth + (1)),state);


var G__22720 = cljs.core.next.call(null,seq__22695_22713__$1);
var G__22721 = null;
var G__22722 = (0);
var G__22723 = (0);
seq__22695_22703 = G__22720;
chunk__22696_22704 = G__22721;
count__22697_22705 = G__22722;
i__22698_22706 = G__22723;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22699){
var vec__22700 = p__22699;
var seq__22701 = cljs.core.seq.call(null,vec__22700);
var first__22702 = cljs.core.first.call(null,seq__22701);
var seq__22701__$1 = cljs.core.next.call(null,seq__22701);
var x = first__22702;
var xs = seq__22701__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22700,seq__22701,first__22702,seq__22701__$1,x,xs,get_deps__$1){
return (function (p1__22686_SHARP_){
return clojure.set.difference.call(null,p1__22686_SHARP_,x);
});})(vec__22700,seq__22701,first__22702,seq__22701__$1,x,xs,get_deps__$1))
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
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
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
var seq__22724 = cljs.core.seq.call(null,provides);
var chunk__22725 = null;
var count__22726 = (0);
var i__22727 = (0);
while(true){
if((i__22727 < count__22726)){
var prov = cljs.core._nth.call(null,chunk__22725,i__22727);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22728_22736 = cljs.core.seq.call(null,requires);
var chunk__22729_22737 = null;
var count__22730_22738 = (0);
var i__22731_22739 = (0);
while(true){
if((i__22731_22739 < count__22730_22738)){
var req_22740 = cljs.core._nth.call(null,chunk__22729_22737,i__22731_22739);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22740,prov);


var G__22741 = seq__22728_22736;
var G__22742 = chunk__22729_22737;
var G__22743 = count__22730_22738;
var G__22744 = (i__22731_22739 + (1));
seq__22728_22736 = G__22741;
chunk__22729_22737 = G__22742;
count__22730_22738 = G__22743;
i__22731_22739 = G__22744;
continue;
} else {
var temp__4657__auto___22745 = cljs.core.seq.call(null,seq__22728_22736);
if(temp__4657__auto___22745){
var seq__22728_22746__$1 = temp__4657__auto___22745;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22728_22746__$1)){
var c__4319__auto___22747 = cljs.core.chunk_first.call(null,seq__22728_22746__$1);
var G__22748 = cljs.core.chunk_rest.call(null,seq__22728_22746__$1);
var G__22749 = c__4319__auto___22747;
var G__22750 = cljs.core.count.call(null,c__4319__auto___22747);
var G__22751 = (0);
seq__22728_22736 = G__22748;
chunk__22729_22737 = G__22749;
count__22730_22738 = G__22750;
i__22731_22739 = G__22751;
continue;
} else {
var req_22752 = cljs.core.first.call(null,seq__22728_22746__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22752,prov);


var G__22753 = cljs.core.next.call(null,seq__22728_22746__$1);
var G__22754 = null;
var G__22755 = (0);
var G__22756 = (0);
seq__22728_22736 = G__22753;
chunk__22729_22737 = G__22754;
count__22730_22738 = G__22755;
i__22731_22739 = G__22756;
continue;
}
} else {
}
}
break;
}


var G__22757 = seq__22724;
var G__22758 = chunk__22725;
var G__22759 = count__22726;
var G__22760 = (i__22727 + (1));
seq__22724 = G__22757;
chunk__22725 = G__22758;
count__22726 = G__22759;
i__22727 = G__22760;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22724);
if(temp__4657__auto__){
var seq__22724__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22724__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__22724__$1);
var G__22761 = cljs.core.chunk_rest.call(null,seq__22724__$1);
var G__22762 = c__4319__auto__;
var G__22763 = cljs.core.count.call(null,c__4319__auto__);
var G__22764 = (0);
seq__22724 = G__22761;
chunk__22725 = G__22762;
count__22726 = G__22763;
i__22727 = G__22764;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22724__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22732_22765 = cljs.core.seq.call(null,requires);
var chunk__22733_22766 = null;
var count__22734_22767 = (0);
var i__22735_22768 = (0);
while(true){
if((i__22735_22768 < count__22734_22767)){
var req_22769 = cljs.core._nth.call(null,chunk__22733_22766,i__22735_22768);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22769,prov);


var G__22770 = seq__22732_22765;
var G__22771 = chunk__22733_22766;
var G__22772 = count__22734_22767;
var G__22773 = (i__22735_22768 + (1));
seq__22732_22765 = G__22770;
chunk__22733_22766 = G__22771;
count__22734_22767 = G__22772;
i__22735_22768 = G__22773;
continue;
} else {
var temp__4657__auto___22774__$1 = cljs.core.seq.call(null,seq__22732_22765);
if(temp__4657__auto___22774__$1){
var seq__22732_22775__$1 = temp__4657__auto___22774__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22732_22775__$1)){
var c__4319__auto___22776 = cljs.core.chunk_first.call(null,seq__22732_22775__$1);
var G__22777 = cljs.core.chunk_rest.call(null,seq__22732_22775__$1);
var G__22778 = c__4319__auto___22776;
var G__22779 = cljs.core.count.call(null,c__4319__auto___22776);
var G__22780 = (0);
seq__22732_22765 = G__22777;
chunk__22733_22766 = G__22778;
count__22734_22767 = G__22779;
i__22735_22768 = G__22780;
continue;
} else {
var req_22781 = cljs.core.first.call(null,seq__22732_22775__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22781,prov);


var G__22782 = cljs.core.next.call(null,seq__22732_22775__$1);
var G__22783 = null;
var G__22784 = (0);
var G__22785 = (0);
seq__22732_22765 = G__22782;
chunk__22733_22766 = G__22783;
count__22734_22767 = G__22784;
i__22735_22768 = G__22785;
continue;
}
} else {
}
}
break;
}


var G__22786 = cljs.core.next.call(null,seq__22724__$1);
var G__22787 = null;
var G__22788 = (0);
var G__22789 = (0);
seq__22724 = G__22786;
chunk__22725 = G__22787;
count__22726 = G__22788;
i__22727 = G__22789;
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
var seq__22790_22794 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22791_22795 = null;
var count__22792_22796 = (0);
var i__22793_22797 = (0);
while(true){
if((i__22793_22797 < count__22792_22796)){
var ns_22798 = cljs.core._nth.call(null,chunk__22791_22795,i__22793_22797);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22798);


var G__22799 = seq__22790_22794;
var G__22800 = chunk__22791_22795;
var G__22801 = count__22792_22796;
var G__22802 = (i__22793_22797 + (1));
seq__22790_22794 = G__22799;
chunk__22791_22795 = G__22800;
count__22792_22796 = G__22801;
i__22793_22797 = G__22802;
continue;
} else {
var temp__4657__auto___22803 = cljs.core.seq.call(null,seq__22790_22794);
if(temp__4657__auto___22803){
var seq__22790_22804__$1 = temp__4657__auto___22803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22790_22804__$1)){
var c__4319__auto___22805 = cljs.core.chunk_first.call(null,seq__22790_22804__$1);
var G__22806 = cljs.core.chunk_rest.call(null,seq__22790_22804__$1);
var G__22807 = c__4319__auto___22805;
var G__22808 = cljs.core.count.call(null,c__4319__auto___22805);
var G__22809 = (0);
seq__22790_22794 = G__22806;
chunk__22791_22795 = G__22807;
count__22792_22796 = G__22808;
i__22793_22797 = G__22809;
continue;
} else {
var ns_22810 = cljs.core.first.call(null,seq__22790_22804__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22810);


var G__22811 = cljs.core.next.call(null,seq__22790_22804__$1);
var G__22812 = null;
var G__22813 = (0);
var G__22814 = (0);
seq__22790_22794 = G__22811;
chunk__22791_22795 = G__22812;
count__22792_22796 = G__22813;
i__22793_22797 = G__22814;
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
var G__22815__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22815 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22816__i = 0, G__22816__a = new Array(arguments.length -  0);
while (G__22816__i < G__22816__a.length) {G__22816__a[G__22816__i] = arguments[G__22816__i + 0]; ++G__22816__i;}
  args = new cljs.core.IndexedSeq(G__22816__a,0,null);
} 
return G__22815__delegate.call(this,args);};
G__22815.cljs$lang$maxFixedArity = 0;
G__22815.cljs$lang$applyTo = (function (arglist__22817){
var args = cljs.core.seq(arglist__22817);
return G__22815__delegate(args);
});
G__22815.cljs$core$IFn$_invoke$arity$variadic = G__22815__delegate;
return G__22815;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22819 = cljs.core._EQ_;
var expr__22820 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22819.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22820))){
var path_parts = ((function (pred__22819,expr__22820){
return (function (p1__22818_SHARP_){
return clojure.string.split.call(null,p1__22818_SHARP_,/[\/\\]/);
});})(pred__22819,expr__22820))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22819,expr__22820){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22822){if((e22822 instanceof Error)){
var e = e22822;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22822;

}
}})());
});
;})(path_parts,sep,root,pred__22819,expr__22820))
} else {
if(cljs.core.truth_(pred__22819.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22820))){
return ((function (pred__22819,expr__22820){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__22819,expr__22820){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22819,expr__22820))
);

return deferred.addErrback(((function (deferred,pred__22819,expr__22820){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22819,expr__22820))
);
});
;})(pred__22819,expr__22820))
} else {
return ((function (pred__22819,expr__22820){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22819,expr__22820))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22823,callback){
var map__22824 = p__22823;
var map__22824__$1 = ((((!((map__22824 == null)))?(((((map__22824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22824):map__22824);
var file_msg = map__22824__$1;
var request_url = cljs.core.get.call(null,map__22824__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22824,map__22824__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22824,map__22824__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__21924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21924__auto__){
return (function (){
var f__21925__auto__ = (function (){var switch__21903__auto__ = ((function (c__21924__auto__){
return (function (state_22848){
var state_val_22849 = (state_22848[(1)]);
if((state_val_22849 === (7))){
var inst_22844 = (state_22848[(2)]);
var state_22848__$1 = state_22848;
var statearr_22850_22867 = state_22848__$1;
(statearr_22850_22867[(2)] = inst_22844);

(statearr_22850_22867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (1))){
var state_22848__$1 = state_22848;
var statearr_22851_22868 = state_22848__$1;
(statearr_22851_22868[(2)] = null);

(statearr_22851_22868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (4))){
var inst_22828 = (state_22848[(7)]);
var inst_22828__$1 = (state_22848[(2)]);
var state_22848__$1 = (function (){var statearr_22852 = state_22848;
(statearr_22852[(7)] = inst_22828__$1);

return statearr_22852;
})();
if(cljs.core.truth_(inst_22828__$1)){
var statearr_22853_22869 = state_22848__$1;
(statearr_22853_22869[(1)] = (5));

} else {
var statearr_22854_22870 = state_22848__$1;
(statearr_22854_22870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (6))){
var state_22848__$1 = state_22848;
var statearr_22855_22871 = state_22848__$1;
(statearr_22855_22871[(2)] = null);

(statearr_22855_22871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (3))){
var inst_22846 = (state_22848[(2)]);
var state_22848__$1 = state_22848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22848__$1,inst_22846);
} else {
if((state_val_22849 === (2))){
var state_22848__$1 = state_22848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22848__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22849 === (11))){
var inst_22840 = (state_22848[(2)]);
var state_22848__$1 = (function (){var statearr_22856 = state_22848;
(statearr_22856[(8)] = inst_22840);

return statearr_22856;
})();
var statearr_22857_22872 = state_22848__$1;
(statearr_22857_22872[(2)] = null);

(statearr_22857_22872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (9))){
var inst_22832 = (state_22848[(9)]);
var inst_22834 = (state_22848[(10)]);
var inst_22836 = inst_22834.call(null,inst_22832);
var state_22848__$1 = state_22848;
var statearr_22858_22873 = state_22848__$1;
(statearr_22858_22873[(2)] = inst_22836);

(statearr_22858_22873[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (5))){
var inst_22828 = (state_22848[(7)]);
var inst_22830 = figwheel.client.file_reloading.blocking_load.call(null,inst_22828);
var state_22848__$1 = state_22848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22848__$1,(8),inst_22830);
} else {
if((state_val_22849 === (10))){
var inst_22832 = (state_22848[(9)]);
var inst_22838 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22832);
var state_22848__$1 = state_22848;
var statearr_22859_22874 = state_22848__$1;
(statearr_22859_22874[(2)] = inst_22838);

(statearr_22859_22874[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (8))){
var inst_22828 = (state_22848[(7)]);
var inst_22834 = (state_22848[(10)]);
var inst_22832 = (state_22848[(2)]);
var inst_22833 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22834__$1 = cljs.core.get.call(null,inst_22833,inst_22828);
var state_22848__$1 = (function (){var statearr_22860 = state_22848;
(statearr_22860[(9)] = inst_22832);

(statearr_22860[(10)] = inst_22834__$1);

return statearr_22860;
})();
if(cljs.core.truth_(inst_22834__$1)){
var statearr_22861_22875 = state_22848__$1;
(statearr_22861_22875[(1)] = (9));

} else {
var statearr_22862_22876 = state_22848__$1;
(statearr_22862_22876[(1)] = (10));

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
});})(c__21924__auto__))
;
return ((function (switch__21903__auto__,c__21924__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21904__auto__ = null;
var figwheel$client$file_reloading$state_machine__21904__auto____0 = (function (){
var statearr_22863 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22863[(0)] = figwheel$client$file_reloading$state_machine__21904__auto__);

(statearr_22863[(1)] = (1));

return statearr_22863;
});
var figwheel$client$file_reloading$state_machine__21904__auto____1 = (function (state_22848){
while(true){
var ret_value__21905__auto__ = (function (){try{while(true){
var result__21906__auto__ = switch__21903__auto__.call(null,state_22848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21906__auto__;
}
break;
}
}catch (e22864){if((e22864 instanceof Object)){
var ex__21907__auto__ = e22864;
var statearr_22865_22877 = state_22848;
(statearr_22865_22877[(5)] = ex__21907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22878 = state_22848;
state_22848 = G__22878;
continue;
} else {
return ret_value__21905__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21904__auto__ = function(state_22848){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21904__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21904__auto____1.call(this,state_22848);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__21904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21904__auto____0;
figwheel$client$file_reloading$state_machine__21904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21904__auto____1;
return figwheel$client$file_reloading$state_machine__21904__auto__;
})()
;})(switch__21903__auto__,c__21924__auto__))
})();
var state__21926__auto__ = (function (){var statearr_22866 = f__21925__auto__.call(null);
(statearr_22866[(6)] = c__21924__auto__);

return statearr_22866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21926__auto__);
});})(c__21924__auto__))
);

return c__21924__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22879,callback){
var map__22880 = p__22879;
var map__22880__$1 = ((((!((map__22880 == null)))?(((((map__22880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22880):map__22880);
var file_msg = map__22880__$1;
var namespace = cljs.core.get.call(null,map__22880__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22880,map__22880__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22880,map__22880__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22882){
var map__22883 = p__22882;
var map__22883__$1 = ((((!((map__22883 == null)))?(((((map__22883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22883):map__22883);
var file_msg = map__22883__$1;
var namespace = cljs.core.get.call(null,map__22883__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22885,callback){
var map__22886 = p__22885;
var map__22886__$1 = ((((!((map__22886 == null)))?(((((map__22886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22886):map__22886);
var file_msg = map__22886__$1;
var request_url = cljs.core.get.call(null,map__22886__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22886__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__21924__auto___22936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21924__auto___22936,out){
return (function (){
var f__21925__auto__ = (function (){var switch__21903__auto__ = ((function (c__21924__auto___22936,out){
return (function (state_22921){
var state_val_22922 = (state_22921[(1)]);
if((state_val_22922 === (1))){
var inst_22895 = cljs.core.seq.call(null,files);
var inst_22896 = cljs.core.first.call(null,inst_22895);
var inst_22897 = cljs.core.next.call(null,inst_22895);
var inst_22898 = files;
var state_22921__$1 = (function (){var statearr_22923 = state_22921;
(statearr_22923[(7)] = inst_22896);

(statearr_22923[(8)] = inst_22897);

(statearr_22923[(9)] = inst_22898);

return statearr_22923;
})();
var statearr_22924_22937 = state_22921__$1;
(statearr_22924_22937[(2)] = null);

(statearr_22924_22937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22922 === (2))){
var inst_22904 = (state_22921[(10)]);
var inst_22898 = (state_22921[(9)]);
var inst_22903 = cljs.core.seq.call(null,inst_22898);
var inst_22904__$1 = cljs.core.first.call(null,inst_22903);
var inst_22905 = cljs.core.next.call(null,inst_22903);
var inst_22906 = (inst_22904__$1 == null);
var inst_22907 = cljs.core.not.call(null,inst_22906);
var state_22921__$1 = (function (){var statearr_22925 = state_22921;
(statearr_22925[(11)] = inst_22905);

(statearr_22925[(10)] = inst_22904__$1);

return statearr_22925;
})();
if(inst_22907){
var statearr_22926_22938 = state_22921__$1;
(statearr_22926_22938[(1)] = (4));

} else {
var statearr_22927_22939 = state_22921__$1;
(statearr_22927_22939[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22922 === (3))){
var inst_22919 = (state_22921[(2)]);
var state_22921__$1 = state_22921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22921__$1,inst_22919);
} else {
if((state_val_22922 === (4))){
var inst_22904 = (state_22921[(10)]);
var inst_22909 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22904);
var state_22921__$1 = state_22921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22921__$1,(7),inst_22909);
} else {
if((state_val_22922 === (5))){
var inst_22915 = cljs.core.async.close_BANG_.call(null,out);
var state_22921__$1 = state_22921;
var statearr_22928_22940 = state_22921__$1;
(statearr_22928_22940[(2)] = inst_22915);

(statearr_22928_22940[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22922 === (6))){
var inst_22917 = (state_22921[(2)]);
var state_22921__$1 = state_22921;
var statearr_22929_22941 = state_22921__$1;
(statearr_22929_22941[(2)] = inst_22917);

(statearr_22929_22941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22922 === (7))){
var inst_22905 = (state_22921[(11)]);
var inst_22911 = (state_22921[(2)]);
var inst_22912 = cljs.core.async.put_BANG_.call(null,out,inst_22911);
var inst_22898 = inst_22905;
var state_22921__$1 = (function (){var statearr_22930 = state_22921;
(statearr_22930[(12)] = inst_22912);

(statearr_22930[(9)] = inst_22898);

return statearr_22930;
})();
var statearr_22931_22942 = state_22921__$1;
(statearr_22931_22942[(2)] = null);

(statearr_22931_22942[(1)] = (2));


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
});})(c__21924__auto___22936,out))
;
return ((function (switch__21903__auto__,c__21924__auto___22936,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21904__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21904__auto____0 = (function (){
var statearr_22932 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22932[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21904__auto__);

(statearr_22932[(1)] = (1));

return statearr_22932;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21904__auto____1 = (function (state_22921){
while(true){
var ret_value__21905__auto__ = (function (){try{while(true){
var result__21906__auto__ = switch__21903__auto__.call(null,state_22921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21906__auto__;
}
break;
}
}catch (e22933){if((e22933 instanceof Object)){
var ex__21907__auto__ = e22933;
var statearr_22934_22943 = state_22921;
(statearr_22934_22943[(5)] = ex__21907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22944 = state_22921;
state_22921 = G__22944;
continue;
} else {
return ret_value__21905__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21904__auto__ = function(state_22921){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21904__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21904__auto____1.call(this,state_22921);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21904__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21904__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21904__auto__;
})()
;})(switch__21903__auto__,c__21924__auto___22936,out))
})();
var state__21926__auto__ = (function (){var statearr_22935 = f__21925__auto__.call(null);
(statearr_22935[(6)] = c__21924__auto___22936);

return statearr_22935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21926__auto__);
});})(c__21924__auto___22936,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22945,opts){
var map__22946 = p__22945;
var map__22946__$1 = ((((!((map__22946 == null)))?(((((map__22946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22946):map__22946);
var eval_body = cljs.core.get.call(null,map__22946__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22946__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e22948){var e = e22948;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22949_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22949_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__22950){
var vec__22951 = p__22950;
var k = cljs.core.nth.call(null,vec__22951,(0),null);
var v = cljs.core.nth.call(null,vec__22951,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22954){
var vec__22955 = p__22954;
var k = cljs.core.nth.call(null,vec__22955,(0),null);
var v = cljs.core.nth.call(null,vec__22955,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22961,p__22962){
var map__22963 = p__22961;
var map__22963__$1 = ((((!((map__22963 == null)))?(((((map__22963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22963):map__22963);
var opts = map__22963__$1;
var before_jsload = cljs.core.get.call(null,map__22963__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22963__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__22963__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__22964 = p__22962;
var map__22964__$1 = ((((!((map__22964 == null)))?(((((map__22964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22964):map__22964);
var msg = map__22964__$1;
var files = cljs.core.get.call(null,map__22964__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__22964__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__22964__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21924__auto__,map__22963,map__22963__$1,opts,before_jsload,on_jsload,reload_dependents,map__22964,map__22964__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21925__auto__ = (function (){var switch__21903__auto__ = ((function (c__21924__auto__,map__22963,map__22963__$1,opts,before_jsload,on_jsload,reload_dependents,map__22964,map__22964__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23118){
var state_val_23119 = (state_23118[(1)]);
if((state_val_23119 === (7))){
var inst_22981 = (state_23118[(7)]);
var inst_22980 = (state_23118[(8)]);
var inst_22978 = (state_23118[(9)]);
var inst_22979 = (state_23118[(10)]);
var inst_22986 = cljs.core._nth.call(null,inst_22979,inst_22981);
var inst_22987 = figwheel.client.file_reloading.eval_body.call(null,inst_22986,opts);
var inst_22988 = (inst_22981 + (1));
var tmp23120 = inst_22980;
var tmp23121 = inst_22978;
var tmp23122 = inst_22979;
var inst_22978__$1 = tmp23121;
var inst_22979__$1 = tmp23122;
var inst_22980__$1 = tmp23120;
var inst_22981__$1 = inst_22988;
var state_23118__$1 = (function (){var statearr_23123 = state_23118;
(statearr_23123[(7)] = inst_22981__$1);

(statearr_23123[(8)] = inst_22980__$1);

(statearr_23123[(11)] = inst_22987);

(statearr_23123[(9)] = inst_22978__$1);

(statearr_23123[(10)] = inst_22979__$1);

return statearr_23123;
})();
var statearr_23124_23207 = state_23118__$1;
(statearr_23124_23207[(2)] = null);

(statearr_23124_23207[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (20))){
var inst_23021 = (state_23118[(12)]);
var inst_23029 = figwheel.client.file_reloading.sort_files.call(null,inst_23021);
var state_23118__$1 = state_23118;
var statearr_23125_23208 = state_23118__$1;
(statearr_23125_23208[(2)] = inst_23029);

(statearr_23125_23208[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (27))){
var state_23118__$1 = state_23118;
var statearr_23126_23209 = state_23118__$1;
(statearr_23126_23209[(2)] = null);

(statearr_23126_23209[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (1))){
var inst_22970 = (state_23118[(13)]);
var inst_22967 = before_jsload.call(null,files);
var inst_22968 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22969 = (function (){return ((function (inst_22970,inst_22967,inst_22968,state_val_23119,c__21924__auto__,map__22963,map__22963__$1,opts,before_jsload,on_jsload,reload_dependents,map__22964,map__22964__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22958_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22958_SHARP_);
});
;})(inst_22970,inst_22967,inst_22968,state_val_23119,c__21924__auto__,map__22963,map__22963__$1,opts,before_jsload,on_jsload,reload_dependents,map__22964,map__22964__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22970__$1 = cljs.core.filter.call(null,inst_22969,files);
var inst_22971 = cljs.core.not_empty.call(null,inst_22970__$1);
var state_23118__$1 = (function (){var statearr_23127 = state_23118;
(statearr_23127[(13)] = inst_22970__$1);

(statearr_23127[(14)] = inst_22968);

(statearr_23127[(15)] = inst_22967);

return statearr_23127;
})();
if(cljs.core.truth_(inst_22971)){
var statearr_23128_23210 = state_23118__$1;
(statearr_23128_23210[(1)] = (2));

} else {
var statearr_23129_23211 = state_23118__$1;
(statearr_23129_23211[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (24))){
var state_23118__$1 = state_23118;
var statearr_23130_23212 = state_23118__$1;
(statearr_23130_23212[(2)] = null);

(statearr_23130_23212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (39))){
var inst_23071 = (state_23118[(16)]);
var state_23118__$1 = state_23118;
var statearr_23131_23213 = state_23118__$1;
(statearr_23131_23213[(2)] = inst_23071);

(statearr_23131_23213[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (46))){
var inst_23113 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
var statearr_23132_23214 = state_23118__$1;
(statearr_23132_23214[(2)] = inst_23113);

(statearr_23132_23214[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (4))){
var inst_23015 = (state_23118[(2)]);
var inst_23016 = cljs.core.List.EMPTY;
var inst_23017 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23016);
var inst_23018 = (function (){return ((function (inst_23015,inst_23016,inst_23017,state_val_23119,c__21924__auto__,map__22963,map__22963__$1,opts,before_jsload,on_jsload,reload_dependents,map__22964,map__22964__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22959_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22959_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22959_SHARP_));
} else {
return and__3911__auto__;
}
});
;})(inst_23015,inst_23016,inst_23017,state_val_23119,c__21924__auto__,map__22963,map__22963__$1,opts,before_jsload,on_jsload,reload_dependents,map__22964,map__22964__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23019 = cljs.core.filter.call(null,inst_23018,files);
var inst_23020 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23021 = cljs.core.concat.call(null,inst_23019,inst_23020);
var state_23118__$1 = (function (){var statearr_23133 = state_23118;
(statearr_23133[(17)] = inst_23017);

(statearr_23133[(18)] = inst_23015);

(statearr_23133[(12)] = inst_23021);

return statearr_23133;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23134_23215 = state_23118__$1;
(statearr_23134_23215[(1)] = (16));

} else {
var statearr_23135_23216 = state_23118__$1;
(statearr_23135_23216[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (15))){
var inst_23005 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
var statearr_23136_23217 = state_23118__$1;
(statearr_23136_23217[(2)] = inst_23005);

(statearr_23136_23217[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (21))){
var inst_23031 = (state_23118[(19)]);
var inst_23031__$1 = (state_23118[(2)]);
var inst_23032 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23031__$1);
var state_23118__$1 = (function (){var statearr_23137 = state_23118;
(statearr_23137[(19)] = inst_23031__$1);

return statearr_23137;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23118__$1,(22),inst_23032);
} else {
if((state_val_23119 === (31))){
var inst_23116 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23118__$1,inst_23116);
} else {
if((state_val_23119 === (32))){
var inst_23071 = (state_23118[(16)]);
var inst_23076 = inst_23071.cljs$lang$protocol_mask$partition0$;
var inst_23077 = (inst_23076 & (64));
var inst_23078 = inst_23071.cljs$core$ISeq$;
var inst_23079 = (cljs.core.PROTOCOL_SENTINEL === inst_23078);
var inst_23080 = ((inst_23077) || (inst_23079));
var state_23118__$1 = state_23118;
if(cljs.core.truth_(inst_23080)){
var statearr_23138_23218 = state_23118__$1;
(statearr_23138_23218[(1)] = (35));

} else {
var statearr_23139_23219 = state_23118__$1;
(statearr_23139_23219[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (40))){
var inst_23093 = (state_23118[(20)]);
var inst_23092 = (state_23118[(2)]);
var inst_23093__$1 = cljs.core.get.call(null,inst_23092,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23094 = cljs.core.get.call(null,inst_23092,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23095 = cljs.core.not_empty.call(null,inst_23093__$1);
var state_23118__$1 = (function (){var statearr_23140 = state_23118;
(statearr_23140[(21)] = inst_23094);

(statearr_23140[(20)] = inst_23093__$1);

return statearr_23140;
})();
if(cljs.core.truth_(inst_23095)){
var statearr_23141_23220 = state_23118__$1;
(statearr_23141_23220[(1)] = (41));

} else {
var statearr_23142_23221 = state_23118__$1;
(statearr_23142_23221[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (33))){
var state_23118__$1 = state_23118;
var statearr_23143_23222 = state_23118__$1;
(statearr_23143_23222[(2)] = false);

(statearr_23143_23222[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (13))){
var inst_22991 = (state_23118[(22)]);
var inst_22995 = cljs.core.chunk_first.call(null,inst_22991);
var inst_22996 = cljs.core.chunk_rest.call(null,inst_22991);
var inst_22997 = cljs.core.count.call(null,inst_22995);
var inst_22978 = inst_22996;
var inst_22979 = inst_22995;
var inst_22980 = inst_22997;
var inst_22981 = (0);
var state_23118__$1 = (function (){var statearr_23144 = state_23118;
(statearr_23144[(7)] = inst_22981);

(statearr_23144[(8)] = inst_22980);

(statearr_23144[(9)] = inst_22978);

(statearr_23144[(10)] = inst_22979);

return statearr_23144;
})();
var statearr_23145_23223 = state_23118__$1;
(statearr_23145_23223[(2)] = null);

(statearr_23145_23223[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (22))){
var inst_23034 = (state_23118[(23)]);
var inst_23035 = (state_23118[(24)]);
var inst_23039 = (state_23118[(25)]);
var inst_23031 = (state_23118[(19)]);
var inst_23034__$1 = (state_23118[(2)]);
var inst_23035__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23034__$1);
var inst_23036 = (function (){var all_files = inst_23031;
var res_SINGLEQUOTE_ = inst_23034__$1;
var res = inst_23035__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23034,inst_23035,inst_23039,inst_23031,inst_23034__$1,inst_23035__$1,state_val_23119,c__21924__auto__,map__22963,map__22963__$1,opts,before_jsload,on_jsload,reload_dependents,map__22964,map__22964__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22960_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22960_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23034,inst_23035,inst_23039,inst_23031,inst_23034__$1,inst_23035__$1,state_val_23119,c__21924__auto__,map__22963,map__22963__$1,opts,before_jsload,on_jsload,reload_dependents,map__22964,map__22964__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23037 = cljs.core.filter.call(null,inst_23036,inst_23034__$1);
var inst_23038 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23039__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23038);
var inst_23040 = cljs.core.not_empty.call(null,inst_23039__$1);
var state_23118__$1 = (function (){var statearr_23146 = state_23118;
(statearr_23146[(23)] = inst_23034__$1);

(statearr_23146[(24)] = inst_23035__$1);

(statearr_23146[(26)] = inst_23037);

(statearr_23146[(25)] = inst_23039__$1);

return statearr_23146;
})();
if(cljs.core.truth_(inst_23040)){
var statearr_23147_23224 = state_23118__$1;
(statearr_23147_23224[(1)] = (23));

} else {
var statearr_23148_23225 = state_23118__$1;
(statearr_23148_23225[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (36))){
var state_23118__$1 = state_23118;
var statearr_23149_23226 = state_23118__$1;
(statearr_23149_23226[(2)] = false);

(statearr_23149_23226[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (41))){
var inst_23093 = (state_23118[(20)]);
var inst_23097 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23098 = cljs.core.map.call(null,inst_23097,inst_23093);
var inst_23099 = cljs.core.pr_str.call(null,inst_23098);
var inst_23100 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23099)].join('');
var inst_23101 = figwheel.client.utils.log.call(null,inst_23100);
var state_23118__$1 = state_23118;
var statearr_23150_23227 = state_23118__$1;
(statearr_23150_23227[(2)] = inst_23101);

(statearr_23150_23227[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (43))){
var inst_23094 = (state_23118[(21)]);
var inst_23104 = (state_23118[(2)]);
var inst_23105 = cljs.core.not_empty.call(null,inst_23094);
var state_23118__$1 = (function (){var statearr_23151 = state_23118;
(statearr_23151[(27)] = inst_23104);

return statearr_23151;
})();
if(cljs.core.truth_(inst_23105)){
var statearr_23152_23228 = state_23118__$1;
(statearr_23152_23228[(1)] = (44));

} else {
var statearr_23153_23229 = state_23118__$1;
(statearr_23153_23229[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (29))){
var inst_23034 = (state_23118[(23)]);
var inst_23035 = (state_23118[(24)]);
var inst_23037 = (state_23118[(26)]);
var inst_23071 = (state_23118[(16)]);
var inst_23039 = (state_23118[(25)]);
var inst_23031 = (state_23118[(19)]);
var inst_23067 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23070 = (function (){var all_files = inst_23031;
var res_SINGLEQUOTE_ = inst_23034;
var res = inst_23035;
var files_not_loaded = inst_23037;
var dependencies_that_loaded = inst_23039;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23034,inst_23035,inst_23037,inst_23071,inst_23039,inst_23031,inst_23067,state_val_23119,c__21924__auto__,map__22963,map__22963__$1,opts,before_jsload,on_jsload,reload_dependents,map__22964,map__22964__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23069){
var map__23154 = p__23069;
var map__23154__$1 = ((((!((map__23154 == null)))?(((((map__23154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23154):map__23154);
var namespace = cljs.core.get.call(null,map__23154__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23034,inst_23035,inst_23037,inst_23071,inst_23039,inst_23031,inst_23067,state_val_23119,c__21924__auto__,map__22963,map__22963__$1,opts,before_jsload,on_jsload,reload_dependents,map__22964,map__22964__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23071__$1 = cljs.core.group_by.call(null,inst_23070,inst_23037);
var inst_23073 = (inst_23071__$1 == null);
var inst_23074 = cljs.core.not.call(null,inst_23073);
var state_23118__$1 = (function (){var statearr_23156 = state_23118;
(statearr_23156[(28)] = inst_23067);

(statearr_23156[(16)] = inst_23071__$1);

return statearr_23156;
})();
if(inst_23074){
var statearr_23157_23230 = state_23118__$1;
(statearr_23157_23230[(1)] = (32));

} else {
var statearr_23158_23231 = state_23118__$1;
(statearr_23158_23231[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (44))){
var inst_23094 = (state_23118[(21)]);
var inst_23107 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23094);
var inst_23108 = cljs.core.pr_str.call(null,inst_23107);
var inst_23109 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23108)].join('');
var inst_23110 = figwheel.client.utils.log.call(null,inst_23109);
var state_23118__$1 = state_23118;
var statearr_23159_23232 = state_23118__$1;
(statearr_23159_23232[(2)] = inst_23110);

(statearr_23159_23232[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (6))){
var inst_23012 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
var statearr_23160_23233 = state_23118__$1;
(statearr_23160_23233[(2)] = inst_23012);

(statearr_23160_23233[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (28))){
var inst_23037 = (state_23118[(26)]);
var inst_23064 = (state_23118[(2)]);
var inst_23065 = cljs.core.not_empty.call(null,inst_23037);
var state_23118__$1 = (function (){var statearr_23161 = state_23118;
(statearr_23161[(29)] = inst_23064);

return statearr_23161;
})();
if(cljs.core.truth_(inst_23065)){
var statearr_23162_23234 = state_23118__$1;
(statearr_23162_23234[(1)] = (29));

} else {
var statearr_23163_23235 = state_23118__$1;
(statearr_23163_23235[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (25))){
var inst_23035 = (state_23118[(24)]);
var inst_23051 = (state_23118[(2)]);
var inst_23052 = cljs.core.not_empty.call(null,inst_23035);
var state_23118__$1 = (function (){var statearr_23164 = state_23118;
(statearr_23164[(30)] = inst_23051);

return statearr_23164;
})();
if(cljs.core.truth_(inst_23052)){
var statearr_23165_23236 = state_23118__$1;
(statearr_23165_23236[(1)] = (26));

} else {
var statearr_23166_23237 = state_23118__$1;
(statearr_23166_23237[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (34))){
var inst_23087 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
if(cljs.core.truth_(inst_23087)){
var statearr_23167_23238 = state_23118__$1;
(statearr_23167_23238[(1)] = (38));

} else {
var statearr_23168_23239 = state_23118__$1;
(statearr_23168_23239[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (17))){
var state_23118__$1 = state_23118;
var statearr_23169_23240 = state_23118__$1;
(statearr_23169_23240[(2)] = recompile_dependents);

(statearr_23169_23240[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (3))){
var state_23118__$1 = state_23118;
var statearr_23170_23241 = state_23118__$1;
(statearr_23170_23241[(2)] = null);

(statearr_23170_23241[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (12))){
var inst_23008 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
var statearr_23171_23242 = state_23118__$1;
(statearr_23171_23242[(2)] = inst_23008);

(statearr_23171_23242[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (2))){
var inst_22970 = (state_23118[(13)]);
var inst_22977 = cljs.core.seq.call(null,inst_22970);
var inst_22978 = inst_22977;
var inst_22979 = null;
var inst_22980 = (0);
var inst_22981 = (0);
var state_23118__$1 = (function (){var statearr_23172 = state_23118;
(statearr_23172[(7)] = inst_22981);

(statearr_23172[(8)] = inst_22980);

(statearr_23172[(9)] = inst_22978);

(statearr_23172[(10)] = inst_22979);

return statearr_23172;
})();
var statearr_23173_23243 = state_23118__$1;
(statearr_23173_23243[(2)] = null);

(statearr_23173_23243[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (23))){
var inst_23034 = (state_23118[(23)]);
var inst_23035 = (state_23118[(24)]);
var inst_23037 = (state_23118[(26)]);
var inst_23039 = (state_23118[(25)]);
var inst_23031 = (state_23118[(19)]);
var inst_23042 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23044 = (function (){var all_files = inst_23031;
var res_SINGLEQUOTE_ = inst_23034;
var res = inst_23035;
var files_not_loaded = inst_23037;
var dependencies_that_loaded = inst_23039;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23034,inst_23035,inst_23037,inst_23039,inst_23031,inst_23042,state_val_23119,c__21924__auto__,map__22963,map__22963__$1,opts,before_jsload,on_jsload,reload_dependents,map__22964,map__22964__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23043){
var map__23174 = p__23043;
var map__23174__$1 = ((((!((map__23174 == null)))?(((((map__23174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23174):map__23174);
var request_url = cljs.core.get.call(null,map__23174__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23034,inst_23035,inst_23037,inst_23039,inst_23031,inst_23042,state_val_23119,c__21924__auto__,map__22963,map__22963__$1,opts,before_jsload,on_jsload,reload_dependents,map__22964,map__22964__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23045 = cljs.core.reverse.call(null,inst_23039);
var inst_23046 = cljs.core.map.call(null,inst_23044,inst_23045);
var inst_23047 = cljs.core.pr_str.call(null,inst_23046);
var inst_23048 = figwheel.client.utils.log.call(null,inst_23047);
var state_23118__$1 = (function (){var statearr_23176 = state_23118;
(statearr_23176[(31)] = inst_23042);

return statearr_23176;
})();
var statearr_23177_23244 = state_23118__$1;
(statearr_23177_23244[(2)] = inst_23048);

(statearr_23177_23244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (35))){
var state_23118__$1 = state_23118;
var statearr_23178_23245 = state_23118__$1;
(statearr_23178_23245[(2)] = true);

(statearr_23178_23245[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (19))){
var inst_23021 = (state_23118[(12)]);
var inst_23027 = figwheel.client.file_reloading.expand_files.call(null,inst_23021);
var state_23118__$1 = state_23118;
var statearr_23179_23246 = state_23118__$1;
(statearr_23179_23246[(2)] = inst_23027);

(statearr_23179_23246[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (11))){
var state_23118__$1 = state_23118;
var statearr_23180_23247 = state_23118__$1;
(statearr_23180_23247[(2)] = null);

(statearr_23180_23247[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (9))){
var inst_23010 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
var statearr_23181_23248 = state_23118__$1;
(statearr_23181_23248[(2)] = inst_23010);

(statearr_23181_23248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (5))){
var inst_22981 = (state_23118[(7)]);
var inst_22980 = (state_23118[(8)]);
var inst_22983 = (inst_22981 < inst_22980);
var inst_22984 = inst_22983;
var state_23118__$1 = state_23118;
if(cljs.core.truth_(inst_22984)){
var statearr_23182_23249 = state_23118__$1;
(statearr_23182_23249[(1)] = (7));

} else {
var statearr_23183_23250 = state_23118__$1;
(statearr_23183_23250[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (14))){
var inst_22991 = (state_23118[(22)]);
var inst_23000 = cljs.core.first.call(null,inst_22991);
var inst_23001 = figwheel.client.file_reloading.eval_body.call(null,inst_23000,opts);
var inst_23002 = cljs.core.next.call(null,inst_22991);
var inst_22978 = inst_23002;
var inst_22979 = null;
var inst_22980 = (0);
var inst_22981 = (0);
var state_23118__$1 = (function (){var statearr_23184 = state_23118;
(statearr_23184[(7)] = inst_22981);

(statearr_23184[(8)] = inst_22980);

(statearr_23184[(32)] = inst_23001);

(statearr_23184[(9)] = inst_22978);

(statearr_23184[(10)] = inst_22979);

return statearr_23184;
})();
var statearr_23185_23251 = state_23118__$1;
(statearr_23185_23251[(2)] = null);

(statearr_23185_23251[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (45))){
var state_23118__$1 = state_23118;
var statearr_23186_23252 = state_23118__$1;
(statearr_23186_23252[(2)] = null);

(statearr_23186_23252[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (26))){
var inst_23034 = (state_23118[(23)]);
var inst_23035 = (state_23118[(24)]);
var inst_23037 = (state_23118[(26)]);
var inst_23039 = (state_23118[(25)]);
var inst_23031 = (state_23118[(19)]);
var inst_23054 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23056 = (function (){var all_files = inst_23031;
var res_SINGLEQUOTE_ = inst_23034;
var res = inst_23035;
var files_not_loaded = inst_23037;
var dependencies_that_loaded = inst_23039;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23034,inst_23035,inst_23037,inst_23039,inst_23031,inst_23054,state_val_23119,c__21924__auto__,map__22963,map__22963__$1,opts,before_jsload,on_jsload,reload_dependents,map__22964,map__22964__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23055){
var map__23187 = p__23055;
var map__23187__$1 = ((((!((map__23187 == null)))?(((((map__23187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23187):map__23187);
var namespace = cljs.core.get.call(null,map__23187__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23187__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23034,inst_23035,inst_23037,inst_23039,inst_23031,inst_23054,state_val_23119,c__21924__auto__,map__22963,map__22963__$1,opts,before_jsload,on_jsload,reload_dependents,map__22964,map__22964__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23057 = cljs.core.map.call(null,inst_23056,inst_23035);
var inst_23058 = cljs.core.pr_str.call(null,inst_23057);
var inst_23059 = figwheel.client.utils.log.call(null,inst_23058);
var inst_23060 = (function (){var all_files = inst_23031;
var res_SINGLEQUOTE_ = inst_23034;
var res = inst_23035;
var files_not_loaded = inst_23037;
var dependencies_that_loaded = inst_23039;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23034,inst_23035,inst_23037,inst_23039,inst_23031,inst_23054,inst_23056,inst_23057,inst_23058,inst_23059,state_val_23119,c__21924__auto__,map__22963,map__22963__$1,opts,before_jsload,on_jsload,reload_dependents,map__22964,map__22964__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23034,inst_23035,inst_23037,inst_23039,inst_23031,inst_23054,inst_23056,inst_23057,inst_23058,inst_23059,state_val_23119,c__21924__auto__,map__22963,map__22963__$1,opts,before_jsload,on_jsload,reload_dependents,map__22964,map__22964__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23061 = setTimeout(inst_23060,(10));
var state_23118__$1 = (function (){var statearr_23189 = state_23118;
(statearr_23189[(33)] = inst_23054);

(statearr_23189[(34)] = inst_23059);

return statearr_23189;
})();
var statearr_23190_23253 = state_23118__$1;
(statearr_23190_23253[(2)] = inst_23061);

(statearr_23190_23253[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (16))){
var state_23118__$1 = state_23118;
var statearr_23191_23254 = state_23118__$1;
(statearr_23191_23254[(2)] = reload_dependents);

(statearr_23191_23254[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (38))){
var inst_23071 = (state_23118[(16)]);
var inst_23089 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23071);
var state_23118__$1 = state_23118;
var statearr_23192_23255 = state_23118__$1;
(statearr_23192_23255[(2)] = inst_23089);

(statearr_23192_23255[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (30))){
var state_23118__$1 = state_23118;
var statearr_23193_23256 = state_23118__$1;
(statearr_23193_23256[(2)] = null);

(statearr_23193_23256[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (10))){
var inst_22991 = (state_23118[(22)]);
var inst_22993 = cljs.core.chunked_seq_QMARK_.call(null,inst_22991);
var state_23118__$1 = state_23118;
if(inst_22993){
var statearr_23194_23257 = state_23118__$1;
(statearr_23194_23257[(1)] = (13));

} else {
var statearr_23195_23258 = state_23118__$1;
(statearr_23195_23258[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (18))){
var inst_23025 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
if(cljs.core.truth_(inst_23025)){
var statearr_23196_23259 = state_23118__$1;
(statearr_23196_23259[(1)] = (19));

} else {
var statearr_23197_23260 = state_23118__$1;
(statearr_23197_23260[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (42))){
var state_23118__$1 = state_23118;
var statearr_23198_23261 = state_23118__$1;
(statearr_23198_23261[(2)] = null);

(statearr_23198_23261[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (37))){
var inst_23084 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
var statearr_23199_23262 = state_23118__$1;
(statearr_23199_23262[(2)] = inst_23084);

(statearr_23199_23262[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (8))){
var inst_22978 = (state_23118[(9)]);
var inst_22991 = (state_23118[(22)]);
var inst_22991__$1 = cljs.core.seq.call(null,inst_22978);
var state_23118__$1 = (function (){var statearr_23200 = state_23118;
(statearr_23200[(22)] = inst_22991__$1);

return statearr_23200;
})();
if(inst_22991__$1){
var statearr_23201_23263 = state_23118__$1;
(statearr_23201_23263[(1)] = (10));

} else {
var statearr_23202_23264 = state_23118__$1;
(statearr_23202_23264[(1)] = (11));

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
});})(c__21924__auto__,map__22963,map__22963__$1,opts,before_jsload,on_jsload,reload_dependents,map__22964,map__22964__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21903__auto__,c__21924__auto__,map__22963,map__22963__$1,opts,before_jsload,on_jsload,reload_dependents,map__22964,map__22964__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21904__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21904__auto____0 = (function (){
var statearr_23203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23203[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21904__auto__);

(statearr_23203[(1)] = (1));

return statearr_23203;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21904__auto____1 = (function (state_23118){
while(true){
var ret_value__21905__auto__ = (function (){try{while(true){
var result__21906__auto__ = switch__21903__auto__.call(null,state_23118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21906__auto__;
}
break;
}
}catch (e23204){if((e23204 instanceof Object)){
var ex__21907__auto__ = e23204;
var statearr_23205_23265 = state_23118;
(statearr_23205_23265[(5)] = ex__21907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23266 = state_23118;
state_23118 = G__23266;
continue;
} else {
return ret_value__21905__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21904__auto__ = function(state_23118){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21904__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21904__auto____1.call(this,state_23118);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21904__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21904__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21904__auto__;
})()
;})(switch__21903__auto__,c__21924__auto__,map__22963,map__22963__$1,opts,before_jsload,on_jsload,reload_dependents,map__22964,map__22964__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21926__auto__ = (function (){var statearr_23206 = f__21925__auto__.call(null);
(statearr_23206[(6)] = c__21924__auto__);

return statearr_23206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21926__auto__);
});})(c__21924__auto__,map__22963,map__22963__$1,opts,before_jsload,on_jsload,reload_dependents,map__22964,map__22964__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21924__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23269,link){
var map__23270 = p__23269;
var map__23270__$1 = ((((!((map__23270 == null)))?(((((map__23270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23270):map__23270);
var file = cljs.core.get.call(null,map__23270__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__23270,map__23270__$1,file){
return (function (p1__23267_SHARP_,p2__23268_SHARP_){
if(cljs.core._EQ_.call(null,p1__23267_SHARP_,p2__23268_SHARP_)){
return p1__23267_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__23270,map__23270__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23273){
var map__23274 = p__23273;
var map__23274__$1 = ((((!((map__23274 == null)))?(((((map__23274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23274):map__23274);
var match_length = cljs.core.get.call(null,map__23274__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23274__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23272_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23272_SHARP_);
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var G__23277 = arguments.length;
switch (G__23277) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23279_SHARP_,p2__23280_SHARP_){
return cljs.core.assoc.call(null,p1__23279_SHARP_,cljs.core.get.call(null,p2__23280_SHARP_,key),p2__23280_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23281){
var map__23282 = p__23281;
var map__23282__$1 = ((((!((map__23282 == null)))?(((((map__23282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23282):map__23282);
var f_data = map__23282__$1;
var file = cljs.core.get.call(null,map__23282__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23284,files_msg){
var map__23285 = p__23284;
var map__23285__$1 = ((((!((map__23285 == null)))?(((((map__23285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23285):map__23285);
var opts = map__23285__$1;
var on_cssload = cljs.core.get.call(null,map__23285__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23287_23291 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23288_23292 = null;
var count__23289_23293 = (0);
var i__23290_23294 = (0);
while(true){
if((i__23290_23294 < count__23289_23293)){
var f_23295 = cljs.core._nth.call(null,chunk__23288_23292,i__23290_23294);
figwheel.client.file_reloading.reload_css_file.call(null,f_23295);


var G__23296 = seq__23287_23291;
var G__23297 = chunk__23288_23292;
var G__23298 = count__23289_23293;
var G__23299 = (i__23290_23294 + (1));
seq__23287_23291 = G__23296;
chunk__23288_23292 = G__23297;
count__23289_23293 = G__23298;
i__23290_23294 = G__23299;
continue;
} else {
var temp__4657__auto___23300 = cljs.core.seq.call(null,seq__23287_23291);
if(temp__4657__auto___23300){
var seq__23287_23301__$1 = temp__4657__auto___23300;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23287_23301__$1)){
var c__4319__auto___23302 = cljs.core.chunk_first.call(null,seq__23287_23301__$1);
var G__23303 = cljs.core.chunk_rest.call(null,seq__23287_23301__$1);
var G__23304 = c__4319__auto___23302;
var G__23305 = cljs.core.count.call(null,c__4319__auto___23302);
var G__23306 = (0);
seq__23287_23291 = G__23303;
chunk__23288_23292 = G__23304;
count__23289_23293 = G__23305;
i__23290_23294 = G__23306;
continue;
} else {
var f_23307 = cljs.core.first.call(null,seq__23287_23301__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23307);


var G__23308 = cljs.core.next.call(null,seq__23287_23301__$1);
var G__23309 = null;
var G__23310 = (0);
var G__23311 = (0);
seq__23287_23291 = G__23308;
chunk__23288_23292 = G__23309;
count__23289_23293 = G__23310;
i__23290_23294 = G__23311;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23285,map__23285__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23285,map__23285__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1530044030284
