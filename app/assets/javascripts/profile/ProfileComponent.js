var ProfileComponent = {
  restrict: 'E',
  templateUrl: 'profile/_stats.html',
  controller: function ($scope, $filter, VimeoFactory) {
    var vm = this
    vm.firstFiveRoutines = firstFiveRoutines();
    vm.completedRoutines = completedRoutines();
    vm.vid;
    activate();

    function activate() {
      return grabVid()
    }

    function grabVid() {
      debugger;
      return VimeoFactory.getVid()
          .then(setVid)
    }

    function firstFiveRoutines() {
      let roArray= vm.user.routines
      return vm.user.routines.slice(roArray.length - 5 ,roArray.length).reverse()
    }

    function completedRoutines() {
      let roArray = vm.user.routines
      return $filter('pastRoutines')(vm.user.routines)
    }

    function setVid(response) {
      debugger;
      vm.vid = response;
    }

  },
  controllerAs: 'proCtrl',
  bindings: {
    user: '='  }
}

angular
  .module('gritize')
  .component('profileComponent', ProfileComponent)
