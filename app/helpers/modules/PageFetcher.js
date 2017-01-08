'use strict';

class PageFetcher {

    constructor(obj) {
        this.pages = obj && obj.pages;
        this.helperName = obj && obj.helperName;
        this.pageProperty = obj && obj.pageProperty;
    }

    getById(id) {
        var relevantPage;

        this.pages.forEach((page) => {
            if (this.pageProperty.get({page: page, propertyName: 'id'}) === id) {
                relevantPage = page;
                return;
            }
        });

        return relevantPage;
    }

}

module.exports = PageFetcher;