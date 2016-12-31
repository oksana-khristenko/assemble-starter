'use strict';

class PageProperty {

    constructor(validator) {
        this.validator = validator;
    }

    isTrue(page, propertyName) {
        this.validator.validatePage(page);
        this.validator.validatePropertyName(propertyName);

        if (page.hasOwnProperty(propertyName) && (page[propertyName] === true)) {
            return true;
        }
        else if (page.hasOwnProperty('data') && page.data.hasOwnProperty(propertyName) && (page.data[propertyName] === true)) {
            return true;
        }
        else {
            return false;
        }
    };

    exists(page, propertyName) {
        this.validator.validatePage(page);
        this.validator.validatePropertyName(propertyName);

        if (page.hasOwnProperty(propertyName) || page.data.hasOwnProperty(propertyName)) {
            return true;
        }

        return false;
    }

    get(page, propertyName) {
        this.validator.validatePage(page);
        this.validator.validatePropertyName(propertyName);

        if (page.hasOwnProperty(propertyName)) {
            return page[propertyName];
        }
        else if (page.hasOwnProperty('data') && page.data.hasOwnProperty(propertyName)) {
            return page.data[propertyName];
        }
        else {
            return false;
        }
    }

};

module.exports = PageProperty;