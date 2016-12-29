'use strict';

class Config {

    constructor(config) {
        this.config = config;
    }

    validate(key) {
        if (typeof key == 'undefined') {
            throw new ReferenceError('config key is undefined');
        }

        if (typeof key != 'string') {
            throw new TypeError('config key must be a string');
        }
    }

    get(key) {
        this.validate(key);
        return this.config[key];
    }

};

module.exports = Config;