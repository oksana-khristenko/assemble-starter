'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var SiteUrl = require('../../helpers/modules/SiteUrl');
var Config = require('../doubles/modules/Config');

describe('Url', function() {

    describe('get', function() {

        var siteUrl;

        beforeEach(function() {
            siteUrl = new SiteUrl({config: new Config()});
        });

        it('should throw ReferenceError when site URL is not provided', function() {
            var fn = function(){
                var configStub = sinon.stub(Config.prototype, 'get');
                configStub.withArgs('siteUrl').returns(undefined);

                siteUrl.get();
            };

            expect(fn).to.throw(ReferenceError, 'siteUrl must be provided');

            Config.prototype.get.restore();
        });

        it('should return correct url when site url ends with a slash', function() {
            var url = 'http://test-site-url.com/';

            var configStub = sinon.stub(Config.prototype, 'get');
            configStub.withArgs('siteUrl').returns(url);

            var actual = siteUrl.get();

            var expected = `${url}`;

            expect(actual).to.equal(expected);

            Config.prototype.get.restore();
        });

        it('should return correct url when site url does not end with a slash', function() {
            var url = 'http://test-site-url.com';

            var configStub = sinon.stub(Config.prototype, 'get');
            configStub.withArgs('siteUrl').returns(url);

            var actual = siteUrl.get();

            var expected = `${url}/`;

            expect(actual).to.equal(expected);

            Config.prototype.get.restore();
        });

    });

});