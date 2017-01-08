'use strict';

var PageFetcher = require('../modules/PageFetcher');
var PagePropertyBuilder = require('./PagePropertyBuilder');

class PageFetcherBuilder {

    constructor(obj) {
        this.environment = obj && obj.environment;
        this.helperName = obj && obj.helperName;
        this.pages = obj && obj.pages;

        this.pageProperty = (obj && obj.pageProperty) || new PagePropertyBuilder({
            helperName: this.helperName,
            environment: this.environment
        }).build();
    }

    build() {
        return new PageFetcher({
            helperName: this.helperName,
            pages: this.pages,
            pageProperty: this.pageProperty
        });
    }

}

module.exports = PageFetcherBuilder;