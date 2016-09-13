angular
  .module('gritize',['ui.router', 'templates'])
  .config(['$stateProvider', '$urlRouterProvider', function ( $stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'HomeController'
      });
      $urlRouterProvider.otherwise('home');
    }])
