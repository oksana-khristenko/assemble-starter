'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var Config = require('../../helpers/modules/Config');
var ConfigValidator = require('../doubles/validators/ConfigValidator');

describe('Config', function() {

    var validator;

    beforeEach(function() {
        validator = new ConfigValidator();
    });

    afterEach(function() {
        validator = null;
    });

    describe('get', function() {

        it('should call validateKey() of ConfigValidator with correct arguments', function() {
            var spy = sinon.spy(ConfigValidator.prototype, 'validateKey');

            var config = new Config({
                config: {},
                validator: validator
            });

            config.get('testKey');

            expect(spy.withArgs('testKey')).calledOnce;

            ConfigValidator.prototype.validateKey.restore();
        });

        it('should return correct key value', function() {
            var config = new Config({
                config: {testKey: 'str'},
                validator: validator
            });

            var val = config.get('testKey');

            expect(val).to.equal('str');
        });

        it('should return undefined if key does not exist', function() {
            var config = new Config({
                config: {},
                validator: validator
            });

            var val = config.get('testKey');

            expect(val).to.equal(undefined);
        });

    });

    describe('exists', function() {

        it('should call validateKey() of ConfigValidator with correct arguments', function() {
            var spy = sinon.spy(ConfigValidator.prototype, 'validateKey');

            var config = new Config({
                config: {},
                validator: validator
            });

            config.exists('testKey');

            expect(spy.withArgs('testKey')).calledOnce;

            ConfigValidator.prototype.validateKey.restore();
        });

        it('should return true if config value exists and is string', function() {
            var config = new Config({
                config: {testKey: 'str'},
                validator: validator
            });

            var val = config.exists('testKey');

            expect(val).to.be.true;
        });

        it('should return true if config value exists and is number', function() {
            var config = new Config({
                config: {testKey: 8},
                validator: validator
            });

            var val = config.exists('testKey');

            expect(val).to.be.true;
        });

        it('should return true if config value exists and is boolean true', function() {
            var config = new Config({
                config: {testKey: true},
                validator: validator
            });

            var val = config.exists('testKey');

            expect(val).to.be.true;
        });

        it('should return true if config value exists and is boolean false', function() {
            var config = new Config({
                config: {testKey: false},
                validator: validator
            });

            var val = config.exists('testKey');

            expect(val).to.be.true;
        });

        it('should return false if key does not exist', function() {
            var config = new Config({
                config: {},
                validator: validator
            });

            var val = config.exists('testKey');

            expect(val).to.equal(false);
        });

    });
});