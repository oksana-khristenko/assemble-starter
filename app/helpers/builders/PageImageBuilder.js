'use strict';

var PageImage = require('../modules/PageImage');
var PagePropertyBuilder = require('./PagePropertyBuilder');
var SiteUrlBuilder = require('./SiteUrlBuilder');

class PageImageBuilder {

    constructor(obj) {
        this.helperName = obj && obj.helperName;
        this.siteUrl = (obj && obj.siteUrl) || new SiteUrlBuilder({helperName: this.helperName}).build();
        this.page = obj && obj.page;

        this.pageProperty = (obj && obj.pageProperty) || new PagePropertyBuilder({
            page: this.page,
            helperName: this.helperName
        }).build();
    }

    build() {
        return new PageImage({
            siteUrl: this.siteUrl,
            pageProperty: this.pageProperty,
            helperName: this.helperName
        });
    }

}

module.exports = PageImageBuilder;