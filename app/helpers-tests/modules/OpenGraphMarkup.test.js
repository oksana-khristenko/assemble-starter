'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var OpenGraphMarkup = require('../../helpers/modules/OpenGraphMarkup');
var PageConfig = require('../doubles/modules/PageConfig');
var PageProperty = require('../doubles/modules/PageProperty');
var PageImage = require('../doubles/modules/PageImage');
var PageUrl = require('../doubles/modules/PageUrl');

describe('OpenGraphMarkup', function() {

    var openGraphMarkup,
        page;

    beforeEach(function() {
        page = {};

        openGraphMarkup = new OpenGraphMarkup({
            config: new PageConfig(),
            pageProperty: new PageProperty(),
            pageImage: new PageImage(),
            pageUrl: new PageUrl(),
            page: page
        });
    });

    describe('get', function() {

        describe('open graph markup is disabled', function() {

            it('should return false', function() {
                var stub = sinon.stub(PageConfig.prototype, 'get');
                stub.withArgs('openGraphMarkupEnabled').returns(false);

                var actual = openGraphMarkup.get();

                expect(actual).to.be.false;

                PageConfig.prototype.get.restore();
            });

        });

        describe('open graph markup is enabled', function() {

            it('should return an object with correct properties and values', function() {
                var configStub = sinon.stub(PageConfig.prototype, 'get');

                configStub.withArgs('openGraphMarkupEnabled').returns(true);
                configStub.withArgs('facebookAppId').returns('app id');

                var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');

                pagePropertyStub.withArgs({page: page, propertyName: 'title'}).returns('title test');
                pagePropertyStub.withArgs({page: page, propertyName: 'short_summary'}).returns('desc test');

                var pageImageStub = sinon.stub(PageImage.prototype, 'getAbsoluteUrl');

                pageImageStub.returns('image url test');

                var pageUrlStub = sinon.stub(PageUrl.prototype, 'getAbsoluteUrl');

                pageUrlStub.returns('page url test');

                var actual = openGraphMarkup.get();

                var expected = {
                    data: [
                        {name: 'fb:app_id', description: 'app id'},
                        {name: 'og:url', description: 'page url test'},
                        {name: 'og:image', description: 'image url test'},
                        {name: 'og:title', description: 'title test'},
                        {name: 'og:description', description: 'desc test'}
                    ]
                }

                expect(actual).to.deep.equal(expected);

                PageConfig.prototype.get.restore();
                PageProperty.prototype.get.restore();
                PageImage.prototype.getAbsoluteUrl.restore();
                PageUrl.prototype.getAbsoluteUrl.restore();
            });

        });

    });

});