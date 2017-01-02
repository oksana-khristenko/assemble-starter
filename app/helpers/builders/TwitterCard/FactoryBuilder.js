'use strict';

var ConfigBuilder = require('../ConfigBuilder');
var PagePropertyBuilder = require('../PagePropertyBuilder');
var TwitterCardFactory = require('../../modules/TwitterCard/Factory');
var TwitterCardSummaryLargeImageBuilder = require('./SummaryLargeImageBuilder');

class TwitterCardFactoryBuilder {

    constructor(obj) {
        this.config = obj.config || new ConfigBuilder().build();
        this.page = obj.page;

        this.pageProperty = obj.pageProperty || new PagePropertyBuilder(this.page).build();
        this.cardType = obj.cardType || 'summary_large_image';

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