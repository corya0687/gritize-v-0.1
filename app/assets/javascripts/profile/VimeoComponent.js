(function () {
  'use strict';

  var VimeoComponent = {
    restrict: 'E',
    templateUrl: 'profile/_profile_video.html',
    controller: function ($sce) {
      var vm = this;
      vm.title = vm.video.name
      vm.player = "https://player.vimeo.com/video/";
      vm.video.id = vm.video.uri.match(/\d+/).join("");
      vm.src = $sce.trustAsResourceUrl(vm.player + vm.video.id);
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
