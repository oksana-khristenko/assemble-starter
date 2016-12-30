'use strict';

class CopyrightValidator {

    validateStartYear(startYear) {
        if (typeof startYear == 'undefined') {
            throw new ReferenceError('startYear is undefined');
        }

        if (!Number.isInteger(startYear)) {
            throw new TypeError('startYear must be an integer');
        }
    }

    validateCurrentYear(currentYear) {
        if (typeof currentYear == 'undefined') {
            throw new ReferenceError('currentYear is undefined');
        }

        if (!Number.isInteger(currentYear)) {
            throw new TypeError('currentYear must be an integer');
        }
    }

    validateRange(startYear, currentYear) {
        this.validateStartYear(startYear);
        this.validateCurrentYear(currentYear);

        if (startYear > currentYear) {
            throw new RangeError('startYear must be equal to or less than currentYear');
        }
    }

}

module.exports = CopyrightValidator;