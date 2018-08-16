// Compiled by ClojureScript 1.10.238 {}
goog.provide('solo.spa');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('cljs_http.client');
goog.require('fokus.fokus');
goog.require('solo.spa.sysprops');
/**
 * Prints `xs` to `js/console`.
 */
solo.spa.log = (function solo$spa$log(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33842 = arguments.length;
var i__4500__auto___33843 = (0);
while(true){
if((i__4500__auto___33843 < len__4499__auto___33842)){
args__4502__auto__.push((arguments[i__4500__auto___33843]));

var G__33844 = (i__4500__auto___33843 + (1));
i__4500__auto___33843 = G__33844;
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
solo.spa.log.cljs$lang$applyTo = (function (seq33841){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33841));
});

/**
 * Log-Levels that are needed for presenting log-levels for loggers
 *   with `UNKNOWN!` log-level and for log-levels that are `NOT-SET!`.
 */
solo.spa.non_log_levels = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NOT-SET!",null,"UNKNOWN!",null], null), null);
/**
 * The set of all known log-levels (incl. `"UNKNOWN!"` and
 *  `"NOT-SET!"`).
 */
solo.spa.log_levels = cljs.core.into.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["WARN",null,"ERROR",null,"DEBUG",null,"INFO",null,"OFF",null], null), null),solo.spa.non_log_levels);
if(typeof solo.spa.app_state !== 'undefined'){
} else {
solo.spa.app_state = (function (){var s = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return s;
})();
}
/**
 * Returns the `app-state`'s `:filter-reg-ex` (`js/RegExp`). Returns
 *   `#".*"` if the `:filter-reg-ex` is empty/not-set or not a valid
 *   `js/RegExp` expression. Never returns `nil`.
 */
solo.spa.filter_reg_ex = (function solo$spa$filter_reg_ex(){
var reg_ex = new cljs.core.Keyword(null,"filter-reg-ex","filter-reg-ex",816995819).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,solo.spa.app_state),/.*/);
try{return RegExp(reg_ex);
}catch (e33845){var t = e33845;
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
return (function (p1__33846_SHARP_){
var and__3911__auto__ = cljs.core.re_find.call(null,filter_reg_ex,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927).cljs$core$IFn$_invoke$arity$1(p1__33846_SHARP_));
if(cljs.core.truth_(and__3911__auto__)){
if(cljs.core.truth_(hide)){
return cljs.core.not_EQ_.call(null,"NOT-SET!",new cljs.core.Keyword(null,"log-level","log-level",862121670).cljs$core$IFn$_invoke$arity$1(p1__33846_SHARP_));
} else {
return true;
}
} else {
return and__3911__auto__;
}
});})(filter_reg_ex,hide))
,new cljs.core.Keyword(null,"loggers","loggers",-1191901729).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,solo.spa.app_state)));
});
/**
 * Eventlistener that calls the web-service `ws/get-current-loggers`
 *   and sets the `app-state`'s
 *   `:loggers`-value. Call `(load-current-loggers)` from the REPL for
 *   testing.
 */
solo.spa.load_current_loggers = (function solo$spa$load_current_loggers(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33863 = arguments.length;
var i__4500__auto___33864 = (0);
while(true){
if((i__4500__auto___33864 < len__4499__auto___33863)){
args__4502__auto__.push((arguments[i__4500__auto___33864]));

var G__33865 = (i__4500__auto___33864 + (1));
i__4500__auto___33864 = G__33865;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return solo.spa.load_current_loggers.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

solo.spa.load_current_loggers.cljs$core$IFn$_invoke$arity$variadic = (function (_){
var c__22583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto__){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto__){
return (function (state_33857){
var state_val_33858 = (state_33857[(1)]);
if((state_val_33858 === (1))){
var inst_33848 = cljs_http.client.get.call(null,"ws/get-current-loggers");
var state_33857__$1 = state_33857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33857__$1,(2),inst_33848);
} else {
if((state_val_33858 === (2))){
var inst_33850 = (state_33857[(2)]);
var inst_33851 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33852 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"loggers","loggers",-1191901729)];
var inst_33853 = (new cljs.core.PersistentVector(null,2,(5),inst_33851,inst_33852,null));
var inst_33854 = cljs.core.get_in.call(null,inst_33850,inst_33853);
var inst_33855 = cljs.core.swap_BANG_.call(null,solo.spa.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"loggers","loggers",-1191901729),inst_33854);
var state_33857__$1 = state_33857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33857__$1,inst_33855);
} else {
return null;
}
}
});})(c__22583__auto__))
;
return ((function (switch__22495__auto__,c__22583__auto__){
return (function() {
var solo$spa$state_machine__22496__auto__ = null;
var solo$spa$state_machine__22496__auto____0 = (function (){
var statearr_33859 = [null,null,null,null,null,null,null];
(statearr_33859[(0)] = solo$spa$state_machine__22496__auto__);

(statearr_33859[(1)] = (1));

return statearr_33859;
});
var solo$spa$state_machine__22496__auto____1 = (function (state_33857){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_33857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e33860){if((e33860 instanceof Object)){
var ex__22499__auto__ = e33860;
var statearr_33861_33866 = state_33857;
(statearr_33861_33866[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33867 = state_33857;
state_33857 = G__33867;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
solo$spa$state_machine__22496__auto__ = function(state_33857){
switch(arguments.length){
case 0:
return solo$spa$state_machine__22496__auto____0.call(this);
case 1:
return solo$spa$state_machine__22496__auto____1.call(this,state_33857);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$state_machine__22496__auto____0;
solo$spa$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$state_machine__22496__auto____1;
return solo$spa$state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto__))
})();
var state__22585__auto__ = (function (){var statearr_33862 = f__22584__auto__.call(null);
(statearr_33862[(6)] = c__22583__auto__);

return statearr_33862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto__))
);

return c__22583__auto__;
});

solo.spa.load_current_loggers.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
solo.spa.load_current_loggers.cljs$lang$applyTo = (function (seq33847){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33847));
});

/**
 * Calls the web-service `ws/set-log-level/<logger-name>/<log-level>`
 *   and triggers an update of the GUI by finally
 *   calling `(load-current-loggers)`.
 */
solo.spa.set_log_level_BANG_ = (function solo$spa$set_log_level_BANG_(logger_name,log_level){
var c__22583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto__){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto__){
return (function (state_33872){
var state_val_33873 = (state_33872[(1)]);
if((state_val_33873 === (1))){
var inst_33868 = ["ws/set-log-level/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logger_name),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(log_level)].join('');
var inst_33869 = cljs_http.client.post.call(null,inst_33868);
var inst_33870 = solo.spa.load_current_loggers.call(null);
var state_33872__$1 = (function (){var statearr_33874 = state_33872;
(statearr_33874[(7)] = inst_33869);

return statearr_33874;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33872__$1,inst_33870);
} else {
return null;
}
});})(c__22583__auto__))
;
return ((function (switch__22495__auto__,c__22583__auto__){
return (function() {
var solo$spa$set_log_level_BANG__$_state_machine__22496__auto__ = null;
var solo$spa$set_log_level_BANG__$_state_machine__22496__auto____0 = (function (){
var statearr_33875 = [null,null,null,null,null,null,null,null];
(statearr_33875[(0)] = solo$spa$set_log_level_BANG__$_state_machine__22496__auto__);

(statearr_33875[(1)] = (1));

return statearr_33875;
});
var solo$spa$set_log_level_BANG__$_state_machine__22496__auto____1 = (function (state_33872){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_33872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e33876){if((e33876 instanceof Object)){
var ex__22499__auto__ = e33876;
var statearr_33877_33879 = state_33872;
(statearr_33877_33879[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33880 = state_33872;
state_33872 = G__33880;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
solo$spa$set_log_level_BANG__$_state_machine__22496__auto__ = function(state_33872){
switch(arguments.length){
case 0:
return solo$spa$set_log_level_BANG__$_state_machine__22496__auto____0.call(this);
case 1:
return solo$spa$set_log_level_BANG__$_state_machine__22496__auto____1.call(this,state_33872);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$set_log_level_BANG__$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$set_log_level_BANG__$_state_machine__22496__auto____0;
solo$spa$set_log_level_BANG__$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$set_log_level_BANG__$_state_machine__22496__auto____1;
return solo$spa$set_log_level_BANG__$_state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto__))
})();
var state__22585__auto__ = (function (){var statearr_33878 = f__22584__auto__.call(null);
(statearr_33878[(6)] = c__22583__auto__);

return statearr_33878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto__))
);

return c__22583__auto__;
});
/**
 * Reagent `:option` component. Entries which are in `non-log-levels`
 *   will be `disabled`.
 */
solo.spa.log_level_options = (function solo$spa$log_level_options(xs){
var iter__4292__auto__ = (function solo$spa$log_level_options_$_iter__33881(s__33882){
return (new cljs.core.LazySeq(null,(function (){
var s__33882__$1 = s__33882;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33882__$1);
if(temp__4657__auto__){
var s__33882__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33882__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__33882__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__33884 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__33883 = (0);
while(true){
if((i__33883 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__33883);
cljs.core.chunk_append.call(null,b__33884,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),x,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),solo.spa.non_log_levels.call(null,x)], null),x], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__33885 = (i__33883 + (1));
i__33883 = G__33885;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33884),solo$spa$log_level_options_$_iter__33881.call(null,cljs.core.chunk_rest.call(null,s__33882__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33884),null);
}
} else {
var x = cljs.core.first.call(null,s__33882__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),x,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),solo.spa.non_log_levels.call(null,x)], null),x], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),solo$spa$log_level_options_$_iter__33881.call(null,cljs.core.rest.call(null,s__33882__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,xs);
});
/**
 * Returns a Reagent-vector for the top-of-page including a link to
 *   the Codox-generated API (HTML) documentation, the
 *   Marginalia-formatted code (both contained in _Solo_) and a link to
 *   the _Solo_ github page.
 */
solo.spa.top_of_page = (function solo$spa$top_of_page(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#top-of-page","div#top-of-page",-541693280),"SOLO Web App"," -- ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"generated-doc/index.html"], null),"doc"], null)," -- ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"generated-doc/solo-source.html"], null),"source"], null)," -- ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/henrik42/solo/"], null),"github"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [solo.spa.navigation_widget], null)], null);
});
/**
 * Returns a Reagent-vector for the *set log-level form* which allows
 *   the user to enter a logger-name and select a log-level.
 */
solo.spa.set_log_level_form = (function solo$spa$set_log_level_form(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#new-logger","div#new-logger",902215213),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"logger"], null),"LOGGER:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"logger",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Logger Name"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1em"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"level"], null),"LEVEL:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"level",new cljs.core.Keyword(null,"default-value","default-value",232220170),"INFO"], null),solo.spa.log_level_options.call(null,cljs.core.remove.call(null,solo.spa.non_log_levels,solo.spa.log_levels))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1em"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"SET LOG-LEVEL",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
var logger = document.getElementById("logger").value;
var level = document.getElementById("level").value;
return solo.spa.set_log_level_BANG_.call(null,logger,level);
})], null)], null)], null);
});
/**
 * Reagent `tr` ("table-row") component. The table-row contains the
 *   `logger-name` and a drop-down `:select` with `(log-level-options
 *   log-levels)` and value `log-level`. Selecting a log-level will fire
 *   an event and call `set-log-level`.
 */
solo.spa.table_row = (function solo$spa$table_row(logger_name,log_level){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),logger_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td>select","td>select",1449346836),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),log_level,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (evt){
var log_level__$1 = evt.target.value;
return solo.spa.set_log_level_BANG_.call(null,logger_name,log_level__$1);
})], null),solo.spa.log_level_options.call(null,solo.spa.log_levels)], null)], null);
});
/**
 * Returns a Reagent-vector for the *loggers form* which allows the
 *   user to select a log-level for each of the `loggers`. Within this
 *   form the user may also enter a `filter-reg-ex` (which will be used
 *   to `re-find`-match loggers by their `:logger-name`) and check-select
 *   to hide loggers with `(= log-level NOT-SET!)`.
 */
solo.spa.loggers_form = (function solo$spa$loggers_form(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"LOGGER",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"filter",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter Reg-Ex",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"default-value","default-value",232220170),solo.spa.reg_ex__GT_str.call(null,solo.spa.filter_reg_ex.call(null)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),solo.spa.set_filter_reg_ex_BANG_], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"LEVEL",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"hide"], null),"Hide NOT-SET!:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"id","id",-1388402092),"hide",new cljs.core.Keyword(null,"checked","checked",-50955819),solo.spa.hide_QMARK_.call(null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),solo.spa.set_hide_BANG_], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4292__auto__ = (function solo$spa$loggers_form_$_iter__33886(s__33887){
return (new cljs.core.LazySeq(null,(function (){
var s__33887__$1 = s__33887;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33887__$1);
if(temp__4657__auto__){
var s__33887__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33887__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__33887__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__33889 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__33888 = (0);
while(true){
if((i__33888 < size__4291__auto__)){
var map__33890 = cljs.core._nth.call(null,c__4290__auto__,i__33888);
var map__33890__$1 = ((((!((map__33890 == null)))?(((((map__33890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33890):map__33890);
var logger_name = cljs.core.get.call(null,map__33890__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var log_level = cljs.core.get.call(null,map__33890__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
cljs.core.chunk_append.call(null,b__33889,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [solo.spa.table_row,logger_name,log_level], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),logger_name], null)));

var G__33894 = (i__33888 + (1));
i__33888 = G__33894;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33889),solo$spa$loggers_form_$_iter__33886.call(null,cljs.core.chunk_rest.call(null,s__33887__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33889),null);
}
} else {
var map__33892 = cljs.core.first.call(null,s__33887__$2);
var map__33892__$1 = ((((!((map__33892 == null)))?(((((map__33892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33892):map__33892);
var logger_name = cljs.core.get.call(null,map__33892__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var log_level = cljs.core.get.call(null,map__33892__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [solo.spa.table_row,logger_name,log_level], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),logger_name], null)),solo$spa$loggers_form_$_iter__33886.call(null,cljs.core.rest.call(null,s__33887__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,solo.spa.loggers.call(null));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tfoot>tr>td","tfoot>tr>td",-904490106),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),solo.spa.main,new cljs.core.Keyword(null,"value","value",305978217),"RELOAD"], null)], null)], null)], null);
});
solo.spa.current_page = (function solo$spa$current_page(){
var pred__33895 = cljs.core._EQ_;
var expr__33896 = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,solo.spa.app_state),new cljs.core.Keyword(null,"log4j","log4j",-1359706349));
if(cljs.core.truth_(pred__33895.call(null,new cljs.core.Keyword(null,"log4j","log4j",-1359706349),expr__33896))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [solo.spa.set_log_level_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [solo.spa.loggers_form], null)], null);
} else {
if(cljs.core.truth_(pred__33895.call(null,new cljs.core.Keyword(null,"sysprops","sysprops",-999659661),expr__33896))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fokus.fokus.set_focus_test], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Unknown page : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),cljs.core.deref.call(null,solo.spa.app_state)], null))].join('')], null);
}
}
});
solo.spa.navigate_to = (function solo$spa$navigate_to(p){
return cljs.core.swap_BANG_.call(null,solo.spa.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),p);
});
solo.spa.navigation_widget = (function solo$spa$navigation_widget(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"log4j log-level",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return solo.spa.navigate_to.call(null,new cljs.core.Keyword(null,"log4j","log4j",-1359706349));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"system properties",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return solo.spa.navigate_to.call(null,new cljs.core.Keyword(null,"sysprops","sysprops",-999659661));
})], null)], null)], null);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#main","div#main",-2068630773),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [solo.spa.top_of_page], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [solo.spa.current_page], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root], null),document.getElementById("main"));

return solo.spa.load_current_loggers.call(null);
});
solo.spa.main.call(null);

//# sourceMappingURL=spa.js.map?rel=1534453902761
