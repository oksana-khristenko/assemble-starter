var PageUrlBuilder = require('../builders/PageUrlBuilder');

module.exports.register = function(Handlebars) {

    var helperName = 'helper_current_page_absolute_url';

    var helpers = {

        [helperName]: function() {
            var obj = {
                helperName: helperName,
                environment: this.environment
            };

            var pageUrl = new PageUrlBuilder(obj).build();
            return pageUrl.getAbsoluteUrl(this.page);
        }

    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }
}