'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var TwitterCardSummaryLargeImage = require('../../../helpers/modules/TwitterCard/SummaryLargeImage');
var Config = require('../../doubles/modules/Config');
var PageProperty = require('../../doubles/modules/PageProperty');
var PageImage = require('../../doubles/modules/PageImage');

describe('TwitterCardSummaryLargeImage', function() {

    var twitterCardSummaryLargeImage;

    beforeEach(function() {
        twitterCardSummaryLargeImage = new TwitterCardSummaryLargeImage({
            config: new Config(),
            pageProperty: new PageProperty(),
            pageImage: new PageImage()
        });
    });

    afterEach(function() {
        twitterCardSummaryLargeImage = null;
    });

    describe('get', function() {

        describe('twitter card is disabled', function() {

            it('should return false if twitter card is disabled', function() {
                var stub = sinon.stub(Config.prototype, 'get');
                stub.withArgs('twitterCardEnabled').returns(false);

                var actual = twitterCardSummaryLargeImage.get();

                expect(actual).to.be.false;

                Config.prototype.get.restore();
            });

        });

        describe('twitter card is enabled', function() {

            it('should return an object with correct properties and values', function() {
                var configStub = sinon.stub(Config.prototype, 'get');

                configStub.withArgs('twitterCardEnabled').returns(true);
                configStub.withArgs('twitterUserName').returns('twitter user name test');

                var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');

                pagePropertyStub.withArgs('title').returns('title test');
                pagePropertyStub.withArgs('short_summary').returns('desc test');
                pagePropertyStub.withArgs('image_alt').returns('image alt test');

                var pageImageStub = sinon.stub(PageImage.prototype, 'getAbsoluteUrl');

                pageImageStub.returns('image url test');

                var actual = twitterCardSummaryLargeImage.get();

                var expected = {
                    data: [
                        {name: 'twitter:card', description: 'summary_large_image'},
                        {name: 'twitter:site', description: 'twitter user name test'},
                        {name: 'twitter:creator', description: 'twitter user name test'},
                        {name: 'twitter:title', description: 'title test'},
                        {name: 'twitter:description', description: 'desc test'},
                        {name: 'twitter:image', description: 'image url test'},
                        {name: 'twitter:image:alt', description: 'image alt test'}
                    ]
                }

                expect(actual).to.deep.equal(expected);

                Config.prototype.get.restore();
                PageProperty.prototype.get.restore();
                PageImage.prototype.getAbsoluteUrl.restore();
            });

        });

    });

});