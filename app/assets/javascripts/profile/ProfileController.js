function ProfileController(user, $scope ) {
  var ctrl = this;

  ctrl.user = user
  $scope.$watch(function () {
    return ctrl.user
  }, function (newValue, oldValue) {
  }, true)
}

angular
  .module('gritize')
  .controller('ProfileController', ProfileController)
