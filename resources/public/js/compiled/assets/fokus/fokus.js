// Compiled by ClojureScript 1.10.238 {}
goog.provide('fokus.fokus');
goog.require('cljs.core');
goog.require('reagent.core');
fokus.fokus.with_focus = (function fokus$fokus$with_focus(target){
cljs.core.println.call(null,["*** with-focus ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target)," called"].join(''));

return cljs.core.with_meta.call(null,(function() { 
var G__33832__delegate = function (xs){
cljs.core.println.call(null,["*** with-focus COMPONENT ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target)," called"].join(''));

return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xs);
};
var G__33832 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__33833__i = 0, G__33833__a = new Array(arguments.length -  0);
while (G__33833__i < G__33833__a.length) {G__33833__a[G__33833__i] = arguments[G__33833__i + 0]; ++G__33833__i;}
  xs = new cljs.core.IndexedSeq(G__33833__a,0,null);
} 
return G__33832__delegate.call(this,xs);};
G__33832.cljs$lang$maxFixedArity = 0;
G__33832.cljs$lang$applyTo = (function (arglist__33834){
var xs = cljs.core.seq(arglist__33834);
return G__33832__delegate(xs);
});
G__33832.cljs$core$IFn$_invoke$arity$variadic = G__33832__delegate;
return G__33832;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return cljs.core.println.call(null,["*** :component-did-mount ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target)," called : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join(''));
})], null));
});
fokus.fokus.input = (function fokus$fokus$input(_BANG_state,id){
return (function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_BANG_state))),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_BANG_state))].join('')], null)], null);
});
});
fokus.fokus.___autofocus_test = (function fokus$fokus$___autofocus_test(){
var with_mount_field_1 = fokus.fokus.with_focus.call(null,new cljs.core.Keyword(null,"field-1","field-1",-316392890));
var with_mount_field_2 = fokus.fokus.with_focus.call(null,new cljs.core.Keyword(null,"field-2","field-2",-1770706999));
var _BANG_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"field-2","field-2",-1770706999)], null));
return ((function (with_mount_field_1,with_mount_field_2,_BANG_state){
return (function (_){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["!state=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_BANG_state))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>label","div>label",795465209),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (with_mount_field_1,with_mount_field_2,_BANG_state){
return (function (){
return cljs.core.swap_BANG_.call(null,_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"field-1","field-1",-316392890));
});})(with_mount_field_1,with_mount_field_2,_BANG_state))
], null),"focus field-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>label","div>label",795465209),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (with_mount_field_1,with_mount_field_2,_BANG_state){
return (function (){
return cljs.core.swap_BANG_.call(null,_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"field-2","field-2",-1770706999));
});})(with_mount_field_1,with_mount_field_2,_BANG_state))
], null),"focus-field-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [with_mount_field_1,new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"field-1","field-1",-316392890),new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_BANG_state))),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"field-1"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [with_mount_field_2,new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"field-2","field-2",-1770706999),new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_BANG_state))),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"field-2"], null)], null)], null);
});
;})(with_mount_field_1,with_mount_field_2,_BANG_state))
});
fokus.fokus.autofocus_test = (function fokus$fokus$autofocus_test(){
var _BANG_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"field-2","field-2",-1770706999)], null));
return ((function (_BANG_state){
return (function (_){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>label","div>label",795465209),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (_BANG_state){
return (function (){
return cljs.core.swap_BANG_.call(null,_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"field-1","field-1",-316392890));
});})(_BANG_state))
], null),"focus on field-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>label","div>label",795465209),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (_BANG_state){
return (function (){
return cljs.core.swap_BANG_.call(null,_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"field-2","field-2",-1770706999));
});})(_BANG_state))
], null),"focus on field-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"field-1","field-1",-316392890),new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_BANG_state))),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_BANG_state))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"field-2","field-2",-1770706999),new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_BANG_state))),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_BANG_state))].join('')], null)], null)], null);
});
;})(_BANG_state))
});
fokus.fokus._BANG_focus_targets = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
fokus.fokus._BANG_focused_target = reagent.core.atom.call(null,null);
fokus.fokus.register_focus_target = cljs.core.memoize.call(null,(function (target){
return cljs.core.with_meta.call(null,(function() { 
var G__33835__delegate = function (xs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xs);
};
var G__33835 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__33836__i = 0, G__33836__a = new Array(arguments.length -  0);
while (G__33836__i < G__33836__a.length) {G__33836__a[G__33836__i] = arguments[G__33836__i + 0]; ++G__33836__i;}
  xs = new cljs.core.IndexedSeq(G__33836__a,0,null);
} 
return G__33835__delegate.call(this,xs);};
G__33835.cljs$lang$maxFixedArity = 0;
G__33835.cljs$lang$applyTo = (function (arglist__33837){
var xs = cljs.core.seq(arglist__33837);
return G__33835__delegate(xs);
});
G__33835.cljs$core$IFn$_invoke$arity$variadic = G__33835__delegate;
return G__33835;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
cljs.core.swap_BANG_.call(null,fokus.fokus._BANG_focus_targets,cljs.core.assoc,target,reagent.core.dom_node.call(null,this$));

if(cljs.core._EQ_.call(null,target,cljs.core.deref.call(null,fokus.fokus._BANG_focused_target))){
cljs.core.swap_BANG_.call(null,fokus.fokus._BANG_focused_target,cljs.core.str,"consumed!");

return target.call(null,cljs.core.deref.call(null,fokus.fokus._BANG_focus_targets)).focus();
} else {
return null;
}
})], null));
}));
fokus.fokus.set_focus = (function fokus$fokus$set_focus(id){
cljs.core.reset_BANG_.call(null,fokus.fokus._BANG_focused_target,id);

var temp__4657__auto__ = id.call(null,cljs.core.deref.call(null,fokus.fokus._BANG_focus_targets));
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
return n.focus();
} else {
return null;
}
});
fokus.fokus.set_focus_test = (function fokus$fokus$set_focus_test(){
var _BANG_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"field-2","field-2",-1770706999),new cljs.core.Keyword(null,"field-3","field-3",-360700000),"12"], null));
fokus.fokus.set_focus.call(null,new cljs.core.Keyword(null,"field-2","field-2",-1770706999));

return ((function (_BANG_state){
return (function (_){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>label","div>label",795465209),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (_BANG_state){
return (function (){
cljs.core.swap_BANG_.call(null,_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"field-1","field-1",-316392890));

return fokus.fokus.set_focus.call(null,new cljs.core.Keyword(null,"field-1","field-1",-316392890));
});})(_BANG_state))
], null),"show & focus field-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>label","div>label",795465209),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (_BANG_state){
return (function (){
cljs.core.swap_BANG_.call(null,_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"field-2","field-2",-1770706999));

return fokus.fokus.set_focus.call(null,new cljs.core.Keyword(null,"field-2","field-2",-1770706999));
});})(_BANG_state))
], null),"show & focus field-2"], null),((((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"field-1","field-1",-316392890),new cljs.core.Keyword(null,"show","show",-576705889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_BANG_state)))) && (((-1) < [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"field-3","field-3",-360700000).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_BANG_state)))].join('').indexOf("1")))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fokus.fokus.register_focus_target.call(null,new cljs.core.Keyword(null,"field-1","field-1",-316392890)),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),["field-1:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_BANG_state))," focused = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,fokus.fokus._BANG_focused_target))].join('')], null)], null):null),((((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"field-2","field-2",-1770706999),new cljs.core.Keyword(null,"show","show",-576705889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_BANG_state)))) && (((-1) < [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"field-3","field-3",-360700000).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_BANG_state)))].join('').indexOf("2")))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fokus.fokus.register_focus_target.call(null,new cljs.core.Keyword(null,"field-2","field-2",-1770706999)),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),["field-2:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_BANG_state))," focused = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,fokus.fokus._BANG_focused_target))].join('')], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fokus.fokus.register_focus_target.call(null,new cljs.core.Keyword(null,"field-3","field-3",-360700000)),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"field-3","field-3",-360700000).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_BANG_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (_BANG_state){
return (function (p1__33838_SHARP_){
return cljs.core.swap_BANG_.call(null,_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"field-3","field-3",-360700000),p1__33838_SHARP_.target.value);
});})(_BANG_state))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),["field-3:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_BANG_state))," focused = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,fokus.fokus._BANG_focused_target))].join('')], null)], null)], null);
});
;})(_BANG_state))
});

//# sourceMappingURL=fokus.js.map?rel=1534453902222
