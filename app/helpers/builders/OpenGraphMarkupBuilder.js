'use strict';

var PageConfigBuilder = require('./PageConfigBuilder');
var PagePropertyBuilder = require('./PagePropertyBuilder');
var PageImageBuilder = require('./PageImageBuilder');
var PageUrlBuilder = require('./PageUrlBuilder');
var OpenGraphMarkup = require('../modules/OpenGraphMarkup');

class OpenGraphMarkupBuilder {

    constructor(obj) {
        this.helperName = obj && obj.helperName;
        this.page = obj && obj.page;

        this.config = (obj && obj.config) || new PageConfigBuilder({
            page: this.page,
            helperName: this.helperName
        }).build();

        this.pageProperty = (obj && obj.pageProperty) || new PagePropertyBuilder({
            page: this.page,
            helperName: this.helperName
        }).build();

        this.pageImage = (obj && obj.pageImage) || new PageImageBuilder({
            page: this.page,
            helperName: this.helperName
        }).build();

        this.pageUrl = (obj && obj.pageUrl) || new PageUrlBuilder({
            page: this.page,
            helperName: this.helperName
        }).build();
    }

    build() {
        return new OpenGraphMarkup({
            config: this.config,
            pageProperty: this.pageProperty,
            pageImage: this.pageImage,
            pageUrl: this.pageUrl,
            helperName: this.helperName
        });
    }

}

module.exports = OpenGraphMarkupBuilder;