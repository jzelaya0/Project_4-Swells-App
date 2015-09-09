//authService.js
(function() {
  angular.module('authService',[])
    .factory('Auth',function($http, $q, AuthToken) {
      //Create an empty authTokenFactory
      var authFactory = {};

      authFactory.login = function (username,password) {
      return $http.post('/api/authenticate', {"username":username,"password":password})
        .success(function (data) {
          AuthToken.setToken(data.token);
          $window.localStorage.setItem('user', JSON.stringify(data.user));
          return data;
        });
      };//end login

      //Log out a user by clearing out the token
      authFactory.logout = function(){
        AuthToken.setToken();//Clear the token
      };//end logout

      authFactory.isLoggedIn = function(){
        if(AuthToken.getToken()){
          return true;
        }else {
          return false;
        }
      };//End isLoggedIn

      authFactory.getUser = function(){
        //Verify a user has token object
        if(AuthToken.getToken()){
          //Temp redirect
          return $http.get('/api/users');
        }else {
          return $q.reject({message: 'User has no token'});
        }
      };
      return authFactory;
    })//end authFactory
    .factory('Authtoken', function($window){
      var authTokenFactory = {};
      //Get token out of local storage

      authTokenFactory.getToken = function (token) {
        if (token) {
          $window.localStroage.setItem('token', token);
        }else {
          $window.localStroage.removeItem('token');
        }
      };

      return authTokenFactory;
    })//end AuthToken
    .factory('AuthInterceptor', function ($q, $location, AuthToken) {
      var authInterceptorFactory = {};

      authInterceptorFactory.request = function (config) {
        var token = AuthToken.getToken();

        if (token) {
          config.headers['x-access-token'] = token;
        }

        return config;
      };

      authInterceptorFactory.responseError = function (response) {
        if (response.status === 403) {
          AuthToken.setToken();
          $location.path('/login');
        }
        return $q.reject(response);
      };

      return authInterceptorFactory;
    });

}());//End IIFE
