var config = {
    projectStartYear: '2014', // e.g. 2018
    projectName: 'Project Name', // e.g. Twitter
    projectKey: 'Project Key', // e.g. twitter.com
    projectUrl: 'Project Url', // e.g. https://twitter.com/
    projectDisplayUrl: 'Project Display Url', // e.g. twitter.com
    twitterUserName: 'Twitter User Name', // e.g. @twitter
    twitterPageUrl: 'Twitter Page Url', // e.g. https://twitter.com/twitter
    facebookPageUrl: 'Facebook Page Url', // e.g. https://facebook.com/twitter,
    googleAnalyticsId: 'Google Analytics Id', // e.g. UA-000000-01
    googleAnalyticsDomain: 'Google Analytics Domain', // e.g. twitter.com
    enableGoogleAnalytics: false // e.g. false
}

function validate(key) {
    if (!key) {
        throw new TypeError('config key is not provided');
    }
}

exports.get = function(key) {
    validate(key);
    return config[key];
}