define(["app","services/constants","services/b2b-constants","services/b2b/OtpService","services/userService","services/b2b/TermsAndConditionService","services/globalService"],function(a){a.controller("TermsAndConditionCtrl",["$rootScope","$scope","$http","$location","TermsAndConditionService","GlobalService",function(a,b,c,d,e,f){b.termsAndConditionFlag=a.termsAndConditionAccept;var g=function(a){a.accepted&&e.resolveNavigation()};b.agreeOnTermsAndCondition=function(){e.agreeOnTermsAndCondition().then(g)},b.defaultNavigate=function(){d.path("/")},b.logout=f.b2bLogout}])});