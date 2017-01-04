'use strict';

import $ from 'jquery';
import ImageLoader from '../modules/_image-loader';
import Waypoint from '../modules/_waypoint';

var imageLoader = new ImageLoader();
var waypoint = new Waypoint();

function onResolved($els) {
    function callback($els) {
        if (Array.isArray($els)) {
            $els.forEach(($el) => {
                $el.addClass('lazy-load__image_loaded');
            });
        }
        else {
            $els.addClass('lazy-load__image_loaded');
        }
    }

    window.setTimeout(function() { callback($els); }, 200);
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
        .then(onResolved)
        .catch(onError);
});

$(document).on('click', '#btn2', function() {
    imageLoader
        .loadAll($('[data-lazy-load-background]'))
        .then(onResolved)
        .catch(onError);
});

function initWaypoints() {

    function onResolved($el) {
        function callback($el) {
            $el.addClass('waypoint-image_loaded');
        }

        window.setTimeout(function() { callback($el); }, 200);
    }

    function onError(error) {
        console.log(error);
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