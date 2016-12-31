'use strict';

class ConfigValidator {

    validateKey(key) {
        if (typeof key == 'undefined') {
            throw new ReferenceError('config key is undefined');
        }

        if (typeof key != 'string') {
            throw new TypeError('config key must be a string');
        }
    }

}

module.exports = ConfigValidator;