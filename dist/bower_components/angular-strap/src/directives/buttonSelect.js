angular.module("$strap.directives").directive("bsButtonSelect",["$parse","$timeout",function(e,t){return{restrict:"A",require:"?ngModel",link:function(t,n,i,l){var c=e(i.bsButtonSelect);c.assign;l&&(n.text(t.$eval(i.ngModel)),t.$watch(i.ngModel,function(e,t){n.text(e)}));var o,r,u,a;n.bind("click",function(e){o=c(t),r=l?t.$eval(i.ngModel):n.text(),u=o.indexOf(r),a=u>o.length-2?o[0]:o[u+1],t.$apply(function(){n.text(a),l&&l.$setViewValue(a)})})}}}]);