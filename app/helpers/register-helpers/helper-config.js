var ConfigBuilder = require('../builders/ConfigBuilder');

module.exports.register = function(Handlebars, options) {
    options = options || {};

    var helperName = 'helper_config';

    function validateArguments(arguments) {
        if (arguments.length < 2) {
            throw new ReferenceError(`${helperName}: config key must be passed from template; nothing was passed`);
        }
        if (arguments.length === 2 && typeof arguments[0] != 'string') {
            var argType = typeof arguments[0];
            throw new TypeError(`${helperName}: config key passed from template must be a string; ${argType} was passed`);
        }
    }

    var helpers = {
        [helperName]: function(key, options) {
            validateArguments(arguments);

            var config = new ConfigBuilder({
                helperName: helperName,
                environment: this.environment
            }).build();

            return config.get(key);
        }
    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }
}