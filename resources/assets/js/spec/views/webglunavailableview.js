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
var WebGLUnavailableView = require('../../views/webglunavailableview');

function addFixtures() {
    $('body').append('<script type="text/template" id="webgl-unavailable-template">' +
        '<div class="error"><p>Some error content.</p></div></script>');
}

describe('webglunavailableview.js spec', function () {
    var view;

    beforeEach(function () {
        addFixtures();

        view = new WebGLUnavailableView();
    });

    describe('when view is constructing', function () {
        it ('should exist', function () {
            expect(view).toBeDefined();
        });
    });

    describe('when view is rendered', function () {
        beforeEach(function () {
            addFixtures();

            view.render();
        });

        it ('should contain error message', function () {
            expect(view.$el.find('.error p')[0]).toBeInDOM();
        });
    });
});
