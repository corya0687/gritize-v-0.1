function UserService($resource, $http, Auth) {

  var User = $resource('/users/'+currentUser.id+'.json');
}

UserService.$inject = ['$resource', '$http', 'Auth'];

angular
  .module('gritize')
  .service('UserService', UserService)
