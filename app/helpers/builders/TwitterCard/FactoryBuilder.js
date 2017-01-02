'use strict';

var ConfigBuilder = require('../ConfigBuilder');
var PagePropertyBuilder = require('../PagePropertyBuilder');
var TwitterCardFactory = require('../../modules/TwitterCard/Factory');

class TwitterCardFactoryBuilder {

    constructor(obj) {
        this.config = (obj && obj.config) || new ConfigBuilder().build();
        this.page = obj.page;

        this.pageProperty = (obj && obj.pageProperty) || new PagePropertyBuilder({page: this.page}).build();
        this.cardType = (obj && obj.cardType) || 'summary_large_image';

        this.setTwitterCard(this.cardType);
    }

    get modules() {
        return [
            { cardType: 'summary_large_image', source: './SummaryLargeImageBuilder' }
        ];
    }

    setTwitterCard(cardType) {
        this.modules.forEach((module) => {
            if (module.cardType === cardType) {
                var twitterCard = require(module.source);
                this.twitterCard = new twitterCard({page: this.page}).build();
            }
        });
    }

    build() {
        return new TwitterCardFactory(
            this.config,
            this.twitterCard
        );
    }

}

module.exports = TwitterCardFactoryBuilder;