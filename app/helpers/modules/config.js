var config = require('../../config.js');

function validate(key) {
    if (!key) {
        throw new TypeError('config key is not provided');
    }
}

exports.get = function(key) {
    validate(key);
    return config[key];
}