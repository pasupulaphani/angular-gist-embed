'use strict';

describe("compileGistEmbed", function() {

    beforeEach(module("gist-embed"));

    var $sce,
        $compile,
        $rootScope;

    beforeEach(inject(function(_$compile_, _$rootScope_, _$sce_) {
        jasmine.clock().install();

        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $sce = _$sce_;
    }));


    it("should substitute code in binded html", function() {

        // set up data
        $rootScope.html = $sce.trustAsHtml("<code data-gist-id='9463004' data-gist-file='mocha_tests.js'></code>");

        // Compile a piece of HTML containing the directive
        var element = $compile("<div compile-gist-embed ng-bind-html='html'></div>")($rootScope);

        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$apply();

        setTimeout(function() {
        }, 300);
        jasmine.clock().tick(301);

        // Check that the compiled element contains the templated content
        expect(element.children().length).toBeGreaterThan(0);
    });
});
