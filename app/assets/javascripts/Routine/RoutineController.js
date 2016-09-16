function RoutineController(routine) {

  var ctrl = this
  this.routine = routine
}

angular
  .module('gritize')
  .controller('RoutineController', RoutineController)
