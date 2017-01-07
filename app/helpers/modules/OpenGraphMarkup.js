'use strict';

class OpenGraphMarkup {

    constructor(obj) {
        this.config = obj && obj.config;
        this.pageProperty = obj && obj.pageProperty;
        this.pageImage = obj && obj.pageImage;
        this.pageUrl = obj && obj.pageUrl;
        this.helperName = obj && obj.helperName;
        this.page = obj && obj.page;
    }

    get tags() {
        var tags = [];

        if (this.facebookAppId) {
            tags = tags.concat(this.facebookAppIdTag);
        }

        if (this.pageUrl) {
            tags = tags.concat(this.pageUrlTag);
        }

        if (this.imageUrl) {
            tags = tags.concat(this.imageUrlTag);
        }

        if (this.title) {
            tags = tags.concat(this.titleTag);
        }

        if (this.description) {
            tags = tags.concat(this.descriptionTag);
        }

        return tags;
    }

    get facebookAppIdTag() {
        return {name: 'fb:app_id', method: 'facebookAppId'};
    }

    get pageUrlTag() {
        return {name: 'og:url', method: 'pageAbsoluteUrl'};
    }

    get imageUrlTag() {
        return {name: 'og:image', method: 'imageUrl'};
    }

    get titleTag() {
        return {name: 'og:title', method: 'title'};
    }

    get descriptionTag() {
        return {name: 'og:description', method: 'description'};
    }

    get facebookAppId() {
        return this.config.get('facebookAppId');
    }

    get pageAbsoluteUrl() {
        return this.pageUrl.getAbsoluteUrl();
    }

    get title() {
        return this.pageProperty.get({
            propertyName: 'title',
            page: this.page
        });
    }

    get description() {
        return this.pageProperty.get({
            propertyName: 'short_summary',
            page: this.page
        });
    }

    get imageUrl() {
        return this.pageImage.getAbsoluteUrl();
    }

    getData() {
        var data = [];

        this.tags.forEach((tag) => {
            this[tag.method] && data.push({name: tag.name, description: this[tag.method]});
        });

        return { data: data };
    }

    get() {
        if (!this.config.get('openGraphMarkupEnabled')) {
            return false;
        }

        return this.getData();
    }

}

module.exports = OpenGraphMarkup;
