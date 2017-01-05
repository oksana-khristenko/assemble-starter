'use strict';

import $ from 'jquery';
import '../vendor/jquery.actual';

var $window = $(window),
    cachedWindowWidth = 0,
    cachedWindowHeight = 0;

export function getWindowHeight() {
    return $window.height();
}

export function getWindowWidth() {
    return $window.width();
}

function setCachedWindowWidth() {
    cachedWindowWidth = getWindowWidth();
}

function setCachedWindowHeight() {
    cachedWindowHeight = getWindowHeight();
}

function getCachedWindowWidth() {
    return cachedWindowWidth;
}

function getCachedWindowHeight() {
    return cachedWindowHeight;
}

function getElementHeight($el) {
    return $el.actual('outerHeight');
}

function getElementWidth($el) {
    return $el.actual('outerWidth');
}

function bindEvents() {
    setCachedWindowWidth();
    setCachedWindowHeight();

    $(window).on('resize', function() {
        if (getCachedWindowWidth() !== getWindowWidth()) {
            $(document).trigger('window_width_changed');
        }

        if (getCachedWindowHeight() !== getWindowHeight()) {
            $(document).trigger('window_height_changed');
        }

        setCachedWindowWidth();
        setCachedWindowHeight();
    });
}

export function fitsWindowHeight($el) {
    return getElementHeight($el) <= getWindowHeight();
}

export function fitsWindowWidth($el) {
    return getElementWidth($el) <= getWindowWidth();
}

export function init() {
    bindEvents();
}
