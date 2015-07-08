angular.module('places')
.controller('MadaMapCtrl', ['$scope', function ($scope) {
	$scope.mapOptions = {
		center: new google.maps.LatLng(-18.766947, 46.869107),
		zoom: 6,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	$scope.markers = [
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
}])
/*.('map', function() {
	return {
		restrict: 'E',

		template: '    	<ui-map-google-map \
		center="map.center" \
		zoom="map.zoom" aria-label="Google map">\
		\
		<ui-map-marker ng-repeat="marker in markers"\
		coords="marker.coords" options="marker.options" events="marker.events" idkey="marker.id">\
		<ui-gmap-window>\
		<div>{{marker.window.title}}</div>\
		</ui-map-window>\
		</ui-map-marker>\
		\
		</ui-map-google-map>',
		link: function ($scope, $element, $attr,Markers) {
			function initialize() {
				var mapOptions = {
					center: new google.maps.LatLng(-18.766947, 46.869107),
					zoom: 6,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				$scope.map = new google.maps.Map($element[0], mapOptions);
				/*$scope.onCreate({map: map});
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
				$scope.markers = Markers;

					// Stop the side bar from dragging when mousedown/tapdown on the map
					google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
						e.preventDefault();
						return false;
					});
					return Markers;
				}

				if (document.readyState === "complete") {
					initialize();
				} else {
					google.maps.event.addDomListener(window, 'load', initialize);
				}
			}
		}
	});*/

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
    zoom: 6 
  };
  $scope.markers = Markers;
})*/