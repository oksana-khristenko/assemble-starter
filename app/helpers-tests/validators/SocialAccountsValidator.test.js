'use strict';

var chai = require('chai');
var expect = chai.expect;

var SocialAccountsValidator = require('../../helpers/validators/SocialAccountsValidator');

describe('SocialAccountsValidator', function() {

    var socialAccountsValidator,
        validSocialAccounts = ['test', 'test1'],
        invalidSocialAccounts = ['sample', 'sample1'],
        helperName;

    beforeEach(function() {
        helperName = 'testHelperName';
        socialAccountsValidator = new SocialAccountsValidator({
            helperName: helperName,
            validSocialAccounts: validSocialAccounts
        });
    });

    describe('validate', function() {

        it('should throw TypeError if at least one social account is invalid', function() {
            var fn = function(){
                socialAccountsValidator.validate(invalidSocialAccounts);
            };

            expect(fn).to.throw(TypeError, `${helperName}: Invalid social accounts: ${invalidSocialAccounts.join(', ')}`);
        });

        it('should not throw when social accounts are valid', function() {
            var fn = function(){
                socialAccountsValidator.validate(validSocialAccounts);
            };

            expect(fn).to.not.throw;
        });

    });

});