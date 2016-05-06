/**
 * @license AngularJS v1.2.7-build.2025+sha.d1c4766
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */

!function(n,t,a){"use strict";t.module("ngAnimate",["ng"]).config(["$provide","$animateProvider",function(e,i){function r(n){for(var t=0;t<n.length;t++){var a=n[t];if(a.nodeType==f)return a}}function o(n,t){return r(n)==r(t)}var s=t.noop,u=t.forEach,l=i.$$selectors,f=1,d="$$ngAnimateState",c="ng-animate",v={running:!0};e.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement","$timeout","$rootScope","$document",function(n,a,e,f,m,p,g){function y(n){if(n){var t=[],i={},r=n.substr(1).split(".");(e.transitions||e.animations)&&r.push("");for(var o=0;o<r.length;o++){var s=r[o],u=l[s];u&&!i[s]&&(t.push(a.get(u)),i[s]=!0)}return t}}function h(n,t,a,e,i,o,l){function f(n){if(g(),n===!0)return void h();var t=a.data(d);t&&(t.done=h,a.data(d,t)),v(E,"after",h)}function v(e,i,r){function o(n,t){var a=t+"Complete",i=e[n];i[a]=!0,(i[l]||s)();for(var o=0;o<e.length;o++)if(!e[o][a])return;r()}var l=i+"End";u(e,function(e,r){var s=function(){o(r,i)};return"before"!=i||"enter"!=n&&"move"!=n?void(e[i]?e[l]=M?e[i](a,t,s):e[i](a,s):s()):void s()})}function p(){l&&m(l,0,!1)}function g(){g.hasBeenRun||(g.hasBeenRun=!0,o())}function h(){if(!h.hasBeenRun){h.hasBeenRun=!0;var n=a.data(d);n&&(M?b(a):(n.closeAnimationTimeout=m(function(){b(a)},0,!1),a.data(d,n))),p()}}var D,x,A=r(a);if(A&&(D=A.className,x=D+" "+t),!A||!w(x))return g(),void h();var S=(" "+x).replace(/\s+/g,".");e||(e=i?i.parent():a.parent());var k=y(S),M="addClass"==n||"removeClass"==n,N=a.data(d)||{};if($(a,e)||0===k.length)return g(),void h();var E=[];if(N.running&&M&&N.structural||u(k,function(e){if(!e.allowCancel||e.allowCancel(a,n,t)){var i,r=e[n];"leave"==n?(i=r,r=null):i=e["before"+n.charAt(0).toUpperCase()+n.substr(1)],E.push({before:i,after:r})}}),0===E.length)return g(),void p();var T=" "+D+" ";N.running&&(m.cancel(N.closeAnimationTimeout),b(a),C(N.animations),N.beforeComplete?(N.done||s)(!0):M&&!N.structural&&(T="removeClass"==N.event?T.replace(N.className,""):T+N.className+" "));var F=" "+t+" ";return"addClass"==n&&T.indexOf(F)>=0||"removeClass"==n&&-1==T.indexOf(F)?(g(),void p()):(a.addClass(c),a.data(d,{running:!0,event:n,className:t,structural:!M,animations:E,done:f}),void v(E,"before",f))}function D(n){var a=r(n);u(a.querySelectorAll("."+c),function(n){n=t.element(n);var a=n.data(d);a&&(C(a.animations),b(n))})}function C(n){var t=!0;u(n,function(a){n.beforeComplete||(a.beforeEnd||s)(t),n.afterComplete||(a.afterEnd||s)(t)})}function b(n){o(n,f)?v.disabled||(v.running=!1,v.structural=!1):(n.removeClass(c),n.removeData(d))}function $(n,t){if(v.disabled)return!0;if(o(n,f))return v.disabled||v.running;do{if(0===t.length)break;var a=o(t,f),e=a?v:t.data(d),i=e&&(!!e.disabled||!!e.running);if(a||i)return i;if(a)return!0}while(t=t.parent());return!0}f.data(d,v),p.$$postDigest(function(){p.$$postDigest(function(){v.running=!1})});var x=i.classNameFilter(),w=x?function(n){return x.test(n)}:function(){return!0};return{enter:function(t,a,e,i){this.enabled(!1,t),n.enter(t,a,e),p.$$postDigest(function(){h("enter","ng-enter",t,a,e,s,i)})},leave:function(t,a){D(t),this.enabled(!1,t),p.$$postDigest(function(){h("leave","ng-leave",t,null,null,function(){n.leave(t)},a)})},move:function(t,a,e,i){D(t),this.enabled(!1,t),n.move(t,a,e),p.$$postDigest(function(){h("move","ng-move",t,a,e,s,i)})},addClass:function(t,a,e){h("addClass",a,t,null,null,function(){n.addClass(t,a)},e)},removeClass:function(t,a,e){h("removeClass",a,t,null,null,function(){n.removeClass(t,a)},e)},enabled:function(n,t){switch(arguments.length){case 2:if(n)b(t);else{var a=t.data(d)||{};a.disabled=!0,t.data(d,a)}break;case 1:v.disabled=!n;break;default:n=!v.disabled}return!!n}}}]),i.register("",["$window","$sniffer","$timeout",function(e,i,o){function l(n,a){o.cancel(F),H.push(a);var e=r(n);n=t.element(e),J.push(n);var i=n.data(W);L=Math.max(L,(i.maxDelay+i.maxDuration)*q*K),i.animationCount=U,F=o(function(){u(H,function(n){n()});var n=[],t=U;u(J,function(t){n.push(t)}),o(function(){d(n,t),n=null},L,!1),H=[],J=[],F=null,z={},L=0,U++},10,!1)}function d(n,t){u(n,function(n){var a=n.data(W);a&&a.animationCount==t&&(a.closeAnimationFn||s)()})}function c(n,t){var a=t?z[t]:null;if(!a){var i,r,o,s,l=0,d=0,c=0,m=0;u(n,function(n){if(n.nodeType==f){var t=e.getComputedStyle(n)||{};o=t[k+P],l=Math.max(v(o),l),s=t[k+O],i=t[k+R],d=Math.max(v(i),d),r=t[N+R],m=Math.max(v(r),m);var a=v(t[N+P]);a>0&&(a*=parseInt(t[N+B],10)||1),c=Math.max(a,c)}}),a={total:0,transitionPropertyStyle:s,transitionDurationStyle:o,transitionDelayStyle:i,transitionDelay:d,transitionDuration:l,animationDelayStyle:r,animationDelay:m,animationDuration:c},t&&(z[t]=a)}return a}function v(n){var a=0,e=t.isString(n)?n.split(/\s*,\s*/):[];return u(e,function(n){a=Math.max(parseFloat(n)||0,a)}),a}function m(n){var t=n.parent(),a=t.data(I);return a||(t.data(I,++G),a=G),a+"-"+r(n).className}function p(n,t){var a=m(n),e=a+" "+t,i={},r=z[e]?++z[e].total:0;if(r>0){var o=t+"-stagger",s=a+" "+o,l=!z[s];l&&n.addClass(o),i=c(n,s),l&&n.removeClass(o)}n.addClass(t);var f=c(n,e),d=Math.max(f.transitionDelay,f.animationDelay),v=Math.max(f.transitionDuration,f.animationDuration);if(0===v)return n.removeClass(t),!1;var p="";return f.transitionDuration>0?g(n):y(n),u(t.split(" "),function(n,t){p+=(t>0?" ":"")+n+"-active"}),n.data(W,{className:t,activeClassName:p,maxDuration:v,maxDelay:d,classes:t+" "+p,timings:f,stagger:i,ii:r}),!0}function g(n){r(n).style[k+O]="none"}function y(n){r(n).style[N]="none 0s"}function h(n){var t=k+O,a=r(n);a.style[t]&&a.style[t].length>0&&(a.style[t]="")}function D(n){var t=N,a=r(n);a.style[t]&&a.style[t].length>0&&(a.style[t]="")}function C(n,t,a){function e(a){n.off(m,i),n.removeClass(d),A(n,t);var e=r(n);for(var o in y)e.style.removeProperty(y[o])}function i(n){n.stopPropagation();var t=n.originalEvent||n,e=t.$manualTimeStamp||t.timeStamp||Date.now(),i=parseFloat(t.elapsedTime.toFixed(j));Math.max(e-v,0)>=c&&i>=f&&a()}var o=n.data(W),s=r(n);if(-1==s.className.indexOf(t)||!o)return void a();var u=o.timings,l=o.stagger,f=o.maxDuration,d=o.activeClassName,c=Math.max(u.transitionDelay,u.animationDelay)*K,v=Date.now(),m=E+" "+M,p=o.ii,g="",y=[];if(u.transitionDuration>0){var h=u.transitionPropertyStyle;-1==h.indexOf("all")&&(g+=T+"transition-property: "+h+";",g+=T+"transition-duration: "+u.transitionDurationStyle+"s;",y.push(T+"transition-property"),y.push(T+"transition-duration"))}if(p>0){if(l.transitionDelay>0&&0===l.transitionDuration){var D=u.transitionDelayStyle;g+=T+"transition-delay: "+b(D,l.transitionDelay,p)+"; ",y.push(T+"transition-delay")}l.animationDelay>0&&0===l.animationDuration&&(g+=T+"animation-delay: "+b(u.animationDelayStyle,l.animationDelay,p)+"; ",y.push(T+"animation-delay"))}if(y.length>0){var C=s.getAttribute("style")||"";s.setAttribute("style",C+" "+g)}return n.on(m,i),n.addClass(d),o.closeAnimationFn=function(){e(),a()},e}function b(n,t,a){var e="";return u(n.split(","),function(n,i){e+=(i>0?",":"")+(a*t+parseInt(n,10))+"s"}),e}function $(n,t){return p(n,t)?function(a){a&&A(n,t)}:void 0}function x(n,t,a){return n.data(W)?C(n,t,a):(A(n,t),void a())}function w(n,t,a){var e=$(n,t);if(!e)return void a();var i=e;return l(n,function(){h(n),D(n),i=x(n,t,a)}),function(n){(i||s)(n)}}function A(n,t){n.removeClass(t),n.removeData(W)}function S(n,a){var e="";return n=t.isArray(n)?n:n.split(/\s+/),u(n,function(n,t){n&&n.length>0&&(e+=(t>0?" ":"")+n+a)}),e}var k,M,N,E,T="";n.ontransitionend===a&&n.onwebkittransitionend!==a?(T="-webkit-",k="WebkitTransition",M="webkitTransitionEnd transitionend"):(k="transition",M="transitionend"),n.onanimationend===a&&n.onwebkitanimationend!==a?(T="-webkit-",N="WebkitAnimation",E="webkitAnimationEnd animationend"):(N="animation",E="animationend");var F,P="Duration",O="Property",R="Delay",B="IterationCount",I="$$ngAnimateKey",W="$$ngAnimateCSS3Data",j=3,q=1.5,K=1e3,U=0,z={},G=0,H=[],J=[],L=0;return{allowCancel:function(n,a,e){var i=(n.data(W)||{}).classes;if(!i||["enter","leave","move"].indexOf(a)>=0)return!0;var o=n.parent(),s=t.element(r(n).cloneNode());s.attr("style","position:absolute; top:-9999px; left:-9999px"),s.removeAttr("id"),s.empty(),u(i.split(" "),function(n){s.removeClass(n)});var l="addClass"==a?"-add":"-remove";s.addClass(S(e,l)),o.append(s);var f=c(s);return s.remove(),Math.max(f.transitionDuration,f.animationDuration)>0},enter:function(n,t){return w(n,"ng-enter",t)},leave:function(n,t){return w(n,"ng-leave",t)},move:function(n,t){return w(n,"ng-move",t)},beforeAddClass:function(n,t,a){var e=$(n,S(t,"-add"));return e?(l(n,function(){h(n),D(n),a()}),e):void a()},addClass:function(n,t,a){return x(n,S(t,"-add"),a)},beforeRemoveClass:function(n,t,a){var e=$(n,S(t,"-remove"));return e?(l(n,function(){h(n),D(n),a()}),e):void a()},removeClass:function(n,t,a){return x(n,S(t,"-remove"),a)}}}])}])}(window,window.angular);