'use strict';

require("babel-polyfill");

class SocialAccountsValidator {

    constructor(obj) {
        this.validAccounts = (obj && obj.validAccounts) || this.defaultValidAccounts;
        this.helperName = obj && obj.helperName;
    }

    get defaultValidAccounts() {
        return [
            'twitter',
            'facebook',
            'instagram',
            'pintrest',
            'linkedin',
            'googleplus'
        ];
    }

    isValidAccountType(account) {
        return this.validAccounts.includes(account);
    }

    getInvalidAccountTypes(accounts) {
        var invalidAccounts = [];

        accounts.forEach((account) => {
            this.isValidAccountType(account) || invalidAccounts.push(account);
        });

        return invalidAccounts;
    }

    validate(accounts) {
        var invalidAccounts = this.getInvalidAccountTypes(accounts);

        if (invalidAccounts.length > 0) {
            invalidAccounts = invalidAccounts.join(', ');
            throw new TypeError(`${this.helperName}: Invalid social accounts: ${invalidAccounts}`);
        }
    }

}

module.exports = SocialAccountsValidator;