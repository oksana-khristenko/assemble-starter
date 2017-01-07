'use strict';

var chai = require('chai');
var expect = chai.expect;

var GoogleAnalyticsTrackingCodeValidator = require('../../helpers/validators/GoogleAnalyticsTrackingCodeValidator');

describe('GoogleAnalyticsTrackingCodeValidator', function() {

    var googleAnalyticsTrackingCodeValidator,
        helperName;

    beforeEach(function() {
        googleAnalyticsTrackingCodeValidator = new GoogleAnalyticsTrackingCodeValidator();
        helperName = 'testHelperName';
    });

    afterEach(function() {
        googleAnalyticsTrackingCodeValidator = null;
    });

    describe('validate', function() {

        it('should throw ReferenceError if argument is not provided', function() {
            var fn = function(){
                googleAnalyticsTrackingCodeValidator.validate();
            };

            expect(fn).to.throw(ReferenceError, `${this.helperName}: argument is undefined`);
        });

        it('should throw TypeError if argument is not an object', function() {
            var fn = function(){
                googleAnalyticsTrackingCodeValidator.validate(4);
            };

            expect(fn).to.throw(TypeError, `${this.helperName}: argument must be an object`);
        });

        it('should throw ReferenceError if id is not provided', function() {
            var fn = function(){
                var obj = {
                    domain: 'test',
                    enabled: true
                };
                googleAnalyticsTrackingCodeValidator.validate(obj);
            };

            expect(fn).to.throw(ReferenceError, `${this.helperName}: google analytics id is undefined`);
        });

        it('should throw TypeError if id is not a string', function() {
            var fn = function(){
                var obj = {
                    domain: 'test',
                    id: 5,
                    enabled: true
                };
                googleAnalyticsTrackingCodeValidator.validate(obj);
            };

            expect(fn).to.throw(TypeError, `${this.helperName}: google analytics id must be a string`);
        });

        it('should throw ReferenceError if domain is not provided', function() {
            var fn = function(){
                var obj = {
                    id: 'test',
                    enabled: true
                };
                googleAnalyticsTrackingCodeValidator.validate(obj);
            };

            expect(fn).to.throw(ReferenceError, `${this.helperName}: google analytics domain is undefined`);
        });

        it('should throw TypeError if domain is not a string', function() {
            var fn = function(){
                var obj = {
                    domain: 8,
                    id: 'test',
                    enabled: true
                };
                googleAnalyticsTrackingCodeValidator.validate(obj);
            };

            expect(fn).to.throw(TypeError, `${this.helperName}: google analytics domain must be a string`);
        });

        it('should throw ReferenceError if enabled is not provided', function() {
            var fn = function(){
                var obj = {
                    domain: 'test',
                    id: 'test'
                };
                googleAnalyticsTrackingCodeValidator.validate(obj);
            };

            expect(fn).to.throw(ReferenceError, `${this.helperName}: google analytics enabled is undefined`);
        });

        it('should throw TypeError if enabled is not a boolean', function() {
            var fn = function(){
                var obj = {
                    domain: 'test',
                    id: 'test',
                    enabled: 'true'
                };
                googleAnalyticsTrackingCodeValidator.validate(obj);
            };

            expect(fn).to.throw(TypeError, `${this.helperName}: google analytics enabled must be a boolean`);
        });

        it('should not throw if id, domain are string values and enabled is a boolean', function() {
            var fn = function(){
                var obj = {
                    domain: 'test',
                    id: 'test',
                    enabled: true
                };
                googleAnalyticsTrackingCodeValidator.validate(obj);
            };

            expect(fn).to.not.throw();
        });

    });

});