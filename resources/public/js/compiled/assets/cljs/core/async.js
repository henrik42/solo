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
var G__3204 = arguments.length;
switch (G__3204) {
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
if(typeof cljs.core.async.t_cljs$core$async3205 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3205 = (function (f,blockable,meta3206){
this.f = f;
this.blockable = blockable;
this.meta3206 = meta3206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3207,meta3206__$1){
var self__ = this;
var _3207__$1 = this;
return (new cljs.core.async.t_cljs$core$async3205(self__.f,self__.blockable,meta3206__$1));
});

cljs.core.async.t_cljs$core$async3205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3207){
var self__ = this;
var _3207__$1 = this;
return self__.meta3206;
});

cljs.core.async.t_cljs$core$async3205.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3205.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async3205.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async3205.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async3205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta3206","meta3206",-1680943329,null)], null);
});

cljs.core.async.t_cljs$core$async3205.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3205";

cljs.core.async.t_cljs$core$async3205.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3205");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3205.
 */
cljs.core.async.__GT_t_cljs$core$async3205 = (function cljs$core$async$__GT_t_cljs$core$async3205(f__$1,blockable__$1,meta3206){
return (new cljs.core.async.t_cljs$core$async3205(f__$1,blockable__$1,meta3206));
});

}

return (new cljs.core.async.t_cljs$core$async3205(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__3211 = arguments.length;
switch (G__3211) {
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
var G__3214 = arguments.length;
switch (G__3214) {
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
var G__3217 = arguments.length;
switch (G__3217) {
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
var val_3219 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_3219);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_3219,ret){
return (function (){
return fn1.call(null,val_3219);
});})(val_3219,ret))
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
var G__3221 = arguments.length;
switch (G__3221) {
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
var n__4376__auto___3223 = n;
var x_3224 = (0);
while(true){
if((x_3224 < n__4376__auto___3223)){
(a[x_3224] = (0));

var G__3225 = (x_3224 + (1));
x_3224 = G__3225;
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

var G__3226 = (i + (1));
i = G__3226;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async3227 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3227 = (function (flag,meta3228){
this.flag = flag;
this.meta3228 = meta3228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_3229,meta3228__$1){
var self__ = this;
var _3229__$1 = this;
return (new cljs.core.async.t_cljs$core$async3227(self__.flag,meta3228__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async3227.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_3229){
var self__ = this;
var _3229__$1 = this;
return self__.meta3228;
});})(flag))
;

cljs.core.async.t_cljs$core$async3227.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3227.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async3227.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async3227.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async3227.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta3228","meta3228",-623664067,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async3227.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3227";

cljs.core.async.t_cljs$core$async3227.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3227");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3227.
 */
cljs.core.async.__GT_t_cljs$core$async3227 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async3227(flag__$1,meta3228){
return (new cljs.core.async.t_cljs$core$async3227(flag__$1,meta3228));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async3227(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async3230 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3230 = (function (flag,cb,meta3231){
this.flag = flag;
this.cb = cb;
this.meta3231 = meta3231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3232,meta3231__$1){
var self__ = this;
var _3232__$1 = this;
return (new cljs.core.async.t_cljs$core$async3230(self__.flag,self__.cb,meta3231__$1));
});

cljs.core.async.t_cljs$core$async3230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3232){
var self__ = this;
var _3232__$1 = this;
return self__.meta3231;
});

cljs.core.async.t_cljs$core$async3230.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3230.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async3230.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async3230.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async3230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta3231","meta3231",1672004524,null)], null);
});

cljs.core.async.t_cljs$core$async3230.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3230.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3230";

cljs.core.async.t_cljs$core$async3230.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3230");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3230.
 */
cljs.core.async.__GT_t_cljs$core$async3230 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async3230(flag__$1,cb__$1,meta3231){
return (new cljs.core.async.t_cljs$core$async3230(flag__$1,cb__$1,meta3231));
});

}

return (new cljs.core.async.t_cljs$core$async3230(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__3233_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3233_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3234_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3234_SHARP_,port], null));
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
var G__3235 = (i + (1));
i = G__3235;
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
var len__4499__auto___3241 = arguments.length;
var i__4500__auto___3242 = (0);
while(true){
if((i__4500__auto___3242 < len__4499__auto___3241)){
args__4502__auto__.push((arguments[i__4500__auto___3242]));

var G__3243 = (i__4500__auto___3242 + (1));
i__4500__auto___3242 = G__3243;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__3238){
var map__3239 = p__3238;
var map__3239__$1 = ((((!((map__3239 == null)))?(((((map__3239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3239):map__3239);
var opts = map__3239__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq3236){
var G__3237 = cljs.core.first.call(null,seq3236);
var seq3236__$1 = cljs.core.next.call(null,seq3236);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3237,seq3236__$1);
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
var G__3245 = arguments.length;
switch (G__3245) {
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
var c__3158__auto___3291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3158__auto___3291){
return (function (){
var f__3159__auto__ = (function (){var switch__3070__auto__ = ((function (c__3158__auto___3291){
return (function (state_3269){
var state_val_3270 = (state_3269[(1)]);
if((state_val_3270 === (7))){
var inst_3265 = (state_3269[(2)]);
var state_3269__$1 = state_3269;
var statearr_3271_3292 = state_3269__$1;
(statearr_3271_3292[(2)] = inst_3265);

(statearr_3271_3292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3270 === (1))){
var state_3269__$1 = state_3269;
var statearr_3272_3293 = state_3269__$1;
(statearr_3272_3293[(2)] = null);

(statearr_3272_3293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3270 === (4))){
var inst_3248 = (state_3269[(7)]);
var inst_3248__$1 = (state_3269[(2)]);
var inst_3249 = (inst_3248__$1 == null);
var state_3269__$1 = (function (){var statearr_3273 = state_3269;
(statearr_3273[(7)] = inst_3248__$1);

return statearr_3273;
})();
if(cljs.core.truth_(inst_3249)){
var statearr_3274_3294 = state_3269__$1;
(statearr_3274_3294[(1)] = (5));

} else {
var statearr_3275_3295 = state_3269__$1;
(statearr_3275_3295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3270 === (13))){
var state_3269__$1 = state_3269;
var statearr_3276_3296 = state_3269__$1;
(statearr_3276_3296[(2)] = null);

(statearr_3276_3296[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3270 === (6))){
var inst_3248 = (state_3269[(7)]);
var state_3269__$1 = state_3269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3269__$1,(11),to,inst_3248);
} else {
if((state_val_3270 === (3))){
var inst_3267 = (state_3269[(2)]);
var state_3269__$1 = state_3269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3269__$1,inst_3267);
} else {
if((state_val_3270 === (12))){
var state_3269__$1 = state_3269;
var statearr_3277_3297 = state_3269__$1;
(statearr_3277_3297[(2)] = null);

(statearr_3277_3297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3270 === (2))){
var state_3269__$1 = state_3269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3269__$1,(4),from);
} else {
if((state_val_3270 === (11))){
var inst_3258 = (state_3269[(2)]);
var state_3269__$1 = state_3269;
if(cljs.core.truth_(inst_3258)){
var statearr_3278_3298 = state_3269__$1;
(statearr_3278_3298[(1)] = (12));

} else {
var statearr_3279_3299 = state_3269__$1;
(statearr_3279_3299[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3270 === (9))){
var state_3269__$1 = state_3269;
var statearr_3280_3300 = state_3269__$1;
(statearr_3280_3300[(2)] = null);

(statearr_3280_3300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3270 === (5))){
var state_3269__$1 = state_3269;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3281_3301 = state_3269__$1;
(statearr_3281_3301[(1)] = (8));

} else {
var statearr_3282_3302 = state_3269__$1;
(statearr_3282_3302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3270 === (14))){
var inst_3263 = (state_3269[(2)]);
var state_3269__$1 = state_3269;
var statearr_3283_3303 = state_3269__$1;
(statearr_3283_3303[(2)] = inst_3263);

(statearr_3283_3303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3270 === (10))){
var inst_3255 = (state_3269[(2)]);
var state_3269__$1 = state_3269;
var statearr_3284_3304 = state_3269__$1;
(statearr_3284_3304[(2)] = inst_3255);

(statearr_3284_3304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3270 === (8))){
var inst_3252 = cljs.core.async.close_BANG_.call(null,to);
var state_3269__$1 = state_3269;
var statearr_3285_3305 = state_3269__$1;
(statearr_3285_3305[(2)] = inst_3252);

(statearr_3285_3305[(1)] = (10));


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
});})(c__3158__auto___3291))
;
return ((function (switch__3070__auto__,c__3158__auto___3291){
return (function() {
var cljs$core$async$state_machine__3071__auto__ = null;
var cljs$core$async$state_machine__3071__auto____0 = (function (){
var statearr_3286 = [null,null,null,null,null,null,null,null];
(statearr_3286[(0)] = cljs$core$async$state_machine__3071__auto__);

(statearr_3286[(1)] = (1));

return statearr_3286;
});
var cljs$core$async$state_machine__3071__auto____1 = (function (state_3269){
while(true){
var ret_value__3072__auto__ = (function (){try{while(true){
var result__3073__auto__ = switch__3070__auto__.call(null,state_3269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3073__auto__;
}
break;
}
}catch (e3287){if((e3287 instanceof Object)){
var ex__3074__auto__ = e3287;
var statearr_3288_3306 = state_3269;
(statearr_3288_3306[(5)] = ex__3074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3307 = state_3269;
state_3269 = G__3307;
continue;
} else {
return ret_value__3072__auto__;
}
break;
}
});
cljs$core$async$state_machine__3071__auto__ = function(state_3269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3071__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3071__auto____1.call(this,state_3269);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3071__auto____0;
cljs$core$async$state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3071__auto____1;
return cljs$core$async$state_machine__3071__auto__;
})()
;})(switch__3070__auto__,c__3158__auto___3291))
})();
var state__3160__auto__ = (function (){var statearr_3289 = f__3159__auto__.call(null);
(statearr_3289[(6)] = c__3158__auto___3291);

return statearr_3289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3160__auto__);
});})(c__3158__auto___3291))
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
return (function (p__3308){
var vec__3309 = p__3308;
var v = cljs.core.nth.call(null,vec__3309,(0),null);
var p = cljs.core.nth.call(null,vec__3309,(1),null);
var job = vec__3309;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__3158__auto___3480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3158__auto___3480,res,vec__3309,v,p,job,jobs,results){
return (function (){
var f__3159__auto__ = (function (){var switch__3070__auto__ = ((function (c__3158__auto___3480,res,vec__3309,v,p,job,jobs,results){
return (function (state_3316){
var state_val_3317 = (state_3316[(1)]);
if((state_val_3317 === (1))){
var state_3316__$1 = state_3316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3316__$1,(2),res,v);
} else {
if((state_val_3317 === (2))){
var inst_3313 = (state_3316[(2)]);
var inst_3314 = cljs.core.async.close_BANG_.call(null,res);
var state_3316__$1 = (function (){var statearr_3318 = state_3316;
(statearr_3318[(7)] = inst_3313);

return statearr_3318;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3316__$1,inst_3314);
} else {
return null;
}
}
});})(c__3158__auto___3480,res,vec__3309,v,p,job,jobs,results))
;
return ((function (switch__3070__auto__,c__3158__auto___3480,res,vec__3309,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____0 = (function (){
var statearr_3319 = [null,null,null,null,null,null,null,null];
(statearr_3319[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__);

(statearr_3319[(1)] = (1));

return statearr_3319;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____1 = (function (state_3316){
while(true){
var ret_value__3072__auto__ = (function (){try{while(true){
var result__3073__auto__ = switch__3070__auto__.call(null,state_3316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3073__auto__;
}
break;
}
}catch (e3320){if((e3320 instanceof Object)){
var ex__3074__auto__ = e3320;
var statearr_3321_3481 = state_3316;
(statearr_3321_3481[(5)] = ex__3074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3482 = state_3316;
state_3316 = G__3482;
continue;
} else {
return ret_value__3072__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__ = function(state_3316){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____1.call(this,state_3316);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__;
})()
;})(switch__3070__auto__,c__3158__auto___3480,res,vec__3309,v,p,job,jobs,results))
})();
var state__3160__auto__ = (function (){var statearr_3322 = f__3159__auto__.call(null);
(statearr_3322[(6)] = c__3158__auto___3480);

return statearr_3322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3160__auto__);
});})(c__3158__auto___3480,res,vec__3309,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__3323){
var vec__3324 = p__3323;
var v = cljs.core.nth.call(null,vec__3324,(0),null);
var p = cljs.core.nth.call(null,vec__3324,(1),null);
var job = vec__3324;
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
var n__4376__auto___3483 = n;
var __3484 = (0);
while(true){
if((__3484 < n__4376__auto___3483)){
var G__3327_3485 = type;
var G__3327_3486__$1 = (((G__3327_3485 instanceof cljs.core.Keyword))?G__3327_3485.fqn:null);
switch (G__3327_3486__$1) {
case "compute":
var c__3158__auto___3488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__3484,c__3158__auto___3488,G__3327_3485,G__3327_3486__$1,n__4376__auto___3483,jobs,results,process,async){
return (function (){
var f__3159__auto__ = (function (){var switch__3070__auto__ = ((function (__3484,c__3158__auto___3488,G__3327_3485,G__3327_3486__$1,n__4376__auto___3483,jobs,results,process,async){
return (function (state_3340){
var state_val_3341 = (state_3340[(1)]);
if((state_val_3341 === (1))){
var state_3340__$1 = state_3340;
var statearr_3342_3489 = state_3340__$1;
(statearr_3342_3489[(2)] = null);

(statearr_3342_3489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3341 === (2))){
var state_3340__$1 = state_3340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3340__$1,(4),jobs);
} else {
if((state_val_3341 === (3))){
var inst_3338 = (state_3340[(2)]);
var state_3340__$1 = state_3340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3340__$1,inst_3338);
} else {
if((state_val_3341 === (4))){
var inst_3330 = (state_3340[(2)]);
var inst_3331 = process.call(null,inst_3330);
var state_3340__$1 = state_3340;
if(cljs.core.truth_(inst_3331)){
var statearr_3343_3490 = state_3340__$1;
(statearr_3343_3490[(1)] = (5));

} else {
var statearr_3344_3491 = state_3340__$1;
(statearr_3344_3491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3341 === (5))){
var state_3340__$1 = state_3340;
var statearr_3345_3492 = state_3340__$1;
(statearr_3345_3492[(2)] = null);

(statearr_3345_3492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3341 === (6))){
var state_3340__$1 = state_3340;
var statearr_3346_3493 = state_3340__$1;
(statearr_3346_3493[(2)] = null);

(statearr_3346_3493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3341 === (7))){
var inst_3336 = (state_3340[(2)]);
var state_3340__$1 = state_3340;
var statearr_3347_3494 = state_3340__$1;
(statearr_3347_3494[(2)] = inst_3336);

(statearr_3347_3494[(1)] = (3));


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
});})(__3484,c__3158__auto___3488,G__3327_3485,G__3327_3486__$1,n__4376__auto___3483,jobs,results,process,async))
;
return ((function (__3484,switch__3070__auto__,c__3158__auto___3488,G__3327_3485,G__3327_3486__$1,n__4376__auto___3483,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____0 = (function (){
var statearr_3348 = [null,null,null,null,null,null,null];
(statearr_3348[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__);

(statearr_3348[(1)] = (1));

return statearr_3348;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____1 = (function (state_3340){
while(true){
var ret_value__3072__auto__ = (function (){try{while(true){
var result__3073__auto__ = switch__3070__auto__.call(null,state_3340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3073__auto__;
}
break;
}
}catch (e3349){if((e3349 instanceof Object)){
var ex__3074__auto__ = e3349;
var statearr_3350_3495 = state_3340;
(statearr_3350_3495[(5)] = ex__3074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3496 = state_3340;
state_3340 = G__3496;
continue;
} else {
return ret_value__3072__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__ = function(state_3340){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____1.call(this,state_3340);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__;
})()
;})(__3484,switch__3070__auto__,c__3158__auto___3488,G__3327_3485,G__3327_3486__$1,n__4376__auto___3483,jobs,results,process,async))
})();
var state__3160__auto__ = (function (){var statearr_3351 = f__3159__auto__.call(null);
(statearr_3351[(6)] = c__3158__auto___3488);

return statearr_3351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3160__auto__);
});})(__3484,c__3158__auto___3488,G__3327_3485,G__3327_3486__$1,n__4376__auto___3483,jobs,results,process,async))
);


break;
case "async":
var c__3158__auto___3497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__3484,c__3158__auto___3497,G__3327_3485,G__3327_3486__$1,n__4376__auto___3483,jobs,results,process,async){
return (function (){
var f__3159__auto__ = (function (){var switch__3070__auto__ = ((function (__3484,c__3158__auto___3497,G__3327_3485,G__3327_3486__$1,n__4376__auto___3483,jobs,results,process,async){
return (function (state_3364){
var state_val_3365 = (state_3364[(1)]);
if((state_val_3365 === (1))){
var state_3364__$1 = state_3364;
var statearr_3366_3498 = state_3364__$1;
(statearr_3366_3498[(2)] = null);

(statearr_3366_3498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3365 === (2))){
var state_3364__$1 = state_3364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3364__$1,(4),jobs);
} else {
if((state_val_3365 === (3))){
var inst_3362 = (state_3364[(2)]);
var state_3364__$1 = state_3364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3364__$1,inst_3362);
} else {
if((state_val_3365 === (4))){
var inst_3354 = (state_3364[(2)]);
var inst_3355 = async.call(null,inst_3354);
var state_3364__$1 = state_3364;
if(cljs.core.truth_(inst_3355)){
var statearr_3367_3499 = state_3364__$1;
(statearr_3367_3499[(1)] = (5));

} else {
var statearr_3368_3500 = state_3364__$1;
(statearr_3368_3500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3365 === (5))){
var state_3364__$1 = state_3364;
var statearr_3369_3501 = state_3364__$1;
(statearr_3369_3501[(2)] = null);

(statearr_3369_3501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3365 === (6))){
var state_3364__$1 = state_3364;
var statearr_3370_3502 = state_3364__$1;
(statearr_3370_3502[(2)] = null);

(statearr_3370_3502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3365 === (7))){
var inst_3360 = (state_3364[(2)]);
var state_3364__$1 = state_3364;
var statearr_3371_3503 = state_3364__$1;
(statearr_3371_3503[(2)] = inst_3360);

(statearr_3371_3503[(1)] = (3));


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
});})(__3484,c__3158__auto___3497,G__3327_3485,G__3327_3486__$1,n__4376__auto___3483,jobs,results,process,async))
;
return ((function (__3484,switch__3070__auto__,c__3158__auto___3497,G__3327_3485,G__3327_3486__$1,n__4376__auto___3483,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____0 = (function (){
var statearr_3372 = [null,null,null,null,null,null,null];
(statearr_3372[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__);

(statearr_3372[(1)] = (1));

return statearr_3372;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____1 = (function (state_3364){
while(true){
var ret_value__3072__auto__ = (function (){try{while(true){
var result__3073__auto__ = switch__3070__auto__.call(null,state_3364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3073__auto__;
}
break;
}
}catch (e3373){if((e3373 instanceof Object)){
var ex__3074__auto__ = e3373;
var statearr_3374_3504 = state_3364;
(statearr_3374_3504[(5)] = ex__3074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3505 = state_3364;
state_3364 = G__3505;
continue;
} else {
return ret_value__3072__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__ = function(state_3364){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____1.call(this,state_3364);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__;
})()
;})(__3484,switch__3070__auto__,c__3158__auto___3497,G__3327_3485,G__3327_3486__$1,n__4376__auto___3483,jobs,results,process,async))
})();
var state__3160__auto__ = (function (){var statearr_3375 = f__3159__auto__.call(null);
(statearr_3375[(6)] = c__3158__auto___3497);

return statearr_3375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3160__auto__);
});})(__3484,c__3158__auto___3497,G__3327_3485,G__3327_3486__$1,n__4376__auto___3483,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3327_3486__$1)].join('')));

}

var G__3506 = (__3484 + (1));
__3484 = G__3506;
continue;
} else {
}
break;
}

var c__3158__auto___3507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3158__auto___3507,jobs,results,process,async){
return (function (){
var f__3159__auto__ = (function (){var switch__3070__auto__ = ((function (c__3158__auto___3507,jobs,results,process,async){
return (function (state_3397){
var state_val_3398 = (state_3397[(1)]);
if((state_val_3398 === (1))){
var state_3397__$1 = state_3397;
var statearr_3399_3508 = state_3397__$1;
(statearr_3399_3508[(2)] = null);

(statearr_3399_3508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3398 === (2))){
var state_3397__$1 = state_3397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3397__$1,(4),from);
} else {
if((state_val_3398 === (3))){
var inst_3395 = (state_3397[(2)]);
var state_3397__$1 = state_3397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3397__$1,inst_3395);
} else {
if((state_val_3398 === (4))){
var inst_3378 = (state_3397[(7)]);
var inst_3378__$1 = (state_3397[(2)]);
var inst_3379 = (inst_3378__$1 == null);
var state_3397__$1 = (function (){var statearr_3400 = state_3397;
(statearr_3400[(7)] = inst_3378__$1);

return statearr_3400;
})();
if(cljs.core.truth_(inst_3379)){
var statearr_3401_3509 = state_3397__$1;
(statearr_3401_3509[(1)] = (5));

} else {
var statearr_3402_3510 = state_3397__$1;
(statearr_3402_3510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3398 === (5))){
var inst_3381 = cljs.core.async.close_BANG_.call(null,jobs);
var state_3397__$1 = state_3397;
var statearr_3403_3511 = state_3397__$1;
(statearr_3403_3511[(2)] = inst_3381);

(statearr_3403_3511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3398 === (6))){
var inst_3383 = (state_3397[(8)]);
var inst_3378 = (state_3397[(7)]);
var inst_3383__$1 = cljs.core.async.chan.call(null,(1));
var inst_3384 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3385 = [inst_3378,inst_3383__$1];
var inst_3386 = (new cljs.core.PersistentVector(null,2,(5),inst_3384,inst_3385,null));
var state_3397__$1 = (function (){var statearr_3404 = state_3397;
(statearr_3404[(8)] = inst_3383__$1);

return statearr_3404;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3397__$1,(8),jobs,inst_3386);
} else {
if((state_val_3398 === (7))){
var inst_3393 = (state_3397[(2)]);
var state_3397__$1 = state_3397;
var statearr_3405_3512 = state_3397__$1;
(statearr_3405_3512[(2)] = inst_3393);

(statearr_3405_3512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3398 === (8))){
var inst_3383 = (state_3397[(8)]);
var inst_3388 = (state_3397[(2)]);
var state_3397__$1 = (function (){var statearr_3406 = state_3397;
(statearr_3406[(9)] = inst_3388);

return statearr_3406;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3397__$1,(9),results,inst_3383);
} else {
if((state_val_3398 === (9))){
var inst_3390 = (state_3397[(2)]);
var state_3397__$1 = (function (){var statearr_3407 = state_3397;
(statearr_3407[(10)] = inst_3390);

return statearr_3407;
})();
var statearr_3408_3513 = state_3397__$1;
(statearr_3408_3513[(2)] = null);

(statearr_3408_3513[(1)] = (2));


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
});})(c__3158__auto___3507,jobs,results,process,async))
;
return ((function (switch__3070__auto__,c__3158__auto___3507,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____0 = (function (){
var statearr_3409 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3409[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__);

(statearr_3409[(1)] = (1));

return statearr_3409;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____1 = (function (state_3397){
while(true){
var ret_value__3072__auto__ = (function (){try{while(true){
var result__3073__auto__ = switch__3070__auto__.call(null,state_3397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3073__auto__;
}
break;
}
}catch (e3410){if((e3410 instanceof Object)){
var ex__3074__auto__ = e3410;
var statearr_3411_3514 = state_3397;
(statearr_3411_3514[(5)] = ex__3074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3515 = state_3397;
state_3397 = G__3515;
continue;
} else {
return ret_value__3072__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__ = function(state_3397){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____1.call(this,state_3397);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__;
})()
;})(switch__3070__auto__,c__3158__auto___3507,jobs,results,process,async))
})();
var state__3160__auto__ = (function (){var statearr_3412 = f__3159__auto__.call(null);
(statearr_3412[(6)] = c__3158__auto___3507);

return statearr_3412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3160__auto__);
});})(c__3158__auto___3507,jobs,results,process,async))
);


var c__3158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3158__auto__,jobs,results,process,async){
return (function (){
var f__3159__auto__ = (function (){var switch__3070__auto__ = ((function (c__3158__auto__,jobs,results,process,async){
return (function (state_3450){
var state_val_3451 = (state_3450[(1)]);
if((state_val_3451 === (7))){
var inst_3446 = (state_3450[(2)]);
var state_3450__$1 = state_3450;
var statearr_3452_3516 = state_3450__$1;
(statearr_3452_3516[(2)] = inst_3446);

(statearr_3452_3516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3451 === (20))){
var state_3450__$1 = state_3450;
var statearr_3453_3517 = state_3450__$1;
(statearr_3453_3517[(2)] = null);

(statearr_3453_3517[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3451 === (1))){
var state_3450__$1 = state_3450;
var statearr_3454_3518 = state_3450__$1;
(statearr_3454_3518[(2)] = null);

(statearr_3454_3518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3451 === (4))){
var inst_3415 = (state_3450[(7)]);
var inst_3415__$1 = (state_3450[(2)]);
var inst_3416 = (inst_3415__$1 == null);
var state_3450__$1 = (function (){var statearr_3455 = state_3450;
(statearr_3455[(7)] = inst_3415__$1);

return statearr_3455;
})();
if(cljs.core.truth_(inst_3416)){
var statearr_3456_3519 = state_3450__$1;
(statearr_3456_3519[(1)] = (5));

} else {
var statearr_3457_3520 = state_3450__$1;
(statearr_3457_3520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3451 === (15))){
var inst_3428 = (state_3450[(8)]);
var state_3450__$1 = state_3450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3450__$1,(18),to,inst_3428);
} else {
if((state_val_3451 === (21))){
var inst_3441 = (state_3450[(2)]);
var state_3450__$1 = state_3450;
var statearr_3458_3521 = state_3450__$1;
(statearr_3458_3521[(2)] = inst_3441);

(statearr_3458_3521[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3451 === (13))){
var inst_3443 = (state_3450[(2)]);
var state_3450__$1 = (function (){var statearr_3459 = state_3450;
(statearr_3459[(9)] = inst_3443);

return statearr_3459;
})();
var statearr_3460_3522 = state_3450__$1;
(statearr_3460_3522[(2)] = null);

(statearr_3460_3522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3451 === (6))){
var inst_3415 = (state_3450[(7)]);
var state_3450__$1 = state_3450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3450__$1,(11),inst_3415);
} else {
if((state_val_3451 === (17))){
var inst_3436 = (state_3450[(2)]);
var state_3450__$1 = state_3450;
if(cljs.core.truth_(inst_3436)){
var statearr_3461_3523 = state_3450__$1;
(statearr_3461_3523[(1)] = (19));

} else {
var statearr_3462_3524 = state_3450__$1;
(statearr_3462_3524[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3451 === (3))){
var inst_3448 = (state_3450[(2)]);
var state_3450__$1 = state_3450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3450__$1,inst_3448);
} else {
if((state_val_3451 === (12))){
var inst_3425 = (state_3450[(10)]);
var state_3450__$1 = state_3450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3450__$1,(14),inst_3425);
} else {
if((state_val_3451 === (2))){
var state_3450__$1 = state_3450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3450__$1,(4),results);
} else {
if((state_val_3451 === (19))){
var state_3450__$1 = state_3450;
var statearr_3463_3525 = state_3450__$1;
(statearr_3463_3525[(2)] = null);

(statearr_3463_3525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3451 === (11))){
var inst_3425 = (state_3450[(2)]);
var state_3450__$1 = (function (){var statearr_3464 = state_3450;
(statearr_3464[(10)] = inst_3425);

return statearr_3464;
})();
var statearr_3465_3526 = state_3450__$1;
(statearr_3465_3526[(2)] = null);

(statearr_3465_3526[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3451 === (9))){
var state_3450__$1 = state_3450;
var statearr_3466_3527 = state_3450__$1;
(statearr_3466_3527[(2)] = null);

(statearr_3466_3527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3451 === (5))){
var state_3450__$1 = state_3450;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3467_3528 = state_3450__$1;
(statearr_3467_3528[(1)] = (8));

} else {
var statearr_3468_3529 = state_3450__$1;
(statearr_3468_3529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3451 === (14))){
var inst_3430 = (state_3450[(11)]);
var inst_3428 = (state_3450[(8)]);
var inst_3428__$1 = (state_3450[(2)]);
var inst_3429 = (inst_3428__$1 == null);
var inst_3430__$1 = cljs.core.not.call(null,inst_3429);
var state_3450__$1 = (function (){var statearr_3469 = state_3450;
(statearr_3469[(11)] = inst_3430__$1);

(statearr_3469[(8)] = inst_3428__$1);

return statearr_3469;
})();
if(inst_3430__$1){
var statearr_3470_3530 = state_3450__$1;
(statearr_3470_3530[(1)] = (15));

} else {
var statearr_3471_3531 = state_3450__$1;
(statearr_3471_3531[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3451 === (16))){
var inst_3430 = (state_3450[(11)]);
var state_3450__$1 = state_3450;
var statearr_3472_3532 = state_3450__$1;
(statearr_3472_3532[(2)] = inst_3430);

(statearr_3472_3532[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3451 === (10))){
var inst_3422 = (state_3450[(2)]);
var state_3450__$1 = state_3450;
var statearr_3473_3533 = state_3450__$1;
(statearr_3473_3533[(2)] = inst_3422);

(statearr_3473_3533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3451 === (18))){
var inst_3433 = (state_3450[(2)]);
var state_3450__$1 = state_3450;
var statearr_3474_3534 = state_3450__$1;
(statearr_3474_3534[(2)] = inst_3433);

(statearr_3474_3534[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3451 === (8))){
var inst_3419 = cljs.core.async.close_BANG_.call(null,to);
var state_3450__$1 = state_3450;
var statearr_3475_3535 = state_3450__$1;
(statearr_3475_3535[(2)] = inst_3419);

(statearr_3475_3535[(1)] = (10));


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
});})(c__3158__auto__,jobs,results,process,async))
;
return ((function (switch__3070__auto__,c__3158__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____0 = (function (){
var statearr_3476 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3476[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__);

(statearr_3476[(1)] = (1));

return statearr_3476;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____1 = (function (state_3450){
while(true){
var ret_value__3072__auto__ = (function (){try{while(true){
var result__3073__auto__ = switch__3070__auto__.call(null,state_3450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3073__auto__;
}
break;
}
}catch (e3477){if((e3477 instanceof Object)){
var ex__3074__auto__ = e3477;
var statearr_3478_3536 = state_3450;
(statearr_3478_3536[(5)] = ex__3074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3537 = state_3450;
state_3450 = G__3537;
continue;
} else {
return ret_value__3072__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__ = function(state_3450){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____1.call(this,state_3450);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3071__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3071__auto__;
})()
;})(switch__3070__auto__,c__3158__auto__,jobs,results,process,async))
})();
var state__3160__auto__ = (function (){var statearr_3479 = f__3159__auto__.call(null);
(statearr_3479[(6)] = c__3158__auto__);

return statearr_3479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3160__auto__);
});})(c__3158__auto__,jobs,results,process,async))
);

return c__3158__auto__;
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
var G__3539 = arguments.length;
switch (G__3539) {
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
var G__3542 = arguments.length;
switch (G__3542) {
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
var G__3545 = arguments.length;
switch (G__3545) {
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
var c__3158__auto___3594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3158__auto___3594,tc,fc){
return (function (){
var f__3159__auto__ = (function (){var switch__3070__auto__ = ((function (c__3158__auto___3594,tc,fc){
return (function (state_3571){
var state_val_3572 = (state_3571[(1)]);
if((state_val_3572 === (7))){
var inst_3567 = (state_3571[(2)]);
var state_3571__$1 = state_3571;
var statearr_3573_3595 = state_3571__$1;
(statearr_3573_3595[(2)] = inst_3567);

(statearr_3573_3595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3572 === (1))){
var state_3571__$1 = state_3571;
var statearr_3574_3596 = state_3571__$1;
(statearr_3574_3596[(2)] = null);

(statearr_3574_3596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3572 === (4))){
var inst_3548 = (state_3571[(7)]);
var inst_3548__$1 = (state_3571[(2)]);
var inst_3549 = (inst_3548__$1 == null);
var state_3571__$1 = (function (){var statearr_3575 = state_3571;
(statearr_3575[(7)] = inst_3548__$1);

return statearr_3575;
})();
if(cljs.core.truth_(inst_3549)){
var statearr_3576_3597 = state_3571__$1;
(statearr_3576_3597[(1)] = (5));

} else {
var statearr_3577_3598 = state_3571__$1;
(statearr_3577_3598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3572 === (13))){
var state_3571__$1 = state_3571;
var statearr_3578_3599 = state_3571__$1;
(statearr_3578_3599[(2)] = null);

(statearr_3578_3599[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3572 === (6))){
var inst_3548 = (state_3571[(7)]);
var inst_3554 = p.call(null,inst_3548);
var state_3571__$1 = state_3571;
if(cljs.core.truth_(inst_3554)){
var statearr_3579_3600 = state_3571__$1;
(statearr_3579_3600[(1)] = (9));

} else {
var statearr_3580_3601 = state_3571__$1;
(statearr_3580_3601[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3572 === (3))){
var inst_3569 = (state_3571[(2)]);
var state_3571__$1 = state_3571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3571__$1,inst_3569);
} else {
if((state_val_3572 === (12))){
var state_3571__$1 = state_3571;
var statearr_3581_3602 = state_3571__$1;
(statearr_3581_3602[(2)] = null);

(statearr_3581_3602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3572 === (2))){
var state_3571__$1 = state_3571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3571__$1,(4),ch);
} else {
if((state_val_3572 === (11))){
var inst_3548 = (state_3571[(7)]);
var inst_3558 = (state_3571[(2)]);
var state_3571__$1 = state_3571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3571__$1,(8),inst_3558,inst_3548);
} else {
if((state_val_3572 === (9))){
var state_3571__$1 = state_3571;
var statearr_3582_3603 = state_3571__$1;
(statearr_3582_3603[(2)] = tc);

(statearr_3582_3603[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3572 === (5))){
var inst_3551 = cljs.core.async.close_BANG_.call(null,tc);
var inst_3552 = cljs.core.async.close_BANG_.call(null,fc);
var state_3571__$1 = (function (){var statearr_3583 = state_3571;
(statearr_3583[(8)] = inst_3551);

return statearr_3583;
})();
var statearr_3584_3604 = state_3571__$1;
(statearr_3584_3604[(2)] = inst_3552);

(statearr_3584_3604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3572 === (14))){
var inst_3565 = (state_3571[(2)]);
var state_3571__$1 = state_3571;
var statearr_3585_3605 = state_3571__$1;
(statearr_3585_3605[(2)] = inst_3565);

(statearr_3585_3605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3572 === (10))){
var state_3571__$1 = state_3571;
var statearr_3586_3606 = state_3571__$1;
(statearr_3586_3606[(2)] = fc);

(statearr_3586_3606[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3572 === (8))){
var inst_3560 = (state_3571[(2)]);
var state_3571__$1 = state_3571;
if(cljs.core.truth_(inst_3560)){
var statearr_3587_3607 = state_3571__$1;
(statearr_3587_3607[(1)] = (12));

} else {
var statearr_3588_3608 = state_3571__$1;
(statearr_3588_3608[(1)] = (13));

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
});})(c__3158__auto___3594,tc,fc))
;
return ((function (switch__3070__auto__,c__3158__auto___3594,tc,fc){
return (function() {
var cljs$core$async$state_machine__3071__auto__ = null;
var cljs$core$async$state_machine__3071__auto____0 = (function (){
var statearr_3589 = [null,null,null,null,null,null,null,null,null];
(statearr_3589[(0)] = cljs$core$async$state_machine__3071__auto__);

(statearr_3589[(1)] = (1));

return statearr_3589;
});
var cljs$core$async$state_machine__3071__auto____1 = (function (state_3571){
while(true){
var ret_value__3072__auto__ = (function (){try{while(true){
var result__3073__auto__ = switch__3070__auto__.call(null,state_3571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3073__auto__;
}
break;
}
}catch (e3590){if((e3590 instanceof Object)){
var ex__3074__auto__ = e3590;
var statearr_3591_3609 = state_3571;
(statearr_3591_3609[(5)] = ex__3074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3610 = state_3571;
state_3571 = G__3610;
continue;
} else {
return ret_value__3072__auto__;
}
break;
}
});
cljs$core$async$state_machine__3071__auto__ = function(state_3571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3071__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3071__auto____1.call(this,state_3571);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3071__auto____0;
cljs$core$async$state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3071__auto____1;
return cljs$core$async$state_machine__3071__auto__;
})()
;})(switch__3070__auto__,c__3158__auto___3594,tc,fc))
})();
var state__3160__auto__ = (function (){var statearr_3592 = f__3159__auto__.call(null);
(statearr_3592[(6)] = c__3158__auto___3594);

return statearr_3592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3160__auto__);
});})(c__3158__auto___3594,tc,fc))
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
var c__3158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3158__auto__){
return (function (){
var f__3159__auto__ = (function (){var switch__3070__auto__ = ((function (c__3158__auto__){
return (function (state_3631){
var state_val_3632 = (state_3631[(1)]);
if((state_val_3632 === (7))){
var inst_3627 = (state_3631[(2)]);
var state_3631__$1 = state_3631;
var statearr_3633_3651 = state_3631__$1;
(statearr_3633_3651[(2)] = inst_3627);

(statearr_3633_3651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3632 === (1))){
var inst_3611 = init;
var state_3631__$1 = (function (){var statearr_3634 = state_3631;
(statearr_3634[(7)] = inst_3611);

return statearr_3634;
})();
var statearr_3635_3652 = state_3631__$1;
(statearr_3635_3652[(2)] = null);

(statearr_3635_3652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3632 === (4))){
var inst_3614 = (state_3631[(8)]);
var inst_3614__$1 = (state_3631[(2)]);
var inst_3615 = (inst_3614__$1 == null);
var state_3631__$1 = (function (){var statearr_3636 = state_3631;
(statearr_3636[(8)] = inst_3614__$1);

return statearr_3636;
})();
if(cljs.core.truth_(inst_3615)){
var statearr_3637_3653 = state_3631__$1;
(statearr_3637_3653[(1)] = (5));

} else {
var statearr_3638_3654 = state_3631__$1;
(statearr_3638_3654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3632 === (6))){
var inst_3618 = (state_3631[(9)]);
var inst_3614 = (state_3631[(8)]);
var inst_3611 = (state_3631[(7)]);
var inst_3618__$1 = f.call(null,inst_3611,inst_3614);
var inst_3619 = cljs.core.reduced_QMARK_.call(null,inst_3618__$1);
var state_3631__$1 = (function (){var statearr_3639 = state_3631;
(statearr_3639[(9)] = inst_3618__$1);

return statearr_3639;
})();
if(inst_3619){
var statearr_3640_3655 = state_3631__$1;
(statearr_3640_3655[(1)] = (8));

} else {
var statearr_3641_3656 = state_3631__$1;
(statearr_3641_3656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3632 === (3))){
var inst_3629 = (state_3631[(2)]);
var state_3631__$1 = state_3631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3631__$1,inst_3629);
} else {
if((state_val_3632 === (2))){
var state_3631__$1 = state_3631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3631__$1,(4),ch);
} else {
if((state_val_3632 === (9))){
var inst_3618 = (state_3631[(9)]);
var inst_3611 = inst_3618;
var state_3631__$1 = (function (){var statearr_3642 = state_3631;
(statearr_3642[(7)] = inst_3611);

return statearr_3642;
})();
var statearr_3643_3657 = state_3631__$1;
(statearr_3643_3657[(2)] = null);

(statearr_3643_3657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3632 === (5))){
var inst_3611 = (state_3631[(7)]);
var state_3631__$1 = state_3631;
var statearr_3644_3658 = state_3631__$1;
(statearr_3644_3658[(2)] = inst_3611);

(statearr_3644_3658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3632 === (10))){
var inst_3625 = (state_3631[(2)]);
var state_3631__$1 = state_3631;
var statearr_3645_3659 = state_3631__$1;
(statearr_3645_3659[(2)] = inst_3625);

(statearr_3645_3659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3632 === (8))){
var inst_3618 = (state_3631[(9)]);
var inst_3621 = cljs.core.deref.call(null,inst_3618);
var state_3631__$1 = state_3631;
var statearr_3646_3660 = state_3631__$1;
(statearr_3646_3660[(2)] = inst_3621);

(statearr_3646_3660[(1)] = (10));


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
});})(c__3158__auto__))
;
return ((function (switch__3070__auto__,c__3158__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__3071__auto__ = null;
var cljs$core$async$reduce_$_state_machine__3071__auto____0 = (function (){
var statearr_3647 = [null,null,null,null,null,null,null,null,null,null];
(statearr_3647[(0)] = cljs$core$async$reduce_$_state_machine__3071__auto__);

(statearr_3647[(1)] = (1));

return statearr_3647;
});
var cljs$core$async$reduce_$_state_machine__3071__auto____1 = (function (state_3631){
while(true){
var ret_value__3072__auto__ = (function (){try{while(true){
var result__3073__auto__ = switch__3070__auto__.call(null,state_3631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3073__auto__;
}
break;
}
}catch (e3648){if((e3648 instanceof Object)){
var ex__3074__auto__ = e3648;
var statearr_3649_3661 = state_3631;
(statearr_3649_3661[(5)] = ex__3074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3662 = state_3631;
state_3631 = G__3662;
continue;
} else {
return ret_value__3072__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__3071__auto__ = function(state_3631){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__3071__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__3071__auto____1.call(this,state_3631);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__3071__auto____0;
cljs$core$async$reduce_$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__3071__auto____1;
return cljs$core$async$reduce_$_state_machine__3071__auto__;
})()
;})(switch__3070__auto__,c__3158__auto__))
})();
var state__3160__auto__ = (function (){var statearr_3650 = f__3159__auto__.call(null);
(statearr_3650[(6)] = c__3158__auto__);

return statearr_3650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3160__auto__);
});})(c__3158__auto__))
);

return c__3158__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__3158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3158__auto__,f__$1){
return (function (){
var f__3159__auto__ = (function (){var switch__3070__auto__ = ((function (c__3158__auto__,f__$1){
return (function (state_3668){
var state_val_3669 = (state_3668[(1)]);
if((state_val_3669 === (1))){
var inst_3663 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_3668__$1 = state_3668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3668__$1,(2),inst_3663);
} else {
if((state_val_3669 === (2))){
var inst_3665 = (state_3668[(2)]);
var inst_3666 = f__$1.call(null,inst_3665);
var state_3668__$1 = state_3668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3668__$1,inst_3666);
} else {
return null;
}
}
});})(c__3158__auto__,f__$1))
;
return ((function (switch__3070__auto__,c__3158__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__3071__auto__ = null;
var cljs$core$async$transduce_$_state_machine__3071__auto____0 = (function (){
var statearr_3670 = [null,null,null,null,null,null,null];
(statearr_3670[(0)] = cljs$core$async$transduce_$_state_machine__3071__auto__);

(statearr_3670[(1)] = (1));

return statearr_3670;
});
var cljs$core$async$transduce_$_state_machine__3071__auto____1 = (function (state_3668){
while(true){
var ret_value__3072__auto__ = (function (){try{while(true){
var result__3073__auto__ = switch__3070__auto__.call(null,state_3668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3073__auto__;
}
break;
}
}catch (e3671){if((e3671 instanceof Object)){
var ex__3074__auto__ = e3671;
var statearr_3672_3674 = state_3668;
(statearr_3672_3674[(5)] = ex__3074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3675 = state_3668;
state_3668 = G__3675;
continue;
} else {
return ret_value__3072__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__3071__auto__ = function(state_3668){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__3071__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__3071__auto____1.call(this,state_3668);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__3071__auto____0;
cljs$core$async$transduce_$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__3071__auto____1;
return cljs$core$async$transduce_$_state_machine__3071__auto__;
})()
;})(switch__3070__auto__,c__3158__auto__,f__$1))
})();
var state__3160__auto__ = (function (){var statearr_3673 = f__3159__auto__.call(null);
(statearr_3673[(6)] = c__3158__auto__);

return statearr_3673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3160__auto__);
});})(c__3158__auto__,f__$1))
);

return c__3158__auto__;
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
var G__3677 = arguments.length;
switch (G__3677) {
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
var c__3158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3158__auto__){
return (function (){
var f__3159__auto__ = (function (){var switch__3070__auto__ = ((function (c__3158__auto__){
return (function (state_3702){
var state_val_3703 = (state_3702[(1)]);
if((state_val_3703 === (7))){
var inst_3684 = (state_3702[(2)]);
var state_3702__$1 = state_3702;
var statearr_3704_3725 = state_3702__$1;
(statearr_3704_3725[(2)] = inst_3684);

(statearr_3704_3725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3703 === (1))){
var inst_3678 = cljs.core.seq.call(null,coll);
var inst_3679 = inst_3678;
var state_3702__$1 = (function (){var statearr_3705 = state_3702;
(statearr_3705[(7)] = inst_3679);

return statearr_3705;
})();
var statearr_3706_3726 = state_3702__$1;
(statearr_3706_3726[(2)] = null);

(statearr_3706_3726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3703 === (4))){
var inst_3679 = (state_3702[(7)]);
var inst_3682 = cljs.core.first.call(null,inst_3679);
var state_3702__$1 = state_3702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3702__$1,(7),ch,inst_3682);
} else {
if((state_val_3703 === (13))){
var inst_3696 = (state_3702[(2)]);
var state_3702__$1 = state_3702;
var statearr_3707_3727 = state_3702__$1;
(statearr_3707_3727[(2)] = inst_3696);

(statearr_3707_3727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3703 === (6))){
var inst_3687 = (state_3702[(2)]);
var state_3702__$1 = state_3702;
if(cljs.core.truth_(inst_3687)){
var statearr_3708_3728 = state_3702__$1;
(statearr_3708_3728[(1)] = (8));

} else {
var statearr_3709_3729 = state_3702__$1;
(statearr_3709_3729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3703 === (3))){
var inst_3700 = (state_3702[(2)]);
var state_3702__$1 = state_3702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3702__$1,inst_3700);
} else {
if((state_val_3703 === (12))){
var state_3702__$1 = state_3702;
var statearr_3710_3730 = state_3702__$1;
(statearr_3710_3730[(2)] = null);

(statearr_3710_3730[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3703 === (2))){
var inst_3679 = (state_3702[(7)]);
var state_3702__$1 = state_3702;
if(cljs.core.truth_(inst_3679)){
var statearr_3711_3731 = state_3702__$1;
(statearr_3711_3731[(1)] = (4));

} else {
var statearr_3712_3732 = state_3702__$1;
(statearr_3712_3732[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3703 === (11))){
var inst_3693 = cljs.core.async.close_BANG_.call(null,ch);
var state_3702__$1 = state_3702;
var statearr_3713_3733 = state_3702__$1;
(statearr_3713_3733[(2)] = inst_3693);

(statearr_3713_3733[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3703 === (9))){
var state_3702__$1 = state_3702;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3714_3734 = state_3702__$1;
(statearr_3714_3734[(1)] = (11));

} else {
var statearr_3715_3735 = state_3702__$1;
(statearr_3715_3735[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3703 === (5))){
var inst_3679 = (state_3702[(7)]);
var state_3702__$1 = state_3702;
var statearr_3716_3736 = state_3702__$1;
(statearr_3716_3736[(2)] = inst_3679);

(statearr_3716_3736[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3703 === (10))){
var inst_3698 = (state_3702[(2)]);
var state_3702__$1 = state_3702;
var statearr_3717_3737 = state_3702__$1;
(statearr_3717_3737[(2)] = inst_3698);

(statearr_3717_3737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3703 === (8))){
var inst_3679 = (state_3702[(7)]);
var inst_3689 = cljs.core.next.call(null,inst_3679);
var inst_3679__$1 = inst_3689;
var state_3702__$1 = (function (){var statearr_3718 = state_3702;
(statearr_3718[(7)] = inst_3679__$1);

return statearr_3718;
})();
var statearr_3719_3738 = state_3702__$1;
(statearr_3719_3738[(2)] = null);

(statearr_3719_3738[(1)] = (2));


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
});})(c__3158__auto__))
;
return ((function (switch__3070__auto__,c__3158__auto__){
return (function() {
var cljs$core$async$state_machine__3071__auto__ = null;
var cljs$core$async$state_machine__3071__auto____0 = (function (){
var statearr_3720 = [null,null,null,null,null,null,null,null];
(statearr_3720[(0)] = cljs$core$async$state_machine__3071__auto__);

(statearr_3720[(1)] = (1));

return statearr_3720;
});
var cljs$core$async$state_machine__3071__auto____1 = (function (state_3702){
while(true){
var ret_value__3072__auto__ = (function (){try{while(true){
var result__3073__auto__ = switch__3070__auto__.call(null,state_3702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3073__auto__;
}
break;
}
}catch (e3721){if((e3721 instanceof Object)){
var ex__3074__auto__ = e3721;
var statearr_3722_3739 = state_3702;
(statearr_3722_3739[(5)] = ex__3074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3740 = state_3702;
state_3702 = G__3740;
continue;
} else {
return ret_value__3072__auto__;
}
break;
}
});
cljs$core$async$state_machine__3071__auto__ = function(state_3702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3071__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3071__auto____1.call(this,state_3702);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3071__auto____0;
cljs$core$async$state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3071__auto____1;
return cljs$core$async$state_machine__3071__auto__;
})()
;})(switch__3070__auto__,c__3158__auto__))
})();
var state__3160__auto__ = (function (){var statearr_3723 = f__3159__auto__.call(null);
(statearr_3723[(6)] = c__3158__auto__);

return statearr_3723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3160__auto__);
});})(c__3158__auto__))
);

return c__3158__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async3741 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3741 = (function (ch,cs,meta3742){
this.ch = ch;
this.cs = cs;
this.meta3742 = meta3742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_3743,meta3742__$1){
var self__ = this;
var _3743__$1 = this;
return (new cljs.core.async.t_cljs$core$async3741(self__.ch,self__.cs,meta3742__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async3741.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_3743){
var self__ = this;
var _3743__$1 = this;
return self__.meta3742;
});})(cs))
;

cljs.core.async.t_cljs$core$async3741.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3741.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async3741.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3741.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3741.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3741.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3741.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta3742","meta3742",-1841985832,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async3741.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3741";

cljs.core.async.t_cljs$core$async3741.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3741");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3741.
 */
cljs.core.async.__GT_t_cljs$core$async3741 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async3741(ch__$1,cs__$1,meta3742){
return (new cljs.core.async.t_cljs$core$async3741(ch__$1,cs__$1,meta3742));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async3741(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__3158__auto___3963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3158__auto___3963,cs,m,dchan,dctr,done){
return (function (){
var f__3159__auto__ = (function (){var switch__3070__auto__ = ((function (c__3158__auto___3963,cs,m,dchan,dctr,done){
return (function (state_3878){
var state_val_3879 = (state_3878[(1)]);
if((state_val_3879 === (7))){
var inst_3874 = (state_3878[(2)]);
var state_3878__$1 = state_3878;
var statearr_3880_3964 = state_3878__$1;
(statearr_3880_3964[(2)] = inst_3874);

(statearr_3880_3964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (20))){
var inst_3777 = (state_3878[(7)]);
var inst_3789 = cljs.core.first.call(null,inst_3777);
var inst_3790 = cljs.core.nth.call(null,inst_3789,(0),null);
var inst_3791 = cljs.core.nth.call(null,inst_3789,(1),null);
var state_3878__$1 = (function (){var statearr_3881 = state_3878;
(statearr_3881[(8)] = inst_3790);

return statearr_3881;
})();
if(cljs.core.truth_(inst_3791)){
var statearr_3882_3965 = state_3878__$1;
(statearr_3882_3965[(1)] = (22));

} else {
var statearr_3883_3966 = state_3878__$1;
(statearr_3883_3966[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (27))){
var inst_3819 = (state_3878[(9)]);
var inst_3821 = (state_3878[(10)]);
var inst_3826 = (state_3878[(11)]);
var inst_3746 = (state_3878[(12)]);
var inst_3826__$1 = cljs.core._nth.call(null,inst_3819,inst_3821);
var inst_3827 = cljs.core.async.put_BANG_.call(null,inst_3826__$1,inst_3746,done);
var state_3878__$1 = (function (){var statearr_3884 = state_3878;
(statearr_3884[(11)] = inst_3826__$1);

return statearr_3884;
})();
if(cljs.core.truth_(inst_3827)){
var statearr_3885_3967 = state_3878__$1;
(statearr_3885_3967[(1)] = (30));

} else {
var statearr_3886_3968 = state_3878__$1;
(statearr_3886_3968[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (1))){
var state_3878__$1 = state_3878;
var statearr_3887_3969 = state_3878__$1;
(statearr_3887_3969[(2)] = null);

(statearr_3887_3969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (24))){
var inst_3777 = (state_3878[(7)]);
var inst_3796 = (state_3878[(2)]);
var inst_3797 = cljs.core.next.call(null,inst_3777);
var inst_3755 = inst_3797;
var inst_3756 = null;
var inst_3757 = (0);
var inst_3758 = (0);
var state_3878__$1 = (function (){var statearr_3888 = state_3878;
(statearr_3888[(13)] = inst_3756);

(statearr_3888[(14)] = inst_3796);

(statearr_3888[(15)] = inst_3758);

(statearr_3888[(16)] = inst_3757);

(statearr_3888[(17)] = inst_3755);

return statearr_3888;
})();
var statearr_3889_3970 = state_3878__$1;
(statearr_3889_3970[(2)] = null);

(statearr_3889_3970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (39))){
var state_3878__$1 = state_3878;
var statearr_3893_3971 = state_3878__$1;
(statearr_3893_3971[(2)] = null);

(statearr_3893_3971[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (4))){
var inst_3746 = (state_3878[(12)]);
var inst_3746__$1 = (state_3878[(2)]);
var inst_3747 = (inst_3746__$1 == null);
var state_3878__$1 = (function (){var statearr_3894 = state_3878;
(statearr_3894[(12)] = inst_3746__$1);

return statearr_3894;
})();
if(cljs.core.truth_(inst_3747)){
var statearr_3895_3972 = state_3878__$1;
(statearr_3895_3972[(1)] = (5));

} else {
var statearr_3896_3973 = state_3878__$1;
(statearr_3896_3973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (15))){
var inst_3756 = (state_3878[(13)]);
var inst_3758 = (state_3878[(15)]);
var inst_3757 = (state_3878[(16)]);
var inst_3755 = (state_3878[(17)]);
var inst_3773 = (state_3878[(2)]);
var inst_3774 = (inst_3758 + (1));
var tmp3890 = inst_3756;
var tmp3891 = inst_3757;
var tmp3892 = inst_3755;
var inst_3755__$1 = tmp3892;
var inst_3756__$1 = tmp3890;
var inst_3757__$1 = tmp3891;
var inst_3758__$1 = inst_3774;
var state_3878__$1 = (function (){var statearr_3897 = state_3878;
(statearr_3897[(13)] = inst_3756__$1);

(statearr_3897[(15)] = inst_3758__$1);

(statearr_3897[(18)] = inst_3773);

(statearr_3897[(16)] = inst_3757__$1);

(statearr_3897[(17)] = inst_3755__$1);

return statearr_3897;
})();
var statearr_3898_3974 = state_3878__$1;
(statearr_3898_3974[(2)] = null);

(statearr_3898_3974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (21))){
var inst_3800 = (state_3878[(2)]);
var state_3878__$1 = state_3878;
var statearr_3902_3975 = state_3878__$1;
(statearr_3902_3975[(2)] = inst_3800);

(statearr_3902_3975[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (31))){
var inst_3826 = (state_3878[(11)]);
var inst_3830 = done.call(null,null);
var inst_3831 = cljs.core.async.untap_STAR_.call(null,m,inst_3826);
var state_3878__$1 = (function (){var statearr_3903 = state_3878;
(statearr_3903[(19)] = inst_3830);

return statearr_3903;
})();
var statearr_3904_3976 = state_3878__$1;
(statearr_3904_3976[(2)] = inst_3831);

(statearr_3904_3976[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (32))){
var inst_3820 = (state_3878[(20)]);
var inst_3819 = (state_3878[(9)]);
var inst_3821 = (state_3878[(10)]);
var inst_3818 = (state_3878[(21)]);
var inst_3833 = (state_3878[(2)]);
var inst_3834 = (inst_3821 + (1));
var tmp3899 = inst_3820;
var tmp3900 = inst_3819;
var tmp3901 = inst_3818;
var inst_3818__$1 = tmp3901;
var inst_3819__$1 = tmp3900;
var inst_3820__$1 = tmp3899;
var inst_3821__$1 = inst_3834;
var state_3878__$1 = (function (){var statearr_3905 = state_3878;
(statearr_3905[(20)] = inst_3820__$1);

(statearr_3905[(9)] = inst_3819__$1);

(statearr_3905[(10)] = inst_3821__$1);

(statearr_3905[(21)] = inst_3818__$1);

(statearr_3905[(22)] = inst_3833);

return statearr_3905;
})();
var statearr_3906_3977 = state_3878__$1;
(statearr_3906_3977[(2)] = null);

(statearr_3906_3977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (40))){
var inst_3846 = (state_3878[(23)]);
var inst_3850 = done.call(null,null);
var inst_3851 = cljs.core.async.untap_STAR_.call(null,m,inst_3846);
var state_3878__$1 = (function (){var statearr_3907 = state_3878;
(statearr_3907[(24)] = inst_3850);

return statearr_3907;
})();
var statearr_3908_3978 = state_3878__$1;
(statearr_3908_3978[(2)] = inst_3851);

(statearr_3908_3978[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (33))){
var inst_3837 = (state_3878[(25)]);
var inst_3839 = cljs.core.chunked_seq_QMARK_.call(null,inst_3837);
var state_3878__$1 = state_3878;
if(inst_3839){
var statearr_3909_3979 = state_3878__$1;
(statearr_3909_3979[(1)] = (36));

} else {
var statearr_3910_3980 = state_3878__$1;
(statearr_3910_3980[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (13))){
var inst_3767 = (state_3878[(26)]);
var inst_3770 = cljs.core.async.close_BANG_.call(null,inst_3767);
var state_3878__$1 = state_3878;
var statearr_3911_3981 = state_3878__$1;
(statearr_3911_3981[(2)] = inst_3770);

(statearr_3911_3981[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (22))){
var inst_3790 = (state_3878[(8)]);
var inst_3793 = cljs.core.async.close_BANG_.call(null,inst_3790);
var state_3878__$1 = state_3878;
var statearr_3912_3982 = state_3878__$1;
(statearr_3912_3982[(2)] = inst_3793);

(statearr_3912_3982[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (36))){
var inst_3837 = (state_3878[(25)]);
var inst_3841 = cljs.core.chunk_first.call(null,inst_3837);
var inst_3842 = cljs.core.chunk_rest.call(null,inst_3837);
var inst_3843 = cljs.core.count.call(null,inst_3841);
var inst_3818 = inst_3842;
var inst_3819 = inst_3841;
var inst_3820 = inst_3843;
var inst_3821 = (0);
var state_3878__$1 = (function (){var statearr_3913 = state_3878;
(statearr_3913[(20)] = inst_3820);

(statearr_3913[(9)] = inst_3819);

(statearr_3913[(10)] = inst_3821);

(statearr_3913[(21)] = inst_3818);

return statearr_3913;
})();
var statearr_3914_3983 = state_3878__$1;
(statearr_3914_3983[(2)] = null);

(statearr_3914_3983[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (41))){
var inst_3837 = (state_3878[(25)]);
var inst_3853 = (state_3878[(2)]);
var inst_3854 = cljs.core.next.call(null,inst_3837);
var inst_3818 = inst_3854;
var inst_3819 = null;
var inst_3820 = (0);
var inst_3821 = (0);
var state_3878__$1 = (function (){var statearr_3915 = state_3878;
(statearr_3915[(20)] = inst_3820);

(statearr_3915[(9)] = inst_3819);

(statearr_3915[(10)] = inst_3821);

(statearr_3915[(27)] = inst_3853);

(statearr_3915[(21)] = inst_3818);

return statearr_3915;
})();
var statearr_3916_3984 = state_3878__$1;
(statearr_3916_3984[(2)] = null);

(statearr_3916_3984[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (43))){
var state_3878__$1 = state_3878;
var statearr_3917_3985 = state_3878__$1;
(statearr_3917_3985[(2)] = null);

(statearr_3917_3985[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (29))){
var inst_3862 = (state_3878[(2)]);
var state_3878__$1 = state_3878;
var statearr_3918_3986 = state_3878__$1;
(statearr_3918_3986[(2)] = inst_3862);

(statearr_3918_3986[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (44))){
var inst_3871 = (state_3878[(2)]);
var state_3878__$1 = (function (){var statearr_3919 = state_3878;
(statearr_3919[(28)] = inst_3871);

return statearr_3919;
})();
var statearr_3920_3987 = state_3878__$1;
(statearr_3920_3987[(2)] = null);

(statearr_3920_3987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (6))){
var inst_3810 = (state_3878[(29)]);
var inst_3809 = cljs.core.deref.call(null,cs);
var inst_3810__$1 = cljs.core.keys.call(null,inst_3809);
var inst_3811 = cljs.core.count.call(null,inst_3810__$1);
var inst_3812 = cljs.core.reset_BANG_.call(null,dctr,inst_3811);
var inst_3817 = cljs.core.seq.call(null,inst_3810__$1);
var inst_3818 = inst_3817;
var inst_3819 = null;
var inst_3820 = (0);
var inst_3821 = (0);
var state_3878__$1 = (function (){var statearr_3921 = state_3878;
(statearr_3921[(20)] = inst_3820);

(statearr_3921[(9)] = inst_3819);

(statearr_3921[(10)] = inst_3821);

(statearr_3921[(30)] = inst_3812);

(statearr_3921[(21)] = inst_3818);

(statearr_3921[(29)] = inst_3810__$1);

return statearr_3921;
})();
var statearr_3922_3988 = state_3878__$1;
(statearr_3922_3988[(2)] = null);

(statearr_3922_3988[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (28))){
var inst_3837 = (state_3878[(25)]);
var inst_3818 = (state_3878[(21)]);
var inst_3837__$1 = cljs.core.seq.call(null,inst_3818);
var state_3878__$1 = (function (){var statearr_3923 = state_3878;
(statearr_3923[(25)] = inst_3837__$1);

return statearr_3923;
})();
if(inst_3837__$1){
var statearr_3924_3989 = state_3878__$1;
(statearr_3924_3989[(1)] = (33));

} else {
var statearr_3925_3990 = state_3878__$1;
(statearr_3925_3990[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (25))){
var inst_3820 = (state_3878[(20)]);
var inst_3821 = (state_3878[(10)]);
var inst_3823 = (inst_3821 < inst_3820);
var inst_3824 = inst_3823;
var state_3878__$1 = state_3878;
if(cljs.core.truth_(inst_3824)){
var statearr_3926_3991 = state_3878__$1;
(statearr_3926_3991[(1)] = (27));

} else {
var statearr_3927_3992 = state_3878__$1;
(statearr_3927_3992[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (34))){
var state_3878__$1 = state_3878;
var statearr_3928_3993 = state_3878__$1;
(statearr_3928_3993[(2)] = null);

(statearr_3928_3993[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (17))){
var state_3878__$1 = state_3878;
var statearr_3929_3994 = state_3878__$1;
(statearr_3929_3994[(2)] = null);

(statearr_3929_3994[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (3))){
var inst_3876 = (state_3878[(2)]);
var state_3878__$1 = state_3878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3878__$1,inst_3876);
} else {
if((state_val_3879 === (12))){
var inst_3805 = (state_3878[(2)]);
var state_3878__$1 = state_3878;
var statearr_3930_3995 = state_3878__$1;
(statearr_3930_3995[(2)] = inst_3805);

(statearr_3930_3995[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (2))){
var state_3878__$1 = state_3878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3878__$1,(4),ch);
} else {
if((state_val_3879 === (23))){
var state_3878__$1 = state_3878;
var statearr_3931_3996 = state_3878__$1;
(statearr_3931_3996[(2)] = null);

(statearr_3931_3996[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (35))){
var inst_3860 = (state_3878[(2)]);
var state_3878__$1 = state_3878;
var statearr_3932_3997 = state_3878__$1;
(statearr_3932_3997[(2)] = inst_3860);

(statearr_3932_3997[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (19))){
var inst_3777 = (state_3878[(7)]);
var inst_3781 = cljs.core.chunk_first.call(null,inst_3777);
var inst_3782 = cljs.core.chunk_rest.call(null,inst_3777);
var inst_3783 = cljs.core.count.call(null,inst_3781);
var inst_3755 = inst_3782;
var inst_3756 = inst_3781;
var inst_3757 = inst_3783;
var inst_3758 = (0);
var state_3878__$1 = (function (){var statearr_3933 = state_3878;
(statearr_3933[(13)] = inst_3756);

(statearr_3933[(15)] = inst_3758);

(statearr_3933[(16)] = inst_3757);

(statearr_3933[(17)] = inst_3755);

return statearr_3933;
})();
var statearr_3934_3998 = state_3878__$1;
(statearr_3934_3998[(2)] = null);

(statearr_3934_3998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (11))){
var inst_3777 = (state_3878[(7)]);
var inst_3755 = (state_3878[(17)]);
var inst_3777__$1 = cljs.core.seq.call(null,inst_3755);
var state_3878__$1 = (function (){var statearr_3935 = state_3878;
(statearr_3935[(7)] = inst_3777__$1);

return statearr_3935;
})();
if(inst_3777__$1){
var statearr_3936_3999 = state_3878__$1;
(statearr_3936_3999[(1)] = (16));

} else {
var statearr_3937_4000 = state_3878__$1;
(statearr_3937_4000[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (9))){
var inst_3807 = (state_3878[(2)]);
var state_3878__$1 = state_3878;
var statearr_3938_4001 = state_3878__$1;
(statearr_3938_4001[(2)] = inst_3807);

(statearr_3938_4001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (5))){
var inst_3753 = cljs.core.deref.call(null,cs);
var inst_3754 = cljs.core.seq.call(null,inst_3753);
var inst_3755 = inst_3754;
var inst_3756 = null;
var inst_3757 = (0);
var inst_3758 = (0);
var state_3878__$1 = (function (){var statearr_3939 = state_3878;
(statearr_3939[(13)] = inst_3756);

(statearr_3939[(15)] = inst_3758);

(statearr_3939[(16)] = inst_3757);

(statearr_3939[(17)] = inst_3755);

return statearr_3939;
})();
var statearr_3940_4002 = state_3878__$1;
(statearr_3940_4002[(2)] = null);

(statearr_3940_4002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (14))){
var state_3878__$1 = state_3878;
var statearr_3941_4003 = state_3878__$1;
(statearr_3941_4003[(2)] = null);

(statearr_3941_4003[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (45))){
var inst_3868 = (state_3878[(2)]);
var state_3878__$1 = state_3878;
var statearr_3942_4004 = state_3878__$1;
(statearr_3942_4004[(2)] = inst_3868);

(statearr_3942_4004[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (26))){
var inst_3810 = (state_3878[(29)]);
var inst_3864 = (state_3878[(2)]);
var inst_3865 = cljs.core.seq.call(null,inst_3810);
var state_3878__$1 = (function (){var statearr_3943 = state_3878;
(statearr_3943[(31)] = inst_3864);

return statearr_3943;
})();
if(inst_3865){
var statearr_3944_4005 = state_3878__$1;
(statearr_3944_4005[(1)] = (42));

} else {
var statearr_3945_4006 = state_3878__$1;
(statearr_3945_4006[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (16))){
var inst_3777 = (state_3878[(7)]);
var inst_3779 = cljs.core.chunked_seq_QMARK_.call(null,inst_3777);
var state_3878__$1 = state_3878;
if(inst_3779){
var statearr_3946_4007 = state_3878__$1;
(statearr_3946_4007[(1)] = (19));

} else {
var statearr_3947_4008 = state_3878__$1;
(statearr_3947_4008[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (38))){
var inst_3857 = (state_3878[(2)]);
var state_3878__$1 = state_3878;
var statearr_3948_4009 = state_3878__$1;
(statearr_3948_4009[(2)] = inst_3857);

(statearr_3948_4009[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (30))){
var state_3878__$1 = state_3878;
var statearr_3949_4010 = state_3878__$1;
(statearr_3949_4010[(2)] = null);

(statearr_3949_4010[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (10))){
var inst_3756 = (state_3878[(13)]);
var inst_3758 = (state_3878[(15)]);
var inst_3766 = cljs.core._nth.call(null,inst_3756,inst_3758);
var inst_3767 = cljs.core.nth.call(null,inst_3766,(0),null);
var inst_3768 = cljs.core.nth.call(null,inst_3766,(1),null);
var state_3878__$1 = (function (){var statearr_3950 = state_3878;
(statearr_3950[(26)] = inst_3767);

return statearr_3950;
})();
if(cljs.core.truth_(inst_3768)){
var statearr_3951_4011 = state_3878__$1;
(statearr_3951_4011[(1)] = (13));

} else {
var statearr_3952_4012 = state_3878__$1;
(statearr_3952_4012[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (18))){
var inst_3803 = (state_3878[(2)]);
var state_3878__$1 = state_3878;
var statearr_3953_4013 = state_3878__$1;
(statearr_3953_4013[(2)] = inst_3803);

(statearr_3953_4013[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (42))){
var state_3878__$1 = state_3878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3878__$1,(45),dchan);
} else {
if((state_val_3879 === (37))){
var inst_3837 = (state_3878[(25)]);
var inst_3846 = (state_3878[(23)]);
var inst_3746 = (state_3878[(12)]);
var inst_3846__$1 = cljs.core.first.call(null,inst_3837);
var inst_3847 = cljs.core.async.put_BANG_.call(null,inst_3846__$1,inst_3746,done);
var state_3878__$1 = (function (){var statearr_3954 = state_3878;
(statearr_3954[(23)] = inst_3846__$1);

return statearr_3954;
})();
if(cljs.core.truth_(inst_3847)){
var statearr_3955_4014 = state_3878__$1;
(statearr_3955_4014[(1)] = (39));

} else {
var statearr_3956_4015 = state_3878__$1;
(statearr_3956_4015[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3879 === (8))){
var inst_3758 = (state_3878[(15)]);
var inst_3757 = (state_3878[(16)]);
var inst_3760 = (inst_3758 < inst_3757);
var inst_3761 = inst_3760;
var state_3878__$1 = state_3878;
if(cljs.core.truth_(inst_3761)){
var statearr_3957_4016 = state_3878__$1;
(statearr_3957_4016[(1)] = (10));

} else {
var statearr_3958_4017 = state_3878__$1;
(statearr_3958_4017[(1)] = (11));

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
});})(c__3158__auto___3963,cs,m,dchan,dctr,done))
;
return ((function (switch__3070__auto__,c__3158__auto___3963,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__3071__auto__ = null;
var cljs$core$async$mult_$_state_machine__3071__auto____0 = (function (){
var statearr_3959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3959[(0)] = cljs$core$async$mult_$_state_machine__3071__auto__);

(statearr_3959[(1)] = (1));

return statearr_3959;
});
var cljs$core$async$mult_$_state_machine__3071__auto____1 = (function (state_3878){
while(true){
var ret_value__3072__auto__ = (function (){try{while(true){
var result__3073__auto__ = switch__3070__auto__.call(null,state_3878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3073__auto__;
}
break;
}
}catch (e3960){if((e3960 instanceof Object)){
var ex__3074__auto__ = e3960;
var statearr_3961_4018 = state_3878;
(statearr_3961_4018[(5)] = ex__3074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4019 = state_3878;
state_3878 = G__4019;
continue;
} else {
return ret_value__3072__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__3071__auto__ = function(state_3878){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__3071__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__3071__auto____1.call(this,state_3878);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__3071__auto____0;
cljs$core$async$mult_$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__3071__auto____1;
return cljs$core$async$mult_$_state_machine__3071__auto__;
})()
;})(switch__3070__auto__,c__3158__auto___3963,cs,m,dchan,dctr,done))
})();
var state__3160__auto__ = (function (){var statearr_3962 = f__3159__auto__.call(null);
(statearr_3962[(6)] = c__3158__auto___3963);

return statearr_3962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3160__auto__);
});})(c__3158__auto___3963,cs,m,dchan,dctr,done))
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
var G__4021 = arguments.length;
switch (G__4021) {
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
var len__4499__auto___4033 = arguments.length;
var i__4500__auto___4034 = (0);
while(true){
if((i__4500__auto___4034 < len__4499__auto___4033)){
args__4502__auto__.push((arguments[i__4500__auto___4034]));

var G__4035 = (i__4500__auto___4034 + (1));
i__4500__auto___4034 = G__4035;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__4027){
var map__4028 = p__4027;
var map__4028__$1 = ((((!((map__4028 == null)))?(((((map__4028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4028):map__4028);
var opts = map__4028__$1;
var statearr_4030_4036 = state;
(statearr_4030_4036[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__4028,map__4028__$1,opts){
return (function (val){
var statearr_4031_4037 = state;
(statearr_4031_4037[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__4028,map__4028__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_4032_4038 = state;
(statearr_4032_4038[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq4023){
var G__4024 = cljs.core.first.call(null,seq4023);
var seq4023__$1 = cljs.core.next.call(null,seq4023);
var G__4025 = cljs.core.first.call(null,seq4023__$1);
var seq4023__$2 = cljs.core.next.call(null,seq4023__$1);
var G__4026 = cljs.core.first.call(null,seq4023__$2);
var seq4023__$3 = cljs.core.next.call(null,seq4023__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4024,G__4025,G__4026,seq4023__$3);
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
if(typeof cljs.core.async.t_cljs$core$async4039 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4039 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta4040){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta4040 = meta4040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_4041,meta4040__$1){
var self__ = this;
var _4041__$1 = this;
return (new cljs.core.async.t_cljs$core$async4039(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta4040__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_4041){
var self__ = this;
var _4041__$1 = this;
return self__.meta4040;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4039.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4039.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4039.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4039.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4039.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4039.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4039.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4039.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async4039.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta4040","meta4040",-1116800438,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4039.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4039";

cljs.core.async.t_cljs$core$async4039.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4039");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4039.
 */
cljs.core.async.__GT_t_cljs$core$async4039 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async4039(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta4040){
return (new cljs.core.async.t_cljs$core$async4039(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta4040));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async4039(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3158__auto___4203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3158__auto___4203,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__3159__auto__ = (function (){var switch__3070__auto__ = ((function (c__3158__auto___4203,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_4143){
var state_val_4144 = (state_4143[(1)]);
if((state_val_4144 === (7))){
var inst_4058 = (state_4143[(2)]);
var state_4143__$1 = state_4143;
var statearr_4145_4204 = state_4143__$1;
(statearr_4145_4204[(2)] = inst_4058);

(statearr_4145_4204[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (20))){
var inst_4070 = (state_4143[(7)]);
var state_4143__$1 = state_4143;
var statearr_4146_4205 = state_4143__$1;
(statearr_4146_4205[(2)] = inst_4070);

(statearr_4146_4205[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (27))){
var state_4143__$1 = state_4143;
var statearr_4147_4206 = state_4143__$1;
(statearr_4147_4206[(2)] = null);

(statearr_4147_4206[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (1))){
var inst_4045 = (state_4143[(8)]);
var inst_4045__$1 = calc_state.call(null);
var inst_4047 = (inst_4045__$1 == null);
var inst_4048 = cljs.core.not.call(null,inst_4047);
var state_4143__$1 = (function (){var statearr_4148 = state_4143;
(statearr_4148[(8)] = inst_4045__$1);

return statearr_4148;
})();
if(inst_4048){
var statearr_4149_4207 = state_4143__$1;
(statearr_4149_4207[(1)] = (2));

} else {
var statearr_4150_4208 = state_4143__$1;
(statearr_4150_4208[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (24))){
var inst_4103 = (state_4143[(9)]);
var inst_4094 = (state_4143[(10)]);
var inst_4117 = (state_4143[(11)]);
var inst_4117__$1 = inst_4094.call(null,inst_4103);
var state_4143__$1 = (function (){var statearr_4151 = state_4143;
(statearr_4151[(11)] = inst_4117__$1);

return statearr_4151;
})();
if(cljs.core.truth_(inst_4117__$1)){
var statearr_4152_4209 = state_4143__$1;
(statearr_4152_4209[(1)] = (29));

} else {
var statearr_4153_4210 = state_4143__$1;
(statearr_4153_4210[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (4))){
var inst_4061 = (state_4143[(2)]);
var state_4143__$1 = state_4143;
if(cljs.core.truth_(inst_4061)){
var statearr_4154_4211 = state_4143__$1;
(statearr_4154_4211[(1)] = (8));

} else {
var statearr_4155_4212 = state_4143__$1;
(statearr_4155_4212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (15))){
var inst_4088 = (state_4143[(2)]);
var state_4143__$1 = state_4143;
if(cljs.core.truth_(inst_4088)){
var statearr_4156_4213 = state_4143__$1;
(statearr_4156_4213[(1)] = (19));

} else {
var statearr_4157_4214 = state_4143__$1;
(statearr_4157_4214[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (21))){
var inst_4093 = (state_4143[(12)]);
var inst_4093__$1 = (state_4143[(2)]);
var inst_4094 = cljs.core.get.call(null,inst_4093__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4095 = cljs.core.get.call(null,inst_4093__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4096 = cljs.core.get.call(null,inst_4093__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_4143__$1 = (function (){var statearr_4158 = state_4143;
(statearr_4158[(12)] = inst_4093__$1);

(statearr_4158[(13)] = inst_4095);

(statearr_4158[(10)] = inst_4094);

return statearr_4158;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_4143__$1,(22),inst_4096);
} else {
if((state_val_4144 === (31))){
var inst_4125 = (state_4143[(2)]);
var state_4143__$1 = state_4143;
if(cljs.core.truth_(inst_4125)){
var statearr_4159_4215 = state_4143__$1;
(statearr_4159_4215[(1)] = (32));

} else {
var statearr_4160_4216 = state_4143__$1;
(statearr_4160_4216[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (32))){
var inst_4102 = (state_4143[(14)]);
var state_4143__$1 = state_4143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4143__$1,(35),out,inst_4102);
} else {
if((state_val_4144 === (33))){
var inst_4093 = (state_4143[(12)]);
var inst_4070 = inst_4093;
var state_4143__$1 = (function (){var statearr_4161 = state_4143;
(statearr_4161[(7)] = inst_4070);

return statearr_4161;
})();
var statearr_4162_4217 = state_4143__$1;
(statearr_4162_4217[(2)] = null);

(statearr_4162_4217[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (13))){
var inst_4070 = (state_4143[(7)]);
var inst_4077 = inst_4070.cljs$lang$protocol_mask$partition0$;
var inst_4078 = (inst_4077 & (64));
var inst_4079 = inst_4070.cljs$core$ISeq$;
var inst_4080 = (cljs.core.PROTOCOL_SENTINEL === inst_4079);
var inst_4081 = ((inst_4078) || (inst_4080));
var state_4143__$1 = state_4143;
if(cljs.core.truth_(inst_4081)){
var statearr_4163_4218 = state_4143__$1;
(statearr_4163_4218[(1)] = (16));

} else {
var statearr_4164_4219 = state_4143__$1;
(statearr_4164_4219[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (22))){
var inst_4102 = (state_4143[(14)]);
var inst_4103 = (state_4143[(9)]);
var inst_4101 = (state_4143[(2)]);
var inst_4102__$1 = cljs.core.nth.call(null,inst_4101,(0),null);
var inst_4103__$1 = cljs.core.nth.call(null,inst_4101,(1),null);
var inst_4104 = (inst_4102__$1 == null);
var inst_4105 = cljs.core._EQ_.call(null,inst_4103__$1,change);
var inst_4106 = ((inst_4104) || (inst_4105));
var state_4143__$1 = (function (){var statearr_4165 = state_4143;
(statearr_4165[(14)] = inst_4102__$1);

(statearr_4165[(9)] = inst_4103__$1);

return statearr_4165;
})();
if(cljs.core.truth_(inst_4106)){
var statearr_4166_4220 = state_4143__$1;
(statearr_4166_4220[(1)] = (23));

} else {
var statearr_4167_4221 = state_4143__$1;
(statearr_4167_4221[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (36))){
var inst_4093 = (state_4143[(12)]);
var inst_4070 = inst_4093;
var state_4143__$1 = (function (){var statearr_4168 = state_4143;
(statearr_4168[(7)] = inst_4070);

return statearr_4168;
})();
var statearr_4169_4222 = state_4143__$1;
(statearr_4169_4222[(2)] = null);

(statearr_4169_4222[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (29))){
var inst_4117 = (state_4143[(11)]);
var state_4143__$1 = state_4143;
var statearr_4170_4223 = state_4143__$1;
(statearr_4170_4223[(2)] = inst_4117);

(statearr_4170_4223[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (6))){
var state_4143__$1 = state_4143;
var statearr_4171_4224 = state_4143__$1;
(statearr_4171_4224[(2)] = false);

(statearr_4171_4224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (28))){
var inst_4113 = (state_4143[(2)]);
var inst_4114 = calc_state.call(null);
var inst_4070 = inst_4114;
var state_4143__$1 = (function (){var statearr_4172 = state_4143;
(statearr_4172[(15)] = inst_4113);

(statearr_4172[(7)] = inst_4070);

return statearr_4172;
})();
var statearr_4173_4225 = state_4143__$1;
(statearr_4173_4225[(2)] = null);

(statearr_4173_4225[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (25))){
var inst_4139 = (state_4143[(2)]);
var state_4143__$1 = state_4143;
var statearr_4174_4226 = state_4143__$1;
(statearr_4174_4226[(2)] = inst_4139);

(statearr_4174_4226[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (34))){
var inst_4137 = (state_4143[(2)]);
var state_4143__$1 = state_4143;
var statearr_4175_4227 = state_4143__$1;
(statearr_4175_4227[(2)] = inst_4137);

(statearr_4175_4227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (17))){
var state_4143__$1 = state_4143;
var statearr_4176_4228 = state_4143__$1;
(statearr_4176_4228[(2)] = false);

(statearr_4176_4228[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (3))){
var state_4143__$1 = state_4143;
var statearr_4177_4229 = state_4143__$1;
(statearr_4177_4229[(2)] = false);

(statearr_4177_4229[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (12))){
var inst_4141 = (state_4143[(2)]);
var state_4143__$1 = state_4143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4143__$1,inst_4141);
} else {
if((state_val_4144 === (2))){
var inst_4045 = (state_4143[(8)]);
var inst_4050 = inst_4045.cljs$lang$protocol_mask$partition0$;
var inst_4051 = (inst_4050 & (64));
var inst_4052 = inst_4045.cljs$core$ISeq$;
var inst_4053 = (cljs.core.PROTOCOL_SENTINEL === inst_4052);
var inst_4054 = ((inst_4051) || (inst_4053));
var state_4143__$1 = state_4143;
if(cljs.core.truth_(inst_4054)){
var statearr_4178_4230 = state_4143__$1;
(statearr_4178_4230[(1)] = (5));

} else {
var statearr_4179_4231 = state_4143__$1;
(statearr_4179_4231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (23))){
var inst_4102 = (state_4143[(14)]);
var inst_4108 = (inst_4102 == null);
var state_4143__$1 = state_4143;
if(cljs.core.truth_(inst_4108)){
var statearr_4180_4232 = state_4143__$1;
(statearr_4180_4232[(1)] = (26));

} else {
var statearr_4181_4233 = state_4143__$1;
(statearr_4181_4233[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (35))){
var inst_4128 = (state_4143[(2)]);
var state_4143__$1 = state_4143;
if(cljs.core.truth_(inst_4128)){
var statearr_4182_4234 = state_4143__$1;
(statearr_4182_4234[(1)] = (36));

} else {
var statearr_4183_4235 = state_4143__$1;
(statearr_4183_4235[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (19))){
var inst_4070 = (state_4143[(7)]);
var inst_4090 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4070);
var state_4143__$1 = state_4143;
var statearr_4184_4236 = state_4143__$1;
(statearr_4184_4236[(2)] = inst_4090);

(statearr_4184_4236[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (11))){
var inst_4070 = (state_4143[(7)]);
var inst_4074 = (inst_4070 == null);
var inst_4075 = cljs.core.not.call(null,inst_4074);
var state_4143__$1 = state_4143;
if(inst_4075){
var statearr_4185_4237 = state_4143__$1;
(statearr_4185_4237[(1)] = (13));

} else {
var statearr_4186_4238 = state_4143__$1;
(statearr_4186_4238[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (9))){
var inst_4045 = (state_4143[(8)]);
var state_4143__$1 = state_4143;
var statearr_4187_4239 = state_4143__$1;
(statearr_4187_4239[(2)] = inst_4045);

(statearr_4187_4239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (5))){
var state_4143__$1 = state_4143;
var statearr_4188_4240 = state_4143__$1;
(statearr_4188_4240[(2)] = true);

(statearr_4188_4240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (14))){
var state_4143__$1 = state_4143;
var statearr_4189_4241 = state_4143__$1;
(statearr_4189_4241[(2)] = false);

(statearr_4189_4241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (26))){
var inst_4103 = (state_4143[(9)]);
var inst_4110 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_4103);
var state_4143__$1 = state_4143;
var statearr_4190_4242 = state_4143__$1;
(statearr_4190_4242[(2)] = inst_4110);

(statearr_4190_4242[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (16))){
var state_4143__$1 = state_4143;
var statearr_4191_4243 = state_4143__$1;
(statearr_4191_4243[(2)] = true);

(statearr_4191_4243[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (38))){
var inst_4133 = (state_4143[(2)]);
var state_4143__$1 = state_4143;
var statearr_4192_4244 = state_4143__$1;
(statearr_4192_4244[(2)] = inst_4133);

(statearr_4192_4244[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (30))){
var inst_4095 = (state_4143[(13)]);
var inst_4103 = (state_4143[(9)]);
var inst_4094 = (state_4143[(10)]);
var inst_4120 = cljs.core.empty_QMARK_.call(null,inst_4094);
var inst_4121 = inst_4095.call(null,inst_4103);
var inst_4122 = cljs.core.not.call(null,inst_4121);
var inst_4123 = ((inst_4120) && (inst_4122));
var state_4143__$1 = state_4143;
var statearr_4193_4245 = state_4143__$1;
(statearr_4193_4245[(2)] = inst_4123);

(statearr_4193_4245[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (10))){
var inst_4045 = (state_4143[(8)]);
var inst_4066 = (state_4143[(2)]);
var inst_4067 = cljs.core.get.call(null,inst_4066,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4068 = cljs.core.get.call(null,inst_4066,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4069 = cljs.core.get.call(null,inst_4066,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_4070 = inst_4045;
var state_4143__$1 = (function (){var statearr_4194 = state_4143;
(statearr_4194[(16)] = inst_4067);

(statearr_4194[(17)] = inst_4069);

(statearr_4194[(18)] = inst_4068);

(statearr_4194[(7)] = inst_4070);

return statearr_4194;
})();
var statearr_4195_4246 = state_4143__$1;
(statearr_4195_4246[(2)] = null);

(statearr_4195_4246[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (18))){
var inst_4085 = (state_4143[(2)]);
var state_4143__$1 = state_4143;
var statearr_4196_4247 = state_4143__$1;
(statearr_4196_4247[(2)] = inst_4085);

(statearr_4196_4247[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (37))){
var state_4143__$1 = state_4143;
var statearr_4197_4248 = state_4143__$1;
(statearr_4197_4248[(2)] = null);

(statearr_4197_4248[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4144 === (8))){
var inst_4045 = (state_4143[(8)]);
var inst_4063 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4045);
var state_4143__$1 = state_4143;
var statearr_4198_4249 = state_4143__$1;
(statearr_4198_4249[(2)] = inst_4063);

(statearr_4198_4249[(1)] = (10));


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
});})(c__3158__auto___4203,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__3070__auto__,c__3158__auto___4203,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__3071__auto__ = null;
var cljs$core$async$mix_$_state_machine__3071__auto____0 = (function (){
var statearr_4199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4199[(0)] = cljs$core$async$mix_$_state_machine__3071__auto__);

(statearr_4199[(1)] = (1));

return statearr_4199;
});
var cljs$core$async$mix_$_state_machine__3071__auto____1 = (function (state_4143){
while(true){
var ret_value__3072__auto__ = (function (){try{while(true){
var result__3073__auto__ = switch__3070__auto__.call(null,state_4143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3073__auto__;
}
break;
}
}catch (e4200){if((e4200 instanceof Object)){
var ex__3074__auto__ = e4200;
var statearr_4201_4250 = state_4143;
(statearr_4201_4250[(5)] = ex__3074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4251 = state_4143;
state_4143 = G__4251;
continue;
} else {
return ret_value__3072__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__3071__auto__ = function(state_4143){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__3071__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__3071__auto____1.call(this,state_4143);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__3071__auto____0;
cljs$core$async$mix_$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__3071__auto____1;
return cljs$core$async$mix_$_state_machine__3071__auto__;
})()
;})(switch__3070__auto__,c__3158__auto___4203,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__3160__auto__ = (function (){var statearr_4202 = f__3159__auto__.call(null);
(statearr_4202[(6)] = c__3158__auto___4203);

return statearr_4202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3160__auto__);
});})(c__3158__auto___4203,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__4253 = arguments.length;
switch (G__4253) {
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
var G__4257 = arguments.length;
switch (G__4257) {
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
return (function (p1__4255_SHARP_){
if(cljs.core.truth_(p1__4255_SHARP_.call(null,topic))){
return p1__4255_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__4255_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async4258 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4258 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta4259){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta4259 = meta4259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_4260,meta4259__$1){
var self__ = this;
var _4260__$1 = this;
return (new cljs.core.async.t_cljs$core$async4258(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta4259__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4258.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_4260){
var self__ = this;
var _4260__$1 = this;
return self__.meta4259;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4258.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4258.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4258.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4258.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4258.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async4258.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4258.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4258.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta4259","meta4259",-1437837080,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4258.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4258";

cljs.core.async.t_cljs$core$async4258.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4258");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4258.
 */
cljs.core.async.__GT_t_cljs$core$async4258 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async4258(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4259){
return (new cljs.core.async.t_cljs$core$async4258(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4259));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async4258(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3158__auto___4378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3158__auto___4378,mults,ensure_mult,p){
return (function (){
var f__3159__auto__ = (function (){var switch__3070__auto__ = ((function (c__3158__auto___4378,mults,ensure_mult,p){
return (function (state_4332){
var state_val_4333 = (state_4332[(1)]);
if((state_val_4333 === (7))){
var inst_4328 = (state_4332[(2)]);
var state_4332__$1 = state_4332;
var statearr_4334_4379 = state_4332__$1;
(statearr_4334_4379[(2)] = inst_4328);

(statearr_4334_4379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4333 === (20))){
var state_4332__$1 = state_4332;
var statearr_4335_4380 = state_4332__$1;
(statearr_4335_4380[(2)] = null);

(statearr_4335_4380[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4333 === (1))){
var state_4332__$1 = state_4332;
var statearr_4336_4381 = state_4332__$1;
(statearr_4336_4381[(2)] = null);

(statearr_4336_4381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4333 === (24))){
var inst_4311 = (state_4332[(7)]);
var inst_4320 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_4311);
var state_4332__$1 = state_4332;
var statearr_4337_4382 = state_4332__$1;
(statearr_4337_4382[(2)] = inst_4320);

(statearr_4337_4382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4333 === (4))){
var inst_4263 = (state_4332[(8)]);
var inst_4263__$1 = (state_4332[(2)]);
var inst_4264 = (inst_4263__$1 == null);
var state_4332__$1 = (function (){var statearr_4338 = state_4332;
(statearr_4338[(8)] = inst_4263__$1);

return statearr_4338;
})();
if(cljs.core.truth_(inst_4264)){
var statearr_4339_4383 = state_4332__$1;
(statearr_4339_4383[(1)] = (5));

} else {
var statearr_4340_4384 = state_4332__$1;
(statearr_4340_4384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4333 === (15))){
var inst_4305 = (state_4332[(2)]);
var state_4332__$1 = state_4332;
var statearr_4341_4385 = state_4332__$1;
(statearr_4341_4385[(2)] = inst_4305);

(statearr_4341_4385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4333 === (21))){
var inst_4325 = (state_4332[(2)]);
var state_4332__$1 = (function (){var statearr_4342 = state_4332;
(statearr_4342[(9)] = inst_4325);

return statearr_4342;
})();
var statearr_4343_4386 = state_4332__$1;
(statearr_4343_4386[(2)] = null);

(statearr_4343_4386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4333 === (13))){
var inst_4287 = (state_4332[(10)]);
var inst_4289 = cljs.core.chunked_seq_QMARK_.call(null,inst_4287);
var state_4332__$1 = state_4332;
if(inst_4289){
var statearr_4344_4387 = state_4332__$1;
(statearr_4344_4387[(1)] = (16));

} else {
var statearr_4345_4388 = state_4332__$1;
(statearr_4345_4388[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4333 === (22))){
var inst_4317 = (state_4332[(2)]);
var state_4332__$1 = state_4332;
if(cljs.core.truth_(inst_4317)){
var statearr_4346_4389 = state_4332__$1;
(statearr_4346_4389[(1)] = (23));

} else {
var statearr_4347_4390 = state_4332__$1;
(statearr_4347_4390[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4333 === (6))){
var inst_4313 = (state_4332[(11)]);
var inst_4263 = (state_4332[(8)]);
var inst_4311 = (state_4332[(7)]);
var inst_4311__$1 = topic_fn.call(null,inst_4263);
var inst_4312 = cljs.core.deref.call(null,mults);
var inst_4313__$1 = cljs.core.get.call(null,inst_4312,inst_4311__$1);
var state_4332__$1 = (function (){var statearr_4348 = state_4332;
(statearr_4348[(11)] = inst_4313__$1);

(statearr_4348[(7)] = inst_4311__$1);

return statearr_4348;
})();
if(cljs.core.truth_(inst_4313__$1)){
var statearr_4349_4391 = state_4332__$1;
(statearr_4349_4391[(1)] = (19));

} else {
var statearr_4350_4392 = state_4332__$1;
(statearr_4350_4392[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4333 === (25))){
var inst_4322 = (state_4332[(2)]);
var state_4332__$1 = state_4332;
var statearr_4351_4393 = state_4332__$1;
(statearr_4351_4393[(2)] = inst_4322);

(statearr_4351_4393[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4333 === (17))){
var inst_4287 = (state_4332[(10)]);
var inst_4296 = cljs.core.first.call(null,inst_4287);
var inst_4297 = cljs.core.async.muxch_STAR_.call(null,inst_4296);
var inst_4298 = cljs.core.async.close_BANG_.call(null,inst_4297);
var inst_4299 = cljs.core.next.call(null,inst_4287);
var inst_4273 = inst_4299;
var inst_4274 = null;
var inst_4275 = (0);
var inst_4276 = (0);
var state_4332__$1 = (function (){var statearr_4352 = state_4332;
(statearr_4352[(12)] = inst_4298);

(statearr_4352[(13)] = inst_4273);

(statearr_4352[(14)] = inst_4274);

(statearr_4352[(15)] = inst_4275);

(statearr_4352[(16)] = inst_4276);

return statearr_4352;
})();
var statearr_4353_4394 = state_4332__$1;
(statearr_4353_4394[(2)] = null);

(statearr_4353_4394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4333 === (3))){
var inst_4330 = (state_4332[(2)]);
var state_4332__$1 = state_4332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4332__$1,inst_4330);
} else {
if((state_val_4333 === (12))){
var inst_4307 = (state_4332[(2)]);
var state_4332__$1 = state_4332;
var statearr_4354_4395 = state_4332__$1;
(statearr_4354_4395[(2)] = inst_4307);

(statearr_4354_4395[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4333 === (2))){
var state_4332__$1 = state_4332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4332__$1,(4),ch);
} else {
if((state_val_4333 === (23))){
var state_4332__$1 = state_4332;
var statearr_4355_4396 = state_4332__$1;
(statearr_4355_4396[(2)] = null);

(statearr_4355_4396[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4333 === (19))){
var inst_4313 = (state_4332[(11)]);
var inst_4263 = (state_4332[(8)]);
var inst_4315 = cljs.core.async.muxch_STAR_.call(null,inst_4313);
var state_4332__$1 = state_4332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4332__$1,(22),inst_4315,inst_4263);
} else {
if((state_val_4333 === (11))){
var inst_4273 = (state_4332[(13)]);
var inst_4287 = (state_4332[(10)]);
var inst_4287__$1 = cljs.core.seq.call(null,inst_4273);
var state_4332__$1 = (function (){var statearr_4356 = state_4332;
(statearr_4356[(10)] = inst_4287__$1);

return statearr_4356;
})();
if(inst_4287__$1){
var statearr_4357_4397 = state_4332__$1;
(statearr_4357_4397[(1)] = (13));

} else {
var statearr_4358_4398 = state_4332__$1;
(statearr_4358_4398[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4333 === (9))){
var inst_4309 = (state_4332[(2)]);
var state_4332__$1 = state_4332;
var statearr_4359_4399 = state_4332__$1;
(statearr_4359_4399[(2)] = inst_4309);

(statearr_4359_4399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4333 === (5))){
var inst_4270 = cljs.core.deref.call(null,mults);
var inst_4271 = cljs.core.vals.call(null,inst_4270);
var inst_4272 = cljs.core.seq.call(null,inst_4271);
var inst_4273 = inst_4272;
var inst_4274 = null;
var inst_4275 = (0);
var inst_4276 = (0);
var state_4332__$1 = (function (){var statearr_4360 = state_4332;
(statearr_4360[(13)] = inst_4273);

(statearr_4360[(14)] = inst_4274);

(statearr_4360[(15)] = inst_4275);

(statearr_4360[(16)] = inst_4276);

return statearr_4360;
})();
var statearr_4361_4400 = state_4332__$1;
(statearr_4361_4400[(2)] = null);

(statearr_4361_4400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4333 === (14))){
var state_4332__$1 = state_4332;
var statearr_4365_4401 = state_4332__$1;
(statearr_4365_4401[(2)] = null);

(statearr_4365_4401[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4333 === (16))){
var inst_4287 = (state_4332[(10)]);
var inst_4291 = cljs.core.chunk_first.call(null,inst_4287);
var inst_4292 = cljs.core.chunk_rest.call(null,inst_4287);
var inst_4293 = cljs.core.count.call(null,inst_4291);
var inst_4273 = inst_4292;
var inst_4274 = inst_4291;
var inst_4275 = inst_4293;
var inst_4276 = (0);
var state_4332__$1 = (function (){var statearr_4366 = state_4332;
(statearr_4366[(13)] = inst_4273);

(statearr_4366[(14)] = inst_4274);

(statearr_4366[(15)] = inst_4275);

(statearr_4366[(16)] = inst_4276);

return statearr_4366;
})();
var statearr_4367_4402 = state_4332__$1;
(statearr_4367_4402[(2)] = null);

(statearr_4367_4402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4333 === (10))){
var inst_4273 = (state_4332[(13)]);
var inst_4274 = (state_4332[(14)]);
var inst_4275 = (state_4332[(15)]);
var inst_4276 = (state_4332[(16)]);
var inst_4281 = cljs.core._nth.call(null,inst_4274,inst_4276);
var inst_4282 = cljs.core.async.muxch_STAR_.call(null,inst_4281);
var inst_4283 = cljs.core.async.close_BANG_.call(null,inst_4282);
var inst_4284 = (inst_4276 + (1));
var tmp4362 = inst_4273;
var tmp4363 = inst_4274;
var tmp4364 = inst_4275;
var inst_4273__$1 = tmp4362;
var inst_4274__$1 = tmp4363;
var inst_4275__$1 = tmp4364;
var inst_4276__$1 = inst_4284;
var state_4332__$1 = (function (){var statearr_4368 = state_4332;
(statearr_4368[(17)] = inst_4283);

(statearr_4368[(13)] = inst_4273__$1);

(statearr_4368[(14)] = inst_4274__$1);

(statearr_4368[(15)] = inst_4275__$1);

(statearr_4368[(16)] = inst_4276__$1);

return statearr_4368;
})();
var statearr_4369_4403 = state_4332__$1;
(statearr_4369_4403[(2)] = null);

(statearr_4369_4403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4333 === (18))){
var inst_4302 = (state_4332[(2)]);
var state_4332__$1 = state_4332;
var statearr_4370_4404 = state_4332__$1;
(statearr_4370_4404[(2)] = inst_4302);

(statearr_4370_4404[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4333 === (8))){
var inst_4275 = (state_4332[(15)]);
var inst_4276 = (state_4332[(16)]);
var inst_4278 = (inst_4276 < inst_4275);
var inst_4279 = inst_4278;
var state_4332__$1 = state_4332;
if(cljs.core.truth_(inst_4279)){
var statearr_4371_4405 = state_4332__$1;
(statearr_4371_4405[(1)] = (10));

} else {
var statearr_4372_4406 = state_4332__$1;
(statearr_4372_4406[(1)] = (11));

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
});})(c__3158__auto___4378,mults,ensure_mult,p))
;
return ((function (switch__3070__auto__,c__3158__auto___4378,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__3071__auto__ = null;
var cljs$core$async$state_machine__3071__auto____0 = (function (){
var statearr_4373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4373[(0)] = cljs$core$async$state_machine__3071__auto__);

(statearr_4373[(1)] = (1));

return statearr_4373;
});
var cljs$core$async$state_machine__3071__auto____1 = (function (state_4332){
while(true){
var ret_value__3072__auto__ = (function (){try{while(true){
var result__3073__auto__ = switch__3070__auto__.call(null,state_4332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3073__auto__;
}
break;
}
}catch (e4374){if((e4374 instanceof Object)){
var ex__3074__auto__ = e4374;
var statearr_4375_4407 = state_4332;
(statearr_4375_4407[(5)] = ex__3074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4408 = state_4332;
state_4332 = G__4408;
continue;
} else {
return ret_value__3072__auto__;
}
break;
}
});
cljs$core$async$state_machine__3071__auto__ = function(state_4332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3071__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3071__auto____1.call(this,state_4332);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3071__auto____0;
cljs$core$async$state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3071__auto____1;
return cljs$core$async$state_machine__3071__auto__;
})()
;})(switch__3070__auto__,c__3158__auto___4378,mults,ensure_mult,p))
})();
var state__3160__auto__ = (function (){var statearr_4376 = f__3159__auto__.call(null);
(statearr_4376[(6)] = c__3158__auto___4378);

return statearr_4376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3160__auto__);
});})(c__3158__auto___4378,mults,ensure_mult,p))
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
var G__4410 = arguments.length;
switch (G__4410) {
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
var G__4413 = arguments.length;
switch (G__4413) {
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
var G__4416 = arguments.length;
switch (G__4416) {
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
var c__3158__auto___4483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3158__auto___4483,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__3159__auto__ = (function (){var switch__3070__auto__ = ((function (c__3158__auto___4483,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_4455){
var state_val_4456 = (state_4455[(1)]);
if((state_val_4456 === (7))){
var state_4455__$1 = state_4455;
var statearr_4457_4484 = state_4455__$1;
(statearr_4457_4484[(2)] = null);

(statearr_4457_4484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4456 === (1))){
var state_4455__$1 = state_4455;
var statearr_4458_4485 = state_4455__$1;
(statearr_4458_4485[(2)] = null);

(statearr_4458_4485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4456 === (4))){
var inst_4419 = (state_4455[(7)]);
var inst_4421 = (inst_4419 < cnt);
var state_4455__$1 = state_4455;
if(cljs.core.truth_(inst_4421)){
var statearr_4459_4486 = state_4455__$1;
(statearr_4459_4486[(1)] = (6));

} else {
var statearr_4460_4487 = state_4455__$1;
(statearr_4460_4487[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4456 === (15))){
var inst_4451 = (state_4455[(2)]);
var state_4455__$1 = state_4455;
var statearr_4461_4488 = state_4455__$1;
(statearr_4461_4488[(2)] = inst_4451);

(statearr_4461_4488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4456 === (13))){
var inst_4444 = cljs.core.async.close_BANG_.call(null,out);
var state_4455__$1 = state_4455;
var statearr_4462_4489 = state_4455__$1;
(statearr_4462_4489[(2)] = inst_4444);

(statearr_4462_4489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4456 === (6))){
var state_4455__$1 = state_4455;
var statearr_4463_4490 = state_4455__$1;
(statearr_4463_4490[(2)] = null);

(statearr_4463_4490[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4456 === (3))){
var inst_4453 = (state_4455[(2)]);
var state_4455__$1 = state_4455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4455__$1,inst_4453);
} else {
if((state_val_4456 === (12))){
var inst_4441 = (state_4455[(8)]);
var inst_4441__$1 = (state_4455[(2)]);
var inst_4442 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_4441__$1);
var state_4455__$1 = (function (){var statearr_4464 = state_4455;
(statearr_4464[(8)] = inst_4441__$1);

return statearr_4464;
})();
if(cljs.core.truth_(inst_4442)){
var statearr_4465_4491 = state_4455__$1;
(statearr_4465_4491[(1)] = (13));

} else {
var statearr_4466_4492 = state_4455__$1;
(statearr_4466_4492[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4456 === (2))){
var inst_4418 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_4419 = (0);
var state_4455__$1 = (function (){var statearr_4467 = state_4455;
(statearr_4467[(9)] = inst_4418);

(statearr_4467[(7)] = inst_4419);

return statearr_4467;
})();
var statearr_4468_4493 = state_4455__$1;
(statearr_4468_4493[(2)] = null);

(statearr_4468_4493[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4456 === (11))){
var inst_4419 = (state_4455[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_4455,(10),Object,null,(9));
var inst_4428 = chs__$1.call(null,inst_4419);
var inst_4429 = done.call(null,inst_4419);
var inst_4430 = cljs.core.async.take_BANG_.call(null,inst_4428,inst_4429);
var state_4455__$1 = state_4455;
var statearr_4469_4494 = state_4455__$1;
(statearr_4469_4494[(2)] = inst_4430);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4455__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4456 === (9))){
var inst_4419 = (state_4455[(7)]);
var inst_4432 = (state_4455[(2)]);
var inst_4433 = (inst_4419 + (1));
var inst_4419__$1 = inst_4433;
var state_4455__$1 = (function (){var statearr_4470 = state_4455;
(statearr_4470[(7)] = inst_4419__$1);

(statearr_4470[(10)] = inst_4432);

return statearr_4470;
})();
var statearr_4471_4495 = state_4455__$1;
(statearr_4471_4495[(2)] = null);

(statearr_4471_4495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4456 === (5))){
var inst_4439 = (state_4455[(2)]);
var state_4455__$1 = (function (){var statearr_4472 = state_4455;
(statearr_4472[(11)] = inst_4439);

return statearr_4472;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4455__$1,(12),dchan);
} else {
if((state_val_4456 === (14))){
var inst_4441 = (state_4455[(8)]);
var inst_4446 = cljs.core.apply.call(null,f,inst_4441);
var state_4455__$1 = state_4455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4455__$1,(16),out,inst_4446);
} else {
if((state_val_4456 === (16))){
var inst_4448 = (state_4455[(2)]);
var state_4455__$1 = (function (){var statearr_4473 = state_4455;
(statearr_4473[(12)] = inst_4448);

return statearr_4473;
})();
var statearr_4474_4496 = state_4455__$1;
(statearr_4474_4496[(2)] = null);

(statearr_4474_4496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4456 === (10))){
var inst_4423 = (state_4455[(2)]);
var inst_4424 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_4455__$1 = (function (){var statearr_4475 = state_4455;
(statearr_4475[(13)] = inst_4423);

return statearr_4475;
})();
var statearr_4476_4497 = state_4455__$1;
(statearr_4476_4497[(2)] = inst_4424);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4455__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4456 === (8))){
var inst_4437 = (state_4455[(2)]);
var state_4455__$1 = state_4455;
var statearr_4477_4498 = state_4455__$1;
(statearr_4477_4498[(2)] = inst_4437);

(statearr_4477_4498[(1)] = (5));


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
});})(c__3158__auto___4483,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__3070__auto__,c__3158__auto___4483,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__3071__auto__ = null;
var cljs$core$async$state_machine__3071__auto____0 = (function (){
var statearr_4478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4478[(0)] = cljs$core$async$state_machine__3071__auto__);

(statearr_4478[(1)] = (1));

return statearr_4478;
});
var cljs$core$async$state_machine__3071__auto____1 = (function (state_4455){
while(true){
var ret_value__3072__auto__ = (function (){try{while(true){
var result__3073__auto__ = switch__3070__auto__.call(null,state_4455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3073__auto__;
}
break;
}
}catch (e4479){if((e4479 instanceof Object)){
var ex__3074__auto__ = e4479;
var statearr_4480_4499 = state_4455;
(statearr_4480_4499[(5)] = ex__3074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4500 = state_4455;
state_4455 = G__4500;
continue;
} else {
return ret_value__3072__auto__;
}
break;
}
});
cljs$core$async$state_machine__3071__auto__ = function(state_4455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3071__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3071__auto____1.call(this,state_4455);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3071__auto____0;
cljs$core$async$state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3071__auto____1;
return cljs$core$async$state_machine__3071__auto__;
})()
;})(switch__3070__auto__,c__3158__auto___4483,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__3160__auto__ = (function (){var statearr_4481 = f__3159__auto__.call(null);
(statearr_4481[(6)] = c__3158__auto___4483);

return statearr_4481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3160__auto__);
});})(c__3158__auto___4483,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__4503 = arguments.length;
switch (G__4503) {
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
var c__3158__auto___4557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3158__auto___4557,out){
return (function (){
var f__3159__auto__ = (function (){var switch__3070__auto__ = ((function (c__3158__auto___4557,out){
return (function (state_4535){
var state_val_4536 = (state_4535[(1)]);
if((state_val_4536 === (7))){
var inst_4515 = (state_4535[(7)]);
var inst_4514 = (state_4535[(8)]);
var inst_4514__$1 = (state_4535[(2)]);
var inst_4515__$1 = cljs.core.nth.call(null,inst_4514__$1,(0),null);
var inst_4516 = cljs.core.nth.call(null,inst_4514__$1,(1),null);
var inst_4517 = (inst_4515__$1 == null);
var state_4535__$1 = (function (){var statearr_4537 = state_4535;
(statearr_4537[(7)] = inst_4515__$1);

(statearr_4537[(8)] = inst_4514__$1);

(statearr_4537[(9)] = inst_4516);

return statearr_4537;
})();
if(cljs.core.truth_(inst_4517)){
var statearr_4538_4558 = state_4535__$1;
(statearr_4538_4558[(1)] = (8));

} else {
var statearr_4539_4559 = state_4535__$1;
(statearr_4539_4559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4536 === (1))){
var inst_4504 = cljs.core.vec.call(null,chs);
var inst_4505 = inst_4504;
var state_4535__$1 = (function (){var statearr_4540 = state_4535;
(statearr_4540[(10)] = inst_4505);

return statearr_4540;
})();
var statearr_4541_4560 = state_4535__$1;
(statearr_4541_4560[(2)] = null);

(statearr_4541_4560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4536 === (4))){
var inst_4505 = (state_4535[(10)]);
var state_4535__$1 = state_4535;
return cljs.core.async.ioc_alts_BANG_.call(null,state_4535__$1,(7),inst_4505);
} else {
if((state_val_4536 === (6))){
var inst_4531 = (state_4535[(2)]);
var state_4535__$1 = state_4535;
var statearr_4542_4561 = state_4535__$1;
(statearr_4542_4561[(2)] = inst_4531);

(statearr_4542_4561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4536 === (3))){
var inst_4533 = (state_4535[(2)]);
var state_4535__$1 = state_4535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4535__$1,inst_4533);
} else {
if((state_val_4536 === (2))){
var inst_4505 = (state_4535[(10)]);
var inst_4507 = cljs.core.count.call(null,inst_4505);
var inst_4508 = (inst_4507 > (0));
var state_4535__$1 = state_4535;
if(cljs.core.truth_(inst_4508)){
var statearr_4544_4562 = state_4535__$1;
(statearr_4544_4562[(1)] = (4));

} else {
var statearr_4545_4563 = state_4535__$1;
(statearr_4545_4563[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4536 === (11))){
var inst_4505 = (state_4535[(10)]);
var inst_4524 = (state_4535[(2)]);
var tmp4543 = inst_4505;
var inst_4505__$1 = tmp4543;
var state_4535__$1 = (function (){var statearr_4546 = state_4535;
(statearr_4546[(11)] = inst_4524);

(statearr_4546[(10)] = inst_4505__$1);

return statearr_4546;
})();
var statearr_4547_4564 = state_4535__$1;
(statearr_4547_4564[(2)] = null);

(statearr_4547_4564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4536 === (9))){
var inst_4515 = (state_4535[(7)]);
var state_4535__$1 = state_4535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4535__$1,(11),out,inst_4515);
} else {
if((state_val_4536 === (5))){
var inst_4529 = cljs.core.async.close_BANG_.call(null,out);
var state_4535__$1 = state_4535;
var statearr_4548_4565 = state_4535__$1;
(statearr_4548_4565[(2)] = inst_4529);

(statearr_4548_4565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4536 === (10))){
var inst_4527 = (state_4535[(2)]);
var state_4535__$1 = state_4535;
var statearr_4549_4566 = state_4535__$1;
(statearr_4549_4566[(2)] = inst_4527);

(statearr_4549_4566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4536 === (8))){
var inst_4515 = (state_4535[(7)]);
var inst_4514 = (state_4535[(8)]);
var inst_4516 = (state_4535[(9)]);
var inst_4505 = (state_4535[(10)]);
var inst_4519 = (function (){var cs = inst_4505;
var vec__4510 = inst_4514;
var v = inst_4515;
var c = inst_4516;
return ((function (cs,vec__4510,v,c,inst_4515,inst_4514,inst_4516,inst_4505,state_val_4536,c__3158__auto___4557,out){
return (function (p1__4501_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__4501_SHARP_);
});
;})(cs,vec__4510,v,c,inst_4515,inst_4514,inst_4516,inst_4505,state_val_4536,c__3158__auto___4557,out))
})();
var inst_4520 = cljs.core.filterv.call(null,inst_4519,inst_4505);
var inst_4505__$1 = inst_4520;
var state_4535__$1 = (function (){var statearr_4550 = state_4535;
(statearr_4550[(10)] = inst_4505__$1);

return statearr_4550;
})();
var statearr_4551_4567 = state_4535__$1;
(statearr_4551_4567[(2)] = null);

(statearr_4551_4567[(1)] = (2));


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
});})(c__3158__auto___4557,out))
;
return ((function (switch__3070__auto__,c__3158__auto___4557,out){
return (function() {
var cljs$core$async$state_machine__3071__auto__ = null;
var cljs$core$async$state_machine__3071__auto____0 = (function (){
var statearr_4552 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4552[(0)] = cljs$core$async$state_machine__3071__auto__);

(statearr_4552[(1)] = (1));

return statearr_4552;
});
var cljs$core$async$state_machine__3071__auto____1 = (function (state_4535){
while(true){
var ret_value__3072__auto__ = (function (){try{while(true){
var result__3073__auto__ = switch__3070__auto__.call(null,state_4535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3073__auto__;
}
break;
}
}catch (e4553){if((e4553 instanceof Object)){
var ex__3074__auto__ = e4553;
var statearr_4554_4568 = state_4535;
(statearr_4554_4568[(5)] = ex__3074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4569 = state_4535;
state_4535 = G__4569;
continue;
} else {
return ret_value__3072__auto__;
}
break;
}
});
cljs$core$async$state_machine__3071__auto__ = function(state_4535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3071__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3071__auto____1.call(this,state_4535);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3071__auto____0;
cljs$core$async$state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3071__auto____1;
return cljs$core$async$state_machine__3071__auto__;
})()
;})(switch__3070__auto__,c__3158__auto___4557,out))
})();
var state__3160__auto__ = (function (){var statearr_4555 = f__3159__auto__.call(null);
(statearr_4555[(6)] = c__3158__auto___4557);

return statearr_4555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3160__auto__);
});})(c__3158__auto___4557,out))
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
var G__4571 = arguments.length;
switch (G__4571) {
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
var c__3158__auto___4616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3158__auto___4616,out){
return (function (){
var f__3159__auto__ = (function (){var switch__3070__auto__ = ((function (c__3158__auto___4616,out){
return (function (state_4595){
var state_val_4596 = (state_4595[(1)]);
if((state_val_4596 === (7))){
var inst_4577 = (state_4595[(7)]);
var inst_4577__$1 = (state_4595[(2)]);
var inst_4578 = (inst_4577__$1 == null);
var inst_4579 = cljs.core.not.call(null,inst_4578);
var state_4595__$1 = (function (){var statearr_4597 = state_4595;
(statearr_4597[(7)] = inst_4577__$1);

return statearr_4597;
})();
if(inst_4579){
var statearr_4598_4617 = state_4595__$1;
(statearr_4598_4617[(1)] = (8));

} else {
var statearr_4599_4618 = state_4595__$1;
(statearr_4599_4618[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4596 === (1))){
var inst_4572 = (0);
var state_4595__$1 = (function (){var statearr_4600 = state_4595;
(statearr_4600[(8)] = inst_4572);

return statearr_4600;
})();
var statearr_4601_4619 = state_4595__$1;
(statearr_4601_4619[(2)] = null);

(statearr_4601_4619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4596 === (4))){
var state_4595__$1 = state_4595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4595__$1,(7),ch);
} else {
if((state_val_4596 === (6))){
var inst_4590 = (state_4595[(2)]);
var state_4595__$1 = state_4595;
var statearr_4602_4620 = state_4595__$1;
(statearr_4602_4620[(2)] = inst_4590);

(statearr_4602_4620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4596 === (3))){
var inst_4592 = (state_4595[(2)]);
var inst_4593 = cljs.core.async.close_BANG_.call(null,out);
var state_4595__$1 = (function (){var statearr_4603 = state_4595;
(statearr_4603[(9)] = inst_4592);

return statearr_4603;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4595__$1,inst_4593);
} else {
if((state_val_4596 === (2))){
var inst_4572 = (state_4595[(8)]);
var inst_4574 = (inst_4572 < n);
var state_4595__$1 = state_4595;
if(cljs.core.truth_(inst_4574)){
var statearr_4604_4621 = state_4595__$1;
(statearr_4604_4621[(1)] = (4));

} else {
var statearr_4605_4622 = state_4595__$1;
(statearr_4605_4622[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4596 === (11))){
var inst_4572 = (state_4595[(8)]);
var inst_4582 = (state_4595[(2)]);
var inst_4583 = (inst_4572 + (1));
var inst_4572__$1 = inst_4583;
var state_4595__$1 = (function (){var statearr_4606 = state_4595;
(statearr_4606[(10)] = inst_4582);

(statearr_4606[(8)] = inst_4572__$1);

return statearr_4606;
})();
var statearr_4607_4623 = state_4595__$1;
(statearr_4607_4623[(2)] = null);

(statearr_4607_4623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4596 === (9))){
var state_4595__$1 = state_4595;
var statearr_4608_4624 = state_4595__$1;
(statearr_4608_4624[(2)] = null);

(statearr_4608_4624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4596 === (5))){
var state_4595__$1 = state_4595;
var statearr_4609_4625 = state_4595__$1;
(statearr_4609_4625[(2)] = null);

(statearr_4609_4625[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4596 === (10))){
var inst_4587 = (state_4595[(2)]);
var state_4595__$1 = state_4595;
var statearr_4610_4626 = state_4595__$1;
(statearr_4610_4626[(2)] = inst_4587);

(statearr_4610_4626[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4596 === (8))){
var inst_4577 = (state_4595[(7)]);
var state_4595__$1 = state_4595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4595__$1,(11),out,inst_4577);
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
});})(c__3158__auto___4616,out))
;
return ((function (switch__3070__auto__,c__3158__auto___4616,out){
return (function() {
var cljs$core$async$state_machine__3071__auto__ = null;
var cljs$core$async$state_machine__3071__auto____0 = (function (){
var statearr_4611 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4611[(0)] = cljs$core$async$state_machine__3071__auto__);

(statearr_4611[(1)] = (1));

return statearr_4611;
});
var cljs$core$async$state_machine__3071__auto____1 = (function (state_4595){
while(true){
var ret_value__3072__auto__ = (function (){try{while(true){
var result__3073__auto__ = switch__3070__auto__.call(null,state_4595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3073__auto__;
}
break;
}
}catch (e4612){if((e4612 instanceof Object)){
var ex__3074__auto__ = e4612;
var statearr_4613_4627 = state_4595;
(statearr_4613_4627[(5)] = ex__3074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4628 = state_4595;
state_4595 = G__4628;
continue;
} else {
return ret_value__3072__auto__;
}
break;
}
});
cljs$core$async$state_machine__3071__auto__ = function(state_4595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3071__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3071__auto____1.call(this,state_4595);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3071__auto____0;
cljs$core$async$state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3071__auto____1;
return cljs$core$async$state_machine__3071__auto__;
})()
;})(switch__3070__auto__,c__3158__auto___4616,out))
})();
var state__3160__auto__ = (function (){var statearr_4614 = f__3159__auto__.call(null);
(statearr_4614[(6)] = c__3158__auto___4616);

return statearr_4614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3160__auto__);
});})(c__3158__auto___4616,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async4630 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4630 = (function (f,ch,meta4631){
this.f = f;
this.ch = ch;
this.meta4631 = meta4631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4632,meta4631__$1){
var self__ = this;
var _4632__$1 = this;
return (new cljs.core.async.t_cljs$core$async4630(self__.f,self__.ch,meta4631__$1));
});

cljs.core.async.t_cljs$core$async4630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4632){
var self__ = this;
var _4632__$1 = this;
return self__.meta4631;
});

cljs.core.async.t_cljs$core$async4630.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4630.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4630.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4630.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4630.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async4633 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4633 = (function (f,ch,meta4631,_,fn1,meta4634){
this.f = f;
this.ch = ch;
this.meta4631 = meta4631;
this._ = _;
this.fn1 = fn1;
this.meta4634 = meta4634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_4635,meta4634__$1){
var self__ = this;
var _4635__$1 = this;
return (new cljs.core.async.t_cljs$core$async4633(self__.f,self__.ch,self__.meta4631,self__._,self__.fn1,meta4634__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async4633.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_4635){
var self__ = this;
var _4635__$1 = this;
return self__.meta4634;
});})(___$1))
;

cljs.core.async.t_cljs$core$async4633.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4633.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async4633.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async4633.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__4629_SHARP_){
return f1.call(null,(((p1__4629_SHARP_ == null))?null:self__.f.call(null,p1__4629_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async4633.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4631","meta4631",-1588628265,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async4630","cljs.core.async/t_cljs$core$async4630",1018060199,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta4634","meta4634",414575882,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async4633.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4633";

cljs.core.async.t_cljs$core$async4633.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4633");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4633.
 */
cljs.core.async.__GT_t_cljs$core$async4633 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async4633(f__$1,ch__$1,meta4631__$1,___$2,fn1__$1,meta4634){
return (new cljs.core.async.t_cljs$core$async4633(f__$1,ch__$1,meta4631__$1,___$2,fn1__$1,meta4634));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async4633(self__.f,self__.ch,self__.meta4631,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async4630.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4630.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async4630.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4631","meta4631",-1588628265,null)], null);
});

cljs.core.async.t_cljs$core$async4630.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4630";

cljs.core.async.t_cljs$core$async4630.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4630");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4630.
 */
cljs.core.async.__GT_t_cljs$core$async4630 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async4630(f__$1,ch__$1,meta4631){
return (new cljs.core.async.t_cljs$core$async4630(f__$1,ch__$1,meta4631));
});

}

return (new cljs.core.async.t_cljs$core$async4630(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async4636 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4636 = (function (f,ch,meta4637){
this.f = f;
this.ch = ch;
this.meta4637 = meta4637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4638,meta4637__$1){
var self__ = this;
var _4638__$1 = this;
return (new cljs.core.async.t_cljs$core$async4636(self__.f,self__.ch,meta4637__$1));
});

cljs.core.async.t_cljs$core$async4636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4638){
var self__ = this;
var _4638__$1 = this;
return self__.meta4637;
});

cljs.core.async.t_cljs$core$async4636.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4636.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4636.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4636.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async4636.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4636.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async4636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4637","meta4637",-1841252737,null)], null);
});

cljs.core.async.t_cljs$core$async4636.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4636";

cljs.core.async.t_cljs$core$async4636.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4636");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4636.
 */
cljs.core.async.__GT_t_cljs$core$async4636 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async4636(f__$1,ch__$1,meta4637){
return (new cljs.core.async.t_cljs$core$async4636(f__$1,ch__$1,meta4637));
});

}

return (new cljs.core.async.t_cljs$core$async4636(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async4639 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4639 = (function (p,ch,meta4640){
this.p = p;
this.ch = ch;
this.meta4640 = meta4640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4641,meta4640__$1){
var self__ = this;
var _4641__$1 = this;
return (new cljs.core.async.t_cljs$core$async4639(self__.p,self__.ch,meta4640__$1));
});

cljs.core.async.t_cljs$core$async4639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4641){
var self__ = this;
var _4641__$1 = this;
return self__.meta4640;
});

cljs.core.async.t_cljs$core$async4639.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4639.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4639.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4639.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4639.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async4639.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4639.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async4639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4640","meta4640",-1951644537,null)], null);
});

cljs.core.async.t_cljs$core$async4639.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4639";

cljs.core.async.t_cljs$core$async4639.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4639");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4639.
 */
cljs.core.async.__GT_t_cljs$core$async4639 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async4639(p__$1,ch__$1,meta4640){
return (new cljs.core.async.t_cljs$core$async4639(p__$1,ch__$1,meta4640));
});

}

return (new cljs.core.async.t_cljs$core$async4639(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__4643 = arguments.length;
switch (G__4643) {
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
var c__3158__auto___4683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3158__auto___4683,out){
return (function (){
var f__3159__auto__ = (function (){var switch__3070__auto__ = ((function (c__3158__auto___4683,out){
return (function (state_4664){
var state_val_4665 = (state_4664[(1)]);
if((state_val_4665 === (7))){
var inst_4660 = (state_4664[(2)]);
var state_4664__$1 = state_4664;
var statearr_4666_4684 = state_4664__$1;
(statearr_4666_4684[(2)] = inst_4660);

(statearr_4666_4684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4665 === (1))){
var state_4664__$1 = state_4664;
var statearr_4667_4685 = state_4664__$1;
(statearr_4667_4685[(2)] = null);

(statearr_4667_4685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4665 === (4))){
var inst_4646 = (state_4664[(7)]);
var inst_4646__$1 = (state_4664[(2)]);
var inst_4647 = (inst_4646__$1 == null);
var state_4664__$1 = (function (){var statearr_4668 = state_4664;
(statearr_4668[(7)] = inst_4646__$1);

return statearr_4668;
})();
if(cljs.core.truth_(inst_4647)){
var statearr_4669_4686 = state_4664__$1;
(statearr_4669_4686[(1)] = (5));

} else {
var statearr_4670_4687 = state_4664__$1;
(statearr_4670_4687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4665 === (6))){
var inst_4646 = (state_4664[(7)]);
var inst_4651 = p.call(null,inst_4646);
var state_4664__$1 = state_4664;
if(cljs.core.truth_(inst_4651)){
var statearr_4671_4688 = state_4664__$1;
(statearr_4671_4688[(1)] = (8));

} else {
var statearr_4672_4689 = state_4664__$1;
(statearr_4672_4689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4665 === (3))){
var inst_4662 = (state_4664[(2)]);
var state_4664__$1 = state_4664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4664__$1,inst_4662);
} else {
if((state_val_4665 === (2))){
var state_4664__$1 = state_4664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4664__$1,(4),ch);
} else {
if((state_val_4665 === (11))){
var inst_4654 = (state_4664[(2)]);
var state_4664__$1 = state_4664;
var statearr_4673_4690 = state_4664__$1;
(statearr_4673_4690[(2)] = inst_4654);

(statearr_4673_4690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4665 === (9))){
var state_4664__$1 = state_4664;
var statearr_4674_4691 = state_4664__$1;
(statearr_4674_4691[(2)] = null);

(statearr_4674_4691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4665 === (5))){
var inst_4649 = cljs.core.async.close_BANG_.call(null,out);
var state_4664__$1 = state_4664;
var statearr_4675_4692 = state_4664__$1;
(statearr_4675_4692[(2)] = inst_4649);

(statearr_4675_4692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4665 === (10))){
var inst_4657 = (state_4664[(2)]);
var state_4664__$1 = (function (){var statearr_4676 = state_4664;
(statearr_4676[(8)] = inst_4657);

return statearr_4676;
})();
var statearr_4677_4693 = state_4664__$1;
(statearr_4677_4693[(2)] = null);

(statearr_4677_4693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4665 === (8))){
var inst_4646 = (state_4664[(7)]);
var state_4664__$1 = state_4664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4664__$1,(11),out,inst_4646);
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
});})(c__3158__auto___4683,out))
;
return ((function (switch__3070__auto__,c__3158__auto___4683,out){
return (function() {
var cljs$core$async$state_machine__3071__auto__ = null;
var cljs$core$async$state_machine__3071__auto____0 = (function (){
var statearr_4678 = [null,null,null,null,null,null,null,null,null];
(statearr_4678[(0)] = cljs$core$async$state_machine__3071__auto__);

(statearr_4678[(1)] = (1));

return statearr_4678;
});
var cljs$core$async$state_machine__3071__auto____1 = (function (state_4664){
while(true){
var ret_value__3072__auto__ = (function (){try{while(true){
var result__3073__auto__ = switch__3070__auto__.call(null,state_4664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3073__auto__;
}
break;
}
}catch (e4679){if((e4679 instanceof Object)){
var ex__3074__auto__ = e4679;
var statearr_4680_4694 = state_4664;
(statearr_4680_4694[(5)] = ex__3074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4695 = state_4664;
state_4664 = G__4695;
continue;
} else {
return ret_value__3072__auto__;
}
break;
}
});
cljs$core$async$state_machine__3071__auto__ = function(state_4664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3071__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3071__auto____1.call(this,state_4664);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3071__auto____0;
cljs$core$async$state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3071__auto____1;
return cljs$core$async$state_machine__3071__auto__;
})()
;})(switch__3070__auto__,c__3158__auto___4683,out))
})();
var state__3160__auto__ = (function (){var statearr_4681 = f__3159__auto__.call(null);
(statearr_4681[(6)] = c__3158__auto___4683);

return statearr_4681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3160__auto__);
});})(c__3158__auto___4683,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__4697 = arguments.length;
switch (G__4697) {
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
var c__3158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3158__auto__){
return (function (){
var f__3159__auto__ = (function (){var switch__3070__auto__ = ((function (c__3158__auto__){
return (function (state_4760){
var state_val_4761 = (state_4760[(1)]);
if((state_val_4761 === (7))){
var inst_4756 = (state_4760[(2)]);
var state_4760__$1 = state_4760;
var statearr_4762_4800 = state_4760__$1;
(statearr_4762_4800[(2)] = inst_4756);

(statearr_4762_4800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (20))){
var inst_4726 = (state_4760[(7)]);
var inst_4737 = (state_4760[(2)]);
var inst_4738 = cljs.core.next.call(null,inst_4726);
var inst_4712 = inst_4738;
var inst_4713 = null;
var inst_4714 = (0);
var inst_4715 = (0);
var state_4760__$1 = (function (){var statearr_4763 = state_4760;
(statearr_4763[(8)] = inst_4713);

(statearr_4763[(9)] = inst_4737);

(statearr_4763[(10)] = inst_4714);

(statearr_4763[(11)] = inst_4712);

(statearr_4763[(12)] = inst_4715);

return statearr_4763;
})();
var statearr_4764_4801 = state_4760__$1;
(statearr_4764_4801[(2)] = null);

(statearr_4764_4801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (1))){
var state_4760__$1 = state_4760;
var statearr_4765_4802 = state_4760__$1;
(statearr_4765_4802[(2)] = null);

(statearr_4765_4802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (4))){
var inst_4701 = (state_4760[(13)]);
var inst_4701__$1 = (state_4760[(2)]);
var inst_4702 = (inst_4701__$1 == null);
var state_4760__$1 = (function (){var statearr_4766 = state_4760;
(statearr_4766[(13)] = inst_4701__$1);

return statearr_4766;
})();
if(cljs.core.truth_(inst_4702)){
var statearr_4767_4803 = state_4760__$1;
(statearr_4767_4803[(1)] = (5));

} else {
var statearr_4768_4804 = state_4760__$1;
(statearr_4768_4804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (15))){
var state_4760__$1 = state_4760;
var statearr_4772_4805 = state_4760__$1;
(statearr_4772_4805[(2)] = null);

(statearr_4772_4805[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (21))){
var state_4760__$1 = state_4760;
var statearr_4773_4806 = state_4760__$1;
(statearr_4773_4806[(2)] = null);

(statearr_4773_4806[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (13))){
var inst_4713 = (state_4760[(8)]);
var inst_4714 = (state_4760[(10)]);
var inst_4712 = (state_4760[(11)]);
var inst_4715 = (state_4760[(12)]);
var inst_4722 = (state_4760[(2)]);
var inst_4723 = (inst_4715 + (1));
var tmp4769 = inst_4713;
var tmp4770 = inst_4714;
var tmp4771 = inst_4712;
var inst_4712__$1 = tmp4771;
var inst_4713__$1 = tmp4769;
var inst_4714__$1 = tmp4770;
var inst_4715__$1 = inst_4723;
var state_4760__$1 = (function (){var statearr_4774 = state_4760;
(statearr_4774[(8)] = inst_4713__$1);

(statearr_4774[(14)] = inst_4722);

(statearr_4774[(10)] = inst_4714__$1);

(statearr_4774[(11)] = inst_4712__$1);

(statearr_4774[(12)] = inst_4715__$1);

return statearr_4774;
})();
var statearr_4775_4807 = state_4760__$1;
(statearr_4775_4807[(2)] = null);

(statearr_4775_4807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (22))){
var state_4760__$1 = state_4760;
var statearr_4776_4808 = state_4760__$1;
(statearr_4776_4808[(2)] = null);

(statearr_4776_4808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (6))){
var inst_4701 = (state_4760[(13)]);
var inst_4710 = f.call(null,inst_4701);
var inst_4711 = cljs.core.seq.call(null,inst_4710);
var inst_4712 = inst_4711;
var inst_4713 = null;
var inst_4714 = (0);
var inst_4715 = (0);
var state_4760__$1 = (function (){var statearr_4777 = state_4760;
(statearr_4777[(8)] = inst_4713);

(statearr_4777[(10)] = inst_4714);

(statearr_4777[(11)] = inst_4712);

(statearr_4777[(12)] = inst_4715);

return statearr_4777;
})();
var statearr_4778_4809 = state_4760__$1;
(statearr_4778_4809[(2)] = null);

(statearr_4778_4809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (17))){
var inst_4726 = (state_4760[(7)]);
var inst_4730 = cljs.core.chunk_first.call(null,inst_4726);
var inst_4731 = cljs.core.chunk_rest.call(null,inst_4726);
var inst_4732 = cljs.core.count.call(null,inst_4730);
var inst_4712 = inst_4731;
var inst_4713 = inst_4730;
var inst_4714 = inst_4732;
var inst_4715 = (0);
var state_4760__$1 = (function (){var statearr_4779 = state_4760;
(statearr_4779[(8)] = inst_4713);

(statearr_4779[(10)] = inst_4714);

(statearr_4779[(11)] = inst_4712);

(statearr_4779[(12)] = inst_4715);

return statearr_4779;
})();
var statearr_4780_4810 = state_4760__$1;
(statearr_4780_4810[(2)] = null);

(statearr_4780_4810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (3))){
var inst_4758 = (state_4760[(2)]);
var state_4760__$1 = state_4760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4760__$1,inst_4758);
} else {
if((state_val_4761 === (12))){
var inst_4746 = (state_4760[(2)]);
var state_4760__$1 = state_4760;
var statearr_4781_4811 = state_4760__$1;
(statearr_4781_4811[(2)] = inst_4746);

(statearr_4781_4811[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (2))){
var state_4760__$1 = state_4760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4760__$1,(4),in$);
} else {
if((state_val_4761 === (23))){
var inst_4754 = (state_4760[(2)]);
var state_4760__$1 = state_4760;
var statearr_4782_4812 = state_4760__$1;
(statearr_4782_4812[(2)] = inst_4754);

(statearr_4782_4812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (19))){
var inst_4741 = (state_4760[(2)]);
var state_4760__$1 = state_4760;
var statearr_4783_4813 = state_4760__$1;
(statearr_4783_4813[(2)] = inst_4741);

(statearr_4783_4813[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (11))){
var inst_4726 = (state_4760[(7)]);
var inst_4712 = (state_4760[(11)]);
var inst_4726__$1 = cljs.core.seq.call(null,inst_4712);
var state_4760__$1 = (function (){var statearr_4784 = state_4760;
(statearr_4784[(7)] = inst_4726__$1);

return statearr_4784;
})();
if(inst_4726__$1){
var statearr_4785_4814 = state_4760__$1;
(statearr_4785_4814[(1)] = (14));

} else {
var statearr_4786_4815 = state_4760__$1;
(statearr_4786_4815[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (9))){
var inst_4748 = (state_4760[(2)]);
var inst_4749 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_4760__$1 = (function (){var statearr_4787 = state_4760;
(statearr_4787[(15)] = inst_4748);

return statearr_4787;
})();
if(cljs.core.truth_(inst_4749)){
var statearr_4788_4816 = state_4760__$1;
(statearr_4788_4816[(1)] = (21));

} else {
var statearr_4789_4817 = state_4760__$1;
(statearr_4789_4817[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (5))){
var inst_4704 = cljs.core.async.close_BANG_.call(null,out);
var state_4760__$1 = state_4760;
var statearr_4790_4818 = state_4760__$1;
(statearr_4790_4818[(2)] = inst_4704);

(statearr_4790_4818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (14))){
var inst_4726 = (state_4760[(7)]);
var inst_4728 = cljs.core.chunked_seq_QMARK_.call(null,inst_4726);
var state_4760__$1 = state_4760;
if(inst_4728){
var statearr_4791_4819 = state_4760__$1;
(statearr_4791_4819[(1)] = (17));

} else {
var statearr_4792_4820 = state_4760__$1;
(statearr_4792_4820[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (16))){
var inst_4744 = (state_4760[(2)]);
var state_4760__$1 = state_4760;
var statearr_4793_4821 = state_4760__$1;
(statearr_4793_4821[(2)] = inst_4744);

(statearr_4793_4821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (10))){
var inst_4713 = (state_4760[(8)]);
var inst_4715 = (state_4760[(12)]);
var inst_4720 = cljs.core._nth.call(null,inst_4713,inst_4715);
var state_4760__$1 = state_4760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4760__$1,(13),out,inst_4720);
} else {
if((state_val_4761 === (18))){
var inst_4726 = (state_4760[(7)]);
var inst_4735 = cljs.core.first.call(null,inst_4726);
var state_4760__$1 = state_4760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4760__$1,(20),out,inst_4735);
} else {
if((state_val_4761 === (8))){
var inst_4714 = (state_4760[(10)]);
var inst_4715 = (state_4760[(12)]);
var inst_4717 = (inst_4715 < inst_4714);
var inst_4718 = inst_4717;
var state_4760__$1 = state_4760;
if(cljs.core.truth_(inst_4718)){
var statearr_4794_4822 = state_4760__$1;
(statearr_4794_4822[(1)] = (10));

} else {
var statearr_4795_4823 = state_4760__$1;
(statearr_4795_4823[(1)] = (11));

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
});})(c__3158__auto__))
;
return ((function (switch__3070__auto__,c__3158__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__3071__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__3071__auto____0 = (function (){
var statearr_4796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4796[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__3071__auto__);

(statearr_4796[(1)] = (1));

return statearr_4796;
});
var cljs$core$async$mapcat_STAR__$_state_machine__3071__auto____1 = (function (state_4760){
while(true){
var ret_value__3072__auto__ = (function (){try{while(true){
var result__3073__auto__ = switch__3070__auto__.call(null,state_4760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3073__auto__;
}
break;
}
}catch (e4797){if((e4797 instanceof Object)){
var ex__3074__auto__ = e4797;
var statearr_4798_4824 = state_4760;
(statearr_4798_4824[(5)] = ex__3074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4825 = state_4760;
state_4760 = G__4825;
continue;
} else {
return ret_value__3072__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__3071__auto__ = function(state_4760){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__3071__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__3071__auto____1.call(this,state_4760);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__3071__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__3071__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__3071__auto__;
})()
;})(switch__3070__auto__,c__3158__auto__))
})();
var state__3160__auto__ = (function (){var statearr_4799 = f__3159__auto__.call(null);
(statearr_4799[(6)] = c__3158__auto__);

return statearr_4799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3160__auto__);
});})(c__3158__auto__))
);

return c__3158__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__4827 = arguments.length;
switch (G__4827) {
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
var G__4830 = arguments.length;
switch (G__4830) {
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
var G__4833 = arguments.length;
switch (G__4833) {
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
var c__3158__auto___4880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3158__auto___4880,out){
return (function (){
var f__3159__auto__ = (function (){var switch__3070__auto__ = ((function (c__3158__auto___4880,out){
return (function (state_4857){
var state_val_4858 = (state_4857[(1)]);
if((state_val_4858 === (7))){
var inst_4852 = (state_4857[(2)]);
var state_4857__$1 = state_4857;
var statearr_4859_4881 = state_4857__$1;
(statearr_4859_4881[(2)] = inst_4852);

(statearr_4859_4881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4858 === (1))){
var inst_4834 = null;
var state_4857__$1 = (function (){var statearr_4860 = state_4857;
(statearr_4860[(7)] = inst_4834);

return statearr_4860;
})();
var statearr_4861_4882 = state_4857__$1;
(statearr_4861_4882[(2)] = null);

(statearr_4861_4882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4858 === (4))){
var inst_4837 = (state_4857[(8)]);
var inst_4837__$1 = (state_4857[(2)]);
var inst_4838 = (inst_4837__$1 == null);
var inst_4839 = cljs.core.not.call(null,inst_4838);
var state_4857__$1 = (function (){var statearr_4862 = state_4857;
(statearr_4862[(8)] = inst_4837__$1);

return statearr_4862;
})();
if(inst_4839){
var statearr_4863_4883 = state_4857__$1;
(statearr_4863_4883[(1)] = (5));

} else {
var statearr_4864_4884 = state_4857__$1;
(statearr_4864_4884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4858 === (6))){
var state_4857__$1 = state_4857;
var statearr_4865_4885 = state_4857__$1;
(statearr_4865_4885[(2)] = null);

(statearr_4865_4885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4858 === (3))){
var inst_4854 = (state_4857[(2)]);
var inst_4855 = cljs.core.async.close_BANG_.call(null,out);
var state_4857__$1 = (function (){var statearr_4866 = state_4857;
(statearr_4866[(9)] = inst_4854);

return statearr_4866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4857__$1,inst_4855);
} else {
if((state_val_4858 === (2))){
var state_4857__$1 = state_4857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4857__$1,(4),ch);
} else {
if((state_val_4858 === (11))){
var inst_4837 = (state_4857[(8)]);
var inst_4846 = (state_4857[(2)]);
var inst_4834 = inst_4837;
var state_4857__$1 = (function (){var statearr_4867 = state_4857;
(statearr_4867[(7)] = inst_4834);

(statearr_4867[(10)] = inst_4846);

return statearr_4867;
})();
var statearr_4868_4886 = state_4857__$1;
(statearr_4868_4886[(2)] = null);

(statearr_4868_4886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4858 === (9))){
var inst_4837 = (state_4857[(8)]);
var state_4857__$1 = state_4857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4857__$1,(11),out,inst_4837);
} else {
if((state_val_4858 === (5))){
var inst_4834 = (state_4857[(7)]);
var inst_4837 = (state_4857[(8)]);
var inst_4841 = cljs.core._EQ_.call(null,inst_4837,inst_4834);
var state_4857__$1 = state_4857;
if(inst_4841){
var statearr_4870_4887 = state_4857__$1;
(statearr_4870_4887[(1)] = (8));

} else {
var statearr_4871_4888 = state_4857__$1;
(statearr_4871_4888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4858 === (10))){
var inst_4849 = (state_4857[(2)]);
var state_4857__$1 = state_4857;
var statearr_4872_4889 = state_4857__$1;
(statearr_4872_4889[(2)] = inst_4849);

(statearr_4872_4889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4858 === (8))){
var inst_4834 = (state_4857[(7)]);
var tmp4869 = inst_4834;
var inst_4834__$1 = tmp4869;
var state_4857__$1 = (function (){var statearr_4873 = state_4857;
(statearr_4873[(7)] = inst_4834__$1);

return statearr_4873;
})();
var statearr_4874_4890 = state_4857__$1;
(statearr_4874_4890[(2)] = null);

(statearr_4874_4890[(1)] = (2));


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
});})(c__3158__auto___4880,out))
;
return ((function (switch__3070__auto__,c__3158__auto___4880,out){
return (function() {
var cljs$core$async$state_machine__3071__auto__ = null;
var cljs$core$async$state_machine__3071__auto____0 = (function (){
var statearr_4875 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4875[(0)] = cljs$core$async$state_machine__3071__auto__);

(statearr_4875[(1)] = (1));

return statearr_4875;
});
var cljs$core$async$state_machine__3071__auto____1 = (function (state_4857){
while(true){
var ret_value__3072__auto__ = (function (){try{while(true){
var result__3073__auto__ = switch__3070__auto__.call(null,state_4857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3073__auto__;
}
break;
}
}catch (e4876){if((e4876 instanceof Object)){
var ex__3074__auto__ = e4876;
var statearr_4877_4891 = state_4857;
(statearr_4877_4891[(5)] = ex__3074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4892 = state_4857;
state_4857 = G__4892;
continue;
} else {
return ret_value__3072__auto__;
}
break;
}
});
cljs$core$async$state_machine__3071__auto__ = function(state_4857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3071__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3071__auto____1.call(this,state_4857);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3071__auto____0;
cljs$core$async$state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3071__auto____1;
return cljs$core$async$state_machine__3071__auto__;
})()
;})(switch__3070__auto__,c__3158__auto___4880,out))
})();
var state__3160__auto__ = (function (){var statearr_4878 = f__3159__auto__.call(null);
(statearr_4878[(6)] = c__3158__auto___4880);

return statearr_4878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3160__auto__);
});})(c__3158__auto___4880,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__4894 = arguments.length;
switch (G__4894) {
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
var c__3158__auto___4960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3158__auto___4960,out){
return (function (){
var f__3159__auto__ = (function (){var switch__3070__auto__ = ((function (c__3158__auto___4960,out){
return (function (state_4932){
var state_val_4933 = (state_4932[(1)]);
if((state_val_4933 === (7))){
var inst_4928 = (state_4932[(2)]);
var state_4932__$1 = state_4932;
var statearr_4934_4961 = state_4932__$1;
(statearr_4934_4961[(2)] = inst_4928);

(statearr_4934_4961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4933 === (1))){
var inst_4895 = (new Array(n));
var inst_4896 = inst_4895;
var inst_4897 = (0);
var state_4932__$1 = (function (){var statearr_4935 = state_4932;
(statearr_4935[(7)] = inst_4897);

(statearr_4935[(8)] = inst_4896);

return statearr_4935;
})();
var statearr_4936_4962 = state_4932__$1;
(statearr_4936_4962[(2)] = null);

(statearr_4936_4962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4933 === (4))){
var inst_4900 = (state_4932[(9)]);
var inst_4900__$1 = (state_4932[(2)]);
var inst_4901 = (inst_4900__$1 == null);
var inst_4902 = cljs.core.not.call(null,inst_4901);
var state_4932__$1 = (function (){var statearr_4937 = state_4932;
(statearr_4937[(9)] = inst_4900__$1);

return statearr_4937;
})();
if(inst_4902){
var statearr_4938_4963 = state_4932__$1;
(statearr_4938_4963[(1)] = (5));

} else {
var statearr_4939_4964 = state_4932__$1;
(statearr_4939_4964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4933 === (15))){
var inst_4922 = (state_4932[(2)]);
var state_4932__$1 = state_4932;
var statearr_4940_4965 = state_4932__$1;
(statearr_4940_4965[(2)] = inst_4922);

(statearr_4940_4965[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4933 === (13))){
var state_4932__$1 = state_4932;
var statearr_4941_4966 = state_4932__$1;
(statearr_4941_4966[(2)] = null);

(statearr_4941_4966[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4933 === (6))){
var inst_4897 = (state_4932[(7)]);
var inst_4918 = (inst_4897 > (0));
var state_4932__$1 = state_4932;
if(cljs.core.truth_(inst_4918)){
var statearr_4942_4967 = state_4932__$1;
(statearr_4942_4967[(1)] = (12));

} else {
var statearr_4943_4968 = state_4932__$1;
(statearr_4943_4968[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4933 === (3))){
var inst_4930 = (state_4932[(2)]);
var state_4932__$1 = state_4932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4932__$1,inst_4930);
} else {
if((state_val_4933 === (12))){
var inst_4896 = (state_4932[(8)]);
var inst_4920 = cljs.core.vec.call(null,inst_4896);
var state_4932__$1 = state_4932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4932__$1,(15),out,inst_4920);
} else {
if((state_val_4933 === (2))){
var state_4932__$1 = state_4932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4932__$1,(4),ch);
} else {
if((state_val_4933 === (11))){
var inst_4912 = (state_4932[(2)]);
var inst_4913 = (new Array(n));
var inst_4896 = inst_4913;
var inst_4897 = (0);
var state_4932__$1 = (function (){var statearr_4944 = state_4932;
(statearr_4944[(7)] = inst_4897);

(statearr_4944[(10)] = inst_4912);

(statearr_4944[(8)] = inst_4896);

return statearr_4944;
})();
var statearr_4945_4969 = state_4932__$1;
(statearr_4945_4969[(2)] = null);

(statearr_4945_4969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4933 === (9))){
var inst_4896 = (state_4932[(8)]);
var inst_4910 = cljs.core.vec.call(null,inst_4896);
var state_4932__$1 = state_4932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4932__$1,(11),out,inst_4910);
} else {
if((state_val_4933 === (5))){
var inst_4900 = (state_4932[(9)]);
var inst_4897 = (state_4932[(7)]);
var inst_4896 = (state_4932[(8)]);
var inst_4905 = (state_4932[(11)]);
var inst_4904 = (inst_4896[inst_4897] = inst_4900);
var inst_4905__$1 = (inst_4897 + (1));
var inst_4906 = (inst_4905__$1 < n);
var state_4932__$1 = (function (){var statearr_4946 = state_4932;
(statearr_4946[(12)] = inst_4904);

(statearr_4946[(11)] = inst_4905__$1);

return statearr_4946;
})();
if(cljs.core.truth_(inst_4906)){
var statearr_4947_4970 = state_4932__$1;
(statearr_4947_4970[(1)] = (8));

} else {
var statearr_4948_4971 = state_4932__$1;
(statearr_4948_4971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4933 === (14))){
var inst_4925 = (state_4932[(2)]);
var inst_4926 = cljs.core.async.close_BANG_.call(null,out);
var state_4932__$1 = (function (){var statearr_4950 = state_4932;
(statearr_4950[(13)] = inst_4925);

return statearr_4950;
})();
var statearr_4951_4972 = state_4932__$1;
(statearr_4951_4972[(2)] = inst_4926);

(statearr_4951_4972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4933 === (10))){
var inst_4916 = (state_4932[(2)]);
var state_4932__$1 = state_4932;
var statearr_4952_4973 = state_4932__$1;
(statearr_4952_4973[(2)] = inst_4916);

(statearr_4952_4973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4933 === (8))){
var inst_4896 = (state_4932[(8)]);
var inst_4905 = (state_4932[(11)]);
var tmp4949 = inst_4896;
var inst_4896__$1 = tmp4949;
var inst_4897 = inst_4905;
var state_4932__$1 = (function (){var statearr_4953 = state_4932;
(statearr_4953[(7)] = inst_4897);

(statearr_4953[(8)] = inst_4896__$1);

return statearr_4953;
})();
var statearr_4954_4974 = state_4932__$1;
(statearr_4954_4974[(2)] = null);

(statearr_4954_4974[(1)] = (2));


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
});})(c__3158__auto___4960,out))
;
return ((function (switch__3070__auto__,c__3158__auto___4960,out){
return (function() {
var cljs$core$async$state_machine__3071__auto__ = null;
var cljs$core$async$state_machine__3071__auto____0 = (function (){
var statearr_4955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4955[(0)] = cljs$core$async$state_machine__3071__auto__);

(statearr_4955[(1)] = (1));

return statearr_4955;
});
var cljs$core$async$state_machine__3071__auto____1 = (function (state_4932){
while(true){
var ret_value__3072__auto__ = (function (){try{while(true){
var result__3073__auto__ = switch__3070__auto__.call(null,state_4932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3073__auto__;
}
break;
}
}catch (e4956){if((e4956 instanceof Object)){
var ex__3074__auto__ = e4956;
var statearr_4957_4975 = state_4932;
(statearr_4957_4975[(5)] = ex__3074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4976 = state_4932;
state_4932 = G__4976;
continue;
} else {
return ret_value__3072__auto__;
}
break;
}
});
cljs$core$async$state_machine__3071__auto__ = function(state_4932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3071__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3071__auto____1.call(this,state_4932);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3071__auto____0;
cljs$core$async$state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3071__auto____1;
return cljs$core$async$state_machine__3071__auto__;
})()
;})(switch__3070__auto__,c__3158__auto___4960,out))
})();
var state__3160__auto__ = (function (){var statearr_4958 = f__3159__auto__.call(null);
(statearr_4958[(6)] = c__3158__auto___4960);

return statearr_4958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3160__auto__);
});})(c__3158__auto___4960,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__4978 = arguments.length;
switch (G__4978) {
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
var c__3158__auto___5048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3158__auto___5048,out){
return (function (){
var f__3159__auto__ = (function (){var switch__3070__auto__ = ((function (c__3158__auto___5048,out){
return (function (state_5020){
var state_val_5021 = (state_5020[(1)]);
if((state_val_5021 === (7))){
var inst_5016 = (state_5020[(2)]);
var state_5020__$1 = state_5020;
var statearr_5022_5049 = state_5020__$1;
(statearr_5022_5049[(2)] = inst_5016);

(statearr_5022_5049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5021 === (1))){
var inst_4979 = [];
var inst_4980 = inst_4979;
var inst_4981 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_5020__$1 = (function (){var statearr_5023 = state_5020;
(statearr_5023[(7)] = inst_4981);

(statearr_5023[(8)] = inst_4980);

return statearr_5023;
})();
var statearr_5024_5050 = state_5020__$1;
(statearr_5024_5050[(2)] = null);

(statearr_5024_5050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5021 === (4))){
var inst_4984 = (state_5020[(9)]);
var inst_4984__$1 = (state_5020[(2)]);
var inst_4985 = (inst_4984__$1 == null);
var inst_4986 = cljs.core.not.call(null,inst_4985);
var state_5020__$1 = (function (){var statearr_5025 = state_5020;
(statearr_5025[(9)] = inst_4984__$1);

return statearr_5025;
})();
if(inst_4986){
var statearr_5026_5051 = state_5020__$1;
(statearr_5026_5051[(1)] = (5));

} else {
var statearr_5027_5052 = state_5020__$1;
(statearr_5027_5052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5021 === (15))){
var inst_5010 = (state_5020[(2)]);
var state_5020__$1 = state_5020;
var statearr_5028_5053 = state_5020__$1;
(statearr_5028_5053[(2)] = inst_5010);

(statearr_5028_5053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5021 === (13))){
var state_5020__$1 = state_5020;
var statearr_5029_5054 = state_5020__$1;
(statearr_5029_5054[(2)] = null);

(statearr_5029_5054[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5021 === (6))){
var inst_4980 = (state_5020[(8)]);
var inst_5005 = inst_4980.length;
var inst_5006 = (inst_5005 > (0));
var state_5020__$1 = state_5020;
if(cljs.core.truth_(inst_5006)){
var statearr_5030_5055 = state_5020__$1;
(statearr_5030_5055[(1)] = (12));

} else {
var statearr_5031_5056 = state_5020__$1;
(statearr_5031_5056[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5021 === (3))){
var inst_5018 = (state_5020[(2)]);
var state_5020__$1 = state_5020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5020__$1,inst_5018);
} else {
if((state_val_5021 === (12))){
var inst_4980 = (state_5020[(8)]);
var inst_5008 = cljs.core.vec.call(null,inst_4980);
var state_5020__$1 = state_5020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5020__$1,(15),out,inst_5008);
} else {
if((state_val_5021 === (2))){
var state_5020__$1 = state_5020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5020__$1,(4),ch);
} else {
if((state_val_5021 === (11))){
var inst_4988 = (state_5020[(10)]);
var inst_4984 = (state_5020[(9)]);
var inst_4998 = (state_5020[(2)]);
var inst_4999 = [];
var inst_5000 = inst_4999.push(inst_4984);
var inst_4980 = inst_4999;
var inst_4981 = inst_4988;
var state_5020__$1 = (function (){var statearr_5032 = state_5020;
(statearr_5032[(11)] = inst_5000);

(statearr_5032[(7)] = inst_4981);

(statearr_5032[(12)] = inst_4998);

(statearr_5032[(8)] = inst_4980);

return statearr_5032;
})();
var statearr_5033_5057 = state_5020__$1;
(statearr_5033_5057[(2)] = null);

(statearr_5033_5057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5021 === (9))){
var inst_4980 = (state_5020[(8)]);
var inst_4996 = cljs.core.vec.call(null,inst_4980);
var state_5020__$1 = state_5020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5020__$1,(11),out,inst_4996);
} else {
if((state_val_5021 === (5))){
var inst_4988 = (state_5020[(10)]);
var inst_4981 = (state_5020[(7)]);
var inst_4984 = (state_5020[(9)]);
var inst_4988__$1 = f.call(null,inst_4984);
var inst_4989 = cljs.core._EQ_.call(null,inst_4988__$1,inst_4981);
var inst_4990 = cljs.core.keyword_identical_QMARK_.call(null,inst_4981,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_4991 = ((inst_4989) || (inst_4990));
var state_5020__$1 = (function (){var statearr_5034 = state_5020;
(statearr_5034[(10)] = inst_4988__$1);

return statearr_5034;
})();
if(cljs.core.truth_(inst_4991)){
var statearr_5035_5058 = state_5020__$1;
(statearr_5035_5058[(1)] = (8));

} else {
var statearr_5036_5059 = state_5020__$1;
(statearr_5036_5059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5021 === (14))){
var inst_5013 = (state_5020[(2)]);
var inst_5014 = cljs.core.async.close_BANG_.call(null,out);
var state_5020__$1 = (function (){var statearr_5038 = state_5020;
(statearr_5038[(13)] = inst_5013);

return statearr_5038;
})();
var statearr_5039_5060 = state_5020__$1;
(statearr_5039_5060[(2)] = inst_5014);

(statearr_5039_5060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5021 === (10))){
var inst_5003 = (state_5020[(2)]);
var state_5020__$1 = state_5020;
var statearr_5040_5061 = state_5020__$1;
(statearr_5040_5061[(2)] = inst_5003);

(statearr_5040_5061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5021 === (8))){
var inst_4988 = (state_5020[(10)]);
var inst_4984 = (state_5020[(9)]);
var inst_4980 = (state_5020[(8)]);
var inst_4993 = inst_4980.push(inst_4984);
var tmp5037 = inst_4980;
var inst_4980__$1 = tmp5037;
var inst_4981 = inst_4988;
var state_5020__$1 = (function (){var statearr_5041 = state_5020;
(statearr_5041[(7)] = inst_4981);

(statearr_5041[(14)] = inst_4993);

(statearr_5041[(8)] = inst_4980__$1);

return statearr_5041;
})();
var statearr_5042_5062 = state_5020__$1;
(statearr_5042_5062[(2)] = null);

(statearr_5042_5062[(1)] = (2));


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
});})(c__3158__auto___5048,out))
;
return ((function (switch__3070__auto__,c__3158__auto___5048,out){
return (function() {
var cljs$core$async$state_machine__3071__auto__ = null;
var cljs$core$async$state_machine__3071__auto____0 = (function (){
var statearr_5043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5043[(0)] = cljs$core$async$state_machine__3071__auto__);

(statearr_5043[(1)] = (1));

return statearr_5043;
});
var cljs$core$async$state_machine__3071__auto____1 = (function (state_5020){
while(true){
var ret_value__3072__auto__ = (function (){try{while(true){
var result__3073__auto__ = switch__3070__auto__.call(null,state_5020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3073__auto__;
}
break;
}
}catch (e5044){if((e5044 instanceof Object)){
var ex__3074__auto__ = e5044;
var statearr_5045_5063 = state_5020;
(statearr_5045_5063[(5)] = ex__3074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5064 = state_5020;
state_5020 = G__5064;
continue;
} else {
return ret_value__3072__auto__;
}
break;
}
});
cljs$core$async$state_machine__3071__auto__ = function(state_5020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3071__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3071__auto____1.call(this,state_5020);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3071__auto____0;
cljs$core$async$state_machine__3071__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3071__auto____1;
return cljs$core$async$state_machine__3071__auto__;
})()
;})(switch__3070__auto__,c__3158__auto___5048,out))
})();
var state__3160__auto__ = (function (){var statearr_5046 = f__3159__auto__.call(null);
(statearr_5046[(6)] = c__3158__auto___5048);

return statearr_5046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3160__auto__);
});})(c__3158__auto___5048,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1529500723726
