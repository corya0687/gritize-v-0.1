angular
  .module('gritize',['ui.router', 'templates'])
  .config(['$stateProvider', '$urlRouterProvider', function ( $stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'HomeController'
      })

      .state('routine', {
        url: '/routines/:id',
        templateUrl: 'routine/_routine.html',
        controller: 'RoutineController as routineCtrl',
        resolve: {
          routine: function($stateParams, RoutineService) {
            return RoutineService.getRoutine($stateParams.id)
          }
        }
      });

      // $urlRouterProvider.otherwise('home');

    }])
