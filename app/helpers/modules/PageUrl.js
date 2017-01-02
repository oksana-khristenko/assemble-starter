'use strict';

class PageUrl {

    constructor(obj) {
        this.config = obj.config;
        this.page = obj.page;
        this.pageProperty = obj.pageProperty;
    }

    get projectUrl() {
        var url = this.config.get('projectUrl');
        return url && url.replace(/\/$/, '');
    }

    get dest() {
        return this.pageProperty.get('dest');
    }

    get slug() {
        return this.dest.replace('public/', '').replace('dist/', '').replace('index.html', '');
    }

    getAbsoluteUrl() {
        if (!this.projectUrl) {
            throw new ReferenceError('projectUrl must be provided');
        }

        return `${this.projectUrl}/${this.slug}`;
    }

}

module.exports = PageUrl;