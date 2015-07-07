angular.module('places')
	.controller('FriendsCtrl', function($scope, $ionicLoading,FriendsService) {

		$ionicLoading.show({
			content: 'Loading...',
			showBackdrop: false
		});


		$scope.grouped = FriendsService.getGroupedFriends()
			console.log($scope.grouped)
			//$scope.grouped = data;
			$ionicLoading.hide();



	});