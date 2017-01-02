'use strict';

var PagePropertyBuilder = require('../builders/PagePropertyBuilder');

class PageType {

    validatePage(page, pageType) {
        if (typeof page == 'undefined') {
            throw new ReferenceError('page is undefined');
        }

        if (typeof page != 'object' || page === null) {
            throw new TypeError('page must be an object');
        }
    }

    validatePageType(pageType) {
        if (typeof pageType == 'undefined') {
            throw new ReferenceError('pageType is undefined');
        }

        if (typeof pageType != 'string') {
            throw new TypeError('pageType must be a string');
        }
    }

    getPropertyName(pageType) {
        this.validatePageType(pageType);
        return `is${pageType[0].toUpperCase()}${pageType.slice(1)}`;
    }

    is(page, pageType) {
        this.validatePage(page);
        this.validatePageType(pageType);

        var propertyName = this.getPropertyName(pageType);

        var pageProperty = new PagePropertyBuilder({page: page}).build();
        return pageProperty.isTrue(propertyName);
    }

};

module.exports = PageType;