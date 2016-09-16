var ProfileComponent = {
  restrict: 'E',
  templateUrl: '_stats.html',
  controller: function (Auth) {
    var ctrl = this
    Auth.currentUser().then(function (user){
      ctrl.user = user;
    });
  },
  controllerAs: 'proCtrl'
}

angular
  .module('gritize')
  .component('profileComponent', ProfileComponent)
