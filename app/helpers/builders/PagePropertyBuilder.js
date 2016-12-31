'use strict';

var PageProperty = require('../modules/PageProperty');
var PagePropertyValidator = require('../modules/PagePropertyValidator');

class PagePropertyBuilder {

    constructor() {
        this.validator = new PagePropertyValidator();
    }

    build() {
        return new PageProperty(this.validator);
    }

}

module.exports = PagePropertyBuilder;