function RoutineController(routine) {
  var ctrl = this
debugger;
  this.routine = routine.data
  this.goat = "hey"
}

angular
  .module('gritize')
  .controller('RoutineController', RoutineController)
