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
    reload = require('browser-sync').reload,
    config = require('../config');

// Build and watch a project
gulp.task('default', ['build', 'browser-sync'], function () {
    gulp.watch(config.php.watch, ['php', reload]);
    gulp.watch(config.html.watch, ['php', reload]);
    gulp.watch(config.styles.watch, ['styles']);
    gulp.watch(config.scripts.watch, ['scripts', reload]);
});
