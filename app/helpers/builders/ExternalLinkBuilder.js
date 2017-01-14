'use strict';

var ConfigBuilder = require('./ConfigBuilder');
var PagePropertyBuilder = require('./PagePropertyBuilder');
var ExternalLink = require('../modules/ExternalLink');
var ExternalLinkValidator = require('../validators/ExternalLinkValidator');
var externalLinksData = require(`../data/examples/example-external-links.js`);

class ExternalLinkBuilder {

    constructor(obj) {
        this.helperName = obj && obj.helperName;
        this.environment = obj && obj.environment;
        this.data = (obj && obj.data) || externalLinksData;

        this.validator = (obj && obj.validator) || new ExternalLinkValidator({helperName: this.helperName});
    }

    build() {
        return new ExternalLink({
            helperName: this.helperName,
            environment: this.environment,
            validator: this.validator,
            data: this.data
        });
    }

}

module.exports = ExternalLinkBuilder;