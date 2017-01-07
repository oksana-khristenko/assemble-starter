'use strict';

var PageUrl = require('../modules/PageUrl');
var PagePropertyBuilder = require('./PagePropertyBuilder');
var SiteUrlBuilder = require('./SiteUrlBuilder');

class PageUrlBuilder {

    constructor(obj) {
        this.environment = obj && obj.environment;
        this.helperName = obj && obj.helperName;

        this.siteUrl = (obj && obj.siteUrl) || new SiteUrlBuilder({
            helperName: this.helperName,
            environment: this.environment
        }).build();

        this.page = obj && obj.page;

        this.pageProperty = (obj && obj.pageProperty) || new PagePropertyBuilder({
            page: this.page,
            helperName: this.helperName,
            environment: this.environment
        }).build();
    }

    build() {
        return new PageUrl({
            helperName: this.helperName,
            siteUrl: this.siteUrl,
            page: this.page,
            pageProperty: this.pageProperty
        });
    }

}

module.exports = PageUrlBuilder;