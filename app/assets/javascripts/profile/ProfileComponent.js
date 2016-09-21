var ProfileComponent = {
  restrict: 'E',
  templateUrl: 'profile/_stats.html',
  controller: function ($scope) {
    var ctrl = this

    ctrl.firstFiveRoutines = firstFiveRoutines();

    function firstFiveRoutines() {
      roArray= ctrl.user.routines
      return ctrl.user.routines.slice(roArray.length - 5 ,roArray.length).reverse()
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
