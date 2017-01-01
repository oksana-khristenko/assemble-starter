'use strict';

var chai = require('chai');
var expect = chai.expect;

var GoogleAnalyticsTagValidator = require('../../helpers/validators/GoogleAnalyticsTagValidator');

describe('GoogleAnalyticsTagValidator', function() {

    var googleAnalyticsTagValidator;

    beforeEach(function() {
        googleAnalyticsTagValidator = new GoogleAnalyticsTagValidator();
    });

    afterEach(function() {
        googleAnalyticsTagValidator = null;
    });

    describe('validate', function() {

        it('should throw ReferenceError if argument is not provided', function() {
            var fn = function(){
                googleAnalyticsTagValidator.validate();
            };

            expect(fn).to.throw(ReferenceError, 'argument is undefined');
        });

        it('should throw TypeError if argument is not an object', function() {
            var fn = function(){
                googleAnalyticsTagValidator.validate(4);
            };

            expect(fn).to.throw(TypeError, 'argument must be an object');
        });

        it('should throw ReferenceError if id is not provided', function() {
            var fn = function(){
                var obj = {
                    domain: 'test',
                    enabled: true
                };
                googleAnalyticsTagValidator.validate(obj);
            };

            expect(fn).to.throw(ReferenceError, 'google analytics id is undefined');
        });

        it('should throw TypeError if id is not a string', function() {
            var fn = function(){
                var obj = {
                    domain: 'test',
                    id: 5,
                    enabled: true
                };
                googleAnalyticsTagValidator.validate(obj);
            };

            expect(fn).to.throw(TypeError, 'google analytics id must be a string');
        });

        it('should throw ReferenceError if domain is not provided', function() {
            var fn = function(){
                var obj = {
                    id: 'test',
                    enabled: true
                };
                googleAnalyticsTagValidator.validate(obj);
            };

            expect(fn).to.throw(ReferenceError, 'google analytics domain is undefined');
        });

        it('should throw TypeError if domain is not a string', function() {
            var fn = function(){
                var obj = {
                    domain: 8,
                    id: 'test',
                    enabled: true
                };
                googleAnalyticsTagValidator.validate(obj);
            };

            expect(fn).to.throw(TypeError, 'google analytics domain must be a string');
        });

        it('should throw ReferenceError if enabled is not provided', function() {
            var fn = function(){
                var obj = {
                    domain: 'test',
                    id: 'test'
                };
                googleAnalyticsTagValidator.validate(obj);
            };

            expect(fn).to.throw(ReferenceError, 'google analytics enabled is undefined');
        });

        it('should throw TypeError if enabled is not a boolean', function() {
            var fn = function(){
                var obj = {
                    domain: 'test',
                    id: 'test',
                    enabled: 'true'
                };
                googleAnalyticsTagValidator.validate(obj);
            };

            expect(fn).to.throw(TypeError, 'google analytics enabled must be a boolean');
        });

        it('should not throw if id, domain are string values and enabled is a boolean', function() {
            var fn = function(){
                var obj = {
                    domain: 'test',
                    id: 'test',
                    enabled: true
                };
                googleAnalyticsTagValidator.validate(obj);
            };

            expect(fn).to.not.throw();
        });

    });

});