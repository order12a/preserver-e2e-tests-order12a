"use strict";

exports.config = {
    baseUrl: 'http://www.hiteshbalar.com/preserver',
    specs: ['./specs/*_spec.js'],
    directConnect: true,
    framework: 'jasmine2',
    capabilities: {
        'browserName': 'chrome',
        // 'shardTestFiles': true,
        // 'maxInstances': 2
    },
    useAllAngular2AppRoots: true,

    onPrepare: function () {

        beforeEach(function () {
            browser.get('');
        });

        afterEach(function () {
            browser.manage().deleteAllCookies();
            browser.executeScript('window.sessionStorage.clear(); '
                + 'window.localStorage.clear();'
                + 'window.indexedDB.deleteDatabase("_pouch_bin_notes_table");'
                + 'window.indexedDB.deleteDatabase("_pouch_archive_notes_table");')
                .then(undefined,
                    function (err) {
                        // Errors will be thrown when browser is on default data URL.
                        // Session and Local storage is disabled for data URLs
                    });
        });

        let JasmineReporter = require('jasmine2-reporter').Jasmine2Reporter;
        let options = {
            pendingSpec: false,
            symbols: {
                pending: '*  '.strikethrough,
            }
        };
        jasmine.getEnv().addReporter(new JasmineReporter(options));//console reporter

        var AllureReporter = require('jasmine-allure-reporter');//allure reporter
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        jasmine.getEnv().addReporter(new function() {
            this.specDone = function(result) {
                if (result.failedExpectations.length >0) {
                    browser.takeScreenshot().then(function (png) {
                        allure.createAttachment('Screenshot', function () {
                            return new Buffer(png, 'base64')
                        }, 'image/png')();
                    });
                }
            };
        });

        var originalAddExpectationResult = jasmine.Spec.prototype.addExpectationResult;
        jasmine.Spec.prototype.addExpectationResult = function() {
            if (!arguments[0]) {
                browser.takeScreenshot().then(function (png) {
                    allure.createAttachment('Screenshot', function () {
                        return new Buffer(png, 'base64')
                    }, 'image/png')();
                });
            }
            return originalAddExpectationResult.apply(this, arguments);
        };

        // var ScreenshotReporter = require('./screenshotReporter.js');
        // jasmine.getEnv().addReporter(new ScreenshotReporter('tmp'));

        // takes screenshot on each failed expect
        // var originalAddMatcherResult = jasmine.Spec.prototype.addMatcherResult;
        // jasmine.Spec.prototype.addMatcherResult = function() {
        //   ++index;
        //   if (!arguments[0].passed()) {
        //     browser.takeScreenshot().then(function (png) {
        //         allure.createAttachment('Screenshot', function () {
        //             return new Buffer(png, 'base64')
        //         }, 'image/png')();
        //         done();
        //     });
        //   }
        //   return originalAddMatcherResult.apply(this, arguments);
        // };
        //
        // // takes screenshot on each failed spec (including timeout)
        // this.reportSpecResults = function(spec) {
        //   if (!spec.results().passed()) {
        //     browser.takeScreenshot().then(function (png) {
        //         allure.createAttachment('Screenshot', function () {
        //             return new Buffer(png, 'base64')
        //         }, 'image/png')();
        //         done();
        //     });
        //   }
        //   index = 0;
        // };

        // jasmine.getEnv().afterEach(function(done){
        //     browser.takeScreenshot().then(function (png) {
        //         allure.createAttachment('Screenshot', function () {
        //             return new Buffer(png, 'base64')
        //         }, 'image/png')();
        //         done();
        //     });
        // });
    },
    plugins: [{
        package: 'protractor-console-plugin',
        failOnWarning: false,
        failOnError: true,
        logWarnings: true,
        // exclude: "Array of strings and regex"
    }]
};
