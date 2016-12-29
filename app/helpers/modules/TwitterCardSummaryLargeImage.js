'use strict';

var Config = require('./Config');
var PageData = require('./PageData');

class TwitterCardSummaryLargeImage {

    constructor(data, page) {
        this.config = new Config(data);
        this.twitterCardEnabled = this.config.get('twitterCardEnabled');
        this.page = page;
    }

    validate() {
        if (!this.twitterUserName) {
            throw new Error('twitterUserName is required for "summary_large_image"');
        }
    }

    get title() {
        return new PageData(this.page).title;
    }

    get twitterUserName() {
        return this.config.get('twitterUserName');
    }

    get description() {
        return new PageData(this.page).shortSummary;
    }

    get cardType() {
        return 'summary_large_image';
    }

    get card() {
        return {
            card_name: this.cardType,
            site: this.twitterUserName,
            creator: this.twitterUserName,
            title: this.title,
            description: this.description,
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