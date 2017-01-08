'use strict';

import DynamicScroll from '../modules/_dynamic-scroll';

var scroll = new DynamicScroll({
    speed: 500,
    selector: '[data-scroll]'
});

scroll.init();