var config = require('./modules/config');

module.exports.register = function(Handlebars, options) {

    options = options || {};

    var helpers = {

        helper_google_analytics_script: function (options) {
            if (config.get('enableGoogleAnalytics') === true) {
                return options.fn();
            }
        }

    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }
}