(function(window, document) {

// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('angular-gist-embed.config', [])
    .value('angular-gist-embed.config', {
        debug: true
    });

// Modules
angular.module('angular-gist-embed.directives', []);
angular.module('angular-gist-embed.services', []);
angular.module('angular-gist-embed',
    [
        'angular-gist-embed.config',
        'angular-gist-embed.directives',
        'angular-gist-embed.services'
    ]);
angular.module('socialsharing.services')
    .service(
        'gistEmbed', ['$document', '$q', '$timeout', function($document, $q, $timeout) {

            var libUrl = '//cdnjs.cloudflare.com/ajax/libs/gist-embed/2.0/gist-embed.min.js';

            var loadSdkAsync = function(src) {
                var deferred = $q.defer();
                var script = $document[0].createElement('script');
                script.onload = script.onreadystatechange = function(e) {
                    $timeout(function() {
                        deferred.resolve(e);
                    });
                };
                script.onerror = function(e) {
                    $timeout(function() {
                        deferred.reject(e);
                    });
                };
                script.src = src;
                $document[0].body.appendChild(script);
                return deferred.promise;
            };

            this.init = function() {
                return loadSdkAsync(libUrl);
            };
        }])
    .run(
        ['$rootScope', '$timeout', 'gistEmbed', function($rootScope, $timeout, gistEmbed) {

            gistEmbed
                .init()
                .then(function() {

                    // wait for gist lib to load
                    $timeout(function() {

                        // initialize gist on elements for the first time
                        angular.element(document).ready(function() {

                            if (typeof(angular.element(document).gist) === 'function') {
                                angular.element('[data-gist-id]').gist();
                            }
                        });
                    }, 300);
                })
                .then(function() {

                    // register trigger gist on every template include
                    $rootScope.$on('$includeContentLoaded', function() {

                        // initialize gist on new elements
                        angular.element(document).ready(function() {
                            if (typeof(angular.element(document).gist) === 'function') {
                                angular.element('[data-gist-id]').gist();
                            }
                        });
                    });
                });

        }]);
})(window, document);