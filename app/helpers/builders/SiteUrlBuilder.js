'use strict';

var ConfigBuilder = require('./ConfigBuilder');
var SiteUrl = require('../modules/SiteUrl');

class SiteUrlBuilder {

    constructor(obj) {
        this.helperName = obj && obj.helperName;
        this.environment = obj && obj.environment;

        this.config = (obj && obj.config) || new ConfigBuilder({
            helperName: this.helperName,
            environment: this.environment
        }).build();
    }

    build() {
        return new SiteUrl({
            config: this.config,
            helperName: this.helperName
        });
    }

}

module.exports = SiteUrlBuilder;