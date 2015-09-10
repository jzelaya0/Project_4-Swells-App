//./front-end/angular/app.js
(function() {
  angular
    .module('swellsApp',[
      'ngRoute',
      // 'ngCookies',
      'routing',
      'mainCtrl',
      'homeCtrl',
      'panelCtrl',
      'googleMaps'
      // 'authenticationService',
      // 'panelCtrl',
      // 'googleMaps'
      // 'loginCtrl',
      // 'signUpCtrl',
      // 'googleMapService'
    ])
    // .config();
    //
    // // //Inject Dependencies
    // runGlobals.$inject = ['$http', '$rootScope', '$location', '$cookies'];
    // //
    // function($http, $rootScope, $location, $cookies){
    //   //Create object to hold globals
    //   $rootScope.globals = $cookies.get('globals') || {};
    //
    //   //Set auth data for set users
    //   if ($rootScope.globals.currentUser) {
    //         $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    //     }
    //   //
    //   //Check to see if user is logged in
    //   $rootScope.$on('$locationChangeStart', function(evt, next, current){
    //     //Redirect if user is not logged in
    //     if (($location.path() !== '/login' && $location.path() !== '/signup') && !$rootScope.globals.currentUser) {
    //             $location.path('/login');
    //         }
    //   });
    // });//End runGlobals
}());//End IIFE
