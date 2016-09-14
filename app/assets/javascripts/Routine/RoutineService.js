function RoutineService($http) {
  this.getRoutine = function(id) {
    return $http.get('/routines/' + id + '.json')
  }
}

angular
  .module('gritize')
  .service('RoutineService', RoutineService)
