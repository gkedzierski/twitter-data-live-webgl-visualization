//
// WebGL Twitter Globe
// A WebGL based real-time data visualisation of Twitter activity for the chosen brands.
//
// 2015 (c) Greg Kedzierski
// http://gregkedzierski.com
// greg@gregkedzierski.com
//

// Require modules
var gulp       = require('gulp'),
    browserify = require('browserify'),
    source     = require('vinyl-source-stream'),
    buffer     = require('vinyl-buffer'),
    uglify     = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint     = require('gulp-jshint'),
    stylish    = require('jshint-stylish'),
    gulpif     = require('gulp-if'),
    config     = require('../config');

// Lint JS
gulp.task('scripts-lint', function () {
    return gulp.src(config.scripts.watch)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'));
});

// Vendor files
gulp.task('scripts-vendor', function () {
    return gulp.src(config.scripts.vendor)
        .pipe(uglify())
        .pipe(gulp.dest(config.scripts.dest));
});

// Compile JS
gulp.task('scripts', ['scripts-lint', 'scripts-vendor'], function () {
    var bundler = browserify({
        entries : ['./' + config.scripts.src],
        debug   : config.debug,
    });

    var bundle = function () {
        return bundler
            .bundle()
            .pipe(source('app.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({ loadMaps : config.debug }))
            .pipe(uglify())
            .pipe(gulpif(config.debug, sourcemaps.write('./')))
            .pipe(gulp.dest(config.scripts.dest));
    };

    return bundle();
});
