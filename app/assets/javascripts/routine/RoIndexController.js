function RoIndexController($scope, routines, $filter, $state) {
debugger;

  var ctrl = this
  ctrl.routines= routines.data
  $scope.$watchCollection(function () {
    return ctrl.routines
  }, function (newValue, oldValue) {
    console.log(newValue + 'added')
  });

debugger;
  ctrl.search = '';

  this.refilter = function () {
    ctrl.filteredRoutines = $filter('filter')(ctrl.routines, ctrl.search);
  };

  this.pastfilter = function () {
    ctrl.filteredRoutines = $filter('pastRoutines')(ctrl.routines)
  }

  this.refilter();

}

angular
  .module('gritize')
  .controller('RoIndexController', RoIndexController)
