function RoutinesService($resource, $http, Auth) {
  this.getRoutineIndex = function(){
    return $http.get('/users/'+currentUser.id+'/routines.json')
  }

  var currentUser = Auth._currentUser
  var Routine = $resource('users/'+currentUser.id+'/routines/:id.json')
debugger;
  //  this.getRoutine = function(id) {
  //    Routine.get({id: id});
  //  }
}

angular
  .module('gritize')
  .service('RoutinesService', RoutinesService)
