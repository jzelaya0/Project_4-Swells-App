(function() {
  angular
    .module('mapCtrl',['surfService'])
    .controller('MapCtrl', function($scope,Surf) {
      // Map Initialize
      // =================================================
      //Default options for front end
      $scope.markerLat =  34.052235;
      $scope.markerLng = -118.243683;
      $scope.infoTitle = 'Los Angeles';
      //Default location: LA
      var losangeles = new google.maps.LatLng($scope.markerLat, $scope.markerLng);
      //Set up new mapOptions
      var mapOptions = {
        zoom : 10,
        center : losangeles,
        mapTypeId : google.maps.MapTypeId.TERRAIN
      }
      //Map from html page -
      $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
      //Markers to be stored;
      $scope.markers = [];
      //new InfoWindow
      var infoWindow = new google.maps.InfoWindow();
      //Add Marker Event Listener
      $scope.addMarker = function(lat, lng, title) {
      //Set latLang to new map
        var latLang = new google.maps.LatLng(lat, lng);

        var marker = new google.maps.Marker({
          map : $scope.map,
          position : latLang,
          title : title
        });
        marker.content = '<div class="infoWindowContent">'+ marker.title + '</div>';

        google.maps.event.addListener(marker, 'click', function() {
          infoWindow.setContent('<h2>' + marker.title + '</h2>'+ marker.content);
          infoWindow.open($scope.map, marker);
        });

        $scope.markers.push(marker);

        $scope.map.setCenter(latLang);

        // $scope.marker.setMap($scope.map);
      };
      $scope.openInfoWindow = function(e, selectedMarker) {
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
      }




    //GRAB ALL SURF SESSIONS
    // =======================================
      // Surf.all()
		  //   .success(function(data) {
			// // bind the sessions that come back to vm.surf
			//    vm.surf = data;
		  // });
      //
      // // function to delete a user
    	// vm.deleteSurf = function(id) {
    	// 	Surf.delete(id)
    	// 		.success(function(data) {
      //
    	// 			Surf.all()
    	// 				.success(function(data) {
    	// 					vm.surf = data;
    	// 				});
    	// 		});
    	// };


    })//end controller
    .controller('surfCreateCtrl', function(Surf){
      var vm = this;

      	// function to create a user
      	vm.saveSurf = function() {
      		vm.message = '';

      		// use the create function in the googleMapService
      		User.create(vm.userData)
      			.success(function(data) {
      				vm.surfData = {};
      				vm.message = data.message;
      			});
      	};
    })//end controller
    .controller('editSurfCtrl', function($routeParams, Surf){
      var vm = this;

      vm.type = 'edit';

      Surf.get($routeParams.surfSession_id)
        .success(function(data){
          vm.surfData = data;
        });

        vm.saveSurf = function() {
        		vm.processing = true;
        		vm.message = '';

        		// call the userService function to update
        		Surf.update($routeParams.surfSession_id, vm.surfData)
        			.success(function(data) {
                //Clear Form
        				vm.surfData = {};

        				// bind the message from our API to vm.message
        				vm.message = data.message;
        			});
        	};
    });//end controller

}());
