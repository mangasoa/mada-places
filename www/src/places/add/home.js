angular.module('places')
	
	trip.controller('TripDetailCtrl', function ($scope, $http, $routeParams){
	$scope.ville = $routeParams.tripVille;
	$http.get ('trips.json').success(function(data){
		$scope.trip = data.filter(function(entry){
			return entry.ville === $scope.ville;
		})[0];
	});
	$("#datepicker").datepicker();
	$("#datepicker2").datepicker();
});