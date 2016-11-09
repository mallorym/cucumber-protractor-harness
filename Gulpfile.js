/*jshint node: true, camelcase: false*/
/*global require: true*/

'use strict';

var gulp = require('gulp'),
  gulpProtractorAngular = require('gulp-angular-protractor');

// Setting up the test task
gulp.task('protractor', function(callback) {
  gulp
    .src(['features/*.feature'])
    .pipe(gulpProtractorAngular({
      'configFile': 'cucumber.conf.js',
      'debug': true,
      'autoStartStopServer': true
    }))
    .on('error', function(e) {
      console.log(e);
    })
    .on('end', callback);
});
