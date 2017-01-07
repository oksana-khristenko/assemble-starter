'use strict';

var ConfigBuilder = require('./ConfigBuilder');
var PagePropertyBuilder = require('./PagePropertyBuilder');
var PageConfig = require('../modules/PageConfig');

class PageConfigBuilder {

    constructor(obj) {
        this.helperName = obj && obj.helperName;
        this.config = (obj && obj.config) || new ConfigBuilder({helperName: this.helperName}).build();
        this.page = obj && obj.page;

        this.pageProperty = (obj && obj.pageProperty) || new PagePropertyBuilder({
            page: this.page,
            helperName: this.helperName
        }).build();
    }

    build() {
        return new PageConfig({
            config: this.config,
            pageProperty: this.pageProperty,
            helperName: this.helperName
        });
    }

}

module.exports = PageConfigBuilder;