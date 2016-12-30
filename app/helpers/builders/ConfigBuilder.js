'use strict';

var Config = require('../modules/Config');
var config = require('../../config.js');

class ConfigBuilder {

    constructor() {
        this.config = config;
    }

    build() {
        return new Config(this.config);
    }

}

module.exports = ConfigBuilder;