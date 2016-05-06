/**
 * @license Angulartics
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * Contributed by http://github.com/miller
 * License: MIT
 */

!function(t){"use strict";t.module("angulartics.baidu",["angulartics"]).config(["$analyticsProvider",function(t){window._hmt&&_hmt.push(["_setAutoPageview",!1]),t.registerPageTrack(function(t){window._hmt&&_hmt.push(["_trackPageview",t])}),t.registerEventTrack(function(t,a){if(window._hmt&&a&&a.category&&a.action){var e=["_trackEvent",a.category,a.action];a.label&&e.push(a.label),a.value&&(e[4]=a.value),_hmt.push(e)}})}])}(angular);