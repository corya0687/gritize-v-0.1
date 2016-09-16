function UserService($resource, $http, Auth) {
  
  var User = $resource('/users/'+currentUser.id'.json');
}


angular
  .module('gritize')
  .service('UserService', UserService)
