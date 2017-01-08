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

        var pageUrl,
            page;

        beforeEach(function() {
            page = {};

            pageUrl = new PageUrl({
                siteUrl: new SiteUrl(),
                pageProperty: new PageProperty()
            });
        });

        describe('public', function() {

            it('should return correct url when filename is index.html and file is in the root directory', function() {
                var url = 'http://test-project-url.com/';

                var siteUrlStub = sinon.stub(SiteUrl.prototype, 'get');
                siteUrlStub.returns(url);

                var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');
                pagePropertyStub.withArgs({page: page, propertyName: 'dest'}).returns('public/index.html');

                var actual = pageUrl.getAbsoluteUrl(page);

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
                pagePropertyStub.withArgs({page: page, propertyName: 'dest'}).returns('public/test/index.html');

                var actual = pageUrl.getAbsoluteUrl(page);

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
                pagePropertyStub.withArgs({page: page, propertyName: 'dest'}).returns('public/test/test-page.html');

                var actual = pageUrl.getAbsoluteUrl(page);

                var expected = `${url}test/test-page.html`;

                expect(actual).to.equal(expected);

                SiteUrl.prototype.get.restore();
                PageProperty.prototype.get.restore();
            });

        });

        describe('dist', function() {
            it('should return correct url when filename is index.html and file is in the root directory', function() {
                var url = 'http://test-project-url.com/';

                var siteUrlStub = sinon.stub(SiteUrl.prototype, 'get');
                siteUrlStub.returns(url);

                var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');
                pagePropertyStub.withArgs({page: page, propertyName: 'dest'}).returns('dist/index.html');

                var actual = pageUrl.getAbsoluteUrl(page);

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
                pagePropertyStub.withArgs({page: page, propertyName: 'dest'}).returns('dist/test/index.html');

                var actual = pageUrl.getAbsoluteUrl(page);

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
                pagePropertyStub.withArgs({page: page, propertyName: 'dest'}).returns('dist/test/test-page.html');

                var actual = pageUrl.getAbsoluteUrl(page);

                var expected = `${url}test/test-page.html`;

                expect(actual).to.equal(expected);

                SiteUrl.prototype.get.restore();
                PageProperty.prototype.get.restore();
            });
        });

    });

    describe('getRootRelativeUrl', function() {

        var pageUrl,
            page;

        beforeEach(function() {
            page = {};

            pageUrl = new PageUrl({
                siteUrl: new SiteUrl(),
                pageProperty: new PageProperty(),
                page: page
            });
        });

        describe('public', function() {

            it('should return correct url when filename is index.html and file is in the root directory', function() {
                var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');
                pagePropertyStub.withArgs({page: page, propertyName: 'dest'}).returns('public/index.html');

                var actual = pageUrl.getRootRelativeUrl(page);

                var expected = '/';

                expect(actual).to.equal(expected);
                PageProperty.prototype.get.restore();
            });

            it('should return correct url when filename is index.html and file is NOT in the root directory', function() {
                var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');
                pagePropertyStub.withArgs({page: page, propertyName: 'dest'}).returns('public/test/index.html');

                var actual = pageUrl.getRootRelativeUrl(page);

                var expected = '/test/';

                expect(actual).to.equal(expected);
                PageProperty.prototype.get.restore();
            });

            it('should return correct url when filename is NOT index.html', function() {
                var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');
                pagePropertyStub.withArgs({page: page, propertyName: 'dest'}).returns('public/test/test-page.html');

                var actual = pageUrl.getRootRelativeUrl(page);

                var expected = '/test/test-page.html';

                expect(actual).to.equal(expected);

                PageProperty.prototype.get.restore();
            });

        });

        describe('dist', function() {
            it('should return correct url when filename is index.html and file is in the root directory', function() {
                var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');
                pagePropertyStub.withArgs({page: page, propertyName: 'dest'}).returns('dist/index.html');

                var actual = pageUrl.getRootRelativeUrl(page);

                var expected = '/';

                expect(actual).to.equal(expected);
                PageProperty.prototype.get.restore();
            });

            it('should return correct url when filename is index.html and file is NOT in the root directory', function() {
                var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');
                pagePropertyStub.withArgs({page: page, propertyName: 'dest'}).returns('dist/test/index.html');

                var actual = pageUrl.getRootRelativeUrl(page);

                var expected = '/test/';

                expect(actual).to.equal(expected);

                PageProperty.prototype.get.restore();
            });

            it('should return correct url when filename is NOT index.html', function() {
                var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');
                pagePropertyStub.withArgs({page: page, propertyName: 'dest'}).returns('dist/test/test-page.html');

                var actual = pageUrl.getRootRelativeUrl(page);

                var expected = '/test/test-page.html';

                expect(actual).to.equal(expected);
                PageProperty.prototype.get.restore();
            });
        });

    });

});