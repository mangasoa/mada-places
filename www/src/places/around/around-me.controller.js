angular.module('places')
	.controller('AroundMeCtrl', function($scope, $ionicLoading) {
		$scope.mapCreated = function(map) {
			$scope.map = map;
			//$scope.centerOnMe();
		};

		$scope.centerOnMe = function () {
			console.log("Centering");
			if (!$scope.map) {
				return;
			}

			$scope.loading = $ionicLoading.show({
				content: 'Getting current location...',
				showBackdrop: false
			});

			navigator.geolocation.getCurrentPosition(function (pos) {
				console.log('Got pos', pos);
				$scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
				$ionicLoading.hide();
			}, function (error) {
				alert('Unable to get location: ' + error.message);
			});
		};
	});

	/*var myApp = angular.module('myApp', ['uiGmapgoogle-maps']);

myApp.factory("Markers", function(){
  var Markers = [
    {
      "id": "0",
      "coords": {
        "latitude": "-17.9597",
        "longitude": "42.5200"
      },
      "window": {
        "title": "Hi there, OK"
      }
    },
    {
      "id": "1",
      "coords": {
        "latitude": "-15.9597",
        "longitude": "44.7903"
      },
      "window" : {
        "title": "Very good, indeed"
      }
    }
  ];
  return Markers;
});

myApp.controller("gMap",function($scope,Markers){
  $scope.map = { 
    center: { latitude: -18.766947, longitude: 46.869107 }, 
    zoom: 7 
  };
  $scope.markers = Markers;
});*/