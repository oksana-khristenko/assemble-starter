function validate(startYear, currentYear) {
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

exports.getCopyright = function(startYear, currentYear) {
    validate(startYear, currentYear);
    return (startYear === currentYear) ? `${currentYear}` : `${startYear} - ${currentYear}`;
};