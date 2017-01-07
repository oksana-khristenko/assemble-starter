'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var TwitterCardFactory = require('../../../helpers/modules/TwitterCard/Factory');
var TwitterCardSummaryLargeImage = require('../../doubles/modules/TwitterCard/SummaryLargeImage');
var PageConfig = require('../../doubles/modules/PageConfig');
var ConfigValidator = require('../../doubles/validators/ConfigValidator');
var PageProperty = require('../../doubles/modules/PageProperty');
var PagePropertyValidator = require('../../doubles/validators/PagePropertyValidator');

describe('TwitterCardFactory', function() {

    var twitterCardFactory;

    beforeEach(function() {
        var config = new PageConfig();

        twitterCardFactory = new TwitterCardFactory({
            config: config,
            twitterCard: new TwitterCardSummaryLargeImage(config, new PageProperty())
        });
    });

    afterEach(function() {
        twitterCardFactory = null;
    });

    describe('get', function() {

        describe('twitter card is disabled', function() {

            it('should return false', function() {
                var stub = sinon.stub(PageConfig.prototype, 'get');
                stub.withArgs('twitterCardEnabled').returns(false);

                var actual = twitterCardFactory.get();

                expect(actual).to.be.false;

                PageConfig.prototype.get.restore();
            });

        });

        describe('twitter card is enabled', function() {


        });

    });

});