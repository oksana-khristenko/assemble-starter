'use strict';

class TwitterCardSummaryLargeImage {

    constructor(obj) {
        this.config = obj && obj.config;
        this.pageProperty = obj && obj.pageProperty;
        this.pageImage = obj && obj.pageImage;
    }

    get tags() {
        return [
            {name: 'twitter:card', method: 'card', mandatory: true},
            {name: 'twitter:site', method: 'site', mandatory: true},
            {name: 'twitter:creator', method: 'creator'},
            {name: 'twitter:title', method: 'title', mandatory: true},
            {name: 'twitter:description', method: 'description', mandatory: true},
            {name: 'twitter:image', method: 'imageUrl'},
            {name: 'twitter:image:alt', method: 'imageAlt'}
        ];
    }

    get card() {
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
        return this.pageImage.getAbsoluteUrl();
    }

    get imageAlt() {
        return this.pageProperty.get('image_alt');
    }

    validate() {
        this.tags.forEach((tag) => {
            if (tag.mandatory && !this[tag.method]) {
                throw new ReferenceError(`${tag.method} is required for twitter card type "${this.card}"`);
            }
        });
    }

    getData() {
        var data = [];

        this.tags.forEach((tag) => {
            this[tag.method] && data.push({name: tag.name, description: this[tag.method]});
        });

        return { data: data };
    }

    get() {
        if (!this.config.get('twitterCardEnabled')) {
            return false;
        }

        this.validate();

        return this.getData();
    }

}

module.exports = TwitterCardSummaryLargeImage;