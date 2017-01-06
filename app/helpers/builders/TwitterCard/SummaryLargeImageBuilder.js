'use strict';

var ConfigBuilder = require('../ConfigBuilder');
var PagePropertyBuilder = require('../PagePropertyBuilder');
var PageImageBuilder = require('../PageImageBuilder');
var TwitterCardSummaryLargeImage = require('../../modules/TwitterCard/SummaryLargeImage');

class TwitterCardSummaryLargeImageBuilder {

    constructor(obj) {
        this.config = (obj && obj.config) || new ConfigBuilder().build();
        this.page = obj && obj.page;
        this.pageProperty = (obj && obj.pageProperty) || new PagePropertyBuilder({page: this.page}).build();
        this.pageImage = (obj && obj.pageImage) || new PageImageBuilder({page: this.page}).build();
    }

    build() {
        return new TwitterCardSummaryLargeImage({
            config: this.config,
            pageProperty: this.pageProperty,
            pageImage: this.pageImage
        });
    }

}

module.exports = TwitterCardSummaryLargeImageBuilder;