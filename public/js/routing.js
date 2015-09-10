//./front-end/angular/routes.js

(function() {
  angular
    .module('routing', [])
    .config(appRoutes);

    appRoutes.$inject = ["$routeProvider"];

    function appRoutes($routeProvider) {
      $routeProvider
        .when('/login',{
          templateUrl: './templates/login.html',
          controller: 'LoginCtrl',
          controllerAs: 'LoginCtrl'
        })
        .when('/signup',{
          templateUrl: './templates/signup.html',
          controller: 'SignupCtrl',
          controllerAs: 'SignupCtrl'
        })
        .when('/panel', {
          templateUrl: './templates/panel.html',
          controller: 'PanelCtrl',
          controllerAs: 'PanelCtrl'
        })
        .otherwise('/login');
    }//End appRoutes

}());//End IIFE
