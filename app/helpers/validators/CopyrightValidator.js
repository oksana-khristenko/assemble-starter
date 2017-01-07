'use strict';

class CopyrightValidator {

    constructor(obj) {
        this.helperName = obj && obj.helperName;
    }

    validateStartYear(startYear) {
        if (typeof startYear == 'undefined') {
            throw new ReferenceError(`${this.helperName}: startYear is undefined`);
        }

        if (!Number.isInteger(startYear)) {
            throw new TypeError(`${this.helperName}: startYear must be an integer`);
        }
    }

    validateCurrentYear(currentYear) {
        if (typeof currentYear == 'undefined') {
            throw new ReferenceError(`${this.helperName}: currentYear is undefined`);
        }

        if (!Number.isInteger(currentYear)) {
            throw new TypeError(`${this.helperName}: currentYear must be an integer`);
        }
    }

    validateRange(startYear, currentYear) {
        this.validateStartYear(startYear);
        this.validateCurrentYear(currentYear);

        if (startYear > currentYear) {
            throw new RangeError(`${this.helperName}: startYear must be equal to or less than currentYear`);
        }
    }

}

module.exports = CopyrightValidator;