'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var SocialAccounts = require('../../helpers/modules/SocialAccounts');
var Config = require('../doubles/modules/Config');
var SocialAccountsValidator = require('../doubles/validators/SocialAccountsValidator');

describe('SocialAccounts', function() {

    var socialAccounts;

    beforeEach(function() {
        socialAccounts = new SocialAccounts({
            config: new Config(),
            validator: new SocialAccountsValidator()
        });
    });

    afterEach(function() {
        socialAccounts = null;
    });

    describe('get', function() {

        it('should call validate() of SocialAccountsValidator with correct arguments', function() {
            var accounts = ['test', 'sample'];
            var spy = sinon.spy(SocialAccountsValidator.prototype, 'validate');

            socialAccounts.get(accounts);

            expect(spy.withArgs(accounts)).calledOnce;

            SocialAccountsValidator.prototype.validate.restore();
        });

        it('should call get() of Config with correct arguments', function() {
            var accounts = ['test', 'sample'];
            var spy = sinon.spy(Config.prototype, 'get');

            socialAccounts.get(accounts);

            expect(spy.withArgs('testPageUrl')).calledOnce;
            expect(spy.withArgs('samplePageUrl')).calledOnce;

            Config.prototype.get.restore();
        });

        it('should return an object with correct properties and values', function() {
            var accounts = ['test', 'sample'];
            var stub = sinon.stub(Config.prototype, 'get');

            stub.onCall(0).returns('test1');
            stub.onCall(1).returns('test2');

            var actual = socialAccounts.get(accounts);

            var expected = {
                items: [
                    {
                        account: 'test',
                        url: 'test1',
                        icon: 'icon-test'
                    },
                    {
                        account: 'sample',
                        url: 'test2',
                        icon: 'icon-sample'
                    }
                ]
            }

            expect(actual).to.deep.equal(expected);

            Config.prototype.get.restore();
        });

    });

});