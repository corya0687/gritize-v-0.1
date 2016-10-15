(function() {
  function RoutineTableRow() {
    return {
      restrict: 'EA',
      controller: function ($scope, $timeout, RoutinesService) {
        var vm = this
        var timeout;

        vm.routine.end_date = new Date(vm.routine.end_date)
        vm.routine.start_date = new Date(vm.routine.start_date)
        vm.saveRoutine = saveRoutine;

        function saveRoutine() {
          RoutinesService.saveRoutine(routine)
        }

        var debouceSaveUpdates = function (newValue, OldValue) {
          if (newValue != oldVal){
            if(timeout){
              $timeout.cancel(timeout)
            }

            timeout = $timeout(saveUpdates, 1000);
          }
        };
        $scope.$watch('vm.routine', debounceSaveUpdates);
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
