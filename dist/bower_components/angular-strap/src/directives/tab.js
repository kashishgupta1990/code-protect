angular.module("$strap.directives").directive("bsTabs",function(a,t,e){var n='<div class="tabs"><ul class="nav nav-tabs"><li ng-repeat="pane in panes" ng-class="{active:pane.active}"><a data-target="#{{pane.id}}" data-index="{{$index}}" data-toggle="tab">{{pane.title}}</a></li></ul><div class="tab-content" ng-transclude></div>';return{restrict:"A",require:"?ngModel",priority:0,scope:!0,template:n,replace:!0,transclude:!0,compile:function(t,n,i){return function(t,n,i,s){var d=a(i.bsTabs);d.assign,d(t);t.panes=[];var l,c,r,u=n.find("ul.nav-tabs"),o=n.find("div.tab-content"),v=0;e(function(){o.find("[data-title], [data-tab]").each(function(a){var e=angular.element(this);l="tab-"+t.$id+"-"+a,c=e.data("title")||e.data("tab"),r=!r&&e.hasClass("active"),e.attr("id",l).addClass("tab-pane"),i.fade&&e.addClass("fade"),t.panes.push({id:l,title:c,content:this.innerHTML,active:r})}),t.panes.length&&!r&&(o.find(".tab-pane:first-child").addClass("active"+(i.fade?" in":"")),t.panes[0].active=!0)}),s&&(n.on("show",function(a){var e=$(a.target);t.$apply(function(){s.$setViewValue(e.data("index"))})}),t.$watch(i.ngModel,function(a,t){angular.isUndefined(a)||(v=a,setTimeout(function(){var t=$(u[0].querySelectorAll("li")[1*a]);t.hasClass("active")||t.children("a").tab("show")}))}))}}}});