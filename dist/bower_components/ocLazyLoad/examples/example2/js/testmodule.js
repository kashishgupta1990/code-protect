angular.module("test",["oc.lazyLoad"]).config(["$ocLazyLoadProvider",function(o){o.config({loadedModules:["test"],jsLoader:requirejs,debug:!0})}]).controller("mainController",["$scope","$ocLazyLoad",function(o,l){o.test="Hi there",o.partialUrl="",o.load=function(){l.load({name:"lazymodule",files:["lazymodule"]}).then(function(){o.partialUrl="partials/grid.html"},function(o){console.log(o)})}}]);