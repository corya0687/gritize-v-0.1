function HomeController(Auth) {
  this.signedIn = Auth.isAuthenticated;

}

HomeController.$inject = ['Auth'];

angular
  .module('gritize')
  .controller('HomeController', HomeController)
