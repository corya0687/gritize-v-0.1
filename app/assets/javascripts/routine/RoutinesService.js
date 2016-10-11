function RoutinesService($resource, $http, Auth) {
  this.getRoutineIndex = function(){
    return $http.get('/users/'+currentUser.id+'/routines.json')
  }

  var currentUser = Auth._currentUser
  var Routine = $resource('users/'+currentUser.id+'/routines/:id.json', {id: '@id'})

    this.getRoutine = function(id) {
       return Routine.get({user_id: currentUser.id, id: id});
    }

    this.updateRoutine = function (routine) {
      return Routine.save(routine);
    }

    this.getSubRoutines = function (routine) {
      return Routine.subroutines;
    }

    this.postRoutine = function(routine) {
      return Routine.save(routine);
    }
}

angular
  .module('gritize')
  .service('RoutinesService', RoutinesService)