var PageUrlBuilder = require('../builders/PageUrlBuilder');

module.exports.register = function(Handlebars, options) {

    options = options || {};

    var helperName = 'helper_page_absolute_url';

    var helpers = {

        [helperName]: function(options) {
            var obj = {
                helperName: helperName,
                environment: this.environment
            };

            var pageUrl = new PageUrlBuilder(obj).build();
            return options.fn(pageUrl.getAbsoluteUrl(this.page));
        }

    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }
}