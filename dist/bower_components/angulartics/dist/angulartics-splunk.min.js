/**
 * @license Angulartics
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * License: MIT
 */

!function(n){"use strict";n.module("angulartics.splunk",["angulartics"]).config(["$analyticsProvider",function(n){var i=function(){throw"Define sp "},r=function(){return window.sp||{pageview:i,track:i}};n.registerPageTrack(function(n){r().pageview(n)}),n.registerEventTrack(function(n,i){r().track(n,i)})}])}(angular);