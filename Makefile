SOURCES = *.js
TESTS = test/*.test.js

# ==============================================================================
# Packaging
# ==============================================================================

build-browserify:
	mkdir -p build
	browserify -t deamdify base64.js -o build/bundle.js
	
build-component: components
	component build -u component-amd

components:
	component install


# ==============================================================================
# Tests
# ==============================================================================

CHROME = open -a "Google Chrome"
FIREFOX = open -a "Firefox"
SAFARI = open -a "Safari"
PHANTOMJS = phantomjs

MOCHA_PHANTOMJS = ./node_modules/.bin/mocha-phantomjs
WWW_TESTS = test/www/index.html


test: test-phantomjs

test-chrome: test/www/js/lib
	$(CHROME) $(WWW_TESTS)

test-firefox: test/www/js/lib
	$(FIREFOX) $(WWW_TESTS)

test-safari: test/www/js/lib
	$(SAFARI) $(WWW_TESTS)

test-phantomjs: node_modules test/www/js/lib
	$(MOCHA_PHANTOMJS) $(WWW_TESTS)

# Prior to running tests on Sauce Labs, ensure that a local server is listening
# and Sauce Connect is tunneling requests to it.
#
#     $ java -jar Sauce-Connect.jar $SAUCE_LABS_USERNAME $SAUCE_LABS_ACCESS_KEY
#     $ node test/auto/server.js
#
test-saucelabs: node_modules test/www/js/lib
	clear && node test/auto/terminal-saucelabs.js

test/www/js/lib:
	cd test/www && volo add -nostamp

node_modules:
	npm install


# ==============================================================================
# Code Quality
# ==============================================================================

JSHINT = jshint

hint: lint
lint:
	$(JSHINT) $(SOURCES)


# ==============================================================================
# Clean
# ==============================================================================

clean:
	rm -rf build

clobber: clean
	rm -rf node_modules
	rm -rf components
	rm -rf test/www/js/lib


.PHONY: test test-chrome test-firefox test-safari test-phantomjs test-cloud test-saucelabs hint lint
