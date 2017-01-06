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
        return `${this.url}${this.imageUrl}`;
    }

}

module.exports = PageImage;