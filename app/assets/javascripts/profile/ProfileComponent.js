var ProfileComponent = {
  restrict: 'E',
  templateUrl: 'profile/_stats.html',
  controller: function () {
  },
  controllerAs: 'proCtrl',
  bindings: {
    user: '='
  }
}

angular
  .module('gritize')
  .component('profileComponent', ProfileComponent)
