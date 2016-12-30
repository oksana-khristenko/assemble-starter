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

    getRangeTemplate(startYear, currentYear, type) {
        this.validator.validateRange(startYear, currentYear);
        return (startYear == currentYear) ? `${currentYear}` : `${startYear} - ${currentYear}`;
    };

    get(startYear, currentYear, type) {
        switch(type) {
            case 'current':
                return this.getCurrentYearTemplate(currentYear);
                break;
            case 'range':
                return this.getRangeTemplate(startYear, currentYear);
                break;
            default:
                return this.getRangeTemplate(startYear, currentYear);
        }
    }

}

module.exports = Copyright;