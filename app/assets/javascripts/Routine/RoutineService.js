function RoutinesService($http) {
  this.getRoutineIndex = function(){
    return $http.get('/routines.json')
  }

  this.getRoutine = function(id) {
    return $http.get('/routines/' + id + '.json')
  }
}

angular
  .module('gritize')
  .service('RoutinesService', RoutinesService)
