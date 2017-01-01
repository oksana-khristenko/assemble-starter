var SocialAccountsBuilder = require('../builders/SocialAccountsBuilder');

module.exports.register = function(Handlebars, options) {

    options = options || {};

    var helpers = {

        helper_social_accounts: function(socialAccounts, options) {
            socialAccounts = socialAccounts.split(',');

            var socialAccountsBuilder = new SocialAccountsBuilder().build();
            return options.fn(socialAccountsBuilder.get(socialAccounts));
        }

    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }
}