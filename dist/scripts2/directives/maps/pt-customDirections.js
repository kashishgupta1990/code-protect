define(["app","text!views/directives/maps/pt-customDirections.html","services/mapPlacesGeocoder","services/maps/mapDistanceMatrix","services/b2b/CookieService"],function(a,b){a.filter("secToHM",function(){return function(a){if(!a)return"";var b=Math.round(a/60),c=parseInt(b/60),b=b-60*c,d=b+" min";return c&&(d=c+" h "+d),d}}),a.directive("ptCustomDirections",["$q","$filter","$modal","$rootScope","mapPlacesGeocoder","mapDistanceMatrix","CookieService",function(a,c,d,e,f,g,h){return{restrict:"A",scope:{data:"="},template:b,link:function(b,d){b.revertDirection=!1,b.searchedPlaces=[],b.results=[];var i=[],j=3;b.$on("$destroy",function(){d.remove()}),b.sendGAEvent=function(a){},b.customDirectionTracking=function(a,b){a&&(1==a.length||"paste"==b)},b.searchSuggestions=function(d){var e=a.defer();return b.results=[],d||d.length<2?(f.getSuggestions({latitude:b.data.latitude,longitude:b.data.longitude},function(a,d){return"OK"==a?angular.forEach(d.results,function(a,c){a.place_id&&(a.displayText=a.description,b.results.push(a))}):"ZERO_RESULTS"==a?(b.noResultMessage="This location is more than 100 kms from the project. Search for locations within a 100 km radius to get commute directions.",b.results=[]):b.results=[],b.results=c("limitTo")(b.results,8),e.resolve(b.results),b.results},d,1e5),e.promise.then(function(a){return a})):(e.resolve([]),void(b.results=[]))},b.$on("cityUpdated",function(){e.selectedCity&&e.selectedCity.id&&(k=h.getJson("customDirectionHistory")||[],b.searchedPlaces=k[e.selectedCity.id])}),b.data.searchedPlacesLocalData=[];var k=h.getJson("customDirectionHistory")||[];b.searchedPlaces=e.selectedCity&&e.selectedCity.id?k[e.selectedCity.id]:[],b.searchOptionSelected=function(a,c,d){b.data.item={tab:"customDirections"},e.$broadcast("removeAmenitiesMarkers"),f.getDetails(a.place_id,function(f,l){if("OK"==f){if(b.revertDirection)var m={latitude:b.data.latitude,longitude:b.data.longitude},n={latitude:l.lat(),longitude:l.lng()};else var n={latitude:b.data.latitude,longitude:b.data.longitude},m={latitude:l.lat(),longitude:l.lng()};k[e.selectedCity.id]||(k[e.selectedCity.id]=[]),g.fetch(n,m).then(function(f){if("OK"==f.status&&f.results.rows[0].elements[0].distance.value<=1e5){var g=i.indexOf(a.place_id);g>=0&&!c&&(i.splice(g,1),b.searchedPlaces.splice(g,1),b.data.searchedPlacesLocalData.splice(g,1));var l=k[e.selectedCity.id],o=_.find(l,function(b){return b.place_id==a.place_id}),g=l.indexOf(o);if(g>=0&&!c&&l.splice(g,1),!c){var p={place_id:a.place_id,displayText:a.displayText};l.unshift(p),b.data.searchedPlacesLocalData.unshift({}),l.splice(j,l.length),l.splice(j,l.length),b.data.searchedPlacesLocalData.splice(j,l.length)}e.$broadcast("drawCustomDirection",{origin:n,destination:m,panelId:"directions-panel",callback:function(a){b.data.item.distance=a.distance.text,b.data.item.duration=a.duration.value,c||(d=0),b.data.item.name=l[d].displayText,b.data.searchedPlacesLocalData[d]=b.data.searchedPlacesLocalData[d]||{},b.data.searchedPlacesLocalData[d].distance=a.distance,b.data.searchedPlacesLocalData[d].duration=a.duration,b.data.searchedPlacesLocalData[d].steps=a.steps,h.setJson("customDirectionHistory",k),b.searchedPlaces=l}})}else b.showMessage="Destination too far. Search for a point within 100 km.",setTimeout(function(){b.showMessage=!1},2e3)})}})}}}}])});