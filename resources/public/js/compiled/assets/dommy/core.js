// Compiled by ClojureScript 1.10.238 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__3922__auto__ = elem.textContent;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__2204 = arguments.length;
switch (G__2204) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__2207 = arguments.length;
switch (G__2207) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__2211 = arguments.length;
switch (G__2211) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__2209_SHARP_){
return !((p1__2209_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___2225 = arguments.length;
var i__4500__auto___2226 = (0);
while(true){
if((i__4500__auto___2226 < len__4499__auto___2225)){
args__4502__auto__.push((arguments[i__4500__auto___2226]));

var G__2227 = (i__4500__auto___2226 + (1));
i__4500__auto___2226 = G__2227;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__2215_2228 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__2216_2229 = null;
var count__2217_2230 = (0);
var i__2218_2231 = (0);
while(true){
if((i__2218_2231 < count__2217_2230)){
var vec__2219_2232 = cljs.core._nth.call(null,chunk__2216_2229,i__2218_2231);
var k_2233 = cljs.core.nth.call(null,vec__2219_2232,(0),null);
var v_2234 = cljs.core.nth.call(null,vec__2219_2232,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_2233),v_2234);


var G__2235 = seq__2215_2228;
var G__2236 = chunk__2216_2229;
var G__2237 = count__2217_2230;
var G__2238 = (i__2218_2231 + (1));
seq__2215_2228 = G__2235;
chunk__2216_2229 = G__2236;
count__2217_2230 = G__2237;
i__2218_2231 = G__2238;
continue;
} else {
var temp__4657__auto___2239 = cljs.core.seq.call(null,seq__2215_2228);
if(temp__4657__auto___2239){
var seq__2215_2240__$1 = temp__4657__auto___2239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2215_2240__$1)){
var c__4319__auto___2241 = cljs.core.chunk_first.call(null,seq__2215_2240__$1);
var G__2242 = cljs.core.chunk_rest.call(null,seq__2215_2240__$1);
var G__2243 = c__4319__auto___2241;
var G__2244 = cljs.core.count.call(null,c__4319__auto___2241);
var G__2245 = (0);
seq__2215_2228 = G__2242;
chunk__2216_2229 = G__2243;
count__2217_2230 = G__2244;
i__2218_2231 = G__2245;
continue;
} else {
var vec__2222_2246 = cljs.core.first.call(null,seq__2215_2240__$1);
var k_2247 = cljs.core.nth.call(null,vec__2222_2246,(0),null);
var v_2248 = cljs.core.nth.call(null,vec__2222_2246,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_2247),v_2248);


var G__2249 = cljs.core.next.call(null,seq__2215_2240__$1);
var G__2250 = null;
var G__2251 = (0);
var G__2252 = (0);
seq__2215_2228 = G__2249;
chunk__2216_2229 = G__2250;
count__2217_2230 = G__2251;
i__2218_2231 = G__2252;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq2213){
var G__2214 = cljs.core.first.call(null,seq2213);
var seq2213__$1 = cljs.core.next.call(null,seq2213);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2214,seq2213__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___2259 = arguments.length;
var i__4500__auto___2260 = (0);
while(true){
if((i__4500__auto___2260 < len__4499__auto___2259)){
args__4502__auto__.push((arguments[i__4500__auto___2260]));

var G__2261 = (i__4500__auto___2260 + (1));
i__4500__auto___2260 = G__2261;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__2255_2262 = cljs.core.seq.call(null,keywords);
var chunk__2256_2263 = null;
var count__2257_2264 = (0);
var i__2258_2265 = (0);
while(true){
if((i__2258_2265 < count__2257_2264)){
var kw_2266 = cljs.core._nth.call(null,chunk__2256_2263,i__2258_2265);
style.removeProperty(dommy.utils.as_str.call(null,kw_2266));


var G__2267 = seq__2255_2262;
var G__2268 = chunk__2256_2263;
var G__2269 = count__2257_2264;
var G__2270 = (i__2258_2265 + (1));
seq__2255_2262 = G__2267;
chunk__2256_2263 = G__2268;
count__2257_2264 = G__2269;
i__2258_2265 = G__2270;
continue;
} else {
var temp__4657__auto___2271 = cljs.core.seq.call(null,seq__2255_2262);
if(temp__4657__auto___2271){
var seq__2255_2272__$1 = temp__4657__auto___2271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2255_2272__$1)){
var c__4319__auto___2273 = cljs.core.chunk_first.call(null,seq__2255_2272__$1);
var G__2274 = cljs.core.chunk_rest.call(null,seq__2255_2272__$1);
var G__2275 = c__4319__auto___2273;
var G__2276 = cljs.core.count.call(null,c__4319__auto___2273);
var G__2277 = (0);
seq__2255_2262 = G__2274;
chunk__2256_2263 = G__2275;
count__2257_2264 = G__2276;
i__2258_2265 = G__2277;
continue;
} else {
var kw_2278 = cljs.core.first.call(null,seq__2255_2272__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_2278));


var G__2279 = cljs.core.next.call(null,seq__2255_2272__$1);
var G__2280 = null;
var G__2281 = (0);
var G__2282 = (0);
seq__2255_2262 = G__2279;
chunk__2256_2263 = G__2280;
count__2257_2264 = G__2281;
i__2258_2265 = G__2282;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq2253){
var G__2254 = cljs.core.first.call(null,seq2253);
var seq2253__$1 = cljs.core.next.call(null,seq2253);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2254,seq2253__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___2295 = arguments.length;
var i__4500__auto___2296 = (0);
while(true){
if((i__4500__auto___2296 < len__4499__auto___2295)){
args__4502__auto__.push((arguments[i__4500__auto___2296]));

var G__2297 = (i__4500__auto___2296 + (1));
i__4500__auto___2296 = G__2297;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__2285_2298 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__2286_2299 = null;
var count__2287_2300 = (0);
var i__2288_2301 = (0);
while(true){
if((i__2288_2301 < count__2287_2300)){
var vec__2289_2302 = cljs.core._nth.call(null,chunk__2286_2299,i__2288_2301);
var k_2303 = cljs.core.nth.call(null,vec__2289_2302,(0),null);
var v_2304 = cljs.core.nth.call(null,vec__2289_2302,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_2303,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_2304),"px"].join(''));


var G__2305 = seq__2285_2298;
var G__2306 = chunk__2286_2299;
var G__2307 = count__2287_2300;
var G__2308 = (i__2288_2301 + (1));
seq__2285_2298 = G__2305;
chunk__2286_2299 = G__2306;
count__2287_2300 = G__2307;
i__2288_2301 = G__2308;
continue;
} else {
var temp__4657__auto___2309 = cljs.core.seq.call(null,seq__2285_2298);
if(temp__4657__auto___2309){
var seq__2285_2310__$1 = temp__4657__auto___2309;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2285_2310__$1)){
var c__4319__auto___2311 = cljs.core.chunk_first.call(null,seq__2285_2310__$1);
var G__2312 = cljs.core.chunk_rest.call(null,seq__2285_2310__$1);
var G__2313 = c__4319__auto___2311;
var G__2314 = cljs.core.count.call(null,c__4319__auto___2311);
var G__2315 = (0);
seq__2285_2298 = G__2312;
chunk__2286_2299 = G__2313;
count__2287_2300 = G__2314;
i__2288_2301 = G__2315;
continue;
} else {
var vec__2292_2316 = cljs.core.first.call(null,seq__2285_2310__$1);
var k_2317 = cljs.core.nth.call(null,vec__2292_2316,(0),null);
var v_2318 = cljs.core.nth.call(null,vec__2292_2316,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_2317,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_2318),"px"].join(''));


var G__2319 = cljs.core.next.call(null,seq__2285_2310__$1);
var G__2320 = null;
var G__2321 = (0);
var G__2322 = (0);
seq__2285_2298 = G__2319;
chunk__2286_2299 = G__2320;
count__2287_2300 = G__2321;
i__2288_2301 = G__2322;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq2283){
var G__2284 = cljs.core.first.call(null,seq2283);
var seq2283__$1 = cljs.core.next.call(null,seq2283);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2284,seq2283__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__2328 = arguments.length;
switch (G__2328) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___2342 = arguments.length;
var i__4500__auto___2343 = (0);
while(true){
if((i__4500__auto___2343 < len__4499__auto___2342)){
args_arr__4514__auto__.push((arguments[i__4500__auto___2343]));

var G__2344 = (i__4500__auto___2343 + (1));
i__4500__auto___2343 = G__2344;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4515__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__2329 = elem;
(G__2329[k__$1] = v);

return G__2329;
} else {
var G__2330 = elem;
G__2330.setAttribute(k__$1,v);

return G__2330;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__2331_2345 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__2332_2346 = null;
var count__2333_2347 = (0);
var i__2334_2348 = (0);
while(true){
if((i__2334_2348 < count__2333_2347)){
var vec__2335_2349 = cljs.core._nth.call(null,chunk__2332_2346,i__2334_2348);
var k_2350__$1 = cljs.core.nth.call(null,vec__2335_2349,(0),null);
var v_2351__$1 = cljs.core.nth.call(null,vec__2335_2349,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_2350__$1,v_2351__$1);


var G__2352 = seq__2331_2345;
var G__2353 = chunk__2332_2346;
var G__2354 = count__2333_2347;
var G__2355 = (i__2334_2348 + (1));
seq__2331_2345 = G__2352;
chunk__2332_2346 = G__2353;
count__2333_2347 = G__2354;
i__2334_2348 = G__2355;
continue;
} else {
var temp__4657__auto___2356 = cljs.core.seq.call(null,seq__2331_2345);
if(temp__4657__auto___2356){
var seq__2331_2357__$1 = temp__4657__auto___2356;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2331_2357__$1)){
var c__4319__auto___2358 = cljs.core.chunk_first.call(null,seq__2331_2357__$1);
var G__2359 = cljs.core.chunk_rest.call(null,seq__2331_2357__$1);
var G__2360 = c__4319__auto___2358;
var G__2361 = cljs.core.count.call(null,c__4319__auto___2358);
var G__2362 = (0);
seq__2331_2345 = G__2359;
chunk__2332_2346 = G__2360;
count__2333_2347 = G__2361;
i__2334_2348 = G__2362;
continue;
} else {
var vec__2338_2363 = cljs.core.first.call(null,seq__2331_2357__$1);
var k_2364__$1 = cljs.core.nth.call(null,vec__2338_2363,(0),null);
var v_2365__$1 = cljs.core.nth.call(null,vec__2338_2363,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_2364__$1,v_2365__$1);


var G__2366 = cljs.core.next.call(null,seq__2331_2357__$1);
var G__2367 = null;
var G__2368 = (0);
var G__2369 = (0);
seq__2331_2345 = G__2366;
chunk__2332_2346 = G__2367;
count__2333_2347 = G__2368;
i__2334_2348 = G__2369;
continue;
}
} else {
}
}
break;
}

return elem;
});

/** @this {Function} */
dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq2324){
var G__2325 = cljs.core.first.call(null,seq2324);
var seq2324__$1 = cljs.core.next.call(null,seq2324);
var G__2326 = cljs.core.first.call(null,seq2324__$1);
var seq2324__$2 = cljs.core.next.call(null,seq2324__$1);
var G__2327 = cljs.core.first.call(null,seq2324__$2);
var seq2324__$3 = cljs.core.next.call(null,seq2324__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2325,G__2326,G__2327,seq2324__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__2374 = arguments.length;
switch (G__2374) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___2380 = arguments.length;
var i__4500__auto___2381 = (0);
while(true){
if((i__4500__auto___2381 < len__4499__auto___2380)){
args_arr__4514__auto__.push((arguments[i__4500__auto___2381]));

var G__2382 = (i__4500__auto___2381 + (1));
i__4500__auto___2381 = G__2382;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_2383__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_2383__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_2383__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__2375_2384 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__2376_2385 = null;
var count__2377_2386 = (0);
var i__2378_2387 = (0);
while(true){
if((i__2378_2387 < count__2377_2386)){
var k_2388__$1 = cljs.core._nth.call(null,chunk__2376_2385,i__2378_2387);
dommy.core.remove_attr_BANG_.call(null,elem,k_2388__$1);


var G__2389 = seq__2375_2384;
var G__2390 = chunk__2376_2385;
var G__2391 = count__2377_2386;
var G__2392 = (i__2378_2387 + (1));
seq__2375_2384 = G__2389;
chunk__2376_2385 = G__2390;
count__2377_2386 = G__2391;
i__2378_2387 = G__2392;
continue;
} else {
var temp__4657__auto___2393 = cljs.core.seq.call(null,seq__2375_2384);
if(temp__4657__auto___2393){
var seq__2375_2394__$1 = temp__4657__auto___2393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2375_2394__$1)){
var c__4319__auto___2395 = cljs.core.chunk_first.call(null,seq__2375_2394__$1);
var G__2396 = cljs.core.chunk_rest.call(null,seq__2375_2394__$1);
var G__2397 = c__4319__auto___2395;
var G__2398 = cljs.core.count.call(null,c__4319__auto___2395);
var G__2399 = (0);
seq__2375_2384 = G__2396;
chunk__2376_2385 = G__2397;
count__2377_2386 = G__2398;
i__2378_2387 = G__2399;
continue;
} else {
var k_2400__$1 = cljs.core.first.call(null,seq__2375_2394__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_2400__$1);


var G__2401 = cljs.core.next.call(null,seq__2375_2394__$1);
var G__2402 = null;
var G__2403 = (0);
var G__2404 = (0);
seq__2375_2384 = G__2401;
chunk__2376_2385 = G__2402;
count__2377_2386 = G__2403;
i__2378_2387 = G__2404;
continue;
}
} else {
}
}
break;
}

return elem;
});

/** @this {Function} */
dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq2371){
var G__2372 = cljs.core.first.call(null,seq2371);
var seq2371__$1 = cljs.core.next.call(null,seq2371);
var G__2373 = cljs.core.first.call(null,seq2371__$1);
var seq2371__$2 = cljs.core.next.call(null,seq2371__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2372,G__2373,seq2371__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__2406 = arguments.length;
switch (G__2406) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__2412 = arguments.length;
switch (G__2412) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___2426 = arguments.length;
var i__4500__auto___2427 = (0);
while(true){
if((i__4500__auto___2427 < len__4499__auto___2426)){
args_arr__4514__auto__.push((arguments[i__4500__auto___2427]));

var G__2428 = (i__4500__auto___2427 + (1));
i__4500__auto___2427 = G__2428;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___2429 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___2429)){
var class_list_2430 = temp__4655__auto___2429;
var seq__2413_2431 = cljs.core.seq.call(null,classes__$1);
var chunk__2414_2432 = null;
var count__2415_2433 = (0);
var i__2416_2434 = (0);
while(true){
if((i__2416_2434 < count__2415_2433)){
var c_2435 = cljs.core._nth.call(null,chunk__2414_2432,i__2416_2434);
class_list_2430.add(c_2435);


var G__2436 = seq__2413_2431;
var G__2437 = chunk__2414_2432;
var G__2438 = count__2415_2433;
var G__2439 = (i__2416_2434 + (1));
seq__2413_2431 = G__2436;
chunk__2414_2432 = G__2437;
count__2415_2433 = G__2438;
i__2416_2434 = G__2439;
continue;
} else {
var temp__4657__auto___2440 = cljs.core.seq.call(null,seq__2413_2431);
if(temp__4657__auto___2440){
var seq__2413_2441__$1 = temp__4657__auto___2440;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2413_2441__$1)){
var c__4319__auto___2442 = cljs.core.chunk_first.call(null,seq__2413_2441__$1);
var G__2443 = cljs.core.chunk_rest.call(null,seq__2413_2441__$1);
var G__2444 = c__4319__auto___2442;
var G__2445 = cljs.core.count.call(null,c__4319__auto___2442);
var G__2446 = (0);
seq__2413_2431 = G__2443;
chunk__2414_2432 = G__2444;
count__2415_2433 = G__2445;
i__2416_2434 = G__2446;
continue;
} else {
var c_2447 = cljs.core.first.call(null,seq__2413_2441__$1);
class_list_2430.add(c_2447);


var G__2448 = cljs.core.next.call(null,seq__2413_2441__$1);
var G__2449 = null;
var G__2450 = (0);
var G__2451 = (0);
seq__2413_2431 = G__2448;
chunk__2414_2432 = G__2449;
count__2415_2433 = G__2450;
i__2416_2434 = G__2451;
continue;
}
} else {
}
}
break;
}
} else {
var seq__2417_2452 = cljs.core.seq.call(null,classes__$1);
var chunk__2418_2453 = null;
var count__2419_2454 = (0);
var i__2420_2455 = (0);
while(true){
if((i__2420_2455 < count__2419_2454)){
var c_2456 = cljs.core._nth.call(null,chunk__2418_2453,i__2420_2455);
var class_name_2457 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_2457,c_2456))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_2457 === ""))?c_2456:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_2457)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_2456)].join('')));
}


var G__2458 = seq__2417_2452;
var G__2459 = chunk__2418_2453;
var G__2460 = count__2419_2454;
var G__2461 = (i__2420_2455 + (1));
seq__2417_2452 = G__2458;
chunk__2418_2453 = G__2459;
count__2419_2454 = G__2460;
i__2420_2455 = G__2461;
continue;
} else {
var temp__4657__auto___2462 = cljs.core.seq.call(null,seq__2417_2452);
if(temp__4657__auto___2462){
var seq__2417_2463__$1 = temp__4657__auto___2462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2417_2463__$1)){
var c__4319__auto___2464 = cljs.core.chunk_first.call(null,seq__2417_2463__$1);
var G__2465 = cljs.core.chunk_rest.call(null,seq__2417_2463__$1);
var G__2466 = c__4319__auto___2464;
var G__2467 = cljs.core.count.call(null,c__4319__auto___2464);
var G__2468 = (0);
seq__2417_2452 = G__2465;
chunk__2418_2453 = G__2466;
count__2419_2454 = G__2467;
i__2420_2455 = G__2468;
continue;
} else {
var c_2469 = cljs.core.first.call(null,seq__2417_2463__$1);
var class_name_2470 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_2470,c_2469))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_2470 === ""))?c_2469:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_2470)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_2469)].join('')));
}


var G__2471 = cljs.core.next.call(null,seq__2417_2463__$1);
var G__2472 = null;
var G__2473 = (0);
var G__2474 = (0);
seq__2417_2452 = G__2471;
chunk__2418_2453 = G__2472;
count__2419_2454 = G__2473;
i__2420_2455 = G__2474;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__2421_2475 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__2422_2476 = null;
var count__2423_2477 = (0);
var i__2424_2478 = (0);
while(true){
if((i__2424_2478 < count__2423_2477)){
var c_2479 = cljs.core._nth.call(null,chunk__2422_2476,i__2424_2478);
dommy.core.add_class_BANG_.call(null,elem,c_2479);


var G__2480 = seq__2421_2475;
var G__2481 = chunk__2422_2476;
var G__2482 = count__2423_2477;
var G__2483 = (i__2424_2478 + (1));
seq__2421_2475 = G__2480;
chunk__2422_2476 = G__2481;
count__2423_2477 = G__2482;
i__2424_2478 = G__2483;
continue;
} else {
var temp__4657__auto___2484 = cljs.core.seq.call(null,seq__2421_2475);
if(temp__4657__auto___2484){
var seq__2421_2485__$1 = temp__4657__auto___2484;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2421_2485__$1)){
var c__4319__auto___2486 = cljs.core.chunk_first.call(null,seq__2421_2485__$1);
var G__2487 = cljs.core.chunk_rest.call(null,seq__2421_2485__$1);
var G__2488 = c__4319__auto___2486;
var G__2489 = cljs.core.count.call(null,c__4319__auto___2486);
var G__2490 = (0);
seq__2421_2475 = G__2487;
chunk__2422_2476 = G__2488;
count__2423_2477 = G__2489;
i__2424_2478 = G__2490;
continue;
} else {
var c_2491 = cljs.core.first.call(null,seq__2421_2485__$1);
dommy.core.add_class_BANG_.call(null,elem,c_2491);


var G__2492 = cljs.core.next.call(null,seq__2421_2485__$1);
var G__2493 = null;
var G__2494 = (0);
var G__2495 = (0);
seq__2421_2475 = G__2492;
chunk__2422_2476 = G__2493;
count__2423_2477 = G__2494;
i__2424_2478 = G__2495;
continue;
}
} else {
}
}
break;
}

return elem;
});

/** @this {Function} */
dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq2409){
var G__2410 = cljs.core.first.call(null,seq2409);
var seq2409__$1 = cljs.core.next.call(null,seq2409);
var G__2411 = cljs.core.first.call(null,seq2409__$1);
var seq2409__$2 = cljs.core.next.call(null,seq2409__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2410,G__2411,seq2409__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__2500 = arguments.length;
switch (G__2500) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___2506 = arguments.length;
var i__4500__auto___2507 = (0);
while(true){
if((i__4500__auto___2507 < len__4499__auto___2506)){
args_arr__4514__auto__.push((arguments[i__4500__auto___2507]));

var G__2508 = (i__4500__auto___2507 + (1));
i__4500__auto___2507 = G__2508;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___2509 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___2509)){
var class_list_2510 = temp__4655__auto___2509;
class_list_2510.remove(c__$1);
} else {
var class_name_2511 = dommy.core.class$.call(null,elem);
var new_class_name_2512 = dommy.utils.remove_class_str.call(null,class_name_2511,c__$1);
if((class_name_2511 === new_class_name_2512)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_2512);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__2501 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__2502 = null;
var count__2503 = (0);
var i__2504 = (0);
while(true){
if((i__2504 < count__2503)){
var c = cljs.core._nth.call(null,chunk__2502,i__2504);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__2513 = seq__2501;
var G__2514 = chunk__2502;
var G__2515 = count__2503;
var G__2516 = (i__2504 + (1));
seq__2501 = G__2513;
chunk__2502 = G__2514;
count__2503 = G__2515;
i__2504 = G__2516;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__2501);
if(temp__4657__auto__){
var seq__2501__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2501__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__2501__$1);
var G__2517 = cljs.core.chunk_rest.call(null,seq__2501__$1);
var G__2518 = c__4319__auto__;
var G__2519 = cljs.core.count.call(null,c__4319__auto__);
var G__2520 = (0);
seq__2501 = G__2517;
chunk__2502 = G__2518;
count__2503 = G__2519;
i__2504 = G__2520;
continue;
} else {
var c = cljs.core.first.call(null,seq__2501__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__2521 = cljs.core.next.call(null,seq__2501__$1);
var G__2522 = null;
var G__2523 = (0);
var G__2524 = (0);
seq__2501 = G__2521;
chunk__2502 = G__2522;
count__2503 = G__2523;
i__2504 = G__2524;
continue;
}
} else {
return null;
}
}
break;
}
});

/** @this {Function} */
dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq2497){
var G__2498 = cljs.core.first.call(null,seq2497);
var seq2497__$1 = cljs.core.next.call(null,seq2497);
var G__2499 = cljs.core.first.call(null,seq2497__$1);
var seq2497__$2 = cljs.core.next.call(null,seq2497__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2498,G__2499,seq2497__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__2526 = arguments.length;
switch (G__2526) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___2528 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___2528)){
var class_list_2529 = temp__4655__auto___2528;
class_list_2529.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__2531 = arguments.length;
switch (G__2531) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__2534 = arguments.length;
switch (G__2534) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__2540 = arguments.length;
switch (G__2540) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___2547 = arguments.length;
var i__4500__auto___2548 = (0);
while(true){
if((i__4500__auto___2548 < len__4499__auto___2547)){
args_arr__4514__auto__.push((arguments[i__4500__auto___2548]));

var G__2549 = (i__4500__auto___2548 + (1));
i__4500__auto___2548 = G__2549;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__2541 = parent;
G__2541.appendChild(child);

return G__2541;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__2542_2550 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__2543_2551 = null;
var count__2544_2552 = (0);
var i__2545_2553 = (0);
while(true){
if((i__2545_2553 < count__2544_2552)){
var c_2554 = cljs.core._nth.call(null,chunk__2543_2551,i__2545_2553);
dommy.core.append_BANG_.call(null,parent,c_2554);


var G__2555 = seq__2542_2550;
var G__2556 = chunk__2543_2551;
var G__2557 = count__2544_2552;
var G__2558 = (i__2545_2553 + (1));
seq__2542_2550 = G__2555;
chunk__2543_2551 = G__2556;
count__2544_2552 = G__2557;
i__2545_2553 = G__2558;
continue;
} else {
var temp__4657__auto___2559 = cljs.core.seq.call(null,seq__2542_2550);
if(temp__4657__auto___2559){
var seq__2542_2560__$1 = temp__4657__auto___2559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2542_2560__$1)){
var c__4319__auto___2561 = cljs.core.chunk_first.call(null,seq__2542_2560__$1);
var G__2562 = cljs.core.chunk_rest.call(null,seq__2542_2560__$1);
var G__2563 = c__4319__auto___2561;
var G__2564 = cljs.core.count.call(null,c__4319__auto___2561);
var G__2565 = (0);
seq__2542_2550 = G__2562;
chunk__2543_2551 = G__2563;
count__2544_2552 = G__2564;
i__2545_2553 = G__2565;
continue;
} else {
var c_2566 = cljs.core.first.call(null,seq__2542_2560__$1);
dommy.core.append_BANG_.call(null,parent,c_2566);


var G__2567 = cljs.core.next.call(null,seq__2542_2560__$1);
var G__2568 = null;
var G__2569 = (0);
var G__2570 = (0);
seq__2542_2550 = G__2567;
chunk__2543_2551 = G__2568;
count__2544_2552 = G__2569;
i__2545_2553 = G__2570;
continue;
}
} else {
}
}
break;
}

return parent;
});

/** @this {Function} */
dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq2537){
var G__2538 = cljs.core.first.call(null,seq2537);
var seq2537__$1 = cljs.core.next.call(null,seq2537);
var G__2539 = cljs.core.first.call(null,seq2537__$1);
var seq2537__$2 = cljs.core.next.call(null,seq2537__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2538,G__2539,seq2537__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__2575 = arguments.length;
switch (G__2575) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___2582 = arguments.length;
var i__4500__auto___2583 = (0);
while(true){
if((i__4500__auto___2583 < len__4499__auto___2582)){
args_arr__4514__auto__.push((arguments[i__4500__auto___2583]));

var G__2584 = (i__4500__auto___2583 + (1));
i__4500__auto___2583 = G__2584;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__2576 = parent;
G__2576.insertBefore(child,parent.firstChild);

return G__2576;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__2577_2585 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__2578_2586 = null;
var count__2579_2587 = (0);
var i__2580_2588 = (0);
while(true){
if((i__2580_2588 < count__2579_2587)){
var c_2589 = cljs.core._nth.call(null,chunk__2578_2586,i__2580_2588);
dommy.core.prepend_BANG_.call(null,parent,c_2589);


var G__2590 = seq__2577_2585;
var G__2591 = chunk__2578_2586;
var G__2592 = count__2579_2587;
var G__2593 = (i__2580_2588 + (1));
seq__2577_2585 = G__2590;
chunk__2578_2586 = G__2591;
count__2579_2587 = G__2592;
i__2580_2588 = G__2593;
continue;
} else {
var temp__4657__auto___2594 = cljs.core.seq.call(null,seq__2577_2585);
if(temp__4657__auto___2594){
var seq__2577_2595__$1 = temp__4657__auto___2594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2577_2595__$1)){
var c__4319__auto___2596 = cljs.core.chunk_first.call(null,seq__2577_2595__$1);
var G__2597 = cljs.core.chunk_rest.call(null,seq__2577_2595__$1);
var G__2598 = c__4319__auto___2596;
var G__2599 = cljs.core.count.call(null,c__4319__auto___2596);
var G__2600 = (0);
seq__2577_2585 = G__2597;
chunk__2578_2586 = G__2598;
count__2579_2587 = G__2599;
i__2580_2588 = G__2600;
continue;
} else {
var c_2601 = cljs.core.first.call(null,seq__2577_2595__$1);
dommy.core.prepend_BANG_.call(null,parent,c_2601);


var G__2602 = cljs.core.next.call(null,seq__2577_2595__$1);
var G__2603 = null;
var G__2604 = (0);
var G__2605 = (0);
seq__2577_2585 = G__2602;
chunk__2578_2586 = G__2603;
count__2579_2587 = G__2604;
i__2580_2588 = G__2605;
continue;
}
} else {
}
}
break;
}

return parent;
});

/** @this {Function} */
dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq2572){
var G__2573 = cljs.core.first.call(null,seq2572);
var seq2572__$1 = cljs.core.next.call(null,seq2572);
var G__2574 = cljs.core.first.call(null,seq2572__$1);
var seq2572__$2 = cljs.core.next.call(null,seq2572__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2573,G__2574,seq2572__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___2606 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___2606)){
var next_2607 = temp__4655__auto___2606;
dommy.core.insert_before_BANG_.call(null,elem,next_2607);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__2609 = arguments.length;
switch (G__2609) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__2610 = p;
G__2610.removeChild(elem);

return G__2610;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__2612){
var vec__2613 = p__2612;
var special_mouse_event = cljs.core.nth.call(null,vec__2613,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__2613,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__2613,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__2613,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__3922__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__3911__auto__ = related_target;
if(cljs.core.truth_(and__3911__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__3911__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__2613,special_mouse_event,real_mouse_event))
});})(vec__2613,special_mouse_event,real_mouse_event))
])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__3911__auto__ = selected_target;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__3911__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__3922__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___2619 = arguments.length;
var i__4500__auto___2620 = (0);
while(true){
if((i__4500__auto___2620 < len__4499__auto___2619)){
args__4502__auto__.push((arguments[i__4500__auto___2620]));

var G__2621 = (i__4500__auto___2620 + (1));
i__4500__auto___2620 = G__2621;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq2616){
var G__2617 = cljs.core.first.call(null,seq2616);
var seq2616__$1 = cljs.core.next.call(null,seq2616);
var G__2618 = cljs.core.first.call(null,seq2616__$1);
var seq2616__$2 = cljs.core.next.call(null,seq2616__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2617,G__2618,seq2616__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___2661 = arguments.length;
var i__4500__auto___2662 = (0);
while(true){
if((i__4500__auto___2662 < len__4499__auto___2661)){
args__4502__auto__.push((arguments[i__4500__auto___2662]));

var G__2663 = (i__4500__auto___2662 + (1));
i__4500__auto___2662 = G__2663;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__2624_2664 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_2665 = cljs.core.nth.call(null,vec__2624_2664,(0),null);
var selector_2666 = cljs.core.nth.call(null,vec__2624_2664,(1),null);
var seq__2627_2667 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__2634_2668 = null;
var count__2635_2669 = (0);
var i__2636_2670 = (0);
while(true){
if((i__2636_2670 < count__2635_2669)){
var vec__2643_2671 = cljs.core._nth.call(null,chunk__2634_2668,i__2636_2670);
var orig_type_2672 = cljs.core.nth.call(null,vec__2643_2671,(0),null);
var f_2673 = cljs.core.nth.call(null,vec__2643_2671,(1),null);
var seq__2637_2674 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_2672,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_2672,cljs.core.identity])));
var chunk__2639_2675 = null;
var count__2640_2676 = (0);
var i__2641_2677 = (0);
while(true){
if((i__2641_2677 < count__2640_2676)){
var vec__2646_2678 = cljs.core._nth.call(null,chunk__2639_2675,i__2641_2677);
var actual_type_2679 = cljs.core.nth.call(null,vec__2646_2678,(0),null);
var factory_2680 = cljs.core.nth.call(null,vec__2646_2678,(1),null);
var canonical_f_2681 = (cljs.core.truth_(selector_2666)?cljs.core.partial.call(null,dommy.core.live_listener,elem_2665,selector_2666):cljs.core.identity).call(null,factory_2680.call(null,f_2673));
dommy.core.update_event_listeners_BANG_.call(null,elem_2665,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2666,actual_type_2679,f_2673], null),canonical_f_2681);

if(cljs.core.truth_(elem_2665.addEventListener)){
elem_2665.addEventListener(cljs.core.name.call(null,actual_type_2679),canonical_f_2681);
} else {
elem_2665.attachEvent(cljs.core.name.call(null,actual_type_2679),canonical_f_2681);
}


var G__2682 = seq__2637_2674;
var G__2683 = chunk__2639_2675;
var G__2684 = count__2640_2676;
var G__2685 = (i__2641_2677 + (1));
seq__2637_2674 = G__2682;
chunk__2639_2675 = G__2683;
count__2640_2676 = G__2684;
i__2641_2677 = G__2685;
continue;
} else {
var temp__4657__auto___2686 = cljs.core.seq.call(null,seq__2637_2674);
if(temp__4657__auto___2686){
var seq__2637_2687__$1 = temp__4657__auto___2686;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2637_2687__$1)){
var c__4319__auto___2688 = cljs.core.chunk_first.call(null,seq__2637_2687__$1);
var G__2689 = cljs.core.chunk_rest.call(null,seq__2637_2687__$1);
var G__2690 = c__4319__auto___2688;
var G__2691 = cljs.core.count.call(null,c__4319__auto___2688);
var G__2692 = (0);
seq__2637_2674 = G__2689;
chunk__2639_2675 = G__2690;
count__2640_2676 = G__2691;
i__2641_2677 = G__2692;
continue;
} else {
var vec__2649_2693 = cljs.core.first.call(null,seq__2637_2687__$1);
var actual_type_2694 = cljs.core.nth.call(null,vec__2649_2693,(0),null);
var factory_2695 = cljs.core.nth.call(null,vec__2649_2693,(1),null);
var canonical_f_2696 = (cljs.core.truth_(selector_2666)?cljs.core.partial.call(null,dommy.core.live_listener,elem_2665,selector_2666):cljs.core.identity).call(null,factory_2695.call(null,f_2673));
dommy.core.update_event_listeners_BANG_.call(null,elem_2665,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2666,actual_type_2694,f_2673], null),canonical_f_2696);

if(cljs.core.truth_(elem_2665.addEventListener)){
elem_2665.addEventListener(cljs.core.name.call(null,actual_type_2694),canonical_f_2696);
} else {
elem_2665.attachEvent(cljs.core.name.call(null,actual_type_2694),canonical_f_2696);
}


var G__2697 = cljs.core.next.call(null,seq__2637_2687__$1);
var G__2698 = null;
var G__2699 = (0);
var G__2700 = (0);
seq__2637_2674 = G__2697;
chunk__2639_2675 = G__2698;
count__2640_2676 = G__2699;
i__2641_2677 = G__2700;
continue;
}
} else {
}
}
break;
}

var G__2701 = seq__2627_2667;
var G__2702 = chunk__2634_2668;
var G__2703 = count__2635_2669;
var G__2704 = (i__2636_2670 + (1));
seq__2627_2667 = G__2701;
chunk__2634_2668 = G__2702;
count__2635_2669 = G__2703;
i__2636_2670 = G__2704;
continue;
} else {
var temp__4657__auto___2705 = cljs.core.seq.call(null,seq__2627_2667);
if(temp__4657__auto___2705){
var seq__2627_2706__$1 = temp__4657__auto___2705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2627_2706__$1)){
var c__4319__auto___2707 = cljs.core.chunk_first.call(null,seq__2627_2706__$1);
var G__2708 = cljs.core.chunk_rest.call(null,seq__2627_2706__$1);
var G__2709 = c__4319__auto___2707;
var G__2710 = cljs.core.count.call(null,c__4319__auto___2707);
var G__2711 = (0);
seq__2627_2667 = G__2708;
chunk__2634_2668 = G__2709;
count__2635_2669 = G__2710;
i__2636_2670 = G__2711;
continue;
} else {
var vec__2652_2712 = cljs.core.first.call(null,seq__2627_2706__$1);
var orig_type_2713 = cljs.core.nth.call(null,vec__2652_2712,(0),null);
var f_2714 = cljs.core.nth.call(null,vec__2652_2712,(1),null);
var seq__2628_2715 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_2713,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_2713,cljs.core.identity])));
var chunk__2630_2716 = null;
var count__2631_2717 = (0);
var i__2632_2718 = (0);
while(true){
if((i__2632_2718 < count__2631_2717)){
var vec__2655_2719 = cljs.core._nth.call(null,chunk__2630_2716,i__2632_2718);
var actual_type_2720 = cljs.core.nth.call(null,vec__2655_2719,(0),null);
var factory_2721 = cljs.core.nth.call(null,vec__2655_2719,(1),null);
var canonical_f_2722 = (cljs.core.truth_(selector_2666)?cljs.core.partial.call(null,dommy.core.live_listener,elem_2665,selector_2666):cljs.core.identity).call(null,factory_2721.call(null,f_2714));
dommy.core.update_event_listeners_BANG_.call(null,elem_2665,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2666,actual_type_2720,f_2714], null),canonical_f_2722);

if(cljs.core.truth_(elem_2665.addEventListener)){
elem_2665.addEventListener(cljs.core.name.call(null,actual_type_2720),canonical_f_2722);
} else {
elem_2665.attachEvent(cljs.core.name.call(null,actual_type_2720),canonical_f_2722);
}


var G__2723 = seq__2628_2715;
var G__2724 = chunk__2630_2716;
var G__2725 = count__2631_2717;
var G__2726 = (i__2632_2718 + (1));
seq__2628_2715 = G__2723;
chunk__2630_2716 = G__2724;
count__2631_2717 = G__2725;
i__2632_2718 = G__2726;
continue;
} else {
var temp__4657__auto___2727__$1 = cljs.core.seq.call(null,seq__2628_2715);
if(temp__4657__auto___2727__$1){
var seq__2628_2728__$1 = temp__4657__auto___2727__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2628_2728__$1)){
var c__4319__auto___2729 = cljs.core.chunk_first.call(null,seq__2628_2728__$1);
var G__2730 = cljs.core.chunk_rest.call(null,seq__2628_2728__$1);
var G__2731 = c__4319__auto___2729;
var G__2732 = cljs.core.count.call(null,c__4319__auto___2729);
var G__2733 = (0);
seq__2628_2715 = G__2730;
chunk__2630_2716 = G__2731;
count__2631_2717 = G__2732;
i__2632_2718 = G__2733;
continue;
} else {
var vec__2658_2734 = cljs.core.first.call(null,seq__2628_2728__$1);
var actual_type_2735 = cljs.core.nth.call(null,vec__2658_2734,(0),null);
var factory_2736 = cljs.core.nth.call(null,vec__2658_2734,(1),null);
var canonical_f_2737 = (cljs.core.truth_(selector_2666)?cljs.core.partial.call(null,dommy.core.live_listener,elem_2665,selector_2666):cljs.core.identity).call(null,factory_2736.call(null,f_2714));
dommy.core.update_event_listeners_BANG_.call(null,elem_2665,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2666,actual_type_2735,f_2714], null),canonical_f_2737);

if(cljs.core.truth_(elem_2665.addEventListener)){
elem_2665.addEventListener(cljs.core.name.call(null,actual_type_2735),canonical_f_2737);
} else {
elem_2665.attachEvent(cljs.core.name.call(null,actual_type_2735),canonical_f_2737);
}


var G__2738 = cljs.core.next.call(null,seq__2628_2728__$1);
var G__2739 = null;
var G__2740 = (0);
var G__2741 = (0);
seq__2628_2715 = G__2738;
chunk__2630_2716 = G__2739;
count__2631_2717 = G__2740;
i__2632_2718 = G__2741;
continue;
}
} else {
}
}
break;
}

var G__2742 = cljs.core.next.call(null,seq__2627_2706__$1);
var G__2743 = null;
var G__2744 = (0);
var G__2745 = (0);
seq__2627_2667 = G__2742;
chunk__2634_2668 = G__2743;
count__2635_2669 = G__2744;
i__2636_2670 = G__2745;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq2622){
var G__2623 = cljs.core.first.call(null,seq2622);
var seq2622__$1 = cljs.core.next.call(null,seq2622);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2623,seq2622__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___2785 = arguments.length;
var i__4500__auto___2786 = (0);
while(true){
if((i__4500__auto___2786 < len__4499__auto___2785)){
args__4502__auto__.push((arguments[i__4500__auto___2786]));

var G__2787 = (i__4500__auto___2786 + (1));
i__4500__auto___2786 = G__2787;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__2748_2788 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_2789 = cljs.core.nth.call(null,vec__2748_2788,(0),null);
var selector_2790 = cljs.core.nth.call(null,vec__2748_2788,(1),null);
var seq__2751_2791 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__2758_2792 = null;
var count__2759_2793 = (0);
var i__2760_2794 = (0);
while(true){
if((i__2760_2794 < count__2759_2793)){
var vec__2767_2795 = cljs.core._nth.call(null,chunk__2758_2792,i__2760_2794);
var orig_type_2796 = cljs.core.nth.call(null,vec__2767_2795,(0),null);
var f_2797 = cljs.core.nth.call(null,vec__2767_2795,(1),null);
var seq__2761_2798 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_2796,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_2796,cljs.core.identity])));
var chunk__2763_2799 = null;
var count__2764_2800 = (0);
var i__2765_2801 = (0);
while(true){
if((i__2765_2801 < count__2764_2800)){
var vec__2770_2802 = cljs.core._nth.call(null,chunk__2763_2799,i__2765_2801);
var actual_type_2803 = cljs.core.nth.call(null,vec__2770_2802,(0),null);
var __2804 = cljs.core.nth.call(null,vec__2770_2802,(1),null);
var keys_2805 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2790,actual_type_2803,f_2797], null);
var canonical_f_2806 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_2789),keys_2805);
dommy.core.update_event_listeners_BANG_.call(null,elem_2789,dommy.utils.dissoc_in,keys_2805);

if(cljs.core.truth_(elem_2789.removeEventListener)){
elem_2789.removeEventListener(cljs.core.name.call(null,actual_type_2803),canonical_f_2806);
} else {
elem_2789.detachEvent(cljs.core.name.call(null,actual_type_2803),canonical_f_2806);
}


var G__2807 = seq__2761_2798;
var G__2808 = chunk__2763_2799;
var G__2809 = count__2764_2800;
var G__2810 = (i__2765_2801 + (1));
seq__2761_2798 = G__2807;
chunk__2763_2799 = G__2808;
count__2764_2800 = G__2809;
i__2765_2801 = G__2810;
continue;
} else {
var temp__4657__auto___2811 = cljs.core.seq.call(null,seq__2761_2798);
if(temp__4657__auto___2811){
var seq__2761_2812__$1 = temp__4657__auto___2811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2761_2812__$1)){
var c__4319__auto___2813 = cljs.core.chunk_first.call(null,seq__2761_2812__$1);
var G__2814 = cljs.core.chunk_rest.call(null,seq__2761_2812__$1);
var G__2815 = c__4319__auto___2813;
var G__2816 = cljs.core.count.call(null,c__4319__auto___2813);
var G__2817 = (0);
seq__2761_2798 = G__2814;
chunk__2763_2799 = G__2815;
count__2764_2800 = G__2816;
i__2765_2801 = G__2817;
continue;
} else {
var vec__2773_2818 = cljs.core.first.call(null,seq__2761_2812__$1);
var actual_type_2819 = cljs.core.nth.call(null,vec__2773_2818,(0),null);
var __2820 = cljs.core.nth.call(null,vec__2773_2818,(1),null);
var keys_2821 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2790,actual_type_2819,f_2797], null);
var canonical_f_2822 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_2789),keys_2821);
dommy.core.update_event_listeners_BANG_.call(null,elem_2789,dommy.utils.dissoc_in,keys_2821);

if(cljs.core.truth_(elem_2789.removeEventListener)){
elem_2789.removeEventListener(cljs.core.name.call(null,actual_type_2819),canonical_f_2822);
} else {
elem_2789.detachEvent(cljs.core.name.call(null,actual_type_2819),canonical_f_2822);
}


var G__2823 = cljs.core.next.call(null,seq__2761_2812__$1);
var G__2824 = null;
var G__2825 = (0);
var G__2826 = (0);
seq__2761_2798 = G__2823;
chunk__2763_2799 = G__2824;
count__2764_2800 = G__2825;
i__2765_2801 = G__2826;
continue;
}
} else {
}
}
break;
}

var G__2827 = seq__2751_2791;
var G__2828 = chunk__2758_2792;
var G__2829 = count__2759_2793;
var G__2830 = (i__2760_2794 + (1));
seq__2751_2791 = G__2827;
chunk__2758_2792 = G__2828;
count__2759_2793 = G__2829;
i__2760_2794 = G__2830;
continue;
} else {
var temp__4657__auto___2831 = cljs.core.seq.call(null,seq__2751_2791);
if(temp__4657__auto___2831){
var seq__2751_2832__$1 = temp__4657__auto___2831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2751_2832__$1)){
var c__4319__auto___2833 = cljs.core.chunk_first.call(null,seq__2751_2832__$1);
var G__2834 = cljs.core.chunk_rest.call(null,seq__2751_2832__$1);
var G__2835 = c__4319__auto___2833;
var G__2836 = cljs.core.count.call(null,c__4319__auto___2833);
var G__2837 = (0);
seq__2751_2791 = G__2834;
chunk__2758_2792 = G__2835;
count__2759_2793 = G__2836;
i__2760_2794 = G__2837;
continue;
} else {
var vec__2776_2838 = cljs.core.first.call(null,seq__2751_2832__$1);
var orig_type_2839 = cljs.core.nth.call(null,vec__2776_2838,(0),null);
var f_2840 = cljs.core.nth.call(null,vec__2776_2838,(1),null);
var seq__2752_2841 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_2839,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_2839,cljs.core.identity])));
var chunk__2754_2842 = null;
var count__2755_2843 = (0);
var i__2756_2844 = (0);
while(true){
if((i__2756_2844 < count__2755_2843)){
var vec__2779_2845 = cljs.core._nth.call(null,chunk__2754_2842,i__2756_2844);
var actual_type_2846 = cljs.core.nth.call(null,vec__2779_2845,(0),null);
var __2847 = cljs.core.nth.call(null,vec__2779_2845,(1),null);
var keys_2848 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2790,actual_type_2846,f_2840], null);
var canonical_f_2849 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_2789),keys_2848);
dommy.core.update_event_listeners_BANG_.call(null,elem_2789,dommy.utils.dissoc_in,keys_2848);

if(cljs.core.truth_(elem_2789.removeEventListener)){
elem_2789.removeEventListener(cljs.core.name.call(null,actual_type_2846),canonical_f_2849);
} else {
elem_2789.detachEvent(cljs.core.name.call(null,actual_type_2846),canonical_f_2849);
}


var G__2850 = seq__2752_2841;
var G__2851 = chunk__2754_2842;
var G__2852 = count__2755_2843;
var G__2853 = (i__2756_2844 + (1));
seq__2752_2841 = G__2850;
chunk__2754_2842 = G__2851;
count__2755_2843 = G__2852;
i__2756_2844 = G__2853;
continue;
} else {
var temp__4657__auto___2854__$1 = cljs.core.seq.call(null,seq__2752_2841);
if(temp__4657__auto___2854__$1){
var seq__2752_2855__$1 = temp__4657__auto___2854__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2752_2855__$1)){
var c__4319__auto___2856 = cljs.core.chunk_first.call(null,seq__2752_2855__$1);
var G__2857 = cljs.core.chunk_rest.call(null,seq__2752_2855__$1);
var G__2858 = c__4319__auto___2856;
var G__2859 = cljs.core.count.call(null,c__4319__auto___2856);
var G__2860 = (0);
seq__2752_2841 = G__2857;
chunk__2754_2842 = G__2858;
count__2755_2843 = G__2859;
i__2756_2844 = G__2860;
continue;
} else {
var vec__2782_2861 = cljs.core.first.call(null,seq__2752_2855__$1);
var actual_type_2862 = cljs.core.nth.call(null,vec__2782_2861,(0),null);
var __2863 = cljs.core.nth.call(null,vec__2782_2861,(1),null);
var keys_2864 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2790,actual_type_2862,f_2840], null);
var canonical_f_2865 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_2789),keys_2864);
dommy.core.update_event_listeners_BANG_.call(null,elem_2789,dommy.utils.dissoc_in,keys_2864);

if(cljs.core.truth_(elem_2789.removeEventListener)){
elem_2789.removeEventListener(cljs.core.name.call(null,actual_type_2862),canonical_f_2865);
} else {
elem_2789.detachEvent(cljs.core.name.call(null,actual_type_2862),canonical_f_2865);
}


var G__2866 = cljs.core.next.call(null,seq__2752_2855__$1);
var G__2867 = null;
var G__2868 = (0);
var G__2869 = (0);
seq__2752_2841 = G__2866;
chunk__2754_2842 = G__2867;
count__2755_2843 = G__2868;
i__2756_2844 = G__2869;
continue;
}
} else {
}
}
break;
}

var G__2870 = cljs.core.next.call(null,seq__2751_2832__$1);
var G__2871 = null;
var G__2872 = (0);
var G__2873 = (0);
seq__2751_2791 = G__2870;
chunk__2758_2792 = G__2871;
count__2759_2793 = G__2872;
i__2760_2794 = G__2873;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq2746){
var G__2747 = cljs.core.first.call(null,seq2746);
var seq2746__$1 = cljs.core.next.call(null,seq2746);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2747,seq2746__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___2889 = arguments.length;
var i__4500__auto___2890 = (0);
while(true){
if((i__4500__auto___2890 < len__4499__auto___2889)){
args__4502__auto__.push((arguments[i__4500__auto___2890]));

var G__2891 = (i__4500__auto___2890 + (1));
i__4500__auto___2890 = G__2891;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__2876_2892 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_2893 = cljs.core.nth.call(null,vec__2876_2892,(0),null);
var selector_2894 = cljs.core.nth.call(null,vec__2876_2892,(1),null);
var seq__2879_2895 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__2880_2896 = null;
var count__2881_2897 = (0);
var i__2882_2898 = (0);
while(true){
if((i__2882_2898 < count__2881_2897)){
var vec__2883_2899 = cljs.core._nth.call(null,chunk__2880_2896,i__2882_2898);
var type_2900 = cljs.core.nth.call(null,vec__2883_2899,(0),null);
var f_2901 = cljs.core.nth.call(null,vec__2883_2899,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_2900,((function (seq__2879_2895,chunk__2880_2896,count__2881_2897,i__2882_2898,vec__2883_2899,type_2900,f_2901,vec__2876_2892,elem_2893,selector_2894){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_2900,dommy$core$this_fn);

return f_2901.call(null,e);
});})(seq__2879_2895,chunk__2880_2896,count__2881_2897,i__2882_2898,vec__2883_2899,type_2900,f_2901,vec__2876_2892,elem_2893,selector_2894))
);


var G__2902 = seq__2879_2895;
var G__2903 = chunk__2880_2896;
var G__2904 = count__2881_2897;
var G__2905 = (i__2882_2898 + (1));
seq__2879_2895 = G__2902;
chunk__2880_2896 = G__2903;
count__2881_2897 = G__2904;
i__2882_2898 = G__2905;
continue;
} else {
var temp__4657__auto___2906 = cljs.core.seq.call(null,seq__2879_2895);
if(temp__4657__auto___2906){
var seq__2879_2907__$1 = temp__4657__auto___2906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2879_2907__$1)){
var c__4319__auto___2908 = cljs.core.chunk_first.call(null,seq__2879_2907__$1);
var G__2909 = cljs.core.chunk_rest.call(null,seq__2879_2907__$1);
var G__2910 = c__4319__auto___2908;
var G__2911 = cljs.core.count.call(null,c__4319__auto___2908);
var G__2912 = (0);
seq__2879_2895 = G__2909;
chunk__2880_2896 = G__2910;
count__2881_2897 = G__2911;
i__2882_2898 = G__2912;
continue;
} else {
var vec__2886_2913 = cljs.core.first.call(null,seq__2879_2907__$1);
var type_2914 = cljs.core.nth.call(null,vec__2886_2913,(0),null);
var f_2915 = cljs.core.nth.call(null,vec__2886_2913,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_2914,((function (seq__2879_2895,chunk__2880_2896,count__2881_2897,i__2882_2898,vec__2886_2913,type_2914,f_2915,seq__2879_2907__$1,temp__4657__auto___2906,vec__2876_2892,elem_2893,selector_2894){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_2914,dommy$core$this_fn);

return f_2915.call(null,e);
});})(seq__2879_2895,chunk__2880_2896,count__2881_2897,i__2882_2898,vec__2886_2913,type_2914,f_2915,seq__2879_2907__$1,temp__4657__auto___2906,vec__2876_2892,elem_2893,selector_2894))
);


var G__2916 = cljs.core.next.call(null,seq__2879_2907__$1);
var G__2917 = null;
var G__2918 = (0);
var G__2919 = (0);
seq__2879_2895 = G__2916;
chunk__2880_2896 = G__2917;
count__2881_2897 = G__2918;
i__2882_2898 = G__2919;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq2874){
var G__2875 = cljs.core.first.call(null,seq2874);
var seq2874__$1 = cljs.core.next.call(null,seq2874);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2875,seq2874__$1);
});


//# sourceMappingURL=core.js.map?rel=1528622897703
