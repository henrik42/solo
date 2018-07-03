// Compiled by ClojureScript 1.10.238 {}
goog.provide('solo.spa');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('cljs_http.client');
/**
 * Prints to `js/console`.
 */
solo.spa.log = (function solo$spa$log(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5906 = arguments.length;
var i__4500__auto___5907 = (0);
while(true){
if((i__4500__auto___5907 < len__4499__auto___5906)){
args__4502__auto__.push((arguments[i__4500__auto___5907]));

var G__5908 = (i__4500__auto___5907 + (1));
i__4500__auto___5907 = G__5908;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return solo.spa.log.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

solo.spa.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return console.log(cljs.core.apply.call(null,cljs.core.str,"SOLO:",xs));
});

solo.spa.log.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
solo.spa.log.cljs$lang$applyTo = (function (seq5905){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5905));
});

/**
 * The set of known log-levels (incl. `"UNKNOWN!"` and
 *  `"NOT-SET!"`).
 */
solo.spa.log_levels = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["WARN",null,"ERROR",null,"NOT-SET!",null,"DEBUG",null,"UNKNOWN!",null,"INFO",null,"OFF",null], null), null);
if(typeof solo.spa.app_state !== 'undefined'){
} else {
solo.spa.app_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Returns the `app-state`'s `:filter-reg-ex` (`js/RegExp`). Returns
 *   `#".*"` if the `:filter-reg-ex` is empty/not-set or not a valid
 *   `js/RegExp` expression. Never returns `nil`.
 */
solo.spa.filter_reg_ex = (function solo$spa$filter_reg_ex(){
var reg_ex = new cljs.core.Keyword(null,"filter-reg-ex","filter-reg-ex",816995819).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,solo.spa.app_state),/.*/);
try{return RegExp(reg_ex);
}catch (e5909){var t = e5909;
return /.*/;
}});
/**
 * Returns the `String` representation of the given reg-ex for
 *   presentation.
 */
solo.spa.reg_ex__GT_str = (function solo$spa$reg_ex__GT_str(r){
var r__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return r__$1.substring((1),(r__$1.length - (1)));
});
/**
 * Eventlistener that sets the `app-state`'s `:filter-reg-ex`-value to
 *   the current `-value` of the textfield (i.e. the event target). Call
 *   with a `String` to set the `app-state`'s
 *   `:filter-reg-ex`-value. Returns the new `app-state`.
 */
solo.spa.set_filter_reg_ex_BANG_ = (function solo$spa$set_filter_reg_ex_BANG_(x){
return cljs.core.swap_BANG_.call(null,solo.spa.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"filter-reg-ex","filter-reg-ex",816995819),((typeof x === 'string')?x:x.target.value));
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
return cljs.core.swap_BANG_.call(null,solo.spa.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"hide","hide",-596913169),((cljs.core.boolean_QMARK_.call(null,x))?x:x.target.checked));
});
/**
 * Returns the `app-state`'s `:loggers` (a _map-seq_). If `(hide?)` is
 *   truthy loggers with `:log-level "NOT-SET!" will be filtered out.
 */
solo.spa.loggers = (function solo$spa$loggers(){
var filter_reg_ex = solo.spa.filter_reg_ex.call(null);
var hide = solo.spa.hide_QMARK_.call(null);
return cljs.core.filter.call(null,((function (filter_reg_ex,hide){
return (function (p1__5910_SHARP_){
var and__3911__auto__ = cljs.core.re_find.call(null,filter_reg_ex,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927).cljs$core$IFn$_invoke$arity$1(p1__5910_SHARP_));
if(cljs.core.truth_(and__3911__auto__)){
if(cljs.core.truth_(hide)){
return cljs.core.not_EQ_.call(null,"NOT-SET!",new cljs.core.Keyword(null,"log-level","log-level",862121670).cljs$core$IFn$_invoke$arity$1(p1__5910_SHARP_));
} else {
return true;
}
} else {
return and__3911__auto__;
}
});})(filter_reg_ex,hide))
,cljs.core.map.call(null,((function (filter_reg_ex,hide){
return (function (p__5911){
var map__5912 = p__5911;
var map__5912__$1 = ((((!((map__5912 == null)))?(((((map__5912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5912):map__5912);
var logger = map__5912__$1;
var logger_name = cljs.core.get.call(null,map__5912__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var log_level = cljs.core.get.call(null,map__5912__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
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
/**
 * Eventlistener that calls the web-service `ws/get-current-loggers`
 *   and sets the `app-state`'s
 *   `:loggers`-value. Call `(load-current-loggers)` from the REPL for
 *   testing.
 */
solo.spa.load_current_loggers = (function solo$spa$load_current_loggers(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5930 = arguments.length;
var i__4500__auto___5931 = (0);
while(true){
if((i__4500__auto___5931 < len__4499__auto___5930)){
args__4502__auto__.push((arguments[i__4500__auto___5931]));

var G__5932 = (i__4500__auto___5931 + (1));
i__4500__auto___5931 = G__5932;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return solo.spa.load_current_loggers.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

solo.spa.load_current_loggers.cljs$core$IFn$_invoke$arity$variadic = (function (_){
var c__3282__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3282__auto__){
return (function (){
var f__3283__auto__ = (function (){var switch__3194__auto__ = ((function (c__3282__auto__){
return (function (state_5924){
var state_val_5925 = (state_5924[(1)]);
if((state_val_5925 === (1))){
var inst_5915 = cljs_http.client.get.call(null,"ws/get-current-loggers");
var state_5924__$1 = state_5924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5924__$1,(2),inst_5915);
} else {
if((state_val_5925 === (2))){
var inst_5917 = (state_5924[(2)]);
var inst_5918 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5919 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"loggers","loggers",-1191901729)];
var inst_5920 = (new cljs.core.PersistentVector(null,2,(5),inst_5918,inst_5919,null));
var inst_5921 = cljs.core.get_in.call(null,inst_5917,inst_5920);
var inst_5922 = cljs.core.swap_BANG_.call(null,solo.spa.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"loggers","loggers",-1191901729),inst_5921);
var state_5924__$1 = state_5924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5924__$1,inst_5922);
} else {
return null;
}
}
});})(c__3282__auto__))
;
return ((function (switch__3194__auto__,c__3282__auto__){
return (function() {
var solo$spa$state_machine__3195__auto__ = null;
var solo$spa$state_machine__3195__auto____0 = (function (){
var statearr_5926 = [null,null,null,null,null,null,null];
(statearr_5926[(0)] = solo$spa$state_machine__3195__auto__);

(statearr_5926[(1)] = (1));

return statearr_5926;
});
var solo$spa$state_machine__3195__auto____1 = (function (state_5924){
while(true){
var ret_value__3196__auto__ = (function (){try{while(true){
var result__3197__auto__ = switch__3194__auto__.call(null,state_5924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3197__auto__;
}
break;
}
}catch (e5927){if((e5927 instanceof Object)){
var ex__3198__auto__ = e5927;
var statearr_5928_5933 = state_5924;
(statearr_5928_5933[(5)] = ex__3198__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5934 = state_5924;
state_5924 = G__5934;
continue;
} else {
return ret_value__3196__auto__;
}
break;
}
});
solo$spa$state_machine__3195__auto__ = function(state_5924){
switch(arguments.length){
case 0:
return solo$spa$state_machine__3195__auto____0.call(this);
case 1:
return solo$spa$state_machine__3195__auto____1.call(this,state_5924);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$state_machine__3195__auto____0;
solo$spa$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$state_machine__3195__auto____1;
return solo$spa$state_machine__3195__auto__;
})()
;})(switch__3194__auto__,c__3282__auto__))
})();
var state__3284__auto__ = (function (){var statearr_5929 = f__3283__auto__.call(null);
(statearr_5929[(6)] = c__3282__auto__);

return statearr_5929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3284__auto__);
});})(c__3282__auto__))
);

return c__3282__auto__;
});

solo.spa.load_current_loggers.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
solo.spa.load_current_loggers.cljs$lang$applyTo = (function (seq5914){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5914));
});

/**
 * Calls the web-service `ws/set-log-level/<logger-name>/<log-level>`
 *   and triggers an update of the GUI by finally
 *   calling `(load-current-loggers)`.
 */
solo.spa.set_log_level_BANG_ = (function solo$spa$set_log_level_BANG_(logger_name,log_level){
var c__3282__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3282__auto__){
return (function (){
var f__3283__auto__ = (function (){var switch__3194__auto__ = ((function (c__3282__auto__){
return (function (state_5939){
var state_val_5940 = (state_5939[(1)]);
if((state_val_5940 === (1))){
var inst_5935 = ["ws/set-log-level/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logger_name),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(log_level)].join('');
var inst_5936 = cljs_http.client.post.call(null,inst_5935);
var inst_5937 = solo.spa.load_current_loggers.call(null);
var state_5939__$1 = (function (){var statearr_5941 = state_5939;
(statearr_5941[(7)] = inst_5936);

return statearr_5941;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5939__$1,inst_5937);
} else {
return null;
}
});})(c__3282__auto__))
;
return ((function (switch__3194__auto__,c__3282__auto__){
return (function() {
var solo$spa$set_log_level_BANG__$_state_machine__3195__auto__ = null;
var solo$spa$set_log_level_BANG__$_state_machine__3195__auto____0 = (function (){
var statearr_5942 = [null,null,null,null,null,null,null,null];
(statearr_5942[(0)] = solo$spa$set_log_level_BANG__$_state_machine__3195__auto__);

(statearr_5942[(1)] = (1));

return statearr_5942;
});
var solo$spa$set_log_level_BANG__$_state_machine__3195__auto____1 = (function (state_5939){
while(true){
var ret_value__3196__auto__ = (function (){try{while(true){
var result__3197__auto__ = switch__3194__auto__.call(null,state_5939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3197__auto__;
}
break;
}
}catch (e5943){if((e5943 instanceof Object)){
var ex__3198__auto__ = e5943;
var statearr_5944_5946 = state_5939;
(statearr_5944_5946[(5)] = ex__3198__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5947 = state_5939;
state_5939 = G__5947;
continue;
} else {
return ret_value__3196__auto__;
}
break;
}
});
solo$spa$set_log_level_BANG__$_state_machine__3195__auto__ = function(state_5939){
switch(arguments.length){
case 0:
return solo$spa$set_log_level_BANG__$_state_machine__3195__auto____0.call(this);
case 1:
return solo$spa$set_log_level_BANG__$_state_machine__3195__auto____1.call(this,state_5939);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$set_log_level_BANG__$_state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$set_log_level_BANG__$_state_machine__3195__auto____0;
solo$spa$set_log_level_BANG__$_state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$set_log_level_BANG__$_state_machine__3195__auto____1;
return solo$spa$set_log_level_BANG__$_state_machine__3195__auto__;
})()
;})(switch__3194__auto__,c__3282__auto__))
})();
var state__3284__auto__ = (function (){var statearr_5945 = f__3283__auto__.call(null);
(statearr_5945[(6)] = c__3282__auto__);

return statearr_5945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3284__auto__);
});})(c__3282__auto__))
);

return c__3282__auto__;
});
/**
 * Returns `:option` Hiccup-vector-seq for `xs`. If `(= x o)` for
 *   entry `o` of `xs` then `:selected` is `true`.
 */
solo.spa.make_options = (function solo$spa$make_options(xs,x){
return cljs.core.map.call(null,(function (o){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),o,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,o)], null),o], null);
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
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#new-logger","div#new-logger",902215213),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"logger"], null),"LOGGER:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"logger",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Logger Name"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1em"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"level"], null)," LEVEL:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"level"], null),solo.spa.make_options.call(null,solo.spa.log_levels,"INFO")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1em"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"SET LOG-LEVEL",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
var logger = document.getElementById("logger").value;
var level = document.getElementById("level").value;
return solo.spa.set_log_level_BANG_.call(null,logger,level);
})], null)], null)], null);
});
/**
 * Returns a Hiccup-vector for the *loggers form* which allows the
 *   user to select a log-level for each of the `loggers`. Within this
 *   form the user may also enter a `filter-reg-ex` (which will be used
 *   to `re-find`-match loggers by their `:logger-name`) and check-select
 *   to hide loggers with `(= log-level NOT-SET!)`.
 */
solo.spa.loggers_form = (function solo$spa$loggers_form(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#loggers","table#loggers",836788857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"LOGGER",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"filter",new cljs.core.Keyword(null,"default-value","default-value",232220170),solo.spa.reg_ex__GT_str.call(null,solo.spa.filter_reg_ex.call(null)),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter Reg-Ex",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),solo.spa.set_filter_reg_ex_BANG_], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"LEVEL",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"hide"], null)," Hide NOT-SET!:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"id","id",-1388402092),"hide",new cljs.core.Keyword(null,"checked","checked",-50955819),solo.spa.hide_QMARK_.call(null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),solo.spa.set_hide_BANG_], null)], null)], null)], null)], null),(function (){var iter__4292__auto__ = (function solo$spa$loggers_form_$_iter__5948(s__5949){
return (new cljs.core.LazySeq(null,(function (){
var s__5949__$1 = s__5949;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__5949__$1);
if(temp__4657__auto__){
var s__5949__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5949__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__5949__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__5951 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__5950 = (0);
while(true){
if((i__5950 < size__4291__auto__)){
var map__5952 = cljs.core._nth.call(null,c__4290__auto__,i__5950);
var map__5952__$1 = ((((!((map__5952 == null)))?(((((map__5952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5952):map__5952);
var logger_name = cljs.core.get.call(null,map__5952__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var log_level = cljs.core.get.call(null,map__5952__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
cljs.core.chunk_append.call(null,b__5951,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),logger_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),logger_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__5950,map__5952,map__5952__$1,logger_name,log_level,c__4290__auto__,size__4291__auto__,b__5951,s__5949__$2,temp__4657__auto__){
return (function (evt){
var log_level__$1 = evt.target.value;
return solo.spa.set_log_level_BANG_.call(null,logger_name,log_level__$1);
});})(i__5950,map__5952,map__5952__$1,logger_name,log_level,c__4290__auto__,size__4291__auto__,b__5951,s__5949__$2,temp__4657__auto__))
], null),solo.spa.make_options.call(null,solo.spa.log_levels,log_level)], null)], null)], null));

var G__5956 = (i__5950 + (1));
i__5950 = G__5956;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5951),solo$spa$loggers_form_$_iter__5948.call(null,cljs.core.chunk_rest.call(null,s__5949__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5951),null);
}
} else {
var map__5954 = cljs.core.first.call(null,s__5949__$2);
var map__5954__$1 = ((((!((map__5954 == null)))?(((((map__5954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5954):map__5954);
var logger_name = cljs.core.get.call(null,map__5954__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var log_level = cljs.core.get.call(null,map__5954__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),logger_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),logger_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__5954,map__5954__$1,logger_name,log_level,s__5949__$2,temp__4657__auto__){
return (function (evt){
var log_level__$1 = evt.target.value;
return solo.spa.set_log_level_BANG_.call(null,logger_name,log_level__$1);
});})(map__5954,map__5954__$1,logger_name,log_level,s__5949__$2,temp__4657__auto__))
], null),solo.spa.make_options.call(null,solo.spa.log_levels,log_level)], null)], null)], null),solo$spa$loggers_form_$_iter__5948.call(null,cljs.core.rest.call(null,s__5949__$2)));
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
 * Main entry point of the SPA.
 * 
 *   Creates the `main`-DOM for the SPA and mounts it in the current DOM
 *   at `id="main"`. So the initial hosting page must contain such an
 *   `id="main"-node. Then calls `(load-current-loggers)`.
 * 
 *   Note: this function builds a DOM-node with `id="main"` __at__ the
 *   node with `id="main"`. So this function can be called
 *   __repeatedly__! That's important if you want to be able to
 *   __reload__ this namespace and to re-run `(main)`.
 */
solo.spa.main = (function solo$spa$main(){
var root = (function (_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#main","div#main",-2068630773),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [solo.spa.top_of_page], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [solo.spa.set_log_level_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [solo.spa.loggers_form], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root], null),document.getElementById("main"));

return solo.spa.load_current_loggers.call(null);
});
solo.spa.main.call(null);

//# sourceMappingURL=spa.js.map?rel=1530630227461
