var NewRoComponent = {
  restrict: 'E',
  controller: function () {

  },
  controllerAs: 'newRoCtrl',
  templateUrl: 'routine/new_routine.html'
}

angular
  .module('gritize')
  .component('newRoComponent', NewRoComponent)
