(function() {

  'use strict';

  function SubRoutine() {
    return {
      restrict: 'EA',
      controller: function (SubRService) {
        var vm = this;
        vm.subroutine.end_date = new Date(vm.subroutine.end_date)
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
