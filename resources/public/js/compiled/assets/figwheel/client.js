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
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e27613){if((e27613 instanceof Error)){
var e = e27613;
return "Error: Unable to stringify";
} else {
throw e27613;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__27616 = arguments.length;
switch (G__27616) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__27614_SHARP_){
if(typeof p1__27614_SHARP_ === 'string'){
return p1__27614_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__27614_SHARP_);
}
}),args)], null)], null));

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
var len__4499__auto___27619 = arguments.length;
var i__4500__auto___27620 = (0);
while(true){
if((i__4500__auto___27620 < len__4499__auto___27619)){
args__4502__auto__.push((arguments[i__4500__auto___27620]));

var G__27621 = (i__4500__auto___27620 + (1));
i__4500__auto___27620 = G__27621;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq27618){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27618));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27623 = arguments.length;
var i__4500__auto___27624 = (0);
while(true){
if((i__4500__auto___27624 < len__4499__auto___27623)){
args__4502__auto__.push((arguments[i__4500__auto___27624]));

var G__27625 = (i__4500__auto___27624 + (1));
i__4500__auto___27624 = G__27625;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq27622){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27622));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27626){
var map__27627 = p__27626;
var map__27627__$1 = ((((!((map__27627 == null)))?(((((map__27627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27627):map__27627);
var message = cljs.core.get.call(null,map__27627__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27627__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__22017__auto___27706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto___27706,ch){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto___27706,ch){
return (function (state_27678){
var state_val_27679 = (state_27678[(1)]);
if((state_val_27679 === (7))){
var inst_27674 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
var statearr_27680_27707 = state_27678__$1;
(statearr_27680_27707[(2)] = inst_27674);

(statearr_27680_27707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (1))){
var state_27678__$1 = state_27678;
var statearr_27681_27708 = state_27678__$1;
(statearr_27681_27708[(2)] = null);

(statearr_27681_27708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (4))){
var inst_27631 = (state_27678[(7)]);
var inst_27631__$1 = (state_27678[(2)]);
var state_27678__$1 = (function (){var statearr_27682 = state_27678;
(statearr_27682[(7)] = inst_27631__$1);

return statearr_27682;
})();
if(cljs.core.truth_(inst_27631__$1)){
var statearr_27683_27709 = state_27678__$1;
(statearr_27683_27709[(1)] = (5));

} else {
var statearr_27684_27710 = state_27678__$1;
(statearr_27684_27710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (15))){
var inst_27638 = (state_27678[(8)]);
var inst_27653 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27638);
var inst_27654 = cljs.core.first.call(null,inst_27653);
var inst_27655 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27654);
var inst_27656 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27655)].join('');
var inst_27657 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27656);
var state_27678__$1 = state_27678;
var statearr_27685_27711 = state_27678__$1;
(statearr_27685_27711[(2)] = inst_27657);

(statearr_27685_27711[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (13))){
var inst_27662 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
var statearr_27686_27712 = state_27678__$1;
(statearr_27686_27712[(2)] = inst_27662);

(statearr_27686_27712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (6))){
var state_27678__$1 = state_27678;
var statearr_27687_27713 = state_27678__$1;
(statearr_27687_27713[(2)] = null);

(statearr_27687_27713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (17))){
var inst_27660 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
var statearr_27688_27714 = state_27678__$1;
(statearr_27688_27714[(2)] = inst_27660);

(statearr_27688_27714[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (3))){
var inst_27676 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27678__$1,inst_27676);
} else {
if((state_val_27679 === (12))){
var inst_27637 = (state_27678[(9)]);
var inst_27651 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27637,opts);
var state_27678__$1 = state_27678;
if(cljs.core.truth_(inst_27651)){
var statearr_27689_27715 = state_27678__$1;
(statearr_27689_27715[(1)] = (15));

} else {
var statearr_27690_27716 = state_27678__$1;
(statearr_27690_27716[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (2))){
var state_27678__$1 = state_27678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27678__$1,(4),ch);
} else {
if((state_val_27679 === (11))){
var inst_27638 = (state_27678[(8)]);
var inst_27643 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27644 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27638);
var inst_27645 = cljs.core.async.timeout.call(null,(1000));
var inst_27646 = [inst_27644,inst_27645];
var inst_27647 = (new cljs.core.PersistentVector(null,2,(5),inst_27643,inst_27646,null));
var state_27678__$1 = state_27678;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27678__$1,(14),inst_27647);
} else {
if((state_val_27679 === (9))){
var inst_27638 = (state_27678[(8)]);
var inst_27664 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27665 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27638);
var inst_27666 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27665);
var inst_27667 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27666)].join('');
var inst_27668 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27667);
var state_27678__$1 = (function (){var statearr_27691 = state_27678;
(statearr_27691[(10)] = inst_27664);

return statearr_27691;
})();
var statearr_27692_27717 = state_27678__$1;
(statearr_27692_27717[(2)] = inst_27668);

(statearr_27692_27717[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (5))){
var inst_27631 = (state_27678[(7)]);
var inst_27633 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27634 = (new cljs.core.PersistentArrayMap(null,2,inst_27633,null));
var inst_27635 = (new cljs.core.PersistentHashSet(null,inst_27634,null));
var inst_27636 = figwheel.client.focus_msgs.call(null,inst_27635,inst_27631);
var inst_27637 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27636);
var inst_27638 = cljs.core.first.call(null,inst_27636);
var inst_27639 = figwheel.client.autoload_QMARK_.call(null);
var state_27678__$1 = (function (){var statearr_27693 = state_27678;
(statearr_27693[(8)] = inst_27638);

(statearr_27693[(9)] = inst_27637);

return statearr_27693;
})();
if(cljs.core.truth_(inst_27639)){
var statearr_27694_27718 = state_27678__$1;
(statearr_27694_27718[(1)] = (8));

} else {
var statearr_27695_27719 = state_27678__$1;
(statearr_27695_27719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (14))){
var inst_27649 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
var statearr_27696_27720 = state_27678__$1;
(statearr_27696_27720[(2)] = inst_27649);

(statearr_27696_27720[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (16))){
var state_27678__$1 = state_27678;
var statearr_27697_27721 = state_27678__$1;
(statearr_27697_27721[(2)] = null);

(statearr_27697_27721[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (10))){
var inst_27670 = (state_27678[(2)]);
var state_27678__$1 = (function (){var statearr_27698 = state_27678;
(statearr_27698[(11)] = inst_27670);

return statearr_27698;
})();
var statearr_27699_27722 = state_27678__$1;
(statearr_27699_27722[(2)] = null);

(statearr_27699_27722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (8))){
var inst_27637 = (state_27678[(9)]);
var inst_27641 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27637,opts);
var state_27678__$1 = state_27678;
if(cljs.core.truth_(inst_27641)){
var statearr_27700_27723 = state_27678__$1;
(statearr_27700_27723[(1)] = (11));

} else {
var statearr_27701_27724 = state_27678__$1;
(statearr_27701_27724[(1)] = (12));

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
});})(c__22017__auto___27706,ch))
;
return ((function (switch__21929__auto__,c__22017__auto___27706,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21930__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21930__auto____0 = (function (){
var statearr_27702 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27702[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21930__auto__);

(statearr_27702[(1)] = (1));

return statearr_27702;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21930__auto____1 = (function (state_27678){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_27678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e27703){if((e27703 instanceof Object)){
var ex__21933__auto__ = e27703;
var statearr_27704_27725 = state_27678;
(statearr_27704_27725[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27726 = state_27678;
state_27678 = G__27726;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21930__auto__ = function(state_27678){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21930__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21930__auto____1.call(this,state_27678);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21930__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21930__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto___27706,ch))
})();
var state__22019__auto__ = (function (){var statearr_27705 = f__22018__auto__.call(null);
(statearr_27705[(6)] = c__22017__auto___27706);

return statearr_27705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto___27706,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27727_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27727_SHARP_));
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
var base_path_27731 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27731){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_27729 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_27730 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_27729,_STAR_print_fn_STAR_27730,sb,base_path_27731){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_27729,_STAR_print_fn_STAR_27730,sb,base_path_27731))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27730;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27729;
}}catch (e27728){if((e27728 instanceof Error)){
var e = e27728;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27731], null));
} else {
var e = e27728;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27731))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27732){
var map__27733 = p__27732;
var map__27733__$1 = ((((!((map__27733 == null)))?(((((map__27733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27733):map__27733);
var opts = map__27733__$1;
var build_id = cljs.core.get.call(null,map__27733__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27733,map__27733__$1,opts,build_id){
return (function (p__27735){
var vec__27736 = p__27735;
var seq__27737 = cljs.core.seq.call(null,vec__27736);
var first__27738 = cljs.core.first.call(null,seq__27737);
var seq__27737__$1 = cljs.core.next.call(null,seq__27737);
var map__27739 = first__27738;
var map__27739__$1 = ((((!((map__27739 == null)))?(((((map__27739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27739):map__27739);
var msg = map__27739__$1;
var msg_name = cljs.core.get.call(null,map__27739__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27737__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27736,seq__27737,first__27738,seq__27737__$1,map__27739,map__27739__$1,msg,msg_name,_,map__27733,map__27733__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27736,seq__27737,first__27738,seq__27737__$1,map__27739,map__27739__$1,msg,msg_name,_,map__27733,map__27733__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27733,map__27733__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27741){
var vec__27742 = p__27741;
var seq__27743 = cljs.core.seq.call(null,vec__27742);
var first__27744 = cljs.core.first.call(null,seq__27743);
var seq__27743__$1 = cljs.core.next.call(null,seq__27743);
var map__27745 = first__27744;
var map__27745__$1 = ((((!((map__27745 == null)))?(((((map__27745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27745):map__27745);
var msg = map__27745__$1;
var msg_name = cljs.core.get.call(null,map__27745__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27743__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27747){
var map__27748 = p__27747;
var map__27748__$1 = ((((!((map__27748 == null)))?(((((map__27748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27748):map__27748);
var on_compile_warning = cljs.core.get.call(null,map__27748__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27748__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27748,map__27748__$1,on_compile_warning,on_compile_fail){
return (function (p__27750){
var vec__27751 = p__27750;
var seq__27752 = cljs.core.seq.call(null,vec__27751);
var first__27753 = cljs.core.first.call(null,seq__27752);
var seq__27752__$1 = cljs.core.next.call(null,seq__27752);
var map__27754 = first__27753;
var map__27754__$1 = ((((!((map__27754 == null)))?(((((map__27754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27754):map__27754);
var msg = map__27754__$1;
var msg_name = cljs.core.get.call(null,map__27754__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27752__$1;
var pred__27756 = cljs.core._EQ_;
var expr__27757 = msg_name;
if(cljs.core.truth_(pred__27756.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27757))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27756.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27757))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27748,map__27748__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto__,msg_hist,msg_names,msg){
return (function (state_27846){
var state_val_27847 = (state_27846[(1)]);
if((state_val_27847 === (7))){
var inst_27766 = (state_27846[(2)]);
var state_27846__$1 = state_27846;
if(cljs.core.truth_(inst_27766)){
var statearr_27848_27895 = state_27846__$1;
(statearr_27848_27895[(1)] = (8));

} else {
var statearr_27849_27896 = state_27846__$1;
(statearr_27849_27896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (20))){
var inst_27840 = (state_27846[(2)]);
var state_27846__$1 = state_27846;
var statearr_27850_27897 = state_27846__$1;
(statearr_27850_27897[(2)] = inst_27840);

(statearr_27850_27897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (27))){
var inst_27836 = (state_27846[(2)]);
var state_27846__$1 = state_27846;
var statearr_27851_27898 = state_27846__$1;
(statearr_27851_27898[(2)] = inst_27836);

(statearr_27851_27898[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (1))){
var inst_27759 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27846__$1 = state_27846;
if(cljs.core.truth_(inst_27759)){
var statearr_27852_27899 = state_27846__$1;
(statearr_27852_27899[(1)] = (2));

} else {
var statearr_27853_27900 = state_27846__$1;
(statearr_27853_27900[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (24))){
var inst_27838 = (state_27846[(2)]);
var state_27846__$1 = state_27846;
var statearr_27854_27901 = state_27846__$1;
(statearr_27854_27901[(2)] = inst_27838);

(statearr_27854_27901[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (4))){
var inst_27844 = (state_27846[(2)]);
var state_27846__$1 = state_27846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27846__$1,inst_27844);
} else {
if((state_val_27847 === (15))){
var inst_27842 = (state_27846[(2)]);
var state_27846__$1 = state_27846;
var statearr_27855_27902 = state_27846__$1;
(statearr_27855_27902[(2)] = inst_27842);

(statearr_27855_27902[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (21))){
var inst_27795 = (state_27846[(2)]);
var inst_27796 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27797 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27796);
var state_27846__$1 = (function (){var statearr_27856 = state_27846;
(statearr_27856[(7)] = inst_27795);

return statearr_27856;
})();
var statearr_27857_27903 = state_27846__$1;
(statearr_27857_27903[(2)] = inst_27797);

(statearr_27857_27903[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (31))){
var inst_27825 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27846__$1 = state_27846;
if(cljs.core.truth_(inst_27825)){
var statearr_27858_27904 = state_27846__$1;
(statearr_27858_27904[(1)] = (34));

} else {
var statearr_27859_27905 = state_27846__$1;
(statearr_27859_27905[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (32))){
var inst_27834 = (state_27846[(2)]);
var state_27846__$1 = state_27846;
var statearr_27860_27906 = state_27846__$1;
(statearr_27860_27906[(2)] = inst_27834);

(statearr_27860_27906[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (33))){
var inst_27821 = (state_27846[(2)]);
var inst_27822 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27823 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27822);
var state_27846__$1 = (function (){var statearr_27861 = state_27846;
(statearr_27861[(8)] = inst_27821);

return statearr_27861;
})();
var statearr_27862_27907 = state_27846__$1;
(statearr_27862_27907[(2)] = inst_27823);

(statearr_27862_27907[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (13))){
var inst_27780 = figwheel.client.heads_up.clear.call(null);
var state_27846__$1 = state_27846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27846__$1,(16),inst_27780);
} else {
if((state_val_27847 === (22))){
var inst_27801 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27802 = figwheel.client.heads_up.append_warning_message.call(null,inst_27801);
var state_27846__$1 = state_27846;
var statearr_27863_27908 = state_27846__$1;
(statearr_27863_27908[(2)] = inst_27802);

(statearr_27863_27908[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (36))){
var inst_27832 = (state_27846[(2)]);
var state_27846__$1 = state_27846;
var statearr_27864_27909 = state_27846__$1;
(statearr_27864_27909[(2)] = inst_27832);

(statearr_27864_27909[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (29))){
var inst_27812 = (state_27846[(2)]);
var inst_27813 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27814 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27813);
var state_27846__$1 = (function (){var statearr_27865 = state_27846;
(statearr_27865[(9)] = inst_27812);

return statearr_27865;
})();
var statearr_27866_27910 = state_27846__$1;
(statearr_27866_27910[(2)] = inst_27814);

(statearr_27866_27910[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (6))){
var inst_27761 = (state_27846[(10)]);
var state_27846__$1 = state_27846;
var statearr_27867_27911 = state_27846__$1;
(statearr_27867_27911[(2)] = inst_27761);

(statearr_27867_27911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (28))){
var inst_27808 = (state_27846[(2)]);
var inst_27809 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27810 = figwheel.client.heads_up.display_warning.call(null,inst_27809);
var state_27846__$1 = (function (){var statearr_27868 = state_27846;
(statearr_27868[(11)] = inst_27808);

return statearr_27868;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27846__$1,(29),inst_27810);
} else {
if((state_val_27847 === (25))){
var inst_27806 = figwheel.client.heads_up.clear.call(null);
var state_27846__$1 = state_27846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27846__$1,(28),inst_27806);
} else {
if((state_val_27847 === (34))){
var inst_27827 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27846__$1 = state_27846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27846__$1,(37),inst_27827);
} else {
if((state_val_27847 === (17))){
var inst_27786 = (state_27846[(2)]);
var inst_27787 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27788 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27787);
var state_27846__$1 = (function (){var statearr_27869 = state_27846;
(statearr_27869[(12)] = inst_27786);

return statearr_27869;
})();
var statearr_27870_27912 = state_27846__$1;
(statearr_27870_27912[(2)] = inst_27788);

(statearr_27870_27912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (3))){
var inst_27778 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27846__$1 = state_27846;
if(cljs.core.truth_(inst_27778)){
var statearr_27871_27913 = state_27846__$1;
(statearr_27871_27913[(1)] = (13));

} else {
var statearr_27872_27914 = state_27846__$1;
(statearr_27872_27914[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (12))){
var inst_27774 = (state_27846[(2)]);
var state_27846__$1 = state_27846;
var statearr_27873_27915 = state_27846__$1;
(statearr_27873_27915[(2)] = inst_27774);

(statearr_27873_27915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (2))){
var inst_27761 = (state_27846[(10)]);
var inst_27761__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27846__$1 = (function (){var statearr_27874 = state_27846;
(statearr_27874[(10)] = inst_27761__$1);

return statearr_27874;
})();
if(cljs.core.truth_(inst_27761__$1)){
var statearr_27875_27916 = state_27846__$1;
(statearr_27875_27916[(1)] = (5));

} else {
var statearr_27876_27917 = state_27846__$1;
(statearr_27876_27917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (23))){
var inst_27804 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27846__$1 = state_27846;
if(cljs.core.truth_(inst_27804)){
var statearr_27877_27918 = state_27846__$1;
(statearr_27877_27918[(1)] = (25));

} else {
var statearr_27878_27919 = state_27846__$1;
(statearr_27878_27919[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (35))){
var state_27846__$1 = state_27846;
var statearr_27879_27920 = state_27846__$1;
(statearr_27879_27920[(2)] = null);

(statearr_27879_27920[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (19))){
var inst_27799 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27846__$1 = state_27846;
if(cljs.core.truth_(inst_27799)){
var statearr_27880_27921 = state_27846__$1;
(statearr_27880_27921[(1)] = (22));

} else {
var statearr_27881_27922 = state_27846__$1;
(statearr_27881_27922[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (11))){
var inst_27770 = (state_27846[(2)]);
var state_27846__$1 = state_27846;
var statearr_27882_27923 = state_27846__$1;
(statearr_27882_27923[(2)] = inst_27770);

(statearr_27882_27923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (9))){
var inst_27772 = figwheel.client.heads_up.clear.call(null);
var state_27846__$1 = state_27846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27846__$1,(12),inst_27772);
} else {
if((state_val_27847 === (5))){
var inst_27763 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27846__$1 = state_27846;
var statearr_27883_27924 = state_27846__$1;
(statearr_27883_27924[(2)] = inst_27763);

(statearr_27883_27924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (14))){
var inst_27790 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27846__$1 = state_27846;
if(cljs.core.truth_(inst_27790)){
var statearr_27884_27925 = state_27846__$1;
(statearr_27884_27925[(1)] = (18));

} else {
var statearr_27885_27926 = state_27846__$1;
(statearr_27885_27926[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (26))){
var inst_27816 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27846__$1 = state_27846;
if(cljs.core.truth_(inst_27816)){
var statearr_27886_27927 = state_27846__$1;
(statearr_27886_27927[(1)] = (30));

} else {
var statearr_27887_27928 = state_27846__$1;
(statearr_27887_27928[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (16))){
var inst_27782 = (state_27846[(2)]);
var inst_27783 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27784 = figwheel.client.heads_up.display_exception.call(null,inst_27783);
var state_27846__$1 = (function (){var statearr_27888 = state_27846;
(statearr_27888[(13)] = inst_27782);

return statearr_27888;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27846__$1,(17),inst_27784);
} else {
if((state_val_27847 === (30))){
var inst_27818 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27819 = figwheel.client.heads_up.display_warning.call(null,inst_27818);
var state_27846__$1 = state_27846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27846__$1,(33),inst_27819);
} else {
if((state_val_27847 === (10))){
var inst_27776 = (state_27846[(2)]);
var state_27846__$1 = state_27846;
var statearr_27889_27929 = state_27846__$1;
(statearr_27889_27929[(2)] = inst_27776);

(statearr_27889_27929[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (18))){
var inst_27792 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27793 = figwheel.client.heads_up.display_exception.call(null,inst_27792);
var state_27846__$1 = state_27846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27846__$1,(21),inst_27793);
} else {
if((state_val_27847 === (37))){
var inst_27829 = (state_27846[(2)]);
var state_27846__$1 = state_27846;
var statearr_27890_27930 = state_27846__$1;
(statearr_27890_27930[(2)] = inst_27829);

(statearr_27890_27930[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (8))){
var inst_27768 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27846__$1 = state_27846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27846__$1,(11),inst_27768);
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
});})(c__22017__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21929__auto__,c__22017__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21930__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21930__auto____0 = (function (){
var statearr_27891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27891[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21930__auto__);

(statearr_27891[(1)] = (1));

return statearr_27891;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21930__auto____1 = (function (state_27846){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_27846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e27892){if((e27892 instanceof Object)){
var ex__21933__auto__ = e27892;
var statearr_27893_27931 = state_27846;
(statearr_27893_27931[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27932 = state_27846;
state_27846 = G__27932;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21930__auto__ = function(state_27846){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21930__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21930__auto____1.call(this,state_27846);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21930__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21930__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto__,msg_hist,msg_names,msg))
})();
var state__22019__auto__ = (function (){var statearr_27894 = f__22018__auto__.call(null);
(statearr_27894[(6)] = c__22017__auto__);

return statearr_27894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto__,msg_hist,msg_names,msg))
);

return c__22017__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22017__auto___27961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto___27961,ch){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto___27961,ch){
return (function (state_27947){
var state_val_27948 = (state_27947[(1)]);
if((state_val_27948 === (1))){
var state_27947__$1 = state_27947;
var statearr_27949_27962 = state_27947__$1;
(statearr_27949_27962[(2)] = null);

(statearr_27949_27962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (2))){
var state_27947__$1 = state_27947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27947__$1,(4),ch);
} else {
if((state_val_27948 === (3))){
var inst_27945 = (state_27947[(2)]);
var state_27947__$1 = state_27947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27947__$1,inst_27945);
} else {
if((state_val_27948 === (4))){
var inst_27935 = (state_27947[(7)]);
var inst_27935__$1 = (state_27947[(2)]);
var state_27947__$1 = (function (){var statearr_27950 = state_27947;
(statearr_27950[(7)] = inst_27935__$1);

return statearr_27950;
})();
if(cljs.core.truth_(inst_27935__$1)){
var statearr_27951_27963 = state_27947__$1;
(statearr_27951_27963[(1)] = (5));

} else {
var statearr_27952_27964 = state_27947__$1;
(statearr_27952_27964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (5))){
var inst_27935 = (state_27947[(7)]);
var inst_27937 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27935);
var state_27947__$1 = state_27947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27947__$1,(8),inst_27937);
} else {
if((state_val_27948 === (6))){
var state_27947__$1 = state_27947;
var statearr_27953_27965 = state_27947__$1;
(statearr_27953_27965[(2)] = null);

(statearr_27953_27965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (7))){
var inst_27943 = (state_27947[(2)]);
var state_27947__$1 = state_27947;
var statearr_27954_27966 = state_27947__$1;
(statearr_27954_27966[(2)] = inst_27943);

(statearr_27954_27966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (8))){
var inst_27939 = (state_27947[(2)]);
var state_27947__$1 = (function (){var statearr_27955 = state_27947;
(statearr_27955[(8)] = inst_27939);

return statearr_27955;
})();
var statearr_27956_27967 = state_27947__$1;
(statearr_27956_27967[(2)] = null);

(statearr_27956_27967[(1)] = (2));


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
});})(c__22017__auto___27961,ch))
;
return ((function (switch__21929__auto__,c__22017__auto___27961,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21930__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21930__auto____0 = (function (){
var statearr_27957 = [null,null,null,null,null,null,null,null,null];
(statearr_27957[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21930__auto__);

(statearr_27957[(1)] = (1));

return statearr_27957;
});
var figwheel$client$heads_up_plugin_$_state_machine__21930__auto____1 = (function (state_27947){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_27947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e27958){if((e27958 instanceof Object)){
var ex__21933__auto__ = e27958;
var statearr_27959_27968 = state_27947;
(statearr_27959_27968[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27969 = state_27947;
state_27947 = G__27969;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21930__auto__ = function(state_27947){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21930__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21930__auto____1.call(this,state_27947);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21930__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21930__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto___27961,ch))
})();
var state__22019__auto__ = (function (){var statearr_27960 = f__22018__auto__.call(null);
(statearr_27960[(6)] = c__22017__auto___27961);

return statearr_27960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto___27961,ch))
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
var c__22017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto__){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto__){
return (function (state_27975){
var state_val_27976 = (state_27975[(1)]);
if((state_val_27976 === (1))){
var inst_27970 = cljs.core.async.timeout.call(null,(3000));
var state_27975__$1 = state_27975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27975__$1,(2),inst_27970);
} else {
if((state_val_27976 === (2))){
var inst_27972 = (state_27975[(2)]);
var inst_27973 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27975__$1 = (function (){var statearr_27977 = state_27975;
(statearr_27977[(7)] = inst_27972);

return statearr_27977;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27975__$1,inst_27973);
} else {
return null;
}
}
});})(c__22017__auto__))
;
return ((function (switch__21929__auto__,c__22017__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21930__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21930__auto____0 = (function (){
var statearr_27978 = [null,null,null,null,null,null,null,null];
(statearr_27978[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21930__auto__);

(statearr_27978[(1)] = (1));

return statearr_27978;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21930__auto____1 = (function (state_27975){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_27975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e27979){if((e27979 instanceof Object)){
var ex__21933__auto__ = e27979;
var statearr_27980_27982 = state_27975;
(statearr_27980_27982[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27983 = state_27975;
state_27975 = G__27983;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21930__auto__ = function(state_27975){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21930__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21930__auto____1.call(this,state_27975);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21930__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21930__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto__))
})();
var state__22019__auto__ = (function (){var statearr_27981 = f__22018__auto__.call(null);
(statearr_27981[(6)] = c__22017__auto__);

return statearr_27981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto__))
);

return c__22017__auto__;
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
var c__22017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto__,figwheel_version,temp__4657__auto__){
return (function (state_27990){
var state_val_27991 = (state_27990[(1)]);
if((state_val_27991 === (1))){
var inst_27984 = cljs.core.async.timeout.call(null,(2000));
var state_27990__$1 = state_27990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27990__$1,(2),inst_27984);
} else {
if((state_val_27991 === (2))){
var inst_27986 = (state_27990[(2)]);
var inst_27987 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_27988 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_27987);
var state_27990__$1 = (function (){var statearr_27992 = state_27990;
(statearr_27992[(7)] = inst_27986);

return statearr_27992;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27990__$1,inst_27988);
} else {
return null;
}
}
});})(c__22017__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__21929__auto__,c__22017__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21930__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21930__auto____0 = (function (){
var statearr_27993 = [null,null,null,null,null,null,null,null];
(statearr_27993[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21930__auto__);

(statearr_27993[(1)] = (1));

return statearr_27993;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21930__auto____1 = (function (state_27990){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_27990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e27994){if((e27994 instanceof Object)){
var ex__21933__auto__ = e27994;
var statearr_27995_27997 = state_27990;
(statearr_27995_27997[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27998 = state_27990;
state_27990 = G__27998;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21930__auto__ = function(state_27990){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21930__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21930__auto____1.call(this,state_27990);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21930__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21930__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto__,figwheel_version,temp__4657__auto__))
})();
var state__22019__auto__ = (function (){var statearr_27996 = f__22018__auto__.call(null);
(statearr_27996[(6)] = c__22017__auto__);

return statearr_27996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto__,figwheel_version,temp__4657__auto__))
);

return c__22017__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__27999){
var map__28000 = p__27999;
var map__28000__$1 = ((((!((map__28000 == null)))?(((((map__28000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28000):map__28000);
var file = cljs.core.get.call(null,map__28000__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28000__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28000__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__28002 = "";
var G__28002__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28002),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__28002);
var G__28002__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28002__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__28002__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28002__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__28002__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28003){
var map__28004 = p__28003;
var map__28004__$1 = ((((!((map__28004 == null)))?(((((map__28004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28004):map__28004);
var ed = map__28004__$1;
var formatted_exception = cljs.core.get.call(null,map__28004__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28004__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28004__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28006_28010 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28007_28011 = null;
var count__28008_28012 = (0);
var i__28009_28013 = (0);
while(true){
if((i__28009_28013 < count__28008_28012)){
var msg_28014 = cljs.core._nth.call(null,chunk__28007_28011,i__28009_28013);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28014);


var G__28015 = seq__28006_28010;
var G__28016 = chunk__28007_28011;
var G__28017 = count__28008_28012;
var G__28018 = (i__28009_28013 + (1));
seq__28006_28010 = G__28015;
chunk__28007_28011 = G__28016;
count__28008_28012 = G__28017;
i__28009_28013 = G__28018;
continue;
} else {
var temp__4657__auto___28019 = cljs.core.seq.call(null,seq__28006_28010);
if(temp__4657__auto___28019){
var seq__28006_28020__$1 = temp__4657__auto___28019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28006_28020__$1)){
var c__4319__auto___28021 = cljs.core.chunk_first.call(null,seq__28006_28020__$1);
var G__28022 = cljs.core.chunk_rest.call(null,seq__28006_28020__$1);
var G__28023 = c__4319__auto___28021;
var G__28024 = cljs.core.count.call(null,c__4319__auto___28021);
var G__28025 = (0);
seq__28006_28010 = G__28022;
chunk__28007_28011 = G__28023;
count__28008_28012 = G__28024;
i__28009_28013 = G__28025;
continue;
} else {
var msg_28026 = cljs.core.first.call(null,seq__28006_28020__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28026);


var G__28027 = cljs.core.next.call(null,seq__28006_28020__$1);
var G__28028 = null;
var G__28029 = (0);
var G__28030 = (0);
seq__28006_28010 = G__28027;
chunk__28007_28011 = G__28028;
count__28008_28012 = G__28029;
i__28009_28013 = G__28030;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28031){
var map__28032 = p__28031;
var map__28032__$1 = ((((!((map__28032 == null)))?(((((map__28032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28032):map__28032);
var w = map__28032__$1;
var message = cljs.core.get.call(null,map__28032__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/assets/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/assets/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28034 = cljs.core.seq.call(null,plugins);
var chunk__28035 = null;
var count__28036 = (0);
var i__28037 = (0);
while(true){
if((i__28037 < count__28036)){
var vec__28038 = cljs.core._nth.call(null,chunk__28035,i__28037);
var k = cljs.core.nth.call(null,vec__28038,(0),null);
var plugin = cljs.core.nth.call(null,vec__28038,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28044 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28034,chunk__28035,count__28036,i__28037,pl_28044,vec__28038,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28044.call(null,msg_hist);
});})(seq__28034,chunk__28035,count__28036,i__28037,pl_28044,vec__28038,k,plugin))
);
} else {
}


var G__28045 = seq__28034;
var G__28046 = chunk__28035;
var G__28047 = count__28036;
var G__28048 = (i__28037 + (1));
seq__28034 = G__28045;
chunk__28035 = G__28046;
count__28036 = G__28047;
i__28037 = G__28048;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28034);
if(temp__4657__auto__){
var seq__28034__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28034__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28034__$1);
var G__28049 = cljs.core.chunk_rest.call(null,seq__28034__$1);
var G__28050 = c__4319__auto__;
var G__28051 = cljs.core.count.call(null,c__4319__auto__);
var G__28052 = (0);
seq__28034 = G__28049;
chunk__28035 = G__28050;
count__28036 = G__28051;
i__28037 = G__28052;
continue;
} else {
var vec__28041 = cljs.core.first.call(null,seq__28034__$1);
var k = cljs.core.nth.call(null,vec__28041,(0),null);
var plugin = cljs.core.nth.call(null,vec__28041,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28053 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28034,chunk__28035,count__28036,i__28037,pl_28053,vec__28041,k,plugin,seq__28034__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28053.call(null,msg_hist);
});})(seq__28034,chunk__28035,count__28036,i__28037,pl_28053,vec__28041,k,plugin,seq__28034__$1,temp__4657__auto__))
);
} else {
}


var G__28054 = cljs.core.next.call(null,seq__28034__$1);
var G__28055 = null;
var G__28056 = (0);
var G__28057 = (0);
seq__28034 = G__28054;
chunk__28035 = G__28055;
count__28036 = G__28056;
i__28037 = G__28057;
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
var G__28059 = arguments.length;
switch (G__28059) {
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

var seq__28060_28065 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__28061_28066 = null;
var count__28062_28067 = (0);
var i__28063_28068 = (0);
while(true){
if((i__28063_28068 < count__28062_28067)){
var msg_28069 = cljs.core._nth.call(null,chunk__28061_28066,i__28063_28068);
figwheel.client.socket.handle_incoming_message.call(null,msg_28069);


var G__28070 = seq__28060_28065;
var G__28071 = chunk__28061_28066;
var G__28072 = count__28062_28067;
var G__28073 = (i__28063_28068 + (1));
seq__28060_28065 = G__28070;
chunk__28061_28066 = G__28071;
count__28062_28067 = G__28072;
i__28063_28068 = G__28073;
continue;
} else {
var temp__4657__auto___28074 = cljs.core.seq.call(null,seq__28060_28065);
if(temp__4657__auto___28074){
var seq__28060_28075__$1 = temp__4657__auto___28074;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28060_28075__$1)){
var c__4319__auto___28076 = cljs.core.chunk_first.call(null,seq__28060_28075__$1);
var G__28077 = cljs.core.chunk_rest.call(null,seq__28060_28075__$1);
var G__28078 = c__4319__auto___28076;
var G__28079 = cljs.core.count.call(null,c__4319__auto___28076);
var G__28080 = (0);
seq__28060_28065 = G__28077;
chunk__28061_28066 = G__28078;
count__28062_28067 = G__28079;
i__28063_28068 = G__28080;
continue;
} else {
var msg_28081 = cljs.core.first.call(null,seq__28060_28075__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_28081);


var G__28082 = cljs.core.next.call(null,seq__28060_28075__$1);
var G__28083 = null;
var G__28084 = (0);
var G__28085 = (0);
seq__28060_28065 = G__28082;
chunk__28061_28066 = G__28083;
count__28062_28067 = G__28084;
i__28063_28068 = G__28085;
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
var len__4499__auto___28090 = arguments.length;
var i__4500__auto___28091 = (0);
while(true){
if((i__4500__auto___28091 < len__4499__auto___28090)){
args__4502__auto__.push((arguments[i__4500__auto___28091]));

var G__28092 = (i__4500__auto___28091 + (1));
i__4500__auto___28091 = G__28092;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28087){
var map__28088 = p__28087;
var map__28088__$1 = ((((!((map__28088 == null)))?(((((map__28088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28088):map__28088);
var opts = map__28088__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28086){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28086));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e28093){if((e28093 instanceof Error)){
var e = e28093;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e28093;

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
return (function (p__28094){
var map__28095 = p__28094;
var map__28095__$1 = ((((!((map__28095 == null)))?(((((map__28095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28095):map__28095);
var msg_name = cljs.core.get.call(null,map__28095__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1530166204072
