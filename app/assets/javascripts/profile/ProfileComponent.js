var ProfileComponent = {
  restrict: 'E',
  templateUrl: 'profile/_stats.html',
  controller: function ($scope) {
    var ctrl = this

  },
  controllerAs: 'proCtrl',
  bindings: {
    user: '='
  }
}

angular
  .module('gritize')
  .component('profileComponent', ProfileComponent)
