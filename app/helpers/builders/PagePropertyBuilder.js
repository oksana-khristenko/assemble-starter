'use strict';

var PageProperty = require('../modules/PageProperty');
var PagePropertyValidator = require('../validators/PagePropertyValidator');

class PagePropertyBuilder {

    constructor(obj) {
        this.helperName = obj && obj.helperName;
        this.page = obj && obj.page;
        this.validator = (obj && obj.validator) || new PagePropertyValidator({helperName: this.helperName});
    }

    build() {
        return new PageProperty({
            page: this.page,
            validator: this.validator,
            helperName: this.helperName
        });
    }

}

module.exports = PagePropertyBuilder;