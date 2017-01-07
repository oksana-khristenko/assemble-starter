var CopyrightBuilder = require('../builders/CopyrightBuilder');
var ConfigBuilder = require('../builders/ConfigBuilder');

module.exports.register = function(Handlebars, options) {

    options = options || {};

    var helperName = 'helper_copyright';

    var helpers = {

        [helperName]: function(format, options) {
            var date = new Date(),
                currentYear = date.getFullYear(),
                config = new ConfigBuilder({helperName: helperName}).build(),
                startYear = Number(config.get('startYear')),
                copyright = new CopyrightBuilder({helperName: helperName}).build();

            return copyright.get(startYear, currentYear, format);
        }

    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }
}