/*
 * ----------------------------- JSTORAGE -------------------------------------
 * Simple local storage wrapper to save data on the browser side, supporting
 * all major browsers - IE6+, Firefox2+, Safari4+, Chrome4+ and Opera 10.5+
 *
 * Author: Andris Reinman, andris.reinman@gmail.com
 * Project homepage: www.jstorage.info
 *
 * Licensed under Unlicense:
 *
 * This is free and unencumbered software released into the public domain.
 *
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 *
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * For more information, please refer to <http://unlicense.org/>
 */

/**
     * JS Implementation of MurmurHash2
     *
     *  SOURCE: https://github.com/garycourt/murmurhash-js (MIT licensed)
     *
     * @author <a href='mailto:gary.court@gmail.com'>Gary Court</a>
     * @see http://github.com/garycourt/murmurhash-js
     * @author <a href='mailto:aappleby@gmail.com'>Austin Appleby</a>
     * @see http://sites.google.com/site/murmurhash/
     *
     * @param {string} str ASCII only
     * @param {number} seed Positive integer only
     * @return {number} 32-bit positive integer hash
     */

!function(){"use strict";function e(){var e=!1;if("localStorage"in window)try{window.localStorage.setItem("_tmptest","tmpval"),e=!0,window.localStorage.removeItem("_tmptest")}catch(t){}if(e)try{window.localStorage&&(b=window.localStorage,T="localStorage",O=b.jStorage_update)}catch(o){}else if("globalStorage"in window)try{window.globalStorage&&(b="localhost"==window.location.hostname?window.globalStorage["localhost.localdomain"]:window.globalStorage[window.location.hostname],T="globalStorage",O=b.jStorage_update)}catch(n){}else{if(y=document.createElement("link"),!y.addBehavior)return void(y=null);y.style.behavior="url(#default#userData)",document.getElementsByTagName("head")[0].appendChild(y);try{y.load("jStorage")}catch(i){y.setAttribute("jStorage","{}"),y.save("jStorage"),y.load("jStorage")}var u="{}";try{u=y.getAttribute("jStorage")}catch(g){}try{O=y.getAttribute("jStorage_update")}catch(l){}b.jStorage=u,T="userDataBehavior"}s(),c(),r(),_(),"addEventListener"in window&&window.addEventListener("pageshow",function(e){e.persisted&&a()},!1)}function t(){var e="{}";if("userDataBehavior"==T){y.load("jStorage");try{e=y.getAttribute("jStorage")}catch(t){}try{O=y.getAttribute("jStorage_update")}catch(r){}b.jStorage=e}s(),c(),_()}function r(){"localStorage"==T||"globalStorage"==T?"addEventListener"in window?window.addEventListener("storage",a,!1):document.attachEvent("onstorage",a):"userDataBehavior"==T&&setInterval(a,1e3)}function a(){var e;clearTimeout(L),L=setTimeout(function(){if("localStorage"==T||"globalStorage"==T)e=b.jStorage_update;else if("userDataBehavior"==T){y.load("jStorage");try{e=y.getAttribute("jStorage_update")}catch(t){}}e&&e!=O&&(O=e,o())},25)}function o(){var e,r=h.parse(h.stringify(p.__jstorage_meta.CRC32));t(),e=h.parse(h.stringify(p.__jstorage_meta.CRC32));var a,o=[],i=[];for(a in r)if(r.hasOwnProperty(a)){if(!e[a]){i.push(a);continue}r[a]!=e[a]&&"2."==String(r[a]).substr(0,2)&&o.push(a)}for(a in e)e.hasOwnProperty(a)&&(r[a]||o.push(a));n(o,"updated"),n(i,"deleted")}function n(e,t){e=[].concat(e||[]);var r,a,o,n;if("flushed"==t){e=[];for(var i in C)C.hasOwnProperty(i)&&e.push(i);t="deleted"}for(r=0,o=e.length;o>r;r++){if(C[e[r]])for(a=0,n=C[e[r]].length;n>a;a++)C[e[r]][a](e[r],t);if(C["*"])for(a=0,n=C["*"].length;n>a;a++)C["*"][a](e[r],t)}}function i(){var e=(+new Date).toString();if("localStorage"==T||"globalStorage"==T)try{b.jStorage_update=e}catch(t){T=!1}else"userDataBehavior"==T&&(y.setAttribute("jStorage_update",e),y.save("jStorage"));a()}function s(){if(b.jStorage)try{p=h.parse(String(b.jStorage))}catch(e){b.jStorage="{}"}else b.jStorage="{}";v=b.jStorage?String(b.jStorage).length:0,p.__jstorage_meta||(p.__jstorage_meta={}),p.__jstorage_meta.CRC32||(p.__jstorage_meta.CRC32={})}function u(){f();try{b.jStorage=h.stringify(p),y&&(y.setAttribute("jStorage",b.jStorage),y.save("jStorage")),v=b.jStorage?String(b.jStorage).length:0}catch(e){}}function g(e){if("string"!=typeof e&&"number"!=typeof e)throw new TypeError("Key name must be string or numeric");if("__jstorage_meta"==e)throw new TypeError("Reserved key name");return!0}function c(){var e,t,r,a,o=1/0,s=!1,g=[];if(clearTimeout(m),p.__jstorage_meta&&"object"==typeof p.__jstorage_meta.TTL){e=+new Date,r=p.__jstorage_meta.TTL,a=p.__jstorage_meta.CRC32;for(t in r)r.hasOwnProperty(t)&&(r[t]<=e?(delete r[t],delete a[t],delete p[t],s=!0,g.push(t)):r[t]<o&&(o=r[t]));o!=1/0&&(m=setTimeout(c,Math.min(o-e,2147483647))),s&&(u(),i(),n(g,"deleted"))}}function _(){var e,t;if(p.__jstorage_meta.PubSub){var r,a=D,o=[];for(e=t=p.__jstorage_meta.PubSub.length-1;e>=0;e--)r=p.__jstorage_meta.PubSub[e],r[0]>D&&(a=r[0],o.unshift(r));for(e=o.length-1;e>=0;e--)l(o[e][1],o[e][2]);D=a}}function l(e,t){if(P[e])for(var r=0,a=P[e].length;a>r;r++)try{P[e][r](e,h.parse(h.stringify(t)))}catch(o){}}function f(){if(p.__jstorage_meta.PubSub){for(var e=+new Date-2e3,t=0,r=p.__jstorage_meta.PubSub.length;r>t;t++)if(p.__jstorage_meta.PubSub[t][0]<=e){p.__jstorage_meta.PubSub.splice(t,p.__jstorage_meta.PubSub.length-t);break}p.__jstorage_meta.PubSub.length||delete p.__jstorage_meta.PubSub}}function d(e,t){p.__jstorage_meta||(p.__jstorage_meta={}),p.__jstorage_meta.PubSub||(p.__jstorage_meta.PubSub=[]),p.__jstorage_meta.PubSub.unshift([+new Date,e,t]),u(),i()}function S(e,t){for(var r,a=e.length,o=t^a,n=0;a>=4;)r=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24,r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16),r^=r>>>24,r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16),o=1540483477*(65535&o)+((1540483477*(o>>>16)&65535)<<16)^r,a-=4,++n;switch(a){case 3:o^=(255&e.charCodeAt(n+2))<<16;case 2:o^=(255&e.charCodeAt(n+1))<<8;case 1:o^=255&e.charCodeAt(n),o=1540483477*(65535&o)+((1540483477*(o>>>16)&65535)<<16)}return o^=o>>>13,o=1540483477*(65535&o)+((1540483477*(o>>>16)&65535)<<16),o^=o>>>15,o>>>0}var j="0.4.12",w=window.jQuery||window.$||(window.$={}),h={parse:window.JSON&&(window.JSON.parse||window.JSON.decode)||String.prototype.evalJSON&&function(e){return String(e).evalJSON()}||w.parseJSON||w.evalJSON,stringify:Object.toJSON||window.JSON&&(window.JSON.stringify||window.JSON.encode)||w.toJSON};if("function"!=typeof h.parse||"function"!=typeof h.stringify)throw new Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");var m,p={__jstorage_meta:{CRC32:{}}},b={jStorage:"{}"},y=null,v=0,T=!1,C={},L=!1,O=0,P={},D=+new Date,A={isXML:function(e){var t=(e?e.ownerDocument||e:0).documentElement;return t?"HTML"!==t.nodeName:!1},encode:function(e){if(!this.isXML(e))return!1;try{return(new XMLSerializer).serializeToString(e)}catch(t){try{return e.xml}catch(r){}}return!1},decode:function(e){var t,r="DOMParser"in window&&(new DOMParser).parseFromString||window.ActiveXObject&&function(e){var t=new ActiveXObject("Microsoft.XMLDOM");return t.async="false",t.loadXML(e),t};return r?(t=r.call("DOMParser"in window&&new DOMParser||window,e,"text/xml"),this.isXML(t)?t:!1):!1}};w.jStorage={version:j,set:function(e,t,r){if(g(e),r=r||{},"undefined"==typeof t)return this.deleteKey(e),t;if(A.isXML(t))t={_is_xml:!0,xml:A.encode(t)};else{if("function"==typeof t)return;t&&"object"==typeof t&&(t=h.parse(h.stringify(t)))}return p[e]=t,p.__jstorage_meta.CRC32[e]="2."+S(h.stringify(t),2538058380),this.setTTL(e,r.TTL||0),n(e,"updated"),t},get:function(e,t){return g(e),e in p?p[e]&&"object"==typeof p[e]&&p[e]._is_xml?A.decode(p[e].xml):p[e]:"undefined"==typeof t?null:t},deleteKey:function(e){return g(e),e in p?(delete p[e],"object"==typeof p.__jstorage_meta.TTL&&e in p.__jstorage_meta.TTL&&delete p.__jstorage_meta.TTL[e],delete p.__jstorage_meta.CRC32[e],u(),i(),n(e,"deleted"),!0):!1},setTTL:function(e,t){var r=+new Date;return g(e),t=Number(t)||0,e in p?(p.__jstorage_meta.TTL||(p.__jstorage_meta.TTL={}),t>0?p.__jstorage_meta.TTL[e]=r+t:delete p.__jstorage_meta.TTL[e],u(),c(),i(),!0):!1},getTTL:function(e){var t,r=+new Date;return g(e),e in p&&p.__jstorage_meta.TTL&&p.__jstorage_meta.TTL[e]?(t=p.__jstorage_meta.TTL[e]-r,t||0):0},flush:function(){return p={__jstorage_meta:{CRC32:{}}},u(),i(),n(null,"flushed"),!0},storageObj:function(){function e(){}return e.prototype=p,new e},index:function(){var e,t=[];for(e in p)p.hasOwnProperty(e)&&"__jstorage_meta"!=e&&t.push(e);return t},storageSize:function(){return v},currentBackend:function(){return T},storageAvailable:function(){return!!T},listenKeyChange:function(e,t){g(e),C[e]||(C[e]=[]),C[e].push(t)},stopListening:function(e,t){if(g(e),C[e]){if(!t)return void delete C[e];for(var r=C[e].length-1;r>=0;r--)C[e][r]==t&&C[e].splice(r,1)}},subscribe:function(e,t){if(e=(e||"").toString(),!e)throw new TypeError("Channel not defined");P[e]||(P[e]=[]),P[e].push(t)},publish:function(e,t){if(e=(e||"").toString(),!e)throw new TypeError("Channel not defined");d(e,t)},reInit:function(){t()},noConflict:function(e){return delete window.$.jStorage,e&&(window.jStorage=this),this}},e()}();