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
var G__22629 = arguments.length;
switch (G__22629) {
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
if(typeof cljs.core.async.t_cljs$core$async22630 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22630 = (function (f,blockable,meta22631){
this.f = f;
this.blockable = blockable;
this.meta22631 = meta22631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22632,meta22631__$1){
var self__ = this;
var _22632__$1 = this;
return (new cljs.core.async.t_cljs$core$async22630(self__.f,self__.blockable,meta22631__$1));
});

cljs.core.async.t_cljs$core$async22630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22632){
var self__ = this;
var _22632__$1 = this;
return self__.meta22631;
});

cljs.core.async.t_cljs$core$async22630.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22630.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22630.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22630.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22630.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22631","meta22631",1120733157,null)], null);
});

cljs.core.async.t_cljs$core$async22630.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22630";

cljs.core.async.t_cljs$core$async22630.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22630");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22630.
 */
cljs.core.async.__GT_t_cljs$core$async22630 = (function cljs$core$async$__GT_t_cljs$core$async22630(f__$1,blockable__$1,meta22631){
return (new cljs.core.async.t_cljs$core$async22630(f__$1,blockable__$1,meta22631));
});

}

return (new cljs.core.async.t_cljs$core$async22630(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__22636 = arguments.length;
switch (G__22636) {
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
var G__22639 = arguments.length;
switch (G__22639) {
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
var G__22642 = arguments.length;
switch (G__22642) {
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
var val_22644 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22644);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22644,ret){
return (function (){
return fn1.call(null,val_22644);
});})(val_22644,ret))
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
var G__22646 = arguments.length;
switch (G__22646) {
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
var n__4376__auto___22648 = n;
var x_22649 = (0);
while(true){
if((x_22649 < n__4376__auto___22648)){
(a[x_22649] = (0));

var G__22650 = (x_22649 + (1));
x_22649 = G__22650;
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

var G__22651 = (i + (1));
i = G__22651;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22652 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22652 = (function (flag,meta22653){
this.flag = flag;
this.meta22653 = meta22653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22654,meta22653__$1){
var self__ = this;
var _22654__$1 = this;
return (new cljs.core.async.t_cljs$core$async22652(self__.flag,meta22653__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22652.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22654){
var self__ = this;
var _22654__$1 = this;
return self__.meta22653;
});})(flag))
;

cljs.core.async.t_cljs$core$async22652.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22652.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22652.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22652.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22652.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22653","meta22653",648469553,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22652.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22652";

cljs.core.async.t_cljs$core$async22652.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22652");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22652.
 */
cljs.core.async.__GT_t_cljs$core$async22652 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22652(flag__$1,meta22653){
return (new cljs.core.async.t_cljs$core$async22652(flag__$1,meta22653));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22652(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22655 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22655 = (function (flag,cb,meta22656){
this.flag = flag;
this.cb = cb;
this.meta22656 = meta22656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22657,meta22656__$1){
var self__ = this;
var _22657__$1 = this;
return (new cljs.core.async.t_cljs$core$async22655(self__.flag,self__.cb,meta22656__$1));
});

cljs.core.async.t_cljs$core$async22655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22657){
var self__ = this;
var _22657__$1 = this;
return self__.meta22656;
});

cljs.core.async.t_cljs$core$async22655.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22655.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22655.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22655.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22655.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22656","meta22656",766817961,null)], null);
});

cljs.core.async.t_cljs$core$async22655.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22655";

cljs.core.async.t_cljs$core$async22655.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22655");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22655.
 */
cljs.core.async.__GT_t_cljs$core$async22655 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22655(flag__$1,cb__$1,meta22656){
return (new cljs.core.async.t_cljs$core$async22655(flag__$1,cb__$1,meta22656));
});

}

return (new cljs.core.async.t_cljs$core$async22655(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22658_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22658_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22659_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22659_SHARP_,port], null));
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
var G__22660 = (i + (1));
i = G__22660;
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
var len__4499__auto___22666 = arguments.length;
var i__4500__auto___22667 = (0);
while(true){
if((i__4500__auto___22667 < len__4499__auto___22666)){
args__4502__auto__.push((arguments[i__4500__auto___22667]));

var G__22668 = (i__4500__auto___22667 + (1));
i__4500__auto___22667 = G__22668;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22663){
var map__22664 = p__22663;
var map__22664__$1 = ((((!((map__22664 == null)))?(((((map__22664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22664):map__22664);
var opts = map__22664__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22661){
var G__22662 = cljs.core.first.call(null,seq22661);
var seq22661__$1 = cljs.core.next.call(null,seq22661);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22662,seq22661__$1);
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
var G__22670 = arguments.length;
switch (G__22670) {
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
var c__22583__auto___22716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto___22716){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto___22716){
return (function (state_22694){
var state_val_22695 = (state_22694[(1)]);
if((state_val_22695 === (7))){
var inst_22690 = (state_22694[(2)]);
var state_22694__$1 = state_22694;
var statearr_22696_22717 = state_22694__$1;
(statearr_22696_22717[(2)] = inst_22690);

(statearr_22696_22717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22695 === (1))){
var state_22694__$1 = state_22694;
var statearr_22697_22718 = state_22694__$1;
(statearr_22697_22718[(2)] = null);

(statearr_22697_22718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22695 === (4))){
var inst_22673 = (state_22694[(7)]);
var inst_22673__$1 = (state_22694[(2)]);
var inst_22674 = (inst_22673__$1 == null);
var state_22694__$1 = (function (){var statearr_22698 = state_22694;
(statearr_22698[(7)] = inst_22673__$1);

return statearr_22698;
})();
if(cljs.core.truth_(inst_22674)){
var statearr_22699_22719 = state_22694__$1;
(statearr_22699_22719[(1)] = (5));

} else {
var statearr_22700_22720 = state_22694__$1;
(statearr_22700_22720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22695 === (13))){
var state_22694__$1 = state_22694;
var statearr_22701_22721 = state_22694__$1;
(statearr_22701_22721[(2)] = null);

(statearr_22701_22721[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22695 === (6))){
var inst_22673 = (state_22694[(7)]);
var state_22694__$1 = state_22694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22694__$1,(11),to,inst_22673);
} else {
if((state_val_22695 === (3))){
var inst_22692 = (state_22694[(2)]);
var state_22694__$1 = state_22694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22694__$1,inst_22692);
} else {
if((state_val_22695 === (12))){
var state_22694__$1 = state_22694;
var statearr_22702_22722 = state_22694__$1;
(statearr_22702_22722[(2)] = null);

(statearr_22702_22722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22695 === (2))){
var state_22694__$1 = state_22694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22694__$1,(4),from);
} else {
if((state_val_22695 === (11))){
var inst_22683 = (state_22694[(2)]);
var state_22694__$1 = state_22694;
if(cljs.core.truth_(inst_22683)){
var statearr_22703_22723 = state_22694__$1;
(statearr_22703_22723[(1)] = (12));

} else {
var statearr_22704_22724 = state_22694__$1;
(statearr_22704_22724[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22695 === (9))){
var state_22694__$1 = state_22694;
var statearr_22705_22725 = state_22694__$1;
(statearr_22705_22725[(2)] = null);

(statearr_22705_22725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22695 === (5))){
var state_22694__$1 = state_22694;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22706_22726 = state_22694__$1;
(statearr_22706_22726[(1)] = (8));

} else {
var statearr_22707_22727 = state_22694__$1;
(statearr_22707_22727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22695 === (14))){
var inst_22688 = (state_22694[(2)]);
var state_22694__$1 = state_22694;
var statearr_22708_22728 = state_22694__$1;
(statearr_22708_22728[(2)] = inst_22688);

(statearr_22708_22728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22695 === (10))){
var inst_22680 = (state_22694[(2)]);
var state_22694__$1 = state_22694;
var statearr_22709_22729 = state_22694__$1;
(statearr_22709_22729[(2)] = inst_22680);

(statearr_22709_22729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22695 === (8))){
var inst_22677 = cljs.core.async.close_BANG_.call(null,to);
var state_22694__$1 = state_22694;
var statearr_22710_22730 = state_22694__$1;
(statearr_22710_22730[(2)] = inst_22677);

(statearr_22710_22730[(1)] = (10));


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
});})(c__22583__auto___22716))
;
return ((function (switch__22495__auto__,c__22583__auto___22716){
return (function() {
var cljs$core$async$state_machine__22496__auto__ = null;
var cljs$core$async$state_machine__22496__auto____0 = (function (){
var statearr_22711 = [null,null,null,null,null,null,null,null];
(statearr_22711[(0)] = cljs$core$async$state_machine__22496__auto__);

(statearr_22711[(1)] = (1));

return statearr_22711;
});
var cljs$core$async$state_machine__22496__auto____1 = (function (state_22694){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_22694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e22712){if((e22712 instanceof Object)){
var ex__22499__auto__ = e22712;
var statearr_22713_22731 = state_22694;
(statearr_22713_22731[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22732 = state_22694;
state_22694 = G__22732;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
cljs$core$async$state_machine__22496__auto__ = function(state_22694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22496__auto____1.call(this,state_22694);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22496__auto____0;
cljs$core$async$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22496__auto____1;
return cljs$core$async$state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto___22716))
})();
var state__22585__auto__ = (function (){var statearr_22714 = f__22584__auto__.call(null);
(statearr_22714[(6)] = c__22583__auto___22716);

return statearr_22714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto___22716))
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
return (function (p__22733){
var vec__22734 = p__22733;
var v = cljs.core.nth.call(null,vec__22734,(0),null);
var p = cljs.core.nth.call(null,vec__22734,(1),null);
var job = vec__22734;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22583__auto___22905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto___22905,res,vec__22734,v,p,job,jobs,results){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto___22905,res,vec__22734,v,p,job,jobs,results){
return (function (state_22741){
var state_val_22742 = (state_22741[(1)]);
if((state_val_22742 === (1))){
var state_22741__$1 = state_22741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22741__$1,(2),res,v);
} else {
if((state_val_22742 === (2))){
var inst_22738 = (state_22741[(2)]);
var inst_22739 = cljs.core.async.close_BANG_.call(null,res);
var state_22741__$1 = (function (){var statearr_22743 = state_22741;
(statearr_22743[(7)] = inst_22738);

return statearr_22743;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22741__$1,inst_22739);
} else {
return null;
}
}
});})(c__22583__auto___22905,res,vec__22734,v,p,job,jobs,results))
;
return ((function (switch__22495__auto__,c__22583__auto___22905,res,vec__22734,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____0 = (function (){
var statearr_22744 = [null,null,null,null,null,null,null,null];
(statearr_22744[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__);

(statearr_22744[(1)] = (1));

return statearr_22744;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____1 = (function (state_22741){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_22741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e22745){if((e22745 instanceof Object)){
var ex__22499__auto__ = e22745;
var statearr_22746_22906 = state_22741;
(statearr_22746_22906[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22907 = state_22741;
state_22741 = G__22907;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__ = function(state_22741){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____1.call(this,state_22741);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto___22905,res,vec__22734,v,p,job,jobs,results))
})();
var state__22585__auto__ = (function (){var statearr_22747 = f__22584__auto__.call(null);
(statearr_22747[(6)] = c__22583__auto___22905);

return statearr_22747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto___22905,res,vec__22734,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22748){
var vec__22749 = p__22748;
var v = cljs.core.nth.call(null,vec__22749,(0),null);
var p = cljs.core.nth.call(null,vec__22749,(1),null);
var job = vec__22749;
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
var n__4376__auto___22908 = n;
var __22909 = (0);
while(true){
if((__22909 < n__4376__auto___22908)){
var G__22752_22910 = type;
var G__22752_22911__$1 = (((G__22752_22910 instanceof cljs.core.Keyword))?G__22752_22910.fqn:null);
switch (G__22752_22911__$1) {
case "compute":
var c__22583__auto___22913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22909,c__22583__auto___22913,G__22752_22910,G__22752_22911__$1,n__4376__auto___22908,jobs,results,process,async){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (__22909,c__22583__auto___22913,G__22752_22910,G__22752_22911__$1,n__4376__auto___22908,jobs,results,process,async){
return (function (state_22765){
var state_val_22766 = (state_22765[(1)]);
if((state_val_22766 === (1))){
var state_22765__$1 = state_22765;
var statearr_22767_22914 = state_22765__$1;
(statearr_22767_22914[(2)] = null);

(statearr_22767_22914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22766 === (2))){
var state_22765__$1 = state_22765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22765__$1,(4),jobs);
} else {
if((state_val_22766 === (3))){
var inst_22763 = (state_22765[(2)]);
var state_22765__$1 = state_22765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22765__$1,inst_22763);
} else {
if((state_val_22766 === (4))){
var inst_22755 = (state_22765[(2)]);
var inst_22756 = process.call(null,inst_22755);
var state_22765__$1 = state_22765;
if(cljs.core.truth_(inst_22756)){
var statearr_22768_22915 = state_22765__$1;
(statearr_22768_22915[(1)] = (5));

} else {
var statearr_22769_22916 = state_22765__$1;
(statearr_22769_22916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22766 === (5))){
var state_22765__$1 = state_22765;
var statearr_22770_22917 = state_22765__$1;
(statearr_22770_22917[(2)] = null);

(statearr_22770_22917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22766 === (6))){
var state_22765__$1 = state_22765;
var statearr_22771_22918 = state_22765__$1;
(statearr_22771_22918[(2)] = null);

(statearr_22771_22918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22766 === (7))){
var inst_22761 = (state_22765[(2)]);
var state_22765__$1 = state_22765;
var statearr_22772_22919 = state_22765__$1;
(statearr_22772_22919[(2)] = inst_22761);

(statearr_22772_22919[(1)] = (3));


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
});})(__22909,c__22583__auto___22913,G__22752_22910,G__22752_22911__$1,n__4376__auto___22908,jobs,results,process,async))
;
return ((function (__22909,switch__22495__auto__,c__22583__auto___22913,G__22752_22910,G__22752_22911__$1,n__4376__auto___22908,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____0 = (function (){
var statearr_22773 = [null,null,null,null,null,null,null];
(statearr_22773[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__);

(statearr_22773[(1)] = (1));

return statearr_22773;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____1 = (function (state_22765){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_22765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e22774){if((e22774 instanceof Object)){
var ex__22499__auto__ = e22774;
var statearr_22775_22920 = state_22765;
(statearr_22775_22920[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22921 = state_22765;
state_22765 = G__22921;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__ = function(state_22765){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____1.call(this,state_22765);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__;
})()
;})(__22909,switch__22495__auto__,c__22583__auto___22913,G__22752_22910,G__22752_22911__$1,n__4376__auto___22908,jobs,results,process,async))
})();
var state__22585__auto__ = (function (){var statearr_22776 = f__22584__auto__.call(null);
(statearr_22776[(6)] = c__22583__auto___22913);

return statearr_22776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(__22909,c__22583__auto___22913,G__22752_22910,G__22752_22911__$1,n__4376__auto___22908,jobs,results,process,async))
);


break;
case "async":
var c__22583__auto___22922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22909,c__22583__auto___22922,G__22752_22910,G__22752_22911__$1,n__4376__auto___22908,jobs,results,process,async){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (__22909,c__22583__auto___22922,G__22752_22910,G__22752_22911__$1,n__4376__auto___22908,jobs,results,process,async){
return (function (state_22789){
var state_val_22790 = (state_22789[(1)]);
if((state_val_22790 === (1))){
var state_22789__$1 = state_22789;
var statearr_22791_22923 = state_22789__$1;
(statearr_22791_22923[(2)] = null);

(statearr_22791_22923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22790 === (2))){
var state_22789__$1 = state_22789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22789__$1,(4),jobs);
} else {
if((state_val_22790 === (3))){
var inst_22787 = (state_22789[(2)]);
var state_22789__$1 = state_22789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22789__$1,inst_22787);
} else {
if((state_val_22790 === (4))){
var inst_22779 = (state_22789[(2)]);
var inst_22780 = async.call(null,inst_22779);
var state_22789__$1 = state_22789;
if(cljs.core.truth_(inst_22780)){
var statearr_22792_22924 = state_22789__$1;
(statearr_22792_22924[(1)] = (5));

} else {
var statearr_22793_22925 = state_22789__$1;
(statearr_22793_22925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22790 === (5))){
var state_22789__$1 = state_22789;
var statearr_22794_22926 = state_22789__$1;
(statearr_22794_22926[(2)] = null);

(statearr_22794_22926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22790 === (6))){
var state_22789__$1 = state_22789;
var statearr_22795_22927 = state_22789__$1;
(statearr_22795_22927[(2)] = null);

(statearr_22795_22927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22790 === (7))){
var inst_22785 = (state_22789[(2)]);
var state_22789__$1 = state_22789;
var statearr_22796_22928 = state_22789__$1;
(statearr_22796_22928[(2)] = inst_22785);

(statearr_22796_22928[(1)] = (3));


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
});})(__22909,c__22583__auto___22922,G__22752_22910,G__22752_22911__$1,n__4376__auto___22908,jobs,results,process,async))
;
return ((function (__22909,switch__22495__auto__,c__22583__auto___22922,G__22752_22910,G__22752_22911__$1,n__4376__auto___22908,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____0 = (function (){
var statearr_22797 = [null,null,null,null,null,null,null];
(statearr_22797[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__);

(statearr_22797[(1)] = (1));

return statearr_22797;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____1 = (function (state_22789){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_22789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e22798){if((e22798 instanceof Object)){
var ex__22499__auto__ = e22798;
var statearr_22799_22929 = state_22789;
(statearr_22799_22929[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22930 = state_22789;
state_22789 = G__22930;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__ = function(state_22789){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____1.call(this,state_22789);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__;
})()
;})(__22909,switch__22495__auto__,c__22583__auto___22922,G__22752_22910,G__22752_22911__$1,n__4376__auto___22908,jobs,results,process,async))
})();
var state__22585__auto__ = (function (){var statearr_22800 = f__22584__auto__.call(null);
(statearr_22800[(6)] = c__22583__auto___22922);

return statearr_22800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(__22909,c__22583__auto___22922,G__22752_22910,G__22752_22911__$1,n__4376__auto___22908,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22752_22911__$1)].join('')));

}

var G__22931 = (__22909 + (1));
__22909 = G__22931;
continue;
} else {
}
break;
}

var c__22583__auto___22932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto___22932,jobs,results,process,async){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto___22932,jobs,results,process,async){
return (function (state_22822){
var state_val_22823 = (state_22822[(1)]);
if((state_val_22823 === (1))){
var state_22822__$1 = state_22822;
var statearr_22824_22933 = state_22822__$1;
(statearr_22824_22933[(2)] = null);

(statearr_22824_22933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22823 === (2))){
var state_22822__$1 = state_22822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22822__$1,(4),from);
} else {
if((state_val_22823 === (3))){
var inst_22820 = (state_22822[(2)]);
var state_22822__$1 = state_22822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22822__$1,inst_22820);
} else {
if((state_val_22823 === (4))){
var inst_22803 = (state_22822[(7)]);
var inst_22803__$1 = (state_22822[(2)]);
var inst_22804 = (inst_22803__$1 == null);
var state_22822__$1 = (function (){var statearr_22825 = state_22822;
(statearr_22825[(7)] = inst_22803__$1);

return statearr_22825;
})();
if(cljs.core.truth_(inst_22804)){
var statearr_22826_22934 = state_22822__$1;
(statearr_22826_22934[(1)] = (5));

} else {
var statearr_22827_22935 = state_22822__$1;
(statearr_22827_22935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22823 === (5))){
var inst_22806 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22822__$1 = state_22822;
var statearr_22828_22936 = state_22822__$1;
(statearr_22828_22936[(2)] = inst_22806);

(statearr_22828_22936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22823 === (6))){
var inst_22808 = (state_22822[(8)]);
var inst_22803 = (state_22822[(7)]);
var inst_22808__$1 = cljs.core.async.chan.call(null,(1));
var inst_22809 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22810 = [inst_22803,inst_22808__$1];
var inst_22811 = (new cljs.core.PersistentVector(null,2,(5),inst_22809,inst_22810,null));
var state_22822__$1 = (function (){var statearr_22829 = state_22822;
(statearr_22829[(8)] = inst_22808__$1);

return statearr_22829;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22822__$1,(8),jobs,inst_22811);
} else {
if((state_val_22823 === (7))){
var inst_22818 = (state_22822[(2)]);
var state_22822__$1 = state_22822;
var statearr_22830_22937 = state_22822__$1;
(statearr_22830_22937[(2)] = inst_22818);

(statearr_22830_22937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22823 === (8))){
var inst_22808 = (state_22822[(8)]);
var inst_22813 = (state_22822[(2)]);
var state_22822__$1 = (function (){var statearr_22831 = state_22822;
(statearr_22831[(9)] = inst_22813);

return statearr_22831;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22822__$1,(9),results,inst_22808);
} else {
if((state_val_22823 === (9))){
var inst_22815 = (state_22822[(2)]);
var state_22822__$1 = (function (){var statearr_22832 = state_22822;
(statearr_22832[(10)] = inst_22815);

return statearr_22832;
})();
var statearr_22833_22938 = state_22822__$1;
(statearr_22833_22938[(2)] = null);

(statearr_22833_22938[(1)] = (2));


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
});})(c__22583__auto___22932,jobs,results,process,async))
;
return ((function (switch__22495__auto__,c__22583__auto___22932,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____0 = (function (){
var statearr_22834 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22834[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__);

(statearr_22834[(1)] = (1));

return statearr_22834;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____1 = (function (state_22822){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_22822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e22835){if((e22835 instanceof Object)){
var ex__22499__auto__ = e22835;
var statearr_22836_22939 = state_22822;
(statearr_22836_22939[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22940 = state_22822;
state_22822 = G__22940;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__ = function(state_22822){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____1.call(this,state_22822);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto___22932,jobs,results,process,async))
})();
var state__22585__auto__ = (function (){var statearr_22837 = f__22584__auto__.call(null);
(statearr_22837[(6)] = c__22583__auto___22932);

return statearr_22837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto___22932,jobs,results,process,async))
);


var c__22583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto__,jobs,results,process,async){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto__,jobs,results,process,async){
return (function (state_22875){
var state_val_22876 = (state_22875[(1)]);
if((state_val_22876 === (7))){
var inst_22871 = (state_22875[(2)]);
var state_22875__$1 = state_22875;
var statearr_22877_22941 = state_22875__$1;
(statearr_22877_22941[(2)] = inst_22871);

(statearr_22877_22941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (20))){
var state_22875__$1 = state_22875;
var statearr_22878_22942 = state_22875__$1;
(statearr_22878_22942[(2)] = null);

(statearr_22878_22942[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (1))){
var state_22875__$1 = state_22875;
var statearr_22879_22943 = state_22875__$1;
(statearr_22879_22943[(2)] = null);

(statearr_22879_22943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (4))){
var inst_22840 = (state_22875[(7)]);
var inst_22840__$1 = (state_22875[(2)]);
var inst_22841 = (inst_22840__$1 == null);
var state_22875__$1 = (function (){var statearr_22880 = state_22875;
(statearr_22880[(7)] = inst_22840__$1);

return statearr_22880;
})();
if(cljs.core.truth_(inst_22841)){
var statearr_22881_22944 = state_22875__$1;
(statearr_22881_22944[(1)] = (5));

} else {
var statearr_22882_22945 = state_22875__$1;
(statearr_22882_22945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (15))){
var inst_22853 = (state_22875[(8)]);
var state_22875__$1 = state_22875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22875__$1,(18),to,inst_22853);
} else {
if((state_val_22876 === (21))){
var inst_22866 = (state_22875[(2)]);
var state_22875__$1 = state_22875;
var statearr_22883_22946 = state_22875__$1;
(statearr_22883_22946[(2)] = inst_22866);

(statearr_22883_22946[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (13))){
var inst_22868 = (state_22875[(2)]);
var state_22875__$1 = (function (){var statearr_22884 = state_22875;
(statearr_22884[(9)] = inst_22868);

return statearr_22884;
})();
var statearr_22885_22947 = state_22875__$1;
(statearr_22885_22947[(2)] = null);

(statearr_22885_22947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (6))){
var inst_22840 = (state_22875[(7)]);
var state_22875__$1 = state_22875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22875__$1,(11),inst_22840);
} else {
if((state_val_22876 === (17))){
var inst_22861 = (state_22875[(2)]);
var state_22875__$1 = state_22875;
if(cljs.core.truth_(inst_22861)){
var statearr_22886_22948 = state_22875__$1;
(statearr_22886_22948[(1)] = (19));

} else {
var statearr_22887_22949 = state_22875__$1;
(statearr_22887_22949[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (3))){
var inst_22873 = (state_22875[(2)]);
var state_22875__$1 = state_22875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22875__$1,inst_22873);
} else {
if((state_val_22876 === (12))){
var inst_22850 = (state_22875[(10)]);
var state_22875__$1 = state_22875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22875__$1,(14),inst_22850);
} else {
if((state_val_22876 === (2))){
var state_22875__$1 = state_22875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22875__$1,(4),results);
} else {
if((state_val_22876 === (19))){
var state_22875__$1 = state_22875;
var statearr_22888_22950 = state_22875__$1;
(statearr_22888_22950[(2)] = null);

(statearr_22888_22950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (11))){
var inst_22850 = (state_22875[(2)]);
var state_22875__$1 = (function (){var statearr_22889 = state_22875;
(statearr_22889[(10)] = inst_22850);

return statearr_22889;
})();
var statearr_22890_22951 = state_22875__$1;
(statearr_22890_22951[(2)] = null);

(statearr_22890_22951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (9))){
var state_22875__$1 = state_22875;
var statearr_22891_22952 = state_22875__$1;
(statearr_22891_22952[(2)] = null);

(statearr_22891_22952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (5))){
var state_22875__$1 = state_22875;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22892_22953 = state_22875__$1;
(statearr_22892_22953[(1)] = (8));

} else {
var statearr_22893_22954 = state_22875__$1;
(statearr_22893_22954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (14))){
var inst_22853 = (state_22875[(8)]);
var inst_22855 = (state_22875[(11)]);
var inst_22853__$1 = (state_22875[(2)]);
var inst_22854 = (inst_22853__$1 == null);
var inst_22855__$1 = cljs.core.not.call(null,inst_22854);
var state_22875__$1 = (function (){var statearr_22894 = state_22875;
(statearr_22894[(8)] = inst_22853__$1);

(statearr_22894[(11)] = inst_22855__$1);

return statearr_22894;
})();
if(inst_22855__$1){
var statearr_22895_22955 = state_22875__$1;
(statearr_22895_22955[(1)] = (15));

} else {
var statearr_22896_22956 = state_22875__$1;
(statearr_22896_22956[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (16))){
var inst_22855 = (state_22875[(11)]);
var state_22875__$1 = state_22875;
var statearr_22897_22957 = state_22875__$1;
(statearr_22897_22957[(2)] = inst_22855);

(statearr_22897_22957[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (10))){
var inst_22847 = (state_22875[(2)]);
var state_22875__$1 = state_22875;
var statearr_22898_22958 = state_22875__$1;
(statearr_22898_22958[(2)] = inst_22847);

(statearr_22898_22958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (18))){
var inst_22858 = (state_22875[(2)]);
var state_22875__$1 = state_22875;
var statearr_22899_22959 = state_22875__$1;
(statearr_22899_22959[(2)] = inst_22858);

(statearr_22899_22959[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (8))){
var inst_22844 = cljs.core.async.close_BANG_.call(null,to);
var state_22875__$1 = state_22875;
var statearr_22900_22960 = state_22875__$1;
(statearr_22900_22960[(2)] = inst_22844);

(statearr_22900_22960[(1)] = (10));


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
});})(c__22583__auto__,jobs,results,process,async))
;
return ((function (switch__22495__auto__,c__22583__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____0 = (function (){
var statearr_22901 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22901[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__);

(statearr_22901[(1)] = (1));

return statearr_22901;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____1 = (function (state_22875){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_22875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e22902){if((e22902 instanceof Object)){
var ex__22499__auto__ = e22902;
var statearr_22903_22961 = state_22875;
(statearr_22903_22961[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22962 = state_22875;
state_22875 = G__22962;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__ = function(state_22875){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____1.call(this,state_22875);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto__,jobs,results,process,async))
})();
var state__22585__auto__ = (function (){var statearr_22904 = f__22584__auto__.call(null);
(statearr_22904[(6)] = c__22583__auto__);

return statearr_22904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto__,jobs,results,process,async))
);

return c__22583__auto__;
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
var G__22964 = arguments.length;
switch (G__22964) {
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
var G__22967 = arguments.length;
switch (G__22967) {
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
var G__22970 = arguments.length;
switch (G__22970) {
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
var c__22583__auto___23019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto___23019,tc,fc){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto___23019,tc,fc){
return (function (state_22996){
var state_val_22997 = (state_22996[(1)]);
if((state_val_22997 === (7))){
var inst_22992 = (state_22996[(2)]);
var state_22996__$1 = state_22996;
var statearr_22998_23020 = state_22996__$1;
(statearr_22998_23020[(2)] = inst_22992);

(statearr_22998_23020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22997 === (1))){
var state_22996__$1 = state_22996;
var statearr_22999_23021 = state_22996__$1;
(statearr_22999_23021[(2)] = null);

(statearr_22999_23021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22997 === (4))){
var inst_22973 = (state_22996[(7)]);
var inst_22973__$1 = (state_22996[(2)]);
var inst_22974 = (inst_22973__$1 == null);
var state_22996__$1 = (function (){var statearr_23000 = state_22996;
(statearr_23000[(7)] = inst_22973__$1);

return statearr_23000;
})();
if(cljs.core.truth_(inst_22974)){
var statearr_23001_23022 = state_22996__$1;
(statearr_23001_23022[(1)] = (5));

} else {
var statearr_23002_23023 = state_22996__$1;
(statearr_23002_23023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22997 === (13))){
var state_22996__$1 = state_22996;
var statearr_23003_23024 = state_22996__$1;
(statearr_23003_23024[(2)] = null);

(statearr_23003_23024[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22997 === (6))){
var inst_22973 = (state_22996[(7)]);
var inst_22979 = p.call(null,inst_22973);
var state_22996__$1 = state_22996;
if(cljs.core.truth_(inst_22979)){
var statearr_23004_23025 = state_22996__$1;
(statearr_23004_23025[(1)] = (9));

} else {
var statearr_23005_23026 = state_22996__$1;
(statearr_23005_23026[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22997 === (3))){
var inst_22994 = (state_22996[(2)]);
var state_22996__$1 = state_22996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22996__$1,inst_22994);
} else {
if((state_val_22997 === (12))){
var state_22996__$1 = state_22996;
var statearr_23006_23027 = state_22996__$1;
(statearr_23006_23027[(2)] = null);

(statearr_23006_23027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22997 === (2))){
var state_22996__$1 = state_22996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22996__$1,(4),ch);
} else {
if((state_val_22997 === (11))){
var inst_22973 = (state_22996[(7)]);
var inst_22983 = (state_22996[(2)]);
var state_22996__$1 = state_22996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22996__$1,(8),inst_22983,inst_22973);
} else {
if((state_val_22997 === (9))){
var state_22996__$1 = state_22996;
var statearr_23007_23028 = state_22996__$1;
(statearr_23007_23028[(2)] = tc);

(statearr_23007_23028[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22997 === (5))){
var inst_22976 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22977 = cljs.core.async.close_BANG_.call(null,fc);
var state_22996__$1 = (function (){var statearr_23008 = state_22996;
(statearr_23008[(8)] = inst_22976);

return statearr_23008;
})();
var statearr_23009_23029 = state_22996__$1;
(statearr_23009_23029[(2)] = inst_22977);

(statearr_23009_23029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22997 === (14))){
var inst_22990 = (state_22996[(2)]);
var state_22996__$1 = state_22996;
var statearr_23010_23030 = state_22996__$1;
(statearr_23010_23030[(2)] = inst_22990);

(statearr_23010_23030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22997 === (10))){
var state_22996__$1 = state_22996;
var statearr_23011_23031 = state_22996__$1;
(statearr_23011_23031[(2)] = fc);

(statearr_23011_23031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22997 === (8))){
var inst_22985 = (state_22996[(2)]);
var state_22996__$1 = state_22996;
if(cljs.core.truth_(inst_22985)){
var statearr_23012_23032 = state_22996__$1;
(statearr_23012_23032[(1)] = (12));

} else {
var statearr_23013_23033 = state_22996__$1;
(statearr_23013_23033[(1)] = (13));

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
});})(c__22583__auto___23019,tc,fc))
;
return ((function (switch__22495__auto__,c__22583__auto___23019,tc,fc){
return (function() {
var cljs$core$async$state_machine__22496__auto__ = null;
var cljs$core$async$state_machine__22496__auto____0 = (function (){
var statearr_23014 = [null,null,null,null,null,null,null,null,null];
(statearr_23014[(0)] = cljs$core$async$state_machine__22496__auto__);

(statearr_23014[(1)] = (1));

return statearr_23014;
});
var cljs$core$async$state_machine__22496__auto____1 = (function (state_22996){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_22996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e23015){if((e23015 instanceof Object)){
var ex__22499__auto__ = e23015;
var statearr_23016_23034 = state_22996;
(statearr_23016_23034[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23035 = state_22996;
state_22996 = G__23035;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
cljs$core$async$state_machine__22496__auto__ = function(state_22996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22496__auto____1.call(this,state_22996);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22496__auto____0;
cljs$core$async$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22496__auto____1;
return cljs$core$async$state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto___23019,tc,fc))
})();
var state__22585__auto__ = (function (){var statearr_23017 = f__22584__auto__.call(null);
(statearr_23017[(6)] = c__22583__auto___23019);

return statearr_23017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto___23019,tc,fc))
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
var c__22583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto__){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto__){
return (function (state_23056){
var state_val_23057 = (state_23056[(1)]);
if((state_val_23057 === (7))){
var inst_23052 = (state_23056[(2)]);
var state_23056__$1 = state_23056;
var statearr_23058_23076 = state_23056__$1;
(statearr_23058_23076[(2)] = inst_23052);

(statearr_23058_23076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23057 === (1))){
var inst_23036 = init;
var state_23056__$1 = (function (){var statearr_23059 = state_23056;
(statearr_23059[(7)] = inst_23036);

return statearr_23059;
})();
var statearr_23060_23077 = state_23056__$1;
(statearr_23060_23077[(2)] = null);

(statearr_23060_23077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23057 === (4))){
var inst_23039 = (state_23056[(8)]);
var inst_23039__$1 = (state_23056[(2)]);
var inst_23040 = (inst_23039__$1 == null);
var state_23056__$1 = (function (){var statearr_23061 = state_23056;
(statearr_23061[(8)] = inst_23039__$1);

return statearr_23061;
})();
if(cljs.core.truth_(inst_23040)){
var statearr_23062_23078 = state_23056__$1;
(statearr_23062_23078[(1)] = (5));

} else {
var statearr_23063_23079 = state_23056__$1;
(statearr_23063_23079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23057 === (6))){
var inst_23036 = (state_23056[(7)]);
var inst_23039 = (state_23056[(8)]);
var inst_23043 = (state_23056[(9)]);
var inst_23043__$1 = f.call(null,inst_23036,inst_23039);
var inst_23044 = cljs.core.reduced_QMARK_.call(null,inst_23043__$1);
var state_23056__$1 = (function (){var statearr_23064 = state_23056;
(statearr_23064[(9)] = inst_23043__$1);

return statearr_23064;
})();
if(inst_23044){
var statearr_23065_23080 = state_23056__$1;
(statearr_23065_23080[(1)] = (8));

} else {
var statearr_23066_23081 = state_23056__$1;
(statearr_23066_23081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23057 === (3))){
var inst_23054 = (state_23056[(2)]);
var state_23056__$1 = state_23056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23056__$1,inst_23054);
} else {
if((state_val_23057 === (2))){
var state_23056__$1 = state_23056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23056__$1,(4),ch);
} else {
if((state_val_23057 === (9))){
var inst_23043 = (state_23056[(9)]);
var inst_23036 = inst_23043;
var state_23056__$1 = (function (){var statearr_23067 = state_23056;
(statearr_23067[(7)] = inst_23036);

return statearr_23067;
})();
var statearr_23068_23082 = state_23056__$1;
(statearr_23068_23082[(2)] = null);

(statearr_23068_23082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23057 === (5))){
var inst_23036 = (state_23056[(7)]);
var state_23056__$1 = state_23056;
var statearr_23069_23083 = state_23056__$1;
(statearr_23069_23083[(2)] = inst_23036);

(statearr_23069_23083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23057 === (10))){
var inst_23050 = (state_23056[(2)]);
var state_23056__$1 = state_23056;
var statearr_23070_23084 = state_23056__$1;
(statearr_23070_23084[(2)] = inst_23050);

(statearr_23070_23084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23057 === (8))){
var inst_23043 = (state_23056[(9)]);
var inst_23046 = cljs.core.deref.call(null,inst_23043);
var state_23056__$1 = state_23056;
var statearr_23071_23085 = state_23056__$1;
(statearr_23071_23085[(2)] = inst_23046);

(statearr_23071_23085[(1)] = (10));


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
});})(c__22583__auto__))
;
return ((function (switch__22495__auto__,c__22583__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22496__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22496__auto____0 = (function (){
var statearr_23072 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23072[(0)] = cljs$core$async$reduce_$_state_machine__22496__auto__);

(statearr_23072[(1)] = (1));

return statearr_23072;
});
var cljs$core$async$reduce_$_state_machine__22496__auto____1 = (function (state_23056){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_23056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e23073){if((e23073 instanceof Object)){
var ex__22499__auto__ = e23073;
var statearr_23074_23086 = state_23056;
(statearr_23074_23086[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23087 = state_23056;
state_23056 = G__23087;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22496__auto__ = function(state_23056){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22496__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22496__auto____1.call(this,state_23056);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22496__auto____0;
cljs$core$async$reduce_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22496__auto____1;
return cljs$core$async$reduce_$_state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto__))
})();
var state__22585__auto__ = (function (){var statearr_23075 = f__22584__auto__.call(null);
(statearr_23075[(6)] = c__22583__auto__);

return statearr_23075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto__))
);

return c__22583__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__22583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto__,f__$1){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto__,f__$1){
return (function (state_23093){
var state_val_23094 = (state_23093[(1)]);
if((state_val_23094 === (1))){
var inst_23088 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23093__$1 = state_23093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23093__$1,(2),inst_23088);
} else {
if((state_val_23094 === (2))){
var inst_23090 = (state_23093[(2)]);
var inst_23091 = f__$1.call(null,inst_23090);
var state_23093__$1 = state_23093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23093__$1,inst_23091);
} else {
return null;
}
}
});})(c__22583__auto__,f__$1))
;
return ((function (switch__22495__auto__,c__22583__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__22496__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22496__auto____0 = (function (){
var statearr_23095 = [null,null,null,null,null,null,null];
(statearr_23095[(0)] = cljs$core$async$transduce_$_state_machine__22496__auto__);

(statearr_23095[(1)] = (1));

return statearr_23095;
});
var cljs$core$async$transduce_$_state_machine__22496__auto____1 = (function (state_23093){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_23093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e23096){if((e23096 instanceof Object)){
var ex__22499__auto__ = e23096;
var statearr_23097_23099 = state_23093;
(statearr_23097_23099[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23100 = state_23093;
state_23093 = G__23100;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22496__auto__ = function(state_23093){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22496__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22496__auto____1.call(this,state_23093);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22496__auto____0;
cljs$core$async$transduce_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22496__auto____1;
return cljs$core$async$transduce_$_state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto__,f__$1))
})();
var state__22585__auto__ = (function (){var statearr_23098 = f__22584__auto__.call(null);
(statearr_23098[(6)] = c__22583__auto__);

return statearr_23098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto__,f__$1))
);

return c__22583__auto__;
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
var G__23102 = arguments.length;
switch (G__23102) {
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
var c__22583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto__){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto__){
return (function (state_23127){
var state_val_23128 = (state_23127[(1)]);
if((state_val_23128 === (7))){
var inst_23109 = (state_23127[(2)]);
var state_23127__$1 = state_23127;
var statearr_23129_23150 = state_23127__$1;
(statearr_23129_23150[(2)] = inst_23109);

(statearr_23129_23150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23128 === (1))){
var inst_23103 = cljs.core.seq.call(null,coll);
var inst_23104 = inst_23103;
var state_23127__$1 = (function (){var statearr_23130 = state_23127;
(statearr_23130[(7)] = inst_23104);

return statearr_23130;
})();
var statearr_23131_23151 = state_23127__$1;
(statearr_23131_23151[(2)] = null);

(statearr_23131_23151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23128 === (4))){
var inst_23104 = (state_23127[(7)]);
var inst_23107 = cljs.core.first.call(null,inst_23104);
var state_23127__$1 = state_23127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23127__$1,(7),ch,inst_23107);
} else {
if((state_val_23128 === (13))){
var inst_23121 = (state_23127[(2)]);
var state_23127__$1 = state_23127;
var statearr_23132_23152 = state_23127__$1;
(statearr_23132_23152[(2)] = inst_23121);

(statearr_23132_23152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23128 === (6))){
var inst_23112 = (state_23127[(2)]);
var state_23127__$1 = state_23127;
if(cljs.core.truth_(inst_23112)){
var statearr_23133_23153 = state_23127__$1;
(statearr_23133_23153[(1)] = (8));

} else {
var statearr_23134_23154 = state_23127__$1;
(statearr_23134_23154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23128 === (3))){
var inst_23125 = (state_23127[(2)]);
var state_23127__$1 = state_23127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23127__$1,inst_23125);
} else {
if((state_val_23128 === (12))){
var state_23127__$1 = state_23127;
var statearr_23135_23155 = state_23127__$1;
(statearr_23135_23155[(2)] = null);

(statearr_23135_23155[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23128 === (2))){
var inst_23104 = (state_23127[(7)]);
var state_23127__$1 = state_23127;
if(cljs.core.truth_(inst_23104)){
var statearr_23136_23156 = state_23127__$1;
(statearr_23136_23156[(1)] = (4));

} else {
var statearr_23137_23157 = state_23127__$1;
(statearr_23137_23157[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23128 === (11))){
var inst_23118 = cljs.core.async.close_BANG_.call(null,ch);
var state_23127__$1 = state_23127;
var statearr_23138_23158 = state_23127__$1;
(statearr_23138_23158[(2)] = inst_23118);

(statearr_23138_23158[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23128 === (9))){
var state_23127__$1 = state_23127;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23139_23159 = state_23127__$1;
(statearr_23139_23159[(1)] = (11));

} else {
var statearr_23140_23160 = state_23127__$1;
(statearr_23140_23160[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23128 === (5))){
var inst_23104 = (state_23127[(7)]);
var state_23127__$1 = state_23127;
var statearr_23141_23161 = state_23127__$1;
(statearr_23141_23161[(2)] = inst_23104);

(statearr_23141_23161[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23128 === (10))){
var inst_23123 = (state_23127[(2)]);
var state_23127__$1 = state_23127;
var statearr_23142_23162 = state_23127__$1;
(statearr_23142_23162[(2)] = inst_23123);

(statearr_23142_23162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23128 === (8))){
var inst_23104 = (state_23127[(7)]);
var inst_23114 = cljs.core.next.call(null,inst_23104);
var inst_23104__$1 = inst_23114;
var state_23127__$1 = (function (){var statearr_23143 = state_23127;
(statearr_23143[(7)] = inst_23104__$1);

return statearr_23143;
})();
var statearr_23144_23163 = state_23127__$1;
(statearr_23144_23163[(2)] = null);

(statearr_23144_23163[(1)] = (2));


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
});})(c__22583__auto__))
;
return ((function (switch__22495__auto__,c__22583__auto__){
return (function() {
var cljs$core$async$state_machine__22496__auto__ = null;
var cljs$core$async$state_machine__22496__auto____0 = (function (){
var statearr_23145 = [null,null,null,null,null,null,null,null];
(statearr_23145[(0)] = cljs$core$async$state_machine__22496__auto__);

(statearr_23145[(1)] = (1));

return statearr_23145;
});
var cljs$core$async$state_machine__22496__auto____1 = (function (state_23127){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_23127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e23146){if((e23146 instanceof Object)){
var ex__22499__auto__ = e23146;
var statearr_23147_23164 = state_23127;
(statearr_23147_23164[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23165 = state_23127;
state_23127 = G__23165;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
cljs$core$async$state_machine__22496__auto__ = function(state_23127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22496__auto____1.call(this,state_23127);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22496__auto____0;
cljs$core$async$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22496__auto____1;
return cljs$core$async$state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto__))
})();
var state__22585__auto__ = (function (){var statearr_23148 = f__22584__auto__.call(null);
(statearr_23148[(6)] = c__22583__auto__);

return statearr_23148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto__))
);

return c__22583__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async23166 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23166 = (function (ch,cs,meta23167){
this.ch = ch;
this.cs = cs;
this.meta23167 = meta23167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23168,meta23167__$1){
var self__ = this;
var _23168__$1 = this;
return (new cljs.core.async.t_cljs$core$async23166(self__.ch,self__.cs,meta23167__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23166.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23168){
var self__ = this;
var _23168__$1 = this;
return self__.meta23167;
});})(cs))
;

cljs.core.async.t_cljs$core$async23166.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23166.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23166.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23166.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23166.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23166.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23166.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23167","meta23167",2082124069,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23166.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23166";

cljs.core.async.t_cljs$core$async23166.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23166");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23166.
 */
cljs.core.async.__GT_t_cljs$core$async23166 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23166(ch__$1,cs__$1,meta23167){
return (new cljs.core.async.t_cljs$core$async23166(ch__$1,cs__$1,meta23167));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23166(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22583__auto___23388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto___23388,cs,m,dchan,dctr,done){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto___23388,cs,m,dchan,dctr,done){
return (function (state_23303){
var state_val_23304 = (state_23303[(1)]);
if((state_val_23304 === (7))){
var inst_23299 = (state_23303[(2)]);
var state_23303__$1 = state_23303;
var statearr_23305_23389 = state_23303__$1;
(statearr_23305_23389[(2)] = inst_23299);

(statearr_23305_23389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (20))){
var inst_23202 = (state_23303[(7)]);
var inst_23214 = cljs.core.first.call(null,inst_23202);
var inst_23215 = cljs.core.nth.call(null,inst_23214,(0),null);
var inst_23216 = cljs.core.nth.call(null,inst_23214,(1),null);
var state_23303__$1 = (function (){var statearr_23306 = state_23303;
(statearr_23306[(8)] = inst_23215);

return statearr_23306;
})();
if(cljs.core.truth_(inst_23216)){
var statearr_23307_23390 = state_23303__$1;
(statearr_23307_23390[(1)] = (22));

} else {
var statearr_23308_23391 = state_23303__$1;
(statearr_23308_23391[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (27))){
var inst_23171 = (state_23303[(9)]);
var inst_23246 = (state_23303[(10)]);
var inst_23244 = (state_23303[(11)]);
var inst_23251 = (state_23303[(12)]);
var inst_23251__$1 = cljs.core._nth.call(null,inst_23244,inst_23246);
var inst_23252 = cljs.core.async.put_BANG_.call(null,inst_23251__$1,inst_23171,done);
var state_23303__$1 = (function (){var statearr_23309 = state_23303;
(statearr_23309[(12)] = inst_23251__$1);

return statearr_23309;
})();
if(cljs.core.truth_(inst_23252)){
var statearr_23310_23392 = state_23303__$1;
(statearr_23310_23392[(1)] = (30));

} else {
var statearr_23311_23393 = state_23303__$1;
(statearr_23311_23393[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (1))){
var state_23303__$1 = state_23303;
var statearr_23312_23394 = state_23303__$1;
(statearr_23312_23394[(2)] = null);

(statearr_23312_23394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (24))){
var inst_23202 = (state_23303[(7)]);
var inst_23221 = (state_23303[(2)]);
var inst_23222 = cljs.core.next.call(null,inst_23202);
var inst_23180 = inst_23222;
var inst_23181 = null;
var inst_23182 = (0);
var inst_23183 = (0);
var state_23303__$1 = (function (){var statearr_23313 = state_23303;
(statearr_23313[(13)] = inst_23182);

(statearr_23313[(14)] = inst_23183);

(statearr_23313[(15)] = inst_23181);

(statearr_23313[(16)] = inst_23180);

(statearr_23313[(17)] = inst_23221);

return statearr_23313;
})();
var statearr_23314_23395 = state_23303__$1;
(statearr_23314_23395[(2)] = null);

(statearr_23314_23395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (39))){
var state_23303__$1 = state_23303;
var statearr_23318_23396 = state_23303__$1;
(statearr_23318_23396[(2)] = null);

(statearr_23318_23396[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (4))){
var inst_23171 = (state_23303[(9)]);
var inst_23171__$1 = (state_23303[(2)]);
var inst_23172 = (inst_23171__$1 == null);
var state_23303__$1 = (function (){var statearr_23319 = state_23303;
(statearr_23319[(9)] = inst_23171__$1);

return statearr_23319;
})();
if(cljs.core.truth_(inst_23172)){
var statearr_23320_23397 = state_23303__$1;
(statearr_23320_23397[(1)] = (5));

} else {
var statearr_23321_23398 = state_23303__$1;
(statearr_23321_23398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (15))){
var inst_23182 = (state_23303[(13)]);
var inst_23183 = (state_23303[(14)]);
var inst_23181 = (state_23303[(15)]);
var inst_23180 = (state_23303[(16)]);
var inst_23198 = (state_23303[(2)]);
var inst_23199 = (inst_23183 + (1));
var tmp23315 = inst_23182;
var tmp23316 = inst_23181;
var tmp23317 = inst_23180;
var inst_23180__$1 = tmp23317;
var inst_23181__$1 = tmp23316;
var inst_23182__$1 = tmp23315;
var inst_23183__$1 = inst_23199;
var state_23303__$1 = (function (){var statearr_23322 = state_23303;
(statearr_23322[(13)] = inst_23182__$1);

(statearr_23322[(14)] = inst_23183__$1);

(statearr_23322[(15)] = inst_23181__$1);

(statearr_23322[(16)] = inst_23180__$1);

(statearr_23322[(18)] = inst_23198);

return statearr_23322;
})();
var statearr_23323_23399 = state_23303__$1;
(statearr_23323_23399[(2)] = null);

(statearr_23323_23399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (21))){
var inst_23225 = (state_23303[(2)]);
var state_23303__$1 = state_23303;
var statearr_23327_23400 = state_23303__$1;
(statearr_23327_23400[(2)] = inst_23225);

(statearr_23327_23400[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (31))){
var inst_23251 = (state_23303[(12)]);
var inst_23255 = done.call(null,null);
var inst_23256 = cljs.core.async.untap_STAR_.call(null,m,inst_23251);
var state_23303__$1 = (function (){var statearr_23328 = state_23303;
(statearr_23328[(19)] = inst_23255);

return statearr_23328;
})();
var statearr_23329_23401 = state_23303__$1;
(statearr_23329_23401[(2)] = inst_23256);

(statearr_23329_23401[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (32))){
var inst_23246 = (state_23303[(10)]);
var inst_23244 = (state_23303[(11)]);
var inst_23245 = (state_23303[(20)]);
var inst_23243 = (state_23303[(21)]);
var inst_23258 = (state_23303[(2)]);
var inst_23259 = (inst_23246 + (1));
var tmp23324 = inst_23244;
var tmp23325 = inst_23245;
var tmp23326 = inst_23243;
var inst_23243__$1 = tmp23326;
var inst_23244__$1 = tmp23324;
var inst_23245__$1 = tmp23325;
var inst_23246__$1 = inst_23259;
var state_23303__$1 = (function (){var statearr_23330 = state_23303;
(statearr_23330[(22)] = inst_23258);

(statearr_23330[(10)] = inst_23246__$1);

(statearr_23330[(11)] = inst_23244__$1);

(statearr_23330[(20)] = inst_23245__$1);

(statearr_23330[(21)] = inst_23243__$1);

return statearr_23330;
})();
var statearr_23331_23402 = state_23303__$1;
(statearr_23331_23402[(2)] = null);

(statearr_23331_23402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (40))){
var inst_23271 = (state_23303[(23)]);
var inst_23275 = done.call(null,null);
var inst_23276 = cljs.core.async.untap_STAR_.call(null,m,inst_23271);
var state_23303__$1 = (function (){var statearr_23332 = state_23303;
(statearr_23332[(24)] = inst_23275);

return statearr_23332;
})();
var statearr_23333_23403 = state_23303__$1;
(statearr_23333_23403[(2)] = inst_23276);

(statearr_23333_23403[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (33))){
var inst_23262 = (state_23303[(25)]);
var inst_23264 = cljs.core.chunked_seq_QMARK_.call(null,inst_23262);
var state_23303__$1 = state_23303;
if(inst_23264){
var statearr_23334_23404 = state_23303__$1;
(statearr_23334_23404[(1)] = (36));

} else {
var statearr_23335_23405 = state_23303__$1;
(statearr_23335_23405[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (13))){
var inst_23192 = (state_23303[(26)]);
var inst_23195 = cljs.core.async.close_BANG_.call(null,inst_23192);
var state_23303__$1 = state_23303;
var statearr_23336_23406 = state_23303__$1;
(statearr_23336_23406[(2)] = inst_23195);

(statearr_23336_23406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (22))){
var inst_23215 = (state_23303[(8)]);
var inst_23218 = cljs.core.async.close_BANG_.call(null,inst_23215);
var state_23303__$1 = state_23303;
var statearr_23337_23407 = state_23303__$1;
(statearr_23337_23407[(2)] = inst_23218);

(statearr_23337_23407[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (36))){
var inst_23262 = (state_23303[(25)]);
var inst_23266 = cljs.core.chunk_first.call(null,inst_23262);
var inst_23267 = cljs.core.chunk_rest.call(null,inst_23262);
var inst_23268 = cljs.core.count.call(null,inst_23266);
var inst_23243 = inst_23267;
var inst_23244 = inst_23266;
var inst_23245 = inst_23268;
var inst_23246 = (0);
var state_23303__$1 = (function (){var statearr_23338 = state_23303;
(statearr_23338[(10)] = inst_23246);

(statearr_23338[(11)] = inst_23244);

(statearr_23338[(20)] = inst_23245);

(statearr_23338[(21)] = inst_23243);

return statearr_23338;
})();
var statearr_23339_23408 = state_23303__$1;
(statearr_23339_23408[(2)] = null);

(statearr_23339_23408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (41))){
var inst_23262 = (state_23303[(25)]);
var inst_23278 = (state_23303[(2)]);
var inst_23279 = cljs.core.next.call(null,inst_23262);
var inst_23243 = inst_23279;
var inst_23244 = null;
var inst_23245 = (0);
var inst_23246 = (0);
var state_23303__$1 = (function (){var statearr_23340 = state_23303;
(statearr_23340[(10)] = inst_23246);

(statearr_23340[(11)] = inst_23244);

(statearr_23340[(20)] = inst_23245);

(statearr_23340[(21)] = inst_23243);

(statearr_23340[(27)] = inst_23278);

return statearr_23340;
})();
var statearr_23341_23409 = state_23303__$1;
(statearr_23341_23409[(2)] = null);

(statearr_23341_23409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (43))){
var state_23303__$1 = state_23303;
var statearr_23342_23410 = state_23303__$1;
(statearr_23342_23410[(2)] = null);

(statearr_23342_23410[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (29))){
var inst_23287 = (state_23303[(2)]);
var state_23303__$1 = state_23303;
var statearr_23343_23411 = state_23303__$1;
(statearr_23343_23411[(2)] = inst_23287);

(statearr_23343_23411[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (44))){
var inst_23296 = (state_23303[(2)]);
var state_23303__$1 = (function (){var statearr_23344 = state_23303;
(statearr_23344[(28)] = inst_23296);

return statearr_23344;
})();
var statearr_23345_23412 = state_23303__$1;
(statearr_23345_23412[(2)] = null);

(statearr_23345_23412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (6))){
var inst_23235 = (state_23303[(29)]);
var inst_23234 = cljs.core.deref.call(null,cs);
var inst_23235__$1 = cljs.core.keys.call(null,inst_23234);
var inst_23236 = cljs.core.count.call(null,inst_23235__$1);
var inst_23237 = cljs.core.reset_BANG_.call(null,dctr,inst_23236);
var inst_23242 = cljs.core.seq.call(null,inst_23235__$1);
var inst_23243 = inst_23242;
var inst_23244 = null;
var inst_23245 = (0);
var inst_23246 = (0);
var state_23303__$1 = (function (){var statearr_23346 = state_23303;
(statearr_23346[(29)] = inst_23235__$1);

(statearr_23346[(10)] = inst_23246);

(statearr_23346[(11)] = inst_23244);

(statearr_23346[(20)] = inst_23245);

(statearr_23346[(21)] = inst_23243);

(statearr_23346[(30)] = inst_23237);

return statearr_23346;
})();
var statearr_23347_23413 = state_23303__$1;
(statearr_23347_23413[(2)] = null);

(statearr_23347_23413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (28))){
var inst_23243 = (state_23303[(21)]);
var inst_23262 = (state_23303[(25)]);
var inst_23262__$1 = cljs.core.seq.call(null,inst_23243);
var state_23303__$1 = (function (){var statearr_23348 = state_23303;
(statearr_23348[(25)] = inst_23262__$1);

return statearr_23348;
})();
if(inst_23262__$1){
var statearr_23349_23414 = state_23303__$1;
(statearr_23349_23414[(1)] = (33));

} else {
var statearr_23350_23415 = state_23303__$1;
(statearr_23350_23415[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (25))){
var inst_23246 = (state_23303[(10)]);
var inst_23245 = (state_23303[(20)]);
var inst_23248 = (inst_23246 < inst_23245);
var inst_23249 = inst_23248;
var state_23303__$1 = state_23303;
if(cljs.core.truth_(inst_23249)){
var statearr_23351_23416 = state_23303__$1;
(statearr_23351_23416[(1)] = (27));

} else {
var statearr_23352_23417 = state_23303__$1;
(statearr_23352_23417[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (34))){
var state_23303__$1 = state_23303;
var statearr_23353_23418 = state_23303__$1;
(statearr_23353_23418[(2)] = null);

(statearr_23353_23418[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (17))){
var state_23303__$1 = state_23303;
var statearr_23354_23419 = state_23303__$1;
(statearr_23354_23419[(2)] = null);

(statearr_23354_23419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (3))){
var inst_23301 = (state_23303[(2)]);
var state_23303__$1 = state_23303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23303__$1,inst_23301);
} else {
if((state_val_23304 === (12))){
var inst_23230 = (state_23303[(2)]);
var state_23303__$1 = state_23303;
var statearr_23355_23420 = state_23303__$1;
(statearr_23355_23420[(2)] = inst_23230);

(statearr_23355_23420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (2))){
var state_23303__$1 = state_23303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23303__$1,(4),ch);
} else {
if((state_val_23304 === (23))){
var state_23303__$1 = state_23303;
var statearr_23356_23421 = state_23303__$1;
(statearr_23356_23421[(2)] = null);

(statearr_23356_23421[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (35))){
var inst_23285 = (state_23303[(2)]);
var state_23303__$1 = state_23303;
var statearr_23357_23422 = state_23303__$1;
(statearr_23357_23422[(2)] = inst_23285);

(statearr_23357_23422[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (19))){
var inst_23202 = (state_23303[(7)]);
var inst_23206 = cljs.core.chunk_first.call(null,inst_23202);
var inst_23207 = cljs.core.chunk_rest.call(null,inst_23202);
var inst_23208 = cljs.core.count.call(null,inst_23206);
var inst_23180 = inst_23207;
var inst_23181 = inst_23206;
var inst_23182 = inst_23208;
var inst_23183 = (0);
var state_23303__$1 = (function (){var statearr_23358 = state_23303;
(statearr_23358[(13)] = inst_23182);

(statearr_23358[(14)] = inst_23183);

(statearr_23358[(15)] = inst_23181);

(statearr_23358[(16)] = inst_23180);

return statearr_23358;
})();
var statearr_23359_23423 = state_23303__$1;
(statearr_23359_23423[(2)] = null);

(statearr_23359_23423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (11))){
var inst_23202 = (state_23303[(7)]);
var inst_23180 = (state_23303[(16)]);
var inst_23202__$1 = cljs.core.seq.call(null,inst_23180);
var state_23303__$1 = (function (){var statearr_23360 = state_23303;
(statearr_23360[(7)] = inst_23202__$1);

return statearr_23360;
})();
if(inst_23202__$1){
var statearr_23361_23424 = state_23303__$1;
(statearr_23361_23424[(1)] = (16));

} else {
var statearr_23362_23425 = state_23303__$1;
(statearr_23362_23425[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (9))){
var inst_23232 = (state_23303[(2)]);
var state_23303__$1 = state_23303;
var statearr_23363_23426 = state_23303__$1;
(statearr_23363_23426[(2)] = inst_23232);

(statearr_23363_23426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (5))){
var inst_23178 = cljs.core.deref.call(null,cs);
var inst_23179 = cljs.core.seq.call(null,inst_23178);
var inst_23180 = inst_23179;
var inst_23181 = null;
var inst_23182 = (0);
var inst_23183 = (0);
var state_23303__$1 = (function (){var statearr_23364 = state_23303;
(statearr_23364[(13)] = inst_23182);

(statearr_23364[(14)] = inst_23183);

(statearr_23364[(15)] = inst_23181);

(statearr_23364[(16)] = inst_23180);

return statearr_23364;
})();
var statearr_23365_23427 = state_23303__$1;
(statearr_23365_23427[(2)] = null);

(statearr_23365_23427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (14))){
var state_23303__$1 = state_23303;
var statearr_23366_23428 = state_23303__$1;
(statearr_23366_23428[(2)] = null);

(statearr_23366_23428[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (45))){
var inst_23293 = (state_23303[(2)]);
var state_23303__$1 = state_23303;
var statearr_23367_23429 = state_23303__$1;
(statearr_23367_23429[(2)] = inst_23293);

(statearr_23367_23429[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (26))){
var inst_23235 = (state_23303[(29)]);
var inst_23289 = (state_23303[(2)]);
var inst_23290 = cljs.core.seq.call(null,inst_23235);
var state_23303__$1 = (function (){var statearr_23368 = state_23303;
(statearr_23368[(31)] = inst_23289);

return statearr_23368;
})();
if(inst_23290){
var statearr_23369_23430 = state_23303__$1;
(statearr_23369_23430[(1)] = (42));

} else {
var statearr_23370_23431 = state_23303__$1;
(statearr_23370_23431[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (16))){
var inst_23202 = (state_23303[(7)]);
var inst_23204 = cljs.core.chunked_seq_QMARK_.call(null,inst_23202);
var state_23303__$1 = state_23303;
if(inst_23204){
var statearr_23371_23432 = state_23303__$1;
(statearr_23371_23432[(1)] = (19));

} else {
var statearr_23372_23433 = state_23303__$1;
(statearr_23372_23433[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (38))){
var inst_23282 = (state_23303[(2)]);
var state_23303__$1 = state_23303;
var statearr_23373_23434 = state_23303__$1;
(statearr_23373_23434[(2)] = inst_23282);

(statearr_23373_23434[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (30))){
var state_23303__$1 = state_23303;
var statearr_23374_23435 = state_23303__$1;
(statearr_23374_23435[(2)] = null);

(statearr_23374_23435[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (10))){
var inst_23183 = (state_23303[(14)]);
var inst_23181 = (state_23303[(15)]);
var inst_23191 = cljs.core._nth.call(null,inst_23181,inst_23183);
var inst_23192 = cljs.core.nth.call(null,inst_23191,(0),null);
var inst_23193 = cljs.core.nth.call(null,inst_23191,(1),null);
var state_23303__$1 = (function (){var statearr_23375 = state_23303;
(statearr_23375[(26)] = inst_23192);

return statearr_23375;
})();
if(cljs.core.truth_(inst_23193)){
var statearr_23376_23436 = state_23303__$1;
(statearr_23376_23436[(1)] = (13));

} else {
var statearr_23377_23437 = state_23303__$1;
(statearr_23377_23437[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (18))){
var inst_23228 = (state_23303[(2)]);
var state_23303__$1 = state_23303;
var statearr_23378_23438 = state_23303__$1;
(statearr_23378_23438[(2)] = inst_23228);

(statearr_23378_23438[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (42))){
var state_23303__$1 = state_23303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23303__$1,(45),dchan);
} else {
if((state_val_23304 === (37))){
var inst_23171 = (state_23303[(9)]);
var inst_23262 = (state_23303[(25)]);
var inst_23271 = (state_23303[(23)]);
var inst_23271__$1 = cljs.core.first.call(null,inst_23262);
var inst_23272 = cljs.core.async.put_BANG_.call(null,inst_23271__$1,inst_23171,done);
var state_23303__$1 = (function (){var statearr_23379 = state_23303;
(statearr_23379[(23)] = inst_23271__$1);

return statearr_23379;
})();
if(cljs.core.truth_(inst_23272)){
var statearr_23380_23439 = state_23303__$1;
(statearr_23380_23439[(1)] = (39));

} else {
var statearr_23381_23440 = state_23303__$1;
(statearr_23381_23440[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23304 === (8))){
var inst_23182 = (state_23303[(13)]);
var inst_23183 = (state_23303[(14)]);
var inst_23185 = (inst_23183 < inst_23182);
var inst_23186 = inst_23185;
var state_23303__$1 = state_23303;
if(cljs.core.truth_(inst_23186)){
var statearr_23382_23441 = state_23303__$1;
(statearr_23382_23441[(1)] = (10));

} else {
var statearr_23383_23442 = state_23303__$1;
(statearr_23383_23442[(1)] = (11));

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
});})(c__22583__auto___23388,cs,m,dchan,dctr,done))
;
return ((function (switch__22495__auto__,c__22583__auto___23388,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22496__auto__ = null;
var cljs$core$async$mult_$_state_machine__22496__auto____0 = (function (){
var statearr_23384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23384[(0)] = cljs$core$async$mult_$_state_machine__22496__auto__);

(statearr_23384[(1)] = (1));

return statearr_23384;
});
var cljs$core$async$mult_$_state_machine__22496__auto____1 = (function (state_23303){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_23303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e23385){if((e23385 instanceof Object)){
var ex__22499__auto__ = e23385;
var statearr_23386_23443 = state_23303;
(statearr_23386_23443[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23444 = state_23303;
state_23303 = G__23444;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22496__auto__ = function(state_23303){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22496__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22496__auto____1.call(this,state_23303);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22496__auto____0;
cljs$core$async$mult_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22496__auto____1;
return cljs$core$async$mult_$_state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto___23388,cs,m,dchan,dctr,done))
})();
var state__22585__auto__ = (function (){var statearr_23387 = f__22584__auto__.call(null);
(statearr_23387[(6)] = c__22583__auto___23388);

return statearr_23387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto___23388,cs,m,dchan,dctr,done))
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
var G__23446 = arguments.length;
switch (G__23446) {
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
var len__4499__auto___23458 = arguments.length;
var i__4500__auto___23459 = (0);
while(true){
if((i__4500__auto___23459 < len__4499__auto___23458)){
args__4502__auto__.push((arguments[i__4500__auto___23459]));

var G__23460 = (i__4500__auto___23459 + (1));
i__4500__auto___23459 = G__23460;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23452){
var map__23453 = p__23452;
var map__23453__$1 = ((((!((map__23453 == null)))?(((((map__23453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23453):map__23453);
var opts = map__23453__$1;
var statearr_23455_23461 = state;
(statearr_23455_23461[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23453,map__23453__$1,opts){
return (function (val){
var statearr_23456_23462 = state;
(statearr_23456_23462[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23453,map__23453__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23457_23463 = state;
(statearr_23457_23463[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23448){
var G__23449 = cljs.core.first.call(null,seq23448);
var seq23448__$1 = cljs.core.next.call(null,seq23448);
var G__23450 = cljs.core.first.call(null,seq23448__$1);
var seq23448__$2 = cljs.core.next.call(null,seq23448__$1);
var G__23451 = cljs.core.first.call(null,seq23448__$2);
var seq23448__$3 = cljs.core.next.call(null,seq23448__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23449,G__23450,G__23451,seq23448__$3);
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
if(typeof cljs.core.async.t_cljs$core$async23464 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23464 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta23465){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta23465 = meta23465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23466,meta23465__$1){
var self__ = this;
var _23466__$1 = this;
return (new cljs.core.async.t_cljs$core$async23464(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta23465__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23466){
var self__ = this;
var _23466__$1 = this;
return self__.meta23465;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23464.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta23465","meta23465",1449816816,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23464.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23464";

cljs.core.async.t_cljs$core$async23464.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23464");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23464.
 */
cljs.core.async.__GT_t_cljs$core$async23464 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23464(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta23465){
return (new cljs.core.async.t_cljs$core$async23464(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta23465));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23464(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22583__auto___23628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto___23628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto___23628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23568){
var state_val_23569 = (state_23568[(1)]);
if((state_val_23569 === (7))){
var inst_23483 = (state_23568[(2)]);
var state_23568__$1 = state_23568;
var statearr_23570_23629 = state_23568__$1;
(statearr_23570_23629[(2)] = inst_23483);

(statearr_23570_23629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (20))){
var inst_23495 = (state_23568[(7)]);
var state_23568__$1 = state_23568;
var statearr_23571_23630 = state_23568__$1;
(statearr_23571_23630[(2)] = inst_23495);

(statearr_23571_23630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (27))){
var state_23568__$1 = state_23568;
var statearr_23572_23631 = state_23568__$1;
(statearr_23572_23631[(2)] = null);

(statearr_23572_23631[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (1))){
var inst_23470 = (state_23568[(8)]);
var inst_23470__$1 = calc_state.call(null);
var inst_23472 = (inst_23470__$1 == null);
var inst_23473 = cljs.core.not.call(null,inst_23472);
var state_23568__$1 = (function (){var statearr_23573 = state_23568;
(statearr_23573[(8)] = inst_23470__$1);

return statearr_23573;
})();
if(inst_23473){
var statearr_23574_23632 = state_23568__$1;
(statearr_23574_23632[(1)] = (2));

} else {
var statearr_23575_23633 = state_23568__$1;
(statearr_23575_23633[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (24))){
var inst_23519 = (state_23568[(9)]);
var inst_23542 = (state_23568[(10)]);
var inst_23528 = (state_23568[(11)]);
var inst_23542__$1 = inst_23519.call(null,inst_23528);
var state_23568__$1 = (function (){var statearr_23576 = state_23568;
(statearr_23576[(10)] = inst_23542__$1);

return statearr_23576;
})();
if(cljs.core.truth_(inst_23542__$1)){
var statearr_23577_23634 = state_23568__$1;
(statearr_23577_23634[(1)] = (29));

} else {
var statearr_23578_23635 = state_23568__$1;
(statearr_23578_23635[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (4))){
var inst_23486 = (state_23568[(2)]);
var state_23568__$1 = state_23568;
if(cljs.core.truth_(inst_23486)){
var statearr_23579_23636 = state_23568__$1;
(statearr_23579_23636[(1)] = (8));

} else {
var statearr_23580_23637 = state_23568__$1;
(statearr_23580_23637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (15))){
var inst_23513 = (state_23568[(2)]);
var state_23568__$1 = state_23568;
if(cljs.core.truth_(inst_23513)){
var statearr_23581_23638 = state_23568__$1;
(statearr_23581_23638[(1)] = (19));

} else {
var statearr_23582_23639 = state_23568__$1;
(statearr_23582_23639[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (21))){
var inst_23518 = (state_23568[(12)]);
var inst_23518__$1 = (state_23568[(2)]);
var inst_23519 = cljs.core.get.call(null,inst_23518__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23520 = cljs.core.get.call(null,inst_23518__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23521 = cljs.core.get.call(null,inst_23518__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23568__$1 = (function (){var statearr_23583 = state_23568;
(statearr_23583[(13)] = inst_23520);

(statearr_23583[(12)] = inst_23518__$1);

(statearr_23583[(9)] = inst_23519);

return statearr_23583;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23568__$1,(22),inst_23521);
} else {
if((state_val_23569 === (31))){
var inst_23550 = (state_23568[(2)]);
var state_23568__$1 = state_23568;
if(cljs.core.truth_(inst_23550)){
var statearr_23584_23640 = state_23568__$1;
(statearr_23584_23640[(1)] = (32));

} else {
var statearr_23585_23641 = state_23568__$1;
(statearr_23585_23641[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (32))){
var inst_23527 = (state_23568[(14)]);
var state_23568__$1 = state_23568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23568__$1,(35),out,inst_23527);
} else {
if((state_val_23569 === (33))){
var inst_23518 = (state_23568[(12)]);
var inst_23495 = inst_23518;
var state_23568__$1 = (function (){var statearr_23586 = state_23568;
(statearr_23586[(7)] = inst_23495);

return statearr_23586;
})();
var statearr_23587_23642 = state_23568__$1;
(statearr_23587_23642[(2)] = null);

(statearr_23587_23642[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (13))){
var inst_23495 = (state_23568[(7)]);
var inst_23502 = inst_23495.cljs$lang$protocol_mask$partition0$;
var inst_23503 = (inst_23502 & (64));
var inst_23504 = inst_23495.cljs$core$ISeq$;
var inst_23505 = (cljs.core.PROTOCOL_SENTINEL === inst_23504);
var inst_23506 = ((inst_23503) || (inst_23505));
var state_23568__$1 = state_23568;
if(cljs.core.truth_(inst_23506)){
var statearr_23588_23643 = state_23568__$1;
(statearr_23588_23643[(1)] = (16));

} else {
var statearr_23589_23644 = state_23568__$1;
(statearr_23589_23644[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (22))){
var inst_23527 = (state_23568[(14)]);
var inst_23528 = (state_23568[(11)]);
var inst_23526 = (state_23568[(2)]);
var inst_23527__$1 = cljs.core.nth.call(null,inst_23526,(0),null);
var inst_23528__$1 = cljs.core.nth.call(null,inst_23526,(1),null);
var inst_23529 = (inst_23527__$1 == null);
var inst_23530 = cljs.core._EQ_.call(null,inst_23528__$1,change);
var inst_23531 = ((inst_23529) || (inst_23530));
var state_23568__$1 = (function (){var statearr_23590 = state_23568;
(statearr_23590[(14)] = inst_23527__$1);

(statearr_23590[(11)] = inst_23528__$1);

return statearr_23590;
})();
if(cljs.core.truth_(inst_23531)){
var statearr_23591_23645 = state_23568__$1;
(statearr_23591_23645[(1)] = (23));

} else {
var statearr_23592_23646 = state_23568__$1;
(statearr_23592_23646[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (36))){
var inst_23518 = (state_23568[(12)]);
var inst_23495 = inst_23518;
var state_23568__$1 = (function (){var statearr_23593 = state_23568;
(statearr_23593[(7)] = inst_23495);

return statearr_23593;
})();
var statearr_23594_23647 = state_23568__$1;
(statearr_23594_23647[(2)] = null);

(statearr_23594_23647[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (29))){
var inst_23542 = (state_23568[(10)]);
var state_23568__$1 = state_23568;
var statearr_23595_23648 = state_23568__$1;
(statearr_23595_23648[(2)] = inst_23542);

(statearr_23595_23648[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (6))){
var state_23568__$1 = state_23568;
var statearr_23596_23649 = state_23568__$1;
(statearr_23596_23649[(2)] = false);

(statearr_23596_23649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (28))){
var inst_23538 = (state_23568[(2)]);
var inst_23539 = calc_state.call(null);
var inst_23495 = inst_23539;
var state_23568__$1 = (function (){var statearr_23597 = state_23568;
(statearr_23597[(15)] = inst_23538);

(statearr_23597[(7)] = inst_23495);

return statearr_23597;
})();
var statearr_23598_23650 = state_23568__$1;
(statearr_23598_23650[(2)] = null);

(statearr_23598_23650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (25))){
var inst_23564 = (state_23568[(2)]);
var state_23568__$1 = state_23568;
var statearr_23599_23651 = state_23568__$1;
(statearr_23599_23651[(2)] = inst_23564);

(statearr_23599_23651[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (34))){
var inst_23562 = (state_23568[(2)]);
var state_23568__$1 = state_23568;
var statearr_23600_23652 = state_23568__$1;
(statearr_23600_23652[(2)] = inst_23562);

(statearr_23600_23652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (17))){
var state_23568__$1 = state_23568;
var statearr_23601_23653 = state_23568__$1;
(statearr_23601_23653[(2)] = false);

(statearr_23601_23653[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (3))){
var state_23568__$1 = state_23568;
var statearr_23602_23654 = state_23568__$1;
(statearr_23602_23654[(2)] = false);

(statearr_23602_23654[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (12))){
var inst_23566 = (state_23568[(2)]);
var state_23568__$1 = state_23568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23568__$1,inst_23566);
} else {
if((state_val_23569 === (2))){
var inst_23470 = (state_23568[(8)]);
var inst_23475 = inst_23470.cljs$lang$protocol_mask$partition0$;
var inst_23476 = (inst_23475 & (64));
var inst_23477 = inst_23470.cljs$core$ISeq$;
var inst_23478 = (cljs.core.PROTOCOL_SENTINEL === inst_23477);
var inst_23479 = ((inst_23476) || (inst_23478));
var state_23568__$1 = state_23568;
if(cljs.core.truth_(inst_23479)){
var statearr_23603_23655 = state_23568__$1;
(statearr_23603_23655[(1)] = (5));

} else {
var statearr_23604_23656 = state_23568__$1;
(statearr_23604_23656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (23))){
var inst_23527 = (state_23568[(14)]);
var inst_23533 = (inst_23527 == null);
var state_23568__$1 = state_23568;
if(cljs.core.truth_(inst_23533)){
var statearr_23605_23657 = state_23568__$1;
(statearr_23605_23657[(1)] = (26));

} else {
var statearr_23606_23658 = state_23568__$1;
(statearr_23606_23658[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (35))){
var inst_23553 = (state_23568[(2)]);
var state_23568__$1 = state_23568;
if(cljs.core.truth_(inst_23553)){
var statearr_23607_23659 = state_23568__$1;
(statearr_23607_23659[(1)] = (36));

} else {
var statearr_23608_23660 = state_23568__$1;
(statearr_23608_23660[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (19))){
var inst_23495 = (state_23568[(7)]);
var inst_23515 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23495);
var state_23568__$1 = state_23568;
var statearr_23609_23661 = state_23568__$1;
(statearr_23609_23661[(2)] = inst_23515);

(statearr_23609_23661[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (11))){
var inst_23495 = (state_23568[(7)]);
var inst_23499 = (inst_23495 == null);
var inst_23500 = cljs.core.not.call(null,inst_23499);
var state_23568__$1 = state_23568;
if(inst_23500){
var statearr_23610_23662 = state_23568__$1;
(statearr_23610_23662[(1)] = (13));

} else {
var statearr_23611_23663 = state_23568__$1;
(statearr_23611_23663[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (9))){
var inst_23470 = (state_23568[(8)]);
var state_23568__$1 = state_23568;
var statearr_23612_23664 = state_23568__$1;
(statearr_23612_23664[(2)] = inst_23470);

(statearr_23612_23664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (5))){
var state_23568__$1 = state_23568;
var statearr_23613_23665 = state_23568__$1;
(statearr_23613_23665[(2)] = true);

(statearr_23613_23665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (14))){
var state_23568__$1 = state_23568;
var statearr_23614_23666 = state_23568__$1;
(statearr_23614_23666[(2)] = false);

(statearr_23614_23666[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (26))){
var inst_23528 = (state_23568[(11)]);
var inst_23535 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23528);
var state_23568__$1 = state_23568;
var statearr_23615_23667 = state_23568__$1;
(statearr_23615_23667[(2)] = inst_23535);

(statearr_23615_23667[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (16))){
var state_23568__$1 = state_23568;
var statearr_23616_23668 = state_23568__$1;
(statearr_23616_23668[(2)] = true);

(statearr_23616_23668[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (38))){
var inst_23558 = (state_23568[(2)]);
var state_23568__$1 = state_23568;
var statearr_23617_23669 = state_23568__$1;
(statearr_23617_23669[(2)] = inst_23558);

(statearr_23617_23669[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (30))){
var inst_23520 = (state_23568[(13)]);
var inst_23519 = (state_23568[(9)]);
var inst_23528 = (state_23568[(11)]);
var inst_23545 = cljs.core.empty_QMARK_.call(null,inst_23519);
var inst_23546 = inst_23520.call(null,inst_23528);
var inst_23547 = cljs.core.not.call(null,inst_23546);
var inst_23548 = ((inst_23545) && (inst_23547));
var state_23568__$1 = state_23568;
var statearr_23618_23670 = state_23568__$1;
(statearr_23618_23670[(2)] = inst_23548);

(statearr_23618_23670[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (10))){
var inst_23470 = (state_23568[(8)]);
var inst_23491 = (state_23568[(2)]);
var inst_23492 = cljs.core.get.call(null,inst_23491,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23493 = cljs.core.get.call(null,inst_23491,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23494 = cljs.core.get.call(null,inst_23491,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23495 = inst_23470;
var state_23568__$1 = (function (){var statearr_23619 = state_23568;
(statearr_23619[(16)] = inst_23492);

(statearr_23619[(17)] = inst_23493);

(statearr_23619[(18)] = inst_23494);

(statearr_23619[(7)] = inst_23495);

return statearr_23619;
})();
var statearr_23620_23671 = state_23568__$1;
(statearr_23620_23671[(2)] = null);

(statearr_23620_23671[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (18))){
var inst_23510 = (state_23568[(2)]);
var state_23568__$1 = state_23568;
var statearr_23621_23672 = state_23568__$1;
(statearr_23621_23672[(2)] = inst_23510);

(statearr_23621_23672[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (37))){
var state_23568__$1 = state_23568;
var statearr_23622_23673 = state_23568__$1;
(statearr_23622_23673[(2)] = null);

(statearr_23622_23673[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (8))){
var inst_23470 = (state_23568[(8)]);
var inst_23488 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23470);
var state_23568__$1 = state_23568;
var statearr_23623_23674 = state_23568__$1;
(statearr_23623_23674[(2)] = inst_23488);

(statearr_23623_23674[(1)] = (10));


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
});})(c__22583__auto___23628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22495__auto__,c__22583__auto___23628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22496__auto__ = null;
var cljs$core$async$mix_$_state_machine__22496__auto____0 = (function (){
var statearr_23624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23624[(0)] = cljs$core$async$mix_$_state_machine__22496__auto__);

(statearr_23624[(1)] = (1));

return statearr_23624;
});
var cljs$core$async$mix_$_state_machine__22496__auto____1 = (function (state_23568){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_23568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e23625){if((e23625 instanceof Object)){
var ex__22499__auto__ = e23625;
var statearr_23626_23675 = state_23568;
(statearr_23626_23675[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23676 = state_23568;
state_23568 = G__23676;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22496__auto__ = function(state_23568){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22496__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22496__auto____1.call(this,state_23568);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22496__auto____0;
cljs$core$async$mix_$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22496__auto____1;
return cljs$core$async$mix_$_state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto___23628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22585__auto__ = (function (){var statearr_23627 = f__22584__auto__.call(null);
(statearr_23627[(6)] = c__22583__auto___23628);

return statearr_23627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto___23628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__23678 = arguments.length;
switch (G__23678) {
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
var G__23682 = arguments.length;
switch (G__23682) {
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
return (function (p1__23680_SHARP_){
if(cljs.core.truth_(p1__23680_SHARP_.call(null,topic))){
return p1__23680_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23680_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23683 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23683 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23684){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23684 = meta23684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23685,meta23684__$1){
var self__ = this;
var _23685__$1 = this;
return (new cljs.core.async.t_cljs$core$async23683(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23684__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23683.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23685){
var self__ = this;
var _23685__$1 = this;
return self__.meta23684;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23683.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23683.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23683.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23683.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23683.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async23683.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23683.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23683.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23684","meta23684",2106874446,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23683.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23683";

cljs.core.async.t_cljs$core$async23683.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23683");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23683.
 */
cljs.core.async.__GT_t_cljs$core$async23683 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23683(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23684){
return (new cljs.core.async.t_cljs$core$async23683(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23684));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23683(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22583__auto___23803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto___23803,mults,ensure_mult,p){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto___23803,mults,ensure_mult,p){
return (function (state_23757){
var state_val_23758 = (state_23757[(1)]);
if((state_val_23758 === (7))){
var inst_23753 = (state_23757[(2)]);
var state_23757__$1 = state_23757;
var statearr_23759_23804 = state_23757__$1;
(statearr_23759_23804[(2)] = inst_23753);

(statearr_23759_23804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (20))){
var state_23757__$1 = state_23757;
var statearr_23760_23805 = state_23757__$1;
(statearr_23760_23805[(2)] = null);

(statearr_23760_23805[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (1))){
var state_23757__$1 = state_23757;
var statearr_23761_23806 = state_23757__$1;
(statearr_23761_23806[(2)] = null);

(statearr_23761_23806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (24))){
var inst_23736 = (state_23757[(7)]);
var inst_23745 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23736);
var state_23757__$1 = state_23757;
var statearr_23762_23807 = state_23757__$1;
(statearr_23762_23807[(2)] = inst_23745);

(statearr_23762_23807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (4))){
var inst_23688 = (state_23757[(8)]);
var inst_23688__$1 = (state_23757[(2)]);
var inst_23689 = (inst_23688__$1 == null);
var state_23757__$1 = (function (){var statearr_23763 = state_23757;
(statearr_23763[(8)] = inst_23688__$1);

return statearr_23763;
})();
if(cljs.core.truth_(inst_23689)){
var statearr_23764_23808 = state_23757__$1;
(statearr_23764_23808[(1)] = (5));

} else {
var statearr_23765_23809 = state_23757__$1;
(statearr_23765_23809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (15))){
var inst_23730 = (state_23757[(2)]);
var state_23757__$1 = state_23757;
var statearr_23766_23810 = state_23757__$1;
(statearr_23766_23810[(2)] = inst_23730);

(statearr_23766_23810[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (21))){
var inst_23750 = (state_23757[(2)]);
var state_23757__$1 = (function (){var statearr_23767 = state_23757;
(statearr_23767[(9)] = inst_23750);

return statearr_23767;
})();
var statearr_23768_23811 = state_23757__$1;
(statearr_23768_23811[(2)] = null);

(statearr_23768_23811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (13))){
var inst_23712 = (state_23757[(10)]);
var inst_23714 = cljs.core.chunked_seq_QMARK_.call(null,inst_23712);
var state_23757__$1 = state_23757;
if(inst_23714){
var statearr_23769_23812 = state_23757__$1;
(statearr_23769_23812[(1)] = (16));

} else {
var statearr_23770_23813 = state_23757__$1;
(statearr_23770_23813[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (22))){
var inst_23742 = (state_23757[(2)]);
var state_23757__$1 = state_23757;
if(cljs.core.truth_(inst_23742)){
var statearr_23771_23814 = state_23757__$1;
(statearr_23771_23814[(1)] = (23));

} else {
var statearr_23772_23815 = state_23757__$1;
(statearr_23772_23815[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (6))){
var inst_23688 = (state_23757[(8)]);
var inst_23736 = (state_23757[(7)]);
var inst_23738 = (state_23757[(11)]);
var inst_23736__$1 = topic_fn.call(null,inst_23688);
var inst_23737 = cljs.core.deref.call(null,mults);
var inst_23738__$1 = cljs.core.get.call(null,inst_23737,inst_23736__$1);
var state_23757__$1 = (function (){var statearr_23773 = state_23757;
(statearr_23773[(7)] = inst_23736__$1);

(statearr_23773[(11)] = inst_23738__$1);

return statearr_23773;
})();
if(cljs.core.truth_(inst_23738__$1)){
var statearr_23774_23816 = state_23757__$1;
(statearr_23774_23816[(1)] = (19));

} else {
var statearr_23775_23817 = state_23757__$1;
(statearr_23775_23817[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (25))){
var inst_23747 = (state_23757[(2)]);
var state_23757__$1 = state_23757;
var statearr_23776_23818 = state_23757__$1;
(statearr_23776_23818[(2)] = inst_23747);

(statearr_23776_23818[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (17))){
var inst_23712 = (state_23757[(10)]);
var inst_23721 = cljs.core.first.call(null,inst_23712);
var inst_23722 = cljs.core.async.muxch_STAR_.call(null,inst_23721);
var inst_23723 = cljs.core.async.close_BANG_.call(null,inst_23722);
var inst_23724 = cljs.core.next.call(null,inst_23712);
var inst_23698 = inst_23724;
var inst_23699 = null;
var inst_23700 = (0);
var inst_23701 = (0);
var state_23757__$1 = (function (){var statearr_23777 = state_23757;
(statearr_23777[(12)] = inst_23700);

(statearr_23777[(13)] = inst_23699);

(statearr_23777[(14)] = inst_23698);

(statearr_23777[(15)] = inst_23723);

(statearr_23777[(16)] = inst_23701);

return statearr_23777;
})();
var statearr_23778_23819 = state_23757__$1;
(statearr_23778_23819[(2)] = null);

(statearr_23778_23819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (3))){
var inst_23755 = (state_23757[(2)]);
var state_23757__$1 = state_23757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23757__$1,inst_23755);
} else {
if((state_val_23758 === (12))){
var inst_23732 = (state_23757[(2)]);
var state_23757__$1 = state_23757;
var statearr_23779_23820 = state_23757__$1;
(statearr_23779_23820[(2)] = inst_23732);

(statearr_23779_23820[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (2))){
var state_23757__$1 = state_23757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23757__$1,(4),ch);
} else {
if((state_val_23758 === (23))){
var state_23757__$1 = state_23757;
var statearr_23780_23821 = state_23757__$1;
(statearr_23780_23821[(2)] = null);

(statearr_23780_23821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (19))){
var inst_23688 = (state_23757[(8)]);
var inst_23738 = (state_23757[(11)]);
var inst_23740 = cljs.core.async.muxch_STAR_.call(null,inst_23738);
var state_23757__$1 = state_23757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23757__$1,(22),inst_23740,inst_23688);
} else {
if((state_val_23758 === (11))){
var inst_23712 = (state_23757[(10)]);
var inst_23698 = (state_23757[(14)]);
var inst_23712__$1 = cljs.core.seq.call(null,inst_23698);
var state_23757__$1 = (function (){var statearr_23781 = state_23757;
(statearr_23781[(10)] = inst_23712__$1);

return statearr_23781;
})();
if(inst_23712__$1){
var statearr_23782_23822 = state_23757__$1;
(statearr_23782_23822[(1)] = (13));

} else {
var statearr_23783_23823 = state_23757__$1;
(statearr_23783_23823[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (9))){
var inst_23734 = (state_23757[(2)]);
var state_23757__$1 = state_23757;
var statearr_23784_23824 = state_23757__$1;
(statearr_23784_23824[(2)] = inst_23734);

(statearr_23784_23824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (5))){
var inst_23695 = cljs.core.deref.call(null,mults);
var inst_23696 = cljs.core.vals.call(null,inst_23695);
var inst_23697 = cljs.core.seq.call(null,inst_23696);
var inst_23698 = inst_23697;
var inst_23699 = null;
var inst_23700 = (0);
var inst_23701 = (0);
var state_23757__$1 = (function (){var statearr_23785 = state_23757;
(statearr_23785[(12)] = inst_23700);

(statearr_23785[(13)] = inst_23699);

(statearr_23785[(14)] = inst_23698);

(statearr_23785[(16)] = inst_23701);

return statearr_23785;
})();
var statearr_23786_23825 = state_23757__$1;
(statearr_23786_23825[(2)] = null);

(statearr_23786_23825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (14))){
var state_23757__$1 = state_23757;
var statearr_23790_23826 = state_23757__$1;
(statearr_23790_23826[(2)] = null);

(statearr_23790_23826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (16))){
var inst_23712 = (state_23757[(10)]);
var inst_23716 = cljs.core.chunk_first.call(null,inst_23712);
var inst_23717 = cljs.core.chunk_rest.call(null,inst_23712);
var inst_23718 = cljs.core.count.call(null,inst_23716);
var inst_23698 = inst_23717;
var inst_23699 = inst_23716;
var inst_23700 = inst_23718;
var inst_23701 = (0);
var state_23757__$1 = (function (){var statearr_23791 = state_23757;
(statearr_23791[(12)] = inst_23700);

(statearr_23791[(13)] = inst_23699);

(statearr_23791[(14)] = inst_23698);

(statearr_23791[(16)] = inst_23701);

return statearr_23791;
})();
var statearr_23792_23827 = state_23757__$1;
(statearr_23792_23827[(2)] = null);

(statearr_23792_23827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (10))){
var inst_23700 = (state_23757[(12)]);
var inst_23699 = (state_23757[(13)]);
var inst_23698 = (state_23757[(14)]);
var inst_23701 = (state_23757[(16)]);
var inst_23706 = cljs.core._nth.call(null,inst_23699,inst_23701);
var inst_23707 = cljs.core.async.muxch_STAR_.call(null,inst_23706);
var inst_23708 = cljs.core.async.close_BANG_.call(null,inst_23707);
var inst_23709 = (inst_23701 + (1));
var tmp23787 = inst_23700;
var tmp23788 = inst_23699;
var tmp23789 = inst_23698;
var inst_23698__$1 = tmp23789;
var inst_23699__$1 = tmp23788;
var inst_23700__$1 = tmp23787;
var inst_23701__$1 = inst_23709;
var state_23757__$1 = (function (){var statearr_23793 = state_23757;
(statearr_23793[(12)] = inst_23700__$1);

(statearr_23793[(17)] = inst_23708);

(statearr_23793[(13)] = inst_23699__$1);

(statearr_23793[(14)] = inst_23698__$1);

(statearr_23793[(16)] = inst_23701__$1);

return statearr_23793;
})();
var statearr_23794_23828 = state_23757__$1;
(statearr_23794_23828[(2)] = null);

(statearr_23794_23828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (18))){
var inst_23727 = (state_23757[(2)]);
var state_23757__$1 = state_23757;
var statearr_23795_23829 = state_23757__$1;
(statearr_23795_23829[(2)] = inst_23727);

(statearr_23795_23829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (8))){
var inst_23700 = (state_23757[(12)]);
var inst_23701 = (state_23757[(16)]);
var inst_23703 = (inst_23701 < inst_23700);
var inst_23704 = inst_23703;
var state_23757__$1 = state_23757;
if(cljs.core.truth_(inst_23704)){
var statearr_23796_23830 = state_23757__$1;
(statearr_23796_23830[(1)] = (10));

} else {
var statearr_23797_23831 = state_23757__$1;
(statearr_23797_23831[(1)] = (11));

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
});})(c__22583__auto___23803,mults,ensure_mult,p))
;
return ((function (switch__22495__auto__,c__22583__auto___23803,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22496__auto__ = null;
var cljs$core$async$state_machine__22496__auto____0 = (function (){
var statearr_23798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23798[(0)] = cljs$core$async$state_machine__22496__auto__);

(statearr_23798[(1)] = (1));

return statearr_23798;
});
var cljs$core$async$state_machine__22496__auto____1 = (function (state_23757){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_23757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e23799){if((e23799 instanceof Object)){
var ex__22499__auto__ = e23799;
var statearr_23800_23832 = state_23757;
(statearr_23800_23832[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23833 = state_23757;
state_23757 = G__23833;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
cljs$core$async$state_machine__22496__auto__ = function(state_23757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22496__auto____1.call(this,state_23757);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22496__auto____0;
cljs$core$async$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22496__auto____1;
return cljs$core$async$state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto___23803,mults,ensure_mult,p))
})();
var state__22585__auto__ = (function (){var statearr_23801 = f__22584__auto__.call(null);
(statearr_23801[(6)] = c__22583__auto___23803);

return statearr_23801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto___23803,mults,ensure_mult,p))
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
var G__23835 = arguments.length;
switch (G__23835) {
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
var G__23838 = arguments.length;
switch (G__23838) {
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
var G__23841 = arguments.length;
switch (G__23841) {
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
var c__22583__auto___23908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto___23908,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto___23908,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23880){
var state_val_23881 = (state_23880[(1)]);
if((state_val_23881 === (7))){
var state_23880__$1 = state_23880;
var statearr_23882_23909 = state_23880__$1;
(statearr_23882_23909[(2)] = null);

(statearr_23882_23909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (1))){
var state_23880__$1 = state_23880;
var statearr_23883_23910 = state_23880__$1;
(statearr_23883_23910[(2)] = null);

(statearr_23883_23910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (4))){
var inst_23844 = (state_23880[(7)]);
var inst_23846 = (inst_23844 < cnt);
var state_23880__$1 = state_23880;
if(cljs.core.truth_(inst_23846)){
var statearr_23884_23911 = state_23880__$1;
(statearr_23884_23911[(1)] = (6));

} else {
var statearr_23885_23912 = state_23880__$1;
(statearr_23885_23912[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (15))){
var inst_23876 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
var statearr_23886_23913 = state_23880__$1;
(statearr_23886_23913[(2)] = inst_23876);

(statearr_23886_23913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (13))){
var inst_23869 = cljs.core.async.close_BANG_.call(null,out);
var state_23880__$1 = state_23880;
var statearr_23887_23914 = state_23880__$1;
(statearr_23887_23914[(2)] = inst_23869);

(statearr_23887_23914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (6))){
var state_23880__$1 = state_23880;
var statearr_23888_23915 = state_23880__$1;
(statearr_23888_23915[(2)] = null);

(statearr_23888_23915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (3))){
var inst_23878 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23880__$1,inst_23878);
} else {
if((state_val_23881 === (12))){
var inst_23866 = (state_23880[(8)]);
var inst_23866__$1 = (state_23880[(2)]);
var inst_23867 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23866__$1);
var state_23880__$1 = (function (){var statearr_23889 = state_23880;
(statearr_23889[(8)] = inst_23866__$1);

return statearr_23889;
})();
if(cljs.core.truth_(inst_23867)){
var statearr_23890_23916 = state_23880__$1;
(statearr_23890_23916[(1)] = (13));

} else {
var statearr_23891_23917 = state_23880__$1;
(statearr_23891_23917[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (2))){
var inst_23843 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23844 = (0);
var state_23880__$1 = (function (){var statearr_23892 = state_23880;
(statearr_23892[(9)] = inst_23843);

(statearr_23892[(7)] = inst_23844);

return statearr_23892;
})();
var statearr_23893_23918 = state_23880__$1;
(statearr_23893_23918[(2)] = null);

(statearr_23893_23918[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (11))){
var inst_23844 = (state_23880[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23880,(10),Object,null,(9));
var inst_23853 = chs__$1.call(null,inst_23844);
var inst_23854 = done.call(null,inst_23844);
var inst_23855 = cljs.core.async.take_BANG_.call(null,inst_23853,inst_23854);
var state_23880__$1 = state_23880;
var statearr_23894_23919 = state_23880__$1;
(statearr_23894_23919[(2)] = inst_23855);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23880__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (9))){
var inst_23844 = (state_23880[(7)]);
var inst_23857 = (state_23880[(2)]);
var inst_23858 = (inst_23844 + (1));
var inst_23844__$1 = inst_23858;
var state_23880__$1 = (function (){var statearr_23895 = state_23880;
(statearr_23895[(10)] = inst_23857);

(statearr_23895[(7)] = inst_23844__$1);

return statearr_23895;
})();
var statearr_23896_23920 = state_23880__$1;
(statearr_23896_23920[(2)] = null);

(statearr_23896_23920[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (5))){
var inst_23864 = (state_23880[(2)]);
var state_23880__$1 = (function (){var statearr_23897 = state_23880;
(statearr_23897[(11)] = inst_23864);

return statearr_23897;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23880__$1,(12),dchan);
} else {
if((state_val_23881 === (14))){
var inst_23866 = (state_23880[(8)]);
var inst_23871 = cljs.core.apply.call(null,f,inst_23866);
var state_23880__$1 = state_23880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23880__$1,(16),out,inst_23871);
} else {
if((state_val_23881 === (16))){
var inst_23873 = (state_23880[(2)]);
var state_23880__$1 = (function (){var statearr_23898 = state_23880;
(statearr_23898[(12)] = inst_23873);

return statearr_23898;
})();
var statearr_23899_23921 = state_23880__$1;
(statearr_23899_23921[(2)] = null);

(statearr_23899_23921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (10))){
var inst_23848 = (state_23880[(2)]);
var inst_23849 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23880__$1 = (function (){var statearr_23900 = state_23880;
(statearr_23900[(13)] = inst_23848);

return statearr_23900;
})();
var statearr_23901_23922 = state_23880__$1;
(statearr_23901_23922[(2)] = inst_23849);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23880__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (8))){
var inst_23862 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
var statearr_23902_23923 = state_23880__$1;
(statearr_23902_23923[(2)] = inst_23862);

(statearr_23902_23923[(1)] = (5));


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
});})(c__22583__auto___23908,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22495__auto__,c__22583__auto___23908,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22496__auto__ = null;
var cljs$core$async$state_machine__22496__auto____0 = (function (){
var statearr_23903 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23903[(0)] = cljs$core$async$state_machine__22496__auto__);

(statearr_23903[(1)] = (1));

return statearr_23903;
});
var cljs$core$async$state_machine__22496__auto____1 = (function (state_23880){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_23880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e23904){if((e23904 instanceof Object)){
var ex__22499__auto__ = e23904;
var statearr_23905_23924 = state_23880;
(statearr_23905_23924[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23925 = state_23880;
state_23880 = G__23925;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
cljs$core$async$state_machine__22496__auto__ = function(state_23880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22496__auto____1.call(this,state_23880);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22496__auto____0;
cljs$core$async$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22496__auto____1;
return cljs$core$async$state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto___23908,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22585__auto__ = (function (){var statearr_23906 = f__22584__auto__.call(null);
(statearr_23906[(6)] = c__22583__auto___23908);

return statearr_23906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto___23908,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__23928 = arguments.length;
switch (G__23928) {
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
var c__22583__auto___23982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto___23982,out){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto___23982,out){
return (function (state_23960){
var state_val_23961 = (state_23960[(1)]);
if((state_val_23961 === (7))){
var inst_23939 = (state_23960[(7)]);
var inst_23940 = (state_23960[(8)]);
var inst_23939__$1 = (state_23960[(2)]);
var inst_23940__$1 = cljs.core.nth.call(null,inst_23939__$1,(0),null);
var inst_23941 = cljs.core.nth.call(null,inst_23939__$1,(1),null);
var inst_23942 = (inst_23940__$1 == null);
var state_23960__$1 = (function (){var statearr_23962 = state_23960;
(statearr_23962[(9)] = inst_23941);

(statearr_23962[(7)] = inst_23939__$1);

(statearr_23962[(8)] = inst_23940__$1);

return statearr_23962;
})();
if(cljs.core.truth_(inst_23942)){
var statearr_23963_23983 = state_23960__$1;
(statearr_23963_23983[(1)] = (8));

} else {
var statearr_23964_23984 = state_23960__$1;
(statearr_23964_23984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (1))){
var inst_23929 = cljs.core.vec.call(null,chs);
var inst_23930 = inst_23929;
var state_23960__$1 = (function (){var statearr_23965 = state_23960;
(statearr_23965[(10)] = inst_23930);

return statearr_23965;
})();
var statearr_23966_23985 = state_23960__$1;
(statearr_23966_23985[(2)] = null);

(statearr_23966_23985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (4))){
var inst_23930 = (state_23960[(10)]);
var state_23960__$1 = state_23960;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23960__$1,(7),inst_23930);
} else {
if((state_val_23961 === (6))){
var inst_23956 = (state_23960[(2)]);
var state_23960__$1 = state_23960;
var statearr_23967_23986 = state_23960__$1;
(statearr_23967_23986[(2)] = inst_23956);

(statearr_23967_23986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (3))){
var inst_23958 = (state_23960[(2)]);
var state_23960__$1 = state_23960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23960__$1,inst_23958);
} else {
if((state_val_23961 === (2))){
var inst_23930 = (state_23960[(10)]);
var inst_23932 = cljs.core.count.call(null,inst_23930);
var inst_23933 = (inst_23932 > (0));
var state_23960__$1 = state_23960;
if(cljs.core.truth_(inst_23933)){
var statearr_23969_23987 = state_23960__$1;
(statearr_23969_23987[(1)] = (4));

} else {
var statearr_23970_23988 = state_23960__$1;
(statearr_23970_23988[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (11))){
var inst_23930 = (state_23960[(10)]);
var inst_23949 = (state_23960[(2)]);
var tmp23968 = inst_23930;
var inst_23930__$1 = tmp23968;
var state_23960__$1 = (function (){var statearr_23971 = state_23960;
(statearr_23971[(11)] = inst_23949);

(statearr_23971[(10)] = inst_23930__$1);

return statearr_23971;
})();
var statearr_23972_23989 = state_23960__$1;
(statearr_23972_23989[(2)] = null);

(statearr_23972_23989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (9))){
var inst_23940 = (state_23960[(8)]);
var state_23960__$1 = state_23960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23960__$1,(11),out,inst_23940);
} else {
if((state_val_23961 === (5))){
var inst_23954 = cljs.core.async.close_BANG_.call(null,out);
var state_23960__$1 = state_23960;
var statearr_23973_23990 = state_23960__$1;
(statearr_23973_23990[(2)] = inst_23954);

(statearr_23973_23990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (10))){
var inst_23952 = (state_23960[(2)]);
var state_23960__$1 = state_23960;
var statearr_23974_23991 = state_23960__$1;
(statearr_23974_23991[(2)] = inst_23952);

(statearr_23974_23991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (8))){
var inst_23941 = (state_23960[(9)]);
var inst_23930 = (state_23960[(10)]);
var inst_23939 = (state_23960[(7)]);
var inst_23940 = (state_23960[(8)]);
var inst_23944 = (function (){var cs = inst_23930;
var vec__23935 = inst_23939;
var v = inst_23940;
var c = inst_23941;
return ((function (cs,vec__23935,v,c,inst_23941,inst_23930,inst_23939,inst_23940,state_val_23961,c__22583__auto___23982,out){
return (function (p1__23926_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23926_SHARP_);
});
;})(cs,vec__23935,v,c,inst_23941,inst_23930,inst_23939,inst_23940,state_val_23961,c__22583__auto___23982,out))
})();
var inst_23945 = cljs.core.filterv.call(null,inst_23944,inst_23930);
var inst_23930__$1 = inst_23945;
var state_23960__$1 = (function (){var statearr_23975 = state_23960;
(statearr_23975[(10)] = inst_23930__$1);

return statearr_23975;
})();
var statearr_23976_23992 = state_23960__$1;
(statearr_23976_23992[(2)] = null);

(statearr_23976_23992[(1)] = (2));


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
});})(c__22583__auto___23982,out))
;
return ((function (switch__22495__auto__,c__22583__auto___23982,out){
return (function() {
var cljs$core$async$state_machine__22496__auto__ = null;
var cljs$core$async$state_machine__22496__auto____0 = (function (){
var statearr_23977 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23977[(0)] = cljs$core$async$state_machine__22496__auto__);

(statearr_23977[(1)] = (1));

return statearr_23977;
});
var cljs$core$async$state_machine__22496__auto____1 = (function (state_23960){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_23960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e23978){if((e23978 instanceof Object)){
var ex__22499__auto__ = e23978;
var statearr_23979_23993 = state_23960;
(statearr_23979_23993[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23994 = state_23960;
state_23960 = G__23994;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
cljs$core$async$state_machine__22496__auto__ = function(state_23960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22496__auto____1.call(this,state_23960);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22496__auto____0;
cljs$core$async$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22496__auto____1;
return cljs$core$async$state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto___23982,out))
})();
var state__22585__auto__ = (function (){var statearr_23980 = f__22584__auto__.call(null);
(statearr_23980[(6)] = c__22583__auto___23982);

return statearr_23980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto___23982,out))
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
var G__23996 = arguments.length;
switch (G__23996) {
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
var c__22583__auto___24041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto___24041,out){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto___24041,out){
return (function (state_24020){
var state_val_24021 = (state_24020[(1)]);
if((state_val_24021 === (7))){
var inst_24002 = (state_24020[(7)]);
var inst_24002__$1 = (state_24020[(2)]);
var inst_24003 = (inst_24002__$1 == null);
var inst_24004 = cljs.core.not.call(null,inst_24003);
var state_24020__$1 = (function (){var statearr_24022 = state_24020;
(statearr_24022[(7)] = inst_24002__$1);

return statearr_24022;
})();
if(inst_24004){
var statearr_24023_24042 = state_24020__$1;
(statearr_24023_24042[(1)] = (8));

} else {
var statearr_24024_24043 = state_24020__$1;
(statearr_24024_24043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (1))){
var inst_23997 = (0);
var state_24020__$1 = (function (){var statearr_24025 = state_24020;
(statearr_24025[(8)] = inst_23997);

return statearr_24025;
})();
var statearr_24026_24044 = state_24020__$1;
(statearr_24026_24044[(2)] = null);

(statearr_24026_24044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (4))){
var state_24020__$1 = state_24020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24020__$1,(7),ch);
} else {
if((state_val_24021 === (6))){
var inst_24015 = (state_24020[(2)]);
var state_24020__$1 = state_24020;
var statearr_24027_24045 = state_24020__$1;
(statearr_24027_24045[(2)] = inst_24015);

(statearr_24027_24045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (3))){
var inst_24017 = (state_24020[(2)]);
var inst_24018 = cljs.core.async.close_BANG_.call(null,out);
var state_24020__$1 = (function (){var statearr_24028 = state_24020;
(statearr_24028[(9)] = inst_24017);

return statearr_24028;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24020__$1,inst_24018);
} else {
if((state_val_24021 === (2))){
var inst_23997 = (state_24020[(8)]);
var inst_23999 = (inst_23997 < n);
var state_24020__$1 = state_24020;
if(cljs.core.truth_(inst_23999)){
var statearr_24029_24046 = state_24020__$1;
(statearr_24029_24046[(1)] = (4));

} else {
var statearr_24030_24047 = state_24020__$1;
(statearr_24030_24047[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (11))){
var inst_23997 = (state_24020[(8)]);
var inst_24007 = (state_24020[(2)]);
var inst_24008 = (inst_23997 + (1));
var inst_23997__$1 = inst_24008;
var state_24020__$1 = (function (){var statearr_24031 = state_24020;
(statearr_24031[(8)] = inst_23997__$1);

(statearr_24031[(10)] = inst_24007);

return statearr_24031;
})();
var statearr_24032_24048 = state_24020__$1;
(statearr_24032_24048[(2)] = null);

(statearr_24032_24048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (9))){
var state_24020__$1 = state_24020;
var statearr_24033_24049 = state_24020__$1;
(statearr_24033_24049[(2)] = null);

(statearr_24033_24049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (5))){
var state_24020__$1 = state_24020;
var statearr_24034_24050 = state_24020__$1;
(statearr_24034_24050[(2)] = null);

(statearr_24034_24050[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (10))){
var inst_24012 = (state_24020[(2)]);
var state_24020__$1 = state_24020;
var statearr_24035_24051 = state_24020__$1;
(statearr_24035_24051[(2)] = inst_24012);

(statearr_24035_24051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (8))){
var inst_24002 = (state_24020[(7)]);
var state_24020__$1 = state_24020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24020__$1,(11),out,inst_24002);
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
});})(c__22583__auto___24041,out))
;
return ((function (switch__22495__auto__,c__22583__auto___24041,out){
return (function() {
var cljs$core$async$state_machine__22496__auto__ = null;
var cljs$core$async$state_machine__22496__auto____0 = (function (){
var statearr_24036 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24036[(0)] = cljs$core$async$state_machine__22496__auto__);

(statearr_24036[(1)] = (1));

return statearr_24036;
});
var cljs$core$async$state_machine__22496__auto____1 = (function (state_24020){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_24020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e24037){if((e24037 instanceof Object)){
var ex__22499__auto__ = e24037;
var statearr_24038_24052 = state_24020;
(statearr_24038_24052[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24053 = state_24020;
state_24020 = G__24053;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
cljs$core$async$state_machine__22496__auto__ = function(state_24020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22496__auto____1.call(this,state_24020);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22496__auto____0;
cljs$core$async$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22496__auto____1;
return cljs$core$async$state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto___24041,out))
})();
var state__22585__auto__ = (function (){var statearr_24039 = f__22584__auto__.call(null);
(statearr_24039[(6)] = c__22583__auto___24041);

return statearr_24039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto___24041,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24055 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24055 = (function (f,ch,meta24056){
this.f = f;
this.ch = ch;
this.meta24056 = meta24056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24057,meta24056__$1){
var self__ = this;
var _24057__$1 = this;
return (new cljs.core.async.t_cljs$core$async24055(self__.f,self__.ch,meta24056__$1));
});

cljs.core.async.t_cljs$core$async24055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24057){
var self__ = this;
var _24057__$1 = this;
return self__.meta24056;
});

cljs.core.async.t_cljs$core$async24055.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24055.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24055.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24055.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24055.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24058 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24058 = (function (f,ch,meta24056,_,fn1,meta24059){
this.f = f;
this.ch = ch;
this.meta24056 = meta24056;
this._ = _;
this.fn1 = fn1;
this.meta24059 = meta24059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24060,meta24059__$1){
var self__ = this;
var _24060__$1 = this;
return (new cljs.core.async.t_cljs$core$async24058(self__.f,self__.ch,self__.meta24056,self__._,self__.fn1,meta24059__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24060){
var self__ = this;
var _24060__$1 = this;
return self__.meta24059;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24058.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24058.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24054_SHARP_){
return f1.call(null,(((p1__24054_SHARP_ == null))?null:self__.f.call(null,p1__24054_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24058.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24056","meta24056",965553942,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24055","cljs.core.async/t_cljs$core$async24055",-1788006791,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24059","meta24059",1750146043,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24058.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24058";

cljs.core.async.t_cljs$core$async24058.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24058");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24058.
 */
cljs.core.async.__GT_t_cljs$core$async24058 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24058(f__$1,ch__$1,meta24056__$1,___$2,fn1__$1,meta24059){
return (new cljs.core.async.t_cljs$core$async24058(f__$1,ch__$1,meta24056__$1,___$2,fn1__$1,meta24059));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24058(self__.f,self__.ch,self__.meta24056,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async24055.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24055.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24056","meta24056",965553942,null)], null);
});

cljs.core.async.t_cljs$core$async24055.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24055";

cljs.core.async.t_cljs$core$async24055.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24055");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24055.
 */
cljs.core.async.__GT_t_cljs$core$async24055 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24055(f__$1,ch__$1,meta24056){
return (new cljs.core.async.t_cljs$core$async24055(f__$1,ch__$1,meta24056));
});

}

return (new cljs.core.async.t_cljs$core$async24055(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24061 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24061 = (function (f,ch,meta24062){
this.f = f;
this.ch = ch;
this.meta24062 = meta24062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24063,meta24062__$1){
var self__ = this;
var _24063__$1 = this;
return (new cljs.core.async.t_cljs$core$async24061(self__.f,self__.ch,meta24062__$1));
});

cljs.core.async.t_cljs$core$async24061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24063){
var self__ = this;
var _24063__$1 = this;
return self__.meta24062;
});

cljs.core.async.t_cljs$core$async24061.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24061.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24061.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24061.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24061.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24061.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24062","meta24062",869608552,null)], null);
});

cljs.core.async.t_cljs$core$async24061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24061";

cljs.core.async.t_cljs$core$async24061.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24061");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24061.
 */
cljs.core.async.__GT_t_cljs$core$async24061 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24061(f__$1,ch__$1,meta24062){
return (new cljs.core.async.t_cljs$core$async24061(f__$1,ch__$1,meta24062));
});

}

return (new cljs.core.async.t_cljs$core$async24061(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24064 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24064 = (function (p,ch,meta24065){
this.p = p;
this.ch = ch;
this.meta24065 = meta24065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24066,meta24065__$1){
var self__ = this;
var _24066__$1 = this;
return (new cljs.core.async.t_cljs$core$async24064(self__.p,self__.ch,meta24065__$1));
});

cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24066){
var self__ = this;
var _24066__$1 = this;
return self__.meta24065;
});

cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24064.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24065","meta24065",-1458870597,null)], null);
});

cljs.core.async.t_cljs$core$async24064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24064";

cljs.core.async.t_cljs$core$async24064.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24064");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24064.
 */
cljs.core.async.__GT_t_cljs$core$async24064 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24064(p__$1,ch__$1,meta24065){
return (new cljs.core.async.t_cljs$core$async24064(p__$1,ch__$1,meta24065));
});

}

return (new cljs.core.async.t_cljs$core$async24064(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24068 = arguments.length;
switch (G__24068) {
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
var c__22583__auto___24108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto___24108,out){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto___24108,out){
return (function (state_24089){
var state_val_24090 = (state_24089[(1)]);
if((state_val_24090 === (7))){
var inst_24085 = (state_24089[(2)]);
var state_24089__$1 = state_24089;
var statearr_24091_24109 = state_24089__$1;
(statearr_24091_24109[(2)] = inst_24085);

(statearr_24091_24109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24090 === (1))){
var state_24089__$1 = state_24089;
var statearr_24092_24110 = state_24089__$1;
(statearr_24092_24110[(2)] = null);

(statearr_24092_24110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24090 === (4))){
var inst_24071 = (state_24089[(7)]);
var inst_24071__$1 = (state_24089[(2)]);
var inst_24072 = (inst_24071__$1 == null);
var state_24089__$1 = (function (){var statearr_24093 = state_24089;
(statearr_24093[(7)] = inst_24071__$1);

return statearr_24093;
})();
if(cljs.core.truth_(inst_24072)){
var statearr_24094_24111 = state_24089__$1;
(statearr_24094_24111[(1)] = (5));

} else {
var statearr_24095_24112 = state_24089__$1;
(statearr_24095_24112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24090 === (6))){
var inst_24071 = (state_24089[(7)]);
var inst_24076 = p.call(null,inst_24071);
var state_24089__$1 = state_24089;
if(cljs.core.truth_(inst_24076)){
var statearr_24096_24113 = state_24089__$1;
(statearr_24096_24113[(1)] = (8));

} else {
var statearr_24097_24114 = state_24089__$1;
(statearr_24097_24114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24090 === (3))){
var inst_24087 = (state_24089[(2)]);
var state_24089__$1 = state_24089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24089__$1,inst_24087);
} else {
if((state_val_24090 === (2))){
var state_24089__$1 = state_24089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24089__$1,(4),ch);
} else {
if((state_val_24090 === (11))){
var inst_24079 = (state_24089[(2)]);
var state_24089__$1 = state_24089;
var statearr_24098_24115 = state_24089__$1;
(statearr_24098_24115[(2)] = inst_24079);

(statearr_24098_24115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24090 === (9))){
var state_24089__$1 = state_24089;
var statearr_24099_24116 = state_24089__$1;
(statearr_24099_24116[(2)] = null);

(statearr_24099_24116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24090 === (5))){
var inst_24074 = cljs.core.async.close_BANG_.call(null,out);
var state_24089__$1 = state_24089;
var statearr_24100_24117 = state_24089__$1;
(statearr_24100_24117[(2)] = inst_24074);

(statearr_24100_24117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24090 === (10))){
var inst_24082 = (state_24089[(2)]);
var state_24089__$1 = (function (){var statearr_24101 = state_24089;
(statearr_24101[(8)] = inst_24082);

return statearr_24101;
})();
var statearr_24102_24118 = state_24089__$1;
(statearr_24102_24118[(2)] = null);

(statearr_24102_24118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24090 === (8))){
var inst_24071 = (state_24089[(7)]);
var state_24089__$1 = state_24089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24089__$1,(11),out,inst_24071);
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
});})(c__22583__auto___24108,out))
;
return ((function (switch__22495__auto__,c__22583__auto___24108,out){
return (function() {
var cljs$core$async$state_machine__22496__auto__ = null;
var cljs$core$async$state_machine__22496__auto____0 = (function (){
var statearr_24103 = [null,null,null,null,null,null,null,null,null];
(statearr_24103[(0)] = cljs$core$async$state_machine__22496__auto__);

(statearr_24103[(1)] = (1));

return statearr_24103;
});
var cljs$core$async$state_machine__22496__auto____1 = (function (state_24089){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_24089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e24104){if((e24104 instanceof Object)){
var ex__22499__auto__ = e24104;
var statearr_24105_24119 = state_24089;
(statearr_24105_24119[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24120 = state_24089;
state_24089 = G__24120;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
cljs$core$async$state_machine__22496__auto__ = function(state_24089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22496__auto____1.call(this,state_24089);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22496__auto____0;
cljs$core$async$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22496__auto____1;
return cljs$core$async$state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto___24108,out))
})();
var state__22585__auto__ = (function (){var statearr_24106 = f__22584__auto__.call(null);
(statearr_24106[(6)] = c__22583__auto___24108);

return statearr_24106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto___24108,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24122 = arguments.length;
switch (G__24122) {
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
var c__22583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto__){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto__){
return (function (state_24185){
var state_val_24186 = (state_24185[(1)]);
if((state_val_24186 === (7))){
var inst_24181 = (state_24185[(2)]);
var state_24185__$1 = state_24185;
var statearr_24187_24225 = state_24185__$1;
(statearr_24187_24225[(2)] = inst_24181);

(statearr_24187_24225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24186 === (20))){
var inst_24151 = (state_24185[(7)]);
var inst_24162 = (state_24185[(2)]);
var inst_24163 = cljs.core.next.call(null,inst_24151);
var inst_24137 = inst_24163;
var inst_24138 = null;
var inst_24139 = (0);
var inst_24140 = (0);
var state_24185__$1 = (function (){var statearr_24188 = state_24185;
(statearr_24188[(8)] = inst_24138);

(statearr_24188[(9)] = inst_24137);

(statearr_24188[(10)] = inst_24139);

(statearr_24188[(11)] = inst_24162);

(statearr_24188[(12)] = inst_24140);

return statearr_24188;
})();
var statearr_24189_24226 = state_24185__$1;
(statearr_24189_24226[(2)] = null);

(statearr_24189_24226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24186 === (1))){
var state_24185__$1 = state_24185;
var statearr_24190_24227 = state_24185__$1;
(statearr_24190_24227[(2)] = null);

(statearr_24190_24227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24186 === (4))){
var inst_24126 = (state_24185[(13)]);
var inst_24126__$1 = (state_24185[(2)]);
var inst_24127 = (inst_24126__$1 == null);
var state_24185__$1 = (function (){var statearr_24191 = state_24185;
(statearr_24191[(13)] = inst_24126__$1);

return statearr_24191;
})();
if(cljs.core.truth_(inst_24127)){
var statearr_24192_24228 = state_24185__$1;
(statearr_24192_24228[(1)] = (5));

} else {
var statearr_24193_24229 = state_24185__$1;
(statearr_24193_24229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24186 === (15))){
var state_24185__$1 = state_24185;
var statearr_24197_24230 = state_24185__$1;
(statearr_24197_24230[(2)] = null);

(statearr_24197_24230[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24186 === (21))){
var state_24185__$1 = state_24185;
var statearr_24198_24231 = state_24185__$1;
(statearr_24198_24231[(2)] = null);

(statearr_24198_24231[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24186 === (13))){
var inst_24138 = (state_24185[(8)]);
var inst_24137 = (state_24185[(9)]);
var inst_24139 = (state_24185[(10)]);
var inst_24140 = (state_24185[(12)]);
var inst_24147 = (state_24185[(2)]);
var inst_24148 = (inst_24140 + (1));
var tmp24194 = inst_24138;
var tmp24195 = inst_24137;
var tmp24196 = inst_24139;
var inst_24137__$1 = tmp24195;
var inst_24138__$1 = tmp24194;
var inst_24139__$1 = tmp24196;
var inst_24140__$1 = inst_24148;
var state_24185__$1 = (function (){var statearr_24199 = state_24185;
(statearr_24199[(8)] = inst_24138__$1);

(statearr_24199[(9)] = inst_24137__$1);

(statearr_24199[(10)] = inst_24139__$1);

(statearr_24199[(12)] = inst_24140__$1);

(statearr_24199[(14)] = inst_24147);

return statearr_24199;
})();
var statearr_24200_24232 = state_24185__$1;
(statearr_24200_24232[(2)] = null);

(statearr_24200_24232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24186 === (22))){
var state_24185__$1 = state_24185;
var statearr_24201_24233 = state_24185__$1;
(statearr_24201_24233[(2)] = null);

(statearr_24201_24233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24186 === (6))){
var inst_24126 = (state_24185[(13)]);
var inst_24135 = f.call(null,inst_24126);
var inst_24136 = cljs.core.seq.call(null,inst_24135);
var inst_24137 = inst_24136;
var inst_24138 = null;
var inst_24139 = (0);
var inst_24140 = (0);
var state_24185__$1 = (function (){var statearr_24202 = state_24185;
(statearr_24202[(8)] = inst_24138);

(statearr_24202[(9)] = inst_24137);

(statearr_24202[(10)] = inst_24139);

(statearr_24202[(12)] = inst_24140);

return statearr_24202;
})();
var statearr_24203_24234 = state_24185__$1;
(statearr_24203_24234[(2)] = null);

(statearr_24203_24234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24186 === (17))){
var inst_24151 = (state_24185[(7)]);
var inst_24155 = cljs.core.chunk_first.call(null,inst_24151);
var inst_24156 = cljs.core.chunk_rest.call(null,inst_24151);
var inst_24157 = cljs.core.count.call(null,inst_24155);
var inst_24137 = inst_24156;
var inst_24138 = inst_24155;
var inst_24139 = inst_24157;
var inst_24140 = (0);
var state_24185__$1 = (function (){var statearr_24204 = state_24185;
(statearr_24204[(8)] = inst_24138);

(statearr_24204[(9)] = inst_24137);

(statearr_24204[(10)] = inst_24139);

(statearr_24204[(12)] = inst_24140);

return statearr_24204;
})();
var statearr_24205_24235 = state_24185__$1;
(statearr_24205_24235[(2)] = null);

(statearr_24205_24235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24186 === (3))){
var inst_24183 = (state_24185[(2)]);
var state_24185__$1 = state_24185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24185__$1,inst_24183);
} else {
if((state_val_24186 === (12))){
var inst_24171 = (state_24185[(2)]);
var state_24185__$1 = state_24185;
var statearr_24206_24236 = state_24185__$1;
(statearr_24206_24236[(2)] = inst_24171);

(statearr_24206_24236[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24186 === (2))){
var state_24185__$1 = state_24185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24185__$1,(4),in$);
} else {
if((state_val_24186 === (23))){
var inst_24179 = (state_24185[(2)]);
var state_24185__$1 = state_24185;
var statearr_24207_24237 = state_24185__$1;
(statearr_24207_24237[(2)] = inst_24179);

(statearr_24207_24237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24186 === (19))){
var inst_24166 = (state_24185[(2)]);
var state_24185__$1 = state_24185;
var statearr_24208_24238 = state_24185__$1;
(statearr_24208_24238[(2)] = inst_24166);

(statearr_24208_24238[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24186 === (11))){
var inst_24137 = (state_24185[(9)]);
var inst_24151 = (state_24185[(7)]);
var inst_24151__$1 = cljs.core.seq.call(null,inst_24137);
var state_24185__$1 = (function (){var statearr_24209 = state_24185;
(statearr_24209[(7)] = inst_24151__$1);

return statearr_24209;
})();
if(inst_24151__$1){
var statearr_24210_24239 = state_24185__$1;
(statearr_24210_24239[(1)] = (14));

} else {
var statearr_24211_24240 = state_24185__$1;
(statearr_24211_24240[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24186 === (9))){
var inst_24173 = (state_24185[(2)]);
var inst_24174 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24185__$1 = (function (){var statearr_24212 = state_24185;
(statearr_24212[(15)] = inst_24173);

return statearr_24212;
})();
if(cljs.core.truth_(inst_24174)){
var statearr_24213_24241 = state_24185__$1;
(statearr_24213_24241[(1)] = (21));

} else {
var statearr_24214_24242 = state_24185__$1;
(statearr_24214_24242[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24186 === (5))){
var inst_24129 = cljs.core.async.close_BANG_.call(null,out);
var state_24185__$1 = state_24185;
var statearr_24215_24243 = state_24185__$1;
(statearr_24215_24243[(2)] = inst_24129);

(statearr_24215_24243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24186 === (14))){
var inst_24151 = (state_24185[(7)]);
var inst_24153 = cljs.core.chunked_seq_QMARK_.call(null,inst_24151);
var state_24185__$1 = state_24185;
if(inst_24153){
var statearr_24216_24244 = state_24185__$1;
(statearr_24216_24244[(1)] = (17));

} else {
var statearr_24217_24245 = state_24185__$1;
(statearr_24217_24245[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24186 === (16))){
var inst_24169 = (state_24185[(2)]);
var state_24185__$1 = state_24185;
var statearr_24218_24246 = state_24185__$1;
(statearr_24218_24246[(2)] = inst_24169);

(statearr_24218_24246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24186 === (10))){
var inst_24138 = (state_24185[(8)]);
var inst_24140 = (state_24185[(12)]);
var inst_24145 = cljs.core._nth.call(null,inst_24138,inst_24140);
var state_24185__$1 = state_24185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24185__$1,(13),out,inst_24145);
} else {
if((state_val_24186 === (18))){
var inst_24151 = (state_24185[(7)]);
var inst_24160 = cljs.core.first.call(null,inst_24151);
var state_24185__$1 = state_24185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24185__$1,(20),out,inst_24160);
} else {
if((state_val_24186 === (8))){
var inst_24139 = (state_24185[(10)]);
var inst_24140 = (state_24185[(12)]);
var inst_24142 = (inst_24140 < inst_24139);
var inst_24143 = inst_24142;
var state_24185__$1 = state_24185;
if(cljs.core.truth_(inst_24143)){
var statearr_24219_24247 = state_24185__$1;
(statearr_24219_24247[(1)] = (10));

} else {
var statearr_24220_24248 = state_24185__$1;
(statearr_24220_24248[(1)] = (11));

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
});})(c__22583__auto__))
;
return ((function (switch__22495__auto__,c__22583__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22496__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22496__auto____0 = (function (){
var statearr_24221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24221[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22496__auto__);

(statearr_24221[(1)] = (1));

return statearr_24221;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22496__auto____1 = (function (state_24185){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_24185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e24222){if((e24222 instanceof Object)){
var ex__22499__auto__ = e24222;
var statearr_24223_24249 = state_24185;
(statearr_24223_24249[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24250 = state_24185;
state_24185 = G__24250;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22496__auto__ = function(state_24185){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22496__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22496__auto____1.call(this,state_24185);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22496__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22496__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto__))
})();
var state__22585__auto__ = (function (){var statearr_24224 = f__22584__auto__.call(null);
(statearr_24224[(6)] = c__22583__auto__);

return statearr_24224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto__))
);

return c__22583__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24252 = arguments.length;
switch (G__24252) {
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
var G__24255 = arguments.length;
switch (G__24255) {
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
var G__24258 = arguments.length;
switch (G__24258) {
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
var c__22583__auto___24305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto___24305,out){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto___24305,out){
return (function (state_24282){
var state_val_24283 = (state_24282[(1)]);
if((state_val_24283 === (7))){
var inst_24277 = (state_24282[(2)]);
var state_24282__$1 = state_24282;
var statearr_24284_24306 = state_24282__$1;
(statearr_24284_24306[(2)] = inst_24277);

(statearr_24284_24306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24283 === (1))){
var inst_24259 = null;
var state_24282__$1 = (function (){var statearr_24285 = state_24282;
(statearr_24285[(7)] = inst_24259);

return statearr_24285;
})();
var statearr_24286_24307 = state_24282__$1;
(statearr_24286_24307[(2)] = null);

(statearr_24286_24307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24283 === (4))){
var inst_24262 = (state_24282[(8)]);
var inst_24262__$1 = (state_24282[(2)]);
var inst_24263 = (inst_24262__$1 == null);
var inst_24264 = cljs.core.not.call(null,inst_24263);
var state_24282__$1 = (function (){var statearr_24287 = state_24282;
(statearr_24287[(8)] = inst_24262__$1);

return statearr_24287;
})();
if(inst_24264){
var statearr_24288_24308 = state_24282__$1;
(statearr_24288_24308[(1)] = (5));

} else {
var statearr_24289_24309 = state_24282__$1;
(statearr_24289_24309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24283 === (6))){
var state_24282__$1 = state_24282;
var statearr_24290_24310 = state_24282__$1;
(statearr_24290_24310[(2)] = null);

(statearr_24290_24310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24283 === (3))){
var inst_24279 = (state_24282[(2)]);
var inst_24280 = cljs.core.async.close_BANG_.call(null,out);
var state_24282__$1 = (function (){var statearr_24291 = state_24282;
(statearr_24291[(9)] = inst_24279);

return statearr_24291;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24282__$1,inst_24280);
} else {
if((state_val_24283 === (2))){
var state_24282__$1 = state_24282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24282__$1,(4),ch);
} else {
if((state_val_24283 === (11))){
var inst_24262 = (state_24282[(8)]);
var inst_24271 = (state_24282[(2)]);
var inst_24259 = inst_24262;
var state_24282__$1 = (function (){var statearr_24292 = state_24282;
(statearr_24292[(7)] = inst_24259);

(statearr_24292[(10)] = inst_24271);

return statearr_24292;
})();
var statearr_24293_24311 = state_24282__$1;
(statearr_24293_24311[(2)] = null);

(statearr_24293_24311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24283 === (9))){
var inst_24262 = (state_24282[(8)]);
var state_24282__$1 = state_24282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24282__$1,(11),out,inst_24262);
} else {
if((state_val_24283 === (5))){
var inst_24259 = (state_24282[(7)]);
var inst_24262 = (state_24282[(8)]);
var inst_24266 = cljs.core._EQ_.call(null,inst_24262,inst_24259);
var state_24282__$1 = state_24282;
if(inst_24266){
var statearr_24295_24312 = state_24282__$1;
(statearr_24295_24312[(1)] = (8));

} else {
var statearr_24296_24313 = state_24282__$1;
(statearr_24296_24313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24283 === (10))){
var inst_24274 = (state_24282[(2)]);
var state_24282__$1 = state_24282;
var statearr_24297_24314 = state_24282__$1;
(statearr_24297_24314[(2)] = inst_24274);

(statearr_24297_24314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24283 === (8))){
var inst_24259 = (state_24282[(7)]);
var tmp24294 = inst_24259;
var inst_24259__$1 = tmp24294;
var state_24282__$1 = (function (){var statearr_24298 = state_24282;
(statearr_24298[(7)] = inst_24259__$1);

return statearr_24298;
})();
var statearr_24299_24315 = state_24282__$1;
(statearr_24299_24315[(2)] = null);

(statearr_24299_24315[(1)] = (2));


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
});})(c__22583__auto___24305,out))
;
return ((function (switch__22495__auto__,c__22583__auto___24305,out){
return (function() {
var cljs$core$async$state_machine__22496__auto__ = null;
var cljs$core$async$state_machine__22496__auto____0 = (function (){
var statearr_24300 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24300[(0)] = cljs$core$async$state_machine__22496__auto__);

(statearr_24300[(1)] = (1));

return statearr_24300;
});
var cljs$core$async$state_machine__22496__auto____1 = (function (state_24282){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_24282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e24301){if((e24301 instanceof Object)){
var ex__22499__auto__ = e24301;
var statearr_24302_24316 = state_24282;
(statearr_24302_24316[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24317 = state_24282;
state_24282 = G__24317;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
cljs$core$async$state_machine__22496__auto__ = function(state_24282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22496__auto____1.call(this,state_24282);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22496__auto____0;
cljs$core$async$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22496__auto____1;
return cljs$core$async$state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto___24305,out))
})();
var state__22585__auto__ = (function (){var statearr_24303 = f__22584__auto__.call(null);
(statearr_24303[(6)] = c__22583__auto___24305);

return statearr_24303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto___24305,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24319 = arguments.length;
switch (G__24319) {
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
var c__22583__auto___24385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto___24385,out){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto___24385,out){
return (function (state_24357){
var state_val_24358 = (state_24357[(1)]);
if((state_val_24358 === (7))){
var inst_24353 = (state_24357[(2)]);
var state_24357__$1 = state_24357;
var statearr_24359_24386 = state_24357__$1;
(statearr_24359_24386[(2)] = inst_24353);

(statearr_24359_24386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24358 === (1))){
var inst_24320 = (new Array(n));
var inst_24321 = inst_24320;
var inst_24322 = (0);
var state_24357__$1 = (function (){var statearr_24360 = state_24357;
(statearr_24360[(7)] = inst_24322);

(statearr_24360[(8)] = inst_24321);

return statearr_24360;
})();
var statearr_24361_24387 = state_24357__$1;
(statearr_24361_24387[(2)] = null);

(statearr_24361_24387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24358 === (4))){
var inst_24325 = (state_24357[(9)]);
var inst_24325__$1 = (state_24357[(2)]);
var inst_24326 = (inst_24325__$1 == null);
var inst_24327 = cljs.core.not.call(null,inst_24326);
var state_24357__$1 = (function (){var statearr_24362 = state_24357;
(statearr_24362[(9)] = inst_24325__$1);

return statearr_24362;
})();
if(inst_24327){
var statearr_24363_24388 = state_24357__$1;
(statearr_24363_24388[(1)] = (5));

} else {
var statearr_24364_24389 = state_24357__$1;
(statearr_24364_24389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24358 === (15))){
var inst_24347 = (state_24357[(2)]);
var state_24357__$1 = state_24357;
var statearr_24365_24390 = state_24357__$1;
(statearr_24365_24390[(2)] = inst_24347);

(statearr_24365_24390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24358 === (13))){
var state_24357__$1 = state_24357;
var statearr_24366_24391 = state_24357__$1;
(statearr_24366_24391[(2)] = null);

(statearr_24366_24391[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24358 === (6))){
var inst_24322 = (state_24357[(7)]);
var inst_24343 = (inst_24322 > (0));
var state_24357__$1 = state_24357;
if(cljs.core.truth_(inst_24343)){
var statearr_24367_24392 = state_24357__$1;
(statearr_24367_24392[(1)] = (12));

} else {
var statearr_24368_24393 = state_24357__$1;
(statearr_24368_24393[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24358 === (3))){
var inst_24355 = (state_24357[(2)]);
var state_24357__$1 = state_24357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24357__$1,inst_24355);
} else {
if((state_val_24358 === (12))){
var inst_24321 = (state_24357[(8)]);
var inst_24345 = cljs.core.vec.call(null,inst_24321);
var state_24357__$1 = state_24357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24357__$1,(15),out,inst_24345);
} else {
if((state_val_24358 === (2))){
var state_24357__$1 = state_24357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24357__$1,(4),ch);
} else {
if((state_val_24358 === (11))){
var inst_24337 = (state_24357[(2)]);
var inst_24338 = (new Array(n));
var inst_24321 = inst_24338;
var inst_24322 = (0);
var state_24357__$1 = (function (){var statearr_24369 = state_24357;
(statearr_24369[(10)] = inst_24337);

(statearr_24369[(7)] = inst_24322);

(statearr_24369[(8)] = inst_24321);

return statearr_24369;
})();
var statearr_24370_24394 = state_24357__$1;
(statearr_24370_24394[(2)] = null);

(statearr_24370_24394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24358 === (9))){
var inst_24321 = (state_24357[(8)]);
var inst_24335 = cljs.core.vec.call(null,inst_24321);
var state_24357__$1 = state_24357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24357__$1,(11),out,inst_24335);
} else {
if((state_val_24358 === (5))){
var inst_24325 = (state_24357[(9)]);
var inst_24322 = (state_24357[(7)]);
var inst_24330 = (state_24357[(11)]);
var inst_24321 = (state_24357[(8)]);
var inst_24329 = (inst_24321[inst_24322] = inst_24325);
var inst_24330__$1 = (inst_24322 + (1));
var inst_24331 = (inst_24330__$1 < n);
var state_24357__$1 = (function (){var statearr_24371 = state_24357;
(statearr_24371[(12)] = inst_24329);

(statearr_24371[(11)] = inst_24330__$1);

return statearr_24371;
})();
if(cljs.core.truth_(inst_24331)){
var statearr_24372_24395 = state_24357__$1;
(statearr_24372_24395[(1)] = (8));

} else {
var statearr_24373_24396 = state_24357__$1;
(statearr_24373_24396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24358 === (14))){
var inst_24350 = (state_24357[(2)]);
var inst_24351 = cljs.core.async.close_BANG_.call(null,out);
var state_24357__$1 = (function (){var statearr_24375 = state_24357;
(statearr_24375[(13)] = inst_24350);

return statearr_24375;
})();
var statearr_24376_24397 = state_24357__$1;
(statearr_24376_24397[(2)] = inst_24351);

(statearr_24376_24397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24358 === (10))){
var inst_24341 = (state_24357[(2)]);
var state_24357__$1 = state_24357;
var statearr_24377_24398 = state_24357__$1;
(statearr_24377_24398[(2)] = inst_24341);

(statearr_24377_24398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24358 === (8))){
var inst_24330 = (state_24357[(11)]);
var inst_24321 = (state_24357[(8)]);
var tmp24374 = inst_24321;
var inst_24321__$1 = tmp24374;
var inst_24322 = inst_24330;
var state_24357__$1 = (function (){var statearr_24378 = state_24357;
(statearr_24378[(7)] = inst_24322);

(statearr_24378[(8)] = inst_24321__$1);

return statearr_24378;
})();
var statearr_24379_24399 = state_24357__$1;
(statearr_24379_24399[(2)] = null);

(statearr_24379_24399[(1)] = (2));


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
});})(c__22583__auto___24385,out))
;
return ((function (switch__22495__auto__,c__22583__auto___24385,out){
return (function() {
var cljs$core$async$state_machine__22496__auto__ = null;
var cljs$core$async$state_machine__22496__auto____0 = (function (){
var statearr_24380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24380[(0)] = cljs$core$async$state_machine__22496__auto__);

(statearr_24380[(1)] = (1));

return statearr_24380;
});
var cljs$core$async$state_machine__22496__auto____1 = (function (state_24357){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_24357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e24381){if((e24381 instanceof Object)){
var ex__22499__auto__ = e24381;
var statearr_24382_24400 = state_24357;
(statearr_24382_24400[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24401 = state_24357;
state_24357 = G__24401;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
cljs$core$async$state_machine__22496__auto__ = function(state_24357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22496__auto____1.call(this,state_24357);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22496__auto____0;
cljs$core$async$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22496__auto____1;
return cljs$core$async$state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto___24385,out))
})();
var state__22585__auto__ = (function (){var statearr_24383 = f__22584__auto__.call(null);
(statearr_24383[(6)] = c__22583__auto___24385);

return statearr_24383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto___24385,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24403 = arguments.length;
switch (G__24403) {
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
var c__22583__auto___24473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22583__auto___24473,out){
return (function (){
var f__22584__auto__ = (function (){var switch__22495__auto__ = ((function (c__22583__auto___24473,out){
return (function (state_24445){
var state_val_24446 = (state_24445[(1)]);
if((state_val_24446 === (7))){
var inst_24441 = (state_24445[(2)]);
var state_24445__$1 = state_24445;
var statearr_24447_24474 = state_24445__$1;
(statearr_24447_24474[(2)] = inst_24441);

(statearr_24447_24474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24446 === (1))){
var inst_24404 = [];
var inst_24405 = inst_24404;
var inst_24406 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24445__$1 = (function (){var statearr_24448 = state_24445;
(statearr_24448[(7)] = inst_24406);

(statearr_24448[(8)] = inst_24405);

return statearr_24448;
})();
var statearr_24449_24475 = state_24445__$1;
(statearr_24449_24475[(2)] = null);

(statearr_24449_24475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24446 === (4))){
var inst_24409 = (state_24445[(9)]);
var inst_24409__$1 = (state_24445[(2)]);
var inst_24410 = (inst_24409__$1 == null);
var inst_24411 = cljs.core.not.call(null,inst_24410);
var state_24445__$1 = (function (){var statearr_24450 = state_24445;
(statearr_24450[(9)] = inst_24409__$1);

return statearr_24450;
})();
if(inst_24411){
var statearr_24451_24476 = state_24445__$1;
(statearr_24451_24476[(1)] = (5));

} else {
var statearr_24452_24477 = state_24445__$1;
(statearr_24452_24477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24446 === (15))){
var inst_24435 = (state_24445[(2)]);
var state_24445__$1 = state_24445;
var statearr_24453_24478 = state_24445__$1;
(statearr_24453_24478[(2)] = inst_24435);

(statearr_24453_24478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24446 === (13))){
var state_24445__$1 = state_24445;
var statearr_24454_24479 = state_24445__$1;
(statearr_24454_24479[(2)] = null);

(statearr_24454_24479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24446 === (6))){
var inst_24405 = (state_24445[(8)]);
var inst_24430 = inst_24405.length;
var inst_24431 = (inst_24430 > (0));
var state_24445__$1 = state_24445;
if(cljs.core.truth_(inst_24431)){
var statearr_24455_24480 = state_24445__$1;
(statearr_24455_24480[(1)] = (12));

} else {
var statearr_24456_24481 = state_24445__$1;
(statearr_24456_24481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24446 === (3))){
var inst_24443 = (state_24445[(2)]);
var state_24445__$1 = state_24445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24445__$1,inst_24443);
} else {
if((state_val_24446 === (12))){
var inst_24405 = (state_24445[(8)]);
var inst_24433 = cljs.core.vec.call(null,inst_24405);
var state_24445__$1 = state_24445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24445__$1,(15),out,inst_24433);
} else {
if((state_val_24446 === (2))){
var state_24445__$1 = state_24445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24445__$1,(4),ch);
} else {
if((state_val_24446 === (11))){
var inst_24409 = (state_24445[(9)]);
var inst_24413 = (state_24445[(10)]);
var inst_24423 = (state_24445[(2)]);
var inst_24424 = [];
var inst_24425 = inst_24424.push(inst_24409);
var inst_24405 = inst_24424;
var inst_24406 = inst_24413;
var state_24445__$1 = (function (){var statearr_24457 = state_24445;
(statearr_24457[(11)] = inst_24425);

(statearr_24457[(12)] = inst_24423);

(statearr_24457[(7)] = inst_24406);

(statearr_24457[(8)] = inst_24405);

return statearr_24457;
})();
var statearr_24458_24482 = state_24445__$1;
(statearr_24458_24482[(2)] = null);

(statearr_24458_24482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24446 === (9))){
var inst_24405 = (state_24445[(8)]);
var inst_24421 = cljs.core.vec.call(null,inst_24405);
var state_24445__$1 = state_24445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24445__$1,(11),out,inst_24421);
} else {
if((state_val_24446 === (5))){
var inst_24409 = (state_24445[(9)]);
var inst_24413 = (state_24445[(10)]);
var inst_24406 = (state_24445[(7)]);
var inst_24413__$1 = f.call(null,inst_24409);
var inst_24414 = cljs.core._EQ_.call(null,inst_24413__$1,inst_24406);
var inst_24415 = cljs.core.keyword_identical_QMARK_.call(null,inst_24406,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24416 = ((inst_24414) || (inst_24415));
var state_24445__$1 = (function (){var statearr_24459 = state_24445;
(statearr_24459[(10)] = inst_24413__$1);

return statearr_24459;
})();
if(cljs.core.truth_(inst_24416)){
var statearr_24460_24483 = state_24445__$1;
(statearr_24460_24483[(1)] = (8));

} else {
var statearr_24461_24484 = state_24445__$1;
(statearr_24461_24484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24446 === (14))){
var inst_24438 = (state_24445[(2)]);
var inst_24439 = cljs.core.async.close_BANG_.call(null,out);
var state_24445__$1 = (function (){var statearr_24463 = state_24445;
(statearr_24463[(13)] = inst_24438);

return statearr_24463;
})();
var statearr_24464_24485 = state_24445__$1;
(statearr_24464_24485[(2)] = inst_24439);

(statearr_24464_24485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24446 === (10))){
var inst_24428 = (state_24445[(2)]);
var state_24445__$1 = state_24445;
var statearr_24465_24486 = state_24445__$1;
(statearr_24465_24486[(2)] = inst_24428);

(statearr_24465_24486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24446 === (8))){
var inst_24409 = (state_24445[(9)]);
var inst_24413 = (state_24445[(10)]);
var inst_24405 = (state_24445[(8)]);
var inst_24418 = inst_24405.push(inst_24409);
var tmp24462 = inst_24405;
var inst_24405__$1 = tmp24462;
var inst_24406 = inst_24413;
var state_24445__$1 = (function (){var statearr_24466 = state_24445;
(statearr_24466[(14)] = inst_24418);

(statearr_24466[(7)] = inst_24406);

(statearr_24466[(8)] = inst_24405__$1);

return statearr_24466;
})();
var statearr_24467_24487 = state_24445__$1;
(statearr_24467_24487[(2)] = null);

(statearr_24467_24487[(1)] = (2));


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
});})(c__22583__auto___24473,out))
;
return ((function (switch__22495__auto__,c__22583__auto___24473,out){
return (function() {
var cljs$core$async$state_machine__22496__auto__ = null;
var cljs$core$async$state_machine__22496__auto____0 = (function (){
var statearr_24468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24468[(0)] = cljs$core$async$state_machine__22496__auto__);

(statearr_24468[(1)] = (1));

return statearr_24468;
});
var cljs$core$async$state_machine__22496__auto____1 = (function (state_24445){
while(true){
var ret_value__22497__auto__ = (function (){try{while(true){
var result__22498__auto__ = switch__22495__auto__.call(null,state_24445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22498__auto__;
}
break;
}
}catch (e24469){if((e24469 instanceof Object)){
var ex__22499__auto__ = e24469;
var statearr_24470_24488 = state_24445;
(statearr_24470_24488[(5)] = ex__22499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24489 = state_24445;
state_24445 = G__24489;
continue;
} else {
return ret_value__22497__auto__;
}
break;
}
});
cljs$core$async$state_machine__22496__auto__ = function(state_24445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22496__auto____1.call(this,state_24445);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22496__auto____0;
cljs$core$async$state_machine__22496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22496__auto____1;
return cljs$core$async$state_machine__22496__auto__;
})()
;})(switch__22495__auto__,c__22583__auto___24473,out))
})();
var state__22585__auto__ = (function (){var statearr_24471 = f__22584__auto__.call(null);
(statearr_24471[(6)] = c__22583__auto___24473);

return statearr_24471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22585__auto__);
});})(c__22583__auto___24473,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1534453562856
