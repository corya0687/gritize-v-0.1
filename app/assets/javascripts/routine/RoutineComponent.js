var RoutineTableRow = {
  restrict: 'E',
  controller: 'RoutineController',
  controllerAs: 'routineCtrl',
  templateUrl: 'routine/_routine.html',
  bindings: {
    routine: '='
  }

}

angular
  .module('gritize')
  .component('routineTableRow', RoutineTableRow)
