define(["app","text!views/directives/maps/pt-alv-listitem-project.html","services/leadService","services/favoriteService","directives/common/pt-compare-button","directives/common/pt-favorite"],function(a,b){a.directive("ptAlvListitemProject",["$parse","$rootScope","LeadService","FavoriteService",function(a,c,d,e){return{restrict:"EA",scope:{project:"="},template:b,link:function(a,b){a.data=a.project,a.callerLocation="ALV",a.openLeadForm=function(b,c,e){b.stopPropagation();var f={type:c,cityId:a.data.cityId,localityId:a.data.localityId,projectId:a.data.projectId,projectName:a.data.name,builderName:a.data.builderName,leadType:a.data.resaleEnquiry?"Resale":"Primary",fromALV:!0,ui_php:"mappage.php",formlocationinfo:e};d.openLeadForm(f)},b.bind("mouseenter",function(){c.$broadcast("projectAlvMouseEntered",a.data),e("hover","Project Hovered",a.data)}),b.bind("mouseleave",function(){c.$broadcast("projectAlvMouseLeft",a.data)}),b.bind("click",function(){c.$broadcast("projectAlvClicked",a.data),e("clicked","Project Clicked",a.data)}),a.$on("$destroy",function(){b.unbind("mouseenter"),b.unbind("mouseleave"),b.unbind("click"),b.remove(),a.data=void 0});var e=function(a,b,d){var e=c.CURRENT_ACTIVE_PAGE,f="ALV",g={};g["Locality ID"]=d.localityId,g["City ID"]=d.cityId,"clicked"==a&&(g["Clicked From"]=f,g["Page Name"]=e,"undefined"!=typeof mixpanel&&mixpanel.people.increment(b))}},controller:["$scope",function(a){a.$on("favChanged",function(b){var c=a.data.projectId,d=e.isFav(c),f=$(".projFav_"+c);d?f.addClass("active"):f.removeClass("active")}),a.$on("$signupRes",function(){var a,b,c;e.getMyFavorites().then(function(d){if(d&&d.length)for(a=0,b=d.length;b>a;a++)c=$(".projFav_"+d[a].projectId),c.addClass("active")})})}]}}])});