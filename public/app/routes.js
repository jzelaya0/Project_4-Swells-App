//./front-end/angular/routes.js
(function() {
  angular
    .module('swellsApp.routes', ['ngRoute'])
    .config(appRoutes);

    appRoutes.$inject = ["$routeProvider", "$locationProvider"];

    function appRoutes($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templatesUrl: 'app/views/home.html'
        })
        .when('/login',{
          templateUrl: 'app/views/templates/login.html',
          controller: 'mainController',
          controllerAs: 'main'
        })
    
        .otherwise('/');
    }//End appRoutes

}());//End IIFE
