'use strict';

var expect = require('chai').expect;

var Config = require('../../helpers/modules/Config');

var TwitterCard = require('../../helpers/modules/TwitterCard');
var TwitterCardSummaryLargeImage = require('../../helpers/modules/TwitterCardSummaryLargeImage');

describe('TwitterCard', function() {

    describe('get', function() {

        it('should throw Error if twitterCardType is not "summary_large_image', function() {
            var fn = function(){
                var config = {
                    twitterCardEnabled: true,
                    twitterCardType: 'test'
                };
                var twitterCard = new TwitterCard(config, {});
                var twitterCardData = twitterCard.get();
            };

            expect(fn).to.throw(Error, 'Only "summary_large_image" twitter card type is supported');
        });

        it('should return false when twitter card is disabled', function() {
            var config = {
                twitterCardEnabled: false
            };
            var twitterCard = new TwitterCard(config, {});
            var twitterCardData = twitterCard.get();

            expect(twitterCardData).to.be.false;

        });


    });
});