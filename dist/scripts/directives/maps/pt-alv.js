define(["app","text!views/directives/maps/pt-alv.html","directives/common/pt-loading-block"],function(a,b){a.directive("ptAlv",["$rootScope",function(a){return{restrict:"EAC",scope:{},transclude:!0,template:b,link:function(b,c){b.$on("$destroy",function(){c.remove()}),b.state=!0,b.toggleSideBar=function(){var d="";b.state?(d="Hide",b.state=!1,a.$broadcast("alvClosed"),$("#alvSidebar",c).removeClass("open").animate({right:"-330px"},1e3,"",function(){}),$(".pt.pt-icon-angle-double-right",c).addClass("pt-icon-angle-double-left").removeClass("pt-icon-angle-double-right")):(d="Show",b.state=!0,a.$broadcast("alvOpened"),$("#alvSidebar",c).addClass("open").animate({right:"0px"},1e3,function(){}),$(".pt.pt-icon-angle-double-left",c).addClass("pt-icon-angle-double-right").removeClass("pt-icon-angle-double-left"))}}}}])});