// Compiled by ClojureScript 1.10.238 {}
goog.provide('solo.spa.sysprops');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('cljs_http.client');
solo.spa.sysprops.initial_focus = cljs.core.with_meta.call(null,cljs.core.identity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (p1__5905_SHARP_){
return reagent.core.dom_node.call(null,p1__5905_SHARP_).focus();
})], null));
/**
 * Asynchronuously evaluates `source-string` in the backend JVM via
 *   web-service `POST ws/eval/` (see `solo.spa/eval-string`).
 */
solo.spa.sysprops.eval_in_backend = (function solo$spa$sysprops$eval_in_backend(source_string){
var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto__){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto__){
return (function (state_5917){
var state_val_5918 = (state_5917[(1)]);
if((state_val_5918 === (1))){
var inst_5906 = [new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_5907 = [new cljs.core.Keyword(null,"eval","eval",-1103567905)];
var inst_5908 = [source_string];
var inst_5909 = cljs.core.PersistentHashMap.fromArrays(inst_5907,inst_5908);
var inst_5910 = [inst_5909];
var inst_5911 = cljs.core.PersistentHashMap.fromArrays(inst_5906,inst_5910);
var inst_5912 = cljs_http.client.post.call(null,"ws/eval/",inst_5911);
var state_5917__$1 = state_5917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5917__$1,(2),inst_5912);
} else {
if((state_val_5918 === (2))){
var inst_5914 = (state_5917[(2)]);
var inst_5915 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_5914);
var state_5917__$1 = state_5917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5917__$1,inst_5915);
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
var statearr_5919 = [null,null,null,null,null,null,null];
(statearr_5919[(0)] = solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto__);

(statearr_5919[(1)] = (1));

return statearr_5919;
});
var solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto____1 = (function (state_5917){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_5917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e5920){if((e5920 instanceof Object)){
var ex__3640__auto__ = e5920;
var statearr_5921_5923 = state_5917;
(statearr_5921_5923[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5924 = state_5917;
state_5917 = G__5924;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto__ = function(state_5917){
switch(arguments.length){
case 0:
return solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto____1.call(this,state_5917);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto____0;
solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto____1;
return solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto__))
})();
var state__3726__auto__ = (function (){var statearr_5922 = f__3725__auto__.call(null);
(statearr_5922[(6)] = c__3724__auto__);

return statearr_5922;
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
}catch (e5925){var t = e5925;
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
return (function (state_5935){
var state_val_5936 = (state_5935[(1)]);
if((state_val_5936 === (1))){
var inst_5927 = (function (){return ((function (state_val_5936,c__3724__auto__){
return (function (p__5926){
var vec__5937 = p__5926;
var k = cljs.core.nth.call(null,vec__5937,(0),null);
var v = cljs.core.nth.call(null,vec__5937,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((k instanceof cljs.core.Keyword))?cljs.core.name.call(null,k):k),v], null);
});
;})(state_val_5936,c__3724__auto__))
})();
var inst_5928 = solo.spa.sysprops.eval_in_backend.call(null,"(System/getProperties)");
var state_5935__$1 = (function (){var statearr_5940 = state_5935;
(statearr_5940[(7)] = inst_5927);

return statearr_5940;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5935__$1,(2),inst_5928);
} else {
if((state_val_5936 === (2))){
var inst_5927 = (state_5935[(7)]);
var inst_5930 = (state_5935[(2)]);
var inst_5931 = cljs.core.first.call(null,inst_5930);
var inst_5932 = cljs.core.map.call(null,inst_5927,inst_5931);
var inst_5933 = cljs.core.sort_by.call(null,cljs.core.first,inst_5932);
var state_5935__$1 = state_5935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5935__$1,inst_5933);
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
var statearr_5941 = [null,null,null,null,null,null,null,null];
(statearr_5941[(0)] = solo$spa$sysprops$get_properties_$_state_machine__3637__auto__);

(statearr_5941[(1)] = (1));

return statearr_5941;
});
var solo$spa$sysprops$get_properties_$_state_machine__3637__auto____1 = (function (state_5935){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_5935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e5942){if((e5942 instanceof Object)){
var ex__3640__auto__ = e5942;
var statearr_5943_5945 = state_5935;
(statearr_5943_5945[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5946 = state_5935;
state_5935 = G__5946;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$get_properties_$_state_machine__3637__auto__ = function(state_5935){
switch(arguments.length){
case 0:
return solo$spa$sysprops$get_properties_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$get_properties_$_state_machine__3637__auto____1.call(this,state_5935);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$get_properties_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$get_properties_$_state_machine__3637__auto____0;
solo$spa$sysprops$get_properties_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$get_properties_$_state_machine__3637__auto____1;
return solo$spa$sysprops$get_properties_$_state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto__))
})();
var state__3726__auto__ = (function (){var statearr_5944 = f__3725__auto__.call(null);
(statearr_5944[(6)] = c__3724__auto__);

return statearr_5944;
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
return (function (state_5954){
var state_val_5955 = (state_5954[(1)]);
if((state_val_5955 === (1))){
var inst_5947 = cljs.core.pr_str.call(null,name);
var inst_5948 = cljs.core.pr_str.call(null,value);
var inst_5949 = ["(System/setProperty ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_5947)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_5948),")"].join('');
var inst_5950 = solo.spa.sysprops.eval_in_backend.call(null,inst_5949);
var state_5954__$1 = state_5954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5954__$1,(2),inst_5950);
} else {
if((state_val_5955 === (2))){
var inst_5952 = (state_5954[(2)]);
var state_5954__$1 = state_5954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5954__$1,inst_5952);
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
var statearr_5956 = [null,null,null,null,null,null,null];
(statearr_5956[(0)] = solo$spa$sysprops$set_property_$_state_machine__3637__auto__);

(statearr_5956[(1)] = (1));

return statearr_5956;
});
var solo$spa$sysprops$set_property_$_state_machine__3637__auto____1 = (function (state_5954){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_5954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e5957){if((e5957 instanceof Object)){
var ex__3640__auto__ = e5957;
var statearr_5958_5960 = state_5954;
(statearr_5958_5960[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5961 = state_5954;
state_5954 = G__5961;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$set_property_$_state_machine__3637__auto__ = function(state_5954){
switch(arguments.length){
case 0:
return solo$spa$sysprops$set_property_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$set_property_$_state_machine__3637__auto____1.call(this,state_5954);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$set_property_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$set_property_$_state_machine__3637__auto____0;
solo$spa$sysprops$set_property_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$set_property_$_state_machine__3637__auto____1;
return solo$spa$sysprops$set_property_$_state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto__))
})();
var state__3726__auto__ = (function (){var statearr_5959 = f__3725__auto__.call(null);
(statearr_5959[(6)] = c__3724__auto__);

return statearr_5959;
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
return (function (state_5968){
var state_val_5969 = (state_5968[(1)]);
if((state_val_5969 === (1))){
var inst_5962 = cljs.core.pr_str.call(null,name);
var inst_5963 = ["(System/clearProperty ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_5962),")"].join('');
var inst_5964 = solo.spa.sysprops.eval_in_backend.call(null,inst_5963);
var state_5968__$1 = state_5968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5968__$1,(2),inst_5964);
} else {
if((state_val_5969 === (2))){
var inst_5966 = (state_5968[(2)]);
var state_5968__$1 = state_5968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5968__$1,inst_5966);
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
var statearr_5970 = [null,null,null,null,null,null,null];
(statearr_5970[(0)] = solo$spa$sysprops$clear_property_$_state_machine__3637__auto__);

(statearr_5970[(1)] = (1));

return statearr_5970;
});
var solo$spa$sysprops$clear_property_$_state_machine__3637__auto____1 = (function (state_5968){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_5968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e5971){if((e5971 instanceof Object)){
var ex__3640__auto__ = e5971;
var statearr_5972_5974 = state_5968;
(statearr_5972_5974[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5975 = state_5968;
state_5968 = G__5975;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$clear_property_$_state_machine__3637__auto__ = function(state_5968){
switch(arguments.length){
case 0:
return solo$spa$sysprops$clear_property_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$clear_property_$_state_machine__3637__auto____1.call(this,state_5968);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$clear_property_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$clear_property_$_state_machine__3637__auto____0;
solo$spa$sysprops$clear_property_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$clear_property_$_state_machine__3637__auto____1;
return solo$spa$sysprops$clear_property_$_state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto__))
})();
var state__3726__auto__ = (function (){var statearr_5973 = f__3725__auto__.call(null);
(statearr_5973[(6)] = c__3724__auto__);

return statearr_5973;
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
return (function (state_5986){
var state_val_5987 = (state_5986[(1)]);
if((state_val_5987 === (1))){
var inst_5981 = solo.spa.sysprops.get_properties.call(null);
var state_5986__$1 = state_5986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5986__$1,(2),inst_5981);
} else {
if((state_val_5987 === (2))){
var inst_5983 = (state_5986[(2)]);
var inst_5984 = cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),inst_5983);
var state_5986__$1 = state_5986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5986__$1,inst_5984);
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
var statearr_5988 = [null,null,null,null,null,null,null];
(statearr_5988[(0)] = solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto__);

(statearr_5988[(1)] = (1));

return statearr_5988;
});
var solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto____1 = (function (state_5986){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_5986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e5989){if((e5989 instanceof Object)){
var ex__3640__auto__ = e5989;
var statearr_5990_6070 = state_5986;
(statearr_5990_6070[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6071 = state_5986;
state_5986 = G__6071;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto__ = function(state_5986){
switch(arguments.length){
case 0:
return solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto____1.call(this,state_5986);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto____0;
solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto____1;
return solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto__,state))
})();
var state__3726__auto__ = (function (){var statearr_5991 = f__3725__auto__.call(null);
(statearr_5991[(6)] = c__3724__auto__);

return statearr_5991;
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"PROPERTY",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [solo.spa.sysprops.initial_focus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"RELOAD",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (state,update_state_BANG_){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"mode","mode",654403691));

return update_state_BANG_.call(null);
});})(state,update_state_BANG_))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"ADD",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (state,update_state_BANG_){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"create","create",-1301499256));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-name","property-name",-1399851434),"");

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-value","property-value",1516163307),"");
});})(state,update_state_BANG_))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>input","div>input",844443481),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"re-find-filter name",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (state,update_state_BANG_){
return (function (p1__5976_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"filter-names-reg-ex","filter-names-reg-ex",-1380802702),p1__5976_SHARP_.target.value);
});})(state,update_state_BANG_))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"VALUE",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"re-find-filter value",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (state,update_state_BANG_){
return (function (p1__5977_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"filter-values-reg-ex","filter-values-reg-ex",877907692),p1__5977_SHARP_.target.value);
});})(state,update_state_BANG_))
], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (state,update_state_BANG_){
return (function solo$spa$sysprops$sysprops_component_$_iter__5992(s__5993){
return (new cljs.core.LazySeq(null,((function (state,update_state_BANG_){
return (function (){
var s__5993__$1 = s__5993;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__5993__$1);
if(temp__4657__auto__){
var s__5993__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5993__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__5993__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__5995 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__5994 = (0);
while(true){
if((i__5994 < size__4291__auto__)){
var vec__5996 = cljs.core._nth.call(null,c__4290__auto__,i__5994);
var seq__5997 = cljs.core.seq.call(null,vec__5996);
var first__5998 = cljs.core.first.call(null,seq__5997);
var seq__5997__$1 = cljs.core.next.call(null,seq__5997);
var name = first__5998;
var first__5998__$1 = cljs.core.first.call(null,seq__5997__$1);
var seq__5997__$2 = cljs.core.next.call(null,seq__5997__$1);
var value = first__5998__$1;
var create_flag = seq__5997__$2;
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
cljs.core.chunk_append.call(null,b__5995,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__5994,s__5993__$1,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-name","selected-name",204491772),name);
});})(i__5994,s__5993__$1,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((create_flag)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"new property name",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__5994,s__5993__$1,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (p1__5978_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-name","property-name",-1399851434),p1__5978_SHARP_.target.value);
});})(i__5994,s__5993__$1,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null)], null):name),((((cljs.core.not.call(null,create_flag)) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"selected-name","selected-name",204491772).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"REMOVE!",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__5994,s__5993__$1,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (i__5994,s__5993__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (i__5994,s__5993__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (state_6006){
var state_val_6007 = (state_6006[(1)]);
if((state_val_6007 === (1))){
var inst_5999 = solo.spa.sysprops.clear_property.call(null,name);
var state_6006__$1 = state_6006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6006__$1,(2),inst_5999);
} else {
if((state_val_6007 === (2))){
var inst_6001 = (state_6006[(2)]);
var inst_6002 = update_state_BANG_.call(null);
var state_6006__$1 = (function (){var statearr_6008 = state_6006;
(statearr_6008[(7)] = inst_6001);

return statearr_6008;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6006__$1,(3),inst_6002);
} else {
if((state_val_6007 === (3))){
var inst_6004 = (state_6006[(2)]);
var state_6006__$1 = state_6006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6006__$1,inst_6004);
} else {
return null;
}
}
}
});})(i__5994,s__5993__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
;
return ((function (i__5994,s__5993__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function() {
var solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__ = null;
var solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____0 = (function (){
var statearr_6009 = [null,null,null,null,null,null,null,null];
(statearr_6009[(0)] = solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__);

(statearr_6009[(1)] = (1));

return statearr_6009;
});
var solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____1 = (function (state_6006){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_6006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e6010){if((e6010 instanceof Object)){
var ex__3640__auto__ = e6010;
var statearr_6011_6072 = state_6006;
(statearr_6011_6072[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6073 = state_6006;
state_6006 = G__6073;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__ = function(state_6006){
switch(arguments.length){
case 0:
return solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____1.call(this,state_6006);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____0;
solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____1;
return solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__;
})()
;})(i__5994,s__5993__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
})();
var state__3726__auto__ = (function (){var statearr_6012 = f__3725__auto__.call(null);
(statearr_6012[(6)] = c__3724__auto__);

return statearr_6012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(i__5994,s__5993__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
);

return c__3724__auto__;
});})(i__5994,s__5993__$1,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((((!(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (create_flag)))) && (!(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"selected-name","selected-name",204491772).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"EDIT",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__5994,s__5993__$1,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-value","property-value",1516163307),value);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-name","property-name",-1399851434),name);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"update","update",1045576396));
});})(i__5994,s__5993__$1,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null):null),((((create_flag) || (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),value,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__5994,s__5993__$1,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (p1__5979_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-value","property-value",1516163307),p1__5979_SHARP_.target.value);
});})(i__5994,s__5993__$1,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"OK",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__5994,s__5993__$1,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (i__5994,s__5993__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (i__5994,s__5993__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (state_6025){
var state_val_6026 = (state_6025[(1)]);
if((state_val_6026 === (1))){
var inst_6013 = cljs.core.deref.call(null,state);
var inst_6014 = new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(inst_6013);
var inst_6015 = cljs.core.deref.call(null,state);
var inst_6016 = new cljs.core.Keyword(null,"property-value","property-value",1516163307).cljs$core$IFn$_invoke$arity$1(inst_6015);
var inst_6017 = solo.spa.sysprops.set_property.call(null,inst_6014,inst_6016);
var state_6025__$1 = state_6025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6025__$1,(2),inst_6017);
} else {
if((state_val_6026 === (2))){
var inst_6019 = (state_6025[(2)]);
var inst_6020 = update_state_BANG_.call(null);
var state_6025__$1 = (function (){var statearr_6027 = state_6025;
(statearr_6027[(7)] = inst_6019);

return statearr_6027;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6025__$1,(3),inst_6020);
} else {
if((state_val_6026 === (3))){
var inst_6022 = (state_6025[(2)]);
var inst_6023 = cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"mode","mode",654403691));
var state_6025__$1 = (function (){var statearr_6028 = state_6025;
(statearr_6028[(8)] = inst_6022);

return statearr_6028;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6025__$1,inst_6023);
} else {
return null;
}
}
}
});})(i__5994,s__5993__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
;
return ((function (i__5994,s__5993__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function() {
var solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__ = null;
var solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____0 = (function (){
var statearr_6029 = [null,null,null,null,null,null,null,null,null];
(statearr_6029[(0)] = solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__);

(statearr_6029[(1)] = (1));

return statearr_6029;
});
var solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____1 = (function (state_6025){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_6025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e6030){if((e6030 instanceof Object)){
var ex__3640__auto__ = e6030;
var statearr_6031_6074 = state_6025;
(statearr_6031_6074[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6075 = state_6025;
state_6025 = G__6075;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__ = function(state_6025){
switch(arguments.length){
case 0:
return solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____1.call(this,state_6025);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____0;
solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____1;
return solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__;
})()
;})(i__5994,s__5993__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
})();
var state__3726__auto__ = (function (){var statearr_6032 = f__3725__auto__.call(null);
(statearr_6032[(6)] = c__3724__auto__);

return statearr_6032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(i__5994,s__5993__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
);

return c__3724__auto__;
});})(i__5994,s__5993__$1,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"CANCLE",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__5994,s__5993__$1,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"mode","mode",654403691));
});})(i__5994,s__5993__$1,name_reg_ex,value_reg_ex,vec__5996,seq__5997,first__5998,seq__5997__$1,name,first__5998__$1,seq__5997__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5995,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null)], null):value)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),((create_flag)?create_flag:["foo",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''))], null)));

var G__6076 = (i__5994 + (1));
i__5994 = G__6076;
continue;
} else {
var G__6077 = (i__5994 + (1));
i__5994 = G__6077;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5995),solo$spa$sysprops$sysprops_component_$_iter__5992.call(null,cljs.core.chunk_rest.call(null,s__5993__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5995),null);
}
} else {
var vec__6033 = cljs.core.first.call(null,s__5993__$2);
var seq__6034 = cljs.core.seq.call(null,vec__6033);
var first__6035 = cljs.core.first.call(null,seq__6034);
var seq__6034__$1 = cljs.core.next.call(null,seq__6034);
var name = first__6035;
var first__6035__$1 = cljs.core.first.call(null,seq__6034__$1);
var seq__6034__$2 = cljs.core.next.call(null,seq__6034__$1);
var value = first__6035__$1;
var create_flag = seq__6034__$2;
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
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (s__5993__$1,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-name","selected-name",204491772),name);
});})(s__5993__$1,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((create_flag)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"new property name",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (s__5993__$1,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (p1__5978_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-name","property-name",-1399851434),p1__5978_SHARP_.target.value);
});})(s__5993__$1,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null)], null):name),((((cljs.core.not.call(null,create_flag)) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"selected-name","selected-name",204491772).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"REMOVE!",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__5993__$1,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (s__5993__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (s__5993__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (state_6043){
var state_val_6044 = (state_6043[(1)]);
if((state_val_6044 === (1))){
var inst_6036 = solo.spa.sysprops.clear_property.call(null,name);
var state_6043__$1 = state_6043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6043__$1,(2),inst_6036);
} else {
if((state_val_6044 === (2))){
var inst_6038 = (state_6043[(2)]);
var inst_6039 = update_state_BANG_.call(null);
var state_6043__$1 = (function (){var statearr_6045 = state_6043;
(statearr_6045[(7)] = inst_6038);

return statearr_6045;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6043__$1,(3),inst_6039);
} else {
if((state_val_6044 === (3))){
var inst_6041 = (state_6043[(2)]);
var state_6043__$1 = state_6043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6043__$1,inst_6041);
} else {
return null;
}
}
}
});})(s__5993__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
;
return ((function (s__5993__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function() {
var solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__ = null;
var solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____0 = (function (){
var statearr_6046 = [null,null,null,null,null,null,null,null];
(statearr_6046[(0)] = solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__);

(statearr_6046[(1)] = (1));

return statearr_6046;
});
var solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____1 = (function (state_6043){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_6043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e6047){if((e6047 instanceof Object)){
var ex__3640__auto__ = e6047;
var statearr_6048_6078 = state_6043;
(statearr_6048_6078[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6079 = state_6043;
state_6043 = G__6079;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__ = function(state_6043){
switch(arguments.length){
case 0:
return solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____1.call(this,state_6043);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____0;
solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____1;
return solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__;
})()
;})(s__5993__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
})();
var state__3726__auto__ = (function (){var statearr_6049 = f__3725__auto__.call(null);
(statearr_6049[(6)] = c__3724__auto__);

return statearr_6049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(s__5993__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
);

return c__3724__auto__;
});})(s__5993__$1,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((((!(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (create_flag)))) && (!(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"selected-name","selected-name",204491772).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"EDIT",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__5993__$1,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-value","property-value",1516163307),value);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-name","property-name",-1399851434),name);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"update","update",1045576396));
});})(s__5993__$1,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null):null),((((create_flag) || (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),value,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (s__5993__$1,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (p1__5979_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-value","property-value",1516163307),p1__5979_SHARP_.target.value);
});})(s__5993__$1,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"OK",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__5993__$1,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (s__5993__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (s__5993__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (state_6062){
var state_val_6063 = (state_6062[(1)]);
if((state_val_6063 === (1))){
var inst_6050 = cljs.core.deref.call(null,state);
var inst_6051 = new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(inst_6050);
var inst_6052 = cljs.core.deref.call(null,state);
var inst_6053 = new cljs.core.Keyword(null,"property-value","property-value",1516163307).cljs$core$IFn$_invoke$arity$1(inst_6052);
var inst_6054 = solo.spa.sysprops.set_property.call(null,inst_6051,inst_6053);
var state_6062__$1 = state_6062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6062__$1,(2),inst_6054);
} else {
if((state_val_6063 === (2))){
var inst_6056 = (state_6062[(2)]);
var inst_6057 = update_state_BANG_.call(null);
var state_6062__$1 = (function (){var statearr_6064 = state_6062;
(statearr_6064[(7)] = inst_6056);

return statearr_6064;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6062__$1,(3),inst_6057);
} else {
if((state_val_6063 === (3))){
var inst_6059 = (state_6062[(2)]);
var inst_6060 = cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"mode","mode",654403691));
var state_6062__$1 = (function (){var statearr_6065 = state_6062;
(statearr_6065[(8)] = inst_6059);

return statearr_6065;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6062__$1,inst_6060);
} else {
return null;
}
}
}
});})(s__5993__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
;
return ((function (s__5993__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function() {
var solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__ = null;
var solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____0 = (function (){
var statearr_6066 = [null,null,null,null,null,null,null,null,null];
(statearr_6066[(0)] = solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__);

(statearr_6066[(1)] = (1));

return statearr_6066;
});
var solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____1 = (function (state_6062){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_6062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e6067){if((e6067 instanceof Object)){
var ex__3640__auto__ = e6067;
var statearr_6068_6080 = state_6062;
(statearr_6068_6080[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6081 = state_6062;
state_6062 = G__6081;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__ = function(state_6062){
switch(arguments.length){
case 0:
return solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____1.call(this,state_6062);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____0;
solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto____1;
return solo$spa$sysprops$sysprops_component_$_iter__5992_$_state_machine__3637__auto__;
})()
;})(s__5993__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
})();
var state__3726__auto__ = (function (){var statearr_6069 = f__3725__auto__.call(null);
(statearr_6069[(6)] = c__3724__auto__);

return statearr_6069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(s__5993__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
);

return c__3724__auto__;
});})(s__5993__$1,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"CANCLE",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__5993__$1,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"mode","mode",654403691));
});})(s__5993__$1,name_reg_ex,value_reg_ex,vec__6033,seq__6034,first__6035,seq__6034__$1,name,first__6035__$1,seq__6034__$2,value,create_flag,s__5993__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null)], null):value)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),((create_flag)?create_flag:["foo",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''))], null)),solo$spa$sysprops$sysprops_component_$_iter__5992.call(null,cljs.core.rest.call(null,s__5993__$2)));
} else {
var G__6082 = cljs.core.rest.call(null,s__5993__$2);
s__5993__$1 = G__6082;
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
})())], null)], null);
});
;})(state,update_state_BANG_))
});

//# sourceMappingURL=sysprops.js.map?rel=1532642755521
