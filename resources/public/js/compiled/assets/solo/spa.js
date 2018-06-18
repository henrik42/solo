// Compiled by ClojureScript 1.10.238 {}
goog.provide('solo.spa');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.browser.repl');
goog.require('hipo.interpreter');
goog.require('goog.dom');
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
var len__4499__auto___4463 = arguments.length;
var i__4500__auto___4464 = (0);
while(true){
if((i__4500__auto___4464 < len__4499__auto___4463)){
args__4502__auto__.push((arguments[i__4500__auto___4464]));

var G__4465 = (i__4500__auto___4464 + (1));
i__4500__auto___4464 = G__4465;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return solo.spa.log.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

solo.spa.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return console.log(cljs.core.apply.call(null,cljs.core.str,"log:",xs));
});

solo.spa.log.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
solo.spa.log.cljs$lang$applyTo = (function (seq4462){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4462));
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
cljs.core.add_watch.call(null,s,new cljs.core.Keyword(null,"i-need-no-key","i-need-no-key",-1371659188),new cljs.core.Var(function(){return solo.spa.render_loggers;},new cljs.core.Symbol("solo.spa","render-loggers","solo.spa/render-loggers",-848750468,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"export","export",214356590),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"declared","declared",92336021),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"solo.spa","solo.spa",-380454172,null),new cljs.core.Symbol(null,"render-loggers","render-loggers",1972374615,null),"src/cljs/solo/spa.cljs",33,true,1,31,true,31,cljs.core.List.EMPTY,null,(cljs.core.truth_(solo.spa.render_loggers)?solo.spa.render_loggers.cljs$lang$test:null)])));

return s;
})();
/**
 * Returns the `app-state`'s `:filter-reg-ex` (`js/RegExp`). Returns
 *   `#".*"` if the `:filter-reg-ex` is empty/not-set or not a valid
 *   `js/RegExp` expression. Never returns `nil`.
 */
solo.spa.filter_reg_ex = (function solo$spa$filter_reg_ex(){
var reg_ex = new cljs.core.Keyword(null,"filter-reg-ex","filter-reg-ex",816995819).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,solo.spa.app_state),/.*/);
try{return RegExp(reg_ex);
}catch (e4466){var t = e4466;
return /.*/;
}});
solo.spa.reg_ex__GT_str = (function solo$spa$reg_ex__GT_str(r){
var r__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return r__$1.substring((1),(r__$1.length - (1)));
});
solo.spa.set_filter_reg_ex_BANG_ = (function solo$spa$set_filter_reg_ex_BANG_(x){
return cljs.core.swap_BANG_.call(null,solo.spa.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"filter-reg-ex","filter-reg-ex",816995819),((typeof x === 'string')?x:x.currentTarget.value));
});
/**
 * Returns the `app-state`'s `:hide` (`boolean`). Returns `false` if
 *   the `:hide` is empty/not-set. Never returns `nil`.
 */
solo.spa.hide_QMARK_ = (function solo$spa$hide_QMARK_(){
return new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,solo.spa.app_state),false);
});
/**
 * Eventlistener that sets the `app-state`'s `:hide`-value to the
 *   current `-checked`-value of the checkbox (i.e. the event
 *   target). Call with a `boolean` to set the `app-state`'s
 *   `:hide`-value. Returns the new `app-state`.
 */
solo.spa.set_hide_BANG_ = (function solo$spa$set_hide_BANG_(x){
return cljs.core.swap_BANG_.call(null,solo.spa.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"hide","hide",-596913169),((cljs.core.boolean_QMARK_.call(null,x))?x:x.currentTarget.checked));
});
/**
 * Returns the `app-state`'s `:loggers` (a _map-seq_). If `(hide?)` is
 *   truthy loggers with `:log-level "NOT-SET!" will be filtered out.
 */
solo.spa.loggers = (function solo$spa$loggers(){
var filter_reg_ex = solo.spa.filter_reg_ex.call(null);
var hide = solo.spa.hide_QMARK_.call(null);
return cljs.core.filter.call(null,((function (filter_reg_ex,hide){
return (function (p1__4467_SHARP_){
var and__3911__auto__ = cljs.core.re_find.call(null,filter_reg_ex,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927).cljs$core$IFn$_invoke$arity$1(p1__4467_SHARP_));
if(cljs.core.truth_(and__3911__auto__)){
if(cljs.core.truth_(hide)){
return cljs.core.not_EQ_.call(null,"NOT-SET!",new cljs.core.Keyword(null,"log-level","log-level",862121670).cljs$core$IFn$_invoke$arity$1(p1__4467_SHARP_));
} else {
return true;
}
} else {
return and__3911__auto__;
}
});})(filter_reg_ex,hide))
,cljs.core.map.call(null,((function (filter_reg_ex,hide){
return (function (p__4468){
var map__4469 = p__4468;
var map__4469__$1 = ((((!((map__4469 == null)))?(((((map__4469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4469):map__4469);
var logger = map__4469__$1;
var logger_name = cljs.core.get.call(null,map__4469__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var log_level = cljs.core.get.call(null,map__4469__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
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
var len__4499__auto___4487 = arguments.length;
var i__4500__auto___4488 = (0);
while(true){
if((i__4500__auto___4488 < len__4499__auto___4487)){
args__4502__auto__.push((arguments[i__4500__auto___4488]));

var G__4489 = (i__4500__auto___4488 + (1));
i__4500__auto___4488 = G__4489;
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
return (function (state_4481){
var state_val_4482 = (state_4481[(1)]);
if((state_val_4482 === (1))){
var inst_4472 = cljs_http.client.get.call(null,"ws/get-current-loggers");
var state_4481__$1 = state_4481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4481__$1,(2),inst_4472);
} else {
if((state_val_4482 === (2))){
var inst_4474 = (state_4481[(2)]);
var inst_4475 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4476 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"loggers","loggers",-1191901729)];
var inst_4477 = (new cljs.core.PersistentVector(null,2,(5),inst_4475,inst_4476,null));
var inst_4478 = cljs.core.get_in.call(null,inst_4474,inst_4477);
var inst_4479 = cljs.core.swap_BANG_.call(null,solo.spa.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"loggers","loggers",-1191901729),inst_4478);
var state_4481__$1 = state_4481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4481__$1,inst_4479);
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
var statearr_4483 = [null,null,null,null,null,null,null];
(statearr_4483[(0)] = solo$spa$state_machine__2307__auto__);

(statearr_4483[(1)] = (1));

return statearr_4483;
});
var solo$spa$state_machine__2307__auto____1 = (function (state_4481){
while(true){
var ret_value__2308__auto__ = (function (){try{while(true){
var result__2309__auto__ = switch__2306__auto__.call(null,state_4481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2309__auto__;
}
break;
}
}catch (e4484){if((e4484 instanceof Object)){
var ex__2310__auto__ = e4484;
var statearr_4485_4490 = state_4481;
(statearr_4485_4490[(5)] = ex__2310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4491 = state_4481;
state_4481 = G__4491;
continue;
} else {
return ret_value__2308__auto__;
}
break;
}
});
solo$spa$state_machine__2307__auto__ = function(state_4481){
switch(arguments.length){
case 0:
return solo$spa$state_machine__2307__auto____0.call(this);
case 1:
return solo$spa$state_machine__2307__auto____1.call(this,state_4481);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$state_machine__2307__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$state_machine__2307__auto____0;
solo$spa$state_machine__2307__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$state_machine__2307__auto____1;
return solo$spa$state_machine__2307__auto__;
})()
;})(switch__2306__auto__,c__2327__auto__))
})();
var state__2329__auto__ = (function (){var statearr_4486 = f__2328__auto__.call(null);
(statearr_4486[(6)] = c__2327__auto__);

return statearr_4486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2329__auto__);
});})(c__2327__auto__))
);

return c__2327__auto__;
});

solo.spa.load_current_loggers.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
solo.spa.load_current_loggers.cljs$lang$applyTo = (function (seq4471){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4471));
});

solo.spa.set_log_level = (function solo$spa$set_log_level(var_args){
var args__4502__auto__ = [];
var len__4499__auto___4504 = arguments.length;
var i__4500__auto___4505 = (0);
while(true){
if((i__4500__auto___4505 < len__4499__auto___4504)){
args__4502__auto__.push((arguments[i__4500__auto___4505]));

var G__4506 = (i__4500__auto___4505 + (1));
i__4500__auto___4505 = G__4506;
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
return (function (state_4497){
var state_val_4498 = (state_4497[(1)]);
if((state_val_4498 === (1))){
var inst_4493 = ["/ws/set-log-level/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logger),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)].join('');
var inst_4494 = cljs_http.client.post.call(null,inst_4493);
var inst_4495 = solo.spa.load_current_loggers.call(null);
var state_4497__$1 = (function (){var statearr_4499 = state_4497;
(statearr_4499[(7)] = inst_4494);

return statearr_4499;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4497__$1,inst_4495);
} else {
return null;
}
});})(c__2327__auto__,logger,level))
;
return ((function (switch__2306__auto__,c__2327__auto__,logger,level){
return (function() {
var solo$spa$state_machine__2307__auto__ = null;
var solo$spa$state_machine__2307__auto____0 = (function (){
var statearr_4500 = [null,null,null,null,null,null,null,null];
(statearr_4500[(0)] = solo$spa$state_machine__2307__auto__);

(statearr_4500[(1)] = (1));

return statearr_4500;
});
var solo$spa$state_machine__2307__auto____1 = (function (state_4497){
while(true){
var ret_value__2308__auto__ = (function (){try{while(true){
var result__2309__auto__ = switch__2306__auto__.call(null,state_4497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2309__auto__;
}
break;
}
}catch (e4501){if((e4501 instanceof Object)){
var ex__2310__auto__ = e4501;
var statearr_4502_4507 = state_4497;
(statearr_4502_4507[(5)] = ex__2310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4508 = state_4497;
state_4497 = G__4508;
continue;
} else {
return ret_value__2308__auto__;
}
break;
}
});
solo$spa$state_machine__2307__auto__ = function(state_4497){
switch(arguments.length){
case 0:
return solo$spa$state_machine__2307__auto____0.call(this);
case 1:
return solo$spa$state_machine__2307__auto____1.call(this,state_4497);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$state_machine__2307__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$state_machine__2307__auto____0;
solo$spa$state_machine__2307__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$state_machine__2307__auto____1;
return solo$spa$state_machine__2307__auto__;
})()
;})(switch__2306__auto__,c__2327__auto__,logger,level))
})();
var state__2329__auto__ = (function (){var statearr_4503 = f__2328__auto__.call(null);
(statearr_4503[(6)] = c__2327__auto__);

return statearr_4503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2329__auto__);
});})(c__2327__auto__,logger,level))
);

return c__2327__auto__;
});

solo.spa.set_log_level.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
solo.spa.set_log_level.cljs$lang$applyTo = (function (seq4492){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4492));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#loggers-form","div#loggers-form",-342841966),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#loggers","table#loggers",836788857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"LOGGER",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"filter",new cljs.core.Keyword(null,"value","value",305978217),solo.spa.reg_ex__GT_str.call(null,solo.spa.filter_reg_ex.call(null)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),solo.spa.set_filter_reg_ex_BANG_,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter Reg-Ex",new cljs.core.Keyword(null,"style","style",-496642736),"float: right;"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"LEVEL",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"float: right;"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"hide"], null)," Hide NOT-SET!:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"id","id",-1388402092),"hide",new cljs.core.Keyword(null,"on-change","on-change",-732046149),solo.spa.set_hide_BANG_,new cljs.core.Keyword(null,"checked","checked",-50955819),solo.spa.hide_QMARK_.call(null)], null)], null)], null)], null)], null),(function (){var iter__4292__auto__ = (function solo$spa$loggers_form_$_iter__4509(s__4510){
return (new cljs.core.LazySeq(null,(function (){
var s__4510__$1 = s__4510;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__4510__$1);
if(temp__4657__auto__){
var s__4510__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4510__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__4510__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__4512 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__4511 = (0);
while(true){
if((i__4511 < size__4291__auto__)){
var map__4513 = cljs.core._nth.call(null,c__4290__auto__,i__4511);
var map__4513__$1 = ((((!((map__4513 == null)))?(((((map__4513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4513):map__4513);
var logger_name = cljs.core.get.call(null,map__4513__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var log_level = cljs.core.get.call(null,map__4513__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
cljs.core.chunk_append.call(null,b__4512,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),logger_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),solo.spa.make_options.call(null,solo.spa.log_levels,log_level)], null)], null)], null));

var G__4517 = (i__4511 + (1));
i__4511 = G__4517;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4512),solo$spa$loggers_form_$_iter__4509.call(null,cljs.core.chunk_rest.call(null,s__4510__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4512),null);
}
} else {
var map__4515 = cljs.core.first.call(null,s__4510__$2);
var map__4515__$1 = ((((!((map__4515 == null)))?(((((map__4515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4515):map__4515);
var logger_name = cljs.core.get.call(null,map__4515__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var log_level = cljs.core.get.call(null,map__4515__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),logger_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),solo.spa.make_options.call(null,solo.spa.log_levels,log_level)], null)], null)], null),solo$spa$loggers_form_$_iter__4509.call(null,cljs.core.rest.call(null,s__4510__$2)));
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
var len__4499__auto___4519 = arguments.length;
var i__4500__auto___4520 = (0);
while(true){
if((i__4500__auto___4520 < len__4499__auto___4519)){
args__4502__auto__.push((arguments[i__4500__auto___4520]));

var G__4521 = (i__4500__auto___4520 + (1));
i__4500__auto___4520 = G__4521;
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
solo.spa.render_loggers.cljs$lang$applyTo = (function (seq4518){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4518));
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

//# sourceMappingURL=spa.js.map?rel=1529304432961
