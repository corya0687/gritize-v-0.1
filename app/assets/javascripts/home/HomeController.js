function HomeController(Auth) {
  this.signedIn = Auth.isAuthenticated;
  
}

angular
  .module('gritize')
  .controller('HomeController', HomeController)
