/**
 * Bridget makes jQuery widgets
 * v2.0.0
 * MIT license
 */

!function(t,n){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(i){n(t,i)}):"object"==typeof module&&module.exports?module.exports=n(t,require("jquery")):t.jQueryBridget=n(t,t.jQuery)}(window,function(t,n){"use strict";function i(i,r,a){function f(t,n,e){var o,r="$()."+i+'("'+n+'")';return t.each(function(t,f){var c=a.data(f,i);if(!c)return void u(i+" not initialized. Cannot call methods, i.e. "+r);var d=c[n];if(!d||"_"==n.charAt(0))return void u(r+" is not a valid method");var s=d.apply(c,e);o=void 0===o?s:o}),void 0!==o?o:t}function c(t,n){t.each(function(t,e){var o=a.data(e,i);o?(o.option(n),o._init()):(o=new r(e,n),a.data(e,i,o))})}a=a||n||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var n=o.call(arguments,1);return f(this,t,n)}return c(this,t),this},e(a))}function e(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,u="undefined"==typeof r?function(){}:function(t){r.error(t)};return e(n||t.jQuery),i});