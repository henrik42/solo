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
var len__4499__auto___7665 = arguments.length;
var i__4500__auto___7666 = (0);
while(true){
if((i__4500__auto___7666 < len__4499__auto___7665)){
args__4502__auto__.push((arguments[i__4500__auto___7666]));

var G__7667 = (i__4500__auto___7666 + (1));
i__4500__auto___7666 = G__7667;
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
solo.spa.log.cljs$lang$applyTo = (function (seq7664){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7664));
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
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#new-logger","div#new-logger",902215213),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"logger"], null),"LOGGER:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"logger",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Logger Name"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"padding:1em;"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"level"], null)," LEVEL:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"level"], null),solo.spa.make_options.call(null,solo.spa.log_levels,"INFO")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"padding:1em;"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"SET LOG-LEVEL"], null)], null)], null);
});
/**
 * Returns a Hiccup-vector for the *loggers form* which allows the
 *   user to select a log-level for each of the `loggers`. Within this
 *   form the user may also enter a `filter-reg-ex` (which will be used
 *   to `re-find`-match loggers by their `:logger-name`) and check-select
 *   to hide loggers with `(= log-level NOT-SET!)`.
 */
solo.spa.loggers_form = (function solo$spa$loggers_form(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#loggers-form","div#loggers-form",-342841966),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#loggers","table#loggers",836788857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"LOGGER",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"filter",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter Reg-Ex",new cljs.core.Keyword(null,"style","style",-496642736),"float: right;"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"LEVEL",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"float: right;"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"hide"], null)," Hide NOT-SET!:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"id","id",-1388402092),"hide",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.get.call(null,cljs.core.deref.call(null,solo.spa.app_state),new cljs.core.Keyword(null,"hide","hide",-596913169),false)], null)], null)], null)], null)], null),(function (){var iter__4292__auto__ = (function solo$spa$loggers_form_$_iter__7668(s__7669){
return (new cljs.core.LazySeq(null,(function (){
var s__7669__$1 = s__7669;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__7669__$1);
if(temp__4657__auto__){
var s__7669__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7669__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__7669__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__7671 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__7670 = (0);
while(true){
if((i__7670 < size__4291__auto__)){
var map__7672 = cljs.core._nth.call(null,c__4290__auto__,i__7670);
var map__7672__$1 = ((((!((map__7672 == null)))?(((((map__7672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7672):map__7672);
var logger_name = cljs.core.get.call(null,map__7672__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var log_level = cljs.core.get.call(null,map__7672__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
cljs.core.chunk_append.call(null,b__7671,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),logger_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"level"], null),solo.spa.make_options.call(null,solo.spa.log_levels,log_level)], null)], null)], null));

var G__7676 = (i__7670 + (1));
i__7670 = G__7676;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7671),solo$spa$loggers_form_$_iter__7668.call(null,cljs.core.chunk_rest.call(null,s__7669__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7671),null);
}
} else {
var map__7674 = cljs.core.first.call(null,s__7669__$2);
var map__7674__$1 = ((((!((map__7674 == null)))?(((((map__7674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7674):map__7674);
var logger_name = cljs.core.get.call(null,map__7674__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var log_level = cljs.core.get.call(null,map__7674__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),logger_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"level"], null),solo.spa.make_options.call(null,solo.spa.log_levels,log_level)], null)], null)], null),solo$spa$loggers_form_$_iter__7668.call(null,cljs.core.rest.call(null,s__7669__$2)));
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
solo.spa.http_get = (function solo$spa$http_get(url){
var c__2488__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2488__auto__){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (c__2488__auto__){
return (function (state_7682){
var state_val_7683 = (state_7682[(1)]);
if((state_val_7683 === (1))){
var inst_7677 = cljs_http.client.get.call(null,url);
var state_7682__$1 = state_7682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7682__$1,(2),inst_7677);
} else {
if((state_val_7683 === (2))){
var inst_7679 = (state_7682[(2)]);
var inst_7680 = solo.spa.log.call(null,"RES:",inst_7679);
var state_7682__$1 = state_7682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7682__$1,inst_7680);
} else {
return null;
}
}
});})(c__2488__auto__))
;
return ((function (switch__2473__auto__,c__2488__auto__){
return (function() {
var solo$spa$http_get_$_state_machine__2474__auto__ = null;
var solo$spa$http_get_$_state_machine__2474__auto____0 = (function (){
var statearr_7684 = [null,null,null,null,null,null,null];
(statearr_7684[(0)] = solo$spa$http_get_$_state_machine__2474__auto__);

(statearr_7684[(1)] = (1));

return statearr_7684;
});
var solo$spa$http_get_$_state_machine__2474__auto____1 = (function (state_7682){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_7682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e7685){if((e7685 instanceof Object)){
var ex__2477__auto__ = e7685;
var statearr_7686_7688 = state_7682;
(statearr_7686_7688[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7689 = state_7682;
state_7682 = G__7689;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
solo$spa$http_get_$_state_machine__2474__auto__ = function(state_7682){
switch(arguments.length){
case 0:
return solo$spa$http_get_$_state_machine__2474__auto____0.call(this);
case 1:
return solo$spa$http_get_$_state_machine__2474__auto____1.call(this,state_7682);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$http_get_$_state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$http_get_$_state_machine__2474__auto____0;
solo$spa$http_get_$_state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$http_get_$_state_machine__2474__auto____1;
return solo$spa$http_get_$_state_machine__2474__auto__;
})()
;})(switch__2473__auto__,c__2488__auto__))
})();
var state__2490__auto__ = (function (){var statearr_7687 = f__2489__auto__.call(null);
(statearr_7687[(6)] = c__2488__auto__);

return statearr_7687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(c__2488__auto__))
);

return c__2488__auto__;
});
solo.spa.load_current_loggers = (function solo$spa$load_current_loggers(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7706 = arguments.length;
var i__4500__auto___7707 = (0);
while(true){
if((i__4500__auto___7707 < len__4499__auto___7706)){
args__4502__auto__.push((arguments[i__4500__auto___7707]));

var G__7708 = (i__4500__auto___7707 + (1));
i__4500__auto___7707 = G__7708;
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
return (function (state_7700){
var state_val_7701 = (state_7700[(1)]);
if((state_val_7701 === (1))){
var inst_7691 = cljs_http.client.get.call(null,"ws/get-current-loggers");
var state_7700__$1 = state_7700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7700__$1,(2),inst_7691);
} else {
if((state_val_7701 === (2))){
var inst_7693 = (state_7700[(2)]);
var inst_7694 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7695 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"loggers","loggers",-1191901729)];
var inst_7696 = (new cljs.core.PersistentVector(null,2,(5),inst_7694,inst_7695,null));
var inst_7697 = cljs.core.get_in.call(null,inst_7693,inst_7696);
var inst_7698 = cljs.core.swap_BANG_.call(null,solo.spa.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"loggers","loggers",-1191901729),inst_7697);
var state_7700__$1 = state_7700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7700__$1,inst_7698);
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
var statearr_7702 = [null,null,null,null,null,null,null];
(statearr_7702[(0)] = solo$spa$state_machine__2474__auto__);

(statearr_7702[(1)] = (1));

return statearr_7702;
});
var solo$spa$state_machine__2474__auto____1 = (function (state_7700){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_7700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e7703){if((e7703 instanceof Object)){
var ex__2477__auto__ = e7703;
var statearr_7704_7709 = state_7700;
(statearr_7704_7709[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7710 = state_7700;
state_7700 = G__7710;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
solo$spa$state_machine__2474__auto__ = function(state_7700){
switch(arguments.length){
case 0:
return solo$spa$state_machine__2474__auto____0.call(this);
case 1:
return solo$spa$state_machine__2474__auto____1.call(this,state_7700);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$state_machine__2474__auto____0;
solo$spa$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$state_machine__2474__auto____1;
return solo$spa$state_machine__2474__auto__;
})()
;})(switch__2473__auto__,c__2488__auto__))
})();
var state__2490__auto__ = (function (){var statearr_7705 = f__2489__auto__.call(null);
(statearr_7705[(6)] = c__2488__auto__);

return statearr_7705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(c__2488__auto__))
);

return c__2488__auto__;
});

solo.spa.load_current_loggers.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
solo.spa.load_current_loggers.cljs$lang$applyTo = (function (seq7690){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7690));
});

solo.spa.render_loggers = (function solo$spa$render_loggers(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7712 = arguments.length;
var i__4500__auto___7713 = (0);
while(true){
if((i__4500__auto___7713 < len__4499__auto___7712)){
args__4502__auto__.push((arguments[i__4500__auto___7713]));

var G__7714 = (i__4500__auto___7713 + (1));
i__4500__auto___7713 = G__7714;
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
solo.spa.render_loggers.cljs$lang$applyTo = (function (seq7711){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7711));
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

return solo.spa.load_current_loggers.call(null);
});
cljs.core.add_watch.call(null,solo.spa.app_state,new cljs.core.Keyword(null,"i-need-no-key","i-need-no-key",-1371659188),solo.spa.render_loggers);
solo.spa.main_BANG_.call(null);
solo.spa.log.call(null,"solo.spa loaded");

//# sourceMappingURL=spa.js.map?rel=1529007502007
