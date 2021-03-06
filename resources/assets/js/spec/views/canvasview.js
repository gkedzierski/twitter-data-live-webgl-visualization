//
// WebGL Twitter Globe
// A WebGL based real-time data visualisation of Twitter activity for the chosen brands.
//
// 2015 (c) Greg Kedzierski
// http://gregkedzierski.com
// greg@gregkedzierski.com
//

// Make sure these vendor libraries are bundled
window.$     = require('jquery');
window.THREE = require('../../../../../bower_components/three.js/three.min.js');

// Require actual view
var CanvasView = require('../../views/canvasview');

function addFixtures() {
    $('body').append('<div class="canvas" id="canvas"></div>');
}

describe('canvasview.js spec', function () {
    var view;

    beforeEach(function () {
        view = new CanvasView();
    });

    describe('when view is constructing', function () {
        it ('should exist', function () {
            expect(view).toBeDefined();
        });
    });

    describe('when view is rendered', function () {
        beforeEach(function () {
            addFixtures();
        });

        it ('should have WebGL available', function () {
            expect(view.checkWebGLAvailability()).toBe(true);
        })
    });
});
