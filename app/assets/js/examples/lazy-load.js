'use strict';

import $ from 'jquery';
import ImageLoader from '../modules/_image-loader';
import Waypoint from '../modules/_waypoint';

var imageLoader = new ImageLoader();

function onResolved(obj) {
    if (!obj.loaded) {
        window.setTimeout(function() { obj.$el.addClass('is-loaded'); }, 200);
    }
}

function onMultipleResolved(arr) {
    arr.forEach((obj) => onResolved(obj));
}

function onError(error) {
    console.log(error);
}

function bindEvents() {
    $(document).on('click', '#btn', function() {
        imageLoader
            .load($('[data-preload]'))
            .then(onResolved)
            .catch(onError);
    });

    $(document).on('click', '#btn1', function() {
        imageLoader
            .load($('[data-preload-multiple]'))
            .then(onMultipleResolved)
            .catch(onError);
    });

    $(document).on('click', '#btn2', function() {
        imageLoader
            .load($('[data-preload-background]'))
            .then(onResolved)
            .catch(onError);
    });
}

function initWaypoints() {

    var $images = $('[data-preload-waypoint]'),
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

            arr.push({
                element: el,
                handler: handler,
                offset: '90%'
            });

        })(i);
    }

    var waypoint = new Waypoint();
    waypoint.set(arr);
}

bindEvents();
initWaypoints();