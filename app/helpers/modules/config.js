'use strict';

class Config {

    constructor(config, validator) {
        this.config = config;
        this.validator = validator;
    }

    get(key) {
        this.validator.validateKey(key);
        return this.config[key];
    }

};

module.exports = Config;