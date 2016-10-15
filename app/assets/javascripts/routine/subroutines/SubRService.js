(function() {
  function SubRService($resource, Auth, $stateParams) {

    var currentUser = Auth._currentUser
    var SubRoutine = $resource('users/'+currentUser.id+'/routines/:routine_id/subroutines', {routine_id: $stateParams.id, id:'@id'},
    {
      'update' : {method:'PUT'}
    })

    this.postSubR = postSubR
    this.updateSubR = updateSubR

    function postSubR(SubR) {
      return SubRoutine.save(SubR);
    }

    function updateSubR(SubR) {
      return SubRoutine.update(SubR)
    }
  }

  angular
    .module('gritize')
    .service('SubRService', SubRService)
}());
