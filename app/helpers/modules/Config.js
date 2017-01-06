'use strict';

class Config {

    constructor(obj) {
        this.config = obj && obj.config;
        this.validator = obj && obj.validator;
    }

    exists(key) {
        this.validator.validateKey(key);
        return this.config.hasOwnProperty(key);
    }

    get(key) {
        this.validator.validateKey(key);
        return this.config[key];
    }

};

module.exports = Config;