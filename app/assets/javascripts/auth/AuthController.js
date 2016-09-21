function AuthController($scope, $state, Auth) {
  $scope.login = function() {
   Auth.login($scope.user).then(function(){
     $state.go('profile');
   });
 };

 $scope.register = function() {
   Auth.register($scope.user).then(function(){
     $state.go('profile');
   });
 };
}

angular
  .module('gritize')
  .controller('AuthController', AuthController)
