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
var G__2212 = arguments.length;
switch (G__2212) {
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
var G__2215 = arguments.length;
switch (G__2215) {
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
var G__2219 = arguments.length;
switch (G__2219) {
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
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__2217_SHARP_){
return !((p1__2217_SHARP_ === base));
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
var len__4499__auto___2233 = arguments.length;
var i__4500__auto___2234 = (0);
while(true){
if((i__4500__auto___2234 < len__4499__auto___2233)){
args__4502__auto__.push((arguments[i__4500__auto___2234]));

var G__2235 = (i__4500__auto___2234 + (1));
i__4500__auto___2234 = G__2235;
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
var seq__2223_2236 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__2224_2237 = null;
var count__2225_2238 = (0);
var i__2226_2239 = (0);
while(true){
if((i__2226_2239 < count__2225_2238)){
var vec__2227_2240 = cljs.core._nth.call(null,chunk__2224_2237,i__2226_2239);
var k_2241 = cljs.core.nth.call(null,vec__2227_2240,(0),null);
var v_2242 = cljs.core.nth.call(null,vec__2227_2240,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_2241),v_2242);


var G__2243 = seq__2223_2236;
var G__2244 = chunk__2224_2237;
var G__2245 = count__2225_2238;
var G__2246 = (i__2226_2239 + (1));
seq__2223_2236 = G__2243;
chunk__2224_2237 = G__2244;
count__2225_2238 = G__2245;
i__2226_2239 = G__2246;
continue;
} else {
var temp__4657__auto___2247 = cljs.core.seq.call(null,seq__2223_2236);
if(temp__4657__auto___2247){
var seq__2223_2248__$1 = temp__4657__auto___2247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2223_2248__$1)){
var c__4319__auto___2249 = cljs.core.chunk_first.call(null,seq__2223_2248__$1);
var G__2250 = cljs.core.chunk_rest.call(null,seq__2223_2248__$1);
var G__2251 = c__4319__auto___2249;
var G__2252 = cljs.core.count.call(null,c__4319__auto___2249);
var G__2253 = (0);
seq__2223_2236 = G__2250;
chunk__2224_2237 = G__2251;
count__2225_2238 = G__2252;
i__2226_2239 = G__2253;
continue;
} else {
var vec__2230_2254 = cljs.core.first.call(null,seq__2223_2248__$1);
var k_2255 = cljs.core.nth.call(null,vec__2230_2254,(0),null);
var v_2256 = cljs.core.nth.call(null,vec__2230_2254,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_2255),v_2256);


var G__2257 = cljs.core.next.call(null,seq__2223_2248__$1);
var G__2258 = null;
var G__2259 = (0);
var G__2260 = (0);
seq__2223_2236 = G__2257;
chunk__2224_2237 = G__2258;
count__2225_2238 = G__2259;
i__2226_2239 = G__2260;
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
dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq2221){
var G__2222 = cljs.core.first.call(null,seq2221);
var seq2221__$1 = cljs.core.next.call(null,seq2221);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2222,seq2221__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___2267 = arguments.length;
var i__4500__auto___2268 = (0);
while(true){
if((i__4500__auto___2268 < len__4499__auto___2267)){
args__4502__auto__.push((arguments[i__4500__auto___2268]));

var G__2269 = (i__4500__auto___2268 + (1));
i__4500__auto___2268 = G__2269;
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
var seq__2263_2270 = cljs.core.seq.call(null,keywords);
var chunk__2264_2271 = null;
var count__2265_2272 = (0);
var i__2266_2273 = (0);
while(true){
if((i__2266_2273 < count__2265_2272)){
var kw_2274 = cljs.core._nth.call(null,chunk__2264_2271,i__2266_2273);
style.removeProperty(dommy.utils.as_str.call(null,kw_2274));


var G__2275 = seq__2263_2270;
var G__2276 = chunk__2264_2271;
var G__2277 = count__2265_2272;
var G__2278 = (i__2266_2273 + (1));
seq__2263_2270 = G__2275;
chunk__2264_2271 = G__2276;
count__2265_2272 = G__2277;
i__2266_2273 = G__2278;
continue;
} else {
var temp__4657__auto___2279 = cljs.core.seq.call(null,seq__2263_2270);
if(temp__4657__auto___2279){
var seq__2263_2280__$1 = temp__4657__auto___2279;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2263_2280__$1)){
var c__4319__auto___2281 = cljs.core.chunk_first.call(null,seq__2263_2280__$1);
var G__2282 = cljs.core.chunk_rest.call(null,seq__2263_2280__$1);
var G__2283 = c__4319__auto___2281;
var G__2284 = cljs.core.count.call(null,c__4319__auto___2281);
var G__2285 = (0);
seq__2263_2270 = G__2282;
chunk__2264_2271 = G__2283;
count__2265_2272 = G__2284;
i__2266_2273 = G__2285;
continue;
} else {
var kw_2286 = cljs.core.first.call(null,seq__2263_2280__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_2286));


var G__2287 = cljs.core.next.call(null,seq__2263_2280__$1);
var G__2288 = null;
var G__2289 = (0);
var G__2290 = (0);
seq__2263_2270 = G__2287;
chunk__2264_2271 = G__2288;
count__2265_2272 = G__2289;
i__2266_2273 = G__2290;
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
dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq2261){
var G__2262 = cljs.core.first.call(null,seq2261);
var seq2261__$1 = cljs.core.next.call(null,seq2261);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2262,seq2261__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___2303 = arguments.length;
var i__4500__auto___2304 = (0);
while(true){
if((i__4500__auto___2304 < len__4499__auto___2303)){
args__4502__auto__.push((arguments[i__4500__auto___2304]));

var G__2305 = (i__4500__auto___2304 + (1));
i__4500__auto___2304 = G__2305;
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

var seq__2293_2306 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__2294_2307 = null;
var count__2295_2308 = (0);
var i__2296_2309 = (0);
while(true){
if((i__2296_2309 < count__2295_2308)){
var vec__2297_2310 = cljs.core._nth.call(null,chunk__2294_2307,i__2296_2309);
var k_2311 = cljs.core.nth.call(null,vec__2297_2310,(0),null);
var v_2312 = cljs.core.nth.call(null,vec__2297_2310,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_2311,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_2312),"px"].join(''));


var G__2313 = seq__2293_2306;
var G__2314 = chunk__2294_2307;
var G__2315 = count__2295_2308;
var G__2316 = (i__2296_2309 + (1));
seq__2293_2306 = G__2313;
chunk__2294_2307 = G__2314;
count__2295_2308 = G__2315;
i__2296_2309 = G__2316;
continue;
} else {
var temp__4657__auto___2317 = cljs.core.seq.call(null,seq__2293_2306);
if(temp__4657__auto___2317){
var seq__2293_2318__$1 = temp__4657__auto___2317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2293_2318__$1)){
var c__4319__auto___2319 = cljs.core.chunk_first.call(null,seq__2293_2318__$1);
var G__2320 = cljs.core.chunk_rest.call(null,seq__2293_2318__$1);
var G__2321 = c__4319__auto___2319;
var G__2322 = cljs.core.count.call(null,c__4319__auto___2319);
var G__2323 = (0);
seq__2293_2306 = G__2320;
chunk__2294_2307 = G__2321;
count__2295_2308 = G__2322;
i__2296_2309 = G__2323;
continue;
} else {
var vec__2300_2324 = cljs.core.first.call(null,seq__2293_2318__$1);
var k_2325 = cljs.core.nth.call(null,vec__2300_2324,(0),null);
var v_2326 = cljs.core.nth.call(null,vec__2300_2324,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_2325,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_2326),"px"].join(''));


var G__2327 = cljs.core.next.call(null,seq__2293_2318__$1);
var G__2328 = null;
var G__2329 = (0);
var G__2330 = (0);
seq__2293_2306 = G__2327;
chunk__2294_2307 = G__2328;
count__2295_2308 = G__2329;
i__2296_2309 = G__2330;
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
dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq2291){
var G__2292 = cljs.core.first.call(null,seq2291);
var seq2291__$1 = cljs.core.next.call(null,seq2291);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2292,seq2291__$1);
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
var G__2336 = arguments.length;
switch (G__2336) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___2350 = arguments.length;
var i__4500__auto___2351 = (0);
while(true){
if((i__4500__auto___2351 < len__4499__auto___2350)){
args_arr__4514__auto__.push((arguments[i__4500__auto___2351]));

var G__2352 = (i__4500__auto___2351 + (1));
i__4500__auto___2351 = G__2352;
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
var G__2337 = elem;
(G__2337[k__$1] = v);

return G__2337;
} else {
var G__2338 = elem;
G__2338.setAttribute(k__$1,v);

return G__2338;
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

var seq__2339_2353 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__2340_2354 = null;
var count__2341_2355 = (0);
var i__2342_2356 = (0);
while(true){
if((i__2342_2356 < count__2341_2355)){
var vec__2343_2357 = cljs.core._nth.call(null,chunk__2340_2354,i__2342_2356);
var k_2358__$1 = cljs.core.nth.call(null,vec__2343_2357,(0),null);
var v_2359__$1 = cljs.core.nth.call(null,vec__2343_2357,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_2358__$1,v_2359__$1);


var G__2360 = seq__2339_2353;
var G__2361 = chunk__2340_2354;
var G__2362 = count__2341_2355;
var G__2363 = (i__2342_2356 + (1));
seq__2339_2353 = G__2360;
chunk__2340_2354 = G__2361;
count__2341_2355 = G__2362;
i__2342_2356 = G__2363;
continue;
} else {
var temp__4657__auto___2364 = cljs.core.seq.call(null,seq__2339_2353);
if(temp__4657__auto___2364){
var seq__2339_2365__$1 = temp__4657__auto___2364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2339_2365__$1)){
var c__4319__auto___2366 = cljs.core.chunk_first.call(null,seq__2339_2365__$1);
var G__2367 = cljs.core.chunk_rest.call(null,seq__2339_2365__$1);
var G__2368 = c__4319__auto___2366;
var G__2369 = cljs.core.count.call(null,c__4319__auto___2366);
var G__2370 = (0);
seq__2339_2353 = G__2367;
chunk__2340_2354 = G__2368;
count__2341_2355 = G__2369;
i__2342_2356 = G__2370;
continue;
} else {
var vec__2346_2371 = cljs.core.first.call(null,seq__2339_2365__$1);
var k_2372__$1 = cljs.core.nth.call(null,vec__2346_2371,(0),null);
var v_2373__$1 = cljs.core.nth.call(null,vec__2346_2371,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_2372__$1,v_2373__$1);


var G__2374 = cljs.core.next.call(null,seq__2339_2365__$1);
var G__2375 = null;
var G__2376 = (0);
var G__2377 = (0);
seq__2339_2353 = G__2374;
chunk__2340_2354 = G__2375;
count__2341_2355 = G__2376;
i__2342_2356 = G__2377;
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
dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq2332){
var G__2333 = cljs.core.first.call(null,seq2332);
var seq2332__$1 = cljs.core.next.call(null,seq2332);
var G__2334 = cljs.core.first.call(null,seq2332__$1);
var seq2332__$2 = cljs.core.next.call(null,seq2332__$1);
var G__2335 = cljs.core.first.call(null,seq2332__$2);
var seq2332__$3 = cljs.core.next.call(null,seq2332__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2333,G__2334,G__2335,seq2332__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__2382 = arguments.length;
switch (G__2382) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___2388 = arguments.length;
var i__4500__auto___2389 = (0);
while(true){
if((i__4500__auto___2389 < len__4499__auto___2388)){
args_arr__4514__auto__.push((arguments[i__4500__auto___2389]));

var G__2390 = (i__4500__auto___2389 + (1));
i__4500__auto___2389 = G__2390;
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
var k_2391__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_2391__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_2391__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__2383_2392 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__2384_2393 = null;
var count__2385_2394 = (0);
var i__2386_2395 = (0);
while(true){
if((i__2386_2395 < count__2385_2394)){
var k_2396__$1 = cljs.core._nth.call(null,chunk__2384_2393,i__2386_2395);
dommy.core.remove_attr_BANG_.call(null,elem,k_2396__$1);


var G__2397 = seq__2383_2392;
var G__2398 = chunk__2384_2393;
var G__2399 = count__2385_2394;
var G__2400 = (i__2386_2395 + (1));
seq__2383_2392 = G__2397;
chunk__2384_2393 = G__2398;
count__2385_2394 = G__2399;
i__2386_2395 = G__2400;
continue;
} else {
var temp__4657__auto___2401 = cljs.core.seq.call(null,seq__2383_2392);
if(temp__4657__auto___2401){
var seq__2383_2402__$1 = temp__4657__auto___2401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2383_2402__$1)){
var c__4319__auto___2403 = cljs.core.chunk_first.call(null,seq__2383_2402__$1);
var G__2404 = cljs.core.chunk_rest.call(null,seq__2383_2402__$1);
var G__2405 = c__4319__auto___2403;
var G__2406 = cljs.core.count.call(null,c__4319__auto___2403);
var G__2407 = (0);
seq__2383_2392 = G__2404;
chunk__2384_2393 = G__2405;
count__2385_2394 = G__2406;
i__2386_2395 = G__2407;
continue;
} else {
var k_2408__$1 = cljs.core.first.call(null,seq__2383_2402__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_2408__$1);


var G__2409 = cljs.core.next.call(null,seq__2383_2402__$1);
var G__2410 = null;
var G__2411 = (0);
var G__2412 = (0);
seq__2383_2392 = G__2409;
chunk__2384_2393 = G__2410;
count__2385_2394 = G__2411;
i__2386_2395 = G__2412;
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
dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq2379){
var G__2380 = cljs.core.first.call(null,seq2379);
var seq2379__$1 = cljs.core.next.call(null,seq2379);
var G__2381 = cljs.core.first.call(null,seq2379__$1);
var seq2379__$2 = cljs.core.next.call(null,seq2379__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2380,G__2381,seq2379__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__2414 = arguments.length;
switch (G__2414) {
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
var G__2420 = arguments.length;
switch (G__2420) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___2434 = arguments.length;
var i__4500__auto___2435 = (0);
while(true){
if((i__4500__auto___2435 < len__4499__auto___2434)){
args_arr__4514__auto__.push((arguments[i__4500__auto___2435]));

var G__2436 = (i__4500__auto___2435 + (1));
i__4500__auto___2435 = G__2436;
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
var temp__4655__auto___2437 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___2437)){
var class_list_2438 = temp__4655__auto___2437;
var seq__2421_2439 = cljs.core.seq.call(null,classes__$1);
var chunk__2422_2440 = null;
var count__2423_2441 = (0);
var i__2424_2442 = (0);
while(true){
if((i__2424_2442 < count__2423_2441)){
var c_2443 = cljs.core._nth.call(null,chunk__2422_2440,i__2424_2442);
class_list_2438.add(c_2443);


var G__2444 = seq__2421_2439;
var G__2445 = chunk__2422_2440;
var G__2446 = count__2423_2441;
var G__2447 = (i__2424_2442 + (1));
seq__2421_2439 = G__2444;
chunk__2422_2440 = G__2445;
count__2423_2441 = G__2446;
i__2424_2442 = G__2447;
continue;
} else {
var temp__4657__auto___2448 = cljs.core.seq.call(null,seq__2421_2439);
if(temp__4657__auto___2448){
var seq__2421_2449__$1 = temp__4657__auto___2448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2421_2449__$1)){
var c__4319__auto___2450 = cljs.core.chunk_first.call(null,seq__2421_2449__$1);
var G__2451 = cljs.core.chunk_rest.call(null,seq__2421_2449__$1);
var G__2452 = c__4319__auto___2450;
var G__2453 = cljs.core.count.call(null,c__4319__auto___2450);
var G__2454 = (0);
seq__2421_2439 = G__2451;
chunk__2422_2440 = G__2452;
count__2423_2441 = G__2453;
i__2424_2442 = G__2454;
continue;
} else {
var c_2455 = cljs.core.first.call(null,seq__2421_2449__$1);
class_list_2438.add(c_2455);


var G__2456 = cljs.core.next.call(null,seq__2421_2449__$1);
var G__2457 = null;
var G__2458 = (0);
var G__2459 = (0);
seq__2421_2439 = G__2456;
chunk__2422_2440 = G__2457;
count__2423_2441 = G__2458;
i__2424_2442 = G__2459;
continue;
}
} else {
}
}
break;
}
} else {
var seq__2425_2460 = cljs.core.seq.call(null,classes__$1);
var chunk__2426_2461 = null;
var count__2427_2462 = (0);
var i__2428_2463 = (0);
while(true){
if((i__2428_2463 < count__2427_2462)){
var c_2464 = cljs.core._nth.call(null,chunk__2426_2461,i__2428_2463);
var class_name_2465 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_2465,c_2464))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_2465 === ""))?c_2464:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_2465)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_2464)].join('')));
}


var G__2466 = seq__2425_2460;
var G__2467 = chunk__2426_2461;
var G__2468 = count__2427_2462;
var G__2469 = (i__2428_2463 + (1));
seq__2425_2460 = G__2466;
chunk__2426_2461 = G__2467;
count__2427_2462 = G__2468;
i__2428_2463 = G__2469;
continue;
} else {
var temp__4657__auto___2470 = cljs.core.seq.call(null,seq__2425_2460);
if(temp__4657__auto___2470){
var seq__2425_2471__$1 = temp__4657__auto___2470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2425_2471__$1)){
var c__4319__auto___2472 = cljs.core.chunk_first.call(null,seq__2425_2471__$1);
var G__2473 = cljs.core.chunk_rest.call(null,seq__2425_2471__$1);
var G__2474 = c__4319__auto___2472;
var G__2475 = cljs.core.count.call(null,c__4319__auto___2472);
var G__2476 = (0);
seq__2425_2460 = G__2473;
chunk__2426_2461 = G__2474;
count__2427_2462 = G__2475;
i__2428_2463 = G__2476;
continue;
} else {
var c_2477 = cljs.core.first.call(null,seq__2425_2471__$1);
var class_name_2478 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_2478,c_2477))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_2478 === ""))?c_2477:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_2478)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_2477)].join('')));
}


var G__2479 = cljs.core.next.call(null,seq__2425_2471__$1);
var G__2480 = null;
var G__2481 = (0);
var G__2482 = (0);
seq__2425_2460 = G__2479;
chunk__2426_2461 = G__2480;
count__2427_2462 = G__2481;
i__2428_2463 = G__2482;
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
var seq__2429_2483 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__2430_2484 = null;
var count__2431_2485 = (0);
var i__2432_2486 = (0);
while(true){
if((i__2432_2486 < count__2431_2485)){
var c_2487 = cljs.core._nth.call(null,chunk__2430_2484,i__2432_2486);
dommy.core.add_class_BANG_.call(null,elem,c_2487);


var G__2488 = seq__2429_2483;
var G__2489 = chunk__2430_2484;
var G__2490 = count__2431_2485;
var G__2491 = (i__2432_2486 + (1));
seq__2429_2483 = G__2488;
chunk__2430_2484 = G__2489;
count__2431_2485 = G__2490;
i__2432_2486 = G__2491;
continue;
} else {
var temp__4657__auto___2492 = cljs.core.seq.call(null,seq__2429_2483);
if(temp__4657__auto___2492){
var seq__2429_2493__$1 = temp__4657__auto___2492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2429_2493__$1)){
var c__4319__auto___2494 = cljs.core.chunk_first.call(null,seq__2429_2493__$1);
var G__2495 = cljs.core.chunk_rest.call(null,seq__2429_2493__$1);
var G__2496 = c__4319__auto___2494;
var G__2497 = cljs.core.count.call(null,c__4319__auto___2494);
var G__2498 = (0);
seq__2429_2483 = G__2495;
chunk__2430_2484 = G__2496;
count__2431_2485 = G__2497;
i__2432_2486 = G__2498;
continue;
} else {
var c_2499 = cljs.core.first.call(null,seq__2429_2493__$1);
dommy.core.add_class_BANG_.call(null,elem,c_2499);


var G__2500 = cljs.core.next.call(null,seq__2429_2493__$1);
var G__2501 = null;
var G__2502 = (0);
var G__2503 = (0);
seq__2429_2483 = G__2500;
chunk__2430_2484 = G__2501;
count__2431_2485 = G__2502;
i__2432_2486 = G__2503;
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
dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq2417){
var G__2418 = cljs.core.first.call(null,seq2417);
var seq2417__$1 = cljs.core.next.call(null,seq2417);
var G__2419 = cljs.core.first.call(null,seq2417__$1);
var seq2417__$2 = cljs.core.next.call(null,seq2417__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2418,G__2419,seq2417__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__2508 = arguments.length;
switch (G__2508) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___2514 = arguments.length;
var i__4500__auto___2515 = (0);
while(true){
if((i__4500__auto___2515 < len__4499__auto___2514)){
args_arr__4514__auto__.push((arguments[i__4500__auto___2515]));

var G__2516 = (i__4500__auto___2515 + (1));
i__4500__auto___2515 = G__2516;
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
var temp__4655__auto___2517 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___2517)){
var class_list_2518 = temp__4655__auto___2517;
class_list_2518.remove(c__$1);
} else {
var class_name_2519 = dommy.core.class$.call(null,elem);
var new_class_name_2520 = dommy.utils.remove_class_str.call(null,class_name_2519,c__$1);
if((class_name_2519 === new_class_name_2520)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_2520);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__2509 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__2510 = null;
var count__2511 = (0);
var i__2512 = (0);
while(true){
if((i__2512 < count__2511)){
var c = cljs.core._nth.call(null,chunk__2510,i__2512);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__2521 = seq__2509;
var G__2522 = chunk__2510;
var G__2523 = count__2511;
var G__2524 = (i__2512 + (1));
seq__2509 = G__2521;
chunk__2510 = G__2522;
count__2511 = G__2523;
i__2512 = G__2524;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__2509);
if(temp__4657__auto__){
var seq__2509__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2509__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__2509__$1);
var G__2525 = cljs.core.chunk_rest.call(null,seq__2509__$1);
var G__2526 = c__4319__auto__;
var G__2527 = cljs.core.count.call(null,c__4319__auto__);
var G__2528 = (0);
seq__2509 = G__2525;
chunk__2510 = G__2526;
count__2511 = G__2527;
i__2512 = G__2528;
continue;
} else {
var c = cljs.core.first.call(null,seq__2509__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__2529 = cljs.core.next.call(null,seq__2509__$1);
var G__2530 = null;
var G__2531 = (0);
var G__2532 = (0);
seq__2509 = G__2529;
chunk__2510 = G__2530;
count__2511 = G__2531;
i__2512 = G__2532;
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
dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq2505){
var G__2506 = cljs.core.first.call(null,seq2505);
var seq2505__$1 = cljs.core.next.call(null,seq2505);
var G__2507 = cljs.core.first.call(null,seq2505__$1);
var seq2505__$2 = cljs.core.next.call(null,seq2505__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2506,G__2507,seq2505__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__2534 = arguments.length;
switch (G__2534) {
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
var temp__4655__auto___2536 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___2536)){
var class_list_2537 = temp__4655__auto___2536;
class_list_2537.toggle(c__$1);
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
var G__2539 = arguments.length;
switch (G__2539) {
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
var G__2542 = arguments.length;
switch (G__2542) {
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
var G__2548 = arguments.length;
switch (G__2548) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___2555 = arguments.length;
var i__4500__auto___2556 = (0);
while(true){
if((i__4500__auto___2556 < len__4499__auto___2555)){
args_arr__4514__auto__.push((arguments[i__4500__auto___2556]));

var G__2557 = (i__4500__auto___2556 + (1));
i__4500__auto___2556 = G__2557;
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
var G__2549 = parent;
G__2549.appendChild(child);

return G__2549;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__2550_2558 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__2551_2559 = null;
var count__2552_2560 = (0);
var i__2553_2561 = (0);
while(true){
if((i__2553_2561 < count__2552_2560)){
var c_2562 = cljs.core._nth.call(null,chunk__2551_2559,i__2553_2561);
dommy.core.append_BANG_.call(null,parent,c_2562);


var G__2563 = seq__2550_2558;
var G__2564 = chunk__2551_2559;
var G__2565 = count__2552_2560;
var G__2566 = (i__2553_2561 + (1));
seq__2550_2558 = G__2563;
chunk__2551_2559 = G__2564;
count__2552_2560 = G__2565;
i__2553_2561 = G__2566;
continue;
} else {
var temp__4657__auto___2567 = cljs.core.seq.call(null,seq__2550_2558);
if(temp__4657__auto___2567){
var seq__2550_2568__$1 = temp__4657__auto___2567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2550_2568__$1)){
var c__4319__auto___2569 = cljs.core.chunk_first.call(null,seq__2550_2568__$1);
var G__2570 = cljs.core.chunk_rest.call(null,seq__2550_2568__$1);
var G__2571 = c__4319__auto___2569;
var G__2572 = cljs.core.count.call(null,c__4319__auto___2569);
var G__2573 = (0);
seq__2550_2558 = G__2570;
chunk__2551_2559 = G__2571;
count__2552_2560 = G__2572;
i__2553_2561 = G__2573;
continue;
} else {
var c_2574 = cljs.core.first.call(null,seq__2550_2568__$1);
dommy.core.append_BANG_.call(null,parent,c_2574);


var G__2575 = cljs.core.next.call(null,seq__2550_2568__$1);
var G__2576 = null;
var G__2577 = (0);
var G__2578 = (0);
seq__2550_2558 = G__2575;
chunk__2551_2559 = G__2576;
count__2552_2560 = G__2577;
i__2553_2561 = G__2578;
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
dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq2545){
var G__2546 = cljs.core.first.call(null,seq2545);
var seq2545__$1 = cljs.core.next.call(null,seq2545);
var G__2547 = cljs.core.first.call(null,seq2545__$1);
var seq2545__$2 = cljs.core.next.call(null,seq2545__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2546,G__2547,seq2545__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__2583 = arguments.length;
switch (G__2583) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___2590 = arguments.length;
var i__4500__auto___2591 = (0);
while(true){
if((i__4500__auto___2591 < len__4499__auto___2590)){
args_arr__4514__auto__.push((arguments[i__4500__auto___2591]));

var G__2592 = (i__4500__auto___2591 + (1));
i__4500__auto___2591 = G__2592;
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
var G__2584 = parent;
G__2584.insertBefore(child,parent.firstChild);

return G__2584;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__2585_2593 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__2586_2594 = null;
var count__2587_2595 = (0);
var i__2588_2596 = (0);
while(true){
if((i__2588_2596 < count__2587_2595)){
var c_2597 = cljs.core._nth.call(null,chunk__2586_2594,i__2588_2596);
dommy.core.prepend_BANG_.call(null,parent,c_2597);


var G__2598 = seq__2585_2593;
var G__2599 = chunk__2586_2594;
var G__2600 = count__2587_2595;
var G__2601 = (i__2588_2596 + (1));
seq__2585_2593 = G__2598;
chunk__2586_2594 = G__2599;
count__2587_2595 = G__2600;
i__2588_2596 = G__2601;
continue;
} else {
var temp__4657__auto___2602 = cljs.core.seq.call(null,seq__2585_2593);
if(temp__4657__auto___2602){
var seq__2585_2603__$1 = temp__4657__auto___2602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2585_2603__$1)){
var c__4319__auto___2604 = cljs.core.chunk_first.call(null,seq__2585_2603__$1);
var G__2605 = cljs.core.chunk_rest.call(null,seq__2585_2603__$1);
var G__2606 = c__4319__auto___2604;
var G__2607 = cljs.core.count.call(null,c__4319__auto___2604);
var G__2608 = (0);
seq__2585_2593 = G__2605;
chunk__2586_2594 = G__2606;
count__2587_2595 = G__2607;
i__2588_2596 = G__2608;
continue;
} else {
var c_2609 = cljs.core.first.call(null,seq__2585_2603__$1);
dommy.core.prepend_BANG_.call(null,parent,c_2609);


var G__2610 = cljs.core.next.call(null,seq__2585_2603__$1);
var G__2611 = null;
var G__2612 = (0);
var G__2613 = (0);
seq__2585_2593 = G__2610;
chunk__2586_2594 = G__2611;
count__2587_2595 = G__2612;
i__2588_2596 = G__2613;
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
dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq2580){
var G__2581 = cljs.core.first.call(null,seq2580);
var seq2580__$1 = cljs.core.next.call(null,seq2580);
var G__2582 = cljs.core.first.call(null,seq2580__$1);
var seq2580__$2 = cljs.core.next.call(null,seq2580__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2581,G__2582,seq2580__$2);
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
var temp__4655__auto___2614 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___2614)){
var next_2615 = temp__4655__auto___2614;
dommy.core.insert_before_BANG_.call(null,elem,next_2615);
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
var G__2617 = arguments.length;
switch (G__2617) {
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
var G__2618 = p;
G__2618.removeChild(elem);

return G__2618;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__2620){
var vec__2621 = p__2620;
var special_mouse_event = cljs.core.nth.call(null,vec__2621,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__2621,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__2621,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__2621,special_mouse_event,real_mouse_event){
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
;})(vec__2621,special_mouse_event,real_mouse_event))
});})(vec__2621,special_mouse_event,real_mouse_event))
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
var len__4499__auto___2627 = arguments.length;
var i__4500__auto___2628 = (0);
while(true){
if((i__4500__auto___2628 < len__4499__auto___2627)){
args__4502__auto__.push((arguments[i__4500__auto___2628]));

var G__2629 = (i__4500__auto___2628 + (1));
i__4500__auto___2628 = G__2629;
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
dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq2624){
var G__2625 = cljs.core.first.call(null,seq2624);
var seq2624__$1 = cljs.core.next.call(null,seq2624);
var G__2626 = cljs.core.first.call(null,seq2624__$1);
var seq2624__$2 = cljs.core.next.call(null,seq2624__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2625,G__2626,seq2624__$2);
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
var len__4499__auto___2669 = arguments.length;
var i__4500__auto___2670 = (0);
while(true){
if((i__4500__auto___2670 < len__4499__auto___2669)){
args__4502__auto__.push((arguments[i__4500__auto___2670]));

var G__2671 = (i__4500__auto___2670 + (1));
i__4500__auto___2670 = G__2671;
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

var vec__2632_2672 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_2673 = cljs.core.nth.call(null,vec__2632_2672,(0),null);
var selector_2674 = cljs.core.nth.call(null,vec__2632_2672,(1),null);
var seq__2635_2675 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__2642_2676 = null;
var count__2643_2677 = (0);
var i__2644_2678 = (0);
while(true){
if((i__2644_2678 < count__2643_2677)){
var vec__2651_2679 = cljs.core._nth.call(null,chunk__2642_2676,i__2644_2678);
var orig_type_2680 = cljs.core.nth.call(null,vec__2651_2679,(0),null);
var f_2681 = cljs.core.nth.call(null,vec__2651_2679,(1),null);
var seq__2645_2682 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_2680,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_2680,cljs.core.identity])));
var chunk__2647_2683 = null;
var count__2648_2684 = (0);
var i__2649_2685 = (0);
while(true){
if((i__2649_2685 < count__2648_2684)){
var vec__2654_2686 = cljs.core._nth.call(null,chunk__2647_2683,i__2649_2685);
var actual_type_2687 = cljs.core.nth.call(null,vec__2654_2686,(0),null);
var factory_2688 = cljs.core.nth.call(null,vec__2654_2686,(1),null);
var canonical_f_2689 = (cljs.core.truth_(selector_2674)?cljs.core.partial.call(null,dommy.core.live_listener,elem_2673,selector_2674):cljs.core.identity).call(null,factory_2688.call(null,f_2681));
dommy.core.update_event_listeners_BANG_.call(null,elem_2673,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2674,actual_type_2687,f_2681], null),canonical_f_2689);

if(cljs.core.truth_(elem_2673.addEventListener)){
elem_2673.addEventListener(cljs.core.name.call(null,actual_type_2687),canonical_f_2689);
} else {
elem_2673.attachEvent(cljs.core.name.call(null,actual_type_2687),canonical_f_2689);
}


var G__2690 = seq__2645_2682;
var G__2691 = chunk__2647_2683;
var G__2692 = count__2648_2684;
var G__2693 = (i__2649_2685 + (1));
seq__2645_2682 = G__2690;
chunk__2647_2683 = G__2691;
count__2648_2684 = G__2692;
i__2649_2685 = G__2693;
continue;
} else {
var temp__4657__auto___2694 = cljs.core.seq.call(null,seq__2645_2682);
if(temp__4657__auto___2694){
var seq__2645_2695__$1 = temp__4657__auto___2694;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2645_2695__$1)){
var c__4319__auto___2696 = cljs.core.chunk_first.call(null,seq__2645_2695__$1);
var G__2697 = cljs.core.chunk_rest.call(null,seq__2645_2695__$1);
var G__2698 = c__4319__auto___2696;
var G__2699 = cljs.core.count.call(null,c__4319__auto___2696);
var G__2700 = (0);
seq__2645_2682 = G__2697;
chunk__2647_2683 = G__2698;
count__2648_2684 = G__2699;
i__2649_2685 = G__2700;
continue;
} else {
var vec__2657_2701 = cljs.core.first.call(null,seq__2645_2695__$1);
var actual_type_2702 = cljs.core.nth.call(null,vec__2657_2701,(0),null);
var factory_2703 = cljs.core.nth.call(null,vec__2657_2701,(1),null);
var canonical_f_2704 = (cljs.core.truth_(selector_2674)?cljs.core.partial.call(null,dommy.core.live_listener,elem_2673,selector_2674):cljs.core.identity).call(null,factory_2703.call(null,f_2681));
dommy.core.update_event_listeners_BANG_.call(null,elem_2673,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2674,actual_type_2702,f_2681], null),canonical_f_2704);

if(cljs.core.truth_(elem_2673.addEventListener)){
elem_2673.addEventListener(cljs.core.name.call(null,actual_type_2702),canonical_f_2704);
} else {
elem_2673.attachEvent(cljs.core.name.call(null,actual_type_2702),canonical_f_2704);
}


var G__2705 = cljs.core.next.call(null,seq__2645_2695__$1);
var G__2706 = null;
var G__2707 = (0);
var G__2708 = (0);
seq__2645_2682 = G__2705;
chunk__2647_2683 = G__2706;
count__2648_2684 = G__2707;
i__2649_2685 = G__2708;
continue;
}
} else {
}
}
break;
}

var G__2709 = seq__2635_2675;
var G__2710 = chunk__2642_2676;
var G__2711 = count__2643_2677;
var G__2712 = (i__2644_2678 + (1));
seq__2635_2675 = G__2709;
chunk__2642_2676 = G__2710;
count__2643_2677 = G__2711;
i__2644_2678 = G__2712;
continue;
} else {
var temp__4657__auto___2713 = cljs.core.seq.call(null,seq__2635_2675);
if(temp__4657__auto___2713){
var seq__2635_2714__$1 = temp__4657__auto___2713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2635_2714__$1)){
var c__4319__auto___2715 = cljs.core.chunk_first.call(null,seq__2635_2714__$1);
var G__2716 = cljs.core.chunk_rest.call(null,seq__2635_2714__$1);
var G__2717 = c__4319__auto___2715;
var G__2718 = cljs.core.count.call(null,c__4319__auto___2715);
var G__2719 = (0);
seq__2635_2675 = G__2716;
chunk__2642_2676 = G__2717;
count__2643_2677 = G__2718;
i__2644_2678 = G__2719;
continue;
} else {
var vec__2660_2720 = cljs.core.first.call(null,seq__2635_2714__$1);
var orig_type_2721 = cljs.core.nth.call(null,vec__2660_2720,(0),null);
var f_2722 = cljs.core.nth.call(null,vec__2660_2720,(1),null);
var seq__2636_2723 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_2721,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_2721,cljs.core.identity])));
var chunk__2638_2724 = null;
var count__2639_2725 = (0);
var i__2640_2726 = (0);
while(true){
if((i__2640_2726 < count__2639_2725)){
var vec__2663_2727 = cljs.core._nth.call(null,chunk__2638_2724,i__2640_2726);
var actual_type_2728 = cljs.core.nth.call(null,vec__2663_2727,(0),null);
var factory_2729 = cljs.core.nth.call(null,vec__2663_2727,(1),null);
var canonical_f_2730 = (cljs.core.truth_(selector_2674)?cljs.core.partial.call(null,dommy.core.live_listener,elem_2673,selector_2674):cljs.core.identity).call(null,factory_2729.call(null,f_2722));
dommy.core.update_event_listeners_BANG_.call(null,elem_2673,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2674,actual_type_2728,f_2722], null),canonical_f_2730);

if(cljs.core.truth_(elem_2673.addEventListener)){
elem_2673.addEventListener(cljs.core.name.call(null,actual_type_2728),canonical_f_2730);
} else {
elem_2673.attachEvent(cljs.core.name.call(null,actual_type_2728),canonical_f_2730);
}


var G__2731 = seq__2636_2723;
var G__2732 = chunk__2638_2724;
var G__2733 = count__2639_2725;
var G__2734 = (i__2640_2726 + (1));
seq__2636_2723 = G__2731;
chunk__2638_2724 = G__2732;
count__2639_2725 = G__2733;
i__2640_2726 = G__2734;
continue;
} else {
var temp__4657__auto___2735__$1 = cljs.core.seq.call(null,seq__2636_2723);
if(temp__4657__auto___2735__$1){
var seq__2636_2736__$1 = temp__4657__auto___2735__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2636_2736__$1)){
var c__4319__auto___2737 = cljs.core.chunk_first.call(null,seq__2636_2736__$1);
var G__2738 = cljs.core.chunk_rest.call(null,seq__2636_2736__$1);
var G__2739 = c__4319__auto___2737;
var G__2740 = cljs.core.count.call(null,c__4319__auto___2737);
var G__2741 = (0);
seq__2636_2723 = G__2738;
chunk__2638_2724 = G__2739;
count__2639_2725 = G__2740;
i__2640_2726 = G__2741;
continue;
} else {
var vec__2666_2742 = cljs.core.first.call(null,seq__2636_2736__$1);
var actual_type_2743 = cljs.core.nth.call(null,vec__2666_2742,(0),null);
var factory_2744 = cljs.core.nth.call(null,vec__2666_2742,(1),null);
var canonical_f_2745 = (cljs.core.truth_(selector_2674)?cljs.core.partial.call(null,dommy.core.live_listener,elem_2673,selector_2674):cljs.core.identity).call(null,factory_2744.call(null,f_2722));
dommy.core.update_event_listeners_BANG_.call(null,elem_2673,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2674,actual_type_2743,f_2722], null),canonical_f_2745);

if(cljs.core.truth_(elem_2673.addEventListener)){
elem_2673.addEventListener(cljs.core.name.call(null,actual_type_2743),canonical_f_2745);
} else {
elem_2673.attachEvent(cljs.core.name.call(null,actual_type_2743),canonical_f_2745);
}


var G__2746 = cljs.core.next.call(null,seq__2636_2736__$1);
var G__2747 = null;
var G__2748 = (0);
var G__2749 = (0);
seq__2636_2723 = G__2746;
chunk__2638_2724 = G__2747;
count__2639_2725 = G__2748;
i__2640_2726 = G__2749;
continue;
}
} else {
}
}
break;
}

var G__2750 = cljs.core.next.call(null,seq__2635_2714__$1);
var G__2751 = null;
var G__2752 = (0);
var G__2753 = (0);
seq__2635_2675 = G__2750;
chunk__2642_2676 = G__2751;
count__2643_2677 = G__2752;
i__2644_2678 = G__2753;
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
dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq2630){
var G__2631 = cljs.core.first.call(null,seq2630);
var seq2630__$1 = cljs.core.next.call(null,seq2630);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2631,seq2630__$1);
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
var len__4499__auto___2793 = arguments.length;
var i__4500__auto___2794 = (0);
while(true){
if((i__4500__auto___2794 < len__4499__auto___2793)){
args__4502__auto__.push((arguments[i__4500__auto___2794]));

var G__2795 = (i__4500__auto___2794 + (1));
i__4500__auto___2794 = G__2795;
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

var vec__2756_2796 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_2797 = cljs.core.nth.call(null,vec__2756_2796,(0),null);
var selector_2798 = cljs.core.nth.call(null,vec__2756_2796,(1),null);
var seq__2759_2799 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__2766_2800 = null;
var count__2767_2801 = (0);
var i__2768_2802 = (0);
while(true){
if((i__2768_2802 < count__2767_2801)){
var vec__2775_2803 = cljs.core._nth.call(null,chunk__2766_2800,i__2768_2802);
var orig_type_2804 = cljs.core.nth.call(null,vec__2775_2803,(0),null);
var f_2805 = cljs.core.nth.call(null,vec__2775_2803,(1),null);
var seq__2769_2806 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_2804,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_2804,cljs.core.identity])));
var chunk__2771_2807 = null;
var count__2772_2808 = (0);
var i__2773_2809 = (0);
while(true){
if((i__2773_2809 < count__2772_2808)){
var vec__2778_2810 = cljs.core._nth.call(null,chunk__2771_2807,i__2773_2809);
var actual_type_2811 = cljs.core.nth.call(null,vec__2778_2810,(0),null);
var __2812 = cljs.core.nth.call(null,vec__2778_2810,(1),null);
var keys_2813 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2798,actual_type_2811,f_2805], null);
var canonical_f_2814 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_2797),keys_2813);
dommy.core.update_event_listeners_BANG_.call(null,elem_2797,dommy.utils.dissoc_in,keys_2813);

if(cljs.core.truth_(elem_2797.removeEventListener)){
elem_2797.removeEventListener(cljs.core.name.call(null,actual_type_2811),canonical_f_2814);
} else {
elem_2797.detachEvent(cljs.core.name.call(null,actual_type_2811),canonical_f_2814);
}


var G__2815 = seq__2769_2806;
var G__2816 = chunk__2771_2807;
var G__2817 = count__2772_2808;
var G__2818 = (i__2773_2809 + (1));
seq__2769_2806 = G__2815;
chunk__2771_2807 = G__2816;
count__2772_2808 = G__2817;
i__2773_2809 = G__2818;
continue;
} else {
var temp__4657__auto___2819 = cljs.core.seq.call(null,seq__2769_2806);
if(temp__4657__auto___2819){
var seq__2769_2820__$1 = temp__4657__auto___2819;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2769_2820__$1)){
var c__4319__auto___2821 = cljs.core.chunk_first.call(null,seq__2769_2820__$1);
var G__2822 = cljs.core.chunk_rest.call(null,seq__2769_2820__$1);
var G__2823 = c__4319__auto___2821;
var G__2824 = cljs.core.count.call(null,c__4319__auto___2821);
var G__2825 = (0);
seq__2769_2806 = G__2822;
chunk__2771_2807 = G__2823;
count__2772_2808 = G__2824;
i__2773_2809 = G__2825;
continue;
} else {
var vec__2781_2826 = cljs.core.first.call(null,seq__2769_2820__$1);
var actual_type_2827 = cljs.core.nth.call(null,vec__2781_2826,(0),null);
var __2828 = cljs.core.nth.call(null,vec__2781_2826,(1),null);
var keys_2829 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2798,actual_type_2827,f_2805], null);
var canonical_f_2830 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_2797),keys_2829);
dommy.core.update_event_listeners_BANG_.call(null,elem_2797,dommy.utils.dissoc_in,keys_2829);

if(cljs.core.truth_(elem_2797.removeEventListener)){
elem_2797.removeEventListener(cljs.core.name.call(null,actual_type_2827),canonical_f_2830);
} else {
elem_2797.detachEvent(cljs.core.name.call(null,actual_type_2827),canonical_f_2830);
}


var G__2831 = cljs.core.next.call(null,seq__2769_2820__$1);
var G__2832 = null;
var G__2833 = (0);
var G__2834 = (0);
seq__2769_2806 = G__2831;
chunk__2771_2807 = G__2832;
count__2772_2808 = G__2833;
i__2773_2809 = G__2834;
continue;
}
} else {
}
}
break;
}

var G__2835 = seq__2759_2799;
var G__2836 = chunk__2766_2800;
var G__2837 = count__2767_2801;
var G__2838 = (i__2768_2802 + (1));
seq__2759_2799 = G__2835;
chunk__2766_2800 = G__2836;
count__2767_2801 = G__2837;
i__2768_2802 = G__2838;
continue;
} else {
var temp__4657__auto___2839 = cljs.core.seq.call(null,seq__2759_2799);
if(temp__4657__auto___2839){
var seq__2759_2840__$1 = temp__4657__auto___2839;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2759_2840__$1)){
var c__4319__auto___2841 = cljs.core.chunk_first.call(null,seq__2759_2840__$1);
var G__2842 = cljs.core.chunk_rest.call(null,seq__2759_2840__$1);
var G__2843 = c__4319__auto___2841;
var G__2844 = cljs.core.count.call(null,c__4319__auto___2841);
var G__2845 = (0);
seq__2759_2799 = G__2842;
chunk__2766_2800 = G__2843;
count__2767_2801 = G__2844;
i__2768_2802 = G__2845;
continue;
} else {
var vec__2784_2846 = cljs.core.first.call(null,seq__2759_2840__$1);
var orig_type_2847 = cljs.core.nth.call(null,vec__2784_2846,(0),null);
var f_2848 = cljs.core.nth.call(null,vec__2784_2846,(1),null);
var seq__2760_2849 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_2847,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_2847,cljs.core.identity])));
var chunk__2762_2850 = null;
var count__2763_2851 = (0);
var i__2764_2852 = (0);
while(true){
if((i__2764_2852 < count__2763_2851)){
var vec__2787_2853 = cljs.core._nth.call(null,chunk__2762_2850,i__2764_2852);
var actual_type_2854 = cljs.core.nth.call(null,vec__2787_2853,(0),null);
var __2855 = cljs.core.nth.call(null,vec__2787_2853,(1),null);
var keys_2856 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2798,actual_type_2854,f_2848], null);
var canonical_f_2857 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_2797),keys_2856);
dommy.core.update_event_listeners_BANG_.call(null,elem_2797,dommy.utils.dissoc_in,keys_2856);

if(cljs.core.truth_(elem_2797.removeEventListener)){
elem_2797.removeEventListener(cljs.core.name.call(null,actual_type_2854),canonical_f_2857);
} else {
elem_2797.detachEvent(cljs.core.name.call(null,actual_type_2854),canonical_f_2857);
}


var G__2858 = seq__2760_2849;
var G__2859 = chunk__2762_2850;
var G__2860 = count__2763_2851;
var G__2861 = (i__2764_2852 + (1));
seq__2760_2849 = G__2858;
chunk__2762_2850 = G__2859;
count__2763_2851 = G__2860;
i__2764_2852 = G__2861;
continue;
} else {
var temp__4657__auto___2862__$1 = cljs.core.seq.call(null,seq__2760_2849);
if(temp__4657__auto___2862__$1){
var seq__2760_2863__$1 = temp__4657__auto___2862__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2760_2863__$1)){
var c__4319__auto___2864 = cljs.core.chunk_first.call(null,seq__2760_2863__$1);
var G__2865 = cljs.core.chunk_rest.call(null,seq__2760_2863__$1);
var G__2866 = c__4319__auto___2864;
var G__2867 = cljs.core.count.call(null,c__4319__auto___2864);
var G__2868 = (0);
seq__2760_2849 = G__2865;
chunk__2762_2850 = G__2866;
count__2763_2851 = G__2867;
i__2764_2852 = G__2868;
continue;
} else {
var vec__2790_2869 = cljs.core.first.call(null,seq__2760_2863__$1);
var actual_type_2870 = cljs.core.nth.call(null,vec__2790_2869,(0),null);
var __2871 = cljs.core.nth.call(null,vec__2790_2869,(1),null);
var keys_2872 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2798,actual_type_2870,f_2848], null);
var canonical_f_2873 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_2797),keys_2872);
dommy.core.update_event_listeners_BANG_.call(null,elem_2797,dommy.utils.dissoc_in,keys_2872);

if(cljs.core.truth_(elem_2797.removeEventListener)){
elem_2797.removeEventListener(cljs.core.name.call(null,actual_type_2870),canonical_f_2873);
} else {
elem_2797.detachEvent(cljs.core.name.call(null,actual_type_2870),canonical_f_2873);
}


var G__2874 = cljs.core.next.call(null,seq__2760_2863__$1);
var G__2875 = null;
var G__2876 = (0);
var G__2877 = (0);
seq__2760_2849 = G__2874;
chunk__2762_2850 = G__2875;
count__2763_2851 = G__2876;
i__2764_2852 = G__2877;
continue;
}
} else {
}
}
break;
}

var G__2878 = cljs.core.next.call(null,seq__2759_2840__$1);
var G__2879 = null;
var G__2880 = (0);
var G__2881 = (0);
seq__2759_2799 = G__2878;
chunk__2766_2800 = G__2879;
count__2767_2801 = G__2880;
i__2768_2802 = G__2881;
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
dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq2754){
var G__2755 = cljs.core.first.call(null,seq2754);
var seq2754__$1 = cljs.core.next.call(null,seq2754);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2755,seq2754__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___2897 = arguments.length;
var i__4500__auto___2898 = (0);
while(true){
if((i__4500__auto___2898 < len__4499__auto___2897)){
args__4502__auto__.push((arguments[i__4500__auto___2898]));

var G__2899 = (i__4500__auto___2898 + (1));
i__4500__auto___2898 = G__2899;
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

var vec__2884_2900 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_2901 = cljs.core.nth.call(null,vec__2884_2900,(0),null);
var selector_2902 = cljs.core.nth.call(null,vec__2884_2900,(1),null);
var seq__2887_2903 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__2888_2904 = null;
var count__2889_2905 = (0);
var i__2890_2906 = (0);
while(true){
if((i__2890_2906 < count__2889_2905)){
var vec__2891_2907 = cljs.core._nth.call(null,chunk__2888_2904,i__2890_2906);
var type_2908 = cljs.core.nth.call(null,vec__2891_2907,(0),null);
var f_2909 = cljs.core.nth.call(null,vec__2891_2907,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_2908,((function (seq__2887_2903,chunk__2888_2904,count__2889_2905,i__2890_2906,vec__2891_2907,type_2908,f_2909,vec__2884_2900,elem_2901,selector_2902){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_2908,dommy$core$this_fn);

return f_2909.call(null,e);
});})(seq__2887_2903,chunk__2888_2904,count__2889_2905,i__2890_2906,vec__2891_2907,type_2908,f_2909,vec__2884_2900,elem_2901,selector_2902))
);


var G__2910 = seq__2887_2903;
var G__2911 = chunk__2888_2904;
var G__2912 = count__2889_2905;
var G__2913 = (i__2890_2906 + (1));
seq__2887_2903 = G__2910;
chunk__2888_2904 = G__2911;
count__2889_2905 = G__2912;
i__2890_2906 = G__2913;
continue;
} else {
var temp__4657__auto___2914 = cljs.core.seq.call(null,seq__2887_2903);
if(temp__4657__auto___2914){
var seq__2887_2915__$1 = temp__4657__auto___2914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2887_2915__$1)){
var c__4319__auto___2916 = cljs.core.chunk_first.call(null,seq__2887_2915__$1);
var G__2917 = cljs.core.chunk_rest.call(null,seq__2887_2915__$1);
var G__2918 = c__4319__auto___2916;
var G__2919 = cljs.core.count.call(null,c__4319__auto___2916);
var G__2920 = (0);
seq__2887_2903 = G__2917;
chunk__2888_2904 = G__2918;
count__2889_2905 = G__2919;
i__2890_2906 = G__2920;
continue;
} else {
var vec__2894_2921 = cljs.core.first.call(null,seq__2887_2915__$1);
var type_2922 = cljs.core.nth.call(null,vec__2894_2921,(0),null);
var f_2923 = cljs.core.nth.call(null,vec__2894_2921,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_2922,((function (seq__2887_2903,chunk__2888_2904,count__2889_2905,i__2890_2906,vec__2894_2921,type_2922,f_2923,seq__2887_2915__$1,temp__4657__auto___2914,vec__2884_2900,elem_2901,selector_2902){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_2922,dommy$core$this_fn);

return f_2923.call(null,e);
});})(seq__2887_2903,chunk__2888_2904,count__2889_2905,i__2890_2906,vec__2894_2921,type_2922,f_2923,seq__2887_2915__$1,temp__4657__auto___2914,vec__2884_2900,elem_2901,selector_2902))
);


var G__2924 = cljs.core.next.call(null,seq__2887_2915__$1);
var G__2925 = null;
var G__2926 = (0);
var G__2927 = (0);
seq__2887_2903 = G__2924;
chunk__2888_2904 = G__2925;
count__2889_2905 = G__2926;
i__2890_2906 = G__2927;
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
dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq2882){
var G__2883 = cljs.core.first.call(null,seq2882);
var seq2882__$1 = cljs.core.next.call(null,seq2882);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2883,seq2882__$1);
});


//# sourceMappingURL=core.js.map?rel=1529002148106
