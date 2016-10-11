(function() {

  'use strict';

  function SubRoutine() {
    return {
      restrict: 'EA',
      controller: function (SubRService) {
        var vm = this;
      
      },
      templateUrl: 'routine/subroutines/views/_subRRow.html',
      controllerAs: 'subRCtrl',
      scope: {
        routine: '='
        subroutine: '='
      },
      bindToController: true
    }
  }

  angular
    .module('gritize')
    .directive('subRoutine', SubRoutine)
}());
