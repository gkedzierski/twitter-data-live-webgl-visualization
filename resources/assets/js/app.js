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
window.$     = require('jquery');
window.THREE = require('../../../bower_components/three.js/three.js');
var Backbone = require('backbone');

Backbone.$ = window.$;

// App modules
var Router = require('./router');

// Initialize router
new Router();

// Make sure DOM is ready...
$(function () {
    // Run backbone router with push state enabled
    Backbone.history.start({ pushState : true });
});
