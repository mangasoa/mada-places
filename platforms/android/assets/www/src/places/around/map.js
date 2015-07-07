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
						zoom: 6,
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