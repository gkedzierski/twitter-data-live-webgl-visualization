//
// WebGL Twitter Globe
// A WebGL based real-time data visualisation of Twitter activity for the chosen brands.
//
// 2015 (c) Greg Kedzierski
// http://gregkedzierski.com
// greg@gregkedzierski.com
//

'use strict';

// Vendor modules
var Backbone = require('backbone');

Backbone.$ = window.$;

// App views
var CanvasView           = require('./views/canvasview'),
    WebGLUnavailableView = require('./views/webglunavailableview');

/**
 * This module exports Backbone router object
 */
module.exports = Backbone.Router.extend({
    // Define all routes
    routes : {
        ''                  : 'home',
        'webgl-unavailable' : 'webglUnavailable',
    },

    /**
     * Home route - landing page
     */
    home : function () {
        this.view = new CanvasView();
    },

    /**
     * Unavailble WebGL - route displays error view
     */
    webglUnavailable : function () {
        this.view = new WebGLUnavailableView();
    }
});
