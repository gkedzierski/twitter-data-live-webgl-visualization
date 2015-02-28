//
// WebGL Twitter Globe
// A WebGL based real-time data visualisation of Twitter activity for the chosen brands.
//
// 2015 (c) Greg Kedzierski
// http://gregkedzierski.com
// greg@gregkedzierski.com
//

module.exports = function(config) {
    config.set({
        browsers   : ['Chrome'],
        frameworks : ['browserify', 'jasmine-jquery', 'jasmine'],

        basePath : '..',

        files : [
            'resources/assets/js/spec/**/*.js'
        ],

        preprocessors : {
            'resources/assets/js/spec/**/*.js' : ['browserify']
        },

        browserify: {
            debug : true,
        },
    });
};
