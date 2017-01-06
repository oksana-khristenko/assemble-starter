'use strict';

class SiteUrl {

    constructor(obj) {
        this.config = obj.config;
    }

    get siteUrl() {
        var url = this.config.get('siteUrl');
        return url && url.replace(/\/$/, '');
    }

    get() {
        if (!this.siteUrl) {
            throw new ReferenceError('siteUrl must be provided');
        }

        return `${this.siteUrl}/`;
    }

}

module.exports = SiteUrl;