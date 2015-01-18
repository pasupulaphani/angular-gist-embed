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
