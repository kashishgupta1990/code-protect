/**
 * @license Angulartics
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * Contributed by Jakub Hampl http://gampleman.eu
 * License: MIT
 */

!function(t){"use strict";t.module("angulartics.newrelic.insights",["angulartics"]).config(["$analyticsProvider",function(e){angulartics.waitForVendorApi("newrelic",100,function(i){e.registerEventTrack(function(t,e){i.addPageAction(t,e)}),e.registerSetUsername(function(t){i.setCustomAttribute("username",t)}),e.registerSetAlias(function(t){i.setCustomAttribute("alias",t)}),e.registerSetUserProperties(function(e){t.forEach(e,function(t,e){i.setCustomAttribute(e,t)})})})}])}(angular);