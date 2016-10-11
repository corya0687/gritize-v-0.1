(function() {

  'use strict';

  function SubRoutine() {
    return {
      restrict: 'EA',
      controller: function (RoutinesService) {
        var vm = this;
        debugger;
      },
      templateUrl: 'routine/subroutines/_subRRow.html',
      controllerAs: 'subRCtrl',
      scope: {
        subroutine: '='
      },
      bindToController: true
    }
  }

  angular
    .module('gritize')
    .directive('subRoutine', SubRoutine)
}());
