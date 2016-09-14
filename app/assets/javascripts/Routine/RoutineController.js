function RoutineController(routine) {
  var ctrl = this
  this.routine = routine.data
}

angular
  .module('gritize')
  .controller('RoutineController', RoutineController)
