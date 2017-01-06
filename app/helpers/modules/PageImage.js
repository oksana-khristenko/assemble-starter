'use strict';

class PageImage {

    constructor(obj) {
        this.siteUrl = obj.siteUrl;
        this.pageProperty = obj.pageProperty;
    }

    get url() {
        return this.siteUrl.get();
    }

    get imageUrl() {
        return this.pageProperty.get('image_url');
    }

    getAbsoluteUrl() {
        if (this.imageUrl && this.siteUrl) {
            return `${this.url}${this.imageUrl}`;
        }

        return false;
    }

}

module.exports = PageImage;