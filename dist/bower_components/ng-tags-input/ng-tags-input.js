/*!
 * ngTagsInput v2.0.1
 * http://mbenford.github.io/ngTagsInput
 *
 * Copyright (c) 2013-2014 Michael Benford
 * License: MIT
 *
 * Generated at 2014-04-13 21:25:38 -0300
 */

!function(){"use strict";function e(){var e={};return{on:function(t,n){return t.split(" ").forEach(function(t){e[t]||(e[t]=[]),e[t].push(n)}),this},trigger:function(t,n){return angular.forEach(e[t],function(e){e.call(null,n)}),this}}}function t(e,t){return e=e||[],e.length>0&&!angular.isObject(e[0])&&e.forEach(function(n,a){e[a]={},e[a][t]=n}),e}function n(e,t,n){for(var a=null,i=0;i<e.length;i++)if(e[i][n].toLowerCase()===t[n].toLowerCase()){a=e[i];break}return a}function a(e,t,n){var a=t.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return e.replace(new RegExp(a,"gi"),n)}var i={backspace:8,tab:9,enter:13,escape:27,space:32,up:38,down:40,comma:188},o=angular.module("ngTagsInput",[]);o.directive("tagsInput",["$timeout","$document","tagsInputConfig",function(a,o,r){function s(e,t){var a,i,o,r={};return a=function(t){return t[e.displayProperty]},i=function(t,n){t[e.displayProperty]=n},o=function(t){var i=a(t);return i.length>=e.minLength&&i.length<=(e.maxLength||i.length)&&e.allowedTagsPattern.test(i)&&!n(r.items,t,e.displayProperty)},r.items=[],r.addText=function(e){var t={};return i(t,e),r.add(t)},r.add=function(n){var s=a(n).trim();return e.replaceSpacesWithDashes&&(s=s.replace(/\s/g,"-")),i(n,s),o(n)?(r.items.push(n),t.trigger("tag-added",{$tag:n})):t.trigger("invalid-tag",{$tag:n}),n},r.remove=function(e){var n=r.items.splice(e,1)[0];return t.trigger("tag-removed",{$tag:n}),n},r.removeLast=function(){var t,n=r.items.length-1;return e.enableEditingLastTag||r.selected?(r.selected=null,t=r.remove(n)):r.selected||(r.selected=r.items[n]),t},r}return{restrict:"E",require:"ngModel",scope:{tags:"=ngModel",onTagAdded:"&",onTagRemoved:"&"},replace:!1,transclude:!0,templateUrl:"ngTagsInput/tags-input.html",controller:["$scope","$attrs","$element",function(t,n,a){r.load("tagsInput",t,n,{placeholder:[String,"Add a tag"],tabindex:[Number],removeTagSymbol:[String,String.fromCharCode(215)],replaceSpacesWithDashes:[Boolean,!0],minLength:[Number,3],maxLength:[Number],addOnEnter:[Boolean,!0],addOnSpace:[Boolean,!1],addOnComma:[Boolean,!0],addOnBlur:[Boolean,!0],allowedTagsPattern:[RegExp,/.+/],enableEditingLastTag:[Boolean,!1],minTags:[Number],maxTags:[Number],displayProperty:[String,"text"],allowLeftoverText:[Boolean,!1],addFromAutocompleteOnly:[Boolean,!1]}),t.events=new e,t.tagList=new s(t.options,t.events),this.registerAutocomplete=function(){var e=a.find("input");return e.on("keydown",function(e){t.events.trigger("input-keydown",e)}),{addTag:function(e){return t.tagList.add(e)},focusInput:function(){e[0].focus()},getTags:function(){return t.tags},getOptions:function(){return t.options},on:function(e,n){return t.events.on(e,n),this}}}}],link:function(e,n,r,s){var u=[i.enter,i.comma,i.space,i.backspace],l=e.tagList,c=e.events,g=e.options,d=n.find("input");c.on("tag-added",e.onTagAdded).on("tag-removed",e.onTagRemoved).on("tag-added",function(){e.newTag.text=""}).on("tag-added tag-removed",function(){s.$setViewValue(e.tags)}).on("invalid-tag",function(){e.newTag.invalid=!0}).on("input-change",function(){l.selected=null,e.newTag.invalid=null}).on("input-focus",function(){s.$setValidity("leftoverText",!0)}).on("input-blur",function(){g.addFromAutocompleteOnly||(g.addOnBlur&&l.addText(e.newTag.text),s.$setValidity("leftoverText",g.allowLeftoverText?!0:!e.newTag.text))}),e.newTag={text:"",invalid:null},e.getDisplayText=function(e){return e[g.displayProperty].trim()},e.track=function(e){return e[g.displayProperty]},e.newTagChange=function(){c.trigger("input-change",e.newTag.text)},e.$watch("tags",function(n){e.tags=t(n,g.displayProperty),l.items=e.tags}),e.$watch("tags.length",function(e){s.$setValidity("maxTags",angular.isUndefined(g.maxTags)||e<=g.maxTags),s.$setValidity("minTags",angular.isUndefined(g.minTags)||e>=g.minTags)}),d.on("keydown",function(t){if(!t.isImmediatePropagationStopped||!t.isImmediatePropagationStopped()){var n,a,o=t.keyCode,r=t.shiftKey||t.altKey||t.ctrlKey||t.metaKey,s={};if(!r&&-1!==u.indexOf(o))if(s[i.enter]=g.addOnEnter,s[i.comma]=g.addOnComma,s[i.space]=g.addOnSpace,n=!g.addFromAutocompleteOnly&&s[o],a=!n&&o===i.backspace&&0===e.newTag.text.length,n)l.addText(e.newTag.text),e.$apply(),t.preventDefault();else if(a){var c=l.removeLast();c&&g.enableEditingLastTag&&(e.newTag.text=c[g.displayProperty]),e.$apply(),t.preventDefault()}}}).on("focus",function(){e.hasFocus||(e.hasFocus=!0,c.trigger("input-focus"),e.$apply())}).on("blur",function(){a(function(){var t=o.prop("activeElement"),a=t===d[0],i=n[0].contains(t);(a||!i)&&(e.hasFocus=!1,c.trigger("input-blur"))})}),n.find("div").on("click",function(){d[0].focus()})}}}]),o.directive("autoComplete",["$document","$timeout","$sce","tagsInputConfig",function(e,o,r,s){function u(e,a){var i,r,s,u={};return r=function(e,t){return e.filter(function(e){return!n(t,e,a.tagsInput.displayProperty)})},u.reset=function(){s=null,u.items=[],u.visible=!1,u.index=-1,u.selected=null,u.query=null,o.cancel(i)},u.show=function(){u.selected=null,u.visible=!0},u.load=function(n,l){return n.length<a.minLength?void u.reset():(o.cancel(i),void(i=o(function(){u.query=n;var i=e({$query:n});s=i,i.then(function(e){i===s&&(e=t(e.data||e,a.tagsInput.displayProperty),e=r(e,l),u.items=e.slice(0,a.maxResultsToShow),u.items.length>0?u.show():u.reset())})},a.debounceDelay,!1)))},u.selectNext=function(){u.select(++u.index)},u.selectPrior=function(){u.select(--u.index)},u.select=function(e){0>e?e=u.items.length-1:e>=u.items.length&&(e=0),u.index=e,u.selected=u.items[e]},u.reset(),u}function l(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}return{restrict:"E",require:"^tagsInput",scope:{source:"&"},templateUrl:"ngTagsInput/auto-complete.html",link:function(t,n,o,c){var g,d,p,f,m,h=[i.enter,i.tab,i.escape,i.up,i.down];s.load("autoComplete",t,o,{debounceDelay:[Number,100],minLength:[Number,3],highlightMatchedText:[Boolean,!0],maxResultsToShow:[Number,10]}),p=t.options,d=c.registerAutocomplete(),p.tagsInput=d.getOptions(),g=new u(t.source,p),f=function(e){return e[p.tagsInput.displayProperty]},t.suggestionList=g,t.addSuggestion=function(){var e=!1;return g.selected&&(d.addTag(g.selected),g.reset(),d.focusInput(),e=!0),e},t.highlight=function(e){var t=f(e);return t=l(t),p.highlightMatchedText&&(t=a(t,l(g.query),"<em>$&</em>")),r.trustAsHtml(t)},t.track=function(e){return f(e)},d.on("tag-added invalid-tag",function(){g.reset()}).on("input-change",function(e){e?g.load(e,d.getTags()):g.reset()}).on("input-keydown",function(e){var n,a;if(-1!==h.indexOf(e.keyCode)){var o=!1;e.stopImmediatePropagation=function(){o=!0,e.stopPropagation()},e.isImmediatePropagationStopped=function(){return o},g.visible&&(n=e.keyCode,a=!1,n===i.down?(g.selectNext(),a=!0):n===i.up?(g.selectPrior(),a=!0):n===i.escape?(g.reset(),a=!0):(n===i.enter||n===i.tab)&&(a=t.addSuggestion()),a&&(e.preventDefault(),e.stopImmediatePropagation(),t.$apply()))}}).on("input-blur",function(){g.reset()}),m=function(){g.visible&&(g.reset(),t.$apply())},e.on("click",m),t.$on("$destroy",function(){e.off("click",m)})}}}]),o.directive("tiTranscludeAppend",function(){return function(e,t,n,a,i){i(function(e){t.append(e)})}}),o.directive("tiAutosize",function(){return{restrict:"A",require:"ngModel",link:function(e,t,n,a){var i,o,r=3;i=angular.element('<span class="input"></span>'),i.css("display","none").css("visibility","hidden").css("width","auto").css("white-space","pre"),t.parent().append(i),o=function(e){var a,o=e;return angular.isString(o)&&0===o.length&&(o=n.placeholder),o&&(i.text(o),i.css("display",""),a=i.prop("offsetWidth"),i.css("display","none")),t.css("width",a?a+r+"px":""),e},a.$parsers.unshift(o),a.$formatters.unshift(o),n.$observe("placeholder",function(e){a.$modelValue||o(e)})}}}),o.provider("tagsInputConfig",function(){var e={},t={};this.setDefaults=function(t,n){return e[t]=n,this},this.setActiveInterpolation=function(e,n){return t[e]=n,this},this.$get=["$interpolate",function(n){var a={};return a[String]=function(e){return e},a[Number]=function(e){return parseInt(e,10)},a[Boolean]=function(e){return"true"===e.toLowerCase()},a[RegExp]=function(e){return new RegExp(e)},{load:function(i,o,r,s){o.options={},angular.forEach(s,function(s,u){var l,c,g,d,p;l=s[0],c=s[1],g=a[l],d=function(){var t=e[i]&&e[i][u];return angular.isDefined(t)?t:c},p=function(e){o.options[u]=e?g(e):d()},t[i]&&t[i][u]?r.$observe(u,function(e){p(e)}):p(r[u]&&n(r[u])(o.$parent))})}}}]}),o.run(["$templateCache",function(e){e.put("ngTagsInput/tags-input.html",'<div class="host" tabindex="-1" ti-transclude-append=""><div class="tags" ng-class="{focused: hasFocus}"><ul class="tag-list"><li class="tag-item" ng-repeat="tag in tagList.items track by track(tag)" ng-class="{ selected: tag == tagList.selected }"><span>{{getDisplayText(tag)}}</span> <a class="remove-button" ng-click="tagList.remove($index)">{{options.removeTagSymbol}}</a></li></ul><input class="input" placeholder="{{options.placeholder}}" tabindex="{{options.tabindex}}" ng-model="newTag.text" ng-change="newTagChange()" ng-trim="false" ng-class="{\'invalid-tag\': newTag.invalid}" ti-autosize=""></div></div>'),e.put("ngTagsInput/auto-complete.html",'<div class="autocomplete" ng-show="suggestionList.visible"><ul class="suggestion-list"><li class="suggestion-item" ng-repeat="item in suggestionList.items track by track(item)" ng-class="{selected: item == suggestionList.selected}" ng-click="addSuggestion()" ng-mouseenter="suggestionList.select($index)" ng-bind-html="highlight(item)"></li></ul></div>')}])}();