'use strict';

var PageProperty = require('../modules/PageProperty');
var PagePropertyValidator = require('../validators/PagePropertyValidator');

class PagePropertyBuilder {

    constructor(obj) {
        this.page = obj && obj.page;
        this.validator = (obj && obj.validator) || new PagePropertyValidator();
    }

    build() {
        return new PageProperty(this.page, this.validator);
    }

}

module.exports = PagePropertyBuilder;