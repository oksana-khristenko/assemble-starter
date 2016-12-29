'use strict';

var Config = require('./Config');

class TwitterCardSummaryLargeImage {

    constructor(data) {
        this.config = new Config(data);
        this.twitterCardEnabled = this.config.get('twitterCardEnabled');
        this.twitterUserName = this.config.get('twitterUserName');
        this.cardType = 'summary_large_image';
    }

    validate() {
        if (!this.twitterUserName) {
            throw new Error('twitterUserName is required for "summary_large_image"');
        }
    }

    get card() {
        return {
            card_name: this.cardType,
            site: this.twitterUserName,
            creator: this.twitterUserName,
            title: 'test',
            description: 'test',
            image: 'test'
        };
    }

    get() {
        if (!this.twitterCardEnabled) { return false; }
        this.validate();
        return this.card;
    }

};

module.exports = TwitterCardSummaryLargeImage;