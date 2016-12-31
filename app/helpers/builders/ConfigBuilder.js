'use strict';

var Config = require('../modules/Config');
var configObj = require('../../config.js');
var ConfigValidator = require('../validators/ConfigValidator');

class ConfigBuilder {

    constructor(config, validator) {
        this.config = config || configObj;
        this.validator = validator || new ConfigValidator();
    }

    build() {
        return new Config(this.config, this.validator);
    }

}

module.exports = ConfigBuilder;