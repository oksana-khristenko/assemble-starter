'use strict';

var expect = require('chai').expect;

var TwitterCardSummaryLargeImage = require('../../helpers/modules/TwitterCardSummaryLargeImage');

describe('TwitterCardSummaryLargeImage', function() {

    describe('get', function() {

        describe('Return value', function() {

            describe('twitter card is disabled', function() {

                it('should return false', function() {
                    var config = {
                        twitterCardEnabled: false
                    };

                    var page = {};

                    var twitterCard = new TwitterCardSummaryLargeImage(config, page).get();
                    expect(twitterCard).to.be.false;
                });

            });

            describe('twitter card is enabled', function() {

                it('should return an object', function() {
                    var config = {
                        twitterCardEnabled: true,
                        twitterCardType: 'summary_large_image',
                        twitterUserName: 'test'
                    };

                    var page = {
                        title: 'title',
                        short_summary: 'desc'
                    };

                    var twitterCard = new TwitterCardSummaryLargeImage(config, page).get();
                    expect(twitterCard).to.be.an('object');
                });

                it('should have property "card"', function() {
                    var config = {
                        twitterCardEnabled: true,
                        twitterCardType: 'summary_large_image',
                        twitterUserName: 'test'
                    };

                    var page = {
                        title: 'title',
                        short_summary: 'desc'
                    };

                    var twitterCard = new TwitterCardSummaryLargeImage(config, page).get();
                    expect(twitterCard).to.have.property('card');
                });

                it('should have property "site"', function() {
                    var config = {
                        twitterCardEnabled: true,
                        twitterCardType: 'summary_large_image',
                        twitterUserName: 'test'
                    };

                    var page = {
                        title: 'title',
                        short_summary: 'desc'
                    };

                    var twitterCard = new TwitterCardSummaryLargeImage(config, page).get();
                    expect(twitterCard).to.have.property('card');
                });

                it('should have property "title"', function() {
                    var config = {
                        twitterCardEnabled: true,
                        twitterCardType: 'summary_large_image',
                        twitterUserName: 'test'
                    };

                    var page = {
                        title: 'title',
                        short_summary: 'desc'
                    };

                    var twitterCard = new TwitterCardSummaryLargeImage(config, page).get();
                    expect(twitterCard).to.have.property('title');
                });

                it('should have property "description"', function() {
                    var config = {
                        twitterCardEnabled: true,
                        twitterCardType: 'summary_large_image',
                        twitterUserName: 'test'
                    };

                    var page = {
                        title: 'title',
                        short_summary: 'desc'
                    };

                    var twitterCard = new TwitterCardSummaryLargeImage(config, page).get();
                    expect(twitterCard).to.have.property('description');
                });

            });

        });
    });
});