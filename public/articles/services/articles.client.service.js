angular.module('articles').factory('Articles', ['$resource', function($resouce) {
	return $resource('api/articles/:articleId', {
		articleId: '@_id'
	}, {
		update: {
			method: 'PUT'
		}
	});
}]);