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
      return VimeoFactory.getVid()
          .then(setVid)
    }

    function firstFiveRoutines() {
      let roArray= vm.user.routines
      return vm.user.routines.slice(roArray.length - 5 ,roArray.length).reverse()
    }

    function completedRoutines() {
      let roArray = vm.user.routines
      roArray= $filter('pastRoutines')(roArray)
      return roArray.slice(roArray.length - 5 ,roArray.length).reverse()
    }

    function setVid(response) {
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
