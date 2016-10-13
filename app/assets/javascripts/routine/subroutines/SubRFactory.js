(function() {
  function SubRService($resource, Auth, $stateParams) {
    var currentUser = Auth._currentUser

    return {
      postSubR: postSubR
    }

    function postSubR(SubR) {
      var SubRoutine = $resource('users/'+currentUser.id+'/routines/:routine_id/subroutines', {routine_id: $stateParams.id, id:'@id'})
      return SubRoutine.save(SubR);
    }
  }

  angular
    .module('gritize')
    .factory('SubRService', SubRService)
}());
