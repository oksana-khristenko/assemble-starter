var PageUrlBuilder = require('../builders/PageUrlBuilder');
var PageFetcherBuilder = require('../builders/PageFetcherBuilder');

module.exports.register = function(Handlebars, options) {

    options = options || {};

    var helperName = 'helper_page_url';

    var helpers = {

        [helperName]: function(id, options) {
            var pageFetcher = new PageFetcherBuilder({
                helperName: helperName,
                environment: this.environment,
                pages: this.pages
            }).build();

            var pageUrl = new PageUrlBuilder({
                helperName: helperName,
                environment: this.environment
            }).build();

            var page = pageFetcher.getById(id);

            return pageUrl.getRootRelativeUrl(page);
        }

    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }
}