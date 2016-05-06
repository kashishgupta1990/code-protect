$(document).ready(function(){module("Functions"),test("bind",function(){var t={name:"moe"},e=function(t){return"name: "+(this.name||t)},n=_.bind(e,t);equal(n(),"name: moe","can bind a function to a context"),n=_(e).bind(t),equal(n(),"name: moe","can do OO-style binding"),n=_.bind(e,null,"curly"),equal(n(),"name: curly","can bind without specifying a context"),e=function(t,e){return t+": "+e},e=_.bind(e,this,"hello"),equal(e("moe"),"hello: moe","the function was partially applied in advance"),e=_.bind(e,this,"curly"),equal(e(),"hello: curly","the function was completely applied in advance"),e=function(t,e,n){return t+": "+e+" "+n},e=_.bind(e,this,"hello","moe","curly"),equal(e(),"hello: moe curly","the function was partially applied in advance and can accept multiple arguments"),e=function(t,e){equal(this,t,e)},_.bind(e,0,0,"can bind a function to `0`")(),_.bind(e,"","","can bind a function to an empty string")(),_.bind(e,!1,!1,"can bind a function to `false`")();var a=function(){return this},o=_.bind(a,{hello:"moe curly"}),i=new o;equal(i.hello,void 0,"function should not be bound to the context, to comply with ECMAScript 5"),equal(o().hello,"moe curly","When called without the new operator, it's OK to be bound to the context"),ok(i instanceof a,"a bound instance is an instance of the original function")}),test("partial",function(){var t={name:"moe"},e=function(){return this.name+" "+_.toArray(arguments).join(" ")};t.func=_.partial(e,"a","b"),equal(t.func("c","d"),"moe a b c d","can partially apply")}),test("bindAll",function(){var t={name:"curly"},e={name:"moe",getName:function(){return"name: "+this.name},sayHi:function(){return"hi: "+this.name}};t.getName=e.getName,_.bindAll(e,"getName","sayHi"),t.sayHi=e.sayHi,equal(t.getName(),"name: curly","unbound function is bound to current object"),equal(t.sayHi(),"hi: moe","bound function is still bound to original object"),t={name:"curly"},e={name:"moe",getName:function(){return"name: "+this.name},sayHi:function(){return"hi: "+this.name}},raises(function(){_.bindAll(e)},Error,"throws an error for bindAll with no functions named"),_.bindAll(e,"sayHi"),t.sayHi=e.sayHi,equal(t.sayHi(),"hi: moe")}),test("memoize",function(){var t=function(e){return 2>e?e:t(e-1)+t(e-2)};equal(t(10),55,"a memoized version of fibonacci produces identical results"),t=_.memoize(t),equal(t(10),55,"a memoized version of fibonacci produces identical results");var e=function(t){return t},n=_.memoize(e);equal(e("toString"),"toString","checks hasOwnProperty"),equal(n("toString"),"toString","checks hasOwnProperty")}),asyncTest("delay",2,function(){var t=!1;_.delay(function(){t=!0},100),setTimeout(function(){ok(!t,"didn't delay the function quite yet")},50),setTimeout(function(){ok(t,"delayed the function"),start()},150)}),asyncTest("defer",1,function(){var t=!1;_.defer(function(e){t=e},!0),_.delay(function(){ok(t,"deferred the function"),start()},50)}),asyncTest("throttle",2,function(){var t=0,e=function(){t++},n=_.throttle(e,32);n(),n(),equal(t,1,"incr was called immediately"),_.delay(function(){equal(t,2,"incr was throttled"),start()},64)}),asyncTest("throttle arguments",2,function(){var t=0,e=function(e){t=e},n=_.throttle(e,32);n(1),n(2),_.delay(function(){n(3)},64),equal(t,1,"updated to latest value"),_.delay(function(){equal(t,3,"updated to latest value"),start()},96)}),asyncTest("throttle once",2,function(){var t=0,e=function(){return++t},n=_.throttle(e,32),a=n();_.delay(function(){equal(a,1,"throttled functions return their value"),equal(t,1,"incr was called once"),start()},64)}),asyncTest("throttle twice",1,function(){var t=0,e=function(){t++},n=_.throttle(e,32);n(),n(),_.delay(function(){equal(t,2,"incr was called twice"),start()},64)}),asyncTest("more throttling",3,function(){var t=0,e=function(){t++},n=_.throttle(e,30);n(),n(),ok(1==t),_.delay(function(){ok(2==t),n(),ok(3==t),start()},85)}),asyncTest("throttle repeatedly with results",6,function(){var t=0,e=function(){return++t},n=_.throttle(e,100),a=[],o=function(){a.push(n())};o(),o(),_.delay(o,50),_.delay(o,150),_.delay(o,160),_.delay(o,230),_.delay(function(){equal(a[0],1,"incr was called once"),equal(a[1],1,"incr was throttled"),equal(a[2],1,"incr was throttled"),equal(a[3],2,"incr was called twice"),equal(a[4],2,"incr was throttled"),equal(a[5],3,"incr was called trailing"),start()},300)}),asyncTest("throttle triggers trailing call when invoked repeatedly",2,function(){for(var t=0,e=48,n=function(){t++},a=_.throttle(n,32),o=new Date;new Date-o<e;)a();var i=t;ok(t>1),_.delay(function(){ok(t>i),start()},96)}),asyncTest("throttle does not trigger leading call when leading is set to false",2,function(){var t=0,e=function(){t++},n=_.throttle(e,60,{leading:!1});n(),n(),ok(0===t),_.delay(function(){ok(1==t),start()},96)}),asyncTest("more throttle does not trigger leading call when leading is set to false",3,function(){var t=0,e=function(){t++},n=_.throttle(e,100,{leading:!1});n(),_.delay(n,50),_.delay(n,60),_.delay(n,200),ok(0===t),_.delay(function(){ok(1==t)},250),_.delay(function(){ok(2==t),start()},350)}),asyncTest("one more throttle with leading: false test",2,function(){for(var t=0,e=function(){t++},n=_.throttle(e,100,{leading:!1}),a=new Date;new Date-a<350;)n();ok(3>=t),_.delay(function(){ok(4>=t),start()},200)}),asyncTest("throttle does not trigger trailing call when trailing is set to false",4,function(){var t=0,e=function(){t++},n=_.throttle(e,60,{trailing:!1});n(),n(),n(),ok(1===t),_.delay(function(){ok(1==t),n(),n(),ok(2==t),_.delay(function(){ok(2==t),start()},96)},96)}),asyncTest("debounce",1,function(){var t=0,e=function(){t++},n=_.debounce(e,32);n(),n(),_.delay(n,16),_.delay(function(){equal(t,1,"incr was debounced"),start()},96)}),asyncTest("debounce asap",4,function(){var t,e,n=0,a=function(){return++n},o=_.debounce(a,64,!0);t=o(),e=o(),equal(t,1),equal(e,1),equal(n,1,"incr was called immediately"),_.delay(o,16),_.delay(o,32),_.delay(o,48),_.delay(function(){equal(n,1,"incr was debounced"),start()},128)}),asyncTest("debounce asap recursively",2,function(){var t=0,e=_.debounce(function(){t++,10>t&&e()},32,!0);e(),equal(t,1,"incr was called immediately"),_.delay(function(){equal(t,1,"incr was debounced"),start()},96)}),test("once",function(){var t=0,e=_.once(function(){t++});e(),e(),equal(t,1)}),test("Recursive onced function.",1,function(){var t=_.once(function(){ok(!0),t()});t()}),test("wrap",function(){var t=function(t){return"hi: "+t},e=_.wrap(t,function(t,e){return t(e)+" "+e.split("").reverse().join("")});equal(e("moe"),"hi: moe eom","wrapped the salutation function");var n=function(){return"Hello "},a={name:"Moe"};a.hi=_.wrap(n,function(t){return t()+this.name}),equal(a.hi(),"Hello Moe");var o=function(){},i=_.wrap(o,function(t){return Array.prototype.slice.call(arguments,0)}),l=i(["whats","your"],"vector","victor");deepEqual(l,[o,["whats","your"],"vector","victor"])}),test("compose",function(){var t=function(t){return"hi: "+t},e=function(t){return t+"!"},n=_.compose(e,t);equal(n("moe"),"hi: moe!","can compose a function that takes another"),n=_.compose(t,e),equal(n("moe"),"hi: moe!","in this case, the functions are also commutative")}),test("after",function(){var t=function(t,e){for(var n=0,a=_.after(t,function(){n++});e--;)a();return n};equal(t(5,5),1,"after(N) should fire after being called N times"),equal(t(5,4),0,"after(N) should not fire unless called N times"),equal(t(0,0),0,"after(0) should not fire immediately"),equal(t(0,1),1,"after(0) should fire when first invoked")})});