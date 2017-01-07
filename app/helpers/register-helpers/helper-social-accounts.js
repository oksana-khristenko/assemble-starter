var SocialAccountsBuilder = require('../builders/SocialAccountsBuilder');

module.exports.register = function(Handlebars, options) {

    options = options || {};

    var helperName = 'helper_social_accounts';

    var helpers = {

        [helperName]: function(socialAccounts, options) {
            socialAccounts = socialAccounts.split(',');

            var socialAccountsBuilder = new SocialAccountsBuilder({
                helperName: helperName,
                environment: this.environment
            }).build();

            return options.fn(socialAccountsBuilder.get(socialAccounts));
        }

    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }
}