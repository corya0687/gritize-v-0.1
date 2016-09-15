function RoutinesService($resource, $http, Auth) {
  this.getRoutineIndex = function(){
    return $http.get('/routines.json')
  }
  debugger;

  this.getRoutine = function(id) {
    return $http.get('/routines/' + id + '.json')
  }


}

angular
  .module('gritize')
  .service('RoutinesService', RoutinesService)
