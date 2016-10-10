(function() {

  'use strict';

  function subRoutine() {
    return {
      restrict: 'EA',
      controller: function (RoutineService) {
        var vm = this;

        vm.subroutines = RoutineService.getSubRoutines(this.routine);
      },
      scope: {
        routine: '=',
        user: '=',
      },
      bindToController: true
    }
  }

  angular
    .module('gritize')
    .directive('subroutine', Subroutine)
}());
