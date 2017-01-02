'use strict';

var PageProperty = require('../modules/PageProperty');
var PagePropertyValidator = require('../validators/PagePropertyValidator');

class PagePropertyBuilder {

    constructor(page, validator) {
        this.page = page;
        this.validator = validator || new PagePropertyValidator();
    }

    build() {
        return new PageProperty(this.page, this.validator);
    }

}

module.exports = PagePropertyBuilder;