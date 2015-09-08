//./front-end/angular/app.js
(function() {
  angular
    .module('swellsApp',[
        'ngRoute',
        'ngCookies'
    ])
    .run(runGlobals);

    //Inject Dependencies
    runGlobals.$inject = ['$http', '$rootScope', '$location', '$cookies'];

    function runGlobals($http, $rootScope, $location, $cookies){
      //Create object to hold globals
      $rootScope.global = $cookies.get('globals') || {};

      //Set auth data for set users
      if($rootScope.globals.currentUser) {
         $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
      }

      //Check to see if user is logged in
      $rootScope.$on('$locationChangeStart', function(evt, next, current){
        //Redirect if user is not logged in
        if (($location.path() !== '/login' && $location.path() !== '/sign-up') && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
      });
    }//End runGlobals







}());//End IIFE
