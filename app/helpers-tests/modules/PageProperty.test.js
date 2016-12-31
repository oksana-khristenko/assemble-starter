'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var PageProperty = require('../../helpers/modules/PageProperty');
var PagePropertyValidator = require('../doubles/PagePropertyValidator');

describe('PageProperty', function() {

    var pageProperty,
        validator;

    beforeEach(function() {
        validator = new PagePropertyValidator();
        pageProperty = new PageProperty(validator);
    });

    afterEach(function() {
        pageProperty = null;
        validator = null;
    });

    describe('exists', function() {

        describe('Return values', function() {

            it('should call validatePage() of PagePropertyValidator with correct arguments', function() {
                var page = {};
                var spy = sinon.spy(PagePropertyValidator.prototype, 'validatePage');

                pageProperty.get(page, 'prop');

                expect(spy.withArgs(page)).calledOnce;

                PagePropertyValidator.prototype.validatePage.restore();
            });

            it('should call validatePropertyName() of PagePropertyValidator with correct arguments', function() {
                var page = {};
                var spy = sinon.spy(PagePropertyValidator.prototype, 'validatePropertyName');

                pageProperty.get(page, 'prop');

                expect(spy.withArgs('prop')).calledOnce;

                PagePropertyValidator.prototype.validatePropertyName.restore();
            });

            it('should return true if propertyName exists in the page object', function() {
                var propertyExists = pageProperty.exists({ testPropName: '' }, 'testPropName');
                expect(propertyExists).to.equal(true);
            });

            it('should return true if propertyName exists in the page.data object', function() {
                var propertyExists = pageProperty.exists({ data: { testPropName: '' }}, 'testPropName');
                expect(propertyExists).to.equal(true);
            });

            it('should return false if propertyName does not exist in both page and page.data objects', function() {
                var propertyExists = pageProperty.exists({data: {}}, 'testPropName');
                expect(propertyExists).to.equal(false);
            });

        });

    });

    describe('isTrue', function() {

        describe('Return values', function() {

            it('should return true if propertyName exists in the page object and is true', function() {
                var propertyEqualTrue = pageProperty.isTrue({ testPropName: true }, 'testPropName');
                expect(propertyEqualTrue).to.equal(true);
            });

            it('should return true if propertyName exists in the page.data object and is true', function() {
                var propertyEqualTrue = pageProperty.isTrue({ data: { testPropName: true }}, 'testPropName');
                expect(propertyEqualTrue).to.equal(true);
            });

            it('should return true if propertyName is equal to false in page and is equal to true in page.data', function() {
                var obj = {
                    testPropName: true,
                    data: { testPropName: false }
                };
                var propertyEqualTrue = pageProperty.isTrue(obj, 'testPropName');
                expect(propertyEqualTrue).to.equal(true);
            });

            it('should return true if propertyName is equal to true in page and is equal to false in page.data', function() {
                var obj = {
                    testPropName: false,
                    data: { testPropName: true }
                };
                var propertyEqualTrue = pageProperty.isTrue(obj, 'testPropName');
                expect(propertyEqualTrue).to.equal(true);
            });

            it('should return false if propertyName does not exist in both page and page.data objects', function() {
                var propertyEqualTrue = pageProperty.isTrue({data: {}}, 'testPropName');
                expect(propertyEqualTrue).to.equal(false);
            });

            it('should return false if propertyName is equal to false in both page and page.data', function() {
                var obj = {
                    testPropName: false,
                    data: { testPropName: false }
                };
                var propertyEqualTrue = pageProperty.isTrue(obj, 'testPropName');
                expect(propertyEqualTrue).to.equal(false);
            });
        });

    });

    describe('get', function() {

        describe('Return values', function() {

            it('should return false if property does not exist in both page.data and page objects', function() {
                var obj = {
                    data: {}
                };
                var propertyValue = pageProperty.get(obj, 'testPropName');
                expect(propertyValue).to.equal(false);
            });

            it('should return correct property value if property exists in page object but not in page.data object', function() {
                var obj = {
                    testPropName: 'testPropVal',
                    data: {}
                };
                var propertyValue = pageProperty.get(obj, 'testPropName');
                expect(propertyValue).to.equal('testPropVal');
            });

            it('should return correct property value if property exists in page.data object but not in page object', function() {
                var obj = {
                    data: { testPropName: 'testPropVal' }
                };
                var propertyValue = pageProperty.get(obj, 'testPropName');
                expect(propertyValue).to.equal('testPropVal');
            });

            it('should return correct property value if property exists in both page and page.data objects', function() {
                var obj = {
                    testPropName: 'testPropVal_1',
                    data: { testPropName: 'testPropVal_2' }
                };
                var propertyValue = pageProperty.get(obj, 'testPropName');
                expect(propertyValue).to.equal('testPropVal_1');
            });

        });

    });

});