var pageProperty = require('./pageProperty');

function validateArguments(page, pageType) {

    if (typeof page == 'undefined') {
        throw new ReferenceError('page is undefined');
    }

    if (typeof pageType == 'undefined') {
        throw new ReferenceError('pageType is undefined');
    }

    if (typeof page != 'object' || page === null) {
        throw new TypeError('page must be an object');
    }

    if (typeof pageType != 'string') {
        throw new TypeError('pageType must be a string');
    }
}

exports.is = function(page, pageType) {
    validateArguments(page, pageType);

    var propertyName = `is_${pageType}`;
    return pageProperty.isTrue(page, propertyName);
};