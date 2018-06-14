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
var G__2777 = arguments.length;
switch (G__2777) {
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
if(typeof cljs.core.async.t_cljs$core$async2778 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2778 = (function (f,blockable,meta2779){
this.f = f;
this.blockable = blockable;
this.meta2779 = meta2779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async2778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2780,meta2779__$1){
var self__ = this;
var _2780__$1 = this;
return (new cljs.core.async.t_cljs$core$async2778(self__.f,self__.blockable,meta2779__$1));
});

cljs.core.async.t_cljs$core$async2778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2780){
var self__ = this;
var _2780__$1 = this;
return self__.meta2779;
});

cljs.core.async.t_cljs$core$async2778.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2778.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async2778.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async2778.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async2778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta2779","meta2779",922606338,null)], null);
});

cljs.core.async.t_cljs$core$async2778.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2778";

cljs.core.async.t_cljs$core$async2778.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async2778");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2778.
 */
cljs.core.async.__GT_t_cljs$core$async2778 = (function cljs$core$async$__GT_t_cljs$core$async2778(f__$1,blockable__$1,meta2779){
return (new cljs.core.async.t_cljs$core$async2778(f__$1,blockable__$1,meta2779));
});

}

return (new cljs.core.async.t_cljs$core$async2778(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__2784 = arguments.length;
switch (G__2784) {
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
var G__2787 = arguments.length;
switch (G__2787) {
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
var G__2790 = arguments.length;
switch (G__2790) {
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
var val_2792 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_2792);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_2792,ret){
return (function (){
return fn1.call(null,val_2792);
});})(val_2792,ret))
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
var G__2794 = arguments.length;
switch (G__2794) {
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
var n__4376__auto___2796 = n;
var x_2797 = (0);
while(true){
if((x_2797 < n__4376__auto___2796)){
(a[x_2797] = (0));

var G__2798 = (x_2797 + (1));
x_2797 = G__2798;
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

var G__2799 = (i + (1));
i = G__2799;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async2800 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2800 = (function (flag,meta2801){
this.flag = flag;
this.meta2801 = meta2801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async2800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_2802,meta2801__$1){
var self__ = this;
var _2802__$1 = this;
return (new cljs.core.async.t_cljs$core$async2800(self__.flag,meta2801__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async2800.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_2802){
var self__ = this;
var _2802__$1 = this;
return self__.meta2801;
});})(flag))
;

cljs.core.async.t_cljs$core$async2800.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2800.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async2800.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async2800.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async2800.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta2801","meta2801",-840304065,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async2800.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2800";

cljs.core.async.t_cljs$core$async2800.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async2800");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2800.
 */
cljs.core.async.__GT_t_cljs$core$async2800 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async2800(flag__$1,meta2801){
return (new cljs.core.async.t_cljs$core$async2800(flag__$1,meta2801));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async2800(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async2803 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2803 = (function (flag,cb,meta2804){
this.flag = flag;
this.cb = cb;
this.meta2804 = meta2804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async2803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2805,meta2804__$1){
var self__ = this;
var _2805__$1 = this;
return (new cljs.core.async.t_cljs$core$async2803(self__.flag,self__.cb,meta2804__$1));
});

cljs.core.async.t_cljs$core$async2803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2805){
var self__ = this;
var _2805__$1 = this;
return self__.meta2804;
});

cljs.core.async.t_cljs$core$async2803.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2803.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async2803.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async2803.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async2803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta2804","meta2804",725842455,null)], null);
});

cljs.core.async.t_cljs$core$async2803.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2803";

cljs.core.async.t_cljs$core$async2803.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async2803");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2803.
 */
cljs.core.async.__GT_t_cljs$core$async2803 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async2803(flag__$1,cb__$1,meta2804){
return (new cljs.core.async.t_cljs$core$async2803(flag__$1,cb__$1,meta2804));
});

}

return (new cljs.core.async.t_cljs$core$async2803(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__2806_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__2806_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__2807_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__2807_SHARP_,port], null));
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
var G__2808 = (i + (1));
i = G__2808;
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
var len__4499__auto___2814 = arguments.length;
var i__4500__auto___2815 = (0);
while(true){
if((i__4500__auto___2815 < len__4499__auto___2814)){
args__4502__auto__.push((arguments[i__4500__auto___2815]));

var G__2816 = (i__4500__auto___2815 + (1));
i__4500__auto___2815 = G__2816;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__2811){
var map__2812 = p__2811;
var map__2812__$1 = ((((!((map__2812 == null)))?(((((map__2812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2812):map__2812);
var opts = map__2812__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq2809){
var G__2810 = cljs.core.first.call(null,seq2809);
var seq2809__$1 = cljs.core.next.call(null,seq2809);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2810,seq2809__$1);
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
var G__2818 = arguments.length;
switch (G__2818) {
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
var c__2488__auto___2864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2488__auto___2864){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (c__2488__auto___2864){
return (function (state_2842){
var state_val_2843 = (state_2842[(1)]);
if((state_val_2843 === (7))){
var inst_2838 = (state_2842[(2)]);
var state_2842__$1 = state_2842;
var statearr_2844_2865 = state_2842__$1;
(statearr_2844_2865[(2)] = inst_2838);

(statearr_2844_2865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2843 === (1))){
var state_2842__$1 = state_2842;
var statearr_2845_2866 = state_2842__$1;
(statearr_2845_2866[(2)] = null);

(statearr_2845_2866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2843 === (4))){
var inst_2821 = (state_2842[(7)]);
var inst_2821__$1 = (state_2842[(2)]);
var inst_2822 = (inst_2821__$1 == null);
var state_2842__$1 = (function (){var statearr_2846 = state_2842;
(statearr_2846[(7)] = inst_2821__$1);

return statearr_2846;
})();
if(cljs.core.truth_(inst_2822)){
var statearr_2847_2867 = state_2842__$1;
(statearr_2847_2867[(1)] = (5));

} else {
var statearr_2848_2868 = state_2842__$1;
(statearr_2848_2868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2843 === (13))){
var state_2842__$1 = state_2842;
var statearr_2849_2869 = state_2842__$1;
(statearr_2849_2869[(2)] = null);

(statearr_2849_2869[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2843 === (6))){
var inst_2821 = (state_2842[(7)]);
var state_2842__$1 = state_2842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2842__$1,(11),to,inst_2821);
} else {
if((state_val_2843 === (3))){
var inst_2840 = (state_2842[(2)]);
var state_2842__$1 = state_2842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2842__$1,inst_2840);
} else {
if((state_val_2843 === (12))){
var state_2842__$1 = state_2842;
var statearr_2850_2870 = state_2842__$1;
(statearr_2850_2870[(2)] = null);

(statearr_2850_2870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2843 === (2))){
var state_2842__$1 = state_2842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2842__$1,(4),from);
} else {
if((state_val_2843 === (11))){
var inst_2831 = (state_2842[(2)]);
var state_2842__$1 = state_2842;
if(cljs.core.truth_(inst_2831)){
var statearr_2851_2871 = state_2842__$1;
(statearr_2851_2871[(1)] = (12));

} else {
var statearr_2852_2872 = state_2842__$1;
(statearr_2852_2872[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2843 === (9))){
var state_2842__$1 = state_2842;
var statearr_2853_2873 = state_2842__$1;
(statearr_2853_2873[(2)] = null);

(statearr_2853_2873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2843 === (5))){
var state_2842__$1 = state_2842;
if(cljs.core.truth_(close_QMARK_)){
var statearr_2854_2874 = state_2842__$1;
(statearr_2854_2874[(1)] = (8));

} else {
var statearr_2855_2875 = state_2842__$1;
(statearr_2855_2875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2843 === (14))){
var inst_2836 = (state_2842[(2)]);
var state_2842__$1 = state_2842;
var statearr_2856_2876 = state_2842__$1;
(statearr_2856_2876[(2)] = inst_2836);

(statearr_2856_2876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2843 === (10))){
var inst_2828 = (state_2842[(2)]);
var state_2842__$1 = state_2842;
var statearr_2857_2877 = state_2842__$1;
(statearr_2857_2877[(2)] = inst_2828);

(statearr_2857_2877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2843 === (8))){
var inst_2825 = cljs.core.async.close_BANG_.call(null,to);
var state_2842__$1 = state_2842;
var statearr_2858_2878 = state_2842__$1;
(statearr_2858_2878[(2)] = inst_2825);

(statearr_2858_2878[(1)] = (10));


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
});})(c__2488__auto___2864))
;
return ((function (switch__2473__auto__,c__2488__auto___2864){
return (function() {
var cljs$core$async$state_machine__2474__auto__ = null;
var cljs$core$async$state_machine__2474__auto____0 = (function (){
var statearr_2859 = [null,null,null,null,null,null,null,null];
(statearr_2859[(0)] = cljs$core$async$state_machine__2474__auto__);

(statearr_2859[(1)] = (1));

return statearr_2859;
});
var cljs$core$async$state_machine__2474__auto____1 = (function (state_2842){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_2842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e2860){if((e2860 instanceof Object)){
var ex__2477__auto__ = e2860;
var statearr_2861_2879 = state_2842;
(statearr_2861_2879[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2880 = state_2842;
state_2842 = G__2880;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
cljs$core$async$state_machine__2474__auto__ = function(state_2842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2474__auto____1.call(this,state_2842);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2474__auto____0;
cljs$core$async$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2474__auto____1;
return cljs$core$async$state_machine__2474__auto__;
})()
;})(switch__2473__auto__,c__2488__auto___2864))
})();
var state__2490__auto__ = (function (){var statearr_2862 = f__2489__auto__.call(null);
(statearr_2862[(6)] = c__2488__auto___2864);

return statearr_2862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(c__2488__auto___2864))
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
return (function (p__2881){
var vec__2882 = p__2881;
var v = cljs.core.nth.call(null,vec__2882,(0),null);
var p = cljs.core.nth.call(null,vec__2882,(1),null);
var job = vec__2882;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__2488__auto___3053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2488__auto___3053,res,vec__2882,v,p,job,jobs,results){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (c__2488__auto___3053,res,vec__2882,v,p,job,jobs,results){
return (function (state_2889){
var state_val_2890 = (state_2889[(1)]);
if((state_val_2890 === (1))){
var state_2889__$1 = state_2889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2889__$1,(2),res,v);
} else {
if((state_val_2890 === (2))){
var inst_2886 = (state_2889[(2)]);
var inst_2887 = cljs.core.async.close_BANG_.call(null,res);
var state_2889__$1 = (function (){var statearr_2891 = state_2889;
(statearr_2891[(7)] = inst_2886);

return statearr_2891;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2889__$1,inst_2887);
} else {
return null;
}
}
});})(c__2488__auto___3053,res,vec__2882,v,p,job,jobs,results))
;
return ((function (switch__2473__auto__,c__2488__auto___3053,res,vec__2882,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____0 = (function (){
var statearr_2892 = [null,null,null,null,null,null,null,null];
(statearr_2892[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__);

(statearr_2892[(1)] = (1));

return statearr_2892;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____1 = (function (state_2889){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_2889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e2893){if((e2893 instanceof Object)){
var ex__2477__auto__ = e2893;
var statearr_2894_3054 = state_2889;
(statearr_2894_3054[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3055 = state_2889;
state_2889 = G__3055;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__ = function(state_2889){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____1.call(this,state_2889);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__;
})()
;})(switch__2473__auto__,c__2488__auto___3053,res,vec__2882,v,p,job,jobs,results))
})();
var state__2490__auto__ = (function (){var statearr_2895 = f__2489__auto__.call(null);
(statearr_2895[(6)] = c__2488__auto___3053);

return statearr_2895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(c__2488__auto___3053,res,vec__2882,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__2896){
var vec__2897 = p__2896;
var v = cljs.core.nth.call(null,vec__2897,(0),null);
var p = cljs.core.nth.call(null,vec__2897,(1),null);
var job = vec__2897;
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
var n__4376__auto___3056 = n;
var __3057 = (0);
while(true){
if((__3057 < n__4376__auto___3056)){
var G__2900_3058 = type;
var G__2900_3059__$1 = (((G__2900_3058 instanceof cljs.core.Keyword))?G__2900_3058.fqn:null);
switch (G__2900_3059__$1) {
case "compute":
var c__2488__auto___3061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__3057,c__2488__auto___3061,G__2900_3058,G__2900_3059__$1,n__4376__auto___3056,jobs,results,process,async){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (__3057,c__2488__auto___3061,G__2900_3058,G__2900_3059__$1,n__4376__auto___3056,jobs,results,process,async){
return (function (state_2913){
var state_val_2914 = (state_2913[(1)]);
if((state_val_2914 === (1))){
var state_2913__$1 = state_2913;
var statearr_2915_3062 = state_2913__$1;
(statearr_2915_3062[(2)] = null);

(statearr_2915_3062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2914 === (2))){
var state_2913__$1 = state_2913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2913__$1,(4),jobs);
} else {
if((state_val_2914 === (3))){
var inst_2911 = (state_2913[(2)]);
var state_2913__$1 = state_2913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2913__$1,inst_2911);
} else {
if((state_val_2914 === (4))){
var inst_2903 = (state_2913[(2)]);
var inst_2904 = process.call(null,inst_2903);
var state_2913__$1 = state_2913;
if(cljs.core.truth_(inst_2904)){
var statearr_2916_3063 = state_2913__$1;
(statearr_2916_3063[(1)] = (5));

} else {
var statearr_2917_3064 = state_2913__$1;
(statearr_2917_3064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2914 === (5))){
var state_2913__$1 = state_2913;
var statearr_2918_3065 = state_2913__$1;
(statearr_2918_3065[(2)] = null);

(statearr_2918_3065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2914 === (6))){
var state_2913__$1 = state_2913;
var statearr_2919_3066 = state_2913__$1;
(statearr_2919_3066[(2)] = null);

(statearr_2919_3066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2914 === (7))){
var inst_2909 = (state_2913[(2)]);
var state_2913__$1 = state_2913;
var statearr_2920_3067 = state_2913__$1;
(statearr_2920_3067[(2)] = inst_2909);

(statearr_2920_3067[(1)] = (3));


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
});})(__3057,c__2488__auto___3061,G__2900_3058,G__2900_3059__$1,n__4376__auto___3056,jobs,results,process,async))
;
return ((function (__3057,switch__2473__auto__,c__2488__auto___3061,G__2900_3058,G__2900_3059__$1,n__4376__auto___3056,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____0 = (function (){
var statearr_2921 = [null,null,null,null,null,null,null];
(statearr_2921[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__);

(statearr_2921[(1)] = (1));

return statearr_2921;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____1 = (function (state_2913){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_2913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e2922){if((e2922 instanceof Object)){
var ex__2477__auto__ = e2922;
var statearr_2923_3068 = state_2913;
(statearr_2923_3068[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3069 = state_2913;
state_2913 = G__3069;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__ = function(state_2913){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____1.call(this,state_2913);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__;
})()
;})(__3057,switch__2473__auto__,c__2488__auto___3061,G__2900_3058,G__2900_3059__$1,n__4376__auto___3056,jobs,results,process,async))
})();
var state__2490__auto__ = (function (){var statearr_2924 = f__2489__auto__.call(null);
(statearr_2924[(6)] = c__2488__auto___3061);

return statearr_2924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(__3057,c__2488__auto___3061,G__2900_3058,G__2900_3059__$1,n__4376__auto___3056,jobs,results,process,async))
);


break;
case "async":
var c__2488__auto___3070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__3057,c__2488__auto___3070,G__2900_3058,G__2900_3059__$1,n__4376__auto___3056,jobs,results,process,async){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (__3057,c__2488__auto___3070,G__2900_3058,G__2900_3059__$1,n__4376__auto___3056,jobs,results,process,async){
return (function (state_2937){
var state_val_2938 = (state_2937[(1)]);
if((state_val_2938 === (1))){
var state_2937__$1 = state_2937;
var statearr_2939_3071 = state_2937__$1;
(statearr_2939_3071[(2)] = null);

(statearr_2939_3071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2938 === (2))){
var state_2937__$1 = state_2937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2937__$1,(4),jobs);
} else {
if((state_val_2938 === (3))){
var inst_2935 = (state_2937[(2)]);
var state_2937__$1 = state_2937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2937__$1,inst_2935);
} else {
if((state_val_2938 === (4))){
var inst_2927 = (state_2937[(2)]);
var inst_2928 = async.call(null,inst_2927);
var state_2937__$1 = state_2937;
if(cljs.core.truth_(inst_2928)){
var statearr_2940_3072 = state_2937__$1;
(statearr_2940_3072[(1)] = (5));

} else {
var statearr_2941_3073 = state_2937__$1;
(statearr_2941_3073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2938 === (5))){
var state_2937__$1 = state_2937;
var statearr_2942_3074 = state_2937__$1;
(statearr_2942_3074[(2)] = null);

(statearr_2942_3074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2938 === (6))){
var state_2937__$1 = state_2937;
var statearr_2943_3075 = state_2937__$1;
(statearr_2943_3075[(2)] = null);

(statearr_2943_3075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2938 === (7))){
var inst_2933 = (state_2937[(2)]);
var state_2937__$1 = state_2937;
var statearr_2944_3076 = state_2937__$1;
(statearr_2944_3076[(2)] = inst_2933);

(statearr_2944_3076[(1)] = (3));


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
});})(__3057,c__2488__auto___3070,G__2900_3058,G__2900_3059__$1,n__4376__auto___3056,jobs,results,process,async))
;
return ((function (__3057,switch__2473__auto__,c__2488__auto___3070,G__2900_3058,G__2900_3059__$1,n__4376__auto___3056,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____0 = (function (){
var statearr_2945 = [null,null,null,null,null,null,null];
(statearr_2945[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__);

(statearr_2945[(1)] = (1));

return statearr_2945;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____1 = (function (state_2937){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_2937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e2946){if((e2946 instanceof Object)){
var ex__2477__auto__ = e2946;
var statearr_2947_3077 = state_2937;
(statearr_2947_3077[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3078 = state_2937;
state_2937 = G__3078;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__ = function(state_2937){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____1.call(this,state_2937);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__;
})()
;})(__3057,switch__2473__auto__,c__2488__auto___3070,G__2900_3058,G__2900_3059__$1,n__4376__auto___3056,jobs,results,process,async))
})();
var state__2490__auto__ = (function (){var statearr_2948 = f__2489__auto__.call(null);
(statearr_2948[(6)] = c__2488__auto___3070);

return statearr_2948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(__3057,c__2488__auto___3070,G__2900_3058,G__2900_3059__$1,n__4376__auto___3056,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__2900_3059__$1)].join('')));

}

var G__3079 = (__3057 + (1));
__3057 = G__3079;
continue;
} else {
}
break;
}

var c__2488__auto___3080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2488__auto___3080,jobs,results,process,async){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (c__2488__auto___3080,jobs,results,process,async){
return (function (state_2970){
var state_val_2971 = (state_2970[(1)]);
if((state_val_2971 === (1))){
var state_2970__$1 = state_2970;
var statearr_2972_3081 = state_2970__$1;
(statearr_2972_3081[(2)] = null);

(statearr_2972_3081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2971 === (2))){
var state_2970__$1 = state_2970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2970__$1,(4),from);
} else {
if((state_val_2971 === (3))){
var inst_2968 = (state_2970[(2)]);
var state_2970__$1 = state_2970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2970__$1,inst_2968);
} else {
if((state_val_2971 === (4))){
var inst_2951 = (state_2970[(7)]);
var inst_2951__$1 = (state_2970[(2)]);
var inst_2952 = (inst_2951__$1 == null);
var state_2970__$1 = (function (){var statearr_2973 = state_2970;
(statearr_2973[(7)] = inst_2951__$1);

return statearr_2973;
})();
if(cljs.core.truth_(inst_2952)){
var statearr_2974_3082 = state_2970__$1;
(statearr_2974_3082[(1)] = (5));

} else {
var statearr_2975_3083 = state_2970__$1;
(statearr_2975_3083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2971 === (5))){
var inst_2954 = cljs.core.async.close_BANG_.call(null,jobs);
var state_2970__$1 = state_2970;
var statearr_2976_3084 = state_2970__$1;
(statearr_2976_3084[(2)] = inst_2954);

(statearr_2976_3084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2971 === (6))){
var inst_2951 = (state_2970[(7)]);
var inst_2956 = (state_2970[(8)]);
var inst_2956__$1 = cljs.core.async.chan.call(null,(1));
var inst_2957 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2958 = [inst_2951,inst_2956__$1];
var inst_2959 = (new cljs.core.PersistentVector(null,2,(5),inst_2957,inst_2958,null));
var state_2970__$1 = (function (){var statearr_2977 = state_2970;
(statearr_2977[(8)] = inst_2956__$1);

return statearr_2977;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2970__$1,(8),jobs,inst_2959);
} else {
if((state_val_2971 === (7))){
var inst_2966 = (state_2970[(2)]);
var state_2970__$1 = state_2970;
var statearr_2978_3085 = state_2970__$1;
(statearr_2978_3085[(2)] = inst_2966);

(statearr_2978_3085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2971 === (8))){
var inst_2956 = (state_2970[(8)]);
var inst_2961 = (state_2970[(2)]);
var state_2970__$1 = (function (){var statearr_2979 = state_2970;
(statearr_2979[(9)] = inst_2961);

return statearr_2979;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2970__$1,(9),results,inst_2956);
} else {
if((state_val_2971 === (9))){
var inst_2963 = (state_2970[(2)]);
var state_2970__$1 = (function (){var statearr_2980 = state_2970;
(statearr_2980[(10)] = inst_2963);

return statearr_2980;
})();
var statearr_2981_3086 = state_2970__$1;
(statearr_2981_3086[(2)] = null);

(statearr_2981_3086[(1)] = (2));


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
});})(c__2488__auto___3080,jobs,results,process,async))
;
return ((function (switch__2473__auto__,c__2488__auto___3080,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____0 = (function (){
var statearr_2982 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_2982[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__);

(statearr_2982[(1)] = (1));

return statearr_2982;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____1 = (function (state_2970){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_2970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e2983){if((e2983 instanceof Object)){
var ex__2477__auto__ = e2983;
var statearr_2984_3087 = state_2970;
(statearr_2984_3087[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3088 = state_2970;
state_2970 = G__3088;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__ = function(state_2970){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____1.call(this,state_2970);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__;
})()
;})(switch__2473__auto__,c__2488__auto___3080,jobs,results,process,async))
})();
var state__2490__auto__ = (function (){var statearr_2985 = f__2489__auto__.call(null);
(statearr_2985[(6)] = c__2488__auto___3080);

return statearr_2985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(c__2488__auto___3080,jobs,results,process,async))
);


var c__2488__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2488__auto__,jobs,results,process,async){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (c__2488__auto__,jobs,results,process,async){
return (function (state_3023){
var state_val_3024 = (state_3023[(1)]);
if((state_val_3024 === (7))){
var inst_3019 = (state_3023[(2)]);
var state_3023__$1 = state_3023;
var statearr_3025_3089 = state_3023__$1;
(statearr_3025_3089[(2)] = inst_3019);

(statearr_3025_3089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3024 === (20))){
var state_3023__$1 = state_3023;
var statearr_3026_3090 = state_3023__$1;
(statearr_3026_3090[(2)] = null);

(statearr_3026_3090[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3024 === (1))){
var state_3023__$1 = state_3023;
var statearr_3027_3091 = state_3023__$1;
(statearr_3027_3091[(2)] = null);

(statearr_3027_3091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3024 === (4))){
var inst_2988 = (state_3023[(7)]);
var inst_2988__$1 = (state_3023[(2)]);
var inst_2989 = (inst_2988__$1 == null);
var state_3023__$1 = (function (){var statearr_3028 = state_3023;
(statearr_3028[(7)] = inst_2988__$1);

return statearr_3028;
})();
if(cljs.core.truth_(inst_2989)){
var statearr_3029_3092 = state_3023__$1;
(statearr_3029_3092[(1)] = (5));

} else {
var statearr_3030_3093 = state_3023__$1;
(statearr_3030_3093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3024 === (15))){
var inst_3001 = (state_3023[(8)]);
var state_3023__$1 = state_3023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3023__$1,(18),to,inst_3001);
} else {
if((state_val_3024 === (21))){
var inst_3014 = (state_3023[(2)]);
var state_3023__$1 = state_3023;
var statearr_3031_3094 = state_3023__$1;
(statearr_3031_3094[(2)] = inst_3014);

(statearr_3031_3094[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3024 === (13))){
var inst_3016 = (state_3023[(2)]);
var state_3023__$1 = (function (){var statearr_3032 = state_3023;
(statearr_3032[(9)] = inst_3016);

return statearr_3032;
})();
var statearr_3033_3095 = state_3023__$1;
(statearr_3033_3095[(2)] = null);

(statearr_3033_3095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3024 === (6))){
var inst_2988 = (state_3023[(7)]);
var state_3023__$1 = state_3023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3023__$1,(11),inst_2988);
} else {
if((state_val_3024 === (17))){
var inst_3009 = (state_3023[(2)]);
var state_3023__$1 = state_3023;
if(cljs.core.truth_(inst_3009)){
var statearr_3034_3096 = state_3023__$1;
(statearr_3034_3096[(1)] = (19));

} else {
var statearr_3035_3097 = state_3023__$1;
(statearr_3035_3097[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3024 === (3))){
var inst_3021 = (state_3023[(2)]);
var state_3023__$1 = state_3023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3023__$1,inst_3021);
} else {
if((state_val_3024 === (12))){
var inst_2998 = (state_3023[(10)]);
var state_3023__$1 = state_3023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3023__$1,(14),inst_2998);
} else {
if((state_val_3024 === (2))){
var state_3023__$1 = state_3023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3023__$1,(4),results);
} else {
if((state_val_3024 === (19))){
var state_3023__$1 = state_3023;
var statearr_3036_3098 = state_3023__$1;
(statearr_3036_3098[(2)] = null);

(statearr_3036_3098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3024 === (11))){
var inst_2998 = (state_3023[(2)]);
var state_3023__$1 = (function (){var statearr_3037 = state_3023;
(statearr_3037[(10)] = inst_2998);

return statearr_3037;
})();
var statearr_3038_3099 = state_3023__$1;
(statearr_3038_3099[(2)] = null);

(statearr_3038_3099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3024 === (9))){
var state_3023__$1 = state_3023;
var statearr_3039_3100 = state_3023__$1;
(statearr_3039_3100[(2)] = null);

(statearr_3039_3100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3024 === (5))){
var state_3023__$1 = state_3023;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3040_3101 = state_3023__$1;
(statearr_3040_3101[(1)] = (8));

} else {
var statearr_3041_3102 = state_3023__$1;
(statearr_3041_3102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3024 === (14))){
var inst_3001 = (state_3023[(8)]);
var inst_3003 = (state_3023[(11)]);
var inst_3001__$1 = (state_3023[(2)]);
var inst_3002 = (inst_3001__$1 == null);
var inst_3003__$1 = cljs.core.not.call(null,inst_3002);
var state_3023__$1 = (function (){var statearr_3042 = state_3023;
(statearr_3042[(8)] = inst_3001__$1);

(statearr_3042[(11)] = inst_3003__$1);

return statearr_3042;
})();
if(inst_3003__$1){
var statearr_3043_3103 = state_3023__$1;
(statearr_3043_3103[(1)] = (15));

} else {
var statearr_3044_3104 = state_3023__$1;
(statearr_3044_3104[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3024 === (16))){
var inst_3003 = (state_3023[(11)]);
var state_3023__$1 = state_3023;
var statearr_3045_3105 = state_3023__$1;
(statearr_3045_3105[(2)] = inst_3003);

(statearr_3045_3105[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3024 === (10))){
var inst_2995 = (state_3023[(2)]);
var state_3023__$1 = state_3023;
var statearr_3046_3106 = state_3023__$1;
(statearr_3046_3106[(2)] = inst_2995);

(statearr_3046_3106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3024 === (18))){
var inst_3006 = (state_3023[(2)]);
var state_3023__$1 = state_3023;
var statearr_3047_3107 = state_3023__$1;
(statearr_3047_3107[(2)] = inst_3006);

(statearr_3047_3107[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3024 === (8))){
var inst_2992 = cljs.core.async.close_BANG_.call(null,to);
var state_3023__$1 = state_3023;
var statearr_3048_3108 = state_3023__$1;
(statearr_3048_3108[(2)] = inst_2992);

(statearr_3048_3108[(1)] = (10));


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
});})(c__2488__auto__,jobs,results,process,async))
;
return ((function (switch__2473__auto__,c__2488__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____0 = (function (){
var statearr_3049 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3049[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__);

(statearr_3049[(1)] = (1));

return statearr_3049;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____1 = (function (state_3023){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_3023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e3050){if((e3050 instanceof Object)){
var ex__2477__auto__ = e3050;
var statearr_3051_3109 = state_3023;
(statearr_3051_3109[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3110 = state_3023;
state_3023 = G__3110;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__ = function(state_3023){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____1.call(this,state_3023);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2474__auto__;
})()
;})(switch__2473__auto__,c__2488__auto__,jobs,results,process,async))
})();
var state__2490__auto__ = (function (){var statearr_3052 = f__2489__auto__.call(null);
(statearr_3052[(6)] = c__2488__auto__);

return statearr_3052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(c__2488__auto__,jobs,results,process,async))
);

return c__2488__auto__;
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
var G__3112 = arguments.length;
switch (G__3112) {
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
var G__3115 = arguments.length;
switch (G__3115) {
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
var G__3118 = arguments.length;
switch (G__3118) {
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
var c__2488__auto___3167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2488__auto___3167,tc,fc){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (c__2488__auto___3167,tc,fc){
return (function (state_3144){
var state_val_3145 = (state_3144[(1)]);
if((state_val_3145 === (7))){
var inst_3140 = (state_3144[(2)]);
var state_3144__$1 = state_3144;
var statearr_3146_3168 = state_3144__$1;
(statearr_3146_3168[(2)] = inst_3140);

(statearr_3146_3168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3145 === (1))){
var state_3144__$1 = state_3144;
var statearr_3147_3169 = state_3144__$1;
(statearr_3147_3169[(2)] = null);

(statearr_3147_3169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3145 === (4))){
var inst_3121 = (state_3144[(7)]);
var inst_3121__$1 = (state_3144[(2)]);
var inst_3122 = (inst_3121__$1 == null);
var state_3144__$1 = (function (){var statearr_3148 = state_3144;
(statearr_3148[(7)] = inst_3121__$1);

return statearr_3148;
})();
if(cljs.core.truth_(inst_3122)){
var statearr_3149_3170 = state_3144__$1;
(statearr_3149_3170[(1)] = (5));

} else {
var statearr_3150_3171 = state_3144__$1;
(statearr_3150_3171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3145 === (13))){
var state_3144__$1 = state_3144;
var statearr_3151_3172 = state_3144__$1;
(statearr_3151_3172[(2)] = null);

(statearr_3151_3172[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3145 === (6))){
var inst_3121 = (state_3144[(7)]);
var inst_3127 = p.call(null,inst_3121);
var state_3144__$1 = state_3144;
if(cljs.core.truth_(inst_3127)){
var statearr_3152_3173 = state_3144__$1;
(statearr_3152_3173[(1)] = (9));

} else {
var statearr_3153_3174 = state_3144__$1;
(statearr_3153_3174[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3145 === (3))){
var inst_3142 = (state_3144[(2)]);
var state_3144__$1 = state_3144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3144__$1,inst_3142);
} else {
if((state_val_3145 === (12))){
var state_3144__$1 = state_3144;
var statearr_3154_3175 = state_3144__$1;
(statearr_3154_3175[(2)] = null);

(statearr_3154_3175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3145 === (2))){
var state_3144__$1 = state_3144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3144__$1,(4),ch);
} else {
if((state_val_3145 === (11))){
var inst_3121 = (state_3144[(7)]);
var inst_3131 = (state_3144[(2)]);
var state_3144__$1 = state_3144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3144__$1,(8),inst_3131,inst_3121);
} else {
if((state_val_3145 === (9))){
var state_3144__$1 = state_3144;
var statearr_3155_3176 = state_3144__$1;
(statearr_3155_3176[(2)] = tc);

(statearr_3155_3176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3145 === (5))){
var inst_3124 = cljs.core.async.close_BANG_.call(null,tc);
var inst_3125 = cljs.core.async.close_BANG_.call(null,fc);
var state_3144__$1 = (function (){var statearr_3156 = state_3144;
(statearr_3156[(8)] = inst_3124);

return statearr_3156;
})();
var statearr_3157_3177 = state_3144__$1;
(statearr_3157_3177[(2)] = inst_3125);

(statearr_3157_3177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3145 === (14))){
var inst_3138 = (state_3144[(2)]);
var state_3144__$1 = state_3144;
var statearr_3158_3178 = state_3144__$1;
(statearr_3158_3178[(2)] = inst_3138);

(statearr_3158_3178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3145 === (10))){
var state_3144__$1 = state_3144;
var statearr_3159_3179 = state_3144__$1;
(statearr_3159_3179[(2)] = fc);

(statearr_3159_3179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3145 === (8))){
var inst_3133 = (state_3144[(2)]);
var state_3144__$1 = state_3144;
if(cljs.core.truth_(inst_3133)){
var statearr_3160_3180 = state_3144__$1;
(statearr_3160_3180[(1)] = (12));

} else {
var statearr_3161_3181 = state_3144__$1;
(statearr_3161_3181[(1)] = (13));

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
});})(c__2488__auto___3167,tc,fc))
;
return ((function (switch__2473__auto__,c__2488__auto___3167,tc,fc){
return (function() {
var cljs$core$async$state_machine__2474__auto__ = null;
var cljs$core$async$state_machine__2474__auto____0 = (function (){
var statearr_3162 = [null,null,null,null,null,null,null,null,null];
(statearr_3162[(0)] = cljs$core$async$state_machine__2474__auto__);

(statearr_3162[(1)] = (1));

return statearr_3162;
});
var cljs$core$async$state_machine__2474__auto____1 = (function (state_3144){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_3144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e3163){if((e3163 instanceof Object)){
var ex__2477__auto__ = e3163;
var statearr_3164_3182 = state_3144;
(statearr_3164_3182[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3183 = state_3144;
state_3144 = G__3183;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
cljs$core$async$state_machine__2474__auto__ = function(state_3144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2474__auto____1.call(this,state_3144);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2474__auto____0;
cljs$core$async$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2474__auto____1;
return cljs$core$async$state_machine__2474__auto__;
})()
;})(switch__2473__auto__,c__2488__auto___3167,tc,fc))
})();
var state__2490__auto__ = (function (){var statearr_3165 = f__2489__auto__.call(null);
(statearr_3165[(6)] = c__2488__auto___3167);

return statearr_3165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(c__2488__auto___3167,tc,fc))
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
var c__2488__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2488__auto__){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (c__2488__auto__){
return (function (state_3204){
var state_val_3205 = (state_3204[(1)]);
if((state_val_3205 === (7))){
var inst_3200 = (state_3204[(2)]);
var state_3204__$1 = state_3204;
var statearr_3206_3224 = state_3204__$1;
(statearr_3206_3224[(2)] = inst_3200);

(statearr_3206_3224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3205 === (1))){
var inst_3184 = init;
var state_3204__$1 = (function (){var statearr_3207 = state_3204;
(statearr_3207[(7)] = inst_3184);

return statearr_3207;
})();
var statearr_3208_3225 = state_3204__$1;
(statearr_3208_3225[(2)] = null);

(statearr_3208_3225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3205 === (4))){
var inst_3187 = (state_3204[(8)]);
var inst_3187__$1 = (state_3204[(2)]);
var inst_3188 = (inst_3187__$1 == null);
var state_3204__$1 = (function (){var statearr_3209 = state_3204;
(statearr_3209[(8)] = inst_3187__$1);

return statearr_3209;
})();
if(cljs.core.truth_(inst_3188)){
var statearr_3210_3226 = state_3204__$1;
(statearr_3210_3226[(1)] = (5));

} else {
var statearr_3211_3227 = state_3204__$1;
(statearr_3211_3227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3205 === (6))){
var inst_3187 = (state_3204[(8)]);
var inst_3191 = (state_3204[(9)]);
var inst_3184 = (state_3204[(7)]);
var inst_3191__$1 = f.call(null,inst_3184,inst_3187);
var inst_3192 = cljs.core.reduced_QMARK_.call(null,inst_3191__$1);
var state_3204__$1 = (function (){var statearr_3212 = state_3204;
(statearr_3212[(9)] = inst_3191__$1);

return statearr_3212;
})();
if(inst_3192){
var statearr_3213_3228 = state_3204__$1;
(statearr_3213_3228[(1)] = (8));

} else {
var statearr_3214_3229 = state_3204__$1;
(statearr_3214_3229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3205 === (3))){
var inst_3202 = (state_3204[(2)]);
var state_3204__$1 = state_3204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3204__$1,inst_3202);
} else {
if((state_val_3205 === (2))){
var state_3204__$1 = state_3204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3204__$1,(4),ch);
} else {
if((state_val_3205 === (9))){
var inst_3191 = (state_3204[(9)]);
var inst_3184 = inst_3191;
var state_3204__$1 = (function (){var statearr_3215 = state_3204;
(statearr_3215[(7)] = inst_3184);

return statearr_3215;
})();
var statearr_3216_3230 = state_3204__$1;
(statearr_3216_3230[(2)] = null);

(statearr_3216_3230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3205 === (5))){
var inst_3184 = (state_3204[(7)]);
var state_3204__$1 = state_3204;
var statearr_3217_3231 = state_3204__$1;
(statearr_3217_3231[(2)] = inst_3184);

(statearr_3217_3231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3205 === (10))){
var inst_3198 = (state_3204[(2)]);
var state_3204__$1 = state_3204;
var statearr_3218_3232 = state_3204__$1;
(statearr_3218_3232[(2)] = inst_3198);

(statearr_3218_3232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3205 === (8))){
var inst_3191 = (state_3204[(9)]);
var inst_3194 = cljs.core.deref.call(null,inst_3191);
var state_3204__$1 = state_3204;
var statearr_3219_3233 = state_3204__$1;
(statearr_3219_3233[(2)] = inst_3194);

(statearr_3219_3233[(1)] = (10));


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
});})(c__2488__auto__))
;
return ((function (switch__2473__auto__,c__2488__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__2474__auto__ = null;
var cljs$core$async$reduce_$_state_machine__2474__auto____0 = (function (){
var statearr_3220 = [null,null,null,null,null,null,null,null,null,null];
(statearr_3220[(0)] = cljs$core$async$reduce_$_state_machine__2474__auto__);

(statearr_3220[(1)] = (1));

return statearr_3220;
});
var cljs$core$async$reduce_$_state_machine__2474__auto____1 = (function (state_3204){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_3204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e3221){if((e3221 instanceof Object)){
var ex__2477__auto__ = e3221;
var statearr_3222_3234 = state_3204;
(statearr_3222_3234[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3235 = state_3204;
state_3204 = G__3235;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__2474__auto__ = function(state_3204){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__2474__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__2474__auto____1.call(this,state_3204);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__2474__auto____0;
cljs$core$async$reduce_$_state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__2474__auto____1;
return cljs$core$async$reduce_$_state_machine__2474__auto__;
})()
;})(switch__2473__auto__,c__2488__auto__))
})();
var state__2490__auto__ = (function (){var statearr_3223 = f__2489__auto__.call(null);
(statearr_3223[(6)] = c__2488__auto__);

return statearr_3223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(c__2488__auto__))
);

return c__2488__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__2488__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2488__auto__,f__$1){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (c__2488__auto__,f__$1){
return (function (state_3241){
var state_val_3242 = (state_3241[(1)]);
if((state_val_3242 === (1))){
var inst_3236 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_3241__$1 = state_3241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3241__$1,(2),inst_3236);
} else {
if((state_val_3242 === (2))){
var inst_3238 = (state_3241[(2)]);
var inst_3239 = f__$1.call(null,inst_3238);
var state_3241__$1 = state_3241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3241__$1,inst_3239);
} else {
return null;
}
}
});})(c__2488__auto__,f__$1))
;
return ((function (switch__2473__auto__,c__2488__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__2474__auto__ = null;
var cljs$core$async$transduce_$_state_machine__2474__auto____0 = (function (){
var statearr_3243 = [null,null,null,null,null,null,null];
(statearr_3243[(0)] = cljs$core$async$transduce_$_state_machine__2474__auto__);

(statearr_3243[(1)] = (1));

return statearr_3243;
});
var cljs$core$async$transduce_$_state_machine__2474__auto____1 = (function (state_3241){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_3241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e3244){if((e3244 instanceof Object)){
var ex__2477__auto__ = e3244;
var statearr_3245_3247 = state_3241;
(statearr_3245_3247[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3248 = state_3241;
state_3241 = G__3248;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__2474__auto__ = function(state_3241){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__2474__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__2474__auto____1.call(this,state_3241);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__2474__auto____0;
cljs$core$async$transduce_$_state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__2474__auto____1;
return cljs$core$async$transduce_$_state_machine__2474__auto__;
})()
;})(switch__2473__auto__,c__2488__auto__,f__$1))
})();
var state__2490__auto__ = (function (){var statearr_3246 = f__2489__auto__.call(null);
(statearr_3246[(6)] = c__2488__auto__);

return statearr_3246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(c__2488__auto__,f__$1))
);

return c__2488__auto__;
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
var G__3250 = arguments.length;
switch (G__3250) {
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
var c__2488__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2488__auto__){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (c__2488__auto__){
return (function (state_3275){
var state_val_3276 = (state_3275[(1)]);
if((state_val_3276 === (7))){
var inst_3257 = (state_3275[(2)]);
var state_3275__$1 = state_3275;
var statearr_3277_3298 = state_3275__$1;
(statearr_3277_3298[(2)] = inst_3257);

(statearr_3277_3298[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3276 === (1))){
var inst_3251 = cljs.core.seq.call(null,coll);
var inst_3252 = inst_3251;
var state_3275__$1 = (function (){var statearr_3278 = state_3275;
(statearr_3278[(7)] = inst_3252);

return statearr_3278;
})();
var statearr_3279_3299 = state_3275__$1;
(statearr_3279_3299[(2)] = null);

(statearr_3279_3299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3276 === (4))){
var inst_3252 = (state_3275[(7)]);
var inst_3255 = cljs.core.first.call(null,inst_3252);
var state_3275__$1 = state_3275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3275__$1,(7),ch,inst_3255);
} else {
if((state_val_3276 === (13))){
var inst_3269 = (state_3275[(2)]);
var state_3275__$1 = state_3275;
var statearr_3280_3300 = state_3275__$1;
(statearr_3280_3300[(2)] = inst_3269);

(statearr_3280_3300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3276 === (6))){
var inst_3260 = (state_3275[(2)]);
var state_3275__$1 = state_3275;
if(cljs.core.truth_(inst_3260)){
var statearr_3281_3301 = state_3275__$1;
(statearr_3281_3301[(1)] = (8));

} else {
var statearr_3282_3302 = state_3275__$1;
(statearr_3282_3302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3276 === (3))){
var inst_3273 = (state_3275[(2)]);
var state_3275__$1 = state_3275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3275__$1,inst_3273);
} else {
if((state_val_3276 === (12))){
var state_3275__$1 = state_3275;
var statearr_3283_3303 = state_3275__$1;
(statearr_3283_3303[(2)] = null);

(statearr_3283_3303[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3276 === (2))){
var inst_3252 = (state_3275[(7)]);
var state_3275__$1 = state_3275;
if(cljs.core.truth_(inst_3252)){
var statearr_3284_3304 = state_3275__$1;
(statearr_3284_3304[(1)] = (4));

} else {
var statearr_3285_3305 = state_3275__$1;
(statearr_3285_3305[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3276 === (11))){
var inst_3266 = cljs.core.async.close_BANG_.call(null,ch);
var state_3275__$1 = state_3275;
var statearr_3286_3306 = state_3275__$1;
(statearr_3286_3306[(2)] = inst_3266);

(statearr_3286_3306[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3276 === (9))){
var state_3275__$1 = state_3275;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3287_3307 = state_3275__$1;
(statearr_3287_3307[(1)] = (11));

} else {
var statearr_3288_3308 = state_3275__$1;
(statearr_3288_3308[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3276 === (5))){
var inst_3252 = (state_3275[(7)]);
var state_3275__$1 = state_3275;
var statearr_3289_3309 = state_3275__$1;
(statearr_3289_3309[(2)] = inst_3252);

(statearr_3289_3309[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3276 === (10))){
var inst_3271 = (state_3275[(2)]);
var state_3275__$1 = state_3275;
var statearr_3290_3310 = state_3275__$1;
(statearr_3290_3310[(2)] = inst_3271);

(statearr_3290_3310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3276 === (8))){
var inst_3252 = (state_3275[(7)]);
var inst_3262 = cljs.core.next.call(null,inst_3252);
var inst_3252__$1 = inst_3262;
var state_3275__$1 = (function (){var statearr_3291 = state_3275;
(statearr_3291[(7)] = inst_3252__$1);

return statearr_3291;
})();
var statearr_3292_3311 = state_3275__$1;
(statearr_3292_3311[(2)] = null);

(statearr_3292_3311[(1)] = (2));


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
});})(c__2488__auto__))
;
return ((function (switch__2473__auto__,c__2488__auto__){
return (function() {
var cljs$core$async$state_machine__2474__auto__ = null;
var cljs$core$async$state_machine__2474__auto____0 = (function (){
var statearr_3293 = [null,null,null,null,null,null,null,null];
(statearr_3293[(0)] = cljs$core$async$state_machine__2474__auto__);

(statearr_3293[(1)] = (1));

return statearr_3293;
});
var cljs$core$async$state_machine__2474__auto____1 = (function (state_3275){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_3275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e3294){if((e3294 instanceof Object)){
var ex__2477__auto__ = e3294;
var statearr_3295_3312 = state_3275;
(statearr_3295_3312[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3313 = state_3275;
state_3275 = G__3313;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
cljs$core$async$state_machine__2474__auto__ = function(state_3275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2474__auto____1.call(this,state_3275);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2474__auto____0;
cljs$core$async$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2474__auto____1;
return cljs$core$async$state_machine__2474__auto__;
})()
;})(switch__2473__auto__,c__2488__auto__))
})();
var state__2490__auto__ = (function (){var statearr_3296 = f__2489__auto__.call(null);
(statearr_3296[(6)] = c__2488__auto__);

return statearr_3296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(c__2488__auto__))
);

return c__2488__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async3314 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3314 = (function (ch,cs,meta3315){
this.ch = ch;
this.cs = cs;
this.meta3315 = meta3315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_3316,meta3315__$1){
var self__ = this;
var _3316__$1 = this;
return (new cljs.core.async.t_cljs$core$async3314(self__.ch,self__.cs,meta3315__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async3314.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_3316){
var self__ = this;
var _3316__$1 = this;
return self__.meta3315;
});})(cs))
;

cljs.core.async.t_cljs$core$async3314.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3314.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async3314.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3314.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3314.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3314.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3314.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta3315","meta3315",-1713204769,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async3314.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3314";

cljs.core.async.t_cljs$core$async3314.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3314");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3314.
 */
cljs.core.async.__GT_t_cljs$core$async3314 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async3314(ch__$1,cs__$1,meta3315){
return (new cljs.core.async.t_cljs$core$async3314(ch__$1,cs__$1,meta3315));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async3314(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__2488__auto___3536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2488__auto___3536,cs,m,dchan,dctr,done){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (c__2488__auto___3536,cs,m,dchan,dctr,done){
return (function (state_3451){
var state_val_3452 = (state_3451[(1)]);
if((state_val_3452 === (7))){
var inst_3447 = (state_3451[(2)]);
var state_3451__$1 = state_3451;
var statearr_3453_3537 = state_3451__$1;
(statearr_3453_3537[(2)] = inst_3447);

(statearr_3453_3537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (20))){
var inst_3350 = (state_3451[(7)]);
var inst_3362 = cljs.core.first.call(null,inst_3350);
var inst_3363 = cljs.core.nth.call(null,inst_3362,(0),null);
var inst_3364 = cljs.core.nth.call(null,inst_3362,(1),null);
var state_3451__$1 = (function (){var statearr_3454 = state_3451;
(statearr_3454[(8)] = inst_3363);

return statearr_3454;
})();
if(cljs.core.truth_(inst_3364)){
var statearr_3455_3538 = state_3451__$1;
(statearr_3455_3538[(1)] = (22));

} else {
var statearr_3456_3539 = state_3451__$1;
(statearr_3456_3539[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (27))){
var inst_3394 = (state_3451[(9)]);
var inst_3399 = (state_3451[(10)]);
var inst_3319 = (state_3451[(11)]);
var inst_3392 = (state_3451[(12)]);
var inst_3399__$1 = cljs.core._nth.call(null,inst_3392,inst_3394);
var inst_3400 = cljs.core.async.put_BANG_.call(null,inst_3399__$1,inst_3319,done);
var state_3451__$1 = (function (){var statearr_3457 = state_3451;
(statearr_3457[(10)] = inst_3399__$1);

return statearr_3457;
})();
if(cljs.core.truth_(inst_3400)){
var statearr_3458_3540 = state_3451__$1;
(statearr_3458_3540[(1)] = (30));

} else {
var statearr_3459_3541 = state_3451__$1;
(statearr_3459_3541[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (1))){
var state_3451__$1 = state_3451;
var statearr_3460_3542 = state_3451__$1;
(statearr_3460_3542[(2)] = null);

(statearr_3460_3542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (24))){
var inst_3350 = (state_3451[(7)]);
var inst_3369 = (state_3451[(2)]);
var inst_3370 = cljs.core.next.call(null,inst_3350);
var inst_3328 = inst_3370;
var inst_3329 = null;
var inst_3330 = (0);
var inst_3331 = (0);
var state_3451__$1 = (function (){var statearr_3461 = state_3451;
(statearr_3461[(13)] = inst_3328);

(statearr_3461[(14)] = inst_3331);

(statearr_3461[(15)] = inst_3329);

(statearr_3461[(16)] = inst_3369);

(statearr_3461[(17)] = inst_3330);

return statearr_3461;
})();
var statearr_3462_3543 = state_3451__$1;
(statearr_3462_3543[(2)] = null);

(statearr_3462_3543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (39))){
var state_3451__$1 = state_3451;
var statearr_3466_3544 = state_3451__$1;
(statearr_3466_3544[(2)] = null);

(statearr_3466_3544[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (4))){
var inst_3319 = (state_3451[(11)]);
var inst_3319__$1 = (state_3451[(2)]);
var inst_3320 = (inst_3319__$1 == null);
var state_3451__$1 = (function (){var statearr_3467 = state_3451;
(statearr_3467[(11)] = inst_3319__$1);

return statearr_3467;
})();
if(cljs.core.truth_(inst_3320)){
var statearr_3468_3545 = state_3451__$1;
(statearr_3468_3545[(1)] = (5));

} else {
var statearr_3469_3546 = state_3451__$1;
(statearr_3469_3546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (15))){
var inst_3328 = (state_3451[(13)]);
var inst_3331 = (state_3451[(14)]);
var inst_3329 = (state_3451[(15)]);
var inst_3330 = (state_3451[(17)]);
var inst_3346 = (state_3451[(2)]);
var inst_3347 = (inst_3331 + (1));
var tmp3463 = inst_3328;
var tmp3464 = inst_3329;
var tmp3465 = inst_3330;
var inst_3328__$1 = tmp3463;
var inst_3329__$1 = tmp3464;
var inst_3330__$1 = tmp3465;
var inst_3331__$1 = inst_3347;
var state_3451__$1 = (function (){var statearr_3470 = state_3451;
(statearr_3470[(13)] = inst_3328__$1);

(statearr_3470[(14)] = inst_3331__$1);

(statearr_3470[(15)] = inst_3329__$1);

(statearr_3470[(18)] = inst_3346);

(statearr_3470[(17)] = inst_3330__$1);

return statearr_3470;
})();
var statearr_3471_3547 = state_3451__$1;
(statearr_3471_3547[(2)] = null);

(statearr_3471_3547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (21))){
var inst_3373 = (state_3451[(2)]);
var state_3451__$1 = state_3451;
var statearr_3475_3548 = state_3451__$1;
(statearr_3475_3548[(2)] = inst_3373);

(statearr_3475_3548[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (31))){
var inst_3399 = (state_3451[(10)]);
var inst_3403 = done.call(null,null);
var inst_3404 = cljs.core.async.untap_STAR_.call(null,m,inst_3399);
var state_3451__$1 = (function (){var statearr_3476 = state_3451;
(statearr_3476[(19)] = inst_3403);

return statearr_3476;
})();
var statearr_3477_3549 = state_3451__$1;
(statearr_3477_3549[(2)] = inst_3404);

(statearr_3477_3549[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (32))){
var inst_3393 = (state_3451[(20)]);
var inst_3394 = (state_3451[(9)]);
var inst_3391 = (state_3451[(21)]);
var inst_3392 = (state_3451[(12)]);
var inst_3406 = (state_3451[(2)]);
var inst_3407 = (inst_3394 + (1));
var tmp3472 = inst_3393;
var tmp3473 = inst_3391;
var tmp3474 = inst_3392;
var inst_3391__$1 = tmp3473;
var inst_3392__$1 = tmp3474;
var inst_3393__$1 = tmp3472;
var inst_3394__$1 = inst_3407;
var state_3451__$1 = (function (){var statearr_3478 = state_3451;
(statearr_3478[(20)] = inst_3393__$1);

(statearr_3478[(9)] = inst_3394__$1);

(statearr_3478[(22)] = inst_3406);

(statearr_3478[(21)] = inst_3391__$1);

(statearr_3478[(12)] = inst_3392__$1);

return statearr_3478;
})();
var statearr_3479_3550 = state_3451__$1;
(statearr_3479_3550[(2)] = null);

(statearr_3479_3550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (40))){
var inst_3419 = (state_3451[(23)]);
var inst_3423 = done.call(null,null);
var inst_3424 = cljs.core.async.untap_STAR_.call(null,m,inst_3419);
var state_3451__$1 = (function (){var statearr_3480 = state_3451;
(statearr_3480[(24)] = inst_3423);

return statearr_3480;
})();
var statearr_3481_3551 = state_3451__$1;
(statearr_3481_3551[(2)] = inst_3424);

(statearr_3481_3551[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (33))){
var inst_3410 = (state_3451[(25)]);
var inst_3412 = cljs.core.chunked_seq_QMARK_.call(null,inst_3410);
var state_3451__$1 = state_3451;
if(inst_3412){
var statearr_3482_3552 = state_3451__$1;
(statearr_3482_3552[(1)] = (36));

} else {
var statearr_3483_3553 = state_3451__$1;
(statearr_3483_3553[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (13))){
var inst_3340 = (state_3451[(26)]);
var inst_3343 = cljs.core.async.close_BANG_.call(null,inst_3340);
var state_3451__$1 = state_3451;
var statearr_3484_3554 = state_3451__$1;
(statearr_3484_3554[(2)] = inst_3343);

(statearr_3484_3554[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (22))){
var inst_3363 = (state_3451[(8)]);
var inst_3366 = cljs.core.async.close_BANG_.call(null,inst_3363);
var state_3451__$1 = state_3451;
var statearr_3485_3555 = state_3451__$1;
(statearr_3485_3555[(2)] = inst_3366);

(statearr_3485_3555[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (36))){
var inst_3410 = (state_3451[(25)]);
var inst_3414 = cljs.core.chunk_first.call(null,inst_3410);
var inst_3415 = cljs.core.chunk_rest.call(null,inst_3410);
var inst_3416 = cljs.core.count.call(null,inst_3414);
var inst_3391 = inst_3415;
var inst_3392 = inst_3414;
var inst_3393 = inst_3416;
var inst_3394 = (0);
var state_3451__$1 = (function (){var statearr_3486 = state_3451;
(statearr_3486[(20)] = inst_3393);

(statearr_3486[(9)] = inst_3394);

(statearr_3486[(21)] = inst_3391);

(statearr_3486[(12)] = inst_3392);

return statearr_3486;
})();
var statearr_3487_3556 = state_3451__$1;
(statearr_3487_3556[(2)] = null);

(statearr_3487_3556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (41))){
var inst_3410 = (state_3451[(25)]);
var inst_3426 = (state_3451[(2)]);
var inst_3427 = cljs.core.next.call(null,inst_3410);
var inst_3391 = inst_3427;
var inst_3392 = null;
var inst_3393 = (0);
var inst_3394 = (0);
var state_3451__$1 = (function (){var statearr_3488 = state_3451;
(statearr_3488[(20)] = inst_3393);

(statearr_3488[(9)] = inst_3394);

(statearr_3488[(21)] = inst_3391);

(statearr_3488[(27)] = inst_3426);

(statearr_3488[(12)] = inst_3392);

return statearr_3488;
})();
var statearr_3489_3557 = state_3451__$1;
(statearr_3489_3557[(2)] = null);

(statearr_3489_3557[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (43))){
var state_3451__$1 = state_3451;
var statearr_3490_3558 = state_3451__$1;
(statearr_3490_3558[(2)] = null);

(statearr_3490_3558[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (29))){
var inst_3435 = (state_3451[(2)]);
var state_3451__$1 = state_3451;
var statearr_3491_3559 = state_3451__$1;
(statearr_3491_3559[(2)] = inst_3435);

(statearr_3491_3559[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (44))){
var inst_3444 = (state_3451[(2)]);
var state_3451__$1 = (function (){var statearr_3492 = state_3451;
(statearr_3492[(28)] = inst_3444);

return statearr_3492;
})();
var statearr_3493_3560 = state_3451__$1;
(statearr_3493_3560[(2)] = null);

(statearr_3493_3560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (6))){
var inst_3383 = (state_3451[(29)]);
var inst_3382 = cljs.core.deref.call(null,cs);
var inst_3383__$1 = cljs.core.keys.call(null,inst_3382);
var inst_3384 = cljs.core.count.call(null,inst_3383__$1);
var inst_3385 = cljs.core.reset_BANG_.call(null,dctr,inst_3384);
var inst_3390 = cljs.core.seq.call(null,inst_3383__$1);
var inst_3391 = inst_3390;
var inst_3392 = null;
var inst_3393 = (0);
var inst_3394 = (0);
var state_3451__$1 = (function (){var statearr_3494 = state_3451;
(statearr_3494[(20)] = inst_3393);

(statearr_3494[(9)] = inst_3394);

(statearr_3494[(29)] = inst_3383__$1);

(statearr_3494[(30)] = inst_3385);

(statearr_3494[(21)] = inst_3391);

(statearr_3494[(12)] = inst_3392);

return statearr_3494;
})();
var statearr_3495_3561 = state_3451__$1;
(statearr_3495_3561[(2)] = null);

(statearr_3495_3561[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (28))){
var inst_3391 = (state_3451[(21)]);
var inst_3410 = (state_3451[(25)]);
var inst_3410__$1 = cljs.core.seq.call(null,inst_3391);
var state_3451__$1 = (function (){var statearr_3496 = state_3451;
(statearr_3496[(25)] = inst_3410__$1);

return statearr_3496;
})();
if(inst_3410__$1){
var statearr_3497_3562 = state_3451__$1;
(statearr_3497_3562[(1)] = (33));

} else {
var statearr_3498_3563 = state_3451__$1;
(statearr_3498_3563[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (25))){
var inst_3393 = (state_3451[(20)]);
var inst_3394 = (state_3451[(9)]);
var inst_3396 = (inst_3394 < inst_3393);
var inst_3397 = inst_3396;
var state_3451__$1 = state_3451;
if(cljs.core.truth_(inst_3397)){
var statearr_3499_3564 = state_3451__$1;
(statearr_3499_3564[(1)] = (27));

} else {
var statearr_3500_3565 = state_3451__$1;
(statearr_3500_3565[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (34))){
var state_3451__$1 = state_3451;
var statearr_3501_3566 = state_3451__$1;
(statearr_3501_3566[(2)] = null);

(statearr_3501_3566[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (17))){
var state_3451__$1 = state_3451;
var statearr_3502_3567 = state_3451__$1;
(statearr_3502_3567[(2)] = null);

(statearr_3502_3567[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (3))){
var inst_3449 = (state_3451[(2)]);
var state_3451__$1 = state_3451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3451__$1,inst_3449);
} else {
if((state_val_3452 === (12))){
var inst_3378 = (state_3451[(2)]);
var state_3451__$1 = state_3451;
var statearr_3503_3568 = state_3451__$1;
(statearr_3503_3568[(2)] = inst_3378);

(statearr_3503_3568[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (2))){
var state_3451__$1 = state_3451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3451__$1,(4),ch);
} else {
if((state_val_3452 === (23))){
var state_3451__$1 = state_3451;
var statearr_3504_3569 = state_3451__$1;
(statearr_3504_3569[(2)] = null);

(statearr_3504_3569[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (35))){
var inst_3433 = (state_3451[(2)]);
var state_3451__$1 = state_3451;
var statearr_3505_3570 = state_3451__$1;
(statearr_3505_3570[(2)] = inst_3433);

(statearr_3505_3570[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (19))){
var inst_3350 = (state_3451[(7)]);
var inst_3354 = cljs.core.chunk_first.call(null,inst_3350);
var inst_3355 = cljs.core.chunk_rest.call(null,inst_3350);
var inst_3356 = cljs.core.count.call(null,inst_3354);
var inst_3328 = inst_3355;
var inst_3329 = inst_3354;
var inst_3330 = inst_3356;
var inst_3331 = (0);
var state_3451__$1 = (function (){var statearr_3506 = state_3451;
(statearr_3506[(13)] = inst_3328);

(statearr_3506[(14)] = inst_3331);

(statearr_3506[(15)] = inst_3329);

(statearr_3506[(17)] = inst_3330);

return statearr_3506;
})();
var statearr_3507_3571 = state_3451__$1;
(statearr_3507_3571[(2)] = null);

(statearr_3507_3571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (11))){
var inst_3328 = (state_3451[(13)]);
var inst_3350 = (state_3451[(7)]);
var inst_3350__$1 = cljs.core.seq.call(null,inst_3328);
var state_3451__$1 = (function (){var statearr_3508 = state_3451;
(statearr_3508[(7)] = inst_3350__$1);

return statearr_3508;
})();
if(inst_3350__$1){
var statearr_3509_3572 = state_3451__$1;
(statearr_3509_3572[(1)] = (16));

} else {
var statearr_3510_3573 = state_3451__$1;
(statearr_3510_3573[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (9))){
var inst_3380 = (state_3451[(2)]);
var state_3451__$1 = state_3451;
var statearr_3511_3574 = state_3451__$1;
(statearr_3511_3574[(2)] = inst_3380);

(statearr_3511_3574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (5))){
var inst_3326 = cljs.core.deref.call(null,cs);
var inst_3327 = cljs.core.seq.call(null,inst_3326);
var inst_3328 = inst_3327;
var inst_3329 = null;
var inst_3330 = (0);
var inst_3331 = (0);
var state_3451__$1 = (function (){var statearr_3512 = state_3451;
(statearr_3512[(13)] = inst_3328);

(statearr_3512[(14)] = inst_3331);

(statearr_3512[(15)] = inst_3329);

(statearr_3512[(17)] = inst_3330);

return statearr_3512;
})();
var statearr_3513_3575 = state_3451__$1;
(statearr_3513_3575[(2)] = null);

(statearr_3513_3575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (14))){
var state_3451__$1 = state_3451;
var statearr_3514_3576 = state_3451__$1;
(statearr_3514_3576[(2)] = null);

(statearr_3514_3576[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (45))){
var inst_3441 = (state_3451[(2)]);
var state_3451__$1 = state_3451;
var statearr_3515_3577 = state_3451__$1;
(statearr_3515_3577[(2)] = inst_3441);

(statearr_3515_3577[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (26))){
var inst_3383 = (state_3451[(29)]);
var inst_3437 = (state_3451[(2)]);
var inst_3438 = cljs.core.seq.call(null,inst_3383);
var state_3451__$1 = (function (){var statearr_3516 = state_3451;
(statearr_3516[(31)] = inst_3437);

return statearr_3516;
})();
if(inst_3438){
var statearr_3517_3578 = state_3451__$1;
(statearr_3517_3578[(1)] = (42));

} else {
var statearr_3518_3579 = state_3451__$1;
(statearr_3518_3579[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (16))){
var inst_3350 = (state_3451[(7)]);
var inst_3352 = cljs.core.chunked_seq_QMARK_.call(null,inst_3350);
var state_3451__$1 = state_3451;
if(inst_3352){
var statearr_3519_3580 = state_3451__$1;
(statearr_3519_3580[(1)] = (19));

} else {
var statearr_3520_3581 = state_3451__$1;
(statearr_3520_3581[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (38))){
var inst_3430 = (state_3451[(2)]);
var state_3451__$1 = state_3451;
var statearr_3521_3582 = state_3451__$1;
(statearr_3521_3582[(2)] = inst_3430);

(statearr_3521_3582[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (30))){
var state_3451__$1 = state_3451;
var statearr_3522_3583 = state_3451__$1;
(statearr_3522_3583[(2)] = null);

(statearr_3522_3583[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (10))){
var inst_3331 = (state_3451[(14)]);
var inst_3329 = (state_3451[(15)]);
var inst_3339 = cljs.core._nth.call(null,inst_3329,inst_3331);
var inst_3340 = cljs.core.nth.call(null,inst_3339,(0),null);
var inst_3341 = cljs.core.nth.call(null,inst_3339,(1),null);
var state_3451__$1 = (function (){var statearr_3523 = state_3451;
(statearr_3523[(26)] = inst_3340);

return statearr_3523;
})();
if(cljs.core.truth_(inst_3341)){
var statearr_3524_3584 = state_3451__$1;
(statearr_3524_3584[(1)] = (13));

} else {
var statearr_3525_3585 = state_3451__$1;
(statearr_3525_3585[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (18))){
var inst_3376 = (state_3451[(2)]);
var state_3451__$1 = state_3451;
var statearr_3526_3586 = state_3451__$1;
(statearr_3526_3586[(2)] = inst_3376);

(statearr_3526_3586[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (42))){
var state_3451__$1 = state_3451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3451__$1,(45),dchan);
} else {
if((state_val_3452 === (37))){
var inst_3419 = (state_3451[(23)]);
var inst_3319 = (state_3451[(11)]);
var inst_3410 = (state_3451[(25)]);
var inst_3419__$1 = cljs.core.first.call(null,inst_3410);
var inst_3420 = cljs.core.async.put_BANG_.call(null,inst_3419__$1,inst_3319,done);
var state_3451__$1 = (function (){var statearr_3527 = state_3451;
(statearr_3527[(23)] = inst_3419__$1);

return statearr_3527;
})();
if(cljs.core.truth_(inst_3420)){
var statearr_3528_3587 = state_3451__$1;
(statearr_3528_3587[(1)] = (39));

} else {
var statearr_3529_3588 = state_3451__$1;
(statearr_3529_3588[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3452 === (8))){
var inst_3331 = (state_3451[(14)]);
var inst_3330 = (state_3451[(17)]);
var inst_3333 = (inst_3331 < inst_3330);
var inst_3334 = inst_3333;
var state_3451__$1 = state_3451;
if(cljs.core.truth_(inst_3334)){
var statearr_3530_3589 = state_3451__$1;
(statearr_3530_3589[(1)] = (10));

} else {
var statearr_3531_3590 = state_3451__$1;
(statearr_3531_3590[(1)] = (11));

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
});})(c__2488__auto___3536,cs,m,dchan,dctr,done))
;
return ((function (switch__2473__auto__,c__2488__auto___3536,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__2474__auto__ = null;
var cljs$core$async$mult_$_state_machine__2474__auto____0 = (function (){
var statearr_3532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3532[(0)] = cljs$core$async$mult_$_state_machine__2474__auto__);

(statearr_3532[(1)] = (1));

return statearr_3532;
});
var cljs$core$async$mult_$_state_machine__2474__auto____1 = (function (state_3451){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_3451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e3533){if((e3533 instanceof Object)){
var ex__2477__auto__ = e3533;
var statearr_3534_3591 = state_3451;
(statearr_3534_3591[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3592 = state_3451;
state_3451 = G__3592;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__2474__auto__ = function(state_3451){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__2474__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__2474__auto____1.call(this,state_3451);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__2474__auto____0;
cljs$core$async$mult_$_state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__2474__auto____1;
return cljs$core$async$mult_$_state_machine__2474__auto__;
})()
;})(switch__2473__auto__,c__2488__auto___3536,cs,m,dchan,dctr,done))
})();
var state__2490__auto__ = (function (){var statearr_3535 = f__2489__auto__.call(null);
(statearr_3535[(6)] = c__2488__auto___3536);

return statearr_3535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(c__2488__auto___3536,cs,m,dchan,dctr,done))
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
var G__3594 = arguments.length;
switch (G__3594) {
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
var len__4499__auto___3606 = arguments.length;
var i__4500__auto___3607 = (0);
while(true){
if((i__4500__auto___3607 < len__4499__auto___3606)){
args__4502__auto__.push((arguments[i__4500__auto___3607]));

var G__3608 = (i__4500__auto___3607 + (1));
i__4500__auto___3607 = G__3608;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__3600){
var map__3601 = p__3600;
var map__3601__$1 = ((((!((map__3601 == null)))?(((((map__3601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3601):map__3601);
var opts = map__3601__$1;
var statearr_3603_3609 = state;
(statearr_3603_3609[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__3601,map__3601__$1,opts){
return (function (val){
var statearr_3604_3610 = state;
(statearr_3604_3610[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__3601,map__3601__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_3605_3611 = state;
(statearr_3605_3611[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq3596){
var G__3597 = cljs.core.first.call(null,seq3596);
var seq3596__$1 = cljs.core.next.call(null,seq3596);
var G__3598 = cljs.core.first.call(null,seq3596__$1);
var seq3596__$2 = cljs.core.next.call(null,seq3596__$1);
var G__3599 = cljs.core.first.call(null,seq3596__$2);
var seq3596__$3 = cljs.core.next.call(null,seq3596__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3597,G__3598,G__3599,seq3596__$3);
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
if(typeof cljs.core.async.t_cljs$core$async3612 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3612 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta3613){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta3613 = meta3613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_3614,meta3613__$1){
var self__ = this;
var _3614__$1 = this;
return (new cljs.core.async.t_cljs$core$async3612(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta3613__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3612.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_3614){
var self__ = this;
var _3614__$1 = this;
return self__.meta3613;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3612.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3612.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3612.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3612.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3612.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3612.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3612.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3612.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async3612.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta3613","meta3613",-758364711,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3612.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3612";

cljs.core.async.t_cljs$core$async3612.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3612");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3612.
 */
cljs.core.async.__GT_t_cljs$core$async3612 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async3612(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta3613){
return (new cljs.core.async.t_cljs$core$async3612(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta3613));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async3612(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2488__auto___3776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2488__auto___3776,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (c__2488__auto___3776,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_3716){
var state_val_3717 = (state_3716[(1)]);
if((state_val_3717 === (7))){
var inst_3631 = (state_3716[(2)]);
var state_3716__$1 = state_3716;
var statearr_3718_3777 = state_3716__$1;
(statearr_3718_3777[(2)] = inst_3631);

(statearr_3718_3777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (20))){
var inst_3643 = (state_3716[(7)]);
var state_3716__$1 = state_3716;
var statearr_3719_3778 = state_3716__$1;
(statearr_3719_3778[(2)] = inst_3643);

(statearr_3719_3778[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (27))){
var state_3716__$1 = state_3716;
var statearr_3720_3779 = state_3716__$1;
(statearr_3720_3779[(2)] = null);

(statearr_3720_3779[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (1))){
var inst_3618 = (state_3716[(8)]);
var inst_3618__$1 = calc_state.call(null);
var inst_3620 = (inst_3618__$1 == null);
var inst_3621 = cljs.core.not.call(null,inst_3620);
var state_3716__$1 = (function (){var statearr_3721 = state_3716;
(statearr_3721[(8)] = inst_3618__$1);

return statearr_3721;
})();
if(inst_3621){
var statearr_3722_3780 = state_3716__$1;
(statearr_3722_3780[(1)] = (2));

} else {
var statearr_3723_3781 = state_3716__$1;
(statearr_3723_3781[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (24))){
var inst_3690 = (state_3716[(9)]);
var inst_3667 = (state_3716[(10)]);
var inst_3676 = (state_3716[(11)]);
var inst_3690__$1 = inst_3667.call(null,inst_3676);
var state_3716__$1 = (function (){var statearr_3724 = state_3716;
(statearr_3724[(9)] = inst_3690__$1);

return statearr_3724;
})();
if(cljs.core.truth_(inst_3690__$1)){
var statearr_3725_3782 = state_3716__$1;
(statearr_3725_3782[(1)] = (29));

} else {
var statearr_3726_3783 = state_3716__$1;
(statearr_3726_3783[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (4))){
var inst_3634 = (state_3716[(2)]);
var state_3716__$1 = state_3716;
if(cljs.core.truth_(inst_3634)){
var statearr_3727_3784 = state_3716__$1;
(statearr_3727_3784[(1)] = (8));

} else {
var statearr_3728_3785 = state_3716__$1;
(statearr_3728_3785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (15))){
var inst_3661 = (state_3716[(2)]);
var state_3716__$1 = state_3716;
if(cljs.core.truth_(inst_3661)){
var statearr_3729_3786 = state_3716__$1;
(statearr_3729_3786[(1)] = (19));

} else {
var statearr_3730_3787 = state_3716__$1;
(statearr_3730_3787[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (21))){
var inst_3666 = (state_3716[(12)]);
var inst_3666__$1 = (state_3716[(2)]);
var inst_3667 = cljs.core.get.call(null,inst_3666__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_3668 = cljs.core.get.call(null,inst_3666__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_3669 = cljs.core.get.call(null,inst_3666__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_3716__$1 = (function (){var statearr_3731 = state_3716;
(statearr_3731[(13)] = inst_3668);

(statearr_3731[(12)] = inst_3666__$1);

(statearr_3731[(10)] = inst_3667);

return statearr_3731;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_3716__$1,(22),inst_3669);
} else {
if((state_val_3717 === (31))){
var inst_3698 = (state_3716[(2)]);
var state_3716__$1 = state_3716;
if(cljs.core.truth_(inst_3698)){
var statearr_3732_3788 = state_3716__$1;
(statearr_3732_3788[(1)] = (32));

} else {
var statearr_3733_3789 = state_3716__$1;
(statearr_3733_3789[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (32))){
var inst_3675 = (state_3716[(14)]);
var state_3716__$1 = state_3716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3716__$1,(35),out,inst_3675);
} else {
if((state_val_3717 === (33))){
var inst_3666 = (state_3716[(12)]);
var inst_3643 = inst_3666;
var state_3716__$1 = (function (){var statearr_3734 = state_3716;
(statearr_3734[(7)] = inst_3643);

return statearr_3734;
})();
var statearr_3735_3790 = state_3716__$1;
(statearr_3735_3790[(2)] = null);

(statearr_3735_3790[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (13))){
var inst_3643 = (state_3716[(7)]);
var inst_3650 = inst_3643.cljs$lang$protocol_mask$partition0$;
var inst_3651 = (inst_3650 & (64));
var inst_3652 = inst_3643.cljs$core$ISeq$;
var inst_3653 = (cljs.core.PROTOCOL_SENTINEL === inst_3652);
var inst_3654 = ((inst_3651) || (inst_3653));
var state_3716__$1 = state_3716;
if(cljs.core.truth_(inst_3654)){
var statearr_3736_3791 = state_3716__$1;
(statearr_3736_3791[(1)] = (16));

} else {
var statearr_3737_3792 = state_3716__$1;
(statearr_3737_3792[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (22))){
var inst_3675 = (state_3716[(14)]);
var inst_3676 = (state_3716[(11)]);
var inst_3674 = (state_3716[(2)]);
var inst_3675__$1 = cljs.core.nth.call(null,inst_3674,(0),null);
var inst_3676__$1 = cljs.core.nth.call(null,inst_3674,(1),null);
var inst_3677 = (inst_3675__$1 == null);
var inst_3678 = cljs.core._EQ_.call(null,inst_3676__$1,change);
var inst_3679 = ((inst_3677) || (inst_3678));
var state_3716__$1 = (function (){var statearr_3738 = state_3716;
(statearr_3738[(14)] = inst_3675__$1);

(statearr_3738[(11)] = inst_3676__$1);

return statearr_3738;
})();
if(cljs.core.truth_(inst_3679)){
var statearr_3739_3793 = state_3716__$1;
(statearr_3739_3793[(1)] = (23));

} else {
var statearr_3740_3794 = state_3716__$1;
(statearr_3740_3794[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (36))){
var inst_3666 = (state_3716[(12)]);
var inst_3643 = inst_3666;
var state_3716__$1 = (function (){var statearr_3741 = state_3716;
(statearr_3741[(7)] = inst_3643);

return statearr_3741;
})();
var statearr_3742_3795 = state_3716__$1;
(statearr_3742_3795[(2)] = null);

(statearr_3742_3795[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (29))){
var inst_3690 = (state_3716[(9)]);
var state_3716__$1 = state_3716;
var statearr_3743_3796 = state_3716__$1;
(statearr_3743_3796[(2)] = inst_3690);

(statearr_3743_3796[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (6))){
var state_3716__$1 = state_3716;
var statearr_3744_3797 = state_3716__$1;
(statearr_3744_3797[(2)] = false);

(statearr_3744_3797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (28))){
var inst_3686 = (state_3716[(2)]);
var inst_3687 = calc_state.call(null);
var inst_3643 = inst_3687;
var state_3716__$1 = (function (){var statearr_3745 = state_3716;
(statearr_3745[(15)] = inst_3686);

(statearr_3745[(7)] = inst_3643);

return statearr_3745;
})();
var statearr_3746_3798 = state_3716__$1;
(statearr_3746_3798[(2)] = null);

(statearr_3746_3798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (25))){
var inst_3712 = (state_3716[(2)]);
var state_3716__$1 = state_3716;
var statearr_3747_3799 = state_3716__$1;
(statearr_3747_3799[(2)] = inst_3712);

(statearr_3747_3799[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (34))){
var inst_3710 = (state_3716[(2)]);
var state_3716__$1 = state_3716;
var statearr_3748_3800 = state_3716__$1;
(statearr_3748_3800[(2)] = inst_3710);

(statearr_3748_3800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (17))){
var state_3716__$1 = state_3716;
var statearr_3749_3801 = state_3716__$1;
(statearr_3749_3801[(2)] = false);

(statearr_3749_3801[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (3))){
var state_3716__$1 = state_3716;
var statearr_3750_3802 = state_3716__$1;
(statearr_3750_3802[(2)] = false);

(statearr_3750_3802[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (12))){
var inst_3714 = (state_3716[(2)]);
var state_3716__$1 = state_3716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3716__$1,inst_3714);
} else {
if((state_val_3717 === (2))){
var inst_3618 = (state_3716[(8)]);
var inst_3623 = inst_3618.cljs$lang$protocol_mask$partition0$;
var inst_3624 = (inst_3623 & (64));
var inst_3625 = inst_3618.cljs$core$ISeq$;
var inst_3626 = (cljs.core.PROTOCOL_SENTINEL === inst_3625);
var inst_3627 = ((inst_3624) || (inst_3626));
var state_3716__$1 = state_3716;
if(cljs.core.truth_(inst_3627)){
var statearr_3751_3803 = state_3716__$1;
(statearr_3751_3803[(1)] = (5));

} else {
var statearr_3752_3804 = state_3716__$1;
(statearr_3752_3804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (23))){
var inst_3675 = (state_3716[(14)]);
var inst_3681 = (inst_3675 == null);
var state_3716__$1 = state_3716;
if(cljs.core.truth_(inst_3681)){
var statearr_3753_3805 = state_3716__$1;
(statearr_3753_3805[(1)] = (26));

} else {
var statearr_3754_3806 = state_3716__$1;
(statearr_3754_3806[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (35))){
var inst_3701 = (state_3716[(2)]);
var state_3716__$1 = state_3716;
if(cljs.core.truth_(inst_3701)){
var statearr_3755_3807 = state_3716__$1;
(statearr_3755_3807[(1)] = (36));

} else {
var statearr_3756_3808 = state_3716__$1;
(statearr_3756_3808[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (19))){
var inst_3643 = (state_3716[(7)]);
var inst_3663 = cljs.core.apply.call(null,cljs.core.hash_map,inst_3643);
var state_3716__$1 = state_3716;
var statearr_3757_3809 = state_3716__$1;
(statearr_3757_3809[(2)] = inst_3663);

(statearr_3757_3809[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (11))){
var inst_3643 = (state_3716[(7)]);
var inst_3647 = (inst_3643 == null);
var inst_3648 = cljs.core.not.call(null,inst_3647);
var state_3716__$1 = state_3716;
if(inst_3648){
var statearr_3758_3810 = state_3716__$1;
(statearr_3758_3810[(1)] = (13));

} else {
var statearr_3759_3811 = state_3716__$1;
(statearr_3759_3811[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (9))){
var inst_3618 = (state_3716[(8)]);
var state_3716__$1 = state_3716;
var statearr_3760_3812 = state_3716__$1;
(statearr_3760_3812[(2)] = inst_3618);

(statearr_3760_3812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (5))){
var state_3716__$1 = state_3716;
var statearr_3761_3813 = state_3716__$1;
(statearr_3761_3813[(2)] = true);

(statearr_3761_3813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (14))){
var state_3716__$1 = state_3716;
var statearr_3762_3814 = state_3716__$1;
(statearr_3762_3814[(2)] = false);

(statearr_3762_3814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (26))){
var inst_3676 = (state_3716[(11)]);
var inst_3683 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_3676);
var state_3716__$1 = state_3716;
var statearr_3763_3815 = state_3716__$1;
(statearr_3763_3815[(2)] = inst_3683);

(statearr_3763_3815[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (16))){
var state_3716__$1 = state_3716;
var statearr_3764_3816 = state_3716__$1;
(statearr_3764_3816[(2)] = true);

(statearr_3764_3816[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (38))){
var inst_3706 = (state_3716[(2)]);
var state_3716__$1 = state_3716;
var statearr_3765_3817 = state_3716__$1;
(statearr_3765_3817[(2)] = inst_3706);

(statearr_3765_3817[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (30))){
var inst_3668 = (state_3716[(13)]);
var inst_3667 = (state_3716[(10)]);
var inst_3676 = (state_3716[(11)]);
var inst_3693 = cljs.core.empty_QMARK_.call(null,inst_3667);
var inst_3694 = inst_3668.call(null,inst_3676);
var inst_3695 = cljs.core.not.call(null,inst_3694);
var inst_3696 = ((inst_3693) && (inst_3695));
var state_3716__$1 = state_3716;
var statearr_3766_3818 = state_3716__$1;
(statearr_3766_3818[(2)] = inst_3696);

(statearr_3766_3818[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (10))){
var inst_3618 = (state_3716[(8)]);
var inst_3639 = (state_3716[(2)]);
var inst_3640 = cljs.core.get.call(null,inst_3639,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_3641 = cljs.core.get.call(null,inst_3639,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_3642 = cljs.core.get.call(null,inst_3639,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_3643 = inst_3618;
var state_3716__$1 = (function (){var statearr_3767 = state_3716;
(statearr_3767[(16)] = inst_3641);

(statearr_3767[(17)] = inst_3640);

(statearr_3767[(7)] = inst_3643);

(statearr_3767[(18)] = inst_3642);

return statearr_3767;
})();
var statearr_3768_3819 = state_3716__$1;
(statearr_3768_3819[(2)] = null);

(statearr_3768_3819[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (18))){
var inst_3658 = (state_3716[(2)]);
var state_3716__$1 = state_3716;
var statearr_3769_3820 = state_3716__$1;
(statearr_3769_3820[(2)] = inst_3658);

(statearr_3769_3820[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (37))){
var state_3716__$1 = state_3716;
var statearr_3770_3821 = state_3716__$1;
(statearr_3770_3821[(2)] = null);

(statearr_3770_3821[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3717 === (8))){
var inst_3618 = (state_3716[(8)]);
var inst_3636 = cljs.core.apply.call(null,cljs.core.hash_map,inst_3618);
var state_3716__$1 = state_3716;
var statearr_3771_3822 = state_3716__$1;
(statearr_3771_3822[(2)] = inst_3636);

(statearr_3771_3822[(1)] = (10));


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
});})(c__2488__auto___3776,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__2473__auto__,c__2488__auto___3776,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__2474__auto__ = null;
var cljs$core$async$mix_$_state_machine__2474__auto____0 = (function (){
var statearr_3772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3772[(0)] = cljs$core$async$mix_$_state_machine__2474__auto__);

(statearr_3772[(1)] = (1));

return statearr_3772;
});
var cljs$core$async$mix_$_state_machine__2474__auto____1 = (function (state_3716){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_3716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e3773){if((e3773 instanceof Object)){
var ex__2477__auto__ = e3773;
var statearr_3774_3823 = state_3716;
(statearr_3774_3823[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3824 = state_3716;
state_3716 = G__3824;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__2474__auto__ = function(state_3716){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__2474__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__2474__auto____1.call(this,state_3716);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__2474__auto____0;
cljs$core$async$mix_$_state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__2474__auto____1;
return cljs$core$async$mix_$_state_machine__2474__auto__;
})()
;})(switch__2473__auto__,c__2488__auto___3776,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__2490__auto__ = (function (){var statearr_3775 = f__2489__auto__.call(null);
(statearr_3775[(6)] = c__2488__auto___3776);

return statearr_3775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(c__2488__auto___3776,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__3826 = arguments.length;
switch (G__3826) {
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
var G__3830 = arguments.length;
switch (G__3830) {
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
return (function (p1__3828_SHARP_){
if(cljs.core.truth_(p1__3828_SHARP_.call(null,topic))){
return p1__3828_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__3828_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async3831 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3831 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta3832){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta3832 = meta3832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_3833,meta3832__$1){
var self__ = this;
var _3833__$1 = this;
return (new cljs.core.async.t_cljs$core$async3831(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta3832__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3831.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_3833){
var self__ = this;
var _3833__$1 = this;
return self__.meta3832;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3831.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3831.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3831.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3831.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3831.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async3831.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3831.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3831.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta3832","meta3832",1258341098,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3831.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3831";

cljs.core.async.t_cljs$core$async3831.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3831");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3831.
 */
cljs.core.async.__GT_t_cljs$core$async3831 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async3831(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta3832){
return (new cljs.core.async.t_cljs$core$async3831(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta3832));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async3831(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2488__auto___3951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2488__auto___3951,mults,ensure_mult,p){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (c__2488__auto___3951,mults,ensure_mult,p){
return (function (state_3905){
var state_val_3906 = (state_3905[(1)]);
if((state_val_3906 === (7))){
var inst_3901 = (state_3905[(2)]);
var state_3905__$1 = state_3905;
var statearr_3907_3952 = state_3905__$1;
(statearr_3907_3952[(2)] = inst_3901);

(statearr_3907_3952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3906 === (20))){
var state_3905__$1 = state_3905;
var statearr_3908_3953 = state_3905__$1;
(statearr_3908_3953[(2)] = null);

(statearr_3908_3953[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3906 === (1))){
var state_3905__$1 = state_3905;
var statearr_3909_3954 = state_3905__$1;
(statearr_3909_3954[(2)] = null);

(statearr_3909_3954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3906 === (24))){
var inst_3884 = (state_3905[(7)]);
var inst_3893 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_3884);
var state_3905__$1 = state_3905;
var statearr_3910_3955 = state_3905__$1;
(statearr_3910_3955[(2)] = inst_3893);

(statearr_3910_3955[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3906 === (4))){
var inst_3836 = (state_3905[(8)]);
var inst_3836__$1 = (state_3905[(2)]);
var inst_3837 = (inst_3836__$1 == null);
var state_3905__$1 = (function (){var statearr_3911 = state_3905;
(statearr_3911[(8)] = inst_3836__$1);

return statearr_3911;
})();
if(cljs.core.truth_(inst_3837)){
var statearr_3912_3956 = state_3905__$1;
(statearr_3912_3956[(1)] = (5));

} else {
var statearr_3913_3957 = state_3905__$1;
(statearr_3913_3957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3906 === (15))){
var inst_3878 = (state_3905[(2)]);
var state_3905__$1 = state_3905;
var statearr_3914_3958 = state_3905__$1;
(statearr_3914_3958[(2)] = inst_3878);

(statearr_3914_3958[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3906 === (21))){
var inst_3898 = (state_3905[(2)]);
var state_3905__$1 = (function (){var statearr_3915 = state_3905;
(statearr_3915[(9)] = inst_3898);

return statearr_3915;
})();
var statearr_3916_3959 = state_3905__$1;
(statearr_3916_3959[(2)] = null);

(statearr_3916_3959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3906 === (13))){
var inst_3860 = (state_3905[(10)]);
var inst_3862 = cljs.core.chunked_seq_QMARK_.call(null,inst_3860);
var state_3905__$1 = state_3905;
if(inst_3862){
var statearr_3917_3960 = state_3905__$1;
(statearr_3917_3960[(1)] = (16));

} else {
var statearr_3918_3961 = state_3905__$1;
(statearr_3918_3961[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3906 === (22))){
var inst_3890 = (state_3905[(2)]);
var state_3905__$1 = state_3905;
if(cljs.core.truth_(inst_3890)){
var statearr_3919_3962 = state_3905__$1;
(statearr_3919_3962[(1)] = (23));

} else {
var statearr_3920_3963 = state_3905__$1;
(statearr_3920_3963[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3906 === (6))){
var inst_3836 = (state_3905[(8)]);
var inst_3886 = (state_3905[(11)]);
var inst_3884 = (state_3905[(7)]);
var inst_3884__$1 = topic_fn.call(null,inst_3836);
var inst_3885 = cljs.core.deref.call(null,mults);
var inst_3886__$1 = cljs.core.get.call(null,inst_3885,inst_3884__$1);
var state_3905__$1 = (function (){var statearr_3921 = state_3905;
(statearr_3921[(11)] = inst_3886__$1);

(statearr_3921[(7)] = inst_3884__$1);

return statearr_3921;
})();
if(cljs.core.truth_(inst_3886__$1)){
var statearr_3922_3964 = state_3905__$1;
(statearr_3922_3964[(1)] = (19));

} else {
var statearr_3923_3965 = state_3905__$1;
(statearr_3923_3965[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3906 === (25))){
var inst_3895 = (state_3905[(2)]);
var state_3905__$1 = state_3905;
var statearr_3924_3966 = state_3905__$1;
(statearr_3924_3966[(2)] = inst_3895);

(statearr_3924_3966[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3906 === (17))){
var inst_3860 = (state_3905[(10)]);
var inst_3869 = cljs.core.first.call(null,inst_3860);
var inst_3870 = cljs.core.async.muxch_STAR_.call(null,inst_3869);
var inst_3871 = cljs.core.async.close_BANG_.call(null,inst_3870);
var inst_3872 = cljs.core.next.call(null,inst_3860);
var inst_3846 = inst_3872;
var inst_3847 = null;
var inst_3848 = (0);
var inst_3849 = (0);
var state_3905__$1 = (function (){var statearr_3925 = state_3905;
(statearr_3925[(12)] = inst_3848);

(statearr_3925[(13)] = inst_3846);

(statearr_3925[(14)] = inst_3871);

(statearr_3925[(15)] = inst_3847);

(statearr_3925[(16)] = inst_3849);

return statearr_3925;
})();
var statearr_3926_3967 = state_3905__$1;
(statearr_3926_3967[(2)] = null);

(statearr_3926_3967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3906 === (3))){
var inst_3903 = (state_3905[(2)]);
var state_3905__$1 = state_3905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3905__$1,inst_3903);
} else {
if((state_val_3906 === (12))){
var inst_3880 = (state_3905[(2)]);
var state_3905__$1 = state_3905;
var statearr_3927_3968 = state_3905__$1;
(statearr_3927_3968[(2)] = inst_3880);

(statearr_3927_3968[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3906 === (2))){
var state_3905__$1 = state_3905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3905__$1,(4),ch);
} else {
if((state_val_3906 === (23))){
var state_3905__$1 = state_3905;
var statearr_3928_3969 = state_3905__$1;
(statearr_3928_3969[(2)] = null);

(statearr_3928_3969[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3906 === (19))){
var inst_3836 = (state_3905[(8)]);
var inst_3886 = (state_3905[(11)]);
var inst_3888 = cljs.core.async.muxch_STAR_.call(null,inst_3886);
var state_3905__$1 = state_3905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3905__$1,(22),inst_3888,inst_3836);
} else {
if((state_val_3906 === (11))){
var inst_3860 = (state_3905[(10)]);
var inst_3846 = (state_3905[(13)]);
var inst_3860__$1 = cljs.core.seq.call(null,inst_3846);
var state_3905__$1 = (function (){var statearr_3929 = state_3905;
(statearr_3929[(10)] = inst_3860__$1);

return statearr_3929;
})();
if(inst_3860__$1){
var statearr_3930_3970 = state_3905__$1;
(statearr_3930_3970[(1)] = (13));

} else {
var statearr_3931_3971 = state_3905__$1;
(statearr_3931_3971[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3906 === (9))){
var inst_3882 = (state_3905[(2)]);
var state_3905__$1 = state_3905;
var statearr_3932_3972 = state_3905__$1;
(statearr_3932_3972[(2)] = inst_3882);

(statearr_3932_3972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3906 === (5))){
var inst_3843 = cljs.core.deref.call(null,mults);
var inst_3844 = cljs.core.vals.call(null,inst_3843);
var inst_3845 = cljs.core.seq.call(null,inst_3844);
var inst_3846 = inst_3845;
var inst_3847 = null;
var inst_3848 = (0);
var inst_3849 = (0);
var state_3905__$1 = (function (){var statearr_3933 = state_3905;
(statearr_3933[(12)] = inst_3848);

(statearr_3933[(13)] = inst_3846);

(statearr_3933[(15)] = inst_3847);

(statearr_3933[(16)] = inst_3849);

return statearr_3933;
})();
var statearr_3934_3973 = state_3905__$1;
(statearr_3934_3973[(2)] = null);

(statearr_3934_3973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3906 === (14))){
var state_3905__$1 = state_3905;
var statearr_3938_3974 = state_3905__$1;
(statearr_3938_3974[(2)] = null);

(statearr_3938_3974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3906 === (16))){
var inst_3860 = (state_3905[(10)]);
var inst_3864 = cljs.core.chunk_first.call(null,inst_3860);
var inst_3865 = cljs.core.chunk_rest.call(null,inst_3860);
var inst_3866 = cljs.core.count.call(null,inst_3864);
var inst_3846 = inst_3865;
var inst_3847 = inst_3864;
var inst_3848 = inst_3866;
var inst_3849 = (0);
var state_3905__$1 = (function (){var statearr_3939 = state_3905;
(statearr_3939[(12)] = inst_3848);

(statearr_3939[(13)] = inst_3846);

(statearr_3939[(15)] = inst_3847);

(statearr_3939[(16)] = inst_3849);

return statearr_3939;
})();
var statearr_3940_3975 = state_3905__$1;
(statearr_3940_3975[(2)] = null);

(statearr_3940_3975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3906 === (10))){
var inst_3848 = (state_3905[(12)]);
var inst_3846 = (state_3905[(13)]);
var inst_3847 = (state_3905[(15)]);
var inst_3849 = (state_3905[(16)]);
var inst_3854 = cljs.core._nth.call(null,inst_3847,inst_3849);
var inst_3855 = cljs.core.async.muxch_STAR_.call(null,inst_3854);
var inst_3856 = cljs.core.async.close_BANG_.call(null,inst_3855);
var inst_3857 = (inst_3849 + (1));
var tmp3935 = inst_3848;
var tmp3936 = inst_3846;
var tmp3937 = inst_3847;
var inst_3846__$1 = tmp3936;
var inst_3847__$1 = tmp3937;
var inst_3848__$1 = tmp3935;
var inst_3849__$1 = inst_3857;
var state_3905__$1 = (function (){var statearr_3941 = state_3905;
(statearr_3941[(12)] = inst_3848__$1);

(statearr_3941[(13)] = inst_3846__$1);

(statearr_3941[(17)] = inst_3856);

(statearr_3941[(15)] = inst_3847__$1);

(statearr_3941[(16)] = inst_3849__$1);

return statearr_3941;
})();
var statearr_3942_3976 = state_3905__$1;
(statearr_3942_3976[(2)] = null);

(statearr_3942_3976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3906 === (18))){
var inst_3875 = (state_3905[(2)]);
var state_3905__$1 = state_3905;
var statearr_3943_3977 = state_3905__$1;
(statearr_3943_3977[(2)] = inst_3875);

(statearr_3943_3977[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3906 === (8))){
var inst_3848 = (state_3905[(12)]);
var inst_3849 = (state_3905[(16)]);
var inst_3851 = (inst_3849 < inst_3848);
var inst_3852 = inst_3851;
var state_3905__$1 = state_3905;
if(cljs.core.truth_(inst_3852)){
var statearr_3944_3978 = state_3905__$1;
(statearr_3944_3978[(1)] = (10));

} else {
var statearr_3945_3979 = state_3905__$1;
(statearr_3945_3979[(1)] = (11));

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
});})(c__2488__auto___3951,mults,ensure_mult,p))
;
return ((function (switch__2473__auto__,c__2488__auto___3951,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__2474__auto__ = null;
var cljs$core$async$state_machine__2474__auto____0 = (function (){
var statearr_3946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3946[(0)] = cljs$core$async$state_machine__2474__auto__);

(statearr_3946[(1)] = (1));

return statearr_3946;
});
var cljs$core$async$state_machine__2474__auto____1 = (function (state_3905){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_3905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e3947){if((e3947 instanceof Object)){
var ex__2477__auto__ = e3947;
var statearr_3948_3980 = state_3905;
(statearr_3948_3980[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3981 = state_3905;
state_3905 = G__3981;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
cljs$core$async$state_machine__2474__auto__ = function(state_3905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2474__auto____1.call(this,state_3905);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2474__auto____0;
cljs$core$async$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2474__auto____1;
return cljs$core$async$state_machine__2474__auto__;
})()
;})(switch__2473__auto__,c__2488__auto___3951,mults,ensure_mult,p))
})();
var state__2490__auto__ = (function (){var statearr_3949 = f__2489__auto__.call(null);
(statearr_3949[(6)] = c__2488__auto___3951);

return statearr_3949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(c__2488__auto___3951,mults,ensure_mult,p))
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
var G__3983 = arguments.length;
switch (G__3983) {
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
var G__3986 = arguments.length;
switch (G__3986) {
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
var G__3989 = arguments.length;
switch (G__3989) {
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
var c__2488__auto___4056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2488__auto___4056,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (c__2488__auto___4056,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_4028){
var state_val_4029 = (state_4028[(1)]);
if((state_val_4029 === (7))){
var state_4028__$1 = state_4028;
var statearr_4030_4057 = state_4028__$1;
(statearr_4030_4057[(2)] = null);

(statearr_4030_4057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4029 === (1))){
var state_4028__$1 = state_4028;
var statearr_4031_4058 = state_4028__$1;
(statearr_4031_4058[(2)] = null);

(statearr_4031_4058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4029 === (4))){
var inst_3992 = (state_4028[(7)]);
var inst_3994 = (inst_3992 < cnt);
var state_4028__$1 = state_4028;
if(cljs.core.truth_(inst_3994)){
var statearr_4032_4059 = state_4028__$1;
(statearr_4032_4059[(1)] = (6));

} else {
var statearr_4033_4060 = state_4028__$1;
(statearr_4033_4060[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4029 === (15))){
var inst_4024 = (state_4028[(2)]);
var state_4028__$1 = state_4028;
var statearr_4034_4061 = state_4028__$1;
(statearr_4034_4061[(2)] = inst_4024);

(statearr_4034_4061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4029 === (13))){
var inst_4017 = cljs.core.async.close_BANG_.call(null,out);
var state_4028__$1 = state_4028;
var statearr_4035_4062 = state_4028__$1;
(statearr_4035_4062[(2)] = inst_4017);

(statearr_4035_4062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4029 === (6))){
var state_4028__$1 = state_4028;
var statearr_4036_4063 = state_4028__$1;
(statearr_4036_4063[(2)] = null);

(statearr_4036_4063[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4029 === (3))){
var inst_4026 = (state_4028[(2)]);
var state_4028__$1 = state_4028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4028__$1,inst_4026);
} else {
if((state_val_4029 === (12))){
var inst_4014 = (state_4028[(8)]);
var inst_4014__$1 = (state_4028[(2)]);
var inst_4015 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_4014__$1);
var state_4028__$1 = (function (){var statearr_4037 = state_4028;
(statearr_4037[(8)] = inst_4014__$1);

return statearr_4037;
})();
if(cljs.core.truth_(inst_4015)){
var statearr_4038_4064 = state_4028__$1;
(statearr_4038_4064[(1)] = (13));

} else {
var statearr_4039_4065 = state_4028__$1;
(statearr_4039_4065[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4029 === (2))){
var inst_3991 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_3992 = (0);
var state_4028__$1 = (function (){var statearr_4040 = state_4028;
(statearr_4040[(7)] = inst_3992);

(statearr_4040[(9)] = inst_3991);

return statearr_4040;
})();
var statearr_4041_4066 = state_4028__$1;
(statearr_4041_4066[(2)] = null);

(statearr_4041_4066[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4029 === (11))){
var inst_3992 = (state_4028[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_4028,(10),Object,null,(9));
var inst_4001 = chs__$1.call(null,inst_3992);
var inst_4002 = done.call(null,inst_3992);
var inst_4003 = cljs.core.async.take_BANG_.call(null,inst_4001,inst_4002);
var state_4028__$1 = state_4028;
var statearr_4042_4067 = state_4028__$1;
(statearr_4042_4067[(2)] = inst_4003);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4028__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4029 === (9))){
var inst_3992 = (state_4028[(7)]);
var inst_4005 = (state_4028[(2)]);
var inst_4006 = (inst_3992 + (1));
var inst_3992__$1 = inst_4006;
var state_4028__$1 = (function (){var statearr_4043 = state_4028;
(statearr_4043[(7)] = inst_3992__$1);

(statearr_4043[(10)] = inst_4005);

return statearr_4043;
})();
var statearr_4044_4068 = state_4028__$1;
(statearr_4044_4068[(2)] = null);

(statearr_4044_4068[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4029 === (5))){
var inst_4012 = (state_4028[(2)]);
var state_4028__$1 = (function (){var statearr_4045 = state_4028;
(statearr_4045[(11)] = inst_4012);

return statearr_4045;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4028__$1,(12),dchan);
} else {
if((state_val_4029 === (14))){
var inst_4014 = (state_4028[(8)]);
var inst_4019 = cljs.core.apply.call(null,f,inst_4014);
var state_4028__$1 = state_4028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4028__$1,(16),out,inst_4019);
} else {
if((state_val_4029 === (16))){
var inst_4021 = (state_4028[(2)]);
var state_4028__$1 = (function (){var statearr_4046 = state_4028;
(statearr_4046[(12)] = inst_4021);

return statearr_4046;
})();
var statearr_4047_4069 = state_4028__$1;
(statearr_4047_4069[(2)] = null);

(statearr_4047_4069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4029 === (10))){
var inst_3996 = (state_4028[(2)]);
var inst_3997 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_4028__$1 = (function (){var statearr_4048 = state_4028;
(statearr_4048[(13)] = inst_3996);

return statearr_4048;
})();
var statearr_4049_4070 = state_4028__$1;
(statearr_4049_4070[(2)] = inst_3997);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4028__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4029 === (8))){
var inst_4010 = (state_4028[(2)]);
var state_4028__$1 = state_4028;
var statearr_4050_4071 = state_4028__$1;
(statearr_4050_4071[(2)] = inst_4010);

(statearr_4050_4071[(1)] = (5));


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
});})(c__2488__auto___4056,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__2473__auto__,c__2488__auto___4056,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__2474__auto__ = null;
var cljs$core$async$state_machine__2474__auto____0 = (function (){
var statearr_4051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4051[(0)] = cljs$core$async$state_machine__2474__auto__);

(statearr_4051[(1)] = (1));

return statearr_4051;
});
var cljs$core$async$state_machine__2474__auto____1 = (function (state_4028){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_4028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e4052){if((e4052 instanceof Object)){
var ex__2477__auto__ = e4052;
var statearr_4053_4072 = state_4028;
(statearr_4053_4072[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4073 = state_4028;
state_4028 = G__4073;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
cljs$core$async$state_machine__2474__auto__ = function(state_4028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2474__auto____1.call(this,state_4028);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2474__auto____0;
cljs$core$async$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2474__auto____1;
return cljs$core$async$state_machine__2474__auto__;
})()
;})(switch__2473__auto__,c__2488__auto___4056,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__2490__auto__ = (function (){var statearr_4054 = f__2489__auto__.call(null);
(statearr_4054[(6)] = c__2488__auto___4056);

return statearr_4054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(c__2488__auto___4056,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__4076 = arguments.length;
switch (G__4076) {
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
var c__2488__auto___4130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2488__auto___4130,out){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (c__2488__auto___4130,out){
return (function (state_4108){
var state_val_4109 = (state_4108[(1)]);
if((state_val_4109 === (7))){
var inst_4087 = (state_4108[(7)]);
var inst_4088 = (state_4108[(8)]);
var inst_4087__$1 = (state_4108[(2)]);
var inst_4088__$1 = cljs.core.nth.call(null,inst_4087__$1,(0),null);
var inst_4089 = cljs.core.nth.call(null,inst_4087__$1,(1),null);
var inst_4090 = (inst_4088__$1 == null);
var state_4108__$1 = (function (){var statearr_4110 = state_4108;
(statearr_4110[(7)] = inst_4087__$1);

(statearr_4110[(9)] = inst_4089);

(statearr_4110[(8)] = inst_4088__$1);

return statearr_4110;
})();
if(cljs.core.truth_(inst_4090)){
var statearr_4111_4131 = state_4108__$1;
(statearr_4111_4131[(1)] = (8));

} else {
var statearr_4112_4132 = state_4108__$1;
(statearr_4112_4132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4109 === (1))){
var inst_4077 = cljs.core.vec.call(null,chs);
var inst_4078 = inst_4077;
var state_4108__$1 = (function (){var statearr_4113 = state_4108;
(statearr_4113[(10)] = inst_4078);

return statearr_4113;
})();
var statearr_4114_4133 = state_4108__$1;
(statearr_4114_4133[(2)] = null);

(statearr_4114_4133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4109 === (4))){
var inst_4078 = (state_4108[(10)]);
var state_4108__$1 = state_4108;
return cljs.core.async.ioc_alts_BANG_.call(null,state_4108__$1,(7),inst_4078);
} else {
if((state_val_4109 === (6))){
var inst_4104 = (state_4108[(2)]);
var state_4108__$1 = state_4108;
var statearr_4115_4134 = state_4108__$1;
(statearr_4115_4134[(2)] = inst_4104);

(statearr_4115_4134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4109 === (3))){
var inst_4106 = (state_4108[(2)]);
var state_4108__$1 = state_4108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4108__$1,inst_4106);
} else {
if((state_val_4109 === (2))){
var inst_4078 = (state_4108[(10)]);
var inst_4080 = cljs.core.count.call(null,inst_4078);
var inst_4081 = (inst_4080 > (0));
var state_4108__$1 = state_4108;
if(cljs.core.truth_(inst_4081)){
var statearr_4117_4135 = state_4108__$1;
(statearr_4117_4135[(1)] = (4));

} else {
var statearr_4118_4136 = state_4108__$1;
(statearr_4118_4136[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4109 === (11))){
var inst_4078 = (state_4108[(10)]);
var inst_4097 = (state_4108[(2)]);
var tmp4116 = inst_4078;
var inst_4078__$1 = tmp4116;
var state_4108__$1 = (function (){var statearr_4119 = state_4108;
(statearr_4119[(11)] = inst_4097);

(statearr_4119[(10)] = inst_4078__$1);

return statearr_4119;
})();
var statearr_4120_4137 = state_4108__$1;
(statearr_4120_4137[(2)] = null);

(statearr_4120_4137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4109 === (9))){
var inst_4088 = (state_4108[(8)]);
var state_4108__$1 = state_4108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4108__$1,(11),out,inst_4088);
} else {
if((state_val_4109 === (5))){
var inst_4102 = cljs.core.async.close_BANG_.call(null,out);
var state_4108__$1 = state_4108;
var statearr_4121_4138 = state_4108__$1;
(statearr_4121_4138[(2)] = inst_4102);

(statearr_4121_4138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4109 === (10))){
var inst_4100 = (state_4108[(2)]);
var state_4108__$1 = state_4108;
var statearr_4122_4139 = state_4108__$1;
(statearr_4122_4139[(2)] = inst_4100);

(statearr_4122_4139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4109 === (8))){
var inst_4087 = (state_4108[(7)]);
var inst_4089 = (state_4108[(9)]);
var inst_4078 = (state_4108[(10)]);
var inst_4088 = (state_4108[(8)]);
var inst_4092 = (function (){var cs = inst_4078;
var vec__4083 = inst_4087;
var v = inst_4088;
var c = inst_4089;
return ((function (cs,vec__4083,v,c,inst_4087,inst_4089,inst_4078,inst_4088,state_val_4109,c__2488__auto___4130,out){
return (function (p1__4074_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__4074_SHARP_);
});
;})(cs,vec__4083,v,c,inst_4087,inst_4089,inst_4078,inst_4088,state_val_4109,c__2488__auto___4130,out))
})();
var inst_4093 = cljs.core.filterv.call(null,inst_4092,inst_4078);
var inst_4078__$1 = inst_4093;
var state_4108__$1 = (function (){var statearr_4123 = state_4108;
(statearr_4123[(10)] = inst_4078__$1);

return statearr_4123;
})();
var statearr_4124_4140 = state_4108__$1;
(statearr_4124_4140[(2)] = null);

(statearr_4124_4140[(1)] = (2));


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
});})(c__2488__auto___4130,out))
;
return ((function (switch__2473__auto__,c__2488__auto___4130,out){
return (function() {
var cljs$core$async$state_machine__2474__auto__ = null;
var cljs$core$async$state_machine__2474__auto____0 = (function (){
var statearr_4125 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4125[(0)] = cljs$core$async$state_machine__2474__auto__);

(statearr_4125[(1)] = (1));

return statearr_4125;
});
var cljs$core$async$state_machine__2474__auto____1 = (function (state_4108){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_4108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e4126){if((e4126 instanceof Object)){
var ex__2477__auto__ = e4126;
var statearr_4127_4141 = state_4108;
(statearr_4127_4141[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4142 = state_4108;
state_4108 = G__4142;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
cljs$core$async$state_machine__2474__auto__ = function(state_4108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2474__auto____1.call(this,state_4108);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2474__auto____0;
cljs$core$async$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2474__auto____1;
return cljs$core$async$state_machine__2474__auto__;
})()
;})(switch__2473__auto__,c__2488__auto___4130,out))
})();
var state__2490__auto__ = (function (){var statearr_4128 = f__2489__auto__.call(null);
(statearr_4128[(6)] = c__2488__auto___4130);

return statearr_4128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(c__2488__auto___4130,out))
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
var G__4144 = arguments.length;
switch (G__4144) {
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
var c__2488__auto___4189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2488__auto___4189,out){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (c__2488__auto___4189,out){
return (function (state_4168){
var state_val_4169 = (state_4168[(1)]);
if((state_val_4169 === (7))){
var inst_4150 = (state_4168[(7)]);
var inst_4150__$1 = (state_4168[(2)]);
var inst_4151 = (inst_4150__$1 == null);
var inst_4152 = cljs.core.not.call(null,inst_4151);
var state_4168__$1 = (function (){var statearr_4170 = state_4168;
(statearr_4170[(7)] = inst_4150__$1);

return statearr_4170;
})();
if(inst_4152){
var statearr_4171_4190 = state_4168__$1;
(statearr_4171_4190[(1)] = (8));

} else {
var statearr_4172_4191 = state_4168__$1;
(statearr_4172_4191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4169 === (1))){
var inst_4145 = (0);
var state_4168__$1 = (function (){var statearr_4173 = state_4168;
(statearr_4173[(8)] = inst_4145);

return statearr_4173;
})();
var statearr_4174_4192 = state_4168__$1;
(statearr_4174_4192[(2)] = null);

(statearr_4174_4192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4169 === (4))){
var state_4168__$1 = state_4168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4168__$1,(7),ch);
} else {
if((state_val_4169 === (6))){
var inst_4163 = (state_4168[(2)]);
var state_4168__$1 = state_4168;
var statearr_4175_4193 = state_4168__$1;
(statearr_4175_4193[(2)] = inst_4163);

(statearr_4175_4193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4169 === (3))){
var inst_4165 = (state_4168[(2)]);
var inst_4166 = cljs.core.async.close_BANG_.call(null,out);
var state_4168__$1 = (function (){var statearr_4176 = state_4168;
(statearr_4176[(9)] = inst_4165);

return statearr_4176;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4168__$1,inst_4166);
} else {
if((state_val_4169 === (2))){
var inst_4145 = (state_4168[(8)]);
var inst_4147 = (inst_4145 < n);
var state_4168__$1 = state_4168;
if(cljs.core.truth_(inst_4147)){
var statearr_4177_4194 = state_4168__$1;
(statearr_4177_4194[(1)] = (4));

} else {
var statearr_4178_4195 = state_4168__$1;
(statearr_4178_4195[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4169 === (11))){
var inst_4145 = (state_4168[(8)]);
var inst_4155 = (state_4168[(2)]);
var inst_4156 = (inst_4145 + (1));
var inst_4145__$1 = inst_4156;
var state_4168__$1 = (function (){var statearr_4179 = state_4168;
(statearr_4179[(8)] = inst_4145__$1);

(statearr_4179[(10)] = inst_4155);

return statearr_4179;
})();
var statearr_4180_4196 = state_4168__$1;
(statearr_4180_4196[(2)] = null);

(statearr_4180_4196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4169 === (9))){
var state_4168__$1 = state_4168;
var statearr_4181_4197 = state_4168__$1;
(statearr_4181_4197[(2)] = null);

(statearr_4181_4197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4169 === (5))){
var state_4168__$1 = state_4168;
var statearr_4182_4198 = state_4168__$1;
(statearr_4182_4198[(2)] = null);

(statearr_4182_4198[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4169 === (10))){
var inst_4160 = (state_4168[(2)]);
var state_4168__$1 = state_4168;
var statearr_4183_4199 = state_4168__$1;
(statearr_4183_4199[(2)] = inst_4160);

(statearr_4183_4199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4169 === (8))){
var inst_4150 = (state_4168[(7)]);
var state_4168__$1 = state_4168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4168__$1,(11),out,inst_4150);
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
});})(c__2488__auto___4189,out))
;
return ((function (switch__2473__auto__,c__2488__auto___4189,out){
return (function() {
var cljs$core$async$state_machine__2474__auto__ = null;
var cljs$core$async$state_machine__2474__auto____0 = (function (){
var statearr_4184 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4184[(0)] = cljs$core$async$state_machine__2474__auto__);

(statearr_4184[(1)] = (1));

return statearr_4184;
});
var cljs$core$async$state_machine__2474__auto____1 = (function (state_4168){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_4168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e4185){if((e4185 instanceof Object)){
var ex__2477__auto__ = e4185;
var statearr_4186_4200 = state_4168;
(statearr_4186_4200[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4201 = state_4168;
state_4168 = G__4201;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
cljs$core$async$state_machine__2474__auto__ = function(state_4168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2474__auto____1.call(this,state_4168);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2474__auto____0;
cljs$core$async$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2474__auto____1;
return cljs$core$async$state_machine__2474__auto__;
})()
;})(switch__2473__auto__,c__2488__auto___4189,out))
})();
var state__2490__auto__ = (function (){var statearr_4187 = f__2489__auto__.call(null);
(statearr_4187[(6)] = c__2488__auto___4189);

return statearr_4187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(c__2488__auto___4189,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async4203 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4203 = (function (f,ch,meta4204){
this.f = f;
this.ch = ch;
this.meta4204 = meta4204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4205,meta4204__$1){
var self__ = this;
var _4205__$1 = this;
return (new cljs.core.async.t_cljs$core$async4203(self__.f,self__.ch,meta4204__$1));
});

cljs.core.async.t_cljs$core$async4203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4205){
var self__ = this;
var _4205__$1 = this;
return self__.meta4204;
});

cljs.core.async.t_cljs$core$async4203.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4203.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4203.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4203.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4203.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async4206 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4206 = (function (f,ch,meta4204,_,fn1,meta4207){
this.f = f;
this.ch = ch;
this.meta4204 = meta4204;
this._ = _;
this.fn1 = fn1;
this.meta4207 = meta4207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_4208,meta4207__$1){
var self__ = this;
var _4208__$1 = this;
return (new cljs.core.async.t_cljs$core$async4206(self__.f,self__.ch,self__.meta4204,self__._,self__.fn1,meta4207__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async4206.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_4208){
var self__ = this;
var _4208__$1 = this;
return self__.meta4207;
});})(___$1))
;

cljs.core.async.t_cljs$core$async4206.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4206.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async4206.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async4206.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__4202_SHARP_){
return f1.call(null,(((p1__4202_SHARP_ == null))?null:self__.f.call(null,p1__4202_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async4206.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4204","meta4204",947340635,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async4203","cljs.core.async/t_cljs$core$async4203",-1834863226,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta4207","meta4207",168929571,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async4206.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4206";

cljs.core.async.t_cljs$core$async4206.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4206");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4206.
 */
cljs.core.async.__GT_t_cljs$core$async4206 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async4206(f__$1,ch__$1,meta4204__$1,___$2,fn1__$1,meta4207){
return (new cljs.core.async.t_cljs$core$async4206(f__$1,ch__$1,meta4204__$1,___$2,fn1__$1,meta4207));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async4206(self__.f,self__.ch,self__.meta4204,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async4203.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4203.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async4203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4204","meta4204",947340635,null)], null);
});

cljs.core.async.t_cljs$core$async4203.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4203";

cljs.core.async.t_cljs$core$async4203.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4203");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4203.
 */
cljs.core.async.__GT_t_cljs$core$async4203 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async4203(f__$1,ch__$1,meta4204){
return (new cljs.core.async.t_cljs$core$async4203(f__$1,ch__$1,meta4204));
});

}

return (new cljs.core.async.t_cljs$core$async4203(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async4209 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4209 = (function (f,ch,meta4210){
this.f = f;
this.ch = ch;
this.meta4210 = meta4210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4211,meta4210__$1){
var self__ = this;
var _4211__$1 = this;
return (new cljs.core.async.t_cljs$core$async4209(self__.f,self__.ch,meta4210__$1));
});

cljs.core.async.t_cljs$core$async4209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4211){
var self__ = this;
var _4211__$1 = this;
return self__.meta4210;
});

cljs.core.async.t_cljs$core$async4209.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4209.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4209.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4209.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async4209.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4209.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async4209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4210","meta4210",1623102678,null)], null);
});

cljs.core.async.t_cljs$core$async4209.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4209";

cljs.core.async.t_cljs$core$async4209.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4209");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4209.
 */
cljs.core.async.__GT_t_cljs$core$async4209 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async4209(f__$1,ch__$1,meta4210){
return (new cljs.core.async.t_cljs$core$async4209(f__$1,ch__$1,meta4210));
});

}

return (new cljs.core.async.t_cljs$core$async4209(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async4212 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4212 = (function (p,ch,meta4213){
this.p = p;
this.ch = ch;
this.meta4213 = meta4213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4214,meta4213__$1){
var self__ = this;
var _4214__$1 = this;
return (new cljs.core.async.t_cljs$core$async4212(self__.p,self__.ch,meta4213__$1));
});

cljs.core.async.t_cljs$core$async4212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4214){
var self__ = this;
var _4214__$1 = this;
return self__.meta4213;
});

cljs.core.async.t_cljs$core$async4212.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4212.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4212.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4212.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4212.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async4212.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4212.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async4212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4213","meta4213",-1403238696,null)], null);
});

cljs.core.async.t_cljs$core$async4212.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4212";

cljs.core.async.t_cljs$core$async4212.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4212");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4212.
 */
cljs.core.async.__GT_t_cljs$core$async4212 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async4212(p__$1,ch__$1,meta4213){
return (new cljs.core.async.t_cljs$core$async4212(p__$1,ch__$1,meta4213));
});

}

return (new cljs.core.async.t_cljs$core$async4212(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__4216 = arguments.length;
switch (G__4216) {
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
var c__2488__auto___4256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2488__auto___4256,out){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (c__2488__auto___4256,out){
return (function (state_4237){
var state_val_4238 = (state_4237[(1)]);
if((state_val_4238 === (7))){
var inst_4233 = (state_4237[(2)]);
var state_4237__$1 = state_4237;
var statearr_4239_4257 = state_4237__$1;
(statearr_4239_4257[(2)] = inst_4233);

(statearr_4239_4257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4238 === (1))){
var state_4237__$1 = state_4237;
var statearr_4240_4258 = state_4237__$1;
(statearr_4240_4258[(2)] = null);

(statearr_4240_4258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4238 === (4))){
var inst_4219 = (state_4237[(7)]);
var inst_4219__$1 = (state_4237[(2)]);
var inst_4220 = (inst_4219__$1 == null);
var state_4237__$1 = (function (){var statearr_4241 = state_4237;
(statearr_4241[(7)] = inst_4219__$1);

return statearr_4241;
})();
if(cljs.core.truth_(inst_4220)){
var statearr_4242_4259 = state_4237__$1;
(statearr_4242_4259[(1)] = (5));

} else {
var statearr_4243_4260 = state_4237__$1;
(statearr_4243_4260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4238 === (6))){
var inst_4219 = (state_4237[(7)]);
var inst_4224 = p.call(null,inst_4219);
var state_4237__$1 = state_4237;
if(cljs.core.truth_(inst_4224)){
var statearr_4244_4261 = state_4237__$1;
(statearr_4244_4261[(1)] = (8));

} else {
var statearr_4245_4262 = state_4237__$1;
(statearr_4245_4262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4238 === (3))){
var inst_4235 = (state_4237[(2)]);
var state_4237__$1 = state_4237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4237__$1,inst_4235);
} else {
if((state_val_4238 === (2))){
var state_4237__$1 = state_4237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4237__$1,(4),ch);
} else {
if((state_val_4238 === (11))){
var inst_4227 = (state_4237[(2)]);
var state_4237__$1 = state_4237;
var statearr_4246_4263 = state_4237__$1;
(statearr_4246_4263[(2)] = inst_4227);

(statearr_4246_4263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4238 === (9))){
var state_4237__$1 = state_4237;
var statearr_4247_4264 = state_4237__$1;
(statearr_4247_4264[(2)] = null);

(statearr_4247_4264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4238 === (5))){
var inst_4222 = cljs.core.async.close_BANG_.call(null,out);
var state_4237__$1 = state_4237;
var statearr_4248_4265 = state_4237__$1;
(statearr_4248_4265[(2)] = inst_4222);

(statearr_4248_4265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4238 === (10))){
var inst_4230 = (state_4237[(2)]);
var state_4237__$1 = (function (){var statearr_4249 = state_4237;
(statearr_4249[(8)] = inst_4230);

return statearr_4249;
})();
var statearr_4250_4266 = state_4237__$1;
(statearr_4250_4266[(2)] = null);

(statearr_4250_4266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4238 === (8))){
var inst_4219 = (state_4237[(7)]);
var state_4237__$1 = state_4237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4237__$1,(11),out,inst_4219);
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
});})(c__2488__auto___4256,out))
;
return ((function (switch__2473__auto__,c__2488__auto___4256,out){
return (function() {
var cljs$core$async$state_machine__2474__auto__ = null;
var cljs$core$async$state_machine__2474__auto____0 = (function (){
var statearr_4251 = [null,null,null,null,null,null,null,null,null];
(statearr_4251[(0)] = cljs$core$async$state_machine__2474__auto__);

(statearr_4251[(1)] = (1));

return statearr_4251;
});
var cljs$core$async$state_machine__2474__auto____1 = (function (state_4237){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_4237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e4252){if((e4252 instanceof Object)){
var ex__2477__auto__ = e4252;
var statearr_4253_4267 = state_4237;
(statearr_4253_4267[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4268 = state_4237;
state_4237 = G__4268;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
cljs$core$async$state_machine__2474__auto__ = function(state_4237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2474__auto____1.call(this,state_4237);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2474__auto____0;
cljs$core$async$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2474__auto____1;
return cljs$core$async$state_machine__2474__auto__;
})()
;})(switch__2473__auto__,c__2488__auto___4256,out))
})();
var state__2490__auto__ = (function (){var statearr_4254 = f__2489__auto__.call(null);
(statearr_4254[(6)] = c__2488__auto___4256);

return statearr_4254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(c__2488__auto___4256,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__4270 = arguments.length;
switch (G__4270) {
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
var c__2488__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2488__auto__){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (c__2488__auto__){
return (function (state_4333){
var state_val_4334 = (state_4333[(1)]);
if((state_val_4334 === (7))){
var inst_4329 = (state_4333[(2)]);
var state_4333__$1 = state_4333;
var statearr_4335_4373 = state_4333__$1;
(statearr_4335_4373[(2)] = inst_4329);

(statearr_4335_4373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (20))){
var inst_4299 = (state_4333[(7)]);
var inst_4310 = (state_4333[(2)]);
var inst_4311 = cljs.core.next.call(null,inst_4299);
var inst_4285 = inst_4311;
var inst_4286 = null;
var inst_4287 = (0);
var inst_4288 = (0);
var state_4333__$1 = (function (){var statearr_4336 = state_4333;
(statearr_4336[(8)] = inst_4310);

(statearr_4336[(9)] = inst_4287);

(statearr_4336[(10)] = inst_4286);

(statearr_4336[(11)] = inst_4288);

(statearr_4336[(12)] = inst_4285);

return statearr_4336;
})();
var statearr_4337_4374 = state_4333__$1;
(statearr_4337_4374[(2)] = null);

(statearr_4337_4374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (1))){
var state_4333__$1 = state_4333;
var statearr_4338_4375 = state_4333__$1;
(statearr_4338_4375[(2)] = null);

(statearr_4338_4375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (4))){
var inst_4274 = (state_4333[(13)]);
var inst_4274__$1 = (state_4333[(2)]);
var inst_4275 = (inst_4274__$1 == null);
var state_4333__$1 = (function (){var statearr_4339 = state_4333;
(statearr_4339[(13)] = inst_4274__$1);

return statearr_4339;
})();
if(cljs.core.truth_(inst_4275)){
var statearr_4340_4376 = state_4333__$1;
(statearr_4340_4376[(1)] = (5));

} else {
var statearr_4341_4377 = state_4333__$1;
(statearr_4341_4377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (15))){
var state_4333__$1 = state_4333;
var statearr_4345_4378 = state_4333__$1;
(statearr_4345_4378[(2)] = null);

(statearr_4345_4378[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (21))){
var state_4333__$1 = state_4333;
var statearr_4346_4379 = state_4333__$1;
(statearr_4346_4379[(2)] = null);

(statearr_4346_4379[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (13))){
var inst_4287 = (state_4333[(9)]);
var inst_4286 = (state_4333[(10)]);
var inst_4288 = (state_4333[(11)]);
var inst_4285 = (state_4333[(12)]);
var inst_4295 = (state_4333[(2)]);
var inst_4296 = (inst_4288 + (1));
var tmp4342 = inst_4287;
var tmp4343 = inst_4286;
var tmp4344 = inst_4285;
var inst_4285__$1 = tmp4344;
var inst_4286__$1 = tmp4343;
var inst_4287__$1 = tmp4342;
var inst_4288__$1 = inst_4296;
var state_4333__$1 = (function (){var statearr_4347 = state_4333;
(statearr_4347[(9)] = inst_4287__$1);

(statearr_4347[(10)] = inst_4286__$1);

(statearr_4347[(11)] = inst_4288__$1);

(statearr_4347[(14)] = inst_4295);

(statearr_4347[(12)] = inst_4285__$1);

return statearr_4347;
})();
var statearr_4348_4380 = state_4333__$1;
(statearr_4348_4380[(2)] = null);

(statearr_4348_4380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (22))){
var state_4333__$1 = state_4333;
var statearr_4349_4381 = state_4333__$1;
(statearr_4349_4381[(2)] = null);

(statearr_4349_4381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (6))){
var inst_4274 = (state_4333[(13)]);
var inst_4283 = f.call(null,inst_4274);
var inst_4284 = cljs.core.seq.call(null,inst_4283);
var inst_4285 = inst_4284;
var inst_4286 = null;
var inst_4287 = (0);
var inst_4288 = (0);
var state_4333__$1 = (function (){var statearr_4350 = state_4333;
(statearr_4350[(9)] = inst_4287);

(statearr_4350[(10)] = inst_4286);

(statearr_4350[(11)] = inst_4288);

(statearr_4350[(12)] = inst_4285);

return statearr_4350;
})();
var statearr_4351_4382 = state_4333__$1;
(statearr_4351_4382[(2)] = null);

(statearr_4351_4382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (17))){
var inst_4299 = (state_4333[(7)]);
var inst_4303 = cljs.core.chunk_first.call(null,inst_4299);
var inst_4304 = cljs.core.chunk_rest.call(null,inst_4299);
var inst_4305 = cljs.core.count.call(null,inst_4303);
var inst_4285 = inst_4304;
var inst_4286 = inst_4303;
var inst_4287 = inst_4305;
var inst_4288 = (0);
var state_4333__$1 = (function (){var statearr_4352 = state_4333;
(statearr_4352[(9)] = inst_4287);

(statearr_4352[(10)] = inst_4286);

(statearr_4352[(11)] = inst_4288);

(statearr_4352[(12)] = inst_4285);

return statearr_4352;
})();
var statearr_4353_4383 = state_4333__$1;
(statearr_4353_4383[(2)] = null);

(statearr_4353_4383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (3))){
var inst_4331 = (state_4333[(2)]);
var state_4333__$1 = state_4333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4333__$1,inst_4331);
} else {
if((state_val_4334 === (12))){
var inst_4319 = (state_4333[(2)]);
var state_4333__$1 = state_4333;
var statearr_4354_4384 = state_4333__$1;
(statearr_4354_4384[(2)] = inst_4319);

(statearr_4354_4384[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (2))){
var state_4333__$1 = state_4333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4333__$1,(4),in$);
} else {
if((state_val_4334 === (23))){
var inst_4327 = (state_4333[(2)]);
var state_4333__$1 = state_4333;
var statearr_4355_4385 = state_4333__$1;
(statearr_4355_4385[(2)] = inst_4327);

(statearr_4355_4385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (19))){
var inst_4314 = (state_4333[(2)]);
var state_4333__$1 = state_4333;
var statearr_4356_4386 = state_4333__$1;
(statearr_4356_4386[(2)] = inst_4314);

(statearr_4356_4386[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (11))){
var inst_4299 = (state_4333[(7)]);
var inst_4285 = (state_4333[(12)]);
var inst_4299__$1 = cljs.core.seq.call(null,inst_4285);
var state_4333__$1 = (function (){var statearr_4357 = state_4333;
(statearr_4357[(7)] = inst_4299__$1);

return statearr_4357;
})();
if(inst_4299__$1){
var statearr_4358_4387 = state_4333__$1;
(statearr_4358_4387[(1)] = (14));

} else {
var statearr_4359_4388 = state_4333__$1;
(statearr_4359_4388[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (9))){
var inst_4321 = (state_4333[(2)]);
var inst_4322 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_4333__$1 = (function (){var statearr_4360 = state_4333;
(statearr_4360[(15)] = inst_4321);

return statearr_4360;
})();
if(cljs.core.truth_(inst_4322)){
var statearr_4361_4389 = state_4333__$1;
(statearr_4361_4389[(1)] = (21));

} else {
var statearr_4362_4390 = state_4333__$1;
(statearr_4362_4390[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (5))){
var inst_4277 = cljs.core.async.close_BANG_.call(null,out);
var state_4333__$1 = state_4333;
var statearr_4363_4391 = state_4333__$1;
(statearr_4363_4391[(2)] = inst_4277);

(statearr_4363_4391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (14))){
var inst_4299 = (state_4333[(7)]);
var inst_4301 = cljs.core.chunked_seq_QMARK_.call(null,inst_4299);
var state_4333__$1 = state_4333;
if(inst_4301){
var statearr_4364_4392 = state_4333__$1;
(statearr_4364_4392[(1)] = (17));

} else {
var statearr_4365_4393 = state_4333__$1;
(statearr_4365_4393[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (16))){
var inst_4317 = (state_4333[(2)]);
var state_4333__$1 = state_4333;
var statearr_4366_4394 = state_4333__$1;
(statearr_4366_4394[(2)] = inst_4317);

(statearr_4366_4394[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (10))){
var inst_4286 = (state_4333[(10)]);
var inst_4288 = (state_4333[(11)]);
var inst_4293 = cljs.core._nth.call(null,inst_4286,inst_4288);
var state_4333__$1 = state_4333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4333__$1,(13),out,inst_4293);
} else {
if((state_val_4334 === (18))){
var inst_4299 = (state_4333[(7)]);
var inst_4308 = cljs.core.first.call(null,inst_4299);
var state_4333__$1 = state_4333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4333__$1,(20),out,inst_4308);
} else {
if((state_val_4334 === (8))){
var inst_4287 = (state_4333[(9)]);
var inst_4288 = (state_4333[(11)]);
var inst_4290 = (inst_4288 < inst_4287);
var inst_4291 = inst_4290;
var state_4333__$1 = state_4333;
if(cljs.core.truth_(inst_4291)){
var statearr_4367_4395 = state_4333__$1;
(statearr_4367_4395[(1)] = (10));

} else {
var statearr_4368_4396 = state_4333__$1;
(statearr_4368_4396[(1)] = (11));

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
});})(c__2488__auto__))
;
return ((function (switch__2473__auto__,c__2488__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__2474__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__2474__auto____0 = (function (){
var statearr_4369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4369[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__2474__auto__);

(statearr_4369[(1)] = (1));

return statearr_4369;
});
var cljs$core$async$mapcat_STAR__$_state_machine__2474__auto____1 = (function (state_4333){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_4333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e4370){if((e4370 instanceof Object)){
var ex__2477__auto__ = e4370;
var statearr_4371_4397 = state_4333;
(statearr_4371_4397[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4398 = state_4333;
state_4333 = G__4398;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__2474__auto__ = function(state_4333){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__2474__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__2474__auto____1.call(this,state_4333);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__2474__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__2474__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__2474__auto__;
})()
;})(switch__2473__auto__,c__2488__auto__))
})();
var state__2490__auto__ = (function (){var statearr_4372 = f__2489__auto__.call(null);
(statearr_4372[(6)] = c__2488__auto__);

return statearr_4372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(c__2488__auto__))
);

return c__2488__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__4400 = arguments.length;
switch (G__4400) {
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
var G__4403 = arguments.length;
switch (G__4403) {
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
var G__4406 = arguments.length;
switch (G__4406) {
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
var c__2488__auto___4453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2488__auto___4453,out){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (c__2488__auto___4453,out){
return (function (state_4430){
var state_val_4431 = (state_4430[(1)]);
if((state_val_4431 === (7))){
var inst_4425 = (state_4430[(2)]);
var state_4430__$1 = state_4430;
var statearr_4432_4454 = state_4430__$1;
(statearr_4432_4454[(2)] = inst_4425);

(statearr_4432_4454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4431 === (1))){
var inst_4407 = null;
var state_4430__$1 = (function (){var statearr_4433 = state_4430;
(statearr_4433[(7)] = inst_4407);

return statearr_4433;
})();
var statearr_4434_4455 = state_4430__$1;
(statearr_4434_4455[(2)] = null);

(statearr_4434_4455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4431 === (4))){
var inst_4410 = (state_4430[(8)]);
var inst_4410__$1 = (state_4430[(2)]);
var inst_4411 = (inst_4410__$1 == null);
var inst_4412 = cljs.core.not.call(null,inst_4411);
var state_4430__$1 = (function (){var statearr_4435 = state_4430;
(statearr_4435[(8)] = inst_4410__$1);

return statearr_4435;
})();
if(inst_4412){
var statearr_4436_4456 = state_4430__$1;
(statearr_4436_4456[(1)] = (5));

} else {
var statearr_4437_4457 = state_4430__$1;
(statearr_4437_4457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4431 === (6))){
var state_4430__$1 = state_4430;
var statearr_4438_4458 = state_4430__$1;
(statearr_4438_4458[(2)] = null);

(statearr_4438_4458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4431 === (3))){
var inst_4427 = (state_4430[(2)]);
var inst_4428 = cljs.core.async.close_BANG_.call(null,out);
var state_4430__$1 = (function (){var statearr_4439 = state_4430;
(statearr_4439[(9)] = inst_4427);

return statearr_4439;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4430__$1,inst_4428);
} else {
if((state_val_4431 === (2))){
var state_4430__$1 = state_4430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4430__$1,(4),ch);
} else {
if((state_val_4431 === (11))){
var inst_4410 = (state_4430[(8)]);
var inst_4419 = (state_4430[(2)]);
var inst_4407 = inst_4410;
var state_4430__$1 = (function (){var statearr_4440 = state_4430;
(statearr_4440[(7)] = inst_4407);

(statearr_4440[(10)] = inst_4419);

return statearr_4440;
})();
var statearr_4441_4459 = state_4430__$1;
(statearr_4441_4459[(2)] = null);

(statearr_4441_4459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4431 === (9))){
var inst_4410 = (state_4430[(8)]);
var state_4430__$1 = state_4430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4430__$1,(11),out,inst_4410);
} else {
if((state_val_4431 === (5))){
var inst_4410 = (state_4430[(8)]);
var inst_4407 = (state_4430[(7)]);
var inst_4414 = cljs.core._EQ_.call(null,inst_4410,inst_4407);
var state_4430__$1 = state_4430;
if(inst_4414){
var statearr_4443_4460 = state_4430__$1;
(statearr_4443_4460[(1)] = (8));

} else {
var statearr_4444_4461 = state_4430__$1;
(statearr_4444_4461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4431 === (10))){
var inst_4422 = (state_4430[(2)]);
var state_4430__$1 = state_4430;
var statearr_4445_4462 = state_4430__$1;
(statearr_4445_4462[(2)] = inst_4422);

(statearr_4445_4462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4431 === (8))){
var inst_4407 = (state_4430[(7)]);
var tmp4442 = inst_4407;
var inst_4407__$1 = tmp4442;
var state_4430__$1 = (function (){var statearr_4446 = state_4430;
(statearr_4446[(7)] = inst_4407__$1);

return statearr_4446;
})();
var statearr_4447_4463 = state_4430__$1;
(statearr_4447_4463[(2)] = null);

(statearr_4447_4463[(1)] = (2));


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
});})(c__2488__auto___4453,out))
;
return ((function (switch__2473__auto__,c__2488__auto___4453,out){
return (function() {
var cljs$core$async$state_machine__2474__auto__ = null;
var cljs$core$async$state_machine__2474__auto____0 = (function (){
var statearr_4448 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4448[(0)] = cljs$core$async$state_machine__2474__auto__);

(statearr_4448[(1)] = (1));

return statearr_4448;
});
var cljs$core$async$state_machine__2474__auto____1 = (function (state_4430){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_4430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e4449){if((e4449 instanceof Object)){
var ex__2477__auto__ = e4449;
var statearr_4450_4464 = state_4430;
(statearr_4450_4464[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4465 = state_4430;
state_4430 = G__4465;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
cljs$core$async$state_machine__2474__auto__ = function(state_4430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2474__auto____1.call(this,state_4430);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2474__auto____0;
cljs$core$async$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2474__auto____1;
return cljs$core$async$state_machine__2474__auto__;
})()
;})(switch__2473__auto__,c__2488__auto___4453,out))
})();
var state__2490__auto__ = (function (){var statearr_4451 = f__2489__auto__.call(null);
(statearr_4451[(6)] = c__2488__auto___4453);

return statearr_4451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(c__2488__auto___4453,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__4467 = arguments.length;
switch (G__4467) {
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
var c__2488__auto___4533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2488__auto___4533,out){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (c__2488__auto___4533,out){
return (function (state_4505){
var state_val_4506 = (state_4505[(1)]);
if((state_val_4506 === (7))){
var inst_4501 = (state_4505[(2)]);
var state_4505__$1 = state_4505;
var statearr_4507_4534 = state_4505__$1;
(statearr_4507_4534[(2)] = inst_4501);

(statearr_4507_4534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4506 === (1))){
var inst_4468 = (new Array(n));
var inst_4469 = inst_4468;
var inst_4470 = (0);
var state_4505__$1 = (function (){var statearr_4508 = state_4505;
(statearr_4508[(7)] = inst_4469);

(statearr_4508[(8)] = inst_4470);

return statearr_4508;
})();
var statearr_4509_4535 = state_4505__$1;
(statearr_4509_4535[(2)] = null);

(statearr_4509_4535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4506 === (4))){
var inst_4473 = (state_4505[(9)]);
var inst_4473__$1 = (state_4505[(2)]);
var inst_4474 = (inst_4473__$1 == null);
var inst_4475 = cljs.core.not.call(null,inst_4474);
var state_4505__$1 = (function (){var statearr_4510 = state_4505;
(statearr_4510[(9)] = inst_4473__$1);

return statearr_4510;
})();
if(inst_4475){
var statearr_4511_4536 = state_4505__$1;
(statearr_4511_4536[(1)] = (5));

} else {
var statearr_4512_4537 = state_4505__$1;
(statearr_4512_4537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4506 === (15))){
var inst_4495 = (state_4505[(2)]);
var state_4505__$1 = state_4505;
var statearr_4513_4538 = state_4505__$1;
(statearr_4513_4538[(2)] = inst_4495);

(statearr_4513_4538[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4506 === (13))){
var state_4505__$1 = state_4505;
var statearr_4514_4539 = state_4505__$1;
(statearr_4514_4539[(2)] = null);

(statearr_4514_4539[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4506 === (6))){
var inst_4470 = (state_4505[(8)]);
var inst_4491 = (inst_4470 > (0));
var state_4505__$1 = state_4505;
if(cljs.core.truth_(inst_4491)){
var statearr_4515_4540 = state_4505__$1;
(statearr_4515_4540[(1)] = (12));

} else {
var statearr_4516_4541 = state_4505__$1;
(statearr_4516_4541[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4506 === (3))){
var inst_4503 = (state_4505[(2)]);
var state_4505__$1 = state_4505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4505__$1,inst_4503);
} else {
if((state_val_4506 === (12))){
var inst_4469 = (state_4505[(7)]);
var inst_4493 = cljs.core.vec.call(null,inst_4469);
var state_4505__$1 = state_4505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4505__$1,(15),out,inst_4493);
} else {
if((state_val_4506 === (2))){
var state_4505__$1 = state_4505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4505__$1,(4),ch);
} else {
if((state_val_4506 === (11))){
var inst_4485 = (state_4505[(2)]);
var inst_4486 = (new Array(n));
var inst_4469 = inst_4486;
var inst_4470 = (0);
var state_4505__$1 = (function (){var statearr_4517 = state_4505;
(statearr_4517[(7)] = inst_4469);

(statearr_4517[(10)] = inst_4485);

(statearr_4517[(8)] = inst_4470);

return statearr_4517;
})();
var statearr_4518_4542 = state_4505__$1;
(statearr_4518_4542[(2)] = null);

(statearr_4518_4542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4506 === (9))){
var inst_4469 = (state_4505[(7)]);
var inst_4483 = cljs.core.vec.call(null,inst_4469);
var state_4505__$1 = state_4505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4505__$1,(11),out,inst_4483);
} else {
if((state_val_4506 === (5))){
var inst_4469 = (state_4505[(7)]);
var inst_4473 = (state_4505[(9)]);
var inst_4470 = (state_4505[(8)]);
var inst_4478 = (state_4505[(11)]);
var inst_4477 = (inst_4469[inst_4470] = inst_4473);
var inst_4478__$1 = (inst_4470 + (1));
var inst_4479 = (inst_4478__$1 < n);
var state_4505__$1 = (function (){var statearr_4519 = state_4505;
(statearr_4519[(12)] = inst_4477);

(statearr_4519[(11)] = inst_4478__$1);

return statearr_4519;
})();
if(cljs.core.truth_(inst_4479)){
var statearr_4520_4543 = state_4505__$1;
(statearr_4520_4543[(1)] = (8));

} else {
var statearr_4521_4544 = state_4505__$1;
(statearr_4521_4544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4506 === (14))){
var inst_4498 = (state_4505[(2)]);
var inst_4499 = cljs.core.async.close_BANG_.call(null,out);
var state_4505__$1 = (function (){var statearr_4523 = state_4505;
(statearr_4523[(13)] = inst_4498);

return statearr_4523;
})();
var statearr_4524_4545 = state_4505__$1;
(statearr_4524_4545[(2)] = inst_4499);

(statearr_4524_4545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4506 === (10))){
var inst_4489 = (state_4505[(2)]);
var state_4505__$1 = state_4505;
var statearr_4525_4546 = state_4505__$1;
(statearr_4525_4546[(2)] = inst_4489);

(statearr_4525_4546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4506 === (8))){
var inst_4469 = (state_4505[(7)]);
var inst_4478 = (state_4505[(11)]);
var tmp4522 = inst_4469;
var inst_4469__$1 = tmp4522;
var inst_4470 = inst_4478;
var state_4505__$1 = (function (){var statearr_4526 = state_4505;
(statearr_4526[(7)] = inst_4469__$1);

(statearr_4526[(8)] = inst_4470);

return statearr_4526;
})();
var statearr_4527_4547 = state_4505__$1;
(statearr_4527_4547[(2)] = null);

(statearr_4527_4547[(1)] = (2));


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
});})(c__2488__auto___4533,out))
;
return ((function (switch__2473__auto__,c__2488__auto___4533,out){
return (function() {
var cljs$core$async$state_machine__2474__auto__ = null;
var cljs$core$async$state_machine__2474__auto____0 = (function (){
var statearr_4528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4528[(0)] = cljs$core$async$state_machine__2474__auto__);

(statearr_4528[(1)] = (1));

return statearr_4528;
});
var cljs$core$async$state_machine__2474__auto____1 = (function (state_4505){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_4505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e4529){if((e4529 instanceof Object)){
var ex__2477__auto__ = e4529;
var statearr_4530_4548 = state_4505;
(statearr_4530_4548[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4549 = state_4505;
state_4505 = G__4549;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
cljs$core$async$state_machine__2474__auto__ = function(state_4505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2474__auto____1.call(this,state_4505);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2474__auto____0;
cljs$core$async$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2474__auto____1;
return cljs$core$async$state_machine__2474__auto__;
})()
;})(switch__2473__auto__,c__2488__auto___4533,out))
})();
var state__2490__auto__ = (function (){var statearr_4531 = f__2489__auto__.call(null);
(statearr_4531[(6)] = c__2488__auto___4533);

return statearr_4531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(c__2488__auto___4533,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__4551 = arguments.length;
switch (G__4551) {
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
var c__2488__auto___4621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2488__auto___4621,out){
return (function (){
var f__2489__auto__ = (function (){var switch__2473__auto__ = ((function (c__2488__auto___4621,out){
return (function (state_4593){
var state_val_4594 = (state_4593[(1)]);
if((state_val_4594 === (7))){
var inst_4589 = (state_4593[(2)]);
var state_4593__$1 = state_4593;
var statearr_4595_4622 = state_4593__$1;
(statearr_4595_4622[(2)] = inst_4589);

(statearr_4595_4622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (1))){
var inst_4552 = [];
var inst_4553 = inst_4552;
var inst_4554 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_4593__$1 = (function (){var statearr_4596 = state_4593;
(statearr_4596[(7)] = inst_4554);

(statearr_4596[(8)] = inst_4553);

return statearr_4596;
})();
var statearr_4597_4623 = state_4593__$1;
(statearr_4597_4623[(2)] = null);

(statearr_4597_4623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (4))){
var inst_4557 = (state_4593[(9)]);
var inst_4557__$1 = (state_4593[(2)]);
var inst_4558 = (inst_4557__$1 == null);
var inst_4559 = cljs.core.not.call(null,inst_4558);
var state_4593__$1 = (function (){var statearr_4598 = state_4593;
(statearr_4598[(9)] = inst_4557__$1);

return statearr_4598;
})();
if(inst_4559){
var statearr_4599_4624 = state_4593__$1;
(statearr_4599_4624[(1)] = (5));

} else {
var statearr_4600_4625 = state_4593__$1;
(statearr_4600_4625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (15))){
var inst_4583 = (state_4593[(2)]);
var state_4593__$1 = state_4593;
var statearr_4601_4626 = state_4593__$1;
(statearr_4601_4626[(2)] = inst_4583);

(statearr_4601_4626[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (13))){
var state_4593__$1 = state_4593;
var statearr_4602_4627 = state_4593__$1;
(statearr_4602_4627[(2)] = null);

(statearr_4602_4627[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (6))){
var inst_4553 = (state_4593[(8)]);
var inst_4578 = inst_4553.length;
var inst_4579 = (inst_4578 > (0));
var state_4593__$1 = state_4593;
if(cljs.core.truth_(inst_4579)){
var statearr_4603_4628 = state_4593__$1;
(statearr_4603_4628[(1)] = (12));

} else {
var statearr_4604_4629 = state_4593__$1;
(statearr_4604_4629[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (3))){
var inst_4591 = (state_4593[(2)]);
var state_4593__$1 = state_4593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4593__$1,inst_4591);
} else {
if((state_val_4594 === (12))){
var inst_4553 = (state_4593[(8)]);
var inst_4581 = cljs.core.vec.call(null,inst_4553);
var state_4593__$1 = state_4593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4593__$1,(15),out,inst_4581);
} else {
if((state_val_4594 === (2))){
var state_4593__$1 = state_4593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4593__$1,(4),ch);
} else {
if((state_val_4594 === (11))){
var inst_4557 = (state_4593[(9)]);
var inst_4561 = (state_4593[(10)]);
var inst_4571 = (state_4593[(2)]);
var inst_4572 = [];
var inst_4573 = inst_4572.push(inst_4557);
var inst_4553 = inst_4572;
var inst_4554 = inst_4561;
var state_4593__$1 = (function (){var statearr_4605 = state_4593;
(statearr_4605[(7)] = inst_4554);

(statearr_4605[(11)] = inst_4573);

(statearr_4605[(8)] = inst_4553);

(statearr_4605[(12)] = inst_4571);

return statearr_4605;
})();
var statearr_4606_4630 = state_4593__$1;
(statearr_4606_4630[(2)] = null);

(statearr_4606_4630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (9))){
var inst_4553 = (state_4593[(8)]);
var inst_4569 = cljs.core.vec.call(null,inst_4553);
var state_4593__$1 = state_4593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4593__$1,(11),out,inst_4569);
} else {
if((state_val_4594 === (5))){
var inst_4557 = (state_4593[(9)]);
var inst_4554 = (state_4593[(7)]);
var inst_4561 = (state_4593[(10)]);
var inst_4561__$1 = f.call(null,inst_4557);
var inst_4562 = cljs.core._EQ_.call(null,inst_4561__$1,inst_4554);
var inst_4563 = cljs.core.keyword_identical_QMARK_.call(null,inst_4554,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_4564 = ((inst_4562) || (inst_4563));
var state_4593__$1 = (function (){var statearr_4607 = state_4593;
(statearr_4607[(10)] = inst_4561__$1);

return statearr_4607;
})();
if(cljs.core.truth_(inst_4564)){
var statearr_4608_4631 = state_4593__$1;
(statearr_4608_4631[(1)] = (8));

} else {
var statearr_4609_4632 = state_4593__$1;
(statearr_4609_4632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (14))){
var inst_4586 = (state_4593[(2)]);
var inst_4587 = cljs.core.async.close_BANG_.call(null,out);
var state_4593__$1 = (function (){var statearr_4611 = state_4593;
(statearr_4611[(13)] = inst_4586);

return statearr_4611;
})();
var statearr_4612_4633 = state_4593__$1;
(statearr_4612_4633[(2)] = inst_4587);

(statearr_4612_4633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (10))){
var inst_4576 = (state_4593[(2)]);
var state_4593__$1 = state_4593;
var statearr_4613_4634 = state_4593__$1;
(statearr_4613_4634[(2)] = inst_4576);

(statearr_4613_4634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4594 === (8))){
var inst_4557 = (state_4593[(9)]);
var inst_4553 = (state_4593[(8)]);
var inst_4561 = (state_4593[(10)]);
var inst_4566 = inst_4553.push(inst_4557);
var tmp4610 = inst_4553;
var inst_4553__$1 = tmp4610;
var inst_4554 = inst_4561;
var state_4593__$1 = (function (){var statearr_4614 = state_4593;
(statearr_4614[(7)] = inst_4554);

(statearr_4614[(8)] = inst_4553__$1);

(statearr_4614[(14)] = inst_4566);

return statearr_4614;
})();
var statearr_4615_4635 = state_4593__$1;
(statearr_4615_4635[(2)] = null);

(statearr_4615_4635[(1)] = (2));


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
});})(c__2488__auto___4621,out))
;
return ((function (switch__2473__auto__,c__2488__auto___4621,out){
return (function() {
var cljs$core$async$state_machine__2474__auto__ = null;
var cljs$core$async$state_machine__2474__auto____0 = (function (){
var statearr_4616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4616[(0)] = cljs$core$async$state_machine__2474__auto__);

(statearr_4616[(1)] = (1));

return statearr_4616;
});
var cljs$core$async$state_machine__2474__auto____1 = (function (state_4593){
while(true){
var ret_value__2475__auto__ = (function (){try{while(true){
var result__2476__auto__ = switch__2473__auto__.call(null,state_4593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2476__auto__;
}
break;
}
}catch (e4617){if((e4617 instanceof Object)){
var ex__2477__auto__ = e4617;
var statearr_4618_4636 = state_4593;
(statearr_4618_4636[(5)] = ex__2477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4637 = state_4593;
state_4593 = G__4637;
continue;
} else {
return ret_value__2475__auto__;
}
break;
}
});
cljs$core$async$state_machine__2474__auto__ = function(state_4593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2474__auto____1.call(this,state_4593);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2474__auto____0;
cljs$core$async$state_machine__2474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2474__auto____1;
return cljs$core$async$state_machine__2474__auto__;
})()
;})(switch__2473__auto__,c__2488__auto___4621,out))
})();
var state__2490__auto__ = (function (){var statearr_4619 = f__2489__auto__.call(null);
(statearr_4619[(6)] = c__2488__auto___4621);

return statearr_4619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2490__auto__);
});})(c__2488__auto___4621,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1529003133488
