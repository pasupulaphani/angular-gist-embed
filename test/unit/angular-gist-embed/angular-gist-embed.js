'use strict';

// Set the jasmine fixture path
// jasmine.getFixtures().fixturesPath = 'base/';

describe('angular-gist-embed', function() {

    var module;
    var dependencies;
    dependencies = [];

    var hasModule = function(module) {
        return dependencies.indexOf(module) >= 0;
    };

    beforeEach(function() {

        // Get module
        module = angular.module('angular-gist-embed');
        dependencies = module.requires;
    });

    it('should load config module', function() {
        expect(hasModule('angular-gist-embed.config')).toBeTruthy();
    });

    

    
    it('should load directives module', function() {
        expect(hasModule('angular-gist-embed.directives')).toBeTruthy();
    });
    

    
    it('should load services module', function() {
        expect(hasModule('angular-gist-embed.services')).toBeTruthy();
    });
    

});
