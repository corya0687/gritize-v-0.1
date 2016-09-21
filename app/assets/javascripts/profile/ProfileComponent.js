var ProfileComponent = {
  restrict: 'E',
  templateUrl: 'profile/_stats.html',
  controller: function ($scope, $filter, VimeoFactory) {
    var vm = this
    vm.firstFiveRoutines = firstFiveRoutines();
    vm.completedRoutines = completedRoutines();
    vm.dailyVid;
    vm.grabVid = grabVids;

    activate();

    function activate() {
      return grabVids()
    }

    function grabVids() {
      debugger;
      return VimeoFactory.getVids()
          .then(setDailyVid)
    }

    function firstFiveRoutines() {
      let roArray= vm.user.routines
      return vm.user.routines.slice(roArray.length - 5 ,roArray.length).reverse()
    }

    function completedRoutines() {
      let roArray = vm.user.routines
      return $filter('pastRoutines')(vm.user.routines)
    }

  },
  controllerAs: 'proCtrl',
  bindings: {
    user: '='  }
}

angular
  .module('gritize')
  .component('profileComponent', ProfileComponent)
