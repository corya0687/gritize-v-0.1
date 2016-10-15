function RoutineController(routine) {

  var ctrl = this
  ctrl.routine = routine
  debugger;
  ctrl.routine.date = new Date(ctrl.routine.date)
}

angular
  .module('gritize')
  .controller('RoutineController', RoutineController)
