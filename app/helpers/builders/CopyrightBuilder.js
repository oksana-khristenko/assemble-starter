'use strict';

var Copyright = require('../modules/Copyright');
var CopyrightValidator = require('../validators/CopyrightValidator');

class CopyrightBuilder {

    constructor(obj) {
        this.helperName = obj && obj.helperName;
        this.validator = (obj && obj.validator) || new CopyrightValidator({helperName: this.helperName});
    }

    build() {
        return new Copyright({
            validator: this.validator,
            helperName: this.helperName
        });
    }

}

module.exports = CopyrightBuilder;