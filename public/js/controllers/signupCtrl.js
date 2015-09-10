// //./front-end/angular/loginController.js
//   angular
//     .module('signUpCtrl', [])
//     .controller('SignupCtrl', SignupCtrl);
//
//     //Inject Depenecies
//     SignupCtrl.$inject = ['$rootScope','$location', 'AuthenticationService'];
//
//     function SignupCtrl($rootScope, $location, AuthenticationService) {
//       var vm = this;
//       // reset login status
//           AuthenticationService.ClearCredentials();
//
//           //scope sign up function
//           vm.signUp = function () {
//
//               //show spinner
//               vm.dataLoading = true;
//
//               //we call the sign up method
//               AuthenticationService.SignUp(vm.username, vm.password, function (response) {
//                   if (response.success) {
//                       AuthenticationService.SetCredentials(vm.username, vm.password);
//                       $location.path('/panel');
//                   } else {
//                       vm.error = response.message;
//                       vm.dataLoading = false;
//                   }
//               });
//           };
//     }
