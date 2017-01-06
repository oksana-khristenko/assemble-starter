'use strict';

var ConfigBuilder = require('./ConfigBuilder');
var SiteUrl = require('../modules/SiteUrl');

class SiteUrlBuilder {

    constructor(obj) {
        this.config = (obj && obj.config) || new ConfigBuilder().build();
    }

    build() {
        return new SiteUrl({
            config: this.config
        });
    }

}

module.exports = SiteUrlBuilder;