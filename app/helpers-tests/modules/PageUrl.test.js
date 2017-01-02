'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var PageUrl = require('../../helpers/modules/PageUrl');
var Config = require('../doubles/modules/Config');
var PageProperty = require('../doubles/modules/PageProperty');

describe('Url', function() {

    describe('getAbsoluteUrl', function() {

        var pageUrl;

        beforeEach(function() {
            pageUrl = new PageUrl({
                config: new Config(),
                page: {},
                pageProperty: new PageProperty()
            });
        });

        afterEach(function() {
            pageUrl = null;
        });

        describe('project url is not provided', function() {

            it('should throw ReferenceError when project URL is not provided', function() {
                var fn = function(){
                    var configStub = sinon.stub(Config.prototype, 'get');
                    configStub.withArgs('projectUrl').returns(undefined);

                    pageUrl.getAbsoluteUrl();
                };

                expect(fn).to.throw(ReferenceError, 'projectUrl must be provided');

                Config.prototype.get.restore();
            });

        });

        describe('project url ends with a slash', function() {

            it('should return correct url when filename is index.html and file is in the root directory', function() {
                var projectUrl = 'http://test-project-url.com/';

                var configStub = sinon.stub(Config.prototype, 'get');
                configStub.withArgs('projectUrl').returns(projectUrl);

                var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');
                pagePropertyStub.withArgs('dest').returns('public/index.html');

                var actual = pageUrl.getAbsoluteUrl();

                var expected = `${projectUrl}`;

                expect(actual).to.equal(expected);

                Config.prototype.get.restore();
                PageProperty.prototype.get.restore();
            });

            it('should return correct url when filename is index.html', function() {
                var projectUrl = 'http://test-project-url.com/';

                var configStub = sinon.stub(Config.prototype, 'get');
                configStub.withArgs('projectUrl').returns(projectUrl);

                var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');
                pagePropertyStub.withArgs('dest').returns('public/test/index.html');

                var actual = pageUrl.getAbsoluteUrl();

                var expected = `${projectUrl}test/`;

                expect(actual).to.equal(expected);

                Config.prototype.get.restore();
                PageProperty.prototype.get.restore();
            });

            it('should return correct url when filename is NOT index.html', function() {
                var projectUrl = 'http://test-project-url.com/';

                var configStub = sinon.stub(Config.prototype, 'get');
                configStub.withArgs('projectUrl').returns(projectUrl);

                var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');
                pagePropertyStub.withArgs('dest').returns('public/test/test-page.html');

                var actual = pageUrl.getAbsoluteUrl();

                var expected = `${projectUrl}test/test-page.html`;

                expect(actual).to.equal(expected);

                Config.prototype.get.restore();
                PageProperty.prototype.get.restore();
            });

        });

        describe('project url does not end with a slash', function() {

            it('should return correct url when filename is index.html and file is in the root directory', function() {
                var projectUrl = 'http://test-project-url.com';

                var configStub = sinon.stub(Config.prototype, 'get');
                configStub.withArgs('projectUrl').returns(projectUrl);

                var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');
                pagePropertyStub.withArgs('dest').returns('public/index.html');

                var actual = pageUrl.getAbsoluteUrl();

                var expected = `${projectUrl}/`;

                expect(actual).to.equal(expected);

                Config.prototype.get.restore();
                PageProperty.prototype.get.restore();
            });

            it('should return correct url when filename is index.html', function() {
                var projectUrl = 'http://test-project-url.com';

                var configStub = sinon.stub(Config.prototype, 'get');
                configStub.withArgs('projectUrl').returns(projectUrl);

                var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');
                pagePropertyStub.withArgs('dest').returns('public/test/index.html');

                var actual = pageUrl.getAbsoluteUrl();

                var expected = `${projectUrl}/test/`;

                expect(actual).to.equal(expected);

                Config.prototype.get.restore();
                PageProperty.prototype.get.restore();
            });

            it('should return correct url when filename is NOT index.html', function() {
                var projectUrl = 'http://test-project-url.com';

                var configStub = sinon.stub(Config.prototype, 'get');
                configStub.withArgs('projectUrl').returns(projectUrl);

                var pagePropertyStub = sinon.stub(PageProperty.prototype, 'get');
                pagePropertyStub.withArgs('dest').returns('public/test/test-page.html');

                var actual = pageUrl.getAbsoluteUrl();

                var expected = `${projectUrl}/test/test-page.html`;

                expect(actual).to.equal(expected);

                Config.prototype.get.restore();
                PageProperty.prototype.get.restore();
            });

        });

    });

});