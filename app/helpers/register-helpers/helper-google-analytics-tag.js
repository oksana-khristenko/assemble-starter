var GoogleAnalyticsTagBuilder = require('../builders/GoogleAnalyticsTagBuilder');

module.exports.register = function(Handlebars, options) {

    options = options || {};

    var helpers = {

        helper_google_analytics_tag: function(options) {
            var googleAnalyticsTagBuilder = new GoogleAnalyticsTagBuilder().build();
            return options.fn(googleAnalyticsTagBuilder.get());
        }

    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }
}