angular.module('places')
	.config(function ($stateProvider) {
		$stateProvider

		 //route mère
		 .state('tab', {
		 	url:"/tab",
		 	abstract: true,
		 	templateUrl: "src/nav/menu/menu.html"
		 })
		 //navigation pour aller à tab.my-place
		 .state('tab.my-place', {
		 	url:"/my-place",
		 	data:{
		 		title:"My place"
		 	},
		 	views: {
		 		'tab-my-place':{
		 		templateUrl: 'src/places/mines/my-place.html',
		 		controller: 'MyPlaceCtrl'
		 		}
		 	}
		 })
		 //navigation pour aller à tab.add-place
		 .state('tab.add-place', {
		 	url:"/add-place",
		 	data:{
		 		tittle:"Add place"
		 	},
		 	views:{
		 		'tab-add-place':{
		 			templateUrl:'src/places/add/add-place.html'
		 		}
		 	}
		 })
		 //navigation pour aller à tab.around-me
		 .state('tab.around-me',{
		 	url:'/around-me',
		 	data:{
		 		tittle:"Around me"
		 	},
		 	views:{
		 		'tab-around-me':{
		 			templateUrl:'src/places/around/around-me.html',
		 			controller:'MadaMapCtrl'
		 		}
		 	}
		 })
		 //navigation pour aller à tab.friends
		 .state('tab.friends',{
		 	url:'/friends',
		 	data:{
		 		tittle:"Friends"
		 	},
		 	views: {
		 		'tab-friends': {
		 			templateUrl:'src/places/friends/friends.html',
		 			controller:'FriendsCtrl'
		 		}
		 	}
		 });
	});