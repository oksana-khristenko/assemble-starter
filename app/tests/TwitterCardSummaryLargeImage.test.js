'use strict';

var expect = require('chai').expect;

var TwitterCardSummaryLargeImage = require('../helpers/modules/TwitterCardSummaryLargeImage');

describe('TwitterCardSummaryLargeImage', function() {

    describe('get', function() {

        it('should return false when twitter card is disabled', function() {
            var config = {
                twitterCardEnabled: false
            };

            var twitterCard = new TwitterCardSummaryLargeImage(config).get();
            expect(twitterCard).to.be.false;

        });

        it('should return value of language type Object when twitter card is enabled', function() {
            var config = {
                twitterCardEnabled: true,
                twitterCardType: 'summary_large_image',
                twitterUserName: 'test'
            };

            var twitterCard = new TwitterCardSummaryLargeImage(config).get();
            expect(twitterCard).to.be.an('object');
        });
    });
});