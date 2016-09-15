function RoutinesService($resource, $http, Auth) {
  this.getRoutineIndex = function(){
    return $http.get('/routines.json')
  }
  debugger;
  var currentUser = Auth._currentUser
  var Routine = $resource('users/'+currentUser.id+'/routines/:id.json')

  this.getRoutine = function(id) {
    Routine.get({id: id});
  }


}

angular
  .module('gritize')
  .service('RoutinesService', RoutinesService)
