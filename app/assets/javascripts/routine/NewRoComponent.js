var NewRoComponent = {
  restrict: 'E',
  controller: function (RoutinesService) {
    var ctrl = this

    this.addNew = function () {
      debugger;
      var routine = {
            name: this.name,
            description: this.description,
            end_date: this.end_date
          }
            RoutinesService.postRoutine(routine)
      }

    //   this.routines.push()
    // }

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
