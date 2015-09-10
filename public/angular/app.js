// //./front-end/angular/app.js
// var app = angular.module('swellsApp', [
//     'ngRoute',
//     'ngCookies',
//     'swellsApp.routing',
//     'swellsApp.authenticationService',
//     'swellsApp.panelCtrl',
//     'swellsApp.loginCtrl',
//     'swellsApp.signUpCtrl',
//     'swellsApp.googleMapService'
// ])
//     .run(function($http, $rootScope, $location, $cookieStore, AuthenticationService) {
//
//         //We check if the user is logged in.
//         $rootScope.globals = $cookieStore.get('globals') || {};
//         if ($rootScope.globals.currentUser) {
//             $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
//         }
//
//         //When Angular emits $locationchangestart event
//         $rootScope.$on('$locationChangeStart', function(event, next, current) {
//
//             // redirect to login page if not logged in
//             if (($location.path() !== '/login' && $location.path() !== '/sign-up') && !$rootScope.globals.currentUser) {
//                 $location.path('/login');
//             }
//         });
//     });
