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
var G__3770 = arguments.length;
switch (G__3770) {
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
if(typeof cljs.core.async.t_cljs$core$async3771 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3771 = (function (f,blockable,meta3772){
this.f = f;
this.blockable = blockable;
this.meta3772 = meta3772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3773,meta3772__$1){
var self__ = this;
var _3773__$1 = this;
return (new cljs.core.async.t_cljs$core$async3771(self__.f,self__.blockable,meta3772__$1));
});

cljs.core.async.t_cljs$core$async3771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3773){
var self__ = this;
var _3773__$1 = this;
return self__.meta3772;
});

cljs.core.async.t_cljs$core$async3771.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3771.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async3771.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async3771.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async3771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta3772","meta3772",-470739823,null)], null);
});

cljs.core.async.t_cljs$core$async3771.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3771";

cljs.core.async.t_cljs$core$async3771.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3771");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3771.
 */
cljs.core.async.__GT_t_cljs$core$async3771 = (function cljs$core$async$__GT_t_cljs$core$async3771(f__$1,blockable__$1,meta3772){
return (new cljs.core.async.t_cljs$core$async3771(f__$1,blockable__$1,meta3772));
});

}

return (new cljs.core.async.t_cljs$core$async3771(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__3777 = arguments.length;
switch (G__3777) {
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
var G__3780 = arguments.length;
switch (G__3780) {
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
var G__3783 = arguments.length;
switch (G__3783) {
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
var val_3785 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_3785);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_3785,ret){
return (function (){
return fn1.call(null,val_3785);
});})(val_3785,ret))
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
var G__3787 = arguments.length;
switch (G__3787) {
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
var n__4376__auto___3789 = n;
var x_3790 = (0);
while(true){
if((x_3790 < n__4376__auto___3789)){
(a[x_3790] = (0));

var G__3791 = (x_3790 + (1));
x_3790 = G__3791;
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

var G__3792 = (i + (1));
i = G__3792;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async3793 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3793 = (function (flag,meta3794){
this.flag = flag;
this.meta3794 = meta3794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_3795,meta3794__$1){
var self__ = this;
var _3795__$1 = this;
return (new cljs.core.async.t_cljs$core$async3793(self__.flag,meta3794__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async3793.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_3795){
var self__ = this;
var _3795__$1 = this;
return self__.meta3794;
});})(flag))
;

cljs.core.async.t_cljs$core$async3793.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3793.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async3793.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async3793.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async3793.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta3794","meta3794",1163315059,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async3793.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3793";

cljs.core.async.t_cljs$core$async3793.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3793");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3793.
 */
cljs.core.async.__GT_t_cljs$core$async3793 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async3793(flag__$1,meta3794){
return (new cljs.core.async.t_cljs$core$async3793(flag__$1,meta3794));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async3793(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async3796 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3796 = (function (flag,cb,meta3797){
this.flag = flag;
this.cb = cb;
this.meta3797 = meta3797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3798,meta3797__$1){
var self__ = this;
var _3798__$1 = this;
return (new cljs.core.async.t_cljs$core$async3796(self__.flag,self__.cb,meta3797__$1));
});

cljs.core.async.t_cljs$core$async3796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3798){
var self__ = this;
var _3798__$1 = this;
return self__.meta3797;
});

cljs.core.async.t_cljs$core$async3796.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3796.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async3796.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async3796.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async3796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta3797","meta3797",1388350571,null)], null);
});

cljs.core.async.t_cljs$core$async3796.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3796";

cljs.core.async.t_cljs$core$async3796.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3796");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3796.
 */
cljs.core.async.__GT_t_cljs$core$async3796 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async3796(flag__$1,cb__$1,meta3797){
return (new cljs.core.async.t_cljs$core$async3796(flag__$1,cb__$1,meta3797));
});

}

return (new cljs.core.async.t_cljs$core$async3796(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__3799_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3799_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3800_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3800_SHARP_,port], null));
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
var G__3801 = (i + (1));
i = G__3801;
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
var len__4499__auto___3807 = arguments.length;
var i__4500__auto___3808 = (0);
while(true){
if((i__4500__auto___3808 < len__4499__auto___3807)){
args__4502__auto__.push((arguments[i__4500__auto___3808]));

var G__3809 = (i__4500__auto___3808 + (1));
i__4500__auto___3808 = G__3809;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__3804){
var map__3805 = p__3804;
var map__3805__$1 = ((((!((map__3805 == null)))?(((((map__3805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3805):map__3805);
var opts = map__3805__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq3802){
var G__3803 = cljs.core.first.call(null,seq3802);
var seq3802__$1 = cljs.core.next.call(null,seq3802);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3803,seq3802__$1);
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
var G__3811 = arguments.length;
switch (G__3811) {
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
var c__3724__auto___3857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto___3857){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto___3857){
return (function (state_3835){
var state_val_3836 = (state_3835[(1)]);
if((state_val_3836 === (7))){
var inst_3831 = (state_3835[(2)]);
var state_3835__$1 = state_3835;
var statearr_3837_3858 = state_3835__$1;
(statearr_3837_3858[(2)] = inst_3831);

(statearr_3837_3858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3836 === (1))){
var state_3835__$1 = state_3835;
var statearr_3838_3859 = state_3835__$1;
(statearr_3838_3859[(2)] = null);

(statearr_3838_3859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3836 === (4))){
var inst_3814 = (state_3835[(7)]);
var inst_3814__$1 = (state_3835[(2)]);
var inst_3815 = (inst_3814__$1 == null);
var state_3835__$1 = (function (){var statearr_3839 = state_3835;
(statearr_3839[(7)] = inst_3814__$1);

return statearr_3839;
})();
if(cljs.core.truth_(inst_3815)){
var statearr_3840_3860 = state_3835__$1;
(statearr_3840_3860[(1)] = (5));

} else {
var statearr_3841_3861 = state_3835__$1;
(statearr_3841_3861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3836 === (13))){
var state_3835__$1 = state_3835;
var statearr_3842_3862 = state_3835__$1;
(statearr_3842_3862[(2)] = null);

(statearr_3842_3862[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3836 === (6))){
var inst_3814 = (state_3835[(7)]);
var state_3835__$1 = state_3835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3835__$1,(11),to,inst_3814);
} else {
if((state_val_3836 === (3))){
var inst_3833 = (state_3835[(2)]);
var state_3835__$1 = state_3835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3835__$1,inst_3833);
} else {
if((state_val_3836 === (12))){
var state_3835__$1 = state_3835;
var statearr_3843_3863 = state_3835__$1;
(statearr_3843_3863[(2)] = null);

(statearr_3843_3863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3836 === (2))){
var state_3835__$1 = state_3835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3835__$1,(4),from);
} else {
if((state_val_3836 === (11))){
var inst_3824 = (state_3835[(2)]);
var state_3835__$1 = state_3835;
if(cljs.core.truth_(inst_3824)){
var statearr_3844_3864 = state_3835__$1;
(statearr_3844_3864[(1)] = (12));

} else {
var statearr_3845_3865 = state_3835__$1;
(statearr_3845_3865[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3836 === (9))){
var state_3835__$1 = state_3835;
var statearr_3846_3866 = state_3835__$1;
(statearr_3846_3866[(2)] = null);

(statearr_3846_3866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3836 === (5))){
var state_3835__$1 = state_3835;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3847_3867 = state_3835__$1;
(statearr_3847_3867[(1)] = (8));

} else {
var statearr_3848_3868 = state_3835__$1;
(statearr_3848_3868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3836 === (14))){
var inst_3829 = (state_3835[(2)]);
var state_3835__$1 = state_3835;
var statearr_3849_3869 = state_3835__$1;
(statearr_3849_3869[(2)] = inst_3829);

(statearr_3849_3869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3836 === (10))){
var inst_3821 = (state_3835[(2)]);
var state_3835__$1 = state_3835;
var statearr_3850_3870 = state_3835__$1;
(statearr_3850_3870[(2)] = inst_3821);

(statearr_3850_3870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3836 === (8))){
var inst_3818 = cljs.core.async.close_BANG_.call(null,to);
var state_3835__$1 = state_3835;
var statearr_3851_3871 = state_3835__$1;
(statearr_3851_3871[(2)] = inst_3818);

(statearr_3851_3871[(1)] = (10));


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
});})(c__3724__auto___3857))
;
return ((function (switch__3636__auto__,c__3724__auto___3857){
return (function() {
var cljs$core$async$state_machine__3637__auto__ = null;
var cljs$core$async$state_machine__3637__auto____0 = (function (){
var statearr_3852 = [null,null,null,null,null,null,null,null];
(statearr_3852[(0)] = cljs$core$async$state_machine__3637__auto__);

(statearr_3852[(1)] = (1));

return statearr_3852;
});
var cljs$core$async$state_machine__3637__auto____1 = (function (state_3835){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_3835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e3853){if((e3853 instanceof Object)){
var ex__3640__auto__ = e3853;
var statearr_3854_3872 = state_3835;
(statearr_3854_3872[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3873 = state_3835;
state_3835 = G__3873;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
cljs$core$async$state_machine__3637__auto__ = function(state_3835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3637__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3637__auto____1.call(this,state_3835);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3637__auto____0;
cljs$core$async$state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3637__auto____1;
return cljs$core$async$state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto___3857))
})();
var state__3726__auto__ = (function (){var statearr_3855 = f__3725__auto__.call(null);
(statearr_3855[(6)] = c__3724__auto___3857);

return statearr_3855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto___3857))
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
return (function (p__3874){
var vec__3875 = p__3874;
var v = cljs.core.nth.call(null,vec__3875,(0),null);
var p = cljs.core.nth.call(null,vec__3875,(1),null);
var job = vec__3875;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__3724__auto___4046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto___4046,res,vec__3875,v,p,job,jobs,results){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto___4046,res,vec__3875,v,p,job,jobs,results){
return (function (state_3882){
var state_val_3883 = (state_3882[(1)]);
if((state_val_3883 === (1))){
var state_3882__$1 = state_3882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3882__$1,(2),res,v);
} else {
if((state_val_3883 === (2))){
var inst_3879 = (state_3882[(2)]);
var inst_3880 = cljs.core.async.close_BANG_.call(null,res);
var state_3882__$1 = (function (){var statearr_3884 = state_3882;
(statearr_3884[(7)] = inst_3879);

return statearr_3884;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3882__$1,inst_3880);
} else {
return null;
}
}
});})(c__3724__auto___4046,res,vec__3875,v,p,job,jobs,results))
;
return ((function (switch__3636__auto__,c__3724__auto___4046,res,vec__3875,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____0 = (function (){
var statearr_3885 = [null,null,null,null,null,null,null,null];
(statearr_3885[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__);

(statearr_3885[(1)] = (1));

return statearr_3885;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____1 = (function (state_3882){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_3882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e3886){if((e3886 instanceof Object)){
var ex__3640__auto__ = e3886;
var statearr_3887_4047 = state_3882;
(statearr_3887_4047[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4048 = state_3882;
state_3882 = G__4048;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__ = function(state_3882){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____1.call(this,state_3882);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto___4046,res,vec__3875,v,p,job,jobs,results))
})();
var state__3726__auto__ = (function (){var statearr_3888 = f__3725__auto__.call(null);
(statearr_3888[(6)] = c__3724__auto___4046);

return statearr_3888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto___4046,res,vec__3875,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__3889){
var vec__3890 = p__3889;
var v = cljs.core.nth.call(null,vec__3890,(0),null);
var p = cljs.core.nth.call(null,vec__3890,(1),null);
var job = vec__3890;
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
var n__4376__auto___4049 = n;
var __4050 = (0);
while(true){
if((__4050 < n__4376__auto___4049)){
var G__3893_4051 = type;
var G__3893_4052__$1 = (((G__3893_4051 instanceof cljs.core.Keyword))?G__3893_4051.fqn:null);
switch (G__3893_4052__$1) {
case "compute":
var c__3724__auto___4054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4050,c__3724__auto___4054,G__3893_4051,G__3893_4052__$1,n__4376__auto___4049,jobs,results,process,async){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (__4050,c__3724__auto___4054,G__3893_4051,G__3893_4052__$1,n__4376__auto___4049,jobs,results,process,async){
return (function (state_3906){
var state_val_3907 = (state_3906[(1)]);
if((state_val_3907 === (1))){
var state_3906__$1 = state_3906;
var statearr_3908_4055 = state_3906__$1;
(statearr_3908_4055[(2)] = null);

(statearr_3908_4055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3907 === (2))){
var state_3906__$1 = state_3906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3906__$1,(4),jobs);
} else {
if((state_val_3907 === (3))){
var inst_3904 = (state_3906[(2)]);
var state_3906__$1 = state_3906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3906__$1,inst_3904);
} else {
if((state_val_3907 === (4))){
var inst_3896 = (state_3906[(2)]);
var inst_3897 = process.call(null,inst_3896);
var state_3906__$1 = state_3906;
if(cljs.core.truth_(inst_3897)){
var statearr_3909_4056 = state_3906__$1;
(statearr_3909_4056[(1)] = (5));

} else {
var statearr_3910_4057 = state_3906__$1;
(statearr_3910_4057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3907 === (5))){
var state_3906__$1 = state_3906;
var statearr_3911_4058 = state_3906__$1;
(statearr_3911_4058[(2)] = null);

(statearr_3911_4058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3907 === (6))){
var state_3906__$1 = state_3906;
var statearr_3912_4059 = state_3906__$1;
(statearr_3912_4059[(2)] = null);

(statearr_3912_4059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3907 === (7))){
var inst_3902 = (state_3906[(2)]);
var state_3906__$1 = state_3906;
var statearr_3913_4060 = state_3906__$1;
(statearr_3913_4060[(2)] = inst_3902);

(statearr_3913_4060[(1)] = (3));


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
});})(__4050,c__3724__auto___4054,G__3893_4051,G__3893_4052__$1,n__4376__auto___4049,jobs,results,process,async))
;
return ((function (__4050,switch__3636__auto__,c__3724__auto___4054,G__3893_4051,G__3893_4052__$1,n__4376__auto___4049,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____0 = (function (){
var statearr_3914 = [null,null,null,null,null,null,null];
(statearr_3914[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__);

(statearr_3914[(1)] = (1));

return statearr_3914;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____1 = (function (state_3906){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_3906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e3915){if((e3915 instanceof Object)){
var ex__3640__auto__ = e3915;
var statearr_3916_4061 = state_3906;
(statearr_3916_4061[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4062 = state_3906;
state_3906 = G__4062;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__ = function(state_3906){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____1.call(this,state_3906);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__;
})()
;})(__4050,switch__3636__auto__,c__3724__auto___4054,G__3893_4051,G__3893_4052__$1,n__4376__auto___4049,jobs,results,process,async))
})();
var state__3726__auto__ = (function (){var statearr_3917 = f__3725__auto__.call(null);
(statearr_3917[(6)] = c__3724__auto___4054);

return statearr_3917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(__4050,c__3724__auto___4054,G__3893_4051,G__3893_4052__$1,n__4376__auto___4049,jobs,results,process,async))
);


break;
case "async":
var c__3724__auto___4063 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4050,c__3724__auto___4063,G__3893_4051,G__3893_4052__$1,n__4376__auto___4049,jobs,results,process,async){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (__4050,c__3724__auto___4063,G__3893_4051,G__3893_4052__$1,n__4376__auto___4049,jobs,results,process,async){
return (function (state_3930){
var state_val_3931 = (state_3930[(1)]);
if((state_val_3931 === (1))){
var state_3930__$1 = state_3930;
var statearr_3932_4064 = state_3930__$1;
(statearr_3932_4064[(2)] = null);

(statearr_3932_4064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3931 === (2))){
var state_3930__$1 = state_3930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3930__$1,(4),jobs);
} else {
if((state_val_3931 === (3))){
var inst_3928 = (state_3930[(2)]);
var state_3930__$1 = state_3930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3930__$1,inst_3928);
} else {
if((state_val_3931 === (4))){
var inst_3920 = (state_3930[(2)]);
var inst_3921 = async.call(null,inst_3920);
var state_3930__$1 = state_3930;
if(cljs.core.truth_(inst_3921)){
var statearr_3933_4065 = state_3930__$1;
(statearr_3933_4065[(1)] = (5));

} else {
var statearr_3934_4066 = state_3930__$1;
(statearr_3934_4066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3931 === (5))){
var state_3930__$1 = state_3930;
var statearr_3935_4067 = state_3930__$1;
(statearr_3935_4067[(2)] = null);

(statearr_3935_4067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3931 === (6))){
var state_3930__$1 = state_3930;
var statearr_3936_4068 = state_3930__$1;
(statearr_3936_4068[(2)] = null);

(statearr_3936_4068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3931 === (7))){
var inst_3926 = (state_3930[(2)]);
var state_3930__$1 = state_3930;
var statearr_3937_4069 = state_3930__$1;
(statearr_3937_4069[(2)] = inst_3926);

(statearr_3937_4069[(1)] = (3));


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
});})(__4050,c__3724__auto___4063,G__3893_4051,G__3893_4052__$1,n__4376__auto___4049,jobs,results,process,async))
;
return ((function (__4050,switch__3636__auto__,c__3724__auto___4063,G__3893_4051,G__3893_4052__$1,n__4376__auto___4049,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____0 = (function (){
var statearr_3938 = [null,null,null,null,null,null,null];
(statearr_3938[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__);

(statearr_3938[(1)] = (1));

return statearr_3938;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____1 = (function (state_3930){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_3930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e3939){if((e3939 instanceof Object)){
var ex__3640__auto__ = e3939;
var statearr_3940_4070 = state_3930;
(statearr_3940_4070[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4071 = state_3930;
state_3930 = G__4071;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__ = function(state_3930){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____1.call(this,state_3930);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__;
})()
;})(__4050,switch__3636__auto__,c__3724__auto___4063,G__3893_4051,G__3893_4052__$1,n__4376__auto___4049,jobs,results,process,async))
})();
var state__3726__auto__ = (function (){var statearr_3941 = f__3725__auto__.call(null);
(statearr_3941[(6)] = c__3724__auto___4063);

return statearr_3941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(__4050,c__3724__auto___4063,G__3893_4051,G__3893_4052__$1,n__4376__auto___4049,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3893_4052__$1)].join('')));

}

var G__4072 = (__4050 + (1));
__4050 = G__4072;
continue;
} else {
}
break;
}

var c__3724__auto___4073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto___4073,jobs,results,process,async){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto___4073,jobs,results,process,async){
return (function (state_3963){
var state_val_3964 = (state_3963[(1)]);
if((state_val_3964 === (1))){
var state_3963__$1 = state_3963;
var statearr_3965_4074 = state_3963__$1;
(statearr_3965_4074[(2)] = null);

(statearr_3965_4074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3964 === (2))){
var state_3963__$1 = state_3963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3963__$1,(4),from);
} else {
if((state_val_3964 === (3))){
var inst_3961 = (state_3963[(2)]);
var state_3963__$1 = state_3963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3963__$1,inst_3961);
} else {
if((state_val_3964 === (4))){
var inst_3944 = (state_3963[(7)]);
var inst_3944__$1 = (state_3963[(2)]);
var inst_3945 = (inst_3944__$1 == null);
var state_3963__$1 = (function (){var statearr_3966 = state_3963;
(statearr_3966[(7)] = inst_3944__$1);

return statearr_3966;
})();
if(cljs.core.truth_(inst_3945)){
var statearr_3967_4075 = state_3963__$1;
(statearr_3967_4075[(1)] = (5));

} else {
var statearr_3968_4076 = state_3963__$1;
(statearr_3968_4076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3964 === (5))){
var inst_3947 = cljs.core.async.close_BANG_.call(null,jobs);
var state_3963__$1 = state_3963;
var statearr_3969_4077 = state_3963__$1;
(statearr_3969_4077[(2)] = inst_3947);

(statearr_3969_4077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3964 === (6))){
var inst_3944 = (state_3963[(7)]);
var inst_3949 = (state_3963[(8)]);
var inst_3949__$1 = cljs.core.async.chan.call(null,(1));
var inst_3950 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3951 = [inst_3944,inst_3949__$1];
var inst_3952 = (new cljs.core.PersistentVector(null,2,(5),inst_3950,inst_3951,null));
var state_3963__$1 = (function (){var statearr_3970 = state_3963;
(statearr_3970[(8)] = inst_3949__$1);

return statearr_3970;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3963__$1,(8),jobs,inst_3952);
} else {
if((state_val_3964 === (7))){
var inst_3959 = (state_3963[(2)]);
var state_3963__$1 = state_3963;
var statearr_3971_4078 = state_3963__$1;
(statearr_3971_4078[(2)] = inst_3959);

(statearr_3971_4078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3964 === (8))){
var inst_3949 = (state_3963[(8)]);
var inst_3954 = (state_3963[(2)]);
var state_3963__$1 = (function (){var statearr_3972 = state_3963;
(statearr_3972[(9)] = inst_3954);

return statearr_3972;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3963__$1,(9),results,inst_3949);
} else {
if((state_val_3964 === (9))){
var inst_3956 = (state_3963[(2)]);
var state_3963__$1 = (function (){var statearr_3973 = state_3963;
(statearr_3973[(10)] = inst_3956);

return statearr_3973;
})();
var statearr_3974_4079 = state_3963__$1;
(statearr_3974_4079[(2)] = null);

(statearr_3974_4079[(1)] = (2));


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
});})(c__3724__auto___4073,jobs,results,process,async))
;
return ((function (switch__3636__auto__,c__3724__auto___4073,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____0 = (function (){
var statearr_3975 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3975[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__);

(statearr_3975[(1)] = (1));

return statearr_3975;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____1 = (function (state_3963){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_3963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e3976){if((e3976 instanceof Object)){
var ex__3640__auto__ = e3976;
var statearr_3977_4080 = state_3963;
(statearr_3977_4080[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4081 = state_3963;
state_3963 = G__4081;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__ = function(state_3963){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____1.call(this,state_3963);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto___4073,jobs,results,process,async))
})();
var state__3726__auto__ = (function (){var statearr_3978 = f__3725__auto__.call(null);
(statearr_3978[(6)] = c__3724__auto___4073);

return statearr_3978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto___4073,jobs,results,process,async))
);


var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto__,jobs,results,process,async){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto__,jobs,results,process,async){
return (function (state_4016){
var state_val_4017 = (state_4016[(1)]);
if((state_val_4017 === (7))){
var inst_4012 = (state_4016[(2)]);
var state_4016__$1 = state_4016;
var statearr_4018_4082 = state_4016__$1;
(statearr_4018_4082[(2)] = inst_4012);

(statearr_4018_4082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4017 === (20))){
var state_4016__$1 = state_4016;
var statearr_4019_4083 = state_4016__$1;
(statearr_4019_4083[(2)] = null);

(statearr_4019_4083[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4017 === (1))){
var state_4016__$1 = state_4016;
var statearr_4020_4084 = state_4016__$1;
(statearr_4020_4084[(2)] = null);

(statearr_4020_4084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4017 === (4))){
var inst_3981 = (state_4016[(7)]);
var inst_3981__$1 = (state_4016[(2)]);
var inst_3982 = (inst_3981__$1 == null);
var state_4016__$1 = (function (){var statearr_4021 = state_4016;
(statearr_4021[(7)] = inst_3981__$1);

return statearr_4021;
})();
if(cljs.core.truth_(inst_3982)){
var statearr_4022_4085 = state_4016__$1;
(statearr_4022_4085[(1)] = (5));

} else {
var statearr_4023_4086 = state_4016__$1;
(statearr_4023_4086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4017 === (15))){
var inst_3994 = (state_4016[(8)]);
var state_4016__$1 = state_4016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4016__$1,(18),to,inst_3994);
} else {
if((state_val_4017 === (21))){
var inst_4007 = (state_4016[(2)]);
var state_4016__$1 = state_4016;
var statearr_4024_4087 = state_4016__$1;
(statearr_4024_4087[(2)] = inst_4007);

(statearr_4024_4087[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4017 === (13))){
var inst_4009 = (state_4016[(2)]);
var state_4016__$1 = (function (){var statearr_4025 = state_4016;
(statearr_4025[(9)] = inst_4009);

return statearr_4025;
})();
var statearr_4026_4088 = state_4016__$1;
(statearr_4026_4088[(2)] = null);

(statearr_4026_4088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4017 === (6))){
var inst_3981 = (state_4016[(7)]);
var state_4016__$1 = state_4016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4016__$1,(11),inst_3981);
} else {
if((state_val_4017 === (17))){
var inst_4002 = (state_4016[(2)]);
var state_4016__$1 = state_4016;
if(cljs.core.truth_(inst_4002)){
var statearr_4027_4089 = state_4016__$1;
(statearr_4027_4089[(1)] = (19));

} else {
var statearr_4028_4090 = state_4016__$1;
(statearr_4028_4090[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4017 === (3))){
var inst_4014 = (state_4016[(2)]);
var state_4016__$1 = state_4016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4016__$1,inst_4014);
} else {
if((state_val_4017 === (12))){
var inst_3991 = (state_4016[(10)]);
var state_4016__$1 = state_4016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4016__$1,(14),inst_3991);
} else {
if((state_val_4017 === (2))){
var state_4016__$1 = state_4016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4016__$1,(4),results);
} else {
if((state_val_4017 === (19))){
var state_4016__$1 = state_4016;
var statearr_4029_4091 = state_4016__$1;
(statearr_4029_4091[(2)] = null);

(statearr_4029_4091[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4017 === (11))){
var inst_3991 = (state_4016[(2)]);
var state_4016__$1 = (function (){var statearr_4030 = state_4016;
(statearr_4030[(10)] = inst_3991);

return statearr_4030;
})();
var statearr_4031_4092 = state_4016__$1;
(statearr_4031_4092[(2)] = null);

(statearr_4031_4092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4017 === (9))){
var state_4016__$1 = state_4016;
var statearr_4032_4093 = state_4016__$1;
(statearr_4032_4093[(2)] = null);

(statearr_4032_4093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4017 === (5))){
var state_4016__$1 = state_4016;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4033_4094 = state_4016__$1;
(statearr_4033_4094[(1)] = (8));

} else {
var statearr_4034_4095 = state_4016__$1;
(statearr_4034_4095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4017 === (14))){
var inst_3994 = (state_4016[(8)]);
var inst_3996 = (state_4016[(11)]);
var inst_3994__$1 = (state_4016[(2)]);
var inst_3995 = (inst_3994__$1 == null);
var inst_3996__$1 = cljs.core.not.call(null,inst_3995);
var state_4016__$1 = (function (){var statearr_4035 = state_4016;
(statearr_4035[(8)] = inst_3994__$1);

(statearr_4035[(11)] = inst_3996__$1);

return statearr_4035;
})();
if(inst_3996__$1){
var statearr_4036_4096 = state_4016__$1;
(statearr_4036_4096[(1)] = (15));

} else {
var statearr_4037_4097 = state_4016__$1;
(statearr_4037_4097[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4017 === (16))){
var inst_3996 = (state_4016[(11)]);
var state_4016__$1 = state_4016;
var statearr_4038_4098 = state_4016__$1;
(statearr_4038_4098[(2)] = inst_3996);

(statearr_4038_4098[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4017 === (10))){
var inst_3988 = (state_4016[(2)]);
var state_4016__$1 = state_4016;
var statearr_4039_4099 = state_4016__$1;
(statearr_4039_4099[(2)] = inst_3988);

(statearr_4039_4099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4017 === (18))){
var inst_3999 = (state_4016[(2)]);
var state_4016__$1 = state_4016;
var statearr_4040_4100 = state_4016__$1;
(statearr_4040_4100[(2)] = inst_3999);

(statearr_4040_4100[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4017 === (8))){
var inst_3985 = cljs.core.async.close_BANG_.call(null,to);
var state_4016__$1 = state_4016;
var statearr_4041_4101 = state_4016__$1;
(statearr_4041_4101[(2)] = inst_3985);

(statearr_4041_4101[(1)] = (10));


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
});})(c__3724__auto__,jobs,results,process,async))
;
return ((function (switch__3636__auto__,c__3724__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____0 = (function (){
var statearr_4042 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4042[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__);

(statearr_4042[(1)] = (1));

return statearr_4042;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____1 = (function (state_4016){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_4016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e4043){if((e4043 instanceof Object)){
var ex__3640__auto__ = e4043;
var statearr_4044_4102 = state_4016;
(statearr_4044_4102[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4103 = state_4016;
state_4016 = G__4103;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__ = function(state_4016){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____1.call(this,state_4016);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3637__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto__,jobs,results,process,async))
})();
var state__3726__auto__ = (function (){var statearr_4045 = f__3725__auto__.call(null);
(statearr_4045[(6)] = c__3724__auto__);

return statearr_4045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto__,jobs,results,process,async))
);

return c__3724__auto__;
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
var G__4105 = arguments.length;
switch (G__4105) {
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
var G__4108 = arguments.length;
switch (G__4108) {
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
var G__4111 = arguments.length;
switch (G__4111) {
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
var c__3724__auto___4160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto___4160,tc,fc){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto___4160,tc,fc){
return (function (state_4137){
var state_val_4138 = (state_4137[(1)]);
if((state_val_4138 === (7))){
var inst_4133 = (state_4137[(2)]);
var state_4137__$1 = state_4137;
var statearr_4139_4161 = state_4137__$1;
(statearr_4139_4161[(2)] = inst_4133);

(statearr_4139_4161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4138 === (1))){
var state_4137__$1 = state_4137;
var statearr_4140_4162 = state_4137__$1;
(statearr_4140_4162[(2)] = null);

(statearr_4140_4162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4138 === (4))){
var inst_4114 = (state_4137[(7)]);
var inst_4114__$1 = (state_4137[(2)]);
var inst_4115 = (inst_4114__$1 == null);
var state_4137__$1 = (function (){var statearr_4141 = state_4137;
(statearr_4141[(7)] = inst_4114__$1);

return statearr_4141;
})();
if(cljs.core.truth_(inst_4115)){
var statearr_4142_4163 = state_4137__$1;
(statearr_4142_4163[(1)] = (5));

} else {
var statearr_4143_4164 = state_4137__$1;
(statearr_4143_4164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4138 === (13))){
var state_4137__$1 = state_4137;
var statearr_4144_4165 = state_4137__$1;
(statearr_4144_4165[(2)] = null);

(statearr_4144_4165[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4138 === (6))){
var inst_4114 = (state_4137[(7)]);
var inst_4120 = p.call(null,inst_4114);
var state_4137__$1 = state_4137;
if(cljs.core.truth_(inst_4120)){
var statearr_4145_4166 = state_4137__$1;
(statearr_4145_4166[(1)] = (9));

} else {
var statearr_4146_4167 = state_4137__$1;
(statearr_4146_4167[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4138 === (3))){
var inst_4135 = (state_4137[(2)]);
var state_4137__$1 = state_4137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4137__$1,inst_4135);
} else {
if((state_val_4138 === (12))){
var state_4137__$1 = state_4137;
var statearr_4147_4168 = state_4137__$1;
(statearr_4147_4168[(2)] = null);

(statearr_4147_4168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4138 === (2))){
var state_4137__$1 = state_4137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4137__$1,(4),ch);
} else {
if((state_val_4138 === (11))){
var inst_4114 = (state_4137[(7)]);
var inst_4124 = (state_4137[(2)]);
var state_4137__$1 = state_4137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4137__$1,(8),inst_4124,inst_4114);
} else {
if((state_val_4138 === (9))){
var state_4137__$1 = state_4137;
var statearr_4148_4169 = state_4137__$1;
(statearr_4148_4169[(2)] = tc);

(statearr_4148_4169[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4138 === (5))){
var inst_4117 = cljs.core.async.close_BANG_.call(null,tc);
var inst_4118 = cljs.core.async.close_BANG_.call(null,fc);
var state_4137__$1 = (function (){var statearr_4149 = state_4137;
(statearr_4149[(8)] = inst_4117);

return statearr_4149;
})();
var statearr_4150_4170 = state_4137__$1;
(statearr_4150_4170[(2)] = inst_4118);

(statearr_4150_4170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4138 === (14))){
var inst_4131 = (state_4137[(2)]);
var state_4137__$1 = state_4137;
var statearr_4151_4171 = state_4137__$1;
(statearr_4151_4171[(2)] = inst_4131);

(statearr_4151_4171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4138 === (10))){
var state_4137__$1 = state_4137;
var statearr_4152_4172 = state_4137__$1;
(statearr_4152_4172[(2)] = fc);

(statearr_4152_4172[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4138 === (8))){
var inst_4126 = (state_4137[(2)]);
var state_4137__$1 = state_4137;
if(cljs.core.truth_(inst_4126)){
var statearr_4153_4173 = state_4137__$1;
(statearr_4153_4173[(1)] = (12));

} else {
var statearr_4154_4174 = state_4137__$1;
(statearr_4154_4174[(1)] = (13));

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
});})(c__3724__auto___4160,tc,fc))
;
return ((function (switch__3636__auto__,c__3724__auto___4160,tc,fc){
return (function() {
var cljs$core$async$state_machine__3637__auto__ = null;
var cljs$core$async$state_machine__3637__auto____0 = (function (){
var statearr_4155 = [null,null,null,null,null,null,null,null,null];
(statearr_4155[(0)] = cljs$core$async$state_machine__3637__auto__);

(statearr_4155[(1)] = (1));

return statearr_4155;
});
var cljs$core$async$state_machine__3637__auto____1 = (function (state_4137){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_4137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e4156){if((e4156 instanceof Object)){
var ex__3640__auto__ = e4156;
var statearr_4157_4175 = state_4137;
(statearr_4157_4175[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4176 = state_4137;
state_4137 = G__4176;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
cljs$core$async$state_machine__3637__auto__ = function(state_4137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3637__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3637__auto____1.call(this,state_4137);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3637__auto____0;
cljs$core$async$state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3637__auto____1;
return cljs$core$async$state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto___4160,tc,fc))
})();
var state__3726__auto__ = (function (){var statearr_4158 = f__3725__auto__.call(null);
(statearr_4158[(6)] = c__3724__auto___4160);

return statearr_4158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto___4160,tc,fc))
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
var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto__){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto__){
return (function (state_4197){
var state_val_4198 = (state_4197[(1)]);
if((state_val_4198 === (7))){
var inst_4193 = (state_4197[(2)]);
var state_4197__$1 = state_4197;
var statearr_4199_4217 = state_4197__$1;
(statearr_4199_4217[(2)] = inst_4193);

(statearr_4199_4217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4198 === (1))){
var inst_4177 = init;
var state_4197__$1 = (function (){var statearr_4200 = state_4197;
(statearr_4200[(7)] = inst_4177);

return statearr_4200;
})();
var statearr_4201_4218 = state_4197__$1;
(statearr_4201_4218[(2)] = null);

(statearr_4201_4218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4198 === (4))){
var inst_4180 = (state_4197[(8)]);
var inst_4180__$1 = (state_4197[(2)]);
var inst_4181 = (inst_4180__$1 == null);
var state_4197__$1 = (function (){var statearr_4202 = state_4197;
(statearr_4202[(8)] = inst_4180__$1);

return statearr_4202;
})();
if(cljs.core.truth_(inst_4181)){
var statearr_4203_4219 = state_4197__$1;
(statearr_4203_4219[(1)] = (5));

} else {
var statearr_4204_4220 = state_4197__$1;
(statearr_4204_4220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4198 === (6))){
var inst_4184 = (state_4197[(9)]);
var inst_4177 = (state_4197[(7)]);
var inst_4180 = (state_4197[(8)]);
var inst_4184__$1 = f.call(null,inst_4177,inst_4180);
var inst_4185 = cljs.core.reduced_QMARK_.call(null,inst_4184__$1);
var state_4197__$1 = (function (){var statearr_4205 = state_4197;
(statearr_4205[(9)] = inst_4184__$1);

return statearr_4205;
})();
if(inst_4185){
var statearr_4206_4221 = state_4197__$1;
(statearr_4206_4221[(1)] = (8));

} else {
var statearr_4207_4222 = state_4197__$1;
(statearr_4207_4222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4198 === (3))){
var inst_4195 = (state_4197[(2)]);
var state_4197__$1 = state_4197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4197__$1,inst_4195);
} else {
if((state_val_4198 === (2))){
var state_4197__$1 = state_4197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4197__$1,(4),ch);
} else {
if((state_val_4198 === (9))){
var inst_4184 = (state_4197[(9)]);
var inst_4177 = inst_4184;
var state_4197__$1 = (function (){var statearr_4208 = state_4197;
(statearr_4208[(7)] = inst_4177);

return statearr_4208;
})();
var statearr_4209_4223 = state_4197__$1;
(statearr_4209_4223[(2)] = null);

(statearr_4209_4223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4198 === (5))){
var inst_4177 = (state_4197[(7)]);
var state_4197__$1 = state_4197;
var statearr_4210_4224 = state_4197__$1;
(statearr_4210_4224[(2)] = inst_4177);

(statearr_4210_4224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4198 === (10))){
var inst_4191 = (state_4197[(2)]);
var state_4197__$1 = state_4197;
var statearr_4211_4225 = state_4197__$1;
(statearr_4211_4225[(2)] = inst_4191);

(statearr_4211_4225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4198 === (8))){
var inst_4184 = (state_4197[(9)]);
var inst_4187 = cljs.core.deref.call(null,inst_4184);
var state_4197__$1 = state_4197;
var statearr_4212_4226 = state_4197__$1;
(statearr_4212_4226[(2)] = inst_4187);

(statearr_4212_4226[(1)] = (10));


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
});})(c__3724__auto__))
;
return ((function (switch__3636__auto__,c__3724__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__3637__auto__ = null;
var cljs$core$async$reduce_$_state_machine__3637__auto____0 = (function (){
var statearr_4213 = [null,null,null,null,null,null,null,null,null,null];
(statearr_4213[(0)] = cljs$core$async$reduce_$_state_machine__3637__auto__);

(statearr_4213[(1)] = (1));

return statearr_4213;
});
var cljs$core$async$reduce_$_state_machine__3637__auto____1 = (function (state_4197){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_4197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e4214){if((e4214 instanceof Object)){
var ex__3640__auto__ = e4214;
var statearr_4215_4227 = state_4197;
(statearr_4215_4227[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4228 = state_4197;
state_4197 = G__4228;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__3637__auto__ = function(state_4197){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__3637__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__3637__auto____1.call(this,state_4197);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__3637__auto____0;
cljs$core$async$reduce_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__3637__auto____1;
return cljs$core$async$reduce_$_state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto__))
})();
var state__3726__auto__ = (function (){var statearr_4216 = f__3725__auto__.call(null);
(statearr_4216[(6)] = c__3724__auto__);

return statearr_4216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto__))
);

return c__3724__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto__,f__$1){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto__,f__$1){
return (function (state_4234){
var state_val_4235 = (state_4234[(1)]);
if((state_val_4235 === (1))){
var inst_4229 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_4234__$1 = state_4234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4234__$1,(2),inst_4229);
} else {
if((state_val_4235 === (2))){
var inst_4231 = (state_4234[(2)]);
var inst_4232 = f__$1.call(null,inst_4231);
var state_4234__$1 = state_4234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4234__$1,inst_4232);
} else {
return null;
}
}
});})(c__3724__auto__,f__$1))
;
return ((function (switch__3636__auto__,c__3724__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__3637__auto__ = null;
var cljs$core$async$transduce_$_state_machine__3637__auto____0 = (function (){
var statearr_4236 = [null,null,null,null,null,null,null];
(statearr_4236[(0)] = cljs$core$async$transduce_$_state_machine__3637__auto__);

(statearr_4236[(1)] = (1));

return statearr_4236;
});
var cljs$core$async$transduce_$_state_machine__3637__auto____1 = (function (state_4234){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_4234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e4237){if((e4237 instanceof Object)){
var ex__3640__auto__ = e4237;
var statearr_4238_4240 = state_4234;
(statearr_4238_4240[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4241 = state_4234;
state_4234 = G__4241;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__3637__auto__ = function(state_4234){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__3637__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__3637__auto____1.call(this,state_4234);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__3637__auto____0;
cljs$core$async$transduce_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__3637__auto____1;
return cljs$core$async$transduce_$_state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto__,f__$1))
})();
var state__3726__auto__ = (function (){var statearr_4239 = f__3725__auto__.call(null);
(statearr_4239[(6)] = c__3724__auto__);

return statearr_4239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto__,f__$1))
);

return c__3724__auto__;
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
var G__4243 = arguments.length;
switch (G__4243) {
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
var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto__){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto__){
return (function (state_4268){
var state_val_4269 = (state_4268[(1)]);
if((state_val_4269 === (7))){
var inst_4250 = (state_4268[(2)]);
var state_4268__$1 = state_4268;
var statearr_4270_4291 = state_4268__$1;
(statearr_4270_4291[(2)] = inst_4250);

(statearr_4270_4291[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4269 === (1))){
var inst_4244 = cljs.core.seq.call(null,coll);
var inst_4245 = inst_4244;
var state_4268__$1 = (function (){var statearr_4271 = state_4268;
(statearr_4271[(7)] = inst_4245);

return statearr_4271;
})();
var statearr_4272_4292 = state_4268__$1;
(statearr_4272_4292[(2)] = null);

(statearr_4272_4292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4269 === (4))){
var inst_4245 = (state_4268[(7)]);
var inst_4248 = cljs.core.first.call(null,inst_4245);
var state_4268__$1 = state_4268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4268__$1,(7),ch,inst_4248);
} else {
if((state_val_4269 === (13))){
var inst_4262 = (state_4268[(2)]);
var state_4268__$1 = state_4268;
var statearr_4273_4293 = state_4268__$1;
(statearr_4273_4293[(2)] = inst_4262);

(statearr_4273_4293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4269 === (6))){
var inst_4253 = (state_4268[(2)]);
var state_4268__$1 = state_4268;
if(cljs.core.truth_(inst_4253)){
var statearr_4274_4294 = state_4268__$1;
(statearr_4274_4294[(1)] = (8));

} else {
var statearr_4275_4295 = state_4268__$1;
(statearr_4275_4295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4269 === (3))){
var inst_4266 = (state_4268[(2)]);
var state_4268__$1 = state_4268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4268__$1,inst_4266);
} else {
if((state_val_4269 === (12))){
var state_4268__$1 = state_4268;
var statearr_4276_4296 = state_4268__$1;
(statearr_4276_4296[(2)] = null);

(statearr_4276_4296[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4269 === (2))){
var inst_4245 = (state_4268[(7)]);
var state_4268__$1 = state_4268;
if(cljs.core.truth_(inst_4245)){
var statearr_4277_4297 = state_4268__$1;
(statearr_4277_4297[(1)] = (4));

} else {
var statearr_4278_4298 = state_4268__$1;
(statearr_4278_4298[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4269 === (11))){
var inst_4259 = cljs.core.async.close_BANG_.call(null,ch);
var state_4268__$1 = state_4268;
var statearr_4279_4299 = state_4268__$1;
(statearr_4279_4299[(2)] = inst_4259);

(statearr_4279_4299[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4269 === (9))){
var state_4268__$1 = state_4268;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4280_4300 = state_4268__$1;
(statearr_4280_4300[(1)] = (11));

} else {
var statearr_4281_4301 = state_4268__$1;
(statearr_4281_4301[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4269 === (5))){
var inst_4245 = (state_4268[(7)]);
var state_4268__$1 = state_4268;
var statearr_4282_4302 = state_4268__$1;
(statearr_4282_4302[(2)] = inst_4245);

(statearr_4282_4302[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4269 === (10))){
var inst_4264 = (state_4268[(2)]);
var state_4268__$1 = state_4268;
var statearr_4283_4303 = state_4268__$1;
(statearr_4283_4303[(2)] = inst_4264);

(statearr_4283_4303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4269 === (8))){
var inst_4245 = (state_4268[(7)]);
var inst_4255 = cljs.core.next.call(null,inst_4245);
var inst_4245__$1 = inst_4255;
var state_4268__$1 = (function (){var statearr_4284 = state_4268;
(statearr_4284[(7)] = inst_4245__$1);

return statearr_4284;
})();
var statearr_4285_4304 = state_4268__$1;
(statearr_4285_4304[(2)] = null);

(statearr_4285_4304[(1)] = (2));


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
});})(c__3724__auto__))
;
return ((function (switch__3636__auto__,c__3724__auto__){
return (function() {
var cljs$core$async$state_machine__3637__auto__ = null;
var cljs$core$async$state_machine__3637__auto____0 = (function (){
var statearr_4286 = [null,null,null,null,null,null,null,null];
(statearr_4286[(0)] = cljs$core$async$state_machine__3637__auto__);

(statearr_4286[(1)] = (1));

return statearr_4286;
});
var cljs$core$async$state_machine__3637__auto____1 = (function (state_4268){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_4268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e4287){if((e4287 instanceof Object)){
var ex__3640__auto__ = e4287;
var statearr_4288_4305 = state_4268;
(statearr_4288_4305[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4306 = state_4268;
state_4268 = G__4306;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
cljs$core$async$state_machine__3637__auto__ = function(state_4268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3637__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3637__auto____1.call(this,state_4268);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3637__auto____0;
cljs$core$async$state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3637__auto____1;
return cljs$core$async$state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto__))
})();
var state__3726__auto__ = (function (){var statearr_4289 = f__3725__auto__.call(null);
(statearr_4289[(6)] = c__3724__auto__);

return statearr_4289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto__))
);

return c__3724__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async4307 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4307 = (function (ch,cs,meta4308){
this.ch = ch;
this.cs = cs;
this.meta4308 = meta4308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_4309,meta4308__$1){
var self__ = this;
var _4309__$1 = this;
return (new cljs.core.async.t_cljs$core$async4307(self__.ch,self__.cs,meta4308__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async4307.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_4309){
var self__ = this;
var _4309__$1 = this;
return self__.meta4308;
});})(cs))
;

cljs.core.async.t_cljs$core$async4307.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4307.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async4307.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4307.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4307.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4307.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4307.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta4308","meta4308",1699773882,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async4307.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4307";

cljs.core.async.t_cljs$core$async4307.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4307");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4307.
 */
cljs.core.async.__GT_t_cljs$core$async4307 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async4307(ch__$1,cs__$1,meta4308){
return (new cljs.core.async.t_cljs$core$async4307(ch__$1,cs__$1,meta4308));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async4307(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__3724__auto___4529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto___4529,cs,m,dchan,dctr,done){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto___4529,cs,m,dchan,dctr,done){
return (function (state_4444){
var state_val_4445 = (state_4444[(1)]);
if((state_val_4445 === (7))){
var inst_4440 = (state_4444[(2)]);
var state_4444__$1 = state_4444;
var statearr_4446_4530 = state_4444__$1;
(statearr_4446_4530[(2)] = inst_4440);

(statearr_4446_4530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (20))){
var inst_4343 = (state_4444[(7)]);
var inst_4355 = cljs.core.first.call(null,inst_4343);
var inst_4356 = cljs.core.nth.call(null,inst_4355,(0),null);
var inst_4357 = cljs.core.nth.call(null,inst_4355,(1),null);
var state_4444__$1 = (function (){var statearr_4447 = state_4444;
(statearr_4447[(8)] = inst_4356);

return statearr_4447;
})();
if(cljs.core.truth_(inst_4357)){
var statearr_4448_4531 = state_4444__$1;
(statearr_4448_4531[(1)] = (22));

} else {
var statearr_4449_4532 = state_4444__$1;
(statearr_4449_4532[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (27))){
var inst_4385 = (state_4444[(9)]);
var inst_4387 = (state_4444[(10)]);
var inst_4392 = (state_4444[(11)]);
var inst_4312 = (state_4444[(12)]);
var inst_4392__$1 = cljs.core._nth.call(null,inst_4385,inst_4387);
var inst_4393 = cljs.core.async.put_BANG_.call(null,inst_4392__$1,inst_4312,done);
var state_4444__$1 = (function (){var statearr_4450 = state_4444;
(statearr_4450[(11)] = inst_4392__$1);

return statearr_4450;
})();
if(cljs.core.truth_(inst_4393)){
var statearr_4451_4533 = state_4444__$1;
(statearr_4451_4533[(1)] = (30));

} else {
var statearr_4452_4534 = state_4444__$1;
(statearr_4452_4534[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (1))){
var state_4444__$1 = state_4444;
var statearr_4453_4535 = state_4444__$1;
(statearr_4453_4535[(2)] = null);

(statearr_4453_4535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (24))){
var inst_4343 = (state_4444[(7)]);
var inst_4362 = (state_4444[(2)]);
var inst_4363 = cljs.core.next.call(null,inst_4343);
var inst_4321 = inst_4363;
var inst_4322 = null;
var inst_4323 = (0);
var inst_4324 = (0);
var state_4444__$1 = (function (){var statearr_4454 = state_4444;
(statearr_4454[(13)] = inst_4362);

(statearr_4454[(14)] = inst_4321);

(statearr_4454[(15)] = inst_4324);

(statearr_4454[(16)] = inst_4322);

(statearr_4454[(17)] = inst_4323);

return statearr_4454;
})();
var statearr_4455_4536 = state_4444__$1;
(statearr_4455_4536[(2)] = null);

(statearr_4455_4536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (39))){
var state_4444__$1 = state_4444;
var statearr_4459_4537 = state_4444__$1;
(statearr_4459_4537[(2)] = null);

(statearr_4459_4537[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (4))){
var inst_4312 = (state_4444[(12)]);
var inst_4312__$1 = (state_4444[(2)]);
var inst_4313 = (inst_4312__$1 == null);
var state_4444__$1 = (function (){var statearr_4460 = state_4444;
(statearr_4460[(12)] = inst_4312__$1);

return statearr_4460;
})();
if(cljs.core.truth_(inst_4313)){
var statearr_4461_4538 = state_4444__$1;
(statearr_4461_4538[(1)] = (5));

} else {
var statearr_4462_4539 = state_4444__$1;
(statearr_4462_4539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (15))){
var inst_4321 = (state_4444[(14)]);
var inst_4324 = (state_4444[(15)]);
var inst_4322 = (state_4444[(16)]);
var inst_4323 = (state_4444[(17)]);
var inst_4339 = (state_4444[(2)]);
var inst_4340 = (inst_4324 + (1));
var tmp4456 = inst_4321;
var tmp4457 = inst_4322;
var tmp4458 = inst_4323;
var inst_4321__$1 = tmp4456;
var inst_4322__$1 = tmp4457;
var inst_4323__$1 = tmp4458;
var inst_4324__$1 = inst_4340;
var state_4444__$1 = (function (){var statearr_4463 = state_4444;
(statearr_4463[(14)] = inst_4321__$1);

(statearr_4463[(18)] = inst_4339);

(statearr_4463[(15)] = inst_4324__$1);

(statearr_4463[(16)] = inst_4322__$1);

(statearr_4463[(17)] = inst_4323__$1);

return statearr_4463;
})();
var statearr_4464_4540 = state_4444__$1;
(statearr_4464_4540[(2)] = null);

(statearr_4464_4540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (21))){
var inst_4366 = (state_4444[(2)]);
var state_4444__$1 = state_4444;
var statearr_4468_4541 = state_4444__$1;
(statearr_4468_4541[(2)] = inst_4366);

(statearr_4468_4541[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (31))){
var inst_4392 = (state_4444[(11)]);
var inst_4396 = done.call(null,null);
var inst_4397 = cljs.core.async.untap_STAR_.call(null,m,inst_4392);
var state_4444__$1 = (function (){var statearr_4469 = state_4444;
(statearr_4469[(19)] = inst_4396);

return statearr_4469;
})();
var statearr_4470_4542 = state_4444__$1;
(statearr_4470_4542[(2)] = inst_4397);

(statearr_4470_4542[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (32))){
var inst_4386 = (state_4444[(20)]);
var inst_4385 = (state_4444[(9)]);
var inst_4384 = (state_4444[(21)]);
var inst_4387 = (state_4444[(10)]);
var inst_4399 = (state_4444[(2)]);
var inst_4400 = (inst_4387 + (1));
var tmp4465 = inst_4386;
var tmp4466 = inst_4385;
var tmp4467 = inst_4384;
var inst_4384__$1 = tmp4467;
var inst_4385__$1 = tmp4466;
var inst_4386__$1 = tmp4465;
var inst_4387__$1 = inst_4400;
var state_4444__$1 = (function (){var statearr_4471 = state_4444;
(statearr_4471[(20)] = inst_4386__$1);

(statearr_4471[(9)] = inst_4385__$1);

(statearr_4471[(22)] = inst_4399);

(statearr_4471[(21)] = inst_4384__$1);

(statearr_4471[(10)] = inst_4387__$1);

return statearr_4471;
})();
var statearr_4472_4543 = state_4444__$1;
(statearr_4472_4543[(2)] = null);

(statearr_4472_4543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (40))){
var inst_4412 = (state_4444[(23)]);
var inst_4416 = done.call(null,null);
var inst_4417 = cljs.core.async.untap_STAR_.call(null,m,inst_4412);
var state_4444__$1 = (function (){var statearr_4473 = state_4444;
(statearr_4473[(24)] = inst_4416);

return statearr_4473;
})();
var statearr_4474_4544 = state_4444__$1;
(statearr_4474_4544[(2)] = inst_4417);

(statearr_4474_4544[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (33))){
var inst_4403 = (state_4444[(25)]);
var inst_4405 = cljs.core.chunked_seq_QMARK_.call(null,inst_4403);
var state_4444__$1 = state_4444;
if(inst_4405){
var statearr_4475_4545 = state_4444__$1;
(statearr_4475_4545[(1)] = (36));

} else {
var statearr_4476_4546 = state_4444__$1;
(statearr_4476_4546[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (13))){
var inst_4333 = (state_4444[(26)]);
var inst_4336 = cljs.core.async.close_BANG_.call(null,inst_4333);
var state_4444__$1 = state_4444;
var statearr_4477_4547 = state_4444__$1;
(statearr_4477_4547[(2)] = inst_4336);

(statearr_4477_4547[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (22))){
var inst_4356 = (state_4444[(8)]);
var inst_4359 = cljs.core.async.close_BANG_.call(null,inst_4356);
var state_4444__$1 = state_4444;
var statearr_4478_4548 = state_4444__$1;
(statearr_4478_4548[(2)] = inst_4359);

(statearr_4478_4548[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (36))){
var inst_4403 = (state_4444[(25)]);
var inst_4407 = cljs.core.chunk_first.call(null,inst_4403);
var inst_4408 = cljs.core.chunk_rest.call(null,inst_4403);
var inst_4409 = cljs.core.count.call(null,inst_4407);
var inst_4384 = inst_4408;
var inst_4385 = inst_4407;
var inst_4386 = inst_4409;
var inst_4387 = (0);
var state_4444__$1 = (function (){var statearr_4479 = state_4444;
(statearr_4479[(20)] = inst_4386);

(statearr_4479[(9)] = inst_4385);

(statearr_4479[(21)] = inst_4384);

(statearr_4479[(10)] = inst_4387);

return statearr_4479;
})();
var statearr_4480_4549 = state_4444__$1;
(statearr_4480_4549[(2)] = null);

(statearr_4480_4549[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (41))){
var inst_4403 = (state_4444[(25)]);
var inst_4419 = (state_4444[(2)]);
var inst_4420 = cljs.core.next.call(null,inst_4403);
var inst_4384 = inst_4420;
var inst_4385 = null;
var inst_4386 = (0);
var inst_4387 = (0);
var state_4444__$1 = (function (){var statearr_4481 = state_4444;
(statearr_4481[(20)] = inst_4386);

(statearr_4481[(9)] = inst_4385);

(statearr_4481[(21)] = inst_4384);

(statearr_4481[(27)] = inst_4419);

(statearr_4481[(10)] = inst_4387);

return statearr_4481;
})();
var statearr_4482_4550 = state_4444__$1;
(statearr_4482_4550[(2)] = null);

(statearr_4482_4550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (43))){
var state_4444__$1 = state_4444;
var statearr_4483_4551 = state_4444__$1;
(statearr_4483_4551[(2)] = null);

(statearr_4483_4551[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (29))){
var inst_4428 = (state_4444[(2)]);
var state_4444__$1 = state_4444;
var statearr_4484_4552 = state_4444__$1;
(statearr_4484_4552[(2)] = inst_4428);

(statearr_4484_4552[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (44))){
var inst_4437 = (state_4444[(2)]);
var state_4444__$1 = (function (){var statearr_4485 = state_4444;
(statearr_4485[(28)] = inst_4437);

return statearr_4485;
})();
var statearr_4486_4553 = state_4444__$1;
(statearr_4486_4553[(2)] = null);

(statearr_4486_4553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (6))){
var inst_4376 = (state_4444[(29)]);
var inst_4375 = cljs.core.deref.call(null,cs);
var inst_4376__$1 = cljs.core.keys.call(null,inst_4375);
var inst_4377 = cljs.core.count.call(null,inst_4376__$1);
var inst_4378 = cljs.core.reset_BANG_.call(null,dctr,inst_4377);
var inst_4383 = cljs.core.seq.call(null,inst_4376__$1);
var inst_4384 = inst_4383;
var inst_4385 = null;
var inst_4386 = (0);
var inst_4387 = (0);
var state_4444__$1 = (function (){var statearr_4487 = state_4444;
(statearr_4487[(29)] = inst_4376__$1);

(statearr_4487[(20)] = inst_4386);

(statearr_4487[(9)] = inst_4385);

(statearr_4487[(30)] = inst_4378);

(statearr_4487[(21)] = inst_4384);

(statearr_4487[(10)] = inst_4387);

return statearr_4487;
})();
var statearr_4488_4554 = state_4444__$1;
(statearr_4488_4554[(2)] = null);

(statearr_4488_4554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (28))){
var inst_4403 = (state_4444[(25)]);
var inst_4384 = (state_4444[(21)]);
var inst_4403__$1 = cljs.core.seq.call(null,inst_4384);
var state_4444__$1 = (function (){var statearr_4489 = state_4444;
(statearr_4489[(25)] = inst_4403__$1);

return statearr_4489;
})();
if(inst_4403__$1){
var statearr_4490_4555 = state_4444__$1;
(statearr_4490_4555[(1)] = (33));

} else {
var statearr_4491_4556 = state_4444__$1;
(statearr_4491_4556[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (25))){
var inst_4386 = (state_4444[(20)]);
var inst_4387 = (state_4444[(10)]);
var inst_4389 = (inst_4387 < inst_4386);
var inst_4390 = inst_4389;
var state_4444__$1 = state_4444;
if(cljs.core.truth_(inst_4390)){
var statearr_4492_4557 = state_4444__$1;
(statearr_4492_4557[(1)] = (27));

} else {
var statearr_4493_4558 = state_4444__$1;
(statearr_4493_4558[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (34))){
var state_4444__$1 = state_4444;
var statearr_4494_4559 = state_4444__$1;
(statearr_4494_4559[(2)] = null);

(statearr_4494_4559[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (17))){
var state_4444__$1 = state_4444;
var statearr_4495_4560 = state_4444__$1;
(statearr_4495_4560[(2)] = null);

(statearr_4495_4560[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (3))){
var inst_4442 = (state_4444[(2)]);
var state_4444__$1 = state_4444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4444__$1,inst_4442);
} else {
if((state_val_4445 === (12))){
var inst_4371 = (state_4444[(2)]);
var state_4444__$1 = state_4444;
var statearr_4496_4561 = state_4444__$1;
(statearr_4496_4561[(2)] = inst_4371);

(statearr_4496_4561[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (2))){
var state_4444__$1 = state_4444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4444__$1,(4),ch);
} else {
if((state_val_4445 === (23))){
var state_4444__$1 = state_4444;
var statearr_4497_4562 = state_4444__$1;
(statearr_4497_4562[(2)] = null);

(statearr_4497_4562[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (35))){
var inst_4426 = (state_4444[(2)]);
var state_4444__$1 = state_4444;
var statearr_4498_4563 = state_4444__$1;
(statearr_4498_4563[(2)] = inst_4426);

(statearr_4498_4563[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (19))){
var inst_4343 = (state_4444[(7)]);
var inst_4347 = cljs.core.chunk_first.call(null,inst_4343);
var inst_4348 = cljs.core.chunk_rest.call(null,inst_4343);
var inst_4349 = cljs.core.count.call(null,inst_4347);
var inst_4321 = inst_4348;
var inst_4322 = inst_4347;
var inst_4323 = inst_4349;
var inst_4324 = (0);
var state_4444__$1 = (function (){var statearr_4499 = state_4444;
(statearr_4499[(14)] = inst_4321);

(statearr_4499[(15)] = inst_4324);

(statearr_4499[(16)] = inst_4322);

(statearr_4499[(17)] = inst_4323);

return statearr_4499;
})();
var statearr_4500_4564 = state_4444__$1;
(statearr_4500_4564[(2)] = null);

(statearr_4500_4564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (11))){
var inst_4321 = (state_4444[(14)]);
var inst_4343 = (state_4444[(7)]);
var inst_4343__$1 = cljs.core.seq.call(null,inst_4321);
var state_4444__$1 = (function (){var statearr_4501 = state_4444;
(statearr_4501[(7)] = inst_4343__$1);

return statearr_4501;
})();
if(inst_4343__$1){
var statearr_4502_4565 = state_4444__$1;
(statearr_4502_4565[(1)] = (16));

} else {
var statearr_4503_4566 = state_4444__$1;
(statearr_4503_4566[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (9))){
var inst_4373 = (state_4444[(2)]);
var state_4444__$1 = state_4444;
var statearr_4504_4567 = state_4444__$1;
(statearr_4504_4567[(2)] = inst_4373);

(statearr_4504_4567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (5))){
var inst_4319 = cljs.core.deref.call(null,cs);
var inst_4320 = cljs.core.seq.call(null,inst_4319);
var inst_4321 = inst_4320;
var inst_4322 = null;
var inst_4323 = (0);
var inst_4324 = (0);
var state_4444__$1 = (function (){var statearr_4505 = state_4444;
(statearr_4505[(14)] = inst_4321);

(statearr_4505[(15)] = inst_4324);

(statearr_4505[(16)] = inst_4322);

(statearr_4505[(17)] = inst_4323);

return statearr_4505;
})();
var statearr_4506_4568 = state_4444__$1;
(statearr_4506_4568[(2)] = null);

(statearr_4506_4568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (14))){
var state_4444__$1 = state_4444;
var statearr_4507_4569 = state_4444__$1;
(statearr_4507_4569[(2)] = null);

(statearr_4507_4569[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (45))){
var inst_4434 = (state_4444[(2)]);
var state_4444__$1 = state_4444;
var statearr_4508_4570 = state_4444__$1;
(statearr_4508_4570[(2)] = inst_4434);

(statearr_4508_4570[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (26))){
var inst_4376 = (state_4444[(29)]);
var inst_4430 = (state_4444[(2)]);
var inst_4431 = cljs.core.seq.call(null,inst_4376);
var state_4444__$1 = (function (){var statearr_4509 = state_4444;
(statearr_4509[(31)] = inst_4430);

return statearr_4509;
})();
if(inst_4431){
var statearr_4510_4571 = state_4444__$1;
(statearr_4510_4571[(1)] = (42));

} else {
var statearr_4511_4572 = state_4444__$1;
(statearr_4511_4572[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (16))){
var inst_4343 = (state_4444[(7)]);
var inst_4345 = cljs.core.chunked_seq_QMARK_.call(null,inst_4343);
var state_4444__$1 = state_4444;
if(inst_4345){
var statearr_4512_4573 = state_4444__$1;
(statearr_4512_4573[(1)] = (19));

} else {
var statearr_4513_4574 = state_4444__$1;
(statearr_4513_4574[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (38))){
var inst_4423 = (state_4444[(2)]);
var state_4444__$1 = state_4444;
var statearr_4514_4575 = state_4444__$1;
(statearr_4514_4575[(2)] = inst_4423);

(statearr_4514_4575[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (30))){
var state_4444__$1 = state_4444;
var statearr_4515_4576 = state_4444__$1;
(statearr_4515_4576[(2)] = null);

(statearr_4515_4576[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (10))){
var inst_4324 = (state_4444[(15)]);
var inst_4322 = (state_4444[(16)]);
var inst_4332 = cljs.core._nth.call(null,inst_4322,inst_4324);
var inst_4333 = cljs.core.nth.call(null,inst_4332,(0),null);
var inst_4334 = cljs.core.nth.call(null,inst_4332,(1),null);
var state_4444__$1 = (function (){var statearr_4516 = state_4444;
(statearr_4516[(26)] = inst_4333);

return statearr_4516;
})();
if(cljs.core.truth_(inst_4334)){
var statearr_4517_4577 = state_4444__$1;
(statearr_4517_4577[(1)] = (13));

} else {
var statearr_4518_4578 = state_4444__$1;
(statearr_4518_4578[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (18))){
var inst_4369 = (state_4444[(2)]);
var state_4444__$1 = state_4444;
var statearr_4519_4579 = state_4444__$1;
(statearr_4519_4579[(2)] = inst_4369);

(statearr_4519_4579[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (42))){
var state_4444__$1 = state_4444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4444__$1,(45),dchan);
} else {
if((state_val_4445 === (37))){
var inst_4403 = (state_4444[(25)]);
var inst_4412 = (state_4444[(23)]);
var inst_4312 = (state_4444[(12)]);
var inst_4412__$1 = cljs.core.first.call(null,inst_4403);
var inst_4413 = cljs.core.async.put_BANG_.call(null,inst_4412__$1,inst_4312,done);
var state_4444__$1 = (function (){var statearr_4520 = state_4444;
(statearr_4520[(23)] = inst_4412__$1);

return statearr_4520;
})();
if(cljs.core.truth_(inst_4413)){
var statearr_4521_4580 = state_4444__$1;
(statearr_4521_4580[(1)] = (39));

} else {
var statearr_4522_4581 = state_4444__$1;
(statearr_4522_4581[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (8))){
var inst_4324 = (state_4444[(15)]);
var inst_4323 = (state_4444[(17)]);
var inst_4326 = (inst_4324 < inst_4323);
var inst_4327 = inst_4326;
var state_4444__$1 = state_4444;
if(cljs.core.truth_(inst_4327)){
var statearr_4523_4582 = state_4444__$1;
(statearr_4523_4582[(1)] = (10));

} else {
var statearr_4524_4583 = state_4444__$1;
(statearr_4524_4583[(1)] = (11));

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
});})(c__3724__auto___4529,cs,m,dchan,dctr,done))
;
return ((function (switch__3636__auto__,c__3724__auto___4529,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__3637__auto__ = null;
var cljs$core$async$mult_$_state_machine__3637__auto____0 = (function (){
var statearr_4525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4525[(0)] = cljs$core$async$mult_$_state_machine__3637__auto__);

(statearr_4525[(1)] = (1));

return statearr_4525;
});
var cljs$core$async$mult_$_state_machine__3637__auto____1 = (function (state_4444){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_4444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e4526){if((e4526 instanceof Object)){
var ex__3640__auto__ = e4526;
var statearr_4527_4584 = state_4444;
(statearr_4527_4584[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4585 = state_4444;
state_4444 = G__4585;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__3637__auto__ = function(state_4444){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__3637__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__3637__auto____1.call(this,state_4444);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__3637__auto____0;
cljs$core$async$mult_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__3637__auto____1;
return cljs$core$async$mult_$_state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto___4529,cs,m,dchan,dctr,done))
})();
var state__3726__auto__ = (function (){var statearr_4528 = f__3725__auto__.call(null);
(statearr_4528[(6)] = c__3724__auto___4529);

return statearr_4528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto___4529,cs,m,dchan,dctr,done))
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
var G__4587 = arguments.length;
switch (G__4587) {
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
var len__4499__auto___4599 = arguments.length;
var i__4500__auto___4600 = (0);
while(true){
if((i__4500__auto___4600 < len__4499__auto___4599)){
args__4502__auto__.push((arguments[i__4500__auto___4600]));

var G__4601 = (i__4500__auto___4600 + (1));
i__4500__auto___4600 = G__4601;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__4593){
var map__4594 = p__4593;
var map__4594__$1 = ((((!((map__4594 == null)))?(((((map__4594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4594):map__4594);
var opts = map__4594__$1;
var statearr_4596_4602 = state;
(statearr_4596_4602[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__4594,map__4594__$1,opts){
return (function (val){
var statearr_4597_4603 = state;
(statearr_4597_4603[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__4594,map__4594__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_4598_4604 = state;
(statearr_4598_4604[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq4589){
var G__4590 = cljs.core.first.call(null,seq4589);
var seq4589__$1 = cljs.core.next.call(null,seq4589);
var G__4591 = cljs.core.first.call(null,seq4589__$1);
var seq4589__$2 = cljs.core.next.call(null,seq4589__$1);
var G__4592 = cljs.core.first.call(null,seq4589__$2);
var seq4589__$3 = cljs.core.next.call(null,seq4589__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4590,G__4591,G__4592,seq4589__$3);
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
if(typeof cljs.core.async.t_cljs$core$async4605 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4605 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta4606){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta4606 = meta4606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_4607,meta4606__$1){
var self__ = this;
var _4607__$1 = this;
return (new cljs.core.async.t_cljs$core$async4605(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta4606__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_4607){
var self__ = this;
var _4607__$1 = this;
return self__.meta4606;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4605.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4605.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4605.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4605.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4605.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4605.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4605.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4605.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async4605.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta4606","meta4606",-1601828815,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4605.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4605";

cljs.core.async.t_cljs$core$async4605.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4605");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4605.
 */
cljs.core.async.__GT_t_cljs$core$async4605 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async4605(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta4606){
return (new cljs.core.async.t_cljs$core$async4605(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta4606));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async4605(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3724__auto___4769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto___4769,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto___4769,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_4709){
var state_val_4710 = (state_4709[(1)]);
if((state_val_4710 === (7))){
var inst_4624 = (state_4709[(2)]);
var state_4709__$1 = state_4709;
var statearr_4711_4770 = state_4709__$1;
(statearr_4711_4770[(2)] = inst_4624);

(statearr_4711_4770[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (20))){
var inst_4636 = (state_4709[(7)]);
var state_4709__$1 = state_4709;
var statearr_4712_4771 = state_4709__$1;
(statearr_4712_4771[(2)] = inst_4636);

(statearr_4712_4771[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (27))){
var state_4709__$1 = state_4709;
var statearr_4713_4772 = state_4709__$1;
(statearr_4713_4772[(2)] = null);

(statearr_4713_4772[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (1))){
var inst_4611 = (state_4709[(8)]);
var inst_4611__$1 = calc_state.call(null);
var inst_4613 = (inst_4611__$1 == null);
var inst_4614 = cljs.core.not.call(null,inst_4613);
var state_4709__$1 = (function (){var statearr_4714 = state_4709;
(statearr_4714[(8)] = inst_4611__$1);

return statearr_4714;
})();
if(inst_4614){
var statearr_4715_4773 = state_4709__$1;
(statearr_4715_4773[(1)] = (2));

} else {
var statearr_4716_4774 = state_4709__$1;
(statearr_4716_4774[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (24))){
var inst_4683 = (state_4709[(9)]);
var inst_4669 = (state_4709[(10)]);
var inst_4660 = (state_4709[(11)]);
var inst_4683__$1 = inst_4660.call(null,inst_4669);
var state_4709__$1 = (function (){var statearr_4717 = state_4709;
(statearr_4717[(9)] = inst_4683__$1);

return statearr_4717;
})();
if(cljs.core.truth_(inst_4683__$1)){
var statearr_4718_4775 = state_4709__$1;
(statearr_4718_4775[(1)] = (29));

} else {
var statearr_4719_4776 = state_4709__$1;
(statearr_4719_4776[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (4))){
var inst_4627 = (state_4709[(2)]);
var state_4709__$1 = state_4709;
if(cljs.core.truth_(inst_4627)){
var statearr_4720_4777 = state_4709__$1;
(statearr_4720_4777[(1)] = (8));

} else {
var statearr_4721_4778 = state_4709__$1;
(statearr_4721_4778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (15))){
var inst_4654 = (state_4709[(2)]);
var state_4709__$1 = state_4709;
if(cljs.core.truth_(inst_4654)){
var statearr_4722_4779 = state_4709__$1;
(statearr_4722_4779[(1)] = (19));

} else {
var statearr_4723_4780 = state_4709__$1;
(statearr_4723_4780[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (21))){
var inst_4659 = (state_4709[(12)]);
var inst_4659__$1 = (state_4709[(2)]);
var inst_4660 = cljs.core.get.call(null,inst_4659__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4661 = cljs.core.get.call(null,inst_4659__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4662 = cljs.core.get.call(null,inst_4659__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_4709__$1 = (function (){var statearr_4724 = state_4709;
(statearr_4724[(12)] = inst_4659__$1);

(statearr_4724[(13)] = inst_4661);

(statearr_4724[(11)] = inst_4660);

return statearr_4724;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_4709__$1,(22),inst_4662);
} else {
if((state_val_4710 === (31))){
var inst_4691 = (state_4709[(2)]);
var state_4709__$1 = state_4709;
if(cljs.core.truth_(inst_4691)){
var statearr_4725_4781 = state_4709__$1;
(statearr_4725_4781[(1)] = (32));

} else {
var statearr_4726_4782 = state_4709__$1;
(statearr_4726_4782[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (32))){
var inst_4668 = (state_4709[(14)]);
var state_4709__$1 = state_4709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4709__$1,(35),out,inst_4668);
} else {
if((state_val_4710 === (33))){
var inst_4659 = (state_4709[(12)]);
var inst_4636 = inst_4659;
var state_4709__$1 = (function (){var statearr_4727 = state_4709;
(statearr_4727[(7)] = inst_4636);

return statearr_4727;
})();
var statearr_4728_4783 = state_4709__$1;
(statearr_4728_4783[(2)] = null);

(statearr_4728_4783[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (13))){
var inst_4636 = (state_4709[(7)]);
var inst_4643 = inst_4636.cljs$lang$protocol_mask$partition0$;
var inst_4644 = (inst_4643 & (64));
var inst_4645 = inst_4636.cljs$core$ISeq$;
var inst_4646 = (cljs.core.PROTOCOL_SENTINEL === inst_4645);
var inst_4647 = ((inst_4644) || (inst_4646));
var state_4709__$1 = state_4709;
if(cljs.core.truth_(inst_4647)){
var statearr_4729_4784 = state_4709__$1;
(statearr_4729_4784[(1)] = (16));

} else {
var statearr_4730_4785 = state_4709__$1;
(statearr_4730_4785[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (22))){
var inst_4668 = (state_4709[(14)]);
var inst_4669 = (state_4709[(10)]);
var inst_4667 = (state_4709[(2)]);
var inst_4668__$1 = cljs.core.nth.call(null,inst_4667,(0),null);
var inst_4669__$1 = cljs.core.nth.call(null,inst_4667,(1),null);
var inst_4670 = (inst_4668__$1 == null);
var inst_4671 = cljs.core._EQ_.call(null,inst_4669__$1,change);
var inst_4672 = ((inst_4670) || (inst_4671));
var state_4709__$1 = (function (){var statearr_4731 = state_4709;
(statearr_4731[(14)] = inst_4668__$1);

(statearr_4731[(10)] = inst_4669__$1);

return statearr_4731;
})();
if(cljs.core.truth_(inst_4672)){
var statearr_4732_4786 = state_4709__$1;
(statearr_4732_4786[(1)] = (23));

} else {
var statearr_4733_4787 = state_4709__$1;
(statearr_4733_4787[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (36))){
var inst_4659 = (state_4709[(12)]);
var inst_4636 = inst_4659;
var state_4709__$1 = (function (){var statearr_4734 = state_4709;
(statearr_4734[(7)] = inst_4636);

return statearr_4734;
})();
var statearr_4735_4788 = state_4709__$1;
(statearr_4735_4788[(2)] = null);

(statearr_4735_4788[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (29))){
var inst_4683 = (state_4709[(9)]);
var state_4709__$1 = state_4709;
var statearr_4736_4789 = state_4709__$1;
(statearr_4736_4789[(2)] = inst_4683);

(statearr_4736_4789[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (6))){
var state_4709__$1 = state_4709;
var statearr_4737_4790 = state_4709__$1;
(statearr_4737_4790[(2)] = false);

(statearr_4737_4790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (28))){
var inst_4679 = (state_4709[(2)]);
var inst_4680 = calc_state.call(null);
var inst_4636 = inst_4680;
var state_4709__$1 = (function (){var statearr_4738 = state_4709;
(statearr_4738[(7)] = inst_4636);

(statearr_4738[(15)] = inst_4679);

return statearr_4738;
})();
var statearr_4739_4791 = state_4709__$1;
(statearr_4739_4791[(2)] = null);

(statearr_4739_4791[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (25))){
var inst_4705 = (state_4709[(2)]);
var state_4709__$1 = state_4709;
var statearr_4740_4792 = state_4709__$1;
(statearr_4740_4792[(2)] = inst_4705);

(statearr_4740_4792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (34))){
var inst_4703 = (state_4709[(2)]);
var state_4709__$1 = state_4709;
var statearr_4741_4793 = state_4709__$1;
(statearr_4741_4793[(2)] = inst_4703);

(statearr_4741_4793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (17))){
var state_4709__$1 = state_4709;
var statearr_4742_4794 = state_4709__$1;
(statearr_4742_4794[(2)] = false);

(statearr_4742_4794[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (3))){
var state_4709__$1 = state_4709;
var statearr_4743_4795 = state_4709__$1;
(statearr_4743_4795[(2)] = false);

(statearr_4743_4795[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (12))){
var inst_4707 = (state_4709[(2)]);
var state_4709__$1 = state_4709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4709__$1,inst_4707);
} else {
if((state_val_4710 === (2))){
var inst_4611 = (state_4709[(8)]);
var inst_4616 = inst_4611.cljs$lang$protocol_mask$partition0$;
var inst_4617 = (inst_4616 & (64));
var inst_4618 = inst_4611.cljs$core$ISeq$;
var inst_4619 = (cljs.core.PROTOCOL_SENTINEL === inst_4618);
var inst_4620 = ((inst_4617) || (inst_4619));
var state_4709__$1 = state_4709;
if(cljs.core.truth_(inst_4620)){
var statearr_4744_4796 = state_4709__$1;
(statearr_4744_4796[(1)] = (5));

} else {
var statearr_4745_4797 = state_4709__$1;
(statearr_4745_4797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (23))){
var inst_4668 = (state_4709[(14)]);
var inst_4674 = (inst_4668 == null);
var state_4709__$1 = state_4709;
if(cljs.core.truth_(inst_4674)){
var statearr_4746_4798 = state_4709__$1;
(statearr_4746_4798[(1)] = (26));

} else {
var statearr_4747_4799 = state_4709__$1;
(statearr_4747_4799[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (35))){
var inst_4694 = (state_4709[(2)]);
var state_4709__$1 = state_4709;
if(cljs.core.truth_(inst_4694)){
var statearr_4748_4800 = state_4709__$1;
(statearr_4748_4800[(1)] = (36));

} else {
var statearr_4749_4801 = state_4709__$1;
(statearr_4749_4801[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (19))){
var inst_4636 = (state_4709[(7)]);
var inst_4656 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4636);
var state_4709__$1 = state_4709;
var statearr_4750_4802 = state_4709__$1;
(statearr_4750_4802[(2)] = inst_4656);

(statearr_4750_4802[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (11))){
var inst_4636 = (state_4709[(7)]);
var inst_4640 = (inst_4636 == null);
var inst_4641 = cljs.core.not.call(null,inst_4640);
var state_4709__$1 = state_4709;
if(inst_4641){
var statearr_4751_4803 = state_4709__$1;
(statearr_4751_4803[(1)] = (13));

} else {
var statearr_4752_4804 = state_4709__$1;
(statearr_4752_4804[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (9))){
var inst_4611 = (state_4709[(8)]);
var state_4709__$1 = state_4709;
var statearr_4753_4805 = state_4709__$1;
(statearr_4753_4805[(2)] = inst_4611);

(statearr_4753_4805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (5))){
var state_4709__$1 = state_4709;
var statearr_4754_4806 = state_4709__$1;
(statearr_4754_4806[(2)] = true);

(statearr_4754_4806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (14))){
var state_4709__$1 = state_4709;
var statearr_4755_4807 = state_4709__$1;
(statearr_4755_4807[(2)] = false);

(statearr_4755_4807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (26))){
var inst_4669 = (state_4709[(10)]);
var inst_4676 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_4669);
var state_4709__$1 = state_4709;
var statearr_4756_4808 = state_4709__$1;
(statearr_4756_4808[(2)] = inst_4676);

(statearr_4756_4808[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (16))){
var state_4709__$1 = state_4709;
var statearr_4757_4809 = state_4709__$1;
(statearr_4757_4809[(2)] = true);

(statearr_4757_4809[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (38))){
var inst_4699 = (state_4709[(2)]);
var state_4709__$1 = state_4709;
var statearr_4758_4810 = state_4709__$1;
(statearr_4758_4810[(2)] = inst_4699);

(statearr_4758_4810[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (30))){
var inst_4669 = (state_4709[(10)]);
var inst_4661 = (state_4709[(13)]);
var inst_4660 = (state_4709[(11)]);
var inst_4686 = cljs.core.empty_QMARK_.call(null,inst_4660);
var inst_4687 = inst_4661.call(null,inst_4669);
var inst_4688 = cljs.core.not.call(null,inst_4687);
var inst_4689 = ((inst_4686) && (inst_4688));
var state_4709__$1 = state_4709;
var statearr_4759_4811 = state_4709__$1;
(statearr_4759_4811[(2)] = inst_4689);

(statearr_4759_4811[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (10))){
var inst_4611 = (state_4709[(8)]);
var inst_4632 = (state_4709[(2)]);
var inst_4633 = cljs.core.get.call(null,inst_4632,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4634 = cljs.core.get.call(null,inst_4632,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4635 = cljs.core.get.call(null,inst_4632,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_4636 = inst_4611;
var state_4709__$1 = (function (){var statearr_4760 = state_4709;
(statearr_4760[(16)] = inst_4635);

(statearr_4760[(7)] = inst_4636);

(statearr_4760[(17)] = inst_4634);

(statearr_4760[(18)] = inst_4633);

return statearr_4760;
})();
var statearr_4761_4812 = state_4709__$1;
(statearr_4761_4812[(2)] = null);

(statearr_4761_4812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (18))){
var inst_4651 = (state_4709[(2)]);
var state_4709__$1 = state_4709;
var statearr_4762_4813 = state_4709__$1;
(statearr_4762_4813[(2)] = inst_4651);

(statearr_4762_4813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (37))){
var state_4709__$1 = state_4709;
var statearr_4763_4814 = state_4709__$1;
(statearr_4763_4814[(2)] = null);

(statearr_4763_4814[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4710 === (8))){
var inst_4611 = (state_4709[(8)]);
var inst_4629 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4611);
var state_4709__$1 = state_4709;
var statearr_4764_4815 = state_4709__$1;
(statearr_4764_4815[(2)] = inst_4629);

(statearr_4764_4815[(1)] = (10));


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
});})(c__3724__auto___4769,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__3636__auto__,c__3724__auto___4769,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__3637__auto__ = null;
var cljs$core$async$mix_$_state_machine__3637__auto____0 = (function (){
var statearr_4765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4765[(0)] = cljs$core$async$mix_$_state_machine__3637__auto__);

(statearr_4765[(1)] = (1));

return statearr_4765;
});
var cljs$core$async$mix_$_state_machine__3637__auto____1 = (function (state_4709){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_4709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e4766){if((e4766 instanceof Object)){
var ex__3640__auto__ = e4766;
var statearr_4767_4816 = state_4709;
(statearr_4767_4816[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4817 = state_4709;
state_4709 = G__4817;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__3637__auto__ = function(state_4709){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__3637__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__3637__auto____1.call(this,state_4709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__3637__auto____0;
cljs$core$async$mix_$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__3637__auto____1;
return cljs$core$async$mix_$_state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto___4769,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__3726__auto__ = (function (){var statearr_4768 = f__3725__auto__.call(null);
(statearr_4768[(6)] = c__3724__auto___4769);

return statearr_4768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto___4769,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__4819 = arguments.length;
switch (G__4819) {
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
var G__4823 = arguments.length;
switch (G__4823) {
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
return (function (p1__4821_SHARP_){
if(cljs.core.truth_(p1__4821_SHARP_.call(null,topic))){
return p1__4821_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__4821_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async4824 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4824 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta4825){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta4825 = meta4825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_4826,meta4825__$1){
var self__ = this;
var _4826__$1 = this;
return (new cljs.core.async.t_cljs$core$async4824(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta4825__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_4826){
var self__ = this;
var _4826__$1 = this;
return self__.meta4825;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4824.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4824.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4824.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4824.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4824.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async4824.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4824.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4824.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta4825","meta4825",1745350173,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4824.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4824";

cljs.core.async.t_cljs$core$async4824.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4824");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4824.
 */
cljs.core.async.__GT_t_cljs$core$async4824 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async4824(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4825){
return (new cljs.core.async.t_cljs$core$async4824(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4825));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async4824(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3724__auto___4944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto___4944,mults,ensure_mult,p){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto___4944,mults,ensure_mult,p){
return (function (state_4898){
var state_val_4899 = (state_4898[(1)]);
if((state_val_4899 === (7))){
var inst_4894 = (state_4898[(2)]);
var state_4898__$1 = state_4898;
var statearr_4900_4945 = state_4898__$1;
(statearr_4900_4945[(2)] = inst_4894);

(statearr_4900_4945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4899 === (20))){
var state_4898__$1 = state_4898;
var statearr_4901_4946 = state_4898__$1;
(statearr_4901_4946[(2)] = null);

(statearr_4901_4946[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4899 === (1))){
var state_4898__$1 = state_4898;
var statearr_4902_4947 = state_4898__$1;
(statearr_4902_4947[(2)] = null);

(statearr_4902_4947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4899 === (24))){
var inst_4877 = (state_4898[(7)]);
var inst_4886 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_4877);
var state_4898__$1 = state_4898;
var statearr_4903_4948 = state_4898__$1;
(statearr_4903_4948[(2)] = inst_4886);

(statearr_4903_4948[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4899 === (4))){
var inst_4829 = (state_4898[(8)]);
var inst_4829__$1 = (state_4898[(2)]);
var inst_4830 = (inst_4829__$1 == null);
var state_4898__$1 = (function (){var statearr_4904 = state_4898;
(statearr_4904[(8)] = inst_4829__$1);

return statearr_4904;
})();
if(cljs.core.truth_(inst_4830)){
var statearr_4905_4949 = state_4898__$1;
(statearr_4905_4949[(1)] = (5));

} else {
var statearr_4906_4950 = state_4898__$1;
(statearr_4906_4950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4899 === (15))){
var inst_4871 = (state_4898[(2)]);
var state_4898__$1 = state_4898;
var statearr_4907_4951 = state_4898__$1;
(statearr_4907_4951[(2)] = inst_4871);

(statearr_4907_4951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4899 === (21))){
var inst_4891 = (state_4898[(2)]);
var state_4898__$1 = (function (){var statearr_4908 = state_4898;
(statearr_4908[(9)] = inst_4891);

return statearr_4908;
})();
var statearr_4909_4952 = state_4898__$1;
(statearr_4909_4952[(2)] = null);

(statearr_4909_4952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4899 === (13))){
var inst_4853 = (state_4898[(10)]);
var inst_4855 = cljs.core.chunked_seq_QMARK_.call(null,inst_4853);
var state_4898__$1 = state_4898;
if(inst_4855){
var statearr_4910_4953 = state_4898__$1;
(statearr_4910_4953[(1)] = (16));

} else {
var statearr_4911_4954 = state_4898__$1;
(statearr_4911_4954[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4899 === (22))){
var inst_4883 = (state_4898[(2)]);
var state_4898__$1 = state_4898;
if(cljs.core.truth_(inst_4883)){
var statearr_4912_4955 = state_4898__$1;
(statearr_4912_4955[(1)] = (23));

} else {
var statearr_4913_4956 = state_4898__$1;
(statearr_4913_4956[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4899 === (6))){
var inst_4877 = (state_4898[(7)]);
var inst_4879 = (state_4898[(11)]);
var inst_4829 = (state_4898[(8)]);
var inst_4877__$1 = topic_fn.call(null,inst_4829);
var inst_4878 = cljs.core.deref.call(null,mults);
var inst_4879__$1 = cljs.core.get.call(null,inst_4878,inst_4877__$1);
var state_4898__$1 = (function (){var statearr_4914 = state_4898;
(statearr_4914[(7)] = inst_4877__$1);

(statearr_4914[(11)] = inst_4879__$1);

return statearr_4914;
})();
if(cljs.core.truth_(inst_4879__$1)){
var statearr_4915_4957 = state_4898__$1;
(statearr_4915_4957[(1)] = (19));

} else {
var statearr_4916_4958 = state_4898__$1;
(statearr_4916_4958[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4899 === (25))){
var inst_4888 = (state_4898[(2)]);
var state_4898__$1 = state_4898;
var statearr_4917_4959 = state_4898__$1;
(statearr_4917_4959[(2)] = inst_4888);

(statearr_4917_4959[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4899 === (17))){
var inst_4853 = (state_4898[(10)]);
var inst_4862 = cljs.core.first.call(null,inst_4853);
var inst_4863 = cljs.core.async.muxch_STAR_.call(null,inst_4862);
var inst_4864 = cljs.core.async.close_BANG_.call(null,inst_4863);
var inst_4865 = cljs.core.next.call(null,inst_4853);
var inst_4839 = inst_4865;
var inst_4840 = null;
var inst_4841 = (0);
var inst_4842 = (0);
var state_4898__$1 = (function (){var statearr_4918 = state_4898;
(statearr_4918[(12)] = inst_4841);

(statearr_4918[(13)] = inst_4840);

(statearr_4918[(14)] = inst_4842);

(statearr_4918[(15)] = inst_4839);

(statearr_4918[(16)] = inst_4864);

return statearr_4918;
})();
var statearr_4919_4960 = state_4898__$1;
(statearr_4919_4960[(2)] = null);

(statearr_4919_4960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4899 === (3))){
var inst_4896 = (state_4898[(2)]);
var state_4898__$1 = state_4898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4898__$1,inst_4896);
} else {
if((state_val_4899 === (12))){
var inst_4873 = (state_4898[(2)]);
var state_4898__$1 = state_4898;
var statearr_4920_4961 = state_4898__$1;
(statearr_4920_4961[(2)] = inst_4873);

(statearr_4920_4961[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4899 === (2))){
var state_4898__$1 = state_4898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4898__$1,(4),ch);
} else {
if((state_val_4899 === (23))){
var state_4898__$1 = state_4898;
var statearr_4921_4962 = state_4898__$1;
(statearr_4921_4962[(2)] = null);

(statearr_4921_4962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4899 === (19))){
var inst_4879 = (state_4898[(11)]);
var inst_4829 = (state_4898[(8)]);
var inst_4881 = cljs.core.async.muxch_STAR_.call(null,inst_4879);
var state_4898__$1 = state_4898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4898__$1,(22),inst_4881,inst_4829);
} else {
if((state_val_4899 === (11))){
var inst_4853 = (state_4898[(10)]);
var inst_4839 = (state_4898[(15)]);
var inst_4853__$1 = cljs.core.seq.call(null,inst_4839);
var state_4898__$1 = (function (){var statearr_4922 = state_4898;
(statearr_4922[(10)] = inst_4853__$1);

return statearr_4922;
})();
if(inst_4853__$1){
var statearr_4923_4963 = state_4898__$1;
(statearr_4923_4963[(1)] = (13));

} else {
var statearr_4924_4964 = state_4898__$1;
(statearr_4924_4964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4899 === (9))){
var inst_4875 = (state_4898[(2)]);
var state_4898__$1 = state_4898;
var statearr_4925_4965 = state_4898__$1;
(statearr_4925_4965[(2)] = inst_4875);

(statearr_4925_4965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4899 === (5))){
var inst_4836 = cljs.core.deref.call(null,mults);
var inst_4837 = cljs.core.vals.call(null,inst_4836);
var inst_4838 = cljs.core.seq.call(null,inst_4837);
var inst_4839 = inst_4838;
var inst_4840 = null;
var inst_4841 = (0);
var inst_4842 = (0);
var state_4898__$1 = (function (){var statearr_4926 = state_4898;
(statearr_4926[(12)] = inst_4841);

(statearr_4926[(13)] = inst_4840);

(statearr_4926[(14)] = inst_4842);

(statearr_4926[(15)] = inst_4839);

return statearr_4926;
})();
var statearr_4927_4966 = state_4898__$1;
(statearr_4927_4966[(2)] = null);

(statearr_4927_4966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4899 === (14))){
var state_4898__$1 = state_4898;
var statearr_4931_4967 = state_4898__$1;
(statearr_4931_4967[(2)] = null);

(statearr_4931_4967[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4899 === (16))){
var inst_4853 = (state_4898[(10)]);
var inst_4857 = cljs.core.chunk_first.call(null,inst_4853);
var inst_4858 = cljs.core.chunk_rest.call(null,inst_4853);
var inst_4859 = cljs.core.count.call(null,inst_4857);
var inst_4839 = inst_4858;
var inst_4840 = inst_4857;
var inst_4841 = inst_4859;
var inst_4842 = (0);
var state_4898__$1 = (function (){var statearr_4932 = state_4898;
(statearr_4932[(12)] = inst_4841);

(statearr_4932[(13)] = inst_4840);

(statearr_4932[(14)] = inst_4842);

(statearr_4932[(15)] = inst_4839);

return statearr_4932;
})();
var statearr_4933_4968 = state_4898__$1;
(statearr_4933_4968[(2)] = null);

(statearr_4933_4968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4899 === (10))){
var inst_4841 = (state_4898[(12)]);
var inst_4840 = (state_4898[(13)]);
var inst_4842 = (state_4898[(14)]);
var inst_4839 = (state_4898[(15)]);
var inst_4847 = cljs.core._nth.call(null,inst_4840,inst_4842);
var inst_4848 = cljs.core.async.muxch_STAR_.call(null,inst_4847);
var inst_4849 = cljs.core.async.close_BANG_.call(null,inst_4848);
var inst_4850 = (inst_4842 + (1));
var tmp4928 = inst_4841;
var tmp4929 = inst_4840;
var tmp4930 = inst_4839;
var inst_4839__$1 = tmp4930;
var inst_4840__$1 = tmp4929;
var inst_4841__$1 = tmp4928;
var inst_4842__$1 = inst_4850;
var state_4898__$1 = (function (){var statearr_4934 = state_4898;
(statearr_4934[(12)] = inst_4841__$1);

(statearr_4934[(13)] = inst_4840__$1);

(statearr_4934[(14)] = inst_4842__$1);

(statearr_4934[(15)] = inst_4839__$1);

(statearr_4934[(17)] = inst_4849);

return statearr_4934;
})();
var statearr_4935_4969 = state_4898__$1;
(statearr_4935_4969[(2)] = null);

(statearr_4935_4969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4899 === (18))){
var inst_4868 = (state_4898[(2)]);
var state_4898__$1 = state_4898;
var statearr_4936_4970 = state_4898__$1;
(statearr_4936_4970[(2)] = inst_4868);

(statearr_4936_4970[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4899 === (8))){
var inst_4841 = (state_4898[(12)]);
var inst_4842 = (state_4898[(14)]);
var inst_4844 = (inst_4842 < inst_4841);
var inst_4845 = inst_4844;
var state_4898__$1 = state_4898;
if(cljs.core.truth_(inst_4845)){
var statearr_4937_4971 = state_4898__$1;
(statearr_4937_4971[(1)] = (10));

} else {
var statearr_4938_4972 = state_4898__$1;
(statearr_4938_4972[(1)] = (11));

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
});})(c__3724__auto___4944,mults,ensure_mult,p))
;
return ((function (switch__3636__auto__,c__3724__auto___4944,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__3637__auto__ = null;
var cljs$core$async$state_machine__3637__auto____0 = (function (){
var statearr_4939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4939[(0)] = cljs$core$async$state_machine__3637__auto__);

(statearr_4939[(1)] = (1));

return statearr_4939;
});
var cljs$core$async$state_machine__3637__auto____1 = (function (state_4898){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_4898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e4940){if((e4940 instanceof Object)){
var ex__3640__auto__ = e4940;
var statearr_4941_4973 = state_4898;
(statearr_4941_4973[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4974 = state_4898;
state_4898 = G__4974;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
cljs$core$async$state_machine__3637__auto__ = function(state_4898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3637__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3637__auto____1.call(this,state_4898);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3637__auto____0;
cljs$core$async$state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3637__auto____1;
return cljs$core$async$state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto___4944,mults,ensure_mult,p))
})();
var state__3726__auto__ = (function (){var statearr_4942 = f__3725__auto__.call(null);
(statearr_4942[(6)] = c__3724__auto___4944);

return statearr_4942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto___4944,mults,ensure_mult,p))
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
var G__4976 = arguments.length;
switch (G__4976) {
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
var G__4979 = arguments.length;
switch (G__4979) {
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
var G__4982 = arguments.length;
switch (G__4982) {
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
var c__3724__auto___5049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto___5049,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto___5049,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_5021){
var state_val_5022 = (state_5021[(1)]);
if((state_val_5022 === (7))){
var state_5021__$1 = state_5021;
var statearr_5023_5050 = state_5021__$1;
(statearr_5023_5050[(2)] = null);

(statearr_5023_5050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5022 === (1))){
var state_5021__$1 = state_5021;
var statearr_5024_5051 = state_5021__$1;
(statearr_5024_5051[(2)] = null);

(statearr_5024_5051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5022 === (4))){
var inst_4985 = (state_5021[(7)]);
var inst_4987 = (inst_4985 < cnt);
var state_5021__$1 = state_5021;
if(cljs.core.truth_(inst_4987)){
var statearr_5025_5052 = state_5021__$1;
(statearr_5025_5052[(1)] = (6));

} else {
var statearr_5026_5053 = state_5021__$1;
(statearr_5026_5053[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5022 === (15))){
var inst_5017 = (state_5021[(2)]);
var state_5021__$1 = state_5021;
var statearr_5027_5054 = state_5021__$1;
(statearr_5027_5054[(2)] = inst_5017);

(statearr_5027_5054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5022 === (13))){
var inst_5010 = cljs.core.async.close_BANG_.call(null,out);
var state_5021__$1 = state_5021;
var statearr_5028_5055 = state_5021__$1;
(statearr_5028_5055[(2)] = inst_5010);

(statearr_5028_5055[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5022 === (6))){
var state_5021__$1 = state_5021;
var statearr_5029_5056 = state_5021__$1;
(statearr_5029_5056[(2)] = null);

(statearr_5029_5056[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5022 === (3))){
var inst_5019 = (state_5021[(2)]);
var state_5021__$1 = state_5021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5021__$1,inst_5019);
} else {
if((state_val_5022 === (12))){
var inst_5007 = (state_5021[(8)]);
var inst_5007__$1 = (state_5021[(2)]);
var inst_5008 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_5007__$1);
var state_5021__$1 = (function (){var statearr_5030 = state_5021;
(statearr_5030[(8)] = inst_5007__$1);

return statearr_5030;
})();
if(cljs.core.truth_(inst_5008)){
var statearr_5031_5057 = state_5021__$1;
(statearr_5031_5057[(1)] = (13));

} else {
var statearr_5032_5058 = state_5021__$1;
(statearr_5032_5058[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5022 === (2))){
var inst_4984 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_4985 = (0);
var state_5021__$1 = (function (){var statearr_5033 = state_5021;
(statearr_5033[(9)] = inst_4984);

(statearr_5033[(7)] = inst_4985);

return statearr_5033;
})();
var statearr_5034_5059 = state_5021__$1;
(statearr_5034_5059[(2)] = null);

(statearr_5034_5059[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5022 === (11))){
var inst_4985 = (state_5021[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_5021,(10),Object,null,(9));
var inst_4994 = chs__$1.call(null,inst_4985);
var inst_4995 = done.call(null,inst_4985);
var inst_4996 = cljs.core.async.take_BANG_.call(null,inst_4994,inst_4995);
var state_5021__$1 = state_5021;
var statearr_5035_5060 = state_5021__$1;
(statearr_5035_5060[(2)] = inst_4996);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5021__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5022 === (9))){
var inst_4985 = (state_5021[(7)]);
var inst_4998 = (state_5021[(2)]);
var inst_4999 = (inst_4985 + (1));
var inst_4985__$1 = inst_4999;
var state_5021__$1 = (function (){var statearr_5036 = state_5021;
(statearr_5036[(10)] = inst_4998);

(statearr_5036[(7)] = inst_4985__$1);

return statearr_5036;
})();
var statearr_5037_5061 = state_5021__$1;
(statearr_5037_5061[(2)] = null);

(statearr_5037_5061[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5022 === (5))){
var inst_5005 = (state_5021[(2)]);
var state_5021__$1 = (function (){var statearr_5038 = state_5021;
(statearr_5038[(11)] = inst_5005);

return statearr_5038;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5021__$1,(12),dchan);
} else {
if((state_val_5022 === (14))){
var inst_5007 = (state_5021[(8)]);
var inst_5012 = cljs.core.apply.call(null,f,inst_5007);
var state_5021__$1 = state_5021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5021__$1,(16),out,inst_5012);
} else {
if((state_val_5022 === (16))){
var inst_5014 = (state_5021[(2)]);
var state_5021__$1 = (function (){var statearr_5039 = state_5021;
(statearr_5039[(12)] = inst_5014);

return statearr_5039;
})();
var statearr_5040_5062 = state_5021__$1;
(statearr_5040_5062[(2)] = null);

(statearr_5040_5062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5022 === (10))){
var inst_4989 = (state_5021[(2)]);
var inst_4990 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_5021__$1 = (function (){var statearr_5041 = state_5021;
(statearr_5041[(13)] = inst_4989);

return statearr_5041;
})();
var statearr_5042_5063 = state_5021__$1;
(statearr_5042_5063[(2)] = inst_4990);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5021__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5022 === (8))){
var inst_5003 = (state_5021[(2)]);
var state_5021__$1 = state_5021;
var statearr_5043_5064 = state_5021__$1;
(statearr_5043_5064[(2)] = inst_5003);

(statearr_5043_5064[(1)] = (5));


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
});})(c__3724__auto___5049,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__3636__auto__,c__3724__auto___5049,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__3637__auto__ = null;
var cljs$core$async$state_machine__3637__auto____0 = (function (){
var statearr_5044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5044[(0)] = cljs$core$async$state_machine__3637__auto__);

(statearr_5044[(1)] = (1));

return statearr_5044;
});
var cljs$core$async$state_machine__3637__auto____1 = (function (state_5021){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_5021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e5045){if((e5045 instanceof Object)){
var ex__3640__auto__ = e5045;
var statearr_5046_5065 = state_5021;
(statearr_5046_5065[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5066 = state_5021;
state_5021 = G__5066;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
cljs$core$async$state_machine__3637__auto__ = function(state_5021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3637__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3637__auto____1.call(this,state_5021);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3637__auto____0;
cljs$core$async$state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3637__auto____1;
return cljs$core$async$state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto___5049,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__3726__auto__ = (function (){var statearr_5047 = f__3725__auto__.call(null);
(statearr_5047[(6)] = c__3724__auto___5049);

return statearr_5047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto___5049,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__5069 = arguments.length;
switch (G__5069) {
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
var c__3724__auto___5123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto___5123,out){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto___5123,out){
return (function (state_5101){
var state_val_5102 = (state_5101[(1)]);
if((state_val_5102 === (7))){
var inst_5080 = (state_5101[(7)]);
var inst_5081 = (state_5101[(8)]);
var inst_5080__$1 = (state_5101[(2)]);
var inst_5081__$1 = cljs.core.nth.call(null,inst_5080__$1,(0),null);
var inst_5082 = cljs.core.nth.call(null,inst_5080__$1,(1),null);
var inst_5083 = (inst_5081__$1 == null);
var state_5101__$1 = (function (){var statearr_5103 = state_5101;
(statearr_5103[(7)] = inst_5080__$1);

(statearr_5103[(9)] = inst_5082);

(statearr_5103[(8)] = inst_5081__$1);

return statearr_5103;
})();
if(cljs.core.truth_(inst_5083)){
var statearr_5104_5124 = state_5101__$1;
(statearr_5104_5124[(1)] = (8));

} else {
var statearr_5105_5125 = state_5101__$1;
(statearr_5105_5125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5102 === (1))){
var inst_5070 = cljs.core.vec.call(null,chs);
var inst_5071 = inst_5070;
var state_5101__$1 = (function (){var statearr_5106 = state_5101;
(statearr_5106[(10)] = inst_5071);

return statearr_5106;
})();
var statearr_5107_5126 = state_5101__$1;
(statearr_5107_5126[(2)] = null);

(statearr_5107_5126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5102 === (4))){
var inst_5071 = (state_5101[(10)]);
var state_5101__$1 = state_5101;
return cljs.core.async.ioc_alts_BANG_.call(null,state_5101__$1,(7),inst_5071);
} else {
if((state_val_5102 === (6))){
var inst_5097 = (state_5101[(2)]);
var state_5101__$1 = state_5101;
var statearr_5108_5127 = state_5101__$1;
(statearr_5108_5127[(2)] = inst_5097);

(statearr_5108_5127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5102 === (3))){
var inst_5099 = (state_5101[(2)]);
var state_5101__$1 = state_5101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5101__$1,inst_5099);
} else {
if((state_val_5102 === (2))){
var inst_5071 = (state_5101[(10)]);
var inst_5073 = cljs.core.count.call(null,inst_5071);
var inst_5074 = (inst_5073 > (0));
var state_5101__$1 = state_5101;
if(cljs.core.truth_(inst_5074)){
var statearr_5110_5128 = state_5101__$1;
(statearr_5110_5128[(1)] = (4));

} else {
var statearr_5111_5129 = state_5101__$1;
(statearr_5111_5129[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5102 === (11))){
var inst_5071 = (state_5101[(10)]);
var inst_5090 = (state_5101[(2)]);
var tmp5109 = inst_5071;
var inst_5071__$1 = tmp5109;
var state_5101__$1 = (function (){var statearr_5112 = state_5101;
(statearr_5112[(10)] = inst_5071__$1);

(statearr_5112[(11)] = inst_5090);

return statearr_5112;
})();
var statearr_5113_5130 = state_5101__$1;
(statearr_5113_5130[(2)] = null);

(statearr_5113_5130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5102 === (9))){
var inst_5081 = (state_5101[(8)]);
var state_5101__$1 = state_5101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5101__$1,(11),out,inst_5081);
} else {
if((state_val_5102 === (5))){
var inst_5095 = cljs.core.async.close_BANG_.call(null,out);
var state_5101__$1 = state_5101;
var statearr_5114_5131 = state_5101__$1;
(statearr_5114_5131[(2)] = inst_5095);

(statearr_5114_5131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5102 === (10))){
var inst_5093 = (state_5101[(2)]);
var state_5101__$1 = state_5101;
var statearr_5115_5132 = state_5101__$1;
(statearr_5115_5132[(2)] = inst_5093);

(statearr_5115_5132[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5102 === (8))){
var inst_5071 = (state_5101[(10)]);
var inst_5080 = (state_5101[(7)]);
var inst_5082 = (state_5101[(9)]);
var inst_5081 = (state_5101[(8)]);
var inst_5085 = (function (){var cs = inst_5071;
var vec__5076 = inst_5080;
var v = inst_5081;
var c = inst_5082;
return ((function (cs,vec__5076,v,c,inst_5071,inst_5080,inst_5082,inst_5081,state_val_5102,c__3724__auto___5123,out){
return (function (p1__5067_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__5067_SHARP_);
});
;})(cs,vec__5076,v,c,inst_5071,inst_5080,inst_5082,inst_5081,state_val_5102,c__3724__auto___5123,out))
})();
var inst_5086 = cljs.core.filterv.call(null,inst_5085,inst_5071);
var inst_5071__$1 = inst_5086;
var state_5101__$1 = (function (){var statearr_5116 = state_5101;
(statearr_5116[(10)] = inst_5071__$1);

return statearr_5116;
})();
var statearr_5117_5133 = state_5101__$1;
(statearr_5117_5133[(2)] = null);

(statearr_5117_5133[(1)] = (2));


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
});})(c__3724__auto___5123,out))
;
return ((function (switch__3636__auto__,c__3724__auto___5123,out){
return (function() {
var cljs$core$async$state_machine__3637__auto__ = null;
var cljs$core$async$state_machine__3637__auto____0 = (function (){
var statearr_5118 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5118[(0)] = cljs$core$async$state_machine__3637__auto__);

(statearr_5118[(1)] = (1));

return statearr_5118;
});
var cljs$core$async$state_machine__3637__auto____1 = (function (state_5101){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_5101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e5119){if((e5119 instanceof Object)){
var ex__3640__auto__ = e5119;
var statearr_5120_5134 = state_5101;
(statearr_5120_5134[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5135 = state_5101;
state_5101 = G__5135;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
cljs$core$async$state_machine__3637__auto__ = function(state_5101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3637__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3637__auto____1.call(this,state_5101);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3637__auto____0;
cljs$core$async$state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3637__auto____1;
return cljs$core$async$state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto___5123,out))
})();
var state__3726__auto__ = (function (){var statearr_5121 = f__3725__auto__.call(null);
(statearr_5121[(6)] = c__3724__auto___5123);

return statearr_5121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto___5123,out))
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
var G__5137 = arguments.length;
switch (G__5137) {
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
var c__3724__auto___5182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto___5182,out){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto___5182,out){
return (function (state_5161){
var state_val_5162 = (state_5161[(1)]);
if((state_val_5162 === (7))){
var inst_5143 = (state_5161[(7)]);
var inst_5143__$1 = (state_5161[(2)]);
var inst_5144 = (inst_5143__$1 == null);
var inst_5145 = cljs.core.not.call(null,inst_5144);
var state_5161__$1 = (function (){var statearr_5163 = state_5161;
(statearr_5163[(7)] = inst_5143__$1);

return statearr_5163;
})();
if(inst_5145){
var statearr_5164_5183 = state_5161__$1;
(statearr_5164_5183[(1)] = (8));

} else {
var statearr_5165_5184 = state_5161__$1;
(statearr_5165_5184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5162 === (1))){
var inst_5138 = (0);
var state_5161__$1 = (function (){var statearr_5166 = state_5161;
(statearr_5166[(8)] = inst_5138);

return statearr_5166;
})();
var statearr_5167_5185 = state_5161__$1;
(statearr_5167_5185[(2)] = null);

(statearr_5167_5185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5162 === (4))){
var state_5161__$1 = state_5161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5161__$1,(7),ch);
} else {
if((state_val_5162 === (6))){
var inst_5156 = (state_5161[(2)]);
var state_5161__$1 = state_5161;
var statearr_5168_5186 = state_5161__$1;
(statearr_5168_5186[(2)] = inst_5156);

(statearr_5168_5186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5162 === (3))){
var inst_5158 = (state_5161[(2)]);
var inst_5159 = cljs.core.async.close_BANG_.call(null,out);
var state_5161__$1 = (function (){var statearr_5169 = state_5161;
(statearr_5169[(9)] = inst_5158);

return statearr_5169;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5161__$1,inst_5159);
} else {
if((state_val_5162 === (2))){
var inst_5138 = (state_5161[(8)]);
var inst_5140 = (inst_5138 < n);
var state_5161__$1 = state_5161;
if(cljs.core.truth_(inst_5140)){
var statearr_5170_5187 = state_5161__$1;
(statearr_5170_5187[(1)] = (4));

} else {
var statearr_5171_5188 = state_5161__$1;
(statearr_5171_5188[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5162 === (11))){
var inst_5138 = (state_5161[(8)]);
var inst_5148 = (state_5161[(2)]);
var inst_5149 = (inst_5138 + (1));
var inst_5138__$1 = inst_5149;
var state_5161__$1 = (function (){var statearr_5172 = state_5161;
(statearr_5172[(8)] = inst_5138__$1);

(statearr_5172[(10)] = inst_5148);

return statearr_5172;
})();
var statearr_5173_5189 = state_5161__$1;
(statearr_5173_5189[(2)] = null);

(statearr_5173_5189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5162 === (9))){
var state_5161__$1 = state_5161;
var statearr_5174_5190 = state_5161__$1;
(statearr_5174_5190[(2)] = null);

(statearr_5174_5190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5162 === (5))){
var state_5161__$1 = state_5161;
var statearr_5175_5191 = state_5161__$1;
(statearr_5175_5191[(2)] = null);

(statearr_5175_5191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5162 === (10))){
var inst_5153 = (state_5161[(2)]);
var state_5161__$1 = state_5161;
var statearr_5176_5192 = state_5161__$1;
(statearr_5176_5192[(2)] = inst_5153);

(statearr_5176_5192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5162 === (8))){
var inst_5143 = (state_5161[(7)]);
var state_5161__$1 = state_5161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5161__$1,(11),out,inst_5143);
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
});})(c__3724__auto___5182,out))
;
return ((function (switch__3636__auto__,c__3724__auto___5182,out){
return (function() {
var cljs$core$async$state_machine__3637__auto__ = null;
var cljs$core$async$state_machine__3637__auto____0 = (function (){
var statearr_5177 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5177[(0)] = cljs$core$async$state_machine__3637__auto__);

(statearr_5177[(1)] = (1));

return statearr_5177;
});
var cljs$core$async$state_machine__3637__auto____1 = (function (state_5161){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_5161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e5178){if((e5178 instanceof Object)){
var ex__3640__auto__ = e5178;
var statearr_5179_5193 = state_5161;
(statearr_5179_5193[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5194 = state_5161;
state_5161 = G__5194;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
cljs$core$async$state_machine__3637__auto__ = function(state_5161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3637__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3637__auto____1.call(this,state_5161);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3637__auto____0;
cljs$core$async$state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3637__auto____1;
return cljs$core$async$state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto___5182,out))
})();
var state__3726__auto__ = (function (){var statearr_5180 = f__3725__auto__.call(null);
(statearr_5180[(6)] = c__3724__auto___5182);

return statearr_5180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto___5182,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async5196 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5196 = (function (f,ch,meta5197){
this.f = f;
this.ch = ch;
this.meta5197 = meta5197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5198,meta5197__$1){
var self__ = this;
var _5198__$1 = this;
return (new cljs.core.async.t_cljs$core$async5196(self__.f,self__.ch,meta5197__$1));
});

cljs.core.async.t_cljs$core$async5196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5198){
var self__ = this;
var _5198__$1 = this;
return self__.meta5197;
});

cljs.core.async.t_cljs$core$async5196.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5196.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5196.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5196.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5196.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async5199 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5199 = (function (f,ch,meta5197,_,fn1,meta5200){
this.f = f;
this.ch = ch;
this.meta5197 = meta5197;
this._ = _;
this.fn1 = fn1;
this.meta5200 = meta5200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_5201,meta5200__$1){
var self__ = this;
var _5201__$1 = this;
return (new cljs.core.async.t_cljs$core$async5199(self__.f,self__.ch,self__.meta5197,self__._,self__.fn1,meta5200__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async5199.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_5201){
var self__ = this;
var _5201__$1 = this;
return self__.meta5200;
});})(___$1))
;

cljs.core.async.t_cljs$core$async5199.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5199.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async5199.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async5199.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__5195_SHARP_){
return f1.call(null,(((p1__5195_SHARP_ == null))?null:self__.f.call(null,p1__5195_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async5199.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5197","meta5197",30781272,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async5196","cljs.core.async/t_cljs$core$async5196",1420655988,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta5200","meta5200",326849598,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async5199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5199";

cljs.core.async.t_cljs$core$async5199.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async5199");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5199.
 */
cljs.core.async.__GT_t_cljs$core$async5199 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async5199(f__$1,ch__$1,meta5197__$1,___$2,fn1__$1,meta5200){
return (new cljs.core.async.t_cljs$core$async5199(f__$1,ch__$1,meta5197__$1,___$2,fn1__$1,meta5200));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async5199(self__.f,self__.ch,self__.meta5197,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async5196.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5196.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async5196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5197","meta5197",30781272,null)], null);
});

cljs.core.async.t_cljs$core$async5196.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5196";

cljs.core.async.t_cljs$core$async5196.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async5196");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5196.
 */
cljs.core.async.__GT_t_cljs$core$async5196 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async5196(f__$1,ch__$1,meta5197){
return (new cljs.core.async.t_cljs$core$async5196(f__$1,ch__$1,meta5197));
});

}

return (new cljs.core.async.t_cljs$core$async5196(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async5202 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5202 = (function (f,ch,meta5203){
this.f = f;
this.ch = ch;
this.meta5203 = meta5203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5204,meta5203__$1){
var self__ = this;
var _5204__$1 = this;
return (new cljs.core.async.t_cljs$core$async5202(self__.f,self__.ch,meta5203__$1));
});

cljs.core.async.t_cljs$core$async5202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5204){
var self__ = this;
var _5204__$1 = this;
return self__.meta5203;
});

cljs.core.async.t_cljs$core$async5202.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5202.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5202.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5202.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async5202.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5202.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async5202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5203","meta5203",135298143,null)], null);
});

cljs.core.async.t_cljs$core$async5202.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5202";

cljs.core.async.t_cljs$core$async5202.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async5202");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5202.
 */
cljs.core.async.__GT_t_cljs$core$async5202 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async5202(f__$1,ch__$1,meta5203){
return (new cljs.core.async.t_cljs$core$async5202(f__$1,ch__$1,meta5203));
});

}

return (new cljs.core.async.t_cljs$core$async5202(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async5205 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5205 = (function (p,ch,meta5206){
this.p = p;
this.ch = ch;
this.meta5206 = meta5206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5207,meta5206__$1){
var self__ = this;
var _5207__$1 = this;
return (new cljs.core.async.t_cljs$core$async5205(self__.p,self__.ch,meta5206__$1));
});

cljs.core.async.t_cljs$core$async5205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5207){
var self__ = this;
var _5207__$1 = this;
return self__.meta5206;
});

cljs.core.async.t_cljs$core$async5205.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5205.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5205.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5205.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5205.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async5205.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5205.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async5205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5206","meta5206",1416348807,null)], null);
});

cljs.core.async.t_cljs$core$async5205.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5205";

cljs.core.async.t_cljs$core$async5205.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async5205");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5205.
 */
cljs.core.async.__GT_t_cljs$core$async5205 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async5205(p__$1,ch__$1,meta5206){
return (new cljs.core.async.t_cljs$core$async5205(p__$1,ch__$1,meta5206));
});

}

return (new cljs.core.async.t_cljs$core$async5205(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__5209 = arguments.length;
switch (G__5209) {
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
var c__3724__auto___5249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto___5249,out){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto___5249,out){
return (function (state_5230){
var state_val_5231 = (state_5230[(1)]);
if((state_val_5231 === (7))){
var inst_5226 = (state_5230[(2)]);
var state_5230__$1 = state_5230;
var statearr_5232_5250 = state_5230__$1;
(statearr_5232_5250[(2)] = inst_5226);

(statearr_5232_5250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5231 === (1))){
var state_5230__$1 = state_5230;
var statearr_5233_5251 = state_5230__$1;
(statearr_5233_5251[(2)] = null);

(statearr_5233_5251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5231 === (4))){
var inst_5212 = (state_5230[(7)]);
var inst_5212__$1 = (state_5230[(2)]);
var inst_5213 = (inst_5212__$1 == null);
var state_5230__$1 = (function (){var statearr_5234 = state_5230;
(statearr_5234[(7)] = inst_5212__$1);

return statearr_5234;
})();
if(cljs.core.truth_(inst_5213)){
var statearr_5235_5252 = state_5230__$1;
(statearr_5235_5252[(1)] = (5));

} else {
var statearr_5236_5253 = state_5230__$1;
(statearr_5236_5253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5231 === (6))){
var inst_5212 = (state_5230[(7)]);
var inst_5217 = p.call(null,inst_5212);
var state_5230__$1 = state_5230;
if(cljs.core.truth_(inst_5217)){
var statearr_5237_5254 = state_5230__$1;
(statearr_5237_5254[(1)] = (8));

} else {
var statearr_5238_5255 = state_5230__$1;
(statearr_5238_5255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5231 === (3))){
var inst_5228 = (state_5230[(2)]);
var state_5230__$1 = state_5230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5230__$1,inst_5228);
} else {
if((state_val_5231 === (2))){
var state_5230__$1 = state_5230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5230__$1,(4),ch);
} else {
if((state_val_5231 === (11))){
var inst_5220 = (state_5230[(2)]);
var state_5230__$1 = state_5230;
var statearr_5239_5256 = state_5230__$1;
(statearr_5239_5256[(2)] = inst_5220);

(statearr_5239_5256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5231 === (9))){
var state_5230__$1 = state_5230;
var statearr_5240_5257 = state_5230__$1;
(statearr_5240_5257[(2)] = null);

(statearr_5240_5257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5231 === (5))){
var inst_5215 = cljs.core.async.close_BANG_.call(null,out);
var state_5230__$1 = state_5230;
var statearr_5241_5258 = state_5230__$1;
(statearr_5241_5258[(2)] = inst_5215);

(statearr_5241_5258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5231 === (10))){
var inst_5223 = (state_5230[(2)]);
var state_5230__$1 = (function (){var statearr_5242 = state_5230;
(statearr_5242[(8)] = inst_5223);

return statearr_5242;
})();
var statearr_5243_5259 = state_5230__$1;
(statearr_5243_5259[(2)] = null);

(statearr_5243_5259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5231 === (8))){
var inst_5212 = (state_5230[(7)]);
var state_5230__$1 = state_5230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5230__$1,(11),out,inst_5212);
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
});})(c__3724__auto___5249,out))
;
return ((function (switch__3636__auto__,c__3724__auto___5249,out){
return (function() {
var cljs$core$async$state_machine__3637__auto__ = null;
var cljs$core$async$state_machine__3637__auto____0 = (function (){
var statearr_5244 = [null,null,null,null,null,null,null,null,null];
(statearr_5244[(0)] = cljs$core$async$state_machine__3637__auto__);

(statearr_5244[(1)] = (1));

return statearr_5244;
});
var cljs$core$async$state_machine__3637__auto____1 = (function (state_5230){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_5230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e5245){if((e5245 instanceof Object)){
var ex__3640__auto__ = e5245;
var statearr_5246_5260 = state_5230;
(statearr_5246_5260[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5261 = state_5230;
state_5230 = G__5261;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
cljs$core$async$state_machine__3637__auto__ = function(state_5230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3637__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3637__auto____1.call(this,state_5230);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3637__auto____0;
cljs$core$async$state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3637__auto____1;
return cljs$core$async$state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto___5249,out))
})();
var state__3726__auto__ = (function (){var statearr_5247 = f__3725__auto__.call(null);
(statearr_5247[(6)] = c__3724__auto___5249);

return statearr_5247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto___5249,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__5263 = arguments.length;
switch (G__5263) {
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
var c__3724__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto__){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto__){
return (function (state_5326){
var state_val_5327 = (state_5326[(1)]);
if((state_val_5327 === (7))){
var inst_5322 = (state_5326[(2)]);
var state_5326__$1 = state_5326;
var statearr_5328_5366 = state_5326__$1;
(statearr_5328_5366[(2)] = inst_5322);

(statearr_5328_5366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5327 === (20))){
var inst_5292 = (state_5326[(7)]);
var inst_5303 = (state_5326[(2)]);
var inst_5304 = cljs.core.next.call(null,inst_5292);
var inst_5278 = inst_5304;
var inst_5279 = null;
var inst_5280 = (0);
var inst_5281 = (0);
var state_5326__$1 = (function (){var statearr_5329 = state_5326;
(statearr_5329[(8)] = inst_5278);

(statearr_5329[(9)] = inst_5303);

(statearr_5329[(10)] = inst_5279);

(statearr_5329[(11)] = inst_5281);

(statearr_5329[(12)] = inst_5280);

return statearr_5329;
})();
var statearr_5330_5367 = state_5326__$1;
(statearr_5330_5367[(2)] = null);

(statearr_5330_5367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5327 === (1))){
var state_5326__$1 = state_5326;
var statearr_5331_5368 = state_5326__$1;
(statearr_5331_5368[(2)] = null);

(statearr_5331_5368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5327 === (4))){
var inst_5267 = (state_5326[(13)]);
var inst_5267__$1 = (state_5326[(2)]);
var inst_5268 = (inst_5267__$1 == null);
var state_5326__$1 = (function (){var statearr_5332 = state_5326;
(statearr_5332[(13)] = inst_5267__$1);

return statearr_5332;
})();
if(cljs.core.truth_(inst_5268)){
var statearr_5333_5369 = state_5326__$1;
(statearr_5333_5369[(1)] = (5));

} else {
var statearr_5334_5370 = state_5326__$1;
(statearr_5334_5370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5327 === (15))){
var state_5326__$1 = state_5326;
var statearr_5338_5371 = state_5326__$1;
(statearr_5338_5371[(2)] = null);

(statearr_5338_5371[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5327 === (21))){
var state_5326__$1 = state_5326;
var statearr_5339_5372 = state_5326__$1;
(statearr_5339_5372[(2)] = null);

(statearr_5339_5372[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5327 === (13))){
var inst_5278 = (state_5326[(8)]);
var inst_5279 = (state_5326[(10)]);
var inst_5281 = (state_5326[(11)]);
var inst_5280 = (state_5326[(12)]);
var inst_5288 = (state_5326[(2)]);
var inst_5289 = (inst_5281 + (1));
var tmp5335 = inst_5278;
var tmp5336 = inst_5279;
var tmp5337 = inst_5280;
var inst_5278__$1 = tmp5335;
var inst_5279__$1 = tmp5336;
var inst_5280__$1 = tmp5337;
var inst_5281__$1 = inst_5289;
var state_5326__$1 = (function (){var statearr_5340 = state_5326;
(statearr_5340[(8)] = inst_5278__$1);

(statearr_5340[(10)] = inst_5279__$1);

(statearr_5340[(14)] = inst_5288);

(statearr_5340[(11)] = inst_5281__$1);

(statearr_5340[(12)] = inst_5280__$1);

return statearr_5340;
})();
var statearr_5341_5373 = state_5326__$1;
(statearr_5341_5373[(2)] = null);

(statearr_5341_5373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5327 === (22))){
var state_5326__$1 = state_5326;
var statearr_5342_5374 = state_5326__$1;
(statearr_5342_5374[(2)] = null);

(statearr_5342_5374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5327 === (6))){
var inst_5267 = (state_5326[(13)]);
var inst_5276 = f.call(null,inst_5267);
var inst_5277 = cljs.core.seq.call(null,inst_5276);
var inst_5278 = inst_5277;
var inst_5279 = null;
var inst_5280 = (0);
var inst_5281 = (0);
var state_5326__$1 = (function (){var statearr_5343 = state_5326;
(statearr_5343[(8)] = inst_5278);

(statearr_5343[(10)] = inst_5279);

(statearr_5343[(11)] = inst_5281);

(statearr_5343[(12)] = inst_5280);

return statearr_5343;
})();
var statearr_5344_5375 = state_5326__$1;
(statearr_5344_5375[(2)] = null);

(statearr_5344_5375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5327 === (17))){
var inst_5292 = (state_5326[(7)]);
var inst_5296 = cljs.core.chunk_first.call(null,inst_5292);
var inst_5297 = cljs.core.chunk_rest.call(null,inst_5292);
var inst_5298 = cljs.core.count.call(null,inst_5296);
var inst_5278 = inst_5297;
var inst_5279 = inst_5296;
var inst_5280 = inst_5298;
var inst_5281 = (0);
var state_5326__$1 = (function (){var statearr_5345 = state_5326;
(statearr_5345[(8)] = inst_5278);

(statearr_5345[(10)] = inst_5279);

(statearr_5345[(11)] = inst_5281);

(statearr_5345[(12)] = inst_5280);

return statearr_5345;
})();
var statearr_5346_5376 = state_5326__$1;
(statearr_5346_5376[(2)] = null);

(statearr_5346_5376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5327 === (3))){
var inst_5324 = (state_5326[(2)]);
var state_5326__$1 = state_5326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5326__$1,inst_5324);
} else {
if((state_val_5327 === (12))){
var inst_5312 = (state_5326[(2)]);
var state_5326__$1 = state_5326;
var statearr_5347_5377 = state_5326__$1;
(statearr_5347_5377[(2)] = inst_5312);

(statearr_5347_5377[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5327 === (2))){
var state_5326__$1 = state_5326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5326__$1,(4),in$);
} else {
if((state_val_5327 === (23))){
var inst_5320 = (state_5326[(2)]);
var state_5326__$1 = state_5326;
var statearr_5348_5378 = state_5326__$1;
(statearr_5348_5378[(2)] = inst_5320);

(statearr_5348_5378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5327 === (19))){
var inst_5307 = (state_5326[(2)]);
var state_5326__$1 = state_5326;
var statearr_5349_5379 = state_5326__$1;
(statearr_5349_5379[(2)] = inst_5307);

(statearr_5349_5379[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5327 === (11))){
var inst_5278 = (state_5326[(8)]);
var inst_5292 = (state_5326[(7)]);
var inst_5292__$1 = cljs.core.seq.call(null,inst_5278);
var state_5326__$1 = (function (){var statearr_5350 = state_5326;
(statearr_5350[(7)] = inst_5292__$1);

return statearr_5350;
})();
if(inst_5292__$1){
var statearr_5351_5380 = state_5326__$1;
(statearr_5351_5380[(1)] = (14));

} else {
var statearr_5352_5381 = state_5326__$1;
(statearr_5352_5381[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5327 === (9))){
var inst_5314 = (state_5326[(2)]);
var inst_5315 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_5326__$1 = (function (){var statearr_5353 = state_5326;
(statearr_5353[(15)] = inst_5314);

return statearr_5353;
})();
if(cljs.core.truth_(inst_5315)){
var statearr_5354_5382 = state_5326__$1;
(statearr_5354_5382[(1)] = (21));

} else {
var statearr_5355_5383 = state_5326__$1;
(statearr_5355_5383[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5327 === (5))){
var inst_5270 = cljs.core.async.close_BANG_.call(null,out);
var state_5326__$1 = state_5326;
var statearr_5356_5384 = state_5326__$1;
(statearr_5356_5384[(2)] = inst_5270);

(statearr_5356_5384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5327 === (14))){
var inst_5292 = (state_5326[(7)]);
var inst_5294 = cljs.core.chunked_seq_QMARK_.call(null,inst_5292);
var state_5326__$1 = state_5326;
if(inst_5294){
var statearr_5357_5385 = state_5326__$1;
(statearr_5357_5385[(1)] = (17));

} else {
var statearr_5358_5386 = state_5326__$1;
(statearr_5358_5386[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5327 === (16))){
var inst_5310 = (state_5326[(2)]);
var state_5326__$1 = state_5326;
var statearr_5359_5387 = state_5326__$1;
(statearr_5359_5387[(2)] = inst_5310);

(statearr_5359_5387[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5327 === (10))){
var inst_5279 = (state_5326[(10)]);
var inst_5281 = (state_5326[(11)]);
var inst_5286 = cljs.core._nth.call(null,inst_5279,inst_5281);
var state_5326__$1 = state_5326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5326__$1,(13),out,inst_5286);
} else {
if((state_val_5327 === (18))){
var inst_5292 = (state_5326[(7)]);
var inst_5301 = cljs.core.first.call(null,inst_5292);
var state_5326__$1 = state_5326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5326__$1,(20),out,inst_5301);
} else {
if((state_val_5327 === (8))){
var inst_5281 = (state_5326[(11)]);
var inst_5280 = (state_5326[(12)]);
var inst_5283 = (inst_5281 < inst_5280);
var inst_5284 = inst_5283;
var state_5326__$1 = state_5326;
if(cljs.core.truth_(inst_5284)){
var statearr_5360_5388 = state_5326__$1;
(statearr_5360_5388[(1)] = (10));

} else {
var statearr_5361_5389 = state_5326__$1;
(statearr_5361_5389[(1)] = (11));

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
});})(c__3724__auto__))
;
return ((function (switch__3636__auto__,c__3724__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__3637__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__3637__auto____0 = (function (){
var statearr_5362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5362[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__3637__auto__);

(statearr_5362[(1)] = (1));

return statearr_5362;
});
var cljs$core$async$mapcat_STAR__$_state_machine__3637__auto____1 = (function (state_5326){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_5326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e5363){if((e5363 instanceof Object)){
var ex__3640__auto__ = e5363;
var statearr_5364_5390 = state_5326;
(statearr_5364_5390[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5391 = state_5326;
state_5326 = G__5391;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__3637__auto__ = function(state_5326){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__3637__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__3637__auto____1.call(this,state_5326);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__3637__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__3637__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto__))
})();
var state__3726__auto__ = (function (){var statearr_5365 = f__3725__auto__.call(null);
(statearr_5365[(6)] = c__3724__auto__);

return statearr_5365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto__))
);

return c__3724__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__5393 = arguments.length;
switch (G__5393) {
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
var G__5396 = arguments.length;
switch (G__5396) {
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
var G__5399 = arguments.length;
switch (G__5399) {
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
var c__3724__auto___5446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto___5446,out){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto___5446,out){
return (function (state_5423){
var state_val_5424 = (state_5423[(1)]);
if((state_val_5424 === (7))){
var inst_5418 = (state_5423[(2)]);
var state_5423__$1 = state_5423;
var statearr_5425_5447 = state_5423__$1;
(statearr_5425_5447[(2)] = inst_5418);

(statearr_5425_5447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5424 === (1))){
var inst_5400 = null;
var state_5423__$1 = (function (){var statearr_5426 = state_5423;
(statearr_5426[(7)] = inst_5400);

return statearr_5426;
})();
var statearr_5427_5448 = state_5423__$1;
(statearr_5427_5448[(2)] = null);

(statearr_5427_5448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5424 === (4))){
var inst_5403 = (state_5423[(8)]);
var inst_5403__$1 = (state_5423[(2)]);
var inst_5404 = (inst_5403__$1 == null);
var inst_5405 = cljs.core.not.call(null,inst_5404);
var state_5423__$1 = (function (){var statearr_5428 = state_5423;
(statearr_5428[(8)] = inst_5403__$1);

return statearr_5428;
})();
if(inst_5405){
var statearr_5429_5449 = state_5423__$1;
(statearr_5429_5449[(1)] = (5));

} else {
var statearr_5430_5450 = state_5423__$1;
(statearr_5430_5450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5424 === (6))){
var state_5423__$1 = state_5423;
var statearr_5431_5451 = state_5423__$1;
(statearr_5431_5451[(2)] = null);

(statearr_5431_5451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5424 === (3))){
var inst_5420 = (state_5423[(2)]);
var inst_5421 = cljs.core.async.close_BANG_.call(null,out);
var state_5423__$1 = (function (){var statearr_5432 = state_5423;
(statearr_5432[(9)] = inst_5420);

return statearr_5432;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5423__$1,inst_5421);
} else {
if((state_val_5424 === (2))){
var state_5423__$1 = state_5423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5423__$1,(4),ch);
} else {
if((state_val_5424 === (11))){
var inst_5403 = (state_5423[(8)]);
var inst_5412 = (state_5423[(2)]);
var inst_5400 = inst_5403;
var state_5423__$1 = (function (){var statearr_5433 = state_5423;
(statearr_5433[(10)] = inst_5412);

(statearr_5433[(7)] = inst_5400);

return statearr_5433;
})();
var statearr_5434_5452 = state_5423__$1;
(statearr_5434_5452[(2)] = null);

(statearr_5434_5452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5424 === (9))){
var inst_5403 = (state_5423[(8)]);
var state_5423__$1 = state_5423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5423__$1,(11),out,inst_5403);
} else {
if((state_val_5424 === (5))){
var inst_5403 = (state_5423[(8)]);
var inst_5400 = (state_5423[(7)]);
var inst_5407 = cljs.core._EQ_.call(null,inst_5403,inst_5400);
var state_5423__$1 = state_5423;
if(inst_5407){
var statearr_5436_5453 = state_5423__$1;
(statearr_5436_5453[(1)] = (8));

} else {
var statearr_5437_5454 = state_5423__$1;
(statearr_5437_5454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5424 === (10))){
var inst_5415 = (state_5423[(2)]);
var state_5423__$1 = state_5423;
var statearr_5438_5455 = state_5423__$1;
(statearr_5438_5455[(2)] = inst_5415);

(statearr_5438_5455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5424 === (8))){
var inst_5400 = (state_5423[(7)]);
var tmp5435 = inst_5400;
var inst_5400__$1 = tmp5435;
var state_5423__$1 = (function (){var statearr_5439 = state_5423;
(statearr_5439[(7)] = inst_5400__$1);

return statearr_5439;
})();
var statearr_5440_5456 = state_5423__$1;
(statearr_5440_5456[(2)] = null);

(statearr_5440_5456[(1)] = (2));


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
});})(c__3724__auto___5446,out))
;
return ((function (switch__3636__auto__,c__3724__auto___5446,out){
return (function() {
var cljs$core$async$state_machine__3637__auto__ = null;
var cljs$core$async$state_machine__3637__auto____0 = (function (){
var statearr_5441 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5441[(0)] = cljs$core$async$state_machine__3637__auto__);

(statearr_5441[(1)] = (1));

return statearr_5441;
});
var cljs$core$async$state_machine__3637__auto____1 = (function (state_5423){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_5423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e5442){if((e5442 instanceof Object)){
var ex__3640__auto__ = e5442;
var statearr_5443_5457 = state_5423;
(statearr_5443_5457[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5458 = state_5423;
state_5423 = G__5458;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
cljs$core$async$state_machine__3637__auto__ = function(state_5423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3637__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3637__auto____1.call(this,state_5423);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3637__auto____0;
cljs$core$async$state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3637__auto____1;
return cljs$core$async$state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto___5446,out))
})();
var state__3726__auto__ = (function (){var statearr_5444 = f__3725__auto__.call(null);
(statearr_5444[(6)] = c__3724__auto___5446);

return statearr_5444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto___5446,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__5460 = arguments.length;
switch (G__5460) {
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
var c__3724__auto___5526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto___5526,out){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto___5526,out){
return (function (state_5498){
var state_val_5499 = (state_5498[(1)]);
if((state_val_5499 === (7))){
var inst_5494 = (state_5498[(2)]);
var state_5498__$1 = state_5498;
var statearr_5500_5527 = state_5498__$1;
(statearr_5500_5527[(2)] = inst_5494);

(statearr_5500_5527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5499 === (1))){
var inst_5461 = (new Array(n));
var inst_5462 = inst_5461;
var inst_5463 = (0);
var state_5498__$1 = (function (){var statearr_5501 = state_5498;
(statearr_5501[(7)] = inst_5463);

(statearr_5501[(8)] = inst_5462);

return statearr_5501;
})();
var statearr_5502_5528 = state_5498__$1;
(statearr_5502_5528[(2)] = null);

(statearr_5502_5528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5499 === (4))){
var inst_5466 = (state_5498[(9)]);
var inst_5466__$1 = (state_5498[(2)]);
var inst_5467 = (inst_5466__$1 == null);
var inst_5468 = cljs.core.not.call(null,inst_5467);
var state_5498__$1 = (function (){var statearr_5503 = state_5498;
(statearr_5503[(9)] = inst_5466__$1);

return statearr_5503;
})();
if(inst_5468){
var statearr_5504_5529 = state_5498__$1;
(statearr_5504_5529[(1)] = (5));

} else {
var statearr_5505_5530 = state_5498__$1;
(statearr_5505_5530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5499 === (15))){
var inst_5488 = (state_5498[(2)]);
var state_5498__$1 = state_5498;
var statearr_5506_5531 = state_5498__$1;
(statearr_5506_5531[(2)] = inst_5488);

(statearr_5506_5531[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5499 === (13))){
var state_5498__$1 = state_5498;
var statearr_5507_5532 = state_5498__$1;
(statearr_5507_5532[(2)] = null);

(statearr_5507_5532[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5499 === (6))){
var inst_5463 = (state_5498[(7)]);
var inst_5484 = (inst_5463 > (0));
var state_5498__$1 = state_5498;
if(cljs.core.truth_(inst_5484)){
var statearr_5508_5533 = state_5498__$1;
(statearr_5508_5533[(1)] = (12));

} else {
var statearr_5509_5534 = state_5498__$1;
(statearr_5509_5534[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5499 === (3))){
var inst_5496 = (state_5498[(2)]);
var state_5498__$1 = state_5498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5498__$1,inst_5496);
} else {
if((state_val_5499 === (12))){
var inst_5462 = (state_5498[(8)]);
var inst_5486 = cljs.core.vec.call(null,inst_5462);
var state_5498__$1 = state_5498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5498__$1,(15),out,inst_5486);
} else {
if((state_val_5499 === (2))){
var state_5498__$1 = state_5498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5498__$1,(4),ch);
} else {
if((state_val_5499 === (11))){
var inst_5478 = (state_5498[(2)]);
var inst_5479 = (new Array(n));
var inst_5462 = inst_5479;
var inst_5463 = (0);
var state_5498__$1 = (function (){var statearr_5510 = state_5498;
(statearr_5510[(7)] = inst_5463);

(statearr_5510[(8)] = inst_5462);

(statearr_5510[(10)] = inst_5478);

return statearr_5510;
})();
var statearr_5511_5535 = state_5498__$1;
(statearr_5511_5535[(2)] = null);

(statearr_5511_5535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5499 === (9))){
var inst_5462 = (state_5498[(8)]);
var inst_5476 = cljs.core.vec.call(null,inst_5462);
var state_5498__$1 = state_5498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5498__$1,(11),out,inst_5476);
} else {
if((state_val_5499 === (5))){
var inst_5463 = (state_5498[(7)]);
var inst_5471 = (state_5498[(11)]);
var inst_5462 = (state_5498[(8)]);
var inst_5466 = (state_5498[(9)]);
var inst_5470 = (inst_5462[inst_5463] = inst_5466);
var inst_5471__$1 = (inst_5463 + (1));
var inst_5472 = (inst_5471__$1 < n);
var state_5498__$1 = (function (){var statearr_5512 = state_5498;
(statearr_5512[(12)] = inst_5470);

(statearr_5512[(11)] = inst_5471__$1);

return statearr_5512;
})();
if(cljs.core.truth_(inst_5472)){
var statearr_5513_5536 = state_5498__$1;
(statearr_5513_5536[(1)] = (8));

} else {
var statearr_5514_5537 = state_5498__$1;
(statearr_5514_5537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5499 === (14))){
var inst_5491 = (state_5498[(2)]);
var inst_5492 = cljs.core.async.close_BANG_.call(null,out);
var state_5498__$1 = (function (){var statearr_5516 = state_5498;
(statearr_5516[(13)] = inst_5491);

return statearr_5516;
})();
var statearr_5517_5538 = state_5498__$1;
(statearr_5517_5538[(2)] = inst_5492);

(statearr_5517_5538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5499 === (10))){
var inst_5482 = (state_5498[(2)]);
var state_5498__$1 = state_5498;
var statearr_5518_5539 = state_5498__$1;
(statearr_5518_5539[(2)] = inst_5482);

(statearr_5518_5539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5499 === (8))){
var inst_5471 = (state_5498[(11)]);
var inst_5462 = (state_5498[(8)]);
var tmp5515 = inst_5462;
var inst_5462__$1 = tmp5515;
var inst_5463 = inst_5471;
var state_5498__$1 = (function (){var statearr_5519 = state_5498;
(statearr_5519[(7)] = inst_5463);

(statearr_5519[(8)] = inst_5462__$1);

return statearr_5519;
})();
var statearr_5520_5540 = state_5498__$1;
(statearr_5520_5540[(2)] = null);

(statearr_5520_5540[(1)] = (2));


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
});})(c__3724__auto___5526,out))
;
return ((function (switch__3636__auto__,c__3724__auto___5526,out){
return (function() {
var cljs$core$async$state_machine__3637__auto__ = null;
var cljs$core$async$state_machine__3637__auto____0 = (function (){
var statearr_5521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5521[(0)] = cljs$core$async$state_machine__3637__auto__);

(statearr_5521[(1)] = (1));

return statearr_5521;
});
var cljs$core$async$state_machine__3637__auto____1 = (function (state_5498){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_5498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e5522){if((e5522 instanceof Object)){
var ex__3640__auto__ = e5522;
var statearr_5523_5541 = state_5498;
(statearr_5523_5541[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5542 = state_5498;
state_5498 = G__5542;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
cljs$core$async$state_machine__3637__auto__ = function(state_5498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3637__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3637__auto____1.call(this,state_5498);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3637__auto____0;
cljs$core$async$state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3637__auto____1;
return cljs$core$async$state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto___5526,out))
})();
var state__3726__auto__ = (function (){var statearr_5524 = f__3725__auto__.call(null);
(statearr_5524[(6)] = c__3724__auto___5526);

return statearr_5524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto___5526,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__5544 = arguments.length;
switch (G__5544) {
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
var c__3724__auto___5614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3724__auto___5614,out){
return (function (){
var f__3725__auto__ = (function (){var switch__3636__auto__ = ((function (c__3724__auto___5614,out){
return (function (state_5586){
var state_val_5587 = (state_5586[(1)]);
if((state_val_5587 === (7))){
var inst_5582 = (state_5586[(2)]);
var state_5586__$1 = state_5586;
var statearr_5588_5615 = state_5586__$1;
(statearr_5588_5615[(2)] = inst_5582);

(statearr_5588_5615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5587 === (1))){
var inst_5545 = [];
var inst_5546 = inst_5545;
var inst_5547 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_5586__$1 = (function (){var statearr_5589 = state_5586;
(statearr_5589[(7)] = inst_5546);

(statearr_5589[(8)] = inst_5547);

return statearr_5589;
})();
var statearr_5590_5616 = state_5586__$1;
(statearr_5590_5616[(2)] = null);

(statearr_5590_5616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5587 === (4))){
var inst_5550 = (state_5586[(9)]);
var inst_5550__$1 = (state_5586[(2)]);
var inst_5551 = (inst_5550__$1 == null);
var inst_5552 = cljs.core.not.call(null,inst_5551);
var state_5586__$1 = (function (){var statearr_5591 = state_5586;
(statearr_5591[(9)] = inst_5550__$1);

return statearr_5591;
})();
if(inst_5552){
var statearr_5592_5617 = state_5586__$1;
(statearr_5592_5617[(1)] = (5));

} else {
var statearr_5593_5618 = state_5586__$1;
(statearr_5593_5618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5587 === (15))){
var inst_5576 = (state_5586[(2)]);
var state_5586__$1 = state_5586;
var statearr_5594_5619 = state_5586__$1;
(statearr_5594_5619[(2)] = inst_5576);

(statearr_5594_5619[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5587 === (13))){
var state_5586__$1 = state_5586;
var statearr_5595_5620 = state_5586__$1;
(statearr_5595_5620[(2)] = null);

(statearr_5595_5620[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5587 === (6))){
var inst_5546 = (state_5586[(7)]);
var inst_5571 = inst_5546.length;
var inst_5572 = (inst_5571 > (0));
var state_5586__$1 = state_5586;
if(cljs.core.truth_(inst_5572)){
var statearr_5596_5621 = state_5586__$1;
(statearr_5596_5621[(1)] = (12));

} else {
var statearr_5597_5622 = state_5586__$1;
(statearr_5597_5622[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5587 === (3))){
var inst_5584 = (state_5586[(2)]);
var state_5586__$1 = state_5586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5586__$1,inst_5584);
} else {
if((state_val_5587 === (12))){
var inst_5546 = (state_5586[(7)]);
var inst_5574 = cljs.core.vec.call(null,inst_5546);
var state_5586__$1 = state_5586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5586__$1,(15),out,inst_5574);
} else {
if((state_val_5587 === (2))){
var state_5586__$1 = state_5586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5586__$1,(4),ch);
} else {
if((state_val_5587 === (11))){
var inst_5550 = (state_5586[(9)]);
var inst_5554 = (state_5586[(10)]);
var inst_5564 = (state_5586[(2)]);
var inst_5565 = [];
var inst_5566 = inst_5565.push(inst_5550);
var inst_5546 = inst_5565;
var inst_5547 = inst_5554;
var state_5586__$1 = (function (){var statearr_5598 = state_5586;
(statearr_5598[(7)] = inst_5546);

(statearr_5598[(11)] = inst_5566);

(statearr_5598[(12)] = inst_5564);

(statearr_5598[(8)] = inst_5547);

return statearr_5598;
})();
var statearr_5599_5623 = state_5586__$1;
(statearr_5599_5623[(2)] = null);

(statearr_5599_5623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5587 === (9))){
var inst_5546 = (state_5586[(7)]);
var inst_5562 = cljs.core.vec.call(null,inst_5546);
var state_5586__$1 = state_5586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5586__$1,(11),out,inst_5562);
} else {
if((state_val_5587 === (5))){
var inst_5550 = (state_5586[(9)]);
var inst_5554 = (state_5586[(10)]);
var inst_5547 = (state_5586[(8)]);
var inst_5554__$1 = f.call(null,inst_5550);
var inst_5555 = cljs.core._EQ_.call(null,inst_5554__$1,inst_5547);
var inst_5556 = cljs.core.keyword_identical_QMARK_.call(null,inst_5547,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_5557 = ((inst_5555) || (inst_5556));
var state_5586__$1 = (function (){var statearr_5600 = state_5586;
(statearr_5600[(10)] = inst_5554__$1);

return statearr_5600;
})();
if(cljs.core.truth_(inst_5557)){
var statearr_5601_5624 = state_5586__$1;
(statearr_5601_5624[(1)] = (8));

} else {
var statearr_5602_5625 = state_5586__$1;
(statearr_5602_5625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5587 === (14))){
var inst_5579 = (state_5586[(2)]);
var inst_5580 = cljs.core.async.close_BANG_.call(null,out);
var state_5586__$1 = (function (){var statearr_5604 = state_5586;
(statearr_5604[(13)] = inst_5579);

return statearr_5604;
})();
var statearr_5605_5626 = state_5586__$1;
(statearr_5605_5626[(2)] = inst_5580);

(statearr_5605_5626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5587 === (10))){
var inst_5569 = (state_5586[(2)]);
var state_5586__$1 = state_5586;
var statearr_5606_5627 = state_5586__$1;
(statearr_5606_5627[(2)] = inst_5569);

(statearr_5606_5627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5587 === (8))){
var inst_5546 = (state_5586[(7)]);
var inst_5550 = (state_5586[(9)]);
var inst_5554 = (state_5586[(10)]);
var inst_5559 = inst_5546.push(inst_5550);
var tmp5603 = inst_5546;
var inst_5546__$1 = tmp5603;
var inst_5547 = inst_5554;
var state_5586__$1 = (function (){var statearr_5607 = state_5586;
(statearr_5607[(7)] = inst_5546__$1);

(statearr_5607[(14)] = inst_5559);

(statearr_5607[(8)] = inst_5547);

return statearr_5607;
})();
var statearr_5608_5628 = state_5586__$1;
(statearr_5608_5628[(2)] = null);

(statearr_5608_5628[(1)] = (2));


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
});})(c__3724__auto___5614,out))
;
return ((function (switch__3636__auto__,c__3724__auto___5614,out){
return (function() {
var cljs$core$async$state_machine__3637__auto__ = null;
var cljs$core$async$state_machine__3637__auto____0 = (function (){
var statearr_5609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5609[(0)] = cljs$core$async$state_machine__3637__auto__);

(statearr_5609[(1)] = (1));

return statearr_5609;
});
var cljs$core$async$state_machine__3637__auto____1 = (function (state_5586){
while(true){
var ret_value__3638__auto__ = (function (){try{while(true){
var result__3639__auto__ = switch__3636__auto__.call(null,state_5586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3639__auto__;
}
break;
}
}catch (e5610){if((e5610 instanceof Object)){
var ex__3640__auto__ = e5610;
var statearr_5611_5629 = state_5586;
(statearr_5611_5629[(5)] = ex__3640__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5630 = state_5586;
state_5586 = G__5630;
continue;
} else {
return ret_value__3638__auto__;
}
break;
}
});
cljs$core$async$state_machine__3637__auto__ = function(state_5586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3637__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3637__auto____1.call(this,state_5586);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3637__auto____0;
cljs$core$async$state_machine__3637__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3637__auto____1;
return cljs$core$async$state_machine__3637__auto__;
})()
;})(switch__3636__auto__,c__3724__auto___5614,out))
})();
var state__3726__auto__ = (function (){var statearr_5612 = f__3725__auto__.call(null);
(statearr_5612[(6)] = c__3724__auto___5614);

return statearr_5612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3726__auto__);
});})(c__3724__auto___5614,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1534957228676
