'use strict';

module.exports =
    angular.module('expressly.foo', [])
        .config(require('./routes.js'))
        .config(require('./i18n/en.js'))
        .controller('defaultController', require('./controllers/default.controller'))
		.controller('albumController', require('./controllers/album.controller'))
		.controller('imageController', require('./controllers/image.controller'));
