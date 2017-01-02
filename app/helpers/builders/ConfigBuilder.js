'use strict';

var Config = require('../modules/Config');
var configObj = require('../../config.js');
var ConfigValidator = require('../validators/ConfigValidator');

class ConfigBuilder {

    constructor(obj) {
        this.config = (obj && obj.config) || configObj;
        this.validator = (obj && obj.validator) || new ConfigValidator();
    }

    build() {
        return new Config({
            config: this.config,
            validator: this.validator
        });
    }

}

module.exports = ConfigBuilder;