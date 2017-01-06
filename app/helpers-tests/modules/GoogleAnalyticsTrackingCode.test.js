'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var GoogleAnalyticsTrackingCode = require('../../helpers/modules/GoogleAnalyticsTrackingCode');
var Config = require('../doubles/modules/Config');

describe('GoogleAnalyticsTrackingCode', function() {

    var googleAnalyticsTrackingCode;

    beforeEach(function() {
        googleAnalyticsTrackingCode = new GoogleAnalyticsTrackingCode({
            config: new Config()
        });
    });

    afterEach(function() {
        googleAnalyticsTrackingCode = null;
    });

    describe('get', function() {

        describe('google analytics is disabled', function() {

            it('should return false', function() {
                var stub = sinon.stub(Config.prototype, 'get');
                stub.withArgs('googleAnalyticsEnabled').returns(false);

                var actual = googleAnalyticsTrackingCode.get();

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

                var actual = googleAnalyticsTrackingCode.get();

                expect(actual).to.be.false;

                Config.prototype.get.restore();
            });

            it('should return false if googleAnalyticsDomain is undefined', function() {
                var stub = sinon.stub(Config.prototype, 'get');

                stub.withArgs('googleAnalyticsEnabled').returns(true);
                stub.withArgs('googleAnalyticsId').returns('test id');
                stub.withArgs('googleAnalyticsDomain').returns(undefined);

                var actual = googleAnalyticsTrackingCode.get();

                expect(actual).to.be.false;

                Config.prototype.get.restore();
            });

            it('should return an object with correct properties and values', function() {
                var stub = sinon.stub(Config.prototype, 'get');

                stub.withArgs('googleAnalyticsEnabled').returns(true);
                stub.withArgs('googleAnalyticsId').returns('test id');
                stub.withArgs('googleAnalyticsDomain').returns('test domain');

                var actual = googleAnalyticsTrackingCode.get();

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