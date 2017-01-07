'use strict';

var Config = require('../modules/Config');
var EnvironmentConfig = require('../modules/EnvironmentConfig');
var ConfigValidator = require('../validators/ConfigValidator');

class ConfigBuilder {

    constructor(obj) {
        this.environment = obj && obj.environment;
        this.helperName = obj && obj.helperName;
        this.config = (obj && obj.config) || new EnvironmentConfig({environment: this.environment}).get();
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