define(["app","services/b2b/ResetPasswordService","services/b2b/userDetails"],function(a){a.controller("resetPasswordCtrl",["$rootScope","$scope","$location","$timeout","ResetPasswordService","userDetails",function(a,b,c,d,e,f){b.message={show:!1,text:""},b.user={newPassword:"",confirmNewPassword:""};var g=function(a){a.data&&a.data.data&&a.data.data.passwordCreated?(h("Password Changed successfully"),f.getUserDetails().then(function(){d(function(){c.path("/")},2e3)})):h("Error changing password. Try again later")},h=function(a){b.message={show:!0,text:a}};b.resetPassword=function(){var a=c.search(),d=b.user;return d.newPassword&&d.confirmNewPassword?d.newPassword.trim()!=d.confirmNewPassword.trim()?void h("Confirm Password does not match"):void e.resetPassword(a.token,d).then(g):void h("Password field left blank")}}])});