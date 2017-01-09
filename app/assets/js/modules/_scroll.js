'use strict';

import $ from 'jquery';

export default class Scroll {

    constructor() {
        this.speed = 0;
    }

    to(obj) {
        if (obj.$el.length > 0) {
            obj.event.preventDefault();

            var offset = obj.$el.offset().top,
                speed = obj.speed || this.speed;

            obj.$el.parents('body,html').animate({scrollTop: offset}, speed);
        }
    }

}