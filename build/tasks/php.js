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
    shell  = require('gulp-shell'),
    config = require('../config');

// Check PHP code quality
gulp.task('php', shell.task([
    'php artisan code:quality',
]));

