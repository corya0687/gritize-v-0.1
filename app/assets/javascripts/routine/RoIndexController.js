function RoIndexController($scope, routines, $filter) {
  var ctrl = this
  ctrl.routines= routines.data
  $scope.$watchCollection(function () {
    return ctrl.routines
  }, function (newValue, oldValue) {
    console.log(newValue + 'added')
  });

  ctrl.search = '';

  this.refilter = function () {
    ctrl.filteredRoutines = $filter('filter')(ctrl.routines, ctrl.search);
  };

  this.refilter();

}

angular
  .module('gritize')
  .controller('RoIndexController', RoIndexController)
