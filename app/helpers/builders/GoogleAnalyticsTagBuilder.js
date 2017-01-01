'use strict';

var ConfigBuilder = require('../builders/ConfigBuilder');
var GoogleAnalyticsTag = require('../modules/GoogleAnalyticsTag');

class GoogleAnalyticsTagBuilder {

    constructor(config) {
        this.config = config || new ConfigBuilder().build();
    }

    build() {
        return new GoogleAnalyticsTag(this.config, this.validator);
    }

}

module.exports = GoogleAnalyticsTagBuilder;