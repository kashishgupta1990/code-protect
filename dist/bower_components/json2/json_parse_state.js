var json_parse=function(){"use strict";function o(o){return o.replace(/\\(?:u(.{4})|([^u]))/g,function(o,n,a){return n?String.fromCharCode(parseInt(n,16)):c[a]})}var n,a,t,e,u,c={"\\":"\\",'"':'"',"/":"/",t:"	",n:"\n",r:"\r",f:"\f",b:"\b"},i={go:function(){n="ok"},firstokey:function(){e=u,n="colon"},okey:function(){e=u,n="colon"},ovalue:function(){n="ocomma"},firstavalue:function(){n="acomma"},avalue:function(){n="acomma"}},r={go:function(){n="ok"},ovalue:function(){n="ocomma"},firstavalue:function(){n="acomma"},avalue:function(){n="acomma"}},f={"{":{go:function(){a.push({state:"ok"}),t={},n="firstokey"},ovalue:function(){a.push({container:t,state:"ocomma",key:e}),t={},n="firstokey"},firstavalue:function(){a.push({container:t,state:"acomma"}),t={},n="firstokey"},avalue:function(){a.push({container:t,state:"acomma"}),t={},n="firstokey"}},"}":{firstokey:function(){var o=a.pop();u=t,t=o.container,e=o.key,n=o.state},ocomma:function(){var o=a.pop();t[e]=u,u=t,t=o.container,e=o.key,n=o.state}},"[":{go:function(){a.push({state:"ok"}),t=[],n="firstavalue"},ovalue:function(){a.push({container:t,state:"ocomma",key:e}),t=[],n="firstavalue"},firstavalue:function(){a.push({container:t,state:"acomma"}),t=[],n="firstavalue"},avalue:function(){a.push({container:t,state:"acomma"}),t=[],n="firstavalue"}},"]":{firstavalue:function(){var o=a.pop();u=t,t=o.container,e=o.key,n=o.state},acomma:function(){var o=a.pop();t.push(u),u=t,t=o.container,e=o.key,n=o.state}},":":{colon:function(){if(Object.hasOwnProperty.call(t,e))throw new SyntaxError('Duplicate key "'+e+'"');n="ovalue"}},",":{ocomma:function(){t[e]=u,n="okey"},acomma:function(){t.push(u),n="avalue"}},"true":{go:function(){u=!0,n="ok"},ovalue:function(){u=!0,n="ocomma"},firstavalue:function(){u=!0,n="acomma"},avalue:function(){u=!0,n="acomma"}},"false":{go:function(){u=!1,n="ok"},ovalue:function(){u=!1,n="ocomma"},firstavalue:function(){u=!1,n="acomma"},avalue:function(){u=!1,n="acomma"}},"null":{go:function(){u=null,n="ok"},ovalue:function(){u=null,n="ocomma"},firstavalue:function(){u=null,n="acomma"},avalue:function(){u=null,n="acomma"}}};return function(t,e){var c,l=/^[\u0020\t\n\r]*(?:([,:\[\]{}]|true|false|null)|(-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)|"((?:[^\r\n\t\\\"]|\\(?:["\\\/trnfb]|u[0-9a-fA-F]{4}))*)")/;n="go",a=[];try{for(;;){if(c=l.exec(t),!c)break;c[1]?f[c[1]][n]():c[2]?(u=+c[2],r[n]()):(u=o(c[3]),i[n]()),t=t.slice(c[0].length)}}catch(s){n=s}if("ok"!==n||/[^\u0020\t\n\r]/.test(t))throw n instanceof SyntaxError?n:new SyntaxError("JSON");return"function"==typeof e?function m(o,n){var a,t,u=o[n];if(u&&"object"==typeof u)for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t=m(u,a),void 0!==t?u[a]=t:delete u[a]);return e.call(o,n,u)}({"":u},""):u}}();