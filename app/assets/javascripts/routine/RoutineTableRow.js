var RoutineTableRow = {
  restrict: 'E',
  controller: function () {

  },
  controllerAs: 'routineCtrl',
  templateUrl: 'routine/routine.html',
  bindings: {
    routine: '='
  }

}

angular
  .module('gritize')
  .component('routineTableRow', RoutineTableRow)
