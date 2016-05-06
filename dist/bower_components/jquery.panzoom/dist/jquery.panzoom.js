/**
 * @license jquery.panzoom.js v1.8.6
 * Updated: Mon Jan 13 2014
 * Add pan and zoom functionality to any element
 * Copyright (c) 2013 timmy willison
 * Released under the MIT license
 * https://github.com/timmywil/jquery.panzoom/blob/master/MIT-License.txt
 */

!function(t,e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):t.jQuery)}(this,function(t){"use strict";function e(t,e){for(var n=t.length;--n;)if(+t[n]!==+e[n])return!1;return!0}function n(e){var n={range:!0,animate:!0};return"boolean"==typeof e?n.animate=e:t.extend(n,e),n}function i(e,n,i,s,o,a,r,h,c){"array"===t.type(e)?this.elements=[+e[0],+e[2],+e[4],+e[1],+e[3],+e[5],0,0,1]:this.elements=[e,n,i,s,o,a,r||0,h||0,c||1]}function s(t,e,n){this.elements=[t,e,n]}function o(e,n){if(!(this instanceof o))return new o(e,n);1!==e.nodeType&&t.error("Panzoom called on non-Element node"),t.contains(document,e)||t.error("Panzoom element must be attached to the document");var i=t.data(e,r);if(i)return i;this.options=n=t.extend({},o.defaults,n),this.elem=e;var s=this.$elem=t(e);this.$doc=t(e.ownerDocument||document),this.$parent=s.parent(),this.isSVG=m.test(e.namespaceURI)&&"svg"!==e.nodeName.toLowerCase(),this.panning=!1,this._buildTransform(),this.isSVG||(this._transform=t.cssProps.transform.replace(c,"-$1").toLowerCase()),this._buildTransition(),this.resetDimensions();var a=t(),h=this;t.each(["$zoomIn","$zoomOut","$zoomRange","$reset"],function(t,e){h[e]=n[e]||a}),this.enable(),t.data(e,r,this)}var a={props:["touches","pageX","pageY"],filter:function(t,e){var n;return!e.pageX&&e.touches&&(n=e.touches[0])&&(t.pageX=n.pageX,t.pageY=n.pageY),t}};t.each(["touchstart","touchmove","touchend"],function(e,n){t.event.fixHooks[n]=a});var r="__pz__",h=Array.prototype.slice,c=/([A-Z])/g,m=/^http:[\w\.\/]+svg$/,l=/^inline/,u="(\\-?[\\d\\.e]+)",f="\\,?\\s*",d=new RegExp("^matrix\\("+u+f+u+f+u+f+u+f+u+f+u+"\\)$");return i.prototype={x:function(t){var e=t instanceof s,n=this.elements,o=t.elements;return e&&3===o.length?new s(n[0]*o[0]+n[1]*o[1]+n[2]*o[2],n[3]*o[0]+n[4]*o[1]+n[5]*o[2],n[6]*o[0]+n[7]*o[1]+n[8]*o[2]):o.length===n.length?new i(n[0]*o[0]+n[1]*o[3]+n[2]*o[6],n[0]*o[1]+n[1]*o[4]+n[2]*o[7],n[0]*o[2]+n[1]*o[5]+n[2]*o[8],n[3]*o[0]+n[4]*o[3]+n[5]*o[6],n[3]*o[1]+n[4]*o[4]+n[5]*o[7],n[3]*o[2]+n[4]*o[5]+n[5]*o[8],n[6]*o[0]+n[7]*o[3]+n[8]*o[6],n[6]*o[1]+n[7]*o[4]+n[8]*o[7],n[6]*o[2]+n[7]*o[5]+n[8]*o[8]):!1},inverse:function(){var t=1/this.determinant(),e=this.elements;return new i(t*(e[8]*e[4]-e[7]*e[5]),t*-(e[8]*e[1]-e[7]*e[2]),t*(e[5]*e[1]-e[4]*e[2]),t*-(e[8]*e[3]-e[6]*e[5]),t*(e[8]*e[0]-e[6]*e[2]),t*-(e[5]*e[0]-e[3]*e[2]),t*(e[7]*e[3]-e[6]*e[4]),t*-(e[7]*e[0]-e[6]*e[1]),t*(e[4]*e[0]-e[3]*e[1]))},determinant:function(){var t=this.elements;return t[0]*(t[8]*t[4]-t[7]*t[5])-t[3]*(t[8]*t[1]-t[7]*t[2])+t[6]*(t[5]*t[1]-t[4]*t[2])}},s.prototype.e=i.prototype.e=function(t){return this.elements[t]},o.rmatrix=d,o.defaults={eventNamespace:".panzoom",transition:!0,cursor:"move",disablePan:!1,disableZoom:!1,increment:.3,minScale:.4,maxScale:5,rangeStep:.05,duration:200,easing:"ease-in-out",contain:!1},o.prototype={constructor:o,instance:function(){return this},enable:function(){this._initStyle(),this._bind(),this.disabled=!1},disable:function(){this.disabled=!0,this._resetStyle(),this._unbind()},isDisabled:function(){return this.disabled},destroy:function(){this.disable(),t.removeData(this.elem,r)},resetDimensions:function(){var e=this.$parent;this.container={width:e.width(),height:e.height()};var n=this.elem,i=this.$elem,s=this.dimensions=this.isSVG?{left:n.getAttribute("x")||0,top:n.getAttribute("y")||0,width:n.getAttribute("width")||i.outerWidth(),height:n.getAttribute("height")||i.outerHeight(),margin:{left:0,top:0}}:{left:t.css(n,"left",!0)||0,top:t.css(n,"top",!0)||0,width:i.outerWidth(),height:i.outerHeight(),margin:{top:t.css(n,"marginTop",!0)||0,left:t.css(n,"marginLeft",!0)||0}};s.widthBorder=t.css(n,"borderLeftWidth",!0)+t.css(n,"borderRightWidth",!0)||0,s.heightBorder=t.css(n,"borderTopWidth",!0)+t.css(n,"borderBottomWidth",!0)||0},reset:function(t){t=n(t);var e=this.setMatrix(this._origTransform,t);t.silent||this._trigger("reset",e)},resetZoom:function(t){t=n(t);var e=this.getMatrix(this._origTransform);t.dValue=e[3],this.zoom(e[0],t)},resetPan:function(t){var e=this.getMatrix(this._origTransform);this.pan(e[4],e[5],n(t))},getTransform:function(e){var n=this.elem,i=this.isSVG?"attr":"style";return e?t[i](n,"transform",e):e=t[i](n,"transform"),"none"===e||d.test(e)||this.isSVG||(e=t.css(n,"transform"),t.style(n,"transform",e)),e||"none"},getMatrix:function(t){var e=d.exec(t||this.getTransform());return e&&e.shift(),e||[1,0,0,1,0,0]},setMatrix:function(e,n){if(!this.disabled){n||(n={}),"string"==typeof e&&(e=this.getMatrix(e));var i,s,o,a,r,h,c,m,u=+e[0],f=this.$parent,d=this.elem,g="undefined"!=typeof n.contain?n.contain:this.options.contain;return g&&(i=this._checkDims(),s=this.container,o=(i.width*u-s.width)/2,a=(i.height*u-s.height)/2,"invert"===g?(r=i.width>s.width?i.width-s.width:0,h=i.height>s.height?i.height-s.height:0,o+=(s.width-i.width)/2,a+=(s.height-i.height)/2,c=i.left+i.margin.left,m=i.top+i.margin.top,e[4]=Math.max(Math.min(e[4],o-c),-o-c-r),e[5]=Math.max(Math.min(e[5],a-m),-a-m-h+i.heightBorder)):(h=s.height>i.height?s.height-i.height:0,"center"===f.css("textAlign")&&l.test(t.css(d,"display"))?r=0:(r=s.width>i.width?s.width-i.width:0,o=a=0),e[4]=Math.min(Math.max(e[4],o-i.left),-o-i.left+r),e[5]=Math.min(Math.max(e[5],a-i.top),-a-i.top+h))),"skip"!==n.animate&&this.transition(!n.animate),n.range&&this.$zoomRange.val(u),t[this.isSVG?"attr":"style"](d,"transform","matrix("+e.join(",")+")"),n.silent||this._trigger("change",e),e}},isPanning:function(){return this.panning},transition:function(e){var n=e||!this.options.transition?"none":this._transition;t.style(this.elem,"transition")!==n&&t.style(this.elem,"transition",n)},pan:function(t,e,n){if(!this.options.disablePan){n||(n={});var i=n.matrix;i||(i=this.getMatrix()),n.relative&&(t+=+i[4],e+=+i[5]),i[4]=t,i[5]=e,this.setMatrix(i,n),n.silent||this._trigger("pan",t,e)}},zoom:function(e,n){"object"==typeof e?(n=e,e=null):n||(n={});var o=t.extend({},this.options,n);if(!o.disableZoom){var a=!1,r=o.matrix||this.getMatrix();"number"!=typeof e&&(e=+r[0]+o.increment*(e?-1:1),a=!0),e>o.maxScale?e=o.maxScale:e<o.minScale&&(e=o.minScale);var h=o.focal;if(h&&!o.disablePan){a=!1;var c=this._checkDims(),m=h.clientX-c.width/2,l=h.clientY-c.height/2,u=new s(m,l,1),f=new i(r),d=this.$parent.offset(),g=new i(1,0,d.left-this.$doc.scrollLeft(),0,1,d.top-this.$doc.scrollTop()),p=f.inverse().x(g.inverse().x(u)),v=e/r[0];f=f.x(new i([v,0,0,v,0,0])),u=g.x(f.x(p)),r[4]=+r[4]+(m-u.e(0)),r[5]=+r[5]+(l-u.e(1))}r[0]=e,r[3]="number"==typeof o.dValue?o.dValue:e,this.setMatrix(r,{animate:"boolean"==typeof o.animate?o.animate:a,range:!o.noSetRange}),o.silent||this._trigger("zoom",e,o)}},option:function(e,n){var i;if(!e)return t.extend({},this.options);if("string"==typeof e){if(1===arguments.length)return void 0!==this.options[e]?this.options[e]:null;i={},i[e]=n}else i=e;this._setOptions(i)},_setOptions:function(e){var n=this;t.each(e,function(e,i){switch(e){case"disablePan":n._resetStyle();case"disableZoom":case"$zoomIn":case"$zoomOut":case"$zoomRange":case"$reset":case"onStart":case"onChange":case"onZoom":case"onPan":case"onEnd":case"onReset":case"eventNamespace":n._unbind()}switch(n.options[e]=i,e){case"disablePan":n._initStyle();case"disableZoom":case"$zoomIn":case"$zoomOut":case"$zoomRange":case"$reset":case"onStart":case"onChange":case"onZoom":case"onPan":case"onEnd":case"onReset":case"eventNamespace":n._bind();break;case"cursor":t.style(n.elem,"cursor",i);break;case"minScale":n.$zoomRange.attr("min",i);break;case"maxScale":n.$zoomRange.attr("max",i);break;case"rangeStep":n.$zoomRange.attr("step",i);break;case"startTransform":n._buildTransform();break;case"duration":case"easing":n._buildTransition();case"transition":n.transition()}})},_initStyle:function(){this.options.disablePan||this.$elem.css("cursor",this.options.cursor);var e=this.$parent;if(e.length&&!t.nodeName(e[0],"body")){var n={overflow:"hidden"};"static"===e.css("position")&&(n.position="relative"),e.css(n)}},_resetStyle:function(){this.$elem.css({cursor:"",transition:""}),this.$parent.css({overflow:"",position:""})},_bind:function(){var e=this,n=this.options,i=n.eventNamespace,s="touchstart"+i+" mousedown"+i,a="touchend"+i+" click"+i,r={},h=this.$reset,c=this.$zoomRange;if(t.each(["Start","Change","Zoom","Pan","End","Reset"],function(){var e=n["on"+this];t.isFunction(e)&&(r["panzoom"+this.toLowerCase()+i]=e)}),n.disablePan&&n.disableZoom||(r[s]=function(t){var i;("mousedown"===t.type?n.disablePan||1!==t.which:!(i=t.touches)||(1!==i.length||n.disablePan)&&2!==i.length)||(t.preventDefault(),t.stopPropagation(),e._startMove(t,i))}),this.$elem.on(r),h.length&&h.on(a,function(t){t.preventDefault(),e.reset()}),c.length&&c.attr({step:n.rangeStep===o.defaults.rangeStep&&c.attr("step")||n.rangeStep,min:n.minScale,max:n.maxScale}).prop({value:this.getMatrix()[0]}),!n.disableZoom){var m=this.$zoomIn,l=this.$zoomOut;m.length&&l.length&&(m.on(a,function(t){t.preventDefault(),e.zoom()}),l.on(a,function(t){t.preventDefault(),e.zoom(!0)})),c.length&&(r={},r["mousedown"+i]=function(){e.transition(!0)},r["change"+i]=function(){e.zoom(+this.value,{noSetRange:!0})},c.on(r))}},_unbind:function(){this.$elem.add(this.$zoomIn).add(this.$zoomOut).add(this.$reset).off(this.options.eventNamespace)},_buildTransform:function(){return this._origTransform=this.getTransform(this.options.startTransform)},_buildTransition:function(){var t=this.options;this._transform&&(this._transition=this._transform+" "+t.duration+"ms "+t.easing)},_checkDims:function(){var t=this.dimensions;return(t.width===t.widthBorder||t.height===t.heightBorder)&&this.resetDimensions(),this.dimensions},_getDistance:function(t){var e=t[0],n=t[1];return Math.sqrt(Math.pow(Math.abs(n.clientX-e.clientX),2)+Math.pow(Math.abs(n.clientY-e.clientY),2))},_getMiddle:function(t){var e=t[0],n=t[1];return{clientX:(n.clientX-e.clientX)/2+e.clientX,clientY:(n.clientY-e.clientY)/2+e.clientY}},_trigger:function(t){"string"==typeof t&&(t="panzoom"+t),this.$elem.triggerHandler(t,[this].concat(h.call(arguments,1)))},_startMove:function(n,i){var s,o,a,r,h,c,m=this,l=this.options,u="touchstart"===n.type,f=l.eventNamespace,d=(u?"touchmove":"mousemove")+f,g=(u?"touchend":"mouseup")+f,p=this.getMatrix(),v=p.slice(0),b=+v[4],_=+v[5],w={matrix:p,animate:"skip"};this.transition(!0),this.panning=!0,this._trigger("start",n,i),i&&2===i.length?(o=this._getDistance(i),a=+p[0],r=this._getMiddle(i),s=function(t){t.preventDefault();var e=m._getMiddle(i=t.touches),n=m._getDistance(i)-o;m.zoom(n*(l.increment/100)+a,{focal:e,matrix:p}),m.pan(+p[4]+e.clientX-r.clientX,+p[5]+e.clientY-r.clientY,w),r=e}):(h=n.pageX,c=n.pageY,s=function(t){t.preventDefault(),m.pan(b+t.pageX-h,_+t.pageY-c,w)}),t(document).off(f).on(d,s).on(g,function(n){n.preventDefault(),t(this).off(f),m.panning=!1,n.type="panzoomend",m._trigger(n,p,!e(p,v))})}},t.fn.panzoom=function(e){var n,i,s,a;return"string"==typeof e?(a=[],i=h.call(arguments,1),this.each(function(){n=t.data(this,r),n?"_"!==e.charAt(0)&&"function"==typeof(s=n[e])&&void 0!==(s=s.apply(n,i))&&a.push(s):a.push(void 0)}),a.length?1===a.length?a[0]:a:this):this.each(function(){new o(this,e)})},o});