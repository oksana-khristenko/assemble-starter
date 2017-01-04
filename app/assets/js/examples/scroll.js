'use strict';

import $ from 'jquery';
import Scroll from '../modules/_scroll';

$(document).on('click', '#btn', function() {
    var scroll = new Scroll();

    scroll.to({
        $el: $('#content'),
        speed: 500
    });
});