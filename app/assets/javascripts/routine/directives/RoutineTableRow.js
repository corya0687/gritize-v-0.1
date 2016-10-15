(function() {
  function RoutineTableRow() {
    return {
      restrict: 'EA',
      controller: function ($scope, $timeout, RoutinesService) {
        var vm = this
        var timeout;
        vm.routine.end_date = new Date(vm.routine.end_date)
        vm.routine.start_date = new Date(vm.routine.start_date)



        $scope.$watch('routineCtrl.routine',
        function saveUpdates(newVal, oldVal) {
          if ( newVal !== oldVal) {
            RoutinesService.updateRoutine(vm.routine)
          }

        }, true);
      },
      controllerAs: 'routineCtrl',
      templateUrl: 'routine/views/_routine.html',
      scope: {
        routine: '=',
        user: '=',
      },
      bindToController: true
    }
  }

  angular
    .module('gritize')
    .directive('routineTableRow', RoutineTableRow)
})();
