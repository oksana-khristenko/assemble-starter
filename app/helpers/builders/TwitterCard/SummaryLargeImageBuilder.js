'use strict';

var ConfigBuilder = require('../ConfigBuilder');
var PagePropertyBuilder = require('../PagePropertyBuilder');
var TwitterCardSummaryLargeImage = require('../../modules/TwitterCard/SummaryLargeImage');

class TwitterCardSummaryLargeImageBuilder {

    constructor(config, pageProperty, page) {
        this.config = config || new ConfigBuilder().build();
        this.page = page;
        this.pageProperty = pageProperty || new PagePropertyBuilder(this.page).build();
    }

    build() {
        return new TwitterCardSummaryLargeImage(this.config, this.pageProperty);
    }

}

module.exports = TwitterCardSummaryLargeImageBuilder;