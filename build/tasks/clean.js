//
// WebGL Twitter Globe
// A WebGL based real-time data visualisation of Twitter activity for the chosen brands.
//
// 2015 (c) Greg Kedzierski
// http://gregkedzierski.com
// greg@gregkedzierski.com
//

// Require modules
var gulp   = require('gulp'),
    del    = require('del'),
    config = require('../config');

// Remove asset destination folder
gulp.task('clean', function (callback) {
    del(config.dest, callback);
});
