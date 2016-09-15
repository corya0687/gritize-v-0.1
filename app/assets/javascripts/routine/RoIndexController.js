function RoIndexController($scope, routines) {
  var ctrl = this
  ctrl.routines= routines.data

  $scope.$watchCollection(function () {
    return ctrl.routines
  }, function (newValue, oldValue) {
    console.log(newValue + 'added')
  });


}

angular
  .module('gritize')
  .controller('RoIndexController', RoIndexController)
