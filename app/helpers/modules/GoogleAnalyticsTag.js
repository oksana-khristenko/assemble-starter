'use strict';

class GoogleAnalyticsTag {

    constructor(config) {
        this.config = config;
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

module.exports = GoogleAnalyticsTag;