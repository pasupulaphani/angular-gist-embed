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
