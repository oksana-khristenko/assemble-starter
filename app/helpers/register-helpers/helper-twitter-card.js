var TwitterCard = require('../modules/TwitterCard');
var configObj = require('../../config.js');

module.exports.register = function(Handlebars, options) {

    options = options || {};

    var helpers = {

        helper_twitter_card: function(options) {
            var twitterCard = new TwitterCard(configObj, this.page);
            return options.fn(twitterCard.get());
        }

    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }
}