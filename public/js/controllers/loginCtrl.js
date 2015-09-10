// //./front-end/angular/loginController.js
// (function() {
//   angular
//     .module('swellsApp')
//     .controller('LoginCtrl', LoginCtrl);
//
//     LoginCtrl.$inject = ['$location','$rootScope', 'AuthenticationService'];
//     // //Inject Depenecies
//
//     function LoginCtrl ($location, $rootScope, AuthenticationService) {
//       var vm = this;
//       //Reset log in credentials
//       AuthenticationService.ClearCredentials();
//
//       //Scope log in function
//       vm.login = function(){
//         //Show data progress
//         vm.dataLoading = true;
//
//         //Log user with AuthenticationService
//           AuthenticationService.Login(vm.username, vm.password, function(response){
//             if(response.success){
//               //Set credentials
//               AuthenticationService.SetCredentials(vm.username, vm.password);
//               //Locate the user to the
//               $location.path('panel');
//             }else {
//               //display error
//               vm.error = response.message;
//               vm.dataLoading = false;
//             }
//           });
//       };//End Log in function
//     }//End LoginCtrl
//
// }());//End IIFE
