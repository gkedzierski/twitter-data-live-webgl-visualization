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
var Backbone = require('backbone'),
    _        = require('underscore');

Backbone.$ = window.$;

/**
 * This view displays an error message for users that
 * do not have WebGL enabled or their web browser does not
 * support this technology
 */
module.exports = Backbone.View.extend({
    // Assign view to <body>
    el : 'body',

    /**
     * View constructor
     */
    initialize : function () {
        this.render();
    },

    /**
     * Create a view
     */
    render : function () {
        // Compile the template using underscore
        var template = _.template($('#webgl-unavailable-template').html());

        // Insert compiled HTML into DOM
        this.$el.html(template);
    },
});
