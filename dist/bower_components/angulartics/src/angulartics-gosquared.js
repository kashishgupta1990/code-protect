/**
 * @license Angulartics
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * Universal Analytics update contributed by http://github.com/willmcclellan
 * License: MIT
 */

!function(t){"use strict";t.module("angulartics.gosquared",["angulartics"]).config(["$analyticsProvider",function(t){t.settings.pageTracking.trackRelativePath=!0,t.settings.gosquared={sendPersonDetailsWithEvents:!1},angulartics.waitForVendorApi("_gs",500,function(e){t.registerPageTrack(function(t){e("track")})}),angulartics.waitForVendorApi("_gs",500,function(e){t.registerEventTrack(function(i,n){n.details=t.settings.gosquared.sendPersonDetailsWithEvents,e("event",i,n)})}),angulartics.waitForVendorApi("_gs",500,function(e){t.registerSetUserProperties(function(t){e("identify",t)})}),angulartics.waitForVendorApi("_gs",500,function(e){t.registerSetUserPropertiesOnce(function(t){e("identify",t)})})}])}(angular);