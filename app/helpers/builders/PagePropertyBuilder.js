'use strict';

var PageProperty = require('../modules/PageProperty');
var PagePropertyValidator = require('../modules/PagePropertyValidator');

class PagePropertyBuilder {

    constructor(validator) {
        this.validator = validator || new PagePropertyValidator();
    }

    build() {
        return new PageProperty(this.validator);
    }

}

module.exports = PagePropertyBuilder;