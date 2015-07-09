"use strict";

angular.module('places')
	.controller('MenuCtrl', function($rootScope,$scope,$state,$ionicSideMenuDelegate) {

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

	})

	/*.factory('$cordovaDatePicker', ['$window', '$q', function ($window, $q) {
    return {
      show: function (options) {
        var q = $q.defer();
        options = options || {date: new Date(), mode: 'date'};
        $window.datePicker.show(options, function (date) {
          q.resolve(date);
        });
        return q.promise;
      }
    };
  }]);*/