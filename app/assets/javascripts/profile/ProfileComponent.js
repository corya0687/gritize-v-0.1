var ProfileComponent = {
  restrict: 'E',
  templateUrl: 'profile/_stats.html',
  controller: function ($scope, $filter) {
    var ctrl = this

    ctrl.firstFiveRoutines = firstFiveRoutines();
    ctrl.completedRoutines = completedRoutines();

    function firstFiveRoutines() {
      let roArray= ctrl.user.routines
      return ctrl.user.routines.slice(roArray.length - 5 ,roArray.length).reverse()
    }

    debugger;

    function completedRoutines() {
      let roArray = ctrl.user.routines
      return $filter('pastRoutines')(ctrl.user.routines)
    }

  },
  controllerAs: 'proCtrl',
  bindings: {
    user: '='  }
}

angular
  .module('gritize')
  .component('profileComponent', ProfileComponent)
