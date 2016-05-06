/**
 * @license Angulartics
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * Heap Analytics update contributed by https://github.com/rgbj
 * License: MIT
 */

!function(e){"use strict";e.module("angulartics.heap",["angulartics"]).config(["$analyticsProvider",function(e){e.settings.trackRelativePath=!0,e.registerEventTrack(function(e,t){heap.track(e,t)}),e.registerSetUsername(function(e,t){t?heap.identify(t):heap.identify({handle:e})}),e.registerSetUserProperties(function(e){heap.setEventProperties(e)})}])}(angular);