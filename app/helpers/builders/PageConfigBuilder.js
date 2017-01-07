'use strict';

var ConfigBuilder = require('./ConfigBuilder');
var PagePropertyBuilder = require('./PagePropertyBuilder');
var PageConfig = require('../modules/PageConfig');

class PageConfigBuilder {

    constructor(obj) {
        this.helperName = obj && obj.helperName;
        this.environment = obj && obj.environment;

        this.config = (obj && obj.config) || new ConfigBuilder({
            helperName: this.helperName,
            environment: this.environment
        }).build();

        this.page = obj && obj.page;

        this.pageProperty = (obj && obj.pageProperty) || new PagePropertyBuilder({
            helperName: this.helperName,
            environment: this.environment
        }).build();
    }

    build() {
        return new PageConfig({
            config: this.config,
            pageProperty: this.pageProperty,
            helperName: this.helperName,
            page: this.page
        });
    }

}

module.exports = PageConfigBuilder;