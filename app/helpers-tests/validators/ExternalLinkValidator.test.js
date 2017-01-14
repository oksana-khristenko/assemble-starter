'use strict';

var chai = require('chai');
var expect = chai.expect;

var ExternalLinkValidator = require('../../helpers/validators/ExternalLinkValidator');

describe('ExternalLinkValidator', function() {

    var externalLinkValidator,
        helperName;

    beforeEach(function() {
        helperName = 'testHelperName';
        externalLinkValidator = new ExternalLinkValidator({
            helperName: helperName
        });
    });

    describe('validateGetUrl', function() {

        it('should throw ReferenceError if argument is not provided', function() {
            var fn = function(){
                externalLinkValidator.validateGetUrl();
            };

            expect(fn).to.throw(ReferenceError, `${helperName}: ExternalLink.prototype.getUrl() expects 1 argument, but none is passed`);
        });

        it('should throw TypeError if argument type is not Object', function() {
            var fn = function(){
                externalLinkValidator.validateGetUrl('test');
            };

            expect(fn).to.throw(TypeError, `${helperName}: ExternalLink.prototype.getUrl() expects argument type to be object, but string is passed`);
        });

        it('should throw TypeError if argument does not have property "id"', function() {
            var fn = function(){
                externalLinkValidator.validateGetUrl({});
            };

            expect(fn).to.throw(TypeError, `${helperName}: ExternalLink.prototype.getUrl() expects argument to have property "id"`);
        });

        it('should throw ReferenceError if property "id" is not a string', function() {
            var fn = function(){
                externalLinkValidator.validateGetUrl({id: true});
            };

            expect(fn).to.throw(TypeError, `${helperName}: ExternalLink.prototype.getUrl() expects property "id" to have a string value, but boolean was passed`);
        });

        it('should not throw if property "id" is a string', function() {
            var fn = function(){
                externalLinkValidator.validateGetUrl({id: 'test id'});
            };

            expect(fn).to.not.throw;
        });

    });

});