angular
  .module('gritize',['ui.router', 'templates', 'Devise', 'ngResource'])
  .config(['$stateProvider', '$urlRouterProvider', function ( $stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'HomeController'
      })

      .state('profile', {
        url: 'user/:id'.
        templateUrl: 'home/_home.html',
        controller: 'HomeController'
      })

      .state('routines',{
        url: '/routines',
        templateUrl: 'routine/routine_index.html',
        controller: 'RoIndexController as roiCtrl',
        resolve: {
          routines: function(RoutinesService) {
            return RoutinesService.getRoutineIndex()
          }
        }
      })

      .state('user.routine', {
        url: '/routines/:id',
        templateUrl: 'routine/show_routine.html',
        controller: 'RoutineController as routineCtrl',
        resolve: {
          routine: function($stateParams, RoutinesService) {
            return RoutinesService.getRoutine($stateParams.id)
          }
        }
      })

      .state('login', {
        url: '/login',
        templateUrl: 'auth/_login.html',
        controller: 'AuthController',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('home');
          })
        }]
      })

      .state('register', {
        url: '/accounts/register',
        templateUrl: 'auth/_register.html',
        controller: 'AuthController',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('home');
          })
        }]
      });



      // $urlRouterProvider.otherwise('home');

    }])
