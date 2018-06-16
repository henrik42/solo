// Compiled by ClojureScript 1.10.238 {}
goog.provide('solo.spa');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.browser.repl');
goog.require('hipo.interpreter');
goog.require('cljs_http.client');
if(typeof solo.spa.conn !== 'undefined'){
} else {
solo.spa.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
/**
 * Prints to `js/console`.
 */
solo.spa.log = (function solo$spa$log(var_args){
var args__4502__auto__ = [];
var len__4499__auto___2444 = arguments.length;
var i__4500__auto___2445 = (0);
while(true){
if((i__4500__auto___2445 < len__4499__auto___2444)){
args__4502__auto__.push((arguments[i__4500__auto___2445]));

var G__2446 = (i__4500__auto___2445 + (1));
i__4500__auto___2445 = G__2446;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return solo.spa.log.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

solo.spa.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return console.log(cljs.core.apply.call(null,cljs.core.str,"LOG:",xs));
});

solo.spa.log.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
solo.spa.log.cljs$lang$applyTo = (function (seq2443){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2443));
});

/**
 * The set of known log-levels (incl. `"UNKNOWN!"` and
 *  `"NOT-SET!"`).
 */
solo.spa.log_levels = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["WARN",null,"ERROR",null,"NOT-SET!",null,"DEBUG",null,"UNKNOWN!",null,"INFO",null,"OFF",null], null), null);
/**
 * THE STATE of the application. Whenever this state changes
 *   `render-loggers` will be called to update/(re)-render the GUI.
 */
solo.spa.app_state = (function (){var s = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.core.add_watch.call(null,s,new cljs.core.Keyword(null,"i-need-no-key","i-need-no-key",-1371659188),new cljs.core.Var(function(){return solo.spa.render_loggers;},new cljs.core.Symbol("solo.spa","render-loggers","solo.spa/render-loggers",-848750468,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"export","export",214356590),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"declared","declared",92336021),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"solo.spa","solo.spa",-380454172,null),new cljs.core.Symbol(null,"render-loggers","render-loggers",1972374615,null),"src/cljs/solo/spa.cljs",33,true,1,30,true,30,cljs.core.List.EMPTY,null,(cljs.core.truth_(solo.spa.render_loggers)?solo.spa.render_loggers.cljs$lang$test:null)])));

return s;
})();
/**
 * Returns the `app-state`'s `:filter-reg-ex` (`js/RegExp`). Returns
 *   `#".*"` if the `:filter-reg-ex` is empty/not-set or not a valid
 *   `js/RegExp` expression. Never returns `nil`.
 */
solo.spa.filter_reg_ex = (function solo$spa$filter_reg_ex(){
var reg_ex = cljs.core.get.call(null,cljs.core.deref.call(null,solo.spa.app_state),new cljs.core.Keyword(null,"filter-reg-ex","filter-reg-ex",816995819),".*");
try{return RegExp(reg_ex);
}catch (e2447){var t = e2447;
return /.*/;
}});
/**
 * Returns the `app-state`'s `:hide` (`boolean`). Returns `false` if
 *   the `:hide` is empty/not-set. Never returns `nil`.
 */
solo.spa.hide_QMARK_ = (function solo$spa$hide_QMARK_(){
return new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,solo.spa.app_state),false);
});
/**
 * Sets the `app-state`'s `:hide`.
 */
solo.spa.set_hide_BANG_ = (function solo$spa$set_hide_BANG_(e){
return solo.spa.log.call(null,cljs.core.js__GT_clj.call(null,e));
});
/**
 * Returns the `app-state`'s `:loggers` (map-seq). If `(hide?)` is
 *   truthy loggers with `:log-level "NOT-SET!" will be filtered out.
 */
solo.spa.loggers = (function solo$spa$loggers(){
var filter_reg_ex = solo.spa.filter_reg_ex.call(null);
var hide = solo.spa.hide_QMARK_.call(null);
return cljs.core.filter.call(null,((function (filter_reg_ex,hide){
return (function (p1__2448_SHARP_){
var and__3911__auto__ = cljs.core.re_find.call(null,filter_reg_ex,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927).cljs$core$IFn$_invoke$arity$1(p1__2448_SHARP_));
if(cljs.core.truth_(and__3911__auto__)){
if(cljs.core.truth_(hide)){
return cljs.core.not_EQ_.call(null,"NOT-SET!",new cljs.core.Keyword(null,"log-level","log-level",862121670).cljs$core$IFn$_invoke$arity$1(p1__2448_SHARP_));
} else {
return true;
}
} else {
return and__3911__auto__;
}
});})(filter_reg_ex,hide))
,cljs.core.map.call(null,((function (filter_reg_ex,hide){
return (function (p__2449){
var map__2450 = p__2449;
var map__2450__$1 = ((((!((map__2450 == null)))?(((((map__2450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2450):map__2450);
var logger = map__2450__$1;
var logger_name = cljs.core.get.call(null,map__2450__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var log_level = cljs.core.get.call(null,map__2450__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
if(cljs.core._EQ_.call(null,"",log_level)){
return cljs.core.assoc.call(null,logger,new cljs.core.Keyword(null,"log-level","log-level",862121670),"NOT-SET!");
} else {
if(cljs.core.not.call(null,solo.spa.log_levels.call(null,log_level))){
return cljs.core.assoc.call(null,logger,new cljs.core.Keyword(null,"log-level","log-level",862121670),"UNKNOWN!");
} else {
return logger;

}
}
});})(filter_reg_ex,hide))
,new cljs.core.Keyword(null,"loggers","loggers",-1191901729).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,solo.spa.app_state))));
});
solo.spa.load_current_loggers = (function solo$spa$load_current_loggers(var_args){
var args__4502__auto__ = [];
var len__4499__auto___2468 = arguments.length;
var i__4500__auto___2469 = (0);
while(true){
if((i__4500__auto___2469 < len__4499__auto___2468)){
args__4502__auto__.push((arguments[i__4500__auto___2469]));

var G__2470 = (i__4500__auto___2469 + (1));
i__4500__auto___2469 = G__2470;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return solo.spa.load_current_loggers.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

solo.spa.load_current_loggers.cljs$core$IFn$_invoke$arity$variadic = (function (_){
var c__2327__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2327__auto__){
return (function (){
var f__2328__auto__ = (function (){var switch__2306__auto__ = ((function (c__2327__auto__){
return (function (state_2462){
var state_val_2463 = (state_2462[(1)]);
if((state_val_2463 === (1))){
var inst_2453 = cljs_http.client.get.call(null,"ws/get-current-loggers");
var state_2462__$1 = state_2462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2462__$1,(2),inst_2453);
} else {
if((state_val_2463 === (2))){
var inst_2455 = (state_2462[(2)]);
var inst_2456 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2457 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"loggers","loggers",-1191901729)];
var inst_2458 = (new cljs.core.PersistentVector(null,2,(5),inst_2456,inst_2457,null));
var inst_2459 = cljs.core.get_in.call(null,inst_2455,inst_2458);
var inst_2460 = cljs.core.swap_BANG_.call(null,solo.spa.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"loggers","loggers",-1191901729),inst_2459);
var state_2462__$1 = state_2462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2462__$1,inst_2460);
} else {
return null;
}
}
});})(c__2327__auto__))
;
return ((function (switch__2306__auto__,c__2327__auto__){
return (function() {
var solo$spa$state_machine__2307__auto__ = null;
var solo$spa$state_machine__2307__auto____0 = (function (){
var statearr_2464 = [null,null,null,null,null,null,null];
(statearr_2464[(0)] = solo$spa$state_machine__2307__auto__);

(statearr_2464[(1)] = (1));

return statearr_2464;
});
var solo$spa$state_machine__2307__auto____1 = (function (state_2462){
while(true){
var ret_value__2308__auto__ = (function (){try{while(true){
var result__2309__auto__ = switch__2306__auto__.call(null,state_2462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2309__auto__;
}
break;
}
}catch (e2465){if((e2465 instanceof Object)){
var ex__2310__auto__ = e2465;
var statearr_2466_2471 = state_2462;
(statearr_2466_2471[(5)] = ex__2310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2472 = state_2462;
state_2462 = G__2472;
continue;
} else {
return ret_value__2308__auto__;
}
break;
}
});
solo$spa$state_machine__2307__auto__ = function(state_2462){
switch(arguments.length){
case 0:
return solo$spa$state_machine__2307__auto____0.call(this);
case 1:
return solo$spa$state_machine__2307__auto____1.call(this,state_2462);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$state_machine__2307__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$state_machine__2307__auto____0;
solo$spa$state_machine__2307__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$state_machine__2307__auto____1;
return solo$spa$state_machine__2307__auto__;
})()
;})(switch__2306__auto__,c__2327__auto__))
})();
var state__2329__auto__ = (function (){var statearr_2467 = f__2328__auto__.call(null);
(statearr_2467[(6)] = c__2327__auto__);

return statearr_2467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2329__auto__);
});})(c__2327__auto__))
);

return c__2327__auto__;
});

solo.spa.load_current_loggers.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
solo.spa.load_current_loggers.cljs$lang$applyTo = (function (seq2452){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2452));
});

solo.spa.set_log_level = (function solo$spa$set_log_level(var_args){
var args__4502__auto__ = [];
var len__4499__auto___2485 = arguments.length;
var i__4500__auto___2486 = (0);
while(true){
if((i__4500__auto___2486 < len__4499__auto___2485)){
args__4502__auto__.push((arguments[i__4500__auto___2486]));

var G__2487 = (i__4500__auto___2486 + (1));
i__4500__auto___2486 = G__2487;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return solo.spa.set_log_level.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

solo.spa.set_log_level.cljs$core$IFn$_invoke$arity$variadic = (function (_){
var logger = document.getElementById("logger").value;
var level = document.getElementById("level").value;
var c__2327__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2327__auto__,logger,level){
return (function (){
var f__2328__auto__ = (function (){var switch__2306__auto__ = ((function (c__2327__auto__,logger,level){
return (function (state_2478){
var state_val_2479 = (state_2478[(1)]);
if((state_val_2479 === (1))){
var inst_2474 = ["/ws/set-log-level/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logger),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)].join('');
var inst_2475 = cljs_http.client.post.call(null,inst_2474);
var inst_2476 = solo.spa.load_current_loggers.call(null);
var state_2478__$1 = (function (){var statearr_2480 = state_2478;
(statearr_2480[(7)] = inst_2475);

return statearr_2480;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2478__$1,inst_2476);
} else {
return null;
}
});})(c__2327__auto__,logger,level))
;
return ((function (switch__2306__auto__,c__2327__auto__,logger,level){
return (function() {
var solo$spa$state_machine__2307__auto__ = null;
var solo$spa$state_machine__2307__auto____0 = (function (){
var statearr_2481 = [null,null,null,null,null,null,null,null];
(statearr_2481[(0)] = solo$spa$state_machine__2307__auto__);

(statearr_2481[(1)] = (1));

return statearr_2481;
});
var solo$spa$state_machine__2307__auto____1 = (function (state_2478){
while(true){
var ret_value__2308__auto__ = (function (){try{while(true){
var result__2309__auto__ = switch__2306__auto__.call(null,state_2478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2309__auto__;
}
break;
}
}catch (e2482){if((e2482 instanceof Object)){
var ex__2310__auto__ = e2482;
var statearr_2483_2488 = state_2478;
(statearr_2483_2488[(5)] = ex__2310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2489 = state_2478;
state_2478 = G__2489;
continue;
} else {
return ret_value__2308__auto__;
}
break;
}
});
solo$spa$state_machine__2307__auto__ = function(state_2478){
switch(arguments.length){
case 0:
return solo$spa$state_machine__2307__auto____0.call(this);
case 1:
return solo$spa$state_machine__2307__auto____1.call(this,state_2478);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$state_machine__2307__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$state_machine__2307__auto____0;
solo$spa$state_machine__2307__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$state_machine__2307__auto____1;
return solo$spa$state_machine__2307__auto__;
})()
;})(switch__2306__auto__,c__2327__auto__,logger,level))
})();
var state__2329__auto__ = (function (){var statearr_2484 = f__2328__auto__.call(null);
(statearr_2484[(6)] = c__2327__auto__);

return statearr_2484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2329__auto__);
});})(c__2327__auto__,logger,level))
);

return c__2327__auto__;
});

solo.spa.set_log_level.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
solo.spa.set_log_level.cljs$lang$applyTo = (function (seq2473){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2473));
});

/**
 * Returns `:option` Hiccup-vector-seq for `xs`. If `(= x o)` for
 *   entry `o` of `xs` then `:selected` is `true`.
 */
solo.spa.make_options = (function solo$spa$make_options(xs,x){
return cljs.core.map.call(null,(function (o){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,o)], null),o], null);
}),xs);
});
/**
 * Returns a Hiccup-vector for the top-of-page including a link to the
 *   Codox-generated API (HTML) documentation, the Marginalia-formatted
 *   code (both contained in _Solo_) and a link to the _Solo_ github
 *   page.
 */
solo.spa.top_of_page = (function solo$spa$top_of_page(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#top-of-page","div#top-of-page",-541693280),"SOLO Web App"," -- ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"generated-doc/index.html"], null),"doc"], null)," -- ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"generated-doc/solo-source.html"], null),"source"], null)," -- ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/henrik42/solo/"], null),"github"], null)], null);
});
/**
 * Returns a Hiccup-vector for the *set log-level form* which allows
 *   the user to enter a logger-name and select a log-level.
 */
solo.spa.set_log_level_form = (function solo$spa$set_log_level_form(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#new-logger","div#new-logger",902215213),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"logger"], null),"LOGGER:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"logger",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Logger Name"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"padding:1em;"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"level"], null)," LEVEL:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"level"], null),solo.spa.make_options.call(null,solo.spa.log_levels,"INFO")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"padding:1em;"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),solo.spa.set_log_level,new cljs.core.Keyword(null,"value","value",305978217),"SET LOG-LEVEL"], null)], null)], null);
});
/**
 * Returns a Hiccup-vector for the *loggers form* which allows the
 *   user to select a log-level for each of the `loggers`. Within this
 *   form the user may also enter a `filter-reg-ex` (which will be used
 *   to `re-find`-match loggers by their `:logger-name`) and check-select
 *   to hide loggers with `(= log-level NOT-SET!)`.
 */
solo.spa.loggers_form = (function solo$spa$loggers_form(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#loggers-form","div#loggers-form",-342841966),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#loggers","table#loggers",836788857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"LOGGER",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"filter",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter Reg-Ex",new cljs.core.Keyword(null,"style","style",-496642736),"float: right;"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"LEVEL",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"float: right;"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"hide"], null)," Hide NOT-SET!:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"id","id",-1388402092),"hide",new cljs.core.Keyword(null,"on-change","on-change",-732046149),solo.spa.set_hide_BANG_,new cljs.core.Keyword(null,"checked","checked",-50955819),solo.spa.hide_QMARK_.call(null)], null)], null)], null)], null)], null),(function (){var iter__4292__auto__ = (function solo$spa$loggers_form_$_iter__2490(s__2491){
return (new cljs.core.LazySeq(null,(function (){
var s__2491__$1 = s__2491;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__2491__$1);
if(temp__4657__auto__){
var s__2491__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2491__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__2491__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__2493 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__2492 = (0);
while(true){
if((i__2492 < size__4291__auto__)){
var map__2494 = cljs.core._nth.call(null,c__4290__auto__,i__2492);
var map__2494__$1 = ((((!((map__2494 == null)))?(((((map__2494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2494):map__2494);
var logger_name = cljs.core.get.call(null,map__2494__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var log_level = cljs.core.get.call(null,map__2494__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
cljs.core.chunk_append.call(null,b__2493,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),logger_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),solo.spa.make_options.call(null,solo.spa.log_levels,log_level)], null)], null)], null));

var G__2498 = (i__2492 + (1));
i__2492 = G__2498;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2493),solo$spa$loggers_form_$_iter__2490.call(null,cljs.core.chunk_rest.call(null,s__2491__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2493),null);
}
} else {
var map__2496 = cljs.core.first.call(null,s__2491__$2);
var map__2496__$1 = ((((!((map__2496 == null)))?(((((map__2496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2496):map__2496);
var logger_name = cljs.core.get.call(null,map__2496__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var log_level = cljs.core.get.call(null,map__2496__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),logger_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),solo.spa.make_options.call(null,solo.spa.log_levels,log_level)], null)], null)], null),solo$spa$loggers_form_$_iter__2490.call(null,cljs.core.rest.call(null,s__2491__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,solo.spa.loggers.call(null));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),solo.spa.load_current_loggers,new cljs.core.Keyword(null,"value","value",305978217),"REFRESH"], null)], null)], null)], null);
});
/**
 * Creates the DOM for `(loggers-form)` and mounts it at
 *   `id="loggers-form"`. So this (re)renders the loggers-form.
 */
solo.spa.render_loggers = (function solo$spa$render_loggers(var_args){
var args__4502__auto__ = [];
var len__4499__auto___2500 = arguments.length;
var i__4500__auto___2501 = (0);
while(true){
if((i__4500__auto___2501 < len__4499__auto___2500)){
args__4502__auto__.push((arguments[i__4500__auto___2501]));

var G__2502 = (i__4500__auto___2501 + (1));
i__4500__auto___2501 = G__2502;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return solo.spa.render_loggers.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});
goog.exportSymbol('solo.spa.render_loggers', solo.spa.render_loggers);

solo.spa.render_loggers.cljs$core$IFn$_invoke$arity$variadic = (function (_){
return document.getElementById("loggers-form").replaceWith(hipo.interpreter.create.call(null,solo.spa.loggers_form.call(null),null));
});

solo.spa.render_loggers.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
solo.spa.render_loggers.cljs$lang$applyTo = (function (seq2499){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2499));
});

/**
 * Main entry point of the SPA.
 * 
 *   Creates the `main`-DOM for the SPA and mounts it in the current DOM
 *   at `id="main"`. So the initial hosting page must contain such a
 *   `id="main"-node. Then calls `(load-current-loggers)`.
 * 
 *   The `main`-DOM contains the `(loggers-form)`-DOM with
 *   `id="loggers-form"` so that this sub-DOM can be _updated_ via
 *   `render-loggers` whenever the `app-state` changes.
 */
solo.spa.main = (function solo$spa$main(){
var root = hipo.interpreter.create.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#main","div#main",-2068630773),solo.spa.top_of_page.call(null),solo.spa.set_log_level_form.call(null),solo.spa.loggers_form.call(null)], null),null);
document.getElementById("main").replaceWith(root);

return solo.spa.load_current_loggers.call(null);
});
solo.spa.main.call(null);

//# sourceMappingURL=spa.js.map?rel=1529135359779
