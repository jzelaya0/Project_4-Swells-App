//mainCtrl.js
(function() {
  angular
    .module('mainCtrl',[])
    .controller('mainController', mainController);

    //Inject Depenecies
    mainController.$inject = ['$rootScope','$location', 'Auth'];

    function mainController($rootScope, $location, Auth) {
      var vm = this;

      //Get info if a user is logged in
      vm.loggedIn = Auth.isLoggedIn();

      //Check to see if a user is logged in on every request
    $rootScope.$on('routeChangeStart', function(){
      vm.loggedIn = Auth.isLoggedIn();

      //Get user information on page load
      Auth.getUser()
        .then(function(data){
          vm.user = data;
        });

        console.log("User: ", vm.user);
    });
      //Function to login
      vm.doLogin = function(){
        vm.processing = true;
        vm.error = '';

        Auth.login(vm.loginData.username, vm.loginData.password)
          .success(function(data){
            vm.processing = false;
            if (data.success) {
              //If users log in is successful redirect to the users page
              //Temporary redirect
              $location.path('/users');
            }else {
              vm.error = data.message;
            }
          });

      };//end login

      //Function to logout
      vm.doLogout = function(){
        console.log('Log Out');
        Auth.logout();
        vm.user = '';
        //Temporary redirect
        $location.path('/login');
      };//end logout

    }//End mainController

}());//End IIFE
