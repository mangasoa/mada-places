"use strict";

angular.module('places')
	.controller('MenuCtrl', function($rootScope,$scope,$state,$ionicSideMenuDelegate) {

		$scope.userName = LoginService.userEmail;

		$scope.logout=function(){

			LoginService.logout()
				.then(function(){
					
					$ionicSideMenuDelegate.toggleLeft();
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
  }]);

angular.module('places')
	.config(function ($stateProvider,$urlRouterProvider) {
		$stateProvider
		
		 //Page a propos
		 .state('apropos', {
		 	url:"/apropos",
		 	abstract: true,
		 	data:{
		 		tittle:"A propos"
		 	},
		 	views:{
		 		'avantvoyage':{
		 			templateUrl: "src/nav/menu/Apropos/apropos.html"
		 		}
		 	}
		 })
		//navigation pour aller à la page avant le voyage
		 .state('avantvoyage', {
		 	url:"/avantvoyage",
		 	data:{
		 		tittle:"Information pratique"
		 	},
		 	views:{
		 		'avantvoyage':{
		 			templateUrl:'src/places/add/add-place.html'
		 		}
		 	}
		 }) 

		 //navigation pour aller FAQ
		 .state('faq', {
		 	url:"/faq",
		 	data:{
		 		title:"Frequented Asked Questions"
		 	},
		 	views: {
		 		'faq':{
		 			templateUrl: 'src/nav/menu/Faq/faq.html'
		 		}
		 	}
		 })
		 
		 //navigation pour aller à la page Conditions légales
		 .state('legal', {
		 	url:'/legal',
		 	data:{
		 		tittle:"Conditions légales"
		 	},
		 	views:{
		 		'legal':{
		 			templateUrl:'src/nav/menu/Legal/legal.html'
		 		}
		 	}
		 })
		 //navigation pour aller à la page contact
		 .state('contact', {
		 	url:'/contact',
		 	data:{
		 		tittle:"Contactez-nous"
		 	},
		 	views: {
		 		'tab-friends': {
		 			templateUrl:'src/nav/menu/Contact/contact.html'
		 		}
		 	}
		 })
	});
*/