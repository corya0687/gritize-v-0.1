var ProfileComponent = {
  restrict: 'E',
  templateUrl: 'profile/_stats.html',
  controller: function ($scope, $filter) {
    var ctrl = this

    ctrl.firstFiveRoutines = firstFiveRoutines();
    ctrl.completedRoutines = completedRoutines();

    function firstFiveRoutines() {
      roArray= ctrl.user.routines
      return ctrl.user.routines.slice(roArray.length - 5 ,roArray.length).reverse()
    }

    debugger;

    function completedRoutines() {
      // return $filter('pastRoutines')(ctrl.routines)
    }

  },
  controllerAs: 'proCtrl',
  bindings: {
    user: '='  }
}

angular
  .module('gritize')
  .component('profileComponent', ProfileComponent)
