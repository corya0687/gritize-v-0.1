function RoutineTableRow() {
  return {
    restrict: 'EA',
    controller: function () {
      var ctrl = this
      debugger;
    },
    controllerAs: 'routineCtrl',
    templateUrl: 'routine/_routine.html',
    scope: {
      routine: '=',
      user: '=',
    },
    bindToController: true
  }
}




angular
  .module('gritize')
  .directive('routineTableRow', RoutineTableRow)
