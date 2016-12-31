'use strict';

var Config = require('./Config');
var ConfigValidator = require('./ConfigValidator');
var PagePropertyBuilder = require('../builders/PagePropertyBuilder');

class TwitterCardSummaryLargeImage {

    constructor(data, page) {
        this.config = new Config(data, new ConfigValidator());
        this.twitterCardEnabled = this.config.get('twitterCardEnabled');
        this.page = page;
        this.pagePropertyBuilder = new PagePropertyBuilder().build();
    }

    validate() {
        if (!this.twitterUserName) {
            throw new Error('twitterUserName is required for "summary_large_image"');
        }
    }

    get title() {
        return this.pagePropertyBuilder.get(this.page, 'title');
    }

    get twitterUserName() {
        return this.config.get('twitterUserName');
    }

    get description() {
        return this.pagePropertyBuilder.get(this.page, 'short_summary');
    }

    get cardType() {
        return 'summary_large_image';
    }

    get card() {
        return {
            card: this.cardType,
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