"use strict";

exports.config = {
    baseUrl: 'http://www.hiteshbalar.com/preserver/',
    specs: ['./specs/*_spec.js'],
    directConnect: true,
    framework: 'jasmine2',
    capabilities: {
        'browserName': 'chrome'
    },
    useAllAngular2AppRoots: true,

    onPrepare: function () {

        beforeEach(function () {
            browser.get('');
        });

        afterEach(function () {
            browser.manage().deleteAllCookies();
            browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();')
                .then(undefined,
                    function (err) {
                        // Errors will be thrown when browser is on default data URL.
                        // Session and Local storage is disabled for data URLs
                    });
        });

        let JasmineReporter = require('jasmine2-reporter').Jasmine2Reporter
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
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
    }
};