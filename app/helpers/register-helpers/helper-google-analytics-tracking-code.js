var GoogleAnalyticsTrackingCodeBuilder = require('../builders/GoogleAnalyticsTrackingCodeBuilder');

module.exports.register = function(Handlebars, options) {

    options = options || {};

    var helpers = {

        helper_google_analytics_tracking: function(options) {
            var googleAnalyticsTrackingCodeBuilder = new GoogleAnalyticsTrackingCodeBuilder().build();
            return options.fn(googleAnalyticsTrackingCodeBuilder.get());
        }

    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }
}