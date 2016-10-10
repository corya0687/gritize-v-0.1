(function() {
  function RoutineTableRow() {
    return {
      restrict: 'EA',
      controller: function () {
        var ctrl = this
      },
      controllerAs: 'routineCtrl',
      templateUrl: 'routine/_routine.html',
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
