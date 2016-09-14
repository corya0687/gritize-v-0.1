angular
  .module('gritize',['ui.router', 'templates'])
  .config(['$stateProvider', '$urlRouterProvider', function ( $stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'HomeController'
      })

      .state('routines', {
        url: '/routines/{id}',
        templateUrl: '/routine.html',
        controller: 'RoutineController',
        controllerAs: 'RoutineCtrl',
        resolve: {
          routine: function($stateParams, RoutineService) {
            return RoutineService.getRoutine($stateParams.id)
          }
        }
      })

      $urlRouterProvider.otherwise('home');

    }])
