(function() {
  'use strict';
  var NewRoComponent = {
    restrict: 'E',
    controller: ['RoutinesService', '$scope', '$timeout', function (RoutinesService, $scope, $timeout) {
      var ctrl = this

      ctrl.addNew = function () {
        var routine = {
              name: this.name,
              description: this.description,
              start_date: this.start_date,
              end_date: this.end_date
            }
        this.routines.push(routine)
        RoutinesService.postRoutine(routine)
      }
    }],
    controllerAs: 'newRoCtrl',
    templateUrl: 'routine/views/new_routine.html',
    bindings: {
      routines: '='
    }
  }

  angular
    .module('gritize')
    .component('newRoComponent', NewRoComponent)
}());
