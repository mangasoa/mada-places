"use strict";

angular.module('places')
	.controller('SharingCtrl', function($rootScope,$scope,$state,$ionicSideMenuDelegate) {

		$scope.userName = LoginService.userEmail;

		$scope.logout=function(){

			LoginService.logout()
				.then(function(){
					
					$ionicSideMenuDelegate.toggleRight();
					$state.go('login');

				});

		};


		$rootScope.$on("loginSuccess",function(){
			$scope.userName = LoginService.userEmail;
		});

	});