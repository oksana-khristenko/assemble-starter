'use strict';

var expect = require('chai').expect;

var PageProperty = require('../../helpers/modules/PageProperty');

describe('PageProperty', function() {

    describe('exists', function() {

        describe('Arguments validation', function() {
            var pageProperty;

            beforeEach(function() {
                pageProperty = new PageProperty();
            });

            it('should throw ReferenceError if page argument is not provided', function() {
                var fn = function(){
                    pageProperty.exists();
                };

                expect(fn).to.throw(ReferenceError, 'page is undefined');
            });

            it('should throw ReferenceError if propertyName argument is not provided', function() {
                var fn = function(){
                    pageProperty.exists({});
                };

                expect(fn).to.throw(ReferenceError, 'propertyName is undefined');
            });

            it('should throw TypeError if page argument is not an object', function() {
                var fn = function(){
                    pageProperty.exists(null, 'propName');
                };

                expect(fn).to.throw(TypeError, 'page must be an object');
            });

            it('should throw TypeError if propertyName argument is not a string', function() {
                var fn = function(){
                    pageProperty.exists({}, 5);
                };

                expect(fn).to.throw(TypeError, 'propertyName must be a string');
            });

        });

        describe('Return values', function() {

            var pageProperty;

            beforeEach(function() {
                pageProperty = new PageProperty();
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

        describe('Arguments validation', function() {

            var pageProperty;

            beforeEach(function() {
                pageProperty = new PageProperty();
            });

            it('should throw ReferenceError if page argument is not provided', function() {
                var fn = function(){
                    pageProperty.isTrue();
                };

                expect(fn).to.throw(ReferenceError, 'page is undefined');
            });

            it('should throw ReferenceError if propertyName argument is not provided', function() {
                var fn = function(){
                    pageProperty.isTrue({});
                };

                expect(fn).to.throw(ReferenceError, 'propertyName is undefined');
            });

            it('should throw TypeError if page argument is not an object', function() {
                var fn = function(){
                    pageProperty.isTrue(null, 'propName');
                };

                expect(fn).to.throw(TypeError, 'page must be an object');
            });

            it('should throw TypeError if propertyName argument is not a string', function() {
                var fn = function(){
                    pageProperty.isTrue({}, 5);
                };

                expect(fn).to.throw(TypeError, 'propertyName must be a string');
            });

        });

        describe('Return values', function() {

            var pageProperty;

            beforeEach(function() {
                pageProperty = new PageProperty();
            });

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

        describe('Arguments validation', function() {

            var pageProperty;

            beforeEach(function() {
                pageProperty = new PageProperty();
            });

            it('should throw ReferenceError if page argument is not provided', function() {
                var fn = function(){
                    pageProperty.get();
                };

                expect(fn).to.throw(ReferenceError, 'page is undefined');
            });

            it('should throw ReferenceError if propertyName argument is not provided', function() {
                var fn = function(){
                    pageProperty.get({});
                };

                expect(fn).to.throw(ReferenceError, 'propertyName is undefined');
            });

            it('should throw TypeError if page argument is not an object', function() {
                var fn = function(){
                    pageProperty.get(null, 'propName');
                };

                expect(fn).to.throw(TypeError, 'page must be an object');
            });

            it('should throw TypeError if propertyName argument is not a string', function() {
                var fn = function(){
                    pageProperty.get({}, 5);
                };

                expect(fn).to.throw(TypeError, 'propertyName must be a string');
            });

        });

        describe('Return values', function() {

            var pageProperty;

            beforeEach(function() {
                pageProperty = new PageProperty();
            });

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