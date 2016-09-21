function ProfileController(user, $scope, $location ) {
  var ctrl = this;
  
  ctrl.user = user
}
angular
  .module('gritize')
  .controller('ProfileController', ProfileController)
