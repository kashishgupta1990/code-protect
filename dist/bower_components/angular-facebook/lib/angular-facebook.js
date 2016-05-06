/*
---
name: Facebook Angularjs

description: Provides an easier way to make use of Facebook API with Angularjs

license: MIT-style license

authors:
  - Ciul

requires: [angular]
provides: [facebook]

...
*/

!function(e,t,n){"use strict";var o,i={},s={sdk:!1,ready:!1};t.module("facebook",[]).value("settings",i).value("flags",s).provider("Facebook",[function(){i.appId=null,this.setAppId=function(e){i.appId=e},this.getAppId=function(){return i.appId},i.locale="en_US",this.setLocale=function(e){i.locale=e},this.getLocale=function(){return i.locale},i.status=!0,this.setStatus=function(e){i.status=e},this.getStatus=function(){return i.status},i.channelUrl=null,this.setChannel=function(e){i.channelUrl=e},this.getChannel=function(){return i.channelUrl},i.cookie=!0,this.setCookie=function(e){i.cookie=e},this.getCookie=function(){return i.cookie},i.xfbml=!0,this.setXfbml=function(e){i.xfbml=e},this.getXfbml=function(){return i.xfbml},this.setAuthResponse=function(e){i.authResponse=e||!0},this.getAuthResponse=function(){return i.authResponse},i.frictionlessRequests=!1,this.setFrictionlessRequests=function(e){i.frictionlessRequests=e},this.getFrictionlessRequests=function(){return i.frictionlessRequests},i.hideFlashCallback=null,this.setHideFlashCallback=function(e){i.hideFlashCallback=e||null},this.getHideFlashCallback=function(){return i.hideFlashCallback},this.setInitCustomOption=function(e,n){return t.isString(e)?(i[e]=n,i[e]):!1},this.getInitOption=function(e){return t.isString(e)&&i.hasOwnProperty(e)?i[e]:!1},i.loadSDK=!0,this.setLoadSDK=function(e){i.loadSDK=!!e},this.getLoadSDK=function(){return i.loadSDK},i.version="v2.0",this.setSdkVersion=function(e){i.version=e},this.getSdkVersion=function(){return i.version},this.init=function(e,n){t.isString(e)&&(i.appId=e||i.appId),t.isObject(e)&&t.extend(i,e),t.isDefined(n)&&(i.loadSDK=!!n)},this.$get=["$q","$rootScope","$timeout","$window",function(e,n,r,c){function u(){this.appId=i.appId}return u.prototype.isReady=function(){return s.ready},u.prototype.login=function(){var n,o,i=e.defer(),s=Array.prototype.slice.call(arguments);return t.forEach(s,function(e,i){t.isFunction(e)&&(n=e,o=i)}),t.isFunction(n)&&t.isNumber(o)&&s.splice(o,1,function(e){r(function(){t.isUndefined(e.error)?i.resolve(e):i.reject(e),t.isFunction(n)&&n(e)})}),this.isReady()?c.FB.login.apply(c.FB,s):r(function(){i.reject("Facebook.login() called before Facebook SDK has loaded.")}),i.promise},t.forEach(["logout","api","ui","getLoginStatus"],function(n){u.prototype[n]=function(){var i,s,u=e.defer(),a=Array.prototype.slice.call(arguments);return t.forEach(a,function(e,n){t.isFunction(e)&&(i=e,s=n)}),t.isFunction(i)&&t.isNumber(s)&&a.splice(s,1,function(e){r(function(){e&&"undefined"==typeof e.error?u.resolve(e):u.reject(e),t.isFunction(i)&&i(e)})}),r(function(){o.promise.then(function(){c.FB[n].apply(FB,a)},function(){throw"Facebook API could not be initialized properly"})}),u.promise}}),u.prototype.parseXFBML=function(){var t=e.defer();return r(function(){o.promise.then(function(){c.FB.XFBML.parse(),t.resolve()},function(){throw"Facebook API could not be initialized properly"})}),t.promise},u.prototype.subscribe=function(){var n,i,s=e.defer(),u=Array.prototype.slice.call(arguments);return t.forEach(u,function(e,o){t.isFunction(e)&&(n=e,i=o)}),t.isFunction(n)&&t.isNumber(i)&&u.splice(i,1,function(e){r(function(){e&&"undefined"==typeof e.error?s.resolve(e):s.reject(e),t.isFunction(n)&&n(e)})}),r(function(){o.promise.then(function(){c.FB.Event.subscribe.apply(FB,u)},function(){throw"Facebook API could not be initialized properly"})}),s.promise},u.prototype.unsubscribe=function(){var n,i,s=e.defer(),u=Array.prototype.slice.call(arguments);return t.forEach(u,function(e,o){t.isFunction(e)&&(n=e,i=o)}),t.isFunction(n)&&t.isNumber(i)&&u.splice(i,1,function(e){r(function(){e&&"undefined"==typeof e.error?s.resolve(e):s.reject(e),t.isFunction(n)&&n(e)})}),r(function(){o.promise.then(function(){c.FB.Event.unsubscribe.apply(FB,u)},function(){throw"Facebook API could not be initialized properly"})}),s.promise},new u}]}]).run(["$rootScope","$q","$window","$timeout",function(e,n,r,c){o=n.defer();var u=i.loadSDK;delete i.loadSDK,r.fbAsyncInit=function(){c(function(){if(!i.appId)throw"Missing appId setting.";FB.init(i),s.ready=!0,t.forEach({"auth.login":"login","auth.logout":"logout","auth.prompt":"prompt","auth.sessionChange":"sessionChange","auth.statusChange":"statusChange","auth.authResponseChange":"authResponseChange","xfbml.render":"xfbmlRender","edge.create":"like","edge.remove":"unlike","comment.create":"comment","comment.remove":"uncomment"},function(t,n){FB.Event.subscribe(n,function(n){c(function(){e.$broadcast("Facebook:"+t,n)})})}),e.$broadcast("Facebook:load"),o.resolve(FB)})},function(){var e=document.getElementById("fb-root");return e||(e=document.createElement("div"),e.id="fb-root",document.body.insertBefore(e,document.body.childNodes[0])),e}(),u&&!function(){var e="//connect.facebook.net/"+i.locale+"/sdk.js",t=document.createElement("script");t.id="facebook-jssdk",t.async=!0,-1!==["file","file:"].indexOf(r.location.protocol)&&(e="https:"+e),t.src=e,t.onload=function(){s.sdk=!0},document.getElementsByTagName("head")[0].appendChild(t)}()}])}(window,angular);