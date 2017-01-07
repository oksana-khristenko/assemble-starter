'use strict';

class GoogleAnalyticsTrackingCode {

    constructor(obj) {
        this.config = obj && obj.config;
        this.validator = obj && obj.validator;
        this.helperName = obj && obj.helperName;
    }

    isEnabled() {
        return this.config.get('googleAnalyticsEnabled');
    }

    getId() {
        return this.config.get('googleAnalyticsId');
    }

    getDomain() {
        return this.config.get('googleAnalyticsDomain');
    }

    getData() {
        return {
            data: {
                id: this.getId(),
                domain: this.getDomain()
            }
        };
    }

    get() {
        if (!this.isEnabled()) {
            return false;
        }

        if (!this.getId()) {
            return false;
        }

        if (!this.getDomain()) {
            return false;
        }

        return this.getData();
    }

}

module.exports = GoogleAnalyticsTrackingCode;