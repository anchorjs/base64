# Anchor/Base64

The Base64 module has utilities for Base64 binary-to-text encoding.

## Install

##### component

    $ component install anchorjs/base64

##### volo

    $ volo add anchorjs/base64

## Usage

Encode a JavaScript string to Base64.

```javascript
base64.encode('JavaScript');
```

Decode a Base64 string to a JavaScript string.

```javascript
base64.decode('SmF2YVNjcmlwdA==')
```

## Compatibility

##### component

This module uses the [AMD](https://github.com/amdjs/amdjs-api) format.  To
include in component builds, use [component-amd](https://github.com/jaredhanson/component-amd):

    component build -u component-amd

## Tests

To run tests in a browser, execute the Make target for the desired browser:

    $ make test-chrome
    $ make test-firefox
    $ make test-safari
    
Headless tests can be executed directly from a terminal:
    
    $ make test-phantomjs

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
