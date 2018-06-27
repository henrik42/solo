// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.4-6";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__24292 = arguments.length;
switch (G__24292) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24295 = arguments.length;
var i__4500__auto___24296 = (0);
while(true){
if((i__4500__auto___24296 < len__4499__auto___24295)){
args__4502__auto__.push((arguments[i__4500__auto___24296]));

var G__24297 = (i__4500__auto___24296 + (1));
i__4500__auto___24296 = G__24297;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq24294){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24294));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24299 = arguments.length;
var i__4500__auto___24300 = (0);
while(true){
if((i__4500__auto___24300 < len__4499__auto___24299)){
args__4502__auto__.push((arguments[i__4500__auto___24300]));

var G__24301 = (i__4500__auto___24300 + (1));
i__4500__auto___24300 = G__24301;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq24298){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24298));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__24302 = cljs.core._EQ_;
var expr__24303 = (function (){var or__3922__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e24306){if((e24306 instanceof Error)){
var e = e24306;
return false;
} else {
throw e24306;

}
}})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24302.call(null,"true",expr__24303))){
return true;
} else {
if(cljs.core.truth_(pred__24302.call(null,"false",expr__24303))){
return false;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__24303)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e24307){if((e24307 instanceof Error)){
var e = e24307;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Unable to access localStorage"].join(''));
} else {
throw e24307;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24308){
var map__24309 = p__24308;
var map__24309__$1 = ((((!((map__24309 == null)))?(((((map__24309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24309):map__24309);
var message = cljs.core.get.call(null,map__24309__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24309__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21924__auto___24388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21924__auto___24388,ch){
return (function (){
var f__21925__auto__ = (function (){var switch__21903__auto__ = ((function (c__21924__auto___24388,ch){
return (function (state_24360){
var state_val_24361 = (state_24360[(1)]);
if((state_val_24361 === (7))){
var inst_24356 = (state_24360[(2)]);
var state_24360__$1 = state_24360;
var statearr_24362_24389 = state_24360__$1;
(statearr_24362_24389[(2)] = inst_24356);

(statearr_24362_24389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (1))){
var state_24360__$1 = state_24360;
var statearr_24363_24390 = state_24360__$1;
(statearr_24363_24390[(2)] = null);

(statearr_24363_24390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (4))){
var inst_24313 = (state_24360[(7)]);
var inst_24313__$1 = (state_24360[(2)]);
var state_24360__$1 = (function (){var statearr_24364 = state_24360;
(statearr_24364[(7)] = inst_24313__$1);

return statearr_24364;
})();
if(cljs.core.truth_(inst_24313__$1)){
var statearr_24365_24391 = state_24360__$1;
(statearr_24365_24391[(1)] = (5));

} else {
var statearr_24366_24392 = state_24360__$1;
(statearr_24366_24392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (15))){
var inst_24320 = (state_24360[(8)]);
var inst_24335 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24320);
var inst_24336 = cljs.core.first.call(null,inst_24335);
var inst_24337 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24336);
var inst_24338 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24337)].join('');
var inst_24339 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24338);
var state_24360__$1 = state_24360;
var statearr_24367_24393 = state_24360__$1;
(statearr_24367_24393[(2)] = inst_24339);

(statearr_24367_24393[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (13))){
var inst_24344 = (state_24360[(2)]);
var state_24360__$1 = state_24360;
var statearr_24368_24394 = state_24360__$1;
(statearr_24368_24394[(2)] = inst_24344);

(statearr_24368_24394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (6))){
var state_24360__$1 = state_24360;
var statearr_24369_24395 = state_24360__$1;
(statearr_24369_24395[(2)] = null);

(statearr_24369_24395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (17))){
var inst_24342 = (state_24360[(2)]);
var state_24360__$1 = state_24360;
var statearr_24370_24396 = state_24360__$1;
(statearr_24370_24396[(2)] = inst_24342);

(statearr_24370_24396[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (3))){
var inst_24358 = (state_24360[(2)]);
var state_24360__$1 = state_24360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24360__$1,inst_24358);
} else {
if((state_val_24361 === (12))){
var inst_24319 = (state_24360[(9)]);
var inst_24333 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24319,opts);
var state_24360__$1 = state_24360;
if(cljs.core.truth_(inst_24333)){
var statearr_24371_24397 = state_24360__$1;
(statearr_24371_24397[(1)] = (15));

} else {
var statearr_24372_24398 = state_24360__$1;
(statearr_24372_24398[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (2))){
var state_24360__$1 = state_24360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24360__$1,(4),ch);
} else {
if((state_val_24361 === (11))){
var inst_24320 = (state_24360[(8)]);
var inst_24325 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24326 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24320);
var inst_24327 = cljs.core.async.timeout.call(null,(1000));
var inst_24328 = [inst_24326,inst_24327];
var inst_24329 = (new cljs.core.PersistentVector(null,2,(5),inst_24325,inst_24328,null));
var state_24360__$1 = state_24360;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24360__$1,(14),inst_24329);
} else {
if((state_val_24361 === (9))){
var inst_24320 = (state_24360[(8)]);
var inst_24346 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24347 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24320);
var inst_24348 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24347);
var inst_24349 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24348)].join('');
var inst_24350 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24349);
var state_24360__$1 = (function (){var statearr_24373 = state_24360;
(statearr_24373[(10)] = inst_24346);

return statearr_24373;
})();
var statearr_24374_24399 = state_24360__$1;
(statearr_24374_24399[(2)] = inst_24350);

(statearr_24374_24399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (5))){
var inst_24313 = (state_24360[(7)]);
var inst_24315 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24316 = (new cljs.core.PersistentArrayMap(null,2,inst_24315,null));
var inst_24317 = (new cljs.core.PersistentHashSet(null,inst_24316,null));
var inst_24318 = figwheel.client.focus_msgs.call(null,inst_24317,inst_24313);
var inst_24319 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24318);
var inst_24320 = cljs.core.first.call(null,inst_24318);
var inst_24321 = figwheel.client.autoload_QMARK_.call(null);
var state_24360__$1 = (function (){var statearr_24375 = state_24360;
(statearr_24375[(8)] = inst_24320);

(statearr_24375[(9)] = inst_24319);

return statearr_24375;
})();
if(cljs.core.truth_(inst_24321)){
var statearr_24376_24400 = state_24360__$1;
(statearr_24376_24400[(1)] = (8));

} else {
var statearr_24377_24401 = state_24360__$1;
(statearr_24377_24401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (14))){
var inst_24331 = (state_24360[(2)]);
var state_24360__$1 = state_24360;
var statearr_24378_24402 = state_24360__$1;
(statearr_24378_24402[(2)] = inst_24331);

(statearr_24378_24402[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (16))){
var state_24360__$1 = state_24360;
var statearr_24379_24403 = state_24360__$1;
(statearr_24379_24403[(2)] = null);

(statearr_24379_24403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (10))){
var inst_24352 = (state_24360[(2)]);
var state_24360__$1 = (function (){var statearr_24380 = state_24360;
(statearr_24380[(11)] = inst_24352);

return statearr_24380;
})();
var statearr_24381_24404 = state_24360__$1;
(statearr_24381_24404[(2)] = null);

(statearr_24381_24404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (8))){
var inst_24319 = (state_24360[(9)]);
var inst_24323 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24319,opts);
var state_24360__$1 = state_24360;
if(cljs.core.truth_(inst_24323)){
var statearr_24382_24405 = state_24360__$1;
(statearr_24382_24405[(1)] = (11));

} else {
var statearr_24383_24406 = state_24360__$1;
(statearr_24383_24406[(1)] = (12));

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
});})(c__21924__auto___24388,ch))
;
return ((function (switch__21903__auto__,c__21924__auto___24388,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21904__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21904__auto____0 = (function (){
var statearr_24384 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24384[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21904__auto__);

(statearr_24384[(1)] = (1));

return statearr_24384;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21904__auto____1 = (function (state_24360){
while(true){
var ret_value__21905__auto__ = (function (){try{while(true){
var result__21906__auto__ = switch__21903__auto__.call(null,state_24360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21906__auto__;
}
break;
}
}catch (e24385){if((e24385 instanceof Object)){
var ex__21907__auto__ = e24385;
var statearr_24386_24407 = state_24360;
(statearr_24386_24407[(5)] = ex__21907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24408 = state_24360;
state_24360 = G__24408;
continue;
} else {
return ret_value__21905__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21904__auto__ = function(state_24360){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21904__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21904__auto____1.call(this,state_24360);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__21904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21904__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21904__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21904__auto__;
})()
;})(switch__21903__auto__,c__21924__auto___24388,ch))
})();
var state__21926__auto__ = (function (){var statearr_24387 = f__21925__auto__.call(null);
(statearr_24387[(6)] = c__21924__auto___24388);

return statearr_24387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21926__auto__);
});})(c__21924__auto___24388,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24409_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24409_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_24411 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24411){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e24410){if((e24410 instanceof Error)){
var e = e24410;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24411], null));
} else {
var e = e24410;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_24411))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24412){
var map__24413 = p__24412;
var map__24413__$1 = ((((!((map__24413 == null)))?(((((map__24413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24413):map__24413);
var opts = map__24413__$1;
var build_id = cljs.core.get.call(null,map__24413__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24413,map__24413__$1,opts,build_id){
return (function (p__24415){
var vec__24416 = p__24415;
var seq__24417 = cljs.core.seq.call(null,vec__24416);
var first__24418 = cljs.core.first.call(null,seq__24417);
var seq__24417__$1 = cljs.core.next.call(null,seq__24417);
var map__24419 = first__24418;
var map__24419__$1 = ((((!((map__24419 == null)))?(((((map__24419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24419):map__24419);
var msg = map__24419__$1;
var msg_name = cljs.core.get.call(null,map__24419__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__24417__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24416,seq__24417,first__24418,seq__24417__$1,map__24419,map__24419__$1,msg,msg_name,_,map__24413,map__24413__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24416,seq__24417,first__24418,seq__24417__$1,map__24419,map__24419__$1,msg,msg_name,_,map__24413,map__24413__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24413,map__24413__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24421){
var vec__24422 = p__24421;
var seq__24423 = cljs.core.seq.call(null,vec__24422);
var first__24424 = cljs.core.first.call(null,seq__24423);
var seq__24423__$1 = cljs.core.next.call(null,seq__24423);
var map__24425 = first__24424;
var map__24425__$1 = ((((!((map__24425 == null)))?(((((map__24425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24425):map__24425);
var msg = map__24425__$1;
var msg_name = cljs.core.get.call(null,map__24425__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__24423__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24427){
var map__24428 = p__24427;
var map__24428__$1 = ((((!((map__24428 == null)))?(((((map__24428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24428):map__24428);
var on_compile_warning = cljs.core.get.call(null,map__24428__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24428__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24428,map__24428__$1,on_compile_warning,on_compile_fail){
return (function (p__24430){
var vec__24431 = p__24430;
var seq__24432 = cljs.core.seq.call(null,vec__24431);
var first__24433 = cljs.core.first.call(null,seq__24432);
var seq__24432__$1 = cljs.core.next.call(null,seq__24432);
var map__24434 = first__24433;
var map__24434__$1 = ((((!((map__24434 == null)))?(((((map__24434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24434):map__24434);
var msg = map__24434__$1;
var msg_name = cljs.core.get.call(null,map__24434__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__24432__$1;
var pred__24436 = cljs.core._EQ_;
var expr__24437 = msg_name;
if(cljs.core.truth_(pred__24436.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24437))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24436.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24437))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24428,map__24428__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21924__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21925__auto__ = (function (){var switch__21903__auto__ = ((function (c__21924__auto__,msg_hist,msg_names,msg){
return (function (state_24518){
var state_val_24519 = (state_24518[(1)]);
if((state_val_24519 === (7))){
var inst_24446 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
if(cljs.core.truth_(inst_24446)){
var statearr_24520_24563 = state_24518__$1;
(statearr_24520_24563[(1)] = (8));

} else {
var statearr_24521_24564 = state_24518__$1;
(statearr_24521_24564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (20))){
var inst_24512 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
var statearr_24522_24565 = state_24518__$1;
(statearr_24522_24565[(2)] = inst_24512);

(statearr_24522_24565[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (27))){
var inst_24508 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
var statearr_24523_24566 = state_24518__$1;
(statearr_24523_24566[(2)] = inst_24508);

(statearr_24523_24566[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (1))){
var inst_24439 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24518__$1 = state_24518;
if(cljs.core.truth_(inst_24439)){
var statearr_24524_24567 = state_24518__$1;
(statearr_24524_24567[(1)] = (2));

} else {
var statearr_24525_24568 = state_24518__$1;
(statearr_24525_24568[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (24))){
var inst_24510 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
var statearr_24526_24569 = state_24518__$1;
(statearr_24526_24569[(2)] = inst_24510);

(statearr_24526_24569[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (4))){
var inst_24516 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24518__$1,inst_24516);
} else {
if((state_val_24519 === (15))){
var inst_24514 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
var statearr_24527_24570 = state_24518__$1;
(statearr_24527_24570[(2)] = inst_24514);

(statearr_24527_24570[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (21))){
var inst_24473 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
var statearr_24528_24571 = state_24518__$1;
(statearr_24528_24571[(2)] = inst_24473);

(statearr_24528_24571[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (31))){
var inst_24497 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24518__$1 = state_24518;
if(cljs.core.truth_(inst_24497)){
var statearr_24529_24572 = state_24518__$1;
(statearr_24529_24572[(1)] = (34));

} else {
var statearr_24530_24573 = state_24518__$1;
(statearr_24530_24573[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (32))){
var inst_24506 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
var statearr_24531_24574 = state_24518__$1;
(statearr_24531_24574[(2)] = inst_24506);

(statearr_24531_24574[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (33))){
var inst_24495 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
var statearr_24532_24575 = state_24518__$1;
(statearr_24532_24575[(2)] = inst_24495);

(statearr_24532_24575[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (13))){
var inst_24460 = figwheel.client.heads_up.clear.call(null);
var state_24518__$1 = state_24518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24518__$1,(16),inst_24460);
} else {
if((state_val_24519 === (22))){
var inst_24477 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24478 = figwheel.client.heads_up.append_warning_message.call(null,inst_24477);
var state_24518__$1 = state_24518;
var statearr_24533_24576 = state_24518__$1;
(statearr_24533_24576[(2)] = inst_24478);

(statearr_24533_24576[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (36))){
var inst_24504 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
var statearr_24534_24577 = state_24518__$1;
(statearr_24534_24577[(2)] = inst_24504);

(statearr_24534_24577[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (29))){
var inst_24488 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
var statearr_24535_24578 = state_24518__$1;
(statearr_24535_24578[(2)] = inst_24488);

(statearr_24535_24578[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (6))){
var inst_24441 = (state_24518[(7)]);
var state_24518__$1 = state_24518;
var statearr_24536_24579 = state_24518__$1;
(statearr_24536_24579[(2)] = inst_24441);

(statearr_24536_24579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (28))){
var inst_24484 = (state_24518[(2)]);
var inst_24485 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24486 = figwheel.client.heads_up.display_warning.call(null,inst_24485);
var state_24518__$1 = (function (){var statearr_24537 = state_24518;
(statearr_24537[(8)] = inst_24484);

return statearr_24537;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24518__$1,(29),inst_24486);
} else {
if((state_val_24519 === (25))){
var inst_24482 = figwheel.client.heads_up.clear.call(null);
var state_24518__$1 = state_24518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24518__$1,(28),inst_24482);
} else {
if((state_val_24519 === (34))){
var inst_24499 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24518__$1 = state_24518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24518__$1,(37),inst_24499);
} else {
if((state_val_24519 === (17))){
var inst_24466 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
var statearr_24538_24580 = state_24518__$1;
(statearr_24538_24580[(2)] = inst_24466);

(statearr_24538_24580[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (3))){
var inst_24458 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24518__$1 = state_24518;
if(cljs.core.truth_(inst_24458)){
var statearr_24539_24581 = state_24518__$1;
(statearr_24539_24581[(1)] = (13));

} else {
var statearr_24540_24582 = state_24518__$1;
(statearr_24540_24582[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (12))){
var inst_24454 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
var statearr_24541_24583 = state_24518__$1;
(statearr_24541_24583[(2)] = inst_24454);

(statearr_24541_24583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (2))){
var inst_24441 = (state_24518[(7)]);
var inst_24441__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24518__$1 = (function (){var statearr_24542 = state_24518;
(statearr_24542[(7)] = inst_24441__$1);

return statearr_24542;
})();
if(cljs.core.truth_(inst_24441__$1)){
var statearr_24543_24584 = state_24518__$1;
(statearr_24543_24584[(1)] = (5));

} else {
var statearr_24544_24585 = state_24518__$1;
(statearr_24544_24585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (23))){
var inst_24480 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24518__$1 = state_24518;
if(cljs.core.truth_(inst_24480)){
var statearr_24545_24586 = state_24518__$1;
(statearr_24545_24586[(1)] = (25));

} else {
var statearr_24546_24587 = state_24518__$1;
(statearr_24546_24587[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (35))){
var state_24518__$1 = state_24518;
var statearr_24547_24588 = state_24518__$1;
(statearr_24547_24588[(2)] = null);

(statearr_24547_24588[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (19))){
var inst_24475 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24518__$1 = state_24518;
if(cljs.core.truth_(inst_24475)){
var statearr_24548_24589 = state_24518__$1;
(statearr_24548_24589[(1)] = (22));

} else {
var statearr_24549_24590 = state_24518__$1;
(statearr_24549_24590[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (11))){
var inst_24450 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
var statearr_24550_24591 = state_24518__$1;
(statearr_24550_24591[(2)] = inst_24450);

(statearr_24550_24591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (9))){
var inst_24452 = figwheel.client.heads_up.clear.call(null);
var state_24518__$1 = state_24518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24518__$1,(12),inst_24452);
} else {
if((state_val_24519 === (5))){
var inst_24443 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24518__$1 = state_24518;
var statearr_24551_24592 = state_24518__$1;
(statearr_24551_24592[(2)] = inst_24443);

(statearr_24551_24592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (14))){
var inst_24468 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24518__$1 = state_24518;
if(cljs.core.truth_(inst_24468)){
var statearr_24552_24593 = state_24518__$1;
(statearr_24552_24593[(1)] = (18));

} else {
var statearr_24553_24594 = state_24518__$1;
(statearr_24553_24594[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (26))){
var inst_24490 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24518__$1 = state_24518;
if(cljs.core.truth_(inst_24490)){
var statearr_24554_24595 = state_24518__$1;
(statearr_24554_24595[(1)] = (30));

} else {
var statearr_24555_24596 = state_24518__$1;
(statearr_24555_24596[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (16))){
var inst_24462 = (state_24518[(2)]);
var inst_24463 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24464 = figwheel.client.heads_up.display_exception.call(null,inst_24463);
var state_24518__$1 = (function (){var statearr_24556 = state_24518;
(statearr_24556[(9)] = inst_24462);

return statearr_24556;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24518__$1,(17),inst_24464);
} else {
if((state_val_24519 === (30))){
var inst_24492 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24493 = figwheel.client.heads_up.display_warning.call(null,inst_24492);
var state_24518__$1 = state_24518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24518__$1,(33),inst_24493);
} else {
if((state_val_24519 === (10))){
var inst_24456 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
var statearr_24557_24597 = state_24518__$1;
(statearr_24557_24597[(2)] = inst_24456);

(statearr_24557_24597[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (18))){
var inst_24470 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24471 = figwheel.client.heads_up.display_exception.call(null,inst_24470);
var state_24518__$1 = state_24518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24518__$1,(21),inst_24471);
} else {
if((state_val_24519 === (37))){
var inst_24501 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
var statearr_24558_24598 = state_24518__$1;
(statearr_24558_24598[(2)] = inst_24501);

(statearr_24558_24598[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (8))){
var inst_24448 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24518__$1 = state_24518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24518__$1,(11),inst_24448);
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
});})(c__21924__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21903__auto__,c__21924__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21904__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21904__auto____0 = (function (){
var statearr_24559 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24559[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21904__auto__);

(statearr_24559[(1)] = (1));

return statearr_24559;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21904__auto____1 = (function (state_24518){
while(true){
var ret_value__21905__auto__ = (function (){try{while(true){
var result__21906__auto__ = switch__21903__auto__.call(null,state_24518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21906__auto__;
}
break;
}
}catch (e24560){if((e24560 instanceof Object)){
var ex__21907__auto__ = e24560;
var statearr_24561_24599 = state_24518;
(statearr_24561_24599[(5)] = ex__21907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24600 = state_24518;
state_24518 = G__24600;
continue;
} else {
return ret_value__21905__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21904__auto__ = function(state_24518){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21904__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21904__auto____1.call(this,state_24518);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21904__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21904__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21904__auto__;
})()
;})(switch__21903__auto__,c__21924__auto__,msg_hist,msg_names,msg))
})();
var state__21926__auto__ = (function (){var statearr_24562 = f__21925__auto__.call(null);
(statearr_24562[(6)] = c__21924__auto__);

return statearr_24562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21926__auto__);
});})(c__21924__auto__,msg_hist,msg_names,msg))
);

return c__21924__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21924__auto___24629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21924__auto___24629,ch){
return (function (){
var f__21925__auto__ = (function (){var switch__21903__auto__ = ((function (c__21924__auto___24629,ch){
return (function (state_24615){
var state_val_24616 = (state_24615[(1)]);
if((state_val_24616 === (1))){
var state_24615__$1 = state_24615;
var statearr_24617_24630 = state_24615__$1;
(statearr_24617_24630[(2)] = null);

(statearr_24617_24630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24616 === (2))){
var state_24615__$1 = state_24615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24615__$1,(4),ch);
} else {
if((state_val_24616 === (3))){
var inst_24613 = (state_24615[(2)]);
var state_24615__$1 = state_24615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24615__$1,inst_24613);
} else {
if((state_val_24616 === (4))){
var inst_24603 = (state_24615[(7)]);
var inst_24603__$1 = (state_24615[(2)]);
var state_24615__$1 = (function (){var statearr_24618 = state_24615;
(statearr_24618[(7)] = inst_24603__$1);

return statearr_24618;
})();
if(cljs.core.truth_(inst_24603__$1)){
var statearr_24619_24631 = state_24615__$1;
(statearr_24619_24631[(1)] = (5));

} else {
var statearr_24620_24632 = state_24615__$1;
(statearr_24620_24632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24616 === (5))){
var inst_24603 = (state_24615[(7)]);
var inst_24605 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24603);
var state_24615__$1 = state_24615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24615__$1,(8),inst_24605);
} else {
if((state_val_24616 === (6))){
var state_24615__$1 = state_24615;
var statearr_24621_24633 = state_24615__$1;
(statearr_24621_24633[(2)] = null);

(statearr_24621_24633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24616 === (7))){
var inst_24611 = (state_24615[(2)]);
var state_24615__$1 = state_24615;
var statearr_24622_24634 = state_24615__$1;
(statearr_24622_24634[(2)] = inst_24611);

(statearr_24622_24634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24616 === (8))){
var inst_24607 = (state_24615[(2)]);
var state_24615__$1 = (function (){var statearr_24623 = state_24615;
(statearr_24623[(8)] = inst_24607);

return statearr_24623;
})();
var statearr_24624_24635 = state_24615__$1;
(statearr_24624_24635[(2)] = null);

(statearr_24624_24635[(1)] = (2));


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
});})(c__21924__auto___24629,ch))
;
return ((function (switch__21903__auto__,c__21924__auto___24629,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21904__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21904__auto____0 = (function (){
var statearr_24625 = [null,null,null,null,null,null,null,null,null];
(statearr_24625[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21904__auto__);

(statearr_24625[(1)] = (1));

return statearr_24625;
});
var figwheel$client$heads_up_plugin_$_state_machine__21904__auto____1 = (function (state_24615){
while(true){
var ret_value__21905__auto__ = (function (){try{while(true){
var result__21906__auto__ = switch__21903__auto__.call(null,state_24615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21906__auto__;
}
break;
}
}catch (e24626){if((e24626 instanceof Object)){
var ex__21907__auto__ = e24626;
var statearr_24627_24636 = state_24615;
(statearr_24627_24636[(5)] = ex__21907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24637 = state_24615;
state_24615 = G__24637;
continue;
} else {
return ret_value__21905__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21904__auto__ = function(state_24615){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21904__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21904__auto____1.call(this,state_24615);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__21904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21904__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21904__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21904__auto__;
})()
;})(switch__21903__auto__,c__21924__auto___24629,ch))
})();
var state__21926__auto__ = (function (){var statearr_24628 = f__21925__auto__.call(null);
(statearr_24628[(6)] = c__21924__auto___24629);

return statearr_24628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21926__auto__);
});})(c__21924__auto___24629,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21924__auto__){
return (function (){
var f__21925__auto__ = (function (){var switch__21903__auto__ = ((function (c__21924__auto__){
return (function (state_24643){
var state_val_24644 = (state_24643[(1)]);
if((state_val_24644 === (1))){
var inst_24638 = cljs.core.async.timeout.call(null,(3000));
var state_24643__$1 = state_24643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24643__$1,(2),inst_24638);
} else {
if((state_val_24644 === (2))){
var inst_24640 = (state_24643[(2)]);
var inst_24641 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24643__$1 = (function (){var statearr_24645 = state_24643;
(statearr_24645[(7)] = inst_24640);

return statearr_24645;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24643__$1,inst_24641);
} else {
return null;
}
}
});})(c__21924__auto__))
;
return ((function (switch__21903__auto__,c__21924__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21904__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21904__auto____0 = (function (){
var statearr_24646 = [null,null,null,null,null,null,null,null];
(statearr_24646[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21904__auto__);

(statearr_24646[(1)] = (1));

return statearr_24646;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21904__auto____1 = (function (state_24643){
while(true){
var ret_value__21905__auto__ = (function (){try{while(true){
var result__21906__auto__ = switch__21903__auto__.call(null,state_24643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21906__auto__;
}
break;
}
}catch (e24647){if((e24647 instanceof Object)){
var ex__21907__auto__ = e24647;
var statearr_24648_24650 = state_24643;
(statearr_24648_24650[(5)] = ex__21907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24651 = state_24643;
state_24643 = G__24651;
continue;
} else {
return ret_value__21905__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21904__auto__ = function(state_24643){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21904__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21904__auto____1.call(this,state_24643);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__21904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21904__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21904__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21904__auto__;
})()
;})(switch__21903__auto__,c__21924__auto__))
})();
var state__21926__auto__ = (function (){var statearr_24649 = f__21925__auto__.call(null);
(statearr_24649[(6)] = c__21924__auto__);

return statearr_24649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21926__auto__);
});})(c__21924__auto__))
);

return c__21924__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21924__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__21925__auto__ = (function (){var switch__21903__auto__ = ((function (c__21924__auto__,figwheel_version,temp__4657__auto__){
return (function (state_24658){
var state_val_24659 = (state_24658[(1)]);
if((state_val_24659 === (1))){
var inst_24652 = cljs.core.async.timeout.call(null,(2000));
var state_24658__$1 = state_24658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24658__$1,(2),inst_24652);
} else {
if((state_val_24659 === (2))){
var inst_24654 = (state_24658[(2)]);
var inst_24655 = ["Figwheel Client Version \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"\" is not equal to ","Figwheel Sidecar Version \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"\"",".  Shutting down Websocket Connection!"].join('');
var inst_24656 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_24655);
var state_24658__$1 = (function (){var statearr_24660 = state_24658;
(statearr_24660[(7)] = inst_24654);

return statearr_24660;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24658__$1,inst_24656);
} else {
return null;
}
}
});})(c__21924__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__21903__auto__,c__21924__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21904__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21904__auto____0 = (function (){
var statearr_24661 = [null,null,null,null,null,null,null,null];
(statearr_24661[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21904__auto__);

(statearr_24661[(1)] = (1));

return statearr_24661;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21904__auto____1 = (function (state_24658){
while(true){
var ret_value__21905__auto__ = (function (){try{while(true){
var result__21906__auto__ = switch__21903__auto__.call(null,state_24658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21906__auto__;
}
break;
}
}catch (e24662){if((e24662 instanceof Object)){
var ex__21907__auto__ = e24662;
var statearr_24663_24665 = state_24658;
(statearr_24663_24665[(5)] = ex__21907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24666 = state_24658;
state_24658 = G__24666;
continue;
} else {
return ret_value__21905__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21904__auto__ = function(state_24658){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21904__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21904__auto____1.call(this,state_24658);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21904__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21904__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21904__auto__;
})()
;})(switch__21903__auto__,c__21924__auto__,figwheel_version,temp__4657__auto__))
})();
var state__21926__auto__ = (function (){var statearr_24664 = f__21925__auto__.call(null);
(statearr_24664[(6)] = c__21924__auto__);

return statearr_24664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21926__auto__);
});})(c__21924__auto__,figwheel_version,temp__4657__auto__))
);

return c__21924__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__24667){
var map__24668 = p__24667;
var map__24668__$1 = ((((!((map__24668 == null)))?(((((map__24668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24668):map__24668);
var file = cljs.core.get.call(null,map__24668__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__24668__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24668__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__24670 = "";
var G__24670__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24670),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__24670);
var G__24670__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24670__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__24670__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24670__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__24670__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24671){
var map__24672 = p__24671;
var map__24672__$1 = ((((!((map__24672 == null)))?(((((map__24672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24672):map__24672);
var ed = map__24672__$1;
var formatted_exception = cljs.core.get.call(null,map__24672__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24672__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24672__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24674_24678 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24675_24679 = null;
var count__24676_24680 = (0);
var i__24677_24681 = (0);
while(true){
if((i__24677_24681 < count__24676_24680)){
var msg_24682 = cljs.core._nth.call(null,chunk__24675_24679,i__24677_24681);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24682);


var G__24683 = seq__24674_24678;
var G__24684 = chunk__24675_24679;
var G__24685 = count__24676_24680;
var G__24686 = (i__24677_24681 + (1));
seq__24674_24678 = G__24683;
chunk__24675_24679 = G__24684;
count__24676_24680 = G__24685;
i__24677_24681 = G__24686;
continue;
} else {
var temp__4657__auto___24687 = cljs.core.seq.call(null,seq__24674_24678);
if(temp__4657__auto___24687){
var seq__24674_24688__$1 = temp__4657__auto___24687;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24674_24688__$1)){
var c__4319__auto___24689 = cljs.core.chunk_first.call(null,seq__24674_24688__$1);
var G__24690 = cljs.core.chunk_rest.call(null,seq__24674_24688__$1);
var G__24691 = c__4319__auto___24689;
var G__24692 = cljs.core.count.call(null,c__4319__auto___24689);
var G__24693 = (0);
seq__24674_24678 = G__24690;
chunk__24675_24679 = G__24691;
count__24676_24680 = G__24692;
i__24677_24681 = G__24693;
continue;
} else {
var msg_24694 = cljs.core.first.call(null,seq__24674_24688__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24694);


var G__24695 = cljs.core.next.call(null,seq__24674_24688__$1);
var G__24696 = null;
var G__24697 = (0);
var G__24698 = (0);
seq__24674_24678 = G__24695;
chunk__24675_24679 = G__24696;
count__24676_24680 = G__24697;
i__24677_24681 = G__24698;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24699){
var map__24700 = p__24699;
var map__24700__$1 = ((((!((map__24700 == null)))?(((((map__24700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24700):map__24700);
var w = map__24700__$1;
var message = cljs.core.get.call(null,map__24700__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/assets/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/assets/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24702 = cljs.core.seq.call(null,plugins);
var chunk__24703 = null;
var count__24704 = (0);
var i__24705 = (0);
while(true){
if((i__24705 < count__24704)){
var vec__24706 = cljs.core._nth.call(null,chunk__24703,i__24705);
var k = cljs.core.nth.call(null,vec__24706,(0),null);
var plugin = cljs.core.nth.call(null,vec__24706,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24712 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24702,chunk__24703,count__24704,i__24705,pl_24712,vec__24706,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24712.call(null,msg_hist);
});})(seq__24702,chunk__24703,count__24704,i__24705,pl_24712,vec__24706,k,plugin))
);
} else {
}


var G__24713 = seq__24702;
var G__24714 = chunk__24703;
var G__24715 = count__24704;
var G__24716 = (i__24705 + (1));
seq__24702 = G__24713;
chunk__24703 = G__24714;
count__24704 = G__24715;
i__24705 = G__24716;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24702);
if(temp__4657__auto__){
var seq__24702__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24702__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24702__$1);
var G__24717 = cljs.core.chunk_rest.call(null,seq__24702__$1);
var G__24718 = c__4319__auto__;
var G__24719 = cljs.core.count.call(null,c__4319__auto__);
var G__24720 = (0);
seq__24702 = G__24717;
chunk__24703 = G__24718;
count__24704 = G__24719;
i__24705 = G__24720;
continue;
} else {
var vec__24709 = cljs.core.first.call(null,seq__24702__$1);
var k = cljs.core.nth.call(null,vec__24709,(0),null);
var plugin = cljs.core.nth.call(null,vec__24709,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24721 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24702,chunk__24703,count__24704,i__24705,pl_24721,vec__24709,k,plugin,seq__24702__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24721.call(null,msg_hist);
});})(seq__24702,chunk__24703,count__24704,i__24705,pl_24721,vec__24709,k,plugin,seq__24702__$1,temp__4657__auto__))
);
} else {
}


var G__24722 = cljs.core.next.call(null,seq__24702__$1);
var G__24723 = null;
var G__24724 = (0);
var G__24725 = (0);
seq__24702 = G__24722;
chunk__24703 = G__24723;
count__24704 = G__24724;
i__24705 = G__24725;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__24727 = arguments.length;
switch (G__24727) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__24728_24733 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__24729_24734 = null;
var count__24730_24735 = (0);
var i__24731_24736 = (0);
while(true){
if((i__24731_24736 < count__24730_24735)){
var msg_24737 = cljs.core._nth.call(null,chunk__24729_24734,i__24731_24736);
figwheel.client.socket.handle_incoming_message.call(null,msg_24737);


var G__24738 = seq__24728_24733;
var G__24739 = chunk__24729_24734;
var G__24740 = count__24730_24735;
var G__24741 = (i__24731_24736 + (1));
seq__24728_24733 = G__24738;
chunk__24729_24734 = G__24739;
count__24730_24735 = G__24740;
i__24731_24736 = G__24741;
continue;
} else {
var temp__4657__auto___24742 = cljs.core.seq.call(null,seq__24728_24733);
if(temp__4657__auto___24742){
var seq__24728_24743__$1 = temp__4657__auto___24742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24728_24743__$1)){
var c__4319__auto___24744 = cljs.core.chunk_first.call(null,seq__24728_24743__$1);
var G__24745 = cljs.core.chunk_rest.call(null,seq__24728_24743__$1);
var G__24746 = c__4319__auto___24744;
var G__24747 = cljs.core.count.call(null,c__4319__auto___24744);
var G__24748 = (0);
seq__24728_24733 = G__24745;
chunk__24729_24734 = G__24746;
count__24730_24735 = G__24747;
i__24731_24736 = G__24748;
continue;
} else {
var msg_24749 = cljs.core.first.call(null,seq__24728_24743__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_24749);


var G__24750 = cljs.core.next.call(null,seq__24728_24743__$1);
var G__24751 = null;
var G__24752 = (0);
var G__24753 = (0);
seq__24728_24733 = G__24750;
chunk__24729_24734 = G__24751;
count__24730_24735 = G__24752;
i__24731_24736 = G__24753;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24758 = arguments.length;
var i__4500__auto___24759 = (0);
while(true){
if((i__4500__auto___24759 < len__4499__auto___24758)){
args__4502__auto__.push((arguments[i__4500__auto___24759]));

var G__24760 = (i__4500__auto___24759 + (1));
i__4500__auto___24759 = G__24760;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24755){
var map__24756 = p__24755;
var map__24756__$1 = ((((!((map__24756 == null)))?(((((map__24756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24756):map__24756);
var opts = map__24756__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24754){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24754));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e24761){if((e24761 instanceof Error)){
var e = e24761;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e24761;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__24762){
var map__24763 = p__24762;
var map__24763__$1 = ((((!((map__24763 == null)))?(((((map__24763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24763):map__24763);
var msg_name = cljs.core.get.call(null,map__24763__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1530044038520
