/**
 * @license AngularJS v1.2.29
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */

!function(o,n,e){"use strict";n.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(o,i){function r(){var o,r,t,u;for(o in f)a(c[o])&&i.cookies(o,e);for(o in c)r=c[o],n.isString(r)||(r=""+r,c[o]=r),r!==f[o]&&(i.cookies(o,r),u=!0);if(u){u=!1,t=i.cookies();for(o in c)c[o]!==t[o]&&(a(t[o])?delete c[o]:c[o]=t[o],u=!0)}}var t,c={},f={},u=!1,s=n.copy,a=n.isUndefined;return i.addPollFn(function(){var n=i.cookies();t!=n&&(t=n,s(n,f),s(n,c),u&&o.$apply())})(),u=!0,o.$watch(r),c}]).factory("$cookieStore",["$cookies",function(o){return{get:function(e){var i=o[e];return i?n.fromJson(i):i},put:function(e,i){o[e]=n.toJson(i)},remove:function(n){delete o[n]}}}])}(window,window.angular);