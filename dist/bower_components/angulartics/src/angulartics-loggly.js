/**
 * @license Angulartics
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * Contributed by http://github.com/zoellner
 * License: MIT
 */

!function(n){"use strict";n.module("angulartics.loggly",["angulartics"]).config(["$analyticsProvider",function(n){var r=function(){throw"Define _LTracker "},t=function(){return window._LTracker||{push:r}};n.registerPageTrack(function(n){t().push({tag:"pageview",path:n})}),n.registerEventTrack(function(n,r){t().push({action:n,properties:r})})}])}(angular);