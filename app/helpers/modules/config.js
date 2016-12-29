'use strict';

var config = require('../../config.js');

class Config {

    validate(key) {
        if (typeof key == 'undefined') {
            throw new ReferenceError('config key is not provided');
        }
    }

    get(key) {
        this.validate(key);
        return config[key];
    }

    exists(key) {
        this.validate(key);
        return config.hasOwnProperty(key);
    }

};

module.exports = Config;