'use strict';

class TwitterCardFactory {

    constructor(obj) {
        this.config = obj && obj.config;
        this.twitterCard = obj && obj.twitterCard;
        this.helperName = obj && obj.helperName;
    }

    get() {
        if (!this.config.get('twitterCardEnabled')) {
            return false;
        }

        return this.twitterCard.get();
    }

}

module.exports = TwitterCardFactory;