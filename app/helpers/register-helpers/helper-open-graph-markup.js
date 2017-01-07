var OpenGraphMarkupBuilder = require('../builders/OpenGraphMarkupBuilder');

module.exports.register = function(Handlebars, options) {

    options = options || {};

    var helperName = 'helper_open_graph_markup';

    var helpers = {

        [helperName]: function(options) {
            var obj = {
                page: this.page,
                helperName: helperName,
                environment: this.environment
            };

            var openGraphMarkup = new OpenGraphMarkupBuilder(obj).build();

            return options.fn(openGraphMarkup.get());
        }

    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }
}