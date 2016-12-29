var Config = require('./modules/Config');

module.exports.register = function(Handlebars, options) {
    options = options || {};

    var helpers = {
        helper_config: function(key) {
            var config = new Config();
            return config.get(key);
        }
    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }
}