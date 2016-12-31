var ConfigBuilder = require('../builders/ConfigBuilder');

module.exports.register = function(Handlebars, options) {

    options = options || {};

    var helpers = {

        helper_social_buttons: function(options) {
            var config = new ConfigBuilder().build();
            if (config.get('enableGoogleAnalytics') === true) {
                return options.fn({
                    twitterPageUrl: config.get('twitterPageUrl')
                });
            }
        }

    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }
}