function HomeController(Auth) {
  this.signedIn = Auth.isAuthenticated;
  debugger;

}

angular
  .module('gritize')
  .controller('HomeController', HomeController)
