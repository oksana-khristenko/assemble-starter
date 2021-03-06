'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var PageImage = require('../../helpers/modules/PageImage');
var SiteUrl = require('../doubles/modules/SiteUrl');
var PageProperty = require('../doubles/modules/PageProperty');

describe('PageImage', function() {

    describe('getAbsoluteUrl', function() {

        var pageImage,
            page;

        beforeEach(function() {
            page = {};

            pageImage = new PageImage({
                siteUrl: new SiteUrl(),
                pageProperty: new PageProperty(),
                page: page
            });
        });

        it('should return correct image url', function() {
            var url = 'http://test-site-url.com/',
                image = 'image.png';

            var siteUrlStub = sinon.stub(SiteUrl.prototype, 'get');
            siteUrlStub.returns(url);

            var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');
            pagePropertyStub.withArgs({page: page, propertyName: 'image_url'}).returns(image);

            var actual = pageImage.getAbsoluteUrl();

            var expected = `${url}${image}`;

            expect(actual).to.equal(expected);

            SiteUrl.prototype.get.restore();
            PageProperty.prototype.get.restore();
        });

        it('should return false when PageProperty returns a falsy value', function() {
            var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');
            pagePropertyStub.withArgs({page: page, propertyName: 'image_url'}).returns(undefined);

            var actual = pageImage.getAbsoluteUrl();

            var expected = false;

            expect(actual).to.equal(expected);

            PageProperty.prototype.get.restore();
        });

        it('should return false when SiteUrl returns a falsy value', function() {
            var siteUrlStub = sinon.stub(SiteUrl.prototype, 'get');
            siteUrlStub.returns(undefined);

            var actual = pageImage.getAbsoluteUrl();

            var expected = false;

            expect(actual).to.equal(expected);

            SiteUrl.prototype.get.restore();
        });

    });

});