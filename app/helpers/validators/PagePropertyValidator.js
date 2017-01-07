'use strict';

class PagePropertyValidator {

    constructor(obj) {
        this.helperName = obj && obj.helperName;
    }

    validatePage(page) {
        if (typeof page == 'undefined') {
            throw new ReferenceError(`${this.helperName}: page is undefined`);
        }

        if (typeof page != 'object' || page === null) {
            throw new TypeError(`${this.helperName}: page must be an object`);
        }
    }

    validatePropertyName(propertyName) {
        if (typeof propertyName == 'undefined') {
            throw new ReferenceError(`${this.helperName}: propertyName is undefined`);
        }

        if (typeof propertyName != 'string') {
            throw new TypeError(`${this.helperName}: propertyName must be a string`);
        }
    }

}

module.exports = PagePropertyValidator;