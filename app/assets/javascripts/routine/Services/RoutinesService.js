function RoutinesService($resource, $http, Auth) {

  var currentUser = Auth._currentUser
  var Routine = $resource('users/'+currentUser.id+'/routines/:id' +'.json', {id: '@id'},{
        'update': { method:'PUT' }
    }, {
        'delete': { method: 'DELETE' }
    })

    this.getRoutineIndex = function(){
      return $http.get('/users/'+currentUser.id+'/routines.json')
    }

    this.getRoutine = function(id) {
       return Routine.get({user_id: currentUser.id, id: id});
    }

    this.updateRoutine = function (routine) {
      return Routine.update(routine);
    }

    this.getSubRoutines = function (routine) {
      return Routine.subroutines;
    }

    this.postRoutine = function(routine) {
      return Routine.save(routine);
    }

    this.deleteRoutine = function (routine) {
      return Routine.delete(routine)
    }
}

RoutinesService.$inject = ['$resource', '$http', 'Auth']

angular
  .module('gritize')
  .service('RoutinesService', RoutinesService)
