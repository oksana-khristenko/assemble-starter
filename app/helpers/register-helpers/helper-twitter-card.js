var TwitterCardFactoryBuilder = require('../builders/TwitterCard/FactoryBuilder');

module.exports.register = function(Handlebars, options) {

    options = options || {};

    var helperName = 'helper_twitter_card';

    var helpers = {

        [helperName]: function(options) {
            var obj = {
                page: this.page,
                helperName: helperName
            };

            var twitterCard = new TwitterCardFactoryBuilder(obj).build();
            return options.fn(twitterCard.get());
        }

    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }
}