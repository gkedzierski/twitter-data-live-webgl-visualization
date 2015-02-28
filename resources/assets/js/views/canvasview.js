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
    _        = require('underscore'),
    THREE    = window.THREE;

Backbone.$ = window.$;

// Sub-views
var GlobeView = require('./globeview');

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
        _.bindAll(this, 'animate');

        this.subviews = [];

        this.createCanvas();
    },

    /**
     * Create a view
     */
    createCanvas : function () {
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
        this.camera.position.x = 0;
        this.camera.position.y = 0;
        this.camera.position.z = 2;
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

        // Set up renderer
        this.renderer = new THREE.WebGLRenderer({
            antialias : true,
            alpha     : true
        });
        this.renderer.shadowMapEnabled = true;
        this.renderer.setSize(this.$el.width(), this.$el.height());

        // Add <canvas> to view's DOM element
        this.$el.append(this.renderer.domElement);

        // Handle window resize
        $(window).on('resize', _.bind(this.handleWindowResize, this));

        // Add lights
        this.scene.add(new THREE.AmbientLight(0x404040));
        var light = new THREE.PointLight(0xffffff, 1, 100);
        light.position.set(50, 50, 50);
        this.scene.add(light);

        // Add subviews
        this.subviews.push(new GlobeView(this.scene));

        // Render first frame
        this.render();

        return this;
    },

    /**
     * Method handle window resize event - scales canvas to match the window
     */
    handleWindowResize : function () {
        this.camera.aspect = this.$el.width() / this.$el.height();
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.$el.width(), this.$el.height());
    },

    /**
     * Main WebGL render loop
     */
    render : function () {
        this.lastTimeMsec = null;
        requestAnimationFrame(this.animate);
    },

    animate : function (nowMsec) {
        var deltaMsec;

        // Keep looping
        requestAnimationFrame(this.animate);

        // measure time
        this.lastTimeMsec = this.lastTimeMsec || nowMsec - 1000 / 60;
        deltaMsec         = Math.min(200, nowMsec - this.lastTimeMsec);
        this.lastTimeMsec = nowMsec;

        // render all subviews
        _.each(this.subviews, function (view) {
            view.render(deltaMsec / 1000);
        });

        // render frame
        this.renderer.render(this.scene, this.camera);
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

        return true;
    },
});
