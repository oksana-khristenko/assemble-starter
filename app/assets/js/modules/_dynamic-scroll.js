'use strict';

import $ from 'jquery';
import Scroll from './_scroll';

export default class DynamicScroll {

    constructor(obj) {
        this.scroll = new Scroll();
        this.speed = obj.speed;
        this.selector = obj.selector;
    }

    getTargetElementFromEvent(event) {
        var $target = $(event.target);

        return $target.is(this.selector) ?
            $target.attr('href') :
            $target.parents(this.selector).attr('href');
    }

    handleClick(event) {
        var el = this.getTargetElementFromEvent(event);

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