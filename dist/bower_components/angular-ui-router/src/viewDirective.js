function $ViewDirective(e,n,t,r){function i(){return n.has?function(e){return n.has(e)?n.get(e):null}:function(e){try{return n.get(e)}catch(t){return null}}}function o(e,n){function t(e){return 1===ngMajorVer&&ngMinorVer>=4?!!u.enabled(e):1===ngMajorVer&&ngMinorVer>=2?!!u.enabled():!!a}var r={enter:function(e,n,t){n.after(e),t()},leave:function(e,n){e.remove(),n()}};if(e.noanimation)return r;if(u)return{enter:function(e,n,i){t(e)?angular.version.minor>2?u.enter(e,null,n).then(i):u.enter(e,null,n,i):r.enter(e,n,i)},leave:function(e,n){t(e)?angular.version.minor>2?u.leave(e).then(n):u.leave(e,n):r.leave(e,n)}};if(a){var i=a&&a(n,e);return{enter:function(e,n,t){i.enter(e,null,n),t()},leave:function(e,n){i.leave(e),n()}}}return r}var l=i(),a=l("$animator"),u=l("$animate"),c={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(n,i,l){return function(n,i,a){function u(){function e(){n&&n.remove(),t&&t.$destroy()}var n=$,t=f;t&&(t._willBeDestroyed=!0),v?(g.leave(v,function(){e(),$=null}),$=v):(e(),$=null),v=null,f=null}function c(o){var c,$=getUiViewName(n,a,i,r),w=$&&e.$current&&e.$current.locals[$];if((o||w!==m)&&!n._willBeDestroyed){c=n.$new(),m=e.$current.locals[$],c.$emit("$viewContentLoading",$);var V=l(c,function(e){g.enter(e,i,function(){f&&f.$emit("$viewContentAnimationEnded"),(angular.isDefined(d)&&!d||n.$eval(d))&&t(e)}),u()});v=V,f=c,f.$emit("$viewContentLoaded",$),f.$eval(s)}}var $,v,f,m,s=a.onload||"",d=a.autoscroll,g=o(a,n);n.$on("$stateChangeSuccess",function(){c(!1)}),c(!0)}}};return c}function $ViewDirectiveFill(e,n,t,r){return{restrict:"ECA",priority:-400,compile:function(i){var o=i.html();return function(i,l,a){var u=t.$current,c=getUiViewName(i,a,l,r),$=u&&u.locals[c];if($){l.data("$uiView",{name:c,state:$.$$state}),l.html($.$template?$.$template:o);var v=e(l.contents());if($.$$controller){$.$scope=i,$.$element=l;var f=n($.$$controller,$);$.$$controllerAs&&(i[$.$$controllerAs]=f),l.data("$ngControllerController",f),l.children().data("$ngControllerController",f)}v(i)}}}}}function getUiViewName(e,n,t,r){var i=r(n.uiView||n.name||"")(e),o=t.inheritedData("$uiView");return i.indexOf("@")>=0?i:i+"@"+(o?o.state.name:"")}var ngMajorVer=angular.version.major,ngMinorVer=angular.version.minor;$ViewDirective.$inject=["$state","$injector","$uiViewScroll","$interpolate"],$ViewDirectiveFill.$inject=["$compile","$controller","$state","$interpolate"],angular.module("ui.router.state").directive("uiView",$ViewDirective),angular.module("ui.router.state").directive("uiView",$ViewDirectiveFill);