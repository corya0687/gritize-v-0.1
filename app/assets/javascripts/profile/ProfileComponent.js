var ProfileComponent = {
  restrict: 'E',
  templateUrl: 'profile/_stats.html',
  controller: function () {
    debugger;
  },
  controllerAs: 'proCtrl',
  bindings: {
    user: '='
  }
}

angular
  .module('gritize')
  .component('profileComponent', ProfileComponent)
