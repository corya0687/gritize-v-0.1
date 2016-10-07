function ProfileController(user, $scope, $location ) {
  var ctrl = this;

  ctrl.user = user

  $scope.$watch(function () {
    return ctrl.user
  }, function (newValue, oldValue) {
    console.log("Deep updated user object" + newValue)
  }, true)
}
angular
  .module('gritize')
  .controller('ProfileController', ProfileController)
