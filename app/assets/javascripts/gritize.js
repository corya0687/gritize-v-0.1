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
        url: '/users/:user_id',
        templateUrl: 'profile/profile.html',
        controller: 'ProfileController as proCtrl',
        resolve: {
          user: function (Auth) {
            return Auth.currentUser().then(function (user){
              return user;
            })
          }
        }
      })
      .state('profile.routines',{
        url: '/routines',
        templateUrl: 'routine/routine_index.html',
        controller: 'RoIndexController as roiCtrl',
        resolve: {
          routines: function(RoutinesService) {
            debugger;
            return RoutinesService.getRoutineIndex()
          }
        }
      })


      .state('profile.routine', {
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
