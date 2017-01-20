'use strict';

class SocialAccounts {

    constructor(obj) {
        this.config = obj && obj.config;
        this.validator = obj && obj.validator;
        this.helperName = obj && obj.helperName;
    }

    getItemData(account) {
        return {
            account,
            url: this.config.get(`${account}PageUrl`),
            icon: `icon-${account}`
        }
    }

    getData(accounts) {
        var items = [];

        accounts.forEach((account) => {
            var item = this.getItemData(account);
            items.push(item);
        });

        return { items }
    }

    get(accounts) {
        this.validator.validate(accounts);
        return this.getData(accounts);
    }

}

module.exports = SocialAccounts;