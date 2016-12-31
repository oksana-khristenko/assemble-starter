'use strict';

require("babel-polyfill");

class SocialAccountsValidator {

    constructor(validAccounts) {
        this.validAccounts = validAccounts || this.defaultValidAccounts;
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
            throw new TypeError(`Invalid social accounts: ${invalidAccounts}`);
        }
    }

}

module.exports = SocialAccountsValidator;