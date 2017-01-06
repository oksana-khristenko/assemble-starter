'use strict';

var PageImage = require('../modules/PageImage');
var PagePropertyBuilder = require('./PagePropertyBuilder');
var SiteUrlBuilder = require('./SiteUrlBuilder');

class PageImageBuilder {

    constructor(obj) {
        this.siteUrl = (obj && obj.siteUrl) || new SiteUrlBuilder().build();
        this.page = obj && obj.page;
        this.pageProperty = (obj && obj.pageProperty) || new PagePropertyBuilder({page: this.page}).build();
    }

    build() {
        return new PageImage({
            siteUrl: this.siteUrl,
            pageProperty: this.pageProperty
        });
    }

}

module.exports = PageImageBuilder;