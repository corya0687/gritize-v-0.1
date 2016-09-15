var NewRoComponent = {
  restrict: 'E',
  controller: function () {
    var ctrl = this
    this.addNew = function () {
      this.routines.push({
        name: this.name,
        description: this.description,
        end_date: this.end_date})
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
