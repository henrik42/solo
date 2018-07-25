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
var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto__){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto__){
return (function (state_5916){
var state_val_5917 = (state_5916[(1)]);
if((state_val_5917 === (1))){
var inst_5905 = [new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_5906 = [new cljs.core.Keyword(null,"eval","eval",-1103567905)];
var inst_5907 = [source_string];
var inst_5908 = cljs.core.PersistentHashMap.fromArrays(inst_5906,inst_5907);
var inst_5909 = [inst_5908];
var inst_5910 = cljs.core.PersistentHashMap.fromArrays(inst_5905,inst_5909);
var inst_5911 = cljs_http.client.post.call(null,"ws/eval/",inst_5910);
var state_5916__$1 = state_5916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5916__$1,(2),inst_5911);
} else {
if((state_val_5917 === (2))){
var inst_5913 = (state_5916[(2)]);
var inst_5914 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_5913);
var state_5916__$1 = state_5916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5916__$1,inst_5914);
} else {
return null;
}
}
});})(c__3724__auto__))
;
return ((function (switch__3636__auto__,c__3724__auto__){
return (function() {
var solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto__ = null;
var solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto____0 = (function (){
var statearr_5918 = [null,null,null,null,null,null,null];
(statearr_5918[(0)] = solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto__);

(statearr_5918[(1)] = (1));

return statearr_5918;
});
var solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto____1 = (function (state_5916){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_5916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e5919){if((e5919 instanceof Object)){
var ex__3640__auto__ = e5919;
var statearr_5920_5922 = state_5916;
(statearr_5920_5922[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5923 = state_5916;
state_5916 = G__5923;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto__ = function(state_5916){
switch(arguments.length){
case 0:
return solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto____1.call(this,state_5916);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto____0;
solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto____1;
return solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto__))
})();
var state__3726__auto__ = (function (){var statearr_5921 = f__3725__auto__.call(null);
(statearr_5921[(6)] = c__3724__auto__);

return statearr_5921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto__))
);

return c__3724__auto__;
});
solo.spa.sysprops.reg_ex_str__GT_reg_ex = (function solo$spa$sysprops$reg_ex_str__GT_reg_ex(reg_ex_str){
try{return RegExp((function (){var or__3922__auto__ = reg_ex_str;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ".*";
}
})());
}catch (e5924){var t = e5924;
return /.*/;
}});
/**
 * Returns the system properties of the JVM backend as a `[name
 *   value]`-seq (both strings).
 */
solo.spa.sysprops.get_properties = (function solo$spa$sysprops$get_properties(){
var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto__){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto__){
return (function (state_5934){
var state_val_5935 = (state_5934[(1)]);
if((state_val_5935 === (1))){
var inst_5926 = (function (){return ((function (state_val_5935,c__3724__auto__){
return (function (p__5925){
var vec__5936 = p__5925;
var k = cljs.core.nth.call(null,vec__5936,(0),null);
var v = cljs.core.nth.call(null,vec__5936,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((k instanceof cljs.core.Keyword))?cljs.core.name.call(null,k):k),v], null);
});
;})(state_val_5935,c__3724__auto__))
})();
var inst_5927 = solo.spa.sysprops.eval_in_backend.call(null,"(System/getProperties)");
var state_5934__$1 = (function (){var statearr_5939 = state_5934;
(statearr_5939[(7)] = inst_5926);

return statearr_5939;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5934__$1,(2),inst_5927);
} else {
if((state_val_5935 === (2))){
var inst_5926 = (state_5934[(7)]);
var inst_5929 = (state_5934[(2)]);
var inst_5930 = cljs.core.first.call(null,inst_5929);
var inst_5931 = cljs.core.map.call(null,inst_5926,inst_5930);
var inst_5932 = cljs.core.sort_by.call(null,cljs.core.first,inst_5931);
var state_5934__$1 = state_5934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5934__$1,inst_5932);
} else {
return null;
}
}
});})(c__3724__auto__))
;
return ((function (switch__3636__auto__,c__3724__auto__){
return (function() {
var solo$spa$sysprops$get_properties_$_state_machine__3637__auto__ = null;
var solo$spa$sysprops$get_properties_$_state_machine__3637__auto____0 = (function (){
var statearr_5940 = [null,null,null,null,null,null,null,null];
(statearr_5940[(0)] = solo$spa$sysprops$get_properties_$_state_machine__3637__auto__);

(statearr_5940[(1)] = (1));

return statearr_5940;
});
var solo$spa$sysprops$get_properties_$_state_machine__3637__auto____1 = (function (state_5934){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_5934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e5941){if((e5941 instanceof Object)){
var ex__3640__auto__ = e5941;
var statearr_5942_5944 = state_5934;
(statearr_5942_5944[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5945 = state_5934;
state_5934 = G__5945;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$get_properties_$_state_machine__3637__auto__ = function(state_5934){
switch(arguments.length){
case 0:
return solo$spa$sysprops$get_properties_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$get_properties_$_state_machine__3637__auto____1.call(this,state_5934);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$get_properties_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$get_properties_$_state_machine__3637__auto____0;
solo$spa$sysprops$get_properties_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$get_properties_$_state_machine__3637__auto____1;
return solo$spa$sysprops$get_properties_$_state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto__))
})();
var state__3726__auto__ = (function (){var statearr_5943 = f__3725__auto__.call(null);
(statearr_5943[(6)] = c__3724__auto__);

return statearr_5943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto__))
);

return c__3724__auto__;
});
/**
 * Asynchronuously sets the system property in the JVM backend.
 */
solo.spa.sysprops.set_property = (function solo$spa$sysprops$set_property(name,value){
var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto__){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto__){
return (function (state_5953){
var state_val_5954 = (state_5953[(1)]);
if((state_val_5954 === (1))){
var inst_5946 = cljs.core.pr_str.call(null,name);
var inst_5947 = cljs.core.pr_str.call(null,value);
var inst_5948 = ["(System/setProperty ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_5946)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_5947),")"].join('');
var inst_5949 = solo.spa.sysprops.eval_in_backend.call(null,inst_5948);
var state_5953__$1 = state_5953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5953__$1,(2),inst_5949);
} else {
if((state_val_5954 === (2))){
var inst_5951 = (state_5953[(2)]);
var state_5953__$1 = state_5953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5953__$1,inst_5951);
} else {
return null;
}
}
});})(c__3724__auto__))
;
return ((function (switch__3636__auto__,c__3724__auto__){
return (function() {
var solo$spa$sysprops$set_property_$_state_machine__3637__auto__ = null;
var solo$spa$sysprops$set_property_$_state_machine__3637__auto____0 = (function (){
var statearr_5955 = [null,null,null,null,null,null,null];
(statearr_5955[(0)] = solo$spa$sysprops$set_property_$_state_machine__3637__auto__);

(statearr_5955[(1)] = (1));

return statearr_5955;
});
var solo$spa$sysprops$set_property_$_state_machine__3637__auto____1 = (function (state_5953){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_5953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e5956){if((e5956 instanceof Object)){
var ex__3640__auto__ = e5956;
var statearr_5957_5959 = state_5953;
(statearr_5957_5959[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5960 = state_5953;
state_5953 = G__5960;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$set_property_$_state_machine__3637__auto__ = function(state_5953){
switch(arguments.length){
case 0:
return solo$spa$sysprops$set_property_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$set_property_$_state_machine__3637__auto____1.call(this,state_5953);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$set_property_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$set_property_$_state_machine__3637__auto____0;
solo$spa$sysprops$set_property_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$set_property_$_state_machine__3637__auto____1;
return solo$spa$sysprops$set_property_$_state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto__))
})();
var state__3726__auto__ = (function (){var statearr_5958 = f__3725__auto__.call(null);
(statearr_5958[(6)] = c__3724__auto__);

return statearr_5958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto__))
);

return c__3724__auto__;
});
/**
 * Asynchronuously clears the system property in the JVM backend.
 */
solo.spa.sysprops.clear_property = (function solo$spa$sysprops$clear_property(name){
var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto__){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto__){
return (function (state_5967){
var state_val_5968 = (state_5967[(1)]);
if((state_val_5968 === (1))){
var inst_5961 = cljs.core.pr_str.call(null,name);
var inst_5962 = ["(System/clearProperty ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_5961),")"].join('');
var inst_5963 = solo.spa.sysprops.eval_in_backend.call(null,inst_5962);
var state_5967__$1 = state_5967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5967__$1,(2),inst_5963);
} else {
if((state_val_5968 === (2))){
var inst_5965 = (state_5967[(2)]);
var state_5967__$1 = state_5967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5967__$1,inst_5965);
} else {
return null;
}
}
});})(c__3724__auto__))
;
return ((function (switch__3636__auto__,c__3724__auto__){
return (function() {
var solo$spa$sysprops$clear_property_$_state_machine__3637__auto__ = null;
var solo$spa$sysprops$clear_property_$_state_machine__3637__auto____0 = (function (){
var statearr_5969 = [null,null,null,null,null,null,null];
(statearr_5969[(0)] = solo$spa$sysprops$clear_property_$_state_machine__3637__auto__);

(statearr_5969[(1)] = (1));

return statearr_5969;
});
var solo$spa$sysprops$clear_property_$_state_machine__3637__auto____1 = (function (state_5967){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_5967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e5970){if((e5970 instanceof Object)){
var ex__3640__auto__ = e5970;
var statearr_5971_5973 = state_5967;
(statearr_5971_5973[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5974 = state_5967;
state_5967 = G__5974;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$clear_property_$_state_machine__3637__auto__ = function(state_5967){
switch(arguments.length){
case 0:
return solo$spa$sysprops$clear_property_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$clear_property_$_state_machine__3637__auto____1.call(this,state_5967);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$clear_property_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$clear_property_$_state_machine__3637__auto____0;
solo$spa$sysprops$clear_property_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$clear_property_$_state_machine__3637__auto____1;
return solo$spa$sysprops$clear_property_$_state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto__))
})();
var state__3726__auto__ = (function (){var statearr_5972 = f__3725__auto__.call(null);
(statearr_5972[(6)] = c__3724__auto__);

return statearr_5972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto__))
);

return c__3724__auto__;
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
var state = (function (){var s = reagent.core.atom.call(null,null);
return s;
})();
var update_state_BANG_ = ((function (state){
return (function (){
var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto__,state){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto__,state){
return (function (state_5985){
var state_val_5986 = (state_5985[(1)]);
if((state_val_5986 === (1))){
var inst_5980 = solo.spa.sysprops.get_properties.call(null);
var state_5985__$1 = state_5985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5985__$1,(2),inst_5980);
} else {
if((state_val_5986 === (2))){
var inst_5982 = (state_5985[(2)]);
var inst_5983 = cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),inst_5982);
var state_5985__$1 = state_5985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5985__$1,inst_5983);
} else {
return null;
}
}
});})(c__3724__auto__,state))
;
return ((function (switch__3636__auto__,c__3724__auto__,state){
return (function() {
var solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto__ = null;
var solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto____0 = (function (){
var statearr_5987 = [null,null,null,null,null,null,null];
(statearr_5987[(0)] = solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto__);

(statearr_5987[(1)] = (1));

return statearr_5987;
});
var solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto____1 = (function (state_5985){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_5985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e5988){if((e5988 instanceof Object)){
var ex__3640__auto__ = e5988;
var statearr_5989_6069 = state_5985;
(statearr_5989_6069[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6070 = state_5985;
state_5985 = G__6070;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto__ = function(state_5985){
switch(arguments.length){
case 0:
return solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto____1.call(this,state_5985);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto____0;
solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto____1;
return solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto__,state))
})();
var state__3726__auto__ = (function (){var statearr_5990 = f__3725__auto__.call(null);
(statearr_5990[(6)] = c__3724__auto__);

return statearr_5990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto__,state))
);

return c__3724__auto__;
});})(state))
;
update_state_BANG_.call(null);

return ((function (state,update_state_BANG_){
return (function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"PROPERTY",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"RELOAD",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (state,update_state_BANG_){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"mode","mode",654403691));

return update_state_BANG_.call(null);
});})(state,update_state_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"ADD",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (state,update_state_BANG_){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"create","create",-1301499256));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-name","property-name",-1399851434),"");

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-value","property-value",1516163307),"");
});})(state,update_state_BANG_))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>input","div>input",844443481),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"re-find-filter name",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (state,update_state_BANG_){
return (function (p1__5975_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"filter-names-reg-ex","filter-names-reg-ex",-1380802702),p1__5975_SHARP_.target.value);
});})(state,update_state_BANG_))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"VALUE",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"re-find-filter value",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (state,update_state_BANG_){
return (function (p1__5976_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"filter-values-reg-ex","filter-values-reg-ex",877907692),p1__5976_SHARP_.target.value);
});})(state,update_state_BANG_))
], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4292__auto__ = ((function (state,update_state_BANG_){
return (function solo$spa$sysprops$sysprops_component_$_iter__5991(s__5992){
return (new cljs.core.LazySeq(null,((function (state,update_state_BANG_){
return (function (){
var s__5992__$1 = s__5992;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__5992__$1);
if(temp__4657__auto__){
var s__5992__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5992__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__5992__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__5994 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__5993 = (0);
while(true){
if((i__5993 < size__4291__auto__)){
var vec__5995 = cljs.core._nth.call(null,c__4290__auto__,i__5993);
var seq__5996 = cljs.core.seq.call(null,vec__5995);
var first__5997 = cljs.core.first.call(null,seq__5996);
var seq__5996__$1 = cljs.core.next.call(null,seq__5996);
var name = first__5997;
var first__5997__$1 = cljs.core.first.call(null,seq__5996__$1);
var seq__5996__$2 = cljs.core.next.call(null,seq__5996__$1);
var value = first__5997__$1;
var create_flag = seq__5996__$2;
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
cljs.core.chunk_append.call(null,b__5994,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__5993,s__5992__$1,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-name","selected-name",204491772),name);
});})(i__5993,s__5992__$1,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((create_flag)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"new property name",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__5993,s__5992__$1,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (p1__5977_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-name","property-name",-1399851434),p1__5977_SHARP_.target.value);
});})(i__5993,s__5992__$1,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null):name),((((cljs.core.not.call(null,create_flag)) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"selected-name","selected-name",204491772).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"REMOVE!",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__5993,s__5992__$1,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (i__5993,s__5992__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (i__5993,s__5992__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (state_6005){
var state_val_6006 = (state_6005[(1)]);
if((state_val_6006 === (1))){
var inst_5998 = solo.spa.sysprops.clear_property.call(null,name);
var state_6005__$1 = state_6005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6005__$1,(2),inst_5998);
} else {
if((state_val_6006 === (2))){
var inst_6000 = (state_6005[(2)]);
var inst_6001 = update_state_BANG_.call(null);
var state_6005__$1 = (function (){var statearr_6007 = state_6005;
(statearr_6007[(7)] = inst_6000);

return statearr_6007;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6005__$1,(3),inst_6001);
} else {
if((state_val_6006 === (3))){
var inst_6003 = (state_6005[(2)]);
var state_6005__$1 = state_6005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6005__$1,inst_6003);
} else {
return null;
}
}
}
});})(i__5993,s__5992__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
;
return ((function (i__5993,s__5992__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function() {
var solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__ = null;
var solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____0 = (function (){
var statearr_6008 = [null,null,null,null,null,null,null,null];
(statearr_6008[(0)] = solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__);

(statearr_6008[(1)] = (1));

return statearr_6008;
});
var solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____1 = (function (state_6005){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_6005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e6009){if((e6009 instanceof Object)){
var ex__3640__auto__ = e6009;
var statearr_6010_6071 = state_6005;
(statearr_6010_6071[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6072 = state_6005;
state_6005 = G__6072;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__ = function(state_6005){
switch(arguments.length){
case 0:
return solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____1.call(this,state_6005);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____0;
solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____1;
return solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__;
})()
;})(i__5993,s__5992__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
})();
var state__3726__auto__ = (function (){var statearr_6011 = f__3725__auto__.call(null);
(statearr_6011[(6)] = c__3724__auto__);

return statearr_6011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(i__5993,s__5992__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
);

return c__3724__auto__;
});})(i__5993,s__5992__$1,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((((!(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (create_flag)))) && (!(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"selected-name","selected-name",204491772).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"EDIT",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__5993,s__5992__$1,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-value","property-value",1516163307),value);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-name","property-name",-1399851434),name);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"update","update",1045576396));
});})(i__5993,s__5992__$1,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null):null),((((create_flag) || (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),value,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__5993,s__5992__$1,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (p1__5978_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-value","property-value",1516163307),p1__5978_SHARP_.target.value);
});})(i__5993,s__5992__$1,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"OK",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__5993,s__5992__$1,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (i__5993,s__5992__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (i__5993,s__5992__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (state_6024){
var state_val_6025 = (state_6024[(1)]);
if((state_val_6025 === (1))){
var inst_6012 = cljs.core.deref.call(null,state);
var inst_6013 = new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(inst_6012);
var inst_6014 = cljs.core.deref.call(null,state);
var inst_6015 = new cljs.core.Keyword(null,"property-value","property-value",1516163307).cljs$core$IFn$_invoke$arity$1(inst_6014);
var inst_6016 = solo.spa.sysprops.set_property.call(null,inst_6013,inst_6015);
var state_6024__$1 = state_6024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6024__$1,(2),inst_6016);
} else {
if((state_val_6025 === (2))){
var inst_6018 = (state_6024[(2)]);
var inst_6019 = update_state_BANG_.call(null);
var state_6024__$1 = (function (){var statearr_6026 = state_6024;
(statearr_6026[(7)] = inst_6018);

return statearr_6026;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6024__$1,(3),inst_6019);
} else {
if((state_val_6025 === (3))){
var inst_6021 = (state_6024[(2)]);
var inst_6022 = cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"mode","mode",654403691));
var state_6024__$1 = (function (){var statearr_6027 = state_6024;
(statearr_6027[(8)] = inst_6021);

return statearr_6027;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6024__$1,inst_6022);
} else {
return null;
}
}
}
});})(i__5993,s__5992__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
;
return ((function (i__5993,s__5992__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function() {
var solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__ = null;
var solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____0 = (function (){
var statearr_6028 = [null,null,null,null,null,null,null,null,null];
(statearr_6028[(0)] = solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__);

(statearr_6028[(1)] = (1));

return statearr_6028;
});
var solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____1 = (function (state_6024){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_6024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e6029){if((e6029 instanceof Object)){
var ex__3640__auto__ = e6029;
var statearr_6030_6073 = state_6024;
(statearr_6030_6073[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6074 = state_6024;
state_6024 = G__6074;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__ = function(state_6024){
switch(arguments.length){
case 0:
return solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____1.call(this,state_6024);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____0;
solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____1;
return solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__;
})()
;})(i__5993,s__5992__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
})();
var state__3726__auto__ = (function (){var statearr_6031 = f__3725__auto__.call(null);
(statearr_6031[(6)] = c__3724__auto__);

return statearr_6031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(i__5993,s__5992__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
);

return c__3724__auto__;
});})(i__5993,s__5992__$1,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"CANCLE",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__5993,s__5992__$1,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"mode","mode",654403691));
});})(i__5993,s__5992__$1,name_reg_ex,value_reg_ex,vec__5995,seq__5996,first__5997,seq__5996__$1,name,first__5997__$1,seq__5996__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5994,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null)], null):value)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),((create_flag)?create_flag:["foo",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''))], null)));

var G__6075 = (i__5993 + (1));
i__5993 = G__6075;
continue;
} else {
var G__6076 = (i__5993 + (1));
i__5993 = G__6076;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5994),solo$spa$sysprops$sysprops_component_$_iter__5991.call(null,cljs.core.chunk_rest.call(null,s__5992__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5994),null);
}
} else {
var vec__6032 = cljs.core.first.call(null,s__5992__$2);
var seq__6033 = cljs.core.seq.call(null,vec__6032);
var first__6034 = cljs.core.first.call(null,seq__6033);
var seq__6033__$1 = cljs.core.next.call(null,seq__6033);
var name = first__6034;
var first__6034__$1 = cljs.core.first.call(null,seq__6033__$1);
var seq__6033__$2 = cljs.core.next.call(null,seq__6033__$1);
var value = first__6034__$1;
var create_flag = seq__6033__$2;
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
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (s__5992__$1,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-name","selected-name",204491772),name);
});})(s__5992__$1,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((create_flag)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"new property name",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (s__5992__$1,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (p1__5977_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-name","property-name",-1399851434),p1__5977_SHARP_.target.value);
});})(s__5992__$1,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null):name),((((cljs.core.not.call(null,create_flag)) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"selected-name","selected-name",204491772).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"REMOVE!",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__5992__$1,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (s__5992__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (s__5992__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (state_6042){
var state_val_6043 = (state_6042[(1)]);
if((state_val_6043 === (1))){
var inst_6035 = solo.spa.sysprops.clear_property.call(null,name);
var state_6042__$1 = state_6042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6042__$1,(2),inst_6035);
} else {
if((state_val_6043 === (2))){
var inst_6037 = (state_6042[(2)]);
var inst_6038 = update_state_BANG_.call(null);
var state_6042__$1 = (function (){var statearr_6044 = state_6042;
(statearr_6044[(7)] = inst_6037);

return statearr_6044;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6042__$1,(3),inst_6038);
} else {
if((state_val_6043 === (3))){
var inst_6040 = (state_6042[(2)]);
var state_6042__$1 = state_6042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6042__$1,inst_6040);
} else {
return null;
}
}
}
});})(s__5992__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
;
return ((function (s__5992__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function() {
var solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__ = null;
var solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____0 = (function (){
var statearr_6045 = [null,null,null,null,null,null,null,null];
(statearr_6045[(0)] = solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__);

(statearr_6045[(1)] = (1));

return statearr_6045;
});
var solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____1 = (function (state_6042){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_6042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e6046){if((e6046 instanceof Object)){
var ex__3640__auto__ = e6046;
var statearr_6047_6077 = state_6042;
(statearr_6047_6077[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6078 = state_6042;
state_6042 = G__6078;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__ = function(state_6042){
switch(arguments.length){
case 0:
return solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____1.call(this,state_6042);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____0;
solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____1;
return solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__;
})()
;})(s__5992__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
})();
var state__3726__auto__ = (function (){var statearr_6048 = f__3725__auto__.call(null);
(statearr_6048[(6)] = c__3724__auto__);

return statearr_6048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(s__5992__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
);

return c__3724__auto__;
});})(s__5992__$1,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((((!(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (create_flag)))) && (!(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"selected-name","selected-name",204491772).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"EDIT",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__5992__$1,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-value","property-value",1516163307),value);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-name","property-name",-1399851434),name);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"update","update",1045576396));
});})(s__5992__$1,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null):null),((((create_flag) || (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),value,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (s__5992__$1,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (p1__5978_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-value","property-value",1516163307),p1__5978_SHARP_.target.value);
});})(s__5992__$1,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"OK",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__5992__$1,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (s__5992__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (s__5992__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (state_6061){
var state_val_6062 = (state_6061[(1)]);
if((state_val_6062 === (1))){
var inst_6049 = cljs.core.deref.call(null,state);
var inst_6050 = new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(inst_6049);
var inst_6051 = cljs.core.deref.call(null,state);
var inst_6052 = new cljs.core.Keyword(null,"property-value","property-value",1516163307).cljs$core$IFn$_invoke$arity$1(inst_6051);
var inst_6053 = solo.spa.sysprops.set_property.call(null,inst_6050,inst_6052);
var state_6061__$1 = state_6061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6061__$1,(2),inst_6053);
} else {
if((state_val_6062 === (2))){
var inst_6055 = (state_6061[(2)]);
var inst_6056 = update_state_BANG_.call(null);
var state_6061__$1 = (function (){var statearr_6063 = state_6061;
(statearr_6063[(7)] = inst_6055);

return statearr_6063;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6061__$1,(3),inst_6056);
} else {
if((state_val_6062 === (3))){
var inst_6058 = (state_6061[(2)]);
var inst_6059 = cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"mode","mode",654403691));
var state_6061__$1 = (function (){var statearr_6064 = state_6061;
(statearr_6064[(8)] = inst_6058);

return statearr_6064;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6061__$1,inst_6059);
} else {
return null;
}
}
}
});})(s__5992__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
;
return ((function (s__5992__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function() {
var solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__ = null;
var solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____0 = (function (){
var statearr_6065 = [null,null,null,null,null,null,null,null,null];
(statearr_6065[(0)] = solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__);

(statearr_6065[(1)] = (1));

return statearr_6065;
});
var solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____1 = (function (state_6061){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_6061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e6066){if((e6066 instanceof Object)){
var ex__3640__auto__ = e6066;
var statearr_6067_6079 = state_6061;
(statearr_6067_6079[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6080 = state_6061;
state_6061 = G__6080;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__ = function(state_6061){
switch(arguments.length){
case 0:
return solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____1.call(this,state_6061);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____0;
solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto____1;
return solo$spa$sysprops$sysprops_component_$_iter__5991_$_state_machine__3637__auto__;
})()
;})(s__5992__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
})();
var state__3726__auto__ = (function (){var statearr_6068 = f__3725__auto__.call(null);
(statearr_6068[(6)] = c__3724__auto__);

return statearr_6068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(s__5992__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
);

return c__3724__auto__;
});})(s__5992__$1,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"CANCLE",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__5992__$1,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"mode","mode",654403691));
});})(s__5992__$1,name_reg_ex,value_reg_ex,vec__6032,seq__6033,first__6034,seq__6033__$1,name,first__6034__$1,seq__6033__$2,value,create_flag,s__5992__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null)], null):value)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),((create_flag)?create_flag:["foo",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''))], null)),solo$spa$sysprops$sysprops_component_$_iter__5991.call(null,cljs.core.rest.call(null,s__5992__$2)));
} else {
var G__6081 = cljs.core.rest.call(null,s__5992__$2);
s__5992__$1 = G__6081;
continue;
}
}
} else {
return null;
}
break;
}
});})(state,update_state_BANG_))
,null,null));
});})(state,update_state_BANG_))
;
return iter__4292__auto__.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))?cljs.core.conj.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","bar"], null)):new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
})()], null)], null);
});
;})(state,update_state_BANG_))
});

//# sourceMappingURL=sysprops.js.map?rel=1532546388960
