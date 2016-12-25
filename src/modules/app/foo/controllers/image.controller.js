'use strict';

module.exports = /*@ngInject*/
    function imageController($scope, $location,  $http) {
		
		activate();
		
		function activate() {
			
			$scope.id = $location.search().id;
						
			$http({
			method: 'GET',
			url: 'http://jsonplaceholder.typicode.com/photos/'+$scope.id
			}).then(function successCallback(response) {
				$scope.photo = response.data;
				console.log(response.data);
				});
			}
			
    };