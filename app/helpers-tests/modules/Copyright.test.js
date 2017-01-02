'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var Copyright = require('../../helpers/modules/Copyright');
var CopyrightValidator = require('../doubles/validators/CopyrightValidator');

describe('Copyright', function() {

    var copyright,
        validator;

    beforeEach(function() {
        validator = new CopyrightValidator();
        copyright = new Copyright(validator);
    });

    afterEach(function() {
        copyright = null;
        validator = null;
    });

    describe('get', function() {

        describe('format not provided', function() {

            it('should call validateCurrentYear() of CopyrightValidator with correct arguments', function() {
                var currentYear = 2018;
                var spy = sinon.spy(CopyrightValidator.prototype, 'validateCurrentYear');

                copyright.get(2013, currentYear);

                expect(spy.withArgs(currentYear)).calledOnce;

                CopyrightValidator.prototype.validateCurrentYear.restore();
            });

            it('should return correct text', function() {
                var startYear = 2013,
                    currentYear = 2018,
                    expected = `${currentYear}`;

                var actual = copyright.get(startYear, currentYear);

                expect(actual).to.equal(expected);
            });

        });

        describe('format "current"', function() {

            var format;

            beforeEach(function() {
                format = 'current';
            });

            it('should call validateCurrentYear() of CopyrightValidator with correct arguments', function() {
                var currentYear = 2018;
                var spy = sinon.spy(CopyrightValidator.prototype, 'validateCurrentYear');

                copyright.get(2013, currentYear, format);

                expect(spy.withArgs(currentYear)).calledOnce;

                CopyrightValidator.prototype.validateCurrentYear.restore();
            });

            it('should return correct text', function() {
                var startYear = 2013,
                    currentYear = 2018,
                    expected = `${currentYear}`;

                var actual = copyright.get(startYear, currentYear, format);

                expect(actual).to.equal(expected);
            });

        });

        describe('format "range"', function() {

            var format;

            beforeEach(function() {
                format = 'range';
            });

            it('should call validateRange() of CopyrightValidator with correct arguments', function() {
                var startYear = 2013,
                    currentYear = 2018;

                var spy = sinon.spy(CopyrightValidator.prototype, 'validateRange');

                copyright.get(startYear, currentYear, format);

                expect(spy.withArgs(startYear, currentYear)).calledOnce;

                CopyrightValidator.prototype.validateRange.restore();
            });

            it('should return correct text if startYear is equal to currentYear', function() {
                var startYear = 2018,
                    currentYear = 2018,
                    expectedText = `${currentYear}`;

                var actualText = copyright.get(startYear, currentYear, format);

                expect(actualText).to.equal(expectedText);
            });

            it('should return correct text if currentYear is greater than startYear', function() {
                var startYear = 2014,
                    currentYear = 2020,
                    expectedText = `${startYear} - ${currentYear}`;

                var actualText = copyright.get(startYear, currentYear, format);

                expect(actualText).to.equal(expectedText);
            });

        });

    });

});