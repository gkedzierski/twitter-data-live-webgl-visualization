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

// CanvasView is main WebGL canvas view in the app
module.exports = Backbone.View.extend({
    // View constructor
    initialize : function () {
        this.render();
    },

    // Create a view
    render : function () {
        console.log('I\'m in CanvasView render method!');
    },
});
