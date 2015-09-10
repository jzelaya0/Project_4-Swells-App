(function() {
  angular
    .module('panelCtrl', [])
    .controller('PanelCtrl', function($scope, $location, $http){

      return {
        get : function(){
          return $http.get('api/users')
        },

        create: function(data){
          return $http.post('/api/users', data)
        }
      }

    })
}());
