exports.getCopyright = function(startYear, currentYear) {
    if (!Number.isInteger(startYear)) {
        throw new TypeError('startYear must be an integer');
    }

    if (!Number.isInteger(currentYear)) {
        throw new TypeError('currentYear must be an integer');
    }

    if (startYear > currentYear) {
        throw new RangeError('startYear must be equal to or less than currentYear');
    }

    return (startYear === currentYear) ? `${currentYear}` : `${startYear} - ${currentYear}`;
};