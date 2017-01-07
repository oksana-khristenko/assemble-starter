'use strict';

var ConfigBuilder = require('./ConfigBuilder');
var GoogleAnalyticsTrackingCode = require('../modules/GoogleAnalyticsTrackingCode');
var GoogleAnalyticsTrackingCodeValidator = require('../validators/GoogleAnalyticsTrackingCodeValidator');

class GoogleAnalyticsTrackingCodeBuilder {

    constructor(obj) {
        this.helperName = obj && obj.helperName;
        this.config = (obj && obj.config) || new ConfigBuilder({helperName: this.helperName}).build();
        this.validator = (obj && obj.validator) || new GoogleAnalyticsTrackingCodeValidator({helperName: this.helperName});
    }

    build() {
        return new GoogleAnalyticsTrackingCode({
            config: this.config,
            validator: this.validator,
            helperName: this.helperName
        });
    }

}

module.exports = GoogleAnalyticsTrackingCodeBuilder;