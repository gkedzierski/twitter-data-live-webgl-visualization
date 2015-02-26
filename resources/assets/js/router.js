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
var CanvasView = require('./views/canvasview');

// This module exports Backbone router object
module.exports = Backbone.Router.extend({
    // Define all routes
    routes : {
        '' : 'home',
    },

    // Home route - landing page
    home : function () {
        this.view = new CanvasView();
    },
});
