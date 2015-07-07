angular.module('places')
	.directive('map', function() {
		return {
			restrict: 'E',
			scope: {
				onCreate: '&'
			},
			link: function ($scope, $element, $attr) {
				function initialize() {
					var mapOptions = {
						center: new google.maps.LatLng(-18.766947, 46.869107),
						zoom: 7,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					};
					var map = new google.maps.Map($element[0], mapOptions);

					$scope.onCreate({map: map});

					// Stop the side bar from dragging when mousedown/tapdown on the map
					google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
						e.preventDefault();
						return false;
					});
				}

				if (document.readyState === "complete") {
					initialize();
				} else {
					google.maps.event.addDomListener(window, 'load', initialize);
				}
			}
		}
	});

<!--var myApp = angular.module('myApp', ['uiGmapgoogle-maps']);

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
    zoom: 4 
  };
  $scope.markers = Markers;
});-->