(function() {
  function RoutineTableRow() {
    return {
      restrict: 'EA',
      controller: function () {
        var vm = this
        debugger;
        vm.routine.end_date = new Date(vm.routine.end_date)
        vm.routine.start_date = new Date(vm.routine.start_date)
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
