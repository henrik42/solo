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
var G__22063 = arguments.length;
switch (G__22063) {
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
if(typeof cljs.core.async.t_cljs$core$async22064 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22064 = (function (f,blockable,meta22065){
this.f = f;
this.blockable = blockable;
this.meta22065 = meta22065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22066,meta22065__$1){
var self__ = this;
var _22066__$1 = this;
return (new cljs.core.async.t_cljs$core$async22064(self__.f,self__.blockable,meta22065__$1));
});

cljs.core.async.t_cljs$core$async22064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22066){
var self__ = this;
var _22066__$1 = this;
return self__.meta22065;
});

cljs.core.async.t_cljs$core$async22064.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22064.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22064.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22064.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22065","meta22065",1089277571,null)], null);
});

cljs.core.async.t_cljs$core$async22064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22064";

cljs.core.async.t_cljs$core$async22064.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22064");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22064.
 */
cljs.core.async.__GT_t_cljs$core$async22064 = (function cljs$core$async$__GT_t_cljs$core$async22064(f__$1,blockable__$1,meta22065){
return (new cljs.core.async.t_cljs$core$async22064(f__$1,blockable__$1,meta22065));
});

}

return (new cljs.core.async.t_cljs$core$async22064(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__22070 = arguments.length;
switch (G__22070) {
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
var G__22073 = arguments.length;
switch (G__22073) {
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
var G__22076 = arguments.length;
switch (G__22076) {
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
var val_22078 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22078);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22078,ret){
return (function (){
return fn1.call(null,val_22078);
});})(val_22078,ret))
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
var G__22080 = arguments.length;
switch (G__22080) {
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
var n__4376__auto___22082 = n;
var x_22083 = (0);
while(true){
if((x_22083 < n__4376__auto___22082)){
(a[x_22083] = (0));

var G__22084 = (x_22083 + (1));
x_22083 = G__22084;
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

var G__22085 = (i + (1));
i = G__22085;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22086 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22086 = (function (flag,meta22087){
this.flag = flag;
this.meta22087 = meta22087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22088,meta22087__$1){
var self__ = this;
var _22088__$1 = this;
return (new cljs.core.async.t_cljs$core$async22086(self__.flag,meta22087__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22086.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22088){
var self__ = this;
var _22088__$1 = this;
return self__.meta22087;
});})(flag))
;

cljs.core.async.t_cljs$core$async22086.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22086.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22086.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22086.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22086.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22087","meta22087",434657454,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22086.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22086";

cljs.core.async.t_cljs$core$async22086.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22086");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22086.
 */
cljs.core.async.__GT_t_cljs$core$async22086 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22086(flag__$1,meta22087){
return (new cljs.core.async.t_cljs$core$async22086(flag__$1,meta22087));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22086(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22089 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22089 = (function (flag,cb,meta22090){
this.flag = flag;
this.cb = cb;
this.meta22090 = meta22090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22091,meta22090__$1){
var self__ = this;
var _22091__$1 = this;
return (new cljs.core.async.t_cljs$core$async22089(self__.flag,self__.cb,meta22090__$1));
});

cljs.core.async.t_cljs$core$async22089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22091){
var self__ = this;
var _22091__$1 = this;
return self__.meta22090;
});

cljs.core.async.t_cljs$core$async22089.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22089.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22089.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22089.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22090","meta22090",-365138327,null)], null);
});

cljs.core.async.t_cljs$core$async22089.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22089";

cljs.core.async.t_cljs$core$async22089.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22089");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22089.
 */
cljs.core.async.__GT_t_cljs$core$async22089 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22089(flag__$1,cb__$1,meta22090){
return (new cljs.core.async.t_cljs$core$async22089(flag__$1,cb__$1,meta22090));
});

}

return (new cljs.core.async.t_cljs$core$async22089(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22092_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22092_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22093_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22093_SHARP_,port], null));
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
var G__22094 = (i + (1));
i = G__22094;
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
var len__4499__auto___22100 = arguments.length;
var i__4500__auto___22101 = (0);
while(true){
if((i__4500__auto___22101 < len__4499__auto___22100)){
args__4502__auto__.push((arguments[i__4500__auto___22101]));

var G__22102 = (i__4500__auto___22101 + (1));
i__4500__auto___22101 = G__22102;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22097){
var map__22098 = p__22097;
var map__22098__$1 = ((((!((map__22098 == null)))?(((((map__22098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22098):map__22098);
var opts = map__22098__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22095){
var G__22096 = cljs.core.first.call(null,seq22095);
var seq22095__$1 = cljs.core.next.call(null,seq22095);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22096,seq22095__$1);
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
var G__22104 = arguments.length;
switch (G__22104) {
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
var c__22017__auto___22150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto___22150){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto___22150){
return (function (state_22128){
var state_val_22129 = (state_22128[(1)]);
if((state_val_22129 === (7))){
var inst_22124 = (state_22128[(2)]);
var state_22128__$1 = state_22128;
var statearr_22130_22151 = state_22128__$1;
(statearr_22130_22151[(2)] = inst_22124);

(statearr_22130_22151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (1))){
var state_22128__$1 = state_22128;
var statearr_22131_22152 = state_22128__$1;
(statearr_22131_22152[(2)] = null);

(statearr_22131_22152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (4))){
var inst_22107 = (state_22128[(7)]);
var inst_22107__$1 = (state_22128[(2)]);
var inst_22108 = (inst_22107__$1 == null);
var state_22128__$1 = (function (){var statearr_22132 = state_22128;
(statearr_22132[(7)] = inst_22107__$1);

return statearr_22132;
})();
if(cljs.core.truth_(inst_22108)){
var statearr_22133_22153 = state_22128__$1;
(statearr_22133_22153[(1)] = (5));

} else {
var statearr_22134_22154 = state_22128__$1;
(statearr_22134_22154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (13))){
var state_22128__$1 = state_22128;
var statearr_22135_22155 = state_22128__$1;
(statearr_22135_22155[(2)] = null);

(statearr_22135_22155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (6))){
var inst_22107 = (state_22128[(7)]);
var state_22128__$1 = state_22128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22128__$1,(11),to,inst_22107);
} else {
if((state_val_22129 === (3))){
var inst_22126 = (state_22128[(2)]);
var state_22128__$1 = state_22128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22128__$1,inst_22126);
} else {
if((state_val_22129 === (12))){
var state_22128__$1 = state_22128;
var statearr_22136_22156 = state_22128__$1;
(statearr_22136_22156[(2)] = null);

(statearr_22136_22156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (2))){
var state_22128__$1 = state_22128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22128__$1,(4),from);
} else {
if((state_val_22129 === (11))){
var inst_22117 = (state_22128[(2)]);
var state_22128__$1 = state_22128;
if(cljs.core.truth_(inst_22117)){
var statearr_22137_22157 = state_22128__$1;
(statearr_22137_22157[(1)] = (12));

} else {
var statearr_22138_22158 = state_22128__$1;
(statearr_22138_22158[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (9))){
var state_22128__$1 = state_22128;
var statearr_22139_22159 = state_22128__$1;
(statearr_22139_22159[(2)] = null);

(statearr_22139_22159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (5))){
var state_22128__$1 = state_22128;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22140_22160 = state_22128__$1;
(statearr_22140_22160[(1)] = (8));

} else {
var statearr_22141_22161 = state_22128__$1;
(statearr_22141_22161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (14))){
var inst_22122 = (state_22128[(2)]);
var state_22128__$1 = state_22128;
var statearr_22142_22162 = state_22128__$1;
(statearr_22142_22162[(2)] = inst_22122);

(statearr_22142_22162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (10))){
var inst_22114 = (state_22128[(2)]);
var state_22128__$1 = state_22128;
var statearr_22143_22163 = state_22128__$1;
(statearr_22143_22163[(2)] = inst_22114);

(statearr_22143_22163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (8))){
var inst_22111 = cljs.core.async.close_BANG_.call(null,to);
var state_22128__$1 = state_22128;
var statearr_22144_22164 = state_22128__$1;
(statearr_22144_22164[(2)] = inst_22111);

(statearr_22144_22164[(1)] = (10));


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
});})(c__22017__auto___22150))
;
return ((function (switch__21929__auto__,c__22017__auto___22150){
return (function() {
var cljs$core$async$state_machine__21930__auto__ = null;
var cljs$core$async$state_machine__21930__auto____0 = (function (){
var statearr_22145 = [null,null,null,null,null,null,null,null];
(statearr_22145[(0)] = cljs$core$async$state_machine__21930__auto__);

(statearr_22145[(1)] = (1));

return statearr_22145;
});
var cljs$core$async$state_machine__21930__auto____1 = (function (state_22128){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_22128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e22146){if((e22146 instanceof Object)){
var ex__21933__auto__ = e22146;
var statearr_22147_22165 = state_22128;
(statearr_22147_22165[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22166 = state_22128;
state_22128 = G__22166;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
cljs$core$async$state_machine__21930__auto__ = function(state_22128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21930__auto____1.call(this,state_22128);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21930__auto____0;
cljs$core$async$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21930__auto____1;
return cljs$core$async$state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto___22150))
})();
var state__22019__auto__ = (function (){var statearr_22148 = f__22018__auto__.call(null);
(statearr_22148[(6)] = c__22017__auto___22150);

return statearr_22148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto___22150))
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
return (function (p__22167){
var vec__22168 = p__22167;
var v = cljs.core.nth.call(null,vec__22168,(0),null);
var p = cljs.core.nth.call(null,vec__22168,(1),null);
var job = vec__22168;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22017__auto___22339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto___22339,res,vec__22168,v,p,job,jobs,results){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto___22339,res,vec__22168,v,p,job,jobs,results){
return (function (state_22175){
var state_val_22176 = (state_22175[(1)]);
if((state_val_22176 === (1))){
var state_22175__$1 = state_22175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22175__$1,(2),res,v);
} else {
if((state_val_22176 === (2))){
var inst_22172 = (state_22175[(2)]);
var inst_22173 = cljs.core.async.close_BANG_.call(null,res);
var state_22175__$1 = (function (){var statearr_22177 = state_22175;
(statearr_22177[(7)] = inst_22172);

return statearr_22177;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22175__$1,inst_22173);
} else {
return null;
}
}
});})(c__22017__auto___22339,res,vec__22168,v,p,job,jobs,results))
;
return ((function (switch__21929__auto__,c__22017__auto___22339,res,vec__22168,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____0 = (function (){
var statearr_22178 = [null,null,null,null,null,null,null,null];
(statearr_22178[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__);

(statearr_22178[(1)] = (1));

return statearr_22178;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____1 = (function (state_22175){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_22175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e22179){if((e22179 instanceof Object)){
var ex__21933__auto__ = e22179;
var statearr_22180_22340 = state_22175;
(statearr_22180_22340[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22341 = state_22175;
state_22175 = G__22341;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__ = function(state_22175){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____1.call(this,state_22175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto___22339,res,vec__22168,v,p,job,jobs,results))
})();
var state__22019__auto__ = (function (){var statearr_22181 = f__22018__auto__.call(null);
(statearr_22181[(6)] = c__22017__auto___22339);

return statearr_22181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto___22339,res,vec__22168,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22182){
var vec__22183 = p__22182;
var v = cljs.core.nth.call(null,vec__22183,(0),null);
var p = cljs.core.nth.call(null,vec__22183,(1),null);
var job = vec__22183;
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
var n__4376__auto___22342 = n;
var __22343 = (0);
while(true){
if((__22343 < n__4376__auto___22342)){
var G__22186_22344 = type;
var G__22186_22345__$1 = (((G__22186_22344 instanceof cljs.core.Keyword))?G__22186_22344.fqn:null);
switch (G__22186_22345__$1) {
case "compute":
var c__22017__auto___22347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22343,c__22017__auto___22347,G__22186_22344,G__22186_22345__$1,n__4376__auto___22342,jobs,results,process,async){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (__22343,c__22017__auto___22347,G__22186_22344,G__22186_22345__$1,n__4376__auto___22342,jobs,results,process,async){
return (function (state_22199){
var state_val_22200 = (state_22199[(1)]);
if((state_val_22200 === (1))){
var state_22199__$1 = state_22199;
var statearr_22201_22348 = state_22199__$1;
(statearr_22201_22348[(2)] = null);

(statearr_22201_22348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22200 === (2))){
var state_22199__$1 = state_22199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22199__$1,(4),jobs);
} else {
if((state_val_22200 === (3))){
var inst_22197 = (state_22199[(2)]);
var state_22199__$1 = state_22199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22199__$1,inst_22197);
} else {
if((state_val_22200 === (4))){
var inst_22189 = (state_22199[(2)]);
var inst_22190 = process.call(null,inst_22189);
var state_22199__$1 = state_22199;
if(cljs.core.truth_(inst_22190)){
var statearr_22202_22349 = state_22199__$1;
(statearr_22202_22349[(1)] = (5));

} else {
var statearr_22203_22350 = state_22199__$1;
(statearr_22203_22350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22200 === (5))){
var state_22199__$1 = state_22199;
var statearr_22204_22351 = state_22199__$1;
(statearr_22204_22351[(2)] = null);

(statearr_22204_22351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22200 === (6))){
var state_22199__$1 = state_22199;
var statearr_22205_22352 = state_22199__$1;
(statearr_22205_22352[(2)] = null);

(statearr_22205_22352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22200 === (7))){
var inst_22195 = (state_22199[(2)]);
var state_22199__$1 = state_22199;
var statearr_22206_22353 = state_22199__$1;
(statearr_22206_22353[(2)] = inst_22195);

(statearr_22206_22353[(1)] = (3));


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
});})(__22343,c__22017__auto___22347,G__22186_22344,G__22186_22345__$1,n__4376__auto___22342,jobs,results,process,async))
;
return ((function (__22343,switch__21929__auto__,c__22017__auto___22347,G__22186_22344,G__22186_22345__$1,n__4376__auto___22342,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____0 = (function (){
var statearr_22207 = [null,null,null,null,null,null,null];
(statearr_22207[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__);

(statearr_22207[(1)] = (1));

return statearr_22207;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____1 = (function (state_22199){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_22199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e22208){if((e22208 instanceof Object)){
var ex__21933__auto__ = e22208;
var statearr_22209_22354 = state_22199;
(statearr_22209_22354[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22355 = state_22199;
state_22199 = G__22355;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__ = function(state_22199){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____1.call(this,state_22199);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__;
})()
;})(__22343,switch__21929__auto__,c__22017__auto___22347,G__22186_22344,G__22186_22345__$1,n__4376__auto___22342,jobs,results,process,async))
})();
var state__22019__auto__ = (function (){var statearr_22210 = f__22018__auto__.call(null);
(statearr_22210[(6)] = c__22017__auto___22347);

return statearr_22210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(__22343,c__22017__auto___22347,G__22186_22344,G__22186_22345__$1,n__4376__auto___22342,jobs,results,process,async))
);


break;
case "async":
var c__22017__auto___22356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22343,c__22017__auto___22356,G__22186_22344,G__22186_22345__$1,n__4376__auto___22342,jobs,results,process,async){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (__22343,c__22017__auto___22356,G__22186_22344,G__22186_22345__$1,n__4376__auto___22342,jobs,results,process,async){
return (function (state_22223){
var state_val_22224 = (state_22223[(1)]);
if((state_val_22224 === (1))){
var state_22223__$1 = state_22223;
var statearr_22225_22357 = state_22223__$1;
(statearr_22225_22357[(2)] = null);

(statearr_22225_22357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22224 === (2))){
var state_22223__$1 = state_22223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22223__$1,(4),jobs);
} else {
if((state_val_22224 === (3))){
var inst_22221 = (state_22223[(2)]);
var state_22223__$1 = state_22223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22223__$1,inst_22221);
} else {
if((state_val_22224 === (4))){
var inst_22213 = (state_22223[(2)]);
var inst_22214 = async.call(null,inst_22213);
var state_22223__$1 = state_22223;
if(cljs.core.truth_(inst_22214)){
var statearr_22226_22358 = state_22223__$1;
(statearr_22226_22358[(1)] = (5));

} else {
var statearr_22227_22359 = state_22223__$1;
(statearr_22227_22359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22224 === (5))){
var state_22223__$1 = state_22223;
var statearr_22228_22360 = state_22223__$1;
(statearr_22228_22360[(2)] = null);

(statearr_22228_22360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22224 === (6))){
var state_22223__$1 = state_22223;
var statearr_22229_22361 = state_22223__$1;
(statearr_22229_22361[(2)] = null);

(statearr_22229_22361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22224 === (7))){
var inst_22219 = (state_22223[(2)]);
var state_22223__$1 = state_22223;
var statearr_22230_22362 = state_22223__$1;
(statearr_22230_22362[(2)] = inst_22219);

(statearr_22230_22362[(1)] = (3));


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
});})(__22343,c__22017__auto___22356,G__22186_22344,G__22186_22345__$1,n__4376__auto___22342,jobs,results,process,async))
;
return ((function (__22343,switch__21929__auto__,c__22017__auto___22356,G__22186_22344,G__22186_22345__$1,n__4376__auto___22342,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____0 = (function (){
var statearr_22231 = [null,null,null,null,null,null,null];
(statearr_22231[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__);

(statearr_22231[(1)] = (1));

return statearr_22231;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____1 = (function (state_22223){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_22223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e22232){if((e22232 instanceof Object)){
var ex__21933__auto__ = e22232;
var statearr_22233_22363 = state_22223;
(statearr_22233_22363[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22364 = state_22223;
state_22223 = G__22364;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__ = function(state_22223){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____1.call(this,state_22223);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__;
})()
;})(__22343,switch__21929__auto__,c__22017__auto___22356,G__22186_22344,G__22186_22345__$1,n__4376__auto___22342,jobs,results,process,async))
})();
var state__22019__auto__ = (function (){var statearr_22234 = f__22018__auto__.call(null);
(statearr_22234[(6)] = c__22017__auto___22356);

return statearr_22234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(__22343,c__22017__auto___22356,G__22186_22344,G__22186_22345__$1,n__4376__auto___22342,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22186_22345__$1)].join('')));

}

var G__22365 = (__22343 + (1));
__22343 = G__22365;
continue;
} else {
}
break;
}

var c__22017__auto___22366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto___22366,jobs,results,process,async){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto___22366,jobs,results,process,async){
return (function (state_22256){
var state_val_22257 = (state_22256[(1)]);
if((state_val_22257 === (1))){
var state_22256__$1 = state_22256;
var statearr_22258_22367 = state_22256__$1;
(statearr_22258_22367[(2)] = null);

(statearr_22258_22367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (2))){
var state_22256__$1 = state_22256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22256__$1,(4),from);
} else {
if((state_val_22257 === (3))){
var inst_22254 = (state_22256[(2)]);
var state_22256__$1 = state_22256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22256__$1,inst_22254);
} else {
if((state_val_22257 === (4))){
var inst_22237 = (state_22256[(7)]);
var inst_22237__$1 = (state_22256[(2)]);
var inst_22238 = (inst_22237__$1 == null);
var state_22256__$1 = (function (){var statearr_22259 = state_22256;
(statearr_22259[(7)] = inst_22237__$1);

return statearr_22259;
})();
if(cljs.core.truth_(inst_22238)){
var statearr_22260_22368 = state_22256__$1;
(statearr_22260_22368[(1)] = (5));

} else {
var statearr_22261_22369 = state_22256__$1;
(statearr_22261_22369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (5))){
var inst_22240 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22256__$1 = state_22256;
var statearr_22262_22370 = state_22256__$1;
(statearr_22262_22370[(2)] = inst_22240);

(statearr_22262_22370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (6))){
var inst_22237 = (state_22256[(7)]);
var inst_22242 = (state_22256[(8)]);
var inst_22242__$1 = cljs.core.async.chan.call(null,(1));
var inst_22243 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22244 = [inst_22237,inst_22242__$1];
var inst_22245 = (new cljs.core.PersistentVector(null,2,(5),inst_22243,inst_22244,null));
var state_22256__$1 = (function (){var statearr_22263 = state_22256;
(statearr_22263[(8)] = inst_22242__$1);

return statearr_22263;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22256__$1,(8),jobs,inst_22245);
} else {
if((state_val_22257 === (7))){
var inst_22252 = (state_22256[(2)]);
var state_22256__$1 = state_22256;
var statearr_22264_22371 = state_22256__$1;
(statearr_22264_22371[(2)] = inst_22252);

(statearr_22264_22371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (8))){
var inst_22242 = (state_22256[(8)]);
var inst_22247 = (state_22256[(2)]);
var state_22256__$1 = (function (){var statearr_22265 = state_22256;
(statearr_22265[(9)] = inst_22247);

return statearr_22265;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22256__$1,(9),results,inst_22242);
} else {
if((state_val_22257 === (9))){
var inst_22249 = (state_22256[(2)]);
var state_22256__$1 = (function (){var statearr_22266 = state_22256;
(statearr_22266[(10)] = inst_22249);

return statearr_22266;
})();
var statearr_22267_22372 = state_22256__$1;
(statearr_22267_22372[(2)] = null);

(statearr_22267_22372[(1)] = (2));


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
});})(c__22017__auto___22366,jobs,results,process,async))
;
return ((function (switch__21929__auto__,c__22017__auto___22366,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____0 = (function (){
var statearr_22268 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22268[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__);

(statearr_22268[(1)] = (1));

return statearr_22268;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____1 = (function (state_22256){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_22256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e22269){if((e22269 instanceof Object)){
var ex__21933__auto__ = e22269;
var statearr_22270_22373 = state_22256;
(statearr_22270_22373[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22374 = state_22256;
state_22256 = G__22374;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__ = function(state_22256){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____1.call(this,state_22256);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto___22366,jobs,results,process,async))
})();
var state__22019__auto__ = (function (){var statearr_22271 = f__22018__auto__.call(null);
(statearr_22271[(6)] = c__22017__auto___22366);

return statearr_22271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto___22366,jobs,results,process,async))
);


var c__22017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto__,jobs,results,process,async){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto__,jobs,results,process,async){
return (function (state_22309){
var state_val_22310 = (state_22309[(1)]);
if((state_val_22310 === (7))){
var inst_22305 = (state_22309[(2)]);
var state_22309__$1 = state_22309;
var statearr_22311_22375 = state_22309__$1;
(statearr_22311_22375[(2)] = inst_22305);

(statearr_22311_22375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (20))){
var state_22309__$1 = state_22309;
var statearr_22312_22376 = state_22309__$1;
(statearr_22312_22376[(2)] = null);

(statearr_22312_22376[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (1))){
var state_22309__$1 = state_22309;
var statearr_22313_22377 = state_22309__$1;
(statearr_22313_22377[(2)] = null);

(statearr_22313_22377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (4))){
var inst_22274 = (state_22309[(7)]);
var inst_22274__$1 = (state_22309[(2)]);
var inst_22275 = (inst_22274__$1 == null);
var state_22309__$1 = (function (){var statearr_22314 = state_22309;
(statearr_22314[(7)] = inst_22274__$1);

return statearr_22314;
})();
if(cljs.core.truth_(inst_22275)){
var statearr_22315_22378 = state_22309__$1;
(statearr_22315_22378[(1)] = (5));

} else {
var statearr_22316_22379 = state_22309__$1;
(statearr_22316_22379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (15))){
var inst_22287 = (state_22309[(8)]);
var state_22309__$1 = state_22309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22309__$1,(18),to,inst_22287);
} else {
if((state_val_22310 === (21))){
var inst_22300 = (state_22309[(2)]);
var state_22309__$1 = state_22309;
var statearr_22317_22380 = state_22309__$1;
(statearr_22317_22380[(2)] = inst_22300);

(statearr_22317_22380[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (13))){
var inst_22302 = (state_22309[(2)]);
var state_22309__$1 = (function (){var statearr_22318 = state_22309;
(statearr_22318[(9)] = inst_22302);

return statearr_22318;
})();
var statearr_22319_22381 = state_22309__$1;
(statearr_22319_22381[(2)] = null);

(statearr_22319_22381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (6))){
var inst_22274 = (state_22309[(7)]);
var state_22309__$1 = state_22309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22309__$1,(11),inst_22274);
} else {
if((state_val_22310 === (17))){
var inst_22295 = (state_22309[(2)]);
var state_22309__$1 = state_22309;
if(cljs.core.truth_(inst_22295)){
var statearr_22320_22382 = state_22309__$1;
(statearr_22320_22382[(1)] = (19));

} else {
var statearr_22321_22383 = state_22309__$1;
(statearr_22321_22383[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (3))){
var inst_22307 = (state_22309[(2)]);
var state_22309__$1 = state_22309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22309__$1,inst_22307);
} else {
if((state_val_22310 === (12))){
var inst_22284 = (state_22309[(10)]);
var state_22309__$1 = state_22309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22309__$1,(14),inst_22284);
} else {
if((state_val_22310 === (2))){
var state_22309__$1 = state_22309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22309__$1,(4),results);
} else {
if((state_val_22310 === (19))){
var state_22309__$1 = state_22309;
var statearr_22322_22384 = state_22309__$1;
(statearr_22322_22384[(2)] = null);

(statearr_22322_22384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (11))){
var inst_22284 = (state_22309[(2)]);
var state_22309__$1 = (function (){var statearr_22323 = state_22309;
(statearr_22323[(10)] = inst_22284);

return statearr_22323;
})();
var statearr_22324_22385 = state_22309__$1;
(statearr_22324_22385[(2)] = null);

(statearr_22324_22385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (9))){
var state_22309__$1 = state_22309;
var statearr_22325_22386 = state_22309__$1;
(statearr_22325_22386[(2)] = null);

(statearr_22325_22386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (5))){
var state_22309__$1 = state_22309;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22326_22387 = state_22309__$1;
(statearr_22326_22387[(1)] = (8));

} else {
var statearr_22327_22388 = state_22309__$1;
(statearr_22327_22388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (14))){
var inst_22287 = (state_22309[(8)]);
var inst_22289 = (state_22309[(11)]);
var inst_22287__$1 = (state_22309[(2)]);
var inst_22288 = (inst_22287__$1 == null);
var inst_22289__$1 = cljs.core.not.call(null,inst_22288);
var state_22309__$1 = (function (){var statearr_22328 = state_22309;
(statearr_22328[(8)] = inst_22287__$1);

(statearr_22328[(11)] = inst_22289__$1);

return statearr_22328;
})();
if(inst_22289__$1){
var statearr_22329_22389 = state_22309__$1;
(statearr_22329_22389[(1)] = (15));

} else {
var statearr_22330_22390 = state_22309__$1;
(statearr_22330_22390[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (16))){
var inst_22289 = (state_22309[(11)]);
var state_22309__$1 = state_22309;
var statearr_22331_22391 = state_22309__$1;
(statearr_22331_22391[(2)] = inst_22289);

(statearr_22331_22391[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (10))){
var inst_22281 = (state_22309[(2)]);
var state_22309__$1 = state_22309;
var statearr_22332_22392 = state_22309__$1;
(statearr_22332_22392[(2)] = inst_22281);

(statearr_22332_22392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (18))){
var inst_22292 = (state_22309[(2)]);
var state_22309__$1 = state_22309;
var statearr_22333_22393 = state_22309__$1;
(statearr_22333_22393[(2)] = inst_22292);

(statearr_22333_22393[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (8))){
var inst_22278 = cljs.core.async.close_BANG_.call(null,to);
var state_22309__$1 = state_22309;
var statearr_22334_22394 = state_22309__$1;
(statearr_22334_22394[(2)] = inst_22278);

(statearr_22334_22394[(1)] = (10));


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
});})(c__22017__auto__,jobs,results,process,async))
;
return ((function (switch__21929__auto__,c__22017__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____0 = (function (){
var statearr_22335 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22335[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__);

(statearr_22335[(1)] = (1));

return statearr_22335;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____1 = (function (state_22309){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_22309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e22336){if((e22336 instanceof Object)){
var ex__21933__auto__ = e22336;
var statearr_22337_22395 = state_22309;
(statearr_22337_22395[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22396 = state_22309;
state_22309 = G__22396;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__ = function(state_22309){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____1.call(this,state_22309);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto__,jobs,results,process,async))
})();
var state__22019__auto__ = (function (){var statearr_22338 = f__22018__auto__.call(null);
(statearr_22338[(6)] = c__22017__auto__);

return statearr_22338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto__,jobs,results,process,async))
);

return c__22017__auto__;
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
var G__22398 = arguments.length;
switch (G__22398) {
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
var G__22401 = arguments.length;
switch (G__22401) {
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
var G__22404 = arguments.length;
switch (G__22404) {
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
var c__22017__auto___22453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto___22453,tc,fc){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto___22453,tc,fc){
return (function (state_22430){
var state_val_22431 = (state_22430[(1)]);
if((state_val_22431 === (7))){
var inst_22426 = (state_22430[(2)]);
var state_22430__$1 = state_22430;
var statearr_22432_22454 = state_22430__$1;
(statearr_22432_22454[(2)] = inst_22426);

(statearr_22432_22454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22431 === (1))){
var state_22430__$1 = state_22430;
var statearr_22433_22455 = state_22430__$1;
(statearr_22433_22455[(2)] = null);

(statearr_22433_22455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22431 === (4))){
var inst_22407 = (state_22430[(7)]);
var inst_22407__$1 = (state_22430[(2)]);
var inst_22408 = (inst_22407__$1 == null);
var state_22430__$1 = (function (){var statearr_22434 = state_22430;
(statearr_22434[(7)] = inst_22407__$1);

return statearr_22434;
})();
if(cljs.core.truth_(inst_22408)){
var statearr_22435_22456 = state_22430__$1;
(statearr_22435_22456[(1)] = (5));

} else {
var statearr_22436_22457 = state_22430__$1;
(statearr_22436_22457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22431 === (13))){
var state_22430__$1 = state_22430;
var statearr_22437_22458 = state_22430__$1;
(statearr_22437_22458[(2)] = null);

(statearr_22437_22458[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22431 === (6))){
var inst_22407 = (state_22430[(7)]);
var inst_22413 = p.call(null,inst_22407);
var state_22430__$1 = state_22430;
if(cljs.core.truth_(inst_22413)){
var statearr_22438_22459 = state_22430__$1;
(statearr_22438_22459[(1)] = (9));

} else {
var statearr_22439_22460 = state_22430__$1;
(statearr_22439_22460[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22431 === (3))){
var inst_22428 = (state_22430[(2)]);
var state_22430__$1 = state_22430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22430__$1,inst_22428);
} else {
if((state_val_22431 === (12))){
var state_22430__$1 = state_22430;
var statearr_22440_22461 = state_22430__$1;
(statearr_22440_22461[(2)] = null);

(statearr_22440_22461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22431 === (2))){
var state_22430__$1 = state_22430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22430__$1,(4),ch);
} else {
if((state_val_22431 === (11))){
var inst_22407 = (state_22430[(7)]);
var inst_22417 = (state_22430[(2)]);
var state_22430__$1 = state_22430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22430__$1,(8),inst_22417,inst_22407);
} else {
if((state_val_22431 === (9))){
var state_22430__$1 = state_22430;
var statearr_22441_22462 = state_22430__$1;
(statearr_22441_22462[(2)] = tc);

(statearr_22441_22462[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22431 === (5))){
var inst_22410 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22411 = cljs.core.async.close_BANG_.call(null,fc);
var state_22430__$1 = (function (){var statearr_22442 = state_22430;
(statearr_22442[(8)] = inst_22410);

return statearr_22442;
})();
var statearr_22443_22463 = state_22430__$1;
(statearr_22443_22463[(2)] = inst_22411);

(statearr_22443_22463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22431 === (14))){
var inst_22424 = (state_22430[(2)]);
var state_22430__$1 = state_22430;
var statearr_22444_22464 = state_22430__$1;
(statearr_22444_22464[(2)] = inst_22424);

(statearr_22444_22464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22431 === (10))){
var state_22430__$1 = state_22430;
var statearr_22445_22465 = state_22430__$1;
(statearr_22445_22465[(2)] = fc);

(statearr_22445_22465[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22431 === (8))){
var inst_22419 = (state_22430[(2)]);
var state_22430__$1 = state_22430;
if(cljs.core.truth_(inst_22419)){
var statearr_22446_22466 = state_22430__$1;
(statearr_22446_22466[(1)] = (12));

} else {
var statearr_22447_22467 = state_22430__$1;
(statearr_22447_22467[(1)] = (13));

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
});})(c__22017__auto___22453,tc,fc))
;
return ((function (switch__21929__auto__,c__22017__auto___22453,tc,fc){
return (function() {
var cljs$core$async$state_machine__21930__auto__ = null;
var cljs$core$async$state_machine__21930__auto____0 = (function (){
var statearr_22448 = [null,null,null,null,null,null,null,null,null];
(statearr_22448[(0)] = cljs$core$async$state_machine__21930__auto__);

(statearr_22448[(1)] = (1));

return statearr_22448;
});
var cljs$core$async$state_machine__21930__auto____1 = (function (state_22430){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_22430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e22449){if((e22449 instanceof Object)){
var ex__21933__auto__ = e22449;
var statearr_22450_22468 = state_22430;
(statearr_22450_22468[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22469 = state_22430;
state_22430 = G__22469;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
cljs$core$async$state_machine__21930__auto__ = function(state_22430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21930__auto____1.call(this,state_22430);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21930__auto____0;
cljs$core$async$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21930__auto____1;
return cljs$core$async$state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto___22453,tc,fc))
})();
var state__22019__auto__ = (function (){var statearr_22451 = f__22018__auto__.call(null);
(statearr_22451[(6)] = c__22017__auto___22453);

return statearr_22451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto___22453,tc,fc))
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
var c__22017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto__){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto__){
return (function (state_22490){
var state_val_22491 = (state_22490[(1)]);
if((state_val_22491 === (7))){
var inst_22486 = (state_22490[(2)]);
var state_22490__$1 = state_22490;
var statearr_22492_22510 = state_22490__$1;
(statearr_22492_22510[(2)] = inst_22486);

(statearr_22492_22510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22491 === (1))){
var inst_22470 = init;
var state_22490__$1 = (function (){var statearr_22493 = state_22490;
(statearr_22493[(7)] = inst_22470);

return statearr_22493;
})();
var statearr_22494_22511 = state_22490__$1;
(statearr_22494_22511[(2)] = null);

(statearr_22494_22511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22491 === (4))){
var inst_22473 = (state_22490[(8)]);
var inst_22473__$1 = (state_22490[(2)]);
var inst_22474 = (inst_22473__$1 == null);
var state_22490__$1 = (function (){var statearr_22495 = state_22490;
(statearr_22495[(8)] = inst_22473__$1);

return statearr_22495;
})();
if(cljs.core.truth_(inst_22474)){
var statearr_22496_22512 = state_22490__$1;
(statearr_22496_22512[(1)] = (5));

} else {
var statearr_22497_22513 = state_22490__$1;
(statearr_22497_22513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22491 === (6))){
var inst_22477 = (state_22490[(9)]);
var inst_22473 = (state_22490[(8)]);
var inst_22470 = (state_22490[(7)]);
var inst_22477__$1 = f.call(null,inst_22470,inst_22473);
var inst_22478 = cljs.core.reduced_QMARK_.call(null,inst_22477__$1);
var state_22490__$1 = (function (){var statearr_22498 = state_22490;
(statearr_22498[(9)] = inst_22477__$1);

return statearr_22498;
})();
if(inst_22478){
var statearr_22499_22514 = state_22490__$1;
(statearr_22499_22514[(1)] = (8));

} else {
var statearr_22500_22515 = state_22490__$1;
(statearr_22500_22515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22491 === (3))){
var inst_22488 = (state_22490[(2)]);
var state_22490__$1 = state_22490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22490__$1,inst_22488);
} else {
if((state_val_22491 === (2))){
var state_22490__$1 = state_22490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22490__$1,(4),ch);
} else {
if((state_val_22491 === (9))){
var inst_22477 = (state_22490[(9)]);
var inst_22470 = inst_22477;
var state_22490__$1 = (function (){var statearr_22501 = state_22490;
(statearr_22501[(7)] = inst_22470);

return statearr_22501;
})();
var statearr_22502_22516 = state_22490__$1;
(statearr_22502_22516[(2)] = null);

(statearr_22502_22516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22491 === (5))){
var inst_22470 = (state_22490[(7)]);
var state_22490__$1 = state_22490;
var statearr_22503_22517 = state_22490__$1;
(statearr_22503_22517[(2)] = inst_22470);

(statearr_22503_22517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22491 === (10))){
var inst_22484 = (state_22490[(2)]);
var state_22490__$1 = state_22490;
var statearr_22504_22518 = state_22490__$1;
(statearr_22504_22518[(2)] = inst_22484);

(statearr_22504_22518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22491 === (8))){
var inst_22477 = (state_22490[(9)]);
var inst_22480 = cljs.core.deref.call(null,inst_22477);
var state_22490__$1 = state_22490;
var statearr_22505_22519 = state_22490__$1;
(statearr_22505_22519[(2)] = inst_22480);

(statearr_22505_22519[(1)] = (10));


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
});})(c__22017__auto__))
;
return ((function (switch__21929__auto__,c__22017__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21930__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21930__auto____0 = (function (){
var statearr_22506 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22506[(0)] = cljs$core$async$reduce_$_state_machine__21930__auto__);

(statearr_22506[(1)] = (1));

return statearr_22506;
});
var cljs$core$async$reduce_$_state_machine__21930__auto____1 = (function (state_22490){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_22490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e22507){if((e22507 instanceof Object)){
var ex__21933__auto__ = e22507;
var statearr_22508_22520 = state_22490;
(statearr_22508_22520[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22521 = state_22490;
state_22490 = G__22521;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21930__auto__ = function(state_22490){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21930__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21930__auto____1.call(this,state_22490);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21930__auto____0;
cljs$core$async$reduce_$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21930__auto____1;
return cljs$core$async$reduce_$_state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto__))
})();
var state__22019__auto__ = (function (){var statearr_22509 = f__22018__auto__.call(null);
(statearr_22509[(6)] = c__22017__auto__);

return statearr_22509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto__))
);

return c__22017__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__22017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto__,f__$1){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto__,f__$1){
return (function (state_22527){
var state_val_22528 = (state_22527[(1)]);
if((state_val_22528 === (1))){
var inst_22522 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_22527__$1 = state_22527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22527__$1,(2),inst_22522);
} else {
if((state_val_22528 === (2))){
var inst_22524 = (state_22527[(2)]);
var inst_22525 = f__$1.call(null,inst_22524);
var state_22527__$1 = state_22527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22527__$1,inst_22525);
} else {
return null;
}
}
});})(c__22017__auto__,f__$1))
;
return ((function (switch__21929__auto__,c__22017__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__21930__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21930__auto____0 = (function (){
var statearr_22529 = [null,null,null,null,null,null,null];
(statearr_22529[(0)] = cljs$core$async$transduce_$_state_machine__21930__auto__);

(statearr_22529[(1)] = (1));

return statearr_22529;
});
var cljs$core$async$transduce_$_state_machine__21930__auto____1 = (function (state_22527){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_22527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e22530){if((e22530 instanceof Object)){
var ex__21933__auto__ = e22530;
var statearr_22531_22533 = state_22527;
(statearr_22531_22533[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22534 = state_22527;
state_22527 = G__22534;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21930__auto__ = function(state_22527){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21930__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21930__auto____1.call(this,state_22527);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21930__auto____0;
cljs$core$async$transduce_$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21930__auto____1;
return cljs$core$async$transduce_$_state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto__,f__$1))
})();
var state__22019__auto__ = (function (){var statearr_22532 = f__22018__auto__.call(null);
(statearr_22532[(6)] = c__22017__auto__);

return statearr_22532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto__,f__$1))
);

return c__22017__auto__;
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
var G__22536 = arguments.length;
switch (G__22536) {
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
var c__22017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto__){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto__){
return (function (state_22561){
var state_val_22562 = (state_22561[(1)]);
if((state_val_22562 === (7))){
var inst_22543 = (state_22561[(2)]);
var state_22561__$1 = state_22561;
var statearr_22563_22584 = state_22561__$1;
(statearr_22563_22584[(2)] = inst_22543);

(statearr_22563_22584[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22562 === (1))){
var inst_22537 = cljs.core.seq.call(null,coll);
var inst_22538 = inst_22537;
var state_22561__$1 = (function (){var statearr_22564 = state_22561;
(statearr_22564[(7)] = inst_22538);

return statearr_22564;
})();
var statearr_22565_22585 = state_22561__$1;
(statearr_22565_22585[(2)] = null);

(statearr_22565_22585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22562 === (4))){
var inst_22538 = (state_22561[(7)]);
var inst_22541 = cljs.core.first.call(null,inst_22538);
var state_22561__$1 = state_22561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22561__$1,(7),ch,inst_22541);
} else {
if((state_val_22562 === (13))){
var inst_22555 = (state_22561[(2)]);
var state_22561__$1 = state_22561;
var statearr_22566_22586 = state_22561__$1;
(statearr_22566_22586[(2)] = inst_22555);

(statearr_22566_22586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22562 === (6))){
var inst_22546 = (state_22561[(2)]);
var state_22561__$1 = state_22561;
if(cljs.core.truth_(inst_22546)){
var statearr_22567_22587 = state_22561__$1;
(statearr_22567_22587[(1)] = (8));

} else {
var statearr_22568_22588 = state_22561__$1;
(statearr_22568_22588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22562 === (3))){
var inst_22559 = (state_22561[(2)]);
var state_22561__$1 = state_22561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22561__$1,inst_22559);
} else {
if((state_val_22562 === (12))){
var state_22561__$1 = state_22561;
var statearr_22569_22589 = state_22561__$1;
(statearr_22569_22589[(2)] = null);

(statearr_22569_22589[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22562 === (2))){
var inst_22538 = (state_22561[(7)]);
var state_22561__$1 = state_22561;
if(cljs.core.truth_(inst_22538)){
var statearr_22570_22590 = state_22561__$1;
(statearr_22570_22590[(1)] = (4));

} else {
var statearr_22571_22591 = state_22561__$1;
(statearr_22571_22591[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22562 === (11))){
var inst_22552 = cljs.core.async.close_BANG_.call(null,ch);
var state_22561__$1 = state_22561;
var statearr_22572_22592 = state_22561__$1;
(statearr_22572_22592[(2)] = inst_22552);

(statearr_22572_22592[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22562 === (9))){
var state_22561__$1 = state_22561;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22573_22593 = state_22561__$1;
(statearr_22573_22593[(1)] = (11));

} else {
var statearr_22574_22594 = state_22561__$1;
(statearr_22574_22594[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22562 === (5))){
var inst_22538 = (state_22561[(7)]);
var state_22561__$1 = state_22561;
var statearr_22575_22595 = state_22561__$1;
(statearr_22575_22595[(2)] = inst_22538);

(statearr_22575_22595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22562 === (10))){
var inst_22557 = (state_22561[(2)]);
var state_22561__$1 = state_22561;
var statearr_22576_22596 = state_22561__$1;
(statearr_22576_22596[(2)] = inst_22557);

(statearr_22576_22596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22562 === (8))){
var inst_22538 = (state_22561[(7)]);
var inst_22548 = cljs.core.next.call(null,inst_22538);
var inst_22538__$1 = inst_22548;
var state_22561__$1 = (function (){var statearr_22577 = state_22561;
(statearr_22577[(7)] = inst_22538__$1);

return statearr_22577;
})();
var statearr_22578_22597 = state_22561__$1;
(statearr_22578_22597[(2)] = null);

(statearr_22578_22597[(1)] = (2));


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
});})(c__22017__auto__))
;
return ((function (switch__21929__auto__,c__22017__auto__){
return (function() {
var cljs$core$async$state_machine__21930__auto__ = null;
var cljs$core$async$state_machine__21930__auto____0 = (function (){
var statearr_22579 = [null,null,null,null,null,null,null,null];
(statearr_22579[(0)] = cljs$core$async$state_machine__21930__auto__);

(statearr_22579[(1)] = (1));

return statearr_22579;
});
var cljs$core$async$state_machine__21930__auto____1 = (function (state_22561){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_22561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e22580){if((e22580 instanceof Object)){
var ex__21933__auto__ = e22580;
var statearr_22581_22598 = state_22561;
(statearr_22581_22598[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22599 = state_22561;
state_22561 = G__22599;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
cljs$core$async$state_machine__21930__auto__ = function(state_22561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21930__auto____1.call(this,state_22561);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21930__auto____0;
cljs$core$async$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21930__auto____1;
return cljs$core$async$state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto__))
})();
var state__22019__auto__ = (function (){var statearr_22582 = f__22018__auto__.call(null);
(statearr_22582[(6)] = c__22017__auto__);

return statearr_22582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto__))
);

return c__22017__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async22600 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22600 = (function (ch,cs,meta22601){
this.ch = ch;
this.cs = cs;
this.meta22601 = meta22601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22602,meta22601__$1){
var self__ = this;
var _22602__$1 = this;
return (new cljs.core.async.t_cljs$core$async22600(self__.ch,self__.cs,meta22601__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22600.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22602){
var self__ = this;
var _22602__$1 = this;
return self__.meta22601;
});})(cs))
;

cljs.core.async.t_cljs$core$async22600.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22600.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22600.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22600.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22600.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22600.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22600.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22601","meta22601",-1484654621,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22600.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22600";

cljs.core.async.t_cljs$core$async22600.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22600");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22600.
 */
cljs.core.async.__GT_t_cljs$core$async22600 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22600(ch__$1,cs__$1,meta22601){
return (new cljs.core.async.t_cljs$core$async22600(ch__$1,cs__$1,meta22601));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22600(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22017__auto___22822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto___22822,cs,m,dchan,dctr,done){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto___22822,cs,m,dchan,dctr,done){
return (function (state_22737){
var state_val_22738 = (state_22737[(1)]);
if((state_val_22738 === (7))){
var inst_22733 = (state_22737[(2)]);
var state_22737__$1 = state_22737;
var statearr_22739_22823 = state_22737__$1;
(statearr_22739_22823[(2)] = inst_22733);

(statearr_22739_22823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (20))){
var inst_22636 = (state_22737[(7)]);
var inst_22648 = cljs.core.first.call(null,inst_22636);
var inst_22649 = cljs.core.nth.call(null,inst_22648,(0),null);
var inst_22650 = cljs.core.nth.call(null,inst_22648,(1),null);
var state_22737__$1 = (function (){var statearr_22740 = state_22737;
(statearr_22740[(8)] = inst_22649);

return statearr_22740;
})();
if(cljs.core.truth_(inst_22650)){
var statearr_22741_22824 = state_22737__$1;
(statearr_22741_22824[(1)] = (22));

} else {
var statearr_22742_22825 = state_22737__$1;
(statearr_22742_22825[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (27))){
var inst_22678 = (state_22737[(9)]);
var inst_22605 = (state_22737[(10)]);
var inst_22680 = (state_22737[(11)]);
var inst_22685 = (state_22737[(12)]);
var inst_22685__$1 = cljs.core._nth.call(null,inst_22678,inst_22680);
var inst_22686 = cljs.core.async.put_BANG_.call(null,inst_22685__$1,inst_22605,done);
var state_22737__$1 = (function (){var statearr_22743 = state_22737;
(statearr_22743[(12)] = inst_22685__$1);

return statearr_22743;
})();
if(cljs.core.truth_(inst_22686)){
var statearr_22744_22826 = state_22737__$1;
(statearr_22744_22826[(1)] = (30));

} else {
var statearr_22745_22827 = state_22737__$1;
(statearr_22745_22827[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (1))){
var state_22737__$1 = state_22737;
var statearr_22746_22828 = state_22737__$1;
(statearr_22746_22828[(2)] = null);

(statearr_22746_22828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (24))){
var inst_22636 = (state_22737[(7)]);
var inst_22655 = (state_22737[(2)]);
var inst_22656 = cljs.core.next.call(null,inst_22636);
var inst_22614 = inst_22656;
var inst_22615 = null;
var inst_22616 = (0);
var inst_22617 = (0);
var state_22737__$1 = (function (){var statearr_22747 = state_22737;
(statearr_22747[(13)] = inst_22655);

(statearr_22747[(14)] = inst_22615);

(statearr_22747[(15)] = inst_22617);

(statearr_22747[(16)] = inst_22616);

(statearr_22747[(17)] = inst_22614);

return statearr_22747;
})();
var statearr_22748_22829 = state_22737__$1;
(statearr_22748_22829[(2)] = null);

(statearr_22748_22829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (39))){
var state_22737__$1 = state_22737;
var statearr_22752_22830 = state_22737__$1;
(statearr_22752_22830[(2)] = null);

(statearr_22752_22830[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (4))){
var inst_22605 = (state_22737[(10)]);
var inst_22605__$1 = (state_22737[(2)]);
var inst_22606 = (inst_22605__$1 == null);
var state_22737__$1 = (function (){var statearr_22753 = state_22737;
(statearr_22753[(10)] = inst_22605__$1);

return statearr_22753;
})();
if(cljs.core.truth_(inst_22606)){
var statearr_22754_22831 = state_22737__$1;
(statearr_22754_22831[(1)] = (5));

} else {
var statearr_22755_22832 = state_22737__$1;
(statearr_22755_22832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (15))){
var inst_22615 = (state_22737[(14)]);
var inst_22617 = (state_22737[(15)]);
var inst_22616 = (state_22737[(16)]);
var inst_22614 = (state_22737[(17)]);
var inst_22632 = (state_22737[(2)]);
var inst_22633 = (inst_22617 + (1));
var tmp22749 = inst_22615;
var tmp22750 = inst_22616;
var tmp22751 = inst_22614;
var inst_22614__$1 = tmp22751;
var inst_22615__$1 = tmp22749;
var inst_22616__$1 = tmp22750;
var inst_22617__$1 = inst_22633;
var state_22737__$1 = (function (){var statearr_22756 = state_22737;
(statearr_22756[(14)] = inst_22615__$1);

(statearr_22756[(15)] = inst_22617__$1);

(statearr_22756[(16)] = inst_22616__$1);

(statearr_22756[(18)] = inst_22632);

(statearr_22756[(17)] = inst_22614__$1);

return statearr_22756;
})();
var statearr_22757_22833 = state_22737__$1;
(statearr_22757_22833[(2)] = null);

(statearr_22757_22833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (21))){
var inst_22659 = (state_22737[(2)]);
var state_22737__$1 = state_22737;
var statearr_22761_22834 = state_22737__$1;
(statearr_22761_22834[(2)] = inst_22659);

(statearr_22761_22834[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (31))){
var inst_22685 = (state_22737[(12)]);
var inst_22689 = done.call(null,null);
var inst_22690 = cljs.core.async.untap_STAR_.call(null,m,inst_22685);
var state_22737__$1 = (function (){var statearr_22762 = state_22737;
(statearr_22762[(19)] = inst_22689);

return statearr_22762;
})();
var statearr_22763_22835 = state_22737__$1;
(statearr_22763_22835[(2)] = inst_22690);

(statearr_22763_22835[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (32))){
var inst_22678 = (state_22737[(9)]);
var inst_22680 = (state_22737[(11)]);
var inst_22679 = (state_22737[(20)]);
var inst_22677 = (state_22737[(21)]);
var inst_22692 = (state_22737[(2)]);
var inst_22693 = (inst_22680 + (1));
var tmp22758 = inst_22678;
var tmp22759 = inst_22679;
var tmp22760 = inst_22677;
var inst_22677__$1 = tmp22760;
var inst_22678__$1 = tmp22758;
var inst_22679__$1 = tmp22759;
var inst_22680__$1 = inst_22693;
var state_22737__$1 = (function (){var statearr_22764 = state_22737;
(statearr_22764[(9)] = inst_22678__$1);

(statearr_22764[(11)] = inst_22680__$1);

(statearr_22764[(22)] = inst_22692);

(statearr_22764[(20)] = inst_22679__$1);

(statearr_22764[(21)] = inst_22677__$1);

return statearr_22764;
})();
var statearr_22765_22836 = state_22737__$1;
(statearr_22765_22836[(2)] = null);

(statearr_22765_22836[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (40))){
var inst_22705 = (state_22737[(23)]);
var inst_22709 = done.call(null,null);
var inst_22710 = cljs.core.async.untap_STAR_.call(null,m,inst_22705);
var state_22737__$1 = (function (){var statearr_22766 = state_22737;
(statearr_22766[(24)] = inst_22709);

return statearr_22766;
})();
var statearr_22767_22837 = state_22737__$1;
(statearr_22767_22837[(2)] = inst_22710);

(statearr_22767_22837[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (33))){
var inst_22696 = (state_22737[(25)]);
var inst_22698 = cljs.core.chunked_seq_QMARK_.call(null,inst_22696);
var state_22737__$1 = state_22737;
if(inst_22698){
var statearr_22768_22838 = state_22737__$1;
(statearr_22768_22838[(1)] = (36));

} else {
var statearr_22769_22839 = state_22737__$1;
(statearr_22769_22839[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (13))){
var inst_22626 = (state_22737[(26)]);
var inst_22629 = cljs.core.async.close_BANG_.call(null,inst_22626);
var state_22737__$1 = state_22737;
var statearr_22770_22840 = state_22737__$1;
(statearr_22770_22840[(2)] = inst_22629);

(statearr_22770_22840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (22))){
var inst_22649 = (state_22737[(8)]);
var inst_22652 = cljs.core.async.close_BANG_.call(null,inst_22649);
var state_22737__$1 = state_22737;
var statearr_22771_22841 = state_22737__$1;
(statearr_22771_22841[(2)] = inst_22652);

(statearr_22771_22841[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (36))){
var inst_22696 = (state_22737[(25)]);
var inst_22700 = cljs.core.chunk_first.call(null,inst_22696);
var inst_22701 = cljs.core.chunk_rest.call(null,inst_22696);
var inst_22702 = cljs.core.count.call(null,inst_22700);
var inst_22677 = inst_22701;
var inst_22678 = inst_22700;
var inst_22679 = inst_22702;
var inst_22680 = (0);
var state_22737__$1 = (function (){var statearr_22772 = state_22737;
(statearr_22772[(9)] = inst_22678);

(statearr_22772[(11)] = inst_22680);

(statearr_22772[(20)] = inst_22679);

(statearr_22772[(21)] = inst_22677);

return statearr_22772;
})();
var statearr_22773_22842 = state_22737__$1;
(statearr_22773_22842[(2)] = null);

(statearr_22773_22842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (41))){
var inst_22696 = (state_22737[(25)]);
var inst_22712 = (state_22737[(2)]);
var inst_22713 = cljs.core.next.call(null,inst_22696);
var inst_22677 = inst_22713;
var inst_22678 = null;
var inst_22679 = (0);
var inst_22680 = (0);
var state_22737__$1 = (function (){var statearr_22774 = state_22737;
(statearr_22774[(9)] = inst_22678);

(statearr_22774[(11)] = inst_22680);

(statearr_22774[(20)] = inst_22679);

(statearr_22774[(27)] = inst_22712);

(statearr_22774[(21)] = inst_22677);

return statearr_22774;
})();
var statearr_22775_22843 = state_22737__$1;
(statearr_22775_22843[(2)] = null);

(statearr_22775_22843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (43))){
var state_22737__$1 = state_22737;
var statearr_22776_22844 = state_22737__$1;
(statearr_22776_22844[(2)] = null);

(statearr_22776_22844[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (29))){
var inst_22721 = (state_22737[(2)]);
var state_22737__$1 = state_22737;
var statearr_22777_22845 = state_22737__$1;
(statearr_22777_22845[(2)] = inst_22721);

(statearr_22777_22845[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (44))){
var inst_22730 = (state_22737[(2)]);
var state_22737__$1 = (function (){var statearr_22778 = state_22737;
(statearr_22778[(28)] = inst_22730);

return statearr_22778;
})();
var statearr_22779_22846 = state_22737__$1;
(statearr_22779_22846[(2)] = null);

(statearr_22779_22846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (6))){
var inst_22669 = (state_22737[(29)]);
var inst_22668 = cljs.core.deref.call(null,cs);
var inst_22669__$1 = cljs.core.keys.call(null,inst_22668);
var inst_22670 = cljs.core.count.call(null,inst_22669__$1);
var inst_22671 = cljs.core.reset_BANG_.call(null,dctr,inst_22670);
var inst_22676 = cljs.core.seq.call(null,inst_22669__$1);
var inst_22677 = inst_22676;
var inst_22678 = null;
var inst_22679 = (0);
var inst_22680 = (0);
var state_22737__$1 = (function (){var statearr_22780 = state_22737;
(statearr_22780[(9)] = inst_22678);

(statearr_22780[(11)] = inst_22680);

(statearr_22780[(20)] = inst_22679);

(statearr_22780[(30)] = inst_22671);

(statearr_22780[(29)] = inst_22669__$1);

(statearr_22780[(21)] = inst_22677);

return statearr_22780;
})();
var statearr_22781_22847 = state_22737__$1;
(statearr_22781_22847[(2)] = null);

(statearr_22781_22847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (28))){
var inst_22696 = (state_22737[(25)]);
var inst_22677 = (state_22737[(21)]);
var inst_22696__$1 = cljs.core.seq.call(null,inst_22677);
var state_22737__$1 = (function (){var statearr_22782 = state_22737;
(statearr_22782[(25)] = inst_22696__$1);

return statearr_22782;
})();
if(inst_22696__$1){
var statearr_22783_22848 = state_22737__$1;
(statearr_22783_22848[(1)] = (33));

} else {
var statearr_22784_22849 = state_22737__$1;
(statearr_22784_22849[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (25))){
var inst_22680 = (state_22737[(11)]);
var inst_22679 = (state_22737[(20)]);
var inst_22682 = (inst_22680 < inst_22679);
var inst_22683 = inst_22682;
var state_22737__$1 = state_22737;
if(cljs.core.truth_(inst_22683)){
var statearr_22785_22850 = state_22737__$1;
(statearr_22785_22850[(1)] = (27));

} else {
var statearr_22786_22851 = state_22737__$1;
(statearr_22786_22851[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (34))){
var state_22737__$1 = state_22737;
var statearr_22787_22852 = state_22737__$1;
(statearr_22787_22852[(2)] = null);

(statearr_22787_22852[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (17))){
var state_22737__$1 = state_22737;
var statearr_22788_22853 = state_22737__$1;
(statearr_22788_22853[(2)] = null);

(statearr_22788_22853[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (3))){
var inst_22735 = (state_22737[(2)]);
var state_22737__$1 = state_22737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22737__$1,inst_22735);
} else {
if((state_val_22738 === (12))){
var inst_22664 = (state_22737[(2)]);
var state_22737__$1 = state_22737;
var statearr_22789_22854 = state_22737__$1;
(statearr_22789_22854[(2)] = inst_22664);

(statearr_22789_22854[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (2))){
var state_22737__$1 = state_22737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22737__$1,(4),ch);
} else {
if((state_val_22738 === (23))){
var state_22737__$1 = state_22737;
var statearr_22790_22855 = state_22737__$1;
(statearr_22790_22855[(2)] = null);

(statearr_22790_22855[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (35))){
var inst_22719 = (state_22737[(2)]);
var state_22737__$1 = state_22737;
var statearr_22791_22856 = state_22737__$1;
(statearr_22791_22856[(2)] = inst_22719);

(statearr_22791_22856[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (19))){
var inst_22636 = (state_22737[(7)]);
var inst_22640 = cljs.core.chunk_first.call(null,inst_22636);
var inst_22641 = cljs.core.chunk_rest.call(null,inst_22636);
var inst_22642 = cljs.core.count.call(null,inst_22640);
var inst_22614 = inst_22641;
var inst_22615 = inst_22640;
var inst_22616 = inst_22642;
var inst_22617 = (0);
var state_22737__$1 = (function (){var statearr_22792 = state_22737;
(statearr_22792[(14)] = inst_22615);

(statearr_22792[(15)] = inst_22617);

(statearr_22792[(16)] = inst_22616);

(statearr_22792[(17)] = inst_22614);

return statearr_22792;
})();
var statearr_22793_22857 = state_22737__$1;
(statearr_22793_22857[(2)] = null);

(statearr_22793_22857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (11))){
var inst_22614 = (state_22737[(17)]);
var inst_22636 = (state_22737[(7)]);
var inst_22636__$1 = cljs.core.seq.call(null,inst_22614);
var state_22737__$1 = (function (){var statearr_22794 = state_22737;
(statearr_22794[(7)] = inst_22636__$1);

return statearr_22794;
})();
if(inst_22636__$1){
var statearr_22795_22858 = state_22737__$1;
(statearr_22795_22858[(1)] = (16));

} else {
var statearr_22796_22859 = state_22737__$1;
(statearr_22796_22859[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (9))){
var inst_22666 = (state_22737[(2)]);
var state_22737__$1 = state_22737;
var statearr_22797_22860 = state_22737__$1;
(statearr_22797_22860[(2)] = inst_22666);

(statearr_22797_22860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (5))){
var inst_22612 = cljs.core.deref.call(null,cs);
var inst_22613 = cljs.core.seq.call(null,inst_22612);
var inst_22614 = inst_22613;
var inst_22615 = null;
var inst_22616 = (0);
var inst_22617 = (0);
var state_22737__$1 = (function (){var statearr_22798 = state_22737;
(statearr_22798[(14)] = inst_22615);

(statearr_22798[(15)] = inst_22617);

(statearr_22798[(16)] = inst_22616);

(statearr_22798[(17)] = inst_22614);

return statearr_22798;
})();
var statearr_22799_22861 = state_22737__$1;
(statearr_22799_22861[(2)] = null);

(statearr_22799_22861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (14))){
var state_22737__$1 = state_22737;
var statearr_22800_22862 = state_22737__$1;
(statearr_22800_22862[(2)] = null);

(statearr_22800_22862[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (45))){
var inst_22727 = (state_22737[(2)]);
var state_22737__$1 = state_22737;
var statearr_22801_22863 = state_22737__$1;
(statearr_22801_22863[(2)] = inst_22727);

(statearr_22801_22863[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (26))){
var inst_22669 = (state_22737[(29)]);
var inst_22723 = (state_22737[(2)]);
var inst_22724 = cljs.core.seq.call(null,inst_22669);
var state_22737__$1 = (function (){var statearr_22802 = state_22737;
(statearr_22802[(31)] = inst_22723);

return statearr_22802;
})();
if(inst_22724){
var statearr_22803_22864 = state_22737__$1;
(statearr_22803_22864[(1)] = (42));

} else {
var statearr_22804_22865 = state_22737__$1;
(statearr_22804_22865[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (16))){
var inst_22636 = (state_22737[(7)]);
var inst_22638 = cljs.core.chunked_seq_QMARK_.call(null,inst_22636);
var state_22737__$1 = state_22737;
if(inst_22638){
var statearr_22805_22866 = state_22737__$1;
(statearr_22805_22866[(1)] = (19));

} else {
var statearr_22806_22867 = state_22737__$1;
(statearr_22806_22867[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (38))){
var inst_22716 = (state_22737[(2)]);
var state_22737__$1 = state_22737;
var statearr_22807_22868 = state_22737__$1;
(statearr_22807_22868[(2)] = inst_22716);

(statearr_22807_22868[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (30))){
var state_22737__$1 = state_22737;
var statearr_22808_22869 = state_22737__$1;
(statearr_22808_22869[(2)] = null);

(statearr_22808_22869[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (10))){
var inst_22615 = (state_22737[(14)]);
var inst_22617 = (state_22737[(15)]);
var inst_22625 = cljs.core._nth.call(null,inst_22615,inst_22617);
var inst_22626 = cljs.core.nth.call(null,inst_22625,(0),null);
var inst_22627 = cljs.core.nth.call(null,inst_22625,(1),null);
var state_22737__$1 = (function (){var statearr_22809 = state_22737;
(statearr_22809[(26)] = inst_22626);

return statearr_22809;
})();
if(cljs.core.truth_(inst_22627)){
var statearr_22810_22870 = state_22737__$1;
(statearr_22810_22870[(1)] = (13));

} else {
var statearr_22811_22871 = state_22737__$1;
(statearr_22811_22871[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (18))){
var inst_22662 = (state_22737[(2)]);
var state_22737__$1 = state_22737;
var statearr_22812_22872 = state_22737__$1;
(statearr_22812_22872[(2)] = inst_22662);

(statearr_22812_22872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (42))){
var state_22737__$1 = state_22737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22737__$1,(45),dchan);
} else {
if((state_val_22738 === (37))){
var inst_22605 = (state_22737[(10)]);
var inst_22705 = (state_22737[(23)]);
var inst_22696 = (state_22737[(25)]);
var inst_22705__$1 = cljs.core.first.call(null,inst_22696);
var inst_22706 = cljs.core.async.put_BANG_.call(null,inst_22705__$1,inst_22605,done);
var state_22737__$1 = (function (){var statearr_22813 = state_22737;
(statearr_22813[(23)] = inst_22705__$1);

return statearr_22813;
})();
if(cljs.core.truth_(inst_22706)){
var statearr_22814_22873 = state_22737__$1;
(statearr_22814_22873[(1)] = (39));

} else {
var statearr_22815_22874 = state_22737__$1;
(statearr_22815_22874[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (8))){
var inst_22617 = (state_22737[(15)]);
var inst_22616 = (state_22737[(16)]);
var inst_22619 = (inst_22617 < inst_22616);
var inst_22620 = inst_22619;
var state_22737__$1 = state_22737;
if(cljs.core.truth_(inst_22620)){
var statearr_22816_22875 = state_22737__$1;
(statearr_22816_22875[(1)] = (10));

} else {
var statearr_22817_22876 = state_22737__$1;
(statearr_22817_22876[(1)] = (11));

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
});})(c__22017__auto___22822,cs,m,dchan,dctr,done))
;
return ((function (switch__21929__auto__,c__22017__auto___22822,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21930__auto__ = null;
var cljs$core$async$mult_$_state_machine__21930__auto____0 = (function (){
var statearr_22818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22818[(0)] = cljs$core$async$mult_$_state_machine__21930__auto__);

(statearr_22818[(1)] = (1));

return statearr_22818;
});
var cljs$core$async$mult_$_state_machine__21930__auto____1 = (function (state_22737){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_22737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e22819){if((e22819 instanceof Object)){
var ex__21933__auto__ = e22819;
var statearr_22820_22877 = state_22737;
(statearr_22820_22877[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22878 = state_22737;
state_22737 = G__22878;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21930__auto__ = function(state_22737){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21930__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21930__auto____1.call(this,state_22737);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21930__auto____0;
cljs$core$async$mult_$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21930__auto____1;
return cljs$core$async$mult_$_state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto___22822,cs,m,dchan,dctr,done))
})();
var state__22019__auto__ = (function (){var statearr_22821 = f__22018__auto__.call(null);
(statearr_22821[(6)] = c__22017__auto___22822);

return statearr_22821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto___22822,cs,m,dchan,dctr,done))
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
var G__22880 = arguments.length;
switch (G__22880) {
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
var len__4499__auto___22892 = arguments.length;
var i__4500__auto___22893 = (0);
while(true){
if((i__4500__auto___22893 < len__4499__auto___22892)){
args__4502__auto__.push((arguments[i__4500__auto___22893]));

var G__22894 = (i__4500__auto___22893 + (1));
i__4500__auto___22893 = G__22894;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22886){
var map__22887 = p__22886;
var map__22887__$1 = ((((!((map__22887 == null)))?(((((map__22887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22887):map__22887);
var opts = map__22887__$1;
var statearr_22889_22895 = state;
(statearr_22889_22895[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__22887,map__22887__$1,opts){
return (function (val){
var statearr_22890_22896 = state;
(statearr_22890_22896[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22887,map__22887__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_22891_22897 = state;
(statearr_22891_22897[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22882){
var G__22883 = cljs.core.first.call(null,seq22882);
var seq22882__$1 = cljs.core.next.call(null,seq22882);
var G__22884 = cljs.core.first.call(null,seq22882__$1);
var seq22882__$2 = cljs.core.next.call(null,seq22882__$1);
var G__22885 = cljs.core.first.call(null,seq22882__$2);
var seq22882__$3 = cljs.core.next.call(null,seq22882__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22883,G__22884,G__22885,seq22882__$3);
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
if(typeof cljs.core.async.t_cljs$core$async22898 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22898 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta22899){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta22899 = meta22899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22900,meta22899__$1){
var self__ = this;
var _22900__$1 = this;
return (new cljs.core.async.t_cljs$core$async22898(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta22899__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22898.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22900){
var self__ = this;
var _22900__$1 = this;
return self__.meta22899;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22898.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22898.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22898.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22898.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22898.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22898.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22898.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22898.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async22898.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta22899","meta22899",-1528483528,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22898.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22898";

cljs.core.async.t_cljs$core$async22898.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22898");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22898.
 */
cljs.core.async.__GT_t_cljs$core$async22898 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22898(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22899){
return (new cljs.core.async.t_cljs$core$async22898(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22899));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22898(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22017__auto___23062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto___23062,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto___23062,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23002){
var state_val_23003 = (state_23002[(1)]);
if((state_val_23003 === (7))){
var inst_22917 = (state_23002[(2)]);
var state_23002__$1 = state_23002;
var statearr_23004_23063 = state_23002__$1;
(statearr_23004_23063[(2)] = inst_22917);

(statearr_23004_23063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (20))){
var inst_22929 = (state_23002[(7)]);
var state_23002__$1 = state_23002;
var statearr_23005_23064 = state_23002__$1;
(statearr_23005_23064[(2)] = inst_22929);

(statearr_23005_23064[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (27))){
var state_23002__$1 = state_23002;
var statearr_23006_23065 = state_23002__$1;
(statearr_23006_23065[(2)] = null);

(statearr_23006_23065[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (1))){
var inst_22904 = (state_23002[(8)]);
var inst_22904__$1 = calc_state.call(null);
var inst_22906 = (inst_22904__$1 == null);
var inst_22907 = cljs.core.not.call(null,inst_22906);
var state_23002__$1 = (function (){var statearr_23007 = state_23002;
(statearr_23007[(8)] = inst_22904__$1);

return statearr_23007;
})();
if(inst_22907){
var statearr_23008_23066 = state_23002__$1;
(statearr_23008_23066[(1)] = (2));

} else {
var statearr_23009_23067 = state_23002__$1;
(statearr_23009_23067[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (24))){
var inst_22976 = (state_23002[(9)]);
var inst_22962 = (state_23002[(10)]);
var inst_22953 = (state_23002[(11)]);
var inst_22976__$1 = inst_22953.call(null,inst_22962);
var state_23002__$1 = (function (){var statearr_23010 = state_23002;
(statearr_23010[(9)] = inst_22976__$1);

return statearr_23010;
})();
if(cljs.core.truth_(inst_22976__$1)){
var statearr_23011_23068 = state_23002__$1;
(statearr_23011_23068[(1)] = (29));

} else {
var statearr_23012_23069 = state_23002__$1;
(statearr_23012_23069[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (4))){
var inst_22920 = (state_23002[(2)]);
var state_23002__$1 = state_23002;
if(cljs.core.truth_(inst_22920)){
var statearr_23013_23070 = state_23002__$1;
(statearr_23013_23070[(1)] = (8));

} else {
var statearr_23014_23071 = state_23002__$1;
(statearr_23014_23071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (15))){
var inst_22947 = (state_23002[(2)]);
var state_23002__$1 = state_23002;
if(cljs.core.truth_(inst_22947)){
var statearr_23015_23072 = state_23002__$1;
(statearr_23015_23072[(1)] = (19));

} else {
var statearr_23016_23073 = state_23002__$1;
(statearr_23016_23073[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (21))){
var inst_22952 = (state_23002[(12)]);
var inst_22952__$1 = (state_23002[(2)]);
var inst_22953 = cljs.core.get.call(null,inst_22952__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22954 = cljs.core.get.call(null,inst_22952__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22955 = cljs.core.get.call(null,inst_22952__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23002__$1 = (function (){var statearr_23017 = state_23002;
(statearr_23017[(12)] = inst_22952__$1);

(statearr_23017[(13)] = inst_22954);

(statearr_23017[(11)] = inst_22953);

return statearr_23017;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23002__$1,(22),inst_22955);
} else {
if((state_val_23003 === (31))){
var inst_22984 = (state_23002[(2)]);
var state_23002__$1 = state_23002;
if(cljs.core.truth_(inst_22984)){
var statearr_23018_23074 = state_23002__$1;
(statearr_23018_23074[(1)] = (32));

} else {
var statearr_23019_23075 = state_23002__$1;
(statearr_23019_23075[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (32))){
var inst_22961 = (state_23002[(14)]);
var state_23002__$1 = state_23002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23002__$1,(35),out,inst_22961);
} else {
if((state_val_23003 === (33))){
var inst_22952 = (state_23002[(12)]);
var inst_22929 = inst_22952;
var state_23002__$1 = (function (){var statearr_23020 = state_23002;
(statearr_23020[(7)] = inst_22929);

return statearr_23020;
})();
var statearr_23021_23076 = state_23002__$1;
(statearr_23021_23076[(2)] = null);

(statearr_23021_23076[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (13))){
var inst_22929 = (state_23002[(7)]);
var inst_22936 = inst_22929.cljs$lang$protocol_mask$partition0$;
var inst_22937 = (inst_22936 & (64));
var inst_22938 = inst_22929.cljs$core$ISeq$;
var inst_22939 = (cljs.core.PROTOCOL_SENTINEL === inst_22938);
var inst_22940 = ((inst_22937) || (inst_22939));
var state_23002__$1 = state_23002;
if(cljs.core.truth_(inst_22940)){
var statearr_23022_23077 = state_23002__$1;
(statearr_23022_23077[(1)] = (16));

} else {
var statearr_23023_23078 = state_23002__$1;
(statearr_23023_23078[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (22))){
var inst_22961 = (state_23002[(14)]);
var inst_22962 = (state_23002[(10)]);
var inst_22960 = (state_23002[(2)]);
var inst_22961__$1 = cljs.core.nth.call(null,inst_22960,(0),null);
var inst_22962__$1 = cljs.core.nth.call(null,inst_22960,(1),null);
var inst_22963 = (inst_22961__$1 == null);
var inst_22964 = cljs.core._EQ_.call(null,inst_22962__$1,change);
var inst_22965 = ((inst_22963) || (inst_22964));
var state_23002__$1 = (function (){var statearr_23024 = state_23002;
(statearr_23024[(14)] = inst_22961__$1);

(statearr_23024[(10)] = inst_22962__$1);

return statearr_23024;
})();
if(cljs.core.truth_(inst_22965)){
var statearr_23025_23079 = state_23002__$1;
(statearr_23025_23079[(1)] = (23));

} else {
var statearr_23026_23080 = state_23002__$1;
(statearr_23026_23080[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (36))){
var inst_22952 = (state_23002[(12)]);
var inst_22929 = inst_22952;
var state_23002__$1 = (function (){var statearr_23027 = state_23002;
(statearr_23027[(7)] = inst_22929);

return statearr_23027;
})();
var statearr_23028_23081 = state_23002__$1;
(statearr_23028_23081[(2)] = null);

(statearr_23028_23081[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (29))){
var inst_22976 = (state_23002[(9)]);
var state_23002__$1 = state_23002;
var statearr_23029_23082 = state_23002__$1;
(statearr_23029_23082[(2)] = inst_22976);

(statearr_23029_23082[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (6))){
var state_23002__$1 = state_23002;
var statearr_23030_23083 = state_23002__$1;
(statearr_23030_23083[(2)] = false);

(statearr_23030_23083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (28))){
var inst_22972 = (state_23002[(2)]);
var inst_22973 = calc_state.call(null);
var inst_22929 = inst_22973;
var state_23002__$1 = (function (){var statearr_23031 = state_23002;
(statearr_23031[(7)] = inst_22929);

(statearr_23031[(15)] = inst_22972);

return statearr_23031;
})();
var statearr_23032_23084 = state_23002__$1;
(statearr_23032_23084[(2)] = null);

(statearr_23032_23084[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (25))){
var inst_22998 = (state_23002[(2)]);
var state_23002__$1 = state_23002;
var statearr_23033_23085 = state_23002__$1;
(statearr_23033_23085[(2)] = inst_22998);

(statearr_23033_23085[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (34))){
var inst_22996 = (state_23002[(2)]);
var state_23002__$1 = state_23002;
var statearr_23034_23086 = state_23002__$1;
(statearr_23034_23086[(2)] = inst_22996);

(statearr_23034_23086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (17))){
var state_23002__$1 = state_23002;
var statearr_23035_23087 = state_23002__$1;
(statearr_23035_23087[(2)] = false);

(statearr_23035_23087[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (3))){
var state_23002__$1 = state_23002;
var statearr_23036_23088 = state_23002__$1;
(statearr_23036_23088[(2)] = false);

(statearr_23036_23088[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (12))){
var inst_23000 = (state_23002[(2)]);
var state_23002__$1 = state_23002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23002__$1,inst_23000);
} else {
if((state_val_23003 === (2))){
var inst_22904 = (state_23002[(8)]);
var inst_22909 = inst_22904.cljs$lang$protocol_mask$partition0$;
var inst_22910 = (inst_22909 & (64));
var inst_22911 = inst_22904.cljs$core$ISeq$;
var inst_22912 = (cljs.core.PROTOCOL_SENTINEL === inst_22911);
var inst_22913 = ((inst_22910) || (inst_22912));
var state_23002__$1 = state_23002;
if(cljs.core.truth_(inst_22913)){
var statearr_23037_23089 = state_23002__$1;
(statearr_23037_23089[(1)] = (5));

} else {
var statearr_23038_23090 = state_23002__$1;
(statearr_23038_23090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (23))){
var inst_22961 = (state_23002[(14)]);
var inst_22967 = (inst_22961 == null);
var state_23002__$1 = state_23002;
if(cljs.core.truth_(inst_22967)){
var statearr_23039_23091 = state_23002__$1;
(statearr_23039_23091[(1)] = (26));

} else {
var statearr_23040_23092 = state_23002__$1;
(statearr_23040_23092[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (35))){
var inst_22987 = (state_23002[(2)]);
var state_23002__$1 = state_23002;
if(cljs.core.truth_(inst_22987)){
var statearr_23041_23093 = state_23002__$1;
(statearr_23041_23093[(1)] = (36));

} else {
var statearr_23042_23094 = state_23002__$1;
(statearr_23042_23094[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (19))){
var inst_22929 = (state_23002[(7)]);
var inst_22949 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22929);
var state_23002__$1 = state_23002;
var statearr_23043_23095 = state_23002__$1;
(statearr_23043_23095[(2)] = inst_22949);

(statearr_23043_23095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (11))){
var inst_22929 = (state_23002[(7)]);
var inst_22933 = (inst_22929 == null);
var inst_22934 = cljs.core.not.call(null,inst_22933);
var state_23002__$1 = state_23002;
if(inst_22934){
var statearr_23044_23096 = state_23002__$1;
(statearr_23044_23096[(1)] = (13));

} else {
var statearr_23045_23097 = state_23002__$1;
(statearr_23045_23097[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (9))){
var inst_22904 = (state_23002[(8)]);
var state_23002__$1 = state_23002;
var statearr_23046_23098 = state_23002__$1;
(statearr_23046_23098[(2)] = inst_22904);

(statearr_23046_23098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (5))){
var state_23002__$1 = state_23002;
var statearr_23047_23099 = state_23002__$1;
(statearr_23047_23099[(2)] = true);

(statearr_23047_23099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (14))){
var state_23002__$1 = state_23002;
var statearr_23048_23100 = state_23002__$1;
(statearr_23048_23100[(2)] = false);

(statearr_23048_23100[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (26))){
var inst_22962 = (state_23002[(10)]);
var inst_22969 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22962);
var state_23002__$1 = state_23002;
var statearr_23049_23101 = state_23002__$1;
(statearr_23049_23101[(2)] = inst_22969);

(statearr_23049_23101[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (16))){
var state_23002__$1 = state_23002;
var statearr_23050_23102 = state_23002__$1;
(statearr_23050_23102[(2)] = true);

(statearr_23050_23102[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (38))){
var inst_22992 = (state_23002[(2)]);
var state_23002__$1 = state_23002;
var statearr_23051_23103 = state_23002__$1;
(statearr_23051_23103[(2)] = inst_22992);

(statearr_23051_23103[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (30))){
var inst_22954 = (state_23002[(13)]);
var inst_22962 = (state_23002[(10)]);
var inst_22953 = (state_23002[(11)]);
var inst_22979 = cljs.core.empty_QMARK_.call(null,inst_22953);
var inst_22980 = inst_22954.call(null,inst_22962);
var inst_22981 = cljs.core.not.call(null,inst_22980);
var inst_22982 = ((inst_22979) && (inst_22981));
var state_23002__$1 = state_23002;
var statearr_23052_23104 = state_23002__$1;
(statearr_23052_23104[(2)] = inst_22982);

(statearr_23052_23104[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (10))){
var inst_22904 = (state_23002[(8)]);
var inst_22925 = (state_23002[(2)]);
var inst_22926 = cljs.core.get.call(null,inst_22925,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22927 = cljs.core.get.call(null,inst_22925,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22928 = cljs.core.get.call(null,inst_22925,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22929 = inst_22904;
var state_23002__$1 = (function (){var statearr_23053 = state_23002;
(statearr_23053[(7)] = inst_22929);

(statearr_23053[(16)] = inst_22926);

(statearr_23053[(17)] = inst_22927);

(statearr_23053[(18)] = inst_22928);

return statearr_23053;
})();
var statearr_23054_23105 = state_23002__$1;
(statearr_23054_23105[(2)] = null);

(statearr_23054_23105[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (18))){
var inst_22944 = (state_23002[(2)]);
var state_23002__$1 = state_23002;
var statearr_23055_23106 = state_23002__$1;
(statearr_23055_23106[(2)] = inst_22944);

(statearr_23055_23106[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (37))){
var state_23002__$1 = state_23002;
var statearr_23056_23107 = state_23002__$1;
(statearr_23056_23107[(2)] = null);

(statearr_23056_23107[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (8))){
var inst_22904 = (state_23002[(8)]);
var inst_22922 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22904);
var state_23002__$1 = state_23002;
var statearr_23057_23108 = state_23002__$1;
(statearr_23057_23108[(2)] = inst_22922);

(statearr_23057_23108[(1)] = (10));


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
});})(c__22017__auto___23062,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21929__auto__,c__22017__auto___23062,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21930__auto__ = null;
var cljs$core$async$mix_$_state_machine__21930__auto____0 = (function (){
var statearr_23058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23058[(0)] = cljs$core$async$mix_$_state_machine__21930__auto__);

(statearr_23058[(1)] = (1));

return statearr_23058;
});
var cljs$core$async$mix_$_state_machine__21930__auto____1 = (function (state_23002){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_23002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e23059){if((e23059 instanceof Object)){
var ex__21933__auto__ = e23059;
var statearr_23060_23109 = state_23002;
(statearr_23060_23109[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23110 = state_23002;
state_23002 = G__23110;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21930__auto__ = function(state_23002){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21930__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21930__auto____1.call(this,state_23002);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21930__auto____0;
cljs$core$async$mix_$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21930__auto____1;
return cljs$core$async$mix_$_state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto___23062,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22019__auto__ = (function (){var statearr_23061 = f__22018__auto__.call(null);
(statearr_23061[(6)] = c__22017__auto___23062);

return statearr_23061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto___23062,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__23112 = arguments.length;
switch (G__23112) {
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
var G__23116 = arguments.length;
switch (G__23116) {
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
return (function (p1__23114_SHARP_){
if(cljs.core.truth_(p1__23114_SHARP_.call(null,topic))){
return p1__23114_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23114_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23117 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23118){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23118 = meta23118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23119,meta23118__$1){
var self__ = this;
var _23119__$1 = this;
return (new cljs.core.async.t_cljs$core$async23117(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23118__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23119){
var self__ = this;
var _23119__$1 = this;
return self__.meta23118;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23117.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23117.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23117.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23117.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async23117.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23117.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23117.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23118","meta23118",37774825,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23117";

cljs.core.async.t_cljs$core$async23117.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23117");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23117.
 */
cljs.core.async.__GT_t_cljs$core$async23117 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23117(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23118){
return (new cljs.core.async.t_cljs$core$async23117(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23118));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23117(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22017__auto___23237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto___23237,mults,ensure_mult,p){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto___23237,mults,ensure_mult,p){
return (function (state_23191){
var state_val_23192 = (state_23191[(1)]);
if((state_val_23192 === (7))){
var inst_23187 = (state_23191[(2)]);
var state_23191__$1 = state_23191;
var statearr_23193_23238 = state_23191__$1;
(statearr_23193_23238[(2)] = inst_23187);

(statearr_23193_23238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (20))){
var state_23191__$1 = state_23191;
var statearr_23194_23239 = state_23191__$1;
(statearr_23194_23239[(2)] = null);

(statearr_23194_23239[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (1))){
var state_23191__$1 = state_23191;
var statearr_23195_23240 = state_23191__$1;
(statearr_23195_23240[(2)] = null);

(statearr_23195_23240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (24))){
var inst_23170 = (state_23191[(7)]);
var inst_23179 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23170);
var state_23191__$1 = state_23191;
var statearr_23196_23241 = state_23191__$1;
(statearr_23196_23241[(2)] = inst_23179);

(statearr_23196_23241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (4))){
var inst_23122 = (state_23191[(8)]);
var inst_23122__$1 = (state_23191[(2)]);
var inst_23123 = (inst_23122__$1 == null);
var state_23191__$1 = (function (){var statearr_23197 = state_23191;
(statearr_23197[(8)] = inst_23122__$1);

return statearr_23197;
})();
if(cljs.core.truth_(inst_23123)){
var statearr_23198_23242 = state_23191__$1;
(statearr_23198_23242[(1)] = (5));

} else {
var statearr_23199_23243 = state_23191__$1;
(statearr_23199_23243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (15))){
var inst_23164 = (state_23191[(2)]);
var state_23191__$1 = state_23191;
var statearr_23200_23244 = state_23191__$1;
(statearr_23200_23244[(2)] = inst_23164);

(statearr_23200_23244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (21))){
var inst_23184 = (state_23191[(2)]);
var state_23191__$1 = (function (){var statearr_23201 = state_23191;
(statearr_23201[(9)] = inst_23184);

return statearr_23201;
})();
var statearr_23202_23245 = state_23191__$1;
(statearr_23202_23245[(2)] = null);

(statearr_23202_23245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (13))){
var inst_23146 = (state_23191[(10)]);
var inst_23148 = cljs.core.chunked_seq_QMARK_.call(null,inst_23146);
var state_23191__$1 = state_23191;
if(inst_23148){
var statearr_23203_23246 = state_23191__$1;
(statearr_23203_23246[(1)] = (16));

} else {
var statearr_23204_23247 = state_23191__$1;
(statearr_23204_23247[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (22))){
var inst_23176 = (state_23191[(2)]);
var state_23191__$1 = state_23191;
if(cljs.core.truth_(inst_23176)){
var statearr_23205_23248 = state_23191__$1;
(statearr_23205_23248[(1)] = (23));

} else {
var statearr_23206_23249 = state_23191__$1;
(statearr_23206_23249[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (6))){
var inst_23172 = (state_23191[(11)]);
var inst_23170 = (state_23191[(7)]);
var inst_23122 = (state_23191[(8)]);
var inst_23170__$1 = topic_fn.call(null,inst_23122);
var inst_23171 = cljs.core.deref.call(null,mults);
var inst_23172__$1 = cljs.core.get.call(null,inst_23171,inst_23170__$1);
var state_23191__$1 = (function (){var statearr_23207 = state_23191;
(statearr_23207[(11)] = inst_23172__$1);

(statearr_23207[(7)] = inst_23170__$1);

return statearr_23207;
})();
if(cljs.core.truth_(inst_23172__$1)){
var statearr_23208_23250 = state_23191__$1;
(statearr_23208_23250[(1)] = (19));

} else {
var statearr_23209_23251 = state_23191__$1;
(statearr_23209_23251[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (25))){
var inst_23181 = (state_23191[(2)]);
var state_23191__$1 = state_23191;
var statearr_23210_23252 = state_23191__$1;
(statearr_23210_23252[(2)] = inst_23181);

(statearr_23210_23252[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (17))){
var inst_23146 = (state_23191[(10)]);
var inst_23155 = cljs.core.first.call(null,inst_23146);
var inst_23156 = cljs.core.async.muxch_STAR_.call(null,inst_23155);
var inst_23157 = cljs.core.async.close_BANG_.call(null,inst_23156);
var inst_23158 = cljs.core.next.call(null,inst_23146);
var inst_23132 = inst_23158;
var inst_23133 = null;
var inst_23134 = (0);
var inst_23135 = (0);
var state_23191__$1 = (function (){var statearr_23211 = state_23191;
(statearr_23211[(12)] = inst_23157);

(statearr_23211[(13)] = inst_23133);

(statearr_23211[(14)] = inst_23135);

(statearr_23211[(15)] = inst_23134);

(statearr_23211[(16)] = inst_23132);

return statearr_23211;
})();
var statearr_23212_23253 = state_23191__$1;
(statearr_23212_23253[(2)] = null);

(statearr_23212_23253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (3))){
var inst_23189 = (state_23191[(2)]);
var state_23191__$1 = state_23191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23191__$1,inst_23189);
} else {
if((state_val_23192 === (12))){
var inst_23166 = (state_23191[(2)]);
var state_23191__$1 = state_23191;
var statearr_23213_23254 = state_23191__$1;
(statearr_23213_23254[(2)] = inst_23166);

(statearr_23213_23254[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (2))){
var state_23191__$1 = state_23191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23191__$1,(4),ch);
} else {
if((state_val_23192 === (23))){
var state_23191__$1 = state_23191;
var statearr_23214_23255 = state_23191__$1;
(statearr_23214_23255[(2)] = null);

(statearr_23214_23255[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (19))){
var inst_23172 = (state_23191[(11)]);
var inst_23122 = (state_23191[(8)]);
var inst_23174 = cljs.core.async.muxch_STAR_.call(null,inst_23172);
var state_23191__$1 = state_23191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23191__$1,(22),inst_23174,inst_23122);
} else {
if((state_val_23192 === (11))){
var inst_23146 = (state_23191[(10)]);
var inst_23132 = (state_23191[(16)]);
var inst_23146__$1 = cljs.core.seq.call(null,inst_23132);
var state_23191__$1 = (function (){var statearr_23215 = state_23191;
(statearr_23215[(10)] = inst_23146__$1);

return statearr_23215;
})();
if(inst_23146__$1){
var statearr_23216_23256 = state_23191__$1;
(statearr_23216_23256[(1)] = (13));

} else {
var statearr_23217_23257 = state_23191__$1;
(statearr_23217_23257[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (9))){
var inst_23168 = (state_23191[(2)]);
var state_23191__$1 = state_23191;
var statearr_23218_23258 = state_23191__$1;
(statearr_23218_23258[(2)] = inst_23168);

(statearr_23218_23258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (5))){
var inst_23129 = cljs.core.deref.call(null,mults);
var inst_23130 = cljs.core.vals.call(null,inst_23129);
var inst_23131 = cljs.core.seq.call(null,inst_23130);
var inst_23132 = inst_23131;
var inst_23133 = null;
var inst_23134 = (0);
var inst_23135 = (0);
var state_23191__$1 = (function (){var statearr_23219 = state_23191;
(statearr_23219[(13)] = inst_23133);

(statearr_23219[(14)] = inst_23135);

(statearr_23219[(15)] = inst_23134);

(statearr_23219[(16)] = inst_23132);

return statearr_23219;
})();
var statearr_23220_23259 = state_23191__$1;
(statearr_23220_23259[(2)] = null);

(statearr_23220_23259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (14))){
var state_23191__$1 = state_23191;
var statearr_23224_23260 = state_23191__$1;
(statearr_23224_23260[(2)] = null);

(statearr_23224_23260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (16))){
var inst_23146 = (state_23191[(10)]);
var inst_23150 = cljs.core.chunk_first.call(null,inst_23146);
var inst_23151 = cljs.core.chunk_rest.call(null,inst_23146);
var inst_23152 = cljs.core.count.call(null,inst_23150);
var inst_23132 = inst_23151;
var inst_23133 = inst_23150;
var inst_23134 = inst_23152;
var inst_23135 = (0);
var state_23191__$1 = (function (){var statearr_23225 = state_23191;
(statearr_23225[(13)] = inst_23133);

(statearr_23225[(14)] = inst_23135);

(statearr_23225[(15)] = inst_23134);

(statearr_23225[(16)] = inst_23132);

return statearr_23225;
})();
var statearr_23226_23261 = state_23191__$1;
(statearr_23226_23261[(2)] = null);

(statearr_23226_23261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (10))){
var inst_23133 = (state_23191[(13)]);
var inst_23135 = (state_23191[(14)]);
var inst_23134 = (state_23191[(15)]);
var inst_23132 = (state_23191[(16)]);
var inst_23140 = cljs.core._nth.call(null,inst_23133,inst_23135);
var inst_23141 = cljs.core.async.muxch_STAR_.call(null,inst_23140);
var inst_23142 = cljs.core.async.close_BANG_.call(null,inst_23141);
var inst_23143 = (inst_23135 + (1));
var tmp23221 = inst_23133;
var tmp23222 = inst_23134;
var tmp23223 = inst_23132;
var inst_23132__$1 = tmp23223;
var inst_23133__$1 = tmp23221;
var inst_23134__$1 = tmp23222;
var inst_23135__$1 = inst_23143;
var state_23191__$1 = (function (){var statearr_23227 = state_23191;
(statearr_23227[(17)] = inst_23142);

(statearr_23227[(13)] = inst_23133__$1);

(statearr_23227[(14)] = inst_23135__$1);

(statearr_23227[(15)] = inst_23134__$1);

(statearr_23227[(16)] = inst_23132__$1);

return statearr_23227;
})();
var statearr_23228_23262 = state_23191__$1;
(statearr_23228_23262[(2)] = null);

(statearr_23228_23262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (18))){
var inst_23161 = (state_23191[(2)]);
var state_23191__$1 = state_23191;
var statearr_23229_23263 = state_23191__$1;
(statearr_23229_23263[(2)] = inst_23161);

(statearr_23229_23263[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (8))){
var inst_23135 = (state_23191[(14)]);
var inst_23134 = (state_23191[(15)]);
var inst_23137 = (inst_23135 < inst_23134);
var inst_23138 = inst_23137;
var state_23191__$1 = state_23191;
if(cljs.core.truth_(inst_23138)){
var statearr_23230_23264 = state_23191__$1;
(statearr_23230_23264[(1)] = (10));

} else {
var statearr_23231_23265 = state_23191__$1;
(statearr_23231_23265[(1)] = (11));

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
});})(c__22017__auto___23237,mults,ensure_mult,p))
;
return ((function (switch__21929__auto__,c__22017__auto___23237,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21930__auto__ = null;
var cljs$core$async$state_machine__21930__auto____0 = (function (){
var statearr_23232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23232[(0)] = cljs$core$async$state_machine__21930__auto__);

(statearr_23232[(1)] = (1));

return statearr_23232;
});
var cljs$core$async$state_machine__21930__auto____1 = (function (state_23191){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_23191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e23233){if((e23233 instanceof Object)){
var ex__21933__auto__ = e23233;
var statearr_23234_23266 = state_23191;
(statearr_23234_23266[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23267 = state_23191;
state_23191 = G__23267;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
cljs$core$async$state_machine__21930__auto__ = function(state_23191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21930__auto____1.call(this,state_23191);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21930__auto____0;
cljs$core$async$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21930__auto____1;
return cljs$core$async$state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto___23237,mults,ensure_mult,p))
})();
var state__22019__auto__ = (function (){var statearr_23235 = f__22018__auto__.call(null);
(statearr_23235[(6)] = c__22017__auto___23237);

return statearr_23235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto___23237,mults,ensure_mult,p))
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
var G__23269 = arguments.length;
switch (G__23269) {
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
var G__23272 = arguments.length;
switch (G__23272) {
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
var G__23275 = arguments.length;
switch (G__23275) {
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
var c__22017__auto___23342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto___23342,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto___23342,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23314){
var state_val_23315 = (state_23314[(1)]);
if((state_val_23315 === (7))){
var state_23314__$1 = state_23314;
var statearr_23316_23343 = state_23314__$1;
(statearr_23316_23343[(2)] = null);

(statearr_23316_23343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23315 === (1))){
var state_23314__$1 = state_23314;
var statearr_23317_23344 = state_23314__$1;
(statearr_23317_23344[(2)] = null);

(statearr_23317_23344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23315 === (4))){
var inst_23278 = (state_23314[(7)]);
var inst_23280 = (inst_23278 < cnt);
var state_23314__$1 = state_23314;
if(cljs.core.truth_(inst_23280)){
var statearr_23318_23345 = state_23314__$1;
(statearr_23318_23345[(1)] = (6));

} else {
var statearr_23319_23346 = state_23314__$1;
(statearr_23319_23346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23315 === (15))){
var inst_23310 = (state_23314[(2)]);
var state_23314__$1 = state_23314;
var statearr_23320_23347 = state_23314__$1;
(statearr_23320_23347[(2)] = inst_23310);

(statearr_23320_23347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23315 === (13))){
var inst_23303 = cljs.core.async.close_BANG_.call(null,out);
var state_23314__$1 = state_23314;
var statearr_23321_23348 = state_23314__$1;
(statearr_23321_23348[(2)] = inst_23303);

(statearr_23321_23348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23315 === (6))){
var state_23314__$1 = state_23314;
var statearr_23322_23349 = state_23314__$1;
(statearr_23322_23349[(2)] = null);

(statearr_23322_23349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23315 === (3))){
var inst_23312 = (state_23314[(2)]);
var state_23314__$1 = state_23314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23314__$1,inst_23312);
} else {
if((state_val_23315 === (12))){
var inst_23300 = (state_23314[(8)]);
var inst_23300__$1 = (state_23314[(2)]);
var inst_23301 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23300__$1);
var state_23314__$1 = (function (){var statearr_23323 = state_23314;
(statearr_23323[(8)] = inst_23300__$1);

return statearr_23323;
})();
if(cljs.core.truth_(inst_23301)){
var statearr_23324_23350 = state_23314__$1;
(statearr_23324_23350[(1)] = (13));

} else {
var statearr_23325_23351 = state_23314__$1;
(statearr_23325_23351[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23315 === (2))){
var inst_23277 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23278 = (0);
var state_23314__$1 = (function (){var statearr_23326 = state_23314;
(statearr_23326[(9)] = inst_23277);

(statearr_23326[(7)] = inst_23278);

return statearr_23326;
})();
var statearr_23327_23352 = state_23314__$1;
(statearr_23327_23352[(2)] = null);

(statearr_23327_23352[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23315 === (11))){
var inst_23278 = (state_23314[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23314,(10),Object,null,(9));
var inst_23287 = chs__$1.call(null,inst_23278);
var inst_23288 = done.call(null,inst_23278);
var inst_23289 = cljs.core.async.take_BANG_.call(null,inst_23287,inst_23288);
var state_23314__$1 = state_23314;
var statearr_23328_23353 = state_23314__$1;
(statearr_23328_23353[(2)] = inst_23289);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23314__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23315 === (9))){
var inst_23278 = (state_23314[(7)]);
var inst_23291 = (state_23314[(2)]);
var inst_23292 = (inst_23278 + (1));
var inst_23278__$1 = inst_23292;
var state_23314__$1 = (function (){var statearr_23329 = state_23314;
(statearr_23329[(10)] = inst_23291);

(statearr_23329[(7)] = inst_23278__$1);

return statearr_23329;
})();
var statearr_23330_23354 = state_23314__$1;
(statearr_23330_23354[(2)] = null);

(statearr_23330_23354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23315 === (5))){
var inst_23298 = (state_23314[(2)]);
var state_23314__$1 = (function (){var statearr_23331 = state_23314;
(statearr_23331[(11)] = inst_23298);

return statearr_23331;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23314__$1,(12),dchan);
} else {
if((state_val_23315 === (14))){
var inst_23300 = (state_23314[(8)]);
var inst_23305 = cljs.core.apply.call(null,f,inst_23300);
var state_23314__$1 = state_23314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23314__$1,(16),out,inst_23305);
} else {
if((state_val_23315 === (16))){
var inst_23307 = (state_23314[(2)]);
var state_23314__$1 = (function (){var statearr_23332 = state_23314;
(statearr_23332[(12)] = inst_23307);

return statearr_23332;
})();
var statearr_23333_23355 = state_23314__$1;
(statearr_23333_23355[(2)] = null);

(statearr_23333_23355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23315 === (10))){
var inst_23282 = (state_23314[(2)]);
var inst_23283 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23314__$1 = (function (){var statearr_23334 = state_23314;
(statearr_23334[(13)] = inst_23282);

return statearr_23334;
})();
var statearr_23335_23356 = state_23314__$1;
(statearr_23335_23356[(2)] = inst_23283);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23314__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23315 === (8))){
var inst_23296 = (state_23314[(2)]);
var state_23314__$1 = state_23314;
var statearr_23336_23357 = state_23314__$1;
(statearr_23336_23357[(2)] = inst_23296);

(statearr_23336_23357[(1)] = (5));


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
});})(c__22017__auto___23342,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21929__auto__,c__22017__auto___23342,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21930__auto__ = null;
var cljs$core$async$state_machine__21930__auto____0 = (function (){
var statearr_23337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23337[(0)] = cljs$core$async$state_machine__21930__auto__);

(statearr_23337[(1)] = (1));

return statearr_23337;
});
var cljs$core$async$state_machine__21930__auto____1 = (function (state_23314){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_23314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e23338){if((e23338 instanceof Object)){
var ex__21933__auto__ = e23338;
var statearr_23339_23358 = state_23314;
(statearr_23339_23358[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23359 = state_23314;
state_23314 = G__23359;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
cljs$core$async$state_machine__21930__auto__ = function(state_23314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21930__auto____1.call(this,state_23314);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21930__auto____0;
cljs$core$async$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21930__auto____1;
return cljs$core$async$state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto___23342,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22019__auto__ = (function (){var statearr_23340 = f__22018__auto__.call(null);
(statearr_23340[(6)] = c__22017__auto___23342);

return statearr_23340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto___23342,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__23362 = arguments.length;
switch (G__23362) {
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
var c__22017__auto___23416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto___23416,out){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto___23416,out){
return (function (state_23394){
var state_val_23395 = (state_23394[(1)]);
if((state_val_23395 === (7))){
var inst_23374 = (state_23394[(7)]);
var inst_23373 = (state_23394[(8)]);
var inst_23373__$1 = (state_23394[(2)]);
var inst_23374__$1 = cljs.core.nth.call(null,inst_23373__$1,(0),null);
var inst_23375 = cljs.core.nth.call(null,inst_23373__$1,(1),null);
var inst_23376 = (inst_23374__$1 == null);
var state_23394__$1 = (function (){var statearr_23396 = state_23394;
(statearr_23396[(9)] = inst_23375);

(statearr_23396[(7)] = inst_23374__$1);

(statearr_23396[(8)] = inst_23373__$1);

return statearr_23396;
})();
if(cljs.core.truth_(inst_23376)){
var statearr_23397_23417 = state_23394__$1;
(statearr_23397_23417[(1)] = (8));

} else {
var statearr_23398_23418 = state_23394__$1;
(statearr_23398_23418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23395 === (1))){
var inst_23363 = cljs.core.vec.call(null,chs);
var inst_23364 = inst_23363;
var state_23394__$1 = (function (){var statearr_23399 = state_23394;
(statearr_23399[(10)] = inst_23364);

return statearr_23399;
})();
var statearr_23400_23419 = state_23394__$1;
(statearr_23400_23419[(2)] = null);

(statearr_23400_23419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23395 === (4))){
var inst_23364 = (state_23394[(10)]);
var state_23394__$1 = state_23394;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23394__$1,(7),inst_23364);
} else {
if((state_val_23395 === (6))){
var inst_23390 = (state_23394[(2)]);
var state_23394__$1 = state_23394;
var statearr_23401_23420 = state_23394__$1;
(statearr_23401_23420[(2)] = inst_23390);

(statearr_23401_23420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23395 === (3))){
var inst_23392 = (state_23394[(2)]);
var state_23394__$1 = state_23394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23394__$1,inst_23392);
} else {
if((state_val_23395 === (2))){
var inst_23364 = (state_23394[(10)]);
var inst_23366 = cljs.core.count.call(null,inst_23364);
var inst_23367 = (inst_23366 > (0));
var state_23394__$1 = state_23394;
if(cljs.core.truth_(inst_23367)){
var statearr_23403_23421 = state_23394__$1;
(statearr_23403_23421[(1)] = (4));

} else {
var statearr_23404_23422 = state_23394__$1;
(statearr_23404_23422[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23395 === (11))){
var inst_23364 = (state_23394[(10)]);
var inst_23383 = (state_23394[(2)]);
var tmp23402 = inst_23364;
var inst_23364__$1 = tmp23402;
var state_23394__$1 = (function (){var statearr_23405 = state_23394;
(statearr_23405[(10)] = inst_23364__$1);

(statearr_23405[(11)] = inst_23383);

return statearr_23405;
})();
var statearr_23406_23423 = state_23394__$1;
(statearr_23406_23423[(2)] = null);

(statearr_23406_23423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23395 === (9))){
var inst_23374 = (state_23394[(7)]);
var state_23394__$1 = state_23394;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23394__$1,(11),out,inst_23374);
} else {
if((state_val_23395 === (5))){
var inst_23388 = cljs.core.async.close_BANG_.call(null,out);
var state_23394__$1 = state_23394;
var statearr_23407_23424 = state_23394__$1;
(statearr_23407_23424[(2)] = inst_23388);

(statearr_23407_23424[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23395 === (10))){
var inst_23386 = (state_23394[(2)]);
var state_23394__$1 = state_23394;
var statearr_23408_23425 = state_23394__$1;
(statearr_23408_23425[(2)] = inst_23386);

(statearr_23408_23425[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23395 === (8))){
var inst_23364 = (state_23394[(10)]);
var inst_23375 = (state_23394[(9)]);
var inst_23374 = (state_23394[(7)]);
var inst_23373 = (state_23394[(8)]);
var inst_23378 = (function (){var cs = inst_23364;
var vec__23369 = inst_23373;
var v = inst_23374;
var c = inst_23375;
return ((function (cs,vec__23369,v,c,inst_23364,inst_23375,inst_23374,inst_23373,state_val_23395,c__22017__auto___23416,out){
return (function (p1__23360_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23360_SHARP_);
});
;})(cs,vec__23369,v,c,inst_23364,inst_23375,inst_23374,inst_23373,state_val_23395,c__22017__auto___23416,out))
})();
var inst_23379 = cljs.core.filterv.call(null,inst_23378,inst_23364);
var inst_23364__$1 = inst_23379;
var state_23394__$1 = (function (){var statearr_23409 = state_23394;
(statearr_23409[(10)] = inst_23364__$1);

return statearr_23409;
})();
var statearr_23410_23426 = state_23394__$1;
(statearr_23410_23426[(2)] = null);

(statearr_23410_23426[(1)] = (2));


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
});})(c__22017__auto___23416,out))
;
return ((function (switch__21929__auto__,c__22017__auto___23416,out){
return (function() {
var cljs$core$async$state_machine__21930__auto__ = null;
var cljs$core$async$state_machine__21930__auto____0 = (function (){
var statearr_23411 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23411[(0)] = cljs$core$async$state_machine__21930__auto__);

(statearr_23411[(1)] = (1));

return statearr_23411;
});
var cljs$core$async$state_machine__21930__auto____1 = (function (state_23394){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_23394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e23412){if((e23412 instanceof Object)){
var ex__21933__auto__ = e23412;
var statearr_23413_23427 = state_23394;
(statearr_23413_23427[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23428 = state_23394;
state_23394 = G__23428;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
cljs$core$async$state_machine__21930__auto__ = function(state_23394){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21930__auto____1.call(this,state_23394);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21930__auto____0;
cljs$core$async$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21930__auto____1;
return cljs$core$async$state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto___23416,out))
})();
var state__22019__auto__ = (function (){var statearr_23414 = f__22018__auto__.call(null);
(statearr_23414[(6)] = c__22017__auto___23416);

return statearr_23414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto___23416,out))
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
var G__23430 = arguments.length;
switch (G__23430) {
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
var c__22017__auto___23475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto___23475,out){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto___23475,out){
return (function (state_23454){
var state_val_23455 = (state_23454[(1)]);
if((state_val_23455 === (7))){
var inst_23436 = (state_23454[(7)]);
var inst_23436__$1 = (state_23454[(2)]);
var inst_23437 = (inst_23436__$1 == null);
var inst_23438 = cljs.core.not.call(null,inst_23437);
var state_23454__$1 = (function (){var statearr_23456 = state_23454;
(statearr_23456[(7)] = inst_23436__$1);

return statearr_23456;
})();
if(inst_23438){
var statearr_23457_23476 = state_23454__$1;
(statearr_23457_23476[(1)] = (8));

} else {
var statearr_23458_23477 = state_23454__$1;
(statearr_23458_23477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23455 === (1))){
var inst_23431 = (0);
var state_23454__$1 = (function (){var statearr_23459 = state_23454;
(statearr_23459[(8)] = inst_23431);

return statearr_23459;
})();
var statearr_23460_23478 = state_23454__$1;
(statearr_23460_23478[(2)] = null);

(statearr_23460_23478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23455 === (4))){
var state_23454__$1 = state_23454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23454__$1,(7),ch);
} else {
if((state_val_23455 === (6))){
var inst_23449 = (state_23454[(2)]);
var state_23454__$1 = state_23454;
var statearr_23461_23479 = state_23454__$1;
(statearr_23461_23479[(2)] = inst_23449);

(statearr_23461_23479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23455 === (3))){
var inst_23451 = (state_23454[(2)]);
var inst_23452 = cljs.core.async.close_BANG_.call(null,out);
var state_23454__$1 = (function (){var statearr_23462 = state_23454;
(statearr_23462[(9)] = inst_23451);

return statearr_23462;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23454__$1,inst_23452);
} else {
if((state_val_23455 === (2))){
var inst_23431 = (state_23454[(8)]);
var inst_23433 = (inst_23431 < n);
var state_23454__$1 = state_23454;
if(cljs.core.truth_(inst_23433)){
var statearr_23463_23480 = state_23454__$1;
(statearr_23463_23480[(1)] = (4));

} else {
var statearr_23464_23481 = state_23454__$1;
(statearr_23464_23481[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23455 === (11))){
var inst_23431 = (state_23454[(8)]);
var inst_23441 = (state_23454[(2)]);
var inst_23442 = (inst_23431 + (1));
var inst_23431__$1 = inst_23442;
var state_23454__$1 = (function (){var statearr_23465 = state_23454;
(statearr_23465[(8)] = inst_23431__$1);

(statearr_23465[(10)] = inst_23441);

return statearr_23465;
})();
var statearr_23466_23482 = state_23454__$1;
(statearr_23466_23482[(2)] = null);

(statearr_23466_23482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23455 === (9))){
var state_23454__$1 = state_23454;
var statearr_23467_23483 = state_23454__$1;
(statearr_23467_23483[(2)] = null);

(statearr_23467_23483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23455 === (5))){
var state_23454__$1 = state_23454;
var statearr_23468_23484 = state_23454__$1;
(statearr_23468_23484[(2)] = null);

(statearr_23468_23484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23455 === (10))){
var inst_23446 = (state_23454[(2)]);
var state_23454__$1 = state_23454;
var statearr_23469_23485 = state_23454__$1;
(statearr_23469_23485[(2)] = inst_23446);

(statearr_23469_23485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23455 === (8))){
var inst_23436 = (state_23454[(7)]);
var state_23454__$1 = state_23454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23454__$1,(11),out,inst_23436);
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
});})(c__22017__auto___23475,out))
;
return ((function (switch__21929__auto__,c__22017__auto___23475,out){
return (function() {
var cljs$core$async$state_machine__21930__auto__ = null;
var cljs$core$async$state_machine__21930__auto____0 = (function (){
var statearr_23470 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23470[(0)] = cljs$core$async$state_machine__21930__auto__);

(statearr_23470[(1)] = (1));

return statearr_23470;
});
var cljs$core$async$state_machine__21930__auto____1 = (function (state_23454){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_23454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e23471){if((e23471 instanceof Object)){
var ex__21933__auto__ = e23471;
var statearr_23472_23486 = state_23454;
(statearr_23472_23486[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23487 = state_23454;
state_23454 = G__23487;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
cljs$core$async$state_machine__21930__auto__ = function(state_23454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21930__auto____1.call(this,state_23454);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21930__auto____0;
cljs$core$async$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21930__auto____1;
return cljs$core$async$state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto___23475,out))
})();
var state__22019__auto__ = (function (){var statearr_23473 = f__22018__auto__.call(null);
(statearr_23473[(6)] = c__22017__auto___23475);

return statearr_23473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto___23475,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23489 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23489 = (function (f,ch,meta23490){
this.f = f;
this.ch = ch;
this.meta23490 = meta23490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23491,meta23490__$1){
var self__ = this;
var _23491__$1 = this;
return (new cljs.core.async.t_cljs$core$async23489(self__.f,self__.ch,meta23490__$1));
});

cljs.core.async.t_cljs$core$async23489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23491){
var self__ = this;
var _23491__$1 = this;
return self__.meta23490;
});

cljs.core.async.t_cljs$core$async23489.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23489.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23489.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23489.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23489.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23492 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23492 = (function (f,ch,meta23490,_,fn1,meta23493){
this.f = f;
this.ch = ch;
this.meta23490 = meta23490;
this._ = _;
this.fn1 = fn1;
this.meta23493 = meta23493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23494,meta23493__$1){
var self__ = this;
var _23494__$1 = this;
return (new cljs.core.async.t_cljs$core$async23492(self__.f,self__.ch,self__.meta23490,self__._,self__.fn1,meta23493__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23492.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23494){
var self__ = this;
var _23494__$1 = this;
return self__.meta23493;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23492.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23492.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23492.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23492.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23488_SHARP_){
return f1.call(null,(((p1__23488_SHARP_ == null))?null:self__.f.call(null,p1__23488_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23492.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23490","meta23490",768663333,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23489","cljs.core.async/t_cljs$core$async23489",-603612885,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23493","meta23493",-1640781842,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23492.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23492";

cljs.core.async.t_cljs$core$async23492.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23492");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23492.
 */
cljs.core.async.__GT_t_cljs$core$async23492 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23492(f__$1,ch__$1,meta23490__$1,___$2,fn1__$1,meta23493){
return (new cljs.core.async.t_cljs$core$async23492(f__$1,ch__$1,meta23490__$1,___$2,fn1__$1,meta23493));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23492(self__.f,self__.ch,self__.meta23490,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async23489.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23489.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23490","meta23490",768663333,null)], null);
});

cljs.core.async.t_cljs$core$async23489.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23489";

cljs.core.async.t_cljs$core$async23489.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23489");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23489.
 */
cljs.core.async.__GT_t_cljs$core$async23489 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23489(f__$1,ch__$1,meta23490){
return (new cljs.core.async.t_cljs$core$async23489(f__$1,ch__$1,meta23490));
});

}

return (new cljs.core.async.t_cljs$core$async23489(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23495 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23495 = (function (f,ch,meta23496){
this.f = f;
this.ch = ch;
this.meta23496 = meta23496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23497,meta23496__$1){
var self__ = this;
var _23497__$1 = this;
return (new cljs.core.async.t_cljs$core$async23495(self__.f,self__.ch,meta23496__$1));
});

cljs.core.async.t_cljs$core$async23495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23497){
var self__ = this;
var _23497__$1 = this;
return self__.meta23496;
});

cljs.core.async.t_cljs$core$async23495.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23495.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23495.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23495.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23495.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23495.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23495.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23496","meta23496",-617658260,null)], null);
});

cljs.core.async.t_cljs$core$async23495.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23495";

cljs.core.async.t_cljs$core$async23495.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23495");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23495.
 */
cljs.core.async.__GT_t_cljs$core$async23495 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23495(f__$1,ch__$1,meta23496){
return (new cljs.core.async.t_cljs$core$async23495(f__$1,ch__$1,meta23496));
});

}

return (new cljs.core.async.t_cljs$core$async23495(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23498 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23498 = (function (p,ch,meta23499){
this.p = p;
this.ch = ch;
this.meta23499 = meta23499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23500,meta23499__$1){
var self__ = this;
var _23500__$1 = this;
return (new cljs.core.async.t_cljs$core$async23498(self__.p,self__.ch,meta23499__$1));
});

cljs.core.async.t_cljs$core$async23498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23500){
var self__ = this;
var _23500__$1 = this;
return self__.meta23499;
});

cljs.core.async.t_cljs$core$async23498.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23498.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23498.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23498.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23498.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23498.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23498.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23499","meta23499",-863303415,null)], null);
});

cljs.core.async.t_cljs$core$async23498.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23498";

cljs.core.async.t_cljs$core$async23498.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23498");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23498.
 */
cljs.core.async.__GT_t_cljs$core$async23498 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23498(p__$1,ch__$1,meta23499){
return (new cljs.core.async.t_cljs$core$async23498(p__$1,ch__$1,meta23499));
});

}

return (new cljs.core.async.t_cljs$core$async23498(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__23502 = arguments.length;
switch (G__23502) {
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
var c__22017__auto___23542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto___23542,out){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto___23542,out){
return (function (state_23523){
var state_val_23524 = (state_23523[(1)]);
if((state_val_23524 === (7))){
var inst_23519 = (state_23523[(2)]);
var state_23523__$1 = state_23523;
var statearr_23525_23543 = state_23523__$1;
(statearr_23525_23543[(2)] = inst_23519);

(statearr_23525_23543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23524 === (1))){
var state_23523__$1 = state_23523;
var statearr_23526_23544 = state_23523__$1;
(statearr_23526_23544[(2)] = null);

(statearr_23526_23544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23524 === (4))){
var inst_23505 = (state_23523[(7)]);
var inst_23505__$1 = (state_23523[(2)]);
var inst_23506 = (inst_23505__$1 == null);
var state_23523__$1 = (function (){var statearr_23527 = state_23523;
(statearr_23527[(7)] = inst_23505__$1);

return statearr_23527;
})();
if(cljs.core.truth_(inst_23506)){
var statearr_23528_23545 = state_23523__$1;
(statearr_23528_23545[(1)] = (5));

} else {
var statearr_23529_23546 = state_23523__$1;
(statearr_23529_23546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23524 === (6))){
var inst_23505 = (state_23523[(7)]);
var inst_23510 = p.call(null,inst_23505);
var state_23523__$1 = state_23523;
if(cljs.core.truth_(inst_23510)){
var statearr_23530_23547 = state_23523__$1;
(statearr_23530_23547[(1)] = (8));

} else {
var statearr_23531_23548 = state_23523__$1;
(statearr_23531_23548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23524 === (3))){
var inst_23521 = (state_23523[(2)]);
var state_23523__$1 = state_23523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23523__$1,inst_23521);
} else {
if((state_val_23524 === (2))){
var state_23523__$1 = state_23523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23523__$1,(4),ch);
} else {
if((state_val_23524 === (11))){
var inst_23513 = (state_23523[(2)]);
var state_23523__$1 = state_23523;
var statearr_23532_23549 = state_23523__$1;
(statearr_23532_23549[(2)] = inst_23513);

(statearr_23532_23549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23524 === (9))){
var state_23523__$1 = state_23523;
var statearr_23533_23550 = state_23523__$1;
(statearr_23533_23550[(2)] = null);

(statearr_23533_23550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23524 === (5))){
var inst_23508 = cljs.core.async.close_BANG_.call(null,out);
var state_23523__$1 = state_23523;
var statearr_23534_23551 = state_23523__$1;
(statearr_23534_23551[(2)] = inst_23508);

(statearr_23534_23551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23524 === (10))){
var inst_23516 = (state_23523[(2)]);
var state_23523__$1 = (function (){var statearr_23535 = state_23523;
(statearr_23535[(8)] = inst_23516);

return statearr_23535;
})();
var statearr_23536_23552 = state_23523__$1;
(statearr_23536_23552[(2)] = null);

(statearr_23536_23552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23524 === (8))){
var inst_23505 = (state_23523[(7)]);
var state_23523__$1 = state_23523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23523__$1,(11),out,inst_23505);
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
});})(c__22017__auto___23542,out))
;
return ((function (switch__21929__auto__,c__22017__auto___23542,out){
return (function() {
var cljs$core$async$state_machine__21930__auto__ = null;
var cljs$core$async$state_machine__21930__auto____0 = (function (){
var statearr_23537 = [null,null,null,null,null,null,null,null,null];
(statearr_23537[(0)] = cljs$core$async$state_machine__21930__auto__);

(statearr_23537[(1)] = (1));

return statearr_23537;
});
var cljs$core$async$state_machine__21930__auto____1 = (function (state_23523){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_23523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e23538){if((e23538 instanceof Object)){
var ex__21933__auto__ = e23538;
var statearr_23539_23553 = state_23523;
(statearr_23539_23553[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23554 = state_23523;
state_23523 = G__23554;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
cljs$core$async$state_machine__21930__auto__ = function(state_23523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21930__auto____1.call(this,state_23523);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21930__auto____0;
cljs$core$async$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21930__auto____1;
return cljs$core$async$state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto___23542,out))
})();
var state__22019__auto__ = (function (){var statearr_23540 = f__22018__auto__.call(null);
(statearr_23540[(6)] = c__22017__auto___23542);

return statearr_23540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto___23542,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__23556 = arguments.length;
switch (G__23556) {
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
var c__22017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto__){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto__){
return (function (state_23619){
var state_val_23620 = (state_23619[(1)]);
if((state_val_23620 === (7))){
var inst_23615 = (state_23619[(2)]);
var state_23619__$1 = state_23619;
var statearr_23621_23659 = state_23619__$1;
(statearr_23621_23659[(2)] = inst_23615);

(statearr_23621_23659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23620 === (20))){
var inst_23585 = (state_23619[(7)]);
var inst_23596 = (state_23619[(2)]);
var inst_23597 = cljs.core.next.call(null,inst_23585);
var inst_23571 = inst_23597;
var inst_23572 = null;
var inst_23573 = (0);
var inst_23574 = (0);
var state_23619__$1 = (function (){var statearr_23622 = state_23619;
(statearr_23622[(8)] = inst_23571);

(statearr_23622[(9)] = inst_23573);

(statearr_23622[(10)] = inst_23596);

(statearr_23622[(11)] = inst_23574);

(statearr_23622[(12)] = inst_23572);

return statearr_23622;
})();
var statearr_23623_23660 = state_23619__$1;
(statearr_23623_23660[(2)] = null);

(statearr_23623_23660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23620 === (1))){
var state_23619__$1 = state_23619;
var statearr_23624_23661 = state_23619__$1;
(statearr_23624_23661[(2)] = null);

(statearr_23624_23661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23620 === (4))){
var inst_23560 = (state_23619[(13)]);
var inst_23560__$1 = (state_23619[(2)]);
var inst_23561 = (inst_23560__$1 == null);
var state_23619__$1 = (function (){var statearr_23625 = state_23619;
(statearr_23625[(13)] = inst_23560__$1);

return statearr_23625;
})();
if(cljs.core.truth_(inst_23561)){
var statearr_23626_23662 = state_23619__$1;
(statearr_23626_23662[(1)] = (5));

} else {
var statearr_23627_23663 = state_23619__$1;
(statearr_23627_23663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23620 === (15))){
var state_23619__$1 = state_23619;
var statearr_23631_23664 = state_23619__$1;
(statearr_23631_23664[(2)] = null);

(statearr_23631_23664[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23620 === (21))){
var state_23619__$1 = state_23619;
var statearr_23632_23665 = state_23619__$1;
(statearr_23632_23665[(2)] = null);

(statearr_23632_23665[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23620 === (13))){
var inst_23571 = (state_23619[(8)]);
var inst_23573 = (state_23619[(9)]);
var inst_23574 = (state_23619[(11)]);
var inst_23572 = (state_23619[(12)]);
var inst_23581 = (state_23619[(2)]);
var inst_23582 = (inst_23574 + (1));
var tmp23628 = inst_23571;
var tmp23629 = inst_23573;
var tmp23630 = inst_23572;
var inst_23571__$1 = tmp23628;
var inst_23572__$1 = tmp23630;
var inst_23573__$1 = tmp23629;
var inst_23574__$1 = inst_23582;
var state_23619__$1 = (function (){var statearr_23633 = state_23619;
(statearr_23633[(8)] = inst_23571__$1);

(statearr_23633[(14)] = inst_23581);

(statearr_23633[(9)] = inst_23573__$1);

(statearr_23633[(11)] = inst_23574__$1);

(statearr_23633[(12)] = inst_23572__$1);

return statearr_23633;
})();
var statearr_23634_23666 = state_23619__$1;
(statearr_23634_23666[(2)] = null);

(statearr_23634_23666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23620 === (22))){
var state_23619__$1 = state_23619;
var statearr_23635_23667 = state_23619__$1;
(statearr_23635_23667[(2)] = null);

(statearr_23635_23667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23620 === (6))){
var inst_23560 = (state_23619[(13)]);
var inst_23569 = f.call(null,inst_23560);
var inst_23570 = cljs.core.seq.call(null,inst_23569);
var inst_23571 = inst_23570;
var inst_23572 = null;
var inst_23573 = (0);
var inst_23574 = (0);
var state_23619__$1 = (function (){var statearr_23636 = state_23619;
(statearr_23636[(8)] = inst_23571);

(statearr_23636[(9)] = inst_23573);

(statearr_23636[(11)] = inst_23574);

(statearr_23636[(12)] = inst_23572);

return statearr_23636;
})();
var statearr_23637_23668 = state_23619__$1;
(statearr_23637_23668[(2)] = null);

(statearr_23637_23668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23620 === (17))){
var inst_23585 = (state_23619[(7)]);
var inst_23589 = cljs.core.chunk_first.call(null,inst_23585);
var inst_23590 = cljs.core.chunk_rest.call(null,inst_23585);
var inst_23591 = cljs.core.count.call(null,inst_23589);
var inst_23571 = inst_23590;
var inst_23572 = inst_23589;
var inst_23573 = inst_23591;
var inst_23574 = (0);
var state_23619__$1 = (function (){var statearr_23638 = state_23619;
(statearr_23638[(8)] = inst_23571);

(statearr_23638[(9)] = inst_23573);

(statearr_23638[(11)] = inst_23574);

(statearr_23638[(12)] = inst_23572);

return statearr_23638;
})();
var statearr_23639_23669 = state_23619__$1;
(statearr_23639_23669[(2)] = null);

(statearr_23639_23669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23620 === (3))){
var inst_23617 = (state_23619[(2)]);
var state_23619__$1 = state_23619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23619__$1,inst_23617);
} else {
if((state_val_23620 === (12))){
var inst_23605 = (state_23619[(2)]);
var state_23619__$1 = state_23619;
var statearr_23640_23670 = state_23619__$1;
(statearr_23640_23670[(2)] = inst_23605);

(statearr_23640_23670[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23620 === (2))){
var state_23619__$1 = state_23619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23619__$1,(4),in$);
} else {
if((state_val_23620 === (23))){
var inst_23613 = (state_23619[(2)]);
var state_23619__$1 = state_23619;
var statearr_23641_23671 = state_23619__$1;
(statearr_23641_23671[(2)] = inst_23613);

(statearr_23641_23671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23620 === (19))){
var inst_23600 = (state_23619[(2)]);
var state_23619__$1 = state_23619;
var statearr_23642_23672 = state_23619__$1;
(statearr_23642_23672[(2)] = inst_23600);

(statearr_23642_23672[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23620 === (11))){
var inst_23571 = (state_23619[(8)]);
var inst_23585 = (state_23619[(7)]);
var inst_23585__$1 = cljs.core.seq.call(null,inst_23571);
var state_23619__$1 = (function (){var statearr_23643 = state_23619;
(statearr_23643[(7)] = inst_23585__$1);

return statearr_23643;
})();
if(inst_23585__$1){
var statearr_23644_23673 = state_23619__$1;
(statearr_23644_23673[(1)] = (14));

} else {
var statearr_23645_23674 = state_23619__$1;
(statearr_23645_23674[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23620 === (9))){
var inst_23607 = (state_23619[(2)]);
var inst_23608 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23619__$1 = (function (){var statearr_23646 = state_23619;
(statearr_23646[(15)] = inst_23607);

return statearr_23646;
})();
if(cljs.core.truth_(inst_23608)){
var statearr_23647_23675 = state_23619__$1;
(statearr_23647_23675[(1)] = (21));

} else {
var statearr_23648_23676 = state_23619__$1;
(statearr_23648_23676[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23620 === (5))){
var inst_23563 = cljs.core.async.close_BANG_.call(null,out);
var state_23619__$1 = state_23619;
var statearr_23649_23677 = state_23619__$1;
(statearr_23649_23677[(2)] = inst_23563);

(statearr_23649_23677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23620 === (14))){
var inst_23585 = (state_23619[(7)]);
var inst_23587 = cljs.core.chunked_seq_QMARK_.call(null,inst_23585);
var state_23619__$1 = state_23619;
if(inst_23587){
var statearr_23650_23678 = state_23619__$1;
(statearr_23650_23678[(1)] = (17));

} else {
var statearr_23651_23679 = state_23619__$1;
(statearr_23651_23679[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23620 === (16))){
var inst_23603 = (state_23619[(2)]);
var state_23619__$1 = state_23619;
var statearr_23652_23680 = state_23619__$1;
(statearr_23652_23680[(2)] = inst_23603);

(statearr_23652_23680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23620 === (10))){
var inst_23574 = (state_23619[(11)]);
var inst_23572 = (state_23619[(12)]);
var inst_23579 = cljs.core._nth.call(null,inst_23572,inst_23574);
var state_23619__$1 = state_23619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23619__$1,(13),out,inst_23579);
} else {
if((state_val_23620 === (18))){
var inst_23585 = (state_23619[(7)]);
var inst_23594 = cljs.core.first.call(null,inst_23585);
var state_23619__$1 = state_23619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23619__$1,(20),out,inst_23594);
} else {
if((state_val_23620 === (8))){
var inst_23573 = (state_23619[(9)]);
var inst_23574 = (state_23619[(11)]);
var inst_23576 = (inst_23574 < inst_23573);
var inst_23577 = inst_23576;
var state_23619__$1 = state_23619;
if(cljs.core.truth_(inst_23577)){
var statearr_23653_23681 = state_23619__$1;
(statearr_23653_23681[(1)] = (10));

} else {
var statearr_23654_23682 = state_23619__$1;
(statearr_23654_23682[(1)] = (11));

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
});})(c__22017__auto__))
;
return ((function (switch__21929__auto__,c__22017__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21930__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21930__auto____0 = (function (){
var statearr_23655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23655[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21930__auto__);

(statearr_23655[(1)] = (1));

return statearr_23655;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21930__auto____1 = (function (state_23619){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_23619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e23656){if((e23656 instanceof Object)){
var ex__21933__auto__ = e23656;
var statearr_23657_23683 = state_23619;
(statearr_23657_23683[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23684 = state_23619;
state_23619 = G__23684;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21930__auto__ = function(state_23619){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21930__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21930__auto____1.call(this,state_23619);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21930__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21930__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto__))
})();
var state__22019__auto__ = (function (){var statearr_23658 = f__22018__auto__.call(null);
(statearr_23658[(6)] = c__22017__auto__);

return statearr_23658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto__))
);

return c__22017__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__23686 = arguments.length;
switch (G__23686) {
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
var G__23689 = arguments.length;
switch (G__23689) {
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
var G__23692 = arguments.length;
switch (G__23692) {
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
var c__22017__auto___23739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto___23739,out){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto___23739,out){
return (function (state_23716){
var state_val_23717 = (state_23716[(1)]);
if((state_val_23717 === (7))){
var inst_23711 = (state_23716[(2)]);
var state_23716__$1 = state_23716;
var statearr_23718_23740 = state_23716__$1;
(statearr_23718_23740[(2)] = inst_23711);

(statearr_23718_23740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23717 === (1))){
var inst_23693 = null;
var state_23716__$1 = (function (){var statearr_23719 = state_23716;
(statearr_23719[(7)] = inst_23693);

return statearr_23719;
})();
var statearr_23720_23741 = state_23716__$1;
(statearr_23720_23741[(2)] = null);

(statearr_23720_23741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23717 === (4))){
var inst_23696 = (state_23716[(8)]);
var inst_23696__$1 = (state_23716[(2)]);
var inst_23697 = (inst_23696__$1 == null);
var inst_23698 = cljs.core.not.call(null,inst_23697);
var state_23716__$1 = (function (){var statearr_23721 = state_23716;
(statearr_23721[(8)] = inst_23696__$1);

return statearr_23721;
})();
if(inst_23698){
var statearr_23722_23742 = state_23716__$1;
(statearr_23722_23742[(1)] = (5));

} else {
var statearr_23723_23743 = state_23716__$1;
(statearr_23723_23743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23717 === (6))){
var state_23716__$1 = state_23716;
var statearr_23724_23744 = state_23716__$1;
(statearr_23724_23744[(2)] = null);

(statearr_23724_23744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23717 === (3))){
var inst_23713 = (state_23716[(2)]);
var inst_23714 = cljs.core.async.close_BANG_.call(null,out);
var state_23716__$1 = (function (){var statearr_23725 = state_23716;
(statearr_23725[(9)] = inst_23713);

return statearr_23725;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23716__$1,inst_23714);
} else {
if((state_val_23717 === (2))){
var state_23716__$1 = state_23716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23716__$1,(4),ch);
} else {
if((state_val_23717 === (11))){
var inst_23696 = (state_23716[(8)]);
var inst_23705 = (state_23716[(2)]);
var inst_23693 = inst_23696;
var state_23716__$1 = (function (){var statearr_23726 = state_23716;
(statearr_23726[(10)] = inst_23705);

(statearr_23726[(7)] = inst_23693);

return statearr_23726;
})();
var statearr_23727_23745 = state_23716__$1;
(statearr_23727_23745[(2)] = null);

(statearr_23727_23745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23717 === (9))){
var inst_23696 = (state_23716[(8)]);
var state_23716__$1 = state_23716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23716__$1,(11),out,inst_23696);
} else {
if((state_val_23717 === (5))){
var inst_23696 = (state_23716[(8)]);
var inst_23693 = (state_23716[(7)]);
var inst_23700 = cljs.core._EQ_.call(null,inst_23696,inst_23693);
var state_23716__$1 = state_23716;
if(inst_23700){
var statearr_23729_23746 = state_23716__$1;
(statearr_23729_23746[(1)] = (8));

} else {
var statearr_23730_23747 = state_23716__$1;
(statearr_23730_23747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23717 === (10))){
var inst_23708 = (state_23716[(2)]);
var state_23716__$1 = state_23716;
var statearr_23731_23748 = state_23716__$1;
(statearr_23731_23748[(2)] = inst_23708);

(statearr_23731_23748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23717 === (8))){
var inst_23693 = (state_23716[(7)]);
var tmp23728 = inst_23693;
var inst_23693__$1 = tmp23728;
var state_23716__$1 = (function (){var statearr_23732 = state_23716;
(statearr_23732[(7)] = inst_23693__$1);

return statearr_23732;
})();
var statearr_23733_23749 = state_23716__$1;
(statearr_23733_23749[(2)] = null);

(statearr_23733_23749[(1)] = (2));


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
});})(c__22017__auto___23739,out))
;
return ((function (switch__21929__auto__,c__22017__auto___23739,out){
return (function() {
var cljs$core$async$state_machine__21930__auto__ = null;
var cljs$core$async$state_machine__21930__auto____0 = (function (){
var statearr_23734 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23734[(0)] = cljs$core$async$state_machine__21930__auto__);

(statearr_23734[(1)] = (1));

return statearr_23734;
});
var cljs$core$async$state_machine__21930__auto____1 = (function (state_23716){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_23716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e23735){if((e23735 instanceof Object)){
var ex__21933__auto__ = e23735;
var statearr_23736_23750 = state_23716;
(statearr_23736_23750[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23751 = state_23716;
state_23716 = G__23751;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
cljs$core$async$state_machine__21930__auto__ = function(state_23716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21930__auto____1.call(this,state_23716);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21930__auto____0;
cljs$core$async$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21930__auto____1;
return cljs$core$async$state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto___23739,out))
})();
var state__22019__auto__ = (function (){var statearr_23737 = f__22018__auto__.call(null);
(statearr_23737[(6)] = c__22017__auto___23739);

return statearr_23737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto___23739,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__23753 = arguments.length;
switch (G__23753) {
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
var c__22017__auto___23819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto___23819,out){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto___23819,out){
return (function (state_23791){
var state_val_23792 = (state_23791[(1)]);
if((state_val_23792 === (7))){
var inst_23787 = (state_23791[(2)]);
var state_23791__$1 = state_23791;
var statearr_23793_23820 = state_23791__$1;
(statearr_23793_23820[(2)] = inst_23787);

(statearr_23793_23820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (1))){
var inst_23754 = (new Array(n));
var inst_23755 = inst_23754;
var inst_23756 = (0);
var state_23791__$1 = (function (){var statearr_23794 = state_23791;
(statearr_23794[(7)] = inst_23756);

(statearr_23794[(8)] = inst_23755);

return statearr_23794;
})();
var statearr_23795_23821 = state_23791__$1;
(statearr_23795_23821[(2)] = null);

(statearr_23795_23821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (4))){
var inst_23759 = (state_23791[(9)]);
var inst_23759__$1 = (state_23791[(2)]);
var inst_23760 = (inst_23759__$1 == null);
var inst_23761 = cljs.core.not.call(null,inst_23760);
var state_23791__$1 = (function (){var statearr_23796 = state_23791;
(statearr_23796[(9)] = inst_23759__$1);

return statearr_23796;
})();
if(inst_23761){
var statearr_23797_23822 = state_23791__$1;
(statearr_23797_23822[(1)] = (5));

} else {
var statearr_23798_23823 = state_23791__$1;
(statearr_23798_23823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (15))){
var inst_23781 = (state_23791[(2)]);
var state_23791__$1 = state_23791;
var statearr_23799_23824 = state_23791__$1;
(statearr_23799_23824[(2)] = inst_23781);

(statearr_23799_23824[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (13))){
var state_23791__$1 = state_23791;
var statearr_23800_23825 = state_23791__$1;
(statearr_23800_23825[(2)] = null);

(statearr_23800_23825[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (6))){
var inst_23756 = (state_23791[(7)]);
var inst_23777 = (inst_23756 > (0));
var state_23791__$1 = state_23791;
if(cljs.core.truth_(inst_23777)){
var statearr_23801_23826 = state_23791__$1;
(statearr_23801_23826[(1)] = (12));

} else {
var statearr_23802_23827 = state_23791__$1;
(statearr_23802_23827[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (3))){
var inst_23789 = (state_23791[(2)]);
var state_23791__$1 = state_23791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23791__$1,inst_23789);
} else {
if((state_val_23792 === (12))){
var inst_23755 = (state_23791[(8)]);
var inst_23779 = cljs.core.vec.call(null,inst_23755);
var state_23791__$1 = state_23791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23791__$1,(15),out,inst_23779);
} else {
if((state_val_23792 === (2))){
var state_23791__$1 = state_23791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23791__$1,(4),ch);
} else {
if((state_val_23792 === (11))){
var inst_23771 = (state_23791[(2)]);
var inst_23772 = (new Array(n));
var inst_23755 = inst_23772;
var inst_23756 = (0);
var state_23791__$1 = (function (){var statearr_23803 = state_23791;
(statearr_23803[(7)] = inst_23756);

(statearr_23803[(8)] = inst_23755);

(statearr_23803[(10)] = inst_23771);

return statearr_23803;
})();
var statearr_23804_23828 = state_23791__$1;
(statearr_23804_23828[(2)] = null);

(statearr_23804_23828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (9))){
var inst_23755 = (state_23791[(8)]);
var inst_23769 = cljs.core.vec.call(null,inst_23755);
var state_23791__$1 = state_23791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23791__$1,(11),out,inst_23769);
} else {
if((state_val_23792 === (5))){
var inst_23756 = (state_23791[(7)]);
var inst_23755 = (state_23791[(8)]);
var inst_23759 = (state_23791[(9)]);
var inst_23764 = (state_23791[(11)]);
var inst_23763 = (inst_23755[inst_23756] = inst_23759);
var inst_23764__$1 = (inst_23756 + (1));
var inst_23765 = (inst_23764__$1 < n);
var state_23791__$1 = (function (){var statearr_23805 = state_23791;
(statearr_23805[(12)] = inst_23763);

(statearr_23805[(11)] = inst_23764__$1);

return statearr_23805;
})();
if(cljs.core.truth_(inst_23765)){
var statearr_23806_23829 = state_23791__$1;
(statearr_23806_23829[(1)] = (8));

} else {
var statearr_23807_23830 = state_23791__$1;
(statearr_23807_23830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (14))){
var inst_23784 = (state_23791[(2)]);
var inst_23785 = cljs.core.async.close_BANG_.call(null,out);
var state_23791__$1 = (function (){var statearr_23809 = state_23791;
(statearr_23809[(13)] = inst_23784);

return statearr_23809;
})();
var statearr_23810_23831 = state_23791__$1;
(statearr_23810_23831[(2)] = inst_23785);

(statearr_23810_23831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (10))){
var inst_23775 = (state_23791[(2)]);
var state_23791__$1 = state_23791;
var statearr_23811_23832 = state_23791__$1;
(statearr_23811_23832[(2)] = inst_23775);

(statearr_23811_23832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (8))){
var inst_23755 = (state_23791[(8)]);
var inst_23764 = (state_23791[(11)]);
var tmp23808 = inst_23755;
var inst_23755__$1 = tmp23808;
var inst_23756 = inst_23764;
var state_23791__$1 = (function (){var statearr_23812 = state_23791;
(statearr_23812[(7)] = inst_23756);

(statearr_23812[(8)] = inst_23755__$1);

return statearr_23812;
})();
var statearr_23813_23833 = state_23791__$1;
(statearr_23813_23833[(2)] = null);

(statearr_23813_23833[(1)] = (2));


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
});})(c__22017__auto___23819,out))
;
return ((function (switch__21929__auto__,c__22017__auto___23819,out){
return (function() {
var cljs$core$async$state_machine__21930__auto__ = null;
var cljs$core$async$state_machine__21930__auto____0 = (function (){
var statearr_23814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23814[(0)] = cljs$core$async$state_machine__21930__auto__);

(statearr_23814[(1)] = (1));

return statearr_23814;
});
var cljs$core$async$state_machine__21930__auto____1 = (function (state_23791){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_23791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e23815){if((e23815 instanceof Object)){
var ex__21933__auto__ = e23815;
var statearr_23816_23834 = state_23791;
(statearr_23816_23834[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23835 = state_23791;
state_23791 = G__23835;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
cljs$core$async$state_machine__21930__auto__ = function(state_23791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21930__auto____1.call(this,state_23791);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21930__auto____0;
cljs$core$async$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21930__auto____1;
return cljs$core$async$state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto___23819,out))
})();
var state__22019__auto__ = (function (){var statearr_23817 = f__22018__auto__.call(null);
(statearr_23817[(6)] = c__22017__auto___23819);

return statearr_23817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto___23819,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__23837 = arguments.length;
switch (G__23837) {
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
var c__22017__auto___23907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22017__auto___23907,out){
return (function (){
var f__22018__auto__ = (function (){var switch__21929__auto__ = ((function (c__22017__auto___23907,out){
return (function (state_23879){
var state_val_23880 = (state_23879[(1)]);
if((state_val_23880 === (7))){
var inst_23875 = (state_23879[(2)]);
var state_23879__$1 = state_23879;
var statearr_23881_23908 = state_23879__$1;
(statearr_23881_23908[(2)] = inst_23875);

(statearr_23881_23908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23880 === (1))){
var inst_23838 = [];
var inst_23839 = inst_23838;
var inst_23840 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23879__$1 = (function (){var statearr_23882 = state_23879;
(statearr_23882[(7)] = inst_23839);

(statearr_23882[(8)] = inst_23840);

return statearr_23882;
})();
var statearr_23883_23909 = state_23879__$1;
(statearr_23883_23909[(2)] = null);

(statearr_23883_23909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23880 === (4))){
var inst_23843 = (state_23879[(9)]);
var inst_23843__$1 = (state_23879[(2)]);
var inst_23844 = (inst_23843__$1 == null);
var inst_23845 = cljs.core.not.call(null,inst_23844);
var state_23879__$1 = (function (){var statearr_23884 = state_23879;
(statearr_23884[(9)] = inst_23843__$1);

return statearr_23884;
})();
if(inst_23845){
var statearr_23885_23910 = state_23879__$1;
(statearr_23885_23910[(1)] = (5));

} else {
var statearr_23886_23911 = state_23879__$1;
(statearr_23886_23911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23880 === (15))){
var inst_23869 = (state_23879[(2)]);
var state_23879__$1 = state_23879;
var statearr_23887_23912 = state_23879__$1;
(statearr_23887_23912[(2)] = inst_23869);

(statearr_23887_23912[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23880 === (13))){
var state_23879__$1 = state_23879;
var statearr_23888_23913 = state_23879__$1;
(statearr_23888_23913[(2)] = null);

(statearr_23888_23913[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23880 === (6))){
var inst_23839 = (state_23879[(7)]);
var inst_23864 = inst_23839.length;
var inst_23865 = (inst_23864 > (0));
var state_23879__$1 = state_23879;
if(cljs.core.truth_(inst_23865)){
var statearr_23889_23914 = state_23879__$1;
(statearr_23889_23914[(1)] = (12));

} else {
var statearr_23890_23915 = state_23879__$1;
(statearr_23890_23915[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23880 === (3))){
var inst_23877 = (state_23879[(2)]);
var state_23879__$1 = state_23879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23879__$1,inst_23877);
} else {
if((state_val_23880 === (12))){
var inst_23839 = (state_23879[(7)]);
var inst_23867 = cljs.core.vec.call(null,inst_23839);
var state_23879__$1 = state_23879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23879__$1,(15),out,inst_23867);
} else {
if((state_val_23880 === (2))){
var state_23879__$1 = state_23879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23879__$1,(4),ch);
} else {
if((state_val_23880 === (11))){
var inst_23843 = (state_23879[(9)]);
var inst_23847 = (state_23879[(10)]);
var inst_23857 = (state_23879[(2)]);
var inst_23858 = [];
var inst_23859 = inst_23858.push(inst_23843);
var inst_23839 = inst_23858;
var inst_23840 = inst_23847;
var state_23879__$1 = (function (){var statearr_23891 = state_23879;
(statearr_23891[(7)] = inst_23839);

(statearr_23891[(8)] = inst_23840);

(statearr_23891[(11)] = inst_23857);

(statearr_23891[(12)] = inst_23859);

return statearr_23891;
})();
var statearr_23892_23916 = state_23879__$1;
(statearr_23892_23916[(2)] = null);

(statearr_23892_23916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23880 === (9))){
var inst_23839 = (state_23879[(7)]);
var inst_23855 = cljs.core.vec.call(null,inst_23839);
var state_23879__$1 = state_23879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23879__$1,(11),out,inst_23855);
} else {
if((state_val_23880 === (5))){
var inst_23840 = (state_23879[(8)]);
var inst_23843 = (state_23879[(9)]);
var inst_23847 = (state_23879[(10)]);
var inst_23847__$1 = f.call(null,inst_23843);
var inst_23848 = cljs.core._EQ_.call(null,inst_23847__$1,inst_23840);
var inst_23849 = cljs.core.keyword_identical_QMARK_.call(null,inst_23840,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23850 = ((inst_23848) || (inst_23849));
var state_23879__$1 = (function (){var statearr_23893 = state_23879;
(statearr_23893[(10)] = inst_23847__$1);

return statearr_23893;
})();
if(cljs.core.truth_(inst_23850)){
var statearr_23894_23917 = state_23879__$1;
(statearr_23894_23917[(1)] = (8));

} else {
var statearr_23895_23918 = state_23879__$1;
(statearr_23895_23918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23880 === (14))){
var inst_23872 = (state_23879[(2)]);
var inst_23873 = cljs.core.async.close_BANG_.call(null,out);
var state_23879__$1 = (function (){var statearr_23897 = state_23879;
(statearr_23897[(13)] = inst_23872);

return statearr_23897;
})();
var statearr_23898_23919 = state_23879__$1;
(statearr_23898_23919[(2)] = inst_23873);

(statearr_23898_23919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23880 === (10))){
var inst_23862 = (state_23879[(2)]);
var state_23879__$1 = state_23879;
var statearr_23899_23920 = state_23879__$1;
(statearr_23899_23920[(2)] = inst_23862);

(statearr_23899_23920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23880 === (8))){
var inst_23839 = (state_23879[(7)]);
var inst_23843 = (state_23879[(9)]);
var inst_23847 = (state_23879[(10)]);
var inst_23852 = inst_23839.push(inst_23843);
var tmp23896 = inst_23839;
var inst_23839__$1 = tmp23896;
var inst_23840 = inst_23847;
var state_23879__$1 = (function (){var statearr_23900 = state_23879;
(statearr_23900[(7)] = inst_23839__$1);

(statearr_23900[(8)] = inst_23840);

(statearr_23900[(14)] = inst_23852);

return statearr_23900;
})();
var statearr_23901_23921 = state_23879__$1;
(statearr_23901_23921[(2)] = null);

(statearr_23901_23921[(1)] = (2));


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
});})(c__22017__auto___23907,out))
;
return ((function (switch__21929__auto__,c__22017__auto___23907,out){
return (function() {
var cljs$core$async$state_machine__21930__auto__ = null;
var cljs$core$async$state_machine__21930__auto____0 = (function (){
var statearr_23902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23902[(0)] = cljs$core$async$state_machine__21930__auto__);

(statearr_23902[(1)] = (1));

return statearr_23902;
});
var cljs$core$async$state_machine__21930__auto____1 = (function (state_23879){
while(true){
var ret_value__21931__auto__ = (function (){try{while(true){
var result__21932__auto__ = switch__21929__auto__.call(null,state_23879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21932__auto__;
}
break;
}
}catch (e23903){if((e23903 instanceof Object)){
var ex__21933__auto__ = e23903;
var statearr_23904_23922 = state_23879;
(statearr_23904_23922[(5)] = ex__21933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23923 = state_23879;
state_23879 = G__23923;
continue;
} else {
return ret_value__21931__auto__;
}
break;
}
});
cljs$core$async$state_machine__21930__auto__ = function(state_23879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21930__auto____1.call(this,state_23879);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21930__auto____0;
cljs$core$async$state_machine__21930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21930__auto____1;
return cljs$core$async$state_machine__21930__auto__;
})()
;})(switch__21929__auto__,c__22017__auto___23907,out))
})();
var state__22019__auto__ = (function (){var statearr_23905 = f__22018__auto__.call(null);
(statearr_23905[(6)] = c__22017__auto___23907);

return statearr_23905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22019__auto__);
});})(c__22017__auto___23907,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1530042227197
