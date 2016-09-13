angular
  .module('gritize',['ui-router', 'templates'])
  .config(['$stateProvider', '$urlRouterProvider', function ($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home/_home.html',
        controller: 'HomeCtrl'
      });
      $urlRouterProvider.otherwise('home');
    }])
