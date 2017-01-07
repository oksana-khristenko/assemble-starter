'use strict';

class Copyright {

    constructor(obj) {
        this.validator = obj && obj.validator;
        this.helperName = obj && obj.helperName;
    }

    getCurrentYearFormat(currentYear) {
        this.validator.validateCurrentYear(currentYear);
        return `${currentYear}`;
    };

    getRangeFormat(startYear, currentYear) {
        this.validator.validateRange(startYear, currentYear);
        return (startYear == currentYear) ? `${currentYear}` : `${startYear} - ${currentYear}`;
    };

    get(startYear, currentYear, format) {
        return (format == 'range') ?
            this.getRangeFormat(startYear, currentYear) :
            this.getCurrentYearFormat(currentYear);
    }

}

module.exports = Copyright;