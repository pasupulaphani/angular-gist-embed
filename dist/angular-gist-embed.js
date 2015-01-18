(function(window, document) {

// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('gist-embed.config', [])
    .value('gist-embed.config', {
        debug: true
    });

// Modules
angular.module('gist-embed.directives', []);
angular.module('gist-embed.services', []);
angular.module('gist-embed',
    [
        'gist-embed.config',
        'gist-embed.directives',
        'gist-embed.services'
    ]);
angular.module('gist-embed.directives')
    .directive('compileGistEmbed', ['$compile', function($compile) {
        return function(scope, element, attrs) {
            scope.$watch(
                function(scope) {
                    // watch the 'ngBindHtml' expression for changes
                    return scope.$eval(attrs.ngBindHtml);
                },
                function(value) {
                    // when the 'ngBindHtml' expression changes
                    // assign it into the current DOM
                    element.html(value);

                    // compile the new DOM and link it to the current
                    // scope.
                    // NOTE: we only compile .childNodes so that
                    // we don't get into infinite loop compiling ourselves
                    $compile(element.contents())(scope);
                }
            );
        };
    }]);
angular.module('gist-embed.services')
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