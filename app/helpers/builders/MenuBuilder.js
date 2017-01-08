'use strict';

var Menu = require('../modules/Menu');
var PageFetcherBuilder = require('./PageFetcherBuilder');
var PagePropertyBuilder = require('./PagePropertyBuilder');
var PageUrlBuilder = require('./PageUrlBuilder');

class MenuBuilder {

    constructor(obj) {
        this.helperName = obj && obj.helperName;
        this.environment = obj && obj.environment;
        this.pages = obj && obj.pages;
        this.data = obj && obj.data;

        this.pageProperty = (obj && obj.pageProperty) || new PagePropertyBuilder({
            helperName: this.helperName,
            environment: this.environment
        }).build();

        this.pageFetcher = (obj && obj.pageFetcher) || new PageFetcherBuilder({
            helperName: this.helperName,
            environment: this.environment,
            pages: this.pages
        }).build();

        this.pageUrl = (obj && obj.pageUrl) || new PageUrlBuilder({
            helperName: this.helperName,
            environment: this.environment,
            pages: this.pages
        }).build();
    }

    build() {
        return new Menu({
            pageProperty: this.pageProperty,
            pageFetcher: this.pageFetcher,
            helperName: this.helperName,
            data: this.data,
            pages: this.pages,
            pageUrl: this.pageUrl
        });
    }

}

module.exports = MenuBuilder;