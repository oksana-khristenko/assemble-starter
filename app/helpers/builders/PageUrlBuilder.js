'use strict';

var PageUrl = require('../modules/PageUrl');
var PagePropertyBuilder = require('./PagePropertyBuilder');
var ConfigBuilder = require('./ConfigBuilder');

class PageUrlBuilder {

    constructor(obj) {
        this.config = (obj && obj.config) || new ConfigBuilder().build();
        this.page = obj && obj.page;
        this.pageProperty = (obj && obj.pageProperty) || new PagePropertyBuilder({page: this.page}).build();
    }

    build() {
        return new PageUrl({
            config: this.config,
            page: this.page,
            pageProperty: this.pageProperty
        });
    }

}

module.exports = PageUrlBuilder;