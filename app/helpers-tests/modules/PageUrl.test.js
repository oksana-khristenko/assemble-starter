'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var PageUrl = require('../../helpers/modules/PageUrl');
var SiteUrl = require('../doubles/modules/SiteUrl');
var PageProperty = require('../doubles/modules/PageProperty');

describe('Url', function() {

    describe('getAbsoluteUrl', function() {

        var pageUrl;

        beforeEach(function() {
            pageUrl = new PageUrl({
                siteUrl: new SiteUrl(),
                page: {},
                pageProperty: new PageProperty()
            });
        });

        afterEach(function() {
            pageUrl = null;
        });

        it('should return correct url when filename is index.html and file is in the root directory', function() {
            var url = 'http://test-project-url.com/';

            var siteUrlStub = sinon.stub(SiteUrl.prototype, 'get');
            siteUrlStub.returns(url);

            var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');
            pagePropertyStub.withArgs('dest').returns('public/index.html');

            var actual = pageUrl.getAbsoluteUrl();

            var expected = `${url}`;

            expect(actual).to.equal(expected);

            SiteUrl.prototype.get.restore();
            PageProperty.prototype.get.restore();
        });

        it('should return correct url when filename is index.html and file is NOT in the root directory', function() {
            var url = 'http://test-project-url.com/';

            var siteUrlStub = sinon.stub(SiteUrl.prototype, 'get');
            siteUrlStub.returns(url);

            var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');
            pagePropertyStub.withArgs('dest').returns('public/test/index.html');

            var actual = pageUrl.getAbsoluteUrl();

            var expected = `${url}test/`;

            expect(actual).to.equal(expected);

            SiteUrl.prototype.get.restore();
            PageProperty.prototype.get.restore();
        });

        it('should return correct url when filename is NOT index.html', function() {
            var url = 'http://test-project-url.com/';

            var siteUrlStub = sinon.stub(SiteUrl.prototype, 'get');
            siteUrlStub.returns(url);

            var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');
            pagePropertyStub.withArgs('dest').returns('public/test/test-page.html');

            var actual = pageUrl.getAbsoluteUrl();

            var expected = `${url}test/test-page.html`;

            expect(actual).to.equal(expected);

            SiteUrl.prototype.get.restore();
            PageProperty.prototype.get.restore();
        });

    });

});