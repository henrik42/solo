// Compiled by ClojureScript 1.10.238 {}
goog.provide('solo.spa.sysprops');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('cljs_http.client');
/**
 * Asynchronuously evaluates `source-string` in the backend JVM via
 *   web-service `POST ws/eval/` (see `solo.spa/eval-string`).
 */
solo.spa.sysprops.eval_in_backend = (function solo$spa$sysprops$eval_in_backend(source_string){
var c__22583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto__){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto__){
return (function (state_24775){
var state_val_24776 = (state_24775[(1)]);
if((state_val_24776 === (1))){
var inst_24764 = [new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_24765 = [new cljs.core.Keyword(null,"eval","eval",-1103567905)];
var inst_24766 = [source_string];
var inst_24767 = cljs.core.PersistentHashMap.fromArrays(inst_24765,inst_24766);
var inst_24768 = [inst_24767];
var inst_24769 = cljs.core.PersistentHashMap.fromArrays(inst_24764,inst_24768);
var inst_24770 = cljs_http.client.post.call(null,"ws/eval/",inst_24769);
var state_24775__$1 = state_24775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24775__$1,(2),inst_24770);
} else {
if((state_val_24776 === (2))){
var inst_24772 = (state_24775[(2)]);
var inst_24773 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_24772);
var state_24775__$1 = state_24775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24775__$1,inst_24773);
} else {
return null;
}
}
});})(c__22583__auto__))
;
return ((function (switch__22495__auto__,c__22583__auto__){
return (function() {
var solo$spa$sysprops$eval_in_backend_$_state_machine__22496__auto__ = null;
var solo$spa$sysprops$eval_in_backend_$_state_machine__22496__auto____0 = (function (){
var statearr_24777 = [null,null,null,null,null,null,null];
(statearr_24777[(0)] = solo$spa$sysprops$eval_in_backend_$_state_machine__22496__auto__);

(statearr_24777[(1)] = (1));

return statearr_24777;
});
var solo$spa$sysprops$eval_in_backend_$_state_machine__22496__auto____1 = (function (state_24775){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_24775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e24778){if((e24778 instanceof Object)){
var ex__22499__auto__ = e24778;
var statearr_24779_24781 = state_24775;
(statearr_24779_24781[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24782 = state_24775;
state_24775 = G__24782;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
solo$spa$sysprops$eval_in_backend_$_state_machine__22496__auto__ = function(state_24775){
switch(arguments.length){
case 0:
return solo$spa$sysprops$eval_in_backend_$_state_machine__22496__auto____0.call(this);
case 1:
return solo$spa$sysprops$eval_in_backend_$_state_machine__22496__auto____1.call(this,state_24775);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$eval_in_backend_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$eval_in_backend_$_state_machine__22496__auto____0;
solo$spa$sysprops$eval_in_backend_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$eval_in_backend_$_state_machine__22496__auto____1;
return solo$spa$sysprops$eval_in_backend_$_state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto__))
})();
var state__22585__auto__ = (function (){var statearr_24780 = f__22584__auto__.call(null);
(statearr_24780[(6)] = c__22583__auto__);

return statearr_24780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto__))
);

return c__22583__auto__;
});
solo.spa.sysprops.reg_ex_str__GT_reg_ex = (function solo$spa$sysprops$reg_ex_str__GT_reg_ex(reg_ex_str){
try{return RegExp((function (){var or__3922__auto__ = reg_ex_str;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ".*";
}
})());
}catch (e24783){var t = e24783;
return /.*/;
}});
/**
 * Returns the system properties of the JVM backend as a `[name
 *   value]`-seq (both strings).
 */
solo.spa.sysprops.get_properties = (function solo$spa$sysprops$get_properties(){
var c__22583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto__){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto__){
return (function (state_24793){
var state_val_24794 = (state_24793[(1)]);
if((state_val_24794 === (1))){
var inst_24785 = (function (){return ((function (state_val_24794,c__22583__auto__){
return (function (p__24784){
var vec__24795 = p__24784;
var k = cljs.core.nth.call(null,vec__24795,(0),null);
var v = cljs.core.nth.call(null,vec__24795,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((k instanceof cljs.core.Keyword))?cljs.core.name.call(null,k):k),v], null);
});
;})(state_val_24794,c__22583__auto__))
})();
var inst_24786 = solo.spa.sysprops.eval_in_backend.call(null,"(System/getProperties)");
var state_24793__$1 = (function (){var statearr_24798 = state_24793;
(statearr_24798[(7)] = inst_24785);

return statearr_24798;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24793__$1,(2),inst_24786);
} else {
if((state_val_24794 === (2))){
var inst_24785 = (state_24793[(7)]);
var inst_24788 = (state_24793[(2)]);
var inst_24789 = cljs.core.first.call(null,inst_24788);
var inst_24790 = cljs.core.map.call(null,inst_24785,inst_24789);
var inst_24791 = cljs.core.sort_by.call(null,cljs.core.first,inst_24790);
var state_24793__$1 = state_24793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24793__$1,inst_24791);
} else {
return null;
}
}
});})(c__22583__auto__))
;
return ((function (switch__22495__auto__,c__22583__auto__){
return (function() {
var solo$spa$sysprops$get_properties_$_state_machine__22496__auto__ = null;
var solo$spa$sysprops$get_properties_$_state_machine__22496__auto____0 = (function (){
var statearr_24799 = [null,null,null,null,null,null,null,null];
(statearr_24799[(0)] = solo$spa$sysprops$get_properties_$_state_machine__22496__auto__);

(statearr_24799[(1)] = (1));

return statearr_24799;
});
var solo$spa$sysprops$get_properties_$_state_machine__22496__auto____1 = (function (state_24793){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_24793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e24800){if((e24800 instanceof Object)){
var ex__22499__auto__ = e24800;
var statearr_24801_24803 = state_24793;
(statearr_24801_24803[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24804 = state_24793;
state_24793 = G__24804;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
solo$spa$sysprops$get_properties_$_state_machine__22496__auto__ = function(state_24793){
switch(arguments.length){
case 0:
return solo$spa$sysprops$get_properties_$_state_machine__22496__auto____0.call(this);
case 1:
return solo$spa$sysprops$get_properties_$_state_machine__22496__auto____1.call(this,state_24793);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$get_properties_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$get_properties_$_state_machine__22496__auto____0;
solo$spa$sysprops$get_properties_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$get_properties_$_state_machine__22496__auto____1;
return solo$spa$sysprops$get_properties_$_state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto__))
})();
var state__22585__auto__ = (function (){var statearr_24802 = f__22584__auto__.call(null);
(statearr_24802[(6)] = c__22583__auto__);

return statearr_24802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto__))
);

return c__22583__auto__;
});
/**
 * Asynchronuously sets the system property in the JVM backend.
 */
solo.spa.sysprops.set_property = (function solo$spa$sysprops$set_property(name,value){
var c__22583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto__){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto__){
return (function (state_24812){
var state_val_24813 = (state_24812[(1)]);
if((state_val_24813 === (1))){
var inst_24805 = cljs.core.pr_str.call(null,name);
var inst_24806 = cljs.core.pr_str.call(null,value);
var inst_24807 = ["(System/setProperty ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24805)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24806),")"].join('');
var inst_24808 = solo.spa.sysprops.eval_in_backend.call(null,inst_24807);
var state_24812__$1 = state_24812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24812__$1,(2),inst_24808);
} else {
if((state_val_24813 === (2))){
var inst_24810 = (state_24812[(2)]);
var state_24812__$1 = state_24812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24812__$1,inst_24810);
} else {
return null;
}
}
});})(c__22583__auto__))
;
return ((function (switch__22495__auto__,c__22583__auto__){
return (function() {
var solo$spa$sysprops$set_property_$_state_machine__22496__auto__ = null;
var solo$spa$sysprops$set_property_$_state_machine__22496__auto____0 = (function (){
var statearr_24814 = [null,null,null,null,null,null,null];
(statearr_24814[(0)] = solo$spa$sysprops$set_property_$_state_machine__22496__auto__);

(statearr_24814[(1)] = (1));

return statearr_24814;
});
var solo$spa$sysprops$set_property_$_state_machine__22496__auto____1 = (function (state_24812){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_24812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e24815){if((e24815 instanceof Object)){
var ex__22499__auto__ = e24815;
var statearr_24816_24818 = state_24812;
(statearr_24816_24818[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24819 = state_24812;
state_24812 = G__24819;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
solo$spa$sysprops$set_property_$_state_machine__22496__auto__ = function(state_24812){
switch(arguments.length){
case 0:
return solo$spa$sysprops$set_property_$_state_machine__22496__auto____0.call(this);
case 1:
return solo$spa$sysprops$set_property_$_state_machine__22496__auto____1.call(this,state_24812);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$set_property_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$set_property_$_state_machine__22496__auto____0;
solo$spa$sysprops$set_property_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$set_property_$_state_machine__22496__auto____1;
return solo$spa$sysprops$set_property_$_state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto__))
})();
var state__22585__auto__ = (function (){var statearr_24817 = f__22584__auto__.call(null);
(statearr_24817[(6)] = c__22583__auto__);

return statearr_24817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto__))
);

return c__22583__auto__;
});
/**
 * Asynchronuously clears the system property in the JVM backend.
 */
solo.spa.sysprops.clear_property = (function solo$spa$sysprops$clear_property(name){
var c__22583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto__){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto__){
return (function (state_24826){
var state_val_24827 = (state_24826[(1)]);
if((state_val_24827 === (1))){
var inst_24820 = cljs.core.pr_str.call(null,name);
var inst_24821 = ["(System/clearProperty ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24820),")"].join('');
var inst_24822 = solo.spa.sysprops.eval_in_backend.call(null,inst_24821);
var state_24826__$1 = state_24826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24826__$1,(2),inst_24822);
} else {
if((state_val_24827 === (2))){
var inst_24824 = (state_24826[(2)]);
var state_24826__$1 = state_24826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24826__$1,inst_24824);
} else {
return null;
}
}
});})(c__22583__auto__))
;
return ((function (switch__22495__auto__,c__22583__auto__){
return (function() {
var solo$spa$sysprops$clear_property_$_state_machine__22496__auto__ = null;
var solo$spa$sysprops$clear_property_$_state_machine__22496__auto____0 = (function (){
var statearr_24828 = [null,null,null,null,null,null,null];
(statearr_24828[(0)] = solo$spa$sysprops$clear_property_$_state_machine__22496__auto__);

(statearr_24828[(1)] = (1));

return statearr_24828;
});
var solo$spa$sysprops$clear_property_$_state_machine__22496__auto____1 = (function (state_24826){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_24826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e24829){if((e24829 instanceof Object)){
var ex__22499__auto__ = e24829;
var statearr_24830_24832 = state_24826;
(statearr_24830_24832[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24833 = state_24826;
state_24826 = G__24833;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
solo$spa$sysprops$clear_property_$_state_machine__22496__auto__ = function(state_24826){
switch(arguments.length){
case 0:
return solo$spa$sysprops$clear_property_$_state_machine__22496__auto____0.call(this);
case 1:
return solo$spa$sysprops$clear_property_$_state_machine__22496__auto____1.call(this,state_24826);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$clear_property_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$clear_property_$_state_machine__22496__auto____0;
solo$spa$sysprops$clear_property_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$clear_property_$_state_machine__22496__auto____1;
return solo$spa$sysprops$clear_property_$_state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto__))
})();
var state__22585__auto__ = (function (){var statearr_24831 = f__22584__auto__.call(null);
(statearr_24831[(6)] = c__22583__auto__);

return statearr_24831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto__))
);

return c__22583__auto__;
});
solo.spa.sysprops._BANG_focus_targets = (function (){var s = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return s;
})();
solo.spa.sysprops._BANG_focus = (function (){var s = cljs.core.atom.call(null,null);
cljs.core.add_watch.call(null,s,new cljs.core.Keyword(null,"foo","foo",1268894036),((function (s){
return (function (){
return cljs.core.println.call(null,["*** focus changed to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s))].join(''));
});})(s))
);

return s;
})();
solo.spa.sysprops.apply_focus = (function solo$spa$sysprops$apply_focus(){
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,solo.spa.sysprops._BANG_focus_targets),cljs.core.deref.call(null,solo.spa.sysprops._BANG_focus));
if(cljs.core.truth_(temp__4657__auto__)){
var c = temp__4657__auto__;
cljs.core.println.call(null,["*** apply-focus ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,solo.spa.sysprops._BANG_focus))," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));

return c.focus();
} else {
return null;
}
});
solo.spa.sysprops.with_focus = (function solo$spa$sysprops$with_focus(target){
cljs.core.println.call(null,["*** with-focus ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target)," called"].join(''));

return cljs.core.with_meta.call(null,(function() { 
var G__24834__delegate = function (xs){
cljs.core.println.call(null,["*** with-focus COMPONENT ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target)," called"].join(''));

return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xs);
};
var G__24834 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__24835__i = 0, G__24835__a = new Array(arguments.length -  0);
while (G__24835__i < G__24835__a.length) {G__24835__a[G__24835__i] = arguments[G__24835__i + 0]; ++G__24835__i;}
  xs = new cljs.core.IndexedSeq(G__24835__a,0,null);
} 
return G__24834__delegate.call(this,xs);};
G__24834.cljs$lang$maxFixedArity = 0;
G__24834.cljs$lang$applyTo = (function (arglist__24836){
var xs = cljs.core.seq(arglist__24836);
return G__24834__delegate(xs);
});
G__24834.cljs$core$IFn$_invoke$arity$variadic = G__24834__delegate;
return G__24834;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
cljs.core.println.call(null,["*** :component-did-mount ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target)," called : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join(''));

cljs.core.swap_BANG_.call(null,solo.spa.sysprops._BANG_focus_targets,cljs.core.assoc,target,reagent.core.dom_node.call(null,this$));

return solo.spa.sysprops.apply_focus.call(null);
})], null));
});
solo.spa.sysprops.set_focus_BANG_ = (function solo$spa$sysprops$set_focus_BANG_(target){
cljs.core.println.call(null,["*** set-focus! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target)," called"].join(''));

cljs.core.reset_BANG_.call(null,solo.spa.sysprops._BANG_focus,target);

return solo.spa.sysprops.apply_focus.call(null);
});
/**
 * Self-contained Reagent component for accessing the system
 *   properties in a JVM backend.
 * 
 *   The component displays a table with rows (name and value), it
 *   supports re-find-filtering rows by name and value, clearing and
 *   changing existing properties and entering new properties.
 * 
 *   The component carries its own state with:
 * 
 *   :data                 : sorted/ordered [name value]-seq of system properties
 *   :filter-names-reg-ex  : reg-ex-string for filtering rows by name
 *   :filter-values-reg-ex : reg-ex-string for filtering rows by value
 *   :selected-name        : mouse-over _selects_ a row and sets :selected-name to the row's name/key!
 *   :mode                 : :create : enter a property name and value; :update : change a property's value
 *   :property-name        : for :create/:update
 *   :property-value       : for :create/:update
 *   
 *   :editing              : property name when `EDIT` was clicked
 * 
 *   :value                : property value that is entered when `editing` and 'adding'
 *   :new-property         : if non-nil in 'adding' mode. Will carry new property name.
 */
solo.spa.sysprops.sysprops_component = (function solo$spa$sysprops$sysprops_component(){
var with_focus_add = solo.spa.sysprops.with_focus.call(null,new cljs.core.Keyword(null,"add","add",235287739));
var with_focus_property_name = solo.spa.sysprops.with_focus.call(null,new cljs.core.Keyword(null,"property-name","property-name",-1399851434));
var with_focus_property_value = solo.spa.sysprops.with_focus.call(null,new cljs.core.Keyword(null,"property-value","property-value",1516163307));
var state = (function (){var s = reagent.core.atom.call(null,null);
return s;
})();
var update_state_BANG_ = ((function (with_focus_add,with_focus_property_name,with_focus_property_value,state){
return (function (){
var c__22583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state){
return (function (state_24847){
var state_val_24848 = (state_24847[(1)]);
if((state_val_24848 === (1))){
var inst_24842 = solo.spa.sysprops.get_properties.call(null);
var state_24847__$1 = state_24847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24847__$1,(2),inst_24842);
} else {
if((state_val_24848 === (2))){
var inst_24844 = (state_24847[(2)]);
var inst_24845 = cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),inst_24844);
var state_24847__$1 = state_24847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24847__$1,inst_24845);
} else {
return null;
}
}
});})(c__22583__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state))
;
return ((function (switch__22495__auto__,c__22583__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state){
return (function() {
var solo$spa$sysprops$sysprops_component_$_state_machine__22496__auto__ = null;
var solo$spa$sysprops$sysprops_component_$_state_machine__22496__auto____0 = (function (){
var statearr_24849 = [null,null,null,null,null,null,null];
(statearr_24849[(0)] = solo$spa$sysprops$sysprops_component_$_state_machine__22496__auto__);

(statearr_24849[(1)] = (1));

return statearr_24849;
});
var solo$spa$sysprops$sysprops_component_$_state_machine__22496__auto____1 = (function (state_24847){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_24847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e24850){if((e24850 instanceof Object)){
var ex__22499__auto__ = e24850;
var statearr_24851_24939 = state_24847;
(statearr_24851_24939[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24940 = state_24847;
state_24847 = G__24940;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
solo$spa$sysprops$sysprops_component_$_state_machine__22496__auto__ = function(state_24847){
switch(arguments.length){
case 0:
return solo$spa$sysprops$sysprops_component_$_state_machine__22496__auto____0.call(this);
case 1:
return solo$spa$sysprops$sysprops_component_$_state_machine__22496__auto____1.call(this,state_24847);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$sysprops_component_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$sysprops_component_$_state_machine__22496__auto____0;
solo$spa$sysprops$sysprops_component_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$sysprops_component_$_state_machine__22496__auto____1;
return solo$spa$sysprops$sysprops_component_$_state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state))
})();
var state__22585__auto__ = (function (){var statearr_24852 = f__22584__auto__.call(null);
(statearr_24852[(6)] = c__22583__auto__);

return statearr_24852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state))
);

return c__22583__auto__;
});})(with_focus_add,with_focus_property_name,with_focus_property_value,state))
;
update_state_BANG_.call(null);

solo.spa.sysprops.set_focus_BANG_.call(null,new cljs.core.Keyword(null,"add","add",235287739));

return ((function (with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"PROPERTY",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"RELOAD",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"mode","mode",654403691));

return update_state_BANG_.call(null);
});})(with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [with_focus_add,new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"ADD",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (){
solo.spa.sysprops.set_focus_BANG_.call(null,new cljs.core.Keyword(null,"property-name","property-name",-1399851434));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"create","create",-1301499256));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-name","property-name",-1399851434),"");

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-value","property-value",1516163307),"");
});})(with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>input","div>input",844443481),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"re-find-filter name",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (p1__24837_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"filter-names-reg-ex","filter-names-reg-ex",-1380802702),p1__24837_SHARP_.target.value);
});})(with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"VALUE",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"re-find-filter value",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (p1__24838_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"filter-values-reg-ex","filter-values-reg-ex",877907692),p1__24838_SHARP_.target.value);
});})(with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function solo$spa$sysprops$sysprops_component_$_iter__24853(s__24854){
return (new cljs.core.LazySeq(null,((function (with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (){
var s__24854__$1 = s__24854;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24854__$1);
if(temp__4657__auto__){
var s__24854__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24854__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__24854__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__24856 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__24855 = (0);
while(true){
if((i__24855 < size__4291__auto__)){
var vec__24857 = cljs.core._nth.call(null,c__4290__auto__,i__24855);
var seq__24858 = cljs.core.seq.call(null,vec__24857);
var first__24859 = cljs.core.first.call(null,seq__24858);
var seq__24858__$1 = cljs.core.next.call(null,seq__24858);
var name = first__24859;
var first__24859__$1 = cljs.core.first.call(null,seq__24858__$1);
var seq__24858__$2 = cljs.core.next.call(null,seq__24858__$1);
var value = first__24859__$1;
var create_flag = seq__24858__$2;
var name_reg_ex = solo.spa.sysprops.reg_ex_str__GT_reg_ex.call(null,new cljs.core.Keyword(null,"filter-names-reg-ex","filter-names-reg-ex",-1380802702).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
var value_reg_ex = solo.spa.sysprops.reg_ex_str__GT_reg_ex.call(null,new cljs.core.Keyword(null,"filter-values-reg-ex","filter-values-reg-ex",877907692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
if(cljs.core.truth_((function (){var or__3922__auto__ = create_flag;
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = cljs.core.re_find.call(null,name_reg_ex,name);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.re_find.call(null,value_reg_ex,value);
} else {
return and__3911__auto__;
}
}
})())){
cljs.core.chunk_append.call(null,b__24856,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__24855,s__24854__$1,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-name","selected-name",204491772),name);
});})(i__24855,s__24854__$1,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((create_flag)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [with_focus_property_name,new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"new property name",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__24855,s__24854__$1,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (p1__24839_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-name","property-name",-1399851434),p1__24839_SHARP_.target.value);
});})(i__24855,s__24854__$1,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
], null)], null):name),((((cljs.core.not.call(null,create_flag)) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"selected-name","selected-name",204491772).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"REMOVE!",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__24855,s__24854__$1,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (){
var c__22583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (i__24855,s__24854__$1,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (i__24855,s__24854__$1,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (state_24868){
var state_val_24869 = (state_24868[(1)]);
if((state_val_24869 === (1))){
var inst_24860 = solo.spa.sysprops.set_focus_BANG_.call(null,new cljs.core.Keyword(null,"add","add",235287739));
var inst_24861 = solo.spa.sysprops.clear_property.call(null,name);
var state_24868__$1 = (function (){var statearr_24870 = state_24868;
(statearr_24870[(7)] = inst_24860);

return statearr_24870;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24868__$1,(2),inst_24861);
} else {
if((state_val_24869 === (2))){
var inst_24863 = (state_24868[(2)]);
var inst_24864 = update_state_BANG_.call(null);
var state_24868__$1 = (function (){var statearr_24871 = state_24868;
(statearr_24871[(8)] = inst_24863);

return statearr_24871;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24868__$1,(3),inst_24864);
} else {
if((state_val_24869 === (3))){
var inst_24866 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24868__$1,inst_24866);
} else {
return null;
}
}
}
});})(i__24855,s__24854__$1,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
;
return ((function (i__24855,s__24854__$1,switch__22495__auto__,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function() {
var solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__ = null;
var solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____0 = (function (){
var statearr_24872 = [null,null,null,null,null,null,null,null,null];
(statearr_24872[(0)] = solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__);

(statearr_24872[(1)] = (1));

return statearr_24872;
});
var solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____1 = (function (state_24868){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_24868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e24873){if((e24873 instanceof Object)){
var ex__22499__auto__ = e24873;
var statearr_24874_24941 = state_24868;
(statearr_24874_24941[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24942 = state_24868;
state_24868 = G__24942;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__ = function(state_24868){
switch(arguments.length){
case 0:
return solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____0.call(this);
case 1:
return solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____1.call(this,state_24868);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____0;
solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____1;
return solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__;
})()
;})(i__24855,s__24854__$1,switch__22495__auto__,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
})();
var state__22585__auto__ = (function (){var statearr_24875 = f__22584__auto__.call(null);
(statearr_24875[(6)] = c__22583__auto__);

return statearr_24875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(i__24855,s__24854__$1,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
);

return c__22583__auto__;
});})(i__24855,s__24854__$1,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((((!(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (create_flag)))) && (!(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"selected-name","selected-name",204491772).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"EDIT",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__24855,s__24854__$1,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (){
solo.spa.sysprops.set_focus_BANG_.call(null,new cljs.core.Keyword(null,"property-value","property-value",1516163307));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-value","property-value",1516163307),value);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-name","property-name",-1399851434),name);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"update","update",1045576396));
});})(i__24855,s__24854__$1,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
], null)], null):null),((((create_flag) || (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [with_focus_property_value,new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),value,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__24855,s__24854__$1,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (p1__24840_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-value","property-value",1516163307),p1__24840_SHARP_.target.value);
});})(i__24855,s__24854__$1,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"OK",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__24855,s__24854__$1,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (){
var c__22583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (i__24855,s__24854__$1,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (i__24855,s__24854__$1,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (state_24889){
var state_val_24890 = (state_24889[(1)]);
if((state_val_24890 === (1))){
var inst_24876 = solo.spa.sysprops.set_focus_BANG_.call(null,new cljs.core.Keyword(null,"add","add",235287739));
var inst_24877 = cljs.core.deref.call(null,state);
var inst_24878 = new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(inst_24877);
var inst_24879 = cljs.core.deref.call(null,state);
var inst_24880 = new cljs.core.Keyword(null,"property-value","property-value",1516163307).cljs$core$IFn$_invoke$arity$1(inst_24879);
var inst_24881 = solo.spa.sysprops.set_property.call(null,inst_24878,inst_24880);
var state_24889__$1 = (function (){var statearr_24891 = state_24889;
(statearr_24891[(7)] = inst_24876);

return statearr_24891;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24889__$1,(2),inst_24881);
} else {
if((state_val_24890 === (2))){
var inst_24883 = (state_24889[(2)]);
var inst_24884 = update_state_BANG_.call(null);
var state_24889__$1 = (function (){var statearr_24892 = state_24889;
(statearr_24892[(8)] = inst_24883);

return statearr_24892;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24889__$1,(3),inst_24884);
} else {
if((state_val_24890 === (3))){
var inst_24886 = (state_24889[(2)]);
var inst_24887 = cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"mode","mode",654403691));
var state_24889__$1 = (function (){var statearr_24893 = state_24889;
(statearr_24893[(9)] = inst_24886);

return statearr_24893;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24889__$1,inst_24887);
} else {
return null;
}
}
}
});})(i__24855,s__24854__$1,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
;
return ((function (i__24855,s__24854__$1,switch__22495__auto__,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function() {
var solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__ = null;
var solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____0 = (function (){
var statearr_24894 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24894[(0)] = solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__);

(statearr_24894[(1)] = (1));

return statearr_24894;
});
var solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____1 = (function (state_24889){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_24889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e24895){if((e24895 instanceof Object)){
var ex__22499__auto__ = e24895;
var statearr_24896_24943 = state_24889;
(statearr_24896_24943[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24944 = state_24889;
state_24889 = G__24944;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__ = function(state_24889){
switch(arguments.length){
case 0:
return solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____0.call(this);
case 1:
return solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____1.call(this,state_24889);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____0;
solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____1;
return solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__;
})()
;})(i__24855,s__24854__$1,switch__22495__auto__,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
})();
var state__22585__auto__ = (function (){var statearr_24897 = f__22584__auto__.call(null);
(statearr_24897[(6)] = c__22583__auto__);

return statearr_24897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(i__24855,s__24854__$1,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
);

return c__22583__auto__;
});})(i__24855,s__24854__$1,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"CANCLE",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__24855,s__24854__$1,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (){
solo.spa.sysprops.set_focus_BANG_.call(null,new cljs.core.Keyword(null,"add","add",235287739));

return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"mode","mode",654403691));
});})(i__24855,s__24854__$1,name_reg_ex,value_reg_ex,vec__24857,seq__24858,first__24859,seq__24858__$1,name,first__24859__$1,seq__24858__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__24856,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
], null)], null)], null):value)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),((create_flag)?create_flag:["foo",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''))], null)));

var G__24945 = (i__24855 + (1));
i__24855 = G__24945;
continue;
} else {
var G__24946 = (i__24855 + (1));
i__24855 = G__24946;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24856),solo$spa$sysprops$sysprops_component_$_iter__24853.call(null,cljs.core.chunk_rest.call(null,s__24854__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24856),null);
}
} else {
var vec__24898 = cljs.core.first.call(null,s__24854__$2);
var seq__24899 = cljs.core.seq.call(null,vec__24898);
var first__24900 = cljs.core.first.call(null,seq__24899);
var seq__24899__$1 = cljs.core.next.call(null,seq__24899);
var name = first__24900;
var first__24900__$1 = cljs.core.first.call(null,seq__24899__$1);
var seq__24899__$2 = cljs.core.next.call(null,seq__24899__$1);
var value = first__24900__$1;
var create_flag = seq__24899__$2;
var name_reg_ex = solo.spa.sysprops.reg_ex_str__GT_reg_ex.call(null,new cljs.core.Keyword(null,"filter-names-reg-ex","filter-names-reg-ex",-1380802702).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
var value_reg_ex = solo.spa.sysprops.reg_ex_str__GT_reg_ex.call(null,new cljs.core.Keyword(null,"filter-values-reg-ex","filter-values-reg-ex",877907692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
if(cljs.core.truth_((function (){var or__3922__auto__ = create_flag;
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = cljs.core.re_find.call(null,name_reg_ex,name);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.re_find.call(null,value_reg_ex,value);
} else {
return and__3911__auto__;
}
}
})())){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (s__24854__$1,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-name","selected-name",204491772),name);
});})(s__24854__$1,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((create_flag)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [with_focus_property_name,new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"new property name",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (s__24854__$1,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (p1__24839_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-name","property-name",-1399851434),p1__24839_SHARP_.target.value);
});})(s__24854__$1,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
], null)], null):name),((((cljs.core.not.call(null,create_flag)) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"selected-name","selected-name",204491772).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"REMOVE!",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__24854__$1,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (){
var c__22583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (s__24854__$1,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (s__24854__$1,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (state_24909){
var state_val_24910 = (state_24909[(1)]);
if((state_val_24910 === (1))){
var inst_24901 = solo.spa.sysprops.set_focus_BANG_.call(null,new cljs.core.Keyword(null,"add","add",235287739));
var inst_24902 = solo.spa.sysprops.clear_property.call(null,name);
var state_24909__$1 = (function (){var statearr_24911 = state_24909;
(statearr_24911[(7)] = inst_24901);

return statearr_24911;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24909__$1,(2),inst_24902);
} else {
if((state_val_24910 === (2))){
var inst_24904 = (state_24909[(2)]);
var inst_24905 = update_state_BANG_.call(null);
var state_24909__$1 = (function (){var statearr_24912 = state_24909;
(statearr_24912[(8)] = inst_24904);

return statearr_24912;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24909__$1,(3),inst_24905);
} else {
if((state_val_24910 === (3))){
var inst_24907 = (state_24909[(2)]);
var state_24909__$1 = state_24909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24909__$1,inst_24907);
} else {
return null;
}
}
}
});})(s__24854__$1,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
;
return ((function (s__24854__$1,switch__22495__auto__,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function() {
var solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__ = null;
var solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____0 = (function (){
var statearr_24913 = [null,null,null,null,null,null,null,null,null];
(statearr_24913[(0)] = solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__);

(statearr_24913[(1)] = (1));

return statearr_24913;
});
var solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____1 = (function (state_24909){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_24909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e24914){if((e24914 instanceof Object)){
var ex__22499__auto__ = e24914;
var statearr_24915_24947 = state_24909;
(statearr_24915_24947[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24948 = state_24909;
state_24909 = G__24948;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__ = function(state_24909){
switch(arguments.length){
case 0:
return solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____0.call(this);
case 1:
return solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____1.call(this,state_24909);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____0;
solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____1;
return solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__;
})()
;})(s__24854__$1,switch__22495__auto__,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
})();
var state__22585__auto__ = (function (){var statearr_24916 = f__22584__auto__.call(null);
(statearr_24916[(6)] = c__22583__auto__);

return statearr_24916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(s__24854__$1,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
);

return c__22583__auto__;
});})(s__24854__$1,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((((!(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (create_flag)))) && (!(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"selected-name","selected-name",204491772).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"EDIT",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__24854__$1,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (){
solo.spa.sysprops.set_focus_BANG_.call(null,new cljs.core.Keyword(null,"property-value","property-value",1516163307));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-value","property-value",1516163307),value);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-name","property-name",-1399851434),name);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"update","update",1045576396));
});})(s__24854__$1,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
], null)], null):null),((((create_flag) || (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [with_focus_property_value,new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),value,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (s__24854__$1,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (p1__24840_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-value","property-value",1516163307),p1__24840_SHARP_.target.value);
});})(s__24854__$1,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"OK",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__24854__$1,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (){
var c__22583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (s__24854__$1,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (s__24854__$1,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (state_24930){
var state_val_24931 = (state_24930[(1)]);
if((state_val_24931 === (1))){
var inst_24917 = solo.spa.sysprops.set_focus_BANG_.call(null,new cljs.core.Keyword(null,"add","add",235287739));
var inst_24918 = cljs.core.deref.call(null,state);
var inst_24919 = new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(inst_24918);
var inst_24920 = cljs.core.deref.call(null,state);
var inst_24921 = new cljs.core.Keyword(null,"property-value","property-value",1516163307).cljs$core$IFn$_invoke$arity$1(inst_24920);
var inst_24922 = solo.spa.sysprops.set_property.call(null,inst_24919,inst_24921);
var state_24930__$1 = (function (){var statearr_24932 = state_24930;
(statearr_24932[(7)] = inst_24917);

return statearr_24932;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24930__$1,(2),inst_24922);
} else {
if((state_val_24931 === (2))){
var inst_24924 = (state_24930[(2)]);
var inst_24925 = update_state_BANG_.call(null);
var state_24930__$1 = (function (){var statearr_24933 = state_24930;
(statearr_24933[(8)] = inst_24924);

return statearr_24933;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24930__$1,(3),inst_24925);
} else {
if((state_val_24931 === (3))){
var inst_24927 = (state_24930[(2)]);
var inst_24928 = cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"mode","mode",654403691));
var state_24930__$1 = (function (){var statearr_24934 = state_24930;
(statearr_24934[(9)] = inst_24927);

return statearr_24934;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24930__$1,inst_24928);
} else {
return null;
}
}
}
});})(s__24854__$1,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
;
return ((function (s__24854__$1,switch__22495__auto__,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function() {
var solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__ = null;
var solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____0 = (function (){
var statearr_24935 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24935[(0)] = solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__);

(statearr_24935[(1)] = (1));

return statearr_24935;
});
var solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____1 = (function (state_24930){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_24930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e24936){if((e24936 instanceof Object)){
var ex__22499__auto__ = e24936;
var statearr_24937_24949 = state_24930;
(statearr_24937_24949[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24950 = state_24930;
state_24930 = G__24950;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__ = function(state_24930){
switch(arguments.length){
case 0:
return solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____0.call(this);
case 1:
return solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____1.call(this,state_24930);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____0;
solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto____1;
return solo$spa$sysprops$sysprops_component_$_iter__24853_$_state_machine__22496__auto__;
})()
;})(s__24854__$1,switch__22495__auto__,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
})();
var state__22585__auto__ = (function (){var statearr_24938 = f__22584__auto__.call(null);
(statearr_24938[(6)] = c__22583__auto__);

return statearr_24938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(s__24854__$1,c__22583__auto__,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
);

return c__22583__auto__;
});})(s__24854__$1,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"CANCLE",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__24854__$1,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_){
return (function (){
solo.spa.sysprops.set_focus_BANG_.call(null,new cljs.core.Keyword(null,"add","add",235287739));

return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"mode","mode",654403691));
});})(s__24854__$1,name_reg_ex,value_reg_ex,vec__24898,seq__24899,first__24900,seq__24899__$1,name,first__24900__$1,seq__24899__$2,value,create_flag,s__24854__$2,temp__4657__auto__,with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
], null)], null)], null):value)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),((create_flag)?create_flag:["foo",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''))], null)),solo$spa$sysprops$sysprops_component_$_iter__24853.call(null,cljs.core.rest.call(null,s__24854__$2)));
} else {
var G__24951 = cljs.core.rest.call(null,s__24854__$2);
s__24854__$1 = G__24951;
continue;
}
}
} else {
return null;
}
break;
}
});})(with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
,null,null));
});})(with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
;
return iter__4292__auto__.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))?cljs.core.conj.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","bar"], null)):new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
})())], null)], null);
});
;})(with_focus_add,with_focus_property_name,with_focus_property_value,state,update_state_BANG_))
});

//# sourceMappingURL=sysprops.js.map?rel=1534453566869
