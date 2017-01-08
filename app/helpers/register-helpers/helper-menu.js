var MenuBuilder = require('../builders/MenuBuilder');

module.exports.register = function(Handlebars, options) {
    options = options || {};

    var helperName = 'helper_menu';

    var helpers = {
        [helperName]: function(name, options) {
            var menuData = require(`../data/${name}.js`);

            var menu = new MenuBuilder({
                helperName: helperName,
                environment: this.environment,
                data: menuData.data,
                pages: this.pages
            }).build();

            return options.fn(menu.get());
        }
    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }
}