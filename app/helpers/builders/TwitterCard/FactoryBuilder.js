'use strict';

var PageConfigBuilder = require('../PageConfigBuilder');
var PagePropertyBuilder = require('../PagePropertyBuilder');
var TwitterCardFactory = require('../../modules/TwitterCard/Factory');

class TwitterCardFactoryBuilder {

    constructor(obj) {
        this.helperName = obj && obj.helperName;
        this.page = obj && obj.page;
        this.environment = obj && obj.environment;

        this.config = (obj && obj.config) || new PageConfigBuilder({
            page: this.page,
            helperName: this.helperName,
            environment: this.environment
        }).build();

        this.pageProperty = (obj && obj.pageProperty) || new PagePropertyBuilder({
            page: this.page,
            helperName: this.helperName,
            environment: this.environment
        }).build();

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
                this.twitterCard = new twitterCard({
                    page: this.page,
                    helperName: this.helperName,
                    environment: this.environment
                }).build();
            }
        });
    }

    build() {
        return new TwitterCardFactory({
            config: this.config,
            twitterCard: this.twitterCard,
            helperName: this.helperName
        });
    }

}

module.exports = TwitterCardFactoryBuilder;