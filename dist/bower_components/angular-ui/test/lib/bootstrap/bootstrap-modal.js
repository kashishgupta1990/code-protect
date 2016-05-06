/* =========================================================
 * bootstrap-modal.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

!function(t){"use strict";function e(){var e=this,i=setTimeout(function(){e.$element.off(t.support.transition.end),s.call(e)},500);this.$element.one(t.support.transition.end,function(){clearTimeout(i),s.call(e)})}function s(t){this.$element.hide().trigger("hidden"),i.call(this)}function i(e){var s=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=t.support.transition&&s;this.$backdrop=t('<div class="modal-backdrop '+s+'" />').appendTo(document.body),"static"!=this.options.backdrop&&this.$backdrop.click(t.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),i?this.$backdrop.one(t.support.transition.end,e):e()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(t.support.transition.end,t.proxy(o,this)):o.call(this)):e&&e()}function o(){this.$backdrop.remove(),this.$backdrop=null}function n(){var e=this;this.isShown&&this.options.keyboard?t(document).on("keyup.dismiss.modal",function(t){27==t.which&&e.hide()}):this.isShown||t(document).off("keyup.dismiss.modal")}var a=function(e,s){this.options=s,this.$element=t(e).delegate('[data-dismiss="modal"]',"click.dismiss.modal",t.proxy(this.hide,this))};a.prototype={constructor:a,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var e=this,s=t.Event("show");this.$element.trigger(s),this.isShown||s.isDefaultPrevented()||(t("body").addClass("modal-open"),this.isShown=!0,n.call(this),i.call(this,function(){var s=t.support.transition&&e.$element.hasClass("fade");e.$element.parent().length||e.$element.appendTo(document.body),e.$element.show(),s&&e.$element[0].offsetWidth,e.$element.addClass("in"),s?e.$element.one(t.support.transition.end,function(){e.$element.trigger("shown")}):e.$element.trigger("shown")}))},hide:function(i){i&&i.preventDefault();i=t.Event("hide"),this.$element.trigger(i),this.isShown&&!i.isDefaultPrevented()&&(this.isShown=!1,t("body").removeClass("modal-open"),n.call(this),this.$element.removeClass("in"),t.support.transition&&this.$element.hasClass("fade")?e.call(this):s.call(this))}},t.fn.modal=function(e){return this.each(function(){var s=t(this),i=s.data("modal"),o=t.extend({},t.fn.modal.defaults,s.data(),"object"==typeof e&&e);i||s.data("modal",i=new a(this,o)),"string"==typeof e?i[e]():o.show&&i.show()})},t.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},t.fn.modal.Constructor=a,t(function(){t("body").on("click.modal.data-api",'[data-toggle="modal"]',function(e){var s,i=t(this),o=t(i.attr("data-target")||(s=i.attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")),n=o.data("modal")?"toggle":t.extend({},o.data(),i.data());e.preventDefault(),o.modal(n)})})}(window.jQuery);