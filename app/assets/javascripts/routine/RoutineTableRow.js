var RoutineTableRow = {
  restrict: 'E',
  controller: function (Auth) {
    var ctrl = this
    Auth.currentUser().then(function (user){
     ctrl.user = user;
    });
  },
  controllerAs: 'routineCtrl',
  templateUrl: 'routine/_routine.html',
  bindings: {
    routine: '='
  }

}

angular
  .module('gritize')
  .component('routineTableRow', RoutineTableRow)
