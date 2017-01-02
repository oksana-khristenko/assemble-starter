var TwitterCardFactoryBuilder = require('../builders/TwitterCard/FactoryBuilder');

module.exports.register = function(Handlebars, options) {

    options = options || {};

    var helpers = {

        helper_twitter_card: function(options) {
            var twitterCard = new TwitterCardFactoryBuilder({page: this.page}).build();
            return options.fn(twitterCard.get());
        }

    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }
}