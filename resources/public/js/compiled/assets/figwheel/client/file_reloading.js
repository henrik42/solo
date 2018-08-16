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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26188_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26188_SHARP_));
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
var seq__26189 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26190 = null;
var count__26191 = (0);
var i__26192 = (0);
while(true){
if((i__26192 < count__26191)){
var n = cljs.core._nth.call(null,chunk__26190,i__26192);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26193 = seq__26189;
var G__26194 = chunk__26190;
var G__26195 = count__26191;
var G__26196 = (i__26192 + (1));
seq__26189 = G__26193;
chunk__26190 = G__26194;
count__26191 = G__26195;
i__26192 = G__26196;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26189);
if(temp__4657__auto__){
var seq__26189__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26189__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26189__$1);
var G__26197 = cljs.core.chunk_rest.call(null,seq__26189__$1);
var G__26198 = c__4319__auto__;
var G__26199 = cljs.core.count.call(null,c__4319__auto__);
var G__26200 = (0);
seq__26189 = G__26197;
chunk__26190 = G__26198;
count__26191 = G__26199;
i__26192 = G__26200;
continue;
} else {
var n = cljs.core.first.call(null,seq__26189__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26201 = cljs.core.next.call(null,seq__26189__$1);
var G__26202 = null;
var G__26203 = (0);
var G__26204 = (0);
seq__26189 = G__26201;
chunk__26190 = G__26202;
count__26191 = G__26203;
i__26192 = G__26204;
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
return cljs.core.some.call(null,(function (p__26205){
var vec__26206 = p__26205;
var _ = cljs.core.nth.call(null,vec__26206,(0),null);
var v = cljs.core.nth.call(null,vec__26206,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__26209){
var vec__26210 = p__26209;
var k = cljs.core.nth.call(null,vec__26210,(0),null);
var v = cljs.core.nth.call(null,vec__26210,(1),null);
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

var seq__26222_26230 = cljs.core.seq.call(null,deps);
var chunk__26223_26231 = null;
var count__26224_26232 = (0);
var i__26225_26233 = (0);
while(true){
if((i__26225_26233 < count__26224_26232)){
var dep_26234 = cljs.core._nth.call(null,chunk__26223_26231,i__26225_26233);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_26234;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26234));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26234,(depth + (1)),state);
} else {
}


var G__26235 = seq__26222_26230;
var G__26236 = chunk__26223_26231;
var G__26237 = count__26224_26232;
var G__26238 = (i__26225_26233 + (1));
seq__26222_26230 = G__26235;
chunk__26223_26231 = G__26236;
count__26224_26232 = G__26237;
i__26225_26233 = G__26238;
continue;
} else {
var temp__4657__auto___26239 = cljs.core.seq.call(null,seq__26222_26230);
if(temp__4657__auto___26239){
var seq__26222_26240__$1 = temp__4657__auto___26239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26222_26240__$1)){
var c__4319__auto___26241 = cljs.core.chunk_first.call(null,seq__26222_26240__$1);
var G__26242 = cljs.core.chunk_rest.call(null,seq__26222_26240__$1);
var G__26243 = c__4319__auto___26241;
var G__26244 = cljs.core.count.call(null,c__4319__auto___26241);
var G__26245 = (0);
seq__26222_26230 = G__26242;
chunk__26223_26231 = G__26243;
count__26224_26232 = G__26244;
i__26225_26233 = G__26245;
continue;
} else {
var dep_26246 = cljs.core.first.call(null,seq__26222_26240__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_26246;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26246));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26246,(depth + (1)),state);
} else {
}


var G__26247 = cljs.core.next.call(null,seq__26222_26240__$1);
var G__26248 = null;
var G__26249 = (0);
var G__26250 = (0);
seq__26222_26230 = G__26247;
chunk__26223_26231 = G__26248;
count__26224_26232 = G__26249;
i__26225_26233 = G__26250;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26226){
var vec__26227 = p__26226;
var seq__26228 = cljs.core.seq.call(null,vec__26227);
var first__26229 = cljs.core.first.call(null,seq__26228);
var seq__26228__$1 = cljs.core.next.call(null,seq__26228);
var x = first__26229;
var xs = seq__26228__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26227,seq__26228,first__26229,seq__26228__$1,x,xs,get_deps__$1){
return (function (p1__26213_SHARP_){
return clojure.set.difference.call(null,p1__26213_SHARP_,x);
});})(vec__26227,seq__26228,first__26229,seq__26228__$1,x,xs,get_deps__$1))
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
var seq__26251 = cljs.core.seq.call(null,provides);
var chunk__26252 = null;
var count__26253 = (0);
var i__26254 = (0);
while(true){
if((i__26254 < count__26253)){
var prov = cljs.core._nth.call(null,chunk__26252,i__26254);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26255_26263 = cljs.core.seq.call(null,requires);
var chunk__26256_26264 = null;
var count__26257_26265 = (0);
var i__26258_26266 = (0);
while(true){
if((i__26258_26266 < count__26257_26265)){
var req_26267 = cljs.core._nth.call(null,chunk__26256_26264,i__26258_26266);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26267,prov);


var G__26268 = seq__26255_26263;
var G__26269 = chunk__26256_26264;
var G__26270 = count__26257_26265;
var G__26271 = (i__26258_26266 + (1));
seq__26255_26263 = G__26268;
chunk__26256_26264 = G__26269;
count__26257_26265 = G__26270;
i__26258_26266 = G__26271;
continue;
} else {
var temp__4657__auto___26272 = cljs.core.seq.call(null,seq__26255_26263);
if(temp__4657__auto___26272){
var seq__26255_26273__$1 = temp__4657__auto___26272;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26255_26273__$1)){
var c__4319__auto___26274 = cljs.core.chunk_first.call(null,seq__26255_26273__$1);
var G__26275 = cljs.core.chunk_rest.call(null,seq__26255_26273__$1);
var G__26276 = c__4319__auto___26274;
var G__26277 = cljs.core.count.call(null,c__4319__auto___26274);
var G__26278 = (0);
seq__26255_26263 = G__26275;
chunk__26256_26264 = G__26276;
count__26257_26265 = G__26277;
i__26258_26266 = G__26278;
continue;
} else {
var req_26279 = cljs.core.first.call(null,seq__26255_26273__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26279,prov);


var G__26280 = cljs.core.next.call(null,seq__26255_26273__$1);
var G__26281 = null;
var G__26282 = (0);
var G__26283 = (0);
seq__26255_26263 = G__26280;
chunk__26256_26264 = G__26281;
count__26257_26265 = G__26282;
i__26258_26266 = G__26283;
continue;
}
} else {
}
}
break;
}


var G__26284 = seq__26251;
var G__26285 = chunk__26252;
var G__26286 = count__26253;
var G__26287 = (i__26254 + (1));
seq__26251 = G__26284;
chunk__26252 = G__26285;
count__26253 = G__26286;
i__26254 = G__26287;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26251);
if(temp__4657__auto__){
var seq__26251__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26251__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26251__$1);
var G__26288 = cljs.core.chunk_rest.call(null,seq__26251__$1);
var G__26289 = c__4319__auto__;
var G__26290 = cljs.core.count.call(null,c__4319__auto__);
var G__26291 = (0);
seq__26251 = G__26288;
chunk__26252 = G__26289;
count__26253 = G__26290;
i__26254 = G__26291;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26251__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26259_26292 = cljs.core.seq.call(null,requires);
var chunk__26260_26293 = null;
var count__26261_26294 = (0);
var i__26262_26295 = (0);
while(true){
if((i__26262_26295 < count__26261_26294)){
var req_26296 = cljs.core._nth.call(null,chunk__26260_26293,i__26262_26295);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26296,prov);


var G__26297 = seq__26259_26292;
var G__26298 = chunk__26260_26293;
var G__26299 = count__26261_26294;
var G__26300 = (i__26262_26295 + (1));
seq__26259_26292 = G__26297;
chunk__26260_26293 = G__26298;
count__26261_26294 = G__26299;
i__26262_26295 = G__26300;
continue;
} else {
var temp__4657__auto___26301__$1 = cljs.core.seq.call(null,seq__26259_26292);
if(temp__4657__auto___26301__$1){
var seq__26259_26302__$1 = temp__4657__auto___26301__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26259_26302__$1)){
var c__4319__auto___26303 = cljs.core.chunk_first.call(null,seq__26259_26302__$1);
var G__26304 = cljs.core.chunk_rest.call(null,seq__26259_26302__$1);
var G__26305 = c__4319__auto___26303;
var G__26306 = cljs.core.count.call(null,c__4319__auto___26303);
var G__26307 = (0);
seq__26259_26292 = G__26304;
chunk__26260_26293 = G__26305;
count__26261_26294 = G__26306;
i__26262_26295 = G__26307;
continue;
} else {
var req_26308 = cljs.core.first.call(null,seq__26259_26302__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26308,prov);


var G__26309 = cljs.core.next.call(null,seq__26259_26302__$1);
var G__26310 = null;
var G__26311 = (0);
var G__26312 = (0);
seq__26259_26292 = G__26309;
chunk__26260_26293 = G__26310;
count__26261_26294 = G__26311;
i__26262_26295 = G__26312;
continue;
}
} else {
}
}
break;
}


var G__26313 = cljs.core.next.call(null,seq__26251__$1);
var G__26314 = null;
var G__26315 = (0);
var G__26316 = (0);
seq__26251 = G__26313;
chunk__26252 = G__26314;
count__26253 = G__26315;
i__26254 = G__26316;
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
var seq__26317_26321 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26318_26322 = null;
var count__26319_26323 = (0);
var i__26320_26324 = (0);
while(true){
if((i__26320_26324 < count__26319_26323)){
var ns_26325 = cljs.core._nth.call(null,chunk__26318_26322,i__26320_26324);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26325);


var G__26326 = seq__26317_26321;
var G__26327 = chunk__26318_26322;
var G__26328 = count__26319_26323;
var G__26329 = (i__26320_26324 + (1));
seq__26317_26321 = G__26326;
chunk__26318_26322 = G__26327;
count__26319_26323 = G__26328;
i__26320_26324 = G__26329;
continue;
} else {
var temp__4657__auto___26330 = cljs.core.seq.call(null,seq__26317_26321);
if(temp__4657__auto___26330){
var seq__26317_26331__$1 = temp__4657__auto___26330;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26317_26331__$1)){
var c__4319__auto___26332 = cljs.core.chunk_first.call(null,seq__26317_26331__$1);
var G__26333 = cljs.core.chunk_rest.call(null,seq__26317_26331__$1);
var G__26334 = c__4319__auto___26332;
var G__26335 = cljs.core.count.call(null,c__4319__auto___26332);
var G__26336 = (0);
seq__26317_26321 = G__26333;
chunk__26318_26322 = G__26334;
count__26319_26323 = G__26335;
i__26320_26324 = G__26336;
continue;
} else {
var ns_26337 = cljs.core.first.call(null,seq__26317_26331__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26337);


var G__26338 = cljs.core.next.call(null,seq__26317_26331__$1);
var G__26339 = null;
var G__26340 = (0);
var G__26341 = (0);
seq__26317_26321 = G__26338;
chunk__26318_26322 = G__26339;
count__26319_26323 = G__26340;
i__26320_26324 = G__26341;
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
var G__26342__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26343__i = 0, G__26343__a = new Array(arguments.length -  0);
while (G__26343__i < G__26343__a.length) {G__26343__a[G__26343__i] = arguments[G__26343__i + 0]; ++G__26343__i;}
  args = new cljs.core.IndexedSeq(G__26343__a,0,null);
} 
return G__26342__delegate.call(this,args);};
G__26342.cljs$lang$maxFixedArity = 0;
G__26342.cljs$lang$applyTo = (function (arglist__26344){
var args = cljs.core.seq(arglist__26344);
return G__26342__delegate(args);
});
G__26342.cljs$core$IFn$_invoke$arity$variadic = G__26342__delegate;
return G__26342;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__26345_SHARP_,p2__26346_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26345_SHARP_)].join('')),p2__26346_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__26347_SHARP_,p2__26348_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26347_SHARP_)].join(''),p2__26348_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__26349 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__26349.addCallback(((function (G__26349){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__26349))
);

G__26349.addErrback(((function (G__26349){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__26349))
);

return G__26349;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e26350){if((e26350 instanceof Error)){
var e = e26350;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26350;

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
}catch (e26351){if((e26351 instanceof Error)){
var e = e26351;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26351;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26352 = cljs.core._EQ_;
var expr__26353 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26352.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26353))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__26352.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26353))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__26352.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__26353))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__26352,expr__26353){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26352,expr__26353))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26355,callback){
var map__26356 = p__26355;
var map__26356__$1 = ((((!((map__26356 == null)))?(((((map__26356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26356):map__26356);
var file_msg = map__26356__$1;
var request_url = cljs.core.get.call(null,map__26356__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__26356,map__26356__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26356,map__26356__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__22583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto__){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto__){
return (function (state_26394){
var state_val_26395 = (state_26394[(1)]);
if((state_val_26395 === (7))){
var inst_26390 = (state_26394[(2)]);
var state_26394__$1 = state_26394;
var statearr_26396_26422 = state_26394__$1;
(statearr_26396_26422[(2)] = inst_26390);

(statearr_26396_26422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (1))){
var state_26394__$1 = state_26394;
var statearr_26397_26423 = state_26394__$1;
(statearr_26397_26423[(2)] = null);

(statearr_26397_26423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (4))){
var inst_26360 = (state_26394[(7)]);
var inst_26360__$1 = (state_26394[(2)]);
var state_26394__$1 = (function (){var statearr_26398 = state_26394;
(statearr_26398[(7)] = inst_26360__$1);

return statearr_26398;
})();
if(cljs.core.truth_(inst_26360__$1)){
var statearr_26399_26424 = state_26394__$1;
(statearr_26399_26424[(1)] = (5));

} else {
var statearr_26400_26425 = state_26394__$1;
(statearr_26400_26425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (15))){
var inst_26373 = (state_26394[(8)]);
var inst_26375 = (state_26394[(9)]);
var inst_26377 = inst_26375.call(null,inst_26373);
var state_26394__$1 = state_26394;
var statearr_26401_26426 = state_26394__$1;
(statearr_26401_26426[(2)] = inst_26377);

(statearr_26401_26426[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (13))){
var inst_26384 = (state_26394[(2)]);
var state_26394__$1 = state_26394;
var statearr_26402_26427 = state_26394__$1;
(statearr_26402_26427[(2)] = inst_26384);

(statearr_26402_26427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (6))){
var state_26394__$1 = state_26394;
var statearr_26403_26428 = state_26394__$1;
(statearr_26403_26428[(2)] = null);

(statearr_26403_26428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (17))){
var inst_26381 = (state_26394[(2)]);
var state_26394__$1 = state_26394;
var statearr_26404_26429 = state_26394__$1;
(statearr_26404_26429[(2)] = inst_26381);

(statearr_26404_26429[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (3))){
var inst_26392 = (state_26394[(2)]);
var state_26394__$1 = state_26394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26394__$1,inst_26392);
} else {
if((state_val_26395 === (12))){
var state_26394__$1 = state_26394;
var statearr_26405_26430 = state_26394__$1;
(statearr_26405_26430[(2)] = null);

(statearr_26405_26430[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (2))){
var state_26394__$1 = state_26394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26394__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26395 === (11))){
var inst_26365 = (state_26394[(10)]);
var inst_26371 = figwheel.client.file_reloading.blocking_load.call(null,inst_26365);
var state_26394__$1 = state_26394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26394__$1,(14),inst_26371);
} else {
if((state_val_26395 === (9))){
var inst_26365 = (state_26394[(10)]);
var state_26394__$1 = state_26394;
if(cljs.core.truth_(inst_26365)){
var statearr_26406_26431 = state_26394__$1;
(statearr_26406_26431[(1)] = (11));

} else {
var statearr_26407_26432 = state_26394__$1;
(statearr_26407_26432[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (5))){
var inst_26366 = (state_26394[(11)]);
var inst_26360 = (state_26394[(7)]);
var inst_26365 = cljs.core.nth.call(null,inst_26360,(0),null);
var inst_26366__$1 = cljs.core.nth.call(null,inst_26360,(1),null);
var state_26394__$1 = (function (){var statearr_26408 = state_26394;
(statearr_26408[(11)] = inst_26366__$1);

(statearr_26408[(10)] = inst_26365);

return statearr_26408;
})();
if(cljs.core.truth_(inst_26366__$1)){
var statearr_26409_26433 = state_26394__$1;
(statearr_26409_26433[(1)] = (8));

} else {
var statearr_26410_26434 = state_26394__$1;
(statearr_26410_26434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (14))){
var inst_26375 = (state_26394[(9)]);
var inst_26365 = (state_26394[(10)]);
var inst_26373 = (state_26394[(2)]);
var inst_26374 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26375__$1 = cljs.core.get.call(null,inst_26374,inst_26365);
var state_26394__$1 = (function (){var statearr_26411 = state_26394;
(statearr_26411[(8)] = inst_26373);

(statearr_26411[(9)] = inst_26375__$1);

return statearr_26411;
})();
if(cljs.core.truth_(inst_26375__$1)){
var statearr_26412_26435 = state_26394__$1;
(statearr_26412_26435[(1)] = (15));

} else {
var statearr_26413_26436 = state_26394__$1;
(statearr_26413_26436[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (16))){
var inst_26373 = (state_26394[(8)]);
var inst_26379 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26373);
var state_26394__$1 = state_26394;
var statearr_26414_26437 = state_26394__$1;
(statearr_26414_26437[(2)] = inst_26379);

(statearr_26414_26437[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (10))){
var inst_26386 = (state_26394[(2)]);
var state_26394__$1 = (function (){var statearr_26415 = state_26394;
(statearr_26415[(12)] = inst_26386);

return statearr_26415;
})();
var statearr_26416_26438 = state_26394__$1;
(statearr_26416_26438[(2)] = null);

(statearr_26416_26438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (8))){
var inst_26366 = (state_26394[(11)]);
var inst_26368 = eval(inst_26366);
var state_26394__$1 = state_26394;
var statearr_26417_26439 = state_26394__$1;
(statearr_26417_26439[(2)] = inst_26368);

(statearr_26417_26439[(1)] = (10));


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
});})(c__22583__auto__))
;
return ((function (switch__22495__auto__,c__22583__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22496__auto__ = null;
var figwheel$client$file_reloading$state_machine__22496__auto____0 = (function (){
var statearr_26418 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26418[(0)] = figwheel$client$file_reloading$state_machine__22496__auto__);

(statearr_26418[(1)] = (1));

return statearr_26418;
});
var figwheel$client$file_reloading$state_machine__22496__auto____1 = (function (state_26394){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_26394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e26419){if((e26419 instanceof Object)){
var ex__22499__auto__ = e26419;
var statearr_26420_26440 = state_26394;
(statearr_26420_26440[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26441 = state_26394;
state_26394 = G__26441;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22496__auto__ = function(state_26394){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22496__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22496__auto____1.call(this,state_26394);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22496__auto____0;
figwheel$client$file_reloading$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22496__auto____1;
return figwheel$client$file_reloading$state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto__))
})();
var state__22585__auto__ = (function (){var statearr_26421 = f__22584__auto__.call(null);
(statearr_26421[(6)] = c__22583__auto__);

return statearr_26421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto__))
);

return c__22583__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__26443 = arguments.length;
switch (G__26443) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26445,callback){
var map__26446 = p__26445;
var map__26446__$1 = ((((!((map__26446 == null)))?(((((map__26446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26446):map__26446);
var file_msg = map__26446__$1;
var namespace = cljs.core.get.call(null,map__26446__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26446,map__26446__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26446,map__26446__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__26448){
var map__26449 = p__26448;
var map__26449__$1 = ((((!((map__26449 == null)))?(((((map__26449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26449):map__26449);
var file_msg = map__26449__$1;
var namespace = cljs.core.get.call(null,map__26449__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26451){
var map__26452 = p__26451;
var map__26452__$1 = ((((!((map__26452 == null)))?(((((map__26452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26452):map__26452);
var file_msg = map__26452__$1;
var namespace = cljs.core.get.call(null,map__26452__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26454,callback){
var map__26455 = p__26454;
var map__26455__$1 = ((((!((map__26455 == null)))?(((((map__26455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26455):map__26455);
var file_msg = map__26455__$1;
var request_url = cljs.core.get.call(null,map__26455__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26455__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__22583__auto___26505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto___26505,out){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto___26505,out){
return (function (state_26490){
var state_val_26491 = (state_26490[(1)]);
if((state_val_26491 === (1))){
var inst_26464 = cljs.core.seq.call(null,files);
var inst_26465 = cljs.core.first.call(null,inst_26464);
var inst_26466 = cljs.core.next.call(null,inst_26464);
var inst_26467 = files;
var state_26490__$1 = (function (){var statearr_26492 = state_26490;
(statearr_26492[(7)] = inst_26466);

(statearr_26492[(8)] = inst_26467);

(statearr_26492[(9)] = inst_26465);

return statearr_26492;
})();
var statearr_26493_26506 = state_26490__$1;
(statearr_26493_26506[(2)] = null);

(statearr_26493_26506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26491 === (2))){
var inst_26473 = (state_26490[(10)]);
var inst_26467 = (state_26490[(8)]);
var inst_26472 = cljs.core.seq.call(null,inst_26467);
var inst_26473__$1 = cljs.core.first.call(null,inst_26472);
var inst_26474 = cljs.core.next.call(null,inst_26472);
var inst_26475 = (inst_26473__$1 == null);
var inst_26476 = cljs.core.not.call(null,inst_26475);
var state_26490__$1 = (function (){var statearr_26494 = state_26490;
(statearr_26494[(10)] = inst_26473__$1);

(statearr_26494[(11)] = inst_26474);

return statearr_26494;
})();
if(inst_26476){
var statearr_26495_26507 = state_26490__$1;
(statearr_26495_26507[(1)] = (4));

} else {
var statearr_26496_26508 = state_26490__$1;
(statearr_26496_26508[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26491 === (3))){
var inst_26488 = (state_26490[(2)]);
var state_26490__$1 = state_26490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26490__$1,inst_26488);
} else {
if((state_val_26491 === (4))){
var inst_26473 = (state_26490[(10)]);
var inst_26478 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26473);
var state_26490__$1 = state_26490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26490__$1,(7),inst_26478);
} else {
if((state_val_26491 === (5))){
var inst_26484 = cljs.core.async.close_BANG_.call(null,out);
var state_26490__$1 = state_26490;
var statearr_26497_26509 = state_26490__$1;
(statearr_26497_26509[(2)] = inst_26484);

(statearr_26497_26509[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26491 === (6))){
var inst_26486 = (state_26490[(2)]);
var state_26490__$1 = state_26490;
var statearr_26498_26510 = state_26490__$1;
(statearr_26498_26510[(2)] = inst_26486);

(statearr_26498_26510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26491 === (7))){
var inst_26474 = (state_26490[(11)]);
var inst_26480 = (state_26490[(2)]);
var inst_26481 = cljs.core.async.put_BANG_.call(null,out,inst_26480);
var inst_26467 = inst_26474;
var state_26490__$1 = (function (){var statearr_26499 = state_26490;
(statearr_26499[(12)] = inst_26481);

(statearr_26499[(8)] = inst_26467);

return statearr_26499;
})();
var statearr_26500_26511 = state_26490__$1;
(statearr_26500_26511[(2)] = null);

(statearr_26500_26511[(1)] = (2));


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
});})(c__22583__auto___26505,out))
;
return ((function (switch__22495__auto__,c__22583__auto___26505,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22496__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22496__auto____0 = (function (){
var statearr_26501 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26501[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22496__auto__);

(statearr_26501[(1)] = (1));

return statearr_26501;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22496__auto____1 = (function (state_26490){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_26490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e26502){if((e26502 instanceof Object)){
var ex__22499__auto__ = e26502;
var statearr_26503_26512 = state_26490;
(statearr_26503_26512[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26513 = state_26490;
state_26490 = G__26513;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22496__auto__ = function(state_26490){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22496__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22496__auto____1.call(this,state_26490);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22496__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22496__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto___26505,out))
})();
var state__22585__auto__ = (function (){var statearr_26504 = f__22584__auto__.call(null);
(statearr_26504[(6)] = c__22583__auto___26505);

return statearr_26504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto___26505,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26514,opts){
var map__26515 = p__26514;
var map__26515__$1 = ((((!((map__26515 == null)))?(((((map__26515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26515):map__26515);
var eval_body = cljs.core.get.call(null,map__26515__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26515__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e26517){var e = e26517;
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
return (function (p1__26518_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26518_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__26519){
var vec__26520 = p__26519;
var k = cljs.core.nth.call(null,vec__26520,(0),null);
var v = cljs.core.nth.call(null,vec__26520,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26523){
var vec__26524 = p__26523;
var k = cljs.core.nth.call(null,vec__26524,(0),null);
var v = cljs.core.nth.call(null,vec__26524,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26530,p__26531){
var map__26532 = p__26530;
var map__26532__$1 = ((((!((map__26532 == null)))?(((((map__26532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26532):map__26532);
var opts = map__26532__$1;
var before_jsload = cljs.core.get.call(null,map__26532__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26532__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26532__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26533 = p__26531;
var map__26533__$1 = ((((!((map__26533 == null)))?(((((map__26533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26533):map__26533);
var msg = map__26533__$1;
var files = cljs.core.get.call(null,map__26533__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26533__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26533__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto__,map__26532,map__26532__$1,opts,before_jsload,on_jsload,reload_dependents,map__26533,map__26533__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto__,map__26532,map__26532__$1,opts,before_jsload,on_jsload,reload_dependents,map__26533,map__26533__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26687){
var state_val_26688 = (state_26687[(1)]);
if((state_val_26688 === (7))){
var inst_26547 = (state_26687[(7)]);
var inst_26549 = (state_26687[(8)]);
var inst_26548 = (state_26687[(9)]);
var inst_26550 = (state_26687[(10)]);
var inst_26555 = cljs.core._nth.call(null,inst_26548,inst_26550);
var inst_26556 = figwheel.client.file_reloading.eval_body.call(null,inst_26555,opts);
var inst_26557 = (inst_26550 + (1));
var tmp26689 = inst_26547;
var tmp26690 = inst_26549;
var tmp26691 = inst_26548;
var inst_26547__$1 = tmp26689;
var inst_26548__$1 = tmp26691;
var inst_26549__$1 = tmp26690;
var inst_26550__$1 = inst_26557;
var state_26687__$1 = (function (){var statearr_26692 = state_26687;
(statearr_26692[(11)] = inst_26556);

(statearr_26692[(7)] = inst_26547__$1);

(statearr_26692[(8)] = inst_26549__$1);

(statearr_26692[(9)] = inst_26548__$1);

(statearr_26692[(10)] = inst_26550__$1);

return statearr_26692;
})();
var statearr_26693_26776 = state_26687__$1;
(statearr_26693_26776[(2)] = null);

(statearr_26693_26776[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (20))){
var inst_26590 = (state_26687[(12)]);
var inst_26598 = figwheel.client.file_reloading.sort_files.call(null,inst_26590);
var state_26687__$1 = state_26687;
var statearr_26694_26777 = state_26687__$1;
(statearr_26694_26777[(2)] = inst_26598);

(statearr_26694_26777[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (27))){
var state_26687__$1 = state_26687;
var statearr_26695_26778 = state_26687__$1;
(statearr_26695_26778[(2)] = null);

(statearr_26695_26778[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (1))){
var inst_26539 = (state_26687[(13)]);
var inst_26536 = before_jsload.call(null,files);
var inst_26537 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26538 = (function (){return ((function (inst_26539,inst_26536,inst_26537,state_val_26688,c__22583__auto__,map__26532,map__26532__$1,opts,before_jsload,on_jsload,reload_dependents,map__26533,map__26533__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26527_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26527_SHARP_);
});
;})(inst_26539,inst_26536,inst_26537,state_val_26688,c__22583__auto__,map__26532,map__26532__$1,opts,before_jsload,on_jsload,reload_dependents,map__26533,map__26533__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26539__$1 = cljs.core.filter.call(null,inst_26538,files);
var inst_26540 = cljs.core.not_empty.call(null,inst_26539__$1);
var state_26687__$1 = (function (){var statearr_26696 = state_26687;
(statearr_26696[(14)] = inst_26536);

(statearr_26696[(15)] = inst_26537);

(statearr_26696[(13)] = inst_26539__$1);

return statearr_26696;
})();
if(cljs.core.truth_(inst_26540)){
var statearr_26697_26779 = state_26687__$1;
(statearr_26697_26779[(1)] = (2));

} else {
var statearr_26698_26780 = state_26687__$1;
(statearr_26698_26780[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (24))){
var state_26687__$1 = state_26687;
var statearr_26699_26781 = state_26687__$1;
(statearr_26699_26781[(2)] = null);

(statearr_26699_26781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (39))){
var inst_26640 = (state_26687[(16)]);
var state_26687__$1 = state_26687;
var statearr_26700_26782 = state_26687__$1;
(statearr_26700_26782[(2)] = inst_26640);

(statearr_26700_26782[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (46))){
var inst_26682 = (state_26687[(2)]);
var state_26687__$1 = state_26687;
var statearr_26701_26783 = state_26687__$1;
(statearr_26701_26783[(2)] = inst_26682);

(statearr_26701_26783[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (4))){
var inst_26584 = (state_26687[(2)]);
var inst_26585 = cljs.core.List.EMPTY;
var inst_26586 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26585);
var inst_26587 = (function (){return ((function (inst_26584,inst_26585,inst_26586,state_val_26688,c__22583__auto__,map__26532,map__26532__$1,opts,before_jsload,on_jsload,reload_dependents,map__26533,map__26533__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26528_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26528_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26528_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__26528_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_26584,inst_26585,inst_26586,state_val_26688,c__22583__auto__,map__26532,map__26532__$1,opts,before_jsload,on_jsload,reload_dependents,map__26533,map__26533__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26588 = cljs.core.filter.call(null,inst_26587,files);
var inst_26589 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26590 = cljs.core.concat.call(null,inst_26588,inst_26589);
var state_26687__$1 = (function (){var statearr_26702 = state_26687;
(statearr_26702[(12)] = inst_26590);

(statearr_26702[(17)] = inst_26586);

(statearr_26702[(18)] = inst_26584);

return statearr_26702;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26703_26784 = state_26687__$1;
(statearr_26703_26784[(1)] = (16));

} else {
var statearr_26704_26785 = state_26687__$1;
(statearr_26704_26785[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (15))){
var inst_26574 = (state_26687[(2)]);
var state_26687__$1 = state_26687;
var statearr_26705_26786 = state_26687__$1;
(statearr_26705_26786[(2)] = inst_26574);

(statearr_26705_26786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (21))){
var inst_26600 = (state_26687[(19)]);
var inst_26600__$1 = (state_26687[(2)]);
var inst_26601 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26600__$1);
var state_26687__$1 = (function (){var statearr_26706 = state_26687;
(statearr_26706[(19)] = inst_26600__$1);

return statearr_26706;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26687__$1,(22),inst_26601);
} else {
if((state_val_26688 === (31))){
var inst_26685 = (state_26687[(2)]);
var state_26687__$1 = state_26687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26687__$1,inst_26685);
} else {
if((state_val_26688 === (32))){
var inst_26640 = (state_26687[(16)]);
var inst_26645 = inst_26640.cljs$lang$protocol_mask$partition0$;
var inst_26646 = (inst_26645 & (64));
var inst_26647 = inst_26640.cljs$core$ISeq$;
var inst_26648 = (cljs.core.PROTOCOL_SENTINEL === inst_26647);
var inst_26649 = ((inst_26646) || (inst_26648));
var state_26687__$1 = state_26687;
if(cljs.core.truth_(inst_26649)){
var statearr_26707_26787 = state_26687__$1;
(statearr_26707_26787[(1)] = (35));

} else {
var statearr_26708_26788 = state_26687__$1;
(statearr_26708_26788[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (40))){
var inst_26662 = (state_26687[(20)]);
var inst_26661 = (state_26687[(2)]);
var inst_26662__$1 = cljs.core.get.call(null,inst_26661,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26663 = cljs.core.get.call(null,inst_26661,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26664 = cljs.core.not_empty.call(null,inst_26662__$1);
var state_26687__$1 = (function (){var statearr_26709 = state_26687;
(statearr_26709[(21)] = inst_26663);

(statearr_26709[(20)] = inst_26662__$1);

return statearr_26709;
})();
if(cljs.core.truth_(inst_26664)){
var statearr_26710_26789 = state_26687__$1;
(statearr_26710_26789[(1)] = (41));

} else {
var statearr_26711_26790 = state_26687__$1;
(statearr_26711_26790[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (33))){
var state_26687__$1 = state_26687;
var statearr_26712_26791 = state_26687__$1;
(statearr_26712_26791[(2)] = false);

(statearr_26712_26791[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (13))){
var inst_26560 = (state_26687[(22)]);
var inst_26564 = cljs.core.chunk_first.call(null,inst_26560);
var inst_26565 = cljs.core.chunk_rest.call(null,inst_26560);
var inst_26566 = cljs.core.count.call(null,inst_26564);
var inst_26547 = inst_26565;
var inst_26548 = inst_26564;
var inst_26549 = inst_26566;
var inst_26550 = (0);
var state_26687__$1 = (function (){var statearr_26713 = state_26687;
(statearr_26713[(7)] = inst_26547);

(statearr_26713[(8)] = inst_26549);

(statearr_26713[(9)] = inst_26548);

(statearr_26713[(10)] = inst_26550);

return statearr_26713;
})();
var statearr_26714_26792 = state_26687__$1;
(statearr_26714_26792[(2)] = null);

(statearr_26714_26792[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (22))){
var inst_26603 = (state_26687[(23)]);
var inst_26600 = (state_26687[(19)]);
var inst_26604 = (state_26687[(24)]);
var inst_26608 = (state_26687[(25)]);
var inst_26603__$1 = (state_26687[(2)]);
var inst_26604__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26603__$1);
var inst_26605 = (function (){var all_files = inst_26600;
var res_SINGLEQUOTE_ = inst_26603__$1;
var res = inst_26604__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26603,inst_26600,inst_26604,inst_26608,inst_26603__$1,inst_26604__$1,state_val_26688,c__22583__auto__,map__26532,map__26532__$1,opts,before_jsload,on_jsload,reload_dependents,map__26533,map__26533__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26529_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26529_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26603,inst_26600,inst_26604,inst_26608,inst_26603__$1,inst_26604__$1,state_val_26688,c__22583__auto__,map__26532,map__26532__$1,opts,before_jsload,on_jsload,reload_dependents,map__26533,map__26533__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26606 = cljs.core.filter.call(null,inst_26605,inst_26603__$1);
var inst_26607 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26608__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26607);
var inst_26609 = cljs.core.not_empty.call(null,inst_26608__$1);
var state_26687__$1 = (function (){var statearr_26715 = state_26687;
(statearr_26715[(26)] = inst_26606);

(statearr_26715[(23)] = inst_26603__$1);

(statearr_26715[(24)] = inst_26604__$1);

(statearr_26715[(25)] = inst_26608__$1);

return statearr_26715;
})();
if(cljs.core.truth_(inst_26609)){
var statearr_26716_26793 = state_26687__$1;
(statearr_26716_26793[(1)] = (23));

} else {
var statearr_26717_26794 = state_26687__$1;
(statearr_26717_26794[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (36))){
var state_26687__$1 = state_26687;
var statearr_26718_26795 = state_26687__$1;
(statearr_26718_26795[(2)] = false);

(statearr_26718_26795[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (41))){
var inst_26662 = (state_26687[(20)]);
var inst_26666 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26667 = cljs.core.map.call(null,inst_26666,inst_26662);
var inst_26668 = cljs.core.pr_str.call(null,inst_26667);
var inst_26669 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26668)].join('');
var inst_26670 = figwheel.client.utils.log.call(null,inst_26669);
var state_26687__$1 = state_26687;
var statearr_26719_26796 = state_26687__$1;
(statearr_26719_26796[(2)] = inst_26670);

(statearr_26719_26796[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (43))){
var inst_26663 = (state_26687[(21)]);
var inst_26673 = (state_26687[(2)]);
var inst_26674 = cljs.core.not_empty.call(null,inst_26663);
var state_26687__$1 = (function (){var statearr_26720 = state_26687;
(statearr_26720[(27)] = inst_26673);

return statearr_26720;
})();
if(cljs.core.truth_(inst_26674)){
var statearr_26721_26797 = state_26687__$1;
(statearr_26721_26797[(1)] = (44));

} else {
var statearr_26722_26798 = state_26687__$1;
(statearr_26722_26798[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (29))){
var inst_26606 = (state_26687[(26)]);
var inst_26603 = (state_26687[(23)]);
var inst_26600 = (state_26687[(19)]);
var inst_26604 = (state_26687[(24)]);
var inst_26608 = (state_26687[(25)]);
var inst_26640 = (state_26687[(16)]);
var inst_26636 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26639 = (function (){var all_files = inst_26600;
var res_SINGLEQUOTE_ = inst_26603;
var res = inst_26604;
var files_not_loaded = inst_26606;
var dependencies_that_loaded = inst_26608;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26606,inst_26603,inst_26600,inst_26604,inst_26608,inst_26640,inst_26636,state_val_26688,c__22583__auto__,map__26532,map__26532__$1,opts,before_jsload,on_jsload,reload_dependents,map__26533,map__26533__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26638){
var map__26723 = p__26638;
var map__26723__$1 = ((((!((map__26723 == null)))?(((((map__26723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26723):map__26723);
var namespace = cljs.core.get.call(null,map__26723__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26606,inst_26603,inst_26600,inst_26604,inst_26608,inst_26640,inst_26636,state_val_26688,c__22583__auto__,map__26532,map__26532__$1,opts,before_jsload,on_jsload,reload_dependents,map__26533,map__26533__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26640__$1 = cljs.core.group_by.call(null,inst_26639,inst_26606);
var inst_26642 = (inst_26640__$1 == null);
var inst_26643 = cljs.core.not.call(null,inst_26642);
var state_26687__$1 = (function (){var statearr_26725 = state_26687;
(statearr_26725[(28)] = inst_26636);

(statearr_26725[(16)] = inst_26640__$1);

return statearr_26725;
})();
if(inst_26643){
var statearr_26726_26799 = state_26687__$1;
(statearr_26726_26799[(1)] = (32));

} else {
var statearr_26727_26800 = state_26687__$1;
(statearr_26727_26800[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (44))){
var inst_26663 = (state_26687[(21)]);
var inst_26676 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26663);
var inst_26677 = cljs.core.pr_str.call(null,inst_26676);
var inst_26678 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26677)].join('');
var inst_26679 = figwheel.client.utils.log.call(null,inst_26678);
var state_26687__$1 = state_26687;
var statearr_26728_26801 = state_26687__$1;
(statearr_26728_26801[(2)] = inst_26679);

(statearr_26728_26801[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (6))){
var inst_26581 = (state_26687[(2)]);
var state_26687__$1 = state_26687;
var statearr_26729_26802 = state_26687__$1;
(statearr_26729_26802[(2)] = inst_26581);

(statearr_26729_26802[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (28))){
var inst_26606 = (state_26687[(26)]);
var inst_26633 = (state_26687[(2)]);
var inst_26634 = cljs.core.not_empty.call(null,inst_26606);
var state_26687__$1 = (function (){var statearr_26730 = state_26687;
(statearr_26730[(29)] = inst_26633);

return statearr_26730;
})();
if(cljs.core.truth_(inst_26634)){
var statearr_26731_26803 = state_26687__$1;
(statearr_26731_26803[(1)] = (29));

} else {
var statearr_26732_26804 = state_26687__$1;
(statearr_26732_26804[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (25))){
var inst_26604 = (state_26687[(24)]);
var inst_26620 = (state_26687[(2)]);
var inst_26621 = cljs.core.not_empty.call(null,inst_26604);
var state_26687__$1 = (function (){var statearr_26733 = state_26687;
(statearr_26733[(30)] = inst_26620);

return statearr_26733;
})();
if(cljs.core.truth_(inst_26621)){
var statearr_26734_26805 = state_26687__$1;
(statearr_26734_26805[(1)] = (26));

} else {
var statearr_26735_26806 = state_26687__$1;
(statearr_26735_26806[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (34))){
var inst_26656 = (state_26687[(2)]);
var state_26687__$1 = state_26687;
if(cljs.core.truth_(inst_26656)){
var statearr_26736_26807 = state_26687__$1;
(statearr_26736_26807[(1)] = (38));

} else {
var statearr_26737_26808 = state_26687__$1;
(statearr_26737_26808[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (17))){
var state_26687__$1 = state_26687;
var statearr_26738_26809 = state_26687__$1;
(statearr_26738_26809[(2)] = recompile_dependents);

(statearr_26738_26809[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (3))){
var state_26687__$1 = state_26687;
var statearr_26739_26810 = state_26687__$1;
(statearr_26739_26810[(2)] = null);

(statearr_26739_26810[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (12))){
var inst_26577 = (state_26687[(2)]);
var state_26687__$1 = state_26687;
var statearr_26740_26811 = state_26687__$1;
(statearr_26740_26811[(2)] = inst_26577);

(statearr_26740_26811[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (2))){
var inst_26539 = (state_26687[(13)]);
var inst_26546 = cljs.core.seq.call(null,inst_26539);
var inst_26547 = inst_26546;
var inst_26548 = null;
var inst_26549 = (0);
var inst_26550 = (0);
var state_26687__$1 = (function (){var statearr_26741 = state_26687;
(statearr_26741[(7)] = inst_26547);

(statearr_26741[(8)] = inst_26549);

(statearr_26741[(9)] = inst_26548);

(statearr_26741[(10)] = inst_26550);

return statearr_26741;
})();
var statearr_26742_26812 = state_26687__$1;
(statearr_26742_26812[(2)] = null);

(statearr_26742_26812[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (23))){
var inst_26606 = (state_26687[(26)]);
var inst_26603 = (state_26687[(23)]);
var inst_26600 = (state_26687[(19)]);
var inst_26604 = (state_26687[(24)]);
var inst_26608 = (state_26687[(25)]);
var inst_26611 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26613 = (function (){var all_files = inst_26600;
var res_SINGLEQUOTE_ = inst_26603;
var res = inst_26604;
var files_not_loaded = inst_26606;
var dependencies_that_loaded = inst_26608;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26606,inst_26603,inst_26600,inst_26604,inst_26608,inst_26611,state_val_26688,c__22583__auto__,map__26532,map__26532__$1,opts,before_jsload,on_jsload,reload_dependents,map__26533,map__26533__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26612){
var map__26743 = p__26612;
var map__26743__$1 = ((((!((map__26743 == null)))?(((((map__26743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26743):map__26743);
var request_url = cljs.core.get.call(null,map__26743__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26606,inst_26603,inst_26600,inst_26604,inst_26608,inst_26611,state_val_26688,c__22583__auto__,map__26532,map__26532__$1,opts,before_jsload,on_jsload,reload_dependents,map__26533,map__26533__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26614 = cljs.core.reverse.call(null,inst_26608);
var inst_26615 = cljs.core.map.call(null,inst_26613,inst_26614);
var inst_26616 = cljs.core.pr_str.call(null,inst_26615);
var inst_26617 = figwheel.client.utils.log.call(null,inst_26616);
var state_26687__$1 = (function (){var statearr_26745 = state_26687;
(statearr_26745[(31)] = inst_26611);

return statearr_26745;
})();
var statearr_26746_26813 = state_26687__$1;
(statearr_26746_26813[(2)] = inst_26617);

(statearr_26746_26813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (35))){
var state_26687__$1 = state_26687;
var statearr_26747_26814 = state_26687__$1;
(statearr_26747_26814[(2)] = true);

(statearr_26747_26814[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (19))){
var inst_26590 = (state_26687[(12)]);
var inst_26596 = figwheel.client.file_reloading.expand_files.call(null,inst_26590);
var state_26687__$1 = state_26687;
var statearr_26748_26815 = state_26687__$1;
(statearr_26748_26815[(2)] = inst_26596);

(statearr_26748_26815[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (11))){
var state_26687__$1 = state_26687;
var statearr_26749_26816 = state_26687__$1;
(statearr_26749_26816[(2)] = null);

(statearr_26749_26816[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (9))){
var inst_26579 = (state_26687[(2)]);
var state_26687__$1 = state_26687;
var statearr_26750_26817 = state_26687__$1;
(statearr_26750_26817[(2)] = inst_26579);

(statearr_26750_26817[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (5))){
var inst_26549 = (state_26687[(8)]);
var inst_26550 = (state_26687[(10)]);
var inst_26552 = (inst_26550 < inst_26549);
var inst_26553 = inst_26552;
var state_26687__$1 = state_26687;
if(cljs.core.truth_(inst_26553)){
var statearr_26751_26818 = state_26687__$1;
(statearr_26751_26818[(1)] = (7));

} else {
var statearr_26752_26819 = state_26687__$1;
(statearr_26752_26819[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (14))){
var inst_26560 = (state_26687[(22)]);
var inst_26569 = cljs.core.first.call(null,inst_26560);
var inst_26570 = figwheel.client.file_reloading.eval_body.call(null,inst_26569,opts);
var inst_26571 = cljs.core.next.call(null,inst_26560);
var inst_26547 = inst_26571;
var inst_26548 = null;
var inst_26549 = (0);
var inst_26550 = (0);
var state_26687__$1 = (function (){var statearr_26753 = state_26687;
(statearr_26753[(7)] = inst_26547);

(statearr_26753[(8)] = inst_26549);

(statearr_26753[(32)] = inst_26570);

(statearr_26753[(9)] = inst_26548);

(statearr_26753[(10)] = inst_26550);

return statearr_26753;
})();
var statearr_26754_26820 = state_26687__$1;
(statearr_26754_26820[(2)] = null);

(statearr_26754_26820[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (45))){
var state_26687__$1 = state_26687;
var statearr_26755_26821 = state_26687__$1;
(statearr_26755_26821[(2)] = null);

(statearr_26755_26821[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (26))){
var inst_26606 = (state_26687[(26)]);
var inst_26603 = (state_26687[(23)]);
var inst_26600 = (state_26687[(19)]);
var inst_26604 = (state_26687[(24)]);
var inst_26608 = (state_26687[(25)]);
var inst_26623 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26625 = (function (){var all_files = inst_26600;
var res_SINGLEQUOTE_ = inst_26603;
var res = inst_26604;
var files_not_loaded = inst_26606;
var dependencies_that_loaded = inst_26608;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26606,inst_26603,inst_26600,inst_26604,inst_26608,inst_26623,state_val_26688,c__22583__auto__,map__26532,map__26532__$1,opts,before_jsload,on_jsload,reload_dependents,map__26533,map__26533__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26624){
var map__26756 = p__26624;
var map__26756__$1 = ((((!((map__26756 == null)))?(((((map__26756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26756):map__26756);
var namespace = cljs.core.get.call(null,map__26756__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26756__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26606,inst_26603,inst_26600,inst_26604,inst_26608,inst_26623,state_val_26688,c__22583__auto__,map__26532,map__26532__$1,opts,before_jsload,on_jsload,reload_dependents,map__26533,map__26533__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26626 = cljs.core.map.call(null,inst_26625,inst_26604);
var inst_26627 = cljs.core.pr_str.call(null,inst_26626);
var inst_26628 = figwheel.client.utils.log.call(null,inst_26627);
var inst_26629 = (function (){var all_files = inst_26600;
var res_SINGLEQUOTE_ = inst_26603;
var res = inst_26604;
var files_not_loaded = inst_26606;
var dependencies_that_loaded = inst_26608;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26606,inst_26603,inst_26600,inst_26604,inst_26608,inst_26623,inst_26625,inst_26626,inst_26627,inst_26628,state_val_26688,c__22583__auto__,map__26532,map__26532__$1,opts,before_jsload,on_jsload,reload_dependents,map__26533,map__26533__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26606,inst_26603,inst_26600,inst_26604,inst_26608,inst_26623,inst_26625,inst_26626,inst_26627,inst_26628,state_val_26688,c__22583__auto__,map__26532,map__26532__$1,opts,before_jsload,on_jsload,reload_dependents,map__26533,map__26533__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26630 = setTimeout(inst_26629,(10));
var state_26687__$1 = (function (){var statearr_26758 = state_26687;
(statearr_26758[(33)] = inst_26628);

(statearr_26758[(34)] = inst_26623);

return statearr_26758;
})();
var statearr_26759_26822 = state_26687__$1;
(statearr_26759_26822[(2)] = inst_26630);

(statearr_26759_26822[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (16))){
var state_26687__$1 = state_26687;
var statearr_26760_26823 = state_26687__$1;
(statearr_26760_26823[(2)] = reload_dependents);

(statearr_26760_26823[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (38))){
var inst_26640 = (state_26687[(16)]);
var inst_26658 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26640);
var state_26687__$1 = state_26687;
var statearr_26761_26824 = state_26687__$1;
(statearr_26761_26824[(2)] = inst_26658);

(statearr_26761_26824[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (30))){
var state_26687__$1 = state_26687;
var statearr_26762_26825 = state_26687__$1;
(statearr_26762_26825[(2)] = null);

(statearr_26762_26825[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (10))){
var inst_26560 = (state_26687[(22)]);
var inst_26562 = cljs.core.chunked_seq_QMARK_.call(null,inst_26560);
var state_26687__$1 = state_26687;
if(inst_26562){
var statearr_26763_26826 = state_26687__$1;
(statearr_26763_26826[(1)] = (13));

} else {
var statearr_26764_26827 = state_26687__$1;
(statearr_26764_26827[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (18))){
var inst_26594 = (state_26687[(2)]);
var state_26687__$1 = state_26687;
if(cljs.core.truth_(inst_26594)){
var statearr_26765_26828 = state_26687__$1;
(statearr_26765_26828[(1)] = (19));

} else {
var statearr_26766_26829 = state_26687__$1;
(statearr_26766_26829[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (42))){
var state_26687__$1 = state_26687;
var statearr_26767_26830 = state_26687__$1;
(statearr_26767_26830[(2)] = null);

(statearr_26767_26830[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (37))){
var inst_26653 = (state_26687[(2)]);
var state_26687__$1 = state_26687;
var statearr_26768_26831 = state_26687__$1;
(statearr_26768_26831[(2)] = inst_26653);

(statearr_26768_26831[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (8))){
var inst_26560 = (state_26687[(22)]);
var inst_26547 = (state_26687[(7)]);
var inst_26560__$1 = cljs.core.seq.call(null,inst_26547);
var state_26687__$1 = (function (){var statearr_26769 = state_26687;
(statearr_26769[(22)] = inst_26560__$1);

return statearr_26769;
})();
if(inst_26560__$1){
var statearr_26770_26832 = state_26687__$1;
(statearr_26770_26832[(1)] = (10));

} else {
var statearr_26771_26833 = state_26687__$1;
(statearr_26771_26833[(1)] = (11));

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
});})(c__22583__auto__,map__26532,map__26532__$1,opts,before_jsload,on_jsload,reload_dependents,map__26533,map__26533__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22495__auto__,c__22583__auto__,map__26532,map__26532__$1,opts,before_jsload,on_jsload,reload_dependents,map__26533,map__26533__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22496__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22496__auto____0 = (function (){
var statearr_26772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26772[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22496__auto__);

(statearr_26772[(1)] = (1));

return statearr_26772;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22496__auto____1 = (function (state_26687){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_26687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e26773){if((e26773 instanceof Object)){
var ex__22499__auto__ = e26773;
var statearr_26774_26834 = state_26687;
(statearr_26774_26834[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26835 = state_26687;
state_26687 = G__26835;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22496__auto__ = function(state_26687){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22496__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22496__auto____1.call(this,state_26687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22496__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22496__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto__,map__26532,map__26532__$1,opts,before_jsload,on_jsload,reload_dependents,map__26533,map__26533__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22585__auto__ = (function (){var statearr_26775 = f__22584__auto__.call(null);
(statearr_26775[(6)] = c__22583__auto__);

return statearr_26775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto__,map__26532,map__26532__$1,opts,before_jsload,on_jsload,reload_dependents,map__26533,map__26533__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22583__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26838,link){
var map__26839 = p__26838;
var map__26839__$1 = ((((!((map__26839 == null)))?(((((map__26839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26839):map__26839);
var file = cljs.core.get.call(null,map__26839__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__26839,map__26839__$1,file){
return (function (p1__26836_SHARP_,p2__26837_SHARP_){
if(cljs.core._EQ_.call(null,p1__26836_SHARP_,p2__26837_SHARP_)){
return p1__26836_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__26839,map__26839__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26842){
var map__26843 = p__26842;
var map__26843__$1 = ((((!((map__26843 == null)))?(((((map__26843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26843):map__26843);
var match_length = cljs.core.get.call(null,map__26843__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26843__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26841_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26841_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26845_SHARP_,p2__26846_SHARP_){
return cljs.core.assoc.call(null,p1__26845_SHARP_,cljs.core.get.call(null,p2__26846_SHARP_,key),p2__26846_SHARP_);
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
var loaded_f_datas_26847 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_26847);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_26847);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26848,p__26849){
var map__26850 = p__26848;
var map__26850__$1 = ((((!((map__26850 == null)))?(((((map__26850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26850):map__26850);
var on_cssload = cljs.core.get.call(null,map__26850__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__26851 = p__26849;
var map__26851__$1 = ((((!((map__26851 == null)))?(((((map__26851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26851):map__26851);
var files_msg = map__26851__$1;
var files = cljs.core.get.call(null,map__26851__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1534453582137
