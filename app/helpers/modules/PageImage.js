'use strict';

class PageImage {

    constructor(obj) {
        this.siteUrl = obj && obj.siteUrl;
        this.pageProperty = obj && obj.pageProperty;
        this.helperName = obj && obj.helperName;
        this.page = obj && obj.page;
    }

    get url() {
        return this.siteUrl.get();
    }

    get imageUrl() {
        return this.pageProperty.get({
            propertyName: 'image_url',
            page: this.page
        });
    }

    getAbsoluteUrl() {
        if (this.imageUrl && this.siteUrl) {
            return `${this.url}${this.imageUrl}`;
        }

        return false;
    }

}

module.exports = PageImage;