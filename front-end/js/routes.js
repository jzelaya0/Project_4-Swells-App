//./front-end/angular/routes.js
(function() {
  angular
    .module('swellsApp')
    .config(appRoutes);

    appRoutes.$inject = ["$routeProvider"];

    function appRoutes($routeProvider) {
      $routeProvider
        .when('/login',{
          templateUrl: './templates/login.html',
          controller: 'LoginController',
          controllerAs: 'LoginCtrl'
        })
        .when('/signup',{
          templateUrl: '/.templates/signup.html',
          controller: 'SignupController',
          controllerAs: 'SignupCtrl'
        })
        .when('/map', {
          templateUrl: './templates/map.html',
          controller: 'MapController',
          controllerAs: 'MapCtrl'
        })
        .otherwise('/login');
    }//End appRoutes

}());//End IIFE
