angular.module("ui.filters").filter("unique",function(){return function(r,n){if(n===!1)return r;if((n||angular.isUndefined(n))&&angular.isArray(r)){var u=[],a=function(r){return angular.isObject(r)&&angular.isString(n)?r[n]:r};angular.forEach(r,function(r){for(var n=!1,i=0;i<u.length;i++)if(angular.equals(a(u[i]),a(r))){n=!0;break}n||u.push(r)}),r=u}return r}});