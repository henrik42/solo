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
cljs.core.enable_console_print_BANG_.call(null);
solo.spa.log = (function solo$spa$log(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5522 = arguments.length;
var i__4500__auto___5523 = (0);
while(true){
if((i__4500__auto___5523 < len__4499__auto___5522)){
args__4502__auto__.push((arguments[i__4500__auto___5523]));

var G__5524 = (i__4500__auto___5523 + (1));
i__4500__auto___5523 = G__5524;
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
solo.spa.log.cljs$lang$applyTo = (function (seq5521){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5521));
});

/**
 * The set of known log-levels (incl. `"UNKNOWN!"` and
 *  `"NOT-SET!"`).
 */
solo.spa.log_levels = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["WARN",null,"ERROR",null,"NOT-SET!",null,"DEBUG",null,"UNKNOWN!",null,"INFO",null,"OFF",null], null), null);
solo.spa.app_state = (function (){var s = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.core.add_watch.call(null,s,new cljs.core.Keyword(null,"i-need-no-key","i-need-no-key",-1371659188),new cljs.core.Var(function(){return solo.spa.render_loggers;},new cljs.core.Symbol("solo.spa","render-loggers","solo.spa/render-loggers",-848750468,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"export","export",214356590),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"declared","declared",92336021),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"solo.spa","solo.spa",-380454172,null),new cljs.core.Symbol(null,"render-loggers","render-loggers",1972374615,null),"src/cljs/solo/spa.cljs",33,true,1,24,true,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(solo.spa.render_loggers)?solo.spa.render_loggers.cljs$lang$test:null)])));

return s;
})();
solo.spa.load_current_loggers = (function solo$spa$load_current_loggers(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5541 = arguments.length;
var i__4500__auto___5542 = (0);
while(true){
if((i__4500__auto___5542 < len__4499__auto___5541)){
args__4502__auto__.push((arguments[i__4500__auto___5542]));

var G__5543 = (i__4500__auto___5542 + (1));
i__4500__auto___5542 = G__5543;
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
return (function (state_5535){
var state_val_5536 = (state_5535[(1)]);
if((state_val_5536 === (1))){
var inst_5526 = cljs_http.client.get.call(null,"ws/get-current-loggers");
var state_5535__$1 = state_5535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5535__$1,(2),inst_5526);
} else {
if((state_val_5536 === (2))){
var inst_5528 = (state_5535[(2)]);
var inst_5529 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5530 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"loggers","loggers",-1191901729)];
var inst_5531 = (new cljs.core.PersistentVector(null,2,(5),inst_5529,inst_5530,null));
var inst_5532 = cljs.core.get_in.call(null,inst_5528,inst_5531);
var inst_5533 = cljs.core.swap_BANG_.call(null,solo.spa.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"loggers","loggers",-1191901729),inst_5532);
var state_5535__$1 = state_5535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5535__$1,inst_5533);
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
var statearr_5537 = [null,null,null,null,null,null,null];
(statearr_5537[(0)] = solo$spa$state_machine__2307__auto__);

(statearr_5537[(1)] = (1));

return statearr_5537;
});
var solo$spa$state_machine__2307__auto____1 = (function (state_5535){
while(true){
var ret_value__2308__auto__ = (function (){try{while(true){
var result__2309__auto__ = switch__2306__auto__.call(null,state_5535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2309__auto__;
}
break;
}
}catch (e5538){if((e5538 instanceof Object)){
var ex__2310__auto__ = e5538;
var statearr_5539_5544 = state_5535;
(statearr_5539_5544[(5)] = ex__2310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5545 = state_5535;
state_5535 = G__5545;
continue;
} else {
return ret_value__2308__auto__;
}
break;
}
});
solo$spa$state_machine__2307__auto__ = function(state_5535){
switch(arguments.length){
case 0:
return solo$spa$state_machine__2307__auto____0.call(this);
case 1:
return solo$spa$state_machine__2307__auto____1.call(this,state_5535);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$state_machine__2307__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$state_machine__2307__auto____0;
solo$spa$state_machine__2307__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$state_machine__2307__auto____1;
return solo$spa$state_machine__2307__auto__;
})()
;})(switch__2306__auto__,c__2327__auto__))
})();
var state__2329__auto__ = (function (){var statearr_5540 = f__2328__auto__.call(null);
(statearr_5540[(6)] = c__2327__auto__);

return statearr_5540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2329__auto__);
});})(c__2327__auto__))
);

return c__2327__auto__;
});

solo.spa.load_current_loggers.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
solo.spa.load_current_loggers.cljs$lang$applyTo = (function (seq5525){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5525));
});

solo.spa.set_log_level = (function solo$spa$set_log_level(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5558 = arguments.length;
var i__4500__auto___5559 = (0);
while(true){
if((i__4500__auto___5559 < len__4499__auto___5558)){
args__4502__auto__.push((arguments[i__4500__auto___5559]));

var G__5560 = (i__4500__auto___5559 + (1));
i__4500__auto___5559 = G__5560;
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
return (function (state_5551){
var state_val_5552 = (state_5551[(1)]);
if((state_val_5552 === (1))){
var inst_5547 = ["/ws/set-log-level/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logger),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)].join('');
var inst_5548 = cljs_http.client.post.call(null,inst_5547);
var inst_5549 = solo.spa.load_current_loggers.call(null);
var state_5551__$1 = (function (){var statearr_5553 = state_5551;
(statearr_5553[(7)] = inst_5548);

return statearr_5553;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5551__$1,inst_5549);
} else {
return null;
}
});})(c__2327__auto__,logger,level))
;
return ((function (switch__2306__auto__,c__2327__auto__,logger,level){
return (function() {
var solo$spa$state_machine__2307__auto__ = null;
var solo$spa$state_machine__2307__auto____0 = (function (){
var statearr_5554 = [null,null,null,null,null,null,null,null];
(statearr_5554[(0)] = solo$spa$state_machine__2307__auto__);

(statearr_5554[(1)] = (1));

return statearr_5554;
});
var solo$spa$state_machine__2307__auto____1 = (function (state_5551){
while(true){
var ret_value__2308__auto__ = (function (){try{while(true){
var result__2309__auto__ = switch__2306__auto__.call(null,state_5551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2309__auto__;
}
break;
}
}catch (e5555){if((e5555 instanceof Object)){
var ex__2310__auto__ = e5555;
var statearr_5556_5561 = state_5551;
(statearr_5556_5561[(5)] = ex__2310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5562 = state_5551;
state_5551 = G__5562;
continue;
} else {
return ret_value__2308__auto__;
}
break;
}
});
solo$spa$state_machine__2307__auto__ = function(state_5551){
switch(arguments.length){
case 0:
return solo$spa$state_machine__2307__auto____0.call(this);
case 1:
return solo$spa$state_machine__2307__auto____1.call(this,state_5551);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$state_machine__2307__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$state_machine__2307__auto____0;
solo$spa$state_machine__2307__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$state_machine__2307__auto____1;
return solo$spa$state_machine__2307__auto__;
})()
;})(switch__2306__auto__,c__2327__auto__,logger,level))
})();
var state__2329__auto__ = (function (){var statearr_5557 = f__2328__auto__.call(null);
(statearr_5557[(6)] = c__2327__auto__);

return statearr_5557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2329__auto__);
});})(c__2327__auto__,logger,level))
);

return c__2327__auto__;
});

solo.spa.set_log_level.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
solo.spa.set_log_level.cljs$lang$applyTo = (function (seq5546){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5546));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#loggers-form","div#loggers-form",-342841966),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#loggers","table#loggers",836788857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"LOGGER",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"filter",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter Reg-Ex",new cljs.core.Keyword(null,"style","style",-496642736),"float: right;"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"LEVEL",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"float: right;"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"hide"], null)," Hide NOT-SET!:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"id","id",-1388402092),"hide",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.get.call(null,cljs.core.deref.call(null,solo.spa.app_state),new cljs.core.Keyword(null,"hide","hide",-596913169),false)], null)], null)], null)], null)], null),(function (){var iter__4292__auto__ = (function solo$spa$loggers_form_$_iter__5563(s__5564){
return (new cljs.core.LazySeq(null,(function (){
var s__5564__$1 = s__5564;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__5564__$1);
if(temp__4657__auto__){
var s__5564__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5564__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__5564__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__5566 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__5565 = (0);
while(true){
if((i__5565 < size__4291__auto__)){
var map__5567 = cljs.core._nth.call(null,c__4290__auto__,i__5565);
var map__5567__$1 = ((((!((map__5567 == null)))?(((((map__5567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5567):map__5567);
var logger_name = cljs.core.get.call(null,map__5567__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var log_level = cljs.core.get.call(null,map__5567__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
cljs.core.chunk_append.call(null,b__5566,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),logger_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),solo.spa.make_options.call(null,solo.spa.log_levels,log_level)], null)], null)], null));

var G__5571 = (i__5565 + (1));
i__5565 = G__5571;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5566),solo$spa$loggers_form_$_iter__5563.call(null,cljs.core.chunk_rest.call(null,s__5564__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5566),null);
}
} else {
var map__5569 = cljs.core.first.call(null,s__5564__$2);
var map__5569__$1 = ((((!((map__5569 == null)))?(((((map__5569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5569):map__5569);
var logger_name = cljs.core.get.call(null,map__5569__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var log_level = cljs.core.get.call(null,map__5569__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),logger_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),solo.spa.make_options.call(null,solo.spa.log_levels,log_level)], null)], null)], null),solo$spa$loggers_form_$_iter__5563.call(null,cljs.core.rest.call(null,s__5564__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,new cljs.core.Keyword(null,"loggers","loggers",-1191901729).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,solo.spa.app_state)));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),solo.spa.load_current_loggers,new cljs.core.Keyword(null,"value","value",305978217),"REFRESH"], null)], null)], null)], null);
});
/**
 * Creates the DOM for `(loggers-form)` and mounts it at
 *   `id="loggers-form"`.
 */
solo.spa.render_loggers = (function solo$spa$render_loggers(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5573 = arguments.length;
var i__4500__auto___5574 = (0);
while(true){
if((i__4500__auto___5574 < len__4499__auto___5573)){
args__4502__auto__.push((arguments[i__4500__auto___5574]));

var G__5575 = (i__4500__auto___5574 + (1));
i__4500__auto___5574 = G__5575;
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
solo.spa.render_loggers.cljs$lang$applyTo = (function (seq5572){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5572));
});

/**
 * Main entry point of the SPA.
 * 
 *   Creates the DOM for the SPA and mounts it at `id="main"`. Then
 *   calls `(load-current-loggers)`.
 * 
 *   The `main`-DOM will contain the `(loggers-form)`-DOM with
 *   `id="loggers-form"` so that this sub-DOM can be _updated_ via
 *   `render-loggers`.
 */
solo.spa.main = (function solo$spa$main(){
var root = hipo.interpreter.create.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#main","div#main",-2068630773),solo.spa.top_of_page.call(null),solo.spa.set_log_level_form.call(null),solo.spa.loggers_form.call(null)], null),null);
document.getElementById("main").replaceWith(root);

return solo.spa.load_current_loggers.call(null);
});
solo.spa.main.call(null);

//# sourceMappingURL=spa.js.map?rel=1529097654317
