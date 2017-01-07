'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var PageProperty = require('../../helpers/modules/PageProperty');
var PagePropertyValidator = require('../doubles/validators/PagePropertyValidator');

describe('PageProperty', function() {

    var validator;

    beforeEach(function() {
        validator = new PagePropertyValidator();
    });

    afterEach(function() {
        validator = null;
    });

    describe('exists', function() {

        it('should call validatePage() of PagePropertyValidator with correct arguments', function() {
            var page = {'prop': ''};
            var spy = sinon.spy(PagePropertyValidator.prototype, 'validatePage');

            var pageProperty = new PageProperty({
                page: page,
                validator: validator
            });

            pageProperty.exists('prop');

            expect(spy.withArgs(page)).calledOnce;

            PagePropertyValidator.prototype.validatePage.restore();
        });

        it('should call validatePropertyName() of PagePropertyValidator with correct arguments', function() {
            var page = {'prop': ''};
            var spy = sinon.spy(PagePropertyValidator.prototype, 'validatePropertyName');

            var pageProperty = new PageProperty({
                page: page,
                validator: validator
            });

            pageProperty.exists('prop');

            expect(spy.withArgs('prop')).calledOnce;

            PagePropertyValidator.prototype.validatePropertyName.restore();
        });

        it('should return true if propertyName exists in the page object', function() {
            var page = { testPropName: '' };

            var pageProperty = new PageProperty({
                page: page,
                validator: validator
            });

            var propertyExists = pageProperty.exists('testPropName');
            expect(propertyExists).to.equal(true);
        });

        it('should return true if propertyName exists in the page.data object', function() {
            var page = { data: { testPropName: '' } };

            var pageProperty = new PageProperty({
                page: page,
                validator: validator
            });

            var propertyExists = pageProperty.exists('testPropName');
            expect(propertyExists).to.equal(true);
        });

        it('should return false if propertyName does not exist in both page and page.data objects', function() {
            var page = {data: {}};

            var pageProperty = new PageProperty({
                page: page,
                validator: validator
            });

            var propertyExists = pageProperty.exists('testPropName');
            expect(propertyExists).to.equal(false);
        });

    });

    describe('isTrue', function() {

        it('should return true if propertyName exists in the page object and is true', function() {
            var page = { testPropName: true };

            var pageProperty = new PageProperty({
                page: page,
                validator: validator
            });

            var propertyEqualTrue = pageProperty.isTrue('testPropName');
            expect(propertyEqualTrue).to.equal(true);
        });

        it('should return true if propertyName exists in the page.data object and is true', function() {
            var page = { data: { testPropName: true }};

            var pageProperty = new PageProperty({
                page: page,
                validator: validator
            });

            var propertyEqualTrue = pageProperty.isTrue('testPropName');
            expect(propertyEqualTrue).to.equal(true);
        });

        it('should return true if propertyName is equal to false in page and is equal to true in page.data', function() {
            var page = {
                testPropName: true,
                data: { testPropName: false }
            };

            var pageProperty = new PageProperty({
                page: page,
                validator: validator
            });

            var propertyEqualTrue = pageProperty.isTrue('testPropName');
            expect(propertyEqualTrue).to.equal(true);
        });

        it('should return true if propertyName is equal to true in page and is equal to false in page.data', function() {
            var page = {
                testPropName: false,
                data: { testPropName: true }
            };

            var pageProperty = new PageProperty({
                page: page,
                validator: validator
            });

            var propertyEqualTrue = pageProperty.isTrue('testPropName');
            expect(propertyEqualTrue).to.equal(true);
        });

        it('should return false if propertyName does not exist in both page and page.data objects', function() {
            var page = {data: {}};

            var pageProperty = new PageProperty({
                page: page,
                validator: validator
            });

            var propertyEqualTrue = pageProperty.isTrue('testPropName');
            expect(propertyEqualTrue).to.equal(false);
        });

        it('should return false if propertyName is equal to false in both page and page.data', function() {
            var page = {
                testPropName: false,
                data: { testPropName: false }
            };

            var pageProperty = new PageProperty({
                page: page,
                validator: validator
            });

            var propertyEqualTrue = pageProperty.isTrue('testPropName');
            expect(propertyEqualTrue).to.equal(false);
        });

    });

    describe('get', function() {

        it('should return false if property does not exist in both page.data and page objects', function() {
            var page = {
                data: {}
            };

            var pageProperty = new PageProperty({
                page: page,
                validator: validator
            });

            var propertyValue = pageProperty.get('testPropName');
            expect(propertyValue).to.equal(false);
        });

        it('should return correct property value if property exists in page object but not in page.data object', function() {
            var page = {
                testPropName: 'testPropVal',
                data: {}
            };

            var pageProperty = new PageProperty({
                page: page,
                validator: validator
            });

            var propertyValue = pageProperty.get('testPropName');
            expect(propertyValue).to.equal('testPropVal');
        });

        it('should return correct property value if property exists in page.data object but not in page object', function() {
            var page = {
                data: { testPropName: 'testPropVal' }
            };

            var pageProperty = new PageProperty({
                page: page,
                validator: validator
            });

            var propertyValue = pageProperty.get('testPropName');
            expect(propertyValue).to.equal('testPropVal');
        });

        it('should return correct property value if property exists in both page and page.data objects', function() {
            var page = {
                testPropName: 'testPropVal_1',
                data: { testPropName: 'testPropVal_2' }
            };

            var pageProperty = new PageProperty({
                page: page,
                validator: validator
            });

            var propertyValue = pageProperty.get('testPropName');
            expect(propertyValue).to.equal('testPropVal_1');
        });

    });

});