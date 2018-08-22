// Compiled by ClojureScript 1.10.238 {}
goog.provide('solo.spa.sysprops');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('solo.spa.focus');
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
return (function (state_5921){
var state_val_5922 = (state_5921[(1)]);
if((state_val_5922 === (1))){
var inst_5910 = [new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_5911 = [new cljs.core.Keyword(null,"eval","eval",-1103567905)];
var inst_5912 = [source_string];
var inst_5913 = cljs.core.PersistentHashMap.fromArrays(inst_5911,inst_5912);
var inst_5914 = [inst_5913];
var inst_5915 = cljs.core.PersistentHashMap.fromArrays(inst_5910,inst_5914);
var inst_5916 = cljs_http.client.post.call(null,"ws/eval/",inst_5915);
var state_5921__$1 = state_5921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5921__$1,(2),inst_5916);
} else {
if((state_val_5922 === (2))){
var inst_5918 = (state_5921[(2)]);
var inst_5919 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_5918);
var state_5921__$1 = state_5921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5921__$1,inst_5919);
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
var statearr_5923 = [null,null,null,null,null,null,null];
(statearr_5923[(0)] = solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto__);

(statearr_5923[(1)] = (1));

return statearr_5923;
});
var solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto____1 = (function (state_5921){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_5921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e5924){if((e5924 instanceof Object)){
var ex__3640__auto__ = e5924;
var statearr_5925_5927 = state_5921;
(statearr_5925_5927[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5928 = state_5921;
state_5921 = G__5928;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto__ = function(state_5921){
switch(arguments.length){
case 0:
return solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto____1.call(this,state_5921);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto____0;
solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto____1;
return solo$spa$sysprops$eval_in_backend_$_state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto__))
})();
var state__3726__auto__ = (function (){var statearr_5926 = f__3725__auto__.call(null);
(statearr_5926[(6)] = c__3724__auto__);

return statearr_5926;
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
}catch (e5929){var t = e5929;
return /.*/;
}});
/**
 * Returns the system properties of the JVM backend as a `[name
 *   value]`-seq (both strings) ordered on `name`.
 */
solo.spa.sysprops.get_properties = (function solo$spa$sysprops$get_properties(){
var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto__){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto__){
return (function (state_5939){
var state_val_5940 = (state_5939[(1)]);
if((state_val_5940 === (1))){
var inst_5931 = (function (){return ((function (state_val_5940,c__3724__auto__){
return (function (p__5930){
var vec__5941 = p__5930;
var k = cljs.core.nth.call(null,vec__5941,(0),null);
var v = cljs.core.nth.call(null,vec__5941,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((k instanceof cljs.core.Keyword))?cljs.core.name.call(null,k):k),v], null);
});
;})(state_val_5940,c__3724__auto__))
})();
var inst_5932 = solo.spa.sysprops.eval_in_backend.call(null,"(System/getProperties)");
var state_5939__$1 = (function (){var statearr_5944 = state_5939;
(statearr_5944[(7)] = inst_5931);

return statearr_5944;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5939__$1,(2),inst_5932);
} else {
if((state_val_5940 === (2))){
var inst_5931 = (state_5939[(7)]);
var inst_5934 = (state_5939[(2)]);
var inst_5935 = cljs.core.first.call(null,inst_5934);
var inst_5936 = cljs.core.map.call(null,inst_5931,inst_5935);
var inst_5937 = cljs.core.sort_by.call(null,cljs.core.first,inst_5936);
var state_5939__$1 = state_5939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5939__$1,inst_5937);
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
var statearr_5945 = [null,null,null,null,null,null,null,null];
(statearr_5945[(0)] = solo$spa$sysprops$get_properties_$_state_machine__3637__auto__);

(statearr_5945[(1)] = (1));

return statearr_5945;
});
var solo$spa$sysprops$get_properties_$_state_machine__3637__auto____1 = (function (state_5939){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_5939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e5946){if((e5946 instanceof Object)){
var ex__3640__auto__ = e5946;
var statearr_5947_5949 = state_5939;
(statearr_5947_5949[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5950 = state_5939;
state_5939 = G__5950;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$get_properties_$_state_machine__3637__auto__ = function(state_5939){
switch(arguments.length){
case 0:
return solo$spa$sysprops$get_properties_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$get_properties_$_state_machine__3637__auto____1.call(this,state_5939);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$get_properties_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$get_properties_$_state_machine__3637__auto____0;
solo$spa$sysprops$get_properties_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$get_properties_$_state_machine__3637__auto____1;
return solo$spa$sysprops$get_properties_$_state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto__))
})();
var state__3726__auto__ = (function (){var statearr_5948 = f__3725__auto__.call(null);
(statearr_5948[(6)] = c__3724__auto__);

return statearr_5948;
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
return (function (state_5958){
var state_val_5959 = (state_5958[(1)]);
if((state_val_5959 === (1))){
var inst_5951 = cljs.core.pr_str.call(null,name);
var inst_5952 = cljs.core.pr_str.call(null,value);
var inst_5953 = ["(System/setProperty ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_5951)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_5952),")"].join('');
var inst_5954 = solo.spa.sysprops.eval_in_backend.call(null,inst_5953);
var state_5958__$1 = state_5958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5958__$1,(2),inst_5954);
} else {
if((state_val_5959 === (2))){
var inst_5956 = (state_5958[(2)]);
var state_5958__$1 = state_5958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5958__$1,inst_5956);
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
var statearr_5960 = [null,null,null,null,null,null,null];
(statearr_5960[(0)] = solo$spa$sysprops$set_property_$_state_machine__3637__auto__);

(statearr_5960[(1)] = (1));

return statearr_5960;
});
var solo$spa$sysprops$set_property_$_state_machine__3637__auto____1 = (function (state_5958){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_5958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e5961){if((e5961 instanceof Object)){
var ex__3640__auto__ = e5961;
var statearr_5962_5964 = state_5958;
(statearr_5962_5964[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5965 = state_5958;
state_5958 = G__5965;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$set_property_$_state_machine__3637__auto__ = function(state_5958){
switch(arguments.length){
case 0:
return solo$spa$sysprops$set_property_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$set_property_$_state_machine__3637__auto____1.call(this,state_5958);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$set_property_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$set_property_$_state_machine__3637__auto____0;
solo$spa$sysprops$set_property_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$set_property_$_state_machine__3637__auto____1;
return solo$spa$sysprops$set_property_$_state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto__))
})();
var state__3726__auto__ = (function (){var statearr_5963 = f__3725__auto__.call(null);
(statearr_5963[(6)] = c__3724__auto__);

return statearr_5963;
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
return (function (state_5972){
var state_val_5973 = (state_5972[(1)]);
if((state_val_5973 === (1))){
var inst_5966 = cljs.core.pr_str.call(null,name);
var inst_5967 = ["(System/clearProperty ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_5966),")"].join('');
var inst_5968 = solo.spa.sysprops.eval_in_backend.call(null,inst_5967);
var state_5972__$1 = state_5972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5972__$1,(2),inst_5968);
} else {
if((state_val_5973 === (2))){
var inst_5970 = (state_5972[(2)]);
var state_5972__$1 = state_5972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5972__$1,inst_5970);
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
var statearr_5974 = [null,null,null,null,null,null,null];
(statearr_5974[(0)] = solo$spa$sysprops$clear_property_$_state_machine__3637__auto__);

(statearr_5974[(1)] = (1));

return statearr_5974;
});
var solo$spa$sysprops$clear_property_$_state_machine__3637__auto____1 = (function (state_5972){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_5972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e5975){if((e5975 instanceof Object)){
var ex__3640__auto__ = e5975;
var statearr_5976_5978 = state_5972;
(statearr_5976_5978[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5979 = state_5972;
state_5972 = G__5979;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$clear_property_$_state_machine__3637__auto__ = function(state_5972){
switch(arguments.length){
case 0:
return solo$spa$sysprops$clear_property_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$clear_property_$_state_machine__3637__auto____1.call(this,state_5972);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$clear_property_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$clear_property_$_state_machine__3637__auto____0;
solo$spa$sysprops$clear_property_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$clear_property_$_state_machine__3637__auto____1;
return solo$spa$sysprops$clear_property_$_state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto__))
})();
var state__3726__auto__ = (function (){var statearr_5977 = f__3725__auto__.call(null);
(statearr_5977[(6)] = c__3724__auto__);

return statearr_5977;
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
 *   supports re-find-filtering rows by name and value, removing and
 *   changing existing properties and entering new properties (if you
 *   enter an existing property name the current value will be
 *   changed. So it behaves like 'changing an existing property' -- no
 *   error/warning etc. is given to the user). The component puts focus
 *   on sensible HTML elements so that it can be controled via keyboard
 *   easily.
 * 
 *   The component carries its own state (map) with:
 * 
 *   :data                 : sorted/ordered [name value]-seq of system properties
 *   :filter-names-reg-ex  : reg-ex-string for filtering rows by name
 *   :filter-values-reg-ex : reg-ex-string for filtering rows by value
 *   :selected-name        : mouse-over _selects_ a row and sets :selected-name to the row's name/key!
 *   :mode                 : :create : enter a property name and value; :update : change a property's value
 *   :property-name        : property name of row for :create/:update
 *   :property-value       : property value of row for :create/:update
 *   :mode                 : current editing mode: `nil`     : not edting
 *                                              `:create` : adding new property 
 *                                              `:update` : changing existing property
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
return (function (state_5990){
var state_val_5991 = (state_5990[(1)]);
if((state_val_5991 === (1))){
var inst_5985 = solo.spa.sysprops.get_properties.call(null);
var state_5990__$1 = state_5990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5990__$1,(2),inst_5985);
} else {
if((state_val_5991 === (2))){
var inst_5987 = (state_5990[(2)]);
var inst_5988 = cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),inst_5987);
var state_5990__$1 = state_5990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5990__$1,inst_5988);
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
var statearr_5992 = [null,null,null,null,null,null,null];
(statearr_5992[(0)] = solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto__);

(statearr_5992[(1)] = (1));

return statearr_5992;
});
var solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto____1 = (function (state_5990){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_5990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e5993){if((e5993 instanceof Object)){
var ex__3640__auto__ = e5993;
var statearr_5994_6082 = state_5990;
(statearr_5994_6082[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6083 = state_5990;
state_5990 = G__6083;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto__ = function(state_5990){
switch(arguments.length){
case 0:
return solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto____1.call(this,state_5990);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto____0;
solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto____1;
return solo$spa$sysprops$sysprops_component_$_state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto__,state))
})();
var state__3726__auto__ = (function (){var statearr_5995 = f__3725__auto__.call(null);
(statearr_5995[(6)] = c__3724__auto__);

return statearr_5995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto__,state))
);

return c__3724__auto__;
});})(state))
;
update_state_BANG_.call(null);

solo.spa.focus.set_focus.call(null,new cljs.core.Keyword("solo.spa.sysprops","add","solo.spa.sysprops/add",227282247));

return ((function (state,update_state_BANG_){
return (function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"PROPERTY",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"RELOAD",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (state,update_state_BANG_){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"mode","mode",654403691));

return update_state_BANG_.call(null);
});})(state,update_state_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [solo.spa.focus.register_focus_target.call(null,new cljs.core.Keyword("solo.spa.sysprops","add","solo.spa.sysprops/add",227282247)),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"ADD",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (state,update_state_BANG_){
return (function (){
solo.spa.focus.set_focus.call(null,new cljs.core.Keyword("solo.spa.sysprops","property-name","solo.spa.sysprops/property-name",-1376907830));

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"property-name","property-name",-1399851434),"",new cljs.core.Keyword(null,"property-value","property-value",1516163307),"");
});})(state,update_state_BANG_))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>input","div>input",844443481),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"re-find-filter name",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (state,update_state_BANG_){
return (function (p1__5980_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"filter-names-reg-ex","filter-names-reg-ex",-1380802702),p1__5980_SHARP_.target.value);
});})(state,update_state_BANG_))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"VALUE",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"re-find-filter value",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (state,update_state_BANG_){
return (function (p1__5981_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"filter-values-reg-ex","filter-values-reg-ex",877907692),p1__5981_SHARP_.target.value);
});})(state,update_state_BANG_))
], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (state,update_state_BANG_){
return (function solo$spa$sysprops$sysprops_component_$_iter__5996(s__5997){
return (new cljs.core.LazySeq(null,((function (state,update_state_BANG_){
return (function (){
var s__5997__$1 = s__5997;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__5997__$1);
if(temp__4657__auto__){
var s__5997__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5997__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__5997__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__5999 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__5998 = (0);
while(true){
if((i__5998 < size__4291__auto__)){
var vec__6000 = cljs.core._nth.call(null,c__4290__auto__,i__5998);
var seq__6001 = cljs.core.seq.call(null,vec__6000);
var first__6002 = cljs.core.first.call(null,seq__6001);
var seq__6001__$1 = cljs.core.next.call(null,seq__6001);
var name = first__6002;
var first__6002__$1 = cljs.core.first.call(null,seq__6001__$1);
var seq__6001__$2 = cljs.core.next.call(null,seq__6001__$1);
var value = first__6002__$1;
var create_flag = seq__6001__$2;
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
cljs.core.chunk_append.call(null,b__5999,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__5998,s__5997__$1,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-name","selected-name",204491772),name);
});})(i__5998,s__5997__$1,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((create_flag)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [solo.spa.focus.register_focus_target.call(null,new cljs.core.Keyword("solo.spa.sysprops","property-name","solo.spa.sysprops/property-name",-1376907830)),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"new property name",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__5998,s__5997__$1,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (p1__5982_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-name","property-name",-1399851434),p1__5982_SHARP_.target.value);
});})(i__5998,s__5997__$1,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null):name),((((cljs.core.not.call(null,create_flag)) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"selected-name","selected-name",204491772).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"REMOVE!",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__5998,s__5997__$1,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (i__5998,s__5997__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (i__5998,s__5997__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (state_6011){
var state_val_6012 = (state_6011[(1)]);
if((state_val_6012 === (1))){
var inst_6003 = solo.spa.focus.set_focus.call(null,new cljs.core.Keyword("solo.spa.sysprops","add","solo.spa.sysprops/add",227282247));
var inst_6004 = solo.spa.sysprops.clear_property.call(null,name);
var state_6011__$1 = (function (){var statearr_6013 = state_6011;
(statearr_6013[(7)] = inst_6003);

return statearr_6013;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6011__$1,(2),inst_6004);
} else {
if((state_val_6012 === (2))){
var inst_6006 = (state_6011[(2)]);
var inst_6007 = update_state_BANG_.call(null);
var state_6011__$1 = (function (){var statearr_6014 = state_6011;
(statearr_6014[(8)] = inst_6006);

return statearr_6014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6011__$1,(3),inst_6007);
} else {
if((state_val_6012 === (3))){
var inst_6009 = (state_6011[(2)]);
var state_6011__$1 = state_6011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6011__$1,inst_6009);
} else {
return null;
}
}
}
});})(i__5998,s__5997__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
;
return ((function (i__5998,s__5997__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function() {
var solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__ = null;
var solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____0 = (function (){
var statearr_6015 = [null,null,null,null,null,null,null,null,null];
(statearr_6015[(0)] = solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__);

(statearr_6015[(1)] = (1));

return statearr_6015;
});
var solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____1 = (function (state_6011){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_6011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e6016){if((e6016 instanceof Object)){
var ex__3640__auto__ = e6016;
var statearr_6017_6084 = state_6011;
(statearr_6017_6084[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6085 = state_6011;
state_6011 = G__6085;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__ = function(state_6011){
switch(arguments.length){
case 0:
return solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____1.call(this,state_6011);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____0;
solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____1;
return solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__;
})()
;})(i__5998,s__5997__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
})();
var state__3726__auto__ = (function (){var statearr_6018 = f__3725__auto__.call(null);
(statearr_6018[(6)] = c__3724__auto__);

return statearr_6018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(i__5998,s__5997__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
);

return c__3724__auto__;
});})(i__5998,s__5997__$1,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((((!(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (create_flag)))) && (!(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"selected-name","selected-name",204491772).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"EDIT",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__5998,s__5997__$1,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
solo.spa.focus.set_focus.call(null,new cljs.core.Keyword("solo.spa.sysprops","property-value","solo.spa.sysprops/property-value",1518651759));

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-value","property-value",1516163307),value,new cljs.core.Keyword(null,"property-name","property-name",-1399851434),name,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"update","update",1045576396));
});})(i__5998,s__5997__$1,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null):null),((((create_flag) || (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [solo.spa.focus.register_focus_target.call(null,new cljs.core.Keyword("solo.spa.sysprops","property-value","solo.spa.sysprops/property-value",1518651759)),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),value,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__5998,s__5997__$1,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (p1__5983_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-value","property-value",1516163307),p1__5983_SHARP_.target.value);
});})(i__5998,s__5997__$1,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"OK",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__5998,s__5997__$1,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (i__5998,s__5997__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (i__5998,s__5997__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (state_6032){
var state_val_6033 = (state_6032[(1)]);
if((state_val_6033 === (1))){
var inst_6019 = solo.spa.focus.set_focus.call(null,new cljs.core.Keyword("solo.spa.sysprops","add","solo.spa.sysprops/add",227282247));
var inst_6020 = cljs.core.deref.call(null,state);
var inst_6021 = new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(inst_6020);
var inst_6022 = cljs.core.deref.call(null,state);
var inst_6023 = new cljs.core.Keyword(null,"property-value","property-value",1516163307).cljs$core$IFn$_invoke$arity$1(inst_6022);
var inst_6024 = solo.spa.sysprops.set_property.call(null,inst_6021,inst_6023);
var state_6032__$1 = (function (){var statearr_6034 = state_6032;
(statearr_6034[(7)] = inst_6019);

return statearr_6034;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6032__$1,(2),inst_6024);
} else {
if((state_val_6033 === (2))){
var inst_6026 = (state_6032[(2)]);
var inst_6027 = update_state_BANG_.call(null);
var state_6032__$1 = (function (){var statearr_6035 = state_6032;
(statearr_6035[(8)] = inst_6026);

return statearr_6035;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6032__$1,(3),inst_6027);
} else {
if((state_val_6033 === (3))){
var inst_6029 = (state_6032[(2)]);
var inst_6030 = cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"mode","mode",654403691));
var state_6032__$1 = (function (){var statearr_6036 = state_6032;
(statearr_6036[(9)] = inst_6029);

return statearr_6036;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6032__$1,inst_6030);
} else {
return null;
}
}
}
});})(i__5998,s__5997__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
;
return ((function (i__5998,s__5997__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function() {
var solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__ = null;
var solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____0 = (function (){
var statearr_6037 = [null,null,null,null,null,null,null,null,null,null];
(statearr_6037[(0)] = solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__);

(statearr_6037[(1)] = (1));

return statearr_6037;
});
var solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____1 = (function (state_6032){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_6032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e6038){if((e6038 instanceof Object)){
var ex__3640__auto__ = e6038;
var statearr_6039_6086 = state_6032;
(statearr_6039_6086[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6087 = state_6032;
state_6032 = G__6087;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__ = function(state_6032){
switch(arguments.length){
case 0:
return solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____1.call(this,state_6032);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____0;
solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____1;
return solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__;
})()
;})(i__5998,s__5997__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
})();
var state__3726__auto__ = (function (){var statearr_6040 = f__3725__auto__.call(null);
(statearr_6040[(6)] = c__3724__auto__);

return statearr_6040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(i__5998,s__5997__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
);

return c__3724__auto__;
});})(i__5998,s__5997__$1,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"CANCLE",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__5998,s__5997__$1,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
solo.spa.focus.set_focus.call(null,new cljs.core.Keyword("solo.spa.sysprops","add","solo.spa.sysprops/add",227282247));

return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"mode","mode",654403691));
});})(i__5998,s__5997__$1,name_reg_ex,value_reg_ex,vec__6000,seq__6001,first__6002,seq__6001__$1,name,first__6002__$1,seq__6001__$2,value,create_flag,c__4290__auto__,size__4291__auto__,b__5999,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null)], null):value)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),((create_flag)?create_flag:["foo",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''))], null)));

var G__6088 = (i__5998 + (1));
i__5998 = G__6088;
continue;
} else {
var G__6089 = (i__5998 + (1));
i__5998 = G__6089;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5999),solo$spa$sysprops$sysprops_component_$_iter__5996.call(null,cljs.core.chunk_rest.call(null,s__5997__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5999),null);
}
} else {
var vec__6041 = cljs.core.first.call(null,s__5997__$2);
var seq__6042 = cljs.core.seq.call(null,vec__6041);
var first__6043 = cljs.core.first.call(null,seq__6042);
var seq__6042__$1 = cljs.core.next.call(null,seq__6042);
var name = first__6043;
var first__6043__$1 = cljs.core.first.call(null,seq__6042__$1);
var seq__6042__$2 = cljs.core.next.call(null,seq__6042__$1);
var value = first__6043__$1;
var create_flag = seq__6042__$2;
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
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (s__5997__$1,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-name","selected-name",204491772),name);
});})(s__5997__$1,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((create_flag)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [solo.spa.focus.register_focus_target.call(null,new cljs.core.Keyword("solo.spa.sysprops","property-name","solo.spa.sysprops/property-name",-1376907830)),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"new property name",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (s__5997__$1,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (p1__5982_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-name","property-name",-1399851434),p1__5982_SHARP_.target.value);
});})(s__5997__$1,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null):name),((((cljs.core.not.call(null,create_flag)) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"selected-name","selected-name",204491772).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"REMOVE!",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__5997__$1,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (s__5997__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (s__5997__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (state_6052){
var state_val_6053 = (state_6052[(1)]);
if((state_val_6053 === (1))){
var inst_6044 = solo.spa.focus.set_focus.call(null,new cljs.core.Keyword("solo.spa.sysprops","add","solo.spa.sysprops/add",227282247));
var inst_6045 = solo.spa.sysprops.clear_property.call(null,name);
var state_6052__$1 = (function (){var statearr_6054 = state_6052;
(statearr_6054[(7)] = inst_6044);

return statearr_6054;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6052__$1,(2),inst_6045);
} else {
if((state_val_6053 === (2))){
var inst_6047 = (state_6052[(2)]);
var inst_6048 = update_state_BANG_.call(null);
var state_6052__$1 = (function (){var statearr_6055 = state_6052;
(statearr_6055[(8)] = inst_6047);

return statearr_6055;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6052__$1,(3),inst_6048);
} else {
if((state_val_6053 === (3))){
var inst_6050 = (state_6052[(2)]);
var state_6052__$1 = state_6052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6052__$1,inst_6050);
} else {
return null;
}
}
}
});})(s__5997__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
;
return ((function (s__5997__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function() {
var solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__ = null;
var solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____0 = (function (){
var statearr_6056 = [null,null,null,null,null,null,null,null,null];
(statearr_6056[(0)] = solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__);

(statearr_6056[(1)] = (1));

return statearr_6056;
});
var solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____1 = (function (state_6052){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_6052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e6057){if((e6057 instanceof Object)){
var ex__3640__auto__ = e6057;
var statearr_6058_6090 = state_6052;
(statearr_6058_6090[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6091 = state_6052;
state_6052 = G__6091;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__ = function(state_6052){
switch(arguments.length){
case 0:
return solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____1.call(this,state_6052);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____0;
solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____1;
return solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__;
})()
;})(s__5997__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
})();
var state__3726__auto__ = (function (){var statearr_6059 = f__3725__auto__.call(null);
(statearr_6059[(6)] = c__3724__auto__);

return statearr_6059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(s__5997__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
);

return c__3724__auto__;
});})(s__5997__$1,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((((!(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (create_flag)))) && (!(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"selected-name","selected-name",204491772).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"EDIT",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__5997__$1,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
solo.spa.focus.set_focus.call(null,new cljs.core.Keyword("solo.spa.sysprops","property-value","solo.spa.sysprops/property-value",1518651759));

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-value","property-value",1516163307),value,new cljs.core.Keyword(null,"property-name","property-name",-1399851434),name,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"update","update",1045576396));
});})(s__5997__$1,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null):null),((((create_flag) || (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [solo.spa.focus.register_focus_target.call(null,new cljs.core.Keyword("solo.spa.sysprops","property-value","solo.spa.sysprops/property-value",1518651759)),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),value,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (s__5997__$1,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (p1__5983_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"property-value","property-value",1516163307),p1__5983_SHARP_.target.value);
});})(s__5997__$1,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"OK",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__5997__$1,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (s__5997__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (s__5997__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (state_6073){
var state_val_6074 = (state_6073[(1)]);
if((state_val_6074 === (1))){
var inst_6060 = solo.spa.focus.set_focus.call(null,new cljs.core.Keyword("solo.spa.sysprops","add","solo.spa.sysprops/add",227282247));
var inst_6061 = cljs.core.deref.call(null,state);
var inst_6062 = new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(inst_6061);
var inst_6063 = cljs.core.deref.call(null,state);
var inst_6064 = new cljs.core.Keyword(null,"property-value","property-value",1516163307).cljs$core$IFn$_invoke$arity$1(inst_6063);
var inst_6065 = solo.spa.sysprops.set_property.call(null,inst_6062,inst_6064);
var state_6073__$1 = (function (){var statearr_6075 = state_6073;
(statearr_6075[(7)] = inst_6060);

return statearr_6075;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6073__$1,(2),inst_6065);
} else {
if((state_val_6074 === (2))){
var inst_6067 = (state_6073[(2)]);
var inst_6068 = update_state_BANG_.call(null);
var state_6073__$1 = (function (){var statearr_6076 = state_6073;
(statearr_6076[(8)] = inst_6067);

return statearr_6076;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6073__$1,(3),inst_6068);
} else {
if((state_val_6074 === (3))){
var inst_6070 = (state_6073[(2)]);
var inst_6071 = cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"mode","mode",654403691));
var state_6073__$1 = (function (){var statearr_6077 = state_6073;
(statearr_6077[(9)] = inst_6070);

return statearr_6077;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6073__$1,inst_6071);
} else {
return null;
}
}
}
});})(s__5997__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
;
return ((function (s__5997__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function() {
var solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__ = null;
var solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____0 = (function (){
var statearr_6078 = [null,null,null,null,null,null,null,null,null,null];
(statearr_6078[(0)] = solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__);

(statearr_6078[(1)] = (1));

return statearr_6078;
});
var solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____1 = (function (state_6073){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_6073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e6079){if((e6079 instanceof Object)){
var ex__3640__auto__ = e6079;
var statearr_6080_6092 = state_6073;
(statearr_6080_6092[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6093 = state_6073;
state_6073 = G__6093;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__ = function(state_6073){
switch(arguments.length){
case 0:
return solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____0.call(this);
case 1:
return solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____1.call(this,state_6073);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____0;
solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto____1;
return solo$spa$sysprops$sysprops_component_$_iter__5996_$_state_machine__3637__auto__;
})()
;})(s__5997__$1,switch__3636__auto__,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
})();
var state__3726__auto__ = (function (){var statearr_6081 = f__3725__auto__.call(null);
(statearr_6081[(6)] = c__3724__auto__);

return statearr_6081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(s__5997__$1,c__3724__auto__,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
);

return c__3724__auto__;
});})(s__5997__$1,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"CANCLE",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__5997__$1,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_){
return (function (){
solo.spa.focus.set_focus.call(null,new cljs.core.Keyword("solo.spa.sysprops","add","solo.spa.sysprops/add",227282247));

return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"mode","mode",654403691));
});})(s__5997__$1,name_reg_ex,value_reg_ex,vec__6041,seq__6042,first__6043,seq__6042__$1,name,first__6043__$1,seq__6042__$2,value,create_flag,s__5997__$2,temp__4657__auto__,state,update_state_BANG_))
], null)], null)], null):value)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),((create_flag)?create_flag:["foo",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''))], null)),solo$spa$sysprops$sysprops_component_$_iter__5996.call(null,cljs.core.rest.call(null,s__5997__$2)));
} else {
var G__6094 = cljs.core.rest.call(null,s__5997__$2);
s__5997__$1 = G__6094;
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

//# sourceMappingURL=sysprops.js.map?rel=1534957232460
