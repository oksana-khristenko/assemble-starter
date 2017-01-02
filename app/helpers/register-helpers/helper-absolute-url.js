var PageUrlBuilder = require('../builders/PageUrlBuilder');

module.exports.register = function(Handlebars, options) {

    options = options || {};

    var helpers = {

        helper_absolute_url: function(options) {
            var pageUrl = new PageUrlBuilder({page: this.page}).build();
            return options.fn(pageUrl.getAbsoluteUrl());
        }

    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }
}