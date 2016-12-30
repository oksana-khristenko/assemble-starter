'use strict';

var expect = require('chai').expect;

var Config = require('../../helpers/modules/Config');

describe('Config', function() {

    describe('get', function() {

        describe('Arguments validation', function() {

            it('should throw ReferenceError if config key is not provided', function() {
                var fn = function(){
                    var config = new Config({});
                    config.get();
                };

                expect(fn).to.throw(ReferenceError, 'config key is undefined');
            });

            it('should throw TypeError if config key is not a string', function() {
                var fn = function(){
                    var config = new Config({});
                    config.get({});
                };

                expect(fn).to.throw(TypeError, 'config key must be a string');
            });

        });

        describe('Return values', function() {

            it('should return correct key value', function() {
                var config = new Config({testKey: 'str'});
                var val = config.get('testKey');

                expect(val).to.equal('str');
            });

            it('should return undefined if key does not exist', function() {
                var config = new Config({});
                var val = config.get('testKey');

                expect(val).to.equal(undefined);
            });

        });
    });
});