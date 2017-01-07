'use strict';

var PageUrl = require('../modules/PageUrl');
var PagePropertyBuilder = require('./PagePropertyBuilder');
var SiteUrlBuilder = require('./SiteUrlBuilder');

class PageUrlBuilder {

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
        return new PageUrl({
            helperName: this.helperName,
            siteUrl: this.siteUrl,
            page: this.page,
            pageProperty: this.pageProperty
        });
    }

}

module.exports = PageUrlBuilder;