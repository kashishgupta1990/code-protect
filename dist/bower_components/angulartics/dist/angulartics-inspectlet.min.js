/**
 * @license Angulartics
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * Inspectlet support contributed by http://github.com/geordie--
 * License: MIT
 */

!function(i){"use strict";i.module("angulartics.inspectlet",["angulartics"]).config(["$analyticsProvider",function(i){i.registerPageTrack(function(i){var t=[];t.push("virtualPage"),i&&t.push({url:i}),__insp.push(t)}),i.registerEventTrack(function(i,t){if("identify"==i||"tagSession"==i){t.category&&delete t.category;var e=[];e.push(i),e.push(t),__insp.push(e)}})}])}(angular);