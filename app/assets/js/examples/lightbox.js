'use strict';

import $ from 'jquery';
import Lightbox from '../modules/_lightbox';

var lightbox = new Lightbox({
        selector: '[data-lightbox-example]',
        triggerEvents: true,
        openedEventName: 'modal.opened',
        closedEventName: 'modal.closed'
    });

lightbox.init();

$(document).on('modal.opened', function() {
    console.log('opened');
});

$(document).on('modal.closed', function() {
    console.log('closed');
});