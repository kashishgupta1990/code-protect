define(["app","services/userService","services/favoriteService","services/maps/mapConfig","services/localityService","services/markerFactory"],function(a){a.directive("ptMarkers",["UserService","GlobalService","FavoriteService","$timeout","$rootScope","PtMapsConfig","LocalityService","markerFactory",function(a,b,c,d,e,f,g,h){return{restrict:"A",link:function(i,j){var k={},l=[];i.map=f.mapConfig;var m=i.$on("favChanged",function(a,b){$(".sqm_project").removeClass("st-f");for(var c=0,d=b&&b.length;d>c;c++){var e=b[c].projectId,f=$("#project_"+e);f.addClass("st-f")}});l.push(m);var n=i.$on("updateFavoriteProjects",function(a){b.isLoggedIn()&&z()});l.push(n);var o=i.$on("hoverMarkerEnter",function(a,b){C("#"+b.selector)});l.push(o);var p=i.$on("hoverMarkerLeave",function(a,b){D("#"+b.selector)});l.push(p);var q=i.$on("markerClicked",function(a,b){B(b.data.projectId)});l.push(q);var r=i.$on("markerVisited",function(a,b){k[b.data.projectId]=!0,A(b.data.projectId)});l.push(r);var s=i.$on("addRecentlyVisited",function(b,c){a.getRecentlyViewed("",1e4).then(function(a){if(k)for(var b=0,d=a&&a.length;d>b;b++)k[a[b].projectId]=!0,A(a[b].projectId);c.callback&&c.callback()})});l.push(s);var t=i.$on("showProjectMarkers",function(a,b){b?$(".sqm_project").show():$(".sqm_project").hide()});l.push(t);var u=i.$on("showLocalityMarkers",function(a,b){b?$(".sqm_locality").show():$(".sqm_locality").hide()});l.push(u);var v=i.$on("showMarkers",function(a,b){b?$(".sq_marker").show():$(".sq_marker").hide()});l.push(v);var w=i.$on("showNeighbourhood",function(a,b){b?$(".neighbour-icons").show():$(".neighbour-icons").hide()});l.push(w);var x=i.$on("removeNeighbourhood",function(a,b){var c,d=0,e=b.types||_.keys(i.map.state.neighbourhood[b.level]);for(d=0,c=e.length;c>d;d++)I(e[d],b.level)});l.push(x);var y=i.$on("addNeighbourhood",function(a,b){E(b.type,b.level,b.position,b.radius,b.direction,b.projectLatLng)});l.push(y);var z=function(){d(function(){c.getMyFavorites().then(function(a){c.broadcastChange(a)})},1e3)},A=function(a){var b="#project_"+a;$(b).removeClass("st-c").addClass("st-v")},B=function(a){var b="#project_"+a;$(b).addClass("st-c")},C=function(a){$(a).addClass("st-alv-h")},D=function(a){$(a).removeClass("st-alv-h")},E=function(a,b,c,f,h,j){if(c=c||i.map.state.filter.state.position,f=f||i.map.state.filter.state.distance,h=h||!1,$("#neighbourhoodLoaderProject").show(),"airport"===a[0]){var k=[];e.selectedCity.amenities&&(k=_.filter(e.selectedCity.amenities,function(a){return a.localityAmenityTypes?"airport"===a.localityAmenityTypes.name:!1})),d(function(){F(a,b,c,f,h,k,j)},10)}else g.getNeighbourhood(c,f,a[0],function(d){F(a,b,c,f,h,d,j)})},F=function(a,b,c,d,f,g,j){var k,l,m=0,n=null,o=[],p=!1;for("airport"===a[0]&&(p=!0),$("#neighbourhoodLoaderProject").hide(),m=0,l=g.length;l>m;m++)n=g[m],n.__direction__=f,f||(n.__tooltip__=n.name),k=new h.marker(a,n),o.push(k);i.map.state.neighbourhood[b][a]=o,e.$broadcast("readyToDrawNeighbourhoodMarkers",{type:a,level:b,project:c,direction:f,showMultipleDirections:p,projectLatLng:j})};i.$on("$destroy",function(){H(),k=void 0,i.map=void 0,j.remove()});var G=function(a,b){b&&b()},H=function(){$.each(l,G)},I=function(a,b){d(function(){e.$broadcast("readyToDrawNeighbourhoodMarkers",{type:a,level:b,removeState:!0})},10)}}}}])});