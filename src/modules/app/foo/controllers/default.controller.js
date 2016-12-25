'use strict';

module.exports = /*@ngInject*/
    function defaultController($scope, $http) {				
		
		activate();
		
		function activate() {
			
		$http({
			method: 'GET',
			url: 'http://jsonplaceholder.typicode.com/photos'
			}).then(function successCallback(response) {
				$scope.photos = response.data;
				console.log(response);
				});
			}
			
    };