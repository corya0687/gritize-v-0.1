function RoutineController(routine) {

  var ctrl = this
  ctrl.routine = routine
}

RoutineController.$inject = ['routine'];
angular
  .module('gritize')
  .controller('RoutineController', RoutineController)
