var OpenGraphMarkupBuilder = require('../builders/OpenGraphMarkupBuilder');

module.exports.register = function(Handlebars, options) {

    options = options || {};

    var helpers = {

        helper_open_graph_markup: function(options) {
            var obj = {
                page: this.page,
                helperName: options.name
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