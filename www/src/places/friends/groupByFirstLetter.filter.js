angular.module('places').filter('groupByFirstLetter',function(){
	return function(array) {
		return _.groupBy(array, function(n) {
			return n.region;
		});
	};
});