var ProfileComponent = {
  restrict: 'E',
  templateUrl: 'profile/_stats.html',
  controller: function ($scope) {
    var ctrl = this

    ctrl.firstFiveRoutines = firstFiveRoutines();
    function firstFiveRoutines() {
      return ctrl.user.routines.slice(0,5)
    }

    debugger;
  },
  controllerAs: 'proCtrl',
  bindings: {
    user: '='  }
}

angular
  .module('gritize')
  .component('profileComponent', ProfileComponent)
