var copyright = require('./modules/copyright');
var Config = require('./modules/Config');

module.exports.register = function(Handlebars, options) {

    options = options || {};

    var helpers = {

        helper_copyright: function() {
            var date = new Date(),
                currentYear = date.getFullYear(),
                config = new Config(),
                startYear = Number(config.get('projectStartYear'));

            return copyright.getText(startYear, currentYear);
        }

    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }
}