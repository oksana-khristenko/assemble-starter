'use strict';

class ConfigValidator {

    constructor(obj) {
        this.helperName = obj && obj.helperName;
    }

    validateKey(key) {
        if (typeof key == 'undefined') {
            throw new ReferenceError(`${this.helperName}: config key is undefined`);
        }

        if (typeof key != 'string') {
            throw new TypeError(`${this.helperName}: config key must be a string`);
        }
    }

}

module.exports = ConfigValidator;