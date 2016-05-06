/**
 * @license Angulartics
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * Universal Analytics update contributed by http://github.com/willmcclellan
 * License: MIT
 */

!function(n){"use strict";n.module("angulartics.intercom",["angulartics"]).config(["$analyticsProvider",function(n){n.registerSetUsername(function(n){window.Intercom&&window.Intercom("update",{user_id:n})}),n.registerEventTrack(function(n,t){window.Intercom&&window.Intercom("trackEvent",n,t)})}])}(angular);