angular.module("$strap.directives").directive("bsDropdown",function(n,e,r){var t=function(n,e){return e||(e=['<ul class="dropdown-menu" role="menu" aria-labelledby="drop1">',"</ul>"]),angular.forEach(n,function(n,r){if(n.divider)return e.splice(r+1,0,'<li class="divider"></li>');var a="<li"+(n.submenu&&n.submenu.length?' class="dropdown-submenu"':"")+'><a tabindex="-1" ng-href="'+(n.href||"")+'"'+(n.click?'" ng-click="'+n.click+'"':"")+(n.target?'" target="'+n.target+'"':"")+(n.method?'" data-method="'+n.method+'"':"")+">"+(n.icon&&'<i class="'+n.icon+'"></i>&nbsp;'||"")+(n.text||"")+"</a>";n.submenu&&n.submenu.length&&(a+=t(n.submenu).join("\n")),a+="</li>",e.splice(r+1,0,a)}),e};return{restrict:"EA",scope:!0,link:function(a,i,o){var l=n(o.bsDropdown),u=l(a);r(function(){!angular.isArray(u);var n=angular.element(t(u).join(""));n.insertAfter(i),e(i.next("ul.dropdown-menu"))(a)}),i.addClass("dropdown-toggle").attr("data-toggle","dropdown")}}});