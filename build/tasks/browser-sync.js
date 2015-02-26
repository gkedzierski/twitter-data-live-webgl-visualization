//
// WebGL Twitter Globe
// A WebGL based real-time data visualisation of Twitter activity for the chosen brands.
//
// 2015 (c) Greg Kedzierski
// http://gregkedzierski.com
// greg@gregkedzierski.com
//

// Require modules
var gulp        = require('gulp'),
    browserSync = require('browser-sync');

// Browser-sync task for starting the server.
gulp.task('browser-sync', function () {
    browserSync({
        proxy : "localhost:1000",
        open  : false,
    });
});
