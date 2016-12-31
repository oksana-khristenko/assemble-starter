'use strict';

var ConfigBuilder = require('../builders/ConfigBuilder');
var TwitterCardSummaryLargeImage = require('./TwitterCardSummaryLargeImage');

class TwitterCard {

    constructor(data, page) {
        this.data = data;
        this.config = new ConfigBuilder(data).build();
        this.twitterCardEnabled = this.config.get('twitterCardEnabled');
        this.twitterCardType = this.config.get('twitterCardType');
        this.page = page;
    }

    get cardType() {
        return this.config.get('twitterCardType');
    }

    get supportedCardTypes() {
        return new Set([
            'summary_large_image'
        ]);
    }

    isSupportedCardType(type) {
        return this.supportedCardTypes.has(type);
    }

    get() {
        if (!this.twitterCardEnabled) { return false; }

        if (!this.isSupportedCardType(this.twitterCardType)) {
            throw new Error('Only "summary_large_image" twitter card type is supported');
        }

        if (this.twitterCardType === 'summary_large_image') {
            return new TwitterCardSummaryLargeImage(this.data, this.page).get();
        }

        return new TwitterCardSummaryLargeImage(this.data, this.page).get();
    }

};

module.exports = TwitterCard;