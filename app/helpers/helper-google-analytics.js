var ConfigBuilder = require('./builders/ConfigBuilder');

module.exports.register = function(Handlebars, options) {

    options = options || {};

    var helpers = {

        helper_google_analytics: function(options) {
            var config = new ConfigBuilder().build();
            if (config.get('enableGoogleAnalytics') === true) {
                return options.fn({
                    googleAnalyticsId: config.get('googleAnalyticsId'),
                    googleAnalyticsDomain: config.get('googleAnalyticsDomain')
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