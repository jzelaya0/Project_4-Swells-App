//./front-end/angular/loginController.js
(function() {
  angular
    .module('LoginController',[])
    .controller('LoginController', LoginController);

    //Inject Depenecies
    LoginController.$inject = ['$location'];

    function LoginController($location) {
      var vm = this;
      //Reset log in credentials
      authService.ClearCredentials();

      //Scope log in function
      vm.login = function(){
        //Show data progress
        vm.dataLoading = true;

        //Log user with authService
          authService.Login(vm.username, vm.password, function(response){
            if(response.success){
              //Set credentials
              authService.SetCredentials(vm.username, vm.password);
              //Locate the user to the
              $location.path('map');
            }else {
              //display error
              vm.error = response.message;
              vm.dataLoading = false;
            }
          });
      };//End Log in function
    }//End LoginController

}());//End IIFE
