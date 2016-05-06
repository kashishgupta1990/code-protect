/**
 * @license Angulartics
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * Piwik 2.1.x update contributed by http://github.com/highskillz
 * License: MIT
 */

!function(a){"use strict";a.module("angulartics.piwik",["angulartics"]).config(["$analyticsProvider","$windowProvider",function(e,t){var i=t.$get();e.settings.pageTracking.trackRelativePath=!0,e.api.setCustomVariable=function(a,e,t,r){i._paq&&(r=r||"page",i._paq.push(["setCustomVariable",a,e,t,r]))},e.api.trackSiteSearch=function(e,t,r){if(i._paq&&e){var s=["trackSiteSearch",e,t||!1];a.isDefined(r)&&s.push(r),i._paq.push(s)}},e.api.trackGoal=function(a,e){i._paq&&_paq.push(["trackGoal",a,e||0])},e.registerSetUsername(function(a){i._paq&&i._paq.push(["setUserId",a])}),e.registerPageTrack(function(a,e){i._paq&&(i._paq.push(["setDocumentTitle",i.document.title]),i._paq.push(["setCustomUrl",a]),i._paq.push(["trackPageView"]))}),e.registerEventTrack(function(a,e){if(i._paq){if(e.value){var t=parseInt(e.value,10);e.value=isNaN(t)?0:t}i._paq.push(["trackEvent",e.category,a,e.label,e.value])}})}])}(angular);