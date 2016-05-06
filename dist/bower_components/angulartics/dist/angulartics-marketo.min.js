/**
 * @license Angulartics
 * (c) 2014 Carl Thorner http://luisfarzati.github.io/angulartics
 * Contributed by http://github.com/L42y
 * License: MIT
 */

!function(i){"use strict";i.module("angulartics.marketo",["angulartics"]).config(["$analyticsProvider",function(i){angulartics.waitForVendorApi("Munchkin",500,"sKey",function(n){i.registerPageTrack(function(i){n.munchkinFunction("visitWebPage",{url:i})})}),angulartics.waitForVendorApi("Munchkin",500,"sKey",function(n){i.registerEventTrack(function(i,a){if(void 0!==a.path){var t=[];for(var e in a)"path"!==e&&t.push(e+"="+a[e]);"CLICK"==i.toUpperCase()&&n.munchkinFunction("clickLink",{href:a.path}),n.munchkinFunction("visitWebPage",{url:a.path,params:t.join("&")})}})});var n=function(i){void 0!==i.email&&(email=i.email,email_sha=sha1(Munchkin.sKey+email),i.Email=i.email,Munchkin.munchkinFunction("associateLead",i,email_sha))};angulartics.waitForVendorApi("Munchkin",500,function(a){i.registerSetUsername(function(i){/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/.test(i)&&n({Email:i})})}),angulartics.waitForVendorApi("Munchkin",500,function(a){i.registerSetUserProperties(function(i){n(i)})}),angulartics.waitForVendorApi("Munchkin",500,function(a){i.registerSetUserPropertiesOnce(function(i){n(i)})})}])}(angular);