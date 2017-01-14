'use strict';

class ExternalLinkValidator {

    constructor(obj) {
        this.helperName = obj && obj.helperName;
    }

    validateGetUrl(obj) {
        if (typeof obj == 'undefined') {
            throw new ReferenceError(`${this.helperName}: ExternalLink.prototype.getUrl() expects 1 argument, but none is passed`);
        }

        if (typeof obj !== 'object' || obj === null) {
            var typeOfObj = typeof obj;
            throw new TypeError(`${this.helperName}: ExternalLink.prototype.getUrl() expects argument type to be object, but ${typeOfObj} is passed`);
        }

        if (!obj.hasOwnProperty('id')) {
            throw new TypeError(`${this.helperName}: ExternalLink.prototype.getUrl() expects argument to have property "id"`);
        }

        if (typeof obj.id != 'string') {
            var typeOfId = typeof obj.id;
            throw new TypeError(`${this.helperName}: ExternalLink.prototype.getUrl() expects property "id" to have a string value, but ${typeOfId} was passed`);
        }

    }

}

module.exports = ExternalLinkValidator;