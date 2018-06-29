// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4657__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__5086){
var vec__5087 = p__5086;
var k = cljs.core.nth.call(null,vec__5087,(0),null);
var v = cljs.core.nth.call(null,vec__5087,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__5090 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__5090)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__5090)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__5090)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__5090)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__5090)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__5090)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5090)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__5091){
var map__5092 = p__5091;
var map__5092__$1 = ((((!((map__5092 == null)))?(((((map__5092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5092):map__5092);
var request = map__5092__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__5092__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__5092__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__5092__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__5094 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__5094,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__5094,response_type);

G__5094.setTimeoutInterval(timeout);

G__5094.setWithCredentials(send_credentials);

return G__5094;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__5095){
var map__5096 = p__5095;
var map__5096__$1 = ((((!((map__5096 == null)))?(((((map__5096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5096):map__5096);
var request = map__5096__$1;
var request_method = cljs.core.get.call(null,map__5096__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__5096__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__5096__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__5096__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__5096__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__5096__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__3922__auto__ = request_method;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__5096,map__5096__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr,map__5096,map__5096__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_5120 = ((function (channel,request_url,method,headers__$1,xhr,map__5096,map__5096__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr,map__5096,map__5096__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__5098_5121 = xhr;
G__5098_5121.setProgressEventsEnabled(true);

G__5098_5121.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_5120,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__5098_5121.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_5120,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__3158__auto___5122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3158__auto___5122,channel,request_url,method,headers__$1,xhr,map__5096,map__5096__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__3159__auto__ = (function (){var switch__3070__auto__ = ((function (c__3158__auto___5122,channel,request_url,method,headers__$1,xhr,map__5096,map__5096__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_5109){
var state_val_5110 = (state_5109[(1)]);
if((state_val_5110 === (1))){
var state_5109__$1 = state_5109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5109__$1,(2),cancel);
} else {
if((state_val_5110 === (2))){
var inst_5100 = (state_5109[(2)]);
var inst_5101 = xhr.isComplete();
var inst_5102 = cljs.core.not.call(null,inst_5101);
var state_5109__$1 = (function (){var statearr_5111 = state_5109;
(statearr_5111[(7)] = inst_5100);

return statearr_5111;
})();
if(inst_5102){
var statearr_5112_5123 = state_5109__$1;
(statearr_5112_5123[(1)] = (3));

} else {
var statearr_5113_5124 = state_5109__$1;
(statearr_5113_5124[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5110 === (3))){
var inst_5104 = xhr.abort();
var state_5109__$1 = state_5109;
var statearr_5114_5125 = state_5109__$1;
(statearr_5114_5125[(2)] = inst_5104);

(statearr_5114_5125[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5110 === (4))){
var state_5109__$1 = state_5109;
var statearr_5115_5126 = state_5109__$1;
(statearr_5115_5126[(2)] = null);

(statearr_5115_5126[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5110 === (5))){
var inst_5107 = (state_5109[(2)]);
var state_5109__$1 = state_5109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5109__$1,inst_5107);
} else {
return null;
}
}
}
}
}
});})(c__3158__auto___5122,channel,request_url,method,headers__$1,xhr,map__5096,map__5096__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__3070__auto__,c__3158__auto___5122,channel,request_url,method,headers__$1,xhr,map__5096,map__5096__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__3071__auto__ = null;
var cljs_http$core$xhr_$_state_machine__3071__auto____0 = (function (){
var statearr_5116 = [null,null,null,null,null,null,null,null];
(statearr_5116[(0)] = cljs_http$core$xhr_$_state_machine__3071__auto__);

(statearr_5116[(1)] = (1));

return statearr_5116;
});
var cljs_http$core$xhr_$_state_machine__3071__auto____1 = (function (state_5109){
while(true){
var ret_value__3072__auto__ = (function (){try{while(true){
var result__3073__auto__ = switch__3070__auto__.call(null,state_5109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3073__auto__;
}
break;
}
}catch (e5117){if((e5117 instanceof Object)){
var ex__3074__auto__ = e5117;
var statearr_5118_5127 = state_5109;
(statearr_5118_5127[(5)] = ex__3074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5128 = state_5109;
state_5109 = G__5128;
continue;
} else {
return ret_value__3072__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__3071__auto__ = function(state_5109){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__3071__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__3071__auto____1.call(this,state_5109);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__3071__auto____0;
cljs_http$core$xhr_$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__3071__auto____1;
return cljs_http$core$xhr_$_state_machine__3071__auto__;
})()
;})(switch__3070__auto__,c__3158__auto___5122,channel,request_url,method,headers__$1,xhr,map__5096,map__5096__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__3160__auto__ = (function (){var statearr_5119 = f__3159__auto__.call(null);
(statearr_5119[(6)] = c__3158__auto___5122);

return statearr_5119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3160__auto__);
});})(c__3158__auto___5122,channel,request_url,method,headers__$1,xhr,map__5096,map__5096__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__5129){
var map__5130 = p__5129;
var map__5130__$1 = ((((!((map__5130 == null)))?(((((map__5130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5130):map__5130);
var request = map__5130__$1;
var timeout = cljs.core.get.call(null,map__5130__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__5130__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__5130__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__5130__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_5143 = jsonp.send(null,((function (channel,jsonp,map__5130,map__5130__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__5130,map__5130__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__5130,map__5130__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__5130,map__5130__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_5143], null));

if(cljs.core.truth_(cancel)){
var c__3158__auto___5144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3158__auto___5144,req_5143,channel,jsonp,map__5130,map__5130__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__3159__auto__ = (function (){var switch__3070__auto__ = ((function (c__3158__auto___5144,req_5143,channel,jsonp,map__5130,map__5130__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_5136){
var state_val_5137 = (state_5136[(1)]);
if((state_val_5137 === (1))){
var state_5136__$1 = state_5136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5136__$1,(2),cancel);
} else {
if((state_val_5137 === (2))){
var inst_5133 = (state_5136[(2)]);
var inst_5134 = jsonp.cancel(req_5143);
var state_5136__$1 = (function (){var statearr_5138 = state_5136;
(statearr_5138[(7)] = inst_5133);

return statearr_5138;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5136__$1,inst_5134);
} else {
return null;
}
}
});})(c__3158__auto___5144,req_5143,channel,jsonp,map__5130,map__5130__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__3070__auto__,c__3158__auto___5144,req_5143,channel,jsonp,map__5130,map__5130__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__3071__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__3071__auto____0 = (function (){
var statearr_5139 = [null,null,null,null,null,null,null,null];
(statearr_5139[(0)] = cljs_http$core$jsonp_$_state_machine__3071__auto__);

(statearr_5139[(1)] = (1));

return statearr_5139;
});
var cljs_http$core$jsonp_$_state_machine__3071__auto____1 = (function (state_5136){
while(true){
var ret_value__3072__auto__ = (function (){try{while(true){
var result__3073__auto__ = switch__3070__auto__.call(null,state_5136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3073__auto__;
}
break;
}
}catch (e5140){if((e5140 instanceof Object)){
var ex__3074__auto__ = e5140;
var statearr_5141_5145 = state_5136;
(statearr_5141_5145[(5)] = ex__3074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5146 = state_5136;
state_5136 = G__5146;
continue;
} else {
return ret_value__3072__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__3071__auto__ = function(state_5136){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__3071__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__3071__auto____1.call(this,state_5136);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__3071__auto____0;
cljs_http$core$jsonp_$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__3071__auto____1;
return cljs_http$core$jsonp_$_state_machine__3071__auto__;
})()
;})(switch__3070__auto__,c__3158__auto___5144,req_5143,channel,jsonp,map__5130,map__5130__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__3160__auto__ = (function (){var statearr_5142 = f__3159__auto__.call(null);
(statearr_5142[(6)] = c__3158__auto___5144);

return statearr_5142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3160__auto__);
});})(c__3158__auto___5144,req_5143,channel,jsonp,map__5130,map__5130__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__5147){
var map__5148 = p__5147;
var map__5148__$1 = ((((!((map__5148 == null)))?(((((map__5148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5148):map__5148);
var request = map__5148__$1;
var request_method = cljs.core.get.call(null,map__5148__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map?rel=1530253983428
