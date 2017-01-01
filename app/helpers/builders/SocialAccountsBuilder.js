'use strict';

var ConfigBuilder = require('../builders/ConfigBuilder');
var SocialAccounts = require('../modules/SocialAccounts');
var SocialAccountsValidator = require('../validators/SocialAccountsValidator');

class SocialAccountsBuilder {

    constructor(config, validator) {
        this.config = config || new ConfigBuilder().build();
        this.validator = validator || new SocialAccountsValidator();
    }

    build() {
        return new SocialAccounts(this.config, this.validator);
    }

}

module.exports = SocialAccountsBuilder;