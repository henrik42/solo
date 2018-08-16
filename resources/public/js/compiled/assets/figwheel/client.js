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
}catch (e27939){if((e27939 instanceof Error)){
var e = e27939;
return "Error: Unable to stringify";
} else {
throw e27939;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__27942 = arguments.length;
switch (G__27942) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__27940_SHARP_){
if(typeof p1__27940_SHARP_ === 'string'){
return p1__27940_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__27940_SHARP_);
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
var len__4499__auto___27945 = arguments.length;
var i__4500__auto___27946 = (0);
while(true){
if((i__4500__auto___27946 < len__4499__auto___27945)){
args__4502__auto__.push((arguments[i__4500__auto___27946]));

var G__27947 = (i__4500__auto___27946 + (1));
i__4500__auto___27946 = G__27947;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq27944){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27944));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27949 = arguments.length;
var i__4500__auto___27950 = (0);
while(true){
if((i__4500__auto___27950 < len__4499__auto___27949)){
args__4502__auto__.push((arguments[i__4500__auto___27950]));

var G__27951 = (i__4500__auto___27950 + (1));
i__4500__auto___27950 = G__27951;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq27948){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27948));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27952){
var map__27953 = p__27952;
var map__27953__$1 = ((((!((map__27953 == null)))?(((((map__27953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27953):map__27953);
var message = cljs.core.get.call(null,map__27953__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27953__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__22583__auto___28032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto___28032,ch){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto___28032,ch){
return (function (state_28004){
var state_val_28005 = (state_28004[(1)]);
if((state_val_28005 === (7))){
var inst_28000 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
var statearr_28006_28033 = state_28004__$1;
(statearr_28006_28033[(2)] = inst_28000);

(statearr_28006_28033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (1))){
var state_28004__$1 = state_28004;
var statearr_28007_28034 = state_28004__$1;
(statearr_28007_28034[(2)] = null);

(statearr_28007_28034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (4))){
var inst_27957 = (state_28004[(7)]);
var inst_27957__$1 = (state_28004[(2)]);
var state_28004__$1 = (function (){var statearr_28008 = state_28004;
(statearr_28008[(7)] = inst_27957__$1);

return statearr_28008;
})();
if(cljs.core.truth_(inst_27957__$1)){
var statearr_28009_28035 = state_28004__$1;
(statearr_28009_28035[(1)] = (5));

} else {
var statearr_28010_28036 = state_28004__$1;
(statearr_28010_28036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (15))){
var inst_27964 = (state_28004[(8)]);
var inst_27979 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27964);
var inst_27980 = cljs.core.first.call(null,inst_27979);
var inst_27981 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27980);
var inst_27982 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27981)].join('');
var inst_27983 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27982);
var state_28004__$1 = state_28004;
var statearr_28011_28037 = state_28004__$1;
(statearr_28011_28037[(2)] = inst_27983);

(statearr_28011_28037[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (13))){
var inst_27988 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
var statearr_28012_28038 = state_28004__$1;
(statearr_28012_28038[(2)] = inst_27988);

(statearr_28012_28038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (6))){
var state_28004__$1 = state_28004;
var statearr_28013_28039 = state_28004__$1;
(statearr_28013_28039[(2)] = null);

(statearr_28013_28039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (17))){
var inst_27986 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
var statearr_28014_28040 = state_28004__$1;
(statearr_28014_28040[(2)] = inst_27986);

(statearr_28014_28040[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (3))){
var inst_28002 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28004__$1,inst_28002);
} else {
if((state_val_28005 === (12))){
var inst_27963 = (state_28004[(9)]);
var inst_27977 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27963,opts);
var state_28004__$1 = state_28004;
if(cljs.core.truth_(inst_27977)){
var statearr_28015_28041 = state_28004__$1;
(statearr_28015_28041[(1)] = (15));

} else {
var statearr_28016_28042 = state_28004__$1;
(statearr_28016_28042[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (2))){
var state_28004__$1 = state_28004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28004__$1,(4),ch);
} else {
if((state_val_28005 === (11))){
var inst_27964 = (state_28004[(8)]);
var inst_27969 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27970 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27964);
var inst_27971 = cljs.core.async.timeout.call(null,(1000));
var inst_27972 = [inst_27970,inst_27971];
var inst_27973 = (new cljs.core.PersistentVector(null,2,(5),inst_27969,inst_27972,null));
var state_28004__$1 = state_28004;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28004__$1,(14),inst_27973);
} else {
if((state_val_28005 === (9))){
var inst_27964 = (state_28004[(8)]);
var inst_27990 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27991 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27964);
var inst_27992 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27991);
var inst_27993 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27992)].join('');
var inst_27994 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27993);
var state_28004__$1 = (function (){var statearr_28017 = state_28004;
(statearr_28017[(10)] = inst_27990);

return statearr_28017;
})();
var statearr_28018_28043 = state_28004__$1;
(statearr_28018_28043[(2)] = inst_27994);

(statearr_28018_28043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (5))){
var inst_27957 = (state_28004[(7)]);
var inst_27959 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27960 = (new cljs.core.PersistentArrayMap(null,2,inst_27959,null));
var inst_27961 = (new cljs.core.PersistentHashSet(null,inst_27960,null));
var inst_27962 = figwheel.client.focus_msgs.call(null,inst_27961,inst_27957);
var inst_27963 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27962);
var inst_27964 = cljs.core.first.call(null,inst_27962);
var inst_27965 = figwheel.client.autoload_QMARK_.call(null);
var state_28004__$1 = (function (){var statearr_28019 = state_28004;
(statearr_28019[(8)] = inst_27964);

(statearr_28019[(9)] = inst_27963);

return statearr_28019;
})();
if(cljs.core.truth_(inst_27965)){
var statearr_28020_28044 = state_28004__$1;
(statearr_28020_28044[(1)] = (8));

} else {
var statearr_28021_28045 = state_28004__$1;
(statearr_28021_28045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (14))){
var inst_27975 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
var statearr_28022_28046 = state_28004__$1;
(statearr_28022_28046[(2)] = inst_27975);

(statearr_28022_28046[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (16))){
var state_28004__$1 = state_28004;
var statearr_28023_28047 = state_28004__$1;
(statearr_28023_28047[(2)] = null);

(statearr_28023_28047[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (10))){
var inst_27996 = (state_28004[(2)]);
var state_28004__$1 = (function (){var statearr_28024 = state_28004;
(statearr_28024[(11)] = inst_27996);

return statearr_28024;
})();
var statearr_28025_28048 = state_28004__$1;
(statearr_28025_28048[(2)] = null);

(statearr_28025_28048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (8))){
var inst_27963 = (state_28004[(9)]);
var inst_27967 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27963,opts);
var state_28004__$1 = state_28004;
if(cljs.core.truth_(inst_27967)){
var statearr_28026_28049 = state_28004__$1;
(statearr_28026_28049[(1)] = (11));

} else {
var statearr_28027_28050 = state_28004__$1;
(statearr_28027_28050[(1)] = (12));

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
});})(c__22583__auto___28032,ch))
;
return ((function (switch__22495__auto__,c__22583__auto___28032,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22496__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22496__auto____0 = (function (){
var statearr_28028 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28028[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22496__auto__);

(statearr_28028[(1)] = (1));

return statearr_28028;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22496__auto____1 = (function (state_28004){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_28004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e28029){if((e28029 instanceof Object)){
var ex__22499__auto__ = e28029;
var statearr_28030_28051 = state_28004;
(statearr_28030_28051[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28052 = state_28004;
state_28004 = G__28052;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22496__auto__ = function(state_28004){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22496__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22496__auto____1.call(this,state_28004);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22496__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22496__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto___28032,ch))
})();
var state__22585__auto__ = (function (){var statearr_28031 = f__22584__auto__.call(null);
(statearr_28031[(6)] = c__22583__auto___28032);

return statearr_28031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto___28032,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28053_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28053_SHARP_));
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
var base_path_28057 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28057){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_28055 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_28056 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_28055,_STAR_print_fn_STAR_28056,sb,base_path_28057){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_28055,_STAR_print_fn_STAR_28056,sb,base_path_28057))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28056;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28055;
}}catch (e28054){if((e28054 instanceof Error)){
var e = e28054;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28057], null));
} else {
var e = e28054;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28057))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28058){
var map__28059 = p__28058;
var map__28059__$1 = ((((!((map__28059 == null)))?(((((map__28059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28059):map__28059);
var opts = map__28059__$1;
var build_id = cljs.core.get.call(null,map__28059__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28059,map__28059__$1,opts,build_id){
return (function (p__28061){
var vec__28062 = p__28061;
var seq__28063 = cljs.core.seq.call(null,vec__28062);
var first__28064 = cljs.core.first.call(null,seq__28063);
var seq__28063__$1 = cljs.core.next.call(null,seq__28063);
var map__28065 = first__28064;
var map__28065__$1 = ((((!((map__28065 == null)))?(((((map__28065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28065):map__28065);
var msg = map__28065__$1;
var msg_name = cljs.core.get.call(null,map__28065__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28063__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28062,seq__28063,first__28064,seq__28063__$1,map__28065,map__28065__$1,msg,msg_name,_,map__28059,map__28059__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28062,seq__28063,first__28064,seq__28063__$1,map__28065,map__28065__$1,msg,msg_name,_,map__28059,map__28059__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28059,map__28059__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28067){
var vec__28068 = p__28067;
var seq__28069 = cljs.core.seq.call(null,vec__28068);
var first__28070 = cljs.core.first.call(null,seq__28069);
var seq__28069__$1 = cljs.core.next.call(null,seq__28069);
var map__28071 = first__28070;
var map__28071__$1 = ((((!((map__28071 == null)))?(((((map__28071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28071):map__28071);
var msg = map__28071__$1;
var msg_name = cljs.core.get.call(null,map__28071__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28069__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28073){
var map__28074 = p__28073;
var map__28074__$1 = ((((!((map__28074 == null)))?(((((map__28074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28074):map__28074);
var on_compile_warning = cljs.core.get.call(null,map__28074__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28074__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28074,map__28074__$1,on_compile_warning,on_compile_fail){
return (function (p__28076){
var vec__28077 = p__28076;
var seq__28078 = cljs.core.seq.call(null,vec__28077);
var first__28079 = cljs.core.first.call(null,seq__28078);
var seq__28078__$1 = cljs.core.next.call(null,seq__28078);
var map__28080 = first__28079;
var map__28080__$1 = ((((!((map__28080 == null)))?(((((map__28080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28080):map__28080);
var msg = map__28080__$1;
var msg_name = cljs.core.get.call(null,map__28080__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28078__$1;
var pred__28082 = cljs.core._EQ_;
var expr__28083 = msg_name;
if(cljs.core.truth_(pred__28082.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28083))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28082.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28083))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28074,map__28074__$1,on_compile_warning,on_compile_fail))
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
var c__22583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto__,msg_hist,msg_names,msg){
return (function (state_28172){
var state_val_28173 = (state_28172[(1)]);
if((state_val_28173 === (7))){
var inst_28092 = (state_28172[(2)]);
var state_28172__$1 = state_28172;
if(cljs.core.truth_(inst_28092)){
var statearr_28174_28221 = state_28172__$1;
(statearr_28174_28221[(1)] = (8));

} else {
var statearr_28175_28222 = state_28172__$1;
(statearr_28175_28222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (20))){
var inst_28166 = (state_28172[(2)]);
var state_28172__$1 = state_28172;
var statearr_28176_28223 = state_28172__$1;
(statearr_28176_28223[(2)] = inst_28166);

(statearr_28176_28223[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (27))){
var inst_28162 = (state_28172[(2)]);
var state_28172__$1 = state_28172;
var statearr_28177_28224 = state_28172__$1;
(statearr_28177_28224[(2)] = inst_28162);

(statearr_28177_28224[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (1))){
var inst_28085 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28172__$1 = state_28172;
if(cljs.core.truth_(inst_28085)){
var statearr_28178_28225 = state_28172__$1;
(statearr_28178_28225[(1)] = (2));

} else {
var statearr_28179_28226 = state_28172__$1;
(statearr_28179_28226[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (24))){
var inst_28164 = (state_28172[(2)]);
var state_28172__$1 = state_28172;
var statearr_28180_28227 = state_28172__$1;
(statearr_28180_28227[(2)] = inst_28164);

(statearr_28180_28227[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (4))){
var inst_28170 = (state_28172[(2)]);
var state_28172__$1 = state_28172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28172__$1,inst_28170);
} else {
if((state_val_28173 === (15))){
var inst_28168 = (state_28172[(2)]);
var state_28172__$1 = state_28172;
var statearr_28181_28228 = state_28172__$1;
(statearr_28181_28228[(2)] = inst_28168);

(statearr_28181_28228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (21))){
var inst_28121 = (state_28172[(2)]);
var inst_28122 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28123 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28122);
var state_28172__$1 = (function (){var statearr_28182 = state_28172;
(statearr_28182[(7)] = inst_28121);

return statearr_28182;
})();
var statearr_28183_28229 = state_28172__$1;
(statearr_28183_28229[(2)] = inst_28123);

(statearr_28183_28229[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (31))){
var inst_28151 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28172__$1 = state_28172;
if(cljs.core.truth_(inst_28151)){
var statearr_28184_28230 = state_28172__$1;
(statearr_28184_28230[(1)] = (34));

} else {
var statearr_28185_28231 = state_28172__$1;
(statearr_28185_28231[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (32))){
var inst_28160 = (state_28172[(2)]);
var state_28172__$1 = state_28172;
var statearr_28186_28232 = state_28172__$1;
(statearr_28186_28232[(2)] = inst_28160);

(statearr_28186_28232[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (33))){
var inst_28147 = (state_28172[(2)]);
var inst_28148 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28149 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28148);
var state_28172__$1 = (function (){var statearr_28187 = state_28172;
(statearr_28187[(8)] = inst_28147);

return statearr_28187;
})();
var statearr_28188_28233 = state_28172__$1;
(statearr_28188_28233[(2)] = inst_28149);

(statearr_28188_28233[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (13))){
var inst_28106 = figwheel.client.heads_up.clear.call(null);
var state_28172__$1 = state_28172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28172__$1,(16),inst_28106);
} else {
if((state_val_28173 === (22))){
var inst_28127 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28128 = figwheel.client.heads_up.append_warning_message.call(null,inst_28127);
var state_28172__$1 = state_28172;
var statearr_28189_28234 = state_28172__$1;
(statearr_28189_28234[(2)] = inst_28128);

(statearr_28189_28234[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (36))){
var inst_28158 = (state_28172[(2)]);
var state_28172__$1 = state_28172;
var statearr_28190_28235 = state_28172__$1;
(statearr_28190_28235[(2)] = inst_28158);

(statearr_28190_28235[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (29))){
var inst_28138 = (state_28172[(2)]);
var inst_28139 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28140 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28139);
var state_28172__$1 = (function (){var statearr_28191 = state_28172;
(statearr_28191[(9)] = inst_28138);

return statearr_28191;
})();
var statearr_28192_28236 = state_28172__$1;
(statearr_28192_28236[(2)] = inst_28140);

(statearr_28192_28236[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (6))){
var inst_28087 = (state_28172[(10)]);
var state_28172__$1 = state_28172;
var statearr_28193_28237 = state_28172__$1;
(statearr_28193_28237[(2)] = inst_28087);

(statearr_28193_28237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (28))){
var inst_28134 = (state_28172[(2)]);
var inst_28135 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28136 = figwheel.client.heads_up.display_warning.call(null,inst_28135);
var state_28172__$1 = (function (){var statearr_28194 = state_28172;
(statearr_28194[(11)] = inst_28134);

return statearr_28194;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28172__$1,(29),inst_28136);
} else {
if((state_val_28173 === (25))){
var inst_28132 = figwheel.client.heads_up.clear.call(null);
var state_28172__$1 = state_28172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28172__$1,(28),inst_28132);
} else {
if((state_val_28173 === (34))){
var inst_28153 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28172__$1 = state_28172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28172__$1,(37),inst_28153);
} else {
if((state_val_28173 === (17))){
var inst_28112 = (state_28172[(2)]);
var inst_28113 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28114 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28113);
var state_28172__$1 = (function (){var statearr_28195 = state_28172;
(statearr_28195[(12)] = inst_28112);

return statearr_28195;
})();
var statearr_28196_28238 = state_28172__$1;
(statearr_28196_28238[(2)] = inst_28114);

(statearr_28196_28238[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (3))){
var inst_28104 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28172__$1 = state_28172;
if(cljs.core.truth_(inst_28104)){
var statearr_28197_28239 = state_28172__$1;
(statearr_28197_28239[(1)] = (13));

} else {
var statearr_28198_28240 = state_28172__$1;
(statearr_28198_28240[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (12))){
var inst_28100 = (state_28172[(2)]);
var state_28172__$1 = state_28172;
var statearr_28199_28241 = state_28172__$1;
(statearr_28199_28241[(2)] = inst_28100);

(statearr_28199_28241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (2))){
var inst_28087 = (state_28172[(10)]);
var inst_28087__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28172__$1 = (function (){var statearr_28200 = state_28172;
(statearr_28200[(10)] = inst_28087__$1);

return statearr_28200;
})();
if(cljs.core.truth_(inst_28087__$1)){
var statearr_28201_28242 = state_28172__$1;
(statearr_28201_28242[(1)] = (5));

} else {
var statearr_28202_28243 = state_28172__$1;
(statearr_28202_28243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (23))){
var inst_28130 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28172__$1 = state_28172;
if(cljs.core.truth_(inst_28130)){
var statearr_28203_28244 = state_28172__$1;
(statearr_28203_28244[(1)] = (25));

} else {
var statearr_28204_28245 = state_28172__$1;
(statearr_28204_28245[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (35))){
var state_28172__$1 = state_28172;
var statearr_28205_28246 = state_28172__$1;
(statearr_28205_28246[(2)] = null);

(statearr_28205_28246[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (19))){
var inst_28125 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28172__$1 = state_28172;
if(cljs.core.truth_(inst_28125)){
var statearr_28206_28247 = state_28172__$1;
(statearr_28206_28247[(1)] = (22));

} else {
var statearr_28207_28248 = state_28172__$1;
(statearr_28207_28248[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (11))){
var inst_28096 = (state_28172[(2)]);
var state_28172__$1 = state_28172;
var statearr_28208_28249 = state_28172__$1;
(statearr_28208_28249[(2)] = inst_28096);

(statearr_28208_28249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (9))){
var inst_28098 = figwheel.client.heads_up.clear.call(null);
var state_28172__$1 = state_28172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28172__$1,(12),inst_28098);
} else {
if((state_val_28173 === (5))){
var inst_28089 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28172__$1 = state_28172;
var statearr_28209_28250 = state_28172__$1;
(statearr_28209_28250[(2)] = inst_28089);

(statearr_28209_28250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (14))){
var inst_28116 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28172__$1 = state_28172;
if(cljs.core.truth_(inst_28116)){
var statearr_28210_28251 = state_28172__$1;
(statearr_28210_28251[(1)] = (18));

} else {
var statearr_28211_28252 = state_28172__$1;
(statearr_28211_28252[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (26))){
var inst_28142 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28172__$1 = state_28172;
if(cljs.core.truth_(inst_28142)){
var statearr_28212_28253 = state_28172__$1;
(statearr_28212_28253[(1)] = (30));

} else {
var statearr_28213_28254 = state_28172__$1;
(statearr_28213_28254[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (16))){
var inst_28108 = (state_28172[(2)]);
var inst_28109 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28110 = figwheel.client.heads_up.display_exception.call(null,inst_28109);
var state_28172__$1 = (function (){var statearr_28214 = state_28172;
(statearr_28214[(13)] = inst_28108);

return statearr_28214;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28172__$1,(17),inst_28110);
} else {
if((state_val_28173 === (30))){
var inst_28144 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28145 = figwheel.client.heads_up.display_warning.call(null,inst_28144);
var state_28172__$1 = state_28172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28172__$1,(33),inst_28145);
} else {
if((state_val_28173 === (10))){
var inst_28102 = (state_28172[(2)]);
var state_28172__$1 = state_28172;
var statearr_28215_28255 = state_28172__$1;
(statearr_28215_28255[(2)] = inst_28102);

(statearr_28215_28255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (18))){
var inst_28118 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28119 = figwheel.client.heads_up.display_exception.call(null,inst_28118);
var state_28172__$1 = state_28172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28172__$1,(21),inst_28119);
} else {
if((state_val_28173 === (37))){
var inst_28155 = (state_28172[(2)]);
var state_28172__$1 = state_28172;
var statearr_28216_28256 = state_28172__$1;
(statearr_28216_28256[(2)] = inst_28155);

(statearr_28216_28256[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (8))){
var inst_28094 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28172__$1 = state_28172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28172__$1,(11),inst_28094);
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
});})(c__22583__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22495__auto__,c__22583__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22496__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22496__auto____0 = (function (){
var statearr_28217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28217[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22496__auto__);

(statearr_28217[(1)] = (1));

return statearr_28217;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22496__auto____1 = (function (state_28172){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_28172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e28218){if((e28218 instanceof Object)){
var ex__22499__auto__ = e28218;
var statearr_28219_28257 = state_28172;
(statearr_28219_28257[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28258 = state_28172;
state_28172 = G__28258;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22496__auto__ = function(state_28172){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22496__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22496__auto____1.call(this,state_28172);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22496__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22496__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto__,msg_hist,msg_names,msg))
})();
var state__22585__auto__ = (function (){var statearr_28220 = f__22584__auto__.call(null);
(statearr_28220[(6)] = c__22583__auto__);

return statearr_28220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto__,msg_hist,msg_names,msg))
);

return c__22583__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22583__auto___28287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto___28287,ch){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto___28287,ch){
return (function (state_28273){
var state_val_28274 = (state_28273[(1)]);
if((state_val_28274 === (1))){
var state_28273__$1 = state_28273;
var statearr_28275_28288 = state_28273__$1;
(statearr_28275_28288[(2)] = null);

(statearr_28275_28288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (2))){
var state_28273__$1 = state_28273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28273__$1,(4),ch);
} else {
if((state_val_28274 === (3))){
var inst_28271 = (state_28273[(2)]);
var state_28273__$1 = state_28273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28273__$1,inst_28271);
} else {
if((state_val_28274 === (4))){
var inst_28261 = (state_28273[(7)]);
var inst_28261__$1 = (state_28273[(2)]);
var state_28273__$1 = (function (){var statearr_28276 = state_28273;
(statearr_28276[(7)] = inst_28261__$1);

return statearr_28276;
})();
if(cljs.core.truth_(inst_28261__$1)){
var statearr_28277_28289 = state_28273__$1;
(statearr_28277_28289[(1)] = (5));

} else {
var statearr_28278_28290 = state_28273__$1;
(statearr_28278_28290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (5))){
var inst_28261 = (state_28273[(7)]);
var inst_28263 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28261);
var state_28273__$1 = state_28273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28273__$1,(8),inst_28263);
} else {
if((state_val_28274 === (6))){
var state_28273__$1 = state_28273;
var statearr_28279_28291 = state_28273__$1;
(statearr_28279_28291[(2)] = null);

(statearr_28279_28291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (7))){
var inst_28269 = (state_28273[(2)]);
var state_28273__$1 = state_28273;
var statearr_28280_28292 = state_28273__$1;
(statearr_28280_28292[(2)] = inst_28269);

(statearr_28280_28292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (8))){
var inst_28265 = (state_28273[(2)]);
var state_28273__$1 = (function (){var statearr_28281 = state_28273;
(statearr_28281[(8)] = inst_28265);

return statearr_28281;
})();
var statearr_28282_28293 = state_28273__$1;
(statearr_28282_28293[(2)] = null);

(statearr_28282_28293[(1)] = (2));


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
});})(c__22583__auto___28287,ch))
;
return ((function (switch__22495__auto__,c__22583__auto___28287,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22496__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22496__auto____0 = (function (){
var statearr_28283 = [null,null,null,null,null,null,null,null,null];
(statearr_28283[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22496__auto__);

(statearr_28283[(1)] = (1));

return statearr_28283;
});
var figwheel$client$heads_up_plugin_$_state_machine__22496__auto____1 = (function (state_28273){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_28273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e28284){if((e28284 instanceof Object)){
var ex__22499__auto__ = e28284;
var statearr_28285_28294 = state_28273;
(statearr_28285_28294[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28295 = state_28273;
state_28273 = G__28295;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22496__auto__ = function(state_28273){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22496__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22496__auto____1.call(this,state_28273);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22496__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22496__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto___28287,ch))
})();
var state__22585__auto__ = (function (){var statearr_28286 = f__22584__auto__.call(null);
(statearr_28286[(6)] = c__22583__auto___28287);

return statearr_28286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto___28287,ch))
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
var c__22583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto__){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto__){
return (function (state_28301){
var state_val_28302 = (state_28301[(1)]);
if((state_val_28302 === (1))){
var inst_28296 = cljs.core.async.timeout.call(null,(3000));
var state_28301__$1 = state_28301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28301__$1,(2),inst_28296);
} else {
if((state_val_28302 === (2))){
var inst_28298 = (state_28301[(2)]);
var inst_28299 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28301__$1 = (function (){var statearr_28303 = state_28301;
(statearr_28303[(7)] = inst_28298);

return statearr_28303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28301__$1,inst_28299);
} else {
return null;
}
}
});})(c__22583__auto__))
;
return ((function (switch__22495__auto__,c__22583__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22496__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22496__auto____0 = (function (){
var statearr_28304 = [null,null,null,null,null,null,null,null];
(statearr_28304[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22496__auto__);

(statearr_28304[(1)] = (1));

return statearr_28304;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22496__auto____1 = (function (state_28301){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_28301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e28305){if((e28305 instanceof Object)){
var ex__22499__auto__ = e28305;
var statearr_28306_28308 = state_28301;
(statearr_28306_28308[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28309 = state_28301;
state_28301 = G__28309;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22496__auto__ = function(state_28301){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22496__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22496__auto____1.call(this,state_28301);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22496__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22496__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto__))
})();
var state__22585__auto__ = (function (){var statearr_28307 = f__22584__auto__.call(null);
(statearr_28307[(6)] = c__22583__auto__);

return statearr_28307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto__))
);

return c__22583__auto__;
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
var c__22583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto__,figwheel_version,temp__4657__auto__){
return (function (state_28316){
var state_val_28317 = (state_28316[(1)]);
if((state_val_28317 === (1))){
var inst_28310 = cljs.core.async.timeout.call(null,(2000));
var state_28316__$1 = state_28316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28316__$1,(2),inst_28310);
} else {
if((state_val_28317 === (2))){
var inst_28312 = (state_28316[(2)]);
var inst_28313 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_28314 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_28313);
var state_28316__$1 = (function (){var statearr_28318 = state_28316;
(statearr_28318[(7)] = inst_28312);

return statearr_28318;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28316__$1,inst_28314);
} else {
return null;
}
}
});})(c__22583__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__22495__auto__,c__22583__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22496__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22496__auto____0 = (function (){
var statearr_28319 = [null,null,null,null,null,null,null,null];
(statearr_28319[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22496__auto__);

(statearr_28319[(1)] = (1));

return statearr_28319;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22496__auto____1 = (function (state_28316){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_28316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e28320){if((e28320 instanceof Object)){
var ex__22499__auto__ = e28320;
var statearr_28321_28323 = state_28316;
(statearr_28321_28323[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28324 = state_28316;
state_28316 = G__28324;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22496__auto__ = function(state_28316){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22496__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22496__auto____1.call(this,state_28316);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22496__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22496__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto__,figwheel_version,temp__4657__auto__))
})();
var state__22585__auto__ = (function (){var statearr_28322 = f__22584__auto__.call(null);
(statearr_28322[(6)] = c__22583__auto__);

return statearr_28322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto__,figwheel_version,temp__4657__auto__))
);

return c__22583__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__28325){
var map__28326 = p__28325;
var map__28326__$1 = ((((!((map__28326 == null)))?(((((map__28326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28326):map__28326);
var file = cljs.core.get.call(null,map__28326__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28326__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28326__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__28328 = "";
var G__28328__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28328),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__28328);
var G__28328__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28328__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__28328__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28328__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__28328__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28329){
var map__28330 = p__28329;
var map__28330__$1 = ((((!((map__28330 == null)))?(((((map__28330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28330):map__28330);
var ed = map__28330__$1;
var formatted_exception = cljs.core.get.call(null,map__28330__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28330__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28330__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28332_28336 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28333_28337 = null;
var count__28334_28338 = (0);
var i__28335_28339 = (0);
while(true){
if((i__28335_28339 < count__28334_28338)){
var msg_28340 = cljs.core._nth.call(null,chunk__28333_28337,i__28335_28339);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28340);


var G__28341 = seq__28332_28336;
var G__28342 = chunk__28333_28337;
var G__28343 = count__28334_28338;
var G__28344 = (i__28335_28339 + (1));
seq__28332_28336 = G__28341;
chunk__28333_28337 = G__28342;
count__28334_28338 = G__28343;
i__28335_28339 = G__28344;
continue;
} else {
var temp__4657__auto___28345 = cljs.core.seq.call(null,seq__28332_28336);
if(temp__4657__auto___28345){
var seq__28332_28346__$1 = temp__4657__auto___28345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28332_28346__$1)){
var c__4319__auto___28347 = cljs.core.chunk_first.call(null,seq__28332_28346__$1);
var G__28348 = cljs.core.chunk_rest.call(null,seq__28332_28346__$1);
var G__28349 = c__4319__auto___28347;
var G__28350 = cljs.core.count.call(null,c__4319__auto___28347);
var G__28351 = (0);
seq__28332_28336 = G__28348;
chunk__28333_28337 = G__28349;
count__28334_28338 = G__28350;
i__28335_28339 = G__28351;
continue;
} else {
var msg_28352 = cljs.core.first.call(null,seq__28332_28346__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28352);


var G__28353 = cljs.core.next.call(null,seq__28332_28346__$1);
var G__28354 = null;
var G__28355 = (0);
var G__28356 = (0);
seq__28332_28336 = G__28353;
chunk__28333_28337 = G__28354;
count__28334_28338 = G__28355;
i__28335_28339 = G__28356;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28357){
var map__28358 = p__28357;
var map__28358__$1 = ((((!((map__28358 == null)))?(((((map__28358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28358):map__28358);
var w = map__28358__$1;
var message = cljs.core.get.call(null,map__28358__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__28360 = cljs.core.seq.call(null,plugins);
var chunk__28361 = null;
var count__28362 = (0);
var i__28363 = (0);
while(true){
if((i__28363 < count__28362)){
var vec__28364 = cljs.core._nth.call(null,chunk__28361,i__28363);
var k = cljs.core.nth.call(null,vec__28364,(0),null);
var plugin = cljs.core.nth.call(null,vec__28364,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28370 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28360,chunk__28361,count__28362,i__28363,pl_28370,vec__28364,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28370.call(null,msg_hist);
});})(seq__28360,chunk__28361,count__28362,i__28363,pl_28370,vec__28364,k,plugin))
);
} else {
}


var G__28371 = seq__28360;
var G__28372 = chunk__28361;
var G__28373 = count__28362;
var G__28374 = (i__28363 + (1));
seq__28360 = G__28371;
chunk__28361 = G__28372;
count__28362 = G__28373;
i__28363 = G__28374;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28360);
if(temp__4657__auto__){
var seq__28360__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28360__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28360__$1);
var G__28375 = cljs.core.chunk_rest.call(null,seq__28360__$1);
var G__28376 = c__4319__auto__;
var G__28377 = cljs.core.count.call(null,c__4319__auto__);
var G__28378 = (0);
seq__28360 = G__28375;
chunk__28361 = G__28376;
count__28362 = G__28377;
i__28363 = G__28378;
continue;
} else {
var vec__28367 = cljs.core.first.call(null,seq__28360__$1);
var k = cljs.core.nth.call(null,vec__28367,(0),null);
var plugin = cljs.core.nth.call(null,vec__28367,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28379 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28360,chunk__28361,count__28362,i__28363,pl_28379,vec__28367,k,plugin,seq__28360__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28379.call(null,msg_hist);
});})(seq__28360,chunk__28361,count__28362,i__28363,pl_28379,vec__28367,k,plugin,seq__28360__$1,temp__4657__auto__))
);
} else {
}


var G__28380 = cljs.core.next.call(null,seq__28360__$1);
var G__28381 = null;
var G__28382 = (0);
var G__28383 = (0);
seq__28360 = G__28380;
chunk__28361 = G__28381;
count__28362 = G__28382;
i__28363 = G__28383;
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
var G__28385 = arguments.length;
switch (G__28385) {
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

var seq__28386_28391 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__28387_28392 = null;
var count__28388_28393 = (0);
var i__28389_28394 = (0);
while(true){
if((i__28389_28394 < count__28388_28393)){
var msg_28395 = cljs.core._nth.call(null,chunk__28387_28392,i__28389_28394);
figwheel.client.socket.handle_incoming_message.call(null,msg_28395);


var G__28396 = seq__28386_28391;
var G__28397 = chunk__28387_28392;
var G__28398 = count__28388_28393;
var G__28399 = (i__28389_28394 + (1));
seq__28386_28391 = G__28396;
chunk__28387_28392 = G__28397;
count__28388_28393 = G__28398;
i__28389_28394 = G__28399;
continue;
} else {
var temp__4657__auto___28400 = cljs.core.seq.call(null,seq__28386_28391);
if(temp__4657__auto___28400){
var seq__28386_28401__$1 = temp__4657__auto___28400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28386_28401__$1)){
var c__4319__auto___28402 = cljs.core.chunk_first.call(null,seq__28386_28401__$1);
var G__28403 = cljs.core.chunk_rest.call(null,seq__28386_28401__$1);
var G__28404 = c__4319__auto___28402;
var G__28405 = cljs.core.count.call(null,c__4319__auto___28402);
var G__28406 = (0);
seq__28386_28391 = G__28403;
chunk__28387_28392 = G__28404;
count__28388_28393 = G__28405;
i__28389_28394 = G__28406;
continue;
} else {
var msg_28407 = cljs.core.first.call(null,seq__28386_28401__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_28407);


var G__28408 = cljs.core.next.call(null,seq__28386_28401__$1);
var G__28409 = null;
var G__28410 = (0);
var G__28411 = (0);
seq__28386_28391 = G__28408;
chunk__28387_28392 = G__28409;
count__28388_28393 = G__28410;
i__28389_28394 = G__28411;
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
var len__4499__auto___28416 = arguments.length;
var i__4500__auto___28417 = (0);
while(true){
if((i__4500__auto___28417 < len__4499__auto___28416)){
args__4502__auto__.push((arguments[i__4500__auto___28417]));

var G__28418 = (i__4500__auto___28417 + (1));
i__4500__auto___28417 = G__28418;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28413){
var map__28414 = p__28413;
var map__28414__$1 = ((((!((map__28414 == null)))?(((((map__28414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28414):map__28414);
var opts = map__28414__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28412){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28412));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e28419){if((e28419 instanceof Error)){
var e = e28419;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e28419;

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
return (function (p__28420){
var map__28421 = p__28420;
var map__28421__$1 = ((((!((map__28421 == null)))?(((((map__28421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28421):map__28421);
var msg_name = cljs.core.get.call(null,map__28421__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1534453594115
