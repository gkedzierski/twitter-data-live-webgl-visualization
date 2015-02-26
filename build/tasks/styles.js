//
// WebGL Twitter Globe
// A WebGL based real-time data visualisation of Twitter activity for the chosen brands.
//
// 2015 (c) Greg Kedzierski
// http://gregkedzierski.com
// greg@gregkedzierski.com
//

// Require modules
var gulp         = require('gulp'),
    sass         = require('gulp-ruby-sass'),
    scsslint     = require('gulp-scss-lint'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    filter       = require('gulp-filter'),
    browserSync  = require('browser-sync'),
    config       = require('../config');

// Lint SCSS files
gulp.task('scss-lint', function() {
    var lintConfig = {
        config : 'build/scss-lint.yml',
    };

    gulp.src(config.styles.src + '/**/*.scss')
        .pipe(scsslint(lintConfig));
});

// Compile SCSS into CSS
gulp.task('styles', ['scss-lint'], function () {
    var sassConfig = {
        sourcemap : config.debug,
        style     : config.debug ? 'expanded' : 'compressed',
        loadPath  : 'bower_components/',
    };

    var autoprefixerConfig = {
        browsers: ['last 3 versions', '> 1%'],
    };

    return sass(config.styles.src, sassConfig)
        .pipe(sourcemaps.write())
        .pipe(autoprefixer(autoprefixerConfig))
        .pipe(gulp.dest(config.styles.dest))
        .pipe(filter('**/*.css'))
        .pipe(browserSync.reload({ stream : true }));
});
