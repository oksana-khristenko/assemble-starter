'use strict';

var Copyright = require('../modules/Copyright');
var CopyrightValidator = require('../modules/CopyrightValidator');

class CopyrightBuilder {

    constructor(validator) {
        this.validator = validator || new CopyrightValidator();
    }

    build() {
        return new Copyright(this.validator);
    }

}

module.exports = CopyrightBuilder;