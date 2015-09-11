//./front-end/angular/routes.js

(function() {
  angular
    .module('routing', ['ngRoute'])
    .config(appRoutes);

    appRoutes.$inject = ["$routeProvider" ,'$locationProvider'];

    function appRoutes($routeProvider, $locationProvider) {
      $routeProvider
        .when('/home',{
          templateUrl: './templates/home.html',
          controller: 'homeCtrl',
          controllerAs: 'homeCtrl'
        })
        .when('/map',{
          templateUrl: './templates/map.html',
          controller: 'MapCtrl',
          controllerAs: 'MapCtrl'
        })
        .when('/panel', {
          templateUrl: './templates/panel.html',
          controller: 'PanelCtrl',
          controllerAs: 'PanelCtrl'
        })
        .otherwise('/');

        $locationProvider.html5Mode(true);

    }//End appRoutes


}());//End IIFE
