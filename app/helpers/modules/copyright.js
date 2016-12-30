function validate(startYear, currentYear) {
    if (typeof startYear == 'undefined') {
        throw new ReferenceError('startYear is undefined');
    }

    if (typeof currentYear == 'undefined') {
        throw new ReferenceError('currentYear is undefined');
    }

    if (!Number.isInteger(startYear)) {
        throw new TypeError('startYear must be an integer');
    }

    if (!Number.isInteger(currentYear)) {
        throw new TypeError('currentYear must be an integer');
    }

    if (startYear > currentYear) {
        throw new RangeError('startYear must be equal to or less than currentYear');
    }
}

exports.get = function(startYear, currentYear) {
    validate(startYear, currentYear);
    return (startYear === currentYear) ? `${currentYear}` : `${startYear} - ${currentYear}`;
};