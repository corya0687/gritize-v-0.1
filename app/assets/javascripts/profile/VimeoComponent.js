(function () {
  'use strict';

  var VimeoComponent = {
    restrict: 'E',
    templateUrl: '_profile_video.html',
    controller: function () {
      var vm = this;

      vm.title = video.name
      debugger;
    },
    controllerAs: 'vimeoCtrl',
    bindings: {
      video: '='
    }
  }

  angular
    .module('gritize')
    .component('vimeoComponent', VimeoComponent)
})();
