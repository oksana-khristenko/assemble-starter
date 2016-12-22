var expect = require("chai").expect;

var config = require('../helpers/modules/config');

describe('copyright', function() {

    'use strict';

    describe('Arguments validation', function() {

        it('should throw Error if settings object does not have property "project"', function() {
            var fn = function(){
                var settings = {};
                config.getStartYear(settings);
            };

            expect(fn).to.throw(Error, 'settings object must have property "project"');
        });

        it('should throw Error if settings.project object does not have property "startYear"', function() {
            var fn = function(){
                var settings = {project: {}};
                config.getStartYear(settings);
            };

            expect(fn).to.throw(Error, 'settings.project object must have property "startYear"');
        });

    });

    describe('Return values', function() {

        it('should return correct startYear', function() {
            var settings = {project: {startYear: '2018'}};
            var startYear = config.getStartYear(settings);

            expect(startYear).to.equal('2018');
        });

    });

});