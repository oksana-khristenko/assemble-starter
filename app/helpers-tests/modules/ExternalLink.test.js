'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var ExternalLink = require('../../helpers/modules/ExternalLink');
var ExternalLinkValidator = require('../doubles/validators/ExternalLinkValidator');

describe('ExternalLink', function() {

    var externalLink,
        links;

    beforeEach(function() {
        links = {
            data: [{
                id: 'test id',
                url: 'test url'
            }]
        };

        externalLink = new ExternalLink({
            helperName: 'testHelperName',
            validator: new ExternalLinkValidator(),
            data: links
        });
    });

    describe('getUrl', function() {

        it('should return correct url', function() {
            var actual = externalLink.getUrl({id: links.data[0].id});
            expect(actual).to.equal(links.data[0].url);
        });

    });

});