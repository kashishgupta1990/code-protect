/**
 * @license AngularJS v1.2.29
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */

!function(n,t,e){"use strict";function o(n,t,e){c.directive(n,["$parse","$swipe",function(o,c){var i=75,u=.3,a=30;return function(r,s,l){function h(n){if(!f)return!1;var e=Math.abs(n.y-f.y),o=(n.x-f.x)*t;return d&&i>e&&o>0&&o>a&&u>e/o}var f,d,g=o(l[n]);c.bind(s,{start:function(n,t){f=n,d=!0},cancel:function(n){d=!1},end:function(n,t){h(n)&&r.$apply(function(){s.triggerHandler(e),g(r,{$event:t})})}})}}])}var c=t.module("ngTouch",[]);c.factory("$swipe",[function(){function n(n){var t=n.touches&&n.touches.length?n.touches:[n],e=n.changedTouches&&n.changedTouches[0]||n.originalEvent&&n.originalEvent.changedTouches&&n.originalEvent.changedTouches[0]||t[0].originalEvent||t[0];return{x:e.clientX,y:e.clientY}}var t=10;return{bind:function(e,o){var c,i,u,a,r=!1;e.on("touchstart mousedown",function(t){u=n(t),r=!0,c=0,i=0,a=u,o.start&&o.start(u,t)}),e.on("touchcancel",function(n){r=!1,o.cancel&&o.cancel(n)}),e.on("touchmove mousemove",function(e){if(r&&u){var s=n(e);if(c+=Math.abs(s.x-a.x),i+=Math.abs(s.y-a.y),a=s,!(t>c&&t>i))return i>c?(r=!1,void(o.cancel&&o.cancel(e))):(e.preventDefault(),void(o.move&&o.move(s,e)))}}),e.on("touchend mouseup",function(t){r&&(r=!1,o.end&&o.end(n(t),t))})}}}]),c.config(["$provide",function(n){n.decorator("ngClickDirective",["$delegate",function(n){return n.shift(),n}])}]),c.directive("ngClick",["$parse","$timeout","$rootElement",function(n,e,o){function c(n,t,e,o){return Math.abs(n-e)<v&&Math.abs(t-o)<v}function i(n,t,e){for(var o=0;o<n.length;o+=2)if(c(n[o],n[o+1],t,e))return n.splice(o,o+2),!0;return!1}function u(n){if(!(Date.now()-s>g)){var t=n.touches&&n.touches.length?n.touches:[n],e=t[0].clientX,o=t[0].clientY;1>e&&1>o||h&&h[0]===e&&h[1]===o||(h&&(h=null),"label"===n.target.tagName.toLowerCase()&&(h=[e,o]),i(l,e,o)||(n.stopPropagation(),n.preventDefault(),n.target&&n.target.blur()))}}function a(n){var t=n.touches&&n.touches.length?n.touches:[n],o=t[0].clientX,c=t[0].clientY;l.push(o,c),e(function(){for(var n=0;n<l.length;n+=2)if(l[n]==o&&l[n+1]==c)return void l.splice(n,n+2)},g,!1)}function r(n,t){l||(o[0].addEventListener("click",u,!0),o[0].addEventListener("touchstart",a,!0),l=[]),s=Date.now(),i(l,n,t)}var s,l,h,f=750,d=12,g=2500,v=25,p="ng-click-active";return function(e,o,c){function i(){g=!1,o.removeClass(p)}var u,a,s,l,h=n(c.ngClick),g=!1;o.on("touchstart",function(n){g=!0,u=n.target?n.target:n.srcElement,3==u.nodeType&&(u=u.parentNode),o.addClass(p),a=Date.now();var t=n.touches&&n.touches.length?n.touches:[n],e=t[0].originalEvent||t[0];s=e.clientX,l=e.clientY}),o.on("touchmove",function(n){i()}),o.on("touchcancel",function(n){i()}),o.on("touchend",function(n){var e=Date.now()-a,h=n.changedTouches&&n.changedTouches.length?n.changedTouches:n.touches&&n.touches.length?n.touches:[n],v=h[0].originalEvent||h[0],p=v.clientX,m=v.clientY,w=Math.sqrt(Math.pow(p-s,2)+Math.pow(m-l,2));g&&f>e&&d>w&&(r(p,m),u&&u.blur(),t.isDefined(c.disabled)&&c.disabled!==!1||o.triggerHandler("click",[n])),i()}),o.onclick=function(n){},o.on("click",function(n,t){e.$apply(function(){h(e,{$event:t||n})})}),o.on("mousedown",function(n){o.addClass(p)}),o.on("mousemove mouseup",function(n){o.removeClass(p)})}}]),o("ngSwipeLeft",-1,"swipeleft"),o("ngSwipeRight",1,"swiperight")}(window,window.angular);