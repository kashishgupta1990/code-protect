/*!
 * jQuery UI Tooltip 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tooltip/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */

!function(t){function i(i,o){var e=(i.attr("aria-describedby")||"").split(/\s+/);e.push(o),i.data("ui-tooltip-id",o).attr("aria-describedby",t.trim(e.join(" ")))}function o(i){var o=i.data("ui-tooltip-id"),e=(i.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(o,e);-1!==n&&e.splice(n,1),i.removeData("ui-tooltip-id"),e=t.trim(e.join(" ")),e?i.attr("aria-describedby",e):i.removeAttr("aria-describedby")}var e=0;t.widget("ui.tooltip",{version:"1.10.4",options:{content:function(){var i=t(this).attr("title")||"";return t("<a>").text(i).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(i,o){var e=this;return"disabled"===i?(this[o?"_disable":"_enable"](),void(this.options[i]=o)):(this._super(i,o),void("content"===i&&t.each(this.tooltips,function(t,i){e._updateContent(i)})))},_disable:function(){var i=this;t.each(this.tooltips,function(o,e){var n=t.Event("blur");n.target=n.currentTarget=e[0],i.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var i=t(this);i.is("[title]")&&i.data("ui-tooltip-title",i.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var i=t(this);i.data("ui-tooltip-title")&&i.attr("title",i.data("ui-tooltip-title"))})},open:function(i){var o=this,e=t(i?i.target:this.element).closest(this.options.items);e.length&&!e.data("ui-tooltip-id")&&(e.attr("title")&&e.data("ui-tooltip-title",e.attr("title")),e.data("ui-tooltip-open",!0),i&&"mouseover"===i.type&&e.parents().each(function(){var i,e=t(this);e.data("ui-tooltip-open")&&(i=t.Event("blur"),i.target=i.currentTarget=this,o.close(i,!0)),e.attr("title")&&(e.uniqueId(),o.parents[this.id]={element:this,title:e.attr("title")},e.attr("title",""))}),this._updateContent(e,i))},_updateContent:function(t,i){var o,e=this.options.content,n=this,s=i?i.type:null;return"string"==typeof e?this._open(i,t,e):(o=e.call(t[0],function(o){t.data("ui-tooltip-open")&&n._delay(function(){i&&(i.type=s),this._open(i,t,o)})}),void(o&&this._open(i,t,o)))},_open:function(o,e,n){function s(t){p.of=t,a.is(":hidden")||a.position(p)}var a,l,r,p=t.extend({},this.options.position);if(n){if(a=this._find(e),a.length)return void a.find(".ui-tooltip-content").html(n);e.is("[title]")&&(o&&"mouseover"===o.type?e.attr("title",""):e.removeAttr("title")),a=this._tooltip(e),i(e,a.attr("id")),a.find(".ui-tooltip-content").html(n),this.options.track&&o&&/^mouse/.test(o.type)?(this._on(this.document,{mousemove:s}),s(o)):a.position(t.extend({of:e},this.options.position)),a.hide(),this._show(a,this.options.show),this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval(function(){a.is(":visible")&&(s(p.of),clearInterval(r))},t.fx.interval)),this._trigger("open",o,{tooltip:a}),l={keyup:function(i){if(i.keyCode===t.ui.keyCode.ESCAPE){var o=t.Event(i);o.currentTarget=e[0],this.close(o,!0)}},remove:function(){this._removeTooltip(a)}},o&&"mouseover"!==o.type||(l.mouseleave="close"),o&&"focusin"!==o.type||(l.focusout="close"),this._on(!0,e,l)}},close:function(i){var e=this,n=t(i?i.currentTarget:this.element),s=this._find(n);this.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&n.attr("title",n.data("ui-tooltip-title")),o(n),s.stop(!0),this._hide(s,this.options.hide,function(){e._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),i&&"mouseleave"===i.type&&t.each(this.parents,function(i,o){t(o.element).attr("title",o.title),delete e.parents[i]}),this.closing=!0,this._trigger("close",i,{tooltip:s}),this.closing=!1)},_tooltip:function(i){var o="ui-tooltip-"+e++,n=t("<div>").attr({id:o,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return t("<div>").addClass("ui-tooltip-content").appendTo(n),n.appendTo(this.document[0].body),this.tooltips[o]=i,n},_find:function(i){var o=i.data("ui-tooltip-id");return o?t("#"+o):t()},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_destroy:function(){var i=this;t.each(this.tooltips,function(o,e){var n=t.Event("blur");n.target=n.currentTarget=e[0],i.close(n,!0),t("#"+o).remove(),e.data("ui-tooltip-title")&&(e.attr("title",e.data("ui-tooltip-title")),e.removeData("ui-tooltip-title"))})}})}(jQuery);