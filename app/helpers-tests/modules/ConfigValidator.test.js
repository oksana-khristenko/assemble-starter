'use strict';

var chai = require('chai');
var expect = chai.expect;

var ConfigValidator = require('../../helpers/modules/ConfigValidator');

describe('ConfigValidator', function() {

    var configValidator;

    beforeEach(function() {
        configValidator = new ConfigValidator();
    });

    afterEach(function() {
        configValidator = null;
    });

    describe('validateKey', function() {

        it('should throw ReferenceError if config key is not provided', function() {
            var fn = function(){
                configValidator.validateKey();
            };

            expect(fn).to.throw(ReferenceError, 'config key is undefined');
        });

        it('should throw TypeError if currentYear is not a string', function() {
            var fn = function(){
                configValidator.validateKey([]);
            };

            expect(fn).to.throw(TypeError, 'config key must be a string');
        });

        it('should not throw if currentYear is a string', function() {
            var fn = function(){
                configValidator.validateKey('testKey');
            };

            expect(fn).to.not.throw();
        });

    });

});