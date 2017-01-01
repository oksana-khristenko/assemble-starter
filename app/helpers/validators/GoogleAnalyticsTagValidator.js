'use strict';

class GoogleAnalyticsTagValidator {

    validateEnabled(enabled) {
        if (typeof enabled == 'undefined') {
            throw new ReferenceError('google analytics enabled is undefined');
        }

        if (typeof enabled != 'boolean') {
            throw new TypeError('google analytics enabled must be a boolean');
        }
    }

    validateId(id) {
        if (typeof id == 'undefined') {
            throw new ReferenceError('google analytics id is undefined');
        }

        if (typeof id != 'string') {
            throw new TypeError('google analytics id must be a string');
        }
    }

    validateDomain(domain) {
        if (typeof domain == 'undefined') {
            throw new ReferenceError('google analytics domain is undefined');
        }

        if (typeof domain != 'string') {
            throw new TypeError('google analytics domain must be a string');
        }
    }

    validateObj(obj) {
        if (typeof obj == 'undefined') {
            throw new ReferenceError('argument is undefined');
        }

        if (typeof obj != 'object' || obj === null) {
            throw new TypeError('argument must be an object');
        }
    }

    validate(obj) {
        this.validateObj(obj);
        this.validateEnabled(obj.enabled);
        this.validateId(obj.id);
        this.validateDomain(obj.domain);
    }

}

module.exports = GoogleAnalyticsTagValidator;