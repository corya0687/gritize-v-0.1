(function() {
  'use strict';

  var NewSubRoutine = {

    controller: function (SubRService) {
      var subR = {
        name: vm.name,
        description: vm.description,
        end_date: this.end_date
        routine_id: routine.id
      }

      SubRService.save(subR)
    },
    templateUrl: 'routine/subroutines/views/_newSubR.html'

  }



  angular
    .module('gritize')
    .component('newSubRoutine', NewSubRoutine)
}());
