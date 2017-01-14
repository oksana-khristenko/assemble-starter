'use strict';

import $ from 'jquery';

export default class Lightbox {

    constructor(obj) {
        this.selector = (obj && obj.selector) || '[data-lightbox]';
        this.contentHolder = (obj && obj.contentHolder) || `${this.selector} [data-lightbox-content]`;
        this.openButton = (obj && obj.openButton) || '[data-lightbox-open]';
        this.closeButton = (obj && obj.closeButton) || `[data-lightbox-close]`;
        this.contentRefAttr = (obj && obj.contentRefAttr) || 'data-lightbox-content-ref';
        this.bodyClass = (obj && obj.bodyClass) || 'lightbox-opened';
        this.openedEventName = (obj && obj.openedEventName) || 'lightbox.opened';
        this.closedEventName = (obj && obj.closedEventName) || 'lightbox.closed';
        this.triggerEvents = (obj && obj.triggerEvents) || false;
    }

    initSelectors() {
        this.$selector = $(this.selector);
        this.$contentHolder = $(this.contentHolder);
    }

    getTargetElement(event) {
        var target = $(event.target).attr(this.contentRefAttr);
        return $(`[${target}]`);
    }

    loadContent($target) {
        var $clone = $target.clone();
        this.$contentHolder.html($clone.show());
    }

    open(event) {
        var $target = this.getTargetElement(event);
        this.loadContent($target);

        $('body').addClass(this.bodyClass);

        this.$selector.fadeIn('fast', this.onOpened.bind(this));

    }

    onOpened() {
        return this.triggerEvents && $(document).trigger(this.openedEventName);
    }

    empty() {
        this.$contentHolder.empty();
    }

    close() {
        this.empty();

        $('body').removeClass(this.bodyClass);

        this.$selector.fadeOut('fast', this.onClosed.bind(this));
    }

    onClosed() {
        return this.triggerEvents && $(document).trigger(this.closedEventName);
    }

    bindEvents() {
        $(document).on('click', this.openButton, this.open.bind(this));
        $(document).on('click', this.closeButton, this.close.bind(this));
    }

    init() {
        this.initSelectors();
        return this.$selector.length === 1 && this.bindEvents();
    }

}