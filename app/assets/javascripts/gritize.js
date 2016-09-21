angular
  .module('gritize',['ui.router', 'templates', 'Devise', 'ngResource', 'ngMessages'])
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
        url: '/routines.json',
        views: {
          "@": {
              templateUrl: 'routine/routine_index.html',
              controller: 'RoIndexController as roiCtrl',
              resolve: {
                routines: function(RoutinesService) {
                  return RoutinesService.getRoutineIndex()
                },
                user: function (Auth) {
                  return Auth.currentUser().then(function (user){
                    return user;
                  })
                }
              }
            }
          }
        })

      .state('profile.routine', {
        url: '/routines/:id',
        templateUrl: 'routine/show_routine.html',
        controller: 'RoutineController as routineCtrl',
        resolve: {
          routine: function($stateParams, RoutinesService) {
            return RoutinesService.getRoutine($stateParams.id).$promise;
          }
        }
      })

      .state('login', {
        url: '/login',
        templateUrl: 'auth/_login.html',
        controller: 'AuthController',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('profile');
          })
        }]
      })

      .state('register', {
        url: '/accounts/register',
        templateUrl: 'auth/_register.html',
        controller: 'AuthController',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('profile');
          })
        }]
      });



      $urlRouterProvider.otherwise('home');

    }])
