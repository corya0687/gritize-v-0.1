function RoutinesService($resource, $http, Auth) {
  this.getRoutineIndex = function(){
    return $http.get('/users/'+currentUser.id+'/routines.json')
  }

  var currentUser = Auth._currentUser
  var Routine = $resource('users/'+currentUser.id+'/routines/:id.json')

    this.getRoutine = function(id) {
       return Routine.get({user_id: currentUser.id, id: id});
    }
}

angular
  .module('gritize')
  .service('RoutinesService', RoutinesService)
