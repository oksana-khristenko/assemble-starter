'use strict';

var PageImage = require('../modules/PageImage');
var PagePropertyBuilder = require('./PagePropertyBuilder');
var SiteUrlBuilder = require('./SiteUrlBuilder');

class PageImageBuilder {

    constructor(obj) {
        this.helperName = obj && obj.helperName;
        this.environment = obj && obj.environment;
        this.page = obj && obj.page;

        this.siteUrl = (obj && obj.siteUrl) || new SiteUrlBuilder({
            helperName: this.helperName,
            environment: this.environment
        }).build();

        this.pageProperty = (obj && obj.pageProperty) || new PagePropertyBuilder({
            helperName: this.helperName,
            environment: this.environment
        }).build();
    }

    build() {
        return new PageImage({
            siteUrl: this.siteUrl,
            pageProperty: this.pageProperty,
            helperName: this.helperName,
            page: this.page
        });
    }

}

module.exports = PageImageBuilder;