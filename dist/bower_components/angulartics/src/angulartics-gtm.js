/**
 * @license Angulartics
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * Google Tag Manager Plugin Contributed by http://github.com/danrowe49
 * License: MIT
 */

!function(a){"use strict";a.module("angulartics.google.tagmanager",["angulartics"]).config(["$analyticsProvider",function(a){a.registerPageTrack(function(a){var t=window.dataLayer=window.dataLayer||[];t.push({event:"content-view","content-name":a})}),a.registerEventTrack(function(a,t){var e=window.dataLayer=window.dataLayer||[];t=t||{},e.push({event:t.event||"interaction",target:t.category,action:a,"target-properties":t.label,value:t.value,"interaction-type":t.noninteraction})})}])}(angular);