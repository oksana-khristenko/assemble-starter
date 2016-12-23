var expect = require("chai").expect;

var copyright = require('../helpers/modules/copyright');

describe('copyright', function() {

    'use strict';

    describe('Arguments validation', function() {

        it('should throw ReferenceError if startYear argument is not provided', function() {
            var fn = function(){
                copyright.getText();
            };

            expect(fn).to.throw(ReferenceError, 'startYear is undefined');
        });

        it('should throw ReferenceError if currentYear argument is not provided', function() {
            var fn = function(){
                copyright.getText(2020);
            };

            expect(fn).to.throw(ReferenceError, 'currentYear is undefined');
        });

        it('should throw TypeError if startYear argument is not an integer', function() {
            var fn = function(){
                copyright.getText('2019', 2023);
            };

            expect(fn).to.throw(TypeError, 'startYear must be an integer');
        });

        it('should throw TypeError if currentYear argument is not an integer', function() {
            var fn = function(){
                copyright.getText(2017, '2019');
            };

            expect(fn).to.throw(TypeError, 'currentYear must be an integer');
        });

        it('should throw RangeError if currentYear argument is less than startYear', function() {
            var fn = function(){
                copyright.getText(2028, 2020);
            };

            expect(fn).to.throw(RangeError, 'startYear must be equal to or less than currentYear');

        });

    });

    describe('Return values', function() {

        it('should return correct text if startYear is equal to currentYear', function() {
            var startYear = 2018,
                currentYear = 2018,
                expectedText = `${currentYear}`;

            var actualText = copyright.getText(startYear, currentYear);

            expect(actualText).to.equal(expectedText);
        });

        it('should return correct text if startYear is less than currentYear', function() {
            var startYear = 2014,
                currentYear = 2020,
                expectedText = `${startYear} - ${currentYear}`;

            var actualText = copyright.getText(startYear, currentYear);

            expect(actualText).to.equal(expectedText);
        });

    });

});