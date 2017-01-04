'use strict';

import $ from 'jquery';
import ImageLoader from '../modules/_image-loader';
import Waypoint from '../modules/_waypoint';

var imageLoader = new ImageLoader();
var waypoint = new Waypoint();

function doSomething() {
    console.log('loaded');
}

function errorFn(error) {
    console.log(error);
}

$(document).on('click', '#btn', function() {
    imageLoader
        .loadImage($('#image'))
        .then(doSomething)
        .catch(errorFn);
});

$(document).on('click', '#btn2', function() {
    imageLoader
        .loadImages($('.image'))
        .then(doSomething)
        .catch(errorFn);
});

function initWaypoints() {

    function waypointReached() {
        console.log('waypoint reached');
    }

    function errorFn(error) {
        console.log(error);
    }

    var $images = $('.waypoint-image'),
        arr = [];

    for (let i = 0; i < $images.length; i++) {
        (function(j) {
            var el = $images[j];

            var handler = function(direction) {
                imageLoader
                    .loadImage($(el))
                    .then(waypointReached)
                    .catch(errorFn);
            };

            var obj = {
                el: el,
                handler: handler,
                offset: '90%'
            };

            arr.push(obj);
        })(i);
    }

    waypoint.set(arr);
}

initWaypoints();