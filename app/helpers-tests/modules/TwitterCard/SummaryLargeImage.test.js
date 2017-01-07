'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var TwitterCardSummaryLargeImage = require('../../../helpers/modules/TwitterCard/SummaryLargeImage');
var PageConfig = require('../../doubles/modules/PageConfig');
var PageProperty = require('../../doubles/modules/PageProperty');
var PageImage = require('../../doubles/modules/PageImage');

describe('TwitterCardSummaryLargeImage', function() {

    var twitterCardSummaryLargeImage,
        page;

    beforeEach(function() {
        page = {};

        twitterCardSummaryLargeImage = new TwitterCardSummaryLargeImage({
            config: new PageConfig(),
            pageProperty: new PageProperty(),
            pageImage: new PageImage(),
            page: page
        });
    });

    describe('get', function() {

        describe('twitter card is disabled', function() {

            it('should return false', function() {
                var stub = sinon.stub(PageConfig.prototype, 'get');
                stub.withArgs('twitterCardEnabled').returns(false);

                var actual = twitterCardSummaryLargeImage.get();

                expect(actual).to.be.false;

                PageConfig.prototype.get.restore();
            });

        });

        describe('twitter card is enabled', function() {

            it('should return an object with correct properties and values', function() {
                var configStub = sinon.stub(PageConfig.prototype, 'get');

                configStub.withArgs('twitterCardEnabled').returns(true);
                configStub.withArgs('twitterUserName').returns('twitter user name test');

                var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');

                pagePropertyStub.withArgs({page: page, propertyName: 'title'}).returns('title test');
                pagePropertyStub.withArgs({page: page, propertyName: 'short_summary'}).returns('desc test');
                pagePropertyStub.withArgs({page: page, propertyName: 'image_alt'}).returns('image alt test');

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

                PageConfig.prototype.get.restore();
                PageProperty.prototype.get.restore();
                PageImage.prototype.getAbsoluteUrl.restore();
            });

            it('should not have "twitter:image" or "twitter:image:alt" if page image url is falsy', function() {
                var configStub = sinon.stub(PageConfig.prototype, 'get');

                configStub.withArgs('twitterCardEnabled').returns(true);
                configStub.withArgs('twitterUserName').returns('twitter user name test');

                var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');

                pagePropertyStub.withArgs({page: page, propertyName: 'title'}).returns('title test');
                pagePropertyStub.withArgs({page: page, propertyName: 'short_summary'}).returns('desc test');
                pagePropertyStub.withArgs({page: page, propertyName: 'image_alt'}).returns('image alt test');

                var pageImageStub = sinon.stub(PageImage.prototype, 'getAbsoluteUrl');

                pageImageStub.returns(false);

                var actual = twitterCardSummaryLargeImage.get();

                var expected = {
                    data: [
                        {name: 'twitter:card', description: 'summary_large_image'},
                        {name: 'twitter:site', description: 'twitter user name test'},
                        {name: 'twitter:creator', description: 'twitter user name test'},
                        {name: 'twitter:title', description: 'title test'},
                        {name: 'twitter:description', description: 'desc test'}
                    ]
                }

                expect(actual).to.deep.equal(expected);

                PageConfig.prototype.get.restore();
                PageProperty.prototype.get.restore();
                PageImage.prototype.getAbsoluteUrl.restore();
            });

            it('should not have "twitter:image:alt" if page image alt is falsy', function() {
                var configStub = sinon.stub(PageConfig.prototype, 'get');

                configStub.withArgs('twitterCardEnabled').returns(true);
                configStub.withArgs('twitterUserName').returns('twitter user name test');

                var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');

                pagePropertyStub.withArgs({page: page, propertyName: 'title'}).returns('title test');
                pagePropertyStub.withArgs({page: page, propertyName: 'short_summary'}).returns('desc test');

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
                        {name: 'twitter:image', description: 'image url test'}
                    ]
                }

                expect(actual).to.deep.equal(expected);

                PageConfig.prototype.get.restore();
                PageProperty.prototype.get.restore();
                PageImage.prototype.getAbsoluteUrl.restore();
            });

        });

    });

});