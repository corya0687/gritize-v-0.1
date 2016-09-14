function RoutineService($http) {
  this.getRoutine = function(id) {
    return $http.get('/routines/' + id + '.json')
  }
}
