'use strict';

import $ from 'jquery';
import ImageLoader from '../modules/_image-loader';

var imageLoader = new ImageLoader();

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