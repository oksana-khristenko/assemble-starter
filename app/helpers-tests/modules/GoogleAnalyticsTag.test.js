'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var GoogleAnalyticsTag = require('../../helpers/modules/GoogleAnalyticsTag');
var Config = require('../doubles/modules/Config');
var ConfigValidator = require('../doubles/validators/ConfigValidator');

describe('GoogleAnalyticsTag', function() {

    var googleAnalyticsTag;

    beforeEach(function() {
        googleAnalyticsTag = new GoogleAnalyticsTag(
            new Config({}, new ConfigValidator())
        );
    });

    afterEach(function() {
        googleAnalyticsTag = null;
    });

    describe('get', function() {

        describe('google analytics is disabled', function() {

            it('should return false', function() {
                var stub = sinon.stub(Config.prototype, 'get');
                stub.withArgs('googleAnalyticsEnabled').returns(false);

                var actual = googleAnalyticsTag.get();

                expect(actual).to.be.false;

                Config.prototype.get.restore();
            });

        });

        describe('google analytics is enabled', function() {

            it('should return false if googleAnalyticsId is undefined', function() {
                var stub = sinon.stub(Config.prototype, 'get');

                stub.withArgs('googleAnalyticsEnabled').returns(true);
                stub.withArgs('googleAnalyticsId').returns(undefined);
                stub.withArgs('googleAnalyticsDomain').returns('test domain');

                var actual = googleAnalyticsTag.get();

                expect(actual).to.be.false;

                Config.prototype.get.restore();
            });

            it('should return false if googleAnalyticsDomain is undefined', function() {
                var stub = sinon.stub(Config.prototype, 'get');

                stub.withArgs('googleAnalyticsEnabled').returns(true);
                stub.withArgs('googleAnalyticsId').returns('test id');
                stub.withArgs('googleAnalyticsDomain').returns(undefined);

                var actual = googleAnalyticsTag.get();

                expect(actual).to.be.false;

                Config.prototype.get.restore();
            });

            it('should return an object with correct properties and values', function() {
                var stub = sinon.stub(Config.prototype, 'get');

                stub.withArgs('googleAnalyticsEnabled').returns(true);
                stub.withArgs('googleAnalyticsId').returns('test id');
                stub.withArgs('googleAnalyticsDomain').returns('test domain');

                var actual = googleAnalyticsTag.get();

                var expected = {
                    data: {
                        id: 'test id',
                        domain: 'test domain'
                    }
                }

                expect(actual).to.deep.equal(expected);

                Config.prototype.get.restore();
            });

        });

    });

});