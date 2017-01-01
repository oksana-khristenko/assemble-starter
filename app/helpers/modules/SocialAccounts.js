'use strict';

class SocialAccounts {

    constructor(config, validator) {
        this.config = config;
        this.validator = validator;
    }

    getData(accounts) {
        var arr = [];

        accounts.forEach((account) => {
            arr.push({
                account: account,
                url: this.config.get(`${account}PageUrl`)
            });
        });

        return {
            items: arr
        }
    }

    get(accounts) {
        this.validator.validate(accounts);
        return this.getData(accounts);
    }

}

module.exports = SocialAccounts;