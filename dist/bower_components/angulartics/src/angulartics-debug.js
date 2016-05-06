/**
 * @license Angulartics
 * (c) 2014 Luis Farzati http://luisfarzati.github.io/angulartics
 * License: MIT
 */

!function(n){"use strict";n.module("angulartics.debug",["angulartics"]).config(["$analyticsProvider",function(n){n.registerPageTrack(function(n){console.log("Page tracking: ",n)}),n.registerEventTrack(function(n,c){console.log("Event tracking: ",n,c)})}])}(angular);