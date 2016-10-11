(function() {
  'use strict';

  var NewSubRoutine = {

    controller: function (SubRService) {
      var vm = this;
      var subR = {
        name: vm.name,
        description: vm.description,
        end_date: vm.end_date,
        routine_id: vm.routine.id
      }

      vm.newSubRoutine = newSubRoutine;

      function newSubRoutine() {
        SubRService.save({id: vm.routine.id}, subR);
      }
    },
    controllerAs: 'newSubRCtrl',
    templateUrl: 'routine/subroutines/views/_newSubR.html',
    bindings: {
        routine: '='
    }

  }



  angular
    .module('gritize')
    .component('newSubRoutine', NewSubRoutine)
}());
