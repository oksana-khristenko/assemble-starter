'use strict';

var chai = require('chai');
var expect = chai.expect;

var PagePropertyValidator = require('../../helpers/validators/PagePropertyValidator');

describe('PagePropertyValidator', function() {

    var pagePropertyValidator,
        helperName;

    beforeEach(function() {
        helperName = 'testHelperName';
        pagePropertyValidator = new PagePropertyValidator({helperName: helperName});
    });

    describe('validatePage', function() {

        it('should throw ReferenceError if page is not provided', function() {
            var fn = function(){
                pagePropertyValidator.validatePage();
            };

            expect(fn).to.throw(ReferenceError, `${helperName}: page is undefined`);
        });

        it('should throw TypeError if page is not an object', function() {
            var fn = function(){
                pagePropertyValidator.validatePage('');
            };

            expect(fn).to.throw(TypeError, `${helperName}: page must be an object`);
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

            expect(fn).to.throw(ReferenceError, `${helperName}: propertyName is undefined`);
        });

        it('should throw TypeError if propertyName is not a string', function() {
            var fn = function(){
                pagePropertyValidator.validatePropertyName(7);
            };

            expect(fn).to.throw(TypeError, `${helperName}: propertyName must be a string`);
        });

        it('should not throw if propertyName is a string', function() {
            var fn = function(){
                pagePropertyValidator.validatePropertyName('test');
            };

            expect(fn).to.not.throw();
        });

    });

});