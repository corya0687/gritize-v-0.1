var RoutineTableRow = {
  restrict: 'E',
  controller: function () {
    var ctrl = this
  },
  controllerAs: 'routineCtrl',
  templateUrl: 'routine/_routine.html',
  bindings: {
    routine: '=',
    user: '='
  }

}

angular
  .module('gritize')
  .component('routineTableRow', RoutineTableRow)
