'use strict';

var ConfigBuilder = require('./ConfigBuilder');
var PagePropertyBuilder = require('./PagePropertyBuilder');
var PageImageBuilder = require('./PageImageBuilder');
var PageUrlBuilder = require('./PageUrlBuilder');
var OpenGraphMarkup = require('../modules/OpenGraphMarkup');

class OpenGraphMarkupBuilder {

    constructor(obj) {
        this.config = (obj && obj.config) || new ConfigBuilder().build();
        this.page = obj && obj.page;
        this.pageProperty = (obj && obj.pageProperty) || new PagePropertyBuilder({page: this.page}).build();
        this.pageImage = (obj && obj.pageImage) || new PageImageBuilder({page: this.page}).build();
        this.pageUrl = (obj && obj.pageUrl) || new PageUrlBuilder({page: this.page}).build();
    }

    build() {
        return new OpenGraphMarkup({
            config: this.config,
            pageProperty: this.pageProperty,
            pageImage: this.pageImage,
            pageUrl: this.pageUrl
        });
    }

}

module.exports = OpenGraphMarkupBuilder;