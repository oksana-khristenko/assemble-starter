'use strict';

var PageConfigBuilder = require('./PageConfigBuilder');
var PagePropertyBuilder = require('./PagePropertyBuilder');
var PageImageBuilder = require('./PageImageBuilder');
var PageUrlBuilder = require('./PageUrlBuilder');
var OpenGraphMarkup = require('../modules/OpenGraphMarkup');

class OpenGraphMarkupBuilder {

    constructor(obj) {
        this.page = obj && obj.page;
        this.config = (obj && obj.config) || new PageConfigBuilder({page: this.page}).build();
        this.pageProperty = (obj && obj.pageProperty) || new PagePropertyBuilder({page: this.page}).build();
        this.pageImage = (obj && obj.pageImage) || new PageImageBuilder({page: this.page}).build();
        this.pageUrl = (obj && obj.pageUrl) || new PageUrlBuilder({page: this.page}).build();
        this.helperName = obj && obj.helperName;
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