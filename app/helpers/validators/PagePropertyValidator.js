'use strict';

class PagePropertyValidator {

    validatePage(page) {
        if (typeof page == 'undefined') {
            throw new ReferenceError('page is undefined');
        }

        if (typeof page != 'object' || page === null) {
            throw new TypeError('page must be an object');
        }
    }

    validatePropertyName(propertyName) {
        if (typeof propertyName == 'undefined') {
            throw new ReferenceError('propertyName is undefined');
        }

        if (typeof propertyName != 'string') {
            throw new TypeError('propertyName must be a string');
        }
    }

}

module.exports = PagePropertyValidator;