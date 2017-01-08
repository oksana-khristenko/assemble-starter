'use strict';

class SocialAccounts {

    constructor(obj) {
        this.config = obj && obj.config;
        this.validator = obj && obj.validator;
        this.helperName = obj && obj.helperName;
    }

    getData(accounts) {
        var arr = [];

        accounts.forEach((account) => {
            arr.push({
                account: account,
                url: this.config.get(`${account}PageUrl`),
                icon: `icon-${account}`
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