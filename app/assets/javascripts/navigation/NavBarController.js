function NavBarController(Auth) {
  var ctrl = this
  ctrl.signedIn = Auth.isAuthenticated;
  ctrl.logout = Auth.logout;
  Auth.currentUser().then(function (user){
   ctrl.user = user;
  });

  ctrl.$on('devise:new-registration', function (e, user){
   ctrl.user = user;
 });

 ctrl.$on('devise:login', function (e, user){
   ctrl.user = user;
 });

 ctrl.$on('devise:logout', function (e, user){
   ctrl.user = {};
 });

}

angular
  .module('gritize')
  .controller('NavBarController', NavBarController)
