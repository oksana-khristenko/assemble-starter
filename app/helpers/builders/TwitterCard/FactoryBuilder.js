'use strict';

var ConfigBuilder = require('../ConfigBuilder');
var PagePropertyBuilder = require('../PagePropertyBuilder');
var TwitterCardFactory = require('../../modules/TwitterCard/Factory');
var TwitterCardSummaryLargeImageBuilder = require('./SummaryLargeImageBuilder');

class TwitterCardFactoryBuilder {

    constructor(config, pageProperty, cardType, page) {
        this.config = config || new ConfigBuilder().build();
        this.page = page;
        this.pageProperty = pageProperty || new PagePropertyBuilder(this.page).build();
        this.cardType = cardType || 'summary_large_image';

        if (this.cardType === 'summary_large_image') {
            this.twitterCard = new TwitterCardSummaryLargeImageBuilder(null, null, this.page).build();
        }
    }

    build() {
        return new TwitterCardFactory(
            this.config,
            this.twitterCard
        );
    }

}

module.exports = TwitterCardFactoryBuilder;