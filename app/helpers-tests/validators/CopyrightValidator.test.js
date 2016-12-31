'use strict';

var chai = require('chai');
var expect = chai.expect;

var CopyrightValidator = require('../../helpers/validators/CopyrightValidator');

describe('CopyrightValidator', function() {

    var copyrightValidator;

    beforeEach(function() {
        copyrightValidator = new CopyrightValidator();
    });

    afterEach(function() {
        copyrightValidator = null;
    });

    describe('validateCurrentYear', function() {

        it('should throw ReferenceError if currentYear is not provided', function() {
            var fn = function(){
                copyrightValidator.validateCurrentYear();
            };

            expect(fn).to.throw(ReferenceError, 'currentYear is undefined');
        });

        it('should throw TypeError if currentYear is not an integer', function() {
            var fn = function(){
                copyrightValidator.validateCurrentYear('2016');
            };

            expect(fn).to.throw(TypeError, 'currentYear must be an integer');
        });

        it('should not throw if currentYear is an integer', function() {
            var fn = function(){
                copyrightValidator.validateCurrentYear(2018);
            };

            expect(fn).to.not.throw();
        });

    });

    describe('validateRange', function() {

        it('should throw ReferenceError if startYear is not provided', function() {
            var fn = function(){
                copyrightValidator.validateRange();
            };

            expect(fn).to.throw(ReferenceError, 'startYear is undefined');
        });

        it('should throw TypeError if startYear is not an integer', function() {
            var fn = function(){
                copyrightValidator.validateRange('2016', 2018);
            };

            expect(fn).to.throw(TypeError, 'startYear must be an integer');
        });

        it('should throw ReferenceError if currentYear is not provided', function() {
            var fn = function(){
                copyrightValidator.validateRange(2017);
            };

            expect(fn).to.throw(ReferenceError, 'currentYear is undefined');
        });

        it('should throw TypeError if currentYear is not an integer', function() {
            var fn = function(){
                copyrightValidator.validateRange(2018, '2027');
            };

            expect(fn).to.throw(TypeError, 'currentYear must be an integer');
        });

        it('should throw RangeError if currentYear argument is less than startYear', function() {
            var fn = function(){
                copyrightValidator.validateRange(2029, 2020);
            };

            expect(fn).to.throw(RangeError, 'startYear must be equal to or less than currentYear');
        });

        it('should not throw RangeError if currentYear argument is greater than startYear', function() {
            var fn = function(){
                copyrightValidator.validateRange(2018, 2020);
            };

            expect(fn).to.not.throw();
        });

        it('should not throw if currentYear argument is equal to startYear', function() {
            var fn = function(){
                copyrightValidator.validateRange(2018, 2018);
            };

            expect(fn).to.not.throw();
        });

    });

});