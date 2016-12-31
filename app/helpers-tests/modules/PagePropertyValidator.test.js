'use strict';

var chai = require('chai');
var expect = chai.expect;

var PagePropertyValidator = require('../../helpers/modules/PagePropertyValidator');

describe('PagePropertyValidator', function() {

    var pagePropertyValidator;

    beforeEach(function() {
        pagePropertyValidator = new PagePropertyValidator();
    });

    afterEach(function() {
        pagePropertyValidator = null;
    });

    describe('validatePage', function() {

        it('should throw ReferenceError if page is not provided', function() {
            var fn = function(){
                pagePropertyValidator.validatePage();
            };

            expect(fn).to.throw(ReferenceError, 'page is undefined');
        });

        it('should throw TypeError if page is not an object', function() {
            var fn = function(){
                pagePropertyValidator.validatePage('');
            };

            expect(fn).to.throw(TypeError, 'page must be an object');
        });

        it('should not throw if page is an object', function() {
            var fn = function(){
                pagePropertyValidator.validatePage({});
            };

            expect(fn).to.not.throw();
        });

    });

    describe('validatePropertyName', function() {

        it('should throw ReferenceError if propertyName is not provided', function() {
            var fn = function(){
                pagePropertyValidator.validatePropertyName();
            };

            expect(fn).to.throw(ReferenceError, 'propertyName is undefined');
        });

        it('should throw TypeError if propertyName is not a string', function() {
            var fn = function(){
                pagePropertyValidator.validatePropertyName(7);
            };

            expect(fn).to.throw(TypeError, 'propertyName must be a string');
        });

        it('should not throw if propertyName is a string', function() {
            var fn = function(){
                pagePropertyValidator.validatePropertyName('test');
            };

            expect(fn).to.not.throw();
        });

    });

});