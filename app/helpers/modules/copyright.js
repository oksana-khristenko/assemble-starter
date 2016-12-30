'use strict';

var CopyrightValidator = require('./CopyrightValidator');

'use strict';

class Copyright {

    constructor() {
        this.validator = new CopyrightValidator();
    }

    getCurrentYearTemplate(currentYear) {
        this.validator.validateCurrentYear(currentYear);
        return `${currentYear}`;
    };

    getRangeTemplate(startYear, currentYear) {
        this.validator.validateRange(startYear, currentYear);
        return (startYear == currentYear) ? `${currentYear}` : `${startYear} - ${currentYear}`;
    };

    get(startYear, currentYear, format) {
        return (format == 'range') ?
            this.getRangeTemplate(startYear, currentYear) :
            this.getCurrentYearTemplate(currentYear);
    }

}

module.exports = Copyright;