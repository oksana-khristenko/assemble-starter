var _ = require('lodash');

function validateArguments(page, propertyName) {
    if (typeof page == 'undefined') {
        throw new ReferenceError('page is undefined');
    }

    if (typeof propertyName == 'undefined') {
        throw new ReferenceError('propertyName is undefined');
    }

    if (typeof page != 'object' || page === null) {
        throw new TypeError('page must be an object');
    }

    if (typeof propertyName != 'string') {
        throw new TypeError('propertyName must be a string');
    }
}

exports.isTrue = function(page, propertyName) {
    validateArguments(page, propertyName);

    if (page.hasOwnProperty(propertyName) && (page[propertyName] === true)) {
        return true;
    }
    else if (page.hasOwnProperty('data') && page.data.hasOwnProperty(propertyName) && (page.data[propertyName] === true)) {
        return true;
    }
    else {
        return false;
    }
};

exports.exists = function(page, propertyName) {
    validateArguments(page, propertyName);

    if (page.hasOwnProperty(propertyName) || page.data.hasOwnProperty(propertyName)) {
        return true;
    }

    return false;
};

exports.get = function(page, propertyName) {
    validateArguments(page, propertyName);

    if (page.hasOwnProperty(propertyName)) {
        return page[propertyName];
    }
    else if (page.hasOwnProperty('data') && page.data.hasOwnProperty(propertyName)) {
        return page.data[propertyName];
    }
    else {
        return false;
    }
};