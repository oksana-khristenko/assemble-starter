'use strict';

import $ from 'jquery';
import Scroll from '../modules/_scroll';

$(document).on('click', '#btn', function(event) {
    var scroll = new Scroll();

    scroll.to({
        $el: $('#content'),
        speed: 500,
        event: event
    });
});