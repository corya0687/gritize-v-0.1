function NavBarController(Auth) {
  var ctrl = this
  ctrl.signedIn = Auth.isAuthenticated;
  ctrl.logout = Auth.logout;
  Auth.currentUser().then(function (user){
   ctrl.user = user;
  });

}

angular
  .module('gritize')
  .controller('NavBarController', NavBarController)
