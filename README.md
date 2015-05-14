[![Support via Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.png)](https://gratipay.com/pasupulaphani/)

[![Build Status](https://secure.travis-ci.org/pasupulaphani/angular-gist-embed.png?branch=master)](http://travis-ci.org/pasupulaphani/angular-gist-embed) [![Bower version](https://badge.fury.io/bo/angular-gist-embed.svg)](http://badge.fury.io/bo/angular-gist-embed) [![Hex.pm](http://img.shields.io/hexpm/l/plug.svg)]() [![Code Climate](https://codeclimate.com/github/pasupulaphani/angular-gist-embed/badges/gpa.svg)](https://codeclimate.com/github/pasupulaphani/angular-gist-embed) [![Test Coverage](https://codeclimate.com/github/pasupulaphani/angular-gist-embed/badges/coverage.svg)](https://codeclimate.com/github/pasupulaphani/angular-gist-embed)

Angular Gist Embed
=========

Demo
------
[Check it out](http://embed.plnkr.co/aTr1jWrxbX9N9d6H2UFo/preview)

Getting Started
-----
Install the library through bower.
```js
bower install angular-gist-embed
```

Add it to your app dependency
```js
angular.module('myModule',['gist-embed'])
```

That's it

Usage
------

Variants of usage: [http://blairvanderhoof.com](http://blairvanderhoof.com/gist-embed/)

How it works
------
This loads blairvanderhoof [gist-embed](https://github.com/blairvanderhoof/gist-embed) library asynchronously to your page.

This depends on jquery library.

It just works when you include ```<code data-gist-id="5457595"></code>``` in your html/templates/bindHtml

If you need to recompile binded html, add directive as attribute ```compile-gist-embed``` to the element.

```html
<div compile-gist-embed ng-bind-html="post.body"></div>
```

Examples
------
See http://blairvanderhoof.com/gist-embed/ for all possible ways to use gist-embed:

- Including a single gist
- Including individual files from a gist
- Including specific line numbers from a gist
- Removing all line numbers from a gist
- Removing the footer from a gist
- Highlight lines from a gist

Contributing
------
1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Locations
------
- http://ngmodules.org/modules/angular-gist-embed
- http://pasupulaphani.github.io/angular-gist-embed/#/
- http://bower.io/search/?q=angular-gist-embed


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/pasupulaphani/angular-gist-embed/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

