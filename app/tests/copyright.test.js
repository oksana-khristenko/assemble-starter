var expect = require("chai").expect;

var copyrightHelper = require('../helpers/modules/copyright');

describe('copyright', function() {

    'use strict';

    describe('Arguments validation', function() {

        it('should throw TypeError if startYear argument is not an integer', function() {
            var fn = function(){
                copyrightHelper.getCopyright('2019', 2023);
            };

            expect(fn).to.throw(TypeError, 'startYear must be an integer');
        });

        it('should throw TypeError if currentYear argument is not an integer', function() {
            var fn = function(){
                copyrightHelper.getCopyright(2017, '2019');
            };

            expect(fn).to.throw(TypeError, 'currentYear must be an integer');
        });

        it('should throw RangeError if currentYear argument is less than startYear', function() {
            var fn = function(){
                copyrightHelper.getCopyright(2028, 2020);
            };

            expect(fn).to.throw(RangeError, 'startYear must be equal to or less than currentYear');

        });

    });

    describe('Return values', function() {

        it('should return correct text if startYear is equal to currentYear', function() {
            var startYear = 2018,
                currentYear = 2018,
                text = `${currentYear}`;

            var copyright = copyrightHelper.getCopyright(startYear, currentYear);

            expect(copyright).to.equal(text);
        });

        it('should return correct text if startYear is less than currentYear', function() {
            var startYear = 2014,
                currentYear = 2020,
                text = `${startYear} - ${currentYear}`;

            var copyright = copyrightHelper.getCopyright(startYear, currentYear);

            expect(copyright).to.equal(text);
        });

    });

});