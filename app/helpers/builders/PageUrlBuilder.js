'use strict';

var PageUrl = require('../modules/PageUrl');
var PagePropertyBuilder = require('./PagePropertyBuilder');
var SiteUrlBuilder = require('./SiteUrlBuilder');

class PageUrlBuilder {

    constructor(obj) {
        this.siteUrl = (obj && obj.siteUrl) || new SiteUrlBuilder().build();
        this.page = obj && obj.page;
        this.pageProperty = (obj && obj.pageProperty) || new PagePropertyBuilder({page: this.page}).build();
    }

    build() {
        return new PageUrl({
            siteUrl: this.siteUrl,
            page: this.page,
            pageProperty: this.pageProperty
        });
    }

}

module.exports = PageUrlBuilder;