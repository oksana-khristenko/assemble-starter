'use strict';

class TwitterCardSummaryLargeImage {

    constructor(obj) {
        this.config = obj && obj.config;
        this.pageProperty = obj && obj.pageProperty;
    }

    get cardType() {
        return 'summary_large_image';
    }

    get twitterUserName() {
        return this.config.get('twitterUserName');
    }

    get site() {
        return this.twitterUserName;
    }

    get creator() {
        return this.twitterUserName;
    }

    get title() {
        return this.pageProperty.get('title');
    }

    get description() {
        return this.pageProperty.get('short_summary');
    }

    get imageUrl() {
        return this.pageProperty.get('image_url');
    }

    get imageAlt() {
        return this.pageProperty.get('image_alt');
    }

    getData() {
        return {
            data: {
                card: this.cardType,
                site: this.twitterUserName,
                creator: this.twitterUserName,
                title: this.title,
                description: this.description,
                image: {
                    url: this.imageUrl,
                    alt: this.imageAlt
                }
            }
        }
    }

    get() {
        if (!this.config.get('twitterCardEnabled')) {
            return false;
        }

        return this.getData();
    }

}

module.exports = TwitterCardSummaryLargeImage;