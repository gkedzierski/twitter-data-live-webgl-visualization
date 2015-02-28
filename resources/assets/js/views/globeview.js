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
 * GlobeView is a WebGL representation of the globe
 */
module.exports = Backbone.View.extend({
    /**
     * View constructor
     */
    initialize : function (scene) {
        this.scene = scene;

        this.createGeometry();
    },

    /**
     * Create object geometry and add it to the scene
     */
    createGeometry : function () {
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshPhongMaterial({
            ambient   : 0xffffff,
            color     : 0xdddddd,
            specular  : 0xaaaaff,
            shininess : 30,
        });
        this.mesh    = new THREE.Mesh(geometry, material);

        this.scene.add(this.mesh);
    },

    /**
     * Render / update frame data
     */
    render : function (delta) {
        this.mesh.rotation.x += delta * 0.1;
        this.mesh.rotation.z += delta * 0.1;
    },
});
