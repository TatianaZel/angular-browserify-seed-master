'use strict';

module.exports = /*@ngInject*/
    function albumController($scope, $location,  $http) {
		
		activate();
		
		function activate() {
			
			$scope.albumId = $location.search().albumId;
						
			$http({
			method: 'GET',
			url: 'http://jsonplaceholder.typicode.com/albums/'+$scope.albumId+'/photos'
			}).then(function successCallback(response) {
				$scope.photosFromAlbum = response.data;
				});
			}
			
    };