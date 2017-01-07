'use strict';

class PageProperty {

    constructor(obj) {
        this.helperName = obj && obj.helperName;
        this.page = obj && obj.page;
        this.validator = obj && obj.validator;
    }

    isTrue(propertyName) {
        this.validator.validatePage(this.page);
        this.validator.validatePropertyName(propertyName);

        if (this.page.hasOwnProperty(propertyName) && (this.page[propertyName] === true)) {
            return true;
        }
        else if (this.page.hasOwnProperty('data') && this.page.data.hasOwnProperty(propertyName) && (this.page.data[propertyName] === true)) {
            return true;
        }
        else {
            return false;
        }
    };

    exists(propertyName) {
        this.validator.validatePage(this.page);
        this.validator.validatePropertyName(propertyName);

        if (this.page.hasOwnProperty(propertyName) || this.page.data.hasOwnProperty(propertyName)) {
            return true;
        }

        return false;
    }

    get(propertyName) {
        this.validator.validatePage(this.page);
        this.validator.validatePropertyName(propertyName);

        if (this.page.hasOwnProperty(propertyName)) {
            return this.page[propertyName];
        }
        else if (this.page.hasOwnProperty('data') && this.page.data.hasOwnProperty(propertyName)) {
            return this.page.data[propertyName];
        }
        else {
            return false;
        }
    }

};

module.exports = PageProperty;