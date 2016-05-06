/*
---
name: Phonegap Facebook Angularjs

description: Provides a dependency for Phonegap projects.

license: MIT-style license

authors:
  - Ciul

requires: [angular, facebook]
provides: [angular-facebook-phonegap]

...
*/

!function(e,n,t){"use strict";n.module("facebook").run(["settings","flags",function(e,t){function i(){if(!n.isString(a))throw"Missing localSDK setting pointing to the local javascript file with the Facebook SDK";var e=a,i=document.createElement("script");i.id="facebook-jssdk",i.async=!0,i.src=e,i.onload=function(){t.sdk=!0},document.getElementsByTagName("head")[0].appendChild(i)}var a=n.isDefined(e.localSDK)?e.localSDK:null;n.isString(a)&&(-1===a.search(".js")&&(a+=".js"),delete e.localSDK),document.addEventListener("deviceready",i,!1)}])}(window,angular);