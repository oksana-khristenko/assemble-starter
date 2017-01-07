'use strict';

var ConfigBuilder = require('./ConfigBuilder');
var SocialAccounts = require('../modules/SocialAccounts');
var SocialAccountsValidator = require('../validators/SocialAccountsValidator');

class SocialAccountsBuilder {

    constructor(obj) {
        this.helperName = obj && obj.helperName;
        this.config = (obj && obj.config) || new ConfigBuilder({helperName: this.helperName}).build();
        this.validator = (obj && obj.validator) || new SocialAccountsValidator({helperName: this.helperName});
        this.helperName = obj && obj.helperName;
    }

    build() {
        return new SocialAccounts({
            config: this.config,
            validator: this.validator,
            helperName: this.helperName
        });
    }

}

module.exports = SocialAccountsBuilder;