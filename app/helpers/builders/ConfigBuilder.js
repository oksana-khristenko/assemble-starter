'use strict';

var Config = require('../modules/Config');
var configObj = require('../../config.js');
var ConfigValidator = require('../validators/ConfigValidator');

class ConfigBuilder {

    constructor(obj) {
        this.helperName = obj && obj.helperName;
        this.config = (obj && obj.config) || configObj;
        this.validator = (obj && obj.validator) || new ConfigValidator({helperName: this.helperName});
    }

    build() {
        return new Config({
            config: this.config,
            validator: this.validator,
            helperName: this.helperName
        });
    }

}

module.exports = ConfigBuilder;