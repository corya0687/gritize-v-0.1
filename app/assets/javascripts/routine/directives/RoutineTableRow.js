(function() {
  function RoutineTableRow() {
    return {
      restrict: 'EA',
      controller: function ($scope,RoutinesService) {
        var vm = this;
        var active_edit = false
        vm.routine.end_date = new Date(vm.routine.end_date);
        vm.routine.start_date = new Date(vm.routine.start_date);
        vm.active_edit = active_edit;
        vm.toggle_edit = toggle_edit


        function toggle_edit() {
          if ( vm.active_edit === false || vm.active_edit === '') {
            vm.active_edit = true;
          } else {
            vm.active_edit = false;
          }
        }

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
