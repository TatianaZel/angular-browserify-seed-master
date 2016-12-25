'use strict';

module.exports = /*ngInject*/
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/foo/templates/default.html',
                controller: 'defaultController'
            });
			
		$routeProvider
			.when('/album', {
				templateUrl: 'app/foo/templates/album.html',
                controller: 'albumController'
			});
			
		$routeProvider
			.when('/image', {
				templateUrl: 'app/foo/templates/image.html',
                controller: 'imageController'
			});
			
		 $routeProvider.otherwise({redirectTo: '/'});
	};