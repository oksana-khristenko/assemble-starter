'use strict';

import $ from 'jquery';
import Scroll from '../modules/_scroll';

export default class DynamicScroll {

    constructor(obj) {
        this.scroll = new Scroll();
        this.speed = obj.speed;
        this.selector = obj.selector;
    }

    handleClick(event) {
        var el = event.target.getAttribute('href');

        this.scroll.to({
            $el: $(el),
            speed: this.speed,
            event: event
        });
    }

    init() {
        $(document).on('click', this.selector, this.handleClick.bind(this));
    }

}