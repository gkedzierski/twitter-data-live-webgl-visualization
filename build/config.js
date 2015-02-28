//
// WebGL Twitter Globe
// A WebGL based real-time data visualisation of Twitter activity for the chosen brands.
//
// 2015 (c) Greg Kedzierski
// http://gregkedzierski.com
// greg@gregkedzierski.com
//

// Base paths
var src  = 'resources/assets',
    dest = 'public/assets';

// Export configuration object
module.exports = {
    // Debug mode - true for development, false for production build
    debug : true,

    // Base paths
    src  : src,
    dest : dest,

    // Image asset paths
    images : {
        src  : src + '/img/**/*.*',
        dest : dest + '/img',
    },

    // HTML content file paths
    html : {
        watch : 'resources/views/**/*.php',
    },

    // Font asset paths
    fonts : {
        src  : src + '/fonts/**/*.*',
        dest : dest + '/fonts',
    },

    // JavaScript paths
    scripts : {
        src    : src + '/js/app.js',
        watch  : [src + '/js/**/*.js', '!' + src + '/js/spec/**/*.js'],
        dest   : dest + '/js',
        vendor : ['bower_components/modernizr/modernizr.js'],
    },

    // Stylesheet paths
    styles : {
        src   : src + '/sass/screen.scss',
        watch : src + '/sass/**/*.scss',
        dest  : dest + '/css',
    },
};
