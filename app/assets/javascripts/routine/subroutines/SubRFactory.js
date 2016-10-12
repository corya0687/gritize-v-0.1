(function() {
  function SubRService($http, $resource, Auth) {
    var currentUser = Auth._currentUser

    return {
      SubRoutine: SubRoutine,
      createSubR: createSubR
    }

    SubRoutine = $resource('users/'+currentUser.id+'/routines/:id/subroutines', {id:'@id'}, {
      subroutines: {
        params: {subRoutine: '@subroutine'}
      }
    })

    function createSubR() {

    }


  }

  angular
    .module('gritize')
    .factory('SubRService', SubRService)
}());
