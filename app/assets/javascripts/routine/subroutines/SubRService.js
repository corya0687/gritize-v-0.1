(function() {
  function SubRService($resource, Auth, $stateParams) {

    var currentUser = Auth._currentUser
    var SubRoutine = $resource('users/'+currentUser.id+'/routines/:routine_id/subroutines/:id' + '.json', {routine_id: $stateParams.id, id:'@id'},{
          'update': { method:'PUT' }
      }, {
          'delete': { method: 'DELETE' }
      })

    this.postSubR = postSubR
    this.updateSubR = updateSubR
    this.deleteSubR = deleteSubR

    function postSubR(SubR) {
      return SubRoutine.save(SubR);
    }

    function updateSubR(SubR) {
      return SubRoutine.update(SubR)
    }

    function deleteSubR(SubR) {
      return SubRoutine.delete(SubR)
    }
  }

  SubRService.$inject = ['$resource', 'Auth', '$stateParams']

  angular
    .module('gritize')
    .service('SubRService', SubRService)
}());
