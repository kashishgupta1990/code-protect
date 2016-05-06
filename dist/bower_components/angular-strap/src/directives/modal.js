"use strict";angular.module("$strap.directives").factory("$modal",function(n,a,t,e,o,d,r){var i="modal",s=$.fn.emulateTransitionEnd?"bs.":"",l=s?"."+s+i:"",u=function(i){function s(i){var s=angular.extend({show:!0},r.modal,i),u=s.scope?s.scope:n.$new(),c=s.template;return o.when(d.get(c)||t.get(c,{cache:!0}).then(function(n){return n.data})).then(function(n){var t=c.replace(".html","").replace(/[\/|\.|:]/g,"-")+"-"+u.$id,o=$('<div class="modal" tabindex="-1"></div>').attr("id",t).addClass("fade").html(n);return $.fn.emulateTransitionEnd||o.addClass("hide"),s.modalClass&&o.addClass(s.modalClass),$("body").append(o),e(function(){a(o)(u)}),u.$modal=function(n){o.modal(n)},angular.forEach(["show","hide"],function(n){u[n]=function(){o.modal(n)}}),u.dismiss=u.hide,angular.forEach(["show","shown","hide","hidden"],function(n){o.on(n+l,function(a){u.$emit("modal-"+n,a)})}),o.on("shown"+l,function(n){$("input[autofocus], textarea[autofocus]",o).first().trigger("focus")}),o.on("hidden"+l,function(n){s.persist||u.$destroy()}),u.$on("$destroy",function(){o.remove()}),o.modal(s),o})}return new s(i)};return u}).directive("bsModal",function(n,a){return{restrict:"A",scope:!0,link:function(t,e,o,d){var r={template:t.$eval(o.bsModal),persist:!0,show:!1,scope:t};angular.forEach(["modalClass","backdrop","keyboard"],function(n){angular.isDefined(o[n])&&(r[n]=o[n])}),n.when(a(r)).then(function(n){e.attr("data-target","#"+n.attr("id")).attr("data-toggle","modal")})}}});