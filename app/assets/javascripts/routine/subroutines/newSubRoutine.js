(function() {
  'use strict';

  var NewSubRoutine = {
    restrict: 'E',
    controller:['SubRService', function (SubRService) {
      var vm = this;

      this.newSubRoutine = newSubRoutine;

      function newSubRoutine() {
        var newSubR = {
          name: this.name,
          description: this.description,
          end_date: this.end_date
        }

        this.routine.subroutines.push(newSubR);
        SubRService.postSubR(newSubR);
      }

    }],
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
