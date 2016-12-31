'use strict';

var Config = require('../modules/Config');
var config = require('../../config.js');
var ConfigValidator = require('../modules/ConfigValidator');

class ConfigBuilder {

    constructor() {
        this.config = config;
        this.validator = new ConfigValidator();;
    }

    build() {
        return new Config(this.config, this.validator);
    }

}

module.exports = ConfigBuilder;