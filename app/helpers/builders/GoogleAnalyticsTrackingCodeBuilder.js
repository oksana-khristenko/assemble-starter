'use strict';

var ConfigBuilder = require('./ConfigBuilder');
var GoogleAnalyticsTrackingCode = require('../modules/GoogleAnalyticsTrackingCode');
var GoogleAnalyticsTrackingCodeValidator = require('../validators/GoogleAnalyticsTrackingCodeValidator');

class GoogleAnalyticsTrackingCodeBuilder {

    constructor(obj) {
        this.config = (obj && obj.config) || new ConfigBuilder().build();
        this.validator = (obj && obj.validator) || new GoogleAnalyticsTrackingCodeValidator()
    }

    build() {
        return new GoogleAnalyticsTrackingCode({
            config: this.config,
            validator: this.validator
        });
    }

}

module.exports = GoogleAnalyticsTrackingCodeBuilder;