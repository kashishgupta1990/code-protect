/**
 * @license Angulartics v0.19.2
 * (c) 2014 Luis Farzati http://luisfarzati.github.io/angulartics
 * License: MIT
 */

!function(e){"use strict";e.module("angulartics.sitespect",["angulartics"]).config(["$analyticsProvider",function(e){e.registerPageTrack(function(e){try{SS.EventTrack.rp("page-view",e)}catch(n){console.warn("core.js not loaded"),console.log("page-view",e)}}),e.registerEventTrack(function(e,n){try{SS.EventTrack.rp("true",n)}catch(t){console.warn("core.js not loaded"),console.log("event=true&"+JSON.stringify(n))}})}])}(angular);