'use strict';

import $ from 'jquery';
import '../vendor/jquery.actual';

export default class Window {

    constructor() {
        this.$window = $(window);
        this.cachedWindowWidth = 0;
        this.cachedWindowHeight = 0;
    }

    getWindowHeight() {
        return this.$window.height();
    }

    getWindowWidth() {
        return this.$window.width();
    }

    setCachedWindowWidth() {
        this.cachedWindowWidth = this.getWindowWidth();
    }

    setCachedWindowHeight() {
        this.cachedWindowHeight = this.getWindowHeight();
    }

    getCachedWindowWidth() {
        return this.cachedWindowWidth;
    }

    getCachedWindowHeight() {
        return this.cachedWindowHeight;
    }

    getElementHeight($el) {
        return $el.actual('outerHeight');
    }

    getElementWidth($el) {
        return $el.actual('outerWidth');
    }

    fitsWindowHeight($el) {
        return this.getElementHeight($el) <= this.getWindowHeight();
    }

    fitsWindowWidth($el) {
        return this.getElementWidth($el) <= this.getWindowWidth();
    }

    hasWindowWidthChanged() {
        return this.getCachedWindowWidth() !== this.getWindowWidth();
    }

    hasWindowHeightChanged() {
        return this.getCachedWindowHeight() !== this.getWindowHeight();
    }

    onWindowResize() {
        this.hasWindowWidthChanged() && $(document).trigger('window.width.changed');
        this.hasWindowHeightChanged() && $(document).trigger('window.height.changed');

        this.setCachedWindowWidth();
        this.setCachedWindowHeight();
    }

    bindEvents() {
        $(window).on('resize', this.onWindowResize.bind(this));
    }

    init() {
        this.setCachedWindowWidth();
        this.setCachedWindowHeight();
        this.bindEvents();
    }
}
