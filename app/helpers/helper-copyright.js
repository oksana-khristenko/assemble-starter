var CopyrightBuilder = require('./builders/CopyrightBuilder');
var Config = require('./modules/Config');
var configObj = require('../config.js');

module.exports.register = function(Handlebars, options) {

    options = options || {};

    var helpers = {

        helper_copyright: function(format, options) {
            var date = new Date(),
                currentYear = date.getFullYear(),
                config = new Config(configObj),
                startYear = Number(config.get('projectStartYear')),
                copyright = new CopyrightBuilder().build();

            return copyright.get(startYear, currentYear, format);
        }

    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }
}