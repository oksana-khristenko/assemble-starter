'use strict';

class TwitterCardFactory {

    constructor(config, twitterCard) {
        this.config = config;
        this.twitterCard = twitterCard;
    }

    get() {
        if (!this.config.get('twitterCardEnabled')) {
            return false;
        }

        return this.twitterCard.get();
    }

}

module.exports = TwitterCardFactory;