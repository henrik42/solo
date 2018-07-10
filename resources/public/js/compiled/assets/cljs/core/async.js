// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__3328 = arguments.length;
switch (G__3328) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async3329 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3329 = (function (f,blockable,meta3330){
this.f = f;
this.blockable = blockable;
this.meta3330 = meta3330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3331,meta3330__$1){
var self__ = this;
var _3331__$1 = this;
return (new cljs.core.async.t_cljs$core$async3329(self__.f,self__.blockable,meta3330__$1));
});

cljs.core.async.t_cljs$core$async3329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3331){
var self__ = this;
var _3331__$1 = this;
return self__.meta3330;
});

cljs.core.async.t_cljs$core$async3329.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3329.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async3329.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async3329.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async3329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta3330","meta3330",-1179421711,null)], null);
});

cljs.core.async.t_cljs$core$async3329.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3329";

cljs.core.async.t_cljs$core$async3329.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3329");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3329.
 */
cljs.core.async.__GT_t_cljs$core$async3329 = (function cljs$core$async$__GT_t_cljs$core$async3329(f__$1,blockable__$1,meta3330){
return (new cljs.core.async.t_cljs$core$async3329(f__$1,blockable__$1,meta3330));
});

}

return (new cljs.core.async.t_cljs$core$async3329(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__3335 = arguments.length;
switch (G__3335) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__3338 = arguments.length;
switch (G__3338) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__3341 = arguments.length;
switch (G__3341) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_3343 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_3343);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_3343,ret){
return (function (){
return fn1.call(null,val_3343);
});})(val_3343,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__3345 = arguments.length;
switch (G__3345) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___3347 = n;
var x_3348 = (0);
while(true){
if((x_3348 < n__4376__auto___3347)){
(a[x_3348] = (0));

var G__3349 = (x_3348 + (1));
x_3348 = G__3349;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__3350 = (i + (1));
i = G__3350;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async3351 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3351 = (function (flag,meta3352){
this.flag = flag;
this.meta3352 = meta3352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_3353,meta3352__$1){
var self__ = this;
var _3353__$1 = this;
return (new cljs.core.async.t_cljs$core$async3351(self__.flag,meta3352__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async3351.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_3353){
var self__ = this;
var _3353__$1 = this;
return self__.meta3352;
});})(flag))
;

cljs.core.async.t_cljs$core$async3351.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3351.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async3351.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async3351.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async3351.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta3352","meta3352",331102918,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async3351.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3351";

cljs.core.async.t_cljs$core$async3351.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3351");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3351.
 */
cljs.core.async.__GT_t_cljs$core$async3351 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async3351(flag__$1,meta3352){
return (new cljs.core.async.t_cljs$core$async3351(flag__$1,meta3352));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async3351(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async3354 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3354 = (function (flag,cb,meta3355){
this.flag = flag;
this.cb = cb;
this.meta3355 = meta3355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3356,meta3355__$1){
var self__ = this;
var _3356__$1 = this;
return (new cljs.core.async.t_cljs$core$async3354(self__.flag,self__.cb,meta3355__$1));
});

cljs.core.async.t_cljs$core$async3354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3356){
var self__ = this;
var _3356__$1 = this;
return self__.meta3355;
});

cljs.core.async.t_cljs$core$async3354.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3354.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async3354.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async3354.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async3354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta3355","meta3355",-549380620,null)], null);
});

cljs.core.async.t_cljs$core$async3354.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3354";

cljs.core.async.t_cljs$core$async3354.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3354");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3354.
 */
cljs.core.async.__GT_t_cljs$core$async3354 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async3354(flag__$1,cb__$1,meta3355){
return (new cljs.core.async.t_cljs$core$async3354(flag__$1,cb__$1,meta3355));
});

}

return (new cljs.core.async.t_cljs$core$async3354(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3357_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3357_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3358_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3358_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__3359 = (i + (1));
i = G__3359;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3365 = arguments.length;
var i__4500__auto___3366 = (0);
while(true){
if((i__4500__auto___3366 < len__4499__auto___3365)){
args__4502__auto__.push((arguments[i__4500__auto___3366]));

var G__3367 = (i__4500__auto___3366 + (1));
i__4500__auto___3366 = G__3367;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__3362){
var map__3363 = p__3362;
var map__3363__$1 = ((((!((map__3363 == null)))?(((((map__3363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3363):map__3363);
var opts = map__3363__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq3360){
var G__3361 = cljs.core.first.call(null,seq3360);
var seq3360__$1 = cljs.core.next.call(null,seq3360);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3361,seq3360__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__3369 = arguments.length;
switch (G__3369) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__3282__auto___3415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3282__auto___3415){
return (function (){
var f__3283__auto__ = (function (){var switch__3194__auto__ = ((function (c__3282__auto___3415){
return (function (state_3393){
var state_val_3394 = (state_3393[(1)]);
if((state_val_3394 === (7))){
var inst_3389 = (state_3393[(2)]);
var state_3393__$1 = state_3393;
var statearr_3395_3416 = state_3393__$1;
(statearr_3395_3416[(2)] = inst_3389);

(statearr_3395_3416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3394 === (1))){
var state_3393__$1 = state_3393;
var statearr_3396_3417 = state_3393__$1;
(statearr_3396_3417[(2)] = null);

(statearr_3396_3417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3394 === (4))){
var inst_3372 = (state_3393[(7)]);
var inst_3372__$1 = (state_3393[(2)]);
var inst_3373 = (inst_3372__$1 == null);
var state_3393__$1 = (function (){var statearr_3397 = state_3393;
(statearr_3397[(7)] = inst_3372__$1);

return statearr_3397;
})();
if(cljs.core.truth_(inst_3373)){
var statearr_3398_3418 = state_3393__$1;
(statearr_3398_3418[(1)] = (5));

} else {
var statearr_3399_3419 = state_3393__$1;
(statearr_3399_3419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3394 === (13))){
var state_3393__$1 = state_3393;
var statearr_3400_3420 = state_3393__$1;
(statearr_3400_3420[(2)] = null);

(statearr_3400_3420[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3394 === (6))){
var inst_3372 = (state_3393[(7)]);
var state_3393__$1 = state_3393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3393__$1,(11),to,inst_3372);
} else {
if((state_val_3394 === (3))){
var inst_3391 = (state_3393[(2)]);
var state_3393__$1 = state_3393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3393__$1,inst_3391);
} else {
if((state_val_3394 === (12))){
var state_3393__$1 = state_3393;
var statearr_3401_3421 = state_3393__$1;
(statearr_3401_3421[(2)] = null);

(statearr_3401_3421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3394 === (2))){
var state_3393__$1 = state_3393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3393__$1,(4),from);
} else {
if((state_val_3394 === (11))){
var inst_3382 = (state_3393[(2)]);
var state_3393__$1 = state_3393;
if(cljs.core.truth_(inst_3382)){
var statearr_3402_3422 = state_3393__$1;
(statearr_3402_3422[(1)] = (12));

} else {
var statearr_3403_3423 = state_3393__$1;
(statearr_3403_3423[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3394 === (9))){
var state_3393__$1 = state_3393;
var statearr_3404_3424 = state_3393__$1;
(statearr_3404_3424[(2)] = null);

(statearr_3404_3424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3394 === (5))){
var state_3393__$1 = state_3393;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3405_3425 = state_3393__$1;
(statearr_3405_3425[(1)] = (8));

} else {
var statearr_3406_3426 = state_3393__$1;
(statearr_3406_3426[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3394 === (14))){
var inst_3387 = (state_3393[(2)]);
var state_3393__$1 = state_3393;
var statearr_3407_3427 = state_3393__$1;
(statearr_3407_3427[(2)] = inst_3387);

(statearr_3407_3427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3394 === (10))){
var inst_3379 = (state_3393[(2)]);
var state_3393__$1 = state_3393;
var statearr_3408_3428 = state_3393__$1;
(statearr_3408_3428[(2)] = inst_3379);

(statearr_3408_3428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3394 === (8))){
var inst_3376 = cljs.core.async.close_BANG_.call(null,to);
var state_3393__$1 = state_3393;
var statearr_3409_3429 = state_3393__$1;
(statearr_3409_3429[(2)] = inst_3376);

(statearr_3409_3429[(1)] = (10));


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
});})(c__3282__auto___3415))
;
return ((function (switch__3194__auto__,c__3282__auto___3415){
return (function() {
var cljs$core$async$state_machine__3195__auto__ = null;
var cljs$core$async$state_machine__3195__auto____0 = (function (){
var statearr_3410 = [null,null,null,null,null,null,null,null];
(statearr_3410[(0)] = cljs$core$async$state_machine__3195__auto__);

(statearr_3410[(1)] = (1));

return statearr_3410;
});
var cljs$core$async$state_machine__3195__auto____1 = (function (state_3393){
while(true){
var ret_value__3196__auto__ = (function (){try{while(true){
var result__3197__auto__ = switch__3194__auto__.call(null,state_3393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3197__auto__;
}
break;
}
}catch (e3411){if((e3411 instanceof Object)){
var ex__3198__auto__ = e3411;
var statearr_3412_3430 = state_3393;
(statearr_3412_3430[(5)] = ex__3198__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3431 = state_3393;
state_3393 = G__3431;
continue;
} else {
return ret_value__3196__auto__;
}
break;
}
});
cljs$core$async$state_machine__3195__auto__ = function(state_3393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3195__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3195__auto____1.call(this,state_3393);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3195__auto____0;
cljs$core$async$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3195__auto____1;
return cljs$core$async$state_machine__3195__auto__;
})()
;})(switch__3194__auto__,c__3282__auto___3415))
})();
var state__3284__auto__ = (function (){var statearr_3413 = f__3283__auto__.call(null);
(statearr_3413[(6)] = c__3282__auto___3415);

return statearr_3413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3284__auto__);
});})(c__3282__auto___3415))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__3432){
var vec__3433 = p__3432;
var v = cljs.core.nth.call(null,vec__3433,(0),null);
var p = cljs.core.nth.call(null,vec__3433,(1),null);
var job = vec__3433;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__3282__auto___3604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3282__auto___3604,res,vec__3433,v,p,job,jobs,results){
return (function (){
var f__3283__auto__ = (function (){var switch__3194__auto__ = ((function (c__3282__auto___3604,res,vec__3433,v,p,job,jobs,results){
return (function (state_3440){
var state_val_3441 = (state_3440[(1)]);
if((state_val_3441 === (1))){
var state_3440__$1 = state_3440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3440__$1,(2),res,v);
} else {
if((state_val_3441 === (2))){
var inst_3437 = (state_3440[(2)]);
var inst_3438 = cljs.core.async.close_BANG_.call(null,res);
var state_3440__$1 = (function (){var statearr_3442 = state_3440;
(statearr_3442[(7)] = inst_3437);

return statearr_3442;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3440__$1,inst_3438);
} else {
return null;
}
}
});})(c__3282__auto___3604,res,vec__3433,v,p,job,jobs,results))
;
return ((function (switch__3194__auto__,c__3282__auto___3604,res,vec__3433,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____0 = (function (){
var statearr_3443 = [null,null,null,null,null,null,null,null];
(statearr_3443[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__);

(statearr_3443[(1)] = (1));

return statearr_3443;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____1 = (function (state_3440){
while(true){
var ret_value__3196__auto__ = (function (){try{while(true){
var result__3197__auto__ = switch__3194__auto__.call(null,state_3440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3197__auto__;
}
break;
}
}catch (e3444){if((e3444 instanceof Object)){
var ex__3198__auto__ = e3444;
var statearr_3445_3605 = state_3440;
(statearr_3445_3605[(5)] = ex__3198__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3606 = state_3440;
state_3440 = G__3606;
continue;
} else {
return ret_value__3196__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__ = function(state_3440){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____1.call(this,state_3440);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__;
})()
;})(switch__3194__auto__,c__3282__auto___3604,res,vec__3433,v,p,job,jobs,results))
})();
var state__3284__auto__ = (function (){var statearr_3446 = f__3283__auto__.call(null);
(statearr_3446[(6)] = c__3282__auto___3604);

return statearr_3446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3284__auto__);
});})(c__3282__auto___3604,res,vec__3433,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__3447){
var vec__3448 = p__3447;
var v = cljs.core.nth.call(null,vec__3448,(0),null);
var p = cljs.core.nth.call(null,vec__3448,(1),null);
var job = vec__3448;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___3607 = n;
var __3608 = (0);
while(true){
if((__3608 < n__4376__auto___3607)){
var G__3451_3609 = type;
var G__3451_3610__$1 = (((G__3451_3609 instanceof cljs.core.Keyword))?G__3451_3609.fqn:null);
switch (G__3451_3610__$1) {
case "compute":
var c__3282__auto___3612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__3608,c__3282__auto___3612,G__3451_3609,G__3451_3610__$1,n__4376__auto___3607,jobs,results,process,async){
return (function (){
var f__3283__auto__ = (function (){var switch__3194__auto__ = ((function (__3608,c__3282__auto___3612,G__3451_3609,G__3451_3610__$1,n__4376__auto___3607,jobs,results,process,async){
return (function (state_3464){
var state_val_3465 = (state_3464[(1)]);
if((state_val_3465 === (1))){
var state_3464__$1 = state_3464;
var statearr_3466_3613 = state_3464__$1;
(statearr_3466_3613[(2)] = null);

(statearr_3466_3613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3465 === (2))){
var state_3464__$1 = state_3464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3464__$1,(4),jobs);
} else {
if((state_val_3465 === (3))){
var inst_3462 = (state_3464[(2)]);
var state_3464__$1 = state_3464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3464__$1,inst_3462);
} else {
if((state_val_3465 === (4))){
var inst_3454 = (state_3464[(2)]);
var inst_3455 = process.call(null,inst_3454);
var state_3464__$1 = state_3464;
if(cljs.core.truth_(inst_3455)){
var statearr_3467_3614 = state_3464__$1;
(statearr_3467_3614[(1)] = (5));

} else {
var statearr_3468_3615 = state_3464__$1;
(statearr_3468_3615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3465 === (5))){
var state_3464__$1 = state_3464;
var statearr_3469_3616 = state_3464__$1;
(statearr_3469_3616[(2)] = null);

(statearr_3469_3616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3465 === (6))){
var state_3464__$1 = state_3464;
var statearr_3470_3617 = state_3464__$1;
(statearr_3470_3617[(2)] = null);

(statearr_3470_3617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3465 === (7))){
var inst_3460 = (state_3464[(2)]);
var state_3464__$1 = state_3464;
var statearr_3471_3618 = state_3464__$1;
(statearr_3471_3618[(2)] = inst_3460);

(statearr_3471_3618[(1)] = (3));


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
});})(__3608,c__3282__auto___3612,G__3451_3609,G__3451_3610__$1,n__4376__auto___3607,jobs,results,process,async))
;
return ((function (__3608,switch__3194__auto__,c__3282__auto___3612,G__3451_3609,G__3451_3610__$1,n__4376__auto___3607,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____0 = (function (){
var statearr_3472 = [null,null,null,null,null,null,null];
(statearr_3472[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__);

(statearr_3472[(1)] = (1));

return statearr_3472;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____1 = (function (state_3464){
while(true){
var ret_value__3196__auto__ = (function (){try{while(true){
var result__3197__auto__ = switch__3194__auto__.call(null,state_3464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3197__auto__;
}
break;
}
}catch (e3473){if((e3473 instanceof Object)){
var ex__3198__auto__ = e3473;
var statearr_3474_3619 = state_3464;
(statearr_3474_3619[(5)] = ex__3198__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3620 = state_3464;
state_3464 = G__3620;
continue;
} else {
return ret_value__3196__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__ = function(state_3464){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____1.call(this,state_3464);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__;
})()
;})(__3608,switch__3194__auto__,c__3282__auto___3612,G__3451_3609,G__3451_3610__$1,n__4376__auto___3607,jobs,results,process,async))
})();
var state__3284__auto__ = (function (){var statearr_3475 = f__3283__auto__.call(null);
(statearr_3475[(6)] = c__3282__auto___3612);

return statearr_3475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3284__auto__);
});})(__3608,c__3282__auto___3612,G__3451_3609,G__3451_3610__$1,n__4376__auto___3607,jobs,results,process,async))
);


break;
case "async":
var c__3282__auto___3621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__3608,c__3282__auto___3621,G__3451_3609,G__3451_3610__$1,n__4376__auto___3607,jobs,results,process,async){
return (function (){
var f__3283__auto__ = (function (){var switch__3194__auto__ = ((function (__3608,c__3282__auto___3621,G__3451_3609,G__3451_3610__$1,n__4376__auto___3607,jobs,results,process,async){
return (function (state_3488){
var state_val_3489 = (state_3488[(1)]);
if((state_val_3489 === (1))){
var state_3488__$1 = state_3488;
var statearr_3490_3622 = state_3488__$1;
(statearr_3490_3622[(2)] = null);

(statearr_3490_3622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3489 === (2))){
var state_3488__$1 = state_3488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3488__$1,(4),jobs);
} else {
if((state_val_3489 === (3))){
var inst_3486 = (state_3488[(2)]);
var state_3488__$1 = state_3488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3488__$1,inst_3486);
} else {
if((state_val_3489 === (4))){
var inst_3478 = (state_3488[(2)]);
var inst_3479 = async.call(null,inst_3478);
var state_3488__$1 = state_3488;
if(cljs.core.truth_(inst_3479)){
var statearr_3491_3623 = state_3488__$1;
(statearr_3491_3623[(1)] = (5));

} else {
var statearr_3492_3624 = state_3488__$1;
(statearr_3492_3624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3489 === (5))){
var state_3488__$1 = state_3488;
var statearr_3493_3625 = state_3488__$1;
(statearr_3493_3625[(2)] = null);

(statearr_3493_3625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3489 === (6))){
var state_3488__$1 = state_3488;
var statearr_3494_3626 = state_3488__$1;
(statearr_3494_3626[(2)] = null);

(statearr_3494_3626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3489 === (7))){
var inst_3484 = (state_3488[(2)]);
var state_3488__$1 = state_3488;
var statearr_3495_3627 = state_3488__$1;
(statearr_3495_3627[(2)] = inst_3484);

(statearr_3495_3627[(1)] = (3));


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
});})(__3608,c__3282__auto___3621,G__3451_3609,G__3451_3610__$1,n__4376__auto___3607,jobs,results,process,async))
;
return ((function (__3608,switch__3194__auto__,c__3282__auto___3621,G__3451_3609,G__3451_3610__$1,n__4376__auto___3607,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____0 = (function (){
var statearr_3496 = [null,null,null,null,null,null,null];
(statearr_3496[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__);

(statearr_3496[(1)] = (1));

return statearr_3496;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____1 = (function (state_3488){
while(true){
var ret_value__3196__auto__ = (function (){try{while(true){
var result__3197__auto__ = switch__3194__auto__.call(null,state_3488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3197__auto__;
}
break;
}
}catch (e3497){if((e3497 instanceof Object)){
var ex__3198__auto__ = e3497;
var statearr_3498_3628 = state_3488;
(statearr_3498_3628[(5)] = ex__3198__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3629 = state_3488;
state_3488 = G__3629;
continue;
} else {
return ret_value__3196__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__ = function(state_3488){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____1.call(this,state_3488);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__;
})()
;})(__3608,switch__3194__auto__,c__3282__auto___3621,G__3451_3609,G__3451_3610__$1,n__4376__auto___3607,jobs,results,process,async))
})();
var state__3284__auto__ = (function (){var statearr_3499 = f__3283__auto__.call(null);
(statearr_3499[(6)] = c__3282__auto___3621);

return statearr_3499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3284__auto__);
});})(__3608,c__3282__auto___3621,G__3451_3609,G__3451_3610__$1,n__4376__auto___3607,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3451_3610__$1)].join('')));

}

var G__3630 = (__3608 + (1));
__3608 = G__3630;
continue;
} else {
}
break;
}

var c__3282__auto___3631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3282__auto___3631,jobs,results,process,async){
return (function (){
var f__3283__auto__ = (function (){var switch__3194__auto__ = ((function (c__3282__auto___3631,jobs,results,process,async){
return (function (state_3521){
var state_val_3522 = (state_3521[(1)]);
if((state_val_3522 === (1))){
var state_3521__$1 = state_3521;
var statearr_3523_3632 = state_3521__$1;
(statearr_3523_3632[(2)] = null);

(statearr_3523_3632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3522 === (2))){
var state_3521__$1 = state_3521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3521__$1,(4),from);
} else {
if((state_val_3522 === (3))){
var inst_3519 = (state_3521[(2)]);
var state_3521__$1 = state_3521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3521__$1,inst_3519);
} else {
if((state_val_3522 === (4))){
var inst_3502 = (state_3521[(7)]);
var inst_3502__$1 = (state_3521[(2)]);
var inst_3503 = (inst_3502__$1 == null);
var state_3521__$1 = (function (){var statearr_3524 = state_3521;
(statearr_3524[(7)] = inst_3502__$1);

return statearr_3524;
})();
if(cljs.core.truth_(inst_3503)){
var statearr_3525_3633 = state_3521__$1;
(statearr_3525_3633[(1)] = (5));

} else {
var statearr_3526_3634 = state_3521__$1;
(statearr_3526_3634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3522 === (5))){
var inst_3505 = cljs.core.async.close_BANG_.call(null,jobs);
var state_3521__$1 = state_3521;
var statearr_3527_3635 = state_3521__$1;
(statearr_3527_3635[(2)] = inst_3505);

(statearr_3527_3635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3522 === (6))){
var inst_3502 = (state_3521[(7)]);
var inst_3507 = (state_3521[(8)]);
var inst_3507__$1 = cljs.core.async.chan.call(null,(1));
var inst_3508 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3509 = [inst_3502,inst_3507__$1];
var inst_3510 = (new cljs.core.PersistentVector(null,2,(5),inst_3508,inst_3509,null));
var state_3521__$1 = (function (){var statearr_3528 = state_3521;
(statearr_3528[(8)] = inst_3507__$1);

return statearr_3528;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3521__$1,(8),jobs,inst_3510);
} else {
if((state_val_3522 === (7))){
var inst_3517 = (state_3521[(2)]);
var state_3521__$1 = state_3521;
var statearr_3529_3636 = state_3521__$1;
(statearr_3529_3636[(2)] = inst_3517);

(statearr_3529_3636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3522 === (8))){
var inst_3507 = (state_3521[(8)]);
var inst_3512 = (state_3521[(2)]);
var state_3521__$1 = (function (){var statearr_3530 = state_3521;
(statearr_3530[(9)] = inst_3512);

return statearr_3530;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3521__$1,(9),results,inst_3507);
} else {
if((state_val_3522 === (9))){
var inst_3514 = (state_3521[(2)]);
var state_3521__$1 = (function (){var statearr_3531 = state_3521;
(statearr_3531[(10)] = inst_3514);

return statearr_3531;
})();
var statearr_3532_3637 = state_3521__$1;
(statearr_3532_3637[(2)] = null);

(statearr_3532_3637[(1)] = (2));


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
});})(c__3282__auto___3631,jobs,results,process,async))
;
return ((function (switch__3194__auto__,c__3282__auto___3631,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____0 = (function (){
var statearr_3533 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3533[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__);

(statearr_3533[(1)] = (1));

return statearr_3533;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____1 = (function (state_3521){
while(true){
var ret_value__3196__auto__ = (function (){try{while(true){
var result__3197__auto__ = switch__3194__auto__.call(null,state_3521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3197__auto__;
}
break;
}
}catch (e3534){if((e3534 instanceof Object)){
var ex__3198__auto__ = e3534;
var statearr_3535_3638 = state_3521;
(statearr_3535_3638[(5)] = ex__3198__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3639 = state_3521;
state_3521 = G__3639;
continue;
} else {
return ret_value__3196__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__ = function(state_3521){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____1.call(this,state_3521);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__;
})()
;})(switch__3194__auto__,c__3282__auto___3631,jobs,results,process,async))
})();
var state__3284__auto__ = (function (){var statearr_3536 = f__3283__auto__.call(null);
(statearr_3536[(6)] = c__3282__auto___3631);

return statearr_3536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3284__auto__);
});})(c__3282__auto___3631,jobs,results,process,async))
);


var c__3282__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3282__auto__,jobs,results,process,async){
return (function (){
var f__3283__auto__ = (function (){var switch__3194__auto__ = ((function (c__3282__auto__,jobs,results,process,async){
return (function (state_3574){
var state_val_3575 = (state_3574[(1)]);
if((state_val_3575 === (7))){
var inst_3570 = (state_3574[(2)]);
var state_3574__$1 = state_3574;
var statearr_3576_3640 = state_3574__$1;
(statearr_3576_3640[(2)] = inst_3570);

(statearr_3576_3640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3575 === (20))){
var state_3574__$1 = state_3574;
var statearr_3577_3641 = state_3574__$1;
(statearr_3577_3641[(2)] = null);

(statearr_3577_3641[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3575 === (1))){
var state_3574__$1 = state_3574;
var statearr_3578_3642 = state_3574__$1;
(statearr_3578_3642[(2)] = null);

(statearr_3578_3642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3575 === (4))){
var inst_3539 = (state_3574[(7)]);
var inst_3539__$1 = (state_3574[(2)]);
var inst_3540 = (inst_3539__$1 == null);
var state_3574__$1 = (function (){var statearr_3579 = state_3574;
(statearr_3579[(7)] = inst_3539__$1);

return statearr_3579;
})();
if(cljs.core.truth_(inst_3540)){
var statearr_3580_3643 = state_3574__$1;
(statearr_3580_3643[(1)] = (5));

} else {
var statearr_3581_3644 = state_3574__$1;
(statearr_3581_3644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3575 === (15))){
var inst_3552 = (state_3574[(8)]);
var state_3574__$1 = state_3574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3574__$1,(18),to,inst_3552);
} else {
if((state_val_3575 === (21))){
var inst_3565 = (state_3574[(2)]);
var state_3574__$1 = state_3574;
var statearr_3582_3645 = state_3574__$1;
(statearr_3582_3645[(2)] = inst_3565);

(statearr_3582_3645[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3575 === (13))){
var inst_3567 = (state_3574[(2)]);
var state_3574__$1 = (function (){var statearr_3583 = state_3574;
(statearr_3583[(9)] = inst_3567);

return statearr_3583;
})();
var statearr_3584_3646 = state_3574__$1;
(statearr_3584_3646[(2)] = null);

(statearr_3584_3646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3575 === (6))){
var inst_3539 = (state_3574[(7)]);
var state_3574__$1 = state_3574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3574__$1,(11),inst_3539);
} else {
if((state_val_3575 === (17))){
var inst_3560 = (state_3574[(2)]);
var state_3574__$1 = state_3574;
if(cljs.core.truth_(inst_3560)){
var statearr_3585_3647 = state_3574__$1;
(statearr_3585_3647[(1)] = (19));

} else {
var statearr_3586_3648 = state_3574__$1;
(statearr_3586_3648[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3575 === (3))){
var inst_3572 = (state_3574[(2)]);
var state_3574__$1 = state_3574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3574__$1,inst_3572);
} else {
if((state_val_3575 === (12))){
var inst_3549 = (state_3574[(10)]);
var state_3574__$1 = state_3574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3574__$1,(14),inst_3549);
} else {
if((state_val_3575 === (2))){
var state_3574__$1 = state_3574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3574__$1,(4),results);
} else {
if((state_val_3575 === (19))){
var state_3574__$1 = state_3574;
var statearr_3587_3649 = state_3574__$1;
(statearr_3587_3649[(2)] = null);

(statearr_3587_3649[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3575 === (11))){
var inst_3549 = (state_3574[(2)]);
var state_3574__$1 = (function (){var statearr_3588 = state_3574;
(statearr_3588[(10)] = inst_3549);

return statearr_3588;
})();
var statearr_3589_3650 = state_3574__$1;
(statearr_3589_3650[(2)] = null);

(statearr_3589_3650[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3575 === (9))){
var state_3574__$1 = state_3574;
var statearr_3590_3651 = state_3574__$1;
(statearr_3590_3651[(2)] = null);

(statearr_3590_3651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3575 === (5))){
var state_3574__$1 = state_3574;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3591_3652 = state_3574__$1;
(statearr_3591_3652[(1)] = (8));

} else {
var statearr_3592_3653 = state_3574__$1;
(statearr_3592_3653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3575 === (14))){
var inst_3552 = (state_3574[(8)]);
var inst_3554 = (state_3574[(11)]);
var inst_3552__$1 = (state_3574[(2)]);
var inst_3553 = (inst_3552__$1 == null);
var inst_3554__$1 = cljs.core.not.call(null,inst_3553);
var state_3574__$1 = (function (){var statearr_3593 = state_3574;
(statearr_3593[(8)] = inst_3552__$1);

(statearr_3593[(11)] = inst_3554__$1);

return statearr_3593;
})();
if(inst_3554__$1){
var statearr_3594_3654 = state_3574__$1;
(statearr_3594_3654[(1)] = (15));

} else {
var statearr_3595_3655 = state_3574__$1;
(statearr_3595_3655[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3575 === (16))){
var inst_3554 = (state_3574[(11)]);
var state_3574__$1 = state_3574;
var statearr_3596_3656 = state_3574__$1;
(statearr_3596_3656[(2)] = inst_3554);

(statearr_3596_3656[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3575 === (10))){
var inst_3546 = (state_3574[(2)]);
var state_3574__$1 = state_3574;
var statearr_3597_3657 = state_3574__$1;
(statearr_3597_3657[(2)] = inst_3546);

(statearr_3597_3657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3575 === (18))){
var inst_3557 = (state_3574[(2)]);
var state_3574__$1 = state_3574;
var statearr_3598_3658 = state_3574__$1;
(statearr_3598_3658[(2)] = inst_3557);

(statearr_3598_3658[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3575 === (8))){
var inst_3543 = cljs.core.async.close_BANG_.call(null,to);
var state_3574__$1 = state_3574;
var statearr_3599_3659 = state_3574__$1;
(statearr_3599_3659[(2)] = inst_3543);

(statearr_3599_3659[(1)] = (10));


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
}
}
}
}
});})(c__3282__auto__,jobs,results,process,async))
;
return ((function (switch__3194__auto__,c__3282__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____0 = (function (){
var statearr_3600 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3600[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__);

(statearr_3600[(1)] = (1));

return statearr_3600;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____1 = (function (state_3574){
while(true){
var ret_value__3196__auto__ = (function (){try{while(true){
var result__3197__auto__ = switch__3194__auto__.call(null,state_3574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3197__auto__;
}
break;
}
}catch (e3601){if((e3601 instanceof Object)){
var ex__3198__auto__ = e3601;
var statearr_3602_3660 = state_3574;
(statearr_3602_3660[(5)] = ex__3198__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3661 = state_3574;
state_3574 = G__3661;
continue;
} else {
return ret_value__3196__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__ = function(state_3574){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____1.call(this,state_3574);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3195__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3195__auto__;
})()
;})(switch__3194__auto__,c__3282__auto__,jobs,results,process,async))
})();
var state__3284__auto__ = (function (){var statearr_3603 = f__3283__auto__.call(null);
(statearr_3603[(6)] = c__3282__auto__);

return statearr_3603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3284__auto__);
});})(c__3282__auto__,jobs,results,process,async))
);

return c__3282__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__3663 = arguments.length;
switch (G__3663) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__3666 = arguments.length;
switch (G__3666) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__3669 = arguments.length;
switch (G__3669) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__3282__auto___3718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3282__auto___3718,tc,fc){
return (function (){
var f__3283__auto__ = (function (){var switch__3194__auto__ = ((function (c__3282__auto___3718,tc,fc){
return (function (state_3695){
var state_val_3696 = (state_3695[(1)]);
if((state_val_3696 === (7))){
var inst_3691 = (state_3695[(2)]);
var state_3695__$1 = state_3695;
var statearr_3697_3719 = state_3695__$1;
(statearr_3697_3719[(2)] = inst_3691);

(statearr_3697_3719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3696 === (1))){
var state_3695__$1 = state_3695;
var statearr_3698_3720 = state_3695__$1;
(statearr_3698_3720[(2)] = null);

(statearr_3698_3720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3696 === (4))){
var inst_3672 = (state_3695[(7)]);
var inst_3672__$1 = (state_3695[(2)]);
var inst_3673 = (inst_3672__$1 == null);
var state_3695__$1 = (function (){var statearr_3699 = state_3695;
(statearr_3699[(7)] = inst_3672__$1);

return statearr_3699;
})();
if(cljs.core.truth_(inst_3673)){
var statearr_3700_3721 = state_3695__$1;
(statearr_3700_3721[(1)] = (5));

} else {
var statearr_3701_3722 = state_3695__$1;
(statearr_3701_3722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3696 === (13))){
var state_3695__$1 = state_3695;
var statearr_3702_3723 = state_3695__$1;
(statearr_3702_3723[(2)] = null);

(statearr_3702_3723[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3696 === (6))){
var inst_3672 = (state_3695[(7)]);
var inst_3678 = p.call(null,inst_3672);
var state_3695__$1 = state_3695;
if(cljs.core.truth_(inst_3678)){
var statearr_3703_3724 = state_3695__$1;
(statearr_3703_3724[(1)] = (9));

} else {
var statearr_3704_3725 = state_3695__$1;
(statearr_3704_3725[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3696 === (3))){
var inst_3693 = (state_3695[(2)]);
var state_3695__$1 = state_3695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3695__$1,inst_3693);
} else {
if((state_val_3696 === (12))){
var state_3695__$1 = state_3695;
var statearr_3705_3726 = state_3695__$1;
(statearr_3705_3726[(2)] = null);

(statearr_3705_3726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3696 === (2))){
var state_3695__$1 = state_3695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3695__$1,(4),ch);
} else {
if((state_val_3696 === (11))){
var inst_3672 = (state_3695[(7)]);
var inst_3682 = (state_3695[(2)]);
var state_3695__$1 = state_3695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3695__$1,(8),inst_3682,inst_3672);
} else {
if((state_val_3696 === (9))){
var state_3695__$1 = state_3695;
var statearr_3706_3727 = state_3695__$1;
(statearr_3706_3727[(2)] = tc);

(statearr_3706_3727[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3696 === (5))){
var inst_3675 = cljs.core.async.close_BANG_.call(null,tc);
var inst_3676 = cljs.core.async.close_BANG_.call(null,fc);
var state_3695__$1 = (function (){var statearr_3707 = state_3695;
(statearr_3707[(8)] = inst_3675);

return statearr_3707;
})();
var statearr_3708_3728 = state_3695__$1;
(statearr_3708_3728[(2)] = inst_3676);

(statearr_3708_3728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3696 === (14))){
var inst_3689 = (state_3695[(2)]);
var state_3695__$1 = state_3695;
var statearr_3709_3729 = state_3695__$1;
(statearr_3709_3729[(2)] = inst_3689);

(statearr_3709_3729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3696 === (10))){
var state_3695__$1 = state_3695;
var statearr_3710_3730 = state_3695__$1;
(statearr_3710_3730[(2)] = fc);

(statearr_3710_3730[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3696 === (8))){
var inst_3684 = (state_3695[(2)]);
var state_3695__$1 = state_3695;
if(cljs.core.truth_(inst_3684)){
var statearr_3711_3731 = state_3695__$1;
(statearr_3711_3731[(1)] = (12));

} else {
var statearr_3712_3732 = state_3695__$1;
(statearr_3712_3732[(1)] = (13));

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
});})(c__3282__auto___3718,tc,fc))
;
return ((function (switch__3194__auto__,c__3282__auto___3718,tc,fc){
return (function() {
var cljs$core$async$state_machine__3195__auto__ = null;
var cljs$core$async$state_machine__3195__auto____0 = (function (){
var statearr_3713 = [null,null,null,null,null,null,null,null,null];
(statearr_3713[(0)] = cljs$core$async$state_machine__3195__auto__);

(statearr_3713[(1)] = (1));

return statearr_3713;
});
var cljs$core$async$state_machine__3195__auto____1 = (function (state_3695){
while(true){
var ret_value__3196__auto__ = (function (){try{while(true){
var result__3197__auto__ = switch__3194__auto__.call(null,state_3695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3197__auto__;
}
break;
}
}catch (e3714){if((e3714 instanceof Object)){
var ex__3198__auto__ = e3714;
var statearr_3715_3733 = state_3695;
(statearr_3715_3733[(5)] = ex__3198__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3734 = state_3695;
state_3695 = G__3734;
continue;
} else {
return ret_value__3196__auto__;
}
break;
}
});
cljs$core$async$state_machine__3195__auto__ = function(state_3695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3195__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3195__auto____1.call(this,state_3695);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3195__auto____0;
cljs$core$async$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3195__auto____1;
return cljs$core$async$state_machine__3195__auto__;
})()
;})(switch__3194__auto__,c__3282__auto___3718,tc,fc))
})();
var state__3284__auto__ = (function (){var statearr_3716 = f__3283__auto__.call(null);
(statearr_3716[(6)] = c__3282__auto___3718);

return statearr_3716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3284__auto__);
});})(c__3282__auto___3718,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__3282__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3282__auto__){
return (function (){
var f__3283__auto__ = (function (){var switch__3194__auto__ = ((function (c__3282__auto__){
return (function (state_3755){
var state_val_3756 = (state_3755[(1)]);
if((state_val_3756 === (7))){
var inst_3751 = (state_3755[(2)]);
var state_3755__$1 = state_3755;
var statearr_3757_3775 = state_3755__$1;
(statearr_3757_3775[(2)] = inst_3751);

(statearr_3757_3775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3756 === (1))){
var inst_3735 = init;
var state_3755__$1 = (function (){var statearr_3758 = state_3755;
(statearr_3758[(7)] = inst_3735);

return statearr_3758;
})();
var statearr_3759_3776 = state_3755__$1;
(statearr_3759_3776[(2)] = null);

(statearr_3759_3776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3756 === (4))){
var inst_3738 = (state_3755[(8)]);
var inst_3738__$1 = (state_3755[(2)]);
var inst_3739 = (inst_3738__$1 == null);
var state_3755__$1 = (function (){var statearr_3760 = state_3755;
(statearr_3760[(8)] = inst_3738__$1);

return statearr_3760;
})();
if(cljs.core.truth_(inst_3739)){
var statearr_3761_3777 = state_3755__$1;
(statearr_3761_3777[(1)] = (5));

} else {
var statearr_3762_3778 = state_3755__$1;
(statearr_3762_3778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3756 === (6))){
var inst_3742 = (state_3755[(9)]);
var inst_3735 = (state_3755[(7)]);
var inst_3738 = (state_3755[(8)]);
var inst_3742__$1 = f.call(null,inst_3735,inst_3738);
var inst_3743 = cljs.core.reduced_QMARK_.call(null,inst_3742__$1);
var state_3755__$1 = (function (){var statearr_3763 = state_3755;
(statearr_3763[(9)] = inst_3742__$1);

return statearr_3763;
})();
if(inst_3743){
var statearr_3764_3779 = state_3755__$1;
(statearr_3764_3779[(1)] = (8));

} else {
var statearr_3765_3780 = state_3755__$1;
(statearr_3765_3780[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3756 === (3))){
var inst_3753 = (state_3755[(2)]);
var state_3755__$1 = state_3755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3755__$1,inst_3753);
} else {
if((state_val_3756 === (2))){
var state_3755__$1 = state_3755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3755__$1,(4),ch);
} else {
if((state_val_3756 === (9))){
var inst_3742 = (state_3755[(9)]);
var inst_3735 = inst_3742;
var state_3755__$1 = (function (){var statearr_3766 = state_3755;
(statearr_3766[(7)] = inst_3735);

return statearr_3766;
})();
var statearr_3767_3781 = state_3755__$1;
(statearr_3767_3781[(2)] = null);

(statearr_3767_3781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3756 === (5))){
var inst_3735 = (state_3755[(7)]);
var state_3755__$1 = state_3755;
var statearr_3768_3782 = state_3755__$1;
(statearr_3768_3782[(2)] = inst_3735);

(statearr_3768_3782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3756 === (10))){
var inst_3749 = (state_3755[(2)]);
var state_3755__$1 = state_3755;
var statearr_3769_3783 = state_3755__$1;
(statearr_3769_3783[(2)] = inst_3749);

(statearr_3769_3783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3756 === (8))){
var inst_3742 = (state_3755[(9)]);
var inst_3745 = cljs.core.deref.call(null,inst_3742);
var state_3755__$1 = state_3755;
var statearr_3770_3784 = state_3755__$1;
(statearr_3770_3784[(2)] = inst_3745);

(statearr_3770_3784[(1)] = (10));


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
});})(c__3282__auto__))
;
return ((function (switch__3194__auto__,c__3282__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__3195__auto__ = null;
var cljs$core$async$reduce_$_state_machine__3195__auto____0 = (function (){
var statearr_3771 = [null,null,null,null,null,null,null,null,null,null];
(statearr_3771[(0)] = cljs$core$async$reduce_$_state_machine__3195__auto__);

(statearr_3771[(1)] = (1));

return statearr_3771;
});
var cljs$core$async$reduce_$_state_machine__3195__auto____1 = (function (state_3755){
while(true){
var ret_value__3196__auto__ = (function (){try{while(true){
var result__3197__auto__ = switch__3194__auto__.call(null,state_3755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3197__auto__;
}
break;
}
}catch (e3772){if((e3772 instanceof Object)){
var ex__3198__auto__ = e3772;
var statearr_3773_3785 = state_3755;
(statearr_3773_3785[(5)] = ex__3198__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3786 = state_3755;
state_3755 = G__3786;
continue;
} else {
return ret_value__3196__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__3195__auto__ = function(state_3755){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__3195__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__3195__auto____1.call(this,state_3755);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__3195__auto____0;
cljs$core$async$reduce_$_state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__3195__auto____1;
return cljs$core$async$reduce_$_state_machine__3195__auto__;
})()
;})(switch__3194__auto__,c__3282__auto__))
})();
var state__3284__auto__ = (function (){var statearr_3774 = f__3283__auto__.call(null);
(statearr_3774[(6)] = c__3282__auto__);

return statearr_3774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3284__auto__);
});})(c__3282__auto__))
);

return c__3282__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__3282__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3282__auto__,f__$1){
return (function (){
var f__3283__auto__ = (function (){var switch__3194__auto__ = ((function (c__3282__auto__,f__$1){
return (function (state_3792){
var state_val_3793 = (state_3792[(1)]);
if((state_val_3793 === (1))){
var inst_3787 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_3792__$1 = state_3792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3792__$1,(2),inst_3787);
} else {
if((state_val_3793 === (2))){
var inst_3789 = (state_3792[(2)]);
var inst_3790 = f__$1.call(null,inst_3789);
var state_3792__$1 = state_3792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3792__$1,inst_3790);
} else {
return null;
}
}
});})(c__3282__auto__,f__$1))
;
return ((function (switch__3194__auto__,c__3282__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__3195__auto__ = null;
var cljs$core$async$transduce_$_state_machine__3195__auto____0 = (function (){
var statearr_3794 = [null,null,null,null,null,null,null];
(statearr_3794[(0)] = cljs$core$async$transduce_$_state_machine__3195__auto__);

(statearr_3794[(1)] = (1));

return statearr_3794;
});
var cljs$core$async$transduce_$_state_machine__3195__auto____1 = (function (state_3792){
while(true){
var ret_value__3196__auto__ = (function (){try{while(true){
var result__3197__auto__ = switch__3194__auto__.call(null,state_3792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3197__auto__;
}
break;
}
}catch (e3795){if((e3795 instanceof Object)){
var ex__3198__auto__ = e3795;
var statearr_3796_3798 = state_3792;
(statearr_3796_3798[(5)] = ex__3198__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3799 = state_3792;
state_3792 = G__3799;
continue;
} else {
return ret_value__3196__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__3195__auto__ = function(state_3792){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__3195__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__3195__auto____1.call(this,state_3792);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__3195__auto____0;
cljs$core$async$transduce_$_state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__3195__auto____1;
return cljs$core$async$transduce_$_state_machine__3195__auto__;
})()
;})(switch__3194__auto__,c__3282__auto__,f__$1))
})();
var state__3284__auto__ = (function (){var statearr_3797 = f__3283__auto__.call(null);
(statearr_3797[(6)] = c__3282__auto__);

return statearr_3797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3284__auto__);
});})(c__3282__auto__,f__$1))
);

return c__3282__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__3801 = arguments.length;
switch (G__3801) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__3282__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3282__auto__){
return (function (){
var f__3283__auto__ = (function (){var switch__3194__auto__ = ((function (c__3282__auto__){
return (function (state_3826){
var state_val_3827 = (state_3826[(1)]);
if((state_val_3827 === (7))){
var inst_3808 = (state_3826[(2)]);
var state_3826__$1 = state_3826;
var statearr_3828_3849 = state_3826__$1;
(statearr_3828_3849[(2)] = inst_3808);

(statearr_3828_3849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3827 === (1))){
var inst_3802 = cljs.core.seq.call(null,coll);
var inst_3803 = inst_3802;
var state_3826__$1 = (function (){var statearr_3829 = state_3826;
(statearr_3829[(7)] = inst_3803);

return statearr_3829;
})();
var statearr_3830_3850 = state_3826__$1;
(statearr_3830_3850[(2)] = null);

(statearr_3830_3850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3827 === (4))){
var inst_3803 = (state_3826[(7)]);
var inst_3806 = cljs.core.first.call(null,inst_3803);
var state_3826__$1 = state_3826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3826__$1,(7),ch,inst_3806);
} else {
if((state_val_3827 === (13))){
var inst_3820 = (state_3826[(2)]);
var state_3826__$1 = state_3826;
var statearr_3831_3851 = state_3826__$1;
(statearr_3831_3851[(2)] = inst_3820);

(statearr_3831_3851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3827 === (6))){
var inst_3811 = (state_3826[(2)]);
var state_3826__$1 = state_3826;
if(cljs.core.truth_(inst_3811)){
var statearr_3832_3852 = state_3826__$1;
(statearr_3832_3852[(1)] = (8));

} else {
var statearr_3833_3853 = state_3826__$1;
(statearr_3833_3853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3827 === (3))){
var inst_3824 = (state_3826[(2)]);
var state_3826__$1 = state_3826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3826__$1,inst_3824);
} else {
if((state_val_3827 === (12))){
var state_3826__$1 = state_3826;
var statearr_3834_3854 = state_3826__$1;
(statearr_3834_3854[(2)] = null);

(statearr_3834_3854[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3827 === (2))){
var inst_3803 = (state_3826[(7)]);
var state_3826__$1 = state_3826;
if(cljs.core.truth_(inst_3803)){
var statearr_3835_3855 = state_3826__$1;
(statearr_3835_3855[(1)] = (4));

} else {
var statearr_3836_3856 = state_3826__$1;
(statearr_3836_3856[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3827 === (11))){
var inst_3817 = cljs.core.async.close_BANG_.call(null,ch);
var state_3826__$1 = state_3826;
var statearr_3837_3857 = state_3826__$1;
(statearr_3837_3857[(2)] = inst_3817);

(statearr_3837_3857[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3827 === (9))){
var state_3826__$1 = state_3826;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3838_3858 = state_3826__$1;
(statearr_3838_3858[(1)] = (11));

} else {
var statearr_3839_3859 = state_3826__$1;
(statearr_3839_3859[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3827 === (5))){
var inst_3803 = (state_3826[(7)]);
var state_3826__$1 = state_3826;
var statearr_3840_3860 = state_3826__$1;
(statearr_3840_3860[(2)] = inst_3803);

(statearr_3840_3860[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3827 === (10))){
var inst_3822 = (state_3826[(2)]);
var state_3826__$1 = state_3826;
var statearr_3841_3861 = state_3826__$1;
(statearr_3841_3861[(2)] = inst_3822);

(statearr_3841_3861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3827 === (8))){
var inst_3803 = (state_3826[(7)]);
var inst_3813 = cljs.core.next.call(null,inst_3803);
var inst_3803__$1 = inst_3813;
var state_3826__$1 = (function (){var statearr_3842 = state_3826;
(statearr_3842[(7)] = inst_3803__$1);

return statearr_3842;
})();
var statearr_3843_3862 = state_3826__$1;
(statearr_3843_3862[(2)] = null);

(statearr_3843_3862[(1)] = (2));


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
});})(c__3282__auto__))
;
return ((function (switch__3194__auto__,c__3282__auto__){
return (function() {
var cljs$core$async$state_machine__3195__auto__ = null;
var cljs$core$async$state_machine__3195__auto____0 = (function (){
var statearr_3844 = [null,null,null,null,null,null,null,null];
(statearr_3844[(0)] = cljs$core$async$state_machine__3195__auto__);

(statearr_3844[(1)] = (1));

return statearr_3844;
});
var cljs$core$async$state_machine__3195__auto____1 = (function (state_3826){
while(true){
var ret_value__3196__auto__ = (function (){try{while(true){
var result__3197__auto__ = switch__3194__auto__.call(null,state_3826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3197__auto__;
}
break;
}
}catch (e3845){if((e3845 instanceof Object)){
var ex__3198__auto__ = e3845;
var statearr_3846_3863 = state_3826;
(statearr_3846_3863[(5)] = ex__3198__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3864 = state_3826;
state_3826 = G__3864;
continue;
} else {
return ret_value__3196__auto__;
}
break;
}
});
cljs$core$async$state_machine__3195__auto__ = function(state_3826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3195__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3195__auto____1.call(this,state_3826);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3195__auto____0;
cljs$core$async$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3195__auto____1;
return cljs$core$async$state_machine__3195__auto__;
})()
;})(switch__3194__auto__,c__3282__auto__))
})();
var state__3284__auto__ = (function (){var statearr_3847 = f__3283__auto__.call(null);
(statearr_3847[(6)] = c__3282__auto__);

return statearr_3847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3284__auto__);
});})(c__3282__auto__))
);

return c__3282__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async3865 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3865 = (function (ch,cs,meta3866){
this.ch = ch;
this.cs = cs;
this.meta3866 = meta3866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_3867,meta3866__$1){
var self__ = this;
var _3867__$1 = this;
return (new cljs.core.async.t_cljs$core$async3865(self__.ch,self__.cs,meta3866__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async3865.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_3867){
var self__ = this;
var _3867__$1 = this;
return self__.meta3866;
});})(cs))
;

cljs.core.async.t_cljs$core$async3865.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3865.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async3865.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3865.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3865.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3865.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3865.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta3866","meta3866",-1731629151,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async3865.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3865";

cljs.core.async.t_cljs$core$async3865.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3865");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3865.
 */
cljs.core.async.__GT_t_cljs$core$async3865 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async3865(ch__$1,cs__$1,meta3866){
return (new cljs.core.async.t_cljs$core$async3865(ch__$1,cs__$1,meta3866));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async3865(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__3282__auto___4087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3282__auto___4087,cs,m,dchan,dctr,done){
return (function (){
var f__3283__auto__ = (function (){var switch__3194__auto__ = ((function (c__3282__auto___4087,cs,m,dchan,dctr,done){
return (function (state_4002){
var state_val_4003 = (state_4002[(1)]);
if((state_val_4003 === (7))){
var inst_3998 = (state_4002[(2)]);
var state_4002__$1 = state_4002;
var statearr_4004_4088 = state_4002__$1;
(statearr_4004_4088[(2)] = inst_3998);

(statearr_4004_4088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (20))){
var inst_3901 = (state_4002[(7)]);
var inst_3913 = cljs.core.first.call(null,inst_3901);
var inst_3914 = cljs.core.nth.call(null,inst_3913,(0),null);
var inst_3915 = cljs.core.nth.call(null,inst_3913,(1),null);
var state_4002__$1 = (function (){var statearr_4005 = state_4002;
(statearr_4005[(8)] = inst_3914);

return statearr_4005;
})();
if(cljs.core.truth_(inst_3915)){
var statearr_4006_4089 = state_4002__$1;
(statearr_4006_4089[(1)] = (22));

} else {
var statearr_4007_4090 = state_4002__$1;
(statearr_4007_4090[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (27))){
var inst_3945 = (state_4002[(9)]);
var inst_3943 = (state_4002[(10)]);
var inst_3870 = (state_4002[(11)]);
var inst_3950 = (state_4002[(12)]);
var inst_3950__$1 = cljs.core._nth.call(null,inst_3943,inst_3945);
var inst_3951 = cljs.core.async.put_BANG_.call(null,inst_3950__$1,inst_3870,done);
var state_4002__$1 = (function (){var statearr_4008 = state_4002;
(statearr_4008[(12)] = inst_3950__$1);

return statearr_4008;
})();
if(cljs.core.truth_(inst_3951)){
var statearr_4009_4091 = state_4002__$1;
(statearr_4009_4091[(1)] = (30));

} else {
var statearr_4010_4092 = state_4002__$1;
(statearr_4010_4092[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (1))){
var state_4002__$1 = state_4002;
var statearr_4011_4093 = state_4002__$1;
(statearr_4011_4093[(2)] = null);

(statearr_4011_4093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (24))){
var inst_3901 = (state_4002[(7)]);
var inst_3920 = (state_4002[(2)]);
var inst_3921 = cljs.core.next.call(null,inst_3901);
var inst_3879 = inst_3921;
var inst_3880 = null;
var inst_3881 = (0);
var inst_3882 = (0);
var state_4002__$1 = (function (){var statearr_4012 = state_4002;
(statearr_4012[(13)] = inst_3920);

(statearr_4012[(14)] = inst_3881);

(statearr_4012[(15)] = inst_3880);

(statearr_4012[(16)] = inst_3879);

(statearr_4012[(17)] = inst_3882);

return statearr_4012;
})();
var statearr_4013_4094 = state_4002__$1;
(statearr_4013_4094[(2)] = null);

(statearr_4013_4094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (39))){
var state_4002__$1 = state_4002;
var statearr_4017_4095 = state_4002__$1;
(statearr_4017_4095[(2)] = null);

(statearr_4017_4095[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (4))){
var inst_3870 = (state_4002[(11)]);
var inst_3870__$1 = (state_4002[(2)]);
var inst_3871 = (inst_3870__$1 == null);
var state_4002__$1 = (function (){var statearr_4018 = state_4002;
(statearr_4018[(11)] = inst_3870__$1);

return statearr_4018;
})();
if(cljs.core.truth_(inst_3871)){
var statearr_4019_4096 = state_4002__$1;
(statearr_4019_4096[(1)] = (5));

} else {
var statearr_4020_4097 = state_4002__$1;
(statearr_4020_4097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (15))){
var inst_3881 = (state_4002[(14)]);
var inst_3880 = (state_4002[(15)]);
var inst_3879 = (state_4002[(16)]);
var inst_3882 = (state_4002[(17)]);
var inst_3897 = (state_4002[(2)]);
var inst_3898 = (inst_3882 + (1));
var tmp4014 = inst_3881;
var tmp4015 = inst_3880;
var tmp4016 = inst_3879;
var inst_3879__$1 = tmp4016;
var inst_3880__$1 = tmp4015;
var inst_3881__$1 = tmp4014;
var inst_3882__$1 = inst_3898;
var state_4002__$1 = (function (){var statearr_4021 = state_4002;
(statearr_4021[(18)] = inst_3897);

(statearr_4021[(14)] = inst_3881__$1);

(statearr_4021[(15)] = inst_3880__$1);

(statearr_4021[(16)] = inst_3879__$1);

(statearr_4021[(17)] = inst_3882__$1);

return statearr_4021;
})();
var statearr_4022_4098 = state_4002__$1;
(statearr_4022_4098[(2)] = null);

(statearr_4022_4098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (21))){
var inst_3924 = (state_4002[(2)]);
var state_4002__$1 = state_4002;
var statearr_4026_4099 = state_4002__$1;
(statearr_4026_4099[(2)] = inst_3924);

(statearr_4026_4099[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (31))){
var inst_3950 = (state_4002[(12)]);
var inst_3954 = done.call(null,null);
var inst_3955 = cljs.core.async.untap_STAR_.call(null,m,inst_3950);
var state_4002__$1 = (function (){var statearr_4027 = state_4002;
(statearr_4027[(19)] = inst_3954);

return statearr_4027;
})();
var statearr_4028_4100 = state_4002__$1;
(statearr_4028_4100[(2)] = inst_3955);

(statearr_4028_4100[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (32))){
var inst_3945 = (state_4002[(9)]);
var inst_3944 = (state_4002[(20)]);
var inst_3943 = (state_4002[(10)]);
var inst_3942 = (state_4002[(21)]);
var inst_3957 = (state_4002[(2)]);
var inst_3958 = (inst_3945 + (1));
var tmp4023 = inst_3944;
var tmp4024 = inst_3943;
var tmp4025 = inst_3942;
var inst_3942__$1 = tmp4025;
var inst_3943__$1 = tmp4024;
var inst_3944__$1 = tmp4023;
var inst_3945__$1 = inst_3958;
var state_4002__$1 = (function (){var statearr_4029 = state_4002;
(statearr_4029[(9)] = inst_3945__$1);

(statearr_4029[(20)] = inst_3944__$1);

(statearr_4029[(10)] = inst_3943__$1);

(statearr_4029[(21)] = inst_3942__$1);

(statearr_4029[(22)] = inst_3957);

return statearr_4029;
})();
var statearr_4030_4101 = state_4002__$1;
(statearr_4030_4101[(2)] = null);

(statearr_4030_4101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (40))){
var inst_3970 = (state_4002[(23)]);
var inst_3974 = done.call(null,null);
var inst_3975 = cljs.core.async.untap_STAR_.call(null,m,inst_3970);
var state_4002__$1 = (function (){var statearr_4031 = state_4002;
(statearr_4031[(24)] = inst_3974);

return statearr_4031;
})();
var statearr_4032_4102 = state_4002__$1;
(statearr_4032_4102[(2)] = inst_3975);

(statearr_4032_4102[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (33))){
var inst_3961 = (state_4002[(25)]);
var inst_3963 = cljs.core.chunked_seq_QMARK_.call(null,inst_3961);
var state_4002__$1 = state_4002;
if(inst_3963){
var statearr_4033_4103 = state_4002__$1;
(statearr_4033_4103[(1)] = (36));

} else {
var statearr_4034_4104 = state_4002__$1;
(statearr_4034_4104[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (13))){
var inst_3891 = (state_4002[(26)]);
var inst_3894 = cljs.core.async.close_BANG_.call(null,inst_3891);
var state_4002__$1 = state_4002;
var statearr_4035_4105 = state_4002__$1;
(statearr_4035_4105[(2)] = inst_3894);

(statearr_4035_4105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (22))){
var inst_3914 = (state_4002[(8)]);
var inst_3917 = cljs.core.async.close_BANG_.call(null,inst_3914);
var state_4002__$1 = state_4002;
var statearr_4036_4106 = state_4002__$1;
(statearr_4036_4106[(2)] = inst_3917);

(statearr_4036_4106[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (36))){
var inst_3961 = (state_4002[(25)]);
var inst_3965 = cljs.core.chunk_first.call(null,inst_3961);
var inst_3966 = cljs.core.chunk_rest.call(null,inst_3961);
var inst_3967 = cljs.core.count.call(null,inst_3965);
var inst_3942 = inst_3966;
var inst_3943 = inst_3965;
var inst_3944 = inst_3967;
var inst_3945 = (0);
var state_4002__$1 = (function (){var statearr_4037 = state_4002;
(statearr_4037[(9)] = inst_3945);

(statearr_4037[(20)] = inst_3944);

(statearr_4037[(10)] = inst_3943);

(statearr_4037[(21)] = inst_3942);

return statearr_4037;
})();
var statearr_4038_4107 = state_4002__$1;
(statearr_4038_4107[(2)] = null);

(statearr_4038_4107[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (41))){
var inst_3961 = (state_4002[(25)]);
var inst_3977 = (state_4002[(2)]);
var inst_3978 = cljs.core.next.call(null,inst_3961);
var inst_3942 = inst_3978;
var inst_3943 = null;
var inst_3944 = (0);
var inst_3945 = (0);
var state_4002__$1 = (function (){var statearr_4039 = state_4002;
(statearr_4039[(9)] = inst_3945);

(statearr_4039[(20)] = inst_3944);

(statearr_4039[(10)] = inst_3943);

(statearr_4039[(21)] = inst_3942);

(statearr_4039[(27)] = inst_3977);

return statearr_4039;
})();
var statearr_4040_4108 = state_4002__$1;
(statearr_4040_4108[(2)] = null);

(statearr_4040_4108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (43))){
var state_4002__$1 = state_4002;
var statearr_4041_4109 = state_4002__$1;
(statearr_4041_4109[(2)] = null);

(statearr_4041_4109[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (29))){
var inst_3986 = (state_4002[(2)]);
var state_4002__$1 = state_4002;
var statearr_4042_4110 = state_4002__$1;
(statearr_4042_4110[(2)] = inst_3986);

(statearr_4042_4110[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (44))){
var inst_3995 = (state_4002[(2)]);
var state_4002__$1 = (function (){var statearr_4043 = state_4002;
(statearr_4043[(28)] = inst_3995);

return statearr_4043;
})();
var statearr_4044_4111 = state_4002__$1;
(statearr_4044_4111[(2)] = null);

(statearr_4044_4111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (6))){
var inst_3934 = (state_4002[(29)]);
var inst_3933 = cljs.core.deref.call(null,cs);
var inst_3934__$1 = cljs.core.keys.call(null,inst_3933);
var inst_3935 = cljs.core.count.call(null,inst_3934__$1);
var inst_3936 = cljs.core.reset_BANG_.call(null,dctr,inst_3935);
var inst_3941 = cljs.core.seq.call(null,inst_3934__$1);
var inst_3942 = inst_3941;
var inst_3943 = null;
var inst_3944 = (0);
var inst_3945 = (0);
var state_4002__$1 = (function (){var statearr_4045 = state_4002;
(statearr_4045[(9)] = inst_3945);

(statearr_4045[(29)] = inst_3934__$1);

(statearr_4045[(20)] = inst_3944);

(statearr_4045[(10)] = inst_3943);

(statearr_4045[(21)] = inst_3942);

(statearr_4045[(30)] = inst_3936);

return statearr_4045;
})();
var statearr_4046_4112 = state_4002__$1;
(statearr_4046_4112[(2)] = null);

(statearr_4046_4112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (28))){
var inst_3942 = (state_4002[(21)]);
var inst_3961 = (state_4002[(25)]);
var inst_3961__$1 = cljs.core.seq.call(null,inst_3942);
var state_4002__$1 = (function (){var statearr_4047 = state_4002;
(statearr_4047[(25)] = inst_3961__$1);

return statearr_4047;
})();
if(inst_3961__$1){
var statearr_4048_4113 = state_4002__$1;
(statearr_4048_4113[(1)] = (33));

} else {
var statearr_4049_4114 = state_4002__$1;
(statearr_4049_4114[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (25))){
var inst_3945 = (state_4002[(9)]);
var inst_3944 = (state_4002[(20)]);
var inst_3947 = (inst_3945 < inst_3944);
var inst_3948 = inst_3947;
var state_4002__$1 = state_4002;
if(cljs.core.truth_(inst_3948)){
var statearr_4050_4115 = state_4002__$1;
(statearr_4050_4115[(1)] = (27));

} else {
var statearr_4051_4116 = state_4002__$1;
(statearr_4051_4116[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (34))){
var state_4002__$1 = state_4002;
var statearr_4052_4117 = state_4002__$1;
(statearr_4052_4117[(2)] = null);

(statearr_4052_4117[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (17))){
var state_4002__$1 = state_4002;
var statearr_4053_4118 = state_4002__$1;
(statearr_4053_4118[(2)] = null);

(statearr_4053_4118[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (3))){
var inst_4000 = (state_4002[(2)]);
var state_4002__$1 = state_4002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4002__$1,inst_4000);
} else {
if((state_val_4003 === (12))){
var inst_3929 = (state_4002[(2)]);
var state_4002__$1 = state_4002;
var statearr_4054_4119 = state_4002__$1;
(statearr_4054_4119[(2)] = inst_3929);

(statearr_4054_4119[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (2))){
var state_4002__$1 = state_4002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4002__$1,(4),ch);
} else {
if((state_val_4003 === (23))){
var state_4002__$1 = state_4002;
var statearr_4055_4120 = state_4002__$1;
(statearr_4055_4120[(2)] = null);

(statearr_4055_4120[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (35))){
var inst_3984 = (state_4002[(2)]);
var state_4002__$1 = state_4002;
var statearr_4056_4121 = state_4002__$1;
(statearr_4056_4121[(2)] = inst_3984);

(statearr_4056_4121[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (19))){
var inst_3901 = (state_4002[(7)]);
var inst_3905 = cljs.core.chunk_first.call(null,inst_3901);
var inst_3906 = cljs.core.chunk_rest.call(null,inst_3901);
var inst_3907 = cljs.core.count.call(null,inst_3905);
var inst_3879 = inst_3906;
var inst_3880 = inst_3905;
var inst_3881 = inst_3907;
var inst_3882 = (0);
var state_4002__$1 = (function (){var statearr_4057 = state_4002;
(statearr_4057[(14)] = inst_3881);

(statearr_4057[(15)] = inst_3880);

(statearr_4057[(16)] = inst_3879);

(statearr_4057[(17)] = inst_3882);

return statearr_4057;
})();
var statearr_4058_4122 = state_4002__$1;
(statearr_4058_4122[(2)] = null);

(statearr_4058_4122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (11))){
var inst_3901 = (state_4002[(7)]);
var inst_3879 = (state_4002[(16)]);
var inst_3901__$1 = cljs.core.seq.call(null,inst_3879);
var state_4002__$1 = (function (){var statearr_4059 = state_4002;
(statearr_4059[(7)] = inst_3901__$1);

return statearr_4059;
})();
if(inst_3901__$1){
var statearr_4060_4123 = state_4002__$1;
(statearr_4060_4123[(1)] = (16));

} else {
var statearr_4061_4124 = state_4002__$1;
(statearr_4061_4124[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (9))){
var inst_3931 = (state_4002[(2)]);
var state_4002__$1 = state_4002;
var statearr_4062_4125 = state_4002__$1;
(statearr_4062_4125[(2)] = inst_3931);

(statearr_4062_4125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (5))){
var inst_3877 = cljs.core.deref.call(null,cs);
var inst_3878 = cljs.core.seq.call(null,inst_3877);
var inst_3879 = inst_3878;
var inst_3880 = null;
var inst_3881 = (0);
var inst_3882 = (0);
var state_4002__$1 = (function (){var statearr_4063 = state_4002;
(statearr_4063[(14)] = inst_3881);

(statearr_4063[(15)] = inst_3880);

(statearr_4063[(16)] = inst_3879);

(statearr_4063[(17)] = inst_3882);

return statearr_4063;
})();
var statearr_4064_4126 = state_4002__$1;
(statearr_4064_4126[(2)] = null);

(statearr_4064_4126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (14))){
var state_4002__$1 = state_4002;
var statearr_4065_4127 = state_4002__$1;
(statearr_4065_4127[(2)] = null);

(statearr_4065_4127[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (45))){
var inst_3992 = (state_4002[(2)]);
var state_4002__$1 = state_4002;
var statearr_4066_4128 = state_4002__$1;
(statearr_4066_4128[(2)] = inst_3992);

(statearr_4066_4128[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (26))){
var inst_3934 = (state_4002[(29)]);
var inst_3988 = (state_4002[(2)]);
var inst_3989 = cljs.core.seq.call(null,inst_3934);
var state_4002__$1 = (function (){var statearr_4067 = state_4002;
(statearr_4067[(31)] = inst_3988);

return statearr_4067;
})();
if(inst_3989){
var statearr_4068_4129 = state_4002__$1;
(statearr_4068_4129[(1)] = (42));

} else {
var statearr_4069_4130 = state_4002__$1;
(statearr_4069_4130[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (16))){
var inst_3901 = (state_4002[(7)]);
var inst_3903 = cljs.core.chunked_seq_QMARK_.call(null,inst_3901);
var state_4002__$1 = state_4002;
if(inst_3903){
var statearr_4070_4131 = state_4002__$1;
(statearr_4070_4131[(1)] = (19));

} else {
var statearr_4071_4132 = state_4002__$1;
(statearr_4071_4132[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (38))){
var inst_3981 = (state_4002[(2)]);
var state_4002__$1 = state_4002;
var statearr_4072_4133 = state_4002__$1;
(statearr_4072_4133[(2)] = inst_3981);

(statearr_4072_4133[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (30))){
var state_4002__$1 = state_4002;
var statearr_4073_4134 = state_4002__$1;
(statearr_4073_4134[(2)] = null);

(statearr_4073_4134[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (10))){
var inst_3880 = (state_4002[(15)]);
var inst_3882 = (state_4002[(17)]);
var inst_3890 = cljs.core._nth.call(null,inst_3880,inst_3882);
var inst_3891 = cljs.core.nth.call(null,inst_3890,(0),null);
var inst_3892 = cljs.core.nth.call(null,inst_3890,(1),null);
var state_4002__$1 = (function (){var statearr_4074 = state_4002;
(statearr_4074[(26)] = inst_3891);

return statearr_4074;
})();
if(cljs.core.truth_(inst_3892)){
var statearr_4075_4135 = state_4002__$1;
(statearr_4075_4135[(1)] = (13));

} else {
var statearr_4076_4136 = state_4002__$1;
(statearr_4076_4136[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (18))){
var inst_3927 = (state_4002[(2)]);
var state_4002__$1 = state_4002;
var statearr_4077_4137 = state_4002__$1;
(statearr_4077_4137[(2)] = inst_3927);

(statearr_4077_4137[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (42))){
var state_4002__$1 = state_4002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4002__$1,(45),dchan);
} else {
if((state_val_4003 === (37))){
var inst_3870 = (state_4002[(11)]);
var inst_3970 = (state_4002[(23)]);
var inst_3961 = (state_4002[(25)]);
var inst_3970__$1 = cljs.core.first.call(null,inst_3961);
var inst_3971 = cljs.core.async.put_BANG_.call(null,inst_3970__$1,inst_3870,done);
var state_4002__$1 = (function (){var statearr_4078 = state_4002;
(statearr_4078[(23)] = inst_3970__$1);

return statearr_4078;
})();
if(cljs.core.truth_(inst_3971)){
var statearr_4079_4138 = state_4002__$1;
(statearr_4079_4138[(1)] = (39));

} else {
var statearr_4080_4139 = state_4002__$1;
(statearr_4080_4139[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4003 === (8))){
var inst_3881 = (state_4002[(14)]);
var inst_3882 = (state_4002[(17)]);
var inst_3884 = (inst_3882 < inst_3881);
var inst_3885 = inst_3884;
var state_4002__$1 = state_4002;
if(cljs.core.truth_(inst_3885)){
var statearr_4081_4140 = state_4002__$1;
(statearr_4081_4140[(1)] = (10));

} else {
var statearr_4082_4141 = state_4002__$1;
(statearr_4082_4141[(1)] = (11));

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
});})(c__3282__auto___4087,cs,m,dchan,dctr,done))
;
return ((function (switch__3194__auto__,c__3282__auto___4087,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__3195__auto__ = null;
var cljs$core$async$mult_$_state_machine__3195__auto____0 = (function (){
var statearr_4083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4083[(0)] = cljs$core$async$mult_$_state_machine__3195__auto__);

(statearr_4083[(1)] = (1));

return statearr_4083;
});
var cljs$core$async$mult_$_state_machine__3195__auto____1 = (function (state_4002){
while(true){
var ret_value__3196__auto__ = (function (){try{while(true){
var result__3197__auto__ = switch__3194__auto__.call(null,state_4002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3197__auto__;
}
break;
}
}catch (e4084){if((e4084 instanceof Object)){
var ex__3198__auto__ = e4084;
var statearr_4085_4142 = state_4002;
(statearr_4085_4142[(5)] = ex__3198__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4143 = state_4002;
state_4002 = G__4143;
continue;
} else {
return ret_value__3196__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__3195__auto__ = function(state_4002){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__3195__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__3195__auto____1.call(this,state_4002);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__3195__auto____0;
cljs$core$async$mult_$_state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__3195__auto____1;
return cljs$core$async$mult_$_state_machine__3195__auto__;
})()
;})(switch__3194__auto__,c__3282__auto___4087,cs,m,dchan,dctr,done))
})();
var state__3284__auto__ = (function (){var statearr_4086 = f__3283__auto__.call(null);
(statearr_4086[(6)] = c__3282__auto___4087);

return statearr_4086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3284__auto__);
});})(c__3282__auto___4087,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__4145 = arguments.length;
switch (G__4145) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___4157 = arguments.length;
var i__4500__auto___4158 = (0);
while(true){
if((i__4500__auto___4158 < len__4499__auto___4157)){
args__4502__auto__.push((arguments[i__4500__auto___4158]));

var G__4159 = (i__4500__auto___4158 + (1));
i__4500__auto___4158 = G__4159;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__4151){
var map__4152 = p__4151;
var map__4152__$1 = ((((!((map__4152 == null)))?(((((map__4152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4152):map__4152);
var opts = map__4152__$1;
var statearr_4154_4160 = state;
(statearr_4154_4160[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__4152,map__4152__$1,opts){
return (function (val){
var statearr_4155_4161 = state;
(statearr_4155_4161[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__4152,map__4152__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_4156_4162 = state;
(statearr_4156_4162[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq4147){
var G__4148 = cljs.core.first.call(null,seq4147);
var seq4147__$1 = cljs.core.next.call(null,seq4147);
var G__4149 = cljs.core.first.call(null,seq4147__$1);
var seq4147__$2 = cljs.core.next.call(null,seq4147__$1);
var G__4150 = cljs.core.first.call(null,seq4147__$2);
var seq4147__$3 = cljs.core.next.call(null,seq4147__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4148,G__4149,G__4150,seq4147__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async4163 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4163 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta4164){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta4164 = meta4164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_4165,meta4164__$1){
var self__ = this;
var _4165__$1 = this;
return (new cljs.core.async.t_cljs$core$async4163(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta4164__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4163.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_4165){
var self__ = this;
var _4165__$1 = this;
return self__.meta4164;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4163.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4163.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4163.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4163.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4163.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4163.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4163.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4163.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4163.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta4164","meta4164",-2081005604,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4163.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4163";

cljs.core.async.t_cljs$core$async4163.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4163");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4163.
 */
cljs.core.async.__GT_t_cljs$core$async4163 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async4163(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta4164){
return (new cljs.core.async.t_cljs$core$async4163(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta4164));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async4163(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3282__auto___4327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3282__auto___4327,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__3283__auto__ = (function (){var switch__3194__auto__ = ((function (c__3282__auto___4327,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_4267){
var state_val_4268 = (state_4267[(1)]);
if((state_val_4268 === (7))){
var inst_4182 = (state_4267[(2)]);
var state_4267__$1 = state_4267;
var statearr_4269_4328 = state_4267__$1;
(statearr_4269_4328[(2)] = inst_4182);

(statearr_4269_4328[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (20))){
var inst_4194 = (state_4267[(7)]);
var state_4267__$1 = state_4267;
var statearr_4270_4329 = state_4267__$1;
(statearr_4270_4329[(2)] = inst_4194);

(statearr_4270_4329[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (27))){
var state_4267__$1 = state_4267;
var statearr_4271_4330 = state_4267__$1;
(statearr_4271_4330[(2)] = null);

(statearr_4271_4330[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (1))){
var inst_4169 = (state_4267[(8)]);
var inst_4169__$1 = calc_state.call(null);
var inst_4171 = (inst_4169__$1 == null);
var inst_4172 = cljs.core.not.call(null,inst_4171);
var state_4267__$1 = (function (){var statearr_4272 = state_4267;
(statearr_4272[(8)] = inst_4169__$1);

return statearr_4272;
})();
if(inst_4172){
var statearr_4273_4331 = state_4267__$1;
(statearr_4273_4331[(1)] = (2));

} else {
var statearr_4274_4332 = state_4267__$1;
(statearr_4274_4332[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (24))){
var inst_4227 = (state_4267[(9)]);
var inst_4241 = (state_4267[(10)]);
var inst_4218 = (state_4267[(11)]);
var inst_4241__$1 = inst_4218.call(null,inst_4227);
var state_4267__$1 = (function (){var statearr_4275 = state_4267;
(statearr_4275[(10)] = inst_4241__$1);

return statearr_4275;
})();
if(cljs.core.truth_(inst_4241__$1)){
var statearr_4276_4333 = state_4267__$1;
(statearr_4276_4333[(1)] = (29));

} else {
var statearr_4277_4334 = state_4267__$1;
(statearr_4277_4334[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (4))){
var inst_4185 = (state_4267[(2)]);
var state_4267__$1 = state_4267;
if(cljs.core.truth_(inst_4185)){
var statearr_4278_4335 = state_4267__$1;
(statearr_4278_4335[(1)] = (8));

} else {
var statearr_4279_4336 = state_4267__$1;
(statearr_4279_4336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (15))){
var inst_4212 = (state_4267[(2)]);
var state_4267__$1 = state_4267;
if(cljs.core.truth_(inst_4212)){
var statearr_4280_4337 = state_4267__$1;
(statearr_4280_4337[(1)] = (19));

} else {
var statearr_4281_4338 = state_4267__$1;
(statearr_4281_4338[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (21))){
var inst_4217 = (state_4267[(12)]);
var inst_4217__$1 = (state_4267[(2)]);
var inst_4218 = cljs.core.get.call(null,inst_4217__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4219 = cljs.core.get.call(null,inst_4217__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4220 = cljs.core.get.call(null,inst_4217__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_4267__$1 = (function (){var statearr_4282 = state_4267;
(statearr_4282[(11)] = inst_4218);

(statearr_4282[(12)] = inst_4217__$1);

(statearr_4282[(13)] = inst_4219);

return statearr_4282;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_4267__$1,(22),inst_4220);
} else {
if((state_val_4268 === (31))){
var inst_4249 = (state_4267[(2)]);
var state_4267__$1 = state_4267;
if(cljs.core.truth_(inst_4249)){
var statearr_4283_4339 = state_4267__$1;
(statearr_4283_4339[(1)] = (32));

} else {
var statearr_4284_4340 = state_4267__$1;
(statearr_4284_4340[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (32))){
var inst_4226 = (state_4267[(14)]);
var state_4267__$1 = state_4267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4267__$1,(35),out,inst_4226);
} else {
if((state_val_4268 === (33))){
var inst_4217 = (state_4267[(12)]);
var inst_4194 = inst_4217;
var state_4267__$1 = (function (){var statearr_4285 = state_4267;
(statearr_4285[(7)] = inst_4194);

return statearr_4285;
})();
var statearr_4286_4341 = state_4267__$1;
(statearr_4286_4341[(2)] = null);

(statearr_4286_4341[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (13))){
var inst_4194 = (state_4267[(7)]);
var inst_4201 = inst_4194.cljs$lang$protocol_mask$partition0$;
var inst_4202 = (inst_4201 & (64));
var inst_4203 = inst_4194.cljs$core$ISeq$;
var inst_4204 = (cljs.core.PROTOCOL_SENTINEL === inst_4203);
var inst_4205 = ((inst_4202) || (inst_4204));
var state_4267__$1 = state_4267;
if(cljs.core.truth_(inst_4205)){
var statearr_4287_4342 = state_4267__$1;
(statearr_4287_4342[(1)] = (16));

} else {
var statearr_4288_4343 = state_4267__$1;
(statearr_4288_4343[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (22))){
var inst_4227 = (state_4267[(9)]);
var inst_4226 = (state_4267[(14)]);
var inst_4225 = (state_4267[(2)]);
var inst_4226__$1 = cljs.core.nth.call(null,inst_4225,(0),null);
var inst_4227__$1 = cljs.core.nth.call(null,inst_4225,(1),null);
var inst_4228 = (inst_4226__$1 == null);
var inst_4229 = cljs.core._EQ_.call(null,inst_4227__$1,change);
var inst_4230 = ((inst_4228) || (inst_4229));
var state_4267__$1 = (function (){var statearr_4289 = state_4267;
(statearr_4289[(9)] = inst_4227__$1);

(statearr_4289[(14)] = inst_4226__$1);

return statearr_4289;
})();
if(cljs.core.truth_(inst_4230)){
var statearr_4290_4344 = state_4267__$1;
(statearr_4290_4344[(1)] = (23));

} else {
var statearr_4291_4345 = state_4267__$1;
(statearr_4291_4345[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (36))){
var inst_4217 = (state_4267[(12)]);
var inst_4194 = inst_4217;
var state_4267__$1 = (function (){var statearr_4292 = state_4267;
(statearr_4292[(7)] = inst_4194);

return statearr_4292;
})();
var statearr_4293_4346 = state_4267__$1;
(statearr_4293_4346[(2)] = null);

(statearr_4293_4346[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (29))){
var inst_4241 = (state_4267[(10)]);
var state_4267__$1 = state_4267;
var statearr_4294_4347 = state_4267__$1;
(statearr_4294_4347[(2)] = inst_4241);

(statearr_4294_4347[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (6))){
var state_4267__$1 = state_4267;
var statearr_4295_4348 = state_4267__$1;
(statearr_4295_4348[(2)] = false);

(statearr_4295_4348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (28))){
var inst_4237 = (state_4267[(2)]);
var inst_4238 = calc_state.call(null);
var inst_4194 = inst_4238;
var state_4267__$1 = (function (){var statearr_4296 = state_4267;
(statearr_4296[(7)] = inst_4194);

(statearr_4296[(15)] = inst_4237);

return statearr_4296;
})();
var statearr_4297_4349 = state_4267__$1;
(statearr_4297_4349[(2)] = null);

(statearr_4297_4349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (25))){
var inst_4263 = (state_4267[(2)]);
var state_4267__$1 = state_4267;
var statearr_4298_4350 = state_4267__$1;
(statearr_4298_4350[(2)] = inst_4263);

(statearr_4298_4350[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (34))){
var inst_4261 = (state_4267[(2)]);
var state_4267__$1 = state_4267;
var statearr_4299_4351 = state_4267__$1;
(statearr_4299_4351[(2)] = inst_4261);

(statearr_4299_4351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (17))){
var state_4267__$1 = state_4267;
var statearr_4300_4352 = state_4267__$1;
(statearr_4300_4352[(2)] = false);

(statearr_4300_4352[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (3))){
var state_4267__$1 = state_4267;
var statearr_4301_4353 = state_4267__$1;
(statearr_4301_4353[(2)] = false);

(statearr_4301_4353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (12))){
var inst_4265 = (state_4267[(2)]);
var state_4267__$1 = state_4267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4267__$1,inst_4265);
} else {
if((state_val_4268 === (2))){
var inst_4169 = (state_4267[(8)]);
var inst_4174 = inst_4169.cljs$lang$protocol_mask$partition0$;
var inst_4175 = (inst_4174 & (64));
var inst_4176 = inst_4169.cljs$core$ISeq$;
var inst_4177 = (cljs.core.PROTOCOL_SENTINEL === inst_4176);
var inst_4178 = ((inst_4175) || (inst_4177));
var state_4267__$1 = state_4267;
if(cljs.core.truth_(inst_4178)){
var statearr_4302_4354 = state_4267__$1;
(statearr_4302_4354[(1)] = (5));

} else {
var statearr_4303_4355 = state_4267__$1;
(statearr_4303_4355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (23))){
var inst_4226 = (state_4267[(14)]);
var inst_4232 = (inst_4226 == null);
var state_4267__$1 = state_4267;
if(cljs.core.truth_(inst_4232)){
var statearr_4304_4356 = state_4267__$1;
(statearr_4304_4356[(1)] = (26));

} else {
var statearr_4305_4357 = state_4267__$1;
(statearr_4305_4357[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (35))){
var inst_4252 = (state_4267[(2)]);
var state_4267__$1 = state_4267;
if(cljs.core.truth_(inst_4252)){
var statearr_4306_4358 = state_4267__$1;
(statearr_4306_4358[(1)] = (36));

} else {
var statearr_4307_4359 = state_4267__$1;
(statearr_4307_4359[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (19))){
var inst_4194 = (state_4267[(7)]);
var inst_4214 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4194);
var state_4267__$1 = state_4267;
var statearr_4308_4360 = state_4267__$1;
(statearr_4308_4360[(2)] = inst_4214);

(statearr_4308_4360[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (11))){
var inst_4194 = (state_4267[(7)]);
var inst_4198 = (inst_4194 == null);
var inst_4199 = cljs.core.not.call(null,inst_4198);
var state_4267__$1 = state_4267;
if(inst_4199){
var statearr_4309_4361 = state_4267__$1;
(statearr_4309_4361[(1)] = (13));

} else {
var statearr_4310_4362 = state_4267__$1;
(statearr_4310_4362[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (9))){
var inst_4169 = (state_4267[(8)]);
var state_4267__$1 = state_4267;
var statearr_4311_4363 = state_4267__$1;
(statearr_4311_4363[(2)] = inst_4169);

(statearr_4311_4363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (5))){
var state_4267__$1 = state_4267;
var statearr_4312_4364 = state_4267__$1;
(statearr_4312_4364[(2)] = true);

(statearr_4312_4364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (14))){
var state_4267__$1 = state_4267;
var statearr_4313_4365 = state_4267__$1;
(statearr_4313_4365[(2)] = false);

(statearr_4313_4365[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (26))){
var inst_4227 = (state_4267[(9)]);
var inst_4234 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_4227);
var state_4267__$1 = state_4267;
var statearr_4314_4366 = state_4267__$1;
(statearr_4314_4366[(2)] = inst_4234);

(statearr_4314_4366[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (16))){
var state_4267__$1 = state_4267;
var statearr_4315_4367 = state_4267__$1;
(statearr_4315_4367[(2)] = true);

(statearr_4315_4367[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (38))){
var inst_4257 = (state_4267[(2)]);
var state_4267__$1 = state_4267;
var statearr_4316_4368 = state_4267__$1;
(statearr_4316_4368[(2)] = inst_4257);

(statearr_4316_4368[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (30))){
var inst_4227 = (state_4267[(9)]);
var inst_4218 = (state_4267[(11)]);
var inst_4219 = (state_4267[(13)]);
var inst_4244 = cljs.core.empty_QMARK_.call(null,inst_4218);
var inst_4245 = inst_4219.call(null,inst_4227);
var inst_4246 = cljs.core.not.call(null,inst_4245);
var inst_4247 = ((inst_4244) && (inst_4246));
var state_4267__$1 = state_4267;
var statearr_4317_4369 = state_4267__$1;
(statearr_4317_4369[(2)] = inst_4247);

(statearr_4317_4369[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (10))){
var inst_4169 = (state_4267[(8)]);
var inst_4190 = (state_4267[(2)]);
var inst_4191 = cljs.core.get.call(null,inst_4190,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4192 = cljs.core.get.call(null,inst_4190,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4193 = cljs.core.get.call(null,inst_4190,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_4194 = inst_4169;
var state_4267__$1 = (function (){var statearr_4318 = state_4267;
(statearr_4318[(16)] = inst_4191);

(statearr_4318[(7)] = inst_4194);

(statearr_4318[(17)] = inst_4193);

(statearr_4318[(18)] = inst_4192);

return statearr_4318;
})();
var statearr_4319_4370 = state_4267__$1;
(statearr_4319_4370[(2)] = null);

(statearr_4319_4370[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (18))){
var inst_4209 = (state_4267[(2)]);
var state_4267__$1 = state_4267;
var statearr_4320_4371 = state_4267__$1;
(statearr_4320_4371[(2)] = inst_4209);

(statearr_4320_4371[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (37))){
var state_4267__$1 = state_4267;
var statearr_4321_4372 = state_4267__$1;
(statearr_4321_4372[(2)] = null);

(statearr_4321_4372[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4268 === (8))){
var inst_4169 = (state_4267[(8)]);
var inst_4187 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4169);
var state_4267__$1 = state_4267;
var statearr_4322_4373 = state_4267__$1;
(statearr_4322_4373[(2)] = inst_4187);

(statearr_4322_4373[(1)] = (10));


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
});})(c__3282__auto___4327,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__3194__auto__,c__3282__auto___4327,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__3195__auto__ = null;
var cljs$core$async$mix_$_state_machine__3195__auto____0 = (function (){
var statearr_4323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4323[(0)] = cljs$core$async$mix_$_state_machine__3195__auto__);

(statearr_4323[(1)] = (1));

return statearr_4323;
});
var cljs$core$async$mix_$_state_machine__3195__auto____1 = (function (state_4267){
while(true){
var ret_value__3196__auto__ = (function (){try{while(true){
var result__3197__auto__ = switch__3194__auto__.call(null,state_4267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3197__auto__;
}
break;
}
}catch (e4324){if((e4324 instanceof Object)){
var ex__3198__auto__ = e4324;
var statearr_4325_4374 = state_4267;
(statearr_4325_4374[(5)] = ex__3198__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4375 = state_4267;
state_4267 = G__4375;
continue;
} else {
return ret_value__3196__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__3195__auto__ = function(state_4267){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__3195__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__3195__auto____1.call(this,state_4267);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__3195__auto____0;
cljs$core$async$mix_$_state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__3195__auto____1;
return cljs$core$async$mix_$_state_machine__3195__auto__;
})()
;})(switch__3194__auto__,c__3282__auto___4327,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__3284__auto__ = (function (){var statearr_4326 = f__3283__auto__.call(null);
(statearr_4326[(6)] = c__3282__auto___4327);

return statearr_4326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3284__auto__);
});})(c__3282__auto___4327,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__4377 = arguments.length;
switch (G__4377) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__4381 = arguments.length;
switch (G__4381) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__4379_SHARP_){
if(cljs.core.truth_(p1__4379_SHARP_.call(null,topic))){
return p1__4379_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__4379_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async4382 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4382 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta4383){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta4383 = meta4383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_4384,meta4383__$1){
var self__ = this;
var _4384__$1 = this;
return (new cljs.core.async.t_cljs$core$async4382(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta4383__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4382.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_4384){
var self__ = this;
var _4384__$1 = this;
return self__.meta4383;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4382.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4382.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4382.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4382.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4382.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4382.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4382.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4382.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta4383","meta4383",1389729701,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4382.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4382.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4382";

cljs.core.async.t_cljs$core$async4382.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4382");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4382.
 */
cljs.core.async.__GT_t_cljs$core$async4382 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async4382(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4383){
return (new cljs.core.async.t_cljs$core$async4382(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4383));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async4382(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3282__auto___4502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3282__auto___4502,mults,ensure_mult,p){
return (function (){
var f__3283__auto__ = (function (){var switch__3194__auto__ = ((function (c__3282__auto___4502,mults,ensure_mult,p){
return (function (state_4456){
var state_val_4457 = (state_4456[(1)]);
if((state_val_4457 === (7))){
var inst_4452 = (state_4456[(2)]);
var state_4456__$1 = state_4456;
var statearr_4458_4503 = state_4456__$1;
(statearr_4458_4503[(2)] = inst_4452);

(statearr_4458_4503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4457 === (20))){
var state_4456__$1 = state_4456;
var statearr_4459_4504 = state_4456__$1;
(statearr_4459_4504[(2)] = null);

(statearr_4459_4504[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4457 === (1))){
var state_4456__$1 = state_4456;
var statearr_4460_4505 = state_4456__$1;
(statearr_4460_4505[(2)] = null);

(statearr_4460_4505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4457 === (24))){
var inst_4435 = (state_4456[(7)]);
var inst_4444 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_4435);
var state_4456__$1 = state_4456;
var statearr_4461_4506 = state_4456__$1;
(statearr_4461_4506[(2)] = inst_4444);

(statearr_4461_4506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4457 === (4))){
var inst_4387 = (state_4456[(8)]);
var inst_4387__$1 = (state_4456[(2)]);
var inst_4388 = (inst_4387__$1 == null);
var state_4456__$1 = (function (){var statearr_4462 = state_4456;
(statearr_4462[(8)] = inst_4387__$1);

return statearr_4462;
})();
if(cljs.core.truth_(inst_4388)){
var statearr_4463_4507 = state_4456__$1;
(statearr_4463_4507[(1)] = (5));

} else {
var statearr_4464_4508 = state_4456__$1;
(statearr_4464_4508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4457 === (15))){
var inst_4429 = (state_4456[(2)]);
var state_4456__$1 = state_4456;
var statearr_4465_4509 = state_4456__$1;
(statearr_4465_4509[(2)] = inst_4429);

(statearr_4465_4509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4457 === (21))){
var inst_4449 = (state_4456[(2)]);
var state_4456__$1 = (function (){var statearr_4466 = state_4456;
(statearr_4466[(9)] = inst_4449);

return statearr_4466;
})();
var statearr_4467_4510 = state_4456__$1;
(statearr_4467_4510[(2)] = null);

(statearr_4467_4510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4457 === (13))){
var inst_4411 = (state_4456[(10)]);
var inst_4413 = cljs.core.chunked_seq_QMARK_.call(null,inst_4411);
var state_4456__$1 = state_4456;
if(inst_4413){
var statearr_4468_4511 = state_4456__$1;
(statearr_4468_4511[(1)] = (16));

} else {
var statearr_4469_4512 = state_4456__$1;
(statearr_4469_4512[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4457 === (22))){
var inst_4441 = (state_4456[(2)]);
var state_4456__$1 = state_4456;
if(cljs.core.truth_(inst_4441)){
var statearr_4470_4513 = state_4456__$1;
(statearr_4470_4513[(1)] = (23));

} else {
var statearr_4471_4514 = state_4456__$1;
(statearr_4471_4514[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4457 === (6))){
var inst_4437 = (state_4456[(11)]);
var inst_4435 = (state_4456[(7)]);
var inst_4387 = (state_4456[(8)]);
var inst_4435__$1 = topic_fn.call(null,inst_4387);
var inst_4436 = cljs.core.deref.call(null,mults);
var inst_4437__$1 = cljs.core.get.call(null,inst_4436,inst_4435__$1);
var state_4456__$1 = (function (){var statearr_4472 = state_4456;
(statearr_4472[(11)] = inst_4437__$1);

(statearr_4472[(7)] = inst_4435__$1);

return statearr_4472;
})();
if(cljs.core.truth_(inst_4437__$1)){
var statearr_4473_4515 = state_4456__$1;
(statearr_4473_4515[(1)] = (19));

} else {
var statearr_4474_4516 = state_4456__$1;
(statearr_4474_4516[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4457 === (25))){
var inst_4446 = (state_4456[(2)]);
var state_4456__$1 = state_4456;
var statearr_4475_4517 = state_4456__$1;
(statearr_4475_4517[(2)] = inst_4446);

(statearr_4475_4517[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4457 === (17))){
var inst_4411 = (state_4456[(10)]);
var inst_4420 = cljs.core.first.call(null,inst_4411);
var inst_4421 = cljs.core.async.muxch_STAR_.call(null,inst_4420);
var inst_4422 = cljs.core.async.close_BANG_.call(null,inst_4421);
var inst_4423 = cljs.core.next.call(null,inst_4411);
var inst_4397 = inst_4423;
var inst_4398 = null;
var inst_4399 = (0);
var inst_4400 = (0);
var state_4456__$1 = (function (){var statearr_4476 = state_4456;
(statearr_4476[(12)] = inst_4397);

(statearr_4476[(13)] = inst_4398);

(statearr_4476[(14)] = inst_4399);

(statearr_4476[(15)] = inst_4400);

(statearr_4476[(16)] = inst_4422);

return statearr_4476;
})();
var statearr_4477_4518 = state_4456__$1;
(statearr_4477_4518[(2)] = null);

(statearr_4477_4518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4457 === (3))){
var inst_4454 = (state_4456[(2)]);
var state_4456__$1 = state_4456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4456__$1,inst_4454);
} else {
if((state_val_4457 === (12))){
var inst_4431 = (state_4456[(2)]);
var state_4456__$1 = state_4456;
var statearr_4478_4519 = state_4456__$1;
(statearr_4478_4519[(2)] = inst_4431);

(statearr_4478_4519[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4457 === (2))){
var state_4456__$1 = state_4456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4456__$1,(4),ch);
} else {
if((state_val_4457 === (23))){
var state_4456__$1 = state_4456;
var statearr_4479_4520 = state_4456__$1;
(statearr_4479_4520[(2)] = null);

(statearr_4479_4520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4457 === (19))){
var inst_4437 = (state_4456[(11)]);
var inst_4387 = (state_4456[(8)]);
var inst_4439 = cljs.core.async.muxch_STAR_.call(null,inst_4437);
var state_4456__$1 = state_4456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4456__$1,(22),inst_4439,inst_4387);
} else {
if((state_val_4457 === (11))){
var inst_4397 = (state_4456[(12)]);
var inst_4411 = (state_4456[(10)]);
var inst_4411__$1 = cljs.core.seq.call(null,inst_4397);
var state_4456__$1 = (function (){var statearr_4480 = state_4456;
(statearr_4480[(10)] = inst_4411__$1);

return statearr_4480;
})();
if(inst_4411__$1){
var statearr_4481_4521 = state_4456__$1;
(statearr_4481_4521[(1)] = (13));

} else {
var statearr_4482_4522 = state_4456__$1;
(statearr_4482_4522[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4457 === (9))){
var inst_4433 = (state_4456[(2)]);
var state_4456__$1 = state_4456;
var statearr_4483_4523 = state_4456__$1;
(statearr_4483_4523[(2)] = inst_4433);

(statearr_4483_4523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4457 === (5))){
var inst_4394 = cljs.core.deref.call(null,mults);
var inst_4395 = cljs.core.vals.call(null,inst_4394);
var inst_4396 = cljs.core.seq.call(null,inst_4395);
var inst_4397 = inst_4396;
var inst_4398 = null;
var inst_4399 = (0);
var inst_4400 = (0);
var state_4456__$1 = (function (){var statearr_4484 = state_4456;
(statearr_4484[(12)] = inst_4397);

(statearr_4484[(13)] = inst_4398);

(statearr_4484[(14)] = inst_4399);

(statearr_4484[(15)] = inst_4400);

return statearr_4484;
})();
var statearr_4485_4524 = state_4456__$1;
(statearr_4485_4524[(2)] = null);

(statearr_4485_4524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4457 === (14))){
var state_4456__$1 = state_4456;
var statearr_4489_4525 = state_4456__$1;
(statearr_4489_4525[(2)] = null);

(statearr_4489_4525[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4457 === (16))){
var inst_4411 = (state_4456[(10)]);
var inst_4415 = cljs.core.chunk_first.call(null,inst_4411);
var inst_4416 = cljs.core.chunk_rest.call(null,inst_4411);
var inst_4417 = cljs.core.count.call(null,inst_4415);
var inst_4397 = inst_4416;
var inst_4398 = inst_4415;
var inst_4399 = inst_4417;
var inst_4400 = (0);
var state_4456__$1 = (function (){var statearr_4490 = state_4456;
(statearr_4490[(12)] = inst_4397);

(statearr_4490[(13)] = inst_4398);

(statearr_4490[(14)] = inst_4399);

(statearr_4490[(15)] = inst_4400);

return statearr_4490;
})();
var statearr_4491_4526 = state_4456__$1;
(statearr_4491_4526[(2)] = null);

(statearr_4491_4526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4457 === (10))){
var inst_4397 = (state_4456[(12)]);
var inst_4398 = (state_4456[(13)]);
var inst_4399 = (state_4456[(14)]);
var inst_4400 = (state_4456[(15)]);
var inst_4405 = cljs.core._nth.call(null,inst_4398,inst_4400);
var inst_4406 = cljs.core.async.muxch_STAR_.call(null,inst_4405);
var inst_4407 = cljs.core.async.close_BANG_.call(null,inst_4406);
var inst_4408 = (inst_4400 + (1));
var tmp4486 = inst_4397;
var tmp4487 = inst_4398;
var tmp4488 = inst_4399;
var inst_4397__$1 = tmp4486;
var inst_4398__$1 = tmp4487;
var inst_4399__$1 = tmp4488;
var inst_4400__$1 = inst_4408;
var state_4456__$1 = (function (){var statearr_4492 = state_4456;
(statearr_4492[(12)] = inst_4397__$1);

(statearr_4492[(13)] = inst_4398__$1);

(statearr_4492[(14)] = inst_4399__$1);

(statearr_4492[(17)] = inst_4407);

(statearr_4492[(15)] = inst_4400__$1);

return statearr_4492;
})();
var statearr_4493_4527 = state_4456__$1;
(statearr_4493_4527[(2)] = null);

(statearr_4493_4527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4457 === (18))){
var inst_4426 = (state_4456[(2)]);
var state_4456__$1 = state_4456;
var statearr_4494_4528 = state_4456__$1;
(statearr_4494_4528[(2)] = inst_4426);

(statearr_4494_4528[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4457 === (8))){
var inst_4399 = (state_4456[(14)]);
var inst_4400 = (state_4456[(15)]);
var inst_4402 = (inst_4400 < inst_4399);
var inst_4403 = inst_4402;
var state_4456__$1 = state_4456;
if(cljs.core.truth_(inst_4403)){
var statearr_4495_4529 = state_4456__$1;
(statearr_4495_4529[(1)] = (10));

} else {
var statearr_4496_4530 = state_4456__$1;
(statearr_4496_4530[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__3282__auto___4502,mults,ensure_mult,p))
;
return ((function (switch__3194__auto__,c__3282__auto___4502,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__3195__auto__ = null;
var cljs$core$async$state_machine__3195__auto____0 = (function (){
var statearr_4497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4497[(0)] = cljs$core$async$state_machine__3195__auto__);

(statearr_4497[(1)] = (1));

return statearr_4497;
});
var cljs$core$async$state_machine__3195__auto____1 = (function (state_4456){
while(true){
var ret_value__3196__auto__ = (function (){try{while(true){
var result__3197__auto__ = switch__3194__auto__.call(null,state_4456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3197__auto__;
}
break;
}
}catch (e4498){if((e4498 instanceof Object)){
var ex__3198__auto__ = e4498;
var statearr_4499_4531 = state_4456;
(statearr_4499_4531[(5)] = ex__3198__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4532 = state_4456;
state_4456 = G__4532;
continue;
} else {
return ret_value__3196__auto__;
}
break;
}
});
cljs$core$async$state_machine__3195__auto__ = function(state_4456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3195__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3195__auto____1.call(this,state_4456);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3195__auto____0;
cljs$core$async$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3195__auto____1;
return cljs$core$async$state_machine__3195__auto__;
})()
;})(switch__3194__auto__,c__3282__auto___4502,mults,ensure_mult,p))
})();
var state__3284__auto__ = (function (){var statearr_4500 = f__3283__auto__.call(null);
(statearr_4500[(6)] = c__3282__auto___4502);

return statearr_4500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3284__auto__);
});})(c__3282__auto___4502,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__4534 = arguments.length;
switch (G__4534) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__4537 = arguments.length;
switch (G__4537) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__4540 = arguments.length;
switch (G__4540) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__3282__auto___4607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3282__auto___4607,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__3283__auto__ = (function (){var switch__3194__auto__ = ((function (c__3282__auto___4607,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_4579){
var state_val_4580 = (state_4579[(1)]);
if((state_val_4580 === (7))){
var state_4579__$1 = state_4579;
var statearr_4581_4608 = state_4579__$1;
(statearr_4581_4608[(2)] = null);

(statearr_4581_4608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4580 === (1))){
var state_4579__$1 = state_4579;
var statearr_4582_4609 = state_4579__$1;
(statearr_4582_4609[(2)] = null);

(statearr_4582_4609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4580 === (4))){
var inst_4543 = (state_4579[(7)]);
var inst_4545 = (inst_4543 < cnt);
var state_4579__$1 = state_4579;
if(cljs.core.truth_(inst_4545)){
var statearr_4583_4610 = state_4579__$1;
(statearr_4583_4610[(1)] = (6));

} else {
var statearr_4584_4611 = state_4579__$1;
(statearr_4584_4611[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4580 === (15))){
var inst_4575 = (state_4579[(2)]);
var state_4579__$1 = state_4579;
var statearr_4585_4612 = state_4579__$1;
(statearr_4585_4612[(2)] = inst_4575);

(statearr_4585_4612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4580 === (13))){
var inst_4568 = cljs.core.async.close_BANG_.call(null,out);
var state_4579__$1 = state_4579;
var statearr_4586_4613 = state_4579__$1;
(statearr_4586_4613[(2)] = inst_4568);

(statearr_4586_4613[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4580 === (6))){
var state_4579__$1 = state_4579;
var statearr_4587_4614 = state_4579__$1;
(statearr_4587_4614[(2)] = null);

(statearr_4587_4614[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4580 === (3))){
var inst_4577 = (state_4579[(2)]);
var state_4579__$1 = state_4579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4579__$1,inst_4577);
} else {
if((state_val_4580 === (12))){
var inst_4565 = (state_4579[(8)]);
var inst_4565__$1 = (state_4579[(2)]);
var inst_4566 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_4565__$1);
var state_4579__$1 = (function (){var statearr_4588 = state_4579;
(statearr_4588[(8)] = inst_4565__$1);

return statearr_4588;
})();
if(cljs.core.truth_(inst_4566)){
var statearr_4589_4615 = state_4579__$1;
(statearr_4589_4615[(1)] = (13));

} else {
var statearr_4590_4616 = state_4579__$1;
(statearr_4590_4616[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4580 === (2))){
var inst_4542 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_4543 = (0);
var state_4579__$1 = (function (){var statearr_4591 = state_4579;
(statearr_4591[(7)] = inst_4543);

(statearr_4591[(9)] = inst_4542);

return statearr_4591;
})();
var statearr_4592_4617 = state_4579__$1;
(statearr_4592_4617[(2)] = null);

(statearr_4592_4617[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4580 === (11))){
var inst_4543 = (state_4579[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_4579,(10),Object,null,(9));
var inst_4552 = chs__$1.call(null,inst_4543);
var inst_4553 = done.call(null,inst_4543);
var inst_4554 = cljs.core.async.take_BANG_.call(null,inst_4552,inst_4553);
var state_4579__$1 = state_4579;
var statearr_4593_4618 = state_4579__$1;
(statearr_4593_4618[(2)] = inst_4554);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4579__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4580 === (9))){
var inst_4543 = (state_4579[(7)]);
var inst_4556 = (state_4579[(2)]);
var inst_4557 = (inst_4543 + (1));
var inst_4543__$1 = inst_4557;
var state_4579__$1 = (function (){var statearr_4594 = state_4579;
(statearr_4594[(7)] = inst_4543__$1);

(statearr_4594[(10)] = inst_4556);

return statearr_4594;
})();
var statearr_4595_4619 = state_4579__$1;
(statearr_4595_4619[(2)] = null);

(statearr_4595_4619[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4580 === (5))){
var inst_4563 = (state_4579[(2)]);
var state_4579__$1 = (function (){var statearr_4596 = state_4579;
(statearr_4596[(11)] = inst_4563);

return statearr_4596;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4579__$1,(12),dchan);
} else {
if((state_val_4580 === (14))){
var inst_4565 = (state_4579[(8)]);
var inst_4570 = cljs.core.apply.call(null,f,inst_4565);
var state_4579__$1 = state_4579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4579__$1,(16),out,inst_4570);
} else {
if((state_val_4580 === (16))){
var inst_4572 = (state_4579[(2)]);
var state_4579__$1 = (function (){var statearr_4597 = state_4579;
(statearr_4597[(12)] = inst_4572);

return statearr_4597;
})();
var statearr_4598_4620 = state_4579__$1;
(statearr_4598_4620[(2)] = null);

(statearr_4598_4620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4580 === (10))){
var inst_4547 = (state_4579[(2)]);
var inst_4548 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_4579__$1 = (function (){var statearr_4599 = state_4579;
(statearr_4599[(13)] = inst_4547);

return statearr_4599;
})();
var statearr_4600_4621 = state_4579__$1;
(statearr_4600_4621[(2)] = inst_4548);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4579__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4580 === (8))){
var inst_4561 = (state_4579[(2)]);
var state_4579__$1 = state_4579;
var statearr_4601_4622 = state_4579__$1;
(statearr_4601_4622[(2)] = inst_4561);

(statearr_4601_4622[(1)] = (5));


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
});})(c__3282__auto___4607,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__3194__auto__,c__3282__auto___4607,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__3195__auto__ = null;
var cljs$core$async$state_machine__3195__auto____0 = (function (){
var statearr_4602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4602[(0)] = cljs$core$async$state_machine__3195__auto__);

(statearr_4602[(1)] = (1));

return statearr_4602;
});
var cljs$core$async$state_machine__3195__auto____1 = (function (state_4579){
while(true){
var ret_value__3196__auto__ = (function (){try{while(true){
var result__3197__auto__ = switch__3194__auto__.call(null,state_4579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3197__auto__;
}
break;
}
}catch (e4603){if((e4603 instanceof Object)){
var ex__3198__auto__ = e4603;
var statearr_4604_4623 = state_4579;
(statearr_4604_4623[(5)] = ex__3198__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4624 = state_4579;
state_4579 = G__4624;
continue;
} else {
return ret_value__3196__auto__;
}
break;
}
});
cljs$core$async$state_machine__3195__auto__ = function(state_4579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3195__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3195__auto____1.call(this,state_4579);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3195__auto____0;
cljs$core$async$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3195__auto____1;
return cljs$core$async$state_machine__3195__auto__;
})()
;})(switch__3194__auto__,c__3282__auto___4607,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__3284__auto__ = (function (){var statearr_4605 = f__3283__auto__.call(null);
(statearr_4605[(6)] = c__3282__auto___4607);

return statearr_4605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3284__auto__);
});})(c__3282__auto___4607,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__4627 = arguments.length;
switch (G__4627) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3282__auto___4681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3282__auto___4681,out){
return (function (){
var f__3283__auto__ = (function (){var switch__3194__auto__ = ((function (c__3282__auto___4681,out){
return (function (state_4659){
var state_val_4660 = (state_4659[(1)]);
if((state_val_4660 === (7))){
var inst_4638 = (state_4659[(7)]);
var inst_4639 = (state_4659[(8)]);
var inst_4638__$1 = (state_4659[(2)]);
var inst_4639__$1 = cljs.core.nth.call(null,inst_4638__$1,(0),null);
var inst_4640 = cljs.core.nth.call(null,inst_4638__$1,(1),null);
var inst_4641 = (inst_4639__$1 == null);
var state_4659__$1 = (function (){var statearr_4661 = state_4659;
(statearr_4661[(7)] = inst_4638__$1);

(statearr_4661[(8)] = inst_4639__$1);

(statearr_4661[(9)] = inst_4640);

return statearr_4661;
})();
if(cljs.core.truth_(inst_4641)){
var statearr_4662_4682 = state_4659__$1;
(statearr_4662_4682[(1)] = (8));

} else {
var statearr_4663_4683 = state_4659__$1;
(statearr_4663_4683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4660 === (1))){
var inst_4628 = cljs.core.vec.call(null,chs);
var inst_4629 = inst_4628;
var state_4659__$1 = (function (){var statearr_4664 = state_4659;
(statearr_4664[(10)] = inst_4629);

return statearr_4664;
})();
var statearr_4665_4684 = state_4659__$1;
(statearr_4665_4684[(2)] = null);

(statearr_4665_4684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4660 === (4))){
var inst_4629 = (state_4659[(10)]);
var state_4659__$1 = state_4659;
return cljs.core.async.ioc_alts_BANG_.call(null,state_4659__$1,(7),inst_4629);
} else {
if((state_val_4660 === (6))){
var inst_4655 = (state_4659[(2)]);
var state_4659__$1 = state_4659;
var statearr_4666_4685 = state_4659__$1;
(statearr_4666_4685[(2)] = inst_4655);

(statearr_4666_4685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4660 === (3))){
var inst_4657 = (state_4659[(2)]);
var state_4659__$1 = state_4659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4659__$1,inst_4657);
} else {
if((state_val_4660 === (2))){
var inst_4629 = (state_4659[(10)]);
var inst_4631 = cljs.core.count.call(null,inst_4629);
var inst_4632 = (inst_4631 > (0));
var state_4659__$1 = state_4659;
if(cljs.core.truth_(inst_4632)){
var statearr_4668_4686 = state_4659__$1;
(statearr_4668_4686[(1)] = (4));

} else {
var statearr_4669_4687 = state_4659__$1;
(statearr_4669_4687[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4660 === (11))){
var inst_4629 = (state_4659[(10)]);
var inst_4648 = (state_4659[(2)]);
var tmp4667 = inst_4629;
var inst_4629__$1 = tmp4667;
var state_4659__$1 = (function (){var statearr_4670 = state_4659;
(statearr_4670[(11)] = inst_4648);

(statearr_4670[(10)] = inst_4629__$1);

return statearr_4670;
})();
var statearr_4671_4688 = state_4659__$1;
(statearr_4671_4688[(2)] = null);

(statearr_4671_4688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4660 === (9))){
var inst_4639 = (state_4659[(8)]);
var state_4659__$1 = state_4659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4659__$1,(11),out,inst_4639);
} else {
if((state_val_4660 === (5))){
var inst_4653 = cljs.core.async.close_BANG_.call(null,out);
var state_4659__$1 = state_4659;
var statearr_4672_4689 = state_4659__$1;
(statearr_4672_4689[(2)] = inst_4653);

(statearr_4672_4689[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4660 === (10))){
var inst_4651 = (state_4659[(2)]);
var state_4659__$1 = state_4659;
var statearr_4673_4690 = state_4659__$1;
(statearr_4673_4690[(2)] = inst_4651);

(statearr_4673_4690[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4660 === (8))){
var inst_4638 = (state_4659[(7)]);
var inst_4639 = (state_4659[(8)]);
var inst_4640 = (state_4659[(9)]);
var inst_4629 = (state_4659[(10)]);
var inst_4643 = (function (){var cs = inst_4629;
var vec__4634 = inst_4638;
var v = inst_4639;
var c = inst_4640;
return ((function (cs,vec__4634,v,c,inst_4638,inst_4639,inst_4640,inst_4629,state_val_4660,c__3282__auto___4681,out){
return (function (p1__4625_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__4625_SHARP_);
});
;})(cs,vec__4634,v,c,inst_4638,inst_4639,inst_4640,inst_4629,state_val_4660,c__3282__auto___4681,out))
})();
var inst_4644 = cljs.core.filterv.call(null,inst_4643,inst_4629);
var inst_4629__$1 = inst_4644;
var state_4659__$1 = (function (){var statearr_4674 = state_4659;
(statearr_4674[(10)] = inst_4629__$1);

return statearr_4674;
})();
var statearr_4675_4691 = state_4659__$1;
(statearr_4675_4691[(2)] = null);

(statearr_4675_4691[(1)] = (2));


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
});})(c__3282__auto___4681,out))
;
return ((function (switch__3194__auto__,c__3282__auto___4681,out){
return (function() {
var cljs$core$async$state_machine__3195__auto__ = null;
var cljs$core$async$state_machine__3195__auto____0 = (function (){
var statearr_4676 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4676[(0)] = cljs$core$async$state_machine__3195__auto__);

(statearr_4676[(1)] = (1));

return statearr_4676;
});
var cljs$core$async$state_machine__3195__auto____1 = (function (state_4659){
while(true){
var ret_value__3196__auto__ = (function (){try{while(true){
var result__3197__auto__ = switch__3194__auto__.call(null,state_4659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3197__auto__;
}
break;
}
}catch (e4677){if((e4677 instanceof Object)){
var ex__3198__auto__ = e4677;
var statearr_4678_4692 = state_4659;
(statearr_4678_4692[(5)] = ex__3198__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4693 = state_4659;
state_4659 = G__4693;
continue;
} else {
return ret_value__3196__auto__;
}
break;
}
});
cljs$core$async$state_machine__3195__auto__ = function(state_4659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3195__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3195__auto____1.call(this,state_4659);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3195__auto____0;
cljs$core$async$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3195__auto____1;
return cljs$core$async$state_machine__3195__auto__;
})()
;})(switch__3194__auto__,c__3282__auto___4681,out))
})();
var state__3284__auto__ = (function (){var statearr_4679 = f__3283__auto__.call(null);
(statearr_4679[(6)] = c__3282__auto___4681);

return statearr_4679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3284__auto__);
});})(c__3282__auto___4681,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__4695 = arguments.length;
switch (G__4695) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3282__auto___4740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3282__auto___4740,out){
return (function (){
var f__3283__auto__ = (function (){var switch__3194__auto__ = ((function (c__3282__auto___4740,out){
return (function (state_4719){
var state_val_4720 = (state_4719[(1)]);
if((state_val_4720 === (7))){
var inst_4701 = (state_4719[(7)]);
var inst_4701__$1 = (state_4719[(2)]);
var inst_4702 = (inst_4701__$1 == null);
var inst_4703 = cljs.core.not.call(null,inst_4702);
var state_4719__$1 = (function (){var statearr_4721 = state_4719;
(statearr_4721[(7)] = inst_4701__$1);

return statearr_4721;
})();
if(inst_4703){
var statearr_4722_4741 = state_4719__$1;
(statearr_4722_4741[(1)] = (8));

} else {
var statearr_4723_4742 = state_4719__$1;
(statearr_4723_4742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4720 === (1))){
var inst_4696 = (0);
var state_4719__$1 = (function (){var statearr_4724 = state_4719;
(statearr_4724[(8)] = inst_4696);

return statearr_4724;
})();
var statearr_4725_4743 = state_4719__$1;
(statearr_4725_4743[(2)] = null);

(statearr_4725_4743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4720 === (4))){
var state_4719__$1 = state_4719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4719__$1,(7),ch);
} else {
if((state_val_4720 === (6))){
var inst_4714 = (state_4719[(2)]);
var state_4719__$1 = state_4719;
var statearr_4726_4744 = state_4719__$1;
(statearr_4726_4744[(2)] = inst_4714);

(statearr_4726_4744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4720 === (3))){
var inst_4716 = (state_4719[(2)]);
var inst_4717 = cljs.core.async.close_BANG_.call(null,out);
var state_4719__$1 = (function (){var statearr_4727 = state_4719;
(statearr_4727[(9)] = inst_4716);

return statearr_4727;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4719__$1,inst_4717);
} else {
if((state_val_4720 === (2))){
var inst_4696 = (state_4719[(8)]);
var inst_4698 = (inst_4696 < n);
var state_4719__$1 = state_4719;
if(cljs.core.truth_(inst_4698)){
var statearr_4728_4745 = state_4719__$1;
(statearr_4728_4745[(1)] = (4));

} else {
var statearr_4729_4746 = state_4719__$1;
(statearr_4729_4746[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4720 === (11))){
var inst_4696 = (state_4719[(8)]);
var inst_4706 = (state_4719[(2)]);
var inst_4707 = (inst_4696 + (1));
var inst_4696__$1 = inst_4707;
var state_4719__$1 = (function (){var statearr_4730 = state_4719;
(statearr_4730[(8)] = inst_4696__$1);

(statearr_4730[(10)] = inst_4706);

return statearr_4730;
})();
var statearr_4731_4747 = state_4719__$1;
(statearr_4731_4747[(2)] = null);

(statearr_4731_4747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4720 === (9))){
var state_4719__$1 = state_4719;
var statearr_4732_4748 = state_4719__$1;
(statearr_4732_4748[(2)] = null);

(statearr_4732_4748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4720 === (5))){
var state_4719__$1 = state_4719;
var statearr_4733_4749 = state_4719__$1;
(statearr_4733_4749[(2)] = null);

(statearr_4733_4749[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4720 === (10))){
var inst_4711 = (state_4719[(2)]);
var state_4719__$1 = state_4719;
var statearr_4734_4750 = state_4719__$1;
(statearr_4734_4750[(2)] = inst_4711);

(statearr_4734_4750[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4720 === (8))){
var inst_4701 = (state_4719[(7)]);
var state_4719__$1 = state_4719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4719__$1,(11),out,inst_4701);
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
});})(c__3282__auto___4740,out))
;
return ((function (switch__3194__auto__,c__3282__auto___4740,out){
return (function() {
var cljs$core$async$state_machine__3195__auto__ = null;
var cljs$core$async$state_machine__3195__auto____0 = (function (){
var statearr_4735 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4735[(0)] = cljs$core$async$state_machine__3195__auto__);

(statearr_4735[(1)] = (1));

return statearr_4735;
});
var cljs$core$async$state_machine__3195__auto____1 = (function (state_4719){
while(true){
var ret_value__3196__auto__ = (function (){try{while(true){
var result__3197__auto__ = switch__3194__auto__.call(null,state_4719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3197__auto__;
}
break;
}
}catch (e4736){if((e4736 instanceof Object)){
var ex__3198__auto__ = e4736;
var statearr_4737_4751 = state_4719;
(statearr_4737_4751[(5)] = ex__3198__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4752 = state_4719;
state_4719 = G__4752;
continue;
} else {
return ret_value__3196__auto__;
}
break;
}
});
cljs$core$async$state_machine__3195__auto__ = function(state_4719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3195__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3195__auto____1.call(this,state_4719);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3195__auto____0;
cljs$core$async$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3195__auto____1;
return cljs$core$async$state_machine__3195__auto__;
})()
;})(switch__3194__auto__,c__3282__auto___4740,out))
})();
var state__3284__auto__ = (function (){var statearr_4738 = f__3283__auto__.call(null);
(statearr_4738[(6)] = c__3282__auto___4740);

return statearr_4738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3284__auto__);
});})(c__3282__auto___4740,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async4754 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4754 = (function (f,ch,meta4755){
this.f = f;
this.ch = ch;
this.meta4755 = meta4755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4756,meta4755__$1){
var self__ = this;
var _4756__$1 = this;
return (new cljs.core.async.t_cljs$core$async4754(self__.f,self__.ch,meta4755__$1));
});

cljs.core.async.t_cljs$core$async4754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4756){
var self__ = this;
var _4756__$1 = this;
return self__.meta4755;
});

cljs.core.async.t_cljs$core$async4754.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4754.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4754.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4754.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4754.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async4757 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4757 = (function (f,ch,meta4755,_,fn1,meta4758){
this.f = f;
this.ch = ch;
this.meta4755 = meta4755;
this._ = _;
this.fn1 = fn1;
this.meta4758 = meta4758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_4759,meta4758__$1){
var self__ = this;
var _4759__$1 = this;
return (new cljs.core.async.t_cljs$core$async4757(self__.f,self__.ch,self__.meta4755,self__._,self__.fn1,meta4758__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async4757.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_4759){
var self__ = this;
var _4759__$1 = this;
return self__.meta4758;
});})(___$1))
;

cljs.core.async.t_cljs$core$async4757.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4757.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async4757.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async4757.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__4753_SHARP_){
return f1.call(null,(((p1__4753_SHARP_ == null))?null:self__.f.call(null,p1__4753_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async4757.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4755","meta4755",133163037,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async4754","cljs.core.async/t_cljs$core$async4754",424766104,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta4758","meta4758",-541996424,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async4757.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4757";

cljs.core.async.t_cljs$core$async4757.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4757");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4757.
 */
cljs.core.async.__GT_t_cljs$core$async4757 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async4757(f__$1,ch__$1,meta4755__$1,___$2,fn1__$1,meta4758){
return (new cljs.core.async.t_cljs$core$async4757(f__$1,ch__$1,meta4755__$1,___$2,fn1__$1,meta4758));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async4757(self__.f,self__.ch,self__.meta4755,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async4754.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4754.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async4754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4755","meta4755",133163037,null)], null);
});

cljs.core.async.t_cljs$core$async4754.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4754";

cljs.core.async.t_cljs$core$async4754.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4754");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4754.
 */
cljs.core.async.__GT_t_cljs$core$async4754 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async4754(f__$1,ch__$1,meta4755){
return (new cljs.core.async.t_cljs$core$async4754(f__$1,ch__$1,meta4755));
});

}

return (new cljs.core.async.t_cljs$core$async4754(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async4760 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4760 = (function (f,ch,meta4761){
this.f = f;
this.ch = ch;
this.meta4761 = meta4761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4762,meta4761__$1){
var self__ = this;
var _4762__$1 = this;
return (new cljs.core.async.t_cljs$core$async4760(self__.f,self__.ch,meta4761__$1));
});

cljs.core.async.t_cljs$core$async4760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4762){
var self__ = this;
var _4762__$1 = this;
return self__.meta4761;
});

cljs.core.async.t_cljs$core$async4760.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4760.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4760.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4760.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async4760.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4760.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async4760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4761","meta4761",-1119282537,null)], null);
});

cljs.core.async.t_cljs$core$async4760.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4760.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4760";

cljs.core.async.t_cljs$core$async4760.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4760");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4760.
 */
cljs.core.async.__GT_t_cljs$core$async4760 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async4760(f__$1,ch__$1,meta4761){
return (new cljs.core.async.t_cljs$core$async4760(f__$1,ch__$1,meta4761));
});

}

return (new cljs.core.async.t_cljs$core$async4760(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async4763 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4763 = (function (p,ch,meta4764){
this.p = p;
this.ch = ch;
this.meta4764 = meta4764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4765,meta4764__$1){
var self__ = this;
var _4765__$1 = this;
return (new cljs.core.async.t_cljs$core$async4763(self__.p,self__.ch,meta4764__$1));
});

cljs.core.async.t_cljs$core$async4763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4765){
var self__ = this;
var _4765__$1 = this;
return self__.meta4764;
});

cljs.core.async.t_cljs$core$async4763.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4763.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4763.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4763.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4763.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async4763.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4763.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async4763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4764","meta4764",573385084,null)], null);
});

cljs.core.async.t_cljs$core$async4763.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4763";

cljs.core.async.t_cljs$core$async4763.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4763");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4763.
 */
cljs.core.async.__GT_t_cljs$core$async4763 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async4763(p__$1,ch__$1,meta4764){
return (new cljs.core.async.t_cljs$core$async4763(p__$1,ch__$1,meta4764));
});

}

return (new cljs.core.async.t_cljs$core$async4763(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__4767 = arguments.length;
switch (G__4767) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3282__auto___4807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3282__auto___4807,out){
return (function (){
var f__3283__auto__ = (function (){var switch__3194__auto__ = ((function (c__3282__auto___4807,out){
return (function (state_4788){
var state_val_4789 = (state_4788[(1)]);
if((state_val_4789 === (7))){
var inst_4784 = (state_4788[(2)]);
var state_4788__$1 = state_4788;
var statearr_4790_4808 = state_4788__$1;
(statearr_4790_4808[(2)] = inst_4784);

(statearr_4790_4808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4789 === (1))){
var state_4788__$1 = state_4788;
var statearr_4791_4809 = state_4788__$1;
(statearr_4791_4809[(2)] = null);

(statearr_4791_4809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4789 === (4))){
var inst_4770 = (state_4788[(7)]);
var inst_4770__$1 = (state_4788[(2)]);
var inst_4771 = (inst_4770__$1 == null);
var state_4788__$1 = (function (){var statearr_4792 = state_4788;
(statearr_4792[(7)] = inst_4770__$1);

return statearr_4792;
})();
if(cljs.core.truth_(inst_4771)){
var statearr_4793_4810 = state_4788__$1;
(statearr_4793_4810[(1)] = (5));

} else {
var statearr_4794_4811 = state_4788__$1;
(statearr_4794_4811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4789 === (6))){
var inst_4770 = (state_4788[(7)]);
var inst_4775 = p.call(null,inst_4770);
var state_4788__$1 = state_4788;
if(cljs.core.truth_(inst_4775)){
var statearr_4795_4812 = state_4788__$1;
(statearr_4795_4812[(1)] = (8));

} else {
var statearr_4796_4813 = state_4788__$1;
(statearr_4796_4813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4789 === (3))){
var inst_4786 = (state_4788[(2)]);
var state_4788__$1 = state_4788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4788__$1,inst_4786);
} else {
if((state_val_4789 === (2))){
var state_4788__$1 = state_4788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4788__$1,(4),ch);
} else {
if((state_val_4789 === (11))){
var inst_4778 = (state_4788[(2)]);
var state_4788__$1 = state_4788;
var statearr_4797_4814 = state_4788__$1;
(statearr_4797_4814[(2)] = inst_4778);

(statearr_4797_4814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4789 === (9))){
var state_4788__$1 = state_4788;
var statearr_4798_4815 = state_4788__$1;
(statearr_4798_4815[(2)] = null);

(statearr_4798_4815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4789 === (5))){
var inst_4773 = cljs.core.async.close_BANG_.call(null,out);
var state_4788__$1 = state_4788;
var statearr_4799_4816 = state_4788__$1;
(statearr_4799_4816[(2)] = inst_4773);

(statearr_4799_4816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4789 === (10))){
var inst_4781 = (state_4788[(2)]);
var state_4788__$1 = (function (){var statearr_4800 = state_4788;
(statearr_4800[(8)] = inst_4781);

return statearr_4800;
})();
var statearr_4801_4817 = state_4788__$1;
(statearr_4801_4817[(2)] = null);

(statearr_4801_4817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4789 === (8))){
var inst_4770 = (state_4788[(7)]);
var state_4788__$1 = state_4788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4788__$1,(11),out,inst_4770);
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
});})(c__3282__auto___4807,out))
;
return ((function (switch__3194__auto__,c__3282__auto___4807,out){
return (function() {
var cljs$core$async$state_machine__3195__auto__ = null;
var cljs$core$async$state_machine__3195__auto____0 = (function (){
var statearr_4802 = [null,null,null,null,null,null,null,null,null];
(statearr_4802[(0)] = cljs$core$async$state_machine__3195__auto__);

(statearr_4802[(1)] = (1));

return statearr_4802;
});
var cljs$core$async$state_machine__3195__auto____1 = (function (state_4788){
while(true){
var ret_value__3196__auto__ = (function (){try{while(true){
var result__3197__auto__ = switch__3194__auto__.call(null,state_4788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3197__auto__;
}
break;
}
}catch (e4803){if((e4803 instanceof Object)){
var ex__3198__auto__ = e4803;
var statearr_4804_4818 = state_4788;
(statearr_4804_4818[(5)] = ex__3198__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4819 = state_4788;
state_4788 = G__4819;
continue;
} else {
return ret_value__3196__auto__;
}
break;
}
});
cljs$core$async$state_machine__3195__auto__ = function(state_4788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3195__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3195__auto____1.call(this,state_4788);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3195__auto____0;
cljs$core$async$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3195__auto____1;
return cljs$core$async$state_machine__3195__auto__;
})()
;})(switch__3194__auto__,c__3282__auto___4807,out))
})();
var state__3284__auto__ = (function (){var statearr_4805 = f__3283__auto__.call(null);
(statearr_4805[(6)] = c__3282__auto___4807);

return statearr_4805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3284__auto__);
});})(c__3282__auto___4807,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__4821 = arguments.length;
switch (G__4821) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__3282__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3282__auto__){
return (function (){
var f__3283__auto__ = (function (){var switch__3194__auto__ = ((function (c__3282__auto__){
return (function (state_4884){
var state_val_4885 = (state_4884[(1)]);
if((state_val_4885 === (7))){
var inst_4880 = (state_4884[(2)]);
var state_4884__$1 = state_4884;
var statearr_4886_4924 = state_4884__$1;
(statearr_4886_4924[(2)] = inst_4880);

(statearr_4886_4924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4885 === (20))){
var inst_4850 = (state_4884[(7)]);
var inst_4861 = (state_4884[(2)]);
var inst_4862 = cljs.core.next.call(null,inst_4850);
var inst_4836 = inst_4862;
var inst_4837 = null;
var inst_4838 = (0);
var inst_4839 = (0);
var state_4884__$1 = (function (){var statearr_4887 = state_4884;
(statearr_4887[(8)] = inst_4861);

(statearr_4887[(9)] = inst_4839);

(statearr_4887[(10)] = inst_4837);

(statearr_4887[(11)] = inst_4838);

(statearr_4887[(12)] = inst_4836);

return statearr_4887;
})();
var statearr_4888_4925 = state_4884__$1;
(statearr_4888_4925[(2)] = null);

(statearr_4888_4925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4885 === (1))){
var state_4884__$1 = state_4884;
var statearr_4889_4926 = state_4884__$1;
(statearr_4889_4926[(2)] = null);

(statearr_4889_4926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4885 === (4))){
var inst_4825 = (state_4884[(13)]);
var inst_4825__$1 = (state_4884[(2)]);
var inst_4826 = (inst_4825__$1 == null);
var state_4884__$1 = (function (){var statearr_4890 = state_4884;
(statearr_4890[(13)] = inst_4825__$1);

return statearr_4890;
})();
if(cljs.core.truth_(inst_4826)){
var statearr_4891_4927 = state_4884__$1;
(statearr_4891_4927[(1)] = (5));

} else {
var statearr_4892_4928 = state_4884__$1;
(statearr_4892_4928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4885 === (15))){
var state_4884__$1 = state_4884;
var statearr_4896_4929 = state_4884__$1;
(statearr_4896_4929[(2)] = null);

(statearr_4896_4929[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4885 === (21))){
var state_4884__$1 = state_4884;
var statearr_4897_4930 = state_4884__$1;
(statearr_4897_4930[(2)] = null);

(statearr_4897_4930[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4885 === (13))){
var inst_4839 = (state_4884[(9)]);
var inst_4837 = (state_4884[(10)]);
var inst_4838 = (state_4884[(11)]);
var inst_4836 = (state_4884[(12)]);
var inst_4846 = (state_4884[(2)]);
var inst_4847 = (inst_4839 + (1));
var tmp4893 = inst_4837;
var tmp4894 = inst_4838;
var tmp4895 = inst_4836;
var inst_4836__$1 = tmp4895;
var inst_4837__$1 = tmp4893;
var inst_4838__$1 = tmp4894;
var inst_4839__$1 = inst_4847;
var state_4884__$1 = (function (){var statearr_4898 = state_4884;
(statearr_4898[(9)] = inst_4839__$1);

(statearr_4898[(10)] = inst_4837__$1);

(statearr_4898[(14)] = inst_4846);

(statearr_4898[(11)] = inst_4838__$1);

(statearr_4898[(12)] = inst_4836__$1);

return statearr_4898;
})();
var statearr_4899_4931 = state_4884__$1;
(statearr_4899_4931[(2)] = null);

(statearr_4899_4931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4885 === (22))){
var state_4884__$1 = state_4884;
var statearr_4900_4932 = state_4884__$1;
(statearr_4900_4932[(2)] = null);

(statearr_4900_4932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4885 === (6))){
var inst_4825 = (state_4884[(13)]);
var inst_4834 = f.call(null,inst_4825);
var inst_4835 = cljs.core.seq.call(null,inst_4834);
var inst_4836 = inst_4835;
var inst_4837 = null;
var inst_4838 = (0);
var inst_4839 = (0);
var state_4884__$1 = (function (){var statearr_4901 = state_4884;
(statearr_4901[(9)] = inst_4839);

(statearr_4901[(10)] = inst_4837);

(statearr_4901[(11)] = inst_4838);

(statearr_4901[(12)] = inst_4836);

return statearr_4901;
})();
var statearr_4902_4933 = state_4884__$1;
(statearr_4902_4933[(2)] = null);

(statearr_4902_4933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4885 === (17))){
var inst_4850 = (state_4884[(7)]);
var inst_4854 = cljs.core.chunk_first.call(null,inst_4850);
var inst_4855 = cljs.core.chunk_rest.call(null,inst_4850);
var inst_4856 = cljs.core.count.call(null,inst_4854);
var inst_4836 = inst_4855;
var inst_4837 = inst_4854;
var inst_4838 = inst_4856;
var inst_4839 = (0);
var state_4884__$1 = (function (){var statearr_4903 = state_4884;
(statearr_4903[(9)] = inst_4839);

(statearr_4903[(10)] = inst_4837);

(statearr_4903[(11)] = inst_4838);

(statearr_4903[(12)] = inst_4836);

return statearr_4903;
})();
var statearr_4904_4934 = state_4884__$1;
(statearr_4904_4934[(2)] = null);

(statearr_4904_4934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4885 === (3))){
var inst_4882 = (state_4884[(2)]);
var state_4884__$1 = state_4884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4884__$1,inst_4882);
} else {
if((state_val_4885 === (12))){
var inst_4870 = (state_4884[(2)]);
var state_4884__$1 = state_4884;
var statearr_4905_4935 = state_4884__$1;
(statearr_4905_4935[(2)] = inst_4870);

(statearr_4905_4935[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4885 === (2))){
var state_4884__$1 = state_4884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4884__$1,(4),in$);
} else {
if((state_val_4885 === (23))){
var inst_4878 = (state_4884[(2)]);
var state_4884__$1 = state_4884;
var statearr_4906_4936 = state_4884__$1;
(statearr_4906_4936[(2)] = inst_4878);

(statearr_4906_4936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4885 === (19))){
var inst_4865 = (state_4884[(2)]);
var state_4884__$1 = state_4884;
var statearr_4907_4937 = state_4884__$1;
(statearr_4907_4937[(2)] = inst_4865);

(statearr_4907_4937[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4885 === (11))){
var inst_4850 = (state_4884[(7)]);
var inst_4836 = (state_4884[(12)]);
var inst_4850__$1 = cljs.core.seq.call(null,inst_4836);
var state_4884__$1 = (function (){var statearr_4908 = state_4884;
(statearr_4908[(7)] = inst_4850__$1);

return statearr_4908;
})();
if(inst_4850__$1){
var statearr_4909_4938 = state_4884__$1;
(statearr_4909_4938[(1)] = (14));

} else {
var statearr_4910_4939 = state_4884__$1;
(statearr_4910_4939[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4885 === (9))){
var inst_4872 = (state_4884[(2)]);
var inst_4873 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_4884__$1 = (function (){var statearr_4911 = state_4884;
(statearr_4911[(15)] = inst_4872);

return statearr_4911;
})();
if(cljs.core.truth_(inst_4873)){
var statearr_4912_4940 = state_4884__$1;
(statearr_4912_4940[(1)] = (21));

} else {
var statearr_4913_4941 = state_4884__$1;
(statearr_4913_4941[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4885 === (5))){
var inst_4828 = cljs.core.async.close_BANG_.call(null,out);
var state_4884__$1 = state_4884;
var statearr_4914_4942 = state_4884__$1;
(statearr_4914_4942[(2)] = inst_4828);

(statearr_4914_4942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4885 === (14))){
var inst_4850 = (state_4884[(7)]);
var inst_4852 = cljs.core.chunked_seq_QMARK_.call(null,inst_4850);
var state_4884__$1 = state_4884;
if(inst_4852){
var statearr_4915_4943 = state_4884__$1;
(statearr_4915_4943[(1)] = (17));

} else {
var statearr_4916_4944 = state_4884__$1;
(statearr_4916_4944[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4885 === (16))){
var inst_4868 = (state_4884[(2)]);
var state_4884__$1 = state_4884;
var statearr_4917_4945 = state_4884__$1;
(statearr_4917_4945[(2)] = inst_4868);

(statearr_4917_4945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4885 === (10))){
var inst_4839 = (state_4884[(9)]);
var inst_4837 = (state_4884[(10)]);
var inst_4844 = cljs.core._nth.call(null,inst_4837,inst_4839);
var state_4884__$1 = state_4884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4884__$1,(13),out,inst_4844);
} else {
if((state_val_4885 === (18))){
var inst_4850 = (state_4884[(7)]);
var inst_4859 = cljs.core.first.call(null,inst_4850);
var state_4884__$1 = state_4884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4884__$1,(20),out,inst_4859);
} else {
if((state_val_4885 === (8))){
var inst_4839 = (state_4884[(9)]);
var inst_4838 = (state_4884[(11)]);
var inst_4841 = (inst_4839 < inst_4838);
var inst_4842 = inst_4841;
var state_4884__$1 = state_4884;
if(cljs.core.truth_(inst_4842)){
var statearr_4918_4946 = state_4884__$1;
(statearr_4918_4946[(1)] = (10));

} else {
var statearr_4919_4947 = state_4884__$1;
(statearr_4919_4947[(1)] = (11));

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
}
}
}
}
}
}
});})(c__3282__auto__))
;
return ((function (switch__3194__auto__,c__3282__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__3195__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__3195__auto____0 = (function (){
var statearr_4920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4920[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__3195__auto__);

(statearr_4920[(1)] = (1));

return statearr_4920;
});
var cljs$core$async$mapcat_STAR__$_state_machine__3195__auto____1 = (function (state_4884){
while(true){
var ret_value__3196__auto__ = (function (){try{while(true){
var result__3197__auto__ = switch__3194__auto__.call(null,state_4884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3197__auto__;
}
break;
}
}catch (e4921){if((e4921 instanceof Object)){
var ex__3198__auto__ = e4921;
var statearr_4922_4948 = state_4884;
(statearr_4922_4948[(5)] = ex__3198__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4949 = state_4884;
state_4884 = G__4949;
continue;
} else {
return ret_value__3196__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__3195__auto__ = function(state_4884){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__3195__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__3195__auto____1.call(this,state_4884);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__3195__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__3195__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__3195__auto__;
})()
;})(switch__3194__auto__,c__3282__auto__))
})();
var state__3284__auto__ = (function (){var statearr_4923 = f__3283__auto__.call(null);
(statearr_4923[(6)] = c__3282__auto__);

return statearr_4923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3284__auto__);
});})(c__3282__auto__))
);

return c__3282__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__4951 = arguments.length;
switch (G__4951) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__4954 = arguments.length;
switch (G__4954) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__4957 = arguments.length;
switch (G__4957) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3282__auto___5004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3282__auto___5004,out){
return (function (){
var f__3283__auto__ = (function (){var switch__3194__auto__ = ((function (c__3282__auto___5004,out){
return (function (state_4981){
var state_val_4982 = (state_4981[(1)]);
if((state_val_4982 === (7))){
var inst_4976 = (state_4981[(2)]);
var state_4981__$1 = state_4981;
var statearr_4983_5005 = state_4981__$1;
(statearr_4983_5005[(2)] = inst_4976);

(statearr_4983_5005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4982 === (1))){
var inst_4958 = null;
var state_4981__$1 = (function (){var statearr_4984 = state_4981;
(statearr_4984[(7)] = inst_4958);

return statearr_4984;
})();
var statearr_4985_5006 = state_4981__$1;
(statearr_4985_5006[(2)] = null);

(statearr_4985_5006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4982 === (4))){
var inst_4961 = (state_4981[(8)]);
var inst_4961__$1 = (state_4981[(2)]);
var inst_4962 = (inst_4961__$1 == null);
var inst_4963 = cljs.core.not.call(null,inst_4962);
var state_4981__$1 = (function (){var statearr_4986 = state_4981;
(statearr_4986[(8)] = inst_4961__$1);

return statearr_4986;
})();
if(inst_4963){
var statearr_4987_5007 = state_4981__$1;
(statearr_4987_5007[(1)] = (5));

} else {
var statearr_4988_5008 = state_4981__$1;
(statearr_4988_5008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4982 === (6))){
var state_4981__$1 = state_4981;
var statearr_4989_5009 = state_4981__$1;
(statearr_4989_5009[(2)] = null);

(statearr_4989_5009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4982 === (3))){
var inst_4978 = (state_4981[(2)]);
var inst_4979 = cljs.core.async.close_BANG_.call(null,out);
var state_4981__$1 = (function (){var statearr_4990 = state_4981;
(statearr_4990[(9)] = inst_4978);

return statearr_4990;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4981__$1,inst_4979);
} else {
if((state_val_4982 === (2))){
var state_4981__$1 = state_4981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4981__$1,(4),ch);
} else {
if((state_val_4982 === (11))){
var inst_4961 = (state_4981[(8)]);
var inst_4970 = (state_4981[(2)]);
var inst_4958 = inst_4961;
var state_4981__$1 = (function (){var statearr_4991 = state_4981;
(statearr_4991[(10)] = inst_4970);

(statearr_4991[(7)] = inst_4958);

return statearr_4991;
})();
var statearr_4992_5010 = state_4981__$1;
(statearr_4992_5010[(2)] = null);

(statearr_4992_5010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4982 === (9))){
var inst_4961 = (state_4981[(8)]);
var state_4981__$1 = state_4981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4981__$1,(11),out,inst_4961);
} else {
if((state_val_4982 === (5))){
var inst_4958 = (state_4981[(7)]);
var inst_4961 = (state_4981[(8)]);
var inst_4965 = cljs.core._EQ_.call(null,inst_4961,inst_4958);
var state_4981__$1 = state_4981;
if(inst_4965){
var statearr_4994_5011 = state_4981__$1;
(statearr_4994_5011[(1)] = (8));

} else {
var statearr_4995_5012 = state_4981__$1;
(statearr_4995_5012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4982 === (10))){
var inst_4973 = (state_4981[(2)]);
var state_4981__$1 = state_4981;
var statearr_4996_5013 = state_4981__$1;
(statearr_4996_5013[(2)] = inst_4973);

(statearr_4996_5013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4982 === (8))){
var inst_4958 = (state_4981[(7)]);
var tmp4993 = inst_4958;
var inst_4958__$1 = tmp4993;
var state_4981__$1 = (function (){var statearr_4997 = state_4981;
(statearr_4997[(7)] = inst_4958__$1);

return statearr_4997;
})();
var statearr_4998_5014 = state_4981__$1;
(statearr_4998_5014[(2)] = null);

(statearr_4998_5014[(1)] = (2));


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
});})(c__3282__auto___5004,out))
;
return ((function (switch__3194__auto__,c__3282__auto___5004,out){
return (function() {
var cljs$core$async$state_machine__3195__auto__ = null;
var cljs$core$async$state_machine__3195__auto____0 = (function (){
var statearr_4999 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4999[(0)] = cljs$core$async$state_machine__3195__auto__);

(statearr_4999[(1)] = (1));

return statearr_4999;
});
var cljs$core$async$state_machine__3195__auto____1 = (function (state_4981){
while(true){
var ret_value__3196__auto__ = (function (){try{while(true){
var result__3197__auto__ = switch__3194__auto__.call(null,state_4981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3197__auto__;
}
break;
}
}catch (e5000){if((e5000 instanceof Object)){
var ex__3198__auto__ = e5000;
var statearr_5001_5015 = state_4981;
(statearr_5001_5015[(5)] = ex__3198__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5016 = state_4981;
state_4981 = G__5016;
continue;
} else {
return ret_value__3196__auto__;
}
break;
}
});
cljs$core$async$state_machine__3195__auto__ = function(state_4981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3195__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3195__auto____1.call(this,state_4981);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3195__auto____0;
cljs$core$async$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3195__auto____1;
return cljs$core$async$state_machine__3195__auto__;
})()
;})(switch__3194__auto__,c__3282__auto___5004,out))
})();
var state__3284__auto__ = (function (){var statearr_5002 = f__3283__auto__.call(null);
(statearr_5002[(6)] = c__3282__auto___5004);

return statearr_5002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3284__auto__);
});})(c__3282__auto___5004,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__5018 = arguments.length;
switch (G__5018) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3282__auto___5084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3282__auto___5084,out){
return (function (){
var f__3283__auto__ = (function (){var switch__3194__auto__ = ((function (c__3282__auto___5084,out){
return (function (state_5056){
var state_val_5057 = (state_5056[(1)]);
if((state_val_5057 === (7))){
var inst_5052 = (state_5056[(2)]);
var state_5056__$1 = state_5056;
var statearr_5058_5085 = state_5056__$1;
(statearr_5058_5085[(2)] = inst_5052);

(statearr_5058_5085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5057 === (1))){
var inst_5019 = (new Array(n));
var inst_5020 = inst_5019;
var inst_5021 = (0);
var state_5056__$1 = (function (){var statearr_5059 = state_5056;
(statearr_5059[(7)] = inst_5020);

(statearr_5059[(8)] = inst_5021);

return statearr_5059;
})();
var statearr_5060_5086 = state_5056__$1;
(statearr_5060_5086[(2)] = null);

(statearr_5060_5086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5057 === (4))){
var inst_5024 = (state_5056[(9)]);
var inst_5024__$1 = (state_5056[(2)]);
var inst_5025 = (inst_5024__$1 == null);
var inst_5026 = cljs.core.not.call(null,inst_5025);
var state_5056__$1 = (function (){var statearr_5061 = state_5056;
(statearr_5061[(9)] = inst_5024__$1);

return statearr_5061;
})();
if(inst_5026){
var statearr_5062_5087 = state_5056__$1;
(statearr_5062_5087[(1)] = (5));

} else {
var statearr_5063_5088 = state_5056__$1;
(statearr_5063_5088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5057 === (15))){
var inst_5046 = (state_5056[(2)]);
var state_5056__$1 = state_5056;
var statearr_5064_5089 = state_5056__$1;
(statearr_5064_5089[(2)] = inst_5046);

(statearr_5064_5089[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5057 === (13))){
var state_5056__$1 = state_5056;
var statearr_5065_5090 = state_5056__$1;
(statearr_5065_5090[(2)] = null);

(statearr_5065_5090[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5057 === (6))){
var inst_5021 = (state_5056[(8)]);
var inst_5042 = (inst_5021 > (0));
var state_5056__$1 = state_5056;
if(cljs.core.truth_(inst_5042)){
var statearr_5066_5091 = state_5056__$1;
(statearr_5066_5091[(1)] = (12));

} else {
var statearr_5067_5092 = state_5056__$1;
(statearr_5067_5092[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5057 === (3))){
var inst_5054 = (state_5056[(2)]);
var state_5056__$1 = state_5056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5056__$1,inst_5054);
} else {
if((state_val_5057 === (12))){
var inst_5020 = (state_5056[(7)]);
var inst_5044 = cljs.core.vec.call(null,inst_5020);
var state_5056__$1 = state_5056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5056__$1,(15),out,inst_5044);
} else {
if((state_val_5057 === (2))){
var state_5056__$1 = state_5056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5056__$1,(4),ch);
} else {
if((state_val_5057 === (11))){
var inst_5036 = (state_5056[(2)]);
var inst_5037 = (new Array(n));
var inst_5020 = inst_5037;
var inst_5021 = (0);
var state_5056__$1 = (function (){var statearr_5068 = state_5056;
(statearr_5068[(10)] = inst_5036);

(statearr_5068[(7)] = inst_5020);

(statearr_5068[(8)] = inst_5021);

return statearr_5068;
})();
var statearr_5069_5093 = state_5056__$1;
(statearr_5069_5093[(2)] = null);

(statearr_5069_5093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5057 === (9))){
var inst_5020 = (state_5056[(7)]);
var inst_5034 = cljs.core.vec.call(null,inst_5020);
var state_5056__$1 = state_5056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5056__$1,(11),out,inst_5034);
} else {
if((state_val_5057 === (5))){
var inst_5020 = (state_5056[(7)]);
var inst_5024 = (state_5056[(9)]);
var inst_5021 = (state_5056[(8)]);
var inst_5029 = (state_5056[(11)]);
var inst_5028 = (inst_5020[inst_5021] = inst_5024);
var inst_5029__$1 = (inst_5021 + (1));
var inst_5030 = (inst_5029__$1 < n);
var state_5056__$1 = (function (){var statearr_5070 = state_5056;
(statearr_5070[(12)] = inst_5028);

(statearr_5070[(11)] = inst_5029__$1);

return statearr_5070;
})();
if(cljs.core.truth_(inst_5030)){
var statearr_5071_5094 = state_5056__$1;
(statearr_5071_5094[(1)] = (8));

} else {
var statearr_5072_5095 = state_5056__$1;
(statearr_5072_5095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5057 === (14))){
var inst_5049 = (state_5056[(2)]);
var inst_5050 = cljs.core.async.close_BANG_.call(null,out);
var state_5056__$1 = (function (){var statearr_5074 = state_5056;
(statearr_5074[(13)] = inst_5049);

return statearr_5074;
})();
var statearr_5075_5096 = state_5056__$1;
(statearr_5075_5096[(2)] = inst_5050);

(statearr_5075_5096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5057 === (10))){
var inst_5040 = (state_5056[(2)]);
var state_5056__$1 = state_5056;
var statearr_5076_5097 = state_5056__$1;
(statearr_5076_5097[(2)] = inst_5040);

(statearr_5076_5097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5057 === (8))){
var inst_5020 = (state_5056[(7)]);
var inst_5029 = (state_5056[(11)]);
var tmp5073 = inst_5020;
var inst_5020__$1 = tmp5073;
var inst_5021 = inst_5029;
var state_5056__$1 = (function (){var statearr_5077 = state_5056;
(statearr_5077[(7)] = inst_5020__$1);

(statearr_5077[(8)] = inst_5021);

return statearr_5077;
})();
var statearr_5078_5098 = state_5056__$1;
(statearr_5078_5098[(2)] = null);

(statearr_5078_5098[(1)] = (2));


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
});})(c__3282__auto___5084,out))
;
return ((function (switch__3194__auto__,c__3282__auto___5084,out){
return (function() {
var cljs$core$async$state_machine__3195__auto__ = null;
var cljs$core$async$state_machine__3195__auto____0 = (function (){
var statearr_5079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5079[(0)] = cljs$core$async$state_machine__3195__auto__);

(statearr_5079[(1)] = (1));

return statearr_5079;
});
var cljs$core$async$state_machine__3195__auto____1 = (function (state_5056){
while(true){
var ret_value__3196__auto__ = (function (){try{while(true){
var result__3197__auto__ = switch__3194__auto__.call(null,state_5056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3197__auto__;
}
break;
}
}catch (e5080){if((e5080 instanceof Object)){
var ex__3198__auto__ = e5080;
var statearr_5081_5099 = state_5056;
(statearr_5081_5099[(5)] = ex__3198__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5100 = state_5056;
state_5056 = G__5100;
continue;
} else {
return ret_value__3196__auto__;
}
break;
}
});
cljs$core$async$state_machine__3195__auto__ = function(state_5056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3195__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3195__auto____1.call(this,state_5056);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3195__auto____0;
cljs$core$async$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3195__auto____1;
return cljs$core$async$state_machine__3195__auto__;
})()
;})(switch__3194__auto__,c__3282__auto___5084,out))
})();
var state__3284__auto__ = (function (){var statearr_5082 = f__3283__auto__.call(null);
(statearr_5082[(6)] = c__3282__auto___5084);

return statearr_5082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3284__auto__);
});})(c__3282__auto___5084,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__5102 = arguments.length;
switch (G__5102) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3282__auto___5172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3282__auto___5172,out){
return (function (){
var f__3283__auto__ = (function (){var switch__3194__auto__ = ((function (c__3282__auto___5172,out){
return (function (state_5144){
var state_val_5145 = (state_5144[(1)]);
if((state_val_5145 === (7))){
var inst_5140 = (state_5144[(2)]);
var state_5144__$1 = state_5144;
var statearr_5146_5173 = state_5144__$1;
(statearr_5146_5173[(2)] = inst_5140);

(statearr_5146_5173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5145 === (1))){
var inst_5103 = [];
var inst_5104 = inst_5103;
var inst_5105 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_5144__$1 = (function (){var statearr_5147 = state_5144;
(statearr_5147[(7)] = inst_5105);

(statearr_5147[(8)] = inst_5104);

return statearr_5147;
})();
var statearr_5148_5174 = state_5144__$1;
(statearr_5148_5174[(2)] = null);

(statearr_5148_5174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5145 === (4))){
var inst_5108 = (state_5144[(9)]);
var inst_5108__$1 = (state_5144[(2)]);
var inst_5109 = (inst_5108__$1 == null);
var inst_5110 = cljs.core.not.call(null,inst_5109);
var state_5144__$1 = (function (){var statearr_5149 = state_5144;
(statearr_5149[(9)] = inst_5108__$1);

return statearr_5149;
})();
if(inst_5110){
var statearr_5150_5175 = state_5144__$1;
(statearr_5150_5175[(1)] = (5));

} else {
var statearr_5151_5176 = state_5144__$1;
(statearr_5151_5176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5145 === (15))){
var inst_5134 = (state_5144[(2)]);
var state_5144__$1 = state_5144;
var statearr_5152_5177 = state_5144__$1;
(statearr_5152_5177[(2)] = inst_5134);

(statearr_5152_5177[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5145 === (13))){
var state_5144__$1 = state_5144;
var statearr_5153_5178 = state_5144__$1;
(statearr_5153_5178[(2)] = null);

(statearr_5153_5178[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5145 === (6))){
var inst_5104 = (state_5144[(8)]);
var inst_5129 = inst_5104.length;
var inst_5130 = (inst_5129 > (0));
var state_5144__$1 = state_5144;
if(cljs.core.truth_(inst_5130)){
var statearr_5154_5179 = state_5144__$1;
(statearr_5154_5179[(1)] = (12));

} else {
var statearr_5155_5180 = state_5144__$1;
(statearr_5155_5180[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5145 === (3))){
var inst_5142 = (state_5144[(2)]);
var state_5144__$1 = state_5144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5144__$1,inst_5142);
} else {
if((state_val_5145 === (12))){
var inst_5104 = (state_5144[(8)]);
var inst_5132 = cljs.core.vec.call(null,inst_5104);
var state_5144__$1 = state_5144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5144__$1,(15),out,inst_5132);
} else {
if((state_val_5145 === (2))){
var state_5144__$1 = state_5144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5144__$1,(4),ch);
} else {
if((state_val_5145 === (11))){
var inst_5108 = (state_5144[(9)]);
var inst_5112 = (state_5144[(10)]);
var inst_5122 = (state_5144[(2)]);
var inst_5123 = [];
var inst_5124 = inst_5123.push(inst_5108);
var inst_5104 = inst_5123;
var inst_5105 = inst_5112;
var state_5144__$1 = (function (){var statearr_5156 = state_5144;
(statearr_5156[(11)] = inst_5124);

(statearr_5156[(7)] = inst_5105);

(statearr_5156[(8)] = inst_5104);

(statearr_5156[(12)] = inst_5122);

return statearr_5156;
})();
var statearr_5157_5181 = state_5144__$1;
(statearr_5157_5181[(2)] = null);

(statearr_5157_5181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5145 === (9))){
var inst_5104 = (state_5144[(8)]);
var inst_5120 = cljs.core.vec.call(null,inst_5104);
var state_5144__$1 = state_5144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5144__$1,(11),out,inst_5120);
} else {
if((state_val_5145 === (5))){
var inst_5108 = (state_5144[(9)]);
var inst_5105 = (state_5144[(7)]);
var inst_5112 = (state_5144[(10)]);
var inst_5112__$1 = f.call(null,inst_5108);
var inst_5113 = cljs.core._EQ_.call(null,inst_5112__$1,inst_5105);
var inst_5114 = cljs.core.keyword_identical_QMARK_.call(null,inst_5105,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_5115 = ((inst_5113) || (inst_5114));
var state_5144__$1 = (function (){var statearr_5158 = state_5144;
(statearr_5158[(10)] = inst_5112__$1);

return statearr_5158;
})();
if(cljs.core.truth_(inst_5115)){
var statearr_5159_5182 = state_5144__$1;
(statearr_5159_5182[(1)] = (8));

} else {
var statearr_5160_5183 = state_5144__$1;
(statearr_5160_5183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5145 === (14))){
var inst_5137 = (state_5144[(2)]);
var inst_5138 = cljs.core.async.close_BANG_.call(null,out);
var state_5144__$1 = (function (){var statearr_5162 = state_5144;
(statearr_5162[(13)] = inst_5137);

return statearr_5162;
})();
var statearr_5163_5184 = state_5144__$1;
(statearr_5163_5184[(2)] = inst_5138);

(statearr_5163_5184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5145 === (10))){
var inst_5127 = (state_5144[(2)]);
var state_5144__$1 = state_5144;
var statearr_5164_5185 = state_5144__$1;
(statearr_5164_5185[(2)] = inst_5127);

(statearr_5164_5185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5145 === (8))){
var inst_5108 = (state_5144[(9)]);
var inst_5104 = (state_5144[(8)]);
var inst_5112 = (state_5144[(10)]);
var inst_5117 = inst_5104.push(inst_5108);
var tmp5161 = inst_5104;
var inst_5104__$1 = tmp5161;
var inst_5105 = inst_5112;
var state_5144__$1 = (function (){var statearr_5165 = state_5144;
(statearr_5165[(7)] = inst_5105);

(statearr_5165[(8)] = inst_5104__$1);

(statearr_5165[(14)] = inst_5117);

return statearr_5165;
})();
var statearr_5166_5186 = state_5144__$1;
(statearr_5166_5186[(2)] = null);

(statearr_5166_5186[(1)] = (2));


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
});})(c__3282__auto___5172,out))
;
return ((function (switch__3194__auto__,c__3282__auto___5172,out){
return (function() {
var cljs$core$async$state_machine__3195__auto__ = null;
var cljs$core$async$state_machine__3195__auto____0 = (function (){
var statearr_5167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5167[(0)] = cljs$core$async$state_machine__3195__auto__);

(statearr_5167[(1)] = (1));

return statearr_5167;
});
var cljs$core$async$state_machine__3195__auto____1 = (function (state_5144){
while(true){
var ret_value__3196__auto__ = (function (){try{while(true){
var result__3197__auto__ = switch__3194__auto__.call(null,state_5144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3197__auto__;
}
break;
}
}catch (e5168){if((e5168 instanceof Object)){
var ex__3198__auto__ = e5168;
var statearr_5169_5187 = state_5144;
(statearr_5169_5187[(5)] = ex__3198__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5188 = state_5144;
state_5144 = G__5188;
continue;
} else {
return ret_value__3196__auto__;
}
break;
}
});
cljs$core$async$state_machine__3195__auto__ = function(state_5144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3195__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3195__auto____1.call(this,state_5144);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3195__auto____0;
cljs$core$async$state_machine__3195__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3195__auto____1;
return cljs$core$async$state_machine__3195__auto__;
})()
;})(switch__3194__auto__,c__3282__auto___5172,out))
})();
var state__3284__auto__ = (function (){var statearr_5170 = f__3283__auto__.call(null);
(statearr_5170[(6)] = c__3282__auto___5172);

return statearr_5170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3284__auto__);
});})(c__3282__auto___5172,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1531233079315
