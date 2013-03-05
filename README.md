# Anchor/Base64

The Base64 module has utilities for Base64 binary-to-text encoding.

## Install

##### volo

    $ volo add anchorjs/base64

For more information on using volo to manage JavaScript modules, visit [http://volojs.org/](http://volojs.org/).

## Usage

Encode a JavaScript string to Base64.

```javascript
base64.encode('JavaScript');
```

Decode a Base64 string to a JavaScript string.

```javascript
base64.decode('SmF2YVNjcmlwdA==')
```

## Tests

##### Browser

To run tests in a browser, execute the Make target for the desired browser:

    $ make test-chrome
    $ make test-firefox
    $ make test-safari

##### PhantomJS

To run headless tests from a terminal using [PhantomJS](http://phantomjs.org/):

    $ make test-phantomjs

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
