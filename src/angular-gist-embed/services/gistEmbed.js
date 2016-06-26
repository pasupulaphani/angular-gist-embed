angular.module('gist-embed.services')
    .service(
        'gistEmbed', ['$document', '$q', '$timeout', function($document, $q, $timeout) {

            var libUrl = '//cdnjs.cloudflare.com/ajax/libs/gist-embed/2.4/gist-embed.min.js';

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
                
                	// register trigger gist on every route change
                	$rootScope.$on('$viewContentLoaded',function(){
                		
                		// as ng-view can be used as class, attribute and tag, this accounts for all cases
                		// ng-view is selected to ensure gist is run only on the newly added template
                		var runGist = function(routeTemplates){
                			angular.forEach(routeTemplates,function(template){
                				if(template.length > 0){
                					template.find('[data-gist-id]').gist();
                				}
                			});
                		},
                		routeTemplates = [];
                		routeTemplates.push( angular.element('ng-view') );
                		routeTemplates.push( angular.element('[ng-view]') );
                		routeTemplates.push( angular.element('.ng-view') );
                		
                		// initialize gist on new elements
                        angular.element(document).ready(function() {
		
                            if (typeof(angular.element(document).gist) === 'function') {
                                runGist(routeTemplates);
                            }
                          
                        });
                        
                	});

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
