'use strict';

var chai = require('chai');
var expect = chai.expect;

var ConfigValidator = require('../../helpers/validators/ConfigValidator');

describe('ConfigValidator', function() {

    var configValidator,
        helperName;

    beforeEach(function() {
        helperName = 'testHelperName';
        configValidator = new ConfigValidator({helperName: helperName});
    });

    describe('validateKey', function() {

        it('should throw ReferenceError if config key is not provided', function() {
            var fn = function(){
                configValidator.validateKey();
            };

            expect(fn).to.throw(ReferenceError, `${helperName}: config key is undefined`);
        });

        it('should throw TypeError if config key is not a string', function() {
            var fn = function(){
                configValidator.validateKey([]);
            };

            expect(fn).to.throw(TypeError, `${helperName}: config key must be a string`);
        });

        it('should not throw if config key is a string', function() {
            var fn = function(){
                configValidator.validateKey('testKey');
            };

            expect(fn).to.not.throw();
        });

    });

});