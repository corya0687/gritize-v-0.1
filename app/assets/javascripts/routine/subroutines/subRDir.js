(function() {

  'use strict';

  function SubRoutine() {
    return {
      restrict: 'EA',
      controller: function ($scope, SubRService) {
        var vm = this;
        vm.subroutine.end_date = new Date(vm.subroutine.end_date)

        $scope.$watch('subRCtrl.subroutine',
        function saveUpdates(newVal, oldVal) {
          if ( newVal !== oldVal) {
            SubRService.updateSubR(vm.subroutine)
          }
        }, true);
      },
      templateUrl: 'routine/subroutines/views/_subRRow.html',
      controllerAs: 'subRCtrl',
      scope: {
        routine: '=',
        subroutine: '='
      },
      bindToController: true
    }
  }

  angular
    .module('gritize')
    .directive('subRoutine', SubRoutine)
}());
