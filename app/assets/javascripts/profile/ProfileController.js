function ProfileController(user, $scope ) {
  var ctrl = this;

  ctrl.user = user

  
}

angular
  .module('gritize')
  .controller('ProfileController', ProfileController)
