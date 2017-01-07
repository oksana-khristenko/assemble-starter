'use strict';

var PageConfigBuilder = require('../PageConfigBuilder');
var PagePropertyBuilder = require('../PagePropertyBuilder');
var PageImageBuilder = require('../PageImageBuilder');
var TwitterCardSummaryLargeImage = require('../../modules/TwitterCard/SummaryLargeImage');

class TwitterCardSummaryLargeImageBuilder {

    constructor(obj) {
        this.page = obj && obj.page;
        this.config = (obj && obj.config) || new PageConfigBuilder({page: this.page}).build();
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