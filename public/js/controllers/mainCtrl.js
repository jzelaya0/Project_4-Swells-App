(function() {
  angular
    .module('mainCtrl', [])
    .controller('mainCtrl', mainCtrl)

    function mainCtrl() {
      var vm = this;

      vm.tagline = 'Hello'
    }
}());
