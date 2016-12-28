"use strict";
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var pageType = require('../helpers/modules/pageType');
var pageProperty = require('../helpers/modules/pageProperty');

describe('pageType', function() {

    'use strict';

    describe('is', function() {

        describe('Arguments validation', function() {

            it('should throw ReferenceError if page argument is not provided', function() {
                var fn = function(){
                    pageType.is();
                };

                expect(fn).to.throw(ReferenceError, 'page is undefined');
            });

            it('should throw ReferenceError if pageType argument is not provided', function() {
                var fn = function(){
                    pageType.is({});
                };

                expect(fn).to.throw(ReferenceError, 'pageType is undefined');
            });

            it('should throw TypeError if page argument is not an object', function() {
                var fn = function(){
                    pageType.is(null, '7');
                };

                expect(fn).to.throw(TypeError, 'page must be an object');
            });

            it('should throw TypeError if pageType argument is not a string', function() {
                var fn = function(){
                    pageType.is({}, 6);
                };

                expect(fn).to.throw(TypeError, 'pageType must be a string');
            });

        });

        describe('Return values', function() {

            it('should call pageProperty.isTrue() with correct arguments', function() {
                var page = {};
                var spy = sinon.spy(pageProperty, 'isTrue');

                pageType.is(page, 'currentPage');

                expect(spy).to.have.been.calledOnce;
                expect(spy).to.have.been.calledWith(page, 'isCurrentPage');

                pageProperty.isTrue.restore();
            });

            it('should return true when pageProperty.isTrue() returns true', function() {
                var page = {};
                var stub = sinon.stub(pageProperty, 'isTrue');
                stub.returns(true);

                var bool = pageType.is(page, 'article');
                expect(bool).to.be.equal(true);

                pageProperty.isTrue.restore();
            });

            it('should return false when pageProperty.isTrue() returns false', function() {
                var page = {};
                var stub = sinon.stub(pageProperty, 'isTrue');
                stub.returns(false);

                var bool = pageType.is(page, 'section');
                expect(bool).to.be.equal(false);

                pageProperty.isTrue.restore();
            });

        });

    });

});