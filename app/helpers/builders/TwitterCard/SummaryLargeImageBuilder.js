'use strict';

var ConfigBuilder = require('../ConfigBuilder');
var PagePropertyBuilder = require('../PagePropertyBuilder');
var TwitterCardSummaryLargeImage = require('../../modules/TwitterCard/SummaryLargeImage');

class TwitterCardSummaryLargeImageBuilder {

    constructor(obj) {
        this.config = obj.config || new ConfigBuilder().build();
        this.page = obj.page;
        this.pageProperty = obj.pageProperty || new PagePropertyBuilder({page: this.page}).build();
    }

    build() {
        return new TwitterCardSummaryLargeImage({
        	config: this.config,
        	pageProperty: this.pageProperty
        });
    }

}

module.exports = TwitterCardSummaryLargeImageBuilder;