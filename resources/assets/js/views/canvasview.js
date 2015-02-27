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
    THREE    = window.THREE;

Backbone.$ = window.$;

/**
 * CanvasView is main WebGL canvas view in the app
 */
module.exports = Backbone.View.extend({
    // WebGL canvas is rendered inside #canvas element
    el : $('#canvas'),

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
        // Ensure WebGL is available in the browser
        this.checkWebGLAvailability();

        // Create scene
        this.scene = new THREE.Scene();

        // Create camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            this.$el.width() / this.$el.height(),
            0.1,
            1000
        );

        // Set up renderer
        this.renderer = new THREE.WebGLRenderer({
            antialias : true,
            alpha     : true
        });
        this.renderer.setSize(this.$el.width(), this.$el.height());

        // Add <canvas> to view's DOM element
        this.$el.append(this.renderer.domElement);
    },

    /**
     * Method checks if WebGL is available in the browser.
     * If it's not available, it redirects user to error view.
     * Code based on http://webgl.org wiki.
     */
    checkWebGLAvailability : function () {
        // Check for the existence of WebGLRenderingContext
        if (!window.WebGLRenderingContext) {
            Backbone.history.navigate('webgl-unavailable', { trigger : true });
        }

        var canvas  = $('<canvas/>')[0],
            context = canvas.getContext('webgl');

        // If the browser supports WebGL and canvas.getContext("webgl") returns null
        // then WebGL failed for some reason other than user's browser
        // (no GPU, out of memory, etc...)
        if (!context) {
            Backbone.history.navigate('webgl-unavailable', { trigger : true });
        }
    },
});
