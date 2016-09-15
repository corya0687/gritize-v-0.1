var NewRoComponent = {
  restrict: 'E',
  controller: function () {
    var ctrl = this
    debugger;
    this.addNew = function () {
      this.routines.push({name: this.name})
    }

  },
  controllerAs: 'newRoCtrl',
  templateUrl: 'routine/new_routine.html',
  bindings: {
    routines: '='
  }
}

angular
  .module('gritize')
  .component('newRoComponent', NewRoComponent)
