'use strict';

var ConfigBuilder = require('./ConfigBuilder');
var SiteUrl = require('../modules/SiteUrl');

class SiteUrlBuilder {

    constructor(obj) {
    	this.helperName = obj && obj.helperName;
        this.config = (obj && obj.config) || new ConfigBuilder({helperName: this.helperName}).build();
    }

    build() {
        return new SiteUrl({
            config: this.config,
            helperName: this.helperName
        });
    }

}

module.exports = SiteUrlBuilder;