var GoogleAnalyticsTrackingCodeBuilder = require('../builders/GoogleAnalyticsTrackingCodeBuilder');

module.exports.register = function(Handlebars, options) {

    options = options || {};

    var helperName = 'helper_google_analytics_tracking_code';

    var helpers = {

        [helperName]: function(options) {
            var googleAnalyticsTrackingCodeBuilder = new GoogleAnalyticsTrackingCodeBuilder({helperName: helperName}).build();
            return options.fn(googleAnalyticsTrackingCodeBuilder.get());
        }

    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }
}