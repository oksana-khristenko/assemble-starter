'use strict';

var chai = require('chai');
var expect = chai.expect;

var SocialAccountsValidator = require('../../helpers/validators/SocialAccountsValidator');

describe('SocialAccountsValidator', function() {

    var socialAccountsValidator;

    beforeEach(function() {
        socialAccountsValidator = new SocialAccountsValidator(['test', 'test1']);
    });

    afterEach(function() {
        socialAccountsValidator = null;
    });

    describe('validate', function() {

        it('should throw TypeError if at least one social account is invalid', function() {
            var fn = function(){
                socialAccountsValidator.validate(['sample', 'sample1']);
            };

            expect(fn).to.throw(TypeError, 'Invalid social accounts: sample, sample1');
        });

    });

});