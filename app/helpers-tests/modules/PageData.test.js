'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var PageData = require('../../helpers/modules/PageData');
var PageProperty = require('../../helpers/modules/PageProperty');

describe('PageData', function() {

    describe('title', function() {

        it('should return correct title', function() {
            var page = {title: 'Test Title'};
            var pageData = new PageData(page);

            var title = pageData.title;

            expect(title).to.equal('Test Title');
        });

    });

    describe('short title', function() {

        it('should return correct short title', function() {
            var page = {short_title: 'Test Short Title'};
            var pageData = new PageData(page);

            var title = pageData.shortTitle;

            expect(title).to.equal('Test Short Title');
        });

    });

    describe('summary', function() {

        it('should return correct summary', function() {
            var page = {summary: 'Test Summary'};
            var pageData = new PageData(page);

            var title = pageData.summary;

            expect(title).to.equal('Test Summary');
        });

    });

    describe('short summary', function() {

        it('should return correct short summary', function() {
            var page = {short_summary: 'Test Short Summary'};
            var pageData = new PageData(page);

            var title = pageData.shortSummary;

            expect(title).to.equal('Test Short Summary');
        });

    });

});