function RoutineController(routine) {

  var ctrl = this
  ctrl.routine = routine
}

angular
  .module('gritize')
  .controller('RoutineController', RoutineController)
