define(["app","text!views/directives/maps/pt-neighbourhood-dd.html","services/localityService","services/maps/mapConfig","services/helpCardConfigFactory","directives/common/pt-loading-block"],function(a,b){a.directive("ptNeighbourhoodDd",["$rootScope","LocalityService","PtMapsConfig","helpCardConfig",function(a,c,d,e){return{restrict:"A",scope:{},template:b,link:function(b,f){b.map=d.mapConfig,b.dropDownOpenStatus=!1,b.showNeighbourhood=!1;var g=!1;e.configObj.neighborhood=!0,b.$on("changeShowNeighbourhood-dd",function(a,c){var d=c?!0:!1;b.showNeighbourhood=d}),b.$on("$destroy",function(){b.map=void 0,f.remove()}),b.exit=function(){$(".neighbourhood-dd-wrap").hasClass("active-neighbour")&&(f.find("a").removeClass("active-neighbour"),$(".neighbourhood-dd-wrap").removeClass("active-neighbour"),b.map.services.bounds([])),$(".neighbour").css("cursor","pointer"),a.$broadcast("amenityClicked",{type:null,level:"locality"})},b.$on("exitNeighbourhood-dd",function(){b.exit()}),b.$on("updateUnmappedProjectStatus",function(a,b){b=b?!0:!1,g=b}),b.neighbourhoodItems=function(a,d){if(!b.dropDownOpenStatus){b.neighbourhoodValue={school:0,restaurant:0,hospital:0,gas_station:0,bank:0,airport:0,train_station:0,bus_station:0},b.dropDownOpenStatus=!0;var e=b.map.state.filter.state,f=b.map.state.polygonFilter.currentDrawingStatus,h=b.map.state.polygonFilter.polygonExist;if(f&&h)e=b.map.state.polygonFilter.state;else if(f&&!h||g)return;d=d||e.position,a=a||e.distance;var i="";$("#neighbourhoodLoader").show(),c.getNeighbourhood(d,a,"",function(a){if(""!==a)for(var c=0,d=a.length;d>c;c++)i=a[c],b.neighbourhoodValue[i.localityAmenityTypes.name]+=1;$("#neighbourhoodLoader").hide()})}},b.itemClicked=function(c,d){var e=angular.element(c.currentTarget),g="";if(e.hasClass("active-neighbour"))e.removeClass("active-neighbour"),a.$broadcast("amenityClicked",{type:d.split(","),level:"locality"});else{$("a.active-neighbour").each(function(b,c){g=$(this),g.removeClass("active-neighbour"),a.$broadcast("amenityClicked",{type:g.attr("data-type").split(","),level:"locality"})}),e.addClass("active-neighbour");var h=b.map.state.polygonFilter.currentDrawingStatus,i=b.map.state.polygonFilter.polygonExist,j={type:d.split(","),level:"locality"};h&&i&&(j.position=b.map.state.polygonFilter.state.position,j.radius=b.map.state.polygonFilter.state.distance),a.$broadcast("amenityClickedComplete",j)}var k=f.find("a.active-neighbour").length;k?($(".neighbourhood-dd-wrap").addClass("active-neighbour"),$(".neighbour").css("cursor","default")):($(".neighbourhood-dd-wrap").removeClass("active-neighbour"),$(".neighbour").css("cursor","pointer"),b.map.services.bounds([]));for(var l=a.CURRENT_ACTIVE_PAGE,m=[],n=f.find("a.active-neighbour"),o=0;o<n.length;o++)m.push(n[o].name);if(m=m.join(","),m.length>0){var p={};p["Locality Neighbourhood Name"]=m,p["Locality ID"]=a.currentLocality&&a.currentLocality.localityId?a.currentLocality.localityId:null,p["Page Name"]=l}},b.tracking=function(b,c){var d={},e=a.CURRENT_ACTIVE_PAGE;d["Locality ID"]=a.currentLocality&&a.currentLocality.localityId?a.currentLocality.localityId:null,d["Page Name"]=e}}}}])});