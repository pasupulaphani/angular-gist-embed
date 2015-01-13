'use strict';

describe("gistEmbed", function() {

    beforeEach(module("gist-embed"));

    var service;

    beforeEach(inject(function(gistEmbed) {
        service = gistEmbed;
    }));

    describe("encode API to match specs", function() {
        
        //encodes a dictionary of values into a URL-encoded format
        it("should contain method init", function() {
            expect(service.init).toBeDefined();
        });
    });

    describe("calling init:", function() {

        it("should return a promise", function () {
            
            var promise = service.init();
            expect(promise.then).toBeDefined();
        });
    });
});
