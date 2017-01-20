'use strict';

class PageUrl {

    constructor(obj) {
        this.siteUrl = obj && obj.siteUrl;
        this.pageProperty = obj && obj.pageProperty;
        this.helperName = obj && obj.helperName;
    }

    get url() {
        return this.siteUrl.get();
    }

    getDest(page) {
        return this.pageProperty.get({
            propertyName: 'dest',
            page
        });
    }

    getSlug(page) {
        var dest = this.getDest(page);
        return dest.replace('public/', '').replace('dist/', '').replace('index.html', '');
    }

    getAbsoluteUrl(page) {
        var slug = this.getSlug(page);
        return `${this.url}${slug}`;
    }

    getRootRelativeUrl(page) {
        var slug = this.getSlug(page);
        return slug ? `/${slug}` : '/';
    }

}

module.exports = PageUrl;