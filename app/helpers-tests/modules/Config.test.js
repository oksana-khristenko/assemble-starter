'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var Config = require('../../helpers/modules/Config');
var ConfigValidator = require('../doubles/ConfigValidator');

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

            var config = new Config({}, validator);
            config.get('testKey');

            expect(spy.withArgs('testKey')).calledOnce;

            ConfigValidator.prototype.validateKey.restore();
        });

        it('should return correct key value', function() {
            var config = new Config({testKey: 'str'}, validator);
            var val = config.get('testKey');

            expect(val).to.equal('str');
        });

        it('should return undefined if key does not exist', function() {
            var config = new Config({}, validator);
            var val = config.get('testKey');

            expect(val).to.equal(undefined);
        });

    });
});