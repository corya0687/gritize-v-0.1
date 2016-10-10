(function() {

  'use strict';

  function SubRoutine() {
    return {
      restrict: 'EA',
      controller: function (RoutinesService) {
        var vm = this;
        debugger;
        vm.subroutines = RoutineService.getSubRoutines(this.routine);
      },
      templateUrl: 'routine/subroutines/_subRRow.html',
      controllerAs: 'subRCtrl',
      scope: {
        routine: '=',
        user: '=',
      },
      bindToController: true
    }
  }

  angular
    .module('gritize')
    .directive('subroutine', SubRoutine)
}());
