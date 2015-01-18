'use strict';

describe("compileGistEmbed", function() {

    beforeEach(module("gist-embed"));

    var service,
        $compile,
        $rootScope;

    beforeEach(inject(function(_$compile_, _$rootScope_, gistEmbed) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        service = gistEmbed;
        service.init();
    }));

    it("should substitute code in binded html", function() {

        // set up data
        $rootScope.html = "<code data-gist-id='9463004' data-gist-file='mocha_tests.js'></code>";

        // Compile a piece of HTML containing the directive
        var element = $compile("<div compile-gist-embed ng-bind-html='html'></div>")($rootScope);

        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$apply();

        // Check that the compiled element contains the templated content
        console.error(element.children())
        expect(element.children().length).toBeGreaterThan(0);
    });
});
