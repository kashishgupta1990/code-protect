/**
 * @license Angulartics
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * License: MIT
 */

!function(r){"use strict";r.module("angulartics.woopra",["angulartics"]).config(["$analyticsProvider",function(r){r.registerPageTrack(function(r){woopra.track("pv",{url:r})}),r.registerEventTrack(function(r,e){woopra.track(r,e)}),r.registerSetUsername(function(r){woopra.identify("email",r).push()}),r.registerSetUserProperties(function(r){r.email&&woopra.identify(r).push()})}])}(angular);