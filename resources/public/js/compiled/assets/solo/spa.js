// Compiled by ClojureScript 1.10.238 {}
goog.provide('solo.spa');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('cljs.core.async');
goog.require('clojure.browser.repl');
goog.require('hipo.interpreter');
goog.require('cljs_http.client');
if(typeof solo.spa.conn !== 'undefined'){
} else {
solo.spa.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
solo.spa.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
solo.spa.log = (function solo$spa$log(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8608 = arguments.length;
var i__4500__auto___8609 = (0);
while(true){
if((i__4500__auto___8609 < len__4499__auto___8608)){
args__4502__auto__.push((arguments[i__4500__auto___8609]));

var G__8610 = (i__4500__auto___8609 + (1));
i__4500__auto___8609 = G__8610;
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
solo.spa.log.cljs$lang$applyTo = (function (seq8607){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8607));
});

/**
 * The set of known log-levels (incl. `"UNKNOWN!"` and
 *  `"NOT-SET!"`).
 */
solo.spa.log_levels = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["WARN",null,"ERROR",null,"NOT-SET!",null,"DEBUG",null,"UNKNOWN!",null,"INFO",null,"OFF",null], null), null);
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
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#new-logger","div#new-logger",902215213),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"logger"], null),"LOGGER:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"logger",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Logger Name"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"padding:1em;"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"level"], null)," LEVEL:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"level"], null),solo.spa.make_options.call(null,solo.spa.log_levels,"INFO")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"padding:1em;"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"id","id",-1388402092),"set-log-level",new cljs.core.Keyword(null,"value","value",305978217),"SET LOG-LEVEL"], null)], null)], null);
});
/**
 * Returns a Hiccup-vector for the *loggers form* which allows the
 *   user to select a log-level for each of the `loggers`. Within this
 *   form the user may also enter a `filter-reg-ex` (which will be used
 *   to `re-find`-match loggers by their `:logger-name`) and check-select
 *   to hide loggers with `(= log-level NOT-SET!)`.
 */
solo.spa.loggers_form = (function solo$spa$loggers_form(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#loggers-form","div#loggers-form",-342841966),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#loggers","table#loggers",836788857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"LOGGER",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"filter",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter Reg-Ex",new cljs.core.Keyword(null,"style","style",-496642736),"float: right;"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"LEVEL",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"float: right;"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"hide"], null)," Hide NOT-SET!:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"id","id",-1388402092),"hide",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.get.call(null,cljs.core.deref.call(null,solo.spa.app_state),new cljs.core.Keyword(null,"hide","hide",-596913169),false)], null)], null)], null)], null)], null),(function (){var iter__4292__auto__ = (function solo$spa$loggers_form_$_iter__8611(s__8612){
return (new cljs.core.LazySeq(null,(function (){
var s__8612__$1 = s__8612;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8612__$1);
if(temp__4657__auto__){
var s__8612__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8612__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__8612__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__8614 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__8613 = (0);
while(true){
if((i__8613 < size__4291__auto__)){
var map__8615 = cljs.core._nth.call(null,c__4290__auto__,i__8613);
var map__8615__$1 = ((((!((map__8615 == null)))?(((((map__8615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8615):map__8615);
var logger_name = cljs.core.get.call(null,map__8615__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var log_level = cljs.core.get.call(null,map__8615__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
cljs.core.chunk_append.call(null,b__8614,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),logger_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),solo.spa.make_options.call(null,solo.spa.log_levels,log_level)], null)], null)], null));

var G__8619 = (i__8613 + (1));
i__8613 = G__8619;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8614),solo$spa$loggers_form_$_iter__8611.call(null,cljs.core.chunk_rest.call(null,s__8612__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8614),null);
}
} else {
var map__8617 = cljs.core.first.call(null,s__8612__$2);
var map__8617__$1 = ((((!((map__8617 == null)))?(((((map__8617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8617):map__8617);
var logger_name = cljs.core.get.call(null,map__8617__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var log_level = cljs.core.get.call(null,map__8617__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),logger_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),solo.spa.make_options.call(null,solo.spa.log_levels,log_level)], null)], null)], null),solo$spa$loggers_form_$_iter__8611.call(null,cljs.core.rest.call(null,s__8612__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,new cljs.core.Keyword(null,"loggers","loggers",-1191901729).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,solo.spa.app_state)));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"id","id",-1388402092),"refresh",new cljs.core.Keyword(null,"value","value",305978217),"REFRESH"], null)], null)], null)], null);
});
solo.spa.load_current_loggers = (function solo$spa$load_current_loggers(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8636 = arguments.length;
var i__4500__auto___8637 = (0);
while(true){
if((i__4500__auto___8637 < len__4499__auto___8636)){
args__4502__auto__.push((arguments[i__4500__auto___8637]));

var G__8638 = (i__4500__auto___8637 + (1));
i__4500__auto___8637 = G__8638;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return solo.spa.load_current_loggers.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

solo.spa.load_current_loggers.cljs$core$IFn$_invoke$arity$variadic = (function (_){
var c__2488__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2488__auto__){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (c__2488__auto__){
return (function (state_8630){
var state_val_8631 = (state_8630[(1)]);
if((state_val_8631 === (1))){
var inst_8621 = cljs_http.client.get.call(null,"ws/get-current-loggers");
var state_8630__$1 = state_8630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8630__$1,(2),inst_8621);
} else {
if((state_val_8631 === (2))){
var inst_8623 = (state_8630[(2)]);
var inst_8624 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8625 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"loggers","loggers",-1191901729)];
var inst_8626 = (new cljs.core.PersistentVector(null,2,(5),inst_8624,inst_8625,null));
var inst_8627 = cljs.core.get_in.call(null,inst_8623,inst_8626);
var inst_8628 = cljs.core.swap_BANG_.call(null,solo.spa.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"loggers","loggers",-1191901729),inst_8627);
var state_8630__$1 = state_8630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8630__$1,inst_8628);
} else {
return null;
}
}
});})(c__2488__auto__))
;
return ((function (switch__2473__auto__,c__2488__auto__){
return (function() {
var solo$spa$state_machine__2474__auto__ = null;
var solo$spa$state_machine__2474__auto____0 = (function (){
var statearr_8632 = [null,null,null,null,null,null,null];
(statearr_8632[(0)] = solo$spa$state_machine__2474__auto__);

(statearr_8632[(1)] = (1));

return statearr_8632;
});
var solo$spa$state_machine__2474__auto____1 = (function (state_8630){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_8630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e8633){if((e8633 instanceof Object)){
var ex__2477__auto__ = e8633;
var statearr_8634_8639 = state_8630;
(statearr_8634_8639[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8640 = state_8630;
state_8630 = G__8640;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
solo$spa$state_machine__2474__auto__ = function(state_8630){
switch(arguments.length){
case 0:
return solo$spa$state_machine__2474__auto____0.call(this);
case 1:
return solo$spa$state_machine__2474__auto____1.call(this,state_8630);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$state_machine__2474__auto____0;
solo$spa$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$state_machine__2474__auto____1;
return solo$spa$state_machine__2474__auto__;
})()
;})(switch__2473__auto__,c__2488__auto__))
})();
var state__2490__auto__ = (function (){var statearr_8635 = f__2489__auto__.call(null);
(statearr_8635[(6)] = c__2488__auto__);

return statearr_8635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(c__2488__auto__))
);

return c__2488__auto__;
});

solo.spa.load_current_loggers.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
solo.spa.load_current_loggers.cljs$lang$applyTo = (function (seq8620){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8620));
});

solo.spa.render_loggers = (function solo$spa$render_loggers(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8642 = arguments.length;
var i__4500__auto___8643 = (0);
while(true){
if((i__4500__auto___8643 < len__4499__auto___8642)){
args__4502__auto__.push((arguments[i__4500__auto___8643]));

var G__8644 = (i__4500__auto___8643 + (1));
i__4500__auto___8643 = G__8644;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return solo.spa.render_loggers.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

solo.spa.render_loggers.cljs$core$IFn$_invoke$arity$variadic = (function (_){
document.getElementById("loggers-form").replaceWith(hipo.interpreter.create.call(null,solo.spa.loggers_form.call(null),null));

return goog.events.listen(goog.dom.getElement("refresh"),"click",solo.spa.load_current_loggers);
});

solo.spa.render_loggers.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
solo.spa.render_loggers.cljs$lang$applyTo = (function (seq8641){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8641));
});

solo.spa.set_log_level = (function solo$spa$set_log_level(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8657 = arguments.length;
var i__4500__auto___8658 = (0);
while(true){
if((i__4500__auto___8658 < len__4499__auto___8657)){
args__4502__auto__.push((arguments[i__4500__auto___8658]));

var G__8659 = (i__4500__auto___8658 + (1));
i__4500__auto___8658 = G__8659;
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
solo.spa.log.call(null,"LEVEL",logger," ",solo.spa.log_level);

var c__2488__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2488__auto__,logger,level){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (c__2488__auto__,logger,level){
return (function (state_8650){
var state_val_8651 = (state_8650[(1)]);
if((state_val_8651 === (1))){
var inst_8646 = ["/ws/set-log-level/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logger),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)].join('');
var inst_8647 = cljs_http.client.post.call(null,inst_8646);
var inst_8648 = solo.spa.load_current_loggers.call(null);
var state_8650__$1 = (function (){var statearr_8652 = state_8650;
(statearr_8652[(7)] = inst_8647);

return statearr_8652;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8650__$1,inst_8648);
} else {
return null;
}
});})(c__2488__auto__,logger,level))
;
return ((function (switch__2473__auto__,c__2488__auto__,logger,level){
return (function() {
var solo$spa$state_machine__2474__auto__ = null;
var solo$spa$state_machine__2474__auto____0 = (function (){
var statearr_8653 = [null,null,null,null,null,null,null,null];
(statearr_8653[(0)] = solo$spa$state_machine__2474__auto__);

(statearr_8653[(1)] = (1));

return statearr_8653;
});
var solo$spa$state_machine__2474__auto____1 = (function (state_8650){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_8650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e8654){if((e8654 instanceof Object)){
var ex__2477__auto__ = e8654;
var statearr_8655_8660 = state_8650;
(statearr_8655_8660[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8661 = state_8650;
state_8650 = G__8661;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
solo$spa$state_machine__2474__auto__ = function(state_8650){
switch(arguments.length){
case 0:
return solo$spa$state_machine__2474__auto____0.call(this);
case 1:
return solo$spa$state_machine__2474__auto____1.call(this,state_8650);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$state_machine__2474__auto____0;
solo$spa$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$state_machine__2474__auto____1;
return solo$spa$state_machine__2474__auto__;
})()
;})(switch__2473__auto__,c__2488__auto__,logger,level))
})();
var state__2490__auto__ = (function (){var statearr_8656 = f__2489__auto__.call(null);
(statearr_8656[(6)] = c__2488__auto__);

return statearr_8656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(c__2488__auto__,logger,level))
);

return c__2488__auto__;
});

solo.spa.set_log_level.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
solo.spa.set_log_level.cljs$lang$applyTo = (function (seq8645){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8645));
});

/**
 * Main entry point of the SPA.
 * 
 *   Call this function to create the DOM for the SPA and to populate and
 *   render/mount the inital app-state at `id` `main`.
 */
solo.spa.main_BANG_ = (function solo$spa$main_BANG_(){
var root = hipo.interpreter.create.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#main","div#main",-2068630773),solo.spa.top_of_page.call(null),solo.spa.set_log_level_form.call(null),solo.spa.loggers_form.call(null)], null),null);
document.getElementById("main").replaceWith(root);

goog.events.listen(goog.dom.getElement("set-log-level"),"click",solo.spa.set_log_level);

return solo.spa.load_current_loggers.call(null);
});
cljs.core.add_watch.call(null,solo.spa.app_state,new cljs.core.Keyword(null,"i-need-no-key","i-need-no-key",-1371659188),solo.spa.render_loggers);
solo.spa.main_BANG_.call(null);
solo.spa.log.call(null,"solo.spa loaded");

//# sourceMappingURL=spa.js.map?rel=1529009867568
