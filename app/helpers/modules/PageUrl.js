'use strict';

class PageUrl {

    constructor(obj) {
        this.siteUrl = obj && obj.siteUrl;
        this.page = obj && obj.page;
        this.pageProperty = obj && obj.pageProperty;
        this.helperName = obj && obj.helperName;
    }

    get url() {
        return this.siteUrl.get();
    }

    get dest() {
        return this.pageProperty.get({
            propertyName: 'dest',
            page: this.page
        });
    }

    get slug() {
        return this.dest.replace('public/', '').replace('dist/', '').replace('index.html', '');
    }

    getAbsoluteUrl() {
        return `${this.url}${this.slug}`;
    }

    getRootRelativeUrl() {
        return this.slug ? `/${this.slug}` : '/';
    }

}

module.exports = PageUrl;