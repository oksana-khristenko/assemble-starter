'use strict';

class Config {

    constructor(obj) {
        this.config = obj && obj.config;
        this.validator = obj && obj.validator;
    }

    get(key) {
        this.validator.validateKey(key);
        return this.config[key];
    }

};

module.exports = Config;