'use strict';

class GoogleAnalyticsTrackingCodeValidator {

    constructor(obj) {
        this.helperName = obj && obj.helperName;
    }

    validateEnabled(enabled) {
        if (typeof enabled == 'undefined') {
            throw new ReferenceError(`${this.helperName}: google analytics enabled is undefined`);
        }

        if (typeof enabled != 'boolean') {
            throw new TypeError(`${this.helperName}: google analytics enabled must be a boolean`);
        }
    }

    validateId(id) {
        if (typeof id == 'undefined') {
            throw new ReferenceError(`${this.helperName}: google analytics id is undefined`);
        }

        if (typeof id != 'string') {
            throw new TypeError(`${this.helperName}: google analytics id must be a string`);
        }
    }

    validateDomain(domain) {
        if (typeof domain == 'undefined') {
            throw new ReferenceError(`${this.helperName}: google analytics domain is undefined`);
        }

        if (typeof domain != 'string') {
            throw new TypeError(`${this.helperName}: google analytics domain must be a string`);
        }
    }

    validateObj(obj) {
        if (typeof obj == 'undefined') {
            throw new ReferenceError(`${this.helperName}: argument is undefined`);
        }

        if (typeof obj != 'object' || obj === null) {
            throw new TypeError(`${this.helperName}: argument must be an object`);
        }
    }

    validate(obj) {
        this.validateObj(obj);
        this.validateEnabled(obj.enabled);
        this.validateId(obj.id);
        this.validateDomain(obj.domain);
    }

}

module.exports = GoogleAnalyticsTrackingCodeValidator;