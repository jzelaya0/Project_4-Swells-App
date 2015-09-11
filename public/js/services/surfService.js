(function() {
  angular
    .module('surfService',[])
    .factory('Surf', function($http){

      //Create a new object
      var surfFactory = {};

      //grab a surfSession
      surfFactory.get = function(id){
        return $http.get('/api/surfSessions/' + id);
      };

      //grab all surfSessions
      surfFactory.all = function(id){
        return $http.get('/api/surfSessions/');
      };

      //create a surfSession
      surfFactory.create = function(surfData){
        return $http.get('/api/surfSessions/', surfData) ;
      };

      //update a surfSession
      surfFactory.update = function(surfData,id){
        return $http.get('/api/surfSessions/' + id, surfData);
      };

      surfFactory.delete = function(id){
        return $http.delete('/api/surfSessions/' + id);
      };


      return surfFactory;


    });//end controller

}());
