'use strict';

class PageProperty {

    constructor(obj) {
        this.helperName = obj && obj.helperName;
        this.validator = obj && obj.validator;
    }

    isTrue(obj) {
        this.validator.validatePage(obj.page);
        this.validator.validatePropertyName(obj.propertyName);

        if (obj.page.hasOwnProperty(obj.propertyName) && (obj.page[obj.propertyName] === true)) {
            return true;
        }
        else if (obj.page.hasOwnProperty('data') && obj.page.data.hasOwnProperty(obj.propertyName) && (obj.page.data[obj.propertyName] === true)) {
            return true;
        }
        else {
            return false;
        }
    };

    exists(obj) {
        this.validator.validatePage(obj.page);
        this.validator.validatePropertyName(obj.propertyName);

        if (obj.page.hasOwnProperty(obj.propertyName) || obj.page.data.hasOwnProperty(obj.propertyName)) {
            return true;
        }

        return false;
    }

    get(obj) {
        this.validator.validatePage(obj.page);
        this.validator.validatePropertyName(obj.propertyName);

        if (obj.page.hasOwnProperty(obj.propertyName)) {
            return obj.page[obj.propertyName];
        }
        else if (obj.page.hasOwnProperty('data') && obj.page.data.hasOwnProperty(obj.propertyName)) {
            return obj.page.data[obj.propertyName];
        }
        else {
            return false;
        }
    }

};

module.exports = PageProperty;