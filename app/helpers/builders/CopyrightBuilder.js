'use strict';

var Copyright = require('../modules/Copyright');
var CopyrightValidator = require('../modules/CopyrightValidator');

class CopyrightBuilder {

    constructor() {
        this.validator = new CopyrightValidator();
    }

    build() {
        return new Copyright(this.validator);
    }

}

module.exports = CopyrightBuilder;