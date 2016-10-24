(function() {

  'use strict';

  function SubRoutine() {
    return {
      restrict: 'EA',
      controller: function ($scope, SubRService) {
        var vm = this;
        var active_edit = false;
        vm.subroutine.end_date = new Date(vm.subroutine.end_date)
        vm.active_edit = active_edit;
        vm.toggle_edit = toggle_edit

        function toggle_edit() {
          if ( vm.active_edit === false || vm.active_edit === '') {
            vm.active_edit = true;
          } else {
            vm.active_edit = false;
          }
        }

        function deleteSubR(subR) {
          SubRService.deleteSubR(subR);
          vm.routine.subRoutines.forEach(function (sR) {
            if( sR.id === subR.id ){
              vm.routine.subRoutine.shift();
            }
          })
        }

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
