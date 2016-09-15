angular
  .module('gritize',['ui.router', 'templates', 'Devise'])
  .config(['$stateProvider', '$urlRouterProvider', function ( $stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'HomeController'
      })

      .state('routine', {
        url: '/routines/:id',
        templateUrl: 'routine/show_routine.html',
        controller: 'RoutineController as routineCtrl',
        resolve: {
          routine: function($stateParams, RoutinesService) {
            return RoutinesService.getRoutine($stateParams.id)
          }
        }
      });

      // $urlRouterProvider.otherwise('home');

    }])
