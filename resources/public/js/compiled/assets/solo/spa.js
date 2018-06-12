// Compiled by ClojureScript 1.10.238 {}
goog.provide('solo.spa');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('hipo.interpreter');
goog.require('dommy.core');
if(typeof solo.spa.conn !== 'undefined'){
} else {
solo.spa.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
solo.spa.app_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loggers","loggers",-1191901729),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927),"foo",new cljs.core.Keyword(null,"log-level","log-level",862121670),"DEBUG"], null)], null),new cljs.core.Keyword(null,"hide","hide",-596913169),false], null);
solo.spa.log_levels = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["WARN",null,"ERROR",null,"NOT-SET!",null,"DEBUG",null,"UNKNOWN!",null,"INFO",null,"OFF",null], null), null);
solo.spa.make_options = (function solo$spa$make_options(xs,x){
return cljs.core.map.call(null,(function (o){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,o)], null),o], null);
}),xs);
});
solo.spa.top_of_page = (function solo$spa$top_of_page(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#top-of-page","div#top-of-page",-541693280),"SOLO Web App"," -- ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"generated-doc/index.html"], null),"doc"], null)," -- ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"generated-doc/solo-source.html"], null),"source"], null)," -- ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/henrik42/solo/"], null),"github"], null)], null);
});
solo.spa.set_log_level_form = (function solo$spa$set_log_level_form(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#new-logger","div#new-logger",902215213),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"logger"], null),"LOGGER:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"logger",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Logger Name"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"padding:1em;"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"level"], null)," LEVEL:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"level"], null),solo.spa.make_options.call(null,solo.spa.log_levels,"INFO")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"padding:1em;"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"SET LOG-LEVEL"], null)], null)], null);
});
solo.spa.loggers_form = (function solo$spa$loggers_form(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#loggers","table#loggers",836788857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"LOGGER",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"FILTER",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter Reg-Ex",new cljs.core.Keyword(null,"style","style",-496642736),"float: right;"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"LEVEL",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"float: right;"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"hide"], null)," Hide NOT-SET!:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"id","id",-1388402092),"hide",new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(solo.spa.app_state)], null)], null)], null)], null)], null),(function (){var iter__4292__auto__ = (function solo$spa$loggers_form_$_iter__1382(s__1383){
return (new cljs.core.LazySeq(null,(function (){
var s__1383__$1 = s__1383;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__1383__$1);
if(temp__4657__auto__){
var s__1383__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1383__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__1383__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__1385 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__1384 = (0);
while(true){
if((i__1384 < size__4291__auto__)){
var map__1386 = cljs.core._nth.call(null,c__4290__auto__,i__1384);
var map__1386__$1 = ((((!((map__1386 == null)))?(((((map__1386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1386):map__1386);
var logger_name = cljs.core.get.call(null,map__1386__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var log_level = cljs.core.get.call(null,map__1386__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
cljs.core.chunk_append.call(null,b__1385,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),logger_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"level"], null),solo.spa.make_options.call(null,solo.spa.log_levels,log_level)], null)], null)], null));

var G__1390 = (i__1384 + (1));
i__1384 = G__1390;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1385),solo$spa$loggers_form_$_iter__1382.call(null,cljs.core.chunk_rest.call(null,s__1383__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1385),null);
}
} else {
var map__1388 = cljs.core.first.call(null,s__1383__$2);
var map__1388__$1 = ((((!((map__1388 == null)))?(((((map__1388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1388):map__1388);
var logger_name = cljs.core.get.call(null,map__1388__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var log_level = cljs.core.get.call(null,map__1388__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),logger_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"level"], null),solo.spa.make_options.call(null,solo.spa.log_levels,log_level)], null)], null)], null),solo$spa$loggers_form_$_iter__1382.call(null,cljs.core.rest.call(null,s__1383__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,new cljs.core.Keyword(null,"loggers","loggers",-1191901729).cljs$core$IFn$_invoke$arity$1(solo.spa.app_state));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"REFRESH"], null)], null)], null)], null);
});
solo.spa.main = (function solo$spa$main(){
var root = hipo.interpreter.create.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#main","div#main",-2068630773),solo.spa.top_of_page.call(null),solo.spa.set_log_level_form.call(null),solo.spa.loggers_form.call(null)], null),null);
return document.getElementById("main").replaceWith(root);
});
solo.spa.main.call(null);

//# sourceMappingURL=spa.js.map?rel=1528819929530
