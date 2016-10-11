(function() {
  function SubRService($http, $resource, Auth) {
    var currentUser = Auth._currentUser
    return subroutine = $resource('users/'+currentUser.id+'/routines/:id/subroutines', {id: '@id'})
  }

  angular
    .module('gritize')
    .factory('SubRService', SubRService)
}());
