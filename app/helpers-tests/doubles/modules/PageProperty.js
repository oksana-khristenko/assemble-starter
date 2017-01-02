'use strict';

class PageProperty {

    constructor(page, validator) {
        this.page = page;
        this.validator = validator;
    }

    isTrue(propertyName) {}
    exists(propertyName) {}
    get(propertyName) {}

};

module.exports = PageProperty;