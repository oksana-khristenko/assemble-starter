'use strict';

import $ from 'jquery';
import ImageLoader from '../modules/_image-loader';
import Waypoint from '../modules/_waypoint';

var imageLoader = new ImageLoader();
var waypoint = new Waypoint();

function addCssClassOnLoaded($el, className) {
    $el.addClass(className);
}

function onResolved(obj) {
    if (!obj.loaded) {
        window.setTimeout(function() { addCssClassOnLoaded(obj.$el, 'lazy-load__image_loaded'); }, 200);
    }
}

function onMultipleResolved(arr) {
    arr.forEach((obj) => onResolved(obj));
}

function onError(error) {
    console.log(error);
}

$(document).on('click', '#btn', function() {
    imageLoader
        .load($('[data-lazy-load]'))
        .then(onResolved)
        .catch(onError);
});

$(document).on('click', '#btn1', function() {
    imageLoader
        .loadAll($('[data-lazy-load-multiple]'))
        .then(onMultipleResolved)
        .catch(onError);
});

$(document).on('click', '#btn2', function() {
    imageLoader
        .load($('[data-lazy-load-background]'))
        .then(onResolved)
        .catch(onError);
});

function initWaypoints() {

    function onResolved(obj) {
        function callback($el) {
            $el.addClass('waypoint-image_loaded');
        }

        if (!obj.loaded) {
            window.setTimeout(function() { callback(obj.$el); }, 200);
        }
    }

    var $images = $('[data-lazy-load-waypoint]'),
        arr = [];

    for (let i = 0; i < $images.length; i++) {
        (function(j) {
            var el = $images[j];

            var handler = function(direction) {
                imageLoader
                    .load($(el))
                    .then(onResolved)
                    .catch(onError);
            };

            var obj = {
                element: el,
                handler: handler,
                offset: '90%'
            };

            arr.push(obj);
        })(i);
    }

    waypoint.set(arr);
}

initWaypoints();