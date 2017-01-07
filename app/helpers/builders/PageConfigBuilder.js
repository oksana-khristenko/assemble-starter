'use strict';

var ConfigBuilder = require('./ConfigBuilder');
var PagePropertyBuilder = require('./PagePropertyBuilder');
var PageConfig = require('../modules/PageConfig');

class PageConfigBuilder {

    constructor(obj) {
        this.config = (obj && obj.config) || new ConfigBuilder().build();
        this.page = obj && obj.page;
        this.pageProperty = (obj && obj.pageProperty) || new PagePropertyBuilder({page: this.page}).build();
    }

    build() {
        return new PageConfig({
            config: this.config,
            pageProperty: this.pageProperty
        });
    }

}

module.exports = PageConfigBuilder;