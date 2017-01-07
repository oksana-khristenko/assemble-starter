'use strict';

class EnvironmentConfig {

    constructor(obj) {
        this.environment = obj && obj.environment;
    }

    get() {
        var config = require(`../../config/${this.environment}.js`);
        return config;
    }

}

module.exports = EnvironmentConfig;