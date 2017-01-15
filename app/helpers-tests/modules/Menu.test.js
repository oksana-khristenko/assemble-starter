'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var Menu = require('../../helpers/modules/Menu');
var PageUrl = require('../doubles/modules/PageUrl');
var PageFetcher = require('../doubles/modules/PageFetcher');
var ExternalLink = require('../doubles/modules/ExternalLink');

describe('Menu', function() {

    describe('get', function() {

        describe('external menu item type', function() {

            var url,
                id,
                externalLinkStub,
                externalLink;

            beforeEach(function() {
                url = 'test url';
                id = 'test id';

                externalLinkStub = sinon.stub(ExternalLink.prototype, 'getUrl');

                externalLink = new ExternalLink({});
            });

            afterEach(function() {
                ExternalLink.prototype.getUrl.restore();
            });

            it('should return correct menu when target is NOT provided', function() {
                var data = [
                    {
                        type: 'external',
                        id: id,
                        title: 'External Link'
                    }
                ];

                externalLinkStub.withArgs({id: id}).returns(url);

                var menu = new Menu({
                    data: data,
                    externalLink: externalLink
                });

                var expected = {
                    items: [{
                        url: url,
                        title: 'External Link',
                        target: '_blank'
                    }]
                };

                var actual = menu.get();

                expect(actual).to.deep.equal(expected);
            });

            it('should return correct menu when target is provided', function() {
                var data = [
                    {
                        type: 'external',
                        id: id,
                        title: 'External Link 1',
                        target: 'test target'
                    }
                ];

                externalLinkStub.withArgs({id: id}).returns(url);

                var menu = new Menu({
                    data: data,
                    externalLink: externalLink
                });

                var expected = {
                    items: [{
                        url: url,
                        title: 'External Link 1',
                        target: 'test target'
                    }]
                };

                var actual = menu.get();

                expect(actual).to.deep.equal(expected);
            });
        });

        describe('anchor menu item type', function() {

            it('should return correct menu', function() {
                var data = [
                    {
                        type: 'anchor',
                        anchor: '#test',
                        title: 'Anchor test'
                    }
                ];

                var menu = new Menu({
                    data: data
                });

                var expected = {
                    items: [{
                        url: '#test',
                        title: 'Anchor test'
                    }]
                };

                var actual = menu.get();

                expect(actual).to.deep.equal(expected);
            });

        });

        describe('page menu item type', function() {

            it('should return correct menu', function() {
                var url = 'test url';

                var data = [{
                        type: 'page',
                        pageId: 'test page id',
                        title: 'page test'
                    }];

                var page = {id: data[0].pageId};

                var menu = new Menu({
                    data: data,
                    pageFetcher: new PageFetcher(),
                    pageUrl: new PageUrl()
                });

                var pageUrlStub = sinon.stub(PageUrl.prototype, 'getRootRelativeUrl');
                pageUrlStub.returns(url);

                var expected = {
                    items: [{
                        url: url,
                        title: data[0].title
                    }]
                };

                var actual = menu.get();

                expect(actual).to.deep.equal(expected);
            });

        });

        describe('download menu item type', function() {

            it('should return correct menu', function() {
                var url = '/download/test/test.zip';

                var data = [{
                        type: 'download',
                        file: 'test/test.zip',
                        title: 'page test'
                    }];

                var page = {id: data[0].pageId};

                var menu = new Menu({
                    data: data,
                    pageFetcher: new PageFetcher(),
                    pageUrl: new PageUrl()
                });

                var expected = {
                    items: [{
                        url: url,
                        title: data[0].title
                    }]
                };

                var actual = menu.get();

                expect(actual).to.deep.equal(expected);
            });

        });

    });

});