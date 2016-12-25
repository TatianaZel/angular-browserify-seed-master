'use strict';

module.exports = /*ngInject*/
    function ($translateProvider) {
        $translateProvider.translations('en', {
            ALBUM: 'Album'
        });

        $translateProvider.preferredLanguage('en');
    };