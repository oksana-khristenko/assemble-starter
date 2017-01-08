'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var PageFetcher = require('../../helpers/modules/PageFetcher');
var PageProperty = require('../doubles/modules/PageProperty');

describe('PageFetcher', function() {

    describe('getById', function() {

        it('should return correct page', function() {
            var testId = 'test id';

            var page = {id: testId},
                page1 = {id: 'test id 2'},
                pages = [page, page1];

            var stub = sinon.stub(PageProperty.prototype, 'get');
            stub.withArgs({page: page, propertyName: 'id'}).returns(testId);

            var pageFetcher = new PageFetcher({
                pages: pages,
                pageProperty: new PageProperty()
            });

            var actual = pageFetcher.getById(testId);

            expect(actual).to.deep.equal(page);

            PageProperty.prototype.get.restore();
        });

    });

});