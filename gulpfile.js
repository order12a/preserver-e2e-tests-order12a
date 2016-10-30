var protractor = require("gulp-protractor").protractor;
var gulp = require('gulp');
// var spawn = require('child_process').spawn;
// var path = require('path');

gulp.task('test_default', function() {//One thread task

    gulp.src(["./specs/*_spec.js"])
        .pipe(protractor({
            configFile: "./config.js",
            args: ['--directConnect', true,
                '--baseUrl', 'http://www.hiteshbalar.com/preserver',
                '--capabilities.browserName', 'chrome']
        }))
        .on('error', function (e) {
            throw e;
        });
});

gulp.task('test_parallel', runConfig());//Parallel task with webdriver manager

function runConfig() {
    gulp.src(["./specs/*_spec.js"])
        .pipe(protractor({
            configFile: "config.js",
            args: ['--baseUrl', 'http://www.hiteshbalar.com/preserver',
                '--directConnect', false,
                '--capabilities.shardTestFiles', true,
                '--capabilities.maxInstances', 3,
                '--capabilities.browserName', 'chrome']
        }))
        .on('error', function (e) {
            throw e;
        });
}

// function getProtractorBinary(binaryName){
//     var winExt = /^win/.test(process.platform)? '.cmd' : '';
//     var pkgPath = require.resolve('protractor');
//     var protractorDir = path.resolve(path.join(path.dirname(pkgPath), '..', 'bin'));
//     return path.join(protractorDir, '/'+binaryName+winExt);
// }

// function runWebdriver(callback) {
//     spawn(getProtractorBinary('webdriver-manager'), ['start'], {
//         stdio: 'inherit'
//     }).once('close', callback);
// }
//
// function runWebdriverProctractor() {
//     runWebdriver(runConfig());
// }
