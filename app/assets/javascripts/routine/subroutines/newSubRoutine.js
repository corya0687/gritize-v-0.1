(function() {
  'use strict';

  var NewSubRoutine = {
    restrict: 'E',
    controller: function (SubRService) {
      var vm = this;
      var newSubR = {
        name: this.name,
        description: this.description,
        end_date: this.end_date,
        routine_id: this.routine.id
      }

      this.newSubRoutine = newSubRoutine;

      function newSubRoutine() {
        SubRService.save({id: this.routine.id, subR: subR});
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
